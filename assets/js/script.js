import { present, past, future, pastfuture } from "./tenses.js";

const button = document.querySelector("button");
const text = document.querySelector(".text");
const left = document.getElementById("left");
const right = document.getElementById("right");
// const info = document.querySelector("i");

function tenses(l, r) {
   return left.value == l && right.value == r;
}

button.addEventListener("click", function () {
   text.innerHTML = tenses("1", "1")
      ? present.simple
      : tenses("1", "2")
      ? present.continous
      : tenses("1", "3")
      ? present.perfect
      : tenses("1", "4")
      ? present.perfect_continous
      : //

      tenses("2", "1")
      ? past.simple
      : tenses("2", "2")
      ? past.continous
      : tenses("2", "3")
      ? past.perfect
      : tenses("2", "4")
      ? past.perfect_continous
      : //

      tenses("3", "1")
      ? future.simple
      : tenses("3", "2")
      ? future.continous
      : tenses("3", "3")
      ? future.perfect
      : tenses("3", "4")
      ? future.perfect_continous
      : //

      tenses("4", "1")
      ? pastfuture.simple
      : tenses("4", "2")
      ? pastfuture.continous
      : tenses("4", "3")
      ? pastfuture.perfect
      : tenses("4", "4")
      ? pastfuture.perfect_continous
      : "Invalid";

   // info.style.display = text.innerHTML == "Invalid" ? "none" : "block";
});
