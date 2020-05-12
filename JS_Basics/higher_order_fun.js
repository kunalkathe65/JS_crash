//Methods that take other functions as an argument are called higher order methods
//Only applies to arrays

//map (mutates the original array and applies the given function oneach array element)
let arrayOfObjects = [
  {
    id: 1,
    name: "Kunal",
  },
  {
    id: 2,
    name: "Karan",
  },
  {
    id: 3,
    name: "Parth",
  },
];

const changedArray = arrayOfObjects.map(function (obj) {
  return (obj.name = "Name");
});

//using arrow syntax
const changedArray2 = arrayOfObjects.map((obj) => (obj.id = 1));

console.log(arrayOfObjects);
console.log(changedArray2);

//filter (returns only those array elements that passes the function criteria)
//DON'T mutate original array
let myArray = [1, 2, 3, 4, 5];

const filteredArray = myArray.filter((arrEl) => arrEl > 3);
console.log(myArray);
console.log(filteredArray);

//reduce (reduces array to a single value)
//DON'T mutate original array
let toBeReducedArray = [500, 400, 300, 200, 100];

const reducedArray = toBeReducedArray.reduce((left, right) => left + right);
console.log(toBeReducedArray);
console.log(reducedArray);

//foreach loop
const myVeggies = ["Peas", "Tomatoes", "Onions"];
myVeggies.forEach((veggie) => console.log(veggie));

//It is also a higher order function
setTimeout(() => {
  console.log("Here after 5 seconds...");
}, 5000);
