// Write a JavaScript program to create a string from a given string. 
// This is done by taking the last 3 characters and adding
//  them at both the front and back. The string length must be 3 or more.

function x(string){
    rest = string.substring(0,3)
    return rest + string + rest  
}
console.log( x('parth'));
