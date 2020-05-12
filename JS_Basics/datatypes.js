//primitive datatypes
//string
let myName = "Kunal";
console.log(typeof myName);

//number
let myAge = 21;
console.log(typeof myAge);
console.log(typeof NaN); //NaN means  not a number type : number (how ??)

//boolean
let isEngineer = true;
console.log(typeof isEngineer);

//null
let nothing = null;
console.log(typeof null); //type : object (weird is'nt it? :))

//undefined
let empty = undefined;
console.log(typeof empty);

//derived datatypes
//Array
//literal method(preferred way)
let fruits = ["Mango", "Banana", "Oranges"];
console.log(typeof fruits); //type : object
console.log(fruits);

//Constructor method
let veggies = new Array("Onion", "Carrot", "Peas");
console.log(typeof veggies); //type : object
console.log(veggies);

//Objects (everything is object in JS XD)
//Literal Way (creating object before adding properties and methods)
let myPersonalDetails = {};

myPersonalDetails.name = "Kunal";
myPersonalDetails.age = 21;
myPersonalDetails.isEngineer = true;
myPersonalDetails.greetMe = function () {
  console.log("Good Morning!!");
};

console.log(myPersonalDetails);

//get specific property
//dot notation
console.log(myPersonalDetails.name);

//calling method
myPersonalDetails.greetMe();

//Square bracket notation(usually used when keys in an object are not known)
console.log(myPersonalDetails["name"]);
myPersonalDetails["college"] = "ADIT";
console.log(myPersonalDetails);

//Constructor Way (creating object before adding properties and methods)
const myFavourites = new Object();

myFavourites.car = "Rolls Royce Phantom";
myFavourites.food = "Chicken";
myFavourites.color = "Black";
myFavourites.greetMe = function () {
  console.log("I am the best!!");
};

console.log(myFavourites);
console.log(myFavourites.car);
myFavourites.greetMe();

//Literal Way (creating object with properties and methods)
const aboutIndia = {
  capital: "Delhi",
  nationalLanguage: "Hindi",
  nationalAnimal: "Tiger",
  greetInHindi: function () {
    console.log("Namaste!");
  },
};
console.log(aboutIndia);
console.log(aboutIndia.nationalAnimal);
console.log(aboutIndia["nationalLanguage"]);
aboutIndia.greetInHindi();

//Constructor Way (creating object with properties and methods)
function aboutGujarat(capital, stateAnimal, stateLanguage) {
  this.capital = capital;
  this.stateAnimal = stateAnimal;
  this.stateLanguage = stateLanguage;
  this.greetInGujarati = function () {
    console.log("Kem cho?");
  };
}

let abtGuj = new aboutGujarat("Gandhinagar", "Lion", "Gujarati");
console.log(abtGuj);
abtGuj.greetInGujarati();
