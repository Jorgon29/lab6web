const { addNewUser, getAllUsers } = require("../services/user.service.js");
const addUserController = (req, res) => {
  try {
    const { name, lastname, email } = req.body;
    const user = addNewUser(name, lastname, email);
    console.log('Inside home controller');
    res.render("home.pug", { user });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
};
const showForm = (req, res) => {
  res.render("form.pug");
};

const allUserController = (req, res) => {
    try {
        console.log('hello, inside all user controller');
        const users = getAllUsers();
        res.render('allUsers.pug', { users });
    } catch (error) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
  addUserController,
  showForm,
  allUserController
};
