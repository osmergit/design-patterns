const _userService = require("./user-service");
const _anotherUserService = require("./user-service");
//se utiliza Singlenton  cada vez que hacemos una conexion a abse de datos
console.log("(1) - Imprimiendo los usuarios de la base de datos: ");
_userService
  .getUsers()
  .forEach(user => console.log(`${user.name}, ${user.lastname}`));

_anotherUserService.addUser({ id: 3, name: "Lucas", lastname: "Diaz" });

console.log("(2) - los usuarios en la bd son: ");
_userService
  .getUsers()
  .forEach(user => console.log(`${user.name}, ${user.lastname}`));
