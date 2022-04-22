// 1.. Write one example explaining how you can write a callback function ?

const callBack = (course)=>{
    return (`Now a days ${course} is the best Technology..`);
};

const technology1 = (course,callbackFunction)=>{
    console.log(callbackFunction(course));
};

technology1("Full Stack Web Development", callBack);

// 2.. "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Explain callback hell

const printNumbers = () => {
    setTimeout(() => {
        console.log(1);

        setTimeout(() => {
            console.log(2);

            setTimeout(() => {
                console.log(3);

                setTimeout(() => {
                    console.log(4);

                    setTimeout(() => {
                        console.log(5);

                        setTimeout(() => {
                            console.log(6);

                            setTimeout(() => {
                                console.log(7);
                            }, 1000)
                        }, 1000)

                    }, 1000)

                }, 1000)

            }, 1000)

        }, 1000)

    }, 1000)
}
// printNumbers();

// 3.. Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 


let promise = new Promise((resolve,reject) => {
    // resolve();
})

promise.then(() => {
    setTimeout(() => {
        console.log(1);
    }, 1000);
}).then(() => {
    setTimeout(() => {
        console.log(2)
    }, 2000);
}).then(() => {
    setTimeout(() => {
        console.log(3)
    }, 3000);
}).then(() => {
    setTimeout(() => {
        console.log(4)
    }, 4000);
}).then(() => {
    setTimeout(() => {
        console.log(5)
    }, 5000);
}).then(() => {
    setTimeout(() => {
        console.log(6)
    }, 6000);
}).then(() => {
    setTimeout(() => {
        console.log(7)
    }, 7000);
});


// 4.. Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

let promiseYes = (str) => 
    new Promise((resolve,reject) => {
        if(str == "Yes"){
            resolve();
        }
        else{
            reject();
        }
    })

promiseYes("Yes").then(()=>{
    console.log("Promise resolved");
}).catch(()=>{
    console.log("Promise is rejected")
})

// 5.. Create examples to explain callback function?

const callBack1 = (course)=>{
    return (`Now a days ${course} is the best Technology..`);
};

const technology = (course,callbackFunction)=>{
    console.log(callbackFunction(course));
};

technology("Full Stack Web Development", callBack);

// 6.. Create examples to explain callback hell function?

const printNumbers1 = () => {
    setTimeout(() => {
        console.log(1);

        setTimeout(() => {
            console.log(2);

            setTimeout(() => {
                console.log(3);

            }, 1000)

        }, 1000)

    }, 1000)
}
// printNumbers1();


// 7.. Create examples to explain promises function?

let promise1 = new Promise((resolve,reject) => {
    resolve();
})

promise.then(() => {
    setTimeout(() => {
        console.log(1);
    }, 1000);
}).then(() => {
    setTimeout(() => {
        console.log(2)
    }, 2000);
}).then(() => {
    setTimeout(() => {
        console.log(3)
    }, 3000);
});