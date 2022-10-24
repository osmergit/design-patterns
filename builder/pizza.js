
//Builder
// Constructor Casa Pizza Clase que contine Metodos 
//This hace referencia al objeto que bamos a crear
class Pizza {

  //Metodos o propiedades son los elementos que conforman una pizza por ejemplo
  setBase(base) {
    this.base = base;
    return this;
  }

  setSalsa(salsa) {
    this.salsa = salsa;
    return this;
  }

  setQueso(queso) {
    this.queso = queso;
    return this;
  }

  setToppings(toppings) {
    this.toppings = toppings;
    return this;
  }
 
  //Metodo print imprime la clase Pizza
  print() {
    console.log(this);
  }
}

module.exports = Pizza;
