//Write a JavaScript program to create a new string from a given 
// string by changing the position of the first and last characters. 
// The string length must be broader than or equal to 1.  


// function c(srt1){
    
// }

let a ="12345678a"

let b= a.charAt(a.length -1)
let c = a.charAt(0)
let mid = a.substring(1,a.length-1)

console.log(b+mid+c);

