let quiz = {
// PROPERTIES
// QUESTIONS & ANSWERS
// Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
data: [
{
q: "Как звали жену князя ополчившуюся на древлян?",
o: [
"Антон",
"Евгений",
"Ольга",
"Никита",
],
a: 2
},
{
q: "С прекращением правления какого князя, как полагают историки, начался период раздробленности?",
o: [
"Владимира Мономаха",
"Мстислава Великого",
"Ярослава Мудрого",
"Владимира Святославича",
],
a: 1
},
{
q: "Официальный титул главы церкви в Древней Руси пери­ода раздробленности",
o: [
"глава Русской православной церкви",
"митрополит Русской православной церкви",
"митрополит Киевский и Всея Руси",
"патриарх Киевский и Всея Руси",
],
a: 2
},
  ],
// HTML ELEMENTS
hWrap: null, // HTML quiz container
hQn: null, // HTML question wrapper
hAns: null, // HTML answers wrapper
// GAME FLAGS
now: 0, // current question
score: 0, // current score
// INIT QUIZ HTML
init: () => {
// WRAPPER
quiz.hWrap = document.getElementById("quizWrap");
// QUESTIONS SECTION
quiz.hQn = document.createElement("div");
quiz.hQn.id = "quizQn";
quiz.hWrap.appendChild(quiz.hQn);
// ANSWERS SECTION
quiz.hAns = document.createElement("div");
quiz.hAns.id = "quizAns";
quiz.hWrap.appendChild(quiz.hAns);
// GO!
quiz.draw();
},
// DRAW QUESTION
draw: () => {
// QUESTION
quiz.hQn.innerHTML = quiz.data[quiz.now].q;
// OPTIONS
quiz.hAns.innerHTML = "";
for (let i in quiz.data[quiz.now].o) {
let radio = document.createElement("input");
radio.type = "radio";
radio.name = "quiz";
radio.id = "quizo" + i;
quiz.hAns.appendChild(radio);
let label = document.createElement("label");
label.innerHTML = quiz.data[quiz.now].o[i];
label.setAttribute("for", "quizo" + i);
label.dataset.idx = i;
label.addEventListener("click", () => {
quiz.select(label);
});
quiz.hAns.appendChild(label);
}
},
// OPTION SELECTED
select: (option) => {
//  DETACH ALL ONCLICK
let all = quiz.hAns.getElementsByTagName("label");
for (let label of all) {
label.removeEventListener("click", quiz.select);
}
// CHECK IF CORRECT
let correct = option.dataset.idx == quiz.data[quiz.now].a;
if (correct) {
quiz.score++;
option.classList.add("correct");
} else {
option.classList.add("wrong");
}
// NEXT QUESTION OR END GAME
quiz.now++;
setTimeout(() => {
if (quiz.now < quiz.data.length) { quiz.draw(); }
else {
quiz.hQn.innerHTML = `Вы ответили на ${quiz.score} из ${quiz.data.length} правильно.`;
quiz.hAns.innerHTML = "";
}
}, 1000);
},
// RESTART QUIZ
reset : () => {
quiz.now = 0;
quiz.score = 0;
quiz.draw();
}
};
window.addEventListener("load", quiz.init);