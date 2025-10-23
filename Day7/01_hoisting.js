// Hositing

// JS mein code run hone se pehle (execution se pehle), enigne variables & functions ke liye memory reserve kar deta hai. Isi process ko Hoisting kehte hain

// Simple words
// jab code execute hota hai to declaration wala part upar chala jata hai aur intialization wala part neeche reh jata hai yeh hai hoisting ka concept

// function declaration
// Hoist: Yes
// output: fully hoist hota hai
a(); // "a"
function a() {
    console.log("a");
}

// var
// Hoist: Yes
// output: undefined
// console.log(marriage); // undefined
var marriage = 2030;

// let
// Hoist: Yes
// TDZ: Yes
// output: reference
// console.log(passion); // ReferenceError: Cannot access 'passion' before initializaton
let passion = "Frontend Developer";

// const
// Hoist: Yes
// TDZ: Yes
// output: reference
// console.log(birthYear); // ReferenceError: Cannot access 'birthYear' before initialization
let birthYear = 2002;

// function expression & arrow function
// Hoist: Yes
// Output: var TypeError & let and const ReferenceError due to TDZ
// sumTwoNums(2, 5); // ReferenceError: Cannot access 'sumTwoNums' before initialization
const sumTwoNums = function (a, b) {
    return a + b;
}

// console.log(greet); // ReferenceError: Cannot access 'greet' before initizalization
const userGreeting = (userName) => {
    return `Hello ${userName}`;
}
let greet = userGreeting("Hashim");