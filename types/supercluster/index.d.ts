// Type definitions for supercluster 2.3
// Project: https://github.com/mapbox/supercluster
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as GeoJSON from 'geojson';

interface Options {
    /**
     * Minimum zoom level at which clusters are generated.
     */
    minZoom?: number;
    /**
     * Maximum zoom level at which clusters are generated.
     */
    maxZoom?: number;
    /**
     * Cluster radius, in pixels.
     */
    radius?: number;
    /**
     * (Tiles) Tile extent. Radius is calculated relative to this value.
     */
    extent?: number;
    /**
     * Size of the KD-tree leaf node. Affects performance.
     */
    nodeSize?: number;
    /**
     * Whether timing info should be logged.
     */
    log?: boolean;
}

declare class Supercluster {
    /**
     * Loads an array of GeoJSON.Feature objects. Each feature's geometry must be a GeoJSON.Point. Once loaded, index is immutable.
     */
    load(points: supercluster.Points): Supercluster;
    /**
     * For the given bbox array ([westLng, southLat, eastLng, northLat]) and integer zoom, returns an array of clusters and points as GeoJSON.Feature objects.
     */
    getClusters(bbox: supercluster.BBox, zoom: number): supercluster.Clusters;

    /**
     * For a given zoom and x/y coordinates, returns a geojson-vt-compatible JSON tile object with cluster/point features.
     */
    getTile(z: number, x: number, y: number): supercluster.Tile;

    /**
     * Returns the children of a cluster (on the next zoom level) given its id (cluster_id value from feature properties) and zoom the cluster was from.
     */
    getChildren(clusterId: number, clusterZoom: number): supercluster.Clusters;

    /**
     * Returns all the points of a cluster (given its cluster_id and zoom),
     * with pagination support: limit is the number of points to return (set to Infinity for all points),
     * and offset is the amount of points to skip (for pagination).
     */
    getLeaves(clusterId: number, clusterZoom: number, limit?: number, offset?: number): supercluster.Clusters;

    /**
     * Returns the zoom on which the cluster expands into several children (useful for "click to zoom" feature), given the cluster's cluster_id and zoom.
     */
    getClusterExpansionZoom(clusterId: number, clusterZoom: number): number;
}

/**
 * A very fast JavaScript library for geospatial point clustering for browsers and Node.
 */
declare function supercluster(options: Options): Supercluster;
declare namespace supercluster {
    type Point = GeoJSON.Feature<GeoJSON.Point>;
    type Points = Point[];
    type Clusters = Cluster[];
    type TileFeatures = TileFeature[];
    type BBox = [number, number, number, number];
    interface ClusterProperties {
        cluster?: boolean;
        cluster_id?: number;
        point_count?: number;
        point_count_abbreviated?: number;
        sum?: number;
        [key: string]: any;
    }
    interface Cluster extends Point {
        properties: ClusterProperties;
    }
    interface TileFeature {
        type: 1;
        geometry: Array<[number, number]>;
        tags: ClusterProperties;
    }
    interface Tile {
        features: TileFeatures;
    }
}
export = supercluster;
