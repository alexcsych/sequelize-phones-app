'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'phones',
      [
        {
          model: 'Galaxy M33',
          brand: 'Samsung',
          year_of_manufacture: 2020,
          ram_size: 6,
          processor: 'Samsung Exynos 1280',
          screen_size: 6.6,
          nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          model: 'Galaxy T15',
          brand: 'Samsung',
          year_of_manufacture: 2018,
          ram_size: 4,
          processor: 'Qualcomm Snapdragon 8 Gen 2',
          screen_size: 6.1,
          nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          model: 'iPhone 13',
          brand: 'Apple',
          year_of_manufacture: 2021,
          ram_size: 6,
          processor: 'Apple A15 Bionic',
          screen_size: 6.1,
          nfc: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          model: 'С21 Plus',
          brand: 'Nokia',
          year_of_manufacture: 2009,
          ram_size: 2,
          processor: 'Unisoc SC9863Ac',
          screen_size: 6.517,
          nfc: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          model: 'С9',
          brand: 'Nokia',
          year_of_manufacture: 2008,
          ram_size: 2,
          processor: 'Unisoc SC9863A',
          screen_size: 6.4,
          nfc: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phones', null, {});
  },
};
