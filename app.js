// Initialize task arrays
let pendingTasks = [];
let completedTasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    pendingTasks.push(task);
    taskInput.value = "";
    renderLists();
  }
}

// Function to mark a task as complete
function completeTask(index) {
  const task = pendingTasks.splice(index, 1);
  completedTasks.push(task);
  renderLists();
}

// Function to render the lists
function renderLists() {
  const pendingList = document.getElementById("pendingList");
  const completedList = document.getElementById("completedList");

  // Clear lists
  pendingList.innerHTML = "";
  completedList.innerHTML = "";

  // Render pending tasks
  pendingTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerText = task;
    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.onclick = () => completeTask(index);
    li.appendChild(completeButton);
    pendingList.appendChild(li);
  });

  // Render completed tasks
  completedTasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerText = task;
    li.classList.add("completed");
    completedList.appendChild(li);
  });
}
