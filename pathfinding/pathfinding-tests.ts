import * as PF from "pathfinding";

var matrix = [
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
];
var grid = new PF.Grid(matrix);
var gridBackup = grid.clone();

var finder = new PF.AStarFinder();

var path = finder.findPath(1, 2, 4, 2, grid);

var newPath = PF.Util.smoothenPath(grid, path);