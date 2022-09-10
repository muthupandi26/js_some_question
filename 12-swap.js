// 12.Mubashir wants to swap two given numbers!
// It is not returning the right values. Can you help him fix it?
// a = 100
// b = 200
// a, b = swap(a, b)
// print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
 

let a = 100;
let b = 200;

 
let swap = function(a,b){

    console.log(a,b)
    let temp;
    temp = a;
    a = b;
    b = temp;

    // console.log(a,b);
    return[a,b];
}

console.log([a,b] = swap(a, b));

// console.log(a,b); // Should print out "200, 100", but the function prints out "100, 100"