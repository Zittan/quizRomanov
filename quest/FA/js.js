var questions = [
  {
    question: "Как звали мать царя Федора Алексеевича?",
    choices: ["Евдокия Долгорукова", "Мария Ромодановская", "Мария Милославская", "Марина Трубецкая"],
    answer: 2
  },
  {
    question: "Что из перечисленного связано с царем Федором Алексеевичем",
    choices: [
        "попытка стать королем Речи Посполитой",
        "поездка в Швецию",
        "командование войсками в русско-турецкой войне",
        "создание потешных полков и активное в них участие самого царя в юности"
    ],
    answer: 0
  },
  {
    question: "Кто был учителем молодого царя Федора Алексеевича?",
    choices: ["Софроний Лихуд", "Василий Бурцов", "Симеон Полоцкий", "Симон Ушаков"],
    answer: 2
  },
  {
    question: "С каким государством Россия вела войну в год вступления на престол Федора Алексеевича?",
    choices: ["Османская империя", "Османская империя", "Персия", "Швеция"],
    answer: 1
  },
  {
    question: "Кто из перечисленных деятелей не был сподвижником царя Федора Алексеевича?",
    choices: ["Боярин Артамон Матвеев", "Патриарх Иоаким", "Иван Милославский", "Александр Меншиков"],
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