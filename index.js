'use strict';

// Query Selectors

const cell = document.createElement("div");
const container = document.querySelector(".container");
const button = document.querySelector("button");

for (let i = 0; i < 256; i++) {
    const cloneCell = cell.cloneNode(cell);
    cloneCell.classList.add("cell");
    container.appendChild(cloneCell);

    cloneCell.addEventListener("mouseover", () => {
        cloneCell.style.background = "black";
    });
}

button.addEventListener("click", () => {
    const squaresPerSide = +prompt("Enter Squares Per Side")
    console.log(squaresPerSide);

})

