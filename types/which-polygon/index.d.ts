import { FeatureCollection, GeoJsonProperties, Geometry } from "geojson";
import RBush from "rbush";

declare namespace whichPolygon {
    type Coordinates = [lng: number, lat: number];

    type BBox = [minLat: number, maxLat: number, minLng: number, maxLng: number];

    interface Query<Properties> {
        (coordinates: Coordinates, multi: true): Properties[] | null;
        (coordinates: Coordinates, multi?: false): Properties | null;

        bbox(bbox: BBox): Properties[];

        /** @internal */
        tree: RBush<unknown>;
    }

    type GeoJson<Properties> = FeatureCollection<Geometry, Properties>;
}

/**
 * The input GeoJSON must be a feature collection of polygons or multipolygons.
 * The query returns the properties of the matched polygon feature.
 */
declare function whichPolygon<Properties = GeoJsonProperties>(
    data: whichPolygon.GeoJson<Properties>,
): whichPolygon.Query<Properties>;

export = whichPolygon;
