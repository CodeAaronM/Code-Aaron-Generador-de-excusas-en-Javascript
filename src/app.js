/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

const generateExcuse = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function randomize(number){
    e = Math.floor(Math.random() * number.length)
    return e
  }

  let whoIndex = randomize(who);
  let actionIndex = randomize(action);
  let whatIndex = randomize(what);
  let whenIndex = randomize(when);
  let a =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];
  return a;
};
const button = document.querySelector("#boton");
button.addEventListener("click", event => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
});
