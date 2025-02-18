"use strict";

let users = ["Motilal", "Om Prakash", "Smruti", "Bapun", "Lipun"];
let [user1, user2, ...remaining_user] = users;
console.log(`user1 : ${user1}\nuser2 : ${user2}\nremaining-users : ${remaining_user}`)





let cllg_info = {
    name : "GIETU",
    cllg_type : "University",
    nation : "India",
    state : "Odisha",
    district : "Rayagada",
}
let {name, cllg_type, ...rem_info} = cllg_info;
console.log(`\nCollegr name : ${name}\nCollege type : ${cllg_type} \nremaining info ${rem_info}`);





function sum(a, b, ...rem_elements){
    let sum = 0;
    sum = a + b;
    rem_elements.forEach((elements)=>sum+=elements);
    return sum;
}

console.log(`\n${sum(10,20)}`);
console.log(sum(10,20,30));
console.log(sum(10,20,1,2,3,4,5));

let maximum = (...all_elements) => {
    let maximum_return = all_elements.reduce((max_element, element) => {
        max_element = max_element >= element ? max_element : element;
        return max_element;
    }, 0)
    return maximum_return;
}

// let maximum = (...all_elements) => {
//     return (all_elements.reduce((max_element, element) => max_element >= element ? max_element : element, 0))
// }

console.log(`\nmaximum element : ${maximum(-1,0,3,6,2,10,5,9,50)}`);