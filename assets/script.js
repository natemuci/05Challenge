// formats and gets time to dispaly in header and pulls time to check for background colors
var rightNow = moment().format('LLLL');
var timeCheck = moment().format('k');

// creates selectors for buttons and time display
var saveBtn = $(".saveBtn");
var timeDisplayEl = $("#currentDay");
var clearBtn = $("#clearBtn");

// creates selectors for use with local storage and bgColor
var nineAm = $("#09:00");
var tenAm = $("#10:00");
var elevenAm = $("#11:00");
var twelvePm = $("#12:00");
var onePm = $("#13:00");
var twoPm = $("#14:00");
var threePm = $("#15:00");
var fourPm = $("#16:00");
var fivePm = $("#17:00");
var sixPm = $("#18:00");
var sevenPm = $("#19:00");

// adds current time to header
function displayTime() {
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

$(document).ready(function(){
  loadSave();
  bgColor();
});
// loads previous saves and adds them to the webpage
function loadSave() {
  var load9 = JSON.parse(localStorage.getItem("09:00am"));
  nineAm.val(load9)

}

// changes the back ground color by cycling through int from "#id" and comparing
// to current time, then adding class acordingly
function bgColor(){ 
  $("textarea").each(function(){
    var idCheck = parseInt($(this).attr("id"));
    timeCheck = parseInt(timeCheck);
    if (timeCheck > idCheck) {
      $(this).addClass("past");
    } else if (timeCheck < idCheck){
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  })

}
saveBtn.on("click", function(){
  userInput = $(this).siblings("textarea").val();
  saveTime = $(this).siblings(".time-block").text();
  localStorage.setItem(saveTime, JSON.stringify(userInput));
});

clearBtn.on("click",function(){
  localStorage.clear();
});

// runs function after DOM is ready to execute javascript
  
console.log(nineAm);