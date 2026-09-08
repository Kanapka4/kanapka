const input = document.getElementById("taskInput");
const button = document.getElementById("addButton");
const buttonDelete = document.getElementById("delButton");
const list = document.getElementById("taskList");

button.addEventListener("click", function(){
  const task = input.value;
  
  const li = document.createElement("li");

  li.textContent = task;
  
  list.appendChild(li);
})

buttonDelete.addEventListener("click", function(){
  const lastTask = list.lastElementChild;

  if(lastTask){
    lastTask.remove();
  }
})