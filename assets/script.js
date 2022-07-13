import _ from "./tenses.json" assert { type: "json" };

const submit = document.querySelector("button");
const left = document.getElementById("left");
const right = document.getElementById("right");
const title = document.querySelector("b");
const explanation = document.querySelector(".explanation");
const formula = document.querySelector(".formula");
const example = document.querySelector(".example");

function select(l, r) {
   return left.value == l && right.value == r;
}

// On Submit
submit.addEventListener("click", function () {
   [title.innerHTML, explanation.innerHTML, formula.innerHTML, example.innerHTML] = select("1", "1")
      ? [
           _.title.present.simple,
           _.explanation.present.simple,
           _.formula.present.simple,
           _.example.present.simple,
        ]
      : select("1", "2")
      ? [
           _.title.present.continuous,
           _.explanation.present.continuous,
           _.formula.present.continuous,
           _.example.present.continuous,
        ]
      : select("1", "3")
      ? [
           _.title.present.perfect,
           _.explanation.present.perfect,
           _.formula.present.perfect,
           _.example.present.perfect,
        ]
      : select("1", "4")
      ? [
           _.title.present.perfectcontinuous,
           _.explanation.present.perfectcontinuous,
           _.formula.present.perfectcontinuous,
           _.example.present.perfectcontinuous,
        ]
      : //

      select("2", "1")
      ? [
           _.title.past.simple,
           _.explanation.past.simple,
           _.formula.past.simple,
           _.example.past.simple,
        ]
      : select("2", "2")
      ? [
           _.title.past.continuous,
           _.explanation.past.continuous,
           _.formula.past.continuous,
           _.example.past.continuous,
        ]
      : select("2", "3")
      ? [
           _.title.past.perfect,
           _.explanation.past.perfect,
           _.formula.past.perfect,
           _.example.past.perfect,
        ]
      : select("2", "4")
      ? [
           _.title.past.perfectcontinuous,
           _.explanation.past.perfectcontinuous,
           _.formula.past.perfectcontinuous,
           _.example.past.perfectcontinuous,
        ]
      : //

      select("3", "1")
      ? [
           _.title.future.simple,
           _.explanation.future.simple,
           _.formula.future.simple,
           _.example.future.simple,
        ]
      : select("3", "2")
      ? [
           _.title.future.continuous,
           _.explanation.future.continuous,
           _.formula.future.continuous,
           _.example.future.continuous,
        ]
      : select("3", "3")
      ? [
           _.title.future.perfect,
           _.explanation.future.perfect,
           _.formula.future.perfect,
           _.example.future.perfect,
        ]
      : select("3", "4")
      ? [
           _.title.future.perfectcontinuous,
           _.explanation.future.perfectcontinuous,
           _.formula.future.perfectcontinuous,
           _.example.future.perfectcontinuous,
        ]
      : //

      select("4", "1")
      ? [
           _.title.pastfuture.simple,
           _.explanation.pastfuture.simple,
           _.formula.pastfuture.simple,
           _.example.pastfuture.simple,
        ]
      : select("4", "2")
      ? [
           _.title.pastfuture.continuous,
           _.explanation.pastfuture.continuous,
           _.formula.pastfuture.continuous,
           _.example.pastfuture.continuous,
        ]
      : select("4", "3")
      ? [
           _.title.pastfuture.perfect,
           _.explanation.pastfuture.perfect,
           _.formula.pastfuture.perfect,
           _.example.pastfuture.perfect,
        ]
      : select("4", "4")
      ? [
           _.title.pastfuture.perfectcontinuous,
           _.explanation.pastfuture.perfectcontinuous,
           _.formula.pastfuture.perfectcontinuous,
           _.example.pastfuture.perfectcontinuous,
        ]
      : ["INVALID", "", "", ""];
});
