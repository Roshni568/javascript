//"use strict"
// loops , strict mode , console type , array methods 

// while , do while , for

let count = 10;

while(count<10){
    console.log(count);
    count++
}

do{
    console.log(count);
    count++;
}while(cout<10)

for(let i=0; i<0;i++){
    console.log(i);
}
//Break and continue

for(let i = 0 ; i < 10 ; i++){
    if(i==6){
        continue;
    }
    console.log(i);
}

let arr = [10,20,30,40,50,60,70]
for(let i=0 ; i < arr.lenght ; i++){
    console.log(arr[i]*10);
}

// for of and for in loop

let arr = [10,20,30,40,50,60,70]
for(let element of arr ){
    console.log(element)
}

for(let index in arr ){
    console.log(index);
}

let items =["first","second",3,4,"fifth"];
for(let iteam of items){
    console.log(iteam);
}

let a == 20;
b = 30;
console.log(b);

function sum(a,a){
    //"use strict"
    console.log("sum function")
}

sum();
//types of console
console.log("Hello world")
console.error("This is an error console")
console.warn(5>10,"5 is not greater than 10")
console.assert(10>5,"10 is not greater than 5")

let person ={
    name:"roshni",
    age :"**",
    address : {
        city : "jaipur",
        pincode : "302018"
    },
    hobbies : ["Riding" , "Travelling"]
}

console.dir(person);

let date = [
    {
        name:"roshni" , city: "udaipur", dept: "FSD"
    },
    {
        name:"roshni" , city: "udaipur", dept: "FSD"
    },
    {
        name:"roshni" , city: "udaipur", dept: "FSD"
    },
]


console.table(date);


console.group("group1");
console.group("Message 1");
console.group("Message 2");
console.groupEnd();

console.count("counter")
console.count("counter")
console.count("counter")

// Array methods

let arr = [10,20,30,40,50,60,70];

//push , pop , shift , unshift

arr.push(1000)
console.log(result);
console.log(arr);

console.log(arr.pop());
console.log(arr);

// shift , unshift

let arr = [10,20,30,40,50,60,70];

arr.unshiftft(1000);

console.log(arr);


arr.shift();

console.log(arr);

//concate

let arr1 =[10,20];
let arr2 =[30,40];

let result = arr2.concat(arr1);
console.log(result);
console.log(arr1);
console.log(arr2);

// slice and splice

let arr = [10,20,30,40,50,60,70];

let slicedArr = arr.slice(2,4);

console.log(slicedArr);
console.log(arr);

//splice

let result = arr.splice(2 , 2 , "roshni"); //(2 , 0 , "roshni")
console.log(result);
console.log(arr);

// includes , reverse , join , flat

let result = arr.includes(40);

console.log(result);

arr reverse();
console.log(arr);

arr.join("")
let joinedStr = arr.join(" ");
console.log(joinedStr);

//10-07-2024
//10/07/2024

let arr = [10,20,[40]];

let result = arr.flat(2);

console.log(result);

//map , filter , reduce , forEach


let arr = [10,20,30,40,50,60,70];

arr.map(()=>{})

// callback functions
//heigher order functions

//let newArr = arr.map((iteam)=>{
   // console.log(item);
  // return item *10;
//})

let newArr = arr.map((iteam, i)==>{
    if(iteam > 30){
        return iteam * 10;
    }
    return iteam * i;
})

console.log(newArr);
console.log(arr);

//map returns new array with the same length as original

//forEach

let newArr = arr.forEach((item , i)=>{
    console.log(i);
    return iteam * 10 
})

console.log(newArr);

