import _ from "./json/tenses.json" assert { type: "json" };

const button = document.querySelector("button");
const text = document.querySelector(".text");
const left = document.getElementById("left");
const right = document.getElementById("right");
// const info = document.querySelector("i");

function select(l, r) {
   return left.value == l && right.value == r;
}

button.addEventListener("click", function () {
   text.innerHTML = select("1", "1")
      ? _.present.simple
      : select("1", "2")
      ? _.present.continous
      : select("1", "3")
      ? _.present.perfect
      : select("1", "4")
      ? _.present.perfect_continous
      : //

      select("2", "1")
      ? _.past.simple
      : select("2", "2")
      ? _.past.continous
      : select("2", "3")
      ? _.past.perfect
      : select("2", "4")
      ? _.past.perfect_continous
      : //

      select("3", "1")
      ? _.future.simple
      : select("3", "2")
      ? _.future.continous
      : select("3", "3")
      ? _.future.perfect
      : select("3", "4")
      ? _.future.perfect_continous
      : //

      select("4", "1")
      ? _.pastfuture.simple
      : select("4", "2")
      ? _.pastfuture.continous
      : select("4", "3")
      ? _.pastfuture.perfect
      : select("4", "4")
      ? _.pastfuture.perfect_continous
      : "Invalid";

   // info.style.display = text.innerHTML == "Invalid" ? "none" : "block";
});
