import { viewport, bounds } from '@mapbox/geo-viewport';

const geoViewport = viewport([
    5.668343999999995,
    45.111511000000014,
    5.852471999999996,
    45.26800200000002,
], [640, 480]);

const boundingBox = bounds({
    lon: 100,
    lat: 200,
}, 14, [640, 480]);

const boundingBox2 = bounds([100, 200], 14, [640, 480]);
