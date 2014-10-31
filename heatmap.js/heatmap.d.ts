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
     * An object that represents the gradient
     */
    gradient?: any;

    /*
     * The radius each datapoint will have (if not specified on the datapoint
     * itself)
     */
    radius?: number;

    /*
     * The radius each datapoint will have (if not specified on the datapoint
     * itself)
     */
    useLocalExtrema?: boolean;

    /*
     * A global opacity for the whole heatmap. This overrides maxOpacity and
     * minOpacity if set
     */
    opacity?: number;

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
     * The blur factor that will be applied to all datapoints. The higher the
     * blur factor is, the smoother the gradients will be
     * Default value: 0.85
     */
    blur?: number;

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
     * The property name of your y coordinate in a datapoint
     */
    valueField: string;
}

/*
 * A single data point on a heatmap. The keys are specified by
 * HeatmapConfig.latField, HeatmapConfig.lngField and HeatmapConfig.valueField
 */
interface HeatmapDataPoint {
    [index: string] : number;
}

/*
 * An object representing the set of data points on a heatmap.
 */
interface HeatmapDataObject {

    /*
     * Max value of of the valueField
     */
    max?: number;

    /*
     * Min value of of the valueField
     */
    min?: number;

    /*
     * An array of HeatmapDataPoints
     */
    data: HeatmapDataPoint[];
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
     * Create DOM elements for othe overlay, adding them to map panes and
     * puts listeners on relevant map events
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
    setData(data: {}): void;
}
