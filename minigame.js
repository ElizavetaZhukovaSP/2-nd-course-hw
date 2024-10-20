function GuessNumber() {
    let userAnswer = prompt('Угадай случайное число от 1 до 100');
    do {
        userAnswer = Number(prompt('Попробуй еще!'));
        if (userAnswer <=3 || userAnswer >=5 && userAnswer <=10){
            alert('Ты уже очень близко!');
        } else if (userAnswer >= 11 && userAnswer <= 20){
            alert ('Уже немного ближе:)')
        } 
    } while (userAnswer !== 4) {
        alert('Поздравляю, ты угадал(а)!!!');
    } 
       
} 