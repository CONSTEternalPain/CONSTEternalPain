// Selectors

const toDoInput = document.querySelector('.todo-input');
const toDoBtn = document.querySelector('.todo-btn');
const toDoList = document.querySelector('.todo-list');

// Event Listeners

toDoBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', deletecheck);

// Functions;
function addToDo(event) {
    event.preventDefault();
    // toDo DIV;
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add('todo');

    // Create LI
    const newToDo = document.createElement('li');
    
        // newToDo.innerText = "hey";
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add('todo-item');
        toDoDiv.appendChild(newToDo);

        // check btn;
        const checked = document.createElement('button');
        checked.classList.add('check-btn');
        checked.innerText = "Check";
        toDoDiv.appendChild(checked);
        // delete btn;
        const deleted = document.createElement('button');
        deleted.innerText = "Delete";
        deleted.classList.add('delete-btn');
        
        toDoDiv.appendChild(deleted);

        // Append to list;
        toDoList.appendChild(toDoDiv);

        // CLearing the input;
        toDoInput.value = '';
}  


function deletecheck(event){

    // console.log(event.target);
    const item = event.target;

    // delete
    if(item.classList[0] === 'delete-btn')
    {
        // item.parentElement.remove();
        // animation
        item.parentElement.classList.add("fall");

        item.parentElement.remove();
    }

    // check
    if(item.classList[0] === 'check-btn')
    {
        item.parentElement.classList.toggle("completed");
    }


}

//dateTime
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

