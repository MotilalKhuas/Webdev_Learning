"use strict"

let img_list = document.getElementById("image-list");

img_list.addEventListener("click", (event)=>{
    event.preventDefault();

    let destination_elem = document.getElementById("selected-image").querySelector("img");
    let source_elem = event.target;

    if(source_elem.closest("a") == undefined) return;

    if(source_elem.tagName != "IMG") return;
    
    destination_elem.setAttribute("src",source_elem.getAttribute("src"))
});