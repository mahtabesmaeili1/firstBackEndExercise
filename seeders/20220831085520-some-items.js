"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "study",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "cooking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
