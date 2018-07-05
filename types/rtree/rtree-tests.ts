var myRTree = RTree(5);
var el = "test";

myRTree.insert({x: 0, y: 0, w: 1, h: 1}, el);

var intersections = myRTree.search({x: 0.5, y: 0.5, w: 1, h: 1});

intersections = myRTree.remove({x: 0.5, y: 0.5, w: 1, h: 1}, "notTest!");

intersections = myRTree.remove({x: 0.5, y: 0.5, w: 1, h: 1});

