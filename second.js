//let count = 20;
//if(count === 20){
//    console.log("The count is 20");
//}else{
 //   console.log("The count is not 20");
//};

//if(count === 20){
    //console.log("The count is 20");
//}else if(count > 20){
    //console.log("The count is greater than 20");
//}else{
    //console.log("The count is less then 20");
//}

//let firstNum = prompt("Enter the firts number");
//console.log(firstNum);

//prompt("Enter the username");
//prompt("Enter the password");

  //username = prompt("Enter username:");
  //password = +prompt("Enter password:");

  //if (username === "admin" && +password === "123") {
    //alert("Auth successful");
  //} else {
    //alert("Auth failed");
  //}

if(userName === " admin"){
    if(password === 123){
        console.log("Auth successful");
    }else{
       console.log("Invalid password"); 
    }
}else{
       console.log("Invalid passworc"); 
}

//ternary operator

(userName ==="admin" && password === 123)? console.log("Auth successful"): console.log("Auth failed");

count === 20 ? console.log("count is 20"): count>20 ? console.log("count is greater than 20") : console.log("count is less then 20");

if(count===20){
    console.log("The count is 20")
}
count === 20 ? console.log("count is 20")

//switch cases

let dayNumber =3;
let dayName;

switch(dayNumber){
    case 1:
        dayName ="Monday";
    case 2:
        dayName ="Tuesday";
    case 3:
        dayName ="Wednesday";
    case 4:
        dayName ="Thrusday";
    case 5:
        dayName ="Friday";
    case 6:
        dayName ="saturdat";
    case 7:
        dayName ="Sunday";
    default:
        dayName ="Invalid";
}

console.log(dayName);

//functions
//function decleration
//function expression
//arrow function

function sum(){
    console.log("this is sum function")
}

sum();

const sum = function(){
    console.log("This is function sum");
}

sum();

const sum = () =>{
    console.log("This is arrow function")
}


function sum(a,b){
    console.log(a+b);
}
sum(3,4);

function sum(a,b){
    return a+b;

}
console.log(sum(3,4))
const add = (a,b)=>a+b;

//2nd diff b/w let , var , const

//scope - global scope , local scope or functional  scope

//es6 - let , const , block scope
//var -- global scope
// let , const -- block scope

function sum(){
    var a =20;
    console.log(a);
}

sum();
console.log(a)

var a = 20;

{
    var a = "roshni";
    console.log(a)
}
console.log(a)

//array and object
let arr =[ 10,20,30,40,50];
 console.log(arr[arr.length - 1]);

 //arr[arr.length] = "Techno";
 arr[2] = "Techno"
 console.log(arr);

 let nestedArr =[10,20,30[1,2,3,4],[20,30,40,["aaa","aab",[true,false]]]];
 let newAarr = nestedArr[nestesArr.length-1];
 let newAarr = nestedArr[nestesArr.length-1];
 let newAarr = nestedArr[nestesArr.length-1];
 let ele = newArr3[newArr3.length-1];
 console.log(ele);

 let obj ={
    "firstName" : "roshni"
    lastName :"menaria"
 };
 obj.firstName = "arvind"
 obj.section = "FSD";

 let firstName ="section";
 let keyName = "address"
 obj[keyName] = "jaipur"

 console.log(obj.firstName);



