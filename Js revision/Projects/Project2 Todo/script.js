// const AddButton = document.querySelector("#addbutton");
// const tasklist = document.querySelector(".tasklist");
// const textinput = document.querySelector("#input");
// AddButton.addEventListener("click", () => {
//   const text = textinput.value.trim();
//   if (text !== "") {
//     const li = document.createElement("li");
//     li.textContent = text;
//     tasklist.appendChild(li);
//     textinput.value = "";
//     localStorage.setItem(textinput);
//     li.addEventListener("click", () => {
//       console.log("hello");
//       li.classList.toggle("line");
//     });

//     //     ****?Deletfuntiianlity

//     const deleteBtn = document.createElement("button");
//     deleteBtn.classList.add("btn");
//     deleteBtn.textContent = "Delete";
//     li.appendChild(deleteBtn);
//     deleteBtn.addEventListener("click", () => {
//       tasklist.removeChild(li);
//       //       updatefuntionality
//     });
//   }
// });
const AddButton = document.querySelector("#addbutton");
const tasklist = document.querySelector(".tasklist");
const textinput = document.querySelector("#input");

// Function to render a task item
function renderTask(text, completed = false) {
  const li = document.createElement("li");
  li.textContent = text;
  tasklist.appendChild(li);

  if (completed) {
    li.classList.add("line");
  }

  li.addEventListener("click", () => {
    li.classList.toggle("line");
    updateTaskInLocalStorage(text, li.classList.contains("line"));
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn");
  deleteBtn.textContent = "Delete";
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    tasklist.removeChild(li);
    removeTaskFromLocalStorage(text);
  });
}

// Function to add a task to localStorage
function addTaskToLocalStorage(text) {
  const tasks = getTasksFromLocalStorage();
  tasks.push({ text, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to remove a task from localStorage
function removeTaskFromLocalStorage(text) {
  const tasks = getTasksFromLocalStorage();
  const index = tasks.findIndex((task) => task.text === text);
  if (index !== -1) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

// Function to update a task's completion status in localStorage
function updateTaskInLocalStorage(text, completed) {
  const tasks = getTasksFromLocalStorage();
  const taskIndex = tasks.findIndex((task) => task.text === text);
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

// Function to get tasks from localStorage
function getTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

// Load tasks from localStorage on page load
const storedTasks = getTasksFromLocalStorage();
if (storedTasks.length > 0) {
  storedTasks.forEach((task) => {
    renderTask(task.text, task.completed);
  });
}

AddButton.addEventListener("click", () => {
  const text = textinput.value.trim();
  if (text !== "") {
    renderTask(text);
    addTaskToLocalStorage(text);
    textinput.value = "";
  }
});
