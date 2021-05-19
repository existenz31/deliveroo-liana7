// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.literal('uuid_generate_v4()'),
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: Sequelize.literal('true'),
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    firstName: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    cognitoId: {
      type: DataTypes.UUID,
    },
    jobTitle: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a phone number.'
        }
      }
    },
    profileComplete: {
      type: DataTypes.BOOLEAN,
    },
    type: {
      type: DataTypes.INTEGER,
    },
    notificationsEnabled: {
      type: DataTypes.BOOLEAN,
    },
    countryDiallingCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a country dialling code.'
        }
      }
    },
    timezone: {
      type: DataTypes.STRING,
      defaultValue: 'UTC'
    },
  }, {
    tableName: 'user',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  User.associate = (models) => {
    User.belongsTo(models.company, {
      foreignKey: {
        name: 'companyIdKey',
        field: 'company_id',
      },
      as: 'company',
    });
    User.hasMany(models.usermembership, {
      foreignKey: {
        name: 'attendedByIdKey',
        field: 'attended_by_id',
      },
      as: 'attendedByUsermemberships',
    });
    User.hasMany(models.notificationdevice, {
      foreignKey: {
        name: 'userIdKey',
        field: 'user_id',
      },
      as: 'notificationdevices',
    });
    User.hasMany(models.userlocation, {
      foreignKey: {
        name: 'userIdKey',
        field: 'user_id',
      },
      as: 'userlocations',
    });
    User.hasMany(models.userorder, {
      foreignKey: {
        name: 'userIdKey',
        field: 'user_id',
      },
      as: 'userorders',
    });
    User.hasMany(models.supplieritem, {
      foreignKey: {
        name: 'createdByIdKey',
        field: 'created_by_id',
      },
      as: 'createdBySupplieritems',
    });
    User.hasMany(models.order, {
      foreignKey: {
        name: 'placedByIdKey',
        field: 'placed_by_id',
      },
      as: 'placedByOrders',
    });
  };

  return User;
};
