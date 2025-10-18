// Scope chain

// Scope => variables & functions ko kahan tak access kiya jasakta

// Lexical Environment => yani k function physically kahan exist karta hai(yani function likh kahan gaya hai)

// example => function b() ka lexical environment function a() hai

function a() {
    let b = 10;
    function c() {
        console.log(b);
    }
    c();
}
a();

// Scope chain => yeh hierechy wise chalta hai variable ko access karne k liye top ki taraf yani parent => grandparent => global

// example => function z() ko a, b access karna hai to to woh apne parent k paas dekh ga agar wahan na mila to apne grandparen k paad dekh ge aur agar wahan na mila to upar jata jayega until global tak

function x() {
    let a = 10;
    function y() {
        let b = 20;
        function z() {
            console.log(a, b);
        }
        z();
    }
    y();
}
x();

// Lexical Scope => Function apne likhne wali jagah ke parent variables access kar sakta hai, chahe wo kahin se bhi call ho

