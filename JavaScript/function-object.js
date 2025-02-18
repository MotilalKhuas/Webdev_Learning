"use strict";

function greet(){
    console.log("Hello World!")
}
console.log(greet.name);


let greeting = () => console.log("Hello World");
console.log(greeting.name);


let sayHello = function(){
    console.log("Hello world!");
};console.log(sayHello.name);


let sayHello1 = function Hello(){
    console.log("Hello world!");
};console.log(sayHello1.name);


console.log(`function name : ${(()=>"hello").name}`)





function foo(a, b, ...rest){
    return (arguments.length);
}
console.log(foo.length);
console.log(foo(12,13,45,6,7,89));




console.log("\n");
function makeCounter() {
    let count = 0;

    return {
        increment: () => count++,
        reset: () => count = 0,
        getCount: () => count
    };
}

let counter = makeCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // ✅ Output: 2

counter.reset();
console.log(counter.getCount()); // ✅ Output: 0
