'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      year_of_manufacture: {
        type: Sequelize.INTEGER,
      },
      ram_size: {
        type: Sequelize.INTEGER,
      },
      screen_size: {
        type: Sequelize.FLOAT,
      },
      nfc: {
        type: Sequelize.BOOLEAN,
      },
      processor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'processors',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  },
};
