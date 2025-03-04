"use strict"
 
let table = document.getElementById("bagua-chart");
let cell;
 
table.addEventListener("click", function(event){

    if(event.target.closest("td") === null) return;

    if(cell) {
        if(cell.classList.contains("selected"))
            cell.classList.remove("selected");
    }
    
    cell = event.target.closest("td");
    cell.classList.add("selected");   
});








let blog = document.getElementById("container-2")

blog.addEventListener("click", function(e){
    if(e.target.id != "close") return;

    e.target.closest(".card").hidden = !e.target.closest(".card").hidden
})

// for(let elem of blog.children){
//     elem.querySelector("#close").onclick = function(e){
//         if(e.target.id != "close") return;
//         e.target.closest(".card").hidden = !e.target.closest(".card").hidden
//     }
// }





let tree = document.getElementById("tree");

for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}

tree.onclick = function(e){
    let clicked_elem = e.target;
    if(clicked_elem.tagName != 'SPAN') return;
    
    let toggle_list = clicked_elem.parentNode.querySelector("ul");
    
    if(!toggle_list) return;

    toggle_list.hidden = !toggle_list.hidden;
}