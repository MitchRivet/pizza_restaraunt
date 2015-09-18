describe('Order', function() {

    it("creates a new order object", function() {
    var testOrder = new Order(1,"large", 1, 2);

    expect(testOrder.quantity).to.equal(1);
    expect(testOrder.pizza_size).to.equal("large");
    expect(testOrder.veggies).to.equal(1);
    expect(testOrder.meats).to.equal(2);
  });

  it("takes numbers for size, quantity, # of veggie toppings and # of meat toppings", function() {
    var testOrder = new Order(1,"large", 1, 2);
    var price = testOrder.orderPrice();
    expect(price).to.equal(23.50);
    });



});
