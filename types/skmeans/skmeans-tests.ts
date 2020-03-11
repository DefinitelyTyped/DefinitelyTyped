import skmeans = require('skmeans');

const dataUni = [0, 1, 3, 6, 8, 3];

const dataMulti = [[0, 3, 4], [5, 4, 9]];

skmeans(dataUni, 4, "kmrand");

skmeans(dataUni, 3, "kmpp");

skmeans(dataMulti, 6);

skmeans(dataMulti, 3, null, 10);

skmeans(dataMulti, 3, null, null, (x1, x2) => Math.abs(x1 - x2));

const res = skmeans(dataMulti, 3, null, 10);
res.test(6);

const res2 = skmeans(dataMulti, 3, null, 10);
res2.test(6, (x1, x2) => Math.abs(x1 - x2));
