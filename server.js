const express = require("express");
const User = require("./models").user;
const TodoList = require("./models").todolist;
const TodoItem = require("./models").todoitem;

const app = express();
app.use(express.json()); //parse the body
const PORT = 4000;
//all the characters
app.get("/users", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//by id
app.get("/user/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const theUser = await User.findByPk(userId);
    res.send(theUser);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

app.post("/signup", async (req, res, next) => {
  try {
    const { email, name } = req.body;
    const newUser = await User.create({ name, email });
    res.send(newUser);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// http :4000/signup name=Test email=test

// by id and include relation
app.get("/users/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const theUser = await User.findByPk(userId, {
      include: { model: TodoList, include: [TodoItem] },
    });
    res.send(theUser);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// app.post("/echo", (req, res) => {
//   res.json(req.body);
// });

//update a user
//0 get the id from params
// 1  get the info from body
//2 find the user to update
//3 update the user
// 4 send the response
app.patch("/user/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;
    const userToUpdate = await User.findByPk(id);
    const updated = await userToUpdate.update({ name, address });
    res.send(updated);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
// tuye terminal injuri neveshte mishe requeste >  http PATCH :4000/user/2 name=Mahtab

//delet a user
app.delete("/user/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const userToDelete = await User.findByPk(id);
    await userToDelete.destroy();
    res.send("user teminated");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
