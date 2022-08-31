const express = require("express");
const User = require("./models").user;
const app = express();
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

// by id
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

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
