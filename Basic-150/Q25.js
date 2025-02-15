//Write a JavaScript program to check whether 
// a given positive number is a multiple of 3 or 7. 

function checkmultiple(n){
    if(n%3 == 0 || n%7== 0){
        return true
    }else {
        return false 
    }
}
console.log( checkmultiple(15));
