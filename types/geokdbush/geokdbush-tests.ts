import * as geokdbush from "geokdbush";
import * as kdbush from "kdbush";

const points = [
    { lon: 0, lat: 0 },
    { lon: 20, lat: 10 },
    { lon: -10, lat: 30 },
];
const index = kdbush(points, p => p.lon, p => p.lat);
const nearest = geokdbush.around(index, -119.7051, 34.4363, 1000);
