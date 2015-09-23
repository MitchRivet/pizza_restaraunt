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

$(document).ready(function() {
    var veggies_array = [];
    var meats_array = [];

    $('#spinach').change(function() {
        var spinach = $("#spinach").val();
        veggies_array.push(spinach)
    });

    $('#olives').change(function() {
        var olives = $("#olives").val();
        veggies_array.push(olives)
    });

    $('#artichoke').change(function() {
        var artichoke = $("#artichoke").val();
        veggies_array.push(artichoke)

    });

    $('#pepperoni').change(function() {
        var pepperoni = $("#pepperoni").val();
        meats_array.push(pepperoni)
    });

    $('#sausage').change(function() {
        var sausage = $("#sausage").val();
        meats_array.push(sausage)
    });

    $('#chicken').change(function() {
        var chicken = $("#chicken").val();
        meats_array.push(chicken)

    });

    $(".btn").click(function() {
        var quantity = $("#quantity").val();

        var size = $("#pizza_size").val();

        console.log(meats_array);
        countV = 0;
        console.log(countV);
        for (var x in veggies_array) {

                countV++

        }

        console.log(countV);

        countM = 0;
        console.log(countM);
        for (var x in meats_array) {
                countM++
        }

        console.log(countM);

        var order = new Order(quantity, size, countV, countM);
        var order_price = order.orderPrice();

        console.log(order);

        $("#show-price").text(order_price - 2);

        // for (var i=0; i<veggies_array.length; i++) {
        //     if i
        // }



    });
});
