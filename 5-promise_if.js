// 5. Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)


const promise = function(data) {
    return new Promise(function(resolve,reject){

    if(isNaN(data)) {
        reject("i'm not a number")
    }
    else if(data % 2 ==1) {
        setTimeout( () => {
            resolve("odd")
        },1000)
    }
    else {
        setTimeout(() => {
            reject("even")
        },2000)
    }

    })
}


promise("hello").catch((error)=>console.log(error))

promise(7)
.then((val) => console.log(val))
.catch((error) => console.log(error))

promise(10)
.then((val) => console.log(val))
.catch((error) => console.log(error))