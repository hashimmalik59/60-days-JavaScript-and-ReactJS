// reduce

// yeh multiple values ko single value mein return karta hai
// 1. new value return karta hai
// 2. yeh kuch bhi return kar sakta hai yani koi bhi type

// value.reduce(function(accumulator, currentValue){}, initialValue)

const numbers = [1, 2, 3];

const single = numbers.reduce((accumulator, currentValue) => {
    return accumulator, currentValue;
})
console.log(single);

// const JSisBest = ["I", "love", "JavaScript"];

// const bestLanguage = JSisBest.reduce(function (accumulator, currentValue) {
//     return `${accumulator} + ${currentValue}`;
// }, 0);