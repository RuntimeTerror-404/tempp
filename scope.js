// block scope
// function scope
// global scope

function index(x, y) {
  let sum = x + y;
  return sum; //function scope
}

// console.log(index(10,7));

{
  let x = 10; //block scope
}
// console.log(x);

x = 10;
var x;
console.log(x);

// function say() {
//   hello = "hi there";
// }
// say();
// console.log(hello);
