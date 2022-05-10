const letters = new Set(["a", "b", "C"]);
letters.add("d");

const nums = new Set([1, 3, 5, 2, 1, 5, 7]);
const nums2 = new Set();
nums.forEach((num) => nums2.add(num * 10));
// console.log(nums2);

// nums.delete(5);

// nums.add("Z");

for (let x of nums) {
  console.log(x);
}

const marks = new Set();
marks.add(90);
marks.add(81);
marks.add(67);
marks.add(80);

// console.log(marks.has(82));

// console.log(nums2.values());

// console.log(typeof marks)

// console.log(nums.entries())


