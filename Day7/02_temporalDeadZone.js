// Temporal Dead Zone

// TDZ woh time hota hai jab jab variables(let & const) memory mein hote hain(hoist hote hain) lekin use access nahi jar sakte - kyun abhi initialize nahi hua

// Simple words:
// variable declare hogaya hai, lekin access nahi kar sakte due to uninitialized

console.log(name); // name: undefined
console.log(age); // age: <uninitialized>
console.log(birthYear); // birthYear: <uninitialized>
var name = "Hashim";
let age = 23;
const birthYear = 2002;

// ──────────────────────────────────────────────
// 🚀 MEMORY CREATION PHASE(Hoisting)
// ──────────────────────────────────────────────
// var   →  undefined
// let   →  <uninitialized>   🔒 (TDZ - Temporal Dead Zone)
//     const →  <uninitialized>   🔒 (TDZ - Temporal Dead Zone)
//         ──────────────────────────────────────────────
//         function declarations → poora function body store hoti hai ✅
//         ──────────────────────────────────────────────
//         ⚠️ Note: 'uninitialized' koi actual JS value nahi hoti,
//         yeh sirf engine ka internal state hota hai.
//         ──────────────────────────────────────────────

//         ↓  (execution start hota hai)

//         ──────────────────────────────────────────────
//         ⚡ EXECUTION PHASE (Line by Line)
//         ──────────────────────────────────────────────
//         console.log(a)  →  undefined  ✅
//         console.log(b)  →  ❌ ReferenceError (still TDZ)
//         console.log(c)  →  ❌ ReferenceError (still TDZ)

//         a = 1;   ✅ var variable ko value mil gayi
//         b = 2;   ✅ TDZ khatam, initialization hui
//         c = 3;   ✅ TDZ khatam, initialization hui
//         ──────────────────────────────────────────────
//         ✅ Now here all variables accessible normally.
//         ──────────────────────────────────────────────
