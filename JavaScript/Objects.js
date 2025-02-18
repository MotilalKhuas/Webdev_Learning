"use strict"

let obj = {
    f_name : "Motilal",
    l_name: "Khuas",
    age : 23,
    country : "India",
    state : "Odisha"
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));





let prices = {
    banana : 50,
    orange : 80,
    chicken : 240,
    fish : 180,
    apple : 110 
};

console.log(`\nbefore inflation: ${Object.values(prices)}`)
let prices_arr = Object.entries(prices);
prices_arr.forEach(items => items[1]*=2);
let doubled_prices = Object.fromEntries(prices_arr);
console.log(`after inflation: ${Object.values(doubled_prices)}`)


console.log(`\nbefore discount: ${Object.values(prices)}`)
let discounted_prices = Object.fromEntries(
  Object.entries(prices).map(items=>[items[0], items[1]*0.2])
);
console.log(`after discount: ${Object.values(discounted_prices)}`)


let filtered_object = Object.fromEntries(
  Object.entries(prices).filter(items=>(items[1] > 100))
);
console.log(filtered_object);