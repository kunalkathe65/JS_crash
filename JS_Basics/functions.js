//FACTS :
//Functions in JS are first class citizens
//Functions in JS are ultimately objects
/*Functions can be assigned to variables, 
can be returned from another function 
and also can be passed as an argument to other function*/

//normal functions
sayHello(); //can do this due to concept of "FUNCTION HOISTING(call functions even before its declaration)"
function sayHello() {
  console.log("Hello World!!");
}
sayHello();
console.log(typeof sayHello); //type: function

//normal functions returning single value
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const result = addTwoNumbers(8, 9);
console.log(result);

//normal functions returning multiple values
function getSizes(width, length, breadth) {
  let volume = width * length * breadth;
  let area = length * breadth;
  return [volume, area];
}

const volume = getSizes(4, 4, 6)[0];
const area = getSizes(5, 5, 5)[1];
console.log("Volume :" + volume + " and Area : " + area);

//Passing function as an argument to other function
function greet(fun) {
  console.log("Hello!!");
  fun();
}
greet(function () {
  console.log("Good Morning!!");
});

//Returning function from another function
function returnGreet() {
  return function sayGoodNight() {
    return "Good Night!!";
  };
}
const sayGoodNight = returnGreet();
console.log(sayGoodNight());

//anonymous functions (assigning functions to variables)
//sayGoodbye(); //can't do this because now function is treated as variable
const sayGoodbye = function () {
  console.log("Bye!");
};
sayGoodbye();

//Immediately Invoked Function Expression(IFFY)
const greetGuest = (function () {
  console.log("Welcome, Guest!");
})();

//Anonymous functions using ES6 arrow syntax
//for "zero" args = ()
//for "one" arg = <no-parenthesis> just arg
//for more than one args = (a,b,c)
const sayYourName = () => {
  console.log("Kunal Kathe");
};
sayYourName();

//Since above function body has only one statement we can omit curly braces
const sayYourAge = () => console.log("21");
sayYourAge();

//Anonymous functions returning values with one argument
const multiplyByTwo = (number) => {
  return number * 2;
};
console.log(multiplyByTwo(5));

//Since above function returns we can omit curly braces as well as 'return' keyword
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(4, 5));
