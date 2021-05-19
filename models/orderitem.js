module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('orderitem', {
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
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    itemName: {
      type: DataTypes.STRING,
    },
    units: {
      type: DataTypes.STRING,
    },
    supplierCode: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.STRING,
    },
    notesSnapshot: {
      type: DataTypes.STRING,
    },
    priceSnapshot: {
      type: DataTypes.DOUBLE,
    },
    quantitySnapshot: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'orderitem',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.order, {
      foreignKey: {
        name: 'order_id',
      },
      as: 'order',
    });
    Model.belongsTo(models.supplieritem, {
      foreignKey: {
        name: 'supplier_item_id',
      },
      as: 'supplierItem',
    });
    Model.belongsTo(models.itemunit, {
      foreignKey: {
        name: 'selected_unit_id',
      },
      as: 'selectedUnit',
    });
  };

  return Model;
};

