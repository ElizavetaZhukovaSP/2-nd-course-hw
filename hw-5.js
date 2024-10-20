//task1
const min = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(9, 8));

//task2
const parity = prompt('Пожалуйста, введите любое число');
const n = Number(parity);

function even(n) {
    if (n % 2 == 0) {
        return `Число ${n} четное`;
    } else {
        return `Число ${n} нечетное`;
    }   
}

alert(even(n)); 

//task3???
const power = (a) => {
    return a**2;

}
console.log(power(9));

//task4
const ageUser = prompt('Введите свой возраст');
const age = Number(ageUser);

function salutation(age) {
    if (age > 0 && age <= 12) {
        return `Привет, друг!`;
    } else if (age >= 13) {
        return `Добро пожаловать!`;
    } else (age <= 0)
    return `Вы ввели неправильное значение`;
}

alert(salutation(age)); 

//task5
function number(c, d) {
    if (isNaN(c, d) || isNaN(c) || isNaN(d)) {
        return `Одно или оба значения не являются числом`;      
    } else {
        return c * d;}
    
}

let number1 = prompt('Введите первое число');
let number2 = prompt('Введите второе число');
const c = Number(number1);
const d = Number(number2);

alert(number(c, d)); 

//task6
function numberUser(e) {
    if (isNaN(e)) {
        return `Переданный параметр не является числом`;      
    } else {
        return `${e} в кубе равняется ${e**3}`;
    }  
}

let numberUserQuestion = prompt('Введите число');
const e = Number(numberUserQuestion);

alert(numberUser(e)); 


//task7
function getCircleArea() {
    return 3.14 * this.radius**2;
}
function getCirclePerimeter() {
    return 2 * 3.14 * this.radius;
}

const circle1 = {
    radius: 15,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};
const circle2 = {
    radius: 25, 
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
