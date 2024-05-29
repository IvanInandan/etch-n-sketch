const GRID_HEIGHT = 960;
const GRID_WIDTH = 960;

function drawGrid(dimension = 16) {
    grid.setAttribute("style", `height: ${GRID_HEIGHT}px; width: ${GRID_WIDTH}px`);

    const SQUARE_HEIGHT = 60;
    const SQUARE_WIDTH = 60;

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
}

const grid = document.querySelector(".grid");
drawGrid();
