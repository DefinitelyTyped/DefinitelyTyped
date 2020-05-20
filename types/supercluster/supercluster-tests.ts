import Supercluster = require('supercluster');

//
// Test 1: strictly typed
//

interface TestPointProps {
    myTestFeatureName: string;
}

interface TestClusterProps {
    myTestClusterName: string;
}

const points: Array<Supercluster.PointFeature<TestPointProps>> = [
    {
        type: 'Feature',
        properties: { myTestFeatureName: 'a' },
        geometry: { type: 'Point', coordinates: [10, 20] }
    },
    {
        type: 'Feature',
        properties: { myTestFeatureName: 'b' },
        geometry: { type: 'Point', coordinates: [20, 30] }
    }
];

// construct()
new Supercluster();
new Supercluster({});
const index = new Supercluster({
    minZoom: 5,
    maxZoom: 16,
    radius: 40,
    extent: 256,
    nodeSize: 64,
    log: true,
    map: (props: TestPointProps): TestClusterProps => ({
        myTestClusterName: props.myTestFeatureName.toUpperCase()
    }),
    reduce: (accumulated, props) => {
        accumulated.myTestClusterName += ` & ${props.myTestClusterName}`;
    },
});

// load()
index.load(points);

// getClusters()
const clusters = index.getClusters([-180, -85, 180, 85], 2);
const firstProps = clusters[0].properties; // Either cluster or point properties
// Generic cluster properties
(<Supercluster.ClusterProperties> firstProps).cluster;
(<Supercluster.ClusterProperties> firstProps).point_count;
// Custom cluster properties
(<TestClusterProps> firstProps).myTestClusterName;
// Custom point properties
(<TestPointProps> firstProps).myTestFeatureName;

// getTile()
const tile = index.getTile(0, 0, 0);
if (tile) {
    const tileProps = tile.features[0].tags; // Either cluster or point properties
    // Generic cluster properties
    (<Supercluster.ClusterProperties> tileProps).cluster;
    (<Supercluster.ClusterProperties> tileProps).point_count;
    // Custom cluster properties
    (<TestClusterProps> tileProps).myTestClusterName;
    // Custom point properties
    (<TestPointProps> tileProps).myTestFeatureName;
}

// Other methods
index.getChildren(0);
index.getLeaves(0);
index.getLeaves(0, Infinity);
index.getLeaves(0, 0, 10);
index.getClusterExpansionZoom(0);

//
// Test 2: loosely typed
//

const index2 = new Supercluster();
index2.load([
    {
        type: 'Feature',
        properties: { testPropertyA: 100 },
        geometry: { type: 'Point', coordinates: [10, 20] }
    },
    {
        type: 'Feature',
        properties: { testPropertyB: 'test' },
        geometry: { type: 'Point', coordinates: [20, 30] }
    }
]);
const clusters2 = index2.getClusters([-180, -85, 180, 85], 2);
const firstProps2 = clusters2[0].properties;
(<Supercluster.ClusterProperties> firstProps2).cluster_id;
firstProps2.testPropertyA;
firstProps2.testPropertyB;
