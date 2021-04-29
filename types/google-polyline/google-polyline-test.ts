import { encode, decode } from "google-polyline";

const encodedPolyline = "_p~iF~ps|U_ulLnnqC_mqNvxq`@";
decode(encodedPolyline).length;

const coordinates: Array<[number, number]> = [
    [38.5, -120.2],
    [40.7, -120.95],
];
encode(coordinates).length;
