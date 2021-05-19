module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('locationsupplier', {
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
    accountNumber: {
      type: DataTypes.STRING,
    },
    verified: {
      type: DataTypes.BOOLEAN,
    },
    notes: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'locationsupplier',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.location, {
      foreignKey: {
        name: 'location_id',
      },
      as: 'location',
    });
    Model.belongsTo(models.suppliercontact, {
      foreignKey: {
        name: 'supplier_contact_id',
      },
      as: 'supplierContact',
    });
    Model.hasMany(models.order, {
      foreignKey: {
        name: 'location_supplier_id',
        allowNull: true
      },
      as: 'locationSupplier',
      onDelete: 'set null',
      hooks: true
    });
    Model.belongsToMany(models.supplieritem, {
      through: models.location_supplier_item,
      onDelete: 'cascade',
    })
  };

  return Model;
};

