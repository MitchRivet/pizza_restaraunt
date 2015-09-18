// quantity, toppings, and size
// properties of the pizza object? or separate objects?
// I think these are properties of the order object

// have a veggies property and a meat property
// you can shove items into the array from your form, count the items in the array, and multiple by veggie/meat price


function Order(quantity, pizza_size, veggies, meats) {
    this.quantity = quantity;
    this.pizza_size = pizza_size;
    this.veggies = veggies;
    this.meats = meats;

};

Object.prototype.orderPrice = function () {
    var meatPrice = 1.50;
    var veggiePrice = .50;

    // pizza size 1 corresponds to large, 2 to medium, 3 small
    if (this.pizza_size == 1) {
        var size = 20.00;
    } else if (this.pizza_size == 2) {
        var size = 15.00;
    } else if (this.pizza_size == 3) {
        var size = 10.00;
    }

    var final_price = this.quantity * size + (this.veggies * veggiePrice + this.meats * meatPrice);
    return final_price;
}
//
// $(document).ready(function() {
//
// });
