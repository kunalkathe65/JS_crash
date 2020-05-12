//ES6 Object destructuring
const myPersonalDetails = {
  id: 21,
  name: "Kunal",
  age: 21,
  hobby: "Coding",
  college: "ADIT",
};
const { id, name, age, hobby, college } = myPersonalDetails;
console.log(id);
console.log(name);
console.log(age);
console.log(hobby);
console.log(college);

//ES6 Template Literals
const name = "Kunal";
const age = 21;
const college = "ADIT";
const city = "Ahmedabad";

const myDetails = `I'm ${name} and I'm ${age} years old.
I study in ${college} and live in ${city}.`;
console.log(myDetails);
