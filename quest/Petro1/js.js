var questions = [
  {
    question: "После смерти Петра I началась?",
    choices: ["Эпоха дворцовых переворотов", "Междоусобная война", "Смута"],
    answer: 0
  },
  {
    question: "Пётр II приходится Петру I?",
    choices: [
        "внуком",
        "зятем",
        "сыном",
    ],
    answer: 0
  },
  {
    question: "Согласно какому указу Пётр I - глава государства мог сам по своему усмотрению назначать себе преемника?",
    choices: ["Указ о воли монаршей", "Указ о престолонаследии", "Указ о единонаследии"],
    answer: 1
  },
  {
    question: "Что из названного было характерно для экономического развития России в начале XX в.?",
    choices: ["монополизация промышленности", "начало промышленного переворота", "начало железнодорожного строительства", "отсутствие иностранных инвестиций в экономику"],
    answer: 2
  }
];
questions = shuffle(questions);

var currentQuestion = 0;
var score = 0;
var quizContainer = document.getElementById('quiz');
var questionEl = document.getElementById('question');
var choicesEl = document.getElementById('choices');
var submitButton = document.getElementById('submit');
var scoreEl = document.getElementById('score');

function loadQuestion() {
  questionEl.textContent = questions[currentQuestion].question;
choicesEl.innerHTML = ''; // очищаем список ответов
   // создаем элементы списка для каждого варианта ответа
   for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
     var choice = questions[currentQuestion].choices[i];
     var li = document.createElement('li');
     li.innerHTML = '<input type="radio" name="choice" value="' + i + '"> ' + choice;
     choicesEl.appendChild(li);
   }
 }

 function checkAnswer() {
   var selectedChoice = document.querySelector('input[name=choice]:checked');
   if (!selectedChoice) {
     alert('Пожалуйста, выберите ответ!');
     return;
   }
   var answerIndex = parseInt(selectedChoice.value);
   if (answerIndex === questions[currentQuestion].answer) {
     score++;
   }
   currentQuestion++;
   if (currentQuestion === questions.length) {
     showResults();
   } else {
     loadQuestion();
   }
 }

 function showResults() {
   quizContainer.style.display = 'none';
   scoreEl.textContent = 'Вы набрали ' + score + ' правильных ответов из ' + questions.length + ' вопросов';
 }
 function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

questions = shuffle(questions);
loadQuestion();
 loadQuestion();
submitButton.addEventListener('click', checkAnswer);