// Write a JavaScript program to get the current date.  
// 
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
const today= new Date();
let day = today.getDate();
let month = today.getMonth()+1;
let year = today.getFullYear();

day = day <10 ?'0'+day : day;      time = o(1) 
month = month <10?'0'+month :month;

const f1=`${month}-${day}-${year}`;
const f2=`${month}/${day}/${year}`;
const f3=`${day}/${month}/${year}`;
const f4=`${day}-${month}-${year}`;
console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);

12-20-2024
12/20/2024
20/12/2024
20-12-2024







