//task1
const number = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < number.length; i++) {
    if (number[i] == 10) break;
    console.log(number[i]);
}

//task2
const search = [1, 5, 4, 10, 0, 3];
let position = search.indexOf(4);
console.log(`Индекс числа 4 - ${position}`);

//task3
let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(' ');
console.log(numbers);

//task4
let much = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]
for ( let muchIn of much) {
    for (let element of muchIn) {
        console.log(element);
    }
}

//task5
let one = [1, 1, 1];
one.push(2, 2, 2);
console.log(one);


//task6
let del = [9, 8, 7, 'a', 6, 5]; 
del = del.sort();
let filterDel = del.filter( del => del != 'a');
console.log(filterDel);

//task7
const numbr = [9, 8, 7, 6, 5];
let userNumbr = +prompt('Попробуй отгадать число от 0 до 10');
if (numbr.includes(userNumbr)) {
    alert('Поздравляю, ты угадал(а)!!!');
} else {
    alert('Не угадал(а)');
}


//task8
let text = 'abcdef';
let splitText = text.split('');
let backText = splitText.reverse();
let joinedText = backText.join('');
console.log(joinedText);


//task9 - нашла способ в интернете 
let mass = [
    [1, 2, 3],
    [4, 5, 6]
]
let flatMass = mass.flat();
console.log(flatMass);

//task10
let arr = [1, 2, 3, 5, 6, 8, 9, 10]
for ( let i = 0; i < arr.length; i++){
    if (arr[i + 1]) {
        console.log(arr[i] + arr[i + 1]);
    }
}

//task11
let numb = [5, 6, 7, 8]
let result = numb.map(item => item ** 2);
console.log(result);

//task12
let line = ['стул', 'кровать', 'стол']
let lengthLine = line.map ( item => item.length);
console.log(lengthLine);

//task13
let numder = [1, 2, 3, 5, 6, 7, 4]
let minusNumber = numder.map( item => - item)
let minusFilter = minusNumber.filter( item => item < 0);
console.log(minusFilter);

//task14
function random() {
    return Math.floor( Math.random() * 10);
}
const numbs = []
for ( let i = 0; i < 10; i++) {
    numbs.push(random());
}
console.log(numbs);

const evenNumbs = []
for ( let i = 0; i < numbs.length; i++) {
    if (numbs[i] % 2 === 0) {
        evenNumbs.push(numbs[i]);
    }
}
console.log(evenNumbs);

//task15
function randomSum() {
    return Math.floor( Math.random() * 10);
}

const sumNumbs = []

for ( let i = 0; i < 6; i++) {
    sumNumbs.push(randomSum());

}

console.log(sumNumbs);
console.log(sumNumbs.reduce((a, b) => a + b) / sumNumbs.length);

