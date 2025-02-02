console.log("-----------------------------------------");


for(let year = 2014; year <=2050;year++){
    let d = new Date(year,0,1);
    if(d.getDay() ===0){
        console.log("1st jan is being a sunday " + year);
        
    }
}
console.log('_______________________________________');
