const items = [
  {
    name: "mohit",
    link: "goooogle.com",
  },
  {
    age: 20,
    data: [{ name: "Eric" }],
  },
  {
    name: "john Doe",
  },
];
const res = [];
items.forEach((item) => res.push(item.name));
console.log(res);
