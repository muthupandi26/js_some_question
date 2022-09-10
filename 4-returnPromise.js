// 4. A function job must return a promise object
// The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data


const promise = function(sec) {
    return new Promise ( (resolve, reject) => {
        
        setTimeout( () =>  resolve("Helo World!") , sec);
    } )

}

promise(2000).then( (val) => console.log(val) )

console.log(promise());