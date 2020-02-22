console.log("1. line 1");

function asyncTask() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("2. asynchronous results");
        }, 2000);
    });
}

console.log("3. line 3");

async function getAsyncFunction() {
    let val = await asyncTask();
    console.log(val);
}

getAsyncFunction();

console.log("4. line 4");