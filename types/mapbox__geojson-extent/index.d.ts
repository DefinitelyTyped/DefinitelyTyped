// Type definitions for @mapbox/geojson-extent 1.0
// Project: https://github.com/mapbox/geojson-extent#readme
// Definitions by: Aleš Jiránek <https://github.com/alesjiranek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { GeoJSON, BBox, Polygon } from 'geojson';

export = bbox;
export as namespace bbox;
declare function bbox(geoJson: GeoJSON): BBox;

declare namespace bbox {
    function polygon(geoJson: GeoJSON): Polygon | null;
    function bboxify(geoJson: GeoJSON): GeoJSON;
}
