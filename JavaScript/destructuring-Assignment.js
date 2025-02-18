"use strict";

console.log("|======================================================|\n|===============| ARRAY DESTRUCTURING  |===============|\n|======================================================|")
let arr = ["Motilal", "Khuas"];
let [f_name, l_name] = arr;
console.log(`first_name : ${f_name} \nlast_name : ${l_name}`);





console.log("\n");
let [f_name_1, l_name_1] = "Motilal Khuas".split(" ");
console.log(`first_name : ${f_name_1} \nlast_name : ${l_name_1}`);






// the array itself is not modified.
console.log("\n");
let books = ["Mathematics", "History", "Geography"];
let [math, hist, geo] = books;
math = "Math";
console.log(books); 






//Unwanted elements of the array can also be thrown away via an extra comma:
console.log("\n");
let users = ["Motilal", "Tinu", "Smruti", "Gyana", "Rajesh", "Khuas"];
let [user1,,user2] = users;
console.log(`user_1 : ${user1} \nuser_2 : ${user2}`);





console.log("\n");

let [a,b,c] = "abc";
let [one, two, three] = new Set([1,2,3]);
let [keyValue1, keyValue2, keyValue3] = Object.entries({name : "Motilal", age : "23", height : "5.8"});

console.log(`a : ${a} \nb : ${b} \nc : ${c}`);
console.log(`one : ${a} \ntwo : ${b} \nthree : ${c}`);
console.log(`keyValue1 : ${keyValue1} \nkeyValue1 : ${keyValue2} \nkeyValue1 : ${keyValue3}`);





console.log("\n");
let obj = {};
[obj.fname, obj.lname] = ["Motilal", "Khuas"];
console.log(obj);





console.log("\nObject Iteration \n=================");
let obj_prices = {
    banana : 50,
    orange : 80,
    chicken : 240,
    fish : 180,
    apple : 110 
}
for(let [key,value] of Object.entries(obj_prices)){
    console.log(`${key} : ${value}`);
}

console.log("\nMap Iteration \n==============");
let map_prices = new Map([
        ["banana", 50],
        ["orange", 80],
        ["chicken", 240],
        ["fish", 180],
        ["apple", 110] 
    ]
);

for(let [key,value] of map_prices.entries()){
    console.log(`${key} : ${value}`);
}




console.log("\n...rest\n========")
let marks = [
    ["dbms", 89], 
    ["os", 75], 
    ["dsa", 81], 
    ["coa", 91], 
    ["de", 95], 
    ["em", 65], 
    ["nt", 67], 
    ["dm", 76], 
    ["toc", 82]
]

let [sub1 , sub2, ...rest_sub] = marks;
console.log(sub1);
console.log(sub2);
console.log(rest_sub);





console.log("\n\n|=======================================================|\n|===============| OBJECT DESTRUCTURING  |===============|\n|=======================================================|")

let details_obj = {
    f_name2 : "Motilal",
    l_name2 : "Khuas",
    age : 69,
}

let {f_name2,  age, l_name2} = details_obj;
console.log(`f_name : ${f_name2} \nl_name : ${l_name2} \nage : ${age}`);

let {first_name,  age1, last_name} = details_obj;
console.log(`\nf_name : ${first_name} \nl_name : ${last_name} \nage : ${age1}`);


let{age : user_age, f_name2 : user_fname, l_name2 : user_lname} = details_obj;
console.log(`\nf_name2 : user_fname => ${user_fname} \nl_name2 : user_lname => ${user_lname} \nage : user_age => ${age1}`);


let {f_name2 : user_first_name = "Ananda", user_middle_name = "Kumar", l_name2 : user_last_name = "Dash"} =  details_obj;
console.log(`\nuser_first_name : ${user_first_name} \nuser_middle_name : ${user_middle_name} \nuser_last_name : ${user_last_name}`);


let {f_name2 : fName = "Ananda", mname2 : mName = "Ku.", l_name2 : lName = "Dash"} = details_obj;
console.log(`\nUser name is : ${fName} ${mName} ${lName}`)

// let sName, eName;
// {sName, eName} = details_obj;

let cllg_info = {
    name : "GIETU",
    cllg_type : "University",
    nation : "India",
    state : "Odisha",
    district : "Rayagada",
}

let {name, cllg_type, ...rem_info} = cllg_info;
console.log(`\nCollegr name : ${name}\nCollege type : ${cllg_type} \nremaining info ${rem_info}`);


let sName, eName;
({f_name2 : sName, l_name2 : eName} = details_obj);
console.log(`\nUser name is : ${sName} ${eName}`)





console.log("\n\n|=======================================================|\n|===============| NESTED DESTRUCTURING  |===============|\n|=======================================================|")
let visitor = {
    user_name : "Motilal Khuas",
    items : ["laptop", "mobile", "ear buds"],
    address : {
        country : "India",
        state : "Odisha",
        landmark : "near Kalinga Stadium",
        pin : 767001
    }
}

let{user_name : visitor_name, items : visitor_items, address : visitor_address} = visitor;
console.log(visitor_name);
console.log(visitor_items);
console.log(visitor_address);


console.log("\n\n");
let {
    user_name,
    items,
    items : [item1, item2, item3],
    address,
    address : {
        country,
        state,
        landmark,
        pin
    }
} = visitor;
console.log(user_name);
console.log(items);
console.log(item1);
console.log(item2);
console.log(item3);
console.log(address);
console.log(country);
console.log(state);
console.log(landmark);
console.log(pin);