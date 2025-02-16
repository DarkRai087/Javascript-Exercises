//Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, 
// return the string without "Script" otherwise return the original one.

function x(str){
    if(str.length<6){
        return str;
    }
    let rse = str;
    if (str.substring(10,4)== "Script"){
        rse =str.substring(0,4) + str.substring(10,str.length)

    }
    return rse;
}

console.log( x("JavaScript"));
console.log(x("CoffeeScript")); 
