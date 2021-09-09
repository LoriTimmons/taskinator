    // global 
var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

//function 
var taskFormHandler = function(event) { 
  // prevents the browser from refreshing the page so the tasks stay as li
  event.preventDefault();

  // created a var to get the HTML element / attribute and store the correct value. 
  // Looked at the JS object to see where we needed to get that task to display 
  // this is why we added the ".value" to the end of the selector 
  var taskNameInput = document.querySelector("input[name = 'task-name']").value;
  var taskTypeInput = document.querySelector("select[name = 'task-type']").value;

// code validation: check if input values are empty strings
if (!taskNameInput || !taskTypeInput) {
  alert("You need to fill out the task form!");
  return false;
}

// Will reset the fields in the function 
formEl.reset(); 

  // package up data as an object 
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  // send it as an argument to createTaskEL
  createTaskEL(taskDataObj);
}

var createTaskEL = function(taskDataObj) {

  // create list item
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");

  // give it a class name
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";


  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list 
  tasksToDoEl.appendChild(listItemEl);
  }; 

  // event listener to have the form submit with the above function 
formEl.addEventListener("submit", taskFormHandler);
