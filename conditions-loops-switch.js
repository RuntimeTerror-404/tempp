const arr = [21, 90, 78, 53, 81, 47, 30];
const names = ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Shikhar Dhawan"];

// for(let i=0; i<arr.length; i++){
//     (arr[i] > 50) ? console.log(arr[i]):i;
// }

// let val = 50;
// let curr = 0;
// while (curr <= val) {
//   console.log(curr);
//   curr += 10;
// }

switch (names[2]) {
  case "Virat Kohli":
    console.log("King Kohli");
    break;
  case "Rohit Sharma":
    console.log("Hitman");
    break;
  case "KL Rahul":
    console.log("Classic Rahul");
    break;
  case "Shikhar Dhawan":
    console.log("Gabbar");
    break;
  default:
    console.log("Not found!");
}

/*
<!DOCTYPE HTML>

<html>
    <body>
        <h2>JavaScript switch statement⬇️</h2>

        <span>Performance: <h3 id="demo"></h3></h3></span>

        <script>
            let Grade = "B";
            switch(Grade){
                case "S" : document.getElementById("demo").innerHTML = "Excellent";break;
                case "A" : document.getElementById("demo").innerHTML = "Very Good";break;
                case "B" : document.getElementById("demo").innerHTML = "Good";break;
                case "C" : document.getElementById("demo").innerHTML = "Average";break;
                case "D" : document.getElementById("demo").innerHTML = "Below Average";break;
                case "E" : document.getElementById("demo").innerHTML = "Bad";break;
                case "F" : document.getElementById("demo").innerHTML = "Failed";break;
                default: document.getElementById("demo").innerHTML = "Grade not found!";break;
                
            }
        </script>
    </body>
</html>
*/
