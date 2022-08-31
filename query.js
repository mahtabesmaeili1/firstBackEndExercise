const User = require("./models").user;
const Todo = require("./models").todoItem;
const getAllUsers = async () => {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const users = await User.findAll();
    console.log("do i get users?", users);
  } catch (e) {
    console.log(e.message);
  }
};

//getAllUsers();

// get a user by id
const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
};
//getUserById(2);

//find true items for important

const getImportant = async () => {
  try {
    const userss = await Todo.findAll({ where: { important: true } });
    console.log(" do i get users?", userss);
  } catch (e) {
    console.log(e.message);
  }
};
//getImportant();

//creat user
const createUser = async (name, email, phone, password) => {
  try {
    const newUser = await User.create({
      name: name,
      email: email,
      phone: phone,
      password: password,
    });
    console.log(newUser);
  } catch (e) {
    console.log(e.message);
  }
};
// createUser("mahtab", "mahtabesmaeilii13@gmail.com", "0648391204", "mahtab123");

// how to delete a user
const deleteUser = async (id) => {
  try {
    const theUser = await User.findByPk(id);
    console.log("i found the user", theUser);
    await theUser.destroy();
    console.log(" user deleted.");
  } catch (e) {
    console.log(e.message);
  }
};
// deleteUser(3);
