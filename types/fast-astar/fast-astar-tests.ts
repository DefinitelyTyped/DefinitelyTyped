import { Astar, Grid } from "fast-astar";

const grid = new Grid({ col: 10, row: 10 });

grid.set([10, 10], "value", 0);

const astar = new Astar(grid);

astar.search([0, 0], [9, 9]);

astar.search([0, 0], [9, 9], {
    rightAngle: false,
});

astar.search([0, 0], [9, 9], {
    rightAngle: false,
    optimalResult: false,
});
