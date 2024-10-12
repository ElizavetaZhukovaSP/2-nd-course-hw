
//task1
let password = prompt ("Введите пароль");
if (password === 'пароль') {
    alert('Пароль введен верно');
} 
else { alert('Пароль введен неправильно');}
//task2
let c = prompt ("Введите число");
if (c >= 0 && c <= 10) {
    console.log('Верно');
} else { console.log('Неверно');}

//task3
let d = Number(prompt ("Введите первое число"));
let e = Number(prompt ("Введите второе число"));

if (e >= 100 || d >= 100) {
    console.log('Верно');
} else { console.log('Неверно');}

//task4
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//task5
var monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case '1' :
        console.log('Январь');
        break;
    case '2' :
        console.log('Февраль');
        break;    
    case '3' :
        console.log('Март');
        break;  
    case '4' :
        console.log('Апрель');
        break;   
    case '5' :
        console.log('Май');
        break;   
    case '6' :
        console.log('Июнь');
        break;
    case '7' :
        console.log('Июль');
        break;    
    case '8' :
        console.log('Август');
        break;  
    case '9' :
        console.log('Сентябрь');
        break;   
    case '10' :
        console.log('Октябрь');
        break;
    case '11' :
        console.log('Ноябрь');
        break;    
    case '12' :
        console.log('Декабрь');
        break;  
    default:
        console.log('Ввели что-то не то');
}
//Additional tasks 1
const parity = prompt('Пожалуйста, введите любое число');
const result = Number(parity);
if (result % 2 == 0) {
    alert('Число четное');
}
else if (isNaN(result)){
    alert('Ввели что-то не то');
}
else {
    alert('Число нечетное');
}
//Additional tasks 2 and 3
let clientOS = prompt('Выбрете приложение для установки 0 — iOS, 1 — Android');
var OS = Number(clientOS);
let clientDeviceYear = prompt('Пожалуйста, уточните год выпуска телефона');
const year = Number(clientDeviceYear);
if(OS === 0 && year >= 2015) {
    console.log('Установите версию приложения для iOS по ссылке');
    alert('Установите версию приложения для iOS по ссылке');
}
else if(OS === 0 && year < 2015) {
    alert('Установите облегченную версию приложения для iOS по ссылке');
}
else if (OS === 1 && year >= 2015) {
    console.log('Установите версию приложения для Android по ссылке');
    alert('Установите версию приложения для Android по ссылке');
}
else if(OS === 1 && year < 2015) {
    alert('Установите облегченную версию приложения для Android по ссылке');
}
else {
    alert('Ввели что-то не то');
}

