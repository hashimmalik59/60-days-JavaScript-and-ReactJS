// Reference vs Value

// JavaScript is a dynamically type language dynamic means its type is not fixed we can change it any time

// example

let a = "abc"; // here a is "abc" => string
a = 20; // and then is 20 => number

// Primitive Datatypes are copy by value
// Non-Primitive Datatypes are copy by reference

let b = 10;
let c = b;
c = 20;
console.log(b, c); // yani b ko change karne pe c mein change nahi hota hai

let myData = {
    name: "Hashim",
    marks: 99,
    isStudent: true
}

let otherData = {};
otherData = myData;

console.log(myData);
console.log(otherData);

otherData.name = "Ali";

console.log(myData);
console.log(otherData); // yani myData ne otherData ka reference liya hua hai, myData ko change kiya to otherData mein bhi change hoga

let fruits = ["Apple", "Banana", "Orange"];
let newFruits = fruits;
newFruits.push("Mango");
console.log(fruits);
console.log(newFruits); // yeh bhi reference leta hai tabhi change hua

// Stack => is mein primitive type ka data jata hai
// Heap => is mein non-primitive type ka data jata hai

// Note: Stack fast hota hai

