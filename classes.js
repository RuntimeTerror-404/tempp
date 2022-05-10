class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  run() {
    return "Person is running";
  }
  intro() {
    return `my name is ${this.name}`;
  }
}

const p = new Person("Mohit Parashar", 20);

console.log(p.run());
