function addTask(column){

let text = prompt("Enter task")

if(!text) return

let task=document.createElement("div")

task.className="task"
task.innerText=text
task.draggable=true

task.addEventListener("dragstart",dragStart)

document.querySelector(#${column} .task-list).appendChild(task)

}

function dragStart(e){

e.dataTransfer.setData("text",e.target.innerText)

}

document.querySelectorAll(".task-list").forEach(list=>{

list.addEventListener("dragover",e=>e.preventDefault())

list.addEventListener("drop",function(e){

let text=e.dataTransfer.getData("text")

let task=document.createElement("div")

task.className="task"
task.innerText=text
task.draggable=true

task.addEventListener("dragstart",dragStart)

this.appendChild(task)

})

})