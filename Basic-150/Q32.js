//Write a JavaScript program
//  to find the closest value to 100 from two numerical values.  

function x(a,b)
{
    a_res = Math.abs (100-a);
    b_res =  Math.abs(100-b);
    if(a_res < b_res){
        return "A is closest to 100"
    }else {
        
        return "b is closest to 100"}
}
console.log(x(99,89));
