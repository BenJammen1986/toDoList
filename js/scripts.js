//business logic

//sample object Task
// var task1 = {
//   name: "",
//   dueDate: //calendar form input,
//   note: "",
//   typeOfTask: selector
// };

//task constructor
var newTask = function (name, dueDate, note, typeOfTask){
  this.nameOfTask = name;
  this.taskDueDate = dueDate;
  this.taskNote = note;
  this.taskType = typeOfTask;
}


$(document).ready(function () {
  $("#toDoList").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#tasks").val();

    // error checking for blank field
    if (inputtedTask === "") {
      alert("You forgot your task!")
    }
    else {
      $("#displayList").append("<h3>"+inputtedTask+"</h3>");

        $("#toDoList").trigger("reset");
    }
  });
});
