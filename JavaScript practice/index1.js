// **************************ForLoop*****************************
for (let i = 0; i < 100; i++) {
  const element = i;
  // console.log(element);
}

for (let index = 2020; index < 100000; index++) {
  const element = index;
  // console.log(element);
}
// **************************WhileLoop*****************************
let myArray = ["batman ", "flash", "superman"];
let arr = 0;
while (arr < myArray.length) {
  // console.log(`My Fav superheroes is ${myArray[arr]}`);
  arr++;
}
// **************************DoWhileLoop*****************************
let score = 18;
do {
  // console.log(score);
  score++;
} while (score <= 20);
// **************************ForOfLoop*****************************
// forof loops on Arrays
let newArr = ["siraj", "khan", "sardar", "hero"];
for (const arr of newArr) {
  // console.log(arr);
}
//////////////for of loop on map/////////////
const map = new Map();
map.set("Ajk", "Kashmire");
map.set("Rw", "Rawlakot");
for (const key of map) {
  // console.log(key);
}
//  loop on  objects
const myObj = {
  py: "python",
  cpp: "c++",
  js: "javascript",
};
//forof loop for objects
const keys = Object.keys(myObj);
for (const key of keys) {
  const value = myObj[key];
  // console.log(`${key}: ${value}`);
}
// for in loop for objects
for (const key in myObj) {
  // console.log(`${key} is the shortcut of ${myObj[key]}`);
}
//////////////////////for in loop for array//////////////
let arrays = ["siraj", "khan", "sardar", "hero"];
for (const key in arrays) {
  // console.log(arrays[key]);
}
///////////////////ForEachLoop////////////////////////
// Foreachloop in aray
let misterArrays = ["siraj", "khan", "sardar", "hero"];
misterArrays.forEach((value, index, arr) => {
  // console.log(value, index, arr);
});
// foreach on array with loops  !important for each can't return any thing
const myCoding = [
  {
    ln: "javascript",
    lf: "js",
  },
  {
    ln: "Python",
    lf: "py",
  },
  {
    ln: "Kotlin",
    lf: "kt",
  },
];
myCoding.forEach((item, index, arr) => {
  // console.log(item.ln, index, arr);
});
// filtermethod in array
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newnumebrs = myNumbers.filter((num) => {
  return num < 8;
});
// console.log(newnumebrs);
//return array in foreach with new method
////////////using api///////////
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-Age",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Mystery",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Dystopian",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
  },
];
// const newBooks = books.filter((bk) => {
//   return bk.genre === "Fantasy";
// });
// console.log(newBooks);
const newBooks = books.filter((bk, index) => {
  return index, bk.genre === "Classic" || bk.genre === "Fantasy";
});
// console.log(newBooks);
// map method in javascript
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myNewNums = myNum.map((num) => {
  return num + 10;
});

const myheronum = [1, 2, 3, 4, 5];
const totals = myheronum.reduce((acc, crval) => {
  return acc + crval;
}, 0);
console.log(totals);
///////////////EVENTS IN JAVASCRIPT ////////////////////////////
