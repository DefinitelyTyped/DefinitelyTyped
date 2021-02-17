import PolygonLookup = require('polygon-lookup');
import { FeatureCollection } from 'geojson';

const featureCollection: FeatureCollection = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { id: 'bar' },
            geometry: {
                type: 'Polygon',
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

const lookup = new PolygonLookup(featureCollection);
lookup.search(1, 2);
lookup.search(1, 2, 1);
