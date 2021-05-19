module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('orderitemchangehistory', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.literal('uuid_generate_v4()'),
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: Sequelize.literal('true'),
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
    },
    itemName: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    notes: {
      type: DataTypes.STRING,
    },
    units: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'orderitemchangehistory',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.orderitem, {
      foreignKey: {
        name: 'order_item_id',
      },
      as: 'orderItem',
    });
  };

  return Model;
};

