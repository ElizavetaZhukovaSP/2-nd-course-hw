//task1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => a.age - b.age));


//task2
function isPositive(num) {
    return num > 0;
}
  
function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (ruleFunction(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
}
  
console.log(filter([3, -4, 1, 9], isPositive));
  
 const peopleGender = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];
  
console.log(filter(peopleGender, isMale));
//task3

function printDate() {
  const date = new Date();
  console.log(date);
}

const inetvalId = setInterval(() => {
    printDate();
}, 3000);

setTimeout(() => {
    clearInterval(inetvalId);
    console.log("30 секунд прошло");
}, 30000);



//task4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

//task5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));


