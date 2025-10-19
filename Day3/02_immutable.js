// Immutable

// Immutable => woh values jo k copy karne pe replace, change na ho to yeh immutability hai is se value safe rehti hai

let fullName = "    Hashim Malik";

let newFullName = fullName;

let newName = fullName.trim();

console.log(newName);
console.log(fullName);
console.log(newFullName);
console.log(newName);

// Simple => short way mein immutable === no change