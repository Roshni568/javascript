let myDiv = document.getElementById("main");
//console.log(myDiv.id);
myDiv.id="container";
myDiv.className="header";


//console.log(myDiv.className);
//console.log(myDiv);

myDiv.style.width = "200px";
myDiv.style.height = "200px";
myDiv.style.backgroundColor = "green";
myDiv.style.borderRadius = "20px";
myDiv.style.border = "4px solid black";


console.log(myDiv.setAttribute("id"));
console.log(myDiv.setAttribute("class"));

myDiv.setAttribute("class" , "Tail");
console.log(myDiv);

myDiv.setAttribute("style", "width : '500px'");


//myDiv.innerHtml
//myDiv.innerText
//myDiv.textContent


let myDiv = document.getElementsByClassName("head")
console.log(myDiv)


//ss write here from ss






let myDiv = document.getElementsByTagName("Div")
console.log("myDiv");

let myDiv = document.querySelector(".head")
console.log("myDiv");


let myDiv = document.querySelectorAll(".head")
console.log("myDiv");

myDiv.forEach((iteam)=>{items.style.backgroundColor = "yellow"}); 

// querySelectorAll returns nodelist which contains forEach
// gerElementByClassName and gerElementByTagName returns HTMLCollection which doesn't contain forEach

let newArr = Array.from(myDiv);
let newArr1 = Array.from(myDiv1);


let newDiv = document.createrElement("div");
newDiv.id = "container";
newDiv.className = "head";
newDiv.style.width ="400px";
newDiv.style.height ="400px";
newDiv.style.backgroundColor ="yellow";

document.body.appendChild(newDiv)


let arr = [54,23,12,56,34,29,47,111,108,207,454];


let newArr = arr.sort((a,b)=>a-b);
console.log(newArr);

