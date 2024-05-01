/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let who = ["The dog", "My grandma", "The mailman", "My bird", "The aliens"];
let action = ["ate", "peed", "crushed", "broke", "attacked"];
let what = ["my homework", "my phone", "the car", "my house"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
  "while i was taking a shower"
];

const random = arr => {
  let randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
};

const myExcuse = () => {
  document.getElementById("excuse").innerHTML =
    random(who) +
    " " +
    "<b>" +
    random(action) +
    "</b>" +
    " " +
    "<b>" +
    random(what) +
    "</b>" +
    " " +
    random(when);
};

myExcuse();
