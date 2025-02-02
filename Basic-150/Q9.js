let today = new Date()
const christmas = new Date(today.getFullYear(),11,25)
if (today > christmas){
    christmas.setFullYear(christmas.getFullYear()+1)
}
const timeDiference= christmas-today;
const daysleft = Math.ceil(timeDiference / (1000*60*60*24));
console.log(`Day left until christmas: ${daysleft}`);
