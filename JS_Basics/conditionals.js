//if
let number = 45;
if (number % 5 === 0) {
  console.log("Multiple of 5");
}

//if-else
let num = 10;
if (number % 5 === 0) {
  console.log("Multiple of 5 & 2");
} else {
  console.log("Sorry!");
}

//if-else ladder
let num1 = "10";
if (num1 === 10) {
  console.log("Exact match!");
} else if (num1 == "10") {
  console.log("Match, but not exact!");
} else {
  console.log("Sorry!!");
}

//switch case
let num2 = "10";
switch (num2) {
  case 10:
    console.log("Exact!");
    break;
  case "10":
    console.log("Not Exact!");
    break;
  default:
    console.log("BYE...");
    break;
}

//Ternary op (same as if-else)
const name = "Kunal";
name === "Kunal" ? console.log("Kunal") : console.log("Something else..");
