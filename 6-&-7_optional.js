console.log("task start");

function async(cb) {
    console.log("task running");
    setTimeout(cb,0);
    // cb();
}

async(() => console.log(name1));
console.log("task end");
const name1 = "just check";
