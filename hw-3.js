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