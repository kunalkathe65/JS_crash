//Arithmetic ops
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);

//Assignment ops
let number = 22;
number = number + 8;
console.log(number);

//Shorthand assignment ops
let string = "Kunal";
string += "Kathe"; //on strings only '+' operator can be used to concatenate them
console.log(string);

string *= 45;
console.log(string); //prints NaN

let num = 2;
num += 8;
num *= 2;
num /= 2;
num -= 2;
num %= 2;
console.log(num);

//Logical ops
let someNum = 3;
if (someNum > 3 && someNum < 100) {
  console.log("success!");
}
if (someNum == 3 || someNum < 100) {
  console.log("yes!");
}

//Relational ops (always retuns boolean value)
console.log(2 > 5); //false
console.log(3 == 3); //true
console.log(3 === "3"); //false
console.log(3 != 0); //true
console.log(3 >= 3); //true
console.log(3 !== 3); //false

//Increment/Decrement ops
let count = 0;
console.log(count++); //post-increment prints 0
console.log(count); //prints 1

let count2 = 0;
console.log(++count2); //pre-increment prints 1
console.log(count2); //prints 1

let count3 = 5;
console.log(count3--); //post-decrement prints 5
console.log(count3); //prints 4

let count4 = 5;
console.log(--count4); //pre-decrement prints 4
console.log(count4); //prints 4

//Conditional or ternary op (if/else alternative)
let isEngineer = true;
isEngineer ? console.log("YES") : console.log("NO");

//ES6 spread operator
//with arrays
let myArray2 = [1, 2, 3, 4, 5];
let myAnotherArray = [...myArray2, 6, 7, 8, 9, 10];
console.log(myAnotherArray);

//with objects
let obj1 = {
  id: 1,
  name: "Kunal",
};
const obj2 = {
  ...obj1,
  age: 21,
};
console.log(obj2);

//ES6 rest operator
let myLongArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, c, ...restInArray] = myLongArray;
console.log(a);
console.log(b);
console.log(c);
console.log(restInArray);
