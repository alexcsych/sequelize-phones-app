'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Processor extends Model {
    static associate (models) {
      Processor.hasMany(models.Phone, {
        foreignKey: {
          name: 'processorId',
          allowNull: false,
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Processor.init(
    {
      model: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
          len: [2, 64],
        },
      },
      manufacturer: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
          len: [2, 64],
        },
      },
      cores: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
        },
      },
    },
    {
      sequelize,
      modelName: 'Processor',
      underscored: true,
    }
  );
  return Processor;
};
