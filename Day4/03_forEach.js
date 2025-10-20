// forEach

// yeh aik function hai jo k arrays & object k har element ko loop through karne k liye use hota hai
// 1. new array return nahi karta
// 2. data ko mutate karta hai
// 3. chaining allowed nahi
// 4. print, update, save k liye use hota hai


// 🧩 Q1:
const names = ["Hash", "Ali", "Malik"];
// ✅ forEach() use karke sab ke names print kar:
names.forEach((items) => {
    console.log(`Names: ${items}`);
});

// 🧩 Q2:
const numbers = [2, 4, 6, 8];
// ✅ forEach() use karke har number ka square print kar.
numbers.forEach(function (value) {
    let square = value * value;
    console.log(square);
});

// 🧩 Q3:
const fruits = ["apple", "banana", "mango"];
// ✅ Har fruit ke saath uska index bhi print kar:
fruits.forEach((element, index) => console.log(`${index}: ${element}`))

// 💪 Mini Challenge (Level 1):
let colors = ["red", "green", "blue"]
// Color #1: red, Color #2: green, Color #3: blue
colors.forEach((item, index) => {
    console.log(`Color #${index + 1}: ${item}`);
})

// Yahan tu arrays ke saath thoda kaam karega(modify, calculate, etc.)
// 🧩 Q4:
const prices = [100, 200, 300];
// ✅ forEach() se har price pe 10 % tax add karke print kar:
prices.forEach(function (addTax) {
    let withTax = (addTax * 10) / 100;
    console.log(withTax + prices);
})

// 🧩 Q5:
const nums = [1, 2, 3, 4, 5];
// ✅ forEach() use karke total sum find kar.
// Hint: Global variable lo, forEach() ke andar add karte ja.
let sum = 0;
nums.forEach((item) => {
    sum = sum + item
    console.log(`sum of all array numbers: ${sum}`);
})

// 🧩 Q6:
const users = [
    { name: "Hash", age: 21 },
    { name: "Ali", age: 23 },
    { name: "Malik", age: 25 }
];
// ✅ forEach() se har user ka name aur age print kar:
users.forEach(function (value) {
    console.log(`${value.name} is ${value.age} years old.`);
})

// 💪 Mini Challenge (Level 2):
let number = [5, 10, 15];
// → forEach() se sab numbers ko 2 se multiply karke same array update kar
// (Yes, yahan immutability break karni allowed hai 😜)
number.forEach((num) => {
    number = numbers.push(num * 2)
    console.log("Break immutability", number);
})

// 🧩 Q7:
const scores = [45, 90, 32, 80, 60];
// ✅ forEach() se print kar:
// “Pass” agar score ≥ 50
// “Fail” agar score < 50
scores.forEach((item) => {
    if (item >= 50) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
})

// 🧩 Q8:
const cities = ["lahore", "karachi", "islamabad"];
// ✅ forEach() se har city ka first letter capital karo aur print karo:
cities.forEach((upper) => {
    let capital = upper[0].toUpperCase() + upper.slice(1);
    console.log(capital);
})

// 🧩 Q9:
const students = [
    { name: "Hash", marks: [85, 90, 95] },
    { name: "Ali", marks: [70, 80, 75] }
];
// ✅ forEach() se har student ka average marks print kar:
students.forEach(function (element) {
    let averageMarks = element.marks[0] + element.marks[1] + element.marks[2];
    console.log(`${element.name}'s: ${averageMarks}`);
})

// 💪 Mini Challenge (Level 3):
const todos = [
    { task: "Learn JS", done: true },
    { task: "Go Gym", done: false },
    { task: "Build Project", done: true }
];
// ✅ forEach() se sirf completed tasks print kar:
todos.forEach((complete) => {
    if (complete.done === true) {
        console.log(`${complete.task}: ${complete.done}`);
    }
})

// ⚡ BONUS CHALLENGE:
// Ek custom function bana:
// function myForEach(array, callback) { ... }
// Jo forEach() ki tarah kaam kare —
// Loop kare har element pe aur callback ko run kare.

function myForEach(array, callback) { }
myForEach();