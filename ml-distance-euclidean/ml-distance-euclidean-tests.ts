import * as euclidean from "ml-distance-euclidean";

euclidean([10, 12, 16, 25], [3, 7, 11, 15]);
euclidean.squared([6, 9, 17, 25], [1, 5, 18, 32]);

var v1 = [2, 7, 9, 16, 25, 31, 48, 50];
var v2 = [1, 5, 8, 18, 20, 26, 34, 47];

euclidean(v1, v1);
euclidean(v1, v2);
euclidean.squared(v1, v1);
euclidean.squared(v1, v2);
