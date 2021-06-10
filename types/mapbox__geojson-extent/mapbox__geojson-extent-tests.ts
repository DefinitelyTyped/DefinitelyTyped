import extent = require('@mapbox/geojson-extent');
import { GeoJSON, BBox, Polygon } from 'geojson';

const bbox: BBox = extent({
    type: 'Polygon',
    coordinates: [
        [
            [170.0, 45.0],
            [180.0, 45.0],
        ],
        [
            [-180.0, 45.0],
            [-170.0, 45.0],
        ],
    ],
});

const poly: Polygon | null = extent.polygon({
    type: 'Polygon',
    coordinates: [
        [
            [170.0, 45.0],
            [180.0, 45.0],
        ],
        [
            [-180.0, 45.0],
            [-170.0, 45.0],
        ],
    ],
});

const json: GeoJSON = extent.bboxify({
    type: 'Polygon',
    coordinates: [
        [
            [170.0, 45.0],
            [180.0, 45.0],
        ],
        [
            [-180.0, 45.0],
            [-170.0, 45.0],
        ],
    ],
});
