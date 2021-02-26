$(document).ready(function () {
  var today = moment()
  $('#currentDay').text(today.format("dddd, MMM Do h:mm a"));

  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    console.log(value);

    var time = $(this).siblings(".hour").text();
    localStorage.setItem(time, value);
  });

  localStorage.getItem("9AM");
  localStorage.getItem("10AM");
  localStorage.getItem("11AM");
  localStorage.getItem("12PM");
  localStorage.getItem("1PM");
  localStorage.getItem("2PM");
  localStorage.getItem("3PM");
  localStorage.getItem("4PM");
  localStorage.getItem("5PM");

//   var events = JSON.parse(localStorage.getItem("9AM"));
});
