// const array = [1, 2, 4, 5, 67, 7, 7, 8];
// const newArr = array.map((items, index) => {
//   return `index is ${index} and items are ${items}`;
// });
// console.log(newArr);
// console.log(typeof newArr);
// const array = [1, 2, 4, 5, 67, 7, 7, 8];
// const newArr = array.forEach((item, index) => {
//   return `index is ${index} and items are ${item}`;
// });

const fruits = ["Mango", "Banana", "Peach", "انار"];
const colors = ["Yellow", "LightGreen", "Gray", "Red"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`Fruit: ${fruits[i]}, Color:${colors[i]}`);
// }
// const result = fruits.map((fruits, index) => {
//   const color = colors[index];
//   return `Fruits:${fruits}, Color:${color}`;
// });
// console.log(result);
const result = [];
fruits.forEach((item, index) => {
  const fruit = item;
  const color = colors[index];
  result.push({ fruit, color });
});
console.log(result);
