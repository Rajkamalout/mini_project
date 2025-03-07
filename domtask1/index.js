// const mainheading = document.getElementById("main-heading");
// mainheading.textContent ="Fruit World";
// mainheading.style.color="orange";

// const header = document.getElementById("header");
// header.style.backgroundColor="green";
// header.style.borderBottom="3px solid orange";

// const basketheading = document.getElementById("basket-heading");
// basketheading.style.color="green";

// // const thanks = document.getElementById("thanks");
// // thanks.innerHTML ="<p>Please visit us again.</p>";

// var thanks =document.querySelector("#thanks");
// var paragraph =document.createElement("p");
// paragraph.textContent="Please visit us again";
// thanks.appendChild(paragraph);

// /// task 2

// const fruit =document.getElementsByClassName("fruit");
// fruit[2].style.backgroundColor="orange";

// for(var i=0; i<fruit.length; i++){
//     fruit[i].style.fontWeight="bold";
// }

// const listName = document.getElementsByTagName("li");
// listName[4].style.color="blue";

// for(var i=0;i<listName.length; i++){
//     listName[i].style.fontStyle="italic";
// }

/// task 3
// const mainheading= document.querySelector("#main-heading");
// mainheading.style.textAlign="right";

// const basketheading= document.querySelector("#basket-heading");
// basketheading.style.color="brown";

// const fruits=document.querySelector(".fruits");
// fruits.style.backgroundColor="gray";
// fruits.style.borderRadius="2px";

// // Write answer to the questions asked below:
// const fruit = document.querySelectorAll(".fruit")
//  for(var i=0; i<fruit.length;i++){
//    fruit[i].style.backgroundColor="white";
//    fruit[i].style.listStyleType="none";
//    fruit[i].style.margin="10px";
//    fruit[i].style.padding="10px";
//    fruit[i].style.borderRadius="3px";
//  }
// const evenfruits = document.querySelectorAll(".fruit:nth-child(even)")
//  for(var i=0; i<evenfruits.length;i++){
//    evenfruits[i].style.backgroundColor="brown"
//    evenfruits[i].style.color="white";
//  }


 /////task 4

 const h2=document.createElement("h3");
const htext=document.createTextNode("Buy high quality organic fruits online");
h2.appendChild(htext);

const divs = document.getElementsByTagName("div");
const firstDiv=divs[0];
firstDiv.appendChild(h2);
h2.style.fontStyle="italic";

const para =document.createElement("p");
const paratext=document.createTextNode("Total fruits:4");
para.appendChild(paratext);
const secondDiv =divs[1];
const fruits =document.querySelector(".fruits");
secondDiv.insertBefore(para,fruits);
