import * as GeoJSON from "geojson";

export as namespace supercluster;

declare namespace Supercluster {
    interface Options<P, C> {
        /**
         * Minimum zoom level at which clusters are generated.
         *
         * @default 0
         */
        minZoom?: number | undefined;

        /**
         * Maximum zoom level at which clusters are generated.
         *
         * @default 16
         */
        maxZoom?: number | undefined;

        /**
         * Minimum number of points to form a cluster.
         *
         * @default 2
         */
        minPoints?: number | undefined;

        /**
         * Cluster radius, in pixels.
         *
         * @default 40
         */
        radius?: number | undefined;

        /**
         * (Tiles) Tile extent. Radius is calculated relative to this value.
         *
         * @default 512
         */
        extent?: number | undefined;

        /**
         * Size of the KD-tree leaf node. Affects performance.
         *
         * @default 64
         */
        nodeSize?: number | undefined;

        /**
         * Whether timing info should be logged.
         *
         * @default false
         */
        log?: boolean | undefined;

        /**
         * Whether to generate ids for input features in vector tiles.
         *
         * @default false
         */
        generateId?: boolean | undefined;

        /**
         * A function that returns cluster properties corresponding to a single point.
         *
         * @example
         * (props) => ({sum: props.myValue})
         */
        map?: ((props: P) => C) | undefined;

        /**
         * A reduce function that merges properties of two clusters into one.
         *
         * @example
         * (accumulated, props) => { accumulated.sum += props.sum; }
         */
        reduce?: ((accumulated: C, props: Readonly<C>) => void) | undefined;
    }

    /**
     * Default properties type, allowing any properties.
     * Try to avoid this for better typesafety by using proper types.
     */
    interface AnyProps {
        [name: string]: any;
    }

    /**
     * [GeoJSON Feature](https://tools.ietf.org/html/rfc7946#section-3.2),
     * with the geometry being a
     * [GeoJSON Point](https://tools.ietf.org/html/rfc7946#section-3.1.2).
     */
    type PointFeature<P> = GeoJSON.Feature<GeoJSON.Point, P>;

    interface ClusterProperties {
        /**
         * Always `true` to indicate that the Feature is a Cluster and not
         * an individual point.
         */
        cluster: true;
        /** Cluster ID */
        cluster_id: number;
        /** Number of points in the cluster. */
        point_count: number;
        /**
         * Abbreviated number of points in the cluster as string if the number
         * is 1000 or greater (e.g. `1.3k` if the number is 1298).
         *
         * For less than 1000 points it is the same value as `point_count`.
         */
        point_count_abbreviated: string | number;
    }

    type ClusterFeature<C> = PointFeature<ClusterProperties & C>;

    interface TileFeature<C, P> {
        type: 1;
        geometry: Array<[number, number]>;
        tags: (ClusterProperties & C) | P;
    }

    interface Tile<C, P> {
        features: Array<TileFeature<C, P>>;
    }
}

/**
 * A very fast geospatial point clustering library for browsers and Node.
 */
declare class Supercluster<
    P extends GeoJSON.GeoJsonProperties = Supercluster.AnyProps,
    C extends GeoJSON.GeoJsonProperties = Supercluster.AnyProps,
> {
    constructor(options?: Supercluster.Options<P, C>);

    /**
     * Loads an array of GeoJSON Feature objects. Each feature's geometry
     * must be a GeoJSON Point. Once loaded, index is immutable.
     *
     * @param points Array of GeoJSON Features, the geometries being GeoJSON Points.
     */
    load(points: Array<Supercluster.PointFeature<P>>): Supercluster<P, C>;

    /**
     * Returns an array of clusters and points as `GeoJSON.Feature` objects
     * for the given bounding box (`bbox`) and zoom level (`zoom`).
     *
     * @param bbox Bounding box (`[westLng, southLat, eastLng, northLat]`).
     * @param zoom Zoom level.
     */
    getClusters(bbox: GeoJSON.BBox, zoom: number): Array<Supercluster.ClusterFeature<C> | Supercluster.PointFeature<P>>;

    /**
     * For a given zoom and x/y coordinates, returns a
     * [geojson-vt](https://github.com/mapbox/geojson-vt)-compatible JSON
     * tile object with cluster any point features.
     */
    getTile(zoom: number, x: number, y: number): Supercluster.Tile<C, P> | null;

    /**
     * Returns the children of a cluster (on the next zoom level).
     *
     * @param clusterId Cluster ID (`cluster_id` value from feature properties).
     * @throws {Error} If `clusterId` does not exist.
     */
    getChildren(clusterId: number): Array<Supercluster.ClusterFeature<C> | Supercluster.PointFeature<P>>;

    /**
     * Returns all the points of a cluster (with pagination support).
     *
     * @param clusterId Cluster ID (`cluster_id` value from feature properties).
     * @param limit The number of points to return (set to `Infinity` for all points).
     * @param offset The amount of points to skip (for pagination).
     */
    getLeaves(clusterId: number, limit?: number, offset?: number): Array<Supercluster.PointFeature<P>>;

    /**
     * Returns the zoom level on which the cluster expands into several
     * children (useful for "click to zoom" feature).
     *
     * @param clusterId Cluster ID (`cluster_id` value from feature properties).
     */
    getClusterExpansionZoom(clusterId: number): number;
}
export = Supercluster;
