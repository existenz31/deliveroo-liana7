module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('alembic_version', {
    versionNum: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  }, {
    tableName: 'alembic_version',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

