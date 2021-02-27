//sets todays date when the user opens calendar
$(document).ready(function () {
  var today = moment()
  $('#currentDay').text(today.format("dddd, MMM Do h:mm a"));

//stores information in local storage after clicking save button
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    console.log(value);

    var time = $(this).siblings(".hour").text();
    localStorage.setItem(time, value);
  });

  //users information stays on screen aftre refreshing
  $(".9AM").val(localStorage.getItem("9AM"));
  $(".10AM").val(localStorage.getItem("10AM"));
  $(".11AM").val(localStorage.getItem("11AM"));
  $(".12PM").val(localStorage.getItem("12PM"));
  $(".1PM").val(localStorage.getItem("1PM"));
  $(".2PM").val(localStorage.getItem("2PM"));
  $(".3PM").val(localStorage.getItem("3PM"));
  $(".4PM").val(localStorage.getItem("4PM"));
  $(".5PM").val(localStorage.getItem("5PM"));

});
