//Luscious Pizarrella House function for ordering pizza delicacy 
var price, crust_price, topping_price;
let total = 0;

// Getpizza Function
function Getpizza(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

// next button function
$(document).ready(function () {
  $("button.proceed").click(function (event) {
    let pname = $(".name option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name='toppings']:checked"), function () {
      ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));

  //Case function for pizza sizes
  switch (psize) {
    case "0":
      price = 0;
      break;
    case "large":
      price = 1200;
      console.log(price);
      break;
    case "medium":
      price = 800;
      console.log("The price is " + price);
      break;
    case "small":
      price = 600;
      console.log(price);
    default:
      console.log("error");
  }

   //Case function for pizza crusts
  switch (pcrust) {
    case "0":
      crust_price = 0;
      break;
    case "Crispy":
      crust_price = 170;
      break;
    case "Stuffed":
      crust_price = 150;
      break;
    case "Flatbread":
      crust_price = 180;
      break;
    default:
      console.log("No price");
  }

  
});