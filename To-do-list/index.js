// Add the Edit Button:
const form=document.querySelector("form");
const ul = document.querySelector(".fruits");

form.addEventListener('submit', function(event){
  event.preventDefault();
  const fruitToAdd = document.getElementById("fruit-to-add");
  const newLi = document.createElement("li");
 

  const newText = document.createTextNode(fruitToAdd.value);
  newLi.appendChild(newText);
  newLi.className="fruit";
  

  //delete button
  const DeleteButton = document.createElement("button");
  const ButtonText =document.createTextNode("X");
  DeleteButton.appendChild(ButtonText);
  newLi.appendChild(DeleteButton);
  DeleteButton.className="delete-btn";

  //edit button
  const editButton = document.createElement("button");
  const EditButtonText = document.createTextNode("Edit");
  editButton.appendChild(EditButtonText);
  newLi.appendChild(editButton);
  editButton.className="edit-btn";

  
  
  ul.appendChild(newLi);  
})

ul.addEventListener('click',function(event){
  event.preventDefault();
  if(event.target.classList.contains("delete-btn")){
    const fruitToDelete =event.target.parentElement;
    ul.removeChild(fruitToDelete);
  }
  
})



// Implement the code as in video but with one extra 'Edit' button in 'li'


