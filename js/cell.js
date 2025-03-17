class Cell {
    constructor(x, y, width) {
        this.x = x;
        this.y = y;
        this.width = width;

        this.walls = {
            top: true,
            right: true,
            bottom: true,
            left: true
        };

        this.visited = false;
    }

    index(x, y, cols, rows) {
        if (x < 0 || y < 0 || x >= cols || y >= rows) return -1;
        return x + y * cols;
    }

    show() {
        let px = this.x * this.width;
        let py = this.y * this.width;

        stroke(255);
        if (this.walls.top) line(px, py, px + this.width, py);
        if (this.walls.right) line(px + this.width, py, px + this.width, py + this.width);
        if (this.walls.bottom) line(px + this.width, py + this.width, px, py + this.width);
        if (this.walls.left) line(px, py + this.width, px, py);

        if (this.visited) {
            noStroke();
            fill(100, 100, 255, 100);
            rect(px, py, this.width, this.width);
        }
    }

    highlight() {
        let px = this.x * this.width;
        let py = this.y * this.width;
        noStroke();
        fill(0, 255, 0);
        rect(px, py, this.width, this.width);
    }

    checkNeighbors(grid, cols, rows) {
        let neighbors = [];
        let top = grid[this.index(this.x, this.y - 1, cols, rows)];
        let right = grid[this.index(this.x + 1, this.y, cols, rows)];
        let bottom = grid[this.index(this.x, this.y + 1, cols, rows)];
        let left = grid[this.index(this.x - 1, this.y, cols, rows)];

        if (top && !top.visited) neighbors.push(top);
        if (right && !right.visited) neighbors.push(right);
        if (bottom && !bottom.visited) neighbors.push(bottom);
        if (left && !left.visited) neighbors.push(left);

        if (neighbors.length > 0) {
            let r = floor(random(neighbors.length));
            return neighbors[r];
        }
        return undefined;
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
