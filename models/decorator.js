const Decorator = function () {
  this.paintStock = [];
};

Decorator.prototype.addPaintCanToStock = function (paint) {
  this.paintStock.push(paint);
};


// Taxi.prototype.addPassenger = function (passenger) {
//   this.passengers.push(passenger);
// }
module.exports = Decorator;
