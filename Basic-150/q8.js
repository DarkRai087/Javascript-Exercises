const prompt = require('prompt-sync')();

let num = Math.ceil(Math.random()*10)
console.log(num);

let guessNum = prompt("enter a number between 1-10  ");

if(guessNum == num){
    return  console.log("matched");
    
}else {
    return console.log("Not matched, the number was " + guessNum6);
    
}
