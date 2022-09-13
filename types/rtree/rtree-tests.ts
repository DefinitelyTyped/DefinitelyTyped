import RTree = require('rtree');

const myRTree = RTree(5); // $ExpectType RTree
const el = 'test';

myRTree.insert({ x: 0, y: 0, w: 1, h: 1 }, el);

let intersections = myRTree.search({ x: 0.5, y: 0.5, w: 1, h: 1 });

intersections = myRTree.remove({ x: 0.5, y: 0.5, w: 1, h: 1 }, 'notTest!');

intersections = myRTree.remove({ x: 0.5, y: 0.5, w: 1, h: 1 });

const json = myRTree.toJSON(); // $ExpectType string
const myOtherRTree = RTree.fromJSON(json); // $ExpectType RTree
