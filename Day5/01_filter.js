// filter

// yeh hai array method() hai jo k har element pe function chalata hai
// 1. jo di gai condition hai woh true hojaye to sirf un element ko new array return karta hai
// 2. bina original ko change kiye

// Yahan tu filter() ka use samjhega basic conditions ke sath.
// 🧩 Q1: Even Numbers Only
const numbers = [1, 2, 3, 4, 5, 6];
// 👉 filter() use karke sirf even numbers ka naya array banao.
const evenNumbers = numbers.filter((even) => {
    return even % 2 === 0;
});
console.log(evenNumbers);

// 🧩 Q2: Greater Than 10
const values = [5, 10, 15, 20];
// 👉 Sirf wo numbers return karo jo 10 se bade hain.
const greaterThan10 = values.filter(item => item > 10);
console.log(greaterThan10);

// 🧩 Q3: Filter Out “Falsy” Values
const mixed = [0, "Hash", "", null, 42, undefined, "React"];
// 👉 Sirf truthy values ka naya array return karo.
const falsyValues = mixed.filter(function (item) {
    if (typeof item === false) {
        return item;
    }
})
console.log(falsyValues);

// 💪 Mini Challenge #1
const words = ["js", "react", "node", "ai", "api"];
// 👉 Sirf wo words return karo jinki length ≥ 3 ho.

const length3 = words.filter((item) => {
    return item.length >= 3;
})
console.log(length3);

// 🧩 Q4: Active Users Only
const users = [
    { name: "Hash", active: true },
    { name: "Ali", active: false },
    { name: "Malik", active: true }
];
const activeUserName = users.filter(function (element) {
    if (element.active === true) {
        return element.name;
    }
})
console.log(activeUserName);

// 🧩 Q5: Filter Products by Price
const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];
// 👉 Sirf wo products return karo jinka price >= 100 hai.
// Output: [{ name: "Laptop", price: 1200 }]

const newProduct = products.filter(item => item.price >= 100);
console.log(newProduct);

// 🧩 Q6: Students with High Grades
const students = [
    { name: "A", grade: 85 },
    { name: "B", grade: 60 },
    { name: "C", grade: 92 }
];
// 👉 Filter out students jinka grade 80 se zyada hai.
const pass = students.filter(function (item) {
    return item.grade > 80;
})
console.log(pass);

// 💪 Mini Challenge #2
const todos = [
    { task: "Learn JS", done: true },
    { task: "Sleep", done: false },
    { task: "Build Project", done: true },
];
// 👉 Sirf completed tasks ke names return karo.
// Output: ["Learn JS", "Build Project"]
const taskDone = todos.filter((element) => {
    return element.done === true;
})
console.log(taskDone);

// 🔴 LEVEL 3 — Logic Building + Real World Problems
// Ab tu filter() ko as a data processor use karega —
// React + real-life style me 🔥
// 🧩 Q7: Remove Duplicates (with filter + indexOf)
const arr = [2, 3, 4, 2, 3, 5];
// 👉 Duplicate elements hata ke naya array banao.
// Output: [2, 3, 4, 5]
// (Hint: arr.indexOf(item) === index)
const removeDuplicate = arr.filter(function (item) {
    return item;
})
console.log(removeDuplicate);

// 🧩 Q8: Filter by Search Query
const items = ["React", "Angular", "Vue", "Svelte"];
// const search = "a";
// 👉 filter() use karke sirf wo items return karo jinke andar "a" aata ho.
// Output: ["React", "Angular"]

const letterA = items.filter((value) => {
    if (value.includes("a")) {
        return value;
    }
})
console.log(letterA);

// 🧩 Q9: Filter Nested Data
const companies = [
    { name: "TechCorp", employees: [{ name: "Hash" }, { name: "Ali" }] },
    { name: "CodeSoft", employees: [{ name: "Malik" }] }
];
// 👉 Sirf wo companies return karo jinke paas 2 ya zyada employees hain.
//     Output:
// [{ name: "TechCorp", employees: [...] }]

const twoEmployees = companies.filter(function (item) {
    return item.employees.length > 1;
})
console.log(twoEmployees);

// 💪 Mini Challenge #3
const posts = [
    { title: "Intro to JS", tags: ["js", "basics"] },
    { title: "React Hooks", tags: ["react", "hooks"] },
    { title: "Node Streams", tags: ["node", "advanced"] },
];
// 👉 filter() se sirf wo posts return karo jinke tags me "react" ho.
//     Output:
// [{ title: "React Hooks", tags: ["react", "hooks"] }]
const react = posts.filter(function (item) {
    if (item.tags.includes("react")) {
        return item;
    }
})
console.log(react);

// ⚡ BONUS CHALLENGE — Custom Filter
// Apna khud ka myFilter() bana jo Array.prototype.filter() ki tarah kaam kare 👇
// function myFilter(array, callback) {
//    // apna code likh
// }
// const result = myFilter([1, 2, 3, 4], num => num > 2);
// console.log(result); // [3, 4]