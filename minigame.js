function GuessNumber() {
    let randomNumber = Number(Math.floor(Math.random() * 100) + 1);
    console.log(randomNumber);  // генерация случайного числа
    for (let i = 0; true; i++) { 
      let userAnswer = Number (prompt('Угадай случайное число от 1 до 100'));
      console.log(userAnswer);
      if (Number(userAnswer) === Number(randomNumber)) {
        alert('Поздравляю, ты угадал(а)!!!');
        break; // выход из цикла при правильном ответе
      } else if (Number(userAnswer) > Number(randomNumber)){
        alert('Моё число меньше, попробуй еще');
      } else {
        alert('Моё число больше, попробуй еще');
      }
    }
    
}

function SimpleArithmetic() {
  function generateProduct( min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let randomNum1 = generateProduct(0, 20);
  let randomNum2 = generateProduct(0, 10);
  const matSigns = ['+', '-', '*', '/'];
  let result = genSings();
   

  function genSings() {
    return Math.ceil(Math.random() * (matSigns.length));
  }

  while (true){
    let taskString = [`${randomNum1} ${matSigns[result]} ${randomNum2}`];
    let task = Math.floor(eval(`${randomNum1} ${matSigns[result]} ${randomNum2}`));
    console.log(task);
    let answer = +prompt(`Реши задачу и введи ответ: ${taskString.join()}`);
    if (answer === task) {
      alert('Молодец! Правильно!');
      break;
    } else { 
      alert(`Неверно! Попробуй еще:)`);
    }
  }
  const more = confirm('Может быть решишь еще? Если нет, то нажми "Отмена"')
   if (more) {
    SimpleArithmetic()
  }
    
}

function FlipText(){

  function reverseText(text) {
    return text.split("").reverse().join("");
  }
  const userInput = prompt("Введите текст, который вы хотите перевернуть");
  const reversedText = reverseText(userInput);
  alert("Перевернутый текст: " + reversedText);

  const more = confirm('Может быть хочешь еще? Если нет, то нажми "Отмена"')
  if (more) {
    FlipText()
  }
}

function Quiz(){
  // Массив вопросов и правильных ответов
  const quiz = [
    {
      question: "Какого цвета небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2 // номер правильного ответа
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2
    }
  ];

  // Функция для проверки правильности ответа пользователя
  function checkAnswer(userAnswer, correctAnswer) {
    return userAnswer === correctAnswer;
  }

  // Подсчёт количества правильных ответов
  let correctAnswers = 0;

  // Отображение вопросов и вариантов ответов пользователю
  for (let i = 0; i < quiz.length; i++) {
      const question = quiz[i];
      console.log("Вопрос №" + (i + 1));
      console.log(question.question);
      const userAnswer = +prompt(`Введите номер варианта ответа на: \n${quiz[i].question} \n ${quiz[i].options}`);
      console.log(userAnswer);
    if (checkAnswer(userAnswer, question.correctAnswer)) {
      correctAnswers++;
    }
    
    // Запрос ответа от пользователя и проверка правильности
    
  }

  // Вывод результата викторины
  alert("Вы правильно ответили на " + correctAnswers + " вопросов из " + quiz.length + ".");

}
function RockScissorsPaper () {
  
}