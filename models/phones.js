'use strict';
const { CURRENT_YEAR } = require('../constants');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class phones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  phones.init(
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
      year_of_manufacture: {
        type: DataTypes.INTEGER,
        validate: {
          min: 2000,
          max: CURRENT_YEAR,
        },
      },
      ram_size: {
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
      processor: {
        type: DataTypes.STRING(64),
        validate: {
          len: [2, 64],
        },
      },
      screen_size: {
        type: DataTypes.FLOAT,
        validate: {
          min: 0,
        },
      },
      nfc: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'phones',
      underscored: true,
    }
  );
  return phones;
};
