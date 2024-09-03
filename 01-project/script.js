var isstatus= document.querySelector("h5"); 
var add=document.querySelector("#add"); // get the value of btn 


add.addEventListener("click",()=>{
    if(isstatus.innerHTML=="Stranger"){
  isstatus.innerHTML="Friend";
  isstatus.style.color="green";
  add.innerHTML="Remove";
    }
    else {
    isstatus.innerHTML="Stranger";
    isstatus.style.color="red";
    add.innerHTML="Add Friend";
    }
})

