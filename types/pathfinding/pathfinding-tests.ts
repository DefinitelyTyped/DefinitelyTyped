import * as PF from "pathfinding";

var matrix = [
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
];
var grid = new PF.Grid(matrix);
var gridBackup = grid.clone();
var node = grid.getNodeAt(0, 0);

var finder = new PF.AStarFinder();

var finder = new PF.AStarFinder({
    diagonalMovement: PF.DiagonalMovement.IfAtMostOneObstacle,
    heuristic: PF.Heuristic.chebyshev
});

finder = new PF.BestFirstFinder({
    diagonalMovement: PF.DiagonalMovement.Never,
    heuristic: function(dx, dy) {
        return Math.min(dx, dy);
    }
});

var path = finder.findPath(1, 2, 4, 2, grid);

var newPath = PF.Util.smoothenPath(grid, path);
var newPath = PF.Util.compressPath(path);
var newPath = PF.Util.expandPath(path);
