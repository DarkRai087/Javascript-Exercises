//Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


const now = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = days[now.getDay()];

let hr= now.getHours();
const min=now.getMinutes();
const sec =now.getSeconds();
const conv= hr >=12 ? "PM": "Am";
hr = hr % 12 || 12;
console.log(`Today is : ${day}.`);
console.log(`Current time is : ${hr} ${conv} : ${min} : ${sec} `);

