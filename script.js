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

  //Function for pizza toppings 
  let topping_value = ptopping.length * 80;
  console.log("toppins value" + topping_value);

  if ((psize == "0") && (pcrust == "0")) {
    console.log("nothing selected");
    $("button.proceed").show();
    $("#information").show();
    $("div.select").hide();
    alert("Please select your pizza delicacy flavor, size, crust and toppings of your choice!");
  } else {
    $("button.proceed").hide();
    $("#information").hide();
    $("div.choise").slideDown(1000);
  }

  total = price + crust_price + topping_value;
  console.log(total);
  let checkoutTotal = 0;
  checkoutTotal = checkoutTotal + total;

  $("#pizzaname").html($(".name option:selected").val());
  $("#pizzasize").html($("#size option:selected").val());
  $("#pizzacrust").html($("#crust option:selected").val());
  $("#pizzatopping").html(ptopping.join(", "));
  $("#totals").html(total);

  // Add pizza button function
  $("button.addPizza").click(function () {
    let pname = $(".name option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name='toppings']:checked"), function () {
      ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));
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
    let topping_value = ptopping.length * 80;
    console.log("toppins value" + topping_value);
    total = price + crust_price + topping_value;
    console.log(total);

    checkoutTotal = checkoutTotal + total;
    console.log(checkoutTotal);
 //  creating a new constractor function for new user to input values
 var newOrder = new Getpizza(pname, psize, pcrust, ptopping, total);

 $("#ordersmade").append('<tr><td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
 console.log(newOrder);

});
// Confirm button function
$("button#checkout").click(function () {
 $("button#checkout").hide();
 $("button.addPizza").hide();
 $("button.deliver").slideDown(1000);
 $("#addedprice").slideDown(1000);
 console.log("Your total bills is Ksh. " + checkoutTotal);
 $("#pizzatotal").append("Your bill is Ksh. " + checkoutTotal);
});

// Get delivery button function
$("button.deliver").click(function () {
  $(".pizzatable").hide();
  $(".choise h2").hide();
  $(".delivery").slideDown(1000);
  $("#addedprice").hide();
  $("button.deliver").hide();
  $("#pizzatotal").hide();
  let deliveryamount = checkoutTotal + 100;
  console.log("You will pay Ksh. " + deliveryamount + " upon delivery");
  $("#totalbill").append("Your bill plus delivery fee is: " + deliveryamount);
 });
 
 //Order now! button function
 $("button#final_order").click(function (event) {
  event.preventDefault();
 
  $("#pizzatotal").hide();
  $(".delivery").hide();
  $("button#final_order").hide();
  let deliveryamount = checkoutTotal + 100;
  console.log("Final Bill is: " + deliveryamount);
  let person = $("input#name").val();
  let phone = $("input#phone").val();
  let location = $("input#location").val();
 
  if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {
 
    $("#finaltext").append(person + ", We have recieved your pizza delicacy order and it will be delivered to you at " + location + ". Prepare Ksh. " + deliveryamount);
    $("#totalbill").hide();
    $("#finatext").slideDown(1200);
  } else {
    alert("Please fill in your pizza delicacy delivery details!");
    $(".delivery").show();
    $("button#final_order").show();
  }
 });
 event.preventDefault();
 });   
});