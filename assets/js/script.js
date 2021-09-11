    // global 
var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 
var taskIDCounter = 0;
var pageContentEL = document.querySelector("#page-content");

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

  // add task id as a custom attribute
  listItemEl.setAttribute("data-task-id", taskIDCounter);

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");

  // give it a class name
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

var tasksActionsEl = createTaskActions(taskIDCounter);
listItemEl.appendChild(tasksActionsEl);

tasksToDoEl.appendChild(listItemEl);


  listItemEl.appendChild(taskInfoEl);

var taskActionsEL = createTaskActions(taskIDCounter);


  // add entire list item to list 
  tasksToDoEl.appendChild(listItemEl);

   // increase task counter for next unique ID
   taskIDCounter++;
  }; 

  var createTaskActions = function(taskId){
    var actionContainerEL = document.createElement("div");
    actionContainerEL.className = "task-actions";

    // create edit Button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId)

    actionContainerEL.appendChild(editButtonEl);

    // create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete"; 
    deleteButtonEl.className = "btn delete btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEL.appendChild(deleteButtonEl);

    var statusSelectEl =  document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status=change");
    statusSelectEl.setAttribute("data-task-id", taskId)

    var statusChoices = ["To Do", "In Progress", "Completed"];
    for (var i = 0; i < statusChoices.length; i++) {
      // create option element 
      var statusOptionEl = document.createElement("option");
      statusOptionEl.textContent = statusChoices[i];
      statusOptionEl.setAttribute("value", statusChoices);

      // append to select 
      statusSelectEl.appendChild(statusOptionEl);
    }

    actionContainerEL.appendChild(statusSelectEl);

    return actionContainerEL;

  }

  var taskButtonHandler = function(event) {
    // console.log(event.target);
  
    if (event.target.matches("button.btn.delete")) {
      // console.log("you clicked a delete button!");
    }

    
  };

  // Delete function 
  var deleteTask = function(taskId) {
    console.log(taskId);

    // find task list element with task ID value and remove it
    
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    console.log(taskSelected);
    taskSelected.remove();
  };
  
  // // Remove?
  //   if(Event.target.matches("button.btn.delete")) {
  //   var taskID = Event.target.getAttribute("data-task-id");
  //   deleteTask(taskID);
  //   }

  // };

  // event listener to have the form submit with the above function 
formEl.addEventListener("submit", taskFormHandler);


pageContentEL.addEventListener("click", taskButtonHandler);