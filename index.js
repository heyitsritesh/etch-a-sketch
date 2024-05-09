'use strict';

// Initial Variable Declaration

let totalPixels = 256;
let squaresPerSide = 16;
// let opacity = 0.1;

// Query Selectors

const cell = document.createElement("div");
const container = document.querySelector(".container");
const button = document.querySelector("button");

// Random Color

let randColorNum = () => Math.floor(Math.random() * 256);
// let color = (opacity) => `rgb(${randColorNum()}, ${randColorNum()}, ${randColorNum()}, ${opacity})`;
let color = `rgb(${randColorNum()}, ${randColorNum()}, ${randColorNum()})`;

// Function to build the grid

function gridMaker(pixelCount, squaresEachSide) {
    for (let i = 0; i < pixelCount; i++) {
        const cloneCell = cell.cloneNode(cell);
        cloneCell.classList.add("cell");
        cloneCell.style.width = `${960 / squaresEachSide}px`;
        cloneCell.style.height = `${960 / squaresEachSide}px`;
        container.appendChild(cloneCell);

        // cloneCell.dataset.hoverCount = 0;
        cloneCell.addEventListener("mouseenter", (event) => {
            // let hoverCount = parseInt(event.target.dataset.hoverCount);
            // event.target.dataset.hoverCount = ++hoverCount;
            // let newOpacity = Math.min(0.1 * hoverCount, 1);

            // cloneCell.style.background = color(newOpacity);
            cloneCell.style.background = color;
            // console.log(color(newOpacity));
        });
    }
}

gridMaker(totalPixels, squaresPerSide);

// Custom grid button

button.addEventListener("click", () => {

    do {
        squaresPerSide = +prompt("Enter Squares Per Side (under 100)");
    } while (isNaN(squaresPerSide) || squaresPerSide > 100);
    
    container.innerHTML = '';

    totalPixels = squaresPerSide ** 2;

    gridMaker(totalPixels, squaresPerSide);

});