function myDisplayer(value) {
  console.log(value);
}
function first() {
  myDisplayer("Hello");
}
function second() {
  myDisplayer("World!");
}
// second();
// first();

function print(value) {
  console.log(value);
}
function calculator(n1, n2, print) {
  let sum = n1 + n2;
  print(sum);
}

// calculator(10, 5, print);

// setTimeout(myFunction2, 3000);

// function myFunction2() {
//   console.log("Hello world!");
// }

// myFunction2();

// ########################################### //

// let myPromise = new Promise(function(myResolve,myReject){
//     myResolve();
//     myReject();
// });

// myPromise.then(
//     function(success){},
//     function(error){}
// )

// let promise = new Promise(function (myResolve, myReject) {
//   let x = 5;

//   if (x == 5) {
//     myResolve("Success");
//   } else {
//     myReject("Error");
//   }
// });

// promise.then(
//   function (value) {
//     console.log(value);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

// async makes a function return a Promise
// await makes a function wait for a Promise
