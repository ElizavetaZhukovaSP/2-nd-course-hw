//task1
let line = 'js';
line = line.toUpperCase()
console.log(line);
//task2
function filterByPrefix(array, str) {
    const lowerStr = str.toLowerCase();
    return array.filter(item => item.toLowerCase().startsWith(lowerStr));
  }
  console.log(filterByPrefix(['Table', 'Chair', 'Bed', 'Board', 'window'], 'b'));

//task3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//task4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//task5
function getNumberRandom() {
    return Math.floor(Math.random() * 10) +1;
}
console.log(getNumberRandom());

//task6
function getNumberRandom2(number) {
    return Array.from({length: Math.floor(number/2)}, () => Math.floor(Math.random() * number));
}
console.log(getNumberRandom2(8));

//task7
function getNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let randomNumber = getNumber(1, 30);
console.log(randomNumber);

//task8  
let myDate = new Date();
console.log(myDate);


//task9
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73)
console.log(currentDate);

//task10
function myFormateDate(date) {
    const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг","Пятница", "Суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня","Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const year = date.getFullYear();
    const day = date.getDate();
    const dayWeek = week[date.getDay()];
    const month = date.getMonth();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата: ${day} ${months[month]} ${year} г. - это ${dayWeek}.
    Время: ${hours}:${minutes}:${seconds}`;
}
console.log(myFormateDate(new Date()));
