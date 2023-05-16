var questions = [
  {
    question: "Кто был министром финансов Российской империи в конце XIX века?",
    choices: ["Гучков", "Плеве", "Витте", "Распутин"],
    answer: 2
  },
  {
    question: "Какой курс развития России поддержал Император Николай II, вступив на престол?",
    choices: [
        "Приоритетная поддержка развития сельского хозяйства",
        "Привлечение иностранного финансового капитала и подчинение ему русской экономики",
        "Политика протекционизма, то есть поддержка развития собственной промышленности, индустриализация и модернизация России при активном реформировании сельского хозяйства.",
        "Реформа судебной системы"
    ],
    answer: 1
  },
  {
    question: "Что стало главной причиной давки на Ходынском поле?",
    choices: ["Злонамеренность властей", "Халатность властей", "Неожиданное скопление слишком большого числа людей на отдельном участке поля и невозможность из-за этого его покинуть.", "Неудачный выбор места"],
    answer: 2
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