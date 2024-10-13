//task1
let i = Number(1);
while (i <= 2) {
    alert('Привет!');
    i++;
}

//task2
let a = 1;
do {console.log (a); a++;}
while (a <= 5);

//task3
let b = 7;
do {console.log (b); b++;}
while (b <= 22);

//task4
const obj = {
    Коля : '200',
    Вася : '300',
    Петя : '400'
}
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

//task5
for (let n = 1000, num = 1; n > 50; num++){
    n /=2;
    console.log(n);
    console.log(num);
}
//task6
for (let friNumber = 1; friNumber <= 31; friNumber += 7) {
    if (friNumber >= 1 && friNumber <= 31) {
        alert(`Сегодня пятница, ${friNumber} -е число. Необходимо подготовить отчет.`)
    }
}// в переменной число можно менять от 1 до 7

//Additional tasks 1
for (let k = 100, iterations = 1; k > 0; iterations++){
    k -= 7;
    console.log(k);
    console.log(iterations);
}

//Additional tasks 2
const months = {
    1: 'Январь', 2: 'Февраль', 3: 'Март',
    4: 'Апрель', 5: 'Май', 6: 'Июнь',
    7: 'Июль', 8: 'Август', 9: 'Сентябрь',
    10: 'Октябрь', 11: 'Ноябрь', 12: 'Декабрь'   
}
let m = Number(prompt('Кокой месяц Вас интресует?'));
while (1 <= m) {
    if (m>=1 && m <=12){
        alert(`Месяц под номером ${m} - это ${months[m]}`);
        break;
    }
    else { 
        alert('Ввели что-то не то');
        break;
    }
}
// не получилось реализовать ошибку, если ввести буквы

//Additional tasks 3
const book = {
    Название : 'Как устроен JavaScript',
    Автор : 'Крокфорд Дуглас',
    "Год издания" : '2019',
    Жанр : 'Программирование'
}
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}


//Additional tasks 4 :(