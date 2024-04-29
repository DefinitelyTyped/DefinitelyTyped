import { BBox, GeoJSON, Polygon } from "geojson";

export = bbox;
export as namespace bbox;
declare function bbox(geoJson: GeoJSON): BBox;

declare namespace bbox {
    function polygon(geoJson: GeoJSON): Polygon | null;
    function bboxify(geoJson: GeoJSON): GeoJSON;
}
