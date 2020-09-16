import * as Regression from "regression";

const data: ReadonlyArray<[number, number]> = [[0, 0], [1, 1], [2, 2]];
const result1 = Regression.linear(data);
const result2 = Regression.exponential(data);
const result3 = Regression.logarithmic(data);
const result4 = Regression.power(data);
const result5 = Regression.polynomial(data);
const result6 = Regression._round(10.312, 3);
const result7 = Regression.polynomial(data, { order: 4 });
const result8 = Regression.polynomial(data, { precision: 4 });
const result9 = Regression.polynomial(data, { order: 4, precision: 4 });
