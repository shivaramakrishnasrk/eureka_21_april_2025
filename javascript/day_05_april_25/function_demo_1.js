// 1. Function Declaration
function add(a, b) {
    console.log(`Addition of ${a} and ${b} is ${a + b}`);
}
add(2, 3);


// 2. Function Expression / anonymous
console.log(sub); // sub = undefined
var sub = function (a, b) {
    console.log(`subtraction of ${a} and ${b} is ${a - b}`);
}
sub(5, 2);


// 3. IIFE (Immediately Invoked Function Expression)
(function (a, b) {
    console.log(`Multiplication of ${a} and ${b} is ${a * b}`);
})(4, 5);


// 4. Arrow Function 
var div = (a, b) => {
    console.log(`Division of ${a} and ${b} is ${a / b}`);
}
div(5, 2);