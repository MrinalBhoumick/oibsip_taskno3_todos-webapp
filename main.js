document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("add-button");
    var todoInput = document.getElementById("todo-input");
    var todoList = document.getElementById("todo-list");
  
    addButton.addEventListener("click", function() {
      var taskText = todoInput.value;
      if (taskText.trim() !== "") {
        var taskElement = document.createElement("li");
        taskElement.innerHTML = '<span class="task">' + taskText + '</span><button class="delete-button">Delete</button>';
        todoList.appendChild(taskElement);
        todoInput.value = "";
  
        var deleteButton = taskElement.getElementsByClassName("delete-button")[0];
        deleteButton.addEventListener("click", function() {
          taskElement.remove();
        });
      }
    });
  });