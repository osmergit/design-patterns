const firstCash = require("./cash-register");
const secondCash = require("./cash-register");

firstCash.credito(20);
firstCash.credito(30);

secondCash.credito(20);

console.log(`El Importe  total es: ${firstCash.total()}`);
//ingresos
firstCash.debito(20);
console.log(`Importe Total en efectivo: ${secondCash.total()}`);
