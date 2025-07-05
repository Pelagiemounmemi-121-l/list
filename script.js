function changerfond(){
const color = ["#FFB6C1","#87CEFA","#FFD700","#D3D3D3"];
const colorintermediaire = color[ Math.floor(Math.random ()*color.length)];

document.body.style.backgroundColor = colorintermediaire;

}

//selecteur
const todolist = document.querySelector(".todo-list");
const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");



//ecouteur
todobutton.addEventListener("click",addtodo );
todolist.addEventListener("click", delecheck);



//function
function addtodo(event){
event.preventDefault();
//todo div
const tododiv = document.createElement("div");
//ajouter une class a ce div
tododiv.classList.add("todo");
//creer le li
const newtodo = document.createElement("li");
newtodo.innerText=todoinput.value;
newtodo.classList.add("todo-item"); 
if(todoinput.value === "") return ;
//on ajoute le li dans le div
tododiv.appendChild(newtodo);
//button check
const completebuton = document.createElement("button");
completebuton.innerHTML = '<i class="fas fa-check"></i>';
completebuton.classList.add("complete-btn");
tododiv.appendChild(completebuton);
// button suprimer
const deletebtn = document.createElement("button");
deletebtn.innerHTML=' <i class="fas fa-trash"></i>';
deletebtn.classList.add("delbtn");
tododiv.appendChild(deletebtn);
//ajouter le todo a todolist
todolist.appendChild(tododiv);
// reiniatialiser la valeur entree apres soumission
todoinput.value= "";


}

function delecheck(e){
    const item = e.target;
    if(item.classList.contains("delbtn")){ 
        const todo = item.parentElement;
        todo.classList.add("fall");
        // todo.remove();
    }
    if(item.classList.contains("complete-btn")){ 
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
 

}




