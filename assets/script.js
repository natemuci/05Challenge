var rightNow = moment().format('LLLL');
var timeCheck = moment().format('k')

var timeDisplayEl = $("#currentDay");
var clearBtn = $("#clearBtn");

var nineAm = $("#09:00")
var tenAm = $("#10:00")
var elevenAm = $("#11:00")
var twelvePm = $("#12:00")
var onePm = $("#13:00")
var twoPm = $("#14:00")
var threePm = $("#15:00")
var fourPm = $("#16:00")
var fivePm = $("#17:00")
var sixPm = $("#18:00")
var sevenPm = $("#19:00")

var count = true;

function displayTime() {
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);

 
  
 
// if (timeCheck > )
   // backgroundColor:"grey"
// else (timeCheck < )
    // backgroundColor:"Green"
// else(timeCheck ==)
    // backgroundColor:"red"
function bGColor(){ 
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
bGColor();
