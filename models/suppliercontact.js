module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('suppliercontact', {
    'countryDiallingCode': {
      type: DataTypes.STRING,
    },
    'validEmail': {
      type: DataTypes.BOOLEAN,
    },
    'defaultDetails': {
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
    contactName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter an email.'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'suppliercontact',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.supplier, {
      foreignKey: {
        name: 'supplier_id',
      },
      as: 'supplier'
    });
    Model.hasMany(models.locationsupplier, {
      foreignKey: {
        name: 'supplier_contact_id',
      },
      onDelete: 'cascade', 
      hooks: true
    });
  };

  return Model;
};

