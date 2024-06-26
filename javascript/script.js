const GRID_HEIGHT = 960;
const GRID_WIDTH = 960;

function drawGrid(dimension = 16) {
    const grid = document.querySelector(".grid");
    grid.setAttribute("style", `height: ${GRID_HEIGHT}px; width: ${GRID_WIDTH}px`);

    const SQUARE_HEIGHT = GRID_HEIGHT / dimension;
    const SQUARE_WIDTH = GRID_WIDTH / dimension;

    for (let i = 0; i < dimension; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j = 0; j < dimension; j++) {
            let square = document.createElement("div");
            square.setAttribute("class", "square");
            square.setAttribute("style", `height: ${SQUARE_HEIGHT}px; width: ${SQUARE_WIDTH}px`)
            row.append(square);
        }
        grid.append(row);
    }

    let hoverSquare = document.querySelectorAll(".square");
    hoverSquare.forEach(square => {
        square.addEventListener("mouseover", (e) => {
            const current = e.target;
            fillSquare(current);
            darkenSquare(current);
        });
    })
}

function fillSquare(current) {
    let fillColor = randomRGB();
    current.style.backgroundColor = fillColor;
}

function darkenSquare(current) {
    let opacity = Number(current.style.opacity);
    if (opacity < 1.0) {
        opacity += 0.1;
        current.style.opacity = opacity;
    }
}

function randomRGB() {
    let o = Math.round
    let r = Math.random 
    let s = 255;
    
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

drawGrid();

const changeSize = document.querySelector("#gridSize");
changeSize.addEventListener("input", () => {
    const currentGrid = document.querySelector(".grid");
    currentGrid.replaceChildren();

    const gridSize = document.querySelector("#gridSize").value;
    drawGrid(gridSize);
})