module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('userorder', {
    'modifiedUnread': {
      type: DataTypes.BOOLEAN,
    },
    'unread': {
      type: DataTypes.BOOLEAN,
    },
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
    conversationResolved: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'userorder',
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
    Model.belongsTo(models.user, {
      foreignKey: {
        name: 'user_id',
      },
      as: 'user',
    });
  };

  return Model;
};

