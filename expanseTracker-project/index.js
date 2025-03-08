document.querySelector("button").addEventListener("click", function(event){
    event.preventDefault();
    
    // Assuming the form elements have IDs or you can use a form reference
    var Amount = document.getElementById("amount").value;
    var Description = document.getElementById("description").value;
    var Category = document.getElementById("category").value;

    let expanseDetails = {
        amount: Amount,
        description: Description,
        category: Category
    };
    
    display(expanseDetails);
    localStorage.setItem(Amount, JSON.stringify(expanseDetails));
});

function display(expanseDetails) {
    let outerdiv = document.getElementById("outerdiv");
    let li = document.createElement("li");
    li.textContent = `${expanseDetails.amount} ${expanseDetails.description} ${expanseDetails.category}`;
    outerdiv.appendChild(li);
    li.className = "mt-5";

    // Edit button
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "btn btn-primary";
    li.appendChild(editButton);

    editButton.addEventListener("click", function() {
        document.getElementById("amount").value = expanseDetails.amount;
        document.getElementById("description").value = expanseDetails.description;
        document.getElementById("category").value = expanseDetails.category;

        outerdiv.removeChild(li);
        localStorage.removeItem(expanseDetails.amount);
    });

    // Delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-primary";
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        outerdiv.removeChild(li);
        localStorage.removeItem(expanseDetails.amount);
    });
}
