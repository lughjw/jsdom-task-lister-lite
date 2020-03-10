
const taskArray = [];

document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  // console.log("Dom loaded");
  taskForm.addEventListener("submit", addToTaskList);
});

function addToTaskList(event) {
  event.preventDefault(); 
  // console.log(event);
  let text = document.getElementById("new-task-description").value;
  taskArray.push(text);
  // console.log(taskArray);

  displayList();
}

function displayList(){
  const taskList = document.getElementById("tasks");
  // taskList.innerHTML = ""; // equivalent to the below, but slightly slower which doesn't matter.
  while(taskList.hasChildNodes()) {
    taskList.childNodes[0].remove();
  }

  for(let i=0; i < taskArray.length; i++) {
    let li = document.createElement("li");
    li.innerText = taskArray[i];
    taskList.appendChild(li);
  }
}
