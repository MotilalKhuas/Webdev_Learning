// "use strict";

// let map = new Map();
// map.set("1","string-1");
// map.set(1,"numeric-1");
// map.set(true,"bool-true");
// map.set("true","string-true");
// console.log(map.get("1"));
// console.log(map.get(1));
// console.log(map.get(true));
// console.log(map.get("true"));





// let motilal = {name : "Motilal"};
// map.set(motilal, "Motilal");
// console.log(map.get(motilal));
// console.log(map.size);





// console.log("\n\n\n\n");
// let chain_map = new Map();
// chain_map.set("name","Motilal Khuas")
//         .set("age",23)
//         .set("phone",7735980085)
//         .set("email","khuas@gmail.com");
// console.log(chain_map)





// let new_map = new Map([
//     ["chowmin",80],
//     ["egg_role", 70],
//     ["biriyani",120],
//     ["thali",90]
// ]);
// console.log(new_map);





// console.log("\n\n\n\n");
// for(let map_key of new_map.keys()){
//     console.log(map_key);
// }

// console.log("\n");
// for(let map_values of new_map.values()){
//     console.log(map_values);
// }

// console.log("\n");
// for(let map_elements of new_map.entries()){
//     console.log(map_elements);
// }
// console.log()

// console.log("\n");
// for(let map_elements of new_map){
//     console.log(map_elements);
// }
// console.log()

// console.log("\nPrices after 20% discount : ");
// console.log("=========================");
// new_map.forEach((price, food)=>console.log(`${food} : ${price-(price * 0.2)}`));





// let mark_object = {
//     "math" : 95,
//     "eng" : 78,
//     "sci" : 89,
//     "bio" : 91
// }
// console.log(Object.entries(mark_object));
// let mark_map = new Map(Object.entries(mark_object));
// console.log(mark_map.get("math"))

// let  food_obj = Object.fromEntries(new_map);
// console.log(food_obj.thali);