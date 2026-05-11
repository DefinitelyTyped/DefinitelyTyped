import geojsonRewind from "@mapbox/geojson-rewind";
import type { Feature, MultiPolygon, Polygon } from "geojson";

let mp!: MultiPolygon;
let lineFeature!: Feature<Polygon>;

// $ExpectType MultiPolygon
const mp_output = geojsonRewind(mp, true);

// $ExpectType Feature<Polygon, GeoJsonProperties>
const lineFeature_output = geojsonRewind(lineFeature, true);

const myLine: Polygon = { type: "Polygon", coordinates: [[[-36, 174], [-36, 175]]] };

// $ExpectType Polygon
geojsonRewind(myLine);
