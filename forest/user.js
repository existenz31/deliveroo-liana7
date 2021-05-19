const Liana = require('forest-express-sequelize');
const models = require('../models/');
const _ = require('lodash');

Liana.collection('user', {
  actions: [
  // {
  //   name: 'Invite user',
  //   endpoint: '/forest/user/actions/invite',
  // }, 
  {
      name: 'Invite user by SMS',
      type: 'single',
      endpoint: '/forest/user/actions/invite-sms',
  }, 
  {
      name: 'Master delete',
      endpoint: '/forest/user/actions/delete',
  }
  ]
});
