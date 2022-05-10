const teams = new Map([
  ["England", "Ben Stokes"],
  ["India", "Rohit Sharma"],
  ["Australia", "Pat Cummins"],
]);

// console.log(teams.get("England"));

// console.log(teams.keys(), teams.values());
const ans = teams.get("England", "India");
// console.log(ans)

teams.set("Pakistan", "Babar Azam");
// teams.delete("England");

// for (let x of teams) {
//   console.log(x[0] + "->" + x[1]);
// }

// for (let x of teams) {
//   if (x[0].match("India")) {
//     console.log(x[1]);
//   }
// }

// for(let x of teams){
//     if(x[0].match("India")){
//         console.log("Well India is a good team")
//     }
// }

// console.log(teams.size);

