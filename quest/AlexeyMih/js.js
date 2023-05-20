var questions = [
  {
    question: "В каком возрасте Алексей Михайлович вступил на престол?",
    choices: ["16", "20", "14", "17"],
    answer: 0
  },
  {
    question: "В каком году было принято Соборное Уложение?",
    choices: [
        "1648",
        "1456",
        "1662",
        "1649"
    ],
    answer: 3
  },
  {
    question: "Куда Россия транспортировала хлебные запасы, что вызвало недовольство в 1650 году?",
    choices: ["Швеция", "Польша", "Турция", "Пруссия"],
    answer: 0
  },
  {
    question: "Кто такой Никита Минов",
    choices: ["патриарх", "митрополит", "брат царя", ") патриарх Никон, решивший исправить богослужебные книги"],
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