const { save, User, getAllUser } = require("../models/user.model.js");
const addNewUser = (name, lastname, email) => {
  const newUser = new User(name, lastname, email);
  return save(newUser);
};

const getAllUsers = () => {
    console.log('Inside get all users from service');
    return getAllUser();
}

module.exports = {
  addNewUser,
  getAllUsers
};
