'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Dogs', 'breed', { type: Sequelize.STRING })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Dogs', 'breed')
  }
};
