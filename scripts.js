let container = document.querySelector("#container");

function etch(squares) {
    for (let i = 0; i < (squares * squares); i++) {
    let div = document.createElement("div");
    div.style.cssText = "background-color:grey;";
    div.style.border = "1px solid white";
    div.className = "divClass";
    div.addEventListener("mouseover", function( event ) {
            event.target.style.backgroundColor = "black";
        }, false);
        container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    container.appendChild(div);
    }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", event => {
    let squares = prompt("How many squares per side would you like? Max of 100");
    if (squares > 100) {
        alert("That's too big! Refresh and try again");
    } else {
        etch(squares);
    }
});