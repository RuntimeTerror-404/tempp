const nums = [21, 10, 89, 53, 78, 40, 62];

// console.log(nums);

// for(let i=0; i<nums.length; i++){
//     console.log(nums[i]);
// }

// for (let x of nums) {
//   console.log(x);
// }

const nums2 = ["Fruits", "John", 100];
// console.log(typeof(nums2));

// console.log(nums.sort());
nums2[nums2.length] = "Mohit";

nums2.push(220);
// console.log(nums2);

// javascript arrays are basically objects with index functionality

const s = "Mohit";
const s2 = s.split("");
// console.log(s2);

const people = ["John Doe", "Mark Robinson", "Sarah Sahi", "Eric Ressler"];

const str1 = people.toString();
const str2 = people.join(" -> ");
// console.log(str2);

// people.push("Mohit");
// people.pop();
// people.shift();
// people.unshift("Karl Jensen");
// const people2 = people.concat(nums2);
// console.log(people2);

// const people3 = people.concat("Hello");
// console.log(people3)

// const newNums = nums.slice(1,3);
// nums.splice(2,0,100)
// nums.splice(0,1);
// console.log(nums)

// console.log(nums.sort());
// console.log(nums.reverse());
// console.log(people.sort())

// nums.sort(function(a,b){return a-b});

// console.log(`small value: ${nums[0]} and large value: ${nums[nums.length-1]}`);

const nums3 = [34, 21, 99, 45, 77];

// nums3.forEach((value)=>(console.log(value)));
const res = [];
// console.log(res);

// nums3.map((num) => res.push(num * 2));
// console.log(res);

// nums3.map((num) => res.push(num));

// console.log(res);

// const res2 = nums3.filter((num)=>(num>50));
// console.log(res2);

// const reduce = nums3.reduce((sum = 0, curr) => (sum += curr));

// console.log(typeof reduce);

const indexx = nums3.indexOf(34);
// console.log(indexx+1);

const findd = nums3.find((num) => num == 34);
// console.log(findd);

// let stringg = "Hello there";
// let ar = Array.from(stringg);
// let ar2 = stringg.split("");
// console.log(ar2);
// console.log(ar);




// ###########################################################################
/*
<!DOCTYPE HTML>

<html>
    <body>
        <p id="demo"></p>
        <br><br>

        <p id="demo2"></p>
        <br>
        <div id="demo3"></div>

        <br><br>

        <div id="demo4"></div>
        <div id="demo5"></div>
        <br>
        <h3>⬇️</h3>
        <div id="demo6"></div>

        <script>
            let numbers = [34, 21, 99, 45, 76];
            let numbers2 = ["John Doe", "Kevin Dewid", "Serena Smith"];
            let numbers3 = ["CSK", "RCB", "GT", "SRH", "DC", "LSG", "MI", "RR", "KKR", "PBKS"];
            let total = "";
            let word = "";
            let total2 = "";
            const res2 = numbers.filter((num)=>(num>50));
            for(let item of res2){
                total2 += item+"<br>"
            };

            numbers3.map((team)=>(total += team + "<br>"));

            
            for(let x of numbers2){
                word += x+"<br>";
            }
                
            

            const result = numbers2.map(myFunction2);

            let text = "";
        

            numbers.forEach(myFunction);

            const reduce = numbers.reduce((sum=0,item)=>(sum += item));

            document.getElementById("demo").innerHTML = text;
            document.getElementById("demo2").innerHTML = result;
            document.getElementById("demo3").innerHTML = word;
            document.getElementById("demo4").innerHTML = total;
            document.getElementById("demo5").innerHTML = total2;
            document.getElementById("demo6").innerHTML = reduce;

            function myFunction(value, index, array){
                text += value + "<br>";
            }

            function myFunction2(value){
                return value;
            }


        </script>
        
    </body>
</html>
*/

