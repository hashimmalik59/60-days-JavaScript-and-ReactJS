// Functional Programming

// Yeh aik concept hai jo k first-class citizen pe chalta hai yani function se kaam lena is mein function mein immutablility, declarative, pure function + DRY prinicipal ko bhi use karengen

let nums = [1, 2, 3, 4, 5];
let newNums = [];
console.log(newNums);

// imperative programming
for (let i = 0; i < nums.length; i++) {
    newNums.push(nums[i] * 2);
    console.log("Without delcarative programming", newNums);
}

// Declarative Programming
// yani mujhe har step define karne ki zaroorat nahi hai, aap yeh batao k aap ko karna kaya hai

let numbers = [1, 2, 3, 4, 5];

console.log("With delcarative programming", numbers.map(item => item * 2));

// Note: declatative programming sirf is pe focus karta hai k aap ko kya chahiye

const fruits = ["Apple", "Banana", "Orange"];

function newItem(item) {
    const newFruits = [...fruits, item];
    newFruits.push("Guava");
    return newFruits;
}
console.log(fruits);
const result = newItem("Mango");
console.log(result);
// yeh aik pure function hai aur saath mein immutable bhi hai, readable bhi hai,

// Side Effect
// woh function jo k bahir k variables ko change kare
let total = 2;
function sumNums(a) {
    return total += a;
}
sumNums(7);
console.log(total);

// No Side Effect
// woh function jo bahir k variables ko change na kare
function sumOfTwo(a, b) {
    return a + b;
}
const output = sumOfTwo(3, 2);
console.log(output);

// impure function
// woh function jo k yani jis mein bahir k variable ki wajah se result unpredictable ho bahir k variables change ho
let vegetables = ["Tomatoe", "Potato", "Onion"];
function vegItem(newVeg) { // ab yeh function bahir changes kar raha hai
    return vegetables.push(newVeg);
}
vegItem("Carrot");
console.log(vegetables);

// pure function
// woh function jo k same input dene pe hamesha same output de bina kis external cheez ko change kiye
function greetUser(userName) { // ab yeh function bahir kahin par bhi changes nahi kar raha hai
    return `Hello ${userName}`;
}
const greet = greetUser("Hashim");
console.log(greet);