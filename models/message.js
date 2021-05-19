module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('message', {
    'urlExpires': {
      type: DataTypes.DATE,
    },
    'preSignedUrl': {
      type: DataTypes.STRING,
    },
    'attributes': {
      type: DataTypes.STRING,
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
    subject: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
    awsMessageId: {
      type: DataTypes.STRING,
    },
    imageName: {
      type: DataTypes.STRING,
    },
    sender: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'message',
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
  };

  return Model;
};

