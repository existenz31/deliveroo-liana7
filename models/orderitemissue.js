module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('orderitemissue', {
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
    type: {
      type: DataTypes.INTEGER,
    },
    notes: {
      type: DataTypes.STRING,
    },
    imageName: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'orderitemissue',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.orderitem, {
      foreignKey: {
        name: 'order_item_id',
      },
      as: 'orderItem',
    });
    Model.belongsTo(models.user, {
      foreignKey: {
        name: 'raised_by_id',
      },
      as: 'raisedBy',
    });
  };

  return Model;
};

