//business logic

//sample object Task
// var task1 = {
//   name: "",
//   dueDate: //calendar form input,
//   note: "",
//   typeOfTask: selector
//      taskID
// };

//task constructor
var Task = function (name, dueDate, note, typeOfTask, count){
  this.nameOfTask = name;
  this.taskDueDate = dueDate;
  this.taskNote = note;
  this.taskType = typeOfTask;
  this.taskCount = count;
}

Task.prototype.completeDisplay = function () {
  return '<div class="panel panel-info taskItem"><div class="panel-heading"><h1 class="panel-title">'

  +this.nameOfTask+'<button class="btn btn-default btn-success btn-sm" id='+this.nameOfTask+">Remove</button>"+"</h1></div>"+'<div class="panel-body"><ul>'+'<li class="bg-alert">Due date is '+this.taskDueDate+"</li>"+"<li> "+this.taskNote+"</li>"+"<li>This is for "+this.taskType+"</li></ul>"
}

//global variables
var taskNumber = 1;

$(document).ready(function () {
  $("#toDoList").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#tasks").val();
    var inputtedDate = $("input#dueDate").val();
    var inputtedNotes = $("input#notes").val();
    var inputtedType = $("#taskType").val();

    var newTask = new Task(inputtedTask, inputtedDate, inputtedNotes, inputtedType, taskNumber);
    taskNumber++;

  $("#displayList").append(newTask.completeDisplay());

  $("button.btn-sm").click(function(){
    var target = $(this).attr("id");
    $("#"+target).parents(".taskItem").hide();
 });

    $("#toDoList").trigger("reset");
  });
});
