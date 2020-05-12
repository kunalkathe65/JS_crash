//for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 7) break;
}

//while loop
let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

//do while loop
let k = 10;
do {
  console.log(k);
  k++;
} while (k < 10);

//foreach (higher order function) (using normal function)
let myFruits = ["Apples", "Bananas", "Mangos", "Grapes"];
myFruits.forEach(function (fruit) {
  console.log("I like : " + fruit);
});

//foreach (higher order function) (using arrow function)
let myFruits2 = ["Apples", "Bananas", "Mangos", "Grapes"];
myFruits2.forEach((fruit) => console.log("I like : " + fruit));
