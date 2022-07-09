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
      text.innerHTML =
         "SIMPLE PRESENT TENSE<br><br>Rumus :<br>(+) S + V.1<br>(-) S + Do/Does + not + V.1<br>(?) Do/Does + S + V.1 ?<br><br>Contoh :<br>(+) I sing a song<br>(-) I do not sing a song<br>(?) Do I sing a song ?";
   } else if (left.value == "1" && right.value == "2") {
      text.innerHTML =
         "PRESENT CONTINUOUS TENSE<br><br>Rumus :<br>(+) S + ToBe(am/are/is) + V.ing<br>(-) S + ToBe + not + V.ing<br>(?) ToBe + S + V.ing ?<br><br>Contoh :<br>(+) I am singing a song<br>(-) I am not singing a song<br>(?) Am i singing a song ?";
   } else if (left.value == "1" && right.value == "3") {
      text.innerHTML =
         "PRESENT PERFECT TENSE<br><br>Rumus :<br>(+) S + Have/Has + V.3<br>(-) S + Have/Has + Not + V.3<br>(?) Have/Has + S + V.3 ?<br><br>Contoh :<br>(+) I have sung a song<br>(-) I have not sung a song<br>(?) Have i sung a song ?";
   } else if (left.value == "1" && right.value == "4") {
      text.innerHTML =
         "PRESENT PERFECT CONTINUOUS TENSE<br><br>Rumus :<br>(+) S + Have/Has + Been + V.ing<br>(-) S + Have/Has + Not + Been + V.ing<br>(?) Have/Has + S + Been + V.ing ?<br><br>Contoh :<br>(+) I have been singing a song<br>(-) I have not been singing a song<br>(?) Have i been singing a song ?";
   }

   // Past
   else if (left.value == "2" && right.value == "1") {
      text.innerHTML =
         "SIMPLE PAST TENSE<br><br>Rumus :<br>(+) S + V.2<br>(-) S + Did + not + V.1<br>(?) Did + S + V.1 ? <br><br>Contoh :<br>(+) I sang a song<br>(-) I did not sing a song<br>(?) Did i sing a song ?";
   } else if (left.value == "2" && right.value == "2") {
      text.innerHTML =
         "PAST CONTINUOUS TENSE<br><br>Rumus :<br>(+) S + ToBe(was/ware) + V.ing<br>(-) S + ToBe + not + V.ing<br>(?) ToBe + S + V.ing ? <br><br>Contoh :<br>(+) I was singing a song<br>(-) I was not singing a song<br>(?) Was i singing a song ?";
   } else if (left.value == "2" && right.value == "3") {
      text.innerHTML =
         "PAST PERFECT TENSE<br><br>Rumus :<br>(+) S + Had + V.3<br>(-) S + Had + Not + V.3<br>(?) Had + S + V.3 ? <br><br>Contoh :<br>(+) I had sung a song<br>(-) I had not sung a song<br>(?) Had i sung a song ?";
   } else if (left.value == "2" && right.value == "4") {
      text.innerHTML =
         "PAST PERFECT CONTINUOUS TENSE<br><br>Rumus :<br>(+) S + Had + Been + V.ing<br>(-) S + Had + Not + Been + V.ing<br>(?) Had + S + Been + V.ing ? <br><br>Contoh :<br>(+) I had been singing a song<br>(-) I had not been singing a song<br>(?) Had i been singing a song ?";
   }

   // Future
   else if (left.value == "3" && right.value == "1") {
      text.innerHTML =
         "SIMPLE FUTURE TENSE<br><br>Rumus :<br>(+) S + Will + V.1<br>(-) S + Will + Not + V.1<br>(?) Will + S + V.1 ? <br><br>Contoh :<br>(+) I will sing a song<br>(-) I will not sing a song<br>(?) Will i sing a song ?";
   } else if (left.value == "3" && right.value == "2") {
      text.innerHTML =
         "FUTURE CONTINUOUS TENSE<br><br>Rumus :<br>(+) S + Will + Be + V.ing<br>(-) S + Will + Not + Be + V.ing<br>(?) Will + S + Be + V.ing ? <br><br>Contoh :<br>(+) I will be singing a song<br>(-) I will not be singing a song<br>(?) Will i be singing a song ?";
   } else if (left.value == "3" && right.value == "3") {
      text.innerHTML =
         "FUTURE PERFECT TENSE<br><br>Rumus :<br>(+) S + Will + Have + V.3<br>(-) S + Will + Not + Have + V.3<br>(?) Will + S + Have + V.3 ? <br><br>Contoh :<br>(+) I will have sung a song<br>(-) I will not have sung a song<br>(?) Will i have sung a song ?";
   } else if (left.value == "3" && right.value == "4") {
      text.innerHTML =
         "FUTURE PERFECT CONTINUOUS TENSE<br><br>Rumus :<br>(+) S + Will + Have + Been + V.ing<br>(-) S + Will + Not + Have + Been + V.ing ? <br>(?) Will + S + Have + Been + V.ing<br><br>Contoh :<br>(+) I will have been singing a song<br>(-) I will not have been singing a song<br>(?) Will i have been singing a song ?";
   }

   // Past Future
   else if (left.value == "4" && right.value == "1") {
      text.innerHTML =
         "SIMPLE PAST FUTURE TENSE<br><br>Rumus :<br>(+) S + Would + V.1<br>(-) S + Would + Not + V.1<br>(?) Would + S + V.1 ?<br><br>Contoh :<br>(+) I would sing a song<br>(-) I would not sing a song<br>(?) Would i sing a song ?";
   } else if (left.value == "4" && right.value == "2") {
      text.innerHTML =
         "PAST FUTURE CONTINUOUS TENSE<br><br>Rumus :<br>(+) S + Would + Be + V.ing<br>(-) S + Would + Not + Be + V.ing<br>(?) Would + S + Be + V.ing ?<br><br>Contoh :<br>(+) I would be singing a song<br>(-) I would not be singing a song<br>(?) Would i be singing a song ?";
   } else if (left.value == "4" && right.value == "3") {
      text.innerHTML =
         "PAST FUTURE PERFECT TENSE<br><br>Rumus :<br>(+) S + Would + Have + V.3<br>(-) S + Would + Not + Have + V.3<br>(?) Would + S + Have + V.3 ?<br><br>Contoh :<br>(+) I would have sung a song<br>(-) I would not have sung a song<br>(?) Would i have sung a song ?";
   } else if (left.value == "4" && right.value == "4") {
      text.innerHTML =
         "PAST FUTURE PERFECT CONTINUOUS TENSE<br><br>Rumus :<br>(+) S + Would + Have + Been + V.ing<br>(-) S + Would + Not + Have + Been + V.ing<br>(?) Would + S + Have + Been + V.ing ?<br><br>Contoh :<br>(+) I would have been singing a song<br>(-) I would not have been singing a song<br>(?) Would i have been singing a song ?";
   }
});
