import concatMap from "concat-map";

const xs = [1, 2, 3, 4, 5, 6];
concatMap(xs, x => (x % 2 ? [x - 0.1, x, x + 0.1] : []));
// [0.9, 1, 1.1, 2.9, 3, 3.1, 4.9, 5, 5.1]

concatMap(xs, x => x % 2);
// [1, 0, 1, 0, 1, 0]
