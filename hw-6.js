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
let divine = [9, 8, 7, 6, 5];


//task8
let text = ['abcdef'];


//task9
let together = [
    [1, 2, 3],
    [4, 5, 6]
]

//task10


//task11

//task12


//task13


//task14


//task15

