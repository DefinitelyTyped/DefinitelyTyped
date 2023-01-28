import createKDTree = require("static-kdtree");

// Create a bunch of points
const points2D = [
    [0, 1],
    [-5, 0.11],
    [0, 10],

    // ...

    [4, 3],
] as Array<[number, number]>;

const points3D = [
    [0, 1, 100],
    [-5, 0.11, Math.PI],
    [0, 10, -13],

    // ...

    [4, 3, 1],
] as Array<[number, number, number]>;

const points4D = [
    [0, 1, 100, 54],
    [-5, 0.11, Math.PI, 33],
    [0, 10, -13, -9],

    // ...

    [4, 3, 1, 47],
] as Array<[number, number, number, number]>;

// Create the tree
const tree2D = createKDTree(points2D);
const tree3D = createKDTree<3>(points3D);
const tree4D = createKDTree<4>(points4D);

// Iterate over all points in the bounding box
tree3D.range([-1, -1, -1], [10, 1, 2], (idx) => {
    console.log(`{visit: ${idx}`); // idx = index of point in points array
});

// Can also search in spheres
tree3D.rnn([0, 0, 0], 10, (idx) => {
    console.log(`point ${idx} is in sphere at origin with radius=10`);
});

// Nearest neighbor queries
console.log(`index of closest point to [0,1,2] is ${tree3D.nn([0, 1, 2])}`);

// And k-nearest neighbor queries
console.log(
    `index of 10 closest points to [0,1,2] are ${tree3D.knn([0, 1, 2], 10)}`
);

// For performance, be sure to delete tree when you are done with it
tree3D.dispose();
