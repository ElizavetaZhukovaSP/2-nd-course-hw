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

  while (true){ // решение второй задачи
    let taskStringToo = [`${randomNum2} ${matSigns[result]}  ${randomNum2}`];
    let taskToo = Math.floor(eval(`${randomNum2} ${matSigns[result]} ${randomNum2}`));
    console.log(taskToo);
    let answerToo = +prompt (`Давай еще : ${taskStringToo.join()}`);
    
    if (answerToo === taskToo) {
      alert('Молодец! Правильно!');
      break;
    } else { 
      alert(`Неверно! Попробуй еще:)`);
    }
  }
   
    
}

