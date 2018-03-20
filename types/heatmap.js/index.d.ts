// Type definitions for heatmap.js 2.0
// Project: https://github.com/pa7/heatmap.js/
// Definitions by: Yang Guan <https://github.com/lookuptable>
//                 Rhys van der Waerden <https://github.com/rhys-vdw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export as namespace h337;

/**
 * Create a heatmap instance. A Heatmap can be customized with the configObject.
 *
 * @example <caption>Simple configuration with standard gradient</caption>
 *
 * // create configuration object
 * var config = {
 *   container: document.getElementById('heatmapContainer'),
 *   radius: 10,
 *   maxOpacity: .5,
 *   minOpacity: 0,
 *   blur: .75
 * };
 * // create heatmap with configuration
 * var heatmapInstance = h337.create(config);
 *
 * @example <caption>Custom gradient configuration</caption>
 *
 * // create configuration object
 * var config = {
 *   container: document.getElementById('heatmapContainer'),
 *   radius: 10,
 *   maxOpacity: .5,
 *   minOpacity: 0,
 *   blur: .75,
 *   gradient: {
 *     // enter n keys between 0 and 1 here
 *     // for gradient color customization
 *     '.5': 'blue',
 *     '.8': 'red',
 *     '.95': 'white'
 *   }
 * };
 * var heatmapInstance = h337.create(config);
 */
export function create<
    V extends string = 'value',
    X extends string = 'x',
    Y extends string = 'y'
>(
    configObject: HeatmapConfiguration<V, X, Y>
): Heatmap<V, X, Y>;

export function register(pluginKey: string, plugin: any): void;

/**
 * Heatmap instances are returned by h337.create. A heatmap instance has its own
 * internal datastore and renderer where you can manipulate data. As a result
 * the heatmap gets updated (either partially or completely, depending on
 * whether it's necessary).
 */
export class Heatmap<V extends string, X extends string, Y extends string> {
    /**
     * Use this functionality only for adding datapoints on the fly, not for data
     * initialization! heatmapInstance.addData adds a single or multiple
     * datapoints to the heatmap's datastore.
     *
     * @example <caption>A single datapoint</caption>
     *
     * var dataPoint = {
     *   x: 5, // x coordinate of the datapoint, a number
     *   y: 5, // y coordinate of the datapoint, a number
     *   value: 100 // the value at datapoint(x, y)
     * };
     * heatmapInstance.addData(dataPoint);
     *
     * @example <caption>multiple datapoints</caption>
     *
     * // for data initialization use setData!!
     * var dataPoints = [dataPoint, dataPoint, dataPoint, dataPoint];
     * heatmapInstance.addData(dataPoints);
     */
    addData(dataPoint: DataPoint<V, X, Y> | ReadonlyArray<DataPoint<V, X, Y>>): this;

    /**
     * Initialize a heatmap instance with the given dataset. Removes all
     * previously existing points from the heatmap instance and re-initializes
     * the datastore.
     *
     * @example
     *
     * var data = {
     *   max: 100,
     *   min: 0,
     *   data: [
     *     dataPoint, dataPoint, dataPoint, dataPoint
     *   ]
     * };
     * heatmapInstance.setData(data);
     */
    setData(data: HeatmapData<DataPoint<V, X, Y>>): this;

    /**
     * Changes the upper bound of your dataset and triggers a complete
     * rerendering.
     *
     * @example
     *
     * heatmapInstance.setDataMax(200);
     * // setting the maximum value triggers a complete rerendering of the heatmap
     * heatmapInstance.setDataMax(100);
     */
    setDataMax(number: number): this;

    /**
     * Changes the lower bound of your dataset and triggers a complete
     * rerendering.
     *
     * @example
     *
     * heatmapInstance.setDataMin(10);
     * // setting the minimum value triggers a complete rerendering of the heatmap
     * heatmapInstance.setDataMin(0);
     */
    setDataMin(number: number): this;

    /**
     * Reconfigures a heatmap instance after it has been initialized. Triggers a
     * complete rerendering.
     *
     * NOTE: This returns a reference to itself, but also offers an opportunity
     * to change the `xField`, `yField` and `valueField` options, which can
     * change the type of the `Heatmap` instance.
     *
     * @example
     *
     * var nuConfig = {
     *   radius: 10,
     *   maxOpacity: .5,
     *   minOpacity: 0,
     *   blur: .75
     * };
     * heatmapInstance.configure(nuConfig);
     */
    configure<
        Vn extends string = V,
        Xn extends string = X,
        Yn extends string = Y
    >(configObject: HeatmapConfiguration<Vn, Xn, Yn>): Heatmap<Vn, Xn, Yn>;

    /**
     * Returns value at datapoint position.
     *
     * The returned value is an interpolated value based on the gradient blending
     * if point is not in store.
     *
     * @example
     *
     * heatmapInstance.addData({ x: 10, y: 10, value: 100});
     * // get the value at x=10, y=10
     * heatmapInstance.getValueAt({ x: 10, y: 10 }); // returns 100
     */
    getValueAt(point: { x: number, y: number }): number;

    /**
     * Returns a persistable and reimportable (with setData) JSON object.
     *
     * @example
     *
     * var currentData = heatmapInstance.getData();
     * // now let's create a new instance and set the data
     * var heatmap2 = h337.create(config);
     * heatmap2.setData(currentData); // now both heatmap instances have the same content
     */
    getData(): HeatmapData<DataCircle>;

    /**
     * Returns dataURL string.
     *
     * The returned value is the base64 encoded dataURL of the heatmap instance.
     *
     * @example
     *
     * heatmapInstance.getDataURL(); // data:image/png;base64...
     * // ready for saving locally or on the server
     */
    getDataURL(): string;

    /**
     * Repaints the whole heatmap canvas.
     */
    repaint(): this;
}

export interface BaseHeatmapConfiguration<V extends string = 'value'> {
    /**
     * A background color string in form of hexcode, color name, or rgb(a)
     */
    backgroundColor?: string;

    /**
     * The blur factor that will be applied to all datapoints. The higher the
     * blur factor is, the smoother the gradients will be
     * Default value: 0.85
     */
    blur?: number;

    /**
     * An object that represents the gradient.
     * Syntax: {[key: number in range [0,1]]: color}
     */
    gradient?: { [key: string]: string };

    /**
     * The maximal opacity the highest value in the heatmap will have. (will be
     * overridden if opacity set)
     * Default value: 0.6
     */
    maxOpacity?: number;

    /**
     * The minimum opacity the lowest value in the heatmap will have (will be
     * overridden if opacity set)
     */
    minOpacity?: number;

    /**
     * A global opacity for the whole heatmap. This overrides maxOpacity and
     * minOpacity if set
     * Default value: 0.6
     */
    opacity?: number;

    /**
     * The radius each datapoint will have (if not specified on the datapoint
     * itself)
     */
    radius?: number;

    /**
     * Scales the radius based on map zoom.
     */
    scaleRadius?: boolean;

    /**
     * The property name of the value/weight in a datapoint
     * Default value: 'value'
     */
    valueField?: V;

    /**
     * Pass a callback to receive extrema change updates. Useful for DOM
     * legends.
     */
    onExtremaChange?: () => void;

    /**
     * Indicate whether the heatmap should use a global extrema or a local
     * extrema (the maximum and minimum of the currently displayed viewport)
     */
    useLocalExtrema?: boolean;
}

/**
 * Configuration object of a heatmap
 */
export interface HeatmapConfiguration<
    V extends string = 'value',
    X extends string = 'x',
    Y extends string = 'y',
> extends BaseHeatmapConfiguration<V> {
    /**
     * A DOM node where the heatmap canvas should be appended (heatmap will adapt to
     * the node's size)
     */
    container: HTMLElement;

    /**
     * The property name of your x coordinate in a datapoint
     * Default value: 'x'
     */
    xField?: X;

    /**
     * The property name of your y coordinate in a datapoint
     * Default value: 'y'
     */
    yField?: Y;
}

export interface HeatmapOverlayConfiguration<
    V extends string = 'value',
    TLat extends string = 'lat',
    TLong extends string = 'lng',
> extends BaseHeatmapConfiguration<V> {
    /**
     * The property name of your latitude coordinate in a datapoint
     * Default value: 'x'
     */
    latField?: TLat;

    /**
     * The property name of your longitude coordinate in a datapoint
     * Default value: 'y'
     */
    lngField?: TLong;
}

/**
 * A single data point on a heatmap. The interface of the data point can be
 * overridden by providing alternative values for `xKey` and `yKey` in the
 * config object.
 */
export type DataPoint<
    V extends string = 'value',
    X extends string = 'x',
    Y extends string = 'y',
> = Record<V | X | Y, number>;

/**
 * Type of data returned by `Heatmap#hello`, which ignores custom `xField`,
 * `yField` and `valueField`.
 */
export interface DataCircle {
    x: number;
    y: number;
    value: number;
    radius: number;
}

/**
 * An object representing the set of data points on a heatmap
 */
export interface HeatmapData<T> {
    /**
     * An array of data points
     */
    data: ReadonlyArray<T>;

    /**
     * Max value of the valueField
     */
    max: number;

    /**
     * Min value of the valueField
     */
    min: number;
}

// -- Leaflet plugin --

import * as Leaflet from "leaflet";

declare global {
    /**
     * The overlay layer to be added onto leaflet map
     */
    class HeatmapOverlay<
        V extends string,
        TLat extends string,
        TLng extends string
    > implements Leaflet.ILayer {
        /**
         * Initialization function
         */
        constructor(configuration: HeatmapOverlayConfiguration<V, TLat, TLng>);

        /**
         * Initialize a heatmap instance with the given dataset
         */
        setData(data: HeatmapData<DataPoint<V, TLat, TLng>>): void;

        /**
         * Experimential... not ready.
         */
        addData(data: DataPoint<V, TLat, TLng> | ReadonlyArray<DataPoint<V, TLat, TLng>>): void;

        /**
         * Create DOM elements for an overlay, adding them to map panes and puts
         * listeners on relevant map events
         */
        onAdd(map: Leaflet.Map): void;

        /**
         * Remove the overlay's elements from the DOM and remove listeners
         * previously added by onAdd()
         */
        onRemove(map: Leaflet.Map): void;
    }
}
