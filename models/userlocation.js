module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('userlocation', {
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
    defaultLocation: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'userlocation',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.user, {
      foreignKey: {
        name: 'user_id',
      },
      as: 'user',
    });
    Model.belongsTo(models.location, {
      foreignKey: {
        name: 'location_id',
      },
      as: 'location',
    });
  };

  return Model;
};

