import GeojsonEquality = require("geojson-equality");
const eq = new GeojsonEquality();

const g1: GeoJSON.Polygon = {
    type: "Polygon",
    coordinates: [
        [
            [30, 10],
            [40, 40],
            [20, 40],
            [10, 20],
            [30, 10],
        ],
    ],
};
const g2: GeoJSON.Polygon = {
    type: "Polygon",
    coordinates: [
        [
            [30, 10],
            [40, 40],
            [20, 40],
            [10, 20],
            [30, 10],
        ],
    ],
};

eq.compare(g1, g2);

new GeojsonEquality({ precision: 6 });
new GeojsonEquality({ precision: 6, direction: true, objectComparator: (_a, _b) => true });
