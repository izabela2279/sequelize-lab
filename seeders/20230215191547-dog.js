'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()
    await queryInterface.bulkInsert('Dogs', [{
      name: 'Timmy',
      breed: 'Lhasa Apso',
      age: 15, 
      createdAt: date,
      updatedAt: date,
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dogs', null, {})
  }
};
