import salesman = require("salesman.js");

const point = new salesman.Point(1, 2);
salesman.solve([point], 0.999, (_: number[]) => {});
