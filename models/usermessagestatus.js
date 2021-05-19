module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('usermessagestatus', {
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
    unread: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'usermessagestatus',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.message, {
      foreignKey: {
        name: 'message_id',
      },
      as: 'message',
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

