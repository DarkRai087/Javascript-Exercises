//Write a JavaScript program to remove a character at the specified 
// position in a given string and return the modified string.


function x(srt1,position){
   part1 = srt1.substring(0,position)
    part2 = srt1.substring(position +1 , srt1.length)
    return  part2;
}
console.log(x('DarkRai',3));
