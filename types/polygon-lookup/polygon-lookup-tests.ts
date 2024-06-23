import PolygonLookup = require("polygon-lookup");
import { FeatureCollection } from "geojson";

const inputFeatureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: { id: "bar" },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [0, 1],
                        [2, 1],
                        [3, 4],
                        [1, 5],
                    ],
                ],
            },
        },
    ],
};

const lookup = new PolygonLookup(inputFeatureCollection);

// $ExpectType Feature<Polygon, GeoJsonProperties> | undefined
const foundFeature = lookup.search(1, 2);

// $ExpectType FeatureCollection<Polygon, GeoJsonProperties> | undefined
const foundFeatureCollection = lookup.search(1, 2, 1);
