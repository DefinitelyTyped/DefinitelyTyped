import skmeans = require("skmeans");

const dataUni = [0, 1, 3, 6, 8, 3];

const dataMulti = [
    [0, 3, 4],
    [5, 4, 9],
];

const distance3d = ([x1, y1, z1]: number[], [x2, y2, z2]: number[]) =>
    Math.abs(x1 - x2) + Math.abs(y1 - y2) + Math.abs(z1 - z2);

const distance1d = (x1: number, x2: number) => Math.abs(x1 - x2);

skmeans(dataUni, 4, "kmrand");

skmeans(dataUni, 3, "kmpp");

skmeans(dataUni, 3, [3]);

skmeans(dataMulti, 6);

skmeans(dataMulti, 3, null, 10);

skmeans(dataMulti, 3, [[0, 0, 0]]);

skmeans(dataMulti, 3, null, null, distance3d);

const res = skmeans(dataUni, 3, null, 10);
res.test(6);
res.centroids.forEach(i => () => {
    i + 1;
});

const res2 = skmeans(dataMulti, 3, null, 10);
res2.test([6, 1, 3], distance3d);
res2.centroids.forEach(i => () => {
    i[0] + i[1];
});

// we should NOT be able to use arrays-centroid in mono-dimensions
{
    // @ts-expect-error
    skmeans(dataUni, 3, [[3]]);
    // $ExpectType number[]
    skmeans(dataUni, 3).centroids;
}

// we should NOT be able to use arrays-based distance function in mono-dimensions
// @ts-expect-error
skmeans(dataUni, 3, null, null, distance3d);

// we should be NOT able to use scalar-centroid in multi-dimensions
{
    // @ts-expect-error
    skmeans(dataMulti, 3, [3]);

    // $ExpectType number[][]
    skmeans(dataMulti, 3).centroids;
}

// we should NOT be able to use scalar-based distance function in multi-dimensions
// @ts-expect-error
skmeans(dataMulti, 3, null, null, distance1d);
