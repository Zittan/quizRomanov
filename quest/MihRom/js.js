var questions = [
  {
    question: "В каком году Михаил Федорович Романов стал царём России?",
    choices: ["1613", "1645", "1700", "1721"],
    answer: 0
  },
  {
    question: "Какие реформы были проведены за правления Михаила Федоровича Романова?",
    choices: [
        "Реформа центрального аппарата государства",
        "Реформа местной самоуправления",
        "Реформа армии",
        "Реформа судебной системы"
    ],
    answer: 3
  },
  {
    question: "Какое место занял Михаил Федорович Романов в цепи правления России?",
    choices: ["1-е место", "2-е место", "3-е место", "4-е место"],
    answer: 1
  },
  {
    question: "Какие войны происходили во время правления Михаила Федоровича Романова?",
    choices: ["Война с Швецией", "Война с Османской империей", "Война с Польшей", "Все вышеперечисленные войны"],
    answer: 3
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