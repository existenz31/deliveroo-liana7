module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('supplier_category', {
    'supplierId': {
      type: DataTypes.UUID,
      field: 'supplier_id',
    },
    'categoryId': {
      type: DataTypes.UUID,
      field: 'category_id',
    }
  }, {
    tableName: 'supplier_category',
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.removeAttribute('id');

  Model.associate = (models) => {
    Model.belongsTo(models.supplier, {
      foreignKey: {
        name: 'supplier_id',
      },
      as: 'supplier',
    });
    Model.belongsTo(models.category, {
      foreignKey: {
        name: 'category_id',
      },
      as: 'category',
    });
  };

  return Model;
};

