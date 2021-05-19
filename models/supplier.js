module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('supplier', {
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
    deliverooId: {
      type: DataTypes.STRING,
    },
    companyName: {
      type: DataTypes.STRING,
    },
    deliverooApproved: {
      type: DataTypes.BOOLEAN,
    },
    overview: {
      type: DataTypes.STRING,
      validate: {
        len: [0,140]
      }
    },
    countryIsoAlpha3: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'supplier',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.address, {
      foreignKey: {
        name: 'address_id',
      },
      as: 'address',
    });
    Model.hasMany(models.suppliercontact, {
      onDelete: 'cascade',
      hooks: true
    });
    Model.hasMany(models.supplieritem, {
      foreignKey: {
        name: 'supplier_id',
      },
      onDelete: 'cascade',
      hooks: true
    });
    Model.belongsToMany(models.category, {
      through: models.supplier_category,
      onDelete: 'cascade',
    })
  };

  return Model;
};

