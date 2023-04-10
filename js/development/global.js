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

init();

// Function declartaion in Javascript

