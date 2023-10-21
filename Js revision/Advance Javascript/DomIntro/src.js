const parent = document.querySelector(".parent");
//       for (let i = 0; i < parent.children.length; i++) {
//         console.log(parent.children[i].innerText);
//         parent.children[(0, 1, 2, 3)].style.backgroundColor = "red";
//         parent.children[(0, 1, 2, 3)].style.padding = "20px";
//       }
// console.log(parent.firstElementChild);
// parent.firstElementChild.style.backgroundColor = "orange";
//       parent.lasttElementChild.style.backgroundColor = "orange";
//       parent.nth(3).style.backgroundColor = "orange";

//********?Creating the new element in the Dom**************
// const div = document.createElement("div");
// // console.log(div);
// div.className = "main";
// const Styleing = document.getElementsByClassName("main");
// console.log(Styleing);
// div.style.backgroundColor = "green";
// div.style.height = "100vh";
// div.style.width = "100%";
// div.innerHTML = "Hello World";
// const addText = document.createTextNode("Hello world");
// div.appendChild(addText);
// document.body.appendChild(div);
// *********************************?Edit or remove Element from The Dom****
const AddLang = (langName) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(listItem);
};
AddLang("Python");
const addlanguage = (lang) => {
  const li = document.createElement("li");
  const addText = document.createTextNode(
    ` The name of the language is ${lang}`
  );
  li.appendChild(addText);
  document.querySelector(".language").appendChild(li);
};
addlanguage("TypeScript");
//***********Edit the element in Dom/////////////////////////////////////
// const editingSecond = document.querySelector("li:nth-child(2)");
// editingSecond.innerHTML = "mojo"; // **? not optimized aprroach
const editingSecond = document.querySelector("li:nth-child(2)");
const newLi = document.createElement("li");
newLi.textContent = "goolang";
editingSecond.replaceWith(newLi);
// **Another Example:

const AddfirstLanguage = document.querySelector("li:nth-child(1)");
const newanotherLi = document.createElement("li");
newanotherLi.textContent = "Kotlin";
AddfirstLanguage.replaceWith(newanotherLi);

// *****************? Deleting the element from the dom
const removeChild = document.querySelector("li:last-child");
removeChild.remove();
