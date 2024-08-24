let arr = [10,20,30,40,50,60];

arr.filterArr((item)=>{
    return item > 20;
})

console.log(filterArr)



let arr = [10,20,30,40,50,60];

let sum = arr.reduce((acc,curr)=>acc + curr);
// return acc + curr;
console.log(sum);
// acc  curr
//   0     10   10
//  10    20   30
//  30    30   60
//  60    40   100
//  100   50   150
//  150   60   210


let arr = [10, 30,20,30,40,50,60];

let foundItem = arr.find((item)=>item === 30);
console.log(foundIteam);
let foundItemIndex = arr.findIndex((item)=>item === 30);
console.log(foundIteamIndex);



let arr = [10,20,30,40,50,61];
let hasEven = arr.some((item)=>iteam%2===0);
console.log(haseven);


let arr = [10,20,30,40,50,60];

let everyEven = arr.every((item)=>iteam%2===0);
console.log(everyeven);

//object method

let obj = {
    firstname : "Roshni",
    lastName : "menaria"
}


//let keys = object.keys(obj);

//console.log(keys);

//let values = object.values(obj);
//console.log(values);

//let entries = object.entries(obj);
//console.log(entries);

Object.freeze(obj);

obj.firstName = "Arvind";
obj.address = "jaipur";


const num = {
   firstname : "Roshni",
    lastName : "menaria" 
}

num.firstName = "shubham"
console.log(num);



Object.seal(obj);


obj.firstName = "Roman";
obj.address = "jaipur";
console.log(obj);

console.log(obj.hasOwnProperty("address"));


// string methods

let str = "Hello World"
let char = str.charAt(5);
console.log(char);

let newStr = str.concate("Techno");
console.log(newStr);

let hasStr = str.includes("World")
console.log(hasStr);


let index = str.indexOf("l");
console.log(index);


let index = str.lastindexOf("l");
console.log(index);


let str = "Hello World"

let newstr = str.slice(4 , 8);
console.log(newStr);

let newstr1 = str.substring(4 , 8); //-0
console.log(newStr);
//console.log(str);


let newStr = str.toLowerCase();
let newStr = str.toUpperCase();
console.log(newStr);


let str = "Hello World"

let splittedStr = str.split(" ");
console.log(splittedStr);



let str = "         Hello World          ";
let trimmedStr = str.trim();
console.log(trimmedStr.length);
console.log(trimmedStr);

let str = "Hello World"
let newStr = str.replace("world" , "Techno")
console.log(newStr);


let newstr1 = str.repeat(3)
console.log(newStr1);

//date method

let date = new Date();
console.log(typeof date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.gettime());
console.log(date.gethours());
console.log(date.getMinutes());
console.log(date.getseconds());
console.log(date.getFullYear());
console.log(date.getMonth());


let date = new Date();

console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleTimeString());


// Math object

let num = math.random();  //  0 - 0.999....
console.log(num);


let floatNum = 10.234;
console.log(Math.floor(floatNum));
console.log(Math.ceil(floatNum));
console.log(Math.round(floatNum));

console.log(Math.pow(2,5));
console.log(Math.sqrt(16));
console.log(Math.min(100 , 20 ,40 ,500));
console.log(Math.max(100 , 20 ,40 ,500));

//prg for otp

let otp = Math.floor (1000 + Math.random()*9000); // 1000 - 9999.9999
console.log(otp);


//Destructuring

let arr = [10,20,40 , 50,100];

const [num1 , ,  num2=20] = arr;
//const [num1 , num2 ,  , ...newArr ] = arr;
console.log(num1 , num2)

//object destructuring

let obj = {
    firstName : "Roshni",
    lastName : " menaria",
    address : "Jaipur",
    gender : " Male"
}

let { firstName , gender:a , age = "xx" , ...newObj} = obj; //rest operator
console.log(firstName)
console.log(a)
console.log(xx)
console.log(newObj)



//spread operator (dom)
let arr1 = [10,20,30];
let arr2 = [10,20,30];//arr1

arr2.push(1000);
console.log(arr1)
console.log(arr2)
console.log(arr1 === arr2);


//let num1 = 10;
//let num2 = 10;
//console.log(num1 === num2);




//spread oper..

let arr1 = [10,20,30];
let arr2 = [...arr1];

arr2.push(1000);
console.log(arr1)
console.log(arr2)
console.log(arr1 === arr2);



let arr1 = [10,20,30];
let arr2 = [30,40,50];

let arr3 = [...arr1 , 2000 ,  ....arr2 , 1000];
console.log(arr3);


let obj1 = {
    firstName : "Roshni",
    lastName : " menaria"
   


let obj2 = {
   
    address : "Jaipur",
    gender : " Male"
}

let obj3 = {...obj1 , ...obj2}; //...obj2 , ...obj1
console.log(obj3);