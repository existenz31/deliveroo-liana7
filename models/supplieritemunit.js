module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('supplieritemunit', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'supplieritemunit',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.itemunit, {
      foreignKey: {
        name: 'item_unit_id',
      },
      as: 'itemunit',
    });
    Model.belongsTo(models.supplieritem, {
      foreignKey: {
        name: 'supplier_item_id',
      },
      as: 'supplieritem',
    });
  };

  return Model;
};

