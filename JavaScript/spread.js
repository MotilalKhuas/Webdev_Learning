"use strict";

function addition(elem1, elem2, elem3, elem4){
    return (elem1 + elem2 + elem3 + elem4);
}

let num_arr = [10, 20, 30, 40];
console.log(addition(num_arr)); // will not work
console.log(`${addition(...num_arr)}`);

console.log(`\n${Math.max([10, 20, -1, 30])}`); // will not work
console.log(`${Math.max(...[10, 20, -1, 30])}`);





let arr1 = ["Motilal", "Khuas"];
let arr2 = ["Tinu", "Prasad"];
let merged_arr = [...arr1,...arr2];
console.log(`\n${merged_arr}`);





let name = "Motilal";
let name_arr = [...name];
console.log(`\n${name_arr}`);

let new_name_arr = Array.from(name);
console.log(`${new_name_arr}`);





let marks = new Map();
marks.set("math", 98);
marks.set("eng", 78);
marks.set("bio", 87);
marks.set("phy", 82);

let spread_marks_arr = [...marks];
console.log("\n")
spread_marks_arr.forEach((items) => console.log(`${items[0]} : ${items[1]}`))

let from_marks_arr = Array.from(marks);
console.log("\n")
from_marks_arr.forEach((items) => console.log(`${items[0]} : ${items[1]}`))





function arr_converter(){
    return [...arguments];
}
let arr = arr_converter(10,20,30,40,50);
console.log(`\n${arr}`);


let nums1 = [10,20];
let nums2 = Object.assign({}, nums1);
console.log(nums1===nums2);