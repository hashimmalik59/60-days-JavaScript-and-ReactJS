// Higher-order function


// 1. woh function jo kisi variable mein store ho
const sumTwoNums = function (num1, num2) { // sumTwoNums Higher-order function
    return num1 + num2;
}

console.log(sumTwoNums(2, 5));

// 2. woh function jo as a function return ho
function a() { // a Higher-order function
    let b = 10;
    return function () {
        console.log(b++);
    }
}
const c = a();
c()

// 3. woh function jo as as argument function le
function x() { // x is callback function
    console.log("function: x");
}
function y(x) { // y is Higher-order function
    x();
};