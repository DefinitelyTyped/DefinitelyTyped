import ConvexHullGrahamScan = require("graham_scan");

// Based on the README.MD

//Create a new instance.
var convexHull = new ConvexHullGrahamScan();

//add points (needs to be done for each point, a foreach loop on the input array can be used.)
convexHull.addPoint(1, 2);

//getHull() returns the array of points that make up the convex hull.
var hullPoints = convexHull.getHull();
