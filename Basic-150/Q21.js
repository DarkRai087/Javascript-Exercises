//Write a JavaScript program to create another string by adding "Py" 
// in front of a given string. 
//If the given string begins with "Py" return the original string.

function checkString(srt1){
   if(srt1 === null || srt1 === undefined || srt1.substring(0,2)=='py'){
    return srt1
   }else {
    return 'py' + srt1;
   }

}
console.log(checkString("thon"));
