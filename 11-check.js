// 11. Write a function to check two given numbers and return true if one of the number is 50 or if their sum is 50. 
// Call the function multiple times with different values.. 
// ( Write function without using If-else)

const check = function(a,b){
    return (a == 50 || b == 50 || a + b == 50 );
}


console.log(check(20,30));
console.log(check(50,30));
console.log(check(40,10));
console.log(check(20,50));
console.log(check(50,50));
console.log(check(20,10));