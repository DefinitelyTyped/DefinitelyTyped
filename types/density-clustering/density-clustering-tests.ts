import clustering = require('density-clustering');

const dataset = [
    [1, 1],
    [0, 1],
    [1, 0],
    [10, 10],
    [10, 13],
    [13, 13],
    [54, 54],
    [55, 55],
    [89, 89],
    [57, 55],
];

const dbscan = new clustering.DBSCAN();
dbscan.run(dataset, 5, 2);
dbscan.noise;

const optics = new clustering.OPTICS();
optics.run(dataset, 2, 2);
optics.getReachabilityPlot();

const kmeans = new clustering.KMEANS();
kmeans.run(dataset, 3);
