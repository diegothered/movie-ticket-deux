//business logic

function Ticket(selecttitle, selectage, selecttime) {
  this.title = selecttitle;
  this.age = selectage;
  this.time = selecttime;
};

//user interface logic

$(document).ready(function() {

  $("form#input").submit(function(event) {

    event.preventDefault();

    var inputTitle = ($("#title").val());
    var inputAge = ($("#age").val());
    var inputTime = ($("#time").val());

    var newTicket = new Ticket(inputTitle, inputAge, inputTime);

    var price = 0

    if (newTicket.title === "new-release"){
      price += 15;
    } else {
      price += 10;
    }

    if (newTicket.age === "discount"){
      price -= 5
    }

    if (newTicket.time === "matinee"){
      price += 2
    } else {
      price += 5
    }

    $("#show-price").show(price);
    // console.log(price);
  });
});
