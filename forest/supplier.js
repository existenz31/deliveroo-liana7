const Liana = require('forest-express-sequelize');
const models = require('../models/');
const _ = require('lodash');

Liana.collection('supplier', {
  actions: [
  {
    name: 'Upload Suppliers',
    endpoint: '/forest/supplier/actions/import-supplier',
    type: 'global',
    fields: [{
      field: 'CSV file',
      description: 'A comma separated values file stores tabular data (numbers and text) in plain text',
      type: 'File',
      isRequired: true
  }]
}]});