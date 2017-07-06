import * as supercluster from 'supercluster';
import {Point, Points, Cluster, ClusterProperties} from 'supercluster';

const point1: Cluster = {
    type: 'Feature',
    properties: {
      foo: 'fesf'
    },
    geometry: { type: 'Point', coordinates: [0, 0] }
};
const point2: Point = {
    type: 'Feature',
    properties: {},
    geometry: { type: 'Point', coordinates: [0, 0] }
};
const points: Points = [point1, point2];

const index = supercluster({
    radius: 40,
    maxZoom: 16,
    extent: 256,
    log: true
});
index.load(points);
index.getClusters([-180, -85, 180, 85], 2);
index.getTile(0, 0, 0);
index.getChildren(0, 0);
index.getLeaves(0, 0, 10, 5);
index.getClusterExpansionZoom(0, 0);
index.getTile(0, 0, 0).features[0].tags.sum;
