const P = require('bluebird');
const express = require('express');
const router = express.Router();
const Liana = require('forest-express-sequelize');
// const parseDataUri = require('parse-data-uri');
// const csv = require('csv');
// const uuidv4 = require('uuid/v4');
const models = require('../models');
var request = require('request');
// New Permissions Manager
const { PermissionMiddlewareCreator } = require('forest-express-sequelize');
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('supplieritem');

const API_URL = process.env.API_URL;

router.post('/supplieritem/actions/import-my-items-data', permissionMiddlewareCreator.smartAction(),
  (req, res) => {
  	var options = {
	  url: API_URL + '/admin/supplieritem/create_my_items',
	  headers: {
	    'Secret-Key': process.env.SECRET_KEY
	  },
	  method: 'POST',
	  form: JSON.stringify({'data': req.body.data.attributes.values['CSV file']})
	};

	//request(options).then(res.send({success: "Data is being processed for uploading My Items. Come back in few minutes."}));
	// request is not promised based, but callback based
	request(options, (error, response, body) => {
		res.send({success: "Data is being processed for uploading My Items. Come back in few minutes."});
	});
});

module.exports = router;