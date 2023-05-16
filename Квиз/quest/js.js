var questions = [
  {
    question: "В каком году произошло 'Октябрьское воззвание' Ленина?",
    choices: ["1917", "1918", "1919", "1920"],
    answer: 0
  },
  {
    question: "Какое событие привело к началу Первой мировой войны?",
    choices: [
        "Убийство Архидука Фердинанда в Сараеве",
        "Аннексия Австрией Боснии и Герцеговины",
        "Присоединение Крыма Россией",
        "Подписание договора о нейтралитете между Германией и Россией"
    ],
    answer: 0
  },
  {
    question: "Кто был последним царём Российской империи?",
    choices: ["Николай II", "Александр III", "Петр I", "Иван IV"],
    answer: 0
  }
];

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

 loadQuestion();
submitButton.addEventListener('click', checkAnswer);