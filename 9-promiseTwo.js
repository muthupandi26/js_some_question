// 9.Create a function which contains a timeout (which waits for 5 seconds), after 5 seconds your function 
// should return a promise with a string argument "done".
// Call the first function and using promises print the string returned by the first function


const timeout = function(time) {
    return new Promise( (res) =>{
        setTimeout( () =>{
            res("sucess " + time);
            // return "done";
        }, time);
    });
};

timeout(5000).then( (val) => console.log(val,"Done"));