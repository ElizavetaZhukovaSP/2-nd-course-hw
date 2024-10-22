function GuessNumber() {
    let randomNumber = Number(Math.floor(Math.random() * 100) + 1);  // генерация случайного числа
    for (let i = 0; i < 6; i++) { // цикл выполняется не более 6 раз
      let userAnswer = Number (prompt('Угадай случайное число от 1 до 100'));
      if (Number(userAnswer) === Number(randomNumber)) {
        alert('Поздравляю, ты угадал(а)!!!');
        break; // выход из цикла при правильном ответе
      } else if (Number(userAnswer) > Number(randomNumber)){
        prompt('Моё число меньше, попробуй еще');
      } else {
        prompt('Моё число больше, попробуй еще');
      }
    }
    console.log(userAnswer, randomNumber);
}
