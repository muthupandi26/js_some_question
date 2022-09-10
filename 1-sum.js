// 1.Given an array. Write a function to print sum of all elements of that array

const sum = function(arr) {

    let value = 0;
    for(let i = 0; i < arr.length; i++){
        value = value + arr[i];
    }
    console.log(value);
}

sum([4,4,6,8,10]);