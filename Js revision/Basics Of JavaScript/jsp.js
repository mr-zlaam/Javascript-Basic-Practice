// ************************ OBJECTS IN JAVASCRIPT ******************//
//                      *** Declaretion of the Objects
// Example One:
const user = {
  "full Name": "zlaam and siraj",
  firstName: "mr zlaam",
};
// console.log(user["full Name"]);

const objOne = {
  name: "siraj",
  class: "ni parta",
  greetings: function () {
    console.log(`How are you ${this.name}`);
  },
};
// console.log(objOne.greetings());
// Example two
const objTwo = {
  name: "siraj",
  classIN: "ni parta",
  greetings: function () {
    // console.log(`How are you ${this.name}`);
  },
};
const { greetings } = objTwo;
// console.log(greetings());

// ************Example three:
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj2 = {
  d: 1,
  e: 2,
  f: 3,
};
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// ***************Some object mehods ********************************

//.key method and value: Key method is used to convert objects  into Array while Value() mehod is used to convert the value of the keys into the Array here is the example of both

const newObj = {
  d: 1,
  e: 2,
  f: 3,
};
// console.log(Object.keys(newObj)); // [ 'd', 'e', 'f' ] As you can see in the asnwer in the form of Array. So the result is it can convert the object keys into the array.

// console.log(Object.values(newObj)); //[1, 2, 3] As you can see in the answer in the form of Array. This mehod changed the values of the key into the array.
//    ***************.hasownproperty method in objects*****************
// hasownpropert method is used for to check the property is available in the object is available or not.

const objfour = {
  d: 1,
  e: 2,
  f: 3,
};
// console.log(objfour.hasOwnProperty("g"));

// ************************   FUNCTIONS IN JAVASCRIPT   **************************

// ****************************Adding two numbers in function*********************

const Function1 = (num1, num2) => {
  //   console.log(num1 + num2);
};
Function1(9, 3);

const Function2 = (userName) => {
  return `${userName} just logged in`;
};
// console.log(Function2("Zlaam"));

// // console.log(names);

// get value of the function in the form of the array "REST OPERATORS AND SPREAD OPERATORS"
// by the use of this three dots(...) we get all the values in the Arrays

/*const CalculatedPrice = (...num3) => {
  return num3;
};
console.log(CalculatedPrice(200, 300, 400, 500, 600, 700));*/
// if we want that just 600 some values stored in array then we use
const CalculatedPrice = (num1, num2, ...num3) => {
  return num3;
};
// console.log(CalculatedPrice(200, 300, 400, 500, 600, 700)); // the answer will be [ 400, 500, 600, 700 ] and you can see that first two value which is representing the num1,num2 aren't converted into the string.

//                                    using objects with functions

let users = {
  name: "siraj",
  Age: "23",
  role: "developer",
};

const ExtractValue = (objects) => {
  // console.log(
  //   `UserName is ${objects.name}, Age is ${objects.Age} and role is ${objects.role} `
  // );
};
// ExtractValue(users);

let myNewArr = [100, 200, 400, 500];
const extractValueArr = (getArr) => {
  return getArr[2];
};
// console.log(extractValueArr(myNewArr));
// *******************************Arrow function and this*****************
const myobject = {
  userName: "siraj",
  age: 20,
  welcomeMessage: function () {
    // console.log(
    //   `${this.userName} is a new talented Developer. He   is ${this.age} year old.`
    // );
  },
};
myobject.userName = "zlaam";
myobject.welcomeMessage();

// *******************ifi  imediately invoked function**********************
(function siraj() {
  // console.log("siraj is a");
})();
const siraj2 = (() => {
  // console.log(" good Boy");
})();
// **************************** Loops in javascript*********************

//     *****ForLoop ON NUmber hardcoded**********
// for (let index = 0; index < 10; index++) {
// const element = index;
// console.log(element);
//}
// ************For Loop on Array*************

// const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12];
// for (let index = 2; index < Arr.length; index++) {
//   const element = Arr[index];
//   // console.log(element);
// }
// *****************Loop inside Loop*******************
for (let index = 2; index <= 10; index++) {
  console.log(`Table of  ${index} is Here`);
  for (let i = 0; i <= 10; i++) {
    console.log(`${index} * ${i} =  ${index * i}`); // It will print table 2 to 10
  }
}
// *********************Break key word in for loop
// for (let i = 0; i <= 20; i++) {
//   if (i === 15) {
//     // console.log(`15`);
//     // console.log(`${i} is detected Now other numbers are useless`);
//     break;
//   }
//   // console.log(i);
// }
// for (let indexs = 0; indexs <= 20; indexs++) {
//   if (indexs === 15) {
//     continue;
//   }
//   // console.log(indexs);
// }
/// ****************************while loop********************

// Example:
// let index = 0;
// while (index <= 20) {
// console.log(`${index}`);
// index++;
// }
// Example with array
// let myarr = ["flask", "django", "laravel", "express", "nosql"];
// let i = 0;
// while (i < myarr.length) {
//   console.log(myarr[i]);
//   i = i + 1;
// }
// let myarr = ["flask", "django", "laravel", "express", "nosql"];
// let i = 0;
// while (i < myarr.length) {
//   console.log(myarr[i]);
//   i = i + 1;
// }
// ********************For Of and For in And for Loop******************
//For of loop
const forOfloop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (const value of forOfloop) {
  // console.log(value);
}
// For of loop on strings
const greetingss = "Hello World!";
for (const greet of greetingss) {
  if (greet === " ") {
    continue;
  }
  //  //console.log(greet);
}
// ******************For in Loop for Objects***********************
const yourObject = {
  name: "zlaam",
  age: 20,
  roll: "web-developer",
};
for (const key in yourObject) {
  if (key === `${yourObject[key]},`) {
    break;
  }
  // console.log(` ${key}: ${yourObject[key]},`);
}
//For in loop on Array
const languages = ["javascript", "typescript", "python", "java"];
for (const key in languages) {
  //  //console.log(` ${key}:${languages[key]}`);
}
//Example of OBjects
const userObject = {
  Js: "Javascript",
  CPP: "C++",
  Python: "Py",
  Typescript: "Typescript",
};
for (const key in userObject) {
  // console.log(`${key}:---------------${userObject[key]}`);
}
// ************FOREACH LOOP ONE OF THE MOST IMPORTANT***************
// Example 1 using ForEach
let languagesImp = ["Js", "Ts", "Ruby", "Py", "CPP"];
languagesImp.forEach((item, key) => {
  // console.log(key, item);
});
// Example Two:
let printMe = (item, index, Arr) => {
  // console.log(item, index, Arr);
};
// languagesImp.forEach(printMe);

// *******ForEach loop on Objects in Array **************
const myCoding = [
  {
    name: "javascript",
    fee: "2000",
  },
  {
    name: "python",
    fee: "1000",
  },
  {
    name: "Ruby",
    fee: 500,
  },
  {
    name: "php",
    fee: null,
  },
];
myCoding.forEach((item, keys) => {
  // console.log(
  //   `${keys}: Hello There I have very good Course of ${item.name} whose Fee is ${item.fee}`
  // );
});

// using loging in  foreach loop

//***************Drawback of the ForEachloop is it didn't return any thing*********
const codeByZlaam = myCoding.forEach((item, index) => {
  // console.log(item.name.toString(item).toUpperCase());
});
// console.log(codeByZlaam); //It will return nothing even we use Return keyword still answer will be the undefined //*** so We are going to use map or filter method;
//Filter mehtod using in javascript
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterNums = myNumbers.filter((nums) => {
  return nums > 4;
});
// console.log(filterNums);
// **using same thign doing foreach but here we will use logic

// const newNums = [];
// myNumbers.forEach((nums) => {
//   if (nums > 4) {
//     newNums.push(nums);
//   }
// });
// console.log(newNums);
const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "History",
    author: "Harper Lee",
    release: 1960,
  },
  {
    title: "1984",
    genre: "non-Fiction",
    author: "George Orwell",
    release: 1949,
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    author: "Jane Austen",
    release: 1813,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    author: "J.D. Salinger",
    release: 1951,
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    author: "F. Scott Fitzgerald",
    release: 1925,
  },
  {
    title: "Brave New World",
    genre: "Romance",
    author: "Aldous Huxley",
    release: 1932,
  },
  {
    title: "To Kill a Mockingbird",
    genre: "History",
    author: "Harper Lee",
    release: 1960,
  },
];

const newfilterbook = books.filter((items) => {
  return items.release > 1940 && items.genre === "History";
  // if (items.genre) {
  //   items.genre === "Fiction";
  // }
});
// console.log(newfilterbook);

// *********************Map Method in javascript*******************
//  Basic Example
const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const mynewNUms = newNumbers.map((items, index) => {
//   return items + 10;
// });
// console.log(mynewNUms);

let mynewCoding = newNumbers
  .map((nums) => nums * 10)
  .map((nums) => nums + 3)
  .filter((nums) => nums > 40);
// console.log(mynewCoding);

//*************************** Reduce Filter ****************************

const ArrOne = [1, 2, 3, 4, 5];
let value = 0;
const newArry = ArrOne.reduce((initialvalue, nextvalue) => {
  return initialvalue + nextvalue;
}, value);
// console.log(newArry);

const shopingCart = [
  {
    course: "Web-Development",
    Price: 500,
  },
  {
    course: "Ai-Engneering",
    Price: 10500,
  },
  {
    course: "App-Development",
    Price: 9999,
  },
];
const TotalBill = shopingCart.reduce((acc, item) => {
  return acc + item.Price;
}, 0);
// console.log(TotalBill);
