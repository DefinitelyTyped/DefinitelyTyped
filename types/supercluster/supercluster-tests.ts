import supercluster, { Point } from 'supercluster';

const point1: Point = {
    type: 'Feature',
    properties: {},
    geometry: { type: 'Point', coordinates: [10, 20] }
};
const point2: Point = {
    type: 'Feature',
    properties: {},
    geometry: { type: 'Point', coordinates: [20, 30] }
};
const points = [point1, point2];

const index = supercluster({
    radius: 40,
    maxZoom: 16,
    extent: 256,
    log: true
});
index.load(points);
const clusters = index.getClusters([-180, -85, 180, 85], 2);
clusters[0].properties.cluster_id;
index.getTile(0, 0, 0);
index.getChildren(0, 0);
index.getLeaves(0, 0, 10, 5);
index.getClusterExpansionZoom(0, 0);
index.getTile(0, 0, 0).features[0].tags.sum;
