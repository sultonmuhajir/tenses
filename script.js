const button = document.querySelector("button");
const hasil = document.querySelector("textarea");
const left = document.getElementById("left");
const right = document.getElementById("right");


button.addEventListener("click", function () {
   if (left.value == "" || right.value == "") {
      hasil.value = "Invalid";
   }


   // Present
   else if (left.value == "1" && right.value == "1") {
      hasil.value =
         "SIMPLE PRESENT TENSE\n\nRumus :\n(+) S + V.1\n(-) S + Do/Does + not + V.1\n(?) Do/Does + S + V.1 ?\n\nContoh :\n(+) I sing a song\n(-) I do not sing a song\n(?) Do I sing a song ?";
   } else if (left.value == "1" && right.value == "2") {
      hasil.value =
         "PRESENT CONTINUOUS TENSE\n\nRumus :\n(+) S + ToBe(am/are/is) + V.ing\n(-) S + ToBe + not + V.ing\n(?) ToBe + S + V.ing ?\n\nContoh :\n(+) I am singing a song\n(-) I am not singing a song\n(?) Am i singing a song ?";
   } else if (left.value == "1" && right.value == "3") {
      hasil.value =
         "PRESENT PERFECT TENSE\n\nRumus :\n(+) S + Have/Has + V.3\n(-) S + Have/Has + Not + V.3\n(?) Have/Has + S + V.3 ?\n\nContoh :\n(+) I have sung a song\n(-) I have not sung a song\n(?) Have i sung a song ?";
   } else if (left.value == "1" && right.value == "4") {
      hasil.value =
         "PRESENT PERFECT CONTINUOUS TENSE\n\nRumus :\n(+) S + Have/Has + Been + V.ing\n(-) S + Have/Has + Not + Been + V.ing\n(?) Have/Has + S + Been + V.ing ?\n\nContoh :\n(+) I have been singing a song\n(-) I have not been singing a song\n(?) Have i been singing a song ?";
   }


   // Past
   else if (left.value == "2" && right.value == "1") {
      hasil.value =
         "SIMPLE PAST TENSE\n\nRumus :\n(+) S + V.2\n(-) S + Did + not + V.1\n(?) Did + S + V.1 ? \n\nContoh :\n(+) I sang a song\n(-) I did not sing a song\n(?) Did i sing a song ?";
   } else if (left.value == "2" && right.value == "2") {
      hasil.value =
         "PAST CONTINUOUS TENSE\n\nRumus :\n(+) S + ToBe(was/ware) + V.ing\n(-) S + ToBe + not + V.ing\n(?) ToBe + S + V.ing ? \n\nContoh :\n(+) I was singing a song\n(-) I was not singing a song\n(?) Was i singing a song ?";
   } else if (left.value == "2" && right.value == "3") {
      hasil.value =
         "PAST PERFECT TENSE\n\nRumus :\n(+) S + Had + V.3\n(-) S + Had + Not + V.3\n(?) Had + S + V.3 ? \n\nContoh :\n(+) I had sung a song\n(-) I had not sung a song\n(?) Had i sung a song ?";
   } else if (left.value == "2" && right.value == "4") {
      hasil.value =
         "PAST PERFECT CONTINUOUS TENSE\n\nRumus :\n(+) S + Had + Been + V.ing\n(-) S + Had + Not + Been + V.ing\n(?) Had + S + Been + V.ing ? \n\nContoh :\n(+) I had been singing a song\n(-) I had not been singing a song\n(?) Had i been singing a song ?";
   }


   // Future
   else if (left.value == "3" && right.value == "1") {
      hasil.value =
         "SIMPLE FUTURE TENSE\n\nRumus :\n(+) S + Will + V.1\n(-) S + Will + Not + V.1\n(?) Will + S + V.1 ? \n\nContoh :\n(+) I will sing a song\n(-) I will not sing a song\n(?) Will i sing a song ?";
   } else if (left.value == "3" && right.value == "2") {
      hasil.value =
         "FUTURE CONTINUOUS TENSE\n\nRumus :\n(+) S + Will + Be + V.ing\n(-) S + Will + Not + Be + V.ing\n(?) Will + S + Be + V.ing ? \n\nContoh :\n(+) I will be singing a song\n(-) I will not be singing a song\n(?) Will i be singing a song ?";
   } else if (left.value == "3" && right.value == "3") {
      hasil.value =
         "FUTURE PERFECT TENSE\n\nRumus :\n(+) S + Will + Have + V.3\n(-) S + Will + Not + Have + V.3\n(?) Will + S + Have + V.3 ? \n\nContoh :\n(+) I will have sung a song\n(-) I will not have sung a song\n(?) Will i have sung a song ?";
   } else if (left.value == "3" && right.value == "4") {
      hasil.value =
         "FUTURE PERFECT CONTINUOUS TENSE\n\nRumus :\n(+) S + Will + Have + Been + V.ing\n(-) S + Will + Not + Have + Been + V.ing ? \n(?) Will + S + Have + Been + V.ing\n\nContoh :\n(+) I will have been singing a song\n(-) I will not have been singing a song\n(?) Will i have been singing a song ?";
   }


   // Past Future
   else if (left.value == "4" && right.value == "1") {
      hasil.value =
         "SIMPLE PAST FUTURE TENSE\n\nRumus :\n(+) S + Would + V.1\n(-) S + Would + Not + V.1\n(?) Would + S + V.1 ?\n\nContoh :\n(+) I would sing a song\n(-) I would not sing a song\n(?) Would i sing a song ?";
   } else if (left.value == "4" && right.value == "2") {
      hasil.value =
         "PAST FUTURE CONTINUOUS TENSE\n\nRumus :\n(+) S + Would + Be + V.ing\n(-) S + Would + Not + Be + V.ing\n(?) Would + S + Be + V.ing ?\n\nContoh :\n(+) I would be singing a song\n(-) I would not be singing a song\n(?) Would i be singing a song ?";
   } else if (left.value == "4" && right.value == "3") {
      hasil.value =
         "PAST FUTURE PERFECT TENSE\n\nRumus :\n(+) S + Would + Have + V.3\n(-) S + Would + Not + Have + V.3\n(?) Would + S + Have + V.3 ?\n\nContoh :\n(+) I would have sung a song\n(-) I would not have sung a song\n(?) Would i have sung a song ?";
   } else if (left.value == "4" && right.value == "4") {
      hasil.value =
         "PAST FUTURE PERFECT CONTINUOUS TENSE\n\nRumus :\n(+) S + Would + Have + Been + V.ing\n(-) S + Would + Not + Have + Been + V.ing\n(?) Would + S + Have + Been + V.ing ?\n\nContoh :\n(+) I would have been singing a song\n(-) I would not have been singing a song\n(?) Would i have been singing a song ?";
   }
});