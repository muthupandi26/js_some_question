// let num = 12345;

// let no = 0;

// while( num > 0)
// {
// 	no = (no * 10) + num % 10;
// 	num = (num - no % 10) / 10;
// }
// console.log(no);




// function add() { 
//     console.log("Addition")
//     sub() {
//         console.log("Subtract")
//         mul() {
//             console.log("Multi")
//         }
//     }
// }

// setTimeout(function() {
// 	console.log("first");
// 	setTimeout(() => {
// 		console.log("second");
// 		setTimeout(() => {
// 			console.log("third");
// 		}, 2000);
// 	}, 2000);
// }, 2000);


function add(a,b,sub){
	console.log("first");
	let total = a + b;
	console.log(total);
	sub(a,b, function mul(a,b,div) {
		console.log("Third");
		let total_3 = a * b;
		console.log(total_3);
		div(a,b)
	});

}



add(20,10, function sub(a,b,mul) {
	console.log("second");
	let total_2 = a -b;
	console.log(total_2);
	mul(a,b,function divi(a,b) {
		console.log("fourth");
		let total_4 = a /b;
		console.log(total_4);
	});
});

console.log("*********")


// const addFuncPromise = function(a){
// 	return new Promise( (resolve) => resolve(a));
// 	// return new Promise.resolve(a+b);
// }

// addFuncPromise(20).then( (val) => {
// 	console.log(val);
// 	return val;
// })
// .then( (val) => {
// 	console.log(val * 10);
// })


// async function xecuteFunction() {
// 	var newData = "Mayank";
// 	var getData = await rel();
// 	console.log(getData);
//   }
  
// xecuteFunction()

// async function getData() {
// 	console.log("first");
// 	let wait = await newFunction();
// 	console.log(wait);
// }



// function add(sub) {
// 	let a = 10, b = 20 ,c ;
// 	c = a + b;
// 	console.log(c);
// 	sub(a,b,function(){
//         let multi;
//         multi = a * b;
//         console.log(multi);
//     });
    
// }

// add(sub);

// function sub(a,b,mul){
// 	let total;
// 	total = b - a;
// 	console.log(total);
//     mul(a,b);
// }

// function mul(a,b) {
//     let multi;
//     multi = a * b;
//     console.log(multi);
// }


// const newOne = new Promise(function(resolve,reject){
//     resolve(5 *2);
// });

// newOne.then( val => console.log(val));

// Promise.resolve("hello").then((val) => console.log(val));













// console.log("first");
// setTimeout(()=> {
//     console.log("I am setTimeout")
// }, 2000);
// Promise.resolve('promise').then( x => console.log(x))
//                         .then( y => console.log("promise two"));

// console.log("End");


// // output: 
// // first
// // end
// // Promise
// // Promise Two
// // I am setTimeout

function newFunction() {
    console.log("second");
	// return new Promise(function(resolve,reject) {
	// 	resolve("hello");
	// })
	return Promise.resolve("hello")
}

async function getData() {
    console.log("first");
    let wait = await newFunction();
    console.log(wait);
    
}

getData();