// using 'var' keyword
var myName = "Kunal";
var myAge = 21;

function myself() {
  var myCollege = "ADIT";
  console.log("My name is " + myName + " and I'm " + myAge + " years old. ");
  console.log("I study IT in " + myCollege);
}

myself();

//here the variable 'myCollege' is'nt available
//variables declared using 'var' have function level scope
//console.log(myCollege); //undefined
console.log(myName); // available because 'myName' & 'myAge' have global scope

//problem with 'var' keyword
function printNumbersTillFive() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  //prints the value of i as "5" as it was its last value when it exited loop
  console.log(i); //so, variable "i" is also available outside the block(here for loop)
}

printNumbersTillFive();

//using latest ES6 'let' and 'const'
function useLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  //console.log(i); //so, variable "i" is "NOT" available outside for block
  //'let' have BLOCK LEVEL" scope
}

function useOfLetAndConst() {
  let myFirstName = "Kunal";
  const myLastName = "Kathe";

  myFirstName = "kunal"; // can re-assign 'let' variable
  console.log(myFirstName);

  //myLastName = "kathe"; // can't re-assign const
  console.log(myLastName);
}

useOfLetAndConst();
useLet();

//Variable Hoisting
//'var'
console.log(name); //can access variable declared using 'var' before initialization
console.log(typeof name); //string
var name = "Kunal";
console.log(name);

//'let'
console.log(age); //can't access variable declared using 'let' before initialization
let age = 21;
console.log(age);

/*VERDICT : lifecycle of variable declared using 'var' starts when it is declared
whereas lifecycle of variable declared using 'let' starts when it is initialized
i.e. Variable can be used even before it is declared
"var" keyword follows VARIABLE HOISTING
"let" keyword DO NOT follow VARIABLE HOISTING*/
