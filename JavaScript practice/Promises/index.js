// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//     console.log("Async");
//   }, 1000);
// });
// promise1.then(() => {
//   console.log("promise consumed");
// });

//
// const promisetwo = new Promise((resolve, reject) => {
//   console.log("hello world");
//   resolve({
//     user: "zlaam",
//     mail: "khan@example.com",
//     role: "web developers",
//   });
// });
// promisetwo.then((user) => {
//   console.log(user);
// });

///
// node .\Promises .\index.js
// const promisthree = new Promise((resolve, reject) => {
//   let error = false;
//   if (!error) {
//     resolve({
//       user: "zlaam",
//       mail: "khan@example.com",
//       role: "web developers",
//     });
//   } else reject("something went wrong");
// });
// promisthree
//   .then((user) => {
//     console.log(user);
//     return user.mail;
//   })
//   .then((mail) => {
//     console.log(mail);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//////
// const promisefour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "siraj",
//         password: "12345",
//         email: "khansardar@example.com",
//       });
//     } else {
//       reject("js went wrong");
//     }
//   }, 1000);
// });
// const promiseConsumedFive = async () => {
//   try {
//     const response = await promisefour;
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// };
// promiseConsumedFive();
// const AllUserData = async () => {
//   try {
//     const res = await fetch("https://random-data-api.com/api/v2/users");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// AllUserData();

fetch("https://random-data-api.com/api/v2/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
