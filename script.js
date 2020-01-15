$(document).ready(function() {
  var todoDiv = document.querySelector(".to-do-div");
  var todoInput = document.querySelector("#todo-text");
  var submit = document.querySelector(".submit")

  var todos = []

  $(".submit").on("click", function(){
    //console.log($(this).siblings('.todo-text').val());
    //console.log($(this).parent().attr('id'));

    var time = $(this).parent().attr('id');
    var value = $(this).siblings('.todo-text').val();

    localStorage.setItem(time, value);

    console.log(localStorage);
  });
});

$( ".submit" ).mouseover(function() {
  $(".save-btn").attr("src", "https://img.icons8.com/ios-filled/50/000000/save.png")
});

$( ".submit" ).mouseout(function() {
  $(".save-btn").attr("src", "https://img.icons8.com/ios/50/000000/save.png")
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
