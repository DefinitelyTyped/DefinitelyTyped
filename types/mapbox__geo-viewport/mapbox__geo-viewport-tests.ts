import { bounds, viewport } from "@mapbox/geo-viewport";

const geoViewport = viewport([
    5.668343999999995,
    45.111511000000014,
    5.852471999999996,
    45.26800200000002,
], [640, 480]);

viewport(
    // bounds
    [5.668343999999995, 45.111511000000014, 5.852471999999996, 45.26800200000002],
    // dimensions
    [640, 480],
    // minzoom
    0,
    // maxzoom
    20,
    // tileSize
    256,
    // allowFloat
    true,
    // allowAntiMeridian
    true,
);

const boundingBox = bounds(
    {
        lon: 100,
        lat: 200,
    },
    14,
    [640, 480],
);

const boundingBox2 = bounds([100, 200], 14, [640, 480]);
