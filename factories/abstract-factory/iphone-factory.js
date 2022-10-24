const iPhoneXR = require("./iphone-xr");
const iPhoneXS = require("./iphone-xs");

class iPhoneFactory {
  create(type, serialNum) {
    switch (type) {
      case "iPhone Xr":
        return new iPhoneXR(serialNum);
      case "iPhone Xs":
        return new iPhoneXS(serialNum);
      default: {
        console.log("Desconocido tipo de iPhone ...");
      }
    }
  }
}

module.exports = new iPhoneFactory();
