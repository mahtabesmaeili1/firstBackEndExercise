"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "test",

          important: true,
          deadline: "tomorrow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "homework",

          important: false,
          deadline: "today",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
