"use strict";

function showFunctionDetails(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showFunctionDetails("argument_1", "argument_2");





function addNumbers(){
    let sum = 0;
    // for(let args of arguments){
    //     sum += args;
    // }

    // for(let args in arguments){
    //     console.log(args);
    //     sum += arguments[args];
    // }

    for(let index = 0; index < arguments.length; index++){
        sum += arguments[index];
    }
    return sum;
}
console.log("\n")
console.log(addNumbers(10, 20, 30, 40, 1));





console.log("\n")
function destruct(){
    let [arg1, arg2, ...rem] = arguments;
    console.log(rem);
    return (arg1+arg2);
}
console.log(destruct(10, 20, 30, 40));
