const _db = require("./db");

class UserService {
  addUser(user) {
    _db.push(user);
    console.log("El usuario fue adicionado con exito");
  }

  getUsers() {
    return _db;
  }

  getUserById(userId) {
    return _db.find(user => user.id === userId);
  }
}

module.exports = new UserService();
