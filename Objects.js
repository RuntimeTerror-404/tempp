const Employee = {
  fname: "Mohit",
  lname: "Parashar",
  role: "Program Analyst",
  language: "",
  intor: function () {
    return `I am ${this.fname} and I am a ${this.role}`;
  },
  get name() {
    return this.fname;
  },
  set lang(lang) {
    this.language = lang;
  },
};
Employee.language = "English";

// console.log(Employee.language)

Employee.place = function () {
  return `I am a ${this.role} live in Bangalore`;
};

const myArray = Object.keys(Employee);
const myString = JSON.stringify(Employee);
// console.log(myString);

// console.log(Employee.place());
// console.log(Employee.name);

function Person(name, age) {
  (this.PersonName = name), (this.PersonAge = age);
}
const p = new Person("Mohit", 20);
p.place = "Bangalore";
// console.log(p);

const names = ["Mohit", "Priyank", "Sanket"];
// for(let item of names){
//     console.log(item);
// }
