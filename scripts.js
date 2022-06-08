let container = document.querySelector("#container");
function etch(squares) {
for (let i = 0; i < (squares * squares); i++) {
   // div.className = "divClass";
   let div = document.createElement("div");
   div.style.cssText = "background-color:grey; height:20px;";
   //div.style.border = "1px solid white";
   div.className = "divClass";
   div.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = "black";
    }, false);
   
   container.appendChild(div);
}
container.style.gridTemplateColumns = `repeat(${squares}, auto)`;
container.style.gridTemplateRows = `repeat(${squares}, auto)`;

}

let btn = document.getElementById("btn");
btn.addEventListener("click", event => {
    let squares = prompt("How many squares per side would you like? Max of 100");
    etch(squares);
    });