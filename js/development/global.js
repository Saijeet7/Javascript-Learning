"use strict";

// variable declaration in JavaScript

let username = {
  name: "Andrew",
  email: "saijeet2019@gmail.com",
};

username = {
  name: "Sandesh",
  email: "sandesh@gmail.com",
};

function init() {
  // if (true){
  //     // var email = 'saijeet2019@gmail.com';
  //     let email = 'saijeet2019@gmail.com';
  //     document.getElementById('output').innerHTML = email;
  // }
  document.getElementById(
    "output"
  ).innerHTML = `${username.name} (${username.email}) `;
  const email = "saijeet2019@gmail.com";
}

// Function declartaion in Javascript

// const init = (name, isTrue) => {
//   document.getElementById(
//     "output"
//   ).innerHTML = `${username.name} (${username.email}) `;
// };

// function nameString() {
//   return `${username.name} (${username.email})`;
// }

// const nameString = (name) => `${name} (${username.email})`;

// document.getElementById("output").innerHTML = nameString("Andrew");

let users = [
  {
    name: "Andrew",
    email: "andrew@example.com",
  },
  {
    name: "Robin",
    email: "robin@example.com",
  },
];

let names = [];

// users.forEach(function(user){
//     // do something with that user object
//     names.push(user.name);
// })

users.forEach((user) => names.push(user.name));
document.getElementById("output").innerHTML = names.join(", ");
document.getElementById("btn").addEventListener("click", (e) => {
  const getDetails = () => {
    return `The button id is ${e.currentTarget.getAttribute("id")}`;
  };
  document.getElementById("output").innerHTML = getDetails();
});
