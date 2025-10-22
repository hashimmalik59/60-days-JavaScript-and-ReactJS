// Closure
// inner function, outer function k variables ko yaad rakhta hai even k outer execute ho k finish hi kyun na hojaye

// Lexical Scope
// yani function physically kahan code hua hai

function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
const result = counter(); // actually function yahan execute ho kar call stack se pop ho k khatam hogaya hai, lekin yeh jo inner function ne outer k variable ko yaad rakha hua hai even after outer execution is finished yehi hai closure
result();
result();
result();

const result2 = counter(); // counter function call stack mein pop hogaya hai lekin count ka reference le liya hai, that's the magic of closure✨
result2();
result2();

// Important: Because of closure, Variable Environmwentwas move to the heap and NOT garbage collected

// 💥 Real-world Analogy:
// Soch le counter() ek room hai jisme ek variable counter rakha hai.
// Jab tu return karta hai, room band ho jata hai 🚪
// par inner function ke paas us room ki duplicate key hoti hai 🗝️
// Jab bhi wo chalega, wo jaake usi variable ko update karega 😎