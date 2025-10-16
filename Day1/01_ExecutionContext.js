// Execution Context => Yeh JS engine hai aur sara code is mein run hota hai is k 2 phases hain

// 1. Memory Creation Phase
// 2. Execution Phase

// 1. Memory Crwation Phase => Is phase mein variables & functions ko memory allocate hoti hai aur aik value assign hoti hai as placeholder undefined aur function declaration completely momery allocate karti hai

// 2. Execution Phase => Is phase mein variable ko us ki actual value assign hoti hai aur sara code line by line execute hota hai yani har line pehle wali line k execute hone ka wait karti hai

let value1 = 2;
let value2 = 5;
function addNum(num1, num2) {
    let total = num1 + num2;
    return total
}
let result1 = add(value1, value2);
let result2 = add(7, 4);