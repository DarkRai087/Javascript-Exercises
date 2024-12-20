const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = days[now.getDay()];

let hr= now.getHours();
const min=now.getMinutes();
const sec =now.getSeconds();
const conv= hr >=12 ? "PM": "Am";
hr = hr % 12 || 12;
console.log(`Today is : ${day}.`);
console.log(`Current time is : ${hr} ${conv} : ${min} : ${sec} `);