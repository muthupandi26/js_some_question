// 2.For the object ‘ob’, calculate the sum of all the values and assign the sum to a new property 
// of the same object. Then print the modified object.

var sample = { a: 1 , b: 2 , c:3, d:4, e:5 };
var summed = 0;

console.log(sample);

for (var key in sample) {
    summed += sample[key];
    // console.log(key);
};

console.log(summed)
sample.f = summed;
console.log(sample)


