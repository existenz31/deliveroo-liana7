module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('order', {
    'issueReported': {
      type: DataTypes.BOOLEAN,
    },
    'deliveryDate': {
      type: DataTypes.DATE,
    },
    'supplierCountryDiallingCode': {
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
    locationName: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.STRING,
    },
    orderReference: {
      type: DataTypes.STRING,
    },
    pdfUrl: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.INTEGER,
    },
    supplierAccountNumber: {
      type: DataTypes.STRING,
    },
    supplierCompanyName: {
      type: DataTypes.STRING,
    },
    supplierContactName: {
      type: DataTypes.STRING,
    },
    supplierEmail: {
      type: DataTypes.STRING,
    },
    supplierNotes: {
      type: DataTypes.STRING,
    },
    supplierPhone: {
      type: DataTypes.STRING,
    },
    orderPlacedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'order',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.locationsupplier, {
      foreignKey: {
        name: 'location_supplier_id'
      },
      as: 'locationSupplier'
    });
    Model.belongsTo(models.location, {
      foreignKey: {
        name: 'location_id',
      },
      as: 'location',
    });
    Model.belongsTo(models.user, {
      foreignKey: {
        name: 'placed_by_id',
      },
      as: 'placedBy',
    });
  };

  return Model;
};

