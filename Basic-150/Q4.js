//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
let a =5
let b =6;
let c= 7;
let sides = a+b+c/2

let area = Math.sqrt(sides*((sides-a)*(sides-b)*(sides-c))) 
let final = Math.round(area)
console.log("Area of the tringle "+ final);
