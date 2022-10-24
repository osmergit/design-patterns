const Pizza = require("./pizza");
const pepperoni = new Pizza();

pepperoni
  .setBase("Base Integral")
  .setSalsa("Salsa de Tomate")
  .setQueso("Quezo de  Mozzarella")
  .setToppings(["Pepperoni", "Cábano"])
  .print();
