import { present, past, future, pastfuture } from "./tenses.js";

const button = document.querySelector("button");
const text = document.querySelector(".text");
const left = document.getElementById("left");
const right = document.getElementById("right");
// const info = document.querySelector("i");

button.addEventListener("click", function () {
   // info.style.display = "block";
   if (left.value == "" || right.value == "") {
      text.innerHTML = "Invalid";
      // info.style.display = "none";
   }

   // Present
   else if (left.value == "1" && right.value == "1") {
      text.innerHTML = present.simple;
   } else if (left.value == "1" && right.value == "2") {
      text.innerHTML = present.continous;
   } else if (left.value == "1" && right.value == "3") {
      text.innerHTML = present.perfect;
   } else if (left.value == "1" && right.value == "4") {
      text.innerHTML = present.prefect_continous;
   }

   // Past
   else if (left.value == "2" && right.value == "1") {
      text.innerHTML = past.simple;
   } else if (left.value == "2" && right.value == "2") {
      text.innerHTML = past.continous;
   } else if (left.value == "2" && right.value == "3") {
      text.innerHTML = past.perfect;
   } else if (left.value == "2" && right.value == "4") {
      text.innerHTML = past.prefect_continous;
   }

   // Future
   else if (left.value == "3" && right.value == "1") {
      text.innerHTML = future.simple;
   } else if (left.value == "3" && right.value == "2") {
      text.innerHTML = future.continous;
   } else if (left.value == "3" && right.value == "3") {
      text.innerHTML = future.perfect;
   } else if (left.value == "3" && right.value == "4") {
      text.innerHTML = future.prefect_continous;
   }

   // Past Future
   else if (left.value == "4" && right.value == "1") {
      text.innerHTML = pastfuture.simple;
   } else if (left.value == "4" && right.value == "2") {
      text.innerHTML = pastfuture.continous;
   } else if (left.value == "4" && right.value == "3") {
      text.innerHTML = pastfuture.perfect;
   } else if (left.value == "4" && right.value == "4") {
      text.innerHTML = pastfuture.prefect_continous;
   }
});
