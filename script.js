$(".submit").on("click", function(){
    //console.log($(this).siblings('.todo-text').val());
    //console.log($(this).parent().attr('id'));

    var time = $(this).parent().attr('id');
    var value = $(this).siblings('.todo-text').val();

    localStorage.setItem(time, value);

    console.log(localStorage);
  });

$(".submit").mouseover(function() {
  $(this).children().attr("src", "https://img.icons8.com/ios-filled/50/000000/save.png")
});

$( ".submit" ).mouseout(function() {
  $(this).children().attr("src", "https://img.icons8.com/ios/50/000000/save.png")
});

$("#9-am .todo-text").val(localStorage.getItem("9-am"));
$("#10-am .todo-text").val(localStorage.getItem("10-am"));
$("#11-am .todo-text").val(localStorage.getItem("11-am"));
$("#12-pm .todo-text").val(localStorage.getItem("12-pm"));
$("#1-pm .todo-text").val(localStorage.getItem("1-pm"));
$("#2-pm .todo-text").val(localStorage.getItem("2-pm"));
$("#3-pm .todo-text").val(localStorage.getItem("3-pm"));
$("#4-pm .todo-text").val(localStorage.getItem("4-pm"));
$("#5-pm .todo-text").val(localStorage.getItem("5-pm"));

var moment = moment();

console.log(moment.toString());

console.log(moment.format("dddd"));

console.log(moment.format("D"))

console.log(moment.format("MMMM"))

console.log(moment.format("YYYY"))

console.log(moment.format("H"))

console.log(moment.format("X"))

console.log(moment.valueOf());

console.log(moment.unix());

var present = moment.startOf('hour');
console.log(present)

console.log(JSON.stringify(moment))



$(".date").text(moment.format("D"))
$(".weekday").text(moment.format("dddd"))
$(".month-and-year").text(moment.format("MMMM YYYY"))

var currentHour = moment.format("H")
// var pastHour = moment.diff(moment(), "hours")
console.log(typeof currentHour)
// console.log(pastHour)

var currentHourNumber = parseInt(currentHour)
console.log(currentHourNumber)

var timeDataIndex = 0;

$(".to-do-div").each(function(){
  timeDataIndex = $(this).children(".time").data("index")
  // console.log(timeDataIndex)
})

console.log(timeDataIndex)

var displayTime = $(".time");

if(currentHourNumber < timeDataIndex){
  console.log("future!")
  displayTime.css({"color": "green"})
}

if(currentHourNumber > timeDataIndex){
  console.log("past!")
  displayTime.css({"color": "grey"})
}

if(currentHourNumber === timeDataIndex){
  console.log("present!")
  displayTime.css({"color": "black"})
}




