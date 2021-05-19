const P = require('bluebird');
const express = require('express');
const router = express.Router();
const Liana = require('forest-express-sequelize');
const models = require('../models');
var request = require('request');
// New Permissions Manager
const { PermissionMiddlewareCreator } = require('forest-express-sequelize');
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('user');

const API_URL = process.env.API_URL;

router.post('/user/actions/invite', permissionMiddlewareCreator.smartAction(), async (req, res) => {
    const userId = req.body.data.attributes.ids[0];
    const user = await models.user.findByPk(userId);
    const userCognitoId = user.cognitoId;

    if (userCognitoId != null){
        res.status(400).send({ error: 'The user has already been sent an invite!' });
    } else {
        var options = {
          url: API_URL + '/admin/user/invite',
          headers: {
            'Secret-Key': process.env.SECRET_KEY
          },
          method: 'POST',
          form: JSON.stringify({'user_id': userId})
        };

        // request(options).then(res.send({
        //     success: "User has been invited. Please refresh the page."
        // }));
        // request is not promised based, but callback based
        request(options, (error, response, body) => {
          res.send({success: "User has been invited. Please refresh the page."});
        });        
    }
});

router.post('/user/actions/delete', Liana.ensureAuthenticated, async (req, res) => {
    const userId = req.body.data.attributes.ids[0];

    var options = {
      url: API_URL + '/admin/user/delete',
      headers: {
        'Secret-Key': process.env.SECRET_KEY
      },
      method: 'POST',
      form: JSON.stringify({'user_id': userId})
    };

    // request(options).then(res.send({
    //     success: "User has been deleted."
    // }));
	// request is not promised based, but callback based
	request(options, (error, response, body) => {
		res.send({success: "User has been deleted."});
	});    

});

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
//const client = require('twilio')(accountSid, authToken);

router.post('/user/actions/invite-sms', permissionMiddlewareCreator.smartAction(), async (req, res) => {
  const userId = req.body.data.attributes.ids[0];
  const user = await models.user.findByPk(userId);
  const userCognitoId = user.cognitoId;

  if (userCognitoId != null){
      res.status(400).send({ error: 'The user has already been sent an invite!' });
  } else {
    
    client.messages
      .create({
         body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
         from: '+15017122661',
         to: user.phone // '+15558675310'
       })
      .then(message => {
        console.log(message.sid)
        res.send({success: "User has been invited. Please refresh the page."});
      });

  }
});

module.exports = router;