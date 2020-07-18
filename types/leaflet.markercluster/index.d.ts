// Type definitions for Leaflet.markercluster 1.4
// Project: https://github.com/Leaflet/Leaflet.markercluster
// Definitions by: Robert Imig <https://github.com/rimig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    class MarkerCluster extends Marker {
        /*
        * Recursively retrieve all child markers of this cluster.
        */
        getAllChildMarkers(): Marker[];

        /*
        * Returns the count of how many child markers we have.
        */
        getChildCount(): number;

        /*
        * Zoom to the minimum of showing all of the child markers, or the extents of this cluster.
        */
        zoomToBounds(options?: FitBoundsOptions): void;

        /*
        * Returns the cluster bounds.
        */
        getBounds(): LatLngBounds;
    }

    interface MarkerClusterGroupOptions extends LayerOptions {
        /*
        * When you mouse over a cluster it shows the bounds of its markers.
        */
        showCoverageOnHover?: boolean;

        /*
        * When you click a cluster we zoom to its bounds.
        */
        zoomToBoundsOnClick?: boolean;

        /*
        * When you click a cluster at the bottom zoom level we spiderfy it
        * so you can see all of its markers.
        */
        spiderfyOnMaxZoom?: boolean;

        /*
        * Clusters and markers too far from the viewport are removed from the map
        * for performance.
        */
        removeOutsideVisibleBounds?: boolean;

        /*
        * Smoothly split / merge cluster children when zooming and spiderfying.
        * If L.DomUtil.TRANSITION is false, this option has no effect (no animation is possible).
        */
        animate?: boolean;

        /*
        * If set to true (and animate option is also true) then adding individual markers to the
        * MarkerClusterGroup after it has been added to the map will add the marker and animate it
        * into the cluster. Defaults to false as this gives better performance when bulk adding markers.
        * addLayers does not support this, only addLayer with individual Markers.
        */
        animateAddingMarkers?: boolean;

        /*
        * If set, at this zoom level and below markers will not be clustered. This defaults to disabled.
        */
        disableClusteringAtZoom?: number;

        /*
        * The maximum radius that a cluster will cover from the central marker (in pixels). Default 80.
        * Decreasing will make more, smaller clusters. You can also use a function that accepts
        * the current map zoom and returns the maximum cluster radius in pixels
        */
        maxClusterRadius?: number | ((zoom: number) => number);

        /*
        * Options to pass when creating the L.Polygon(points, options) to show the bounds of a cluster.
        * Defaults to empty
        */
        polygonOptions?: PolylineOptions;

        /*
        * If set to true, overrides the icon for all added markers to make them appear as a 1 size cluster.
        */
        singleMarkerMode?: boolean;

        /*
        * Allows you to specify PolylineOptions to style spider legs.
        * By default, they are { weight: 1.5, color: '#222', opacity: 0.5 }.
        */
        spiderLegPolylineOptions?: PolylineOptions;

        /*
        * Increase from 1 to increase the distance away from the center that spiderfied markers are placed.
        * Use if you are using big marker icons (Default: 1).
        */
        spiderfyDistanceMultiplier?: number;

        /*
        * Function used to create the cluster icon
        */
        iconCreateFunction?: ((cluster: MarkerCluster) => Icon | DivIcon);

        /*
        * Boolean to split the addLayers processing in to small intervals so that the page does not freeze.
        */
        chunkedLoading?: boolean;

        /*
        * Time delay (in ms) between consecutive periods of processing for addLayers. Default to 50ms.
        */
        chunkDelay?: number;

        /*
        * Time interval (in ms) during which addLayers works before pausing to let the rest of the page process.
        * In particular, this prevents the page from freezing while adding a lot of markers. Defaults to 200ms.
        */
        chunkInterval?: number;

        /*
        * Callback function that is called at the end of each chunkInterval.
        * Typically used to implement a progress indicator. Defaults to null.
        */
        chunkProgress?: (processedMarkers: number, totalMarkers: number, elapsedTime: number) => void;
    }

    class MarkerClusterGroup extends FeatureGroup {
        /*
        * Bulk methods for adding and removing markers and should be favoured over the
        * single versions when doing bulk addition/removal of markers.
        */
        addLayers(layers: Layer[]): this;
        removeLayers(layers: Layer[]): this;

        clearLayers(): this;

        /*
        * If you have a marker in your MarkerClusterGroup and you want to get the visible
        * parent of it
        */
        getVisibleParent(marker: Marker): Marker;

        /*
        * If you have customized the clusters icon to use some data from the contained markers,
        * and later that data changes, use this method to force a refresh of the cluster icons.
        */
        refreshClusters(clusters?: Marker | Marker[] | LayerGroup | {[index: string]: Layer}): this;

        /*
        * Returns the total number of markers contained within that cluster.
        */
        getChildCount(): number;

        /*
        * Returns the array of total markers contained within that cluster.
        */
        getAllChildMarkers(): Marker[];

        /*
        * Returns true if the given layer (marker) is in the cluster.
        */
        hasLayer(layer: Layer): boolean;

        /*
        * Zooms to show the given marker (spiderfying if required),
        * calls the callback when the marker is visible on the map.
        */
        zoomToShowLayer(layer: Layer, callback?: () => void): void;
    }

    /*
    * Create a marker cluster group, optionally given marker cluster group options.
    */
    function markerClusterGroup(options?: MarkerClusterGroupOptions): MarkerClusterGroup;
}
