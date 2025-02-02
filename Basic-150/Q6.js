

function isLeapYear(year){
if(year %4 === 0 ){
if(year % 100 === 0){
     if(year % 400 === 0 ){
        return true
     }
}else {
    return true;
}
}
else {
    return false;
}
}

// Example usage:
let year = 2020;
console.log(isLeapYear(year)); 