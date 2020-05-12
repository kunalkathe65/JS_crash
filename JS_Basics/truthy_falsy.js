//Every value in JS is treated as truthy or falsy

//Falsy values
let myVar; //unassigned variable
let num = 0; //variable assigned to 0
let isTruthy = false; //bool false
let score = ""; //empty string
let highScore = 10 / "score"; //weird operations

//Truthy values
//All values except falsy are truthy

//Short circuit values
let PORT = 8000 || 6000; //both are truthy
console.log(PORT); //8000

//check existance of variables
let v1 = 1;
let v2 = 2;
let v3 = 3;
if (v1 || v2 || v3) {
  console.log("present");
}

let obj = ""; //falsy
if (obj || {}) {
  console.log("New object created!");
}

// both are truthy so logical && is resolved to true
const isValid = true;
isValid && console.log("It is valid!!");

//one is falsy and one is truthy so logical || is resolved to true
const isNotValid = false;
isNotValid || console.log("It is not valid!");
