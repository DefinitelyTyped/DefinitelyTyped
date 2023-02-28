import { GeoJSON } from "geojson";
import {
    wktToGeoJSON,
    geojsonToWKT,
} from "@terraformer/wkt";

// $ExpectType GeoJSON
wktToGeoJSON(
    'POINT (-122.6764 45.5165)'
);

// $ExpectType string
geojsonToWKT(
    { type: "Point", coordinates: [ 100, 100 ] }
);
