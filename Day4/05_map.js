// map

// yeh array k har element ko transform/change/modify karne k liye use hota hai
// 1. new array return karta hai
// 2. old array ko change nahi karta
// 3. yeh bhi forEaxh, filter ki tarhan har element pe callback run karta hai

const numbers = [1, 2, 3, 4, 5];
const completeArray = numbers.map(function (element) {
    return element;
})
console.log(completeArray);

// Optional Chaining
const chaining = numbers
    .map((item) => item * 2)
    .map((item) => item - 1)
    .filter((item) => item >= 30)
console.log(`chaining: ${chaining}`);

// 🧩 Q1
let number = [1, 2, 3, 4, 5]
// 👉 Square har element ka aur new array me return karo.
const sqaure = number.map((item) => {
    return item * 2;
})
console.log(sqaure);

// 🧩 Q2
let names = ["hash", "ali", "malik"]
// 👉 Har name ka first letter capital karo (e.g. "Hash") aur new array return karo.
const capital = names.map((item) => {
    return item[0].toUpperCase() + item.slice(1);
})
console.log(capital);

// 🧩 Q3
let prices = [100, 200, 300]
// 👉 Har price me 10% tax add kar k new array return karo.
const total = prices.map(function (element) {
    const tax = (element * 10) / 100;
    return element + tax;
})
console.log(total);

// 🧩 Q4
let num = [5, 10, 15, 20]
// 👉 Har number ko string me convert karo like “Value: 5”, “Value: 10”.
const stringNum = num.map((item) => {
    let str = item.toString();
    return `Value: ${str}`;
});
console.log(stringNum);

// 🧩 Q5
let fruits = ["apple", "banana", "mango"]
// 👉 Har fruit ke name ke sath index bhi print karo using map()’s 2nd parameter.
const fruitIndex = fruits.map(function (element, index) {
    return `${index + 1}: ${element}`
})
console.log(fruitIndex);

// 🧩 Q6
const users = [
    { name: "Hash", age: 21 },
    { name: "Ali", age: 25 },
    { name: "Malik", age: 30 }
];
// 👉 Sirf users ke names ka array banao. ["Hash", "Ali", "Malik"]
const onlyNames = users.map(function (item) {
    return item.name;
})
console.log(onlyNames);

// 🧩 Q7
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
];
// 👉 Har product ka object return karo jisme name same rahe
//    aur price double ho jaye. (immutably)
const doublePrice = products.map(item => {
    return item.price * 2;
})
console.log(doublePrice);

// 🧩 Q8
const students = [
    { name: "A", marks: 90 },
    { name: "B", marks: 70 },
    { name: "C", marks: 50 }
];
// 👉 Har student k liye ek naya object banao jisme pass/fail add ho
// Pass if marks ≥ 60
const obj = {}
const result = students.map((item) => {
    return item.price >= 60;
});
console.log(result);

// 🧩 Q9
const todos = [
    { task: "Learn JS", done: true },
    { task: "Go Gym", done: false },
];
// 👉 Har task ko transform karo string me:
// "Learn JS ✅", "Go Gym ❌"
const completionStatus = todos.map(function (element) {
    if (element.done === true) {
        element.task + "✅"
    } else if (element.done === false) {
        element.task + "❌";
    }
    else return element.task;
})
console.log(completionStatus);

// 🧩 Q10
const nums = [1, 2, 3, 4];
// 👉 map() se har number ko object me convert karo like:
// [{id:1}, {id:2}, {id:3}, {id:4}]
const numsObj = nums.map(function (item) {
    return `{id:${item}}`
})
console.log(numsObj);