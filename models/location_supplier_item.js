module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('location_supplier_item', {
    'supplieritemId': {
      type: DataTypes.UUID,
      field: 'supplier_item_id',
    },
    'locationsupplierId': {
      type: DataTypes.UUID,
      field: 'location_supplier_id',
    }
  }, {
    tableName: 'location_supplier_item',
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.removeAttribute('id');

  Model.associate = (models) => {
    Model.belongsTo(models.supplier, {
      foreignKey: {
        name: 'supplier_item_id',
      },
      as: 'supplieritem',
    });
    Model.belongsTo(models.category, {
      foreignKey: {
        name: 'location_supplier_id',
      },
      as: 'locationsupplier',
    });
  };

  return Model;
};

