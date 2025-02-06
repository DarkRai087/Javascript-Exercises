const prompt = require('prompt-sync')();

let firstnum = parseFloat(prompt("Enter 1st Number: "));
let secondnum = parseFloat(prompt("Enter 2nd Number: "));
let Y_N = prompt("Press m for multiply and d for divide: ").toLowerCase();

if (Y_N === 'm') {
    let answer = firstnum * secondnum;
    console.log("The result of multiplication is: " + answer);
} else if (Y_N === 'd') {
    if (secondnum !== 0) {
        let answer = firstnum / secondnum;
        console.log("The result of division is: " + answer);
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
} else {
    console.log("Wrong input. Please press 'm' for multiply or 'd' for divide.");
}