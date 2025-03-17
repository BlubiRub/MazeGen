class Maze {
    constructor(columns, rows, cellSize) {
        this.columns = columns;
        this.rows = rows;
        this.cellSize = cellSize;
        this.grid = [];
        
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < columns; x++) {
                this.grid.push(new Cell(x, y, cellSize));
            }
        }
    }

    show() {
        for (let cell of this.grid) {
            cell.show();
        }
    }

    getCell(x, y) {
        return this.grid[x + y * this.columns];
    }

    removeWalls(current, next) {
        let x = current.x - next.x;
        let y = current.y - next.y;

        if (x === 1) {
            current.walls.left = false;
            next.walls.right = false;
        } else if (x === -1) {
            current.walls.right = false;
            next.walls.left = false;
        }

        if (y === 1) {
            current.walls.top = false;
            next.walls.bottom = false;
        } else if (y === -1) {
            current.walls.bottom = false;
            next.walls.top = false;
        }
    }
}
