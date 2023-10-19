import * as L from "leaflet";

declare module "leaflet" {
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

        /*
         * Spiderfies the child markers of this cluster.
         */
        spiderfy(): void;

        /*
         * Unspiderfies a cluster (opposite of spiderfy).
         */
        unspiderfy(): void;
    }

    interface MarkerClusterGroupOptions extends LayerOptions {
        /*
         * The maximum radius that a cluster will cover from the central marker (in pixels). Default 80.
         * Decreasing will make more, smaller clusters. You can also use a function that accepts
         * the current map zoom and returns the maximum cluster radius in pixels
         */
        maxClusterRadius?: number | ((zoom: number) => number) | undefined;

        /*
         * Function used to create the cluster icon
         */
        iconCreateFunction?: ((cluster: MarkerCluster) => Icon | DivIcon) | undefined;

        /*
         * Map pane where the cluster icons will be added.
         * Defaults to L.Marker's default (currently 'markerPane')
         */
        clusterPane?: string | undefined;

        /*
         * When you click a cluster at any zoom level we spiderfy it
         * so you can see all of its markers.
         */
        spiderfyOnEveryZoom?: boolean | undefined;

        /*
         * When you click a cluster at the bottom zoom level we spiderfy it
         * so you can see all of its markers.
         */
        spiderfyOnMaxZoom?: boolean | undefined;

        /*
         * When you mouse over a cluster it shows the bounds of its markers.
         */
        showCoverageOnHover?: boolean | undefined;

        /*
         * When you click a cluster we zoom to its bounds.
         */
        zoomToBoundsOnClick?: boolean | undefined;

        /*
         * If set to true, overrides the icon for all added markers to make them appear as a 1 size cluster.
         */
        singleMarkerMode?: boolean | undefined;

        /*
         * If set, at this zoom level and below markers will not be clustered. This defaults to disabled.
         */
        disableClusteringAtZoom?: number | undefined;

        /*
         * Clusters and markers too far from the viewport are removed from the map
         * for performance.
         */
        removeOutsideVisibleBounds?: boolean | undefined;

        /*
         * Smoothly split / merge cluster children when zooming and spiderfying.
         * If L.DomUtil.TRANSITION is false, this option has no effect (no animation is possible).
         */
        animate?: boolean | undefined;

        /*
         * If set to true (and animate option is also true) then adding individual markers to the
         * MarkerClusterGroup after it has been added to the map will add the marker and animate it
         * into the cluster. Defaults to false as this gives better performance when bulk adding markers.
         * addLayers does not support this, only addLayer with individual Markers.
         */
        animateAddingMarkers?: boolean | undefined;

        /*
         * Custom function to calculate spiderfy shape positions
         */
        spiderfyShapePositions?: ((count: number, centerPoint: Point) => Point[]) | undefined;

        /*
         * Increase from 1 to increase the distance away from the center that spiderfied markers are placed.
         * Use if you are using big marker icons (Default: 1).
         */
        spiderfyDistanceMultiplier?: number | undefined;

        /*
         * Allows you to specify PolylineOptions to style spider legs.
         * By default, they are { weight: 1.5, color: '#222', opacity: 0.5 }.
         */
        spiderLegPolylineOptions?: PolylineOptions | undefined;

        /*
         * Boolean to split the addLayers processing in to small intervals so that the page does not freeze.
         */
        chunkedLoading?: boolean | undefined;

        /*
         * Time delay (in ms) between consecutive periods of processing for addLayers. Default to 50ms.
         */
        chunkDelay?: number | undefined;

        /*
         * Time interval (in ms) during which addLayers works before pausing to let the rest of the page process.
         * In particular, this prevents the page from freezing while adding a lot of markers. Defaults to 200ms.
         */
        chunkInterval?: number | undefined;

        /*
         * Callback function that is called at the end of each chunkInterval.
         * Typically used to implement a progress indicator. Defaults to null.
         */
        chunkProgress?: ((processedMarkers: number, totalMarkers: number, elapsedTime: number) => void) | undefined;

        /*
         * Options to pass when creating the L.Polygon(points, options) to show the bounds of a cluster.
         * Defaults to empty
         */
        polygonOptions?: PolylineOptions | undefined;
    }

    /*
     * Cluster-related handler functions.
     */
    type AnimationEndEventHandlerFn = (event: LeafletEvent) => void;
    type SpiderfyEventHandlerFn = (event: MarkerClusterSpiderfyEvent) => void;

    /*
     * Event fired on spiderfy cluster actions.
     */
    interface MarkerClusterSpiderfyEvent extends LeafletEvent {
        /*
         * The cluster that fired the event.
         */
        cluster: MarkerCluster;

        /*
         * The markers in the cluster that fired the event.
         */
        markers: Marker[];
    }

    /*
     * Extend existing event handler function map to include cluster events.
     */
    interface LeafletEventHandlerFnMap {
        /*
         * Fires when overlapping markers get spiderified.
         */
        spiderfied?: SpiderfyEventHandlerFn | undefined;

        /*
         * Fires when overlapping markers get unspiderified.
         */
        unspiderfied?: SpiderfyEventHandlerFn | undefined;

        /*
         * Fires when marker clustering/unclustering animation has completed.
         */
        animationend?: AnimationEndEventHandlerFn | undefined;
    }

    /*
     * Extend Evented to include cluster events.
     */
    interface Evented {
        on(type: "spiderfied" | "unspiderfied", fn?: SpiderfyEventHandlerFn, context?: any): this;
        on(type: "animationend", fn?: AnimationEndEventHandlerFn, context?: any): this;

        off(type: "spiderfied" | "unspiderfied", fn?: SpiderfyEventHandlerFn, context?: any): this;
        off(type: "animationend", fn?: AnimationEndEventHandlerFn, context?: any): this;

        once(type: "spiderfied" | "unspiderfied", fn?: SpiderfyEventHandlerFn, context?: any): this;
        once(type: "animationend", fn?: AnimationEndEventHandlerFn, context?: any): this;

        addEventListener(type: "spiderfied" | "unspiderfied", fn?: SpiderfyEventHandlerFn, context?: any): this;
        addEventListener(type: "animationend", fn?: AnimationEndEventHandlerFn, context?: any): this;

        removeEventListener(type: "spiderfied" | "unspiderfied", fn?: SpiderfyEventHandlerFn, context?: any): this;
        removeEventListener(type: "animationend", fn?: AnimationEndEventHandlerFn, context?: any): this;

        addOneTimeEventListener(type: "spiderfied" | "unspiderfied", fn?: SpiderfyEventHandlerFn, context?: any): this;
        addOneTimeEventListener(type: "animationend", fn?: AnimationEndEventHandlerFn, context?: any): this;
    }

    class MarkerClusterGroup extends FeatureGroup {
        constructor(options?: MarkerClusterGroupOptions);

        /*
         * Bulk methods for adding and removing markers and should be favoured over the
         * single versions when doing bulk addition/removal of markers.
         */
        addLayers(layers: Layer[], skipLayerAddEvent?: boolean): this;

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
        refreshClusters(clusters?: Marker | Marker[] | LayerGroup | { [index: string]: Layer }): this;

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
