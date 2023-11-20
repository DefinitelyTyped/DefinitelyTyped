import { Feature, FeatureCollection, Polygon } from "geojson";
import RBush from "rbush";

declare namespace PolygonLookup {
    interface BBox {
        maxX: number;
        maxY: number;
        minX: number;
        minY: number;
    }
}

declare class PolygonLookup {
    constructor(featureCollection?: FeatureCollection);

    /** A spatial index for `this.polygons`. */
    rtree: RBush<PolygonLookup.BBox[]>;
    polygons: FeatureCollection;

    /**
     * Find polygon(s) that a point intersects. Execute a bounding-box search to
     * narrow down the candidate polygons to a small subset, and then perform
     * additional point-in-polygon intersections to resolve any ambiguities.
     *
     * @param x The x-coordinate of the point.
     * @param y The y-coordinate of the point.
     * @param limit Number of results to return (`-1` to return all the results).
     * @return  If one or more bounding box intersections are
     * found and limit is `undefined`, return the first feature that intersects
     * (`x`, `y`); otherwise, `undefined`. If a limit is passed in, return
     * intersecting polygons as a GeoJSON `FeatureCollection`.
     */
    search(x: number, y: number): Feature<Polygon> | undefined;
    search(x: number, y: number, limit: number): FeatureCollection<Polygon> | undefined;

    /**
     * Build a spatial index for a set of polygons, and store both the polygons and
     * the index in this `PolygonLookup`.
     *
     * @param collection A GeoJSON-formatted `FeatureCollection`.
     */
    loadFeatureCollection(collection: FeatureCollection): void;
}

export = PolygonLookup;
