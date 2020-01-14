var submit = document.querySelector("#submit")

submit.addEventListener("submit", function(){
    console.log("submitted")
})

var toDo = localStorage.getItem("toDo");

var todoField = document.querySelector(".to-do-field")

localStorage.setItem("toDo", todoField.value)