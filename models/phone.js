'use strict';
const { CURRENT_YEAR } = require('../constants');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate (models) {
      Phone.belongsTo(models.Processor, {
        foreignKey: 'processorId',
      });
    }
  }
  Phone.init(
    {
      model: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
          len: [2, 64],
        },
      },
      brand: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
          len: [2, 64],
        },
      },
      yearOfManufacture: {
        type: DataTypes.INTEGER,
        validate: {
          min: 2000,
          max: CURRENT_YEAR,
        },
      },
      ramSize: {
        type: DataTypes.INTEGER,
        validate: {
          min: 2,
          isEven (value) {
            if (value % 2 !== 0) {
              throw new Error('Only even values are allowed!');
            }
          },
        },
      },
      screenSize: {
        type: DataTypes.FLOAT,
        validate: {
          min: 0,
        },
      },
      nfc: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Phone',
      underscored: true,
    }
  );
  return Phone;
};
