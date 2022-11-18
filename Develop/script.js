// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('MMMM D, YYYY'))

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
  // * This section works! save button clicks can disinguish which row/botton is clicked
  var saveButton = $(".saveBtn")
  console.log(saveButton);
  // var activityInput = $("textarea")

  saveButton.on("click", function (event) {
    console.log($(event.target).parent().children().eq(0).attr("data-hourValue"));
    var activityInput = $(event.target).parent().children().eq(1).val();
    var activityHour = $(event.target).parent().children().eq(0).attr("data-hourValue");
    localStorage.setItem(activityHour, activityInput);

   
    saveEntry()

  })

  function saveEntry() {
    console.log("hit");
    // console.log(activityInput.value);
    // console.log(items);
  }



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // * This section works!
  var currentHour = parseInt(dayjs().format("H"));
  // console.log(currentHour);

  var hourBlocks = $(".hour");
  // console.log(hourBlocks);
  var textarea = $(".description");

  // FOR loop to check each hour & read text content in console log
  for (var i = 0; i < hourBlocks.length; i++) {
    var someHour = hourBlocks[i];
    // console.log($(someHour).text());
    // console.log($(someHour).attr("data-hourValue"));
    var color = $(".description");
    // console.log(currentHour);
    // console.log($(someHour).attr("data-hourValue"));
    var hourBlockNumeric = parseInt($(someHour).attr("data-hourValue"))
    // console.log(hourBlockNumeric);
    currentHour = 13; 
    // console.log(textarea);

    if (hourBlockNumeric < currentHour) {
      $(textarea[i]).addClass("past");
      // console.log("hit");
    } else if (hourBlockNumeric > currentHour) {
      $(textarea[i]).addClass("future");
      // console.log("greater");
    } else {
      $(textarea[i]).addClass("present");
      // console.log("same");
    }
    }





  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // acting as an array, index starts at 0
    var textAreaEl = $(".description");
    console.log(textAreaEl);

  for (var i = 9; i < 20; i++) {
    // var element = array[i];
    console.log(localStorage.getItem([i]));
    var note = localStorage.getItem([i]);

    if (note !== null) {
      // textAreaEl[i-9].value
    }

  }
  // localStorage.getItem("9")
  // localStorage.getItem("10")
  // localStorage.getItem("11")
  // localStorage.getItem("12")
  // localStorage.getItem("13")
  // localStorage.getItem("14")
  // localStorage.getItem("15")
  // localStorage.getItem("16")
  // localStorage.getItem("17")
  // localStorage.getItem("18")


});


