class User {
  constructor(name, lastname, email) {
    this.id = Date.now().toString();
    this.name = name;
    this.lastname = lastname;
    this.email = email;
  }
}

const users = [];
const save = (user) => {
  users.push(user);
  return user;
};

const getAllUser = () => {
    console.log('inside get all user from models :)');
    return users;
}

module.exports = {
  User,
  save,
  getAllUser
};
