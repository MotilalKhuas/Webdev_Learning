"use script"

let exp1_btn_1 = document.body.querySelector("#exp-1").querySelector(".btn-1")
let clr_btn = document.querySelector("#exp-1").querySelector(".clr-btn");
let op_box = document.body.querySelector("#exp-1").querySelector(".op-box");

clr_btn.onclick = (event) => {
    op_box.value = "";
}

exp1_btn_1.onmousedown = (event) =>{
    op_box.value += `${event.type.padEnd(10)} button : ${event.which}\n`;
}

exp1_btn_1.onmouseup = (event) =>{
    op_box.value += `${event.type.padEnd(10)} button : ${event.which}\n`;
}

exp1_btn_1.onclick = (event) =>{
    op_box.value += `${event.type.padEnd(10)} button : ${event.which}\n`;
}

exp1_btn_1.oncontextmenu = (event) =>{
    op_box.value += `${event.type.padEnd(10)} button : ${event.which}\n`;
    return false;
}

exp1_btn_1.ondblclick = (event) =>{
    op_box.value += `${event.type.padEnd(10)} button : ${event.which}\n`;
    return false;
}

console.log(document.body.querySelector("#exp-2").querySelectorAll("button"));
let exp2_btn_1 = document.body.querySelector("#exp-2").querySelectorAll("button")[0];
let exp2_btn_2 = document.body.querySelector("#exp-2").querySelectorAll("button")[1];
let exp2_btn_3 = document.body.querySelector("#exp-2").querySelectorAll("button")[2];
let exp2_btn_4 = document.body.querySelector("#exp-2").querySelectorAll("button")[3];

exp2_btn_1.addEventListener("click", (e) => {if(e.altKey) alert("Alt + clicked")});
exp2_btn_2.addEventListener("click", (e) => {if(e.shiftKey) alert("Shift + clicked")});
exp2_btn_3.addEventListener("click", (e) => {if(e.ctrlKey) alert("Ctrl + clicked")});
exp2_btn_4.addEventListener("click", (e) => {if(e.altKey && e.shiftKey) alert("Alt + Shift + clicked")});
