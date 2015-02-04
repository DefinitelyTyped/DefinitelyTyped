// Type definitions for heatmap.js v2.0
// Project: https://github.com/pa7/heatmap.js/
// Definitions by: Yang Guan <https://github.com/lookuptable>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../leaflet/leaflet.d.ts" />

/*
 * Configuration object of a heatmap
 */
interface HeatmapConfiguration {

    /*
     * A background color string in form of hexcode, color name, or rgb(a)
     */
    backgroundColor?: string;

    /*
     * The blur factor that will be applied to all datapoints. The higher the
     * blur factor is, the smoother the gradients will be
     * Default value: 0.85
     */
    blur?: number;

    /*
     * An object that represents the gradient
     */
    gradient?: any;

    /*
     * The property name of your latitude coordinate in a datapoint
     * Default value: 'x'
     */
    latField?: string;

    /*
     * The property name of your longitude coordinate in a datapoint
     * Default value: 'y'
     */
    lngField?: string;

    /*
     * The maximal opacity the highest value in the heatmap will have. (will be
     * overridden if opacity set)
     * Default value: 0.6
     */
    maxOpacity?: number;

    /*
     * The minimum opacity the lowest value in the heatmap will have (will be
     * overridden if opacity set)
     */
    minOpacity?: number;

    /*
     * A global opacity for the whole heatmap. This overrides maxOpacity and
     * minOpacity if set
     */
    opacity?: number;

    /*
     * The radius each datapoint will have (if not specified on the datapoint
     * itself)
     */
    radius?: number;

    /*
     * Indicate whether the heatmap should use a global extrema or a local
     * extrema (the maximum and minimum of the currently displayed viewport)
     */
    useLocalExtrema?: boolean;

    /*
     * The property name of the value/weight in a datapoint
     */
    valueField: string;
}

/*
 * A single data point on a heatmap. The keys are specified by
 * HeatmapConfig.latField, HeatmapConfig.lngField and HeatmapConfig.valueField
 */
interface HeatmapDataPoint {
    [index: string]: number;
}

/*
 * An object representing the set of data points on a heatmap
 */
interface HeatmapData {

    /*
     * An array of HeatmapDataPoints
     */
    data: HeatmapDataPoint[];

    /*
     * Max value of the valueField
     */
    max?: number;

    /*
     * Min value of the valueField
     */
    min?: number;
}

/*
 * The overlay layer to be added onto leaflet map
 */
declare class HeatmapOverlay {

    /*
     * Initialization function
     */
    constructor(configuration: HeatmapConfiguration)

    /*
     * Create DOM elements for an overlay, adding them to map panes and puts
     * listeners on relevant map events
     */
    onAdd(map: L.Map): void;

    /*
     * Remove the overlay's elements from the DOM and remove listeners
     * previously added by onAdd()
     */
    onRemove(map: L.Map): void;

    /*
     * Initialize a heatmap instance with the given dataset
     */
    setData(data: HeatmapData): void;
}
