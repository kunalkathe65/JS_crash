class MyClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
  }

  greetMe() {
    console.log("Bonjour!!");
  }
}

const myClass = new MyClass("Kunal", 21);
myClass.greetMe();

//Inheritance
class MyAnotherClass extends MyClass {
  constructor(name, age, hobby, college = "ADIT" /*ES6 default params*/) {
    super(name, age);
    this.hobby = hobby;
    this.college = college;
  }

  sayHello() {
    console.log("Hello World!!");
  }
}

const myAnotherClass = new MyAnotherClass("Kunal", 21, "Coding");
myAnotherClass.sayHello();
myAnotherClass.greetMe();
