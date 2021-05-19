const Liana = require('forest-express-sequelize');
const models = require('../models/');
const _ = require('lodash');

Liana.collection('supplieritem', {
  actions: [
  {
    name: 'Upload Items For Location(s) CSV',
    endpoint: '/forest/supplieritem/actions/import-my-items-data',
    type: 'global',
    fields: [{
      field: 'CSV file',
      description: 'A comma separated values file stores tabular data (numbers and text) in plain text',
      type: 'File',
      isRequired: true
    }]
  },
  ]
});