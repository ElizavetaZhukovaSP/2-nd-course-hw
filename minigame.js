function GuessNumber() {
    let randomNumber = Number(Math.floor(Math.random() * 100) + 1);
    console.log(randomNumber);  // генерация случайного числа
    for (let i = 0; i < 6; i++) { // цикл выполняется не более 6 раз
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
