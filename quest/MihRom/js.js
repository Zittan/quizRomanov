var questions = [
  {
    question: "В каком возрасте вступил на престол Михаил Романов?",
    choices: ["15", "16", "17", "20"],
    answer: 1
  },
  {
    question: "На сколько лет было заключено Деулинское перемирие?",
    choices: [
        "10",
        "10.5",
        "9.5",
        "14,5"
    ],
    answer: 3
  },
  {
    question: "Основной соперник России во время правления Михаила Романова?",
    choices: ["Пруссия", "Англия", "Турция", "Польша"],
    answer: 3
  },
  {
    question: "В каком году Филарет был возвращен из плена?",
    choices: ["1617", "1618", "1619", "1634"],
    answer: 2
  },
  {
    question: "Кто такой Федор Никитич (Филарет)?",
    choices: ["друг царя", "приближенный царя", "отец царя", "брат царя"],
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