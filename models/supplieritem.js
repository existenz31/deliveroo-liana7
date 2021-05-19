module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('supplieritem', {
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
    name: {
      type: DataTypes.STRING,
    },
    supplierCode: {
      type: DataTypes.STRING,
    },
    validated: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'supplieritem',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.supplier, {
      foreignKey: {
        name: 'supplier_id',
      },
      as: 'supplier',
    });
    Model.belongsTo(models.itemcategory, {
      foreignKey: {
        name: 'category_id',
      },
      as: 'category',
    });
    Model.hasMany(models.supplieritemunit, {
      foreignKey: {
        name: 'supplier_item_id',
      },
      onDelete: 'cascade',
      hooks: true
    });
    Model.belongsToMany(models.locationsupplier, {
      through: models.location_supplier_item,
      onDelete: 'cascade',
    })
  };

  return Model;
};

