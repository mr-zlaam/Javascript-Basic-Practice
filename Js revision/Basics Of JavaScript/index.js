//////////////////////////////////////DataTypes in Javascript///////////
//                    **** Permitive Data Types****
// There are seven types of perrmitive data Types
// 1:String, 2:Number, 3:Boolean, 4:null, undefined,, Symbols, BingInt
//Symbold example
const id = Symbol("1235");
const Anotherrid = Symbol("1235");
// console.log(id === Anotherrid);
//             ****Non Permitive(Reference) DataTypes*****
//Array, Objects, Functions
//Ararays

const Heroes = ["apply", "zlaam", "ironman"];
// console.log(Heroes);
const siraj = function () {
  console.log("hello world");
};
siraj();
// console.log(typeof siraj);

////////////////Stack and heap memory/////////////////
///stack memory =permitive data types while heap memory have non permitive data types////
// Example of Stack memory:
let myName = "zlaam";
let mySecondName = myName;
mySecondName = "siraj";
// console.log(myName);
// console.log(mySecondName); // It just make the copy of the variable and doesn't change the orignial one.
//Heap Memory Example:
let userone = {
  userMail: "example@gmail.com",
  id: 10,
};

let userTwo = userone;
userTwo.userMail = "kahnsardarsiraj@gamil.com";
// console.log(userone);
// console.log(userTwo); // It will change the orginal value from the variabe and note that it will jsut give the reference of the orginal variable if you change the value in copy variable the value also changes in original one.

//    ******************** Stirngs in Javascript ********************

const stringOne = "Siraj is ";
const stringTwo = " a good boy";
// console.log(
//   stringOne + stringTwo + " and  He is the greatest person i ever met"
// ); //Note that this is the old javascript and  this syntax is not recommended.
// console.log(
//   `${stringOne} ${stringTwo.toUpperCase()}   and  He is the greatest person i ever met`
// ); // This is the new and moder mathod to use strings concat.

/// how to get the the key value of strings in javascript here is  an example

const name = "Siraj";
// console.log(name[3]);
/////////////Strings Method//////////////////
// .Length method: It will tell the length of the strings you just need to add .length with the varialbe here is the example:
const myFirstName = "Siraj";
// console.log(myFirstName.length); //note thata the .length is not the funtion
// .toUppercase() and lowerCase(): .toUppercase and .LowerCase change all the character in the string to uppercase or lowercase for example:
const myLastName = "suduzai";
// console.log(myLastName.toUpperCase());
// console.log(myLastName.toLowerCase());

//.CharAt() and indexof() : This method tell you that where is my character is located mean on which key   character in a string is located and index of is the opposite of the charAt it will tell on which value the character is located.lets check it with example:
const myHero = "zlaam";
// console.log(myHero.charAt(1)); // It will give you the answer "l" and on 0  will be "z"
// console.log(myHero.indexOf("l")); // It will give you the answer "1"

// .Substring method(): it is used to get the specific character of the string here is the example lets check it out

const hero = "Itachi";
// console.log(hero.substring(0, 3)); //It will give you just three char "Ita" 0,1,2: Note that it will always give you the one number less from the last in above it will not give you that character whose index is 3 but it gives you character who is on 0th index and also remeber it will not work on the negative value.

//.Slice method(): Slice method is almost same like "substring" But it will also work on negative value and cut the string from the end when we give the negative value. Here is the example

const villain = "Madara";
// console.log(villain.slice(-8, 2)); // it will give you the answer Ma
// console.log(villain.slice(0, 3)); //it will also cut one character from the last just like substring.

//.TrimMethod(): It is the most commonly used method in javascript. It will remove extrawhite space from the String. Lets check with example;

const brokenHero = "         obito           ";
// console.log(brokenHero); // without trim method the answer will be "         obito      "
// console.log(brokenHero.trim()); // with trim method it will remove all the white space from the start and end. Note that it will not remove the spaces between words.
let hello = "khan is khan";
// console.log(hello.trim());// Then answer will be "khan is khan" As you can see it didn't cut the white spaces from the between

//.replace() method: replace() method is used to replace the specfic character with in string  for example.

let world = "hello world";
// console.log(world.replace("o", "t")); // The answer will be hellt world and note that it will change just first character  which match the character in the string  if you want to change it globally like all the "o" with "t" then you here is another example for this:
// let worlds = "hello world";
// console.log(world.replace(/o/g, "t")); //The anwer will be "hellt wtrld"

//.include()method: it is usually use to check the value is there or not and it will return you just boolean value ("true" or "false"). Here is the example
let halfjo = "Gogo is half now";
// console.log(halfjo.includes("o")); // The answer will be true because you can see "o" is there
// console.log(halfjo.includes("t")); // The answer will be false because there is not "t" in whole string.

//.split method: It will convert your string into array on the basis you what ever you want here is the example

const str = "Zlaam is a bad guy";
// console.log(str.split()); // The answer will be ["Zlaam is a bad guy"]. Note that i never put any base for it so thats why it converted whole string into array. If i give it any base which will maybe "spaces" "- dashes" or anything else here is example.
const strcpy = str;
// console.log(strcpy.split(" ")); // The answer will be [ 'Zlaam', 'is', 'a', 'bad', 'guy' ] in this example i split it on the base of whitespaces between the characters.
//********** */ here i tell myself all commonly used string methods*********** just practice it.///////

// **************NUMBERS AND MATH IN JAVASCRIPT***********

//Numbers and its Method
const score = 400;
// console.log(score);
const balance = new Number(2300.4545);
// console.log(balance.toFixed()); //Then answer will be "2300" // This is the most commonly used method in number it is used in when we want to get fixed value of number and want to avoid the decimal. we can also give the value in decimal like  "const price= 45" console.log(price.toFixed(2)) and it will print 45.00

const myNum = balance.toString(); // It is the method of number which is used to convert number into string. By doing this we can get all the properties of string.
// console.log(myNum);
// console.log(typeof myNum);
//   *********************MATHS********************
// console.log(Math.random() * 10 + 1); //It is used to avoid the decimal in the value
//  ********************ARRAY IN JAVASCRIPT THE BASE OF JAVASCRIPT **************

const Array = [1, 3, 4, 5, 6];
// console.log(Array);

//How to access the the single element the array? Ans: We can access the element by using index of the array and we all know that the index of the array alway start from the "0". The element in the array may be string, Numbers, Boolean, and any dataTypes. Here is the example that how we can access the single element in the Array.

// console.log(Array[4]); // 6 will be the answer of the this.
//  ***************************Array Method*********************

// .Push method: it is the method of the Arry which is used to add an element to the array here is the example of this:
let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
myArr.push(10); //  it will add the no "10" at  the end of the Array  so
// console.log(myArr); // The answer will be :[1, 2, 3, 4, 5, 6, 7, 8,10]

// .Pop() method: it is used to remove the last element from the array and it is always used with empty parenthesis. We can check it with example.

let ArrayOne = ["siraj", "khan", "zlaam"];
ArrayOne.pop();
// console.log(ArrayOne); // The answer will be [ 'siraj', 'khan' ] as you can see the last element has been removed from the array.

//.unshift() Method: unShift method is used to add the element on the start of the Array Here is  the example:
let ArrayTwo = ["superman", "batman", "flash"];
ArrayTwo.unshift("ironman");
// console.log(ArrayTwo); // So Answer will be :[ 'ironman', 'superman', 'batman', 'flash' ]. As you can see "ironman is added in the start of the Array"
//*.Shift() Method: shift method is used to remove the first element from the Array Here is the example of this lets check:

let ArrayThree = ["superman", "batman", "flash"];
ArrayThree.shift(); // *It does not take any argument unlike "unshift("hello")" but it is the opposite of the unshift()and it will remove the first element from the array.

// *console.log(ArrayThree); // so here is the answer = [ 'batman', 'flash' ] As you can see in the Answer it removed the  "superman" from the array.

//  **Note that Array also have these two methods "include() and indexof" just like string**

// **.Join() method: Join method is the method of the array which change the  array into string here is the example.
const newArr = ArrayThree.join();
// console.log(newArr); // The Answer will be "batman,flash"
// console.log(typeof newArr); // As you can see it already converted this into string

// ***************slice method() and splice method*************:

// these both methods are  used in Array in order to cut the element we alway give them the range and these both keep the element within the range and cut the element which are left. But the main difference between them the slice method makes the copy of the  orginal Array and change the things in copied Array and keep orginal Array safe while the splice method is quite opposite it if we make the changes in the copy of array then it will also make changes in the orignal Array. That is the main difference between the Array and this is also the tricky question in interview of javascript. Note that both cannot iclude the last range like in the below example they can't include the "3"

let Arrr = ["light", "johan", "lelouch", "youichi", "shadow"];
let newArrr = Arrr.slice(0, 3);
// console.log("slice", newArrr);
// console.log("sliceOriginalArr", Arrr); // difference here // it will return this "sliceOriginalArr["light", "johan", "lelouch", "youichi"]"

let myArrr = ["light", "johan", "lelouch", "youichi", "shadow"];
let mynewArrr = myArrr.splice(0, 3);
// console.log("splice", mynewArrr);
// console.log("spliceOriginalArr", myArrr); // it will return the  element which were left due to  not in range like  ["youichi", "shadow"] because it also make changes in orginal one.
// final answer is  here:
// slice [ 'light', 'johan', 'lelouch' ]
// sliceOriginalArr [ 'light', 'johan', 'lelouch', 'youichi' ]
// splice [ 'light', 'johan', 'lelouch' ]
// spliceOriginalArr [ 'youichi' ]

// *******************   Use spread operators to merge two arrays..........
//...spread operator are used to merge two array and the main function of the spread operator that it can spread all the element in the array i mean it  break the  previous array and and give the new array to all the element of the previous array . here is the example.
const marvel = ["ironman", "thor", "spiderman"];
const dc = ["superaman", "flash", "batman"];
const heroes = [...marvel, ...dc];
// console.log(heroes);

//     *******************.from method in Array
//.from method is a method which can convert almost every thing into the array because we mostly needed the array for looping so thats why we needed this so badly. This is the most common method in javascript to convert string, htmlcollection and nodelist etch into Array. Here are the some example of this .from method.
// const ourName = "zlaam";
const yourName = "siraj";
// console.log(Array.of(ourName, yourName)); // *.of will able to convert more than one variable into array while .from can convert only one variable at a time.
// console.log(Array.from(ourName));
// console.log(Array.from(yourName)); // here is the Answersssssssssss [ 'zlaam', 'siraj' ]
// [ 'z', 'l', 'a', 'a', 'm' ]
// [ 's', 'i', 'r', 'a', 'j' ]

// *************************Next topic is on  the nex file JSP
