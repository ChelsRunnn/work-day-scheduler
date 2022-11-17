// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('MMMM D, YY'))

  var time = dayjs().format('h:mm a')
  // setInterval(function () {
  // var time = dayjs().format('h:mm a');
  $('#currentTime').text(time);
  // }, 10000)

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var activityInput = $("textarea")
  // var saveButton = $("saveBtn")
  // var savedActivities = JSON.parse(localStorage.getItem("savedActivities"))

  // saveButton.on("click", function(event) {
  //   event.preventDefault();

  //   var items = activityInput.value

  //   savedActivities.push(items);

  //   localStorage.setItem("savedActivities", JSON.stringify(savedActivities);)
  // })
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // if ($(".hour").text() == time) {
  //   var row = $(".row")
  //   row.attr("class", "present")
  // }
  var currentHour = dayjs().format("H");
  console.log(currentHour);

  var hourBlocks = $(".hour");
  console.log(hourBlocks);
  var description =$("description")

  // FOR loop to check each hour & read text content in console log
  for (var i = 0; i < hourBlocks.length; i++) {
    var someHour = hourBlocks[i];
    // console.log($(someHour).text());
    console.log($(someHour).attr("data-hourValue"));
    // var row = $(".row")
    var color = $(".description")

  //   if ($(someHour).attr('data-hourValue') < currentHour) {
  //     $(color).attr("class", "past");
  //   } else if ($(someHour).attr('data-hourValue') > currentHour) {
  //     $(color).attr("class", "future");
  //   } else {
  //     $(color).attr("class", "present");
  //   }
  }


  // ?convention pulled from act10 $('input[name="shopping-input"]').val();
  // var hourValue = $('div[data="hourValue"]').text();
  // console.log($(hourValue).text());


  // Variable for the data-hour numberic value (24h clock)
  // var hourValue = $(dataset.attr("hourValue"));
  //   console.log(hourValue);



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
});
