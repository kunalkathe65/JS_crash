//Automatic type conversion
//Try not to depend on JS Type conversion (be specific about the type)
//Results are not always as expected
let num1 = 5;
let num2 = "5";
console.log(num1 + num2); //string + number = string
console.log(num1 * num2); //string * number= number
console.log(num1 - num2); //string - number = number
console.log(num1 / num2); //string / number = number
console.log(num1 % num2); //string % number = number

//Check types
let todaysDate = "12/12/2020";
let isValid = todaysDate.constructor === Date;
console.log(isValid);

let myArray = 125;
console.log(myArray.constructor === Array);

//Explicit Type Conversion using Wrapper classes
let num3 = 25;
let num4 = "20"; //string -> number
console.log(num3 + Number(num4));

let str1 = "kunal";
let age = 21;
console.log(str1 + String(age)); //number -> string
console.log(str1 + age); //same
console.log(str1 + age.toString()); //same

let isTrue = true;
console.log(String(isTrue)); //boolean -> string

//String to number using '+' (only for numbers represented as strings)
let number = "21";
console.log(+number); //string -> number

let string = "Kunal";
console.log(+string); //type : NaN
