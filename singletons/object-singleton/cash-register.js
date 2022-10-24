// This is a private variable
let efectivo = 0;

const CashRegister = {
  credito(cantidad) {
    efectivo = efectivo + cantidad;
    return efectivo;
  },
  debito(cantidad) {
    if (cantidad <= efectivo) {
      efectivo = efectivo - cantidad;
      return true;
    } else {
      return false;
    }
  },
  total() {
    return efectivo;
  }
};

module.exports = CashRegister;
