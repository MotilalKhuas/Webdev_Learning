"use strict";

let set = new Set();

let motilal = {name : "Motilal Khuas"};
let smruti = {name : "Smruti Ranjan"};
let omprakash = {name : "Om Prakash"};

set.add(motilal);
set.add(smruti);
set.add(omprakash);
set.add(smruti);
set.add(motilal);
set.add(motilal);
set.add(100);

console.log(set);
console.log(set.size);

console.log("\n\nVisitors List(keys())\n==============")
for(let user of set.entries()){
    console.log(user);
}

console.log("\n\nVisitors List(keys())\n==============")
for(let user of set.keys()){
    console.log(user);
}


console.log("\n\nVisitors List(values())\n==============")
for(let user of set.values()){
    console.log(user);
}