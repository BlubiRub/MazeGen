class DFSGenerator {
    constructor(maze) {
        this.maze = maze;
        this.columns = maze.columns;
        this.rows = maze.rows;
        this.stack = [];
        this.current = maze.getCell(0, 0);
        this.current.visited = true;
    }

    step() {
        let next = this.current.checkNeighbors(this.maze.grid, this.columns, this.rows);
        if (next) {
            next.visited = true;
            this.stack.push(this.current);
            this.maze.removeWalls(this.current, next);
            this.current = next;
        } else if (this.stack.length > 0) {
            this.current = this.stack.pop();
        }
    }

    highlight() {
        this.current.highlight();
    }
}
