// Type definitions for react-leaflet-markercluster 3.0
// Project: https://github.com/YUzhva/react-leaflet-markercluster
// Definitions by: Davide Ciacco <https://github.com/ciaccodavide>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="leaflet.markercluster" />

import { ComponentType } from 'react';
import { DivIcon, Icon, MarkerCluster, Point, PolylineOptions } from 'leaflet';

interface MarkerClusterGroupProps {
    /**
     * showCoverageOnHover
     *
     * When you mouse over a cluster it shows the bounds of its markers.
     */
    showCoverageOnHover?: boolean | undefined;

    /**
     * zoomToBoundsOnClick
     *
     * When you click a cluster we zoom to its bounds.
     */
    zoomToBoundsOnClick?: boolean | undefined;

    /**
     * spiderfyOnMaxZoom
     *
     * When you click a cluster at the bottom zoom level we spiderfy it so you can see all of its
     * markers.
     *
     * Note: the spiderfy occurs at the current zoom level if all items within the cluster are
     * still clustered at the maximum zoom level or at zoom specified by disableClusteringAtZoom
     * option.
     */
    spiderfyOnMaxZoom?: boolean | undefined;

    /**
     * removeOutsideVisibleBounds
     *
     * Clusters and markers too far from the viewport are removed from the map for performance.
     */
    removeOutsideVisibleBounds?: boolean | undefined;

    /**
     * animate
     *
     * Smoothly split / merge cluster children when zooming and spiderfying.
     * If L.DomUtil.TRANSITION is false, this option has no effect (no animation is possible).
     */
    animate?: boolean | undefined;

    /**
     * animateAddingMarkers
     *
     * If set to true (and animate option is also true) then adding individual markers
     * to the MarkerClusterGroup after it has been added to the map will add the marker
     * and animate it into the cluster.
     * Defaults to false as this gives better performance when bulk adding markers.
     * addLayers does not support this, only addLayer with individual Markers.
     */
    animateAddingMarkers?: boolean | undefined;

    /**
     * disableClusteringAtZoom
     *
     * If set, at this zoom level and below, markers will not be clustered.
     * This defaults to disabled.
     *
     * Note: you may be interested in disabling spiderfyOnMaxZoom option when using
     * disableClusteringAtZoom.
     */
    disableClusteringAtZoom?: number | undefined;

    /**
     * maxClusterRadius
     *
     * The maximum radius that a cluster will cover from the central marker (in pixels).
     * Default 80.
     * Decreasing will make more, smaller clusters.
     * You can also use a function that accepts the current map zoom
     * and returns the maximum cluster radius in pixels.
     */
    maxClusterRadius?: number | ((zoom: number) => number) | undefined;

    /**
     * polygonOptions
     *
     * Options to pass when creating the L.Polygon(points, options) to show the bounds of a cluster.
     * Defaults to empty, which lets Leaflet use the default Path options.
     */
    polygonOptions?: PolylineOptions | undefined;

    /**
     * singleMarkerMode
     *
     * If set to true, overrides the icon for all added markers to make them appear as a 1 size cluster.
     * Note: the markers are not replaced by cluster objects, only their icon is replaced.
     * Hence they still react to normal events, and option disableClusteringAtZoom does not restore
     * their previous icon (see #391).
     */
    singleMarkerMode?: boolean | undefined;

    /**
     * spiderLegPolylineOptions
     *
     * Allows you to specify PolylineOptions to style spider legs.
     * By default, they are { weight: 1.5, color: '#222', opacity: 0.5 }.
     */
    spiderLegPolylineOptions?: PolylineOptions | undefined;

    /**
     * spiderfyDistanceMultiplier
     *
     * Increase from 1 to increase the distance away from the center
     * that spiderfied markers are placed.
     * Use if you are using big marker icons (Default: 1).
     */
    spiderfyDistanceMultiplier?: number | undefined;

    /**
     * iconCreateFunction
     *
     * Function used to create the cluster icon.
     */
    iconCreateFunction?: ((cluster: MarkerCluster) => Icon | DivIcon) | undefined;

    /**
     * spiderfyShapePositions
     *
     * Function used to override spiderfy default shape positions.
     */
    spiderfyShapePositions?: ((count: number, centerPt: Point) => Point[]) | undefined;

    /**
     * clusterPane
     *
     * Map pane where the cluster icons will be added.
     * Defaults to L.Marker's default (currently 'markerPane').
     */
    clusterPane?: string | undefined;

    /**
     * chunkedLoading
     *
     * Boolean to split the addLayers processing in to small intervals
     * so that the page does not freeze.
     */
    chunkedLoading?: boolean | undefined;

    /**
     * chunkInterval
     *
     * Time interval (in ms) during which addLayers works before pausing
     * to let the rest of the page process.
     * In particular, this prevents the page from freezing while adding a lot of markers.
     * Defaults to 200ms.
     */
    chunkInterval?: number | undefined;

    /**
     * chunkDelay
     *
     * Time delay (in ms) between consecutive periods of processing for addLayers.
     * Default to 50ms.
     */
    chunkDelay?: number | undefined;

    /**
     * chunkProgress
     *
     * Callback function that is called at the end of each chunkInterval.
     * Typically used to implement a progress indicator.
     * Defaults to null.
     */
        chunkProgress?: ((processed: number, total: number, elapsed: number) => void) | null;
}

declare const MarkerClusterGroup: ComponentType<MarkerClusterGroupProps>;
export default MarkerClusterGroup;
