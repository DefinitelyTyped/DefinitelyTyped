import { geojsonToWKT, wktToGeoJSON } from "@terraformer/wkt";
import { GeoJSON } from "geojson";

// $ExpectType GeoJSON
wktToGeoJSON(
    "POINT (-122.6764 45.5165)",
);

// $ExpectType string
geojsonToWKT(
    { type: "Point", coordinates: [100, 100] },
);
