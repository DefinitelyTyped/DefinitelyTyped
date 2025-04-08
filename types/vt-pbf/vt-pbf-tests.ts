import { GeoJSON } from "geojson";
import * as geojsonvt from "geojson-vt";
import { fromGeojsonVt, fromVectorTileJs, GeoJSONWrapper } from "vt-pbf";

const geojson = {
    type: "Feature",
    properties: {
        mykey: "myvalue",
        myotherkey: 10,
    },
    geometry: {
        type: "Polygon",
        coordinates: [
            [
                [-75.12451171875, 47.669086647137576],
                [-75.12451171875, 48.68370757165361],
                [-73.5369873046875, 48.68370757165361],
                [-73.5369873046875, 47.669086647137576],
                [-75.12451171875, 47.669086647137576],
            ],
        ],
    },
} as GeoJSON;

const geojson2 = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [102.0, 0.5],
            },
            properties: {
                prop0: "value0",
            },
        },
    ],
} as GeoJSON;
const tile = geojsonvt(geojson2, { maxZoom: 14 });
const vectorTile = fromVectorTileJs(tile);

// Test fromGeojsonVt
const layers = {
    layer1: tile,
};
const pbfData = fromGeojsonVt(layers, { extent: 4096 });

// Test GeoJSONWrapper
const features: geojsonvt.Features = [
    {
        geometry: [[102.0, 0.5]],
        type: geojsonvt.FeatureTypes.Point,
        id: "1",
        tags: { prop0: "value0" },
    },
];
const geoJSONWrapper = new GeoJSONWrapper(features, { extent: 4096 });
const wrappedFeature = geoJSONWrapper.feature(0);
