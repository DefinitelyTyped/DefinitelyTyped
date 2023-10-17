export as namespace ol;

export interface GlobalObject {
    [key: string]: any;
}

/**
 * Error object thrown when an assertion failed. This is an ECMA-262 Error,
 * extended with a `code` property.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error}
 * @param code Error code.
 */
export class AssertionError extends Error {
    /**
     * Error object thrown when an assertion failed. This is an ECMA-262 Error,
     * extended with a `code` property.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error}
     * @param code Error code.
     */
    constructor(code: number);

    /**
     * Error code. The meaning of the code can be found on
     * {@link http://openlayers.org/en/latest/errors.html} (replace `latest` with
     * the version found in the OpenLayers script's header comment if a version
     * other than the latest is used).
     * @api
     */
    code: number;
}

/**
 * @classdesc
 * An attribution for a layer source.
 *
 * Example:
 *
 *     source: new ol.source.OSM({
 *       attributions: [
 *         new ol.Attribution({
 *           html: 'All maps &copy; ' +
 *               '<a href="http://www.opencyclemap.org/">OpenCycleMap</a>'
 *         }),
 *         ol.source.OSM.ATTRIBUTION
 *       ],
 *     ..
 *
 * @param options Attribution options.
 * @struct
 * @api stable
 */
export class Attribution {
    /**
     * @classdesc
     * An attribution for a layer source.
     *
     * Example:
     *
     *     source: new ol.source.OSM({
     *       attributions: [
     *         new ol.Attribution({
     *           html: 'All maps &copy; ' +
     *               '<a href="http://www.opencyclemap.org/">OpenCycleMap</a>'
     *         }),
     *         ol.source.OSM.ATTRIBUTION
     *       ],
     *     ..
     *
     * @param options Attribution options.
     * @struct
     * @api stable
     */
    constructor(options: olx.AttributionOptions);

    /**
     * Get the attribution markup.
     * @return The attribution HTML.
     * @api stable
     */
    getHTML(): string;
}

/**
 * @classdesc
 * An expanded version of standard JS Array, adding convenience methods for
 * manipulation. Add and remove changes to the Collection trigger a Collection
 * event. Note that this does not cover changes to the objects _within_ the
 * Collection; they trigger events on the appropriate object, not on the
 * Collection as a whole.
 *
 * @fires ol.Collection.Event
 * @param opt_array Array.
 * @template T
 * @api stable
 */
export class Collection<T> extends Object {
    /**
     * @classdesc
     * An expanded version of standard JS Array, adding convenience methods for
     * manipulation. Add and remove changes to the Collection trigger a Collection
     * event. Note that this does not cover changes to the objects _within_ the
     * Collection; they trigger events on the appropriate object, not on the
     * Collection as a whole.
     *
     * @fires ol.Collection.Event
     * @param opt_array Array.
     * @template T
     * @api stable
     */
    constructor(opt_array?: T[]);

    /**
     * Remove all elements from the collection.
     * @api stable
     */
    clear(): void;

    /**
     * Add elements to the collection.  This pushes each item in the provided array
     * to the end of the collection.
     * @param arr Array.
     * @return This collection.
     * @api stable
     */
    extend(arr: T[]): ol.Collection<T>;

    /**
     * Iterate over each element, calling the provided callback.
     * @param f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array). The return value is ignored.
     * @param opt_this The object to use as `this` in `f`.
     * @template S
     * @api stable
     */
    forEach(f: (item: T, index: number, array: T[]) => any, opt_this?: any): void;

    /**
     * Get a reference to the underlying Array object. Warning: if the array
     * is mutated, no events will be dispatched by the collection, and the
     * collection's "length" property won't be in sync with the actual length
     * of the array.
     * @return Array.
     * @api stable
     */
    getArray(): T[];

    /**
     * Get the element at the provided index.
     * @param index Index.
     * @return Element.
     * @api stable
     */
    item(index: number): T;

    /**
     * Get the length of this collection.
     * @return The length of the array.
     * @observable
     * @api stable
     */
    getLength(): number;

    /**
     * Insert an element at the provided index.
     * @param index Index.
     * @param elem Element.
     * @api stable
     */
    insertAt(index: number, elem: T): void;

    /**
     * Remove the last element of the collection and return it.
     * Return `undefined` if the collection is empty.
     * @return Element.
     * @api stable
     */
    pop(): T;

    /**
     * Insert the provided element at the end of the collection.
     * @param elem Element.
     * @return Length.
     * @api stable
     */
    push(elem: T): number;

    /**
     * Remove the first occurrence of an element from the collection.
     * @param elem Element.
     * @return The removed element or undefined if none found.
     * @api stable
     */
    remove(elem: T): T;

    /**
     * Remove the element at the provided index and return it.
     * Return `undefined` if the collection does not contain this index.
     * @param index Index.
     * @return Value.
     * @api stable
     */
    removeAt(index: number): T;

    /**
     * Set the element at the provided index.
     * @param index Index.
     * @param elem Element.
     * @api stable
     */
    setAt(index: number, elem: T): void;
}

export namespace Collection {
    type EventType = string;

    /**
     * @classdesc
     * Events emitted by {@link ol.Collection} instances are instances of this
     * type.
     *
     * @param type Type.
     * @param opt_element Element.
     */
    class Event extends events.Event {
        /**
         * @classdesc
         * Events emitted by {@link ol.Collection} instances are instances of this
         * type.
         *
         * @param type Type.
         * @param opt_element Element.
         */
        constructor(type: EventType, opt_element?: any);

        /**
         * The element that is added to or removed from the collection.
         * @api stable
         */
        element: any;
    }
}

/**
 * Colors can be defined as a {@link ol.Color} array, or as strings in
 * `rgb(r,g,b)` or `rgba(r,g,b,a)` format, or in hex `#rrggbb` or `#rgb` format.
 * Color names, like 'red', 'blue' or 'green', may also be used with the
 * Canvas renderer.
 */
export namespace color {
    /**
     * Return the color as an array. This function maintains a cache of calculated
     * arrays which means the result should not be modified.
     * @param color Color.
     * @return Color.
     * @api
     */
    function asArray(color: ol.Color | string): ol.Color;

    /**
     * Return the color as an rgba string.
     * @param color Color.
     * @return Rgba string.
     * @api
     */
    function asString(color: ol.Color | string): string;
}

/**
 * An {@link ol.ColorLike} can be a color, gradient or pattern accepted by
 * [CanvasRenderingContext2D.fillStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle).
 */
export namespace colorlike {
    /**
     * @param color Color.
     * @return The color as an ol.ColorLike
     * @api
     */
    function asColorLike(color: ol.Color | ol.ColorLike): ol.ColorLike;
}

export namespace control {
    /**
     * @classdesc
     * Control to show all the attributions associated with the layer sources
     * in the map. This control is one of the default controls included in maps.
     * By default it will show in the bottom right portion of the map, but this can
     * be changed by using a css selector for `.ol-attribution`.
     *
     * @param opt_options Attribution options.
     * @api stable
     */
    class Attribution extends Control {
        /**
         * @classdesc
         * Control to show all the attributions associated with the layer sources
         * in the map. This control is one of the default controls included in maps.
         * By default it will show in the bottom right portion of the map, but this can
         * be changed by using a css selector for `.ol-attribution`.
         *
         * @param opt_options Attribution options.
         * @api stable
         */
        constructor(opt_options?: olx.control.AttributionOptions);

        /**
         * Update the attribution element.
         * @param mapEvent Map event.
         * @api
         */
        static render(mapEvent: ol.MapEvent): void;

        /**
         * Return `true` if the attribution is collapsible, `false` otherwise.
         * @return True if the widget is collapsible.
         * @api stable
         */
        getCollapsible(): boolean;

        /**
         * Set whether the attribution should be collapsible.
         * @param collapsible True if the widget is collapsible.
         * @api stable
         */
        setCollapsible(collapsible: boolean): void;

        /**
         * Collapse or expand the attribution according to the passed parameter. Will
         * not do anything if the attribution isn't collapsible or if the current
         * collapsed state is already the one requested.
         * @param collapsed True if the widget is collapsed.
         * @api stable
         */
        setCollapsed(collapsed: boolean): void;

        /**
         * Return `true` when the attribution is currently collapsed or `false`
         * otherwise.
         * @return True if the widget is collapsed.
         * @api stable
         */
        getCollapsed(): boolean;
    }

    /**
     * @classdesc
     * A control is a visible widget with a DOM element in a fixed position on the
     * screen. They can involve user input (buttons), or be informational only;
     * the position is determined using CSS. By default these are placed in the
     * container with CSS class name `ol-overlaycontainer-stopevent`, but can use
     * any outside DOM element.
     *
     * This is the base class for controls. You can use it for simple custom
     * controls by creating the element with listeners, creating an instance:
     * ```js
     * var myControl = new ol.control.Control({element: myElement});
     * ```
     * and then adding this to the map.
     *
     * The main advantage of having this as a control rather than a simple separate
     * DOM element is that preventing propagation is handled for you. Controls
     * will also be `ol.Object`s in a `ol.Collection`, so you can use their
     * methods.
     *
     * You can also extend this base for your own control class. See
     * examples/custom-controls for an example of how to do this.
     *
     * @param options Control options.
     * @api stable
     */
    class Control extends Object {
        /**
         * @classdesc
         * A control is a visible widget with a DOM element in a fixed position on the
         * screen. They can involve user input (buttons), or be informational only;
         * the position is determined using CSS. By default these are placed in the
         * container with CSS class name `ol-overlaycontainer-stopevent`, but can use
         * any outside DOM element.
         *
         * This is the base class for controls. You can use it for simple custom
         * controls by creating the element with listeners, creating an instance:
         * ```js
         * var myControl = new ol.control.Control({element: myElement});
         * ```
         * and then adding this to the map.
         *
         * The main advantage of having this as a control rather than a simple separate
         * DOM element is that preventing propagation is handled for you. Controls
         * will also be `ol.Object`s in a `ol.Collection`, so you can use their
         * methods.
         *
         * You can also extend this base for your own control class. See
         * examples/custom-controls for an example of how to do this.
         *
         * @param options Control options.
         * @api stable
         */
        constructor(options: olx.control.ControlOptions);

        /**
         * Get the map associated with this control.
         * @return Map.
         * @api stable
         */
        getMap(): ol.Map;

        /**
         * Remove the control from its current map and attach it to the new map.
         * Subclasses may set up event handlers to get notified about changes to
         * the map here.
         * @param map Map.
         * @api stable
         */
        setMap(map: ol.Map): void;

        /**
         * This function is used to set a target element for the control. It has no
         * effect if it is called after the control has been added to the map (i.e.
         * after `setMap` is called on the control). If no `target` is set in the
         * options passed to the control constructor and if `setTarget` is not called
         * then the control is added to the map's overlay container.
         * @param target Target.
         * @api
         */
        setTarget(target: Element | string): void;
    }

    /**
     * @classdesc
     * Provides a button that when clicked fills up the full screen with the map.
     * The full screen source element is by default the element containing the map viewport unless
     * overriden by providing the `source` option. In which case, the dom
     * element introduced using this parameter will be displayed in full screen.
     *
     * When in full screen mode, a close button is shown to exit full screen mode.
     * The [Fullscreen API](http://www.w3.org/TR/fullscreen/) is used to
     * toggle the map in full screen mode.
     *
     * @param opt_options Options.
     * @api stable
     */
    class FullScreen extends Control {
        /**
         * @classdesc
         * Provides a button that when clicked fills up the full screen with the map.
         * The full screen source element is by default the element containing the map viewport unless
         * overriden by providing the `source` option. In which case, the dom
         * element introduced using this parameter will be displayed in full screen.
         *
         * When in full screen mode, a close button is shown to exit full screen mode.
         * The [Fullscreen API](http://www.w3.org/TR/fullscreen/) is used to
         * toggle the map in full screen mode.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.control.FullScreenOptions);
    }

    /**
     * Set of controls included in maps by default. Unless configured otherwise,
     * this returns a collection containing an instance of each of the following
     * controls:
     * * {@link ol.control.Zoom}
     * * {@link ol.control.Rotate}
     * * {@link ol.control.Attribution}
     *
     * @param opt_options Defaults options.
     * @return Controls.
     * @api stable
     */
    function defaults(opt_options?: olx.control.DefaultsOptions): ol.Collection<Control>;

    /**
     * @classdesc
     * A control to show the 2D coordinates of the mouse cursor. By default, these
     * are in the view projection, but can be in any supported projection.
     * By default the control is shown in the top right corner of the map, but this
     * can be changed by using the css selector `.ol-mouse-position`.
     *
     * @param opt_options Mouse position
     *     options.
     * @api stable
     */
    class MousePosition extends Control {
        /**
         * @classdesc
         * A control to show the 2D coordinates of the mouse cursor. By default, these
         * are in the view projection, but can be in any supported projection.
         * By default the control is shown in the top right corner of the map, but this
         * can be changed by using the css selector `.ol-mouse-position`.
         *
         * @param opt_options Mouse position
         *     options.
         * @api stable
         */
        constructor(opt_options?: olx.control.MousePositionOptions);

        /**
         * Update the mouseposition element.
         * @param mapEvent Map event.
         * @api
         */
        static render(mapEvent: ol.MapEvent): void;

        /**
         * Return the coordinate format type used to render the current position or
         * undefined.
         * @return The format to render the current
         *     position in.
         * @observable
         * @api stable
         */
        getCoordinateFormat(): ol.CoordinateFormatType;

        /**
         * Return the projection that is used to report the mouse position.
         * @return The projection to report mouse
         *     position in.
         * @observable
         * @api stable
         */
        getProjection(): ol.proj.Projection;

        /**
         * Set the coordinate format type used to render the current position.
         * @param format The format to render the current
         *     position in.
         * @observable
         * @api stable
         */
        setCoordinateFormat(format: ol.CoordinateFormatType): void;

        /**
         * Set the projection that is used to report the mouse position.
         * @param projection The projection to report mouse
         *     position in.
         * @observable
         * @api stable
         */
        setProjection(projection: ol.proj.Projection): void;
    }

    /**
     * Create a new control with a map acting as an overview map for an other
     * defined map.
     * @param opt_options OverviewMap options.
     * @api
     */
    class OverviewMap extends Control {
        /**
         * Create a new control with a map acting as an overview map for an other
         * defined map.
         * @param opt_options OverviewMap options.
         * @api
         */
        constructor(opt_options?: olx.control.OverviewMapOptions);

        /**
         * Update the overview map element.
         * @param mapEvent Map event.
         * @api
         */
        static render(mapEvent: ol.MapEvent): void;

        /**
         * Return `true` if the overview map is collapsible, `false` otherwise.
         * @return True if the widget is collapsible.
         * @api stable
         */
        getCollapsible(): boolean;

        /**
         * Set whether the overview map should be collapsible.
         * @param collapsible True if the widget is collapsible.
         * @api stable
         */
        setCollapsible(collapsible: boolean): void;

        /**
         * Collapse or expand the overview map according to the passed parameter. Will
         * not do anything if the overview map isn't collapsible or if the current
         * collapsed state is already the one requested.
         * @param collapsed True if the widget is collapsed.
         * @api stable
         */
        setCollapsed(collapsed: boolean): void;

        /**
         * Determine if the overview map is collapsed.
         * @return The overview map is collapsed.
         * @api stable
         */
        getCollapsed(): boolean;

        /**
         * Return the overview map.
         * @return Overview map.
         * @api
         */
        getOverviewMap(): ol.Map;
    }

    /**
     * @classdesc
     * A button control to reset rotation to 0.
     * To style this control use css selector `.ol-rotate`. A `.ol-hidden` css
     * selector is added to the button when the rotation is 0.
     *
     * @param opt_options Rotate options.
     * @api stable
     */
    class Rotate extends Control {
        /**
         * @classdesc
         * A button control to reset rotation to 0.
         * To style this control use css selector `.ol-rotate`. A `.ol-hidden` css
         * selector is added to the button when the rotation is 0.
         *
         * @param opt_options Rotate options.
         * @api stable
         */
        constructor(opt_options?: olx.control.RotateOptions);

        /**
         * Update the rotate control element.
         * @param mapEvent Map event.
         * @api
         */
        static render(mapEvent: ol.MapEvent): void;
    }

    /**
     * @classdesc
     * A control displaying rough y-axis distances, calculated for the center of the
     * viewport. For conformal projections (e.g. EPSG:3857, the default view
     * projection in OpenLayers), the scale is valid for all directions.
     * No scale line will be shown when the y-axis distance of a pixel at the
     * viewport center cannot be calculated in the view projection.
     * By default the scale line will show in the bottom left portion of the map,
     * but this can be changed by using the css selector `.ol-scale-line`.
     *
     * @param opt_options Scale line options.
     * @api stable
     */
    class ScaleLine extends Control {
        /**
         * @classdesc
         * A control displaying rough y-axis distances, calculated for the center of the
         * viewport. For conformal projections (e.g. EPSG:3857, the default view
         * projection in OpenLayers), the scale is valid for all directions.
         * No scale line will be shown when the y-axis distance of a pixel at the
         * viewport center cannot be calculated in the view projection.
         * By default the scale line will show in the bottom left portion of the map,
         * but this can be changed by using the css selector `.ol-scale-line`.
         *
         * @param opt_options Scale line options.
         * @api stable
         */
        constructor(opt_options?: olx.control.ScaleLineOptions);

        /**
         * Return the units to use in the scale line.
         * @return The units to use in the scale
         *     line.
         * @observable
         * @api stable
         */
        getUnits(): ScaleLine.Units;

        /**
         * Update the scale line element.
         * @param mapEvent Map event.
         * @api
         */
        static render(mapEvent: ol.MapEvent): void;

        /**
         * Set the units to use in the scale line.
         * @param units The units to use in the scale line.
         * @observable
         * @api stable
         */
        setUnits(units: ScaleLine.Units): void;
    }

    namespace ScaleLine {
        /**
         * @api
         */
        type Property = string;

        /**
         * Units for the scale line. Supported values are `'degrees'`, `'imperial'`,
         * `'nautical'`, `'metric'`, `'us'`.
         */
        type Units = "degrees" | "imperial" | "nautical" | "metric" | "us";
    }

    /**
     * @classdesc
     * A control with 2 buttons, one for zoom in and one for zoom out.
     * This control is one of the default controls of a map. To style this control
     * use css selectors `.ol-zoom-in` and `.ol-zoom-out`.
     *
     * @param opt_options Zoom options.
     * @api stable
     */
    class Zoom extends Control {
        /**
         * @classdesc
         * A control with 2 buttons, one for zoom in and one for zoom out.
         * This control is one of the default controls of a map. To style this control
         * use css selectors `.ol-zoom-in` and `.ol-zoom-out`.
         *
         * @param opt_options Zoom options.
         * @api stable
         */
        constructor(opt_options?: olx.control.ZoomOptions);
    }

    /**
     * @classdesc
     * A slider type of control for zooming.
     *
     * Example:
     *
     *     map.addControl(new ol.control.ZoomSlider());
     *
     * @param opt_options Zoom slider options.
     * @api stable
     */
    class ZoomSlider extends Control {
        /**
         * @classdesc
         * A slider type of control for zooming.
         *
         * Example:
         *
         *     map.addControl(new ol.control.ZoomSlider());
         *
         * @param opt_options Zoom slider options.
         * @api stable
         */
        constructor(opt_options?: olx.control.ZoomSliderOptions);

        /**
         * Update the zoomslider element.
         * @param mapEvent Map event.
         * @api
         */
        static render(mapEvent: ol.MapEvent): void;
    }

    /**
     * @classdesc
     * A button control which, when pressed, changes the map view to a specific
     * extent. To style this control use the css selector `.ol-zoom-extent`.
     *
     * @param opt_options Options.
     * @api stable
     */
    class ZoomToExtent extends Control {
        /**
         * @classdesc
         * A button control which, when pressed, changes the map view to a specific
         * extent. To style this control use the css selector `.ol-zoom-extent`.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.control.ZoomToExtentOptions);
    }
}

export namespace coordinate {
    /**
     * Add `delta` to `coordinate`. `coordinate` is modified in place and returned
     * by the function.
     *
     * Example:
     *
     *     var coord = [7.85, 47.983333];
     *     ol.coordinate.add(coord, [-2, 4]);
     *     // coord is now [5.85, 51.983333]
     *
     * @param coordinate Coordinate.
     * @param delta Delta.
     * @return The input coordinate adjusted by the given delta.
     * @api stable
     */
    function add(coordinate: ol.Coordinate, delta: ol.Coordinate): ol.Coordinate;

    /**
     * Returns a {@link ol.CoordinateFormatType} function that can be used to format
     * a {ol.Coordinate} to a string.
     *
     * Example without specifying the fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var stringifyFunc = ol.coordinate.createStringXY();
     *     var out = stringifyFunc(coord);
     *     // out is now '8, 48'
     *
     * Example with explicitly specifying 2 fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var stringifyFunc = ol.coordinate.createStringXY(2);
     *     var out = stringifyFunc(coord);
     *     // out is now '7.85, 47.98'
     *
     * @param opt_fractionDigits The number of digits to include
     *    after the decimal point. Default is `0`.
     * @return Coordinate format.
     * @api stable
     */
    function createStringXY(opt_fractionDigits?: number): ol.CoordinateFormatType;

    /**
     * Transforms the given {@link ol.Coordinate} to a string using the given string
     * template. The strings `{x}` and `{y}` in the template will be replaced with
     * the first and second coordinate values respectively.
     *
     * Example without specifying the fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var template = 'Coordinate is ({x}|{y}).';
     *     var out = ol.coordinate.format(coord, template);
     *     // out is now 'Coordinate is (8|48).'
     *
     * Example explicitly specifying the fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var template = 'Coordinate is ({x}|{y}).';
     *     var out = ol.coordinate.format(coord, template, 2);
     *     // out is now 'Coordinate is (7.85|47.98).'
     *
     * @param coordinate Coordinate.
     * @param template A template string with `{x}` and `{y}` placeholders
     *     that will be replaced by first and second coordinate values.
     * @param opt_fractionDigits The number of digits to include
     *    after the decimal point. Default is `0`.
     * @return Formatted coordinate.
     * @api stable
     */
    function format(coordinate: ol.Coordinate, template: string, opt_fractionDigits?: number): string;

    /**
     * Rotate `coordinate` by `angle`. `coordinate` is modified in place and
     * returned by the function.
     *
     * Example:
     *
     *     var coord = [7.85, 47.983333];
     *     var rotateRadians = Math.PI / 2; // 90 degrees
     *     ol.coordinate.rotate(coord, rotateRadians);
     *     // coord is now [-47.983333, 7.85]
     *
     * @param coordinate Coordinate.
     * @param angle Angle in radian.
     * @return Coordinate.
     * @api stable
     */
    function rotate(coordinate: ol.Coordinate, angle: number): ol.Coordinate;

    /**
     * Format a geographic coordinate with the hemisphere, degrees, minutes, and
     * seconds.
     *
     * Example without specifying fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var out = ol.coordinate.toStringHDMS(coord);
     *     // out is now '47° 58′ 60″ N 7° 50′ 60″ E'
     *
     * Example explicitly specifying 1 fractional digit:
     *
     *     var coord = [7.85, 47.983333];
     *     var out = ol.coordinate.toStringHDMS(coord, 1);
     *     // out is now '47° 58′ 60.0″ N 7° 50′ 60.0″ E'
     *
     * @param coordinate Coordinate.
     * @param opt_fractionDigits The number of digits to include
     *    after the decimal point. Default is `0`.
     * @return Hemisphere, degrees, minutes and seconds.
     * @api stable
     */
    function toStringHDMS(coordinate?: ol.Coordinate, opt_fractionDigits?: number): string;

    /**
     * Format a coordinate as a comma delimited string.
     *
     * Example without specifying fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var out = ol.coordinate.toStringXY(coord);
     *     // out is now '8, 48'
     *
     * Example explicitly specifying 1 fractional digit:
     *
     *     var coord = [7.85, 47.983333];
     *     var out = ol.coordinate.toStringXY(coord, 1);
     *     // out is now '7.8, 48.0'
     *
     * @param coordinate Coordinate.
     * @param opt_fractionDigits The number of digits to include
     *    after the decimal point. Default is `0`.
     * @return XY.
     * @api stable
     */
    function toStringXY(coordinate?: ol.Coordinate, opt_fractionDigits?: number): string;
}

/**
 * @classdesc
 * The ol.DeviceOrientation class provides access to information from
 * DeviceOrientation events.  See the [HTML 5 DeviceOrientation Specification](
 * http://www.w3.org/TR/orientation-event/) for more details.
 *
 * Many new computers, and especially mobile phones
 * and tablets, provide hardware support for device orientation. Web
 * developers targeting mobile devices will be especially interested in this
 * class.
 *
 * Device orientation data are relative to a common starting point. For mobile
 * devices, the starting point is to lay your phone face up on a table with the
 * top of the phone pointing north. This represents the zero state. All
 * angles are then relative to this state. For computers, it is the same except
 * the screen is open at 90 degrees.
 *
 * Device orientation is reported as three angles - `alpha`, `beta`, and
 * `gamma` - relative to the starting position along the three planar axes X, Y
 * and Z. The X axis runs from the left edge to the right edge through the
 * middle of the device. Similarly, the Y axis runs from the bottom to the top
 * of the device through the middle. The Z axis runs from the back to the front
 * through the middle. In the starting position, the X axis points to the
 * right, the Y axis points away from you and the Z axis points straight up
 * from the device lying flat.
 *
 * The three angles representing the device orientation are relative to the
 * three axes. `alpha` indicates how much the device has been rotated around the
 * Z axis, which is commonly interpreted as the compass heading (see note
 * below). `beta` indicates how much the device has been rotated around the X
 * axis, or how much it is tilted from front to back.  `gamma` indicates how
 * much the device has been rotated around the Y axis, or how much it is tilted
 * from left to right.
 *
 * For most browsers, the `alpha` value returns the compass heading so if the
 * device points north, it will be 0.  With Safari on iOS, the 0 value of
 * `alpha` is calculated from when device orientation was first requested.
 * ol.DeviceOrientation provides the `heading` property which normalizes this
 * behavior across all browsers for you.
 *
 * It is important to note that the HTML 5 DeviceOrientation specification
 * indicates that `alpha`, `beta` and `gamma` are in degrees while the
 * equivalent properties in ol.DeviceOrientation are in radians for consistency
 * with all other uses of angles throughout OpenLayers.
 *
 * To get notified of device orientation changes, register a listener for the
 * generic `change` event on your `ol.DeviceOrientation` instance.
 *
 * @see {@link http://www.w3.org/TR/orientation-event/}
 *
 * @param opt_options Options.
 * @api
 */
export class DeviceOrientation extends Object {
    /**
     * @classdesc
     * The ol.DeviceOrientation class provides access to information from
     * DeviceOrientation events.  See the [HTML 5 DeviceOrientation Specification](
     * http://www.w3.org/TR/orientation-event/) for more details.
     *
     * Many new computers, and especially mobile phones
     * and tablets, provide hardware support for device orientation. Web
     * developers targeting mobile devices will be especially interested in this
     * class.
     *
     * Device orientation data are relative to a common starting point. For mobile
     * devices, the starting point is to lay your phone face up on a table with the
     * top of the phone pointing north. This represents the zero state. All
     * angles are then relative to this state. For computers, it is the same except
     * the screen is open at 90 degrees.
     *
     * Device orientation is reported as three angles - `alpha`, `beta`, and
     * `gamma` - relative to the starting position along the three planar axes X, Y
     * and Z. The X axis runs from the left edge to the right edge through the
     * middle of the device. Similarly, the Y axis runs from the bottom to the top
     * of the device through the middle. The Z axis runs from the back to the front
     * through the middle. In the starting position, the X axis points to the
     * right, the Y axis points away from you and the Z axis points straight up
     * from the device lying flat.
     *
     * The three angles representing the device orientation are relative to the
     * three axes. `alpha` indicates how much the device has been rotated around the
     * Z axis, which is commonly interpreted as the compass heading (see note
     * below). `beta` indicates how much the device has been rotated around the X
     * axis, or how much it is tilted from front to back.  `gamma` indicates how
     * much the device has been rotated around the Y axis, or how much it is tilted
     * from left to right.
     *
     * For most browsers, the `alpha` value returns the compass heading so if the
     * device points north, it will be 0.  With Safari on iOS, the 0 value of
     * `alpha` is calculated from when device orientation was first requested.
     * ol.DeviceOrientation provides the `heading` property which normalizes this
     * behavior across all browsers for you.
     *
     * It is important to note that the HTML 5 DeviceOrientation specification
     * indicates that `alpha`, `beta` and `gamma` are in degrees while the
     * equivalent properties in ol.DeviceOrientation are in radians for consistency
     * with all other uses of angles throughout OpenLayers.
     *
     * To get notified of device orientation changes, register a listener for the
     * generic `change` event on your `ol.DeviceOrientation` instance.
     *
     * @see {@link http://www.w3.org/TR/orientation-event/}
     *
     * @param opt_options Options.
     * @api
     */
    constructor(opt_options?: olx.DeviceOrientationOptions);

    /**
     * Rotation around the device z-axis (in radians).
     * @return The euler angle in radians of the device from the
     *     standard Z axis.
     * @observable
     * @api
     */
    getAlpha(): number;

    /**
     * Rotation around the device x-axis (in radians).
     * @return The euler angle in radians of the device from the
     *     planar X axis.
     * @observable
     * @api
     */
    getBeta(): number;

    /**
     * Rotation around the device y-axis (in radians).
     * @return The euler angle in radians of the device from the
     *     planar Y axis.
     * @observable
     * @api
     */
    getGamma(): number;

    /**
     * The heading of the device relative to north (in radians).
     * @return The heading of the device relative to north, in
     *     radians, normalizing for different browser behavior.
     * @observable
     * @api
     */
    getHeading(): number;

    /**
     * Determine if orientation is being tracked.
     * @return Changes in device orientation are being tracked.
     * @observable
     * @api
     */
    getTracking(): boolean;

    /**
     * Enable or disable tracking of device orientation events.
     * @param tracking The status of tracking changes to alpha, beta and
     *     gamma. If true, changes are tracked and reported immediately.
     * @observable
     * @api
     */
    setTracking(tracking: boolean): void;
}

/**
 * Objects that need to clean up after themselves.
 */
/* tslint:disable-next-line:no-unnecessary-class */
export class Disposable {
    /**
     * Objects that need to clean up after themselves.
     */
    constructor();
}

/**
 * Easing functions for {@link ol.animation}.
 */
export namespace easing {
    /**
     * Start slow and speed up.
     * @param t Input between 0 and 1.
     * @return Output between 0 and 1.
     * @api
     */
    function easeIn(t: number): number;

    /**
     * Start fast and slow down.
     * @param t Input between 0 and 1.
     * @return Output between 0 and 1.
     * @api
     */
    function easeOut(t: number): number;

    /**
     * Start slow, speed up, and then slow down again.
     * @param t Input between 0 and 1.
     * @return Output between 0 and 1.
     * @api
     */
    function inAndOut(t: number): number;

    /**
     * Maintain a constant speed over time.
     * @param t Input between 0 and 1.
     * @return Output between 0 and 1.
     * @api
     */
    function linear(t: number): number;

    /**
     * Start slow, speed up, and at the very end slow down again.  This has the
     * same general behavior as {@link ol.easing.inAndOut}, but the final slowdown
     * is delayed.
     * @param t Input between 0 and 1.
     * @return Output between 0 and 1.
     * @api
     */
    function upAndDown(t: number): number;
}

/**
 * Applications do not normally create event instances. They register (and
 * unregister) event listener functions, which, when called by the library as
 * the result of an event being dispatched, are passed event instances as their
 * first argument. Listeners can be registered and unregistered on all objects
 * descending from {@link ol.Observable}. All event instances have a `target`
 * property, which corresponds to the object on which the event was dispatched.
 * By default, `this` within the listener also refers to the target, though
 * this can be configured in the listener registration function.
 * Some classes have their own event type, which return additional
 * properties; see the specific event class page for details.
 */
export namespace events {
    namespace condition {
        /**
         * Return `true` if only the alt-key is pressed, `false` otherwise (e.g. when
         * additionally the shift-key is pressed).
         *
         * @param mapBrowserEvent Map browser event.
         * @return True if only the alt key is pressed.
         * @api stable
         */
        function altKeyOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Return `true` if only the alt-key and shift-key is pressed, `false` otherwise
         * (e.g. when additionally the platform-modifier-key is pressed).
         *
         * @param mapBrowserEvent Map browser event.
         * @return True if only the alt and shift keys are pressed.
         * @api stable
         */
        function altShiftKeysOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Return always true.
         *
         * @param mapBrowserEvent Map browser event.
         * @return True.
         * @api stable
         */
        function always(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Return `true` if the event is a `click` event, `false` otherwise.
         *
         * @param mapBrowserEvent Map browser event.
         * @return True if the event is a map `click` event.
         * @api stable
         */
        function click(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Return always false.
         *
         * @param mapBrowserEvent Map browser event.
         * @return False.
         * @api stable
         */
        function never(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Return `true` if the browser event is a `pointermove` event, `false`
         * otherwise.
         *
         * @param mapBrowserEvent Map browser event.
         * @return True if the browser event is a `pointermove` event.
         * @api
         */
        function pointerMove(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Return `true` if the event is a map `singleclick` event, `false` otherwise.
         *
         * @param mapBrowserEvent Map browser event.
         * @return True if the event is a map `singleclick` event.
         * @api stable
         */
        function singleClick(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Return `true` if the event is a map `dblclick` event, `false` otherwise.
         *
         * @param mapBrowserEvent Map browser event.
         * @return True if the event is a map `dblclick` event.
         * @api stable
         */
        function doubleClick(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Return `true` if no modifier key (alt-, shift- or platform-modifier-key) is
         * pressed.
         *
         * @param mapBrowserEvent Map browser event.
         * @return True only if there no modifier keys are pressed.
         * @api stable
         */
        function noModifierKeys(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Return `true` if only the platform-modifier-key (the meta-key on Mac,
         * ctrl-key otherwise) is pressed, `false` otherwise (e.g. when additionally
         * the shift-key is pressed).
         *
         * @param mapBrowserEvent Map browser event.
         * @return True if only the platform modifier key is pressed.
         * @api stable
         */
        function platformModifierKeyOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Return `true` if only the shift-key is pressed, `false` otherwise (e.g. when
         * additionally the alt-key is pressed).
         *
         * @param mapBrowserEvent Map browser event.
         * @return True if only the shift key is pressed.
         * @api stable
         */
        function shiftKeyOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Return `true` if the target element is not editable, i.e. not a `<input>`-,
         * `<select>`- or `<textarea>`-element, `false` otherwise.
         *
         * @param mapBrowserEvent Map browser event.
         * @return True only if the target element is not editable.
         * @api
         */
        function targetNotEditable(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Return `true` if the event originates from a mouse device.
         *
         * @param mapBrowserEvent Map browser event.
         * @return True if the event originates from a mouse device.
         * @api stable
         */
        function mouseOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Return `true` if the event originates from a primary pointer in
         * contact with the surface or if the left mouse button is pressed.
         * @see http://www.w3.org/TR/pointerevents/#button-states
         *
         * @param mapBrowserEvent Map browser event.
         * @return True if the event originates from a primary pointer.
         * @api
         */
        function primaryAction(mapBrowserEvent: ol.MapBrowserEvent): boolean;
    }

    /**
     * @classdesc
     * Stripped down implementation of the W3C DOM Level 2 Event interface.
     * @see {@link https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface}
     *
     * This implementation only provides `type` and `target` properties, and
     * `stopPropagation` and `preventDefault` methods. It is meant as base class
     * for higher level events defined in the library, and works with
     * {@link ol.events.EventTarget}.
     *
     * @param type Type.
     */
    class Event {
        /**
         * @classdesc
         * Stripped down implementation of the W3C DOM Level 2 Event interface.
         * @see {@link https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface}
         *
         * This implementation only provides `type` and `target` properties, and
         * `stopPropagation` and `preventDefault` methods. It is meant as base class
         * for higher level events defined in the library, and works with
         * {@link ol.events.EventTarget}.
         *
         * @param type Type.
         */
        constructor(type: string);

        /**
         * The event type.
         * @api stable
         */
        type: string;

        /**
         * The event target.
         * @api stable
         */
        target: GlobalObject;

        /**
         * Stop event propagation.
         * @api stable
         */
        preventDefault(): void;

        /**
         * Stop event propagation.
         * @api stable
         */
        stopPropagation(): void;
    }

    /**
     * @classdesc
     * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
     * @see {@link https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget}
     *
     * There are two important simplifications compared to the specification:
     *
     * 1. The handling of `useCapture` in `addEventListener` and
     *    `removeEventListener`. There is no real capture model.
     * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
     *    There is no event target hierarchy. When a listener calls
     *    `stopPropagation` or `preventDefault` on an event object, it means that no
     *    more listeners after this one will be called. Same as when the listener
     *    returns false.
     */
    class EventTarget extends Disposable {
        /**
         * @classdesc
         * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
         * @see {@link https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget}
         *
         * There are two important simplifications compared to the specification:
         *
         * 1. The handling of `useCapture` in `addEventListener` and
         *    `removeEventListener`. There is no real capture model.
         * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
         *    There is no event target hierarchy. When a listener calls
         *    `stopPropagation` or `preventDefault` on an event object, it means that no
         *    more listeners after this one will be called. Same as when the listener
         *    returns false.
         */
        constructor();
    }
}

/* From ol/typedefs.js */
export type EventsListenerFunctionType = ((evt: ol.events.Event) => void) | ((evt: ol.events.Event) => boolean);

export namespace extent {
    /**
     * Build an extent that includes all given coordinates.
     *
     * @param coordinates Coordinates.
     * @return Bounding extent.
     * @api stable
     */
    function boundingExtent(coordinates: ol.Coordinate[]): ol.Extent;

    /**
     * Return extent increased by the provided value.
     * @param extent Extent.
     * @param value The amount by which the extent should be buffered.
     * @param opt_extent Extent.
     * @return Extent.
     * @api stable
     */
    function buffer(extent: ol.Extent, value: number, opt_extent?: ol.Extent): ol.Extent;

    /**
     * Check if the passed coordinate is contained or on the edge of the extent.
     *
     * @param extent Extent.
     * @param coordinate Coordinate.
     * @return The coordinate is contained in the extent.
     * @api stable
     */
    function containsCoordinate(extent: ol.Extent, coordinate: ol.Coordinate): boolean;

    /**
     * Check if one extent contains another.
     *
     * An extent is deemed contained if it lies completely within the other extent,
     * including if they share one or more edges.
     *
     * @param extent1 Extent 1.
     * @param extent2 Extent 2.
     * @return The second extent is contained by or on the edge of the
     *     first.
     * @api stable
     */
    function containsExtent(extent1: ol.Extent, extent2: ol.Extent): boolean;

    /**
     * Check if the passed coordinate is contained or on the edge of the extent.
     *
     * @param extent Extent.
     * @param x X coordinate.
     * @param y Y coordinate.
     * @return The x, y values are contained in the extent.
     * @api stable
     */
    function containsXY(extent: ol.Extent, x: number, y: number): boolean;

    /**
     * Create an empty extent.
     * @return Empty extent.
     * @api stable
     */
    function createEmpty(): ol.Extent;

    /**
     * Determine if two extents are equivalent.
     * @param extent1 Extent 1.
     * @param extent2 Extent 2.
     * @return The two extents are equivalent.
     * @api stable
     */
    function equals(extent1: ol.Extent, extent2: ol.Extent): boolean;

    /**
     * Modify an extent to include another extent.
     * @param extent1 The extent to be modified.
     * @param extent2 The extent that will be included in the first.
     * @return A reference to the first (extended) extent.
     * @api stable
     */
    function extend(extent1: ol.Extent, extent2: ol.Extent): ol.Extent;

    /**
     * Get the bottom left coordinate of an extent.
     * @param extent Extent.
     * @return Bottom left coordinate.
     * @api stable
     */
    function getBottomLeft(extent: ol.Extent): ol.Coordinate;

    /**
     * Get the bottom right coordinate of an extent.
     * @param extent Extent.
     * @return Bottom right coordinate.
     * @api stable
     */
    function getBottomRight(extent: ol.Extent): ol.Coordinate;

    /**
     * Get the center coordinate of an extent.
     * @param extent Extent.
     * @return Center.
     * @api stable
     */
    function getCenter(extent: ol.Extent): ol.Coordinate;

    /**
     * Get the height of an extent.
     * @param extent Extent.
     * @return Height.
     * @api stable
     */
    function getHeight(extent: ol.Extent): number;

    /**
     * Get the intersection of two extents.
     * @param extent1 Extent 1.
     * @param extent2 Extent 2.
     * @param opt_extent Optional extent to populate with intersection.
     * @return Intersecting extent.
     * @api stable
     */
    function getIntersection(extent1: ol.Extent, extent2: ol.Extent, opt_extent?: ol.Extent): ol.Extent;

    /**
     * Get the size (width, height) of an extent.
     * @param extent The extent.
     * @return The extent size.
     * @api stable
     */
    function getSize(extent: ol.Extent): ol.Size;

    /**
     * Get the top left coordinate of an extent.
     * @param extent Extent.
     * @return Top left coordinate.
     * @api stable
     */
    function getTopLeft(extent: ol.Extent): ol.Coordinate;

    /**
     * Get the top right coordinate of an extent.
     * @param extent Extent.
     * @return Top right coordinate.
     * @api stable
     */
    function getTopRight(extent: ol.Extent): ol.Coordinate;

    /**
     * Get the width of an extent.
     * @param extent Extent.
     * @return Width.
     * @api stable
     */
    function getWidth(extent: ol.Extent): number;

    /**
     * Determine if one extent intersects another.
     * @param extent1 Extent 1.
     * @param extent2 Extent.
     * @return The two extents intersect.
     * @api stable
     */
    function intersects(extent1: ol.Extent, extent2: ol.Extent): boolean;

    /**
     * Determine if an extent is empty.
     * @param extent Extent.
     * @return Is empty.
     * @api stable
     */
    function isEmpty(extent: ol.Extent): boolean;

    /**
     * Apply a transform function to the extent.
     * @param extent Extent.
     * @param transformFn Transform function.  Called with
     * [minX, minY, maxX, maxY] extent coordinates.
     * @param opt_extent Destination extent.
     * @return Extent.
     * @api stable
     */
    function applyTransform(extent: ol.Extent, transformFn: ol.TransformFunction, opt_extent?: ol.Extent): ol.Extent;
}

/**
 * @classdesc
 * A vector object for geographic features with a geometry and other
 * attribute properties, similar to the features in vector file formats like
 * GeoJSON.
 *
 * Features can be styled individually with `setStyle`; otherwise they use the
 * style of their vector layer.
 *
 * Note that attribute properties are set as {@link ol.Object} properties on
 * the feature object, so they are observable, and have get/set accessors.
 *
 * Typically, a feature has a single geometry property. You can set the
 * geometry using the `setGeometry` method and get it with `getGeometry`.
 * It is possible to store more than one geometry on a feature using attribute
 * properties. By default, the geometry used for rendering is identified by
 * the property name `geometry`. If you want to use another geometry property
 * for rendering, use the `setGeometryName` method to change the attribute
 * property associated with the geometry for the feature.  For example:
 *
 * ```js
 * var feature = new ol.Feature({
 *   geometry: new ol.geom.Polygon(polyCoords),
 *   labelPoint: new ol.geom.Point(labelCoords),
 *   name: 'My Polygon'
 * });
 *
 * // get the polygon geometry
 * var poly = feature.getGeometry();
 *
 * // Render the feature as a point using the coordinates from labelPoint
 * feature.setGeometryName('labelPoint');
 *
 * // get the point geometry
 * var point = feature.getGeometry();
 * ```
 *
 * @param opt_geometryOrProperties
 *     You may pass a Geometry object directly, or an object literal
 *     containing properties.  If you pass an object literal, you may
 *     include a Geometry associated with a `geometry` key.
 * @api stable
 */
export class Feature extends Object {
    /**
     * @classdesc
     * A vector object for geographic features with a geometry and other
     * attribute properties, similar to the features in vector file formats like
     * GeoJSON.
     *
     * Features can be styled individually with `setStyle`; otherwise they use the
     * style of their vector layer.
     *
     * Note that attribute properties are set as {@link ol.Object} properties on
     * the feature object, so they are observable, and have get/set accessors.
     *
     * Typically, a feature has a single geometry property. You can set the
     * geometry using the `setGeometry` method and get it with `getGeometry`.
     * It is possible to store more than one geometry on a feature using attribute
     * properties. By default, the geometry used for rendering is identified by
     * the property name `geometry`. If you want to use another geometry property
     * for rendering, use the `setGeometryName` method to change the attribute
     * property associated with the geometry for the feature.  For example:
     *
     * ```js
     * var feature = new ol.Feature({
     *   geometry: new ol.geom.Polygon(polyCoords),
     *   labelPoint: new ol.geom.Point(labelCoords),
     *   name: 'My Polygon'
     * });
     *
     * // get the polygon geometry
     * var poly = feature.getGeometry();
     *
     * // Render the feature as a point using the coordinates from labelPoint
     * feature.setGeometryName('labelPoint');
     *
     * // get the point geometry
     * var point = feature.getGeometry();
     * ```
     *
     * @param opt_geometryOrProperties
     *     You may pass a Geometry object directly, or an object literal
     *     containing properties.  If you pass an object literal, you may
     *     include a Geometry associated with a `geometry` key.
     * @api stable
     */
    constructor(opt_geometryOrProperties?: ol.geom.Geometry | { [k: string]: any });

    /**
     * Clone this feature. If the original feature has a geometry it
     * is also cloned. The feature id is not set in the clone.
     * @return The clone.
     * @api stable
     */
    clone(): ol.Feature;

    /**
     * Get the feature's default geometry.  A feature may have any number of named
     * geometries.  The "default" geometry (the one that is rendered by default) is
     * set when calling {@link ol.Feature#setGeometry}.
     * @return The default geometry for the feature.
     * @api stable
     * @observable
     */
    getGeometry(): ol.geom.Geometry;

    /**
     * Get the feature identifier.  This is a stable identifier for the feature and
     * is either set when reading data from a remote source or set explicitly by
     * calling {@link ol.Feature#setId}.
     * @return Id.
     * @api stable
     * @observable
     */
    getId(): number | string;

    /**
     * Get the name of the feature's default geometry.  By default, the default
     * geometry is named `geometry`.
     * @return Get the property name associated with the default geometry
     *     for this feature.
     * @api stable
     */
    getGeometryName(): string;

    /**
     * Get the feature's style.  This return for this method depends on what was
     * provided to the {@link ol.Feature#setStyle} method.
     * @return The feature style.
     * @api stable
     * @observable
     */
    getStyle(): ol.style.Style | ol.style.Style[] | ol.FeatureStyleFunction | ol.StyleFunction;

    /**
     * Get the feature's style function.
     * @return Return a function
     * representing the current style of this feature.
     * @api stable
     */
    getStyleFunction(): ol.FeatureStyleFunction | undefined;

    /**
     * Set the default geometry for the feature.  This will update the property
     * with the name returned by {@link ol.Feature#getGeometryName}.
     * @param geometry The new geometry.
     * @api stable
     * @observable
     */
    setGeometry(geometry: ol.geom.Geometry): void;

    /**
     * Set the style for the feature.  This can be a single style object, an array
     * of styles, or a function that takes a resolution and returns an array of
     * styles. If it is `null` the feature has no style (a `null` style).
     * @param style Style for this feature.
     * @api stable
     * @observable
     */
    setStyle(style: ol.style.Style | ol.style.Style[] | ol.FeatureStyleFunction | ol.StyleFunction | null): void;

    /**
     * Set the feature id.  The feature id is considered stable and may be used when
     * requesting features or comparing identifiers returned from a remote source.
     * The feature id can be used with the {@link ol.source.Vector#getFeatureById}
     * method.
     * @param id The feature id.
     * @api stable
     * @observable
     */
    setId(id: number | string): void;

    /**
     * Set the property name to be used when getting the feature's default geometry.
     * When calling {@link ol.Feature#getGeometry}, the value of the property with
     * this name will be returned.
     * @param name The property name of the default geometry.
     * @api stable
     */
    setGeometryName(name: string): void;
}

/**
 * Loading mechanisms for vector data.
 */
export namespace featureloader {
    /**
     * Create an XHR feature loader for a `url` and `format`. The feature loader
     * loads features (with XHR), parses the features, and adds them to the
     * vector tile.
     * @param url Feature URL service.
     * @param format Feature format.
     * @return The feature loader.
     * @api
     */
    function tile(url: string | ol.FeatureUrlFunction, format: ol.format.Feature): ol.FeatureLoader;

    /**
     * Create an XHR feature loader for a `url` and `format`. The feature loader
     * loads features (with XHR), parses the features, and adds them to the
     * vector source.
     * @param url Feature URL service.
     * @param format Feature format.
     * @return The feature loader.
     * @api
     */
    function xhr(url: string | ol.FeatureUrlFunction, format: ol.format.Feature): ol.FeatureLoader;
}

export namespace format {
    /**
     * @classdesc
     * Feature format for reading and writing data in the EsriJSON format.
     *
     * @param opt_options Options.
     * @api
     */
    class EsriJSON extends JSONFeature {
        /**
         * @classdesc
         * Feature format for reading and writing data in the EsriJSON format.
         *
         * @param opt_options Options.
         * @api
         */
        constructor(opt_options?: olx.format.EsriJSONOptions);

        /**
         * Read a feature from a EsriJSON Feature source.  Only works for Feature,
         * use `readFeatures` to read FeatureCollection source.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Feature.
         * @api
         */
        readFeature(
            source: ArrayBuffer | Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.Feature;

        /**
         * Read all features from a EsriJSON source.  Works with both Feature and
         * FeatureCollection sources.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Features.
         * @api
         */
        readFeatures(
            source: ArrayBuffer | Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.Feature[];

        /**
         * Read a geometry from a EsriJSON source.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Geometry.
         * @api
         */
        readGeometry(
            source: ArrayBuffer | Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.geom.Geometry;

        /**
         * Read the projection from a EsriJSON source.
         *
         * @param source Source.
         * @return Projection.
         * @api
         */
        readProjection(source: ArrayBuffer | Document | Node | GlobalObject | string): ol.proj.Projection;

        /**
         * Encode a geometry as a EsriJSON string.
         *
         * @param geometry Geometry.
         * @param opt_options Write options.
         * @return EsriJSON.
         * @api
         */
        writeGeometry(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): string;

        /**
         * Encode a geometry as a EsriJSON object.
         *
         * @param geometry Geometry.
         * @param opt_options Write options.
         * @return Object.
         * @api
         */
        writeGeometryObject(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): EsriJSONGeometry;

        /**
         * Encode a feature as a EsriJSON Feature string.
         *
         * @param feature Feature.
         * @param opt_options Write options.
         * @return EsriJSON.
         * @api
         */
        writeFeature(feature: ol.Feature, opt_options?: olx.format.WriteOptions): string;

        /**
         * Encode a feature as a esriJSON Feature object.
         *
         * @param feature Feature.
         * @param opt_options Write options.
         * @return Object.
         * @api
         */
        writeFeatureObject(feature: ol.Feature, opt_options?: olx.format.WriteOptions): GlobalObject;

        /**
         * Encode an array of features as EsriJSON.
         *
         * @param features Features.
         * @param opt_options Write options.
         * @return EsriJSON.
         * @api
         */
        writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

        /**
         * Encode an array of features as a EsriJSON object.
         *
         * @param features Features.
         * @param opt_options Write options.
         * @return EsriJSON Object.
         * @api
         */
        writeFeaturesObject(features: ol.Feature[], opt_options?: olx.format.WriteOptions): GlobalObject;
    }

    type EsriJSONGeometry = JSON;

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Base class for feature formats.
     * {ol.format.Feature} subclasses provide the ability to decode and encode
     * {@link ol.Feature} objects from a variety of commonly used geospatial
     * file formats.  See the documentation for each format for more details.
     *
     * @api stable
     */
    /* tslint:disable-next-line:no-unnecessary-class */
    class Feature {
        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * Base class for feature formats.
         * {ol.format.Feature} subclasses provide the ability to decode and encode
         * {@link ol.Feature} objects from a variety of commonly used geospatial
         * file formats.  See the documentation for each format for more details.
         *
         * @api stable
         */
        constructor();
    }

    type GeoJSONFeature = JSON;
    type GeoJSONFeatureCollection = JSON;
    type GeoJSONGeometry = JSON;
    type GeoJSONGeometryCollection = JSON;

    /**
     * @classdesc
     * Feature format for reading and writing data in the GeoJSON format.
     *
     * @param opt_options Options.
     * @api stable
     */
    class GeoJSON extends JSONFeature {
        /**
         * @classdesc
         * Feature format for reading and writing data in the GeoJSON format.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.format.GeoJSONOptions);

        /**
         * Read a feature from a GeoJSON Feature source.  Only works for Feature,
         * use `readFeatures` to read FeatureCollection source.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Feature.
         * @api stable
         */
        readFeature(source: Document | Node | GlobalObject | string, opt_options?: olx.format.ReadOptions): ol.Feature;

        /**
         * Read all features from a GeoJSON source.  Works with both Feature and
         * FeatureCollection sources.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Features.
         * @api stable
         */
        readFeatures(
            source: Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.Feature[];

        /**
         * Read a geometry from a GeoJSON source.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Geometry.
         * @api stable
         */
        readGeometry(
            source: Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.geom.Geometry;

        /**
         * Read the projection from a GeoJSON source.
         *
         * @param source Source.
         * @return Projection.
         * @api stable
         */
        readProjection(source: Document | Node | GlobalObject | string): ol.proj.Projection;

        /**
         * Encode a feature as a GeoJSON Feature string.
         *
         * @param feature Feature.
         * @param opt_options Write options.
         * @return GeoJSON.
         * @api stable
         */
        writeFeature(feature: ol.Feature, opt_options?: olx.format.WriteOptions): string;

        /**
         * Encode a feature as a GeoJSON Feature object.
         *
         * @param feature Feature.
         * @param opt_options Write options.
         * @return Object.
         * @api stable
         */
        writeFeatureObject(feature: ol.Feature, opt_options?: olx.format.WriteOptions): GeoJSONFeature;

        /**
         * Encode an array of features as GeoJSON.
         *
         * @param features Features.
         * @param opt_options Write options.
         * @return GeoJSON.
         * @api stable
         */
        writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

        /**
         * Encode an array of features as a GeoJSON object.
         *
         * @param features Features.
         * @param opt_options Write options.
         * @return GeoJSON Object.
         * @api stable
         */
        writeFeaturesObject(features: ol.Feature[], opt_options?: olx.format.WriteOptions): GeoJSONFeatureCollection;

        /**
         * Encode a geometry as a GeoJSON string.
         *
         * @param geometry Geometry.
         * @param opt_options Write options.
         * @return GeoJSON.
         * @api stable
         */
        writeGeometry(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): string;

        /**
         * Encode a geometry as a GeoJSON object.
         *
         * @param geometry Geometry.
         * @param opt_options Write options.
         * @return Object.
         * @api stable
         */
        writeGeometryObject(
            geometry: ol.geom.Geometry,
            opt_options?: olx.format.WriteOptions,
        ): GeoJSONGeometry | GeoJSONGeometryCollection;
    }

    /**
     * @classdesc
     * Feature format for reading and writing data in the GML format
     * version 3.1.1.
     * Currently only supports GML 3.1.1 Simple Features profile.
     *
     * @param opt_options
     *     Optional configuration object.
     * @api stable
     */
    class GML extends GMLBase {
        /**
         * @classdesc
         * Feature format for reading and writing data in the GML format
         * version 3.1.1.
         * Currently only supports GML 3.1.1 Simple Features profile.
         *
         * @param opt_options
         *     Optional configuration object.
         * @api stable
         */
        constructor(opt_options?: olx.format.GMLOptions);

        /**
         * Encode an array of features in GML 3.1.1 Simple Features.
         *
         * @param features Features.
         * @param opt_options Options.
         * @return Result.
         * @api stable
         */
        writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

        /**
         * Encode an array of features in the GML 3.1.1 format as an XML node.
         *
         * @param features Features.
         * @param opt_options Options.
         * @return Node.
         * @api
         */
        writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node;
    }

    /**
     * @classdesc
     * Feature format for reading and writing data in the GML format,
     * version 2.1.2.
     *
     * @param opt_options Optional configuration object.
     * @api
     */
    class GML2 extends GMLBase {
        /**
         * @classdesc
         * Feature format for reading and writing data in the GML format,
         * version 2.1.2.
         *
         * @param opt_options Optional configuration object.
         * @api
         */
        constructor(opt_options?: olx.format.GMLOptions);
    }

    /**
     * @classdesc
     * Feature format for reading and writing data in the GML format
     * version 3.1.1.
     * Currently only supports GML 3.1.1 Simple Features profile.
     *
     * @param opt_options
     *     Optional configuration object.
     * @api
     */
    class GML3 extends GMLBase {
        /**
         * @classdesc
         * Feature format for reading and writing data in the GML format
         * version 3.1.1.
         * Currently only supports GML 3.1.1 Simple Features profile.
         *
         * @param opt_options
         *     Optional configuration object.
         * @api
         */
        constructor(opt_options?: olx.format.GMLOptions);

        /**
         * Encode a geometry in GML 3.1.1 Simple Features.
         *
         * @param geometry Geometry.
         * @param opt_options Options.
         * @return Node.
         * @api
         */
        writeGeometryNode(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): Node;

        /**
         * Encode an array of features in GML 3.1.1 Simple Features.
         *
         * @param features Features.
         * @param opt_options Options.
         * @return Result.
         * @api stable
         */
        writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

        /**
         * Encode an array of features in the GML 3.1.1 format as an XML node.
         *
         * @param features Features.
         * @param opt_options Options.
         * @return Node.
         * @api
         */
        writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node;
    }

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Feature base format for reading and writing data in the GML format.
     * This class cannot be instantiated, it contains only base content that
     * is shared with versioned format classes ol.format.GML2 and
     * ol.format.GML3.
     *
     * @param opt_options
     *     Optional configuration object.
     */
    class GMLBase extends XMLFeature {
        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * Feature base format for reading and writing data in the GML format.
         * This class cannot be instantiated, it contains only base content that
         * is shared with versioned format classes ol.format.GML2 and
         * ol.format.GML3.
         *
         * @param opt_options
         *     Optional configuration object.
         */
        constructor(opt_options?: olx.format.GMLOptions);

        /**
         * Read all features from a GML FeatureCollection.
         *
         * @param source Source.
         * @param opt_options Options.
         * @return Features.
         * @api stable
         */
        readFeatures(
            source: Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.Feature[];
    }

    /**
     * @classdesc
     * Feature format for reading and writing data in the GPX format.
     *
     * @param opt_options Options.
     * @api stable
     */
    class GPX extends XMLFeature {
        /**
         * @classdesc
         * Feature format for reading and writing data in the GPX format.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.format.GPXOptions);

        /**
         * Read the first feature from a GPX source.
         * Routes (`<rte>`) are converted into LineString geometries, and tracks (`<trk>`)
         * into MultiLineString. Any properties on route and track waypoints are ignored.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Feature.
         * @api stable
         */
        readFeature(source: Document | Node | GlobalObject | string, opt_options?: olx.format.ReadOptions): ol.Feature;

        /**
         * Read all features from a GPX source.
         * Routes (`<rte>`) are converted into LineString geometries, and tracks (`<trk>`)
         * into MultiLineString. Any properties on route and track waypoints are ignored.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Features.
         * @api stable
         */
        readFeatures(
            source: Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.Feature[];

        /**
         * Read the projection from a GPX source.
         *
         * @param source Source.
         * @return Projection.
         * @api stable
         */
        readProjection(source: Document | Node | GlobalObject | string): ol.proj.Projection;

        /**
         * Encode an array of features in the GPX format.
         * LineString geometries are output as routes (`<rte>`), and MultiLineString
         * as tracks (`<trk>`).
         *
         * @param features Features.
         * @param opt_options Write options.
         * @return Result.
         * @api stable
         */
        writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

        /**
         * Encode an array of features in the GPX format as an XML node.
         * LineString geometries are output as routes (`<rte>`), and MultiLineString
         * as tracks (`<trk>`).
         *
         * @param features Features.
         * @param opt_options Options.
         * @return Node.
         * @api
         */
        writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node;
    }

    /**
     * IGC altitude/z. One of 'barometric', 'gps', 'none'.
     */
    type IGCZ = "barometric" | "gps" | "none";

    /**
     * @classdesc
     * Feature format for `*.igc` flight recording files.
     *
     * @param opt_options Options.
     * @api
     */
    class IGC extends TextFeature {
        /**
         * @classdesc
         * Feature format for `*.igc` flight recording files.
         *
         * @param opt_options Options.
         * @api
         */
        constructor(opt_options?: olx.format.IGCOptions);

        /**
         * Read the feature from the IGC source.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Feature.
         * @api
         */
        readFeature(source: Document | Node | GlobalObject | string, opt_options?: olx.format.ReadOptions): ol.Feature;

        /**
         * Read the feature from the source. As IGC sources contain a single
         * feature, this will return the feature in an array.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Features.
         * @api
         */
        readFeatures(
            source: Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.Feature[];

        /**
         * Read the projection from the IGC source.
         *
         * @param source Source.
         * @return Projection.
         * @api
         */
        readProjection(source: Document | Node | GlobalObject | string): ol.proj.Projection;
    }

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Base class for JSON feature formats.
     */
    class JSONFeature extends Feature {
        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * Base class for JSON feature formats.
         */
        constructor();
    }

    /**
     * @classdesc
     * Feature format for reading and writing data in the KML format.
     *
     * Note that the KML format uses the URL() constructor. Older browsers such as IE
     * which do not support this will need a URL polyfill to be loaded before use.
     *
     * @param opt_options Options.
     * @api stable
     */
    class KML extends XMLFeature {
        /**
         * @classdesc
         * Feature format for reading and writing data in the KML format.
         *
         * Note that the KML format uses the URL() constructor. Older browsers such as IE
         * which do not support this will need a URL polyfill to be loaded before use.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.format.KMLOptions);

        /**
         * Read the first feature from a KML source. MultiGeometries are converted into
         * GeometryCollections if they are a mix of geometry types, and into MultiPoint/
         * MultiLineString/MultiPolygon if they are all of the same type.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Feature.
         * @api stable
         */
        readFeature(source: Document | Node | GlobalObject | string, opt_options?: olx.format.ReadOptions): ol.Feature;

        /**
         * Read all features from a KML source. MultiGeometries are converted into
         * GeometryCollections if they are a mix of geometry types, and into MultiPoint/
         * MultiLineString/MultiPolygon if they are all of the same type.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Features.
         * @api stable
         */
        readFeatures(
            source: Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.Feature[];

        /**
         * Read the name of the KML.
         *
         * @param source Souce.
         * @return Name.
         * @api stable
         */
        readName(source: Document | Node | string): string;

        /**
         * Read the network links of the KML.
         *
         * @param source Source.
         * @return Network links.
         * @api
         */
        readNetworkLinks(source: Document | Node | string): GlobalObject[];

        /**
         * Read the projection from a KML source.
         *
         * @param source Source.
         * @return Projection.
         * @api stable
         */
        readProjection(source: Document | Node | GlobalObject | string): ol.proj.Projection;

        /**
         * Encode an array of features in the KML format. GeometryCollections, MultiPoints,
         * MultiLineStrings, and MultiPolygons are output as MultiGeometries.
         *
         * @param features Features.
         * @param opt_options Options.
         * @return Result.
         * @api stable
         */
        writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

        /**
         * Encode an array of features in the KML format as an XML node. GeometryCollections,
         * MultiPoints, MultiLineStrings, and MultiPolygons are output as MultiGeometries.
         *
         * @param features Features.
         * @param opt_options Options.
         * @return Node.
         * @api
         */
        writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node;
    }

    /**
     * @classdesc
     * Feature format for reading data in the Mapbox MVT format.
     *
     * @param opt_options Options.
     * @api
     */
    class MVT extends Feature {
        /**
         * @classdesc
         * Feature format for reading data in the Mapbox MVT format.
         *
         * @param opt_options Options.
         * @api
         */
        constructor(opt_options?: olx.format.MVTOptions);

        /**
         * @inheritDoc
         * @api
         */
        readFeatures(
            source: Document | Node | ArrayBuffer | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.Feature[];

        /**
         * @inheritDoc
         * @api
         */
        readProjection(source: Document | Node | GlobalObject | string): ol.proj.Projection;

        /**
         * Sets the layers that features will be read from.
         * @param layers Layers.
         * @api
         */
        setLayers(layers: string[]): void;
    }

    namespace filter {
        /**
         * Create a `<Intersects>` operator to test whether a geometry-valued property
         * intersects a given geometry.
         *
         * @param geometryName Geometry name to use.
         * @param geometry Geometry.
         * @param opt_srsName SRS name. No srsName attribute will be
         *    set on geometries when this is not provided.
         * @returns `<Intersects>` operator.
         * @api
         */
        function intersects(geometryName: string, geometry: ol.geom.Geometry, opt_srsName?: string): Intersects;

        /**
         * Create a logical `<Or>` operator between two or more filter conditions.
         *
         * @param conditions Filter conditions.
         * @returns `<Or>` operator.
         * @api
         */
        function or(...conditions: Filter[]): Or;

        /**
         * Create a logical `<And>` operator between two or more filter conditions.
         *
         * @param conditions Filter conditions.
         * @returns `<And>` operator.
         * @api
         */
        function and(...conditions: Filter[]): And;

        /**
         * Represents a logical `<Not>` operator for a filter condition.
         *
         * @param condition Filter condition.
         * @returns `<Not>` operator.
         * @api
         */
        function not(condition: Filter): Not;

        /**
         * Create a `<BBOX>` operator to test whether a geometry-valued property
         * intersects a fixed bounding box
         *
         * @param geometryName Geometry name to use.
         * @param extent Extent.
         * @param opt_srsName SRS name. No srsName attribute will be
         *    set on geometries when this is not provided.
         * @returns `<BBOX>` operator.
         * @api
         */
        function bbox(geometryName: string, extent: ol.Extent, opt_srsName?: string): Bbox;

        /**
         * Create a `<Within>` operator to test whether a geometry-valued property
         * is within a given geometry.
         *
         * @param geometryName Geometry name to use.
         * @param geometry Geometry.
         * @param opt_srsName SRS name. No srsName attribute will be
         *    set on geometries when this is not provided.
         * @returns `<Within>` operator.
         * @api
         */
        function within(geometryName: string, geometry: ol.geom.Geometry, opt_srsName?: string): Within;

        /**
         * Creates a `<PropertyIsEqualTo>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param expression The value to compare.
         * @param opt_matchCase Case-sensitive?
         * @returns `<PropertyIsEqualTo>` operator.
         * @api
         */
        function equalTo(propertyName: string, expression: string | number, opt_matchCase?: boolean): EqualTo;

        /**
         * Creates a `<PropertyIsNotEqualTo>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param expression The value to compare.
         * @param opt_matchCase Case-sensitive?
         * @returns `<PropertyIsNotEqualTo>` operator.
         * @api
         */
        function notEqualTo(propertyName: string, expression: string | number, opt_matchCase?: boolean): NotEqualTo;

        /**
         * Creates a `<PropertyIsLessThan>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param expression The value to compare.
         * @returns `<PropertyIsLessThan>` operator.
         * @api
         */
        function lessThan(propertyName: string, expression: number): LessThan;

        /**
         * Creates a `<PropertyIsLessThanOrEqualTo>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param expression The value to compare.
         * @returns `<PropertyIsLessThanOrEqualTo>` operator.
         * @api
         */
        function lessThanOrEqualTo(propertyName: string, expression: number): LessThanOrEqualTo;

        /**
         * Creates a `<PropertyIsGreaterThan>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param expression The value to compare.
         * @returns `<PropertyIsGreaterThan>` operator.
         * @api
         */
        function greaterThan(propertyName: string, expression: number): GreaterThan;

        /**
         * Creates a `<PropertyIsGreaterThanOrEqualTo>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param expression The value to compare.
         * @returns `<PropertyIsGreaterThanOrEqualTo>` operator.
         * @api
         */
        function greaterThanOrEqualTo(propertyName: string, expression: number): GreaterThanOrEqualTo;

        /**
         * Creates a `<PropertyIsNull>` comparison operator to test whether a property value
         * is null.
         *
         * @param propertyName Name of the context property to compare.
         * @returns `<PropertyIsNull>` operator.
         * @api
         */
        function isNull(propertyName: string): IsNull;

        /**
         * Creates a `<PropertyIsBetween>` comparison operator to test whether an expression
         * value lies within a range given by a lower and upper bound (inclusive).
         *
         * @param propertyName Name of the context property to compare.
         * @param lowerBoundary The lower bound of the range.
         * @param upperBoundary The upper bound of the range.
         * @returns `<PropertyIsBetween>` operator.
         * @api
         */
        function between(propertyName: string, lowerBoundary: number, upperBoundary: number): IsBetween;

        /**
         * Represents a `<PropertyIsLike>` comparison operator that matches a string property
         * value against a text pattern.
         *
         * @param propertyName Name of the context property to compare.
         * @param pattern Text pattern.
         * @param opt_wildCard Pattern character which matches any sequence of
         *    zero or more string characters. Default is '*'.
         * @param opt_singleChar pattern character which matches any single
         *    string character. Default is '.'.
         * @param opt_escapeChar Escape character which can be used to escape
         *    the pattern characters. Default is '!'.
         * @param opt_matchCase Case-sensitive?
         * @returns `<PropertyIsLike>` operator.
         * @api
         */
        function like(
            propertyName: string,
            pattern: string,
            opt_wildCard?: string,
            opt_singleChar?: string,
            opt_escapeChar?: string,
            opt_matchCase?: boolean,
        ): IsLike;

        /**
         * Create a `<During>` temporal operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param begin The begin date in ISO-8601 format.
         * @param end The end date in ISO-8601 format.
         * @returns `<During>` operator.
         * @api
         */
        function during(propertyName: string, begin: string, end: string): During;

        /**
         * @classdesc
         * Abstract class; normally only used for creating subclasses and not instantiated in apps.
         * Base class for WFS GetFeature filters.
         *
         * @param tagName The XML tag name for this filter.
         * @struct
         * @api
         */
        class Filter {
            /**
             * @classdesc
             * Abstract class; normally only used for creating subclasses and not instantiated in apps.
             * Base class for WFS GetFeature filters.
             *
             * @param tagName The XML tag name for this filter.
             * @struct
             * @api
             */
            constructor(tagName: string);

            /**
             * The XML tag name for a filter.
             * @returns Name.
             */
            getTagName(): string;
        }

        /**
         * @classdesc
         * Represents a spatial operator to test whether a geometry-valued property
         * relates to a given geometry.
         *
         * @param tagName The XML tag name for this filter.
         * @param geometryName Geometry name to use.
         * @param geometry Geometry.
         * @param opt_srsName SRS name. No srsName attribute will be
         *    set on geometries when this is not provided.
         * @api
         */
        class Spatial extends Filter {
            /**
             * @classdesc
             * Represents a spatial operator to test whether a geometry-valued property
             * relates to a given geometry.
             *
             * @param tagName The XML tag name for this filter.
             * @param geometryName Geometry name to use.
             * @param geometry Geometry.
             * @param opt_srsName SRS name. No srsName attribute will be
             *    set on geometries when this is not provided.
             * @api
             */
            constructor(tagName: string, geometryName: string, geometry: ol.geom.Geometry, opt_srsName?: string);
        }

        /**
         * @classdesc
         * Represents a `<Intersects>` operator to test whether a geometry-valued property
         * intersects a given geometry.
         *
         * @param geometryName Geometry name to use.
         * @param geometry Geometry.
         * @param opt_srsName SRS name. No srsName attribute will be
         *    set on geometries when this is not provided.
         * @api
         */
        class Intersects extends Spatial {
            /**
             * @classdesc
             * Represents a `<Intersects>` operator to test whether a geometry-valued property
             * intersects a given geometry.
             *
             * @param geometryName Geometry name to use.
             * @param geometry Geometry.
             * @param opt_srsName SRS name. No srsName attribute will be
             *    set on geometries when this is not provided.
             * @api
             */
            constructor(geometryName: string, geometry: ol.geom.Geometry, opt_srsName?: string);
        }

        /**
         * @classdesc
         * Represents a `<Within>` operator to test whether a geometry-valued property
         * is within a given geometry.
         *
         * @param geometryName Geometry name to use.
         * @param geometry Geometry.
         * @param opt_srsName SRS name. No srsName attribute will be
         *    set on geometries when this is not provided.
         * @api
         */
        class Within extends Spatial {
            /**
             * @classdesc
             * Represents a `<Within>` operator to test whether a geometry-valued property
             * is within a given geometry.
             *
             * @param geometryName Geometry name to use.
             * @param geometry Geometry.
             * @param opt_srsName SRS name. No srsName attribute will be
             *    set on geometries when this is not provided.
             * @api
             */
            constructor(geometryName: string, geometry: ol.geom.Geometry, opt_srsName?: string);
        }

        /**
         * @classdesc
         * Abstract class; normally only used for creating subclasses and not instantiated in apps.
         * Base class for WFS GetFeature n-ary logical filters.
         */
        class LogicalNary extends Filter {}

        /**
         * @classdesc
         * Represents a logical <And> operator between two or more filter conditions.
         *
         * @param conditions Conditions
         * @api
         */
        class And extends LogicalNary {
            /**
             * @classdesc
             * Represents a logical <And> operator between two or more filter conditions.
             *
             * @param conditions Conditions
             * @api
             */
            constructor(...conditions: Filter[]);
        }

        /**
         * @classdesc
         * Represents a logical <Or> operator between two or more filter conditions.
         *
         * @param conditions Conditions
         * @api
         */
        class Or extends LogicalNary {
            /**
             * @classdesc
             * Represents a logical <Or> operator between two or more filter conditions.
             *
             * @param conditions Conditions
             * @api
             */
            constructor(...conditions: Filter[]);
        }

        /**
         * @classdesc
         * Abstract class; normally only used for creating subclasses and not instantiated in apps.
         * Base class for WFS GetFeature property comparison filters.
         *
         * deprecated: This class will no longer be exported starting from the next major version.
         *
         * @param tagName The XML tag name for this filter.
         * @param propertyName Name of the context property to compare.
         * @api
         */
        class Comparison extends Filter {
            /**
             * @classdesc
             * Abstract class; normally only used for creating subclasses and not instantiated in apps.
             * Base class for WFS GetFeature property comparison filters.
             *
             * deprecated: This class will no longer be exported starting from the next major version.
             *
             * @param tagName The XML tag name for this filter.
             * @param propertyName Name of the context property to compare.
             * @api
             */
            constructor(tagName: string, propertyName: string);
        }

        /**
         * @classdesc
         * Abstract class; normally only used for creating subclasses and not instantiated in apps.
         * Base class for WFS GetFeature property binary comparison filters.
         *
         * deprecated: This class will no longer be exported starting from the next major version.
         *
         * @param tagName The XML tag name for this filter.
         * @param propertyName Name of the context property to compare.
         * @param expression The value to compare.
         * @param opt_matchCase Case-sensitive?
         * @api
         */
        class ComparisonBinary extends Comparison {
            /**
             * @classdesc
             * Abstract class; normally only used for creating subclasses and not instantiated in apps.
             * Base class for WFS GetFeature property binary comparison filters.
             *
             * deprecated: This class will no longer be exported starting from the next major version.
             *
             * @param tagName The XML tag name for this filter.
             * @param propertyName Name of the context property to compare.
             * @param expression The value to compare.
             * @param opt_matchCase Case-sensitive?
             * @api
             */
            constructor(tagName: string, propertyName: string, expression: string | number, opt_matchCase?: boolean);
        }

        /**
         * @classdesc
         * Represents a `<PropertyIsEqualTo>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param expression The value to compare.
         * @param opt_matchCase Case-sensitive?
         * @api
         */
        class EqualTo extends ComparisonBinary {
            /**
             * @classdesc
             * Represents a `<PropertyIsEqualTo>` comparison operator.
             *
             * @param propertyName Name of the context property to compare.
             * @param expression The value to compare.
             * @param opt_matchCase Case-sensitive?
             * @api
             */
            constructor(propertyName: string, expression: string | number, opt_matchCase?: boolean);
        }

        /**
         * @classdesc
         * Represents a `<PropertyIsGreaterThan>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param expression The value to compare.
         * @api
         */
        class GreaterThan extends ComparisonBinary {
            /**
             * @classdesc
             * Represents a `<PropertyIsGreaterThan>` comparison operator.
             *
             * @param propertyName Name of the context property to compare.
             * @param expression The value to compare.
             * @api
             */
            constructor(propertyName: string, expression: number);
        }

        /**
         * @classdesc
         * Represents a `<PropertyIsGreaterThanOrEqualTo>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param expression The value to compare.
         * @api
         */
        class GreaterThanOrEqualTo extends ComparisonBinary {
            /**
             * @classdesc
             * Represents a `<PropertyIsGreaterThanOrEqualTo>` comparison operator.
             *
             * @param propertyName Name of the context property to compare.
             * @param expression The value to compare.
             * @api
             */
            constructor(propertyName: string, expression: number);
        }

        /**
         * @classdesc
         * Represents a `<PropertyIsLessThan>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param expression The value to compare.
         * @api
         */
        class LessThan extends ComparisonBinary {
            /**
             * @classdesc
             * Represents a `<PropertyIsLessThan>` comparison operator.
             *
             * @param propertyName Name of the context property to compare.
             * @param expression The value to compare.
             * @api
             */
            constructor(propertyName: string, expression: number);
        }

        /**
         * @classdesc
         * Represents a `<PropertyIsLessThanOrEqualTo>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param expression The value to compare.
         * @api
         */
        class LessThanOrEqualTo extends ComparisonBinary {
            /**
             * @classdesc
             * Represents a `<PropertyIsLessThanOrEqualTo>` comparison operator.
             *
             * @param propertyName Name of the context property to compare.
             * @param expression The value to compare.
             * @api
             */
            constructor(propertyName: string, expression: number);
        }

        /**
         * @classdesc
         * Represents a `<PropertyIsNotEqualTo>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param expression The value to compare.
         * @param opt_matchCase Case-sensitive?
         * @api
         */
        class NotEqualTo extends ComparisonBinary {
            /**
             * @classdesc
             * Represents a `<PropertyIsNotEqualTo>` comparison operator.
             *
             * @param propertyName Name of the context property to compare.
             * @param expression The value to compare.
             * @param opt_matchCase Case-sensitive?
             * @api
             */
            constructor(propertyName: string, expression: string | number, opt_matchCase?: boolean);
        }

        /**
         * @classdesc
         * Represents a `<During>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param begin The begin date in ISO-8601 format.
         * @param end The end date in ISO-8601 format.
         * @api
         */
        class During extends Comparison {
            /**
             * @classdesc
             * Represents a `<During>` comparison operator.
             *
             * @param propertyName Name of the context property to compare.
             * @param begin The begin date in ISO-8601 format.
             * @param end The end date in ISO-8601 format.
             * @api
             */
            constructor(propertyName: string, begin: string, end: string);
        }

        /**
         * @classdesc
         * Represents a `<PropertyIsBetween>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param lowerBoundary The lower bound of the range.
         * @param upperBoundary The upper bound of the range.
         * @api
         */
        class IsBetween extends Comparison {
            /**
             * @classdesc
             * Represents a `<PropertyIsBetween>` comparison operator.
             *
             * @param propertyName Name of the context property to compare.
             * @param lowerBoundary The lower bound of the range.
             * @param upperBoundary The upper bound of the range.
             * @api
             */
            constructor(propertyName: string, lowerBoundary: number, upperBoundary: number);
        }

        /**
         * @classdesc
         * Represents a `<PropertyIsLike>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @param pattern Text pattern.
         * @param opt_wildCard Pattern character which matches any sequence of
         *    zero or more string characters. Default is '*'.
         * @param opt_singleChar pattern character which matches any single
         *    string character. Default is '.'.
         * @param opt_escapeChar Escape character which can be used to escape
         *    the pattern characters. Default is '!'.
         * @param opt_matchCase Case-sensitive?
         * @api
         */
        class IsLike extends Comparison {
            /**
             * @classdesc
             * Represents a `<PropertyIsLike>` comparison operator.
             *
             * @param propertyName Name of the context property to compare.
             * @param pattern Text pattern.
             * @param opt_wildCard Pattern character which matches any sequence of
             *    zero or more string characters. Default is '*'.
             * @param opt_singleChar pattern character which matches any single
             *    string character. Default is '.'.
             * @param opt_escapeChar Escape character which can be used to escape
             *    the pattern characters. Default is '!'.
             * @param opt_matchCase Case-sensitive?
             * @api
             */
            constructor(
                propertyName: string,
                pattern: string,
                opt_wildCard?: string,
                opt_singleChar?: string,
                opt_escapeChar?: string,
                opt_matchCase?: boolean,
            );
        }

        /**
         * @classdesc
         * Represents a `<PropertyIsNull>` comparison operator.
         *
         * @param propertyName Name of the context property to compare.
         * @api
         */
        class IsNull extends Comparison {
            /**
             * @classdesc
             * Represents a `<PropertyIsNull>` comparison operator.
             *
             * @param propertyName Name of the context property to compare.
             * @api
             */
            constructor(propertyName: string);
        }

        /**
         * @classdesc
         * Represents a logical `<Not>` operator for a filter condition.
         *
         * @param condition Filter condition.
         * @api
         */
        class Not extends Filter {
            /**
             * @classdesc
             * Represents a logical `<Not>` operator for a filter condition.
             *
             * @param condition Filter condition.
             * @api
             */
            constructor(condition: Filter);
        }

        /**
         * @classdesc
         * Represents a `<BBOX>` operator to test whether a geometry-valued property
         * intersects a fixed bounding box
         *
         * @param geometryName Geometry name to use.
         * @param extent Extent.
         * @param opt_srsName SRS name. No srsName attribute will be
         *    set on geometries when this is not provided.
         * @api
         */
        class Bbox extends Filter {
            /**
             * @classdesc
             * Represents a `<BBOX>` operator to test whether a geometry-valued property
             * intersects a fixed bounding box
             *
             * @param geometryName Geometry name to use.
             * @param extent Extent.
             * @param opt_srsName SRS name. No srsName attribute will be
             *    set on geometries when this is not provided.
             * @api
             */
            constructor(geometryName: string, extent: ol.Extent, opt_srsName?: string);
        }
    }

    /**
     * @classdesc
     * Feature format for reading data in the
     * [OSMXML format](http://wiki.openstreetmap.org/wiki/OSM_XML).
     *
     * @api stable
     */
    class OSMXML extends XMLFeature {
        /**
         * @classdesc
         * Feature format for reading data in the
         * [OSMXML format](http://wiki.openstreetmap.org/wiki/OSM_XML).
         *
         * @api stable
         */
        constructor();

        /**
         * Read all features from an OSM source.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Features.
         * @api stable
         */
        readFeatures(
            source: Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.Feature[];

        /**
         * Read the projection from an OSM source.
         *
         * @param source Source.
         * @return Projection.
         * @api stable
         */
        readProjection(source: Document | Node | GlobalObject | string): ol.proj.Projection;
    }

    /**
     * @classdesc
     * Feature format for reading and writing data in the Encoded
     * Polyline Algorithm Format.
     *
     * @param opt_options
     *     Optional configuration object.
     * @api stable
     */
    class Polyline extends TextFeature {
        /**
         * @classdesc
         * Feature format for reading and writing data in the Encoded
         * Polyline Algorithm Format.
         *
         * @param opt_options
         *     Optional configuration object.
         * @api stable
         */
        constructor(opt_options?: olx.format.PolylineOptions);

        /**
         * Encode a list of n-dimensional points and return an encoded string
         *
         * Attention: This function will modify the passed array!
         *
         * @param numbers A list of n-dimensional points.
         * @param stride The number of dimension of the points in the list.
         * @param opt_factor The factor by which the numbers will be
         *     multiplied. The remaining decimal places will get rounded away.
         *     Default is `1e5`.
         * @return The encoded string.
         * @api
         */
        static encodeDeltas(numbers: number[], stride: number, opt_factor?: number): string;

        /**
         * Decode a list of n-dimensional points from an encoded string
         *
         * @param encoded An encoded string.
         * @param stride The number of dimension of the points in the
         *     encoded string.
         * @param opt_factor The factor by which the resulting numbers will
         *     be divided. Default is `1e5`.
         * @return A list of n-dimensional points.
         * @api
         */
        static decodeDeltas(encoded: string, stride: number, opt_factor?: number): number[];

        /**
         * Encode a list of floating point numbers and return an encoded string
         *
         * Attention: This function will modify the passed array!
         *
         * @param numbers A list of floating point numbers.
         * @param opt_factor The factor by which the numbers will be
         *     multiplied. The remaining decimal places will get rounded away.
         *     Default is `1e5`.
         * @return The encoded string.
         * @api
         */
        static encodeFloats(numbers: number[], opt_factor?: number): string;

        /**
         * Decode a list of floating point numbers from an encoded string
         *
         * @param encoded An encoded string.
         * @param opt_factor The factor by which the result will be divided.
         *     Default is `1e5`.
         * @return A list of floating point numbers.
         * @api
         */
        static decodeFloats(encoded: string, opt_factor?: number): number[];

        /**
         * Read the feature from the Polyline source. The coordinates are assumed to be
         * in two dimensions and in latitude, longitude order.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Feature.
         * @api stable
         */
        readFeature(source: Document | Node | GlobalObject | string, opt_options?: olx.format.ReadOptions): ol.Feature;

        /**
         * Read the feature from the source. As Polyline sources contain a single
         * feature, this will return the feature in an array.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Features.
         * @api stable
         */
        readFeatures(
            source: Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.Feature[];

        /**
         * Read the geometry from the source.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Geometry.
         * @api stable
         */
        readGeometry(
            source: Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.geom.Geometry;

        /**
         * Read the projection from a Polyline source.
         *
         * @param source Source.
         * @return Projection.
         * @api stable
         */
        readProjection(source: Document | Node | GlobalObject | string): ol.proj.Projection;

        /**
         * Write a single geometry in Polyline format.
         *
         * @param geometry Geometry.
         * @param opt_options Write options.
         * @return Geometry.
         * @api stable
         */
        writeGeometry(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): string;
    }

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Base class for text feature formats.
     */
    class TextFeature extends Feature {
        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * Base class for text feature formats.
         */
        constructor();
    }

    /**
     * @classdesc
     * Feature format for reading data in the TopoJSON format.
     *
     * @param opt_options Options.
     * @api stable
     */
    class TopoJSON extends JSONFeature {
        /**
         * @classdesc
         * Feature format for reading data in the TopoJSON format.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.format.TopoJSONOptions);

        /**
         * Read all features from a TopoJSON source.
         *
         * @param source Source.
         * @return Features.
         * @api stable
         */
        readFeatures(source: Document | Node | GlobalObject | string): ol.Feature[];

        /**
         * Read the projection from a TopoJSON source.
         *
         * @param object Source.
         * @return Projection.
         * @api stable
         */
        readProjection(object: Document | Node | GlobalObject | string): ol.proj.Projection;
    }

    /**
     * @classdesc
     * Feature format for reading and writing data in the WFS format.
     * By default, supports WFS version 1.1.0. You can pass a GML format
     * as option if you want to read a WFS that contains GML2 (WFS 1.0.0).
     * Also see {@link ol.format.GMLBase} which is used by this format.
     *
     * @param opt_options
     *     Optional configuration object.
     * @api stable
     */
    class WFS extends XMLFeature {
        /**
         * @classdesc
         * Feature format for reading and writing data in the WFS format.
         * By default, supports WFS version 1.1.0. You can pass a GML format
         * as option if you want to read a WFS that contains GML2 (WFS 1.0.0).
         * Also see {@link ol.format.GMLBase} which is used by this format.
         *
         * @param opt_options
         *     Optional configuration object.
         * @api stable
         */
        constructor(opt_options?: olx.format.WFSOptions);

        /**
         * Read all features from a WFS FeatureCollection.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Features.
         * @api stable
         */
        readFeatures(
            source: Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.Feature[];

        /**
         * Read transaction response of the source.
         *
         * @param source Source.
         * @return Transaction response.
         * @api stable
         */
        readTransactionResponse(source: Document | Node | GlobalObject | string): ol.WFSTransactionResponse;

        /**
         * Read feature collection metadata of the source.
         *
         * @param source Source.
         * @return FeatureCollection metadata.
         * @api stable
         */
        readFeatureCollectionMetadata(source: Document | Node | GlobalObject | string): ol.WFSFeatureCollectionMetadata;

        /**
         * Encode format as WFS `GetFeature` and return the Node.
         *
         * @param options Options.
         * @return Result.
         * @api stable
         */
        writeGetFeature(options: olx.format.WFSWriteGetFeatureOptions): Node;

        /**
         * Encode format as WFS `Transaction` and return the Node.
         *
         * @param inserts The features to insert.
         * @param updates The features to update.
         * @param deletes The features to delete.
         * @param options Write options.
         * @return Result.
         * @api stable
         */
        writeTransaction(
            inserts: ol.Feature[],
            updates: ol.Feature[],
            deletes: ol.Feature[],
            options: olx.format.WFSWriteTransactionOptions,
        ): Node;

        /**
         * Read the projection from a WFS source.
         *
         * @param source Source.
         * @return Projection.
         * @api stable
         */
        readProjection(source: Document | Node | GlobalObject | string): ol.proj.Projection;
    }

    /**
     * @classdesc
     * Geometry format for reading and writing data in the `WellKnownText` (WKT)
     * format.
     *
     * @param opt_options Options.
     * @api stable
     */
    class WKT extends TextFeature {
        /**
         * @classdesc
         * Geometry format for reading and writing data in the `WellKnownText` (WKT)
         * format.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.format.WKTOptions);

        /**
         * Read a feature from a WKT source.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Feature.
         * @api stable
         */
        readFeature(source: Document | Node | GlobalObject | string, opt_options?: olx.format.ReadOptions): ol.Feature;

        /**
         * Read all features from a WKT source.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Features.
         * @api stable
         */
        readFeatures(
            source: Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.Feature[];

        /**
         * Read a single geometry from a WKT source.
         *
         * @param source Source.
         * @param opt_options Read options.
         * @return Geometry.
         * @api stable
         */
        readGeometry(
            source: Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.geom.Geometry;

        /**
         * Encode a feature as a WKT string.
         *
         * @param feature Feature.
         * @param opt_options Write options.
         * @return WKT string.
         * @api stable
         */
        writeFeature(feature: ol.Feature, opt_options?: olx.format.WriteOptions): string;

        /**
         * Encode an array of features as a WKT string.
         *
         * @param features Features.
         * @param opt_options Write options.
         * @return WKT string.
         * @api stable
         */
        writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

        /**
         * Write a single geometry as a WKT string.
         *
         * @param geometry Geometry.
         * @return WKT string.
         * @api stable
         */
        writeGeometry(geometry: ol.geom.Geometry): string;
    }

    /**
     * @classdesc
     * Format for reading WMS capabilities data
     *
     * @api
     */
    class WMSCapabilities extends XML {
        /**
         * @classdesc
         * Format for reading WMS capabilities data
         *
         * @api
         */
        constructor();

        /**
         * Read a WMS capabilities document.
         *
         * @param source The XML source.
         * @return An object representing the WMS capabilities.
         * @api
         */
        read(source: Document | Node | string): GlobalObject;
    }

    /**
     * @classdesc
     * Format for reading WMSGetFeatureInfo format. It uses
     * {@link ol.format.GML2} to read features.
     *
     * @param opt_options Options.
     * @api
     */
    class WMSGetFeatureInfo extends XMLFeature {
        /**
         * @classdesc
         * Format for reading WMSGetFeatureInfo format. It uses
         * {@link ol.format.GML2} to read features.
         *
         * @param opt_options Options.
         * @api
         */
        constructor(opt_options?: olx.format.WMSGetFeatureInfoOptions);

        /**
         * Read all features from a WMSGetFeatureInfo response.
         *
         * @param source Source.
         * @param opt_options Options.
         * @return Features.
         * @api stable
         */
        readFeatures(
            source: Document | Node | GlobalObject | string,
            opt_options?: olx.format.ReadOptions,
        ): ol.Feature[];
    }

    /**
     * @classdesc
     * Format for reading WMTS capabilities data.
     *
     * @api
     */
    class WMTSCapabilities extends XML {
        /**
         * @classdesc
         * Format for reading WMTS capabilities data.
         *
         * @api
         */
        constructor();

        /**
         * Read a WMTS capabilities document.
         *
         * @param source The XML source.
         * @return An object representing the WMTS capabilities.
         * @api
         */
        read(source: Document | Node | string): GlobalObject;
    }

    /**
     * @classdesc
     * Generic format for reading non-feature XML data
     *
     * @struct
     */
    /* tslint:disable-next-line:no-unnecessary-class */
    class XML {
        /**
         * @classdesc
         * Generic format for reading non-feature XML data
         *
         * @struct
         */
        constructor();
    }

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Base class for XML feature formats.
     */
    class XMLFeature extends Feature {
        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * Base class for XML feature formats.
         */
        constructor();
    }
}

/**
 * @classdesc
 * Helper class for providing HTML5 Geolocation capabilities.
 * The [Geolocation API](http://www.w3.org/TR/geolocation-API/)
 * is used to locate a user's position.
 *
 * To get notified of position changes, register a listener for the generic
 * `change` event on your instance of `ol.Geolocation`.
 *
 * Example:
 *
 *     var geolocation = new ol.Geolocation({
 *       // take the projection to use from the map's view
 *       projection: view.getProjection()
 *     });
 *     // listen to changes in position
 *     geolocation.on('change', function(evt) {
 *       window.console.log(geolocation.getPosition());
 *     });
 *
 * @fires error
 * @param opt_options Options.
 * @api stable
 */
export class Geolocation extends Object {
    /**
     * @classdesc
     * Helper class for providing HTML5 Geolocation capabilities.
     * The [Geolocation API](http://www.w3.org/TR/geolocation-API/)
     * is used to locate a user's position.
     *
     * To get notified of position changes, register a listener for the generic
     * `change` event on your instance of `ol.Geolocation`.
     *
     * Example:
     *
     *     var geolocation = new ol.Geolocation({
     *       // take the projection to use from the map's view
     *       projection: view.getProjection()
     *     });
     *     // listen to changes in position
     *     geolocation.on('change', function(evt) {
     *       window.console.log(geolocation.getPosition());
     *     });
     *
     * @fires error
     * @param opt_options Options.
     * @api stable
     */
    constructor(opt_options?: olx.GeolocationOptions);

    /**
     * Get the accuracy of the position in meters.
     * @return The accuracy of the position measurement in
     *     meters.
     * @observable
     * @api stable
     */
    getAccuracy(): number;

    /**
     * Get a geometry of the position accuracy.
     * @return A geometry of the position accuracy.
     * @observable
     * @api stable
     */
    getAccuracyGeometry(): ol.geom.Geometry;

    /**
     * Get the altitude associated with the position.
     * @return The altitude of the position in meters above mean
     *     sea level.
     * @observable
     * @api stable
     */
    getAltitude(): number;

    /**
     * Get the altitude accuracy of the position.
     * @return The accuracy of the altitude measurement in
     *     meters.
     * @observable
     * @api stable
     */
    getAltitudeAccuracy(): number;

    /**
     * Get the heading as radians clockwise from North.
     * @return The heading of the device in radians from north.
     * @observable
     * @api stable
     */
    getHeading(): number;

    /**
     * Get the position of the device.
     * @return The current position of the device reported
     *     in the current projection.
     * @observable
     * @api stable
     */
    getPosition(): ol.Coordinate;

    /**
     * Get the projection associated with the position.
     * @return The projection the position is
     *     reported in.
     * @observable
     * @api stable
     */
    getProjection(): ol.proj.Projection;

    /**
     * Get the speed in meters per second.
     * @return The instantaneous speed of the device in meters
     *     per second.
     * @observable
     * @api stable
     */
    getSpeed(): number;

    /**
     * Determine if the device location is being tracked.
     * @return The device location is being tracked.
     * @observable
     * @api stable
     */
    getTracking(): boolean;

    /**
     * Get the tracking options.
     * @see http://www.w3.org/TR/geolocation-API/#position-options
     * @return PositionOptions as defined by
     *     the [HTML5 Geolocation spec
     *     ](http://www.w3.org/TR/geolocation-API/#position_options_interface).
     * @observable
     * @api stable
     */
    getTrackingOptions(): PositionOptions;

    /**
     * Set the projection to use for transforming the coordinates.
     * @param projection The projection the position is
     *     reported in.
     * @observable
     * @api stable
     */
    setProjection(projection: ol.proj.Projection): void;

    /**
     * Enable or disable tracking.
     * @param tracking Enable tracking.
     * @observable
     * @api stable
     */
    setTracking(tracking: boolean): void;

    /**
     * Set the tracking options.
     * @see http://www.w3.org/TR/geolocation-API/#position-options
     * @param options PositionOptions as defined by the
     *     [HTML5 Geolocation spec
     *     ](http://www.w3.org/TR/geolocation-API/#position_options_interface).
     * @observable
     * @api stable
     */
    setTrackingOptions(options: PositionOptions): void;
}

export namespace geom {
    /**
     * @classdesc
     * Circle geometry.
     *
     * @param center Center.
     * @param opt_radius Radius.
     * @param opt_layout Layout.
     * @api
     */
    class Circle extends SimpleGeometry {
        /**
         * @classdesc
         * Circle geometry.
         *
         * @param center Center.
         * @param opt_radius Radius.
         * @param opt_layout Layout.
         * @api
         */
        constructor(center: ol.Coordinate, opt_radius?: number, opt_layout?: GeometryLayout);

        /**
         * Make a complete copy of the geometry.
         * @return Clone.
         * @api
         */
        clone(): Circle;

        /**
         * Return the center of the circle as {@link ol.Coordinate coordinate}.
         * @return Center.
         * @api
         */
        getCenter(): ol.Coordinate;

        /**
         * Return the radius of the circle.
         * @return Radius.
         * @api
         */
        getRadius(): number;

        /**
         * @inheritDoc
         * @api
         */
        getType(): GeometryType;

        /**
         * @inheritDoc
         * @api stable
         */
        intersectsExtent(extent: ol.Extent): boolean;

        /**
         * Set the center of the circle as {@link ol.Coordinate coordinate}.
         * @param center Center.
         * @api
         */
        setCenter(center: ol.Coordinate): void;

        /**
         * Set the center (as {@link ol.Coordinate coordinate}) and the radius (as
         * number) of the circle.
         * @param center Center.
         * @param radius Radius.
         * @param opt_layout Layout.
         * @api
         */
        setCenterAndRadius(center: ol.Coordinate, radius: number, opt_layout?: GeometryLayout): void;

        /**
         * Set the radius of the circle. The radius is in the units of the projection.
         * @param radius Radius.
         * @api
         */
        setRadius(radius: number): void;
    }

    /**
     * The geometry type. One of `'Point'`, `'LineString'`, `'LinearRing'`,
     * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
     * `'GeometryCollection'`, `'Circle'`.
     */
    type GeometryType =
        | "Point"
        | "LineString"
        | "LinearRing"
        | "Polygon"
        | "MultiPoint"
        | "MultiLineString"
        | "MultiPolygon"
        | "GeometryCollection"
        | "Circle";

    /**
     * The coordinate layout for geometries, indicating whether a 3rd or 4th z ('Z')
     * or measure ('M') coordinate is available. Supported values are `'XY'`,
     * `'XYZ'`, `'XYM'`, `'XYZM'`.
     */
    type GeometryLayout = "XY" | "XYZ" | "XYM" | "XYZM";

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Base class for vector geometries.
     *
     * To get notified of changes to the geometry, register a listener for the
     * generic `change` event on your geometry instance.
     *
     * @api stable
     */
    class Geometry extends Object {
        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * Base class for vector geometries.
         *
         * To get notified of changes to the geometry, register a listener for the
         * generic `change` event on your geometry instance.
         *
         * @api stable
         */
        constructor();

        /**
         * Return the closest point of the geometry to the passed point as
         * {@link ol.Coordinate coordinate}.
         * @param point Point.
         * @param opt_closestPoint Closest point.
         * @return Closest point.
         * @api stable
         */
        getClosestPoint(point: ol.Coordinate, opt_closestPoint?: ol.Coordinate): ol.Coordinate;

        /**
         * Returns true if this geometry includes the specified coordinate. If the
         * coordinate is on the boundary of the geometry, returns false.
         * @param coordinate Coordinate.
         * @return Contains coordinate.
         * @api
         */
        intersectsCoordinate(coordinate: ol.Coordinate): boolean;

        /**
         * Get the extent of the geometry.
         * @param opt_extent Extent.
         * @return extent Extent.
         * @api stable
         */
        getExtent(opt_extent?: ol.Extent): ol.Extent;

        /**
         * Rotate the geometry around a given coordinate. This modifies the geometry
         * coordinates in place.
         * @param angle Rotation angle in radians.
         * @param anchor The rotation center.
         * @api
         */
        rotate(angle: number, anchor: ol.Coordinate): void;

        /**
         * Scale the geometry (with an optional origin).  This modifies the geometry
         * coordinates in place.
         * @param sx The scaling factor in the x-direction.
         * @param opt_sy The scaling factor in the y-direction (defaults to
         *     sx).
         * @param opt_anchor The scale origin (defaults to the center
         *     of the geometry extent).
         * @api
         */
        scale(sx: number, opt_sy?: number, opt_anchor?: ol.Coordinate): void;

        /**
         * Create a simplified version of this geometry.  For linestrings, this uses
         * the the {@link
         * https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm
         * Douglas Peucker} algorithm.  For polygons, a quantization-based
         * simplification is used to preserve topology.
         * @param tolerance The tolerance distance for simplification.
         * @return A new, simplified version of the original
         *     geometry.
         * @api
         */
        simplify(tolerance: number): Geometry;

        /**
         * Transform each coordinate of the geometry from one coordinate reference
         * system to another. The geometry is modified in place.
         * For example, a line will be transformed to a line and a circle to a circle.
         * If you do not want the geometry modified in place, first `clone()` it and
         * then use this function on the clone.
         *
         * @param source The current projection.  Can be a
         *     string identifier or a {@link ol.proj.Projection} object.
         * @param destination The desired projection.  Can be a
         *     string identifier or a {@link ol.proj.Projection} object.
         * @return This geometry.  Note that original geometry is
         *     modified in place.
         * @api stable
         */
        transform(source: ol.ProjectionLike, destination: ol.ProjectionLike): Geometry;

        /**
         * Get the type of this geometry.
         * @return Geometry type.
         */
        getType(): GeometryType;
    }

    /**
     * @classdesc
     * An array of {@link ol.geom.Geometry} objects.
     *
     * @param opt_geometries Geometries.
     * @api stable
     */
    class GeometryCollection extends Geometry {
        /**
         * @classdesc
         * An array of {@link ol.geom.Geometry} objects.
         *
         * @param opt_geometries Geometries.
         * @api stable
         */
        constructor(opt_geometries?: Geometry[]);

        /**
         * Make a complete copy of the geometry.
         * @return Clone.
         * @api stable
         */
        clone(): GeometryCollection;

        /**
         * Return the geometries that make up this geometry collection.
         * @return Geometries.
         * @api stable
         */
        getGeometries(): Geometry[];

        /**
         * @inheritDoc
         * @api stable
         */
        getType(): GeometryType;

        /**
         * @inheritDoc
         * @api stable
         */
        intersectsExtent(extent: ol.Extent): boolean;

        /**
         * Set the geometries that make up this geometry collection.
         * @param geometries Geometries.
         * @api stable
         */
        setGeometries(geometries: Geometry[]): void;

        /**
         * @inheritDoc
         * @api stable
         */
        applyTransform(transformFn: ol.TransformFunction): void;

        /**
         * Translate the geometry.
         * @param deltaX Delta X.
         * @param deltaY Delta Y.
         * @api
         */
        translate(deltaX: number, deltaY: number): void;
    }

    /**
     * @classdesc
     * Linear ring geometry. Only used as part of polygon; cannot be rendered
     * on its own.
     *
     * @param coordinates Coordinates.
     * @param opt_layout Layout.
     * @api stable
     */
    class LinearRing extends SimpleGeometry {
        /**
         * @classdesc
         * Linear ring geometry. Only used as part of polygon; cannot be rendered
         * on its own.
         *
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        constructor(coordinates: ol.Coordinate[], opt_layout?: GeometryLayout);

        /**
         * Make a complete copy of the geometry.
         * @return Clone.
         * @api stable
         */
        clone(): LinearRing;

        /**
         * Return the area of the linear ring on projected plane.
         * @return Area (on projected plane).
         * @api stable
         */
        getArea(): number;

        /**
         * Return the coordinates of the linear ring.
         * @return Coordinates.
         * @api stable
         */
        getCoordinates(): ol.Coordinate[];

        /**
         * @inheritDoc
         * @api stable
         */
        getType(): GeometryType;

        /**
         * Set the coordinates of the linear ring.
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        setCoordinates(coordinates: ol.Coordinate[], opt_layout?: GeometryLayout): void;
    }

    /**
     * @classdesc
     * Linestring geometry.
     *
     * @param coordinates Coordinates.
     * @param opt_layout Layout.
     * @api stable
     */
    class LineString extends SimpleGeometry {
        /**
         * @classdesc
         * Linestring geometry.
         *
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        constructor(coordinates: ol.Coordinate[], opt_layout?: GeometryLayout);

        /**
         * Append the passed coordinate to the coordinates of the linestring.
         * @param coordinate Coordinate.
         * @api stable
         */
        appendCoordinate(coordinate: ol.Coordinate): void;

        /**
         * Make a complete copy of the geometry.
         * @return Clone.
         * @api stable
         */
        clone(): LineString;

        /**
         * Iterate over each segment, calling the provided callback.
         * If the callback returns a truthy value the function returns that
         * value immediately. Otherwise the function returns `false`.
         *
         * @param callback Function
         *     called for each segment.
         * @param opt_this The object to be used as the value of 'this'
         *     within callback.
         * @return Value.
         * @template T,S
         * @api
         */
        forEachSegment<T, S>(
            callback: (this: S, start: ol.Coordinate, end: ol.Coordinate) => T,
            opt_this?: S,
        ): T | boolean;

        /**
         * Returns the coordinate at `m` using linear interpolation, or `null` if no
         * such coordinate exists.
         *
         * `opt_extrapolate` controls extrapolation beyond the range of Ms in the
         * MultiLineString. If `opt_extrapolate` is `true` then Ms less than the first
         * M will return the first coordinate and Ms greater than the last M will
         * return the last coordinate.
         *
         * @param m M.
         * @param opt_extrapolate Extrapolate. Default is `false`.
         * @return Coordinate.
         * @api stable
         */
        getCoordinateAtM(m: number, opt_extrapolate?: boolean): ol.Coordinate;

        /**
         * Return the coordinates of the linestring.
         * @return Coordinates.
         * @api stable
         */
        getCoordinates(): ol.Coordinate[];

        /**
         * Return the coordinate at the provided fraction along the linestring.
         * The `fraction` is a number between 0 and 1, where 0 is the start of the
         * linestring and 1 is the end.
         * @param fraction Fraction.
         * @param opt_dest Optional coordinate whose values will
         *     be modified. If not provided, a new coordinate will be returned.
         * @return Coordinate of the interpolated point.
         * @api
         */
        getCoordinateAt(fraction: number, opt_dest?: ol.Coordinate): ol.Coordinate;

        /**
         * Return the length of the linestring on projected plane.
         * @return Length (on projected plane).
         * @api stable
         */
        getLength(): number;

        /**
         * @inheritDoc
         * @api stable
         */
        getType(): GeometryType;

        /**
         * @inheritDoc
         * @api stable
         */
        intersectsExtent(extent: ol.Extent): boolean;

        /**
         * Set the coordinates of the linestring.
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        setCoordinates(coordinates: ol.Coordinate[], opt_layout?: GeometryLayout): void;
    }

    /**
     * @classdesc
     * Multi-linestring geometry.
     *
     * @param coordinates Coordinates.
     * @param opt_layout Layout.
     * @api stable
     */
    class MultiLineString extends SimpleGeometry {
        /**
         * @classdesc
         * Multi-linestring geometry.
         *
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        constructor(coordinates: ol.Coordinate[][], opt_layout?: GeometryLayout);

        /**
         * Append the passed linestring to the multilinestring.
         * @param lineString LineString.
         * @api stable
         */
        appendLineString(lineString: LineString): void;

        /**
         * Make a complete copy of the geometry.
         * @return Clone.
         * @api stable
         */
        clone(): MultiLineString;

        /**
         * Returns the coordinate at `m` using linear interpolation, or `null` if no
         * such coordinate exists.
         *
         * `opt_extrapolate` controls extrapolation beyond the range of Ms in the
         * MultiLineString. If `opt_extrapolate` is `true` then Ms less than the first
         * M will return the first coordinate and Ms greater than the last M will
         * return the last coordinate.
         *
         * `opt_interpolate` controls interpolation between consecutive LineStrings
         * within the MultiLineString. If `opt_interpolate` is `true` the coordinates
         * will be linearly interpolated between the last coordinate of one LineString
         * and the first coordinate of the next LineString.  If `opt_interpolate` is
         * `false` then the function will return `null` for Ms falling between
         * LineStrings.
         *
         * @param m M.
         * @param opt_extrapolate Extrapolate. Default is `false`.
         * @param opt_interpolate Interpolate. Default is `false`.
         * @return Coordinate.
         * @api stable
         */
        getCoordinateAtM(m: number, opt_extrapolate?: boolean, opt_interpolate?: boolean): ol.Coordinate;

        /**
         * Return the coordinates of the multilinestring.
         * @return Coordinates.
         * @api stable
         */
        getCoordinates(): ol.Coordinate[][];

        /**
         * Return the linestring at the specified index.
         * @param index Index.
         * @return LineString.
         * @api stable
         */
        getLineString(index: number): LineString;

        /**
         * Return the linestrings of this multilinestring.
         * @return LineStrings.
         * @api stable
         */
        getLineStrings(): LineString[];

        /**
         * @inheritDoc
         * @api stable
         */
        getType(): GeometryType;

        /**
         * @inheritDoc
         * @api stable
         */
        intersectsExtent(extent: ol.Extent): boolean;

        /**
         * Set the coordinates of the multilinestring.
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        setCoordinates(coordinates: ol.Coordinate[][], opt_layout?: GeometryLayout): void;
    }

    /**
     * @classdesc
     * Multi-point geometry.
     *
     * @param coordinates Coordinates.
     * @param opt_layout Layout.
     * @api stable
     */
    class MultiPoint extends SimpleGeometry {
        /**
         * @classdesc
         * Multi-point geometry.
         *
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        constructor(coordinates: ol.Coordinate[], opt_layout?: GeometryLayout);

        /**
         * Append the passed point to this multipoint.
         * @param point Point.
         * @api stable
         */
        appendPoint(point: Point): void;

        /**
         * Make a complete copy of the geometry.
         * @return Clone.
         * @api stable
         */
        clone(): MultiPoint;

        /**
         * Return the coordinates of the multipoint.
         * @return Coordinates.
         * @api stable
         */
        getCoordinates(): ol.Coordinate[];

        /**
         * Return the point at the specified index.
         * @param index Index.
         * @return Point.
         * @api stable
         */
        getPoint(index: number): Point;

        /**
         * Return the points of this multipoint.
         * @return Points.
         * @api stable
         */
        getPoints(): Point[];

        /**
         * @inheritDoc
         * @api stable
         */
        getType(): GeometryType;

        /**
         * @inheritDoc
         * @api stable
         */
        intersectsExtent(extent: ol.Extent): boolean;

        /**
         * Set the coordinates of the multipoint.
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        setCoordinates(coordinates: ol.Coordinate[], opt_layout?: GeometryLayout): void;
    }

    /**
     * @classdesc
     * Multi-polygon geometry.
     *
     * @param coordinates Coordinates.
     * @param opt_layout Layout.
     * @api stable
     */
    class MultiPolygon extends SimpleGeometry {
        /**
         * @classdesc
         * Multi-polygon geometry.
         *
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        constructor(coordinates: ol.Coordinate[][][], opt_layout?: GeometryLayout);

        /**
         * Append the passed polygon to this multipolygon.
         * @param polygon Polygon.
         * @api stable
         */
        appendPolygon(polygon: Polygon): void;

        /**
         * Make a complete copy of the geometry.
         * @return Clone.
         * @api stable
         */
        clone(): MultiPolygon;

        /**
         * Return the area of the multipolygon on projected plane.
         * @return Area (on projected plane).
         * @api stable
         */
        getArea(): number;

        /**
         * Get the coordinate array for this geometry.  This array has the structure
         * of a GeoJSON coordinate array for multi-polygons.
         *
         * @param opt_right Orient coordinates according to the right-hand
         *     rule (counter-clockwise for exterior and clockwise for interior rings).
         *     If `false`, coordinates will be oriented according to the left-hand rule
         *     (clockwise for exterior and counter-clockwise for interior rings).
         *     By default, coordinate orientation will depend on how the geometry was
         *     constructed.
         * @return Coordinates.
         * @api stable
         */
        getCoordinates(opt_right?: boolean): ol.Coordinate[][][];

        /**
         * Return the interior points as {@link MultiPoint multipoint}.
         * @return Interior points.
         * @api stable
         */
        getInteriorPoints(): MultiPoint;

        /**
         * Return the polygon at the specified index.
         * @param index Index.
         * @return Polygon.
         * @api stable
         */
        getPolygon(index: number): Polygon;

        /**
         * Return the polygons of this multipolygon.
         * @return Polygons.
         * @api stable
         */
        getPolygons(): Polygon[];

        /**
         * @inheritDoc
         * @api stable
         */
        getType(): GeometryType;

        /**
         * @inheritDoc
         * @api stable
         */
        intersectsExtent(extent: ol.Extent): boolean;

        /**
         * Set the coordinates of the multipolygon.
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        setCoordinates(coordinates: ol.Coordinate[][][], opt_layout?: GeometryLayout): void;
    }

    /**
     * @classdesc
     * Point geometry.
     *
     * @param coordinates Coordinates.
     * @param opt_layout Layout.
     * @api stable
     */
    class Point extends SimpleGeometry {
        /**
         * @classdesc
         * Point geometry.
         *
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        constructor(coordinates: ol.Coordinate, opt_layout?: GeometryLayout);

        /**
         * Make a complete copy of the geometry.
         * @return Clone.
         * @api stable
         */
        clone(): Point;

        /**
         * Return the coordinate of the point.
         * @return Coordinates.
         * @api stable
         */
        getCoordinates(): ol.Coordinate;

        /**
         * @inheritDoc
         * @api stable
         */
        getType(): GeometryType;

        /**
         * @inheritDoc
         * @api stable
         */
        intersectsExtent(extent: ol.Extent): boolean;

        /**
         * Set the coordinate of the point.
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        setCoordinates(coordinates: ol.Coordinate, opt_layout?: GeometryLayout): void;
    }

    /**
     * @classdesc
     * Polygon geometry.
     *
     * @param coordinates Coordinates.
     * @param opt_layout Layout.
     * @api stable
     */
    class Polygon extends SimpleGeometry {
        /**
         * @classdesc
         * Polygon geometry.
         *
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        constructor(coordinates: ol.Coordinate[][], opt_layout?: GeometryLayout);

        /**
         * Append the passed linear ring to this polygon.
         * @param linearRing Linear ring.
         * @api stable
         */
        appendLinearRing(linearRing: LinearRing): void;

        /**
         * Make a complete copy of the geometry.
         * @return Clone.
         * @api stable
         */
        clone(): Polygon;

        /**
         * Return the area of the polygon on projected plane.
         * @return Area (on projected plane).
         * @api stable
         */
        getArea(): number;

        /**
         * Get the coordinate array for this geometry.  This array has the structure
         * of a GeoJSON coordinate array for polygons.
         *
         * @param opt_right Orient coordinates according to the right-hand
         *     rule (counter-clockwise for exterior and clockwise for interior rings).
         *     If `false`, coordinates will be oriented according to the left-hand rule
         *     (clockwise for exterior and counter-clockwise for interior rings).
         *     By default, coordinate orientation will depend on how the geometry was
         *     constructed.
         * @return Coordinates.
         * @api stable
         */
        getCoordinates(opt_right?: boolean): ol.Coordinate[][];

        /**
         * Return an interior point of the polygon.
         * @return Interior point.
         * @api stable
         */
        getInteriorPoint(): Point;

        /**
         * Return the number of rings of the polygon,  this includes the exterior
         * ring and any interior rings.
         *
         * @return Number of rings.
         * @api
         */
        getLinearRingCount(): number;

        /**
         * Return the Nth linear ring of the polygon geometry. Return `null` if the
         * given index is out of range.
         * The exterior linear ring is available at index `0` and the interior rings
         * at index `1` and beyond.
         *
         * @param index Index.
         * @return Linear ring.
         * @api stable
         */
        getLinearRing(index: number): LinearRing;

        /**
         * Return the linear rings of the polygon.
         * @return Linear rings.
         * @api stable
         */
        getLinearRings(): LinearRing[];

        /**
         * @inheritDoc
         * @api stable
         */
        getType(): GeometryType;

        /**
         * @inheritDoc
         * @api stable
         */
        intersectsExtent(extent: ol.Extent): boolean;

        /**
         * Set the coordinates of the polygon.
         * @param coordinates Coordinates.
         * @param opt_layout Layout.
         * @api stable
         */
        setCoordinates(coordinates: ol.Coordinate[][], opt_layout?: GeometryLayout): void;

        /**
         * Create an approximation of a circle on the surface of a sphere.
         * @param sphere The sphere.
         * @param center Center (`[lon, lat]` in degrees).
         * @param radius The great-circle distance from the center to
         *     the polygon vertices.
         * @param opt_n Optional number of vertices for the resulting
         *     polygon. Default is `32`.
         * @return The "circular" polygon.
         * @api stable
         */
        static circular(sphere: ol.Sphere, center: ol.Coordinate, radius: number, opt_n?: number): Polygon;

        /**
         * Create a polygon from an extent. The layout used is `XY`.
         * @param extent The extent.
         * @return The polygon.
         * @api
         */
        static fromExtent(extent: ol.Extent): Polygon;

        /**
         * Create a regular polygon from a circle.
         * @param circle Circle geometry.
         * @param opt_sides Number of sides of the polygon. Default is 32.
         * @param opt_angle Start angle for the first vertex of the polygon in
         *     radians. Default is 0.
         * @return Polygon geometry.
         * @api
         */
        static fromCircle(circle: Circle, opt_sides?: number, opt_angle?: number): Polygon;
    }

    /**
     * @classdesc
     * Abstract base class; only used for creating subclasses; do not instantiate
     * in apps, as cannot be rendered.
     *
     * @api stable
     */
    class SimpleGeometry extends Geometry {
        /**
         * @classdesc
         * Abstract base class; only used for creating subclasses; do not instantiate
         * in apps, as cannot be rendered.
         *
         * @api stable
         */
        constructor();

        /**
         * Return the first coordinate of the geometry.
         * @return First coordinate.
         * @api stable
         */
        getFirstCoordinate(): ol.Coordinate;

        /**
         * Return the last coordinate of the geometry.
         * @return Last point.
         * @api stable
         */
        getLastCoordinate(): ol.Coordinate;

        /**
         * Return the {@link GeometryLayout layout} of the geometry.
         * @return Layout.
         * @api stable
         */
        getLayout(): GeometryLayout;

        /**
         * @inheritDoc
         * @api stable
         */
        applyTransform(transformFn: ol.TransformFunction): void;

        /**
         * @inheritDoc
         * @api stable
         */
        translate(deltaX: number, deltaY: number): void;
    }
}

/**
 * Render a grid for a coordinate system on a map.
 * @param opt_options Options.
 * @api
 */
export class Graticule {
    /**
     * Render a grid for a coordinate system on a map.
     * @param opt_options Options.
     * @api
     */
    constructor(opt_options?: olx.GraticuleOptions);

    /**
     * Get the map associated with this graticule.
     * @return The map.
     * @api
     */
    getMap(): ol.Map;

    /**
     * Get the list of meridians.  Meridians are lines of equal longitude.
     * @return The meridians.
     * @api
     */
    getMeridians(): ol.geom.LineString[];

    /**
     * Get the list of parallels.  Pallels are lines of equal latitude.
     * @return The parallels.
     * @api
     */
    getParallels(): ol.geom.LineString[];

    /**
     * Set the map for this graticule.  The graticule will be rendered on the
     * provided map.
     * @param map Map.
     * @api
     */
    setMap(map: ol.Map): void;
}

export namespace has {
    /**
     * The ratio between physical pixels and device-independent pixels
     * (dips) on the device (`window.devicePixelRatio`).
     * @api stable
     */
    const DEVICE_PIXEL_RATIO: number;

    /**
     * True if both the library and browser support Canvas.  Always `false`
     * if `ol.ENABLE_CANVAS` is set to `false` at compile time.
     * @api stable
     */
    const CANVAS: boolean;

    /**
     * Indicates if DeviceOrientation is supported in the user's browser.
     * @api stable
     */
    const DEVICE_ORIENTATION: boolean;

    /**
     * Is HTML5 geolocation supported in the current browser?
     * @api stable
     */
    const GEOLOCATION: boolean;

    /**
     * True if browser supports touch events.
     * @api stable
     */
    const TOUCH: boolean;

    /**
     * True if both OpenLayers and browser support WebGL.  Always `false`
     * if `ol.ENABLE_WEBGL` is set to `false` at compile time.
     * @api stable
     */
    const WEBGL: boolean;
}

/**
 * @param extent Extent.
 * @param resolution Resolution.
 * @param pixelRatio Pixel ratio.
 * @param attributions Attributions.
 * @param src Image source URI.
 * @param crossOrigin Cross origin.
 * @param imageLoadFunction Image load function.
 */
export class Image extends ImageBase {
    /**
     * @param extent Extent.
     * @param resolution Resolution.
     * @param pixelRatio Pixel ratio.
     * @param attributions Attributions.
     * @param src Image source URI.
     * @param crossOrigin Cross origin.
     * @param imageLoadFunction Image load function.
     */
    constructor(
        extent: ol.Extent,
        resolution: number,
        pixelRatio: number,
        attributions: ol.Attribution[],
        src: string,
        crossOrigin?: string,
        imageLoadFunction?: ol.ImageLoadFunctionType,
    );

    /**
     * Get the HTML image element (may be a Canvas, Image, or Video).
     * @param opt_context Object.
     * @return Image.
     * @api
     */
    getImage(opt_context?: GlobalObject): HTMLCanvasElement | Image | HTMLVideoElement;

    /**
     * Load the image or retry if loading previously failed.
     * Loading is taken care of by the tile queue, and calling this method is
     * only needed for preloading or for reloading in case of an error.
     * @api
     */
    load(): void;
}

/**
 * @param extent Extent.
 * @param resolution Resolution.
 * @param pixelRatio Pixel ratio.
 * @param state State.
 * @param attributions Attributions.
 */
export class ImageBase extends events.EventTarget {
    /**
     * @param extent Extent.
     * @param resolution Resolution.
     * @param pixelRatio Pixel ratio.
     * @param state State.
     * @param attributions Attributions.
     */
    constructor(
        extent: ol.Extent,
        resolution: number,
        pixelRatio: number,
        state: ol.ImageState,
        attributions: ol.Attribution[],
    );
}

export type ImageState = number;

/**
 * @param tileCoord Tile coordinate.
 * @param state State.
 * @param src Image source URI.
 * @param crossOrigin Cross origin.
 * @param tileLoadFunction Tile load function.
 */
export class ImageTile extends Tile {
    /**
     * @param tileCoord Tile coordinate.
     * @param state State.
     * @param src Image source URI.
     * @param crossOrigin Cross origin.
     * @param tileLoadFunction Tile load function.
     */
    constructor(
        tileCoord: ol.TileCoord,
        state: ol.Tile.State,
        src: string,
        crossOrigin?: string,
        tileLoadFunction?: ol.TileLoadFunctionType,
    );

    /**
     * Get the image element for this tile.
     * @inheritDoc
     * @api
     */
    getImage(opt_context?: GlobalObject): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
}

/**
 * Inherit the prototype methods from one constructor into another.
 *
 * Usage:
 *
 *     function ParentClass(a, b) { }
 *     ParentClass.prototype.foo = function(a) { }
 *
 *     function ChildClass(a, b, c) {
 *       // Call parent constructor
 *       ParentClass.call(this, a, b);
 *     }
 *     ol.inherits(ChildClass, ParentClass);
 *
 *     var child = new ChildClass('a', 'b', 'see');
 *     child.foo(); // This works.
 *
 * @param childCtor Child constructor.
 * @param parentCtor Parent constructor.
 * @api
 */
export function inherits(childCtor: () => any, parentCtor: () => any): void;

export namespace interaction {
    /**
     * @classdesc
     * Allows the user to zoom by double-clicking on the map.
     *
     * @param opt_options Options.
     * @api stable
     */
    class DoubleClickZoom extends Interaction {
        /**
         * @classdesc
         * Allows the user to zoom by double-clicking on the map.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.interaction.DoubleClickZoomOptions);

        /**
         * Handles the {@link ol.MapBrowserEvent map browser event} (if it was a
         * doubleclick) and eventually zooms the map.
         * @param mapBrowserEvent Map browser event.
         * @return `false` to stop event propagation.
         * @api
         */
        static handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean;
    }

    /**
     * @classdesc
     * Handles input of vector data by drag and drop.
     *
     * @fires ol.interaction.DragAndDropEvent
     * @param opt_options Options.
     * @api stable
     */
    class DragAndDrop extends Interaction {
        /**
         * @classdesc
         * Handles input of vector data by drag and drop.
         *
         * @fires ol.interaction.DragAndDropEvent
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.interaction.DragAndDropOptions);

        /**
         * Handles the {@link ol.MapBrowserEvent map browser event} unconditionally and
         * neither prevents the browser default nor stops event propagation.
         * @param mapBrowserEvent Map browser event.
         * @return `false` to stop event propagation.
         * @api
         */
        static handleEvent: any;
    }

    namespace DragAndDrop {
        /**
         * @classdesc
         * Events emitted by {@link ol.interaction.DragAndDrop} instances are instances
         * of this type.
         *
         * @param type Type.
         * @param file File.
         * @param opt_features Features.
         * @param opt_projection Projection.
         */
        class Event extends events.Event {
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.DragAndDrop} instances are instances
             * of this type.
             *
             * @param type Type.
             * @param file File.
             * @param opt_features Features.
             * @param opt_projection Projection.
             */
            constructor(
                type: DragAndDropEventType,
                file: File,
                opt_features?: ol.Feature[],
                opt_projection?: ol.proj.Projection,
            );

            /**
             * The features parsed from dropped data.
             * @api stable
             */
            features: ol.Feature[];

            /**
             * The dropped file.
             * @api stable
             */
            file: File;

            /**
             * The feature projection.
             * @api
             */
            projection: ol.proj.Projection;
        }
    }

    type DragAndDropEventType = string;

    /**
     * @classdesc
     * Allows the user to draw a vector box by clicking and dragging on the map,
     * normally combined with an {@link ol.events.condition} that limits
     * it to when the shift or other key is held down. This is used, for example,
     * for zooming to a specific area of the map
     * (see {@link ol.interaction.DragZoom} and
     * {@link ol.interaction.DragRotateAndZoom}).
     *
     * This interaction is only supported for mouse devices.
     *
     * @fires ol.DragBoxEvent
     * @param opt_options Options.
     * @api stable
     */
    class DragBox extends Pointer {
        /**
         * @classdesc
         * Allows the user to draw a vector box by clicking and dragging on the map,
         * normally combined with an {@link ol.events.condition} that limits
         * it to when the shift or other key is held down. This is used, for example,
         * for zooming to a specific area of the map
         * (see {@link ol.interaction.DragZoom} and
         * {@link ol.interaction.DragRotateAndZoom}).
         *
         * This interaction is only supported for mouse devices.
         *
         * @fires ol.DragBoxEvent
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.interaction.DragBoxOptions);

        /**
         * Returns geometry of last drawn box.
         * @return Geometry.
         * @api stable
         */
        getGeometry(): ol.geom.Polygon;
    }

    namespace DragBox {
        /**
         * @classdesc
         * Events emitted by {@link ol.interaction.DragBox} instances are instances of
         * this type.
         *
         * @param type The event type.
         * @param coordinate The event coordinate.
         * @param mapBrowserEvent Originating event.
         */
        class Event extends events.Event {
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.DragBox} instances are instances of
             * this type.
             *
             * @param type The event type.
             * @param coordinate The event coordinate.
             * @param mapBrowserEvent Originating event.
             */
            constructor(type: string, coordinate: ol.Coordinate, mapBrowserEvent: ol.MapBrowserEvent);

            /**
             * The coordinate of the drag event.
             * @api stable
             */
            coordinate: ol.Coordinate;

            /**
             * @api
             */
            mapBrowserEvent: ol.MapBrowserEvent;
        }
    }

    type DragBoxEventType = string;

    /**
     * @classdesc
     * Allows the user to pan the map by dragging the map.
     *
     * @param opt_options Options.
     * @api stable
     */
    class DragPan extends Pointer {
        /**
         * @classdesc
         * Allows the user to pan the map by dragging the map.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.interaction.DragPanOptions);
    }

    /**
     * @classdesc
     * Allows the user to rotate the map by clicking and dragging on the map,
     * normally combined with an {@link ol.events.condition} that limits
     * it to when the alt and shift keys are held down.
     *
     * This interaction is only supported for mouse devices.
     *
     * @param opt_options Options.
     * @api stable
     */
    class DragRotate extends Pointer {
        /**
         * @classdesc
         * Allows the user to rotate the map by clicking and dragging on the map,
         * normally combined with an {@link ol.events.condition} that limits
         * it to when the alt and shift keys are held down.
         *
         * This interaction is only supported for mouse devices.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.interaction.DragRotateOptions);
    }

    /**
     * @classdesc
     * Allows the user to zoom and rotate the map by clicking and dragging
     * on the map.  By default, this interaction is limited to when the shift
     * key is held down.
     *
     * This interaction is only supported for mouse devices.
     *
     * And this interaction is not included in the default interactions.
     *
     * @param opt_options Options.
     * @api stable
     */
    class DragRotateAndZoom extends Pointer {
        /**
         * @classdesc
         * Allows the user to zoom and rotate the map by clicking and dragging
         * on the map.  By default, this interaction is limited to when the shift
         * key is held down.
         *
         * This interaction is only supported for mouse devices.
         *
         * And this interaction is not included in the default interactions.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.interaction.DragRotateAndZoomOptions);
    }

    /**
     * @classdesc
     * Allows the user to zoom the map by clicking and dragging on the map,
     * normally combined with an {@link ol.events.condition} that limits
     * it to when a key, shift by default, is held down.
     *
     * To change the style of the box, use CSS and the `.ol-dragzoom` selector, or
     * your custom one configured with `className`.
     *
     * @param opt_options Options.
     * @api stable
     */
    class DragZoom extends DragBox {
        /**
         * @classdesc
         * Allows the user to zoom the map by clicking and dragging on the map,
         * normally combined with an {@link ol.events.condition} that limits
         * it to when a key, shift by default, is held down.
         *
         * To change the style of the box, use CSS and the `.ol-dragzoom` selector, or
         * your custom one configured with `className`.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.interaction.DragZoomOptions);
    }

    namespace Draw {
        /**
         * @classdesc
         * Events emitted by {@link ol.interaction.Draw} instances are instances of
         * this type.
         *
         * @param type Type.
         * @param feature The feature drawn.
         */
        class Event extends events.Event {
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.Draw} instances are instances of
             * this type.
             *
             * @param type Type.
             * @param feature The feature drawn.
             */
            constructor(type: DrawEventType, feature: ol.Feature);

            /**
             * The feature being drawn.
             * @api stable
             */
            feature: ol.Feature;
        }
    }

    type DrawEventType = string;

    /**
     * @classdesc
     * Interaction for drawing feature geometries.
     *
     * @fires ol.interaction.DrawEvent
     * @param options Options.
     * @api stable
     */
    class Draw extends Pointer {
        /**
         * @classdesc
         * Interaction for drawing feature geometries.
         *
         * @fires ol.interaction.DrawEvent
         * @param options Options.
         * @api stable
         */
        constructor(options: olx.interaction.DrawOptions);

        /**
         * Remove last point of the feature currently being drawn.
         * @api
         */
        removeLastPoint(): void;

        /**
         * Stop drawing and add the sketch feature to the target layer.
         * The {@link ol.interaction.DrawEventType.DRAWEND} event is dispatched before
         * inserting the feature.
         * @api
         */
        finishDrawing(): void;

        /**
         * Extend an existing geometry by adding additional points. This only works
         * on features with `LineString` geometries, where the interaction will
         * extend lines by adding points to the end of the coordinates array.
         * @param feature Feature to be extended.
         * @api
         */
        extend(feature: ol.Feature): void;

        /**
         * Create a `geometryFunction` that will create a box-shaped polygon (aligned
         * with the coordinate system axes).  Use this with the draw interaction and
         * `type: 'Circle'` to return a box instead of a circle geometry.
         * @return Function that draws a box-shaped polygon.
         * @api
         */
        static createBox(): ol.DrawGeometryFunctionType;

        /**
         * Create a `geometryFunction` for `mode: 'Circle'` that will create a regular
         * polygon with a user specified number of sides and start angle instead of an
         * `ol.geom.Circle` geometry.
         * @param opt_sides Number of sides of the regular polygon. Default is
         *     32.
         * @param opt_angle Angle of the first point in radians. 0 means East.
         *     Default is the angle defined by the heading from the center of the
         *     regular polygon to the current pointer position.
         * @return Function that draws a
         *     polygon.
         * @api
         */
        static createRegularPolygon(opt_sides?: number, opt_angle?: number): ol.DrawGeometryFunctionType;
    }

    namespace Extent {
        /**
         * @classdesc
         * Events emitted by {@link ol.interaction.Extent} instances are instances of
         * this type.
         *
         * @param extent the new extent
         */
        class Event extends events.Event {
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.Extent} instances are instances of
             * this type.
             *
             * @param type Type.
             * @param feature The feature drawn.
             */
            constructor(type: ExtentEventType, extent: ol.Extent);

            /**
             * The current extent.
             * @api stable
             */
            extent: ol.Extent;
        }
    }

    type ExtentEventType = string;

    /**
     * @classdesc
     * Allows the user to draw a vector box by clicking and dragging on the map.
     * Once drawn, the vector box can be modified by dragging its vertices or edges.
     * This interaction is only supported for mouse devices.
     *
     * @fires ol.interaction.Extent.Event
     * @param options Options.
     * @api stable
     */
    class Extent extends Pointer {
        /**
         * @fires ol.interaction.Extent.Event
         * @param options Options.
         * @api stable
         */
        constructor(options: olx.interaction.ExtentOptions);

        /**
         * @inheritDoc
         */
        setMap(map: ol.Map): void;

        /**
         * Returns the current drawn extent in the view projection
         *
         * @return Drawn extent in the view projection.
         * @api
         */
        getExtent(): ol.Extent;

        /**
         * Manually sets the drawn extent, using the view projection.
         *
         * @param extent Extent
         * @api
         */
        setExtent(extent: ol.Extent): void;
    }

    /**
     * Set of interactions included in maps by default. Specific interactions can be
     * excluded by setting the appropriate option to false in the constructor
     * options, but the order of the interactions is fixed.  If you want to specify
     * a different order for interactions, you will need to create your own
     * {@link ol.interaction.Interaction} instances and insert them into a
     * {@link ol.Collection} in the order you want before creating your
     * {@link ol.Map} instance. The default set of interactions, in sequence, is:
     * * {@link ol.interaction.DragRotate}
     * * {@link ol.interaction.DoubleClickZoom}
     * * {@link ol.interaction.DragPan}
     * * {@link ol.interaction.PinchRotate}
     * * {@link ol.interaction.PinchZoom}
     * * {@link ol.interaction.KeyboardPan}
     * * {@link ol.interaction.KeyboardZoom}
     * * {@link ol.interaction.MouseWheelZoom}
     * * {@link ol.interaction.DragZoom}
     *
     * @param opt_options Defaults options.
     * @return A collection of
     * interactions to be used with the ol.Map constructor's interactions option.
     * @api stable
     */
    function defaults(opt_options?: olx.interaction.DefaultsOptions): ol.Collection<Interaction>;

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * User actions that change the state of the map. Some are similar to controls,
     * but are not associated with a DOM element.
     * For example, {@link ol.interaction.KeyboardZoom} is functionally the same as
     * {@link ol.control.Zoom}, but triggered by a keyboard event not a button
     * element event.
     * Although interactions do not have a DOM element, some of them do render
     * vectors and so are visible on the screen.
     *
     * @param options Options.
     * @api
     */
    class Interaction extends Object {
        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * User actions that change the state of the map. Some are similar to controls,
         * but are not associated with a DOM element.
         * For example, {@link ol.interaction.KeyboardZoom} is functionally the same as
         * {@link ol.control.Zoom}, but triggered by a keyboard event not a button
         * element event.
         * Although interactions do not have a DOM element, some of them do render
         * vectors and so are visible on the screen.
         *
         * @param options Options.
         * @api
         */
        constructor(options: olx.interaction.InteractionOptions);

        /**
         * Return whether the interaction is currently active.
         * @return `true` if the interaction is active, `false` otherwise.
         * @observable
         * @api
         */
        getActive(): boolean;

        /**
         * Get the map associated with this interaction.
         * @return Map.
         * @api
         */
        getMap(): ol.Map;

        /**
         * Activate or deactivate the interaction.
         * @param active Active.
         * @observable
         * @api
         */
        setActive(active: boolean): void;
    }

    /**
     * @classdesc
     * Allows the user to pan the map using keyboard arrows.
     * Note that, although this interaction is by default included in maps,
     * the keys can only be used when browser focus is on the element to which
     * the keyboard events are attached. By default, this is the map div,
     * though you can change this with the `keyboardEventTarget` in
     * {@link ol.Map}. `document` never loses focus but, for any other element,
     * focus will have to be on, and returned to, this element if the keys are to
     * function.
     * See also {@link ol.interaction.KeyboardZoom}.
     *
     * @param opt_options Options.
     * @api stable
     */
    class KeyboardPan extends Interaction {
        /**
         * @classdesc
         * Allows the user to pan the map using keyboard arrows.
         * Note that, although this interaction is by default included in maps,
         * the keys can only be used when browser focus is on the element to which
         * the keyboard events are attached. By default, this is the map div,
         * though you can change this with the `keyboardEventTarget` in
         * {@link ol.Map}. `document` never loses focus but, for any other element,
         * focus will have to be on, and returned to, this element if the keys are to
         * function.
         * See also {@link ol.interaction.KeyboardZoom}.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.interaction.KeyboardPanOptions);

        /**
         * Handles the {@link ol.MapBrowserEvent map browser event} if it was a
         * `KeyEvent`, and decides the direction to pan to (if an arrow key was
         * pressed).
         * @param mapBrowserEvent Map browser event.
         * @return `false` to stop event propagation.
         * @api
         */
        static handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean;
    }

    /**
     * @classdesc
     * Allows the user to zoom the map using keyboard + and -.
     * Note that, although this interaction is by default included in maps,
     * the keys can only be used when browser focus is on the element to which
     * the keyboard events are attached. By default, this is the map div,
     * though you can change this with the `keyboardEventTarget` in
     * {@link ol.Map}. `document` never loses focus but, for any other element,
     * focus will have to be on, and returned to, this element if the keys are to
     * function.
     * See also {@link ol.interaction.KeyboardPan}.
     *
     * @param opt_options Options.
     * @api stable
     */
    class KeyboardZoom extends Interaction {
        /**
         * @classdesc
         * Allows the user to zoom the map using keyboard + and -.
         * Note that, although this interaction is by default included in maps,
         * the keys can only be used when browser focus is on the element to which
         * the keyboard events are attached. By default, this is the map div,
         * though you can change this with the `keyboardEventTarget` in
         * {@link ol.Map}. `document` never loses focus but, for any other element,
         * focus will have to be on, and returned to, this element if the keys are to
         * function.
         * See also {@link ol.interaction.KeyboardPan}.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.interaction.KeyboardZoomOptions);

        /**
         * Handles the {@link ol.MapBrowserEvent map browser event} if it was a
         * `KeyEvent`, and decides whether to zoom in or out (depending on whether the
         * key pressed was '+' or '-').
         * @param mapBrowserEvent Map browser event.
         * @return `false` to stop event propagation.
         * @api
         */
        static handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean;
    }

    namespace Modify {
        /**
         * @classdesc
         * Events emitted by {@link ol.interaction.Modify} instances are instances of
         * this type.
         *
         * @param type Type.
         * @param features The features modified.
         * @param mapBrowserPointerEvent Associated
         *     {@link ol.MapBrowserPointerEvent}.
         */
        class Event extends events.Event {
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.Modify} instances are instances of
             * this type.
             *
             * @param type Type.
             * @param features The features modified.
             * @param mapBrowserPointerEvent Associated
             *     {@link ol.MapBrowserPointerEvent}.
             */
            constructor(
                type: ol.ModifyEventType,
                features: ol.Collection<ol.Feature>,
                mapBrowserPointerEvent: ol.MapBrowserPointerEvent,
            );

            /**
             * The features being modified.
             * @api
             */
            features: ol.Collection<ol.Feature>;

            /**
             * Associated {@link ol.MapBrowserEvent}.
             * @api
             */
            mapBrowserEvent: ol.MapBrowserEvent;
        }
    }

    /**
     * @classdesc
     * Interaction for modifying feature geometries.
     *
     * @param options Options.
     * @fires ol.interaction.ModifyEvent
     * @api
     */
    class Modify extends Pointer {
        /**
         * @classdesc
         * Interaction for modifying feature geometries.
         *
         * @param options Options.
         * @fires ol.interaction.ModifyEvent
         * @api
         */
        constructor(options: olx.interaction.ModifyOptions);

        /**
         * Removes the vertex currently being pointed.
         * @return True when a vertex was removed.
         * @api
         */
        removePoint(): boolean;
    }

    /**
     * @classdesc
     * Allows the user to zoom the map by scrolling the mouse wheel.
     *
     * @param opt_options Options.
     * @api stable
     */
    class MouseWheelZoom extends Interaction {
        /**
         * @classdesc
         * Allows the user to zoom the map by scrolling the mouse wheel.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.interaction.MouseWheelZoomOptions);

        /**
         * Handles the {@link ol.MapBrowserEvent map browser event} (if it was a
         * mousewheel-event) and eventually zooms the map.
         * @param mapBrowserEvent Map browser event.
         * @return `false` to stop event propagation.
         * @api
         */
        static handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Enable or disable using the mouse's location as an anchor when zooming
         * @param useAnchor true to zoom to the mouse's location, false
         * to zoom to the center of the map
         * @api
         */
        setMouseAnchor(useAnchor: boolean): void;
    }

    /**
     * @classdesc
     * Allows the user to rotate the map by twisting with two fingers
     * on a touch screen.
     *
     * @param opt_options Options.
     * @api stable
     */
    class PinchRotate extends Pointer {
        /**
         * @classdesc
         * Allows the user to rotate the map by twisting with two fingers
         * on a touch screen.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.interaction.PinchRotateOptions);
    }

    /**
     * @classdesc
     * Allows the user to zoom the map by pinching with two fingers
     * on a touch screen.
     *
     * @param opt_options Options.
     * @api stable
     */
    class PinchZoom extends Pointer {
        /**
         * @classdesc
         * Allows the user to zoom the map by pinching with two fingers
         * on a touch screen.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.interaction.PinchZoomOptions);
    }

    /**
     * @classdesc
     * Base class that calls user-defined functions on `down`, `move` and `up`
     * events. This class also manages "drag sequences".
     *
     * When the `handleDownEvent` user function returns `true` a drag sequence is
     * started. During a drag sequence the `handleDragEvent` user function is
     * called on `move` events. The drag sequence ends when the `handleUpEvent`
     * user function is called and returns `false`.
     *
     * @param opt_options Options.
     * @api
     */
    class Pointer extends Interaction {
        /**
         * @classdesc
         * Base class that calls user-defined functions on `down`, `move` and `up`
         * events. This class also manages "drag sequences".
         *
         * When the `handleDownEvent` user function returns `true` a drag sequence is
         * started. During a drag sequence the `handleDragEvent` user function is
         * called on `move` events. The drag sequence ends when the `handleUpEvent`
         * user function is called and returns `false`.
         *
         * @param opt_options Options.
         * @api
         */
        constructor(opt_options?: olx.interaction.PointerOptions);

        /**
         * Handles the {@link ol.MapBrowserEvent map browser event} and may call into
         * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
         * detected.
         * @param mapBrowserEvent Map browser event.
         * @return `false` to stop event propagation.
         * @api
         */
        static handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean;
    }

    namespace Select {
        /**
         * @classdesc
         * Events emitted by {@link ol.interaction.Select} instances are instances of
         * this type.
         *
         * @param type The event type.
         * @param selected Selected features.
         * @param deselected Deselected features.
         * @param mapBrowserEvent Associated
         *     {@link ol.MapBrowserEvent}.
         */
        class Event extends events.Event {
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.Select} instances are instances of
             * this type.
             *
             * @param type The event type.
             * @param selected Selected features.
             * @param deselected Deselected features.
             * @param mapBrowserEvent Associated
             *     {@link ol.MapBrowserEvent}.
             */
            constructor(
                type: string,
                selected: ol.Feature[],
                deselected: ol.Feature[],
                mapBrowserEvent: ol.MapBrowserEvent,
            );

            /**
             * Selected features array.
             * @api
             */
            selected: ol.Feature[];

            /**
             * Deselected features array.
             * @api
             */
            deselected: ol.Feature[];

            /**
             * Associated {@link ol.MapBrowserEvent}.
             * @api
             */
            mapBrowserEvent: ol.MapBrowserEvent;
        }
    }

    /**
     * @classdesc
     * Interaction for selecting vector features. By default, selected features are
     * styled differently, so this interaction can be used for visual highlighting,
     * as well as selecting features for other actions, such as modification or
     * output. There are three ways of controlling which features are selected:
     * using the browser event as defined by the `condition` and optionally the
     * `toggle`, `add`/`remove`, and `multi` options; a `layers` filter; and a
     * further feature filter using the `filter` option.
     *
     * Selected features are added to an internal unmanaged layer.
     *
     * @param opt_options Options.
     * @fires ol.interaction.SelectEvent
     * @api stable
     */
    class Select extends Interaction {
        /**
         * @classdesc
         * Interaction for selecting vector features. By default, selected features are
         * styled differently, so this interaction can be used for visual highlighting,
         * as well as selecting features for other actions, such as modification or
         * output. There are three ways of controlling which features are selected:
         * using the browser event as defined by the `condition` and optionally the
         * `toggle`, `add`/`remove`, and `multi` options; a `layers` filter; and a
         * further feature filter using the `filter` option.
         *
         * Selected features are added to an internal unmanaged layer.
         *
         * @param opt_options Options.
         * @fires ol.interaction.SelectEvent
         * @api stable
         */
        constructor(opt_options?: olx.interaction.SelectOptions);

        /**
         * Get the selected features.
         * @return Features collection.
         * @api stable
         */
        getFeatures(): ol.Collection<ol.Feature>;

        /**
         * Returns the associated {@link ol.layer.Vector vectorlayer} of
         * the (last) selected feature. Note that this will not work with any
         * programmatic method like pushing features to
         * {@link ol.interaction.Select#getFeatures collection}.
         * @param feature Feature
         * @return Layer.
         * @api
         */
        getLayer(feature: ol.Feature | ol.render.Feature): ol.layer.Vector;

        /**
         * Handles the {@link ol.MapBrowserEvent map browser event} and may change the
         * selected state of features.
         * @param mapBrowserEvent Map browser event.
         * @return `false` to stop event propagation.
         * @api
         */
        static handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean;

        /**
         * Remove the interaction from its current map, if any,  and attach it to a new
         * map, if any. Pass `null` to just remove the interaction from the current map.
         * @param map Map.
         * @api stable
         */
        setMap(map: ol.Map): void;
    }

    /**
     * @classdesc
     * Handles snapping of vector features while modifying or drawing them.  The
     * features can come from a {@link ol.source.Vector} or {@link ol.Collection}
     * Any interaction object that allows the user to interact
     * with the features using the mouse can benefit from the snapping, as long
     * as it is added before.
     *
     * The snap interaction modifies map browser event `coordinate` and `pixel`
     * properties to force the snap to occur to any interaction that them.
     *
     * Example:
     *
     *     var snap = new ol.interaction.Snap({
     *       source: source
     *     });
     *
     * @param opt_options Options.
     * @api
     */
    class Snap extends Pointer {
        /**
         * @classdesc
         * Handles snapping of vector features while modifying or drawing them.  The
         * features can come from a {@link ol.source.Vector} or {@link ol.Collection}
         * Any interaction object that allows the user to interact
         * with the features using the mouse can benefit from the snapping, as long
         * as it is added before.
         *
         * The snap interaction modifies map browser event `coordinate` and `pixel`
         * properties to force the snap to occur to any interaction that them.
         *
         * Example:
         *
         *     var snap = new ol.interaction.Snap({
         *       source: source
         *     });
         *
         * @param opt_options Options.
         * @api
         */
        constructor(opt_options?: olx.interaction.SnapOptions);

        /**
         * Add a feature to the collection of features that we may snap to.
         * @param feature Feature.
         * @param opt_listen Whether to listen to the geometry change or not
         *     Defaults to `true`.
         * @api
         */
        addFeature(feature: ol.Feature, opt_listen?: boolean): void;

        /**
         * Remove a feature from the collection of features that we may snap to.
         * @param feature Feature
         * @param opt_unlisten Whether to unlisten to the geometry change
         *     or not. Defaults to `true`.
         * @api
         */
        removeFeature(feature: ol.Feature, opt_unlisten?: boolean): void;
    }

    namespace Translate {
        /**
         * @classdesc
         * Events emitted by {@link ol.interaction.Translate} instances are instances of
         * this type.
         *
         * @param type Type.
         * @param features The features translated.
         * @param coordinate The event coordinate.
         */
        class Event extends events.Event {
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.Translate} instances are instances of
             * this type.
             *
             * @param type Type.
             * @param features The features translated.
             * @param coordinate The event coordinate.
             */
            constructor(type: TranslateEventType, features: ol.Collection<ol.Feature>, coordinate: ol.Coordinate);

            /**
             * The features being translated.
             * @api
             */
            features: ol.Collection<ol.Feature>;

            /**
             * The coordinate of the drag event.
             * @api
             */
            coordinate: ol.Coordinate;
        }
    }

    type TranslateEventType = string;

    /**
     * @classdesc
     * Interaction for translating (moving) features.
     *
     * @fires ol.interaction.TranslateEvent
     * @param options Options.
     * @api
     */
    class Translate extends Pointer {
        /**
         * @classdesc
         * Interaction for translating (moving) features.
         *
         * @fires ol.interaction.TranslateEvent
         * @param options Options.
         * @api
         */
        constructor(options: olx.interaction.TranslateOptions);
    }
}

/**
 * @classdesc
 * Implementation of inertial deceleration for map movement.
 *
 * @param decay Rate of decay (must be negative).
 * @param minVelocity Minimum velocity (pixels/millisecond).
 * @param delay Delay to consider to calculate the kinetic
 *     initial values (milliseconds).
 * @struct
 * @api
 */
/* tslint:disable-next-line:no-unnecessary-class */
export class Kinetic {
    /**
     * @classdesc
     * Implementation of inertial deceleration for map movement.
     *
     * @param decay Rate of decay (must be negative).
     * @param minVelocity Minimum velocity (pixels/millisecond).
     * @param delay Delay to consider to calculate the kinetic
     *     initial values (milliseconds).
     * @struct
     * @api
     */
    constructor(decay: number, minVelocity: number, delay: number);
}

export namespace layer {
    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Note that with `ol.layer.Base` and all its subclasses, any property set in
     * the options is set as a {@link ol.Object} property on the layer object, so
     * is observable, and has get/set accessors.
     *
     * @param options Layer options.
     * @api stable
     */
    class Base extends Object {
        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * Note that with `ol.layer.Base` and all its subclasses, any property set in
         * the options is set as a {@link ol.Object} property on the layer object, so
         * is observable, and has get/set accessors.
         *
         * @param options Layer options.
         * @api stable
         */
        constructor(options: olx.layer.BaseOptions);

        /**
         * Return the {@link ol.Extent extent} of the layer or `undefined` if it
         * will be visible regardless of extent.
         * @return The layer extent.
         * @observable
         * @api stable
         */
        getExtent(): ol.Extent;

        /**
         * Return the maximum resolution of the layer.
         * @return The maximum resolution of the layer.
         * @observable
         * @api stable
         */
        getMaxResolution(): number;

        /**
         * Return the minimum resolution of the layer.
         * @return The minimum resolution of the layer.
         * @observable
         * @api stable
         */
        getMinResolution(): number;

        /**
         * Return the opacity of the layer (between 0 and 1).
         * @return The opacity of the layer.
         * @observable
         * @api stable
         */
        getOpacity(): number;

        /**
         * Return the visibility of the layer (`true` or `false`).
         * @return The visibility of the layer.
         * @observable
         * @api stable
         */
        getVisible(): boolean;

        /**
         * Return the Z-index of the layer, which is used to order layers before
         * rendering. The default Z-index is 0.
         * @return The Z-index of the layer.
         * @observable
         * @api
         */
        getZIndex(): number;

        /**
         * Set the extent at which the layer is visible.  If `undefined`, the layer
         * will be visible at all extents.
         * @param extent The extent of the layer.
         * @observable
         * @api stable
         */
        setExtent(extent: ol.Extent): void;

        /**
         * Set the maximum resolution at which the layer is visible.
         * @param maxResolution The maximum resolution of the layer.
         * @observable
         * @api stable
         */
        setMaxResolution(maxResolution: number): void;

        /**
         * Set the minimum resolution at which the layer is visible.
         * @param minResolution The minimum resolution of the layer.
         * @observable
         * @api stable
         */
        setMinResolution(minResolution: number): void;

        /**
         * Set the opacity of the layer, allowed values range from 0 to 1.
         * @param opacity The opacity of the layer.
         * @observable
         * @api stable
         */
        setOpacity(opacity: number): void;

        /**
         * Set the visibility of the layer (`true` or `false`).
         * @param visible The visibility of the layer.
         * @observable
         * @api stable
         */
        setVisible(visible: boolean): void;

        /**
         * Set Z-index of the layer, which is used to order layers before rendering.
         * The default Z-index is 0.
         * @param zindex The z-index of the layer.
         * @observable
         * @api
         */
        setZIndex(zindex: number): void;
    }

    /**
     * @classdesc
     * A {@link ol.Collection} of layers that are handled together.
     *
     * A generic `change` event is triggered when the group/Collection changes.
     *
     * @param opt_options Layer options.
     * @api stable
     */
    class Group extends Base {
        /**
         * @classdesc
         * A {@link ol.Collection} of layers that are handled together.
         *
         * A generic `change` event is triggered when the group/Collection changes.
         *
         * @param opt_options Layer options.
         * @api stable
         */
        constructor(opt_options?: olx.layer.GroupOptions);

        /**
         * Returns the {@link ol.Collection collection} of {@link ol.layer.Layer layers}
         * in this group.
         * @return Collection of
         *   {@link ol.layer.Base layers} that are part of this group.
         * @observable
         * @api stable
         */
        getLayers(): ol.Collection<Base>;

        /**
         * Set the {@link ol.Collection collection} of {@link ol.layer.Layer layers}
         * in this group.
         * @param layers Collection of
         *   {@link ol.layer.Base layers} that are part of this group.
         * @observable
         * @api stable
         */
        setLayers(layers: ol.Collection<Base>): void;
    }

    /**
     * @classdesc
     * Layer for rendering vector data as a heatmap.
     * Note that any property set in the options is set as a {@link ol.Object}
     * property on the layer object; for example, setting `title: 'My Title'` in the
     * options means that `title` is observable, and has get/set accessors.
     *
     * @fires ol.render.Event
     * @param opt_options Options.
     * @api
     */
    class Heatmap extends Vector {
        /**
         * @classdesc
         * Layer for rendering vector data as a heatmap.
         * Note that any property set in the options is set as a {@link ol.Object}
         * property on the layer object; for example, setting `title: 'My Title'` in the
         * options means that `title` is observable, and has get/set accessors.
         *
         * @fires ol.render.Event
         * @param opt_options Options.
         * @api
         */
        constructor(opt_options?: olx.layer.HeatmapOptions);

        /**
         * Return the blur size in pixels.
         * @return Blur size in pixels.
         * @api
         * @observable
         */
        getBlur(): number;

        /**
         * Return the gradient colors as array of strings.
         * @return Colors.
         * @api
         * @observable
         */
        getGradient(): string[];

        /**
         * Return the size of the radius in pixels.
         * @return Radius size in pixel.
         * @api
         * @observable
         */
        getRadius(): number;

        /**
         * Set the blur size in pixels.
         * @param blur Blur size in pixels.
         * @api
         * @observable
         */
        setBlur(blur: number): void;

        /**
         * Set the gradient colors as array of strings.
         * @param colors Gradient.
         * @api
         * @observable
         */
        setGradient(colors: string[]): void;

        /**
         * Set the size of the radius in pixels.
         * @param radius Radius size in pixel.
         * @api
         * @observable
         */
        setRadius(radius: number): void;
    }

    /**
     * @classdesc
     * Server-rendered images that are available for arbitrary extents and
     * resolutions.
     * Note that any property set in the options is set as a {@link ol.Object}
     * property on the layer object; for example, setting `title: 'My Title'` in the
     * options means that `title` is observable, and has get/set accessors.
     *
     * @fires ol.render.Event
     * @param opt_options Layer options.
     * @api stable
     */
    class Image extends Layer {
        /**
         * @classdesc
         * Server-rendered images that are available for arbitrary extents and
         * resolutions.
         * Note that any property set in the options is set as a {@link ol.Object}
         * property on the layer object; for example, setting `title: 'My Title'` in the
         * options means that `title` is observable, and has get/set accessors.
         *
         * @fires ol.render.Event
         * @param opt_options Layer options.
         * @api stable
         */
        constructor(opt_options?: olx.layer.ImageOptions);
    }

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * A visual representation of raster or vector map data.
     * Layers group together those properties that pertain to how the data is to be
     * displayed, irrespective of the source of that data.
     *
     * Layers are usually added to a map with {@link ol.Map#addLayer}. Components
     * like {@link ol.interaction.Select} use unmanaged layers internally. These
     * unmanaged layers are associated with the map using
     * {@link ol.layer.Layer#setMap} instead.
     *
     * A generic `change` event is fired when the state of the source changes.
     *
     * @fires ol.render.Event
     * @param options Layer options.
     * @api stable
     */
    class Layer extends Base {
        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * A visual representation of raster or vector map data.
         * Layers group together those properties that pertain to how the data is to be
         * displayed, irrespective of the source of that data.
         *
         * Layers are usually added to a map with {@link ol.Map#addLayer}. Components
         * like {@link ol.interaction.Select} use unmanaged layers internally. These
         * unmanaged layers are associated with the map using
         * {@link ol.layer.Layer#setMap} instead.
         *
         * A generic `change` event is fired when the state of the source changes.
         *
         * @fires ol.render.Event
         * @param options Layer options.
         * @api stable
         */
        constructor(options: olx.layer.LayerOptions);

        /**
         * Get the layer source.
         * @return The layer source (or `null` if not yet set).
         * @observable
         * @api stable
         */
        getSource(): ol.source.Source;

        /**
         * Sets the layer to be rendered on top of other layers on a map. The map will
         * not manage this layer in its layers collection, and the callback in
         * {@link ol.Map#forEachLayerAtPixel} will receive `null` as layer. This
         * is useful for temporary layers. To remove an unmanaged layer from the map,
         * use `#setMap(null)`.
         *
         * To add the layer to a map and have it managed by the map, use
         * {@link ol.Map#addLayer} instead.
         * @param map Map.
         * @api
         */
        setMap(map: ol.Map): void;

        /**
         * Set the layer source.
         * @param source The layer source.
         * @observable
         * @api stable
         */
        setSource(source: ol.source.Source): void;
    }

    /**
     * @classdesc
     * For layer sources that provide pre-rendered, tiled images in grids that are
     * organized by zoom levels for specific resolutions.
     * Note that any property set in the options is set as a {@link ol.Object}
     * property on the layer object; for example, setting `title: 'My Title'` in the
     * options means that `title` is observable, and has get/set accessors.
     *
     * @fires ol.render.Event
     * @param opt_options Tile layer options.
     * @api stable
     */
    class Tile extends Layer {
        /**
         * @classdesc
         * For layer sources that provide pre-rendered, tiled images in grids that are
         * organized by zoom levels for specific resolutions.
         * Note that any property set in the options is set as a {@link ol.Object}
         * property on the layer object; for example, setting `title: 'My Title'` in the
         * options means that `title` is observable, and has get/set accessors.
         *
         * @fires ol.render.Event
         * @param opt_options Tile layer options.
         * @api stable
         */
        constructor(opt_options?: olx.layer.TileOptions);

        /**
         * Return the level as number to which we will preload tiles up to.
         * @return The level to preload tiles up to.
         * @observable
         * @api
         */
        getPreload(): number;

        /**
         * Set the level as number to which we will preload tiles up to.
         * @param preload The level to preload tiles up to.
         * @observable
         * @api
         */
        setPreload(preload: number): void;

        /**
         * Whether we use interim tiles on error.
         * @return Use interim tiles on error.
         * @observable
         * @api
         */
        getUseInterimTilesOnError(): boolean;

        /**
         * Set whether we use interim tiles on error.
         * @param useInterimTilesOnError Use interim tiles on error.
         * @observable
         * @api
         */
        setUseInterimTilesOnError(useInterimTilesOnError: boolean): void;
    }

    /**
     * @classdesc
     * Vector data that is rendered client-side.
     * Note that any property set in the options is set as a {@link ol.Object}
     * property on the layer object; for example, setting `title: 'My Title'` in the
     * options means that `title` is observable, and has get/set accessors.
     *
     * @fires ol.render.Event
     * @param opt_options Options.
     * @api stable
     */
    class Vector extends Layer {
        /**
         * @classdesc
         * Vector data that is rendered client-side.
         * Note that any property set in the options is set as a {@link ol.Object}
         * property on the layer object; for example, setting `title: 'My Title'` in the
         * options means that `title` is observable, and has get/set accessors.
         *
         * @fires ol.render.Event
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.layer.VectorOptions);

        /**
         * Return the associated {@link ol.source.Vector vectorsource} of the layer.
         * @return Source.
         * @api stable
         */
        getSource(): ol.source.Vector;

        /**
         * Get the style for features.  This returns whatever was passed to the `style`
         * option at construction or to the `setStyle` method.
         * @return Layer style.
         * @api stable
         */
        getStyle(): ol.style.Style | ol.style.Style[] | ol.StyleFunction;

        /**
         * Get the style function.
         * @return Layer style function.
         * @api stable
         */
        getStyleFunction(): ol.StyleFunction | undefined;

        /**
         * Set the style for features.  This can be a single style object, an array
         * of styles, or a function that takes a feature and resolution and returns
         * an array of styles. If it is `undefined` the default style is used. If
         * it is `null` the layer has no style (a `null` style), so only features
         * that have their own styles will be rendered in the layer. See
         * {@link ol.style} for information on the default style.
         * @param style Layer style.
         * @api stable
         */
        setStyle(style: ol.style.Style | ol.style.Style[] | ol.StyleFunction | null | undefined): void;
    }

    /**
     * Render mode for vector tiles:
     *  * `'image'`: Vector tiles are rendered as images. Great performance, but
     *    point symbols and texts are always rotated with the view and pixels are
     *    scaled during zoom animations.
     *  * `'hybrid'`: Polygon and line elements are rendered as images, so pixels
     *    are scaled during zoom animations. Point symbols and texts are accurately
     *    rendered as vectors and can stay upright on rotated views.
     *  * `'vector'`: Vector tiles are rendered as vectors. Most accurate rendering
     *    even during animations, but slower performance than the other options.
     * @api
     */
    type VectorTileRenderType = "image" | "hybrid" | "vector";

    /**
     * @classdesc
     * Layer for vector tile data that is rendered client-side.
     * Note that any property set in the options is set as a {@link ol.Object}
     * property on the layer object; for example, setting `title: 'My Title'` in the
     * options means that `title` is observable, and has get/set accessors.
     *
     * @param opt_options Options.
     * @api
     */
    class VectorTile extends Vector {
        /**
         * @classdesc
         * Layer for vector tile data that is rendered client-side.
         * Note that any property set in the options is set as a {@link ol.Object}
         * property on the layer object; for example, setting `title: 'My Title'` in the
         * options means that `title` is observable, and has get/set accessors.
         *
         * @param opt_options Options.
         * @api
         */
        constructor(opt_options?: olx.layer.VectorTileOptions);

        /**
         * Return the level as number to which we will preload tiles up to.
         * @return The level to preload tiles up to.
         * @observable
         * @api
         */
        getPreload(): number;

        /**
         * Whether we use interim tiles on error.
         * @return Use interim tiles on error.
         * @observable
         * @api
         */
        getUseInterimTilesOnError(): boolean;

        /**
         * Set the level as number to which we will preload tiles up to.
         * @param preload The level to preload tiles up to.
         * @observable
         * @api
         */
        setPreload(preload: number): void;

        /**
         * Set whether we use interim tiles on error.
         * @param useInterimTilesOnError Use interim tiles on error.
         * @observable
         * @api
         */
        setUseInterimTilesOnError(useInterimTilesOnError: boolean): void;
    }
}

/**
 * Strategies for loading vector data.
 */
export namespace loadingstrategy {
    /**
     * Strategy function for loading all features with a single request.
     * @param extent Extent.
     * @param resolution Resolution.
     * @return Extents.
     * @api
     */
    function all(extent: ol.Extent, resolution: number): ol.Extent[];

    /**
     * Strategy function for loading features based on the view's extent and
     * resolution.
     * @param extent Extent.
     * @param resolution Resolution.
     * @return Extents.
     * @api
     */
    function bbox(extent: ol.Extent, resolution: number): ol.Extent[];

    /**
     * Creates a strategy function for loading features based on a tile grid.
     * @param tileGrid Tile grid.
     * @return Loading strategy.
     * @api
     */
    function tile(tileGrid: ol.tilegrid.TileGrid): (extent: ol.Extent, i: number) => ol.Extent[];
}

/**
 * @classdesc
 * The map is the core component of OpenLayers. For a map to render, a view,
 * one or more layers, and a target container are needed:
 *
 *     var map = new ol.Map({
 *       view: new ol.View({
 *         center: [0, 0],
 *         zoom: 1
 *       }),
 *       layers: [
 *         new ol.layer.Tile({
 *           source: new ol.source.OSM()
 *         })
 *       ],
 *       target: 'map'
 *     });
 *
 * The above snippet creates a map using a {@link ol.layer.Tile} to display
 * {@link ol.source.OSM} OSM data and render it to a DOM element with the
 * id `map`.
 *
 * The constructor places a viewport container (with CSS class name
 * `ol-viewport`) in the target element (see `getViewport()`), and then two
 * further elements within the viewport: one with CSS class name
 * `ol-overlaycontainer-stopevent` for controls and some overlays, and one with
 * CSS class name `ol-overlaycontainer` for other overlays (see the `stopEvent`
 * option of {@link ol.Overlay} for the difference). The map itself is placed in
 * a further element within the viewport, either DOM or Canvas, depending on the
 * renderer.
 *
 * Layers are stored as a `ol.Collection` in layerGroups. A top-level group is
 * provided by the library. This is what is accessed by `getLayerGroup` and
 * `setLayerGroup`. Layers entered in the options are added to this group, and
 * `addLayer` and `removeLayer` change the layer collection in the group.
 * `getLayers` is a convenience function for `getLayerGroup().getLayers()`.
 * Note that `ol.layer.Group` is a subclass of `ol.layer.Base`, so layers
 * entered in the options or added with `addLayer` can be groups, which can
 * contain further groups, and so on.
 *
 * @param options Map options.
 * @fires ol.MapBrowserEvent
 * @fires ol.MapEvent
 * @fires ol.render.Event#postcompose
 * @fires ol.render.Event#precompose
 * @api stable
 */
export class Map extends Object {
    /**
     * @classdesc
     * The map is the core component of OpenLayers. For a map to render, a view,
     * one or more layers, and a target container are needed:
     *
     *     var map = new ol.Map({
     *       view: new ol.View({
     *         center: [0, 0],
     *         zoom: 1
     *       }),
     *       layers: [
     *         new ol.layer.Tile({
     *           source: new ol.source.OSM()
     *         })
     *       ],
     *       target: 'map'
     *     });
     *
     * The above snippet creates a map using a {@link ol.layer.Tile} to display
     * {@link ol.source.OSM} OSM data and render it to a DOM element with the
     * id `map`.
     *
     * The constructor places a viewport container (with CSS class name
     * `ol-viewport`) in the target element (see `getViewport()`), and then two
     * further elements within the viewport: one with CSS class name
     * `ol-overlaycontainer-stopevent` for controls and some overlays, and one with
     * CSS class name `ol-overlaycontainer` for other overlays (see the `stopEvent`
     * option of {@link ol.Overlay} for the difference). The map itself is placed in
     * a further element within the viewport, either DOM or Canvas, depending on the
     * renderer.
     *
     * Layers are stored as a `ol.Collection` in layerGroups. A top-level group is
     * provided by the library. This is what is accessed by `getLayerGroup` and
     * `setLayerGroup`. Layers entered in the options are added to this group, and
     * `addLayer` and `removeLayer` change the layer collection in the group.
     * `getLayers` is a convenience function for `getLayerGroup().getLayers()`.
     * Note that `ol.layer.Group` is a subclass of `ol.layer.Base`, so layers
     * entered in the options or added with `addLayer` can be groups, which can
     * contain further groups, and so on.
     *
     * @param options Map options.
     * @fires ol.MapBrowserEvent
     * @fires ol.MapEvent
     * @fires ol.render.Event#postcompose
     * @fires ol.render.Event#precompose
     * @api stable
     */
    constructor(options: olx.MapOptions);

    /**
     * Add the given control to the map.
     * @param control Control.
     * @api stable
     */
    addControl(control: ol.control.Control): void;

    /**
     * Add the given interaction to the map.
     * @param interaction Interaction to add.
     * @api stable
     */
    addInteraction(interaction: ol.interaction.Interaction): void;

    /**
     * Adds the given layer to the top of this map. If you want to add a layer
     * elsewhere in the stack, use `getLayers()` and the methods available on
     * {@link ol.Collection}.
     * @param layer Layer.
     * @api stable
     */
    addLayer(layer: ol.layer.Base): void;

    /**
     * Add the given overlay to the map.
     * @param overlay Overlay.
     * @api stable
     */
    addOverlay(overlay: ol.Overlay): void;

    /**
     * Detect features that intersect a pixel on the viewport, and execute a
     * callback with each intersecting feature. Layers included in the detection can
     * be configured through `opt_layerFilter`.
     * @param pixel Pixel.
     * @param callback Feature callback. The callback will be
     *     called with two arguments. The first argument is one
     *     {@link ol.Feature feature} or
     *     {@link ol.render.Feature render feature} at the pixel, the second is
     *     the {@link ol.layer.Layer layer} of the feature and will be null for
     *     unmanaged layers. To stop detection, callback functions can return a
     *     truthy value.
     * @param opt_options Optional options.
     * @return Callback result, i.e. the return value of last
     * callback execution, or the first truthy callback return value.
     * @template T
     * @api stable
     */
    forEachFeatureAtPixel<T>(
        pixel: ol.Pixel,
        callback: (feature: ol.Feature | ol.render.Feature, layer: ol.layer.Layer) => T,
        opt_options?: olx.AtPixelOptions,
    ): T;

    /**
     * Get all features that intersect a pixel on the viewport.
     * @param pixel Pixel.
     * @param opt_options Optional options.
     * @return The detected features or null if none were found.
     * @api stable
     */
    getFeaturesAtPixel(
        pixel: ol.Pixel,
        opt_options?: olx.AtPixelOptions,
    ): Array<ol.Feature | ol.render.Feature> | null;

    /**
     * Detect layers that have a color value at a pixel on the viewport, and
     * execute a callback with each matching layer. Layers included in the
     * detection can be configured through `opt_layerFilter`.
     * @param pixel Pixel.
     * @param callback Layer
     *     callback. This callback will recieve two arguments: first is the
     *     {@link ol.layer.Layer layer}, second argument is {@link ol.Color}
     *     and will be null for layer types that do not currently support this
     *     argument. To stop detection callback functions can return a truthy value.
     * @param opt_this Value to use as `this` when executing `callback`.
     * @param opt_layerFilter Layer
     *     filter function. The filter function will receive one argument, the
     *     {@link ol.layer.Layer layer-candidate} and it should return a boolean
     *     value. Only layers which are visible and for which this function returns
     *     `true` will be tested for features. By default, all visible layers will
     *     be tested.
     * @param opt_this2 Value to use as `this` when executing `layerFilter`.
     * @return Callback result, i.e. the return value of last
     * callback execution, or the first truthy callback return value.
     * @template S,T,U
     * @api stable
     */
    forEachLayerAtPixel<T>(
        pixel: ol.Pixel,
        callback: (layer: ol.layer.Layer, color: ol.Color) => T,
        opt_this?: any,
        opt_layerFilter?: (layer: ol.layer.Layer) => boolean,
        opt_this2?: any,
    ): T;

    /**
     * Detect if features intersect a pixel on the viewport. Layers included in the
     * detection can be configured through `opt_layerFilter`.
     * @param pixel Pixel.
     * @param opt_options Optional options.
     * @return Is there a feature at the given pixel?
     * @api
     */
    hasFeatureAtPixel(
        pixel: ol.Pixel,
        opt_options?: olx.AtPixelOptions,
    ): boolean;

    /**
     * Returns the geographical coordinate for a browser event.
     * @param event Event.
     * @return Coordinate.
     * @api stable
     */
    getEventCoordinate(event: Event): ol.Coordinate;

    /**
     * Returns the map pixel position for a browser event relative to the viewport.
     * @param event Event.
     * @return Pixel.
     * @api stable
     */
    getEventPixel(event: Event): ol.Pixel;

    /**
     * Get the target in which this map is rendered.
     * Note that this returns what is entered as an option or in setTarget:
     * if that was an element, it returns an element; if a string, it returns that.
     * @return The Element or id of the Element that the
     *     map is rendered in.
     * @observable
     * @api stable
     */
    getTarget(): Element | string;

    /**
     * Get the DOM element into which this map is rendered. In contrast to
     * `getTarget` this method always return an `Element`, or `null` if the
     * map has no target.
     * @return The element that the map is rendered in.
     * @api
     */
    getTargetElement(): Element;

    /**
     * Get the coordinate for a given pixel.  This returns a coordinate in the
     * map view projection.
     * @param pixel Pixel position in the map viewport.
     * @return The coordinate for the pixel position.
     * @api stable
     */
    getCoordinateFromPixel(pixel: ol.Pixel): ol.Coordinate;

    /**
     * Get the map controls. Modifying this collection changes the controls
     * associated with the map.
     * @return Controls.
     * @api stable
     */
    getControls(): ol.Collection<ol.control.Control>;

    /**
     * Get the map overlays. Modifying this collection changes the overlays
     * associated with the map.
     * @return Overlays.
     * @api stable
     */
    getOverlays(): ol.Collection<ol.Overlay>;

    /**
     * Get an overlay by its identifier (the value returned by overlay.getId()).
     * Note that the index treats string and numeric identifiers as the same. So
     * `map.getOverlayById(2)` will return an overlay with id `'2'` or `2`.
     * @param id Overlay identifier.
     * @return Overlay.
     * @api
     */
    getOverlayById(id: string | number): ol.Overlay;

    /**
     * Get the map interactions. Modifying this collection changes the interactions
     * associated with the map.
     *
     * Interactions are used for e.g. pan, zoom and rotate.
     * @return Interactions.
     * @api stable
     */
    getInteractions(): ol.Collection<ol.interaction.Interaction>;

    /**
     * Get the layergroup associated with this map.
     * @return A layer group containing the layers in this map.
     * @observable
     * @api stable
     */
    getLayerGroup(): ol.layer.Group;

    /**
     * Get the collection of layers associated with this map.
     * @return Layers.
     * @api stable
     */
    getLayers(): ol.Collection<ol.layer.Base>;

    /**
     * Get the pixel for a coordinate.  This takes a coordinate in the map view
     * projection and returns the corresponding pixel.
     * @param coordinate A map coordinate.
     * @return A pixel position in the map viewport.
     * @api stable
     */
    getPixelFromCoordinate(coordinate: ol.Coordinate): ol.Pixel;

    /**
     * Get the size of this map.
     * @return The size in pixels of the map in the DOM.
     * @observable
     * @api stable
     */
    getSize(): ol.Size;

    /**
     * Get the view associated with this map. A view manages properties such as
     * center and resolution.
     * @return The view that controls this map.
     * @observable
     * @api stable
     */
    getView(): ol.View;

    /**
     * Get the element that serves as the map viewport.
     * @return Viewport.
     * @api stable
     */
    getViewport(): Element;

    /**
     * Requests an immediate render in a synchronous manner.
     * @api stable
     */
    renderSync(): void;

    /**
     * Request a map rendering (at the next animation frame).
     * @api stable
     */
    render(): void;

    /**
     * Remove the given control from the map.
     * @param control Control.
     * @return The removed control (or undefined
     *     if the control was not found).
     * @api stable
     */
    removeControl(control: ol.control.Control): ol.control.Control;

    /**
     * Remove the given interaction from the map.
     * @param interaction Interaction to remove.
     * @return The removed interaction (or
     *     undefined if the interaction was not found).
     * @api stable
     */
    removeInteraction(interaction: ol.interaction.Interaction): ol.interaction.Interaction;

    /**
     * Removes the given layer from the map.
     * @param layer Layer.
     * @return The removed layer (or undefined if the
     *     layer was not found).
     * @api stable
     */
    removeLayer(layer: ol.layer.Base): ol.layer.Base;

    /**
     * Remove the given overlay from the map.
     * @param overlay Overlay.
     * @return The removed overlay (or undefined
     *     if the overlay was not found).
     * @api stable
     */
    removeOverlay(overlay: ol.Overlay): ol.Overlay;

    /**
     * Sets the layergroup of this map.
     * @param layerGroup A layer group containing the layers in
     *     this map.
     * @observable
     * @api stable
     */
    setLayerGroup(layerGroup: ol.layer.Group): void;

    /**
     * Set the size of this map.
     * @param size The size in pixels of the map in the DOM.
     * @observable
     * @api
     */
    setSize(size: ol.Size): void;

    /**
     * Set the target element to render this map into.
     * @param target The Element or id of the Element
     *     that the map is rendered in.
     * @observable
     * @api stable
     */
    setTarget(target: Element | string): void;

    /**
     * Set the view for this map.
     * @param view The view that controls this map.
     * @observable
     * @api stable
     */
    setView(view: ol.View): void;

    /**
     * Force a recalculation of the map viewport size.  This should be called when
     * third-party code changes the size of the map viewport.
     * @api stable
     */
    updateSize(): void;
}

/**
 * @classdesc
 * Events emitted as map browser events are instances of this type.
 * See {@link ol.Map} for which events trigger a map browser event.
 *
 * @param type Event type.
 * @param map Map.
 * @param browserEvent Browser event.
 * @param opt_dragging Is the map currently being dragged?
 * @param opt_frameState Frame state.
 */
export class MapBrowserEvent extends MapEvent {
    /**
     * @classdesc
     * Events emitted as map browser events are instances of this type.
     * See {@link ol.Map} for which events trigger a map browser event.
     *
     * @param type Event type.
     * @param map Map.
     * @param browserEvent Browser event.
     * @param opt_dragging Is the map currently being dragged?
     * @param opt_frameState Frame state.
     */
    constructor(
        type: string,
        map: ol.Map,
        browserEvent: Event,
        opt_dragging?: boolean,
        opt_frameState?: olx.FrameState,
    );

    /**
     * The original browser event.
     * @api stable
     */
    originalEvent: Event;

    /**
     * The pixel of the original browser event.
     * @api stable
     */
    pixel: ol.Pixel;

    /**
     * The coordinate of the original browser event.
     * @api stable
     */
    coordinate: ol.Coordinate;

    /**
     * Indicates if the map is currently being dragged. Only set for
     * `POINTERDRAG` and `POINTERMOVE` events. Default is `false`.
     *
     * @api stable
     */
    dragging: boolean;
}

/**
 * @param type Event type.
 * @param map Map.
 * @param pointerEvent Pointer event.
 * @param opt_dragging Is the map currently being dragged?
 * @param opt_frameState Frame state.
 */
export class MapBrowserPointerEvent extends MapBrowserEvent {
    // /**
    //  * @param type Event type.
    //  * @param map Map.
    //  * @param pointerEvent Pointer event.
    //  * @param opt_dragging Is the map currently being dragged?
    //  * @param opt_frameState Frame state.
    //  */
    // constructor (type: string,
    //           map: ol.Map,
    //           pointerEvent: ol.pointer.PointerEvent,
    //           opt_dragging?: boolean,
    //           opt_frameState?: olx.FrameState)

    pointerEvent: ol.pointer.PointerEvent;
}

/**
 * @classdesc
 * Events emitted as map events are instances of this type.
 * See {@link ol.Map} for which events trigger a map event.
 *
 * @param type Event type.
 * @param map Map.
 * @param opt_frameState Frame state.
 */
export class MapEvent extends events.Event {
    /**
     * @classdesc
     * Events emitted as map events are instances of this type.
     * See {@link ol.Map} for which events trigger a map event.
     *
     * @param type Event type.
     * @param map Map.
     * @param opt_frameState Frame state.
     */
    constructor(type: string, map: ol.Map, opt_frameState?: olx.FrameState);

    /**
     * The map where the event occurred.
     * @api stable
     */
    map: ol.Map;

    /**
     * The frame state at the time of the event.
     * @api
     */
    frameState: olx.FrameState;
}

/**
 * @classdesc
 * Events emitted by {@link ol.Object} instances are instances of this type.
 *
 * @param type The event type.
 * @param key The property name.
 * @param oldValue The old value for `key`.
 */
export class ObjectEvent extends events.Event {
    /**
     * @classdesc
     * Events emitted by {@link ol.Object} instances are instances of this type.
     *
     * @param type The event type.
     * @param key The property name.
     * @param oldValue The old value for `key`.
     */
    constructor(type: string, key: string, oldValue: any);

    /**
     * The name of the property whose value is changing.
     * @api stable
     */
    key: string;

    /**
     * The old value. To get the new value use `e.target.get(e.key)` where
     * `e` is the event object.
     * @api stable
     */
    oldValue: any;
}

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Most non-trivial classes inherit from this.
 *
 * This extends {@link ol.Observable} with observable properties, where each
 * property is observable as well as the object as a whole.
 *
 * Classes that inherit from this have pre-defined properties, to which you can
 * add your owns. The pre-defined properties are listed in this documentation as
 * 'Observable Properties', and have their own accessors; for example,
 * {@link ol.Map} has a `target` property, accessed with `getTarget()`  and
 * changed with `setTarget()`. Not all properties are however settable. There
 * are also general-purpose accessors `get()` and `set()`. For example,
 * `get('target')` is equivalent to `getTarget()`.
 *
 * The `set` accessors trigger a change event, and you can monitor this by
 * registering a listener. For example, {@link ol.View} has a `center`
 * property, so `view.on('change:center', function(evt) {...});` would call the
 * function whenever the value of the center property changes. Within the
 * function, `evt.target` would be the view, so `evt.target.getCenter()` would
 * return the new center.
 *
 * You can add your own observable properties with
 * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
 * You can listen for changes on that property value with
 * `object.on('change:prop', listener)`. You can get a list of all
 * properties with {@link ol.Object#getProperties object.getProperties()}.
 *
 * Note that the observable properties are separate from standard JS properties.
 * You can, for example, give your map object a title with
 * `map.title='New title'` and with `map.set('title', 'Another title')`. The
 * first will be a `hasOwnProperty`; the second will appear in
 * `getProperties()`. Only the second is observable.
 *
 * Properties can be deleted by using the unset method. E.g.
 * object.unset('foo').
 *
 * @param opt_values An object with key-value pairs.
 * @fires ol.ObjectEvent
 * @api
 */
export class Object extends Observable {
    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Most non-trivial classes inherit from this.
     *
     * This extends {@link ol.Observable} with observable properties, where each
     * property is observable as well as the object as a whole.
     *
     * Classes that inherit from this have pre-defined properties, to which you can
     * add your owns. The pre-defined properties are listed in this documentation as
     * 'Observable Properties', and have their own accessors; for example,
     * {@link ol.Map} has a `target` property, accessed with `getTarget()`  and
     * changed with `setTarget()`. Not all properties are however settable. There
     * are also general-purpose accessors `get()` and `set()`. For example,
     * `get('target')` is equivalent to `getTarget()`.
     *
     * The `set` accessors trigger a change event, and you can monitor this by
     * registering a listener. For example, {@link ol.View} has a `center`
     * property, so `view.on('change:center', function(evt) {...});` would call the
     * function whenever the value of the center property changes. Within the
     * function, `evt.target` would be the view, so `evt.target.getCenter()` would
     * return the new center.
     *
     * You can add your own observable properties with
     * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
     * You can listen for changes on that property value with
     * `object.on('change:prop', listener)`. You can get a list of all
     * properties with {@link ol.Object#getProperties object.getProperties()}.
     *
     * Note that the observable properties are separate from standard JS properties.
     * You can, for example, give your map object a title with
     * `map.title='New title'` and with `map.set('title', 'Another title')`. The
     * first will be a `hasOwnProperty`; the second will appear in
     * `getProperties()`. Only the second is observable.
     *
     * Properties can be deleted by using the unset method. E.g.
     * object.unset('foo').
     *
     * @param opt_values An object with key-value pairs.
     * @fires ol.ObjectEvent
     * @api
     */
    constructor(opt_values?: { [k: string]: any });

    /**
     * Gets a value.
     * @param key Key name.
     * @return Value.
     * @api stable
     */
    get(key: string): any;

    /**
     * Get a list of object property names.
     * @return List of property names.
     * @api stable
     */
    getKeys(): string[];

    /**
     * Get an object of all property names and values.
     * @return Object.
     * @api stable
     */
    getProperties(): { [k: string]: any };

    /**
     * Sets a value.
     * @param key Key name.
     * @param value Value.
     * @param opt_silent Update without triggering an event.
     * @api stable
     */
    set(key: string, value: any, opt_silent?: boolean): void;

    /**
     * Sets a collection of key-value pairs.  Note that this changes any existing
     * properties and adds new ones (it does not remove any existing properties).
     * @param values Values.
     * @param opt_silent Update without triggering an event.
     * @api stable
     */
    setProperties(values: { [k: string]: any }, opt_silent?: boolean): void;

    /**
     * Unsets a property.
     * @param key Key name.
     * @param opt_silent Unset without triggering an event.
     * @api stable
     */
    unset(key: string, opt_silent?: boolean): void;
}

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * An event target providing convenient methods for listener registration
 * and unregistration. A generic `change` event is always available through
 * {@link ol.Observable#changed}.
 *
 * @fires ol.events.Event
 * @struct
 * @api stable
 */
export class Observable extends events.EventTarget {
    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * An event target providing convenient methods for listener registration
     * and unregistration. A generic `change` event is always available through
     * {@link ol.Observable#changed}.
     *
     * @fires ol.events.Event
     * @struct
     * @api stable
     */
    constructor();

    /**
     * Removes an event listener using the key returned by `on()` or `once()`.
     * @param key The key returned by `on()`
     *     or `once()` (or an array of keys).
     * @api stable
     */
    static unByKey(key: ol.EventsKey | ol.EventsKey[]): void;

    /**
     * Increases the revision counter and dispatches a 'change' event.
     * @api
     */
    changed(): void;

    /**
     * Dispatches an event and calls all listeners listening for events
     * of this type. The event parameter can either be a string or an
     * Object with a `type` property.
     *
     * @param event Event object.
     * @api
     */
    dispatchEvent(event: GlobalObject | ol.events.Event | string): void;

    /**
     * Get the version number for this object.  Each time the object is modified,
     * its version number will be incremented.
     * @return Revision.
     * @api
     */
    getRevision(): number;

    /**
     * Listen for a certain type of event.
     * @param type The event type or array of event types.
     * @param listener The listener function.
     * @param opt_this The object to use as `this` in `listener`.
     * @return Unique key for the listener. If
     *     called with an array of event types as the first argument, the return
     *     will be an array of keys.
     * @api stable
     */
    on(
        type: string | string[],
        listener: ol.EventsListenerFunctionType,
        opt_this?: GlobalObject,
    ): ol.EventsKey | ol.EventsKey[];

    /**
     * Listen once for a certain type of event.
     * @param type The event type or array of event types.
     * @param listener The listener function.
     * @param opt_this The object to use as `this` in `listener`.
     * @return Unique key for the listener. If
     *     called with an array of event types as the first argument, the return
     *     will be an array of keys.
     * @api stable
     */
    once(
        type: string | string[],
        listener: ol.EventsListenerFunctionType,
        opt_this?: GlobalObject,
    ): ol.EventsKey | ol.EventsKey[];

    /**
     * Unlisten for a certain type of event.
     * @param type The event type or array of event types.
     * @param listener The listener function.
     * @param opt_this The object which was used as `this` by the
     * `listener`.
     * @api stable
     */
    un(type: string | string[], listener: ol.EventsListenerFunctionType, opt_this?: GlobalObject): void;
}

/**
 * Overlay position: `'bottom-left'`, `'bottom-center'`,  `'bottom-right'`,
 * `'center-left'`, `'center-center'`, `'center-right'`, `'top-left'`,
 * `'top-center'`, `'top-right'`
 */
export type OverlayPositioning =
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "center-left"
    | "center-center"
    | "center-right"
    | "top-left"
    | "top-center"
    | "top-right";

/**
 * @classdesc
 * An element to be displayed over the map and attached to a single map
 * location.  Like {@link ol.control.Control}, Overlays are visible widgets.
 * Unlike Controls, they are not in a fixed position on the screen, but are tied
 * to a geographical coordinate, so panning the map will move an Overlay but not
 * a Control.
 *
 * Example:
 *
 *     var popup = new ol.Overlay({
 *       element: document.getElementById('popup')
 *     });
 *     popup.setPosition(coordinate);
 *     map.addOverlay(popup);
 *
 * @param options Overlay options.
 * @api stable
 */
export class Overlay extends Object {
    /**
     * @classdesc
     * An element to be displayed over the map and attached to a single map
     * location.  Like {@link ol.control.Control}, Overlays are visible widgets.
     * Unlike Controls, they are not in a fixed position on the screen, but are tied
     * to a geographical coordinate, so panning the map will move an Overlay but not
     * a Control.
     *
     * Example:
     *
     *     var popup = new ol.Overlay({
     *       element: document.getElementById('popup')
     *     });
     *     popup.setPosition(coordinate);
     *     map.addOverlay(popup);
     *
     * @param options Overlay options.
     * @api stable
     */
    constructor(options: olx.OverlayOptions);

    /**
     * Get the DOM element of this overlay.
     * @return The Element containing the overlay.
     * @observable
     * @api stable
     */
    getElement(): Element;

    /**
     * Get the overlay identifier which is set on constructor.
     * @return Id.
     * @api
     */
    getId(): number | string;

    /**
     * Get the map associated with this overlay.
     * @return The map that the overlay is part of.
     * @observable
     * @api stable
     */
    getMap(): ol.Map;

    /**
     * Get the offset of this overlay.
     * @return The offset.
     * @observable
     * @api stable
     */
    getOffset(): number[];

    /**
     * Get the current position of this overlay.
     * @return The spatial point that the overlay is
     *     anchored at.
     * @observable
     * @api stable
     */
    getPosition(): ol.Coordinate;

    /**
     * Get the current positioning of this overlay.
     * @return How the overlay is positioned
     *     relative to its point on the map.
     * @observable
     * @api stable
     */
    getPositioning(): ol.OverlayPositioning;

    /**
     * Set the DOM element to be associated with this overlay.
     * @param element The Element containing the overlay.
     * @observable
     * @api stable
     */
    setElement(element: Element): void;

    /**
     * Set the map to be associated with this overlay.
     * @param map The map that the overlay is part of.
     * @observable
     * @api stable
     */
    setMap(map: ol.Map): void;

    /**
     * Set the offset for this overlay.
     * @param offset Offset.
     * @observable
     * @api stable
     */
    setOffset(offset: number[]): void;

    /**
     * Set the position for this overlay. If the position is `undefined` the
     * overlay is hidden.
     * @param position The spatial point that the overlay
     *     is anchored at.
     * @observable
     * @api stable
     */
    setPosition(position: ol.Coordinate | undefined): void;

    /**
     * Set the positioning for this overlay.
     * @param positioning how the overlay is
     *     positioned relative to its point on the map.
     * @observable
     * @api stable
     */
    setPositioning(positioning: ol.OverlayPositioning): void;
}

export namespace pointer {
    /**
     * @classdesc
     * A class for pointer events.
     *
     * This class is used as an abstraction for mouse events,
     * touch events and even native pointer events.
     *
     * @param type The type of the event to create.
     * @param originalEvent The event.
     * @param opt_eventDict An optional dictionary of
     *    initial event properties.
     */
    class PointerEvent {
    }
}

/**
 * The ol.proj namespace stores:
 * * a list of {@link ol.proj.Projection}
 * objects, one for each projection supported by the application
 * * a list of transform functions needed to convert coordinates in one projection
 * into another.
 *
 * The static functions are the methods used to maintain these.
 * Each transform function can handle not only simple coordinate pairs, but also
 * large arrays of coordinates such as vector geometries.
 *
 * When loaded, the library adds projection objects for EPSG:4326 (WGS84
 * geographic coordinates) and EPSG:3857 (Web or Spherical Mercator, as used
 * for example by Bing Maps or OpenStreetMap), together with the relevant
 * transform functions.
 *
 * Additional transforms may be added by using the {@link http://proj4js.org/}
 * library (version 2.2 or later). You can use the full build supplied by
 * Proj4js, or create a custom build to support those projections you need; see
 * the Proj4js website for how to do this. You also need the Proj4js definitions
 * for the required projections. These definitions can be obtained from
 * {@link http://epsg.io/}, and are a JS function, so can be loaded in a script
 * tag (as in the examples) or pasted into your application.
 * The first time there is a request for a projection, either with a
 * {@link ol.proj.projectionLike} or directly with {@link ol.proj.get}, the
 * code will check if the Proj4js library and the necessary definition are
 * loaded; if so, it will register the appropriate {@link ol.proj.Projection}
 * object and add transform functions between the new projection and all the
 * existing ones. See examples/wms-image-custom-proj for an example of this.
 * Because the check for presence of the Proj4js library and the definition only
 * takes place on the first request for them, this means they can be loaded
 * dynamically as needed; for example, with user-supplied data where you don't
 * know in advance what projections are needed, you can initially load minimal
 * support and then load whichever are requested.
 *
 * Note that Proj4js does not support projection extents. If you want to add
 * one for creating default tile grids, you can add it after the Projection
 * object has been created with `setExtent`, for example,
 * `ol.proj.get('EPSG:1234').setExtent(extent)`.
 *
 * In addition to Proj4js support, any transform functions can be added with
 * {@link ol.proj.addCoordinateTransforms}. To use this, you must first create
 * a {@link ol.proj.Projection} object for the new projection and add it with
 * {@link ol.proj.addProjection}. You can then add the forward and inverse
 * functions with {@link ol.proj.addCoordinateTransforms}. See
 * examples/wms-custom-proj for an example of this.
 *
 * Note that if no transforms are needed and you only need to define the
 * projection, just add a {@link ol.proj.Projection} with
 * {@link ol.proj.addProjection}. See examples/wms-no-proj for an example of
 * this.
 */
export namespace proj {
    /**
     * Projection units: `'degrees'`, `'ft'`, `'m'`, `'pixels'`, `'tile-pixels'` or
     * `'us-ft'`.
     */
    type Units = "degrees" | "ft" | "m" | "pixels" | "tile-pixels" | "us-ft";

    /**
     * Meters per unit lookup table.
     * @api stable
     */
    const METERS_PER_UNIT: { [k: string]: number };

    /**
     * @classdesc
     * Projection definition class. One of these is created for each projection
     * supported in the application and stored in the {@link ol.proj} namespace.
     * You can use these in applications, but this is not required, as API params
     * and options use {@link ol.ProjectionLike} which means the simple string
     * code will suffice.
     *
     * You can use {@link ol.proj.get} to retrieve the object for a particular
     * projection.
     *
     * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
     * with the following aliases:
     * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
     *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
     *     http://www.opengis.net/gml/srs/epsg.xml#4326,
     *     urn:x-ogc:def:crs:EPSG:4326
     * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
     *     urn:ogc:def:crs:EPSG:6.18:3:3857,
     *     http://www.opengis.net/gml/srs/epsg.xml#3857
     *
     * If you use proj4js, aliases can be added using `proj4.defs()`; see
     * [documentation](https://github.com/proj4js/proj4js). To set an alternative
     * namespace for proj4, use {@link ol.proj.setProj4}.
     *
     * @param options Projection options.
     * @struct
     * @api stable
     */
    class Projection {
        /**
         * @classdesc
         * Projection definition class. One of these is created for each projection
         * supported in the application and stored in the {@link ol.proj} namespace.
         * You can use these in applications, but this is not required, as API params
         * and options use {@link ol.ProjectionLike} which means the simple string
         * code will suffice.
         *
         * You can use {@link ol.proj.get} to retrieve the object for a particular
         * projection.
         *
         * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
         * with the following aliases:
         * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
         *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
         *     http://www.opengis.net/gml/srs/epsg.xml#4326,
         *     urn:x-ogc:def:crs:EPSG:4326
         * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
         *     urn:ogc:def:crs:EPSG:6.18:3:3857,
         *     http://www.opengis.net/gml/srs/epsg.xml#3857
         *
         * If you use proj4js, aliases can be added using `proj4.defs()`; see
         * [documentation](https://github.com/proj4js/proj4js). To set an alternative
         * namespace for proj4, use {@link ol.proj.setProj4}.
         *
         * @param options Projection options.
         * @struct
         * @api stable
         */
        constructor(options: olx.ProjectionOptions);

        /**
         * Get the code for this projection, e.g. 'EPSG:4326'.
         * @return Code.
         * @api stable
         */
        getCode(): string;

        /**
         * Get the validity extent for this projection.
         * @return Extent.
         * @api stable
         */
        getExtent(): ol.Extent;

        /**
         * Get the units of this projection.
         * @return Units.
         * @api stable
         */
        getUnits(): Units;

        /**
         * Get the amount of meters per unit of this projection.  If the projection is
         * not configured with `metersPerUnit` or a units identifier, the return is
         * `undefined`.
         * @return Meters.
         * @api stable
         */
        getMetersPerUnit(): number;

        /**
         * Get the world extent for this projection.
         * @return Extent.
         * @api
         */
        getWorldExtent(): ol.Extent;

        /**
         * Is this projection a global projection which spans the whole world?
         * @return Whether the projection is global.
         * @api stable
         */
        isGlobal(): boolean;

        /**
         * Set if the projection is a global projection which spans the whole world
         * @param global Whether the projection is global.
         * @api stable
         */
        setGlobal(global: boolean): void;

        /**
         * Set the validity extent for this projection.
         * @param extent Extent.
         * @api stable
         */
        setExtent(extent: ol.Extent): void;

        /**
         * Set the world extent for this projection.
         * @param worldExtent World extent
         *     [minlon, minlat, maxlon, maxlat].
         * @api
         */
        setWorldExtent(worldExtent: ol.Extent): void;

        /**
         * Set the getPointResolution function for this projection.
         * @param func Function
         * @api
         */
        setGetPointResolution(func: (resolution: number, coords: ol.Coordinate) => number): void;

        /**
         * Get the resolution of the point in degrees or distance units.
         * For projections with degrees as the unit this will simply return the
         * provided resolution. The default for other projections is to estimate
         * the point resolution by transforming the 'point' pixel to EPSG:4326,
         * measuring its width and height on the normal sphere,
         * and taking the average of the width and height.
         * An alternative implementation may be given when constructing a
         * projection. For many local projections,
         * such a custom function will return the resolution unchanged.
         * @param resolution Resolution in projection units.
         * @param point Point.
         * @return Point resolution in projection units.
         * @api
         */
        getPointResolution(resolution: number, point: ol.Coordinate): number;
    }

    /**
     * Register proj4. If not explicitly registered, it will be assumed that
     * proj4js will be loaded in the global namespace. For example in a
     * browserify ES6 environment you could use:
     *
     *     import ol from 'openlayers';
     *     import proj4 from 'proj4';
     *     ol.proj.setProj4(proj4);
     *
     * @param proj4 Proj4.
     * @api
     */
    function setProj4(proj4: any): void;

    /**
     * Registers transformation functions that don't alter coordinates. Those allow
     * to transform between projections with equal meaning.
     *
     * @param projections Projections.
     * @api
     */
    function addEquivalentProjections(projections: Projection[]): void;

    /**
     * Add a Projection object to the list of supported projections that can be
     * looked up by their code.
     *
     * @param projection Projection instance.
     * @api stable
     */
    function addProjection(projection: Projection): void;

    /**
     * Registers coordinate transform functions to convert coordinates between the
     * source projection and the destination projection.
     * The forward and inverse functions convert coordinate pairs; this function
     * converts these into the functions used internally which also handle
     * extents and coordinate arrays.
     *
     * @param source Source projection.
     * @param destination Destination projection.
     * @param forward The forward transform
     *     function (that is, from the source projection to the destination
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @param inverse The inverse transform
     *     function (that is, from the destination projection to the source
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @api stable
     */
    function addCoordinateTransforms(
        source: ol.ProjectionLike,
        destination: ol.ProjectionLike,
        forward: (coords: ol.Coordinate) => ol.Coordinate,
        inverse: (coords: ol.Coordinate) => ol.Coordinate,
    ): void;

    /**
     * Transforms a coordinate from longitude/latitude to a different projection.
     * @param coordinate Coordinate as longitude and latitude, i.e.
     *     an array with longitude as 1st and latitude as 2nd element.
     * @param opt_projection Target projection. The
     *     default is Web Mercator, i.e. 'EPSG:3857'.
     * @return Coordinate projected to the target projection.
     * @api stable
     */
    function fromLonLat(coordinate: ol.Coordinate, opt_projection?: ol.ProjectionLike): ol.Coordinate;

    /**
     * Transforms a coordinate to longitude/latitude.
     * @param coordinate Projected coordinate.
     * @param opt_projection Projection of the coordinate.
     *     The default is Web Mercator, i.e. 'EPSG:3857'.
     * @return Coordinate as longitude and latitude, i.e. an array
     *     with longitude as 1st and latitude as 2nd element.
     * @api stable
     */
    function toLonLat(coordinate: ol.Coordinate, opt_projection?: ol.ProjectionLike): ol.Coordinate;

    /**
     * Fetches a Projection object for the code specified.
     *
     * @param projectionLike Either a code string which is
     *     a combination of authority and identifier such as "EPSG:4326", or an
     *     existing projection object, or undefined.
     * @return Projection object, or null if not in list.
     * @api stable
     */
    function get(projectionLike: ol.ProjectionLike): Projection;

    /**
     * Checks if two projections are the same, that is every coordinate in one
     * projection does represent the same geographic point as the same coordinate in
     * the other projection.
     *
     * @param projection1 Projection 1.
     * @param projection2 Projection 2.
     * @return Equivalent.
     * @api
     */
    function equivalent(projection1: Projection, projection2: Projection): boolean;

    /**
     * Given the projection-like objects, searches for a transformation
     * function to convert a coordinates array from the source projection to the
     * destination projection.
     *
     * @param source Source.
     * @param destination Destination.
     * @return Transform function.
     * @api stable
     */
    function getTransform(source: ol.ProjectionLike, destination: ol.ProjectionLike): ol.TransformFunction;

    /**
     * Transforms a coordinate from source projection to destination projection.
     * This returns a new coordinate (and does not modify the original).
     *
     * See {@link ol.proj.transformExtent} for extent transformation.
     * See the transform method of {@link ol.geom.Geometry} and its subclasses for
     * geometry transforms.
     *
     * @param coordinate Coordinate.
     * @param source Source projection-like.
     * @param destination Destination projection-like.
     */
    function transform(
        coordinate: ol.Coordinate,
        source: ol.ProjectionLike,
        destination: ol.ProjectionLike,
    ): ol.Coordinate;

    /**
     * Transforms an extent from source projection to destination projection.  This
     * returns a new extent (and does not modify the original).
     *
     * @param extent The extent to transform.
     * @param source Source projection-like.
     * @param destination Destination projection-like.
     * @return The transformed extent.
     * @api stable
     */
    function transformExtent(extent: ol.Extent, source: ol.ProjectionLike, destination: ol.ProjectionLike): ol.Extent;

    /**
     * Get the resolution of the point in degrees or distance units. For
     * projections with degrees as the unit this will simply return the
     * provided resolution. For other projections the point resolution is
     * estimated by transforming the 'point' pixel to EPSG:4326, measuring
     * its width and height on the normal sphere, and taking the average of
     * the width and height.
     * @param projection The projection.
     * @param resolution Nominal resolution in projection units.
     * @param point Point to find adjusted resolution at.
     * @return Point to find adjusted resolution at.
     */
    function getPointResolution(
        projection: Projection,
        resolution: number,
        point: ol.Coordinate,
    ): number;
}

export namespace render {
    namespace canvas {
        /**
         * @classdesc
         * A concrete subclass of {@link ol.render.VectorContext} that implements
         * direct rendering of features and geometries to an HTML5 Canvas context.
         * Instances of this class are created internally by the library and
         * provided to application code as vectorContext member of the
         * {@link ol.render.Event} object associated with postcompose, precompose and
         * render events emitted by layers and maps.
         *
         * @param context Context.
         * @param pixelRatio Pixel ratio.
         * @param extent Extent.
         * @param transform Transform.
         * @param viewRotation View rotation.
         * @struct
         */
        class Immediate extends VectorContext {
            /**
             * @classdesc
             * A concrete subclass of {@link ol.render.VectorContext} that implements
             * direct rendering of features and geometries to an HTML5 Canvas context.
             * Instances of this class are created internally by the library and
             * provided to application code as vectorContext member of the
             * {@link ol.render.Event} object associated with postcompose, precompose and
             * render events emitted by layers and maps.
             *
             * @param context Context.
             * @param pixelRatio Pixel ratio.
             * @param extent Extent.
             * @param transform Transform.
             * @param viewRotation View rotation.
             * @struct
             */
            constructor(
                context: CanvasRenderingContext2D,
                pixelRatio: number,
                extent: ol.Extent,
                transform: any,
                viewRotation: number,
            );

            /**
             * Render a circle geometry into the canvas.  Rendering is immediate and uses
             * the current fill and stroke styles.
             *
             * @param geometry Circle geometry.
             * @api
             */
            drawCircle(geometry: ol.geom.Circle): void;

            /**
             * Set the rendering style.  Note that since this is an immediate rendering API,
             * any `zIndex` on the provided style will be ignored.
             *
             * @param style The rendering style.
             * @api
             */
            setStyle(style: ol.style.Style): void;

            /**
             * Render a geometry into the canvas.  Call
             * {@link ol.render.canvas.Immediate#setStyle} first to set the rendering style.
             *
             * @param geometry The geometry to render.
             * @api
             */
            drawGeometry(geometry: ol.geom.Geometry | Feature): void;

            /**
             * Render a feature into the canvas.  Note that any `zIndex` on the provided
             * style will be ignored - features are rendered immediately in the order that
             * this method is called.  If you need `zIndex` support, you should be using an
             * {@link ol.layer.Vector} instead.
             *
             * @param feature Feature.
             * @param style Style.
             * @api
             */
            drawFeature(feature: ol.Feature, style: ol.style.Style): void;
        }
    }

    /**
     * @param type Type.
     * @param opt_vectorContext Vector context.
     * @param opt_frameState Frame state.
     * @param opt_context Context.
     * @param opt_glContext WebGL Context.
     */
    class Event extends events.Event {
        /**
         * @param type Type.
         * @param opt_vectorContext Vector context.
         * @param opt_frameState Frame state.
         * @param opt_context Context.
         * @param opt_glContext WebGL Context.
         */
        constructor(
            type: EventType,
            opt_vectorContext?: VectorContext,
            opt_frameState?: olx.FrameState,
            opt_context?: CanvasRenderingContext2D,
            opt_glContext?: any,
        );

        /**
         * For canvas, this is an instance of {@link ol.render.canvas.Immediate}.
         * @api
         */
        vectorContext: VectorContext;

        /**
         * An object representing the current render frame state.
         * @api
         */
        frameState: olx.FrameState;

        /**
         * Canvas context. Only available when a Canvas renderer is used, null
         * otherwise.
         * @api
         */
        context: CanvasRenderingContext2D;

        /**
         * WebGL context. Only available when a WebGL renderer is used, null
         * otherwise.
         * @api
         */
        glContext: any;
    }

    type EventType = string;

    /**
     * Lightweight, read-only, {@link ol.Feature} and {@link ol.geom.Geometry} like
     * structure, optimized for rendering and styling. Geometry access through the
     * API is limited to getting the type and extent of the geometry.
     *
     * @param type Geometry type.
     * @param flatCoordinates Flat coordinates. These always need
     *     to be right-handed for polygons.
     * @param ends Ends or Endss.
     * @param properties Properties.
     */
    class Feature {
        /**
         * Lightweight, read-only, {@link ol.Feature} and {@link ol.geom.Geometry} like
         * structure, optimized for rendering and styling. Geometry access through the
         * API is limited to getting the type and extent of the geometry.
         *
         * @param type Geometry type.
         * @param flatCoordinates Flat coordinates. These always need
         *     to be right-handed for polygons.
         * @param ends Ends or Endss.
         * @param properties Properties.
         */
        constructor(
            type: ol.geom.GeometryType,
            flatCoordinates: number[],
            ends: number[] | number[][],
            properties: { [k: string]: any },
        );

        /**
         * Get a feature property by its key.
         * @param key Key
         * @return Value for the requested key.
         * @api
         */
        get(key: string): any;

        /**
         * Get the extent of this feature's geometry.
         * @return Extent.
         * @api
         */
        getExtent(): ol.Extent;

        /**
         * Get the feature for working with its geometry.
         * @return Feature.
         * @api
         */
        getGeometry(): Feature;

        /**
         * Get the feature properties.
         * @return Feature properties.
         * @api
         */
        getProperties(): { [k: string]: any };

        /**
         * Get the type of this feature's geometry.
         * @return Geometry type.
         * @api
         */
        getType(): ol.geom.GeometryType;
    }

    /**
     * Context for drawing geometries.  A vector context is available on render
     * events and does not need to be constructed directly.
     * @struct
     * @api
     */
    /* tslint:disable-next-line:no-unnecessary-class */
    class VectorContext {
        /**
         * Context for drawing geometries.  A vector context is available on render
         * events and does not need to be constructed directly.
         * @struct
         * @api
         */
        constructor();
    }

    /**
     * Binds a Canvas Immediate API to a canvas context, to allow drawing geometries
     * to the context's canvas.
     *
     * The units for geometry coordinates are css pixels relative to the top left
     * corner of the canvas element.
     * ```js
     * var canvas = document.createElement('canvas');
     * var render = ol.render.toContext(canvas.getContext('2d'),
     *     { size: [100, 100] });
     * render.setFillStrokeStyle(new ol.style.Fill({ color: blue }));
     * render.drawPolygon(
     *     new ol.geom.Polygon([[[0, 0], [100, 100], [100, 0], [0, 0]]]));
     * ```
     *
     * @param context Canvas context.
     * @param opt_options Options.
     * @return Canvas Immediate.
     * @api
     */
    function toContext(context: CanvasRenderingContext2D, opt_options?: olx.render.ToContextOptions): canvas.Immediate;
}

/**
 * Available renderers: `'canvas'`, `'dom'` or `'webgl'`.
 */
export type RendererType = "canvas" | "dom" | "webgl";

/**
 * Raster operation type. Supported values are `'pixel'` and `'image'`.
 */
export type RasterOperationType = "pixel" | "image";

export namespace source {
    /**
     * @classdesc
     * Layer source for Bing Maps tile data.
     *
     * @param options Bing Maps options.
     * @api stable
     */
    class BingMaps extends TileImage {
        /**
         * @classdesc
         * Layer source for Bing Maps tile data.
         *
         * @param options Bing Maps options.
         * @api stable
         */
        constructor(options: olx.source.BingMapsOptions);

        /**
         * The attribution containing a link to the Microsoft® Bing™ Maps Platform APIs’
         * Terms Of Use.
         * @api
         */
        static TOS_ATTRIBUTION: ol.Attribution;
    }

    /**
     * @classdesc
     * Layer source for the CartoDB tiles.
     *
     * @param options CartoDB options.
     * @api
     */
    class CartoDB extends XYZ {
        /**
         * @classdesc
         * Layer source for the CartoDB tiles.
         *
         * @param options CartoDB options.
         * @api
         */
        constructor(options: olx.source.CartoDBOptions);

        /**
         * Returns the current config.
         * @return The current configuration.
         * @api
         */
        getConfig(): GlobalObject;

        /**
         * Updates the carto db config.
         * @param config a key-value lookup. Values will replace current values
         *     in the config.
         * @api
         */
        updateConfig(config: GlobalObject): void;

        /**
         * Sets the CartoDB config
         * @param config In the case of anonymous maps, a CartoDB configuration
         *     object.
         * If using named maps, a key-value lookup with the template parameters.
         * @api
         */
        setConfig(config: GlobalObject): void;
    }

    /**
     * @classdesc
     * Layer source to cluster vector data. Works out of the box with point
     * geometries. For other geometry types, or if not all geometries should be
     * considered for clustering, a custom `geometryFunction` can be defined.
     *
     * @param options Constructor options.
     * @api
     */
    class Cluster extends Vector {
        /**
         * @classdesc
         * Layer source to cluster vector data. Works out of the box with point
         * geometries. For other geometry types, or if not all geometries should be
         * considered for clustering, a custom `geometryFunction` can be defined.
         *
         * @param options Constructor options.
         * @api
         */
        constructor(options: olx.source.ClusterOptions);

        /**
         * Get a reference to the wrapped source.
         * @return Source.
         * @api
         */
        getSource(): Vector;

        /**
         * Get the distance in pixels between clusters.
         * @return The distance in pixels.
         * @api
         */
        getDistance(): number;

        /**
         * Set the distance in pixels between clusters.
         * @param distance The distance in pixels.
         * @api
         */
        setDistance(distance: number): void;
    }

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Base class for sources providing a single image.
     *
     * @param options Single image source options.
     * @api
     */
    class Image extends Source {
        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * Base class for sources providing a single image.
         *
         * @param options Single image source options.
         * @api
         */
        constructor(options: ol.SourceImageOptions);
    }

    /**
     * @classdesc
     * Events emitted by {@link ol.source.Image} instances are instances of this
     * type.
     *
     * @param type Type.
     * @param image The image.
     */
    class ImageEvent extends events.Event {
        /**
         * @classdesc
         * Events emitted by {@link ol.source.Image} instances are instances of this
         * type.
         *
         * @param type Type.
         * @param image The image.
         */
        constructor(type: string, image: ol.Image);

        /**
         * The image related to the event.
         * @api
         */
        image: ol.Image;
    }

    /**
     * @classdesc
     * Source for data from ArcGIS Rest services providing single, untiled images.
     * Useful when underlying map service has labels.
     *
     * If underlying map service is not using labels,
     * take advantage of ol image caching and use
     * {@link ol.source.TileArcGISRest} data source.
     *
     * @fires ol.source.ImageEvent
     * @param opt_options Image ArcGIS Rest Options.
     * @api
     */
    class ImageArcGISRest extends Image {
        /**
         * @classdesc
         * Source for data from ArcGIS Rest services providing single, untiled images.
         * Useful when underlying map service has labels.
         *
         * If underlying map service is not using labels,
         * take advantage of ol image caching and use
         * {@link ol.source.TileArcGISRest} data source.
         *
         * @fires ol.source.ImageEvent
         * @param opt_options Image ArcGIS Rest Options.
         * @api
         */
        constructor(opt_options?: olx.source.ImageArcGISRestOptions);

        /**
         * Get the user-provided params, i.e. those passed to the constructor through
         * the "params" option, and possibly updated using the updateParams method.
         * @return Params.
         * @api stable
         */
        getParams(): GlobalObject;

        /**
         * Return the image load function of the source.
         * @return The image load function.
         * @api
         */
        getImageLoadFunction(): ol.ImageLoadFunctionType;

        /**
         * Return the URL used for this ArcGIS source.
         * @return URL.
         * @api stable
         */
        getUrl(): string;

        /**
         * Set the image load function of the source.
         * @param imageLoadFunction Image load function.
         * @api
         */
        setImageLoadFunction(imageLoadFunction: ol.ImageLoadFunctionType): void;

        /**
         * Set the URL to use for requests.
         * @param url URL.
         * @api stable
         */
        setUrl(url: string): void;

        /**
         * Update the user-provided params.
         * @param params Params.
         * @api stable
         */
        updateParams(params: GlobalObject): void;
    }

    /**
     * @classdesc
     * Base class for image sources where a canvas element is the image.
     *
     * @param options Constructor options.
     * @api
     */
    class ImageCanvas extends Image {
        /**
         * @classdesc
         * Base class for image sources where a canvas element is the image.
         *
         * @param options Constructor options.
         * @api
         */
        constructor(options: olx.source.ImageCanvasOptions);
    }

    /**
     * @classdesc
     * Source for images from Mapguide servers
     *
     * @fires ol.source.ImageEvent
     * @param options Options.
     * @api stable
     */
    class ImageMapGuide extends Image {
        /**
         * @classdesc
         * Source for images from Mapguide servers
         *
         * @fires ol.source.ImageEvent
         * @param options Options.
         * @api stable
         */
        constructor(options: olx.source.ImageMapGuideOptions);

        /**
         * Get the user-provided params, i.e. those passed to the constructor through
         * the "params" option, and possibly updated using the updateParams method.
         * @return Params.
         * @api stable
         */
        getParams(): GlobalObject;

        /**
         * Return the image load function of the source.
         * @return The image load function.
         * @api
         */
        getImageLoadFunction(): ol.ImageLoadFunctionType;

        /**
         * Update the user-provided params.
         * @param params Params.
         * @api stable
         */
        updateParams(params: GlobalObject): void;

        /**
         * Set the image load function of the MapGuide source.
         * @param imageLoadFunction Image load function.
         * @api
         */
        setImageLoadFunction(imageLoadFunction: ol.ImageLoadFunctionType): void;
    }

    /**
     * @classdesc
     * A layer source for displaying a single, static image.
     *
     * @param options Options.
     * @api stable
     */
    class ImageStatic extends Image {
        /**
         * @classdesc
         * A layer source for displaying a single, static image.
         *
         * @param options Options.
         * @api stable
         */
        constructor(options: olx.source.ImageStaticOptions);
    }

    /**
     * @classdesc
     * An image source whose images are canvas elements into which vector features
     * read from a vector source (`ol.source.Vector`) are drawn. An
     * `ol.source.ImageVector` object is to be used as the `source` of an image
     * layer (`ol.layer.Image`). Image layers are rotated, scaled, and translated,
     * as opposed to being re-rendered, during animations and interactions. So, like
     * any other image layer, an image layer configured with an
     * `ol.source.ImageVector` will exhibit this behaviour. This is in contrast to a
     * vector layer, where vector features are re-drawn during animations and
     * interactions.
     *
     * @param options Options.
     * @api
     */
    class ImageVector extends ImageCanvas {
        /**
         * @classdesc
         * An image source whose images are canvas elements into which vector features
         * read from a vector source (`ol.source.Vector`) are drawn. An
         * `ol.source.ImageVector` object is to be used as the `source` of an image
         * layer (`ol.layer.Image`). Image layers are rotated, scaled, and translated,
         * as opposed to being re-rendered, during animations and interactions. So, like
         * any other image layer, an image layer configured with an
         * `ol.source.ImageVector` will exhibit this behaviour. This is in contrast to a
         * vector layer, where vector features are re-drawn during animations and
         * interactions.
         *
         * @param options Options.
         * @api
         */
        constructor(options: olx.source.ImageVectorOptions);

        /**
         * Get a reference to the wrapped source.
         * @return Source.
         * @api
         */
        getSource(): Vector;

        /**
         * Get the style for features.  This returns whatever was passed to the `style`
         * option at construction or to the `setStyle` method.
         * @return Layer style.
         * @api stable
         */
        getStyle(): ol.style.Style | ol.style.Style[] | ol.StyleFunction;

        /**
         * Get the style function.
         * @return Layer style function.
         * @api stable
         */
        getStyleFunction(): ol.StyleFunction | undefined;

        /**
         * Set the style for features.  This can be a single style object, an array
         * of styles, or a function that takes a feature and resolution and returns
         * an array of styles. If it is `undefined` the default style is used. If
         * it is `null` the layer has no style (a `null` style), so only features
         * that have their own styles will be rendered in the layer. See
         * {@link ol.style} for information on the default style.
         * @param style Layer style.
         * @api stable
         */
        setStyle(style: ol.style.Style | ol.style.Style[] | ol.StyleFunction | null | undefined): void;
    }

    /**
     * @classdesc
     * Source for WMS servers providing single, untiled images.
     *
     * @fires ol.source.ImageEvent
     * @param opt_options Options.
     * @api stable
     */
    class ImageWMS extends Image {
        /**
         * @classdesc
         * Source for WMS servers providing single, untiled images.
         *
         * @fires ol.source.ImageEvent
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.source.ImageWMSOptions);

        /**
         * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
         * projection. Return `undefined` if the GetFeatureInfo URL cannot be
         * constructed.
         * @param coordinate Coordinate.
         * @param resolution Resolution.
         * @param projection Projection.
         * @param params GetFeatureInfo params. `INFO_FORMAT` at least should
         *     be provided. If `QUERY_LAYERS` is not provided then the layers specified
         *     in the `LAYERS` parameter will be used. `VERSION` should not be
         *     specified here.
         * @return GetFeatureInfo URL.
         * @api stable
         */
        getGetFeatureInfoUrl(
            coordinate: ol.Coordinate,
            resolution: number,
            projection: ol.ProjectionLike,
            params: GlobalObject,
        ): string;

        /**
         * Get the user-provided params, i.e. those passed to the constructor through
         * the "params" option, and possibly updated using the updateParams method.
         * @return Params.
         * @api stable
         */
        getParams(): GlobalObject;

        /**
         * Return the image load function of the source.
         * @return The image load function.
         * @api
         */
        getImageLoadFunction(): ol.ImageLoadFunctionType;

        /**
         * Return the URL used for this WMS source.
         * @return URL.
         * @api stable
         */
        getUrl(): string;

        /**
         * Set the image load function of the source.
         * @param imageLoadFunction Image load function.
         * @api
         */
        setImageLoadFunction(imageLoadFunction: ol.ImageLoadFunctionType): void;

        /**
         * Set the URL to use for requests.
         * @param url URL.
         * @api stable
         */
        setUrl(url: string): void;

        /**
         * Update the user-provided params.
         * @param params Params.
         * @api stable
         */
        updateParams(params: GlobalObject): void;
    }

    /**
     * @classdesc
     * Layer source for the OpenStreetMap tile server.
     *
     * @param opt_options Open Street Map options.
     * @api stable
     */
    class OSM extends XYZ {
        /**
         * @classdesc
         * Layer source for the OpenStreetMap tile server.
         *
         * @param opt_options Open Street Map options.
         * @api stable
         */
        constructor(opt_options?: olx.source.OSMOptions);

        /**
         * The attribution containing a link to the OpenStreetMap Copyright and License
         * page.
         * @api
         */
        static ATTRIBUTION: ol.Attribution;
    }

    /**
     * @classdesc
     * A source that transforms data from any number of input sources using an array
     * of {@link ol.RasterOperation} functions to transform input pixel values into
     * output pixel values.
     *
     * @fires ol.source.RasterEvent
     * @param options Options.
     * @api
     */
    class Raster extends Image {
        /**
         * @classdesc
         * A source that transforms data from any number of input sources using an array
         * of {@link ol.RasterOperation} functions to transform input pixel values into
         * output pixel values.
         *
         * @fires ol.source.RasterEvent
         * @param options Options.
         * @api
         */
        constructor(options: olx.source.RasterOptions);

        /**
         * Set the operation.
         * @param operation New operation.
         * @param opt_lib Functions that will be available to operations run
         *     in a worker.
         * @api
         */
        setOperation(operation: ol.RasterOperation, opt_lib?: GlobalObject): void;
    }

    /**
     * @classdesc
     * Events emitted by {@link ol.source.Raster} instances are instances of this
     * type.
     *
     * @param type Type.
     * @param frameState The frame state.
     * @param data An object made available to operations.
     */
    class RasterEvent extends events.Event {
        /**
         * @classdesc
         * Events emitted by {@link ol.source.Raster} instances are instances of this
         * type.
         *
         * @param type Type.
         * @param frameState The frame state.
         * @param data An object made available to operations.
         */
        constructor(type: string, frameState: olx.FrameState, data: GlobalObject);

        /**
         * The raster extent.
         * @api
         */
        extent: ol.Extent;

        /**
         * The pixel resolution (map units per pixel).
         * @api
         */
        resolution: number;

        /**
         * An object made available to all operations.  This can be used by operations
         * as a storage object (e.g. for calculating statistics).
         * @api
         */
        data: GlobalObject;
    }

    /**
     * State of the source, one of 'undefined', 'loading', 'ready' or 'error'.
     */
    type State = "undefined" | "loading" | "ready" | "error";

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Base class for {@link ol.layer.Layer} sources.
     *
     * A generic `change` event is triggered when the state of the source changes.
     *
     * @param options Source options.
     * @api stable
     */
    class Source extends Object {
        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * Base class for {@link ol.layer.Layer} sources.
         *
         * A generic `change` event is triggered when the state of the source changes.
         *
         * @param options Source options.
         * @api stable
         */
        constructor(options: ol.SourceSourceOptions);

        /**
         * Get the attributions of the source.
         * @return Attributions.
         * @api stable
         */
        getAttributions(): ol.Attribution[];

        /**
         * Get the logo of the source.
         * @return Logo.
         * @api stable
         */
        getLogo(): string | olx.LogoOptions;

        /**
         * Get the projection of the source.
         * @return Projection.
         * @api
         */
        getProjection(): ol.proj.Projection;

        /**
         * Get the state of the source, see {@link ol.source.State} for possible states.
         * @return State.
         * @api
         */
        getState(): State;

        /**
         * Refreshes the source and finally dispatches a 'change' event.
         * @api
         */
        refresh(): void;

        /**
         * Set the attributions of the source.
         * @param attributions Attributions.
         *     Can be passed as `string`, `Array<string>`, `{@link ol.Attribution}`,
         *     `Array<{@link ol.Attribution}>` or `undefined`.
         * @api
         */
        setAttributions(attributions: ol.AttributionLike): void;
    }

    /**
     * @classdesc
     * Layer source for the Stamen tile server.
     *
     * @param options Stamen options.
     * @api stable
     */
    class Stamen extends XYZ {
        /**
         * @classdesc
         * Layer source for the Stamen tile server.
         *
         * @param options Stamen options.
         * @api stable
         */
        constructor(options: olx.source.StamenOptions);
    }

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Base class for sources providing images divided into a tile grid.
     *
     * @param options Tile source options.
     * @api
     */
    class Tile extends Source {
        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * Base class for sources providing images divided into a tile grid.
         *
         * @param options Tile source options.
         * @api
         */
        constructor(options: ol.SourceTileOptions);

        /**
         * Return the tile grid of the tile source.
         * @return Tile grid.
         * @api stable
         */
        getTileGrid(): ol.tilegrid.TileGrid;
    }

    /**
     * @classdesc
     * Events emitted by {@link ol.source.Tile} instances are instances of this
     * type.
     *
     * @param type Type.
     * @param tile The tile.
     */
    class TileEvent extends events.Event {
        /**
         * @classdesc
         * Events emitted by {@link ol.source.Tile} instances are instances of this
         * type.
         *
         * @param type Type.
         * @param tile The tile.
         */
        constructor(type: string, tile: ol.Tile);

        /**
         * The tile related to the event.
         * @api
         */
        tile: ol.Tile;
    }

    /**
     * @classdesc
     * Layer source for tile data from ArcGIS Rest services. Map and Image
     * Services are supported.
     *
     * For cached ArcGIS services, better performance is available using the
     * {@link ol.source.XYZ} data source.
     *
     * @param opt_options Tile ArcGIS Rest
     *     options.
     * @api
     */
    class TileArcGISRest extends TileImage {
        /**
         * @classdesc
         * Layer source for tile data from ArcGIS Rest services. Map and Image
         * Services are supported.
         *
         * For cached ArcGIS services, better performance is available using the
         * {@link ol.source.XYZ} data source.
         *
         * @param opt_options Tile ArcGIS Rest
         *     options.
         * @api
         */
        constructor(opt_options?: olx.source.TileArcGISRestOptions);

        /**
         * Get the user-provided params, i.e. those passed to the constructor through
         * the "params" option, and possibly updated using the updateParams method.
         * @return Params.
         * @api
         */
        getParams(): GlobalObject;

        /**
         * Update the user-provided params.
         * @param params Params.
         * @api stable
         */
        updateParams(params: GlobalObject): void;
    }

    /**
     * @classdesc
     * A pseudo tile source, which does not fetch tiles from a server, but renders
     * a grid outline for the tile grid/projection along with the coordinates for
     * each tile. See examples/canvas-tiles for an example.
     *
     * Uses Canvas context2d, so requires Canvas support.
     *
     * @param options Debug tile options.
     * @api
     */
    class TileDebug extends Tile {
        /**
         * @classdesc
         * A pseudo tile source, which does not fetch tiles from a server, but renders
         * a grid outline for the tile grid/projection along with the coordinates for
         * each tile. See examples/canvas-tiles for an example.
         *
         * Uses Canvas context2d, so requires Canvas support.
         *
         * @param options Debug tile options.
         * @api
         */
        constructor(options: olx.source.TileDebugOptions);
    }

    /**
     * @classdesc
     * Base class for sources providing images divided into a tile grid.
     *
     * @fires ol.source.TileEvent
     * @param options Image tile options.
     * @api
     */
    class TileImage extends UrlTile {
        /**
         * @classdesc
         * Base class for sources providing images divided into a tile grid.
         *
         * @fires ol.source.TileEvent
         * @param options Image tile options.
         * @api
         */
        constructor(options: olx.source.TileImageOptions);

        /**
         * Sets whether to render reprojection edges or not (usually for debugging).
         * @param render Render the edges.
         * @api
         */
        setRenderReprojectionEdges(render: boolean): void;

        /**
         * Sets the tile grid to use when reprojecting the tiles to the given
         * projection instead of the default tile grid for the projection.
         *
         * This can be useful when the default tile grid cannot be created
         * (e.g. projection has no extent defined) or
         * for optimization reasons (custom tile size, resolutions, ...).
         *
         * @param projection Projection.
         * @param tilegrid Tile grid to use for the projection.
         * @api
         */
        setTileGridForProjection(projection: ol.ProjectionLike, tilegrid: ol.tilegrid.TileGrid): void;
    }

    /**
     * @classdesc
     * Layer source for tile data in TileJSON format.
     *
     * @param options TileJSON options.
     * @api stable
     */
    class TileJSON extends TileImage {
        /**
         * @classdesc
         * Layer source for tile data in TileJSON format.
         *
         * @param options TileJSON options.
         * @api stable
         */
        constructor(options: olx.source.TileJSONOptions);

        /**
         * @return The tilejson object.
         * @api
         */
        getTileJSON(): TileJSON;
    }

    /**
     * @classdesc
     * Layer source for UTFGrid interaction data loaded from TileJSON format.
     *
     * @param options Source options.
     * @api
     */
    class TileUTFGrid extends Tile {
        /**
         * @classdesc
         * Layer source for UTFGrid interaction data loaded from TileJSON format.
         *
         * @param options Source options.
         * @api
         */
        constructor(options: olx.source.TileUTFGridOptions);

        /**
         * Return the template from TileJSON.
         * @return The template from TileJSON.
         * @api
         */
        getTemplate(): string;

        /**
         * Calls the callback (synchronously by default) with the available data
         * for given coordinate and resolution (or `null` if not yet loaded or
         * in case of an error).
         * @param coordinate Coordinate.
         * @param resolution Resolution.
         * @param callback Callback.
         * @param opt_this The object to use as `this` in the callback.
         * @param opt_request If `true` the callback is always async.
         *                               The tile data is requested if not yet loaded.
         * @template T
         * @api
         */
        forDataAtCoordinateAndResolution(
            coordinate: ol.Coordinate,
            resolution: number,
            callback: (d: any) => any,
            opt_this?: any,
            opt_request?: boolean,
        ): void;
    }

    /**
     * @classdesc
     * Layer source for tile data from WMS servers.
     *
     * @param opt_options Tile WMS options.
     * @api stable
     */
    class TileWMS extends TileImage {
        /**
         * @classdesc
         * Layer source for tile data from WMS servers.
         *
         * @param opt_options Tile WMS options.
         * @api stable
         */
        constructor(opt_options?: olx.source.TileWMSOptions);

        /**
         * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
         * projection. Return `undefined` if the GetFeatureInfo URL cannot be
         * constructed.
         * @param coordinate Coordinate.
         * @param resolution Resolution.
         * @param projection Projection.
         * @param params GetFeatureInfo params. `INFO_FORMAT` at least should
         *     be provided. If `QUERY_LAYERS` is not provided then the layers specified
         *     in the `LAYERS` parameter will be used. `VERSION` should not be
         *     specified here.
         * @return GetFeatureInfo URL.
         * @api stable
         */
        getGetFeatureInfoUrl(
            coordinate: ol.Coordinate,
            resolution: number,
            projection: ol.ProjectionLike,
            params: GlobalObject,
        ): string;

        /**
         * Get the user-provided params, i.e. those passed to the constructor through
         * the "params" option, and possibly updated using the updateParams method.
         * @return Params.
         * @api stable
         */
        getParams(): GlobalObject;

        /**
         * Update the user-provided params.
         * @param params Params.
         * @api stable
         */
        updateParams(params: GlobalObject): void;
    }

    /**
     * @classdesc
     * Base class for sources providing tiles divided into a tile grid over http.
     *
     * @fires ol.source.TileEvent
     * @param options Image tile options.
     */
    class UrlTile extends Tile {
        /**
         * @classdesc
         * Base class for sources providing tiles divided into a tile grid over http.
         *
         * @fires ol.source.TileEvent
         * @param options Image tile options.
         */
        constructor(options: ol.SourceUrlTileOptions);

        /**
         * Return the tile load function of the source.
         * @return TileLoadFunction
         * @api
         */
        getTileLoadFunction(): ol.TileLoadFunctionType;

        /**
         * Return the tile URL function of the source.
         * @return TileUrlFunction
         * @api
         */
        getTileUrlFunction(): ol.TileUrlFunctionType;

        /**
         * Return the URLs used for this source.
         * When a tileUrlFunction is used instead of url or urls,
         * null will be returned.
         * @return URLs.
         * @api
         */
        getUrls(): string[];

        /**
         * Set the tile load function of the source.
         * @param tileLoadFunction Tile load function.
         * @api
         */
        setTileLoadFunction(tileLoadFunction: ol.TileLoadFunctionType): void;

        /**
         * Set the tile URL function of the source.
         * @param tileUrlFunction Tile URL function.
         * @param opt_key Optional new tile key for the source.
         * @api
         */
        setTileUrlFunction(tileUrlFunction: ol.TileUrlFunctionType, opt_key?: string): void;

        /**
         * Set the URL to use for requests.
         * @param url URL.
         * @api stable
         */
        setUrl(url: string): void;

        /**
         * Set the URLs to use for requests.
         * @param urls URLs.
         * @api stable
         */
        setUrls(urls: string[]): void;
    }

    /**
     * @classdesc
     * Provides a source of features for vector layers. Vector features provided
     * by this source are suitable for editing. See {@link ol.source.VectorTile} for
     * vector data that is optimized for rendering.
     *
     * @fires ol.source.VectorEvent
     * @param opt_options Vector source options.
     * @api stable
     */
    class Vector extends Source {
        /**
         * @classdesc
         * Provides a source of features for vector layers. Vector features provided
         * by this source are suitable for editing. See {@link ol.source.VectorTile} for
         * vector data that is optimized for rendering.
         *
         * @fires ol.source.VectorEvent
         * @param opt_options Vector source options.
         * @api stable
         */
        constructor(opt_options?: olx.source.VectorOptions);

        /**
         * Add a single feature to the source.  If you want to add a batch of features
         * at once, call {@link ol.source.Vector#addFeatures source.addFeatures()}
         * instead.
         * @param feature Feature to add.
         * @api stable
         */
        addFeature(feature: ol.Feature): void;

        /**
         * Add a batch of features to the source.
         * @param features Features to add.
         * @api stable
         */
        addFeatures(features: ol.Feature[]): void;

        /**
         * Remove all features from the source.
         * @param events.
         * @api stable
         */
        clear(opt_fast?: boolean): void;

        /**
         * Iterate through all features on the source, calling the provided callback
         * with each one.  If the callback returns any "truthy" value, iteration will
         * stop and the function will return the same value.
         *
         * @param callback Called with each feature
         *     on the source.  Return a truthy value to stop iteration.
         * @param opt_this The object to use as `this` in the callback.
         * @return The return value from the last call to the callback.
         * @template T,S
         * @api stable
         */
        forEachFeature<S>(callback: (feature: ol.Feature) => S, opt_this?: any): S;

        /**
         * Iterate through all features whose bounding box intersects the provided
         * extent (note that the feature's geometry may not intersect the extent),
         * calling the callback with each feature.  If the callback returns a "truthy"
         * value, iteration will stop and the function will return the same value.
         *
         * If you are interested in features whose geometry intersects an extent, call
         * the {@link ol.source.Vector#forEachFeatureIntersectingExtent
         * source.forEachFeatureIntersectingExtent()} method instead.
         *
         * When `useSpatialIndex` is set to false, this method will loop through all
         * features, equivalent to {@link ol.source.Vector#forEachFeature}.
         *
         * @param extent Extent.
         * @param callback Called with each feature
         *     whose bounding box intersects the provided extent.
         * @param opt_this The object to use as `this` in the callback.
         * @return The return value from the last call to the callback.
         * @template T,S
         * @api
         */
        forEachFeatureInExtent<S>(extent: ol.Extent, callback: (feature: ol.Feature) => S, opt_this?: any): S;

        /**
         * Iterate through all features whose geometry intersects the provided extent,
         * calling the callback with each feature.  If the callback returns a "truthy"
         * value, iteration will stop and the function will return the same value.
         *
         * If you only want to test for bounding box intersection, call the
         * {@link ol.source.Vector#forEachFeatureInExtent
         * source.forEachFeatureInExtent()} method instead.
         *
         * @param extent Extent.
         * @param callback Called with each feature
         *     whose geometry intersects the provided extent.
         * @param opt_this The object to use as `this` in the callback.
         * @return The return value from the last call to the callback.
         * @template T,S
         * @api
         */
        forEachFeatureIntersectingExtent<S>(extent: ol.Extent, callback: (feature: ol.Feature) => S, opt_this?: any): S;

        /**
         * Get the features collection associated with this source. Will be `null`
         * unless the source was configured with `useSpatialIndex` set to `false`, or
         * with an {@link ol.Collection} as `features`.
         * @return The collection of features.
         * @api
         */
        getFeaturesCollection(): ol.Collection<ol.Feature>;

        /**
         * Get all features on the source.
         * @return Features.
         * @api stable
         */
        getFeatures(): ol.Feature[];

        /**
         * Get all features whose geometry intersects the provided coordinate.
         * @param coordinate Coordinate.
         * @return Features.
         * @api stable
         */
        getFeaturesAtCoordinate(coordinate: ol.Coordinate): ol.Feature[];

        /**
         * Get all features in the provided extent.  Note that this returns all features
         * whose bounding boxes intersect the given extent (so it may include features
         * whose geometries do not intersect the extent).
         *
         * This method is not available when the source is configured with
         * `useSpatialIndex` set to `false`.
         * @param extent Extent.
         * @return Features.
         * @api
         */
        getFeaturesInExtent(extent: ol.Extent): ol.Feature[];

        /**
         * Get the closest feature to the provided coordinate.
         *
         * This method is not available when the source is configured with
         * `useSpatialIndex` set to `false`.
         * @param coordinate Coordinate.
         * @param opt_filter Feature filter function.
         *     The filter function will receive one argument, the {@link ol.Feature feature}
         *     and it should return a boolean value. By default, no filtering is made.
         * @return Closest feature.
         * @api stable
         */
        getClosestFeatureToCoordinate(
            coordinate: ol.Coordinate,
            opt_filter?: (feature: ol.Feature) => boolean,
        ): ol.Feature;

        /**
         * Get the extent of the features currently in the source.
         *
         * This method is not available when the source is configured with
         * `useSpatialIndex` set to `false`.
         * @return Extent.
         * @api stable
         */
        getExtent(): ol.Extent;

        /**
         * Get a feature by its identifier (the value returned by feature.getId()).
         * Note that the index treats string and numeric identifiers as the same.  So
         * `source.getFeatureById(2)` will return a feature with id `'2'` or `2`.
         *
         * @param id Feature identifier.
         * @return The feature (or `null` if not found).
         * @api stable
         */
        getFeatureById(id: string | number): ol.Feature;

        /**
         * Get the format associated with this source.
         *
         * @return The feature format.
         * @api
         */
        getFormat(): ol.format.Feature;

        /**
         * Get the url associated with this source.
         *
         * @return The url.
         * @api
         */
        getUrl(): string | ol.FeatureUrlFunction;

        /**
         * Remove a single feature from the source.  If you want to remove all features
         * at once, use the {@link ol.source.Vector#clear source.clear()} method
         * instead.
         * @param feature Feature to remove.
         * @api stable
         */
        removeFeature(feature: ol.Feature): void;
    }

    /**
     * @classdesc
     * Events emitted by {@link ol.source.Vector} instances are instances of this
     * type.
     *
     * @param type Type.
     * @param opt_feature Feature.
     */
    class VectorEvent extends events.Event {
        /**
         * @classdesc
         * Events emitted by {@link ol.source.Vector} instances are instances of this
         * type.
         *
         * @param type Type.
         * @param opt_feature Feature.
         */
        constructor(type: string, opt_feature?: ol.Feature);

        /**
         * The feature being added or removed.
         * @api stable
         */
        feature: ol.Feature;
    }

    /**
     * @classdesc
     * Class for layer sources providing vector data divided into a tile grid, to be
     * used with {@link ol.layer.VectorTile}. Although this source receives tiles
     * with vector features from the server, it is not meant for feature editing.
     * Features are optimized for rendering, their geometries are clipped at or near
     * tile boundaries and simplified for a view resolution. See
     * {@link ol.source.Vector} for vector sources that are suitable for feature
     * editing.
     *
     * @fires ol.source.TileEvent
     * @param options Vector tile options.
     * @api
     */
    class VectorTile extends UrlTile {
        /**
         * @classdesc
         * Class for layer sources providing vector data divided into a tile grid, to be
         * used with {@link ol.layer.VectorTile}. Although this source receives tiles
         * with vector features from the server, it is not meant for feature editing.
         * Features are optimized for rendering, their geometries are clipped at or near
         * tile boundaries and simplified for a view resolution. See
         * {@link ol.source.Vector} for vector sources that are suitable for feature
         * editing.
         *
         * @fires ol.source.TileEvent
         * @param options Vector tile options.
         * @api
         */
        constructor(options: olx.source.VectorTileOptions);
    }

    namespace wms {
        /**
         * Available server types: `'carmentaserver'`, `'geoserver'`, `'mapserver'`,
         *     `'qgis'`. These are servers that have vendor parameters beyond the WMS
         *     specification that OpenLayers can make use of.
         */
        type ServerType = "carmentaserver" | "geoserver" | "mapserver" | "qgis";
    }

    /**
     * Request encoding. One of 'KVP', 'REST'.
     */
    type WMTSRequestEncoding = "KVP" | "REST";

    /**
     * @classdesc
     * Layer source for tile data from WMTS servers.
     *
     * @param options WMTS options.
     * @api stable
     */
    class WMTS extends TileImage {
        /**
         * @classdesc
         * Layer source for tile data from WMTS servers.
         *
         * @param options WMTS options.
         * @api stable
         */
        constructor(options: olx.source.WMTSOptions);

        /**
         * Get the dimensions, i.e. those passed to the constructor through the
         * "dimensions" option, and possibly updated using the updateDimensions
         * method.
         * @return Dimensions.
         * @api
         */
        getDimensions(): GlobalObject;

        /**
         * Return the image format of the WMTS source.
         * @return Format.
         * @api
         */
        getFormat(): string;

        /**
         * Return the layer of the WMTS source.
         * @return Layer.
         * @api
         */
        getLayer(): string;

        /**
         * Return the matrix set of the WMTS source.
         * @return MatrixSet.
         * @api
         */
        getMatrixSet(): string;

        /**
         * Return the request encoding, either "KVP" or "REST".
         * @return Request encoding.
         * @api
         */
        getRequestEncoding(): WMTSRequestEncoding;

        /**
         * Return the style of the WMTS source.
         * @return Style.
         * @api
         */
        getStyle(): string;

        /**
         * Return the version of the WMTS source.
         * @return Version.
         * @api
         */
        getVersion(): string;

        /**
         * Update the dimensions.
         * @param dimensions Dimensions.
         * @api
         */
        updateDimensions(dimensions: GlobalObject): void;

        /**
         * Generate source options from a capabilities object.
         * @param wmtsCap An object representing the capabilities document.
         * @param config Configuration properties for the layer.  Defaults for
         *                  the layer will apply if not provided.
         *
         * Required config properties:
         *  - layer - {string} The layer identifier.
         *
         * Optional config properties:
         *  - matrixSet - {string} The matrix set identifier, required if there is
         *       more than one matrix set in the layer capabilities.
         *  - projection - {string} The desired CRS when no matrixSet is specified.
         *       eg: "EPSG:3857". If the desired projection is not available,
         *       an error is thrown.
         *  - requestEncoding - {string} url encoding format for the layer. Default is
         *       the first tile url format found in the GetCapabilities response.
         *  - style - {string} The name of the style
         *  - format - {string} Image format for the layer. Default is the first
         *       format returned in the GetCapabilities response.
         * @return WMTS source options object.
         * @api
         */
        static optionsFromCapabilities(wmtsCap: GlobalObject, config: GlobalObject): olx.source.WMTSOptions;
    }

    /**
     * @classdesc
     * Layer source for tile data with URLs in a set XYZ format that are
     * defined in a URL template. By default, this follows the widely-used
     * Google grid where `x` 0 and `y` 0 are in the top left. Grids like
     * TMS where `x` 0 and `y` 0 are in the bottom left can be used by
     * using the `{-y}` placeholder in the URL template, so long as the
     * source does not have a custom tile grid. In this case,
     * {@link ol.source.TileImage} can be used with a `tileUrlFunction`
     * such as:
     *
     *  tileUrlFunction: function(coordinate) {
     *    return 'http://mapserver.com/' + coordinate[0] + '/' +
     *        coordinate[1] + '/' + coordinate[2] + '.png';
     *    }
     *
     * @param opt_options XYZ options.
     * @api stable
     */
    class XYZ extends TileImage {
        /**
         * @classdesc
         * Layer source for tile data with URLs in a set XYZ format that are
         * defined in a URL template. By default, this follows the widely-used
         * Google grid where `x` 0 and `y` 0 are in the top left. Grids like
         * TMS where `x` 0 and `y` 0 are in the bottom left can be used by
         * using the `{-y}` placeholder in the URL template, so long as the
         * source does not have a custom tile grid. In this case,
         * {@link ol.source.TileImage} can be used with a `tileUrlFunction`
         * such as:
         *
         *  tileUrlFunction: function(coordinate) {
         *    return 'http://mapserver.com/' + coordinate[0] + '/' +
         *        coordinate[1] + '/' + coordinate[2] + '.png';
         *    }
         *
         * @param opt_options XYZ options.
         * @api stable
         */
        constructor(opt_options?: olx.source.XYZOptions);
    }

    /**
     * @classdesc
     * Layer source for tile data in Zoomify format.
     *
     * @param opt_options Options.
     * @api stable
     */
    class Zoomify extends TileImage {
        /**
         * @classdesc
         * Layer source for tile data in Zoomify format.
         *
         * @param opt_options Options.
         * @api stable
         */
        constructor(opt_options?: olx.source.ZoomifyOptions);
    }
}

/**
 * Object literal with options for the {@link ol.Sphere.getLength} or
 * {@link ol.Sphere.getArea} functions.
 */
export interface SphereMetricOptions {
    /**
     * Projection of the geometry.  By default, the geometry is assumed to be in
     * EPSG:3857 (Web Mercator).
     */
    projection?: ol.proj.Projection | undefined;

    /**
     * Sphere radius.  By default, the radius of the earth is used (Clarke 1866
     * Authalic Sphere).
     * @api
     */
    radius?: number | undefined;
}

/**
 * @classdesc
 * Class to create objects that can be used with {@link
 * ol.geom.Polygon.circular}.
 *
 * For example to create a sphere whose radius is equal to the semi-major
 * axis of the WGS84 ellipsoid:
 *
 * ```js
 * var wgs84Sphere= new ol.Sphere(6378137);
 * ```
 *
 * @param radius Radius.
 * @api
 */
export class Sphere {
    /**
     * @classdesc
     * Class to create objects that can be used with {@link
     * ol.geom.Polygon.circular}.
     *
     * For example to create a sphere whose radius is equal to the semi-major
     * axis of the WGS84 ellipsoid:
     *
     * ```js
     * var wgs84Sphere= new ol.Sphere(6378137);
     * ```
     *
     * @param radius Radius.
     * @api
     */
    constructor(radius: number);

    /**
     * Returns the geodesic area for a list of coordinates.
     *
     * [Reference](http://trs-new.jpl.nasa.gov/dspace/handle/2014/40409)
     * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
     * Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
     * Laboratory, Pasadena, CA, June 2007
     *
     * @param coordinates List of coordinates of a linear
     * ring. If the ring is oriented clockwise, the area will be positive,
     * otherwise it will be negative.
     * @return Area.
     * @api
     */
    geodesicArea(coordinates: ol.Coordinate[]): number;

    /**
     * Returns the distance from c1 to c2 using the haversine formula.
     *
     * @param c1 Coordinate 1.
     * @param c2 Coordinate 2.
     * @return Haversine distance.
     * @api
     */
    haversineDistance(c1: ol.Coordinate, c2: ol.Coordinate): number;

    /**
     * Get the spherical area of a geometry.  This is the area (in meters) assuming
     * that polygon edges are segments of great circles on a sphere.
     * @param geometry A geometry.
     * @param opt_options Options for the area
     *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
     *     You can change this by providing a `projection` option.
     * @return The spherical area (in square meters).
     * @api
     */
    static getArea(geometry: geom.Geometry, opt_options?: SphereMetricOptions): number;

    /**
     * Get the spherical length of a geometry.  This length is the sum of the
     * great circle distances between coordinates.  For polygons, the length is
     * the sum of all rings.  For points, the length is zero.  For multi-part
     * geometries, the length is the sum of the length of each part.
     * @param geometry A geometry.
     * @param opt_options Options for the length
     *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
     *     You can change this by providing a `projection` option.
     * @return The spherical length (in meters).
     * @api
     */
    static getLength(geometry: geom.Geometry, opt_options?: SphereMetricOptions): number;
}

/**
 * Feature styles.
 *
 * If no style is defined, the following default style is used:
 * ```js
 *  var fill = new ol.style.Fill({
 *    color: 'rgba(255,255,255,0.4)'
 *  });
 *  var stroke = new ol.style.Stroke({
 *    color: '#3399CC',
 *    width: 1.25
 *  });
 *  var styles = [
 *    new ol.style.Style({
 *      image: new ol.style.Circle({
 *        fill: fill,
 *        stroke: stroke,
 *        radius: 5
 *      }),
 *      fill: fill,
 *      stroke: stroke
 *    })
 *  ];
 * ```
 *
 * A separate editing style has the following defaults:
 * ```js
 *  var white = [255, 255, 255, 1];
 *  var blue = [0, 153, 255, 1];
 *  var width = 3;
 *  styles[ol.geom.GeometryType.POLYGON] = [
 *    new ol.style.Style({
 *      fill: new ol.style.Fill({
 *        color: [255, 255, 255, 0.5]
 *      })
 *    })
 *  ];
 *  styles[ol.geom.GeometryType.MULTI_POLYGON] =
 *      styles[ol.geom.GeometryType.POLYGON];
 *  styles[ol.geom.GeometryType.LINE_STRING] = [
 *    new ol.style.Style({
 *      stroke: new ol.style.Stroke({
 *        color: white,
 *        width: width + 2
 *      })
 *    }),
 *    new ol.style.Style({
 *      stroke: new ol.style.Stroke({
 *        color: blue,
 *        width: width
 *      })
 *    })
 *  ];
 *  styles[ol.geom.GeometryType.MULTI_LINE_STRING] =
 *      styles[ol.geom.GeometryType.LINE_STRING];
 *  styles[ol.geom.GeometryType.POINT] = [
 *    new ol.style.Style({
 *      image: new ol.style.Circle({
 *        radius: width * 2,
 *        fill: new ol.style.Fill({
 *          color: blue
 *        }),
 *        stroke: new ol.style.Stroke({
 *          color: white,
 *          width: width / 2
 *        })
 *      }),
 *      zIndex: Infinity
 *    })
 *  ];
 *  styles[ol.geom.GeometryType.MULTI_POINT] =
 *      styles[ol.geom.GeometryType.POINT];
 *  styles[ol.geom.GeometryType.GEOMETRY_COLLECTION] =
 *      styles[ol.geom.GeometryType.POLYGON].concat(
 *          styles[ol.geom.GeometryType.POINT]
 *      );
 * ```
 */
export namespace style {
    /**
     * Manages the creation of image atlases.
     *
     * Images added to this manager will be inserted into an atlas, which
     * will be used for rendering.
     * The `size` given in the constructor is the size for the first
     * atlas. After that, when new atlases are created, they will have
     * twice the size as the latest atlas (until `maxSize` is reached).
     *
     * If an application uses many images or very large images, it is recommended
     * to set a higher `size` value to avoid the creation of too many atlases.
     *
     * @struct
     * @api
     * @param opt_options Options.
     */
    /* tslint:disable-next-line:no-unnecessary-class */
    class AtlasManager {
        /**
         * Manages the creation of image atlases.
         *
         * Images added to this manager will be inserted into an atlas, which
         * will be used for rendering.
         * The `size` given in the constructor is the size for the first
         * atlas. After that, when new atlases are created, they will have
         * twice the size as the latest atlas (until `maxSize` is reached).
         *
         * If an application uses many images or very large images, it is recommended
         * to set a higher `size` value to avoid the creation of too many atlases.
         *
         * @struct
         * @api
         * @param opt_options Options.
         */
        constructor(opt_options?: olx.style.AtlasManagerOptions);
    }

    /**
     * @classdesc
     * Set circle style for vector features.
     *
     * @param opt_options Options.
     * @api
     */
    class Circle extends Image {
        /**
         * @classdesc
         * Set circle style for vector features.
         *
         * @param opt_options Options.
         * @api
         */
        constructor(opt_options?: olx.style.CircleOptions);

        /**
         * Get the fill style for the circle.
         * @return Fill style.
         * @api
         */
        getFill(): Fill;

        /**
         * Get the image used to render the circle.
         * @param pixelRatio Pixel ratio.
         * @return Canvas element.
         * @api
         */
        getImage(pixelRatio: number): HTMLCanvasElement;

        /**
         * Get the circle radius.
         * @return Radius.
         * @api
         */
        getRadius(): number;

        /**
         * Get the stroke style for the circle.
         * @return Stroke style.
         * @api
         */
        getStroke(): Stroke;

        /**
         * Set the circle radius.
         *
         * @param radius Circle radius.
         * @api
         */
        setRadius(radius: number): void;
    }

    /**
     * @classdesc
     * Set fill style for vector features.
     *
     * @param opt_options Options.
     * @api
     */
    class Fill {
        /**
         * @classdesc
         * Set fill style for vector features.
         *
         * @param opt_options Options.
         * @api
         */
        constructor(opt_options?: olx.style.FillOptions);

        /**
         * Get the fill color.
         * @return Color.
         * @api
         */
        getColor(): ol.Color | ol.ColorLike;

        /**
         * Set the color.
         *
         * @param color Color.
         * @api
         */
        setColor(color: ol.Color | ol.ColorLike): void;
    }

    /**
     * Icon anchor units. One of 'fraction', 'pixels'.
     */
    type IconAnchorUnits = "fraction" | "pixels";

    /**
     * Icon origin. One of 'bottom-left', 'bottom-right', 'top-left', 'top-right'.
     */
    type IconOrigin = "bottom-left" | "bottom-right" | "top-left" | "top-right";

    /**
     * @classdesc
     * Set icon style for vector features.
     *
     * @param opt_options Options.
     * @api
     */
    class Icon extends Image {
        /**
         * @classdesc
         * Set icon style for vector features.
         *
         * @param opt_options Options.
         * @api
         */
        constructor(opt_options?: olx.style.IconOptions);

        /**
         * @inheritDoc
         * @api
         */
        getAnchor(): number[];

        /**
         * Get the image icon.
         * @param pixelRatio Pixel ratio.
         * @return Image or Canvas element.
         * @api
         */
        getImage(pixelRatio: number): Image | HTMLCanvasElement;

        /**
         * @inheritDoc
         * @api
         */
        getOrigin(): number[];

        /**
         * Get the image URL.
         * @return Image src.
         * @api
         */
        getSrc(): string;

        /**
         * @inheritDoc
         * @api
         */
        getSize(): ol.Size;

        /**
         * Load not yet loaded URI.
         * When rendering a feature with an icon style, the vector renderer will
         * automatically call this method. However, you might want to call this
         * method yourself for preloading or other purposes.
         * @api
         */
        load(): void;
    }

    /**
     * @classdesc
     * A base class used for creating subclasses and not instantiated in
     * apps. Base class for {@link ol.style.Icon}, {@link ol.style.Circle} and
     * {@link ol.style.RegularShape}.
     *
     * @param options Options.
     * @api
     */
    class Image {
        /**
         * @classdesc
         * A base class used for creating subclasses and not instantiated in
         * apps. Base class for {@link ol.style.Icon}, {@link ol.style.Circle} and
         * {@link ol.style.RegularShape}.
         *
         * @param options Options.
         * @api
         */
        constructor(options: ol.StyleImageOptions);

        /**
         * Get the symbolizer opacity.
         * @return Opacity.
         * @api
         */
        getOpacity(): number;

        /**
         * Determine whether the symbolizer rotates with the map.
         * @return Rotate with map.
         * @api
         */
        getRotateWithView(): boolean;

        /**
         * Get the symoblizer rotation.
         * @return Rotation.
         * @api
         */
        getRotation(): number;

        /**
         * Get the symbolizer scale.
         * @return Scale.
         * @api
         */
        getScale(): number;

        /**
         * Determine whether the symbolizer should be snapped to a pixel.
         * @return The symbolizer should snap to a pixel.
         * @api
         */
        getSnapToPixel(): boolean;

        /**
         * Set the opacity.
         *
         * @param opacity Opacity.
         * @api
         */
        setOpacity(opacity: number): void;

        /**
         * Set the rotation.
         *
         * @param rotation Rotation.
         * @api
         */
        setRotation(rotation: number): void;

        /**
         * Set the scale.
         *
         * @param scale Scale.
         * @api
         */
        setScale(scale: number): void;
    }

    /**
     * @classdesc
     * Set regular shape style for vector features. The resulting shape will be
     * a regular polygon when `radius` is provided, or a star when `radius1` and
     * `radius2` are provided.
     *
     * @param options Options.
     * @api
     */
    class RegularShape extends Image {
        /**
         * @classdesc
         * Set regular shape style for vector features. The resulting shape will be
         * a regular polygon when `radius` is provided, or a star when `radius1` and
         * `radius2` are provided.
         *
         * @param options Options.
         * @api
         */
        constructor(options: olx.style.RegularShapeOptions);

        /**
         * @inheritDoc
         * @api
         */
        getAnchor(): number[];

        /**
         * Get the angle used in generating the shape.
         * @return Shape's rotation in radians.
         * @api
         */
        getAngle(): number;

        /**
         * Get the fill style for the shape.
         * @return Fill style.
         * @api
         */
        getFill(): Fill;

        /**
         * @inheritDoc
         * @api
         */
        getImage(pixelRatio: number): HTMLCanvasElement | HTMLVideoElement | Image;

        /**
         * @inheritDoc
         * @api
         */
        getOrigin(): number[];

        /**
         * Get the number of points for generating the shape.
         * @return Number of points for stars and regular polygons.
         * @api
         */
        getPoints(): number;

        /**
         * Get the (primary) radius for the shape.
         * @return Radius.
         * @api
         */
        getRadius(): number;

        /**
         * Get the secondary radius for the shape.
         * @return Radius2.
         * @api
         */
        getRadius2(): number;

        /**
         * @inheritDoc
         * @api
         */
        getSize(): ol.Size;

        /**
         * Get the stroke style for the shape.
         * @return Stroke style.
         * @api
         */
        getStroke(): Stroke;
    }

    /**
     * @classdesc
     * Set stroke style for vector features.
     * Note that the defaults given are the Canvas defaults, which will be used if
     * option is not defined. The `get` functions return whatever was entered in
     * the options; they will not return the default.
     *
     * @param opt_options Options.
     * @api
     */
    class Stroke {
        /**
         * @classdesc
         * Set stroke style for vector features.
         * Note that the defaults given are the Canvas defaults, which will be used if
         * option is not defined. The `get` functions return whatever was entered in
         * the options; they will not return the default.
         *
         * @param opt_options Options.
         * @api
         */
        constructor(opt_options?: olx.style.StrokeOptions);

        /**
         * Get the stroke color.
         * @return Color.
         * @api
         */
        getColor(): ol.Color | string;

        /**
         * Get the line cap type for the stroke.
         * @return Line cap.
         * @api
         */
        getLineCap(): string;

        /**
         * Get the line dash style for the stroke.
         * @return Line dash.
         * @api
         */
        getLineDash(): number[];

        /**
         * Get the line dash offset style for the stroke.
         * @return Line dash offset
         * @api
         */
        getLineDashOffset(): number;

        /**
         * Get the line join type for the stroke.
         * @return Line join.
         * @api
         */
        getLineJoin(): string;

        /**
         * Get the miter limit for the stroke.
         * @return Miter limit.
         * @api
         */
        getMiterLimit(): number;

        /**
         * Get the stroke width.
         * @return Width.
         * @api
         */
        getWidth(): number;

        /**
         * Set the color.
         *
         * @param color Color.
         * @api
         */
        setColor(color: ol.Color | string): void;

        /**
         * Set the line cap.
         *
         * @param lineCap Line cap.
         * @api
         */
        setLineCap(lineCap: string): void;

        /**
         * Set the line dash.
         *
         * Please note that Internet Explorer 10 and lower [do not support][mdn] the
         * `setLineDash` method on the `CanvasRenderingContext2D` and therefore this
         * property will have no visual effect in these browsers.
         *
         * [mdn]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility
         *
         * @param lineDash Line dash.
         * @api
         */
        setLineDash(lineDash: number[]): void;

        /**
         * Set the line dash offset.
         *
         * @param lineDashOffset Line dash offset.
         * @api
         */
        setLineDashOffset(lineDashOffset: number): void;

        /**
         * Set the line join.
         *
         * @param lineJoin Line join.
         * @api
         */
        setLineJoin(lineJoin: string): void;

        /**
         * Set the miter limit.
         *
         * @param miterLimit Miter limit.
         * @api
         */
        setMiterLimit(miterLimit: number): void;

        /**
         * Set the width.
         *
         * @param width Width.
         * @api
         */
        setWidth(width: number): void;
    }

    /**
     * @classdesc
     * Container for vector feature rendering styles. Any changes made to the style
     * or its children through `set*()` methods will not take effect until the
     * feature or layer that uses the style is re-rendered.
     *
     * @struct
     * @param opt_options Style options.
     * @api
     */
    class Style {
        /**
         * @classdesc
         * Container for vector feature rendering styles. Any changes made to the style
         * or its children through `set*()` methods will not take effect until the
         * feature or layer that uses the style is re-rendered.
         *
         * @struct
         * @param opt_options Style options.
         * @api
         */
        constructor(opt_options?: olx.style.StyleOptions);

        /**
         * Clones the style.
         * @return The cloned style.
         * @api
         */
        clone(): Style;

        /**
         * Get the geometry to be rendered.
         * @return Feature property or geometry or function that returns the geometry that will
         *     be rendered with this style.
         * @api
         */
        getGeometry(): string | ol.geom.Geometry | ol.StyleGeometryFunction;

        /**
         * Get the function used to generate a geometry for rendering.
         * @return Function that is called with a feature
         * and returns the geometry to render instead of the feature's geometry.
         * @api
         */
        getGeometryFunction(): ol.StyleGeometryFunction;

        /**
         * Get the fill style.
         * @return Fill style.
         * @api
         */
        getFill(): Fill;

        /**
         * Get the image style.
         * @return Image style.
         * @api
         */
        getImage(): Image;

        /**
         * Get the stroke style.
         * @return Stroke style.
         * @api
         */
        getStroke(): Stroke;

        /**
         * Get the text style.
         * @return Text style.
         * @api
         */
        getText(): Text;

        /**
         * Get the z-index for the style.
         * @return ZIndex.
         * @api
         */
        getZIndex(): number;

        /**
         * Set the fill style.
         * @param fill Fill style.
         * @api
         */
        setFill(fill: Fill): void;

        /**
         * Set a geometry that is rendered instead of the feature's geometry.
         *
         * @param geometry
         *     Feature property or geometry or function returning a geometry to render
         *     for this style.
         * @api
         */
        setGeometry(geometry: string | ol.geom.Geometry | ol.StyleGeometryFunction): void;

        /**
         * Set the image style.
         * @param image Image style.
         * @api
         */
        setImage(image: Image): void;

        /**
         * Set the stroke style.
         * @param stroke Stroke style.
         * @api
         */
        setStroke(stroke: Stroke): void;

        /**
         * Set the text style.
         * @param text Text style.
         * @api
         */
        setText(text: Text): void;

        /**
         * Set the z-index.
         *
         * @param zIndex ZIndex.
         * @api
         */
        setZIndex(zIndex: number): void;
    }

    /**
     * @classdesc
     * Set text style for vector features.
     *
     * @param opt_options Options.
     * @api
     */
    class Text {
        /**
         * @classdesc
         * Set text style for vector features.
         *
         * @param opt_options Options.
         * @api
         */
        constructor(opt_options?: olx.style.TextOptions);

        /**
         * Get the font name.
         * @return Font.
         * @api
         */
        getFont(): string;

        /**
         * Get the x-offset for the text.
         * @return Horizontal text offset.
         * @api
         */
        getOffsetX(): number;

        /**
         * Get the y-offset for the text.
         * @return Vertical text offset.
         * @api
         */
        getOffsetY(): number;

        /**
         * Get the fill style for the text.
         * @return Fill style.
         * @api
         */
        getFill(): Fill;

        /**
         * Determine whether the text rotates with the map.
         * @return Rotate with map.
         * @api
         */
        getRotateWithView(): boolean;

        /**
         * Get the text rotation.
         * @return Rotation.
         * @api
         */
        getRotation(): number;

        /**
         * Get the text scale.
         * @return Scale.
         * @api
         */
        getScale(): number;

        /**
         * Get the stroke style for the text.
         * @return Stroke style.
         * @api
         */
        getStroke(): Stroke;

        /**
         * Get the text to be rendered.
         * @return Text.
         * @api
         */
        getText(): string;

        /**
         * Get the text alignment.
         * @return Text align.
         * @api
         */
        getTextAlign(): string;

        /**
         * Get the text baseline.
         * @return Text baseline.
         * @api
         */
        getTextBaseline(): string;

        /**
         * Set the font.
         *
         * @param font Font.
         * @api
         */
        setFont(font: string): void;

        /**
         * Set the x offset.
         *
         * @param offsetX Horizontal text offset.
         * @api
         */
        setOffsetX(offsetX: number): void;

        /**
         * Set the y offset.
         *
         * @param offsetY Vertical text offset.
         * @api
         */
        setOffsetY(offsetY: number): void;

        /**
         * Set the fill.
         *
         * @param fill Fill style.
         * @api
         */
        setFill(fill: Fill): void;

        /**
         * Set the rotation.
         *
         * @param rotation Rotation.
         * @api
         */
        setRotation(rotation: number): void;

        /**
         * Set the scale.
         *
         * @param scale Scale.
         * @api
         */
        setScale(scale: number): void;

        /**
         * Set the stroke.
         *
         * @param stroke Stroke style.
         * @api
         */
        setStroke(stroke: Stroke): void;

        /**
         * Set the text.
         *
         * @param text Text.
         * @api
         */
        setText(text: string): void;

        /**
         * Set the text alignment.
         *
         * @param textAlign Text align.
         * @api
         */
        setTextAlign(textAlign: string): void;

        /**
         * Set the text baseline.
         *
         * @param textBaseline Text baseline.
         * @api
         */
        setTextBaseline(textBaseline: string): void;
    }
}

/**
 * @classdesc
 * Base class for tiles.
 *
 * @param tileCoord Tile coordinate.
 * @param state State.
 */
export class Tile extends events.EventTarget {
    /**
     * @classdesc
     * Base class for tiles.
     *
     * @param tileCoord Tile coordinate.
     * @param state State.
     */
    constructor(tileCoord: ol.TileCoord, state: ol.Tile.State);

    /**
     * Get the tile coordinate for this tile.
     * @return The tile coordinate.
     * @api
     */
    getTileCoord(): ol.TileCoord;

    /**
     * Load the image or retry if loading previously failed.
     * Loading is taken care of by the tile queue, and calling this method is
     * only needed for preloading or for reloading in case of an error.
     * @api
     */
    load(): void;
}

export namespace Tile {
    type State = number;
}

export namespace tilegrid {
    /**
     * Creates a tile grid with a standard XYZ tiling scheme.
     * @param opt_options Tile grid options.
     * @return Tile grid instance.
     * @api
     */
    function createXYZ(opt_options?: olx.tilegrid.XYZOptions): TileGrid;

    /**
     * @classdesc
     * Base class for setting the grid pattern for sources accessing tiled-image
     * servers.
     *
     * @param options Tile grid options.
     * @struct
     * @api stable
     */
    class TileGrid {
        /**
         * @classdesc
         * Base class for setting the grid pattern for sources accessing tiled-image
         * servers.
         *
         * @param options Tile grid options.
         * @struct
         * @api stable
         */
        constructor(options: olx.tilegrid.TileGridOptions);

        /**
         * Call a function with each tile coordinate for a given extent and zoom level.
         *
         * @param extent Extent.
         * @param zoom Zoom level.
         * @param callback Function called with each tile coordinate.
         * @api
         */
        forEachTileCoord(extent: ol.Extent, zoom: number, callback: (coords: ol.TileCoord) => any): void;

        /**
         * Get the maximum zoom level for the grid.
         * @return Max zoom.
         * @api
         */
        getMaxZoom(): number;

        /**
         * Get the minimum zoom level for the grid.
         * @return Min zoom.
         * @api
         */
        getMinZoom(): number;

        /**
         * Get the origin for the grid at the given zoom level.
         * @param z Z.
         * @return Origin.
         * @api stable
         */
        getOrigin(z: number): ol.Coordinate;

        /**
         * Get the resolution for the given zoom level.
         * @param z Z.
         * @return Resolution.
         * @api stable
         */
        getResolution(z: number): number;

        /**
         * Get the list of resolutions for the tile grid.
         * @return Resolutions.
         * @api stable
         */
        getResolutions(): number[];

        /**
         * Get the extent of a tile coordinate.
         *
         * @param tileCoord Tile coordinate.
         * @param opt_extent Temporary extent object.
         * @return Extent.
         * @api
         */
        getTileCoordExtent(tileCoord: ol.TileCoord, opt_extent?: ol.Extent): ol.Extent;

        /**
         * Get the tile coordinate for the given map coordinate and resolution.  This
         * method considers that coordinates that intersect tile boundaries should be
         * assigned the higher tile coordinate.
         *
         * @param coordinate Coordinate.
         * @param resolution Resolution.
         * @param opt_tileCoord Destination ol.TileCoord object.
         * @return Tile coordinate.
         * @api
         */
        getTileCoordForCoordAndResolution(
            coordinate: ol.Coordinate,
            resolution: number,
            opt_tileCoord?: ol.TileCoord,
        ): ol.TileCoord;

        /**
         * Get a tile coordinate given a map coordinate and zoom level.
         * @param coordinate Coordinate.
         * @param z Zoom level.
         * @param opt_tileCoord Destination ol.TileCoord object.
         * @return Tile coordinate.
         * @api
         */
        getTileCoordForCoordAndZ(coordinate: ol.Coordinate, z: number, opt_tileCoord?: ol.TileCoord): ol.TileCoord;

        /**
         * Get the tile size for a zoom level. The type of the return value matches the
         * `tileSize` or `tileSizes` that the tile grid was configured with. To always
         * get an `ol.Size`, run the result through `ol.size.toSize()`.
         * @param z Z.
         * @return Tile size.
         * @api stable
         */
        getTileSize(z: number): number | ol.Size;

        /**
         * @param resolution Resolution.
         * @param opt_direction If 0, the nearest resolution will be used.
         *     If 1, the nearest lower resolution will be used. If -1, the nearest
         *     higher resolution will be used. Default is 0.
         * @return Z.
         * @api
         */
        getZForResolution(resolution: number, opt_direction?: number): number;
    }

    /**
     * @classdesc
     * Set the grid pattern for sources accessing WMTS tiled-image servers.
     *
     * @param options WMTS options.
     * @struct
     * @api
     */
    class WMTS extends TileGrid {
        /**
         * @classdesc
         * Set the grid pattern for sources accessing WMTS tiled-image servers.
         *
         * @param options WMTS options.
         * @struct
         * @api
         */
        constructor(options: olx.tilegrid.WMTSOptions);

        /**
         * Get the list of matrix identifiers.
         * @return MatrixIds.
         * @api
         */
        getMatrixIds(): string[];

        /**
         * Create a tile grid from a WMTS capabilities matrix set.
         * @param matrixSet An object representing a matrixSet in the
         *     capabilities document.
         * @param opt_extent An optional extent to restrict the tile
         *     ranges the server provides.
         * @return WMTS tileGrid instance.
         * @api
         */
        static createFromCapabilitiesMatrixSet(matrixSet: GlobalObject, opt_extent?: ol.Extent): WMTS;
    }
}

export type AttributionLike = string | string[] | ol.Attribution | ol.Attribution[];

/**
 * A function returning the canvas element (`{HTMLCanvasElement}`)
 * used by the source as an image. The arguments passed to the function are:
 * {@link ol.Extent} the image extent, `{number}` the image resolution,
 * `{number}` the device pixel ratio, {@link ol.Size} the image size, and
 * {@link ol.proj.Projection} the image projection. The canvas returned by
 * this function is cached by the source. The this keyword inside the function
 * references the {@link ol.source.ImageCanvas}.
 */
export type CanvasFunctionType = (
    extent: ol.Extent,
    resolution: number,
    pixelRatio: number,
    size: ol.Size,
    proj: ol.proj.Projection,
) => HTMLCanvasElement;

/**
 * A color represented as a short array [red, green, blue, alpha].
 * red, green, and blue should be integers in the range 0..255 inclusive.
 * alpha should be a float in the range 0..1 inclusive. If no alpha value is
 * given then `1` will be used.
 */
export type Color = [number, number, number, number] | Uint8Array | Uint8ClampedArray;

/**
 * A type accepted by CanvasRenderingContext2D.fillStyle.
 * Represents a color, pattern, or gradient.
 */
export type ColorLike = string | CanvasPattern | CanvasGradient;

/**
 * An array of numbers representing an xy coordinate. Example: `[16, 48]`.
 */
export type Coordinate = [number, number];

/**
 * A function that takes a {@link ol.Coordinate} and transforms it into a
 * `{string}`.
 */
export type CoordinateFormatType = (coords?: ol.Coordinate) => string;

/**
 * A function that takes a {@link ol.MapBrowserEvent} and two
 * {@link ol.Pixel}s and returns a `{boolean}`. If the condition is met,
 * true should be returned.
 */
export type DragBoxEndConditionType = (event: ol.MapBrowserEvent, pixel1: ol.Pixel, pixel2: ol.Pixel) => boolean;

/**
 * Function that takes coordinates and an optional existing geometry as
 * arguments, and returns a geometry. The optional existing geometry is the
 * geometry that is returned when the function is called without a second
 * argument.
 */
export type DrawGeometryFunctionType = (
    coords: ol.Coordinate | ol.Coordinate[] | ol.Coordinate[][],
    geo?: ol.geom.SimpleGeometry,
) => ol.geom.SimpleGeometry;

/**
 * A function that takes an {@link ol.MapBrowserEvent} and returns a
 * `{boolean}`. If the condition is met, true should be returned.
 */
export type EventsConditionType = (event: ol.MapBrowserEvent) => boolean;

/**
 * Key to use with {@link ol.Observable#unByKey}.
 */
export type EventsKey = GlobalObject;

/**
 * An array of numbers representing an extent: `[minx, miny, maxx, maxy]`.
 */
export type Extent = [number, number, number, number];

/**
 * {@link ol.source.Vector} sources use a function of this type to load
 * features.
 *
 * This function takes an {@link ol.Extent} representing the area to be loaded,
 * a `{number}` representing the resolution (map units per pixel) and an
 * {@link ol.proj.Projection} for the projection  as arguments. `this` within
 * the function is bound to the {@link ol.source.Vector} it's called from.
 *
 * The function is responsible for loading the features and adding them to the
 * source.
 */
export type FeatureLoader = (extent: ol.Extent, resolution: number, proj: ol.proj.Projection) => void;

/**
 * A function that returns an array of {@link ol.style.Style styles} given a
 * resolution. The `this` keyword inside the function references the
 * {@link ol.Feature} to be styled.
 */
export type FeatureStyleFunction = (resolution: number) => ol.style.Style | ol.style.Style[] | null;

/**
 * {@link ol.source.Vector} sources use a function of this type to get the url
 * to load features from.
 *
 * This function takes an {@link ol.Extent} representing the area to be loaded,
 * a `{number}` representing the resolution (map units per pixel) and an
 * {@link ol.proj.Projection} for the projection  as arguments and returns a
 * `{string}` representing the URL.
 */
export type FeatureUrlFunction = (extent: ol.Extent, resolution: number, proj: ol.proj.Projection) => string;

/**
 * A function that takes an {@link ol.Image} for the image and a `{string}` for
 * the src as arguments. It is supposed to make it so the underlying image
 * {@link ol.Image#getImage} is assigned the content specified by the src. If
 * not specified, the default is
 *
 *     function(image, src) {
 *       image.getImage().src = src;
 *     }
 *
 * Providing a custom `imageLoadFunction` can be useful to load images with
 * post requests or - in general - through XHR requests, where the src of the
 * image element would be set to a data URI when the content is loaded.
 */
export type ImageLoadFunctionType = (image: ol.Image, url: string) => void;

/**
 * A function that takes an {@link ol.Extent} and a resolution as arguments, and
 * returns an array of {@link ol.Extent} with the extents to load. Usually this
 * is one of the standard {@link ol.loadingstrategy} strategies.
 */
export type LoadingStrategy = (extent: ol.Extent, resolution: number) => ol.Extent[];

export type ModifyEventType = string;

/**
 * An array with two elements, representing a pixel. The first element is the
 * x-coordinate, the second the y-coordinate of the pixel.
 */
export type Pixel = [number, number];

/**
 * Function to perform manipulations before rendering. This function is called
 * with the {@link ol.Map} as first and an optional {@link olx.FrameState} as
 * second argument. Return `true` to keep this function for the next frame,
 * `false` to remove it.
 */
export type PreRenderFunction = (map: ol.Map, state?: olx.FrameState) => boolean;

/**
 * A projection as {@link ol.proj.Projection}, SRS identifier string or
 * undefined.
 */
export type ProjectionLike = ol.proj.Projection | string | undefined;

/**
 * A function that takes an array of input data, performs some operation, and
 * returns an array of ouput data.
 * For `pixel` type operations, the function will be called with an array of
 * pixels, where each pixel is an array of four numbers (`[r, g, b, a]`) in the
 * range of 0 - 255. It should return a single pixel array.
 * For `'image'` type operations, functions will be called with an array of
 * {@link ImageData https://developer.mozilla.org/en-US/docs/Web/API/ImageData}
 * and should return a single {@link ImageData
 * https://developer.mozilla.org/en-US/docs/Web/API/ImageData}.  The operations
 * are called with a second "data" argument, which can be used for storage.  The
 * data object is accessible from raster events, where it can be initialized in
 * "beforeoperations" and accessed again in "afteroperations".
 */
export type RasterOperation = (data: number[][] | ImageData[], obj: GlobalObject) => number[] | ImageData;

/**
 * A function that takes an {@link ol.Feature} or {@link ol.render.Feature} and
 * an {@link ol.layer.Layer} and returns `true` if the feature may be selected
 * or `false` otherwise.
 */
export type SelectFilterFunction = (feature: ol.Feature | ol.render.Feature, layer: ol.layer.Layer) => boolean;

/**
 * An array of numbers representing a size: `[width, height]`.
 */
export type Size = [number, number];

export interface SourceImageOptions {
    attributions?: ol.AttributionLike | undefined;
    extent?: (ol.Extent) | undefined;
    logo?: (string | olx.LogoOptions) | undefined;
    projection: ol.ProjectionLike;
    resolutions?: number[] | undefined;
    state?: ol.source.State | undefined;
}

export interface SourceSourceOptions {
    attributions?: ol.AttributionLike | undefined;
    logo?: (string | olx.LogoOptions) | undefined;
    projection: ol.ProjectionLike;
    state?: ol.source.State | undefined;
    wrapX?: boolean | undefined;
}

export interface SourceUrlTileOptions {
    attributions?: ol.AttributionLike | undefined;
    cacheSize?: number | undefined;
    extent?: ol.Extent | undefined;
    logo?: (string | olx.LogoOptions) | undefined;
    opaque?: boolean | undefined;
    projection: ol.ProjectionLike;
    state?: ol.source.State | undefined;
    tileGrid?: ol.tilegrid.TileGrid | undefined;
    tileLoadFunction: ol.TileLoadFunctionType;
    tilePixelRatio?: number | undefined;
    tileUrlFunction?: ol.TileUrlFunctionType | undefined;
    url?: string | undefined;
    urls?: string[] | undefined;
    wrapX?: boolean | undefined;
}

export interface SourceTileOptions {
    attributions?: ol.AttributionLike | undefined;
    cacheSize?: number | undefined;
    extent?: ol.Extent | undefined;
    logo?: (string | olx.LogoOptions) | undefined;
    opaque?: boolean | undefined;
    tilePixelRatio?: number | undefined;
    projection: ol.ProjectionLike;
    state?: ol.source.State | undefined;
    tileGrid?: ol.tilegrid.TileGrid | undefined;
    wrapX?: boolean | undefined;
}

export interface StyleImageOptions {
    opacity: number;
    rotateWithView: boolean;
    rotation: number;
    scale: number;
    snapToPixel: boolean;
}

/**
 * A function that takes an {@link ol.Feature} and a `{number}` representing
 * the view's resolution. The function should return a {@link ol.style.Style}
 * or an array of them. This way e.g. a vector layer can be styled.
 */
export type StyleFunction = (
    feature: ol.Feature | ol.render.Feature,
    resolution: number,
) => ol.style.Style | ol.style.Style[] | null;

/**
 * A function that takes an {@link ol.Feature} as argument and returns an
 * {@link ol.geom.Geometry} that will be rendered and styled for the feature.
 */
export type StyleGeometryFunction = (feature: ol.Feature | ol.render.Feature) => ol.geom.Geometry | ol.render.Feature;

/**
 * An array of three numbers representing the location of a tile in a tile
 * grid. The order is `z`, `x`, and `y`. `z` is the zoom level.
 */
export type TileCoord = [number, number, number];

/**
 * A function that takes an {@link ol.Tile} for the tile and a `{string}` for
 * the url as arguments.
 */
export type TileLoadFunctionType = (tile: ol.Tile, url: string) => void;

/**
 * {@link ol.source.Tile} sources use a function of this type to get the url
 * that provides a tile for a given tile coordinate.
 *
 * This function takes an {@link ol.TileCoord} for the tile coordinate, a
 * `{number}` representing the pixel ratio and an {@link ol.proj.Projection} for
 * the projection  as arguments and returns a `{string}` representing the tile
 * URL, or undefined if no tile should be requested for the passed tile
 * coordinate.
 */
export type TileUrlFunctionType = (coords: ol.TileCoord, pixelRatio: number, proj: ol.proj.Projection) => string;

/**
 * A transform function accepts an array of input coordinate values, an optional
 * output array, and an optional dimension (default should be 2).  The function
 * transforms the input coordinate values, populates the output array, and
 * returns the output array.
 */
export type TransformFunction = (array: number[], out?: number[], dimension?: number) => number[];

/**
 * Number of features; bounds/extent.
 */
export type WFSFeatureCollectionMetadata = GlobalObject;

/**
 * Total deleted; total inserted; total updated; array of insert ids.
 */
export type WFSTransactionResponse = GlobalObject;

/**
 * @param tileCoord Tile coordinate.
 * @param state State.
 * @param src Data source url.
 * @param format Feature format.
 * @param tileLoadFunction Tile load function.
 */
export class VectorTile extends Tile {
    /**
     * @param tileCoord Tile coordinate.
     * @param state State.
     * @param src Data source url.
     * @param format Feature format.
     * @param tileLoadFunction Tile load function.
     */
    constructor(
        tileCoord: ol.TileCoord,
        state: ol.Tile.State,
        src: string,
        format: ol.format.Feature,
        tileLoadFunction: ol.TileLoadFunctionType,
    );

    /**
     * Get the feature format assigned for reading this tile's features.
     * @return Feature format.
     * @api
     */
    getFormat(): ol.format.Feature;

    /**
     * @param features Features.
     * @api
     */
    setFeatures(features: ol.Feature[]): void;

    /**
     * Set the projection of the features that were added with {@link #setFeatures}.
     * @param projection Feature projection.
     * @api
     */
    setProjection(projection: ol.proj.Projection): void;

    /**
     * Set the feature loader for reading this tile's features.
     * @param loader Feature loader.
     * @api
     */
    setLoader(loader: ol.FeatureLoader): void;
}

/**
 * @classdesc
 * An ol.View object represents a simple 2D view of the map.
 *
 * This is the object to act upon to change the center, resolution,
 * and rotation of the map.
 *
 * ### The view states
 *
 * An `ol.View` is determined by three states: `center`, `resolution`,
 * and `rotation`. Each state has a corresponding getter and setter, e.g.
 * `getCenter` and `setCenter` for the `center` state.
 *
 * An `ol.View` has a `projection`. The projection determines the
 * coordinate system of the center, and its units determine the units of the
 * resolution (projection units per pixel). The default projection is
 * Spherical Mercator (EPSG:3857).
 *
 * ### The constraints
 *
 * `setCenter`, `setResolution` and `setRotation` can be used to change the
 * states of the view. Any value can be passed to the setters. And the value
 * that is passed to a setter will effectively be the value set in the view,
 * and returned by the corresponding getter.
 *
 * But an `ol.View` object also has a *resolution constraint*, a
 * *rotation constraint* and a *center constraint*.
 *
 * As said above, no constraints are applied when the setters are used to set
 * new states for the view. Applying constraints is done explicitly through
 * the use of the `constrain*` functions (`constrainResolution` and
 * `constrainRotation` and `constrainCenter`).
 *
 * The main users of the constraints are the interactions and the
 * controls. For example, double-clicking on the map changes the view to
 * the "next" resolution. And releasing the fingers after pinch-zooming
 * snaps to the closest resolution (with an animation).
 *
 * The *resolution constraint* snaps to specific resolutions. It is
 * determined by the following options: `resolutions`, `maxResolution`,
 * `maxZoom`, and `zoomFactor`. If `resolutions` is set, the other three
 * options are ignored. See documentation for each option for more
 * information.
 *
 * The *rotation constraint* snaps to specific angles. It is determined
 * by the following options: `enableRotation` and `constrainRotation`.
 * By default the rotation value is snapped to zero when approaching the
 * horizontal.
 *
 * The *center constraint* is determined by the `extent` option. By
 * default the center is not constrained at all.
 *
 * @param opt_options View options.
 * @api stable
 */
export class View extends Object {
    /**
     * @classdesc
     * An ol.View object represents a simple 2D view of the map.
     *
     * This is the object to act upon to change the center, resolution,
     * and rotation of the map.
     *
     * ### The view states
     *
     * An `ol.View` is determined by three states: `center`, `resolution`,
     * and `rotation`. Each state has a corresponding getter and setter, e.g.
     * `getCenter` and `setCenter` for the `center` state.
     *
     * An `ol.View` has a `projection`. The projection determines the
     * coordinate system of the center, and its units determine the units of the
     * resolution (projection units per pixel). The default projection is
     * Spherical Mercator (EPSG:3857).
     *
     * ### The constraints
     *
     * `setCenter`, `setResolution` and `setRotation` can be used to change the
     * states of the view. Any value can be passed to the setters. And the value
     * that is passed to a setter will effectively be the value set in the view,
     * and returned by the corresponding getter.
     *
     * But an `ol.View` object also has a *resolution constraint*, a
     * *rotation constraint* and a *center constraint*.
     *
     * As said above, no constraints are applied when the setters are used to set
     * new states for the view. Applying constraints is done explicitly through
     * the use of the `constrain*` functions (`constrainResolution` and
     * `constrainRotation` and `constrainCenter`).
     *
     * The main users of the constraints are the interactions and the
     * controls. For example, double-clicking on the map changes the view to
     * the "next" resolution. And releasing the fingers after pinch-zooming
     * snaps to the closest resolution (with an animation).
     *
     * The *resolution constraint* snaps to specific resolutions. It is
     * determined by the following options: `resolutions`, `maxResolution`,
     * `maxZoom`, and `zoomFactor`. If `resolutions` is set, the other three
     * options are ignored. See documentation for each option for more
     * information.
     *
     * The *rotation constraint* snaps to specific angles. It is determined
     * by the following options: `enableRotation` and `constrainRotation`.
     * By default the rotation value is snapped to zero when approaching the
     * horizontal.
     *
     * The *center constraint* is determined by the `extent` option. By
     * default the center is not constrained at all.
     *
     * @param opt_options View options.
     * @api stable
     */
    constructor(opt_options?: olx.ViewOptions);

    /**
     * Animate the view. The view's center, zoom (or resolution), and
     * rotation can be animated for smooth transitions between view states.
     * @param var_args Animation options.
     * @param restArgs
     * @api experimental
     */
    animate(...var_args: Array<olx.animation.AnimateOptions | olx.animation.AnimateCallback>): void;

    /**
     * Determine if the view is being animated.
     * @return The view is being animated.
     * @api
     */
    getAnimating(): boolean;

    /**
     * Determine if the user is interacting with the view, such as panning or zooming.
     * @return The view is being interacted with.
     * @api
     */
    getInteracting(): boolean;

    /**
     * Cancel any ongoing animations.
     * @api
     */
    cancelAnimations(): void;

    /**
     * Get the constrained center of this view.
     * @param center Center.
     * @return Constrained center.
     * @api
     */
    constrainCenter(center?: ol.Coordinate): ol.Coordinate;

    /**
     * Get the constrained resolution of this view.
     * @param resolution Resolution.
     * @param opt_delta Delta. Default is `0`.
     * @param opt_direction Direction. Default is `0`.
     * @return Constrained resolution.
     * @api
     */
    constrainResolution(resolution?: number, opt_delta?: number, opt_direction?: number): number;

    /**
     * Get the constrained rotation of this view.
     * @param rotation Rotation.
     * @param opt_delta Delta. Default is `0`.
     * @return Constrained rotation.
     * @api
     */
    constrainRotation(rotation?: number, opt_delta?: number): number;

    /**
     * Get the view center.
     * @return The center of the view.
     * @observable
     * @api stable
     */
    getCenter(): ol.Coordinate;

    /**
     * Calculate the extent for the current view state and the passed size.
     * The size is the pixel dimensions of the box into which the calculated extent
     * should fit. In most cases you want to get the extent of the entire map,
     * that is `map.getSize()`.
     * @param size Box pixel size.
     * @return Extent.
     * @api stable
     */
    calculateExtent(size?: ol.Size): ol.Extent;

    /**
     * Get the maximum resolution of the view.
     * @return The maximum resolution of the view.
     * @api
     */
    getMaxResolution(): number;

    /**
     * Get the minimum resolution of the view.
     * @return The minimum resolution of the view.
     * @api
     */
    getMinResolution(): number;

    /**
     * Get the maximum zoom level for the view.
     * @return The maximum zoom level.
     * @api
     */
    getMaxZoom(): number;

    /**
     * Set a new maximum zoom level for the view.
     * @param zoom The maximum zoom level.
     * @api stable
     */
    setMaxZoom(zoom: number): void;

    /**
     * Get the minimum zoom level for the view.
     * @return The minimum zoom level.
     * @api
     */
    getMinZoom(): number;

    /**
     * Set a new minimum zoom level for the view.
     * @param zoom The minimum zoom level.
     * @api stable
     */
    setMinZoom(zoom: number): void;

    /**
     * Get the view projection.
     * @return The projection of the view.
     * @api stable
     */
    getProjection(): ol.proj.Projection;

    /**
     * Get the view resolution.
     * @return The resolution of the view.
     * @observable
     * @api stable
     */
    getResolution(): number;

    /**
     * Get the resolutions for the view. This returns the array of resolutions
     * passed to the constructor of the {ol.View}, or undefined if none were given.
     * @return The resolutions of the view.
     * @api stable
     */
    getResolutions(): number[];

    /**
     * Get the resolution for a provided extent (in map units) and size (in pixels).
     * @param extent Extent.
     * @param opt_size Box pixel size.
     * @return The resolution at which the provided extent will render at
     *     the given size.
     * @api
     */
    getResolutionForExtent(extent: ol.Extent, opt_size?: ol.Size): number;

    /**
     * Get the view rotation.
     * @return The rotation of the view in radians.
     * @observable
     * @api stable
     */
    getRotation(): number;

    /**
     * Get the current zoom level.  If you configured your view with a resolutions
     * array (this is rare), this method may return non-integer zoom levels (so
     * the zoom level is not safe to use as an index into a resolutions array).
     * @return Zoom.
     * @api
     */
    getZoom(): number;

    /**
     * Get the zoom level for a resolution.
     * @param resolution The resolution.
     * @return The zoom level for the provided resolution.
     * @api
     */
    getZoomForResolution(resolution: number): number;

    /**
     * Get the resolution for a zoom level.
     * @param zoom Zoom level.
     * @return The view resolution for the provided zoom level.
     * @api
     */
    getResolutionForZoom(zoom: number): number;

    /**
     * Fit the given geometry or extent based on the given map size and border.
     * The size is pixel dimensions of the box to fit the extent into.
     * In most cases you will want to use the map size, that is `map.getSize()`.
     * Takes care of the map angle.
     * @param geometry Geometry.
     * @param opt_options Options.
     * @api
     */
    fit(geometryOrExtent: ol.geom.SimpleGeometry | ol.Extent, opt_options?: olx.view.FitOptions): void;

    /**
     * Center on coordinate and view position.
     * @param coordinate Coordinate.
     * @param size Box pixel size.
     * @param position Position on the view to center on.
     * @api
     */
    centerOn(coordinate: ol.Coordinate, size: ol.Size, position: ol.Pixel): void;

    /**
     * Rotate the view around a given coordinate.
     * @param rotation New rotation value for the view.
     * @param opt_anchor The rotation center.
     * @api stable
     */
    rotate(rotation: number, opt_anchor?: ol.Coordinate): void;

    /**
     * Set the center of the current view.
     * @param center The center of the view.
     * @observable
     * @api stable
     */
    setCenter(center: ol.Coordinate): void;

    /**
     * Set the resolution for this view.
     * @param resolution The resolution of the view.
     * @observable
     * @api stable
     */
    setResolution(resolution?: number): void;

    /**
     * Set the rotation for this view.
     * @param rotation The rotation of the view in radians.
     * @observable
     * @api stable
     */
    setRotation(rotation: number): void;

    /**
     * Zoom to a specific zoom level.
     * @param zoom Zoom level.
     * @api stable
     */
    setZoom(zoom: number): void;
}

export namespace olx {
    namespace animation {
        interface BounceOptions {
            resolution: number;
            start?: number | undefined;
            duration?: number | undefined;
            easing?: ((t: number) => number) | undefined;
        }

        interface PanOptions {
            source: ol.Coordinate;
            start?: number | undefined;
            duration?: number | undefined;
            easing?: ((t: number) => number) | undefined;
        }

        interface RotateOptions {
            rotation?: number | undefined;
            anchor?: ol.Coordinate | undefined;
            start?: number | undefined;
            duration?: number | undefined;
            easing?: ((t: number) => number) | undefined;
        }

        interface ZoomOptions {
            resolution: number;
            start?: number | undefined;
            duration?: number | undefined;
            easing?: ((t: number) => number) | undefined;
        }

        /**
         * Animation options. Multiple animations can be run in series by passing
         * multiple options objects. To run multiple animations in parallel, call
         * the method multiple times. An optional callback can be provided as a
         * final argument. The callback will be called with a boolean indicating
         * whether the animation completed without being cancelled.
         */
        interface AnimateOptions {
            center?: ol.Coordinate | undefined;
            zoom?: number | undefined;
            resolution?: number | undefined;
            rotation?: number | undefined;
            anchor?: ol.Coordinate | undefined;
            duration?: number | undefined;
            easing?: ((t: number) => number) | undefined;
        }

        type AnimateCallback = (completed: boolean) => void;
    }

    namespace control {
        interface AttributionOptions {
            className?: string | undefined;
            target?: Element | undefined;
            collapsible?: boolean | undefined;
            collapsed?: boolean | undefined;
            tipLabel?: string | undefined;
            label?: (string | Node) | undefined;
            collapseLabel?: (string | Node) | undefined;
            render?: ((event: ol.MapEvent) => any) | undefined;
        }

        interface ControlOptions {
            element?: Element | undefined;
            render?: ((event: ol.MapEvent) => any) | undefined;
            target?: (Element | string) | undefined;
        }

        interface DefaultsOptions {
            attribution?: boolean | undefined;
            attributionOptions?: AttributionOptions | undefined;
            rotate?: boolean | undefined;
            rotateOptions?: RotateOptions | undefined;
            zoom?: boolean | undefined;
            zoomOptions?: ZoomOptions | undefined;
        }

        interface FullScreenOptions {
            className?: string | undefined;
            label?: (string | Node) | undefined;
            labelActive?: (string | Node) | undefined;
            tipLabel?: string | undefined;
            keys?: boolean | undefined;
            target?: Element | undefined;
            source?: (Element | string) | undefined;
        }

        interface MousePositionOptions {
            className?: string | undefined;
            coordinateFormat?: ol.CoordinateFormatType | undefined;
            projection: ol.ProjectionLike;
            render?: ((event: ol.MapEvent) => any) | undefined;
            target?: Element | undefined;
            undefinedHTML?: string | undefined;
        }

        interface OverviewMapOptions {
            collapsed?: boolean | undefined;
            collapseLabel?: (string | Node) | undefined;
            collapsible?: boolean | undefined;
            label?: (string | Node) | undefined;
            layers?: (ol.layer.Layer[] | ol.Collection<ol.layer.Layer>) | undefined;
            render?: ((event: ol.MapEvent) => any) | undefined;
            target?: Element | undefined;
            tipLabel?: string | undefined;
            view?: ol.View | undefined;
        }

        interface ScaleLineOptions {
            className?: string | undefined;
            minWidth?: number | undefined;
            render?: ((event: ol.MapEvent) => any) | undefined;
            target?: Element | undefined;
            units?: (ol.control.ScaleLine.Units | string) | undefined;
        }

        interface RotateOptions {
            className?: string | undefined;
            label?: (string | Element) | undefined;
            tipLabel?: string | undefined;
            duration?: number | undefined;
            autoHide?: boolean | undefined;
            render?: ((event: ol.MapEvent) => any) | undefined;
            resetNorth?: (() => any) | undefined;
            target?: Element | undefined;
        }

        interface ZoomOptions {
            duration?: number | undefined;
            className?: string | undefined;
            zoomInLabel?: (string | Node) | undefined;
            zoomOutLabel?: (string | Node) | undefined;
            zoomInTipLabel?: string | undefined;
            zoomOutTipLabel?: string | undefined;
            delta?: number | undefined;
            target?: Element | undefined;
        }

        interface ZoomSliderOptions {
            className?: string | undefined;
            duration?: number | undefined;
            maxResolution?: number | undefined;
            minResolution?: number | undefined;
            render?: ((event: ol.MapEvent) => any) | undefined;
        }

        interface ZoomToExtentOptions {
            className?: string | undefined;
            target?: Element | undefined;
            label?: (string | Node) | undefined;
            tipLabel?: string | undefined;
            extent?: ol.Extent | undefined;
        }
    }

    namespace format {
        interface ReadOptions {
            dataProjection: ol.ProjectionLike;
            featureProjection: ol.ProjectionLike;
        }

        interface WriteOptions {
            dataProjection: ol.ProjectionLike;
            featureProjection?: ol.ProjectionLike | undefined;
            rightHanded?: boolean | undefined;
            decimals?: number | undefined;
        }

        interface GeoJSONOptions {
            defaultDataProjection: ol.ProjectionLike;
            featureProjection: ol.ProjectionLike;
            geometryName?: string | undefined;
        }

        interface EsriJSONOptions {
            geometryName?: string | undefined;
        }

        interface MVTOptions {
            featureClass?:
                | (
                    | ((geom: ol.geom.Geometry | { [k: string]: any }) => any)
                    | ((
                        geom: ol.geom.GeometryType,
                        arg2: number[],
                        arg3: number[] | number[][],
                        arg4: { [k: string]: any },
                    ) => any)
                )
                | undefined;
            geometryName?: string | undefined;
            layerName?: string | undefined;
            layers?: string[] | undefined;
        }

        interface PolylineOptions {
            factor?: number | undefined;
            geometryLayout?: ol.geom.GeometryLayout | undefined;
        }

        interface TopoJSONOptions {
            defaultDataProjection: ol.ProjectionLike;
        }

        /* tslint:disable-next-line:interface-name */
        interface IGCOptions {
            altitudeMode?: ol.format.IGCZ | undefined;
        }

        interface KMLOptions {
            extractStyles?: boolean | undefined;
            showPointNames?: boolean | undefined;
            defaultStyle?: ol.style.Style[] | undefined;
            writeStyles?: boolean | undefined;
        }

        interface GMLOptions {
            featureNS?: ({ [k: string]: string } | string) | undefined;
            featureType?: (string[] | string) | undefined;
            srsName: string;
            surface?: boolean | undefined;
            curve?: boolean | undefined;
            multiCurve?: boolean | undefined;
            multiSurface?: boolean | undefined;
            schemaLocation?: string | undefined;
        }

        interface GPXOptions {
            readExtensions?: ((feature: ol.Feature, node: Node) => any) | undefined;
        }

        interface WFSOptions {
            featureNS?: ({ [k: string]: string } | string) | undefined;
            featureType?: (string[] | string) | undefined;
            gmlFormat?: ol.format.GMLBase | undefined;
            schemaLocation?: string | undefined;
        }

        interface WFSWriteGetFeatureOptions {
            featureNS: string;
            featurePrefix: string;
            featureTypes: string[];
            srsName?: string | undefined;
            handle?: string | undefined;
            outputFormat?: string | undefined;
            maxFeatures?: number | undefined;
            geometryName?: string | undefined;
            propertyNames?: string[] | undefined;
            startIndex?: number | undefined;
            count?: number | undefined;
            bbox?: ol.Extent | undefined;
            filter?: ol.format.filter.Filter | undefined;
            resultType?: string | undefined;
        }

        interface WFSWriteTransactionOptions {
            featureNS: string;
            featurePrefix: string;
            featureType: string;
            srsName?: string | undefined;
            handle?: string | undefined;
            nativeElements: GlobalObject[];
            gmlOptions?: GMLOptions | undefined;
        }

        interface WKTOptions {
            splitCollection?: boolean | undefined;
        }

        interface WMSGetFeatureInfoOptions {
            layers?: string[] | undefined;
        }
    }

    namespace interaction {
        /**
         * Object literal with config options for interactions.
         */
        interface InteractionOptions {
            handleEvent: (event: ol.MapBrowserEvent) => boolean;
        }

        /**
         * Interactions for the map. Default is `true` for all options.
         */
        interface DefaultsOptions {
            altShiftDragRotate?: boolean | undefined;
            doubleClickZoom?: boolean | undefined;
            constrainResolution?: boolean | undefined;
            keyboard?: boolean | undefined;
            mouseWheelZoom?: boolean | undefined;
            shiftDragZoom?: boolean | undefined;
            dragPan?: boolean | undefined;
            pinchRotate?: boolean | undefined;
            pinchZoom?: boolean | undefined;
            zoomDelta?: number | undefined;
            zoomDuration?: number | undefined;
        }

        interface DoubleClickZoomOptions {
            duration?: number | undefined;
            delta?: number | undefined;
        }

        interface DragAndDropOptions {
            formatConstructors?: Array<typeof format.Feature> | undefined;
            projection: ol.ProjectionLike;
            target?: Element | undefined;
            source?: ol.source.Vector | undefined;
        }

        interface DragBoxOptions {
            className?: string | undefined;
            condition?: ol.EventsConditionType | undefined;
            minArea?: number | undefined;
            boxEndCondition?: ol.DragBoxEndConditionType | undefined;
        }

        interface DragPanOptions {
            condition?: ol.EventsConditionType | undefined;
            kinetic?: ol.Kinetic | undefined;
        }

        interface DragRotateAndZoomOptions {
            condition?: ol.EventsConditionType | undefined;
            duration?: number | undefined;
        }

        interface DragRotateOptions {
            condition?: ol.EventsConditionType | undefined;
            duration?: number | undefined;
        }

        interface DragZoomOptions {
            className?: string | undefined;
            condition?: ol.EventsConditionType | undefined;
            duration?: number | undefined;
            out?: boolean | undefined;
        }

        interface DrawOptions {
            clickTolerance?: number | undefined;
            features?: ol.Collection<ol.Feature> | undefined;
            source?: ol.source.Vector | undefined;
            snapTolerance?: number | undefined;
            type: ol.geom.GeometryType;
            maxPoints?: number | undefined;
            minPoints?: number | undefined;
            finishCondition?: ol.EventsConditionType | undefined;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction) | undefined;
            geometryFunction?: ol.DrawGeometryFunctionType | undefined;
            geometryName?: string | undefined;
            condition?: ol.EventsConditionType | undefined;
            freehandCondition?: ol.EventsConditionType | undefined;
            freehand?: boolean | undefined;
            wrapX?: boolean | undefined;
            stopClick?: boolean | undefined;
        }

        interface ExtentOptions {
            extent?: ol.Extent | undefined;
            boxStyle?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction) | undefined;
            pixelTolerance?: number | undefined;
            pointerStyle?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction) | undefined;
            wrapX?: boolean | undefined;
        }

        interface TranslateOptions {
            features?: ol.Collection<ol.Feature> | undefined;
            layers?: (ol.layer.Layer[] | ((layer: ol.layer.Layer) => boolean)) | undefined;
        }

        interface KeyboardPanOptions {
            condition?: ol.EventsConditionType | undefined;
            duration?: number | undefined;
            pixelDelta?: number | undefined;
        }

        interface KeyboardZoomOptions {
            duration?: number | undefined;
            condition?: ol.EventsConditionType | undefined;
            delta?: number | undefined;
        }

        interface ModifyOptions {
            condition?: ol.EventsConditionType | undefined;
            deleteCondition?: ol.EventsConditionType | undefined;
            insertVertexCondition?: ol.EventsConditionType | undefined;
            pixelTolerance?: number | undefined;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction) | undefined;
            features?: ol.Collection<ol.Feature> | undefined;
            wrapX?: boolean | undefined;
            source?: ol.source.Vector | undefined;
        }

        interface MouseWheelZoomOptions {
            constrainResolution?: boolean | undefined;
            duration?: number | undefined;
            timeout?: number | undefined;
            useAnchor?: boolean | undefined;
        }

        interface PinchRotateOptions {
            duration?: number | undefined;
            threshold?: number | undefined;
        }

        interface PinchZoomOptions {
            constrainResolution?: boolean | undefined;
            duration?: number | undefined;
        }

        interface PointerOptions {
            handleDownEvent?: ((event: ol.MapBrowserPointerEvent) => boolean) | undefined;
            handleDragEvent?: ((event: ol.MapBrowserPointerEvent) => boolean) | undefined;
            handleEvent?: ((event: ol.MapBrowserPointerEvent) => boolean) | undefined;
            handleMoveEvent?: ((event: ol.MapBrowserPointerEvent) => boolean) | undefined;
            handleUpEvent?: ((event: ol.MapBrowserPointerEvent) => boolean) | undefined;
        }

        interface SelectOptions {
            addCondition?: ol.EventsConditionType | undefined;
            condition?: ol.EventsConditionType | undefined;
            layers?: (ol.layer.Layer[] | ((layer: ol.layer.Layer) => boolean)) | undefined;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction) | undefined;
            removeCondition?: ol.EventsConditionType | undefined;
            toggleCondition?: ol.EventsConditionType | undefined;
            multi?: boolean | undefined;
            features?: ol.Collection<ol.Feature> | undefined;
            filter?: ol.SelectFilterFunction | undefined;
            wrapX?: boolean | undefined;
            hitTolerance?: number | undefined;
        }

        /**
         * Options for snap
         */
        interface SnapOptions {
            features?: ol.Collection<ol.Feature> | undefined;
            edge?: boolean | undefined;
            vertex?: boolean | undefined;
            pixelTolerance?: number | undefined;
            source?: ol.source.Vector | undefined;
        }
    }

    namespace layer {
        interface BaseOptions {
            opacity?: number | undefined;
            visible?: boolean | undefined;
            extent?: ol.Extent | undefined;
            zIndex?: number | undefined;
            minResolution?: number | undefined;
            maxResolution?: number | undefined;
        }

        interface LayerOptions {
            opacity?: number | undefined;
            source?: ol.source.Source | undefined;
            visible?: boolean | undefined;
            extent?: ol.Extent | undefined;
            zIndex?: number | undefined;
            minResolution?: number | undefined;
            maxResolution?: number | undefined;
        }

        interface GroupOptions {
            opacity?: number | undefined;
            visible?: boolean | undefined;
            extent?: ol.Extent | undefined;
            zIndex?: number | undefined;
            minResolution?: number | undefined;
            maxResolution?: number | undefined;
            layers?: (ol.layer.Base[] | ol.Collection<ol.layer.Base>) | undefined;
        }

        interface HeatmapOptions {
            gradient?: string[] | undefined;
            radius?: number | undefined;
            blur?: number | undefined;
            shadow?: number | undefined;
            weight: string | ((feature: ol.Feature) => number);
            extent?: ol.Extent | undefined;
            minResolution?: number | undefined;
            maxResolution?: number | undefined;
            opacity?: number | undefined;
            source: ol.source.Vector;
            visible?: boolean | undefined;
            zIndex?: number | undefined;
        }

        interface ImageOptions {
            opacity?: number | undefined;
            source: ol.source.Image;
            map?: ol.Map | undefined;
            visible?: boolean | undefined;
            extent?: ol.Extent | undefined;
            minResolution?: number | undefined;
            maxResolution?: number | undefined;
            zIndex?: number | undefined;
        }

        interface TileOptions {
            opacity?: number | undefined;
            preload?: number | undefined;
            source: ol.source.Tile;
            map?: ol.Map | undefined;
            visible?: boolean | undefined;
            extent?: ol.Extent | undefined;
            minResolution?: number | undefined;
            maxResolution?: number | undefined;
            useInterimTilesOnError?: boolean | undefined;
            zIndex?: number | undefined;
        }

        /**
         * Render mode for vector layers:
         *  * `'image'`: Vector layers are rendered as images. Great performance, but
         *    point symbols and texts are always rotated with the view and pixels are
         *    scaled during zoom animations.
         *  * `'vector'`: Vector layers are rendered as vectors. Most accurate rendering
         *    even during animations, but slower performance.
         * Default is `vector`.
         * @api
         */
        type VectorRenderType = "image" | "vector";

        interface VectorOptions {
            renderMode?: (VectorRenderType | string) | undefined;
            renderOrder?: ((feature1: ol.Feature, feature2: ol.Feature) => number) | undefined;
            map?: ol.Map | undefined;
            extent?: ol.Extent | undefined;
            minResolution?: number | undefined;
            maxResolution?: number | undefined;
            opacity?: number | undefined;
            renderBuffer?: number | undefined;
            source: ol.source.Vector;
            declutter?: boolean | undefined;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction) | undefined;
            updateWhileAnimating?: boolean | undefined;
            updateWhileInteracting?: boolean | undefined;
            visible?: boolean | undefined;
            zIndex?: number | undefined;
        }

        interface VectorTileOptions {
            renderBuffer?: number | undefined;
            renderMode?: (ol.layer.VectorTileRenderType | string) | undefined;
            renderOrder?: ((feature1: ol.Feature, feature2: ol.Feature) => number) | undefined;
            map?: ol.Map | undefined;
            extent?: ol.Extent | undefined;
            minResolution?: number | undefined;
            maxResolution?: number | undefined;
            opacity?: number | undefined;
            source?: ol.source.VectorTile | undefined;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction) | undefined;
            updateWhileAnimating?: boolean | undefined;
            updateWhileInteracting?: boolean | undefined;
            visible?: boolean | undefined;
            zIndex?: number | undefined;
        }
    }

    namespace parser {
    }
    namespace render {
        interface ToContextOptions {
            size?: ol.Size | undefined;
            pixelRatio?: number | undefined;
        }
    }
    namespace source {
        interface BingMapsOptions {
            cacheSize?: number | undefined;
            culture?: string | undefined;
            key: string;
            imagerySet: string;
            maxZoom?: number | undefined;
            reprojectionErrorThreshold?: number | undefined;
            tileLoadFunction?: ol.TileLoadFunctionType | undefined;
            wrapX?: boolean | undefined;
        }

        interface ClusterOptions {
            attributions?: ol.AttributionLike | undefined;
            distance?: number | undefined;
            extent?: ol.Extent | undefined;
            geometryFunction?: ((feature: ol.Feature) => ol.geom.Point) | undefined;
            format?: ol.format.Feature | undefined;
            logo?: string | undefined;
            projection?: ol.ProjectionLike | undefined;
            source: ol.source.Vector;
            wrapX?: boolean | undefined;
        }

        type TileJSON = JSON;

        interface TileUTFGridOptions {
            jsonp?: boolean | undefined;
            preemptive?: boolean | undefined;
            tileJSON?: TileJSON | undefined;
            url?: string | undefined;
        }

        interface TileImageOptions {
            attributions?: ol.AttributionLike | undefined;
            cacheSize?: number | undefined;
            crossOrigin?: (string) | undefined;
            logo?: (string | LogoOptions) | undefined;
            opaque?: boolean | undefined;
            projection: ol.ProjectionLike;
            reprojectionErrorThreshold?: number | undefined;
            state?: ol.source.State | undefined;
            tileClass?:
                | ((
                    n: ol.ImageTile,
                    coords: ol.TileCoord,
                    state: ol.Tile.State,
                    s1: string,
                    s2: string,
                    type: ol.TileLoadFunctionType,
                ) => any)
                | undefined;
            tileGrid?: ol.tilegrid.TileGrid | undefined;
            tileLoadFunction?: ol.TileLoadFunctionType | undefined;
            tilePixelRatio?: number | undefined;
            tileUrlFunction?: ol.TileUrlFunctionType | undefined;
            url?: string | undefined;
            urls?: string[] | undefined;
            wrapX?: boolean | undefined;
            transition?: number | undefined;
        }

        interface VectorTileOptions {
            attributions?: ol.AttributionLike | undefined;
            cacheSize?: number | undefined;
            format?: ol.format.Feature | undefined;
            logo?: (string | LogoOptions) | undefined;
            overlaps?: boolean | undefined;
            projection: ol.ProjectionLike;
            state?: ol.source.State | undefined;
            tileClass?:
                | ((
                    n: ol.VectorTile,
                    coords: ol.TileCoord,
                    state: ol.Tile.State,
                    s: string,
                    feature: ol.format.Feature,
                    type: ol.TileLoadFunctionType,
                ) => any)
                | undefined;
            tileGrid?: ol.tilegrid.TileGrid | undefined;
            tileLoadFunction?: ol.TileLoadFunctionType | undefined;
            tileUrlFunction?: ol.TileUrlFunctionType | undefined;
            url?: string | undefined;
            urls?: string[] | undefined;
            wrapX?: boolean | undefined;
        }

        interface ImageMapGuideOptions {
            url?: string | undefined;
            displayDpi?: number | undefined;
            metersPerUnit?: number | undefined;
            hidpi?: boolean | undefined;
            useOverlay?: boolean | undefined;
            projection: ol.ProjectionLike;
            ratio?: number | undefined;
            resolutions?: number[] | undefined;
            imageLoadFunction?: ol.ImageLoadFunctionType | undefined;
            params?: GlobalObject | undefined;
        }

        interface MapQuestOptions {
            cacheSize?: number | undefined;
            layer: string;
            reprojectionErrorThreshold?: number | undefined;
            tileLoadFunction?: ol.TileLoadFunctionType | undefined;
            url?: string | undefined;
        }

        interface TileDebugOptions {
            projection: ol.ProjectionLike;
            tileGrid?: ol.tilegrid.TileGrid | undefined;
            wrapX?: boolean | undefined;
        }

        interface OSMOptions {
            attributions?: ol.AttributionLike | undefined;
            cacheSize?: number | undefined;
            crossOrigin?: (string) | undefined;
            maxZoom?: number | undefined;
            opaque?: boolean | undefined;
            reprojectionErrorThreshold?: number | undefined;
            tileLoadFunction?: ol.TileLoadFunctionType | undefined;
            url?: string | undefined;
            wrapX?: boolean | undefined;
        }

        interface ImageArcGISRestOptions {
            attributions?: ol.Attribution[] | undefined;
            crossOrigin?: (string) | undefined;
            hidpi?: boolean | undefined;
            logo?: (string | LogoOptions) | undefined;
            imageLoadFunction?: ol.ImageLoadFunctionType | undefined;
            params?: { [k: string]: any } | undefined;
            projection: ol.ProjectionLike;
            ratio?: number | undefined;
            resolutions?: number[] | undefined;
            url?: string | undefined;
        }

        interface ImageCanvasOptions {
            attributions?: ol.AttributionLike | undefined;
            canvasFunction: ol.CanvasFunctionType;
            logo?: (string | LogoOptions) | undefined;
            projection: ol.ProjectionLike;
            ratio?: number | undefined;
            resolutions?: number[] | undefined;
            state?: ol.source.State | undefined;
        }

        interface ImageVectorOptions {
            attributions?: ol.AttributionLike | undefined;
            logo?: (string | LogoOptions) | undefined;
            projection: ol.ProjectionLike;
            ratio?: number | undefined;
            renderBuffer?: number | undefined;
            resolutions?: number[] | undefined;
            source: ol.source.Vector;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction) | undefined;
        }

        /**
         * @api
         */
        interface RasterOptions {
            sources: ol.source.Source[];
            operation?: ol.RasterOperation | undefined;
            lib?: GlobalObject | undefined;
            threads?: number | undefined;
            operationType?: ol.RasterOperationType | undefined;
        }

        interface ImageWMSOptions {
            attributions?: ol.AttributionLike | undefined;
            crossOrigin?: (string) | undefined;
            hidpi?: boolean | undefined;
            serverType?: (ol.source.wms.ServerType | string) | undefined;
            imageLoadFunction?: ol.ImageLoadFunctionType | undefined;
            logo?: (string | LogoOptions) | undefined;
            params: { [k: string]: any };
            projection: ol.ProjectionLike;
            ratio?: number | undefined;
            resolutions?: number[] | undefined;
            url?: string | undefined;
        }

        interface StamenOptions {
            cacheSize?: number | undefined;
            layer: string;
            minZoom?: number | undefined;
            maxZoom?: number | undefined;
            opaque?: boolean | undefined;
            reprojectionErrorThreshold?: number | undefined;
            tileLoadFunction?: ol.TileLoadFunctionType | undefined;
            url?: string | undefined;
        }

        interface ImageStaticOptions {
            attributions?: ol.AttributionLike | undefined;
            crossOrigin?: (string) | undefined;
            imageExtent: ol.Extent;
            imageLoadFunction?: ol.ImageLoadFunctionType | undefined;
            logo?: (string | LogoOptions) | undefined;
            projection: ol.ProjectionLike;
            imageSize?: ol.Size | undefined;
            url: string;
        }

        interface TileArcGISRestOptions {
            attributions?: ol.AttributionLike | undefined;
            cacheSize?: number | undefined;
            crossOrigin?: (string) | undefined;
            params?: { [k: string]: any } | undefined;
            logo?: (string | LogoOptions) | undefined;
            tileGrid?: ol.tilegrid.TileGrid | undefined;
            projection?: ol.ProjectionLike | undefined;
            reprojectionErrorThreshold?: number | undefined;
            tileLoadFunction?: ol.TileLoadFunctionType | undefined;
            url?: string | undefined;
            wrapX?: boolean | undefined;
            transition?: number | undefined;
            urls?: string[] | undefined;
        }

        interface TileJSONOptions {
            attributions?: ol.AttributionLike | undefined;
            cacheSize?: number | undefined;
            crossOrigin?: (string) | undefined;
            jsonp?: boolean | undefined;
            reprojectionErrorThreshold?: number | undefined;
            tileLoadFunction?: ol.TileLoadFunctionType | undefined;
            url: string;
            wrapX?: boolean | undefined;
            transition?: number | undefined;
        }

        interface TileWMSOptions {
            attributions?: ol.AttributionLike | undefined;
            cacheSize?: number | undefined;
            params: { [k: string]: any };
            crossOrigin?: (string) | undefined;
            gutter?: number | undefined;
            hidpi?: boolean | undefined;
            logo?: (string | LogoOptions) | undefined;
            tileGrid?: ol.tilegrid.TileGrid | undefined;
            projection?: ol.ProjectionLike | undefined;
            reprojectionErrorThreshold?: number | undefined;
            serverType?: (ol.source.wms.ServerType | string) | undefined;
            tileLoadFunction?: ol.TileLoadFunctionType | undefined;
            url?: string | undefined;
            urls?: string[] | undefined;
            wrapX?: boolean | undefined;
            transition?: number | undefined;
        }

        interface VectorOptions {
            attributions?: ol.AttributionLike | undefined;
            features?: (ol.Feature[] | ol.Collection<ol.Feature>) | undefined;
            format?: ol.format.Feature | undefined;
            loader?: ol.FeatureLoader | undefined;
            logo?: (string | LogoOptions) | undefined;
            overlaps?: boolean | undefined;
            strategy?: ol.LoadingStrategy | undefined;
            url?: (string | ol.FeatureUrlFunction) | undefined;
            useSpatialIndex?: boolean | undefined;
            wrapX?: boolean | undefined;
        }

        interface WMTSOptions {
            attributions?: ol.AttributionLike | undefined;
            cacheSize?: number | undefined;
            crossOrigin?: (string) | undefined;
            logo?: (string | LogoOptions) | undefined;
            tileGrid: ol.tilegrid.WMTS;
            projection: ol.ProjectionLike;
            reprojectionErrorThreshold?: number | undefined;
            requestEncoding?: (ol.source.WMTSRequestEncoding | string) | undefined;
            layer: string;
            style: string;
            tileClass?:
                | ((
                    n: ol.ImageTile,
                    coords: ol.TileCoord,
                    state: ol.Tile.State,
                    s1: string,
                    s2: string,
                    type: ol.TileLoadFunctionType,
                ) => any)
                | undefined;
            tilePixelRatio?: number | undefined;
            version?: string | undefined;
            format?: string | undefined;
            matrixSet: string;
            dimensions?: GlobalObject | undefined;
            url?: string | undefined;
            tileLoadFunction?: ol.TileLoadFunctionType | undefined;
            urls?: string[] | undefined;
            wrapX?: boolean | undefined;
        }

        interface XYZOptions {
            attributions?: ol.AttributionLike | undefined;
            cacheSize?: number | undefined;
            crossOrigin?: (string) | undefined;
            logo?: (string | LogoOptions) | undefined;
            opaque?: boolean | undefined;
            projection?: ol.ProjectionLike | undefined;
            reprojectionErrorThreshold?: number | undefined;
            maxZoom?: number | undefined;
            minZoom?: number | undefined;
            tileGrid?: ol.tilegrid.TileGrid | undefined;
            tileLoadFunction?: ol.TileLoadFunctionType | undefined;
            tilePixelRatio?: number | undefined;
            tileSize?: (number | ol.Size) | undefined;
            tileUrlFunction?: ol.TileUrlFunctionType | undefined;
            url?: string | undefined;
            urls?: string[] | undefined;
            wrapX?: boolean | undefined;
        }

        interface CartoDBOptions {
            attributions?: ol.AttributionLike | undefined;
            cacheSize?: number | undefined;
            crossOrigin?: (string) | undefined;
            logo?: (string | LogoOptions) | undefined;
            projection: ol.ProjectionLike;
            maxZoom?: number | undefined;
            minZoom?: number | undefined;
            wrapX?: boolean | undefined;
            config?: GlobalObject | undefined;
            map?: string | undefined;
            account: string;
        }

        interface ZoomifyOptions {
            attributions?: ol.AttributionLike | undefined;
            cacheSize?: number | undefined;
            crossOrigin?: (string) | undefined;
            logo?: (string | LogoOptions) | undefined;
            reprojectionErrorThreshold?: number | undefined;
            url: string;
            tierSizeCalculation?: string | undefined;
            size: ol.Size;
        }
    }
    namespace style {
        interface CircleOptions {
            fill?: ol.style.Fill | undefined;
            radius: number;
            snapToPixel?: boolean | undefined;
            stroke?: ol.style.Stroke | undefined;
            atlasManager?: ol.style.AtlasManager | undefined;
        }

        interface FillOptions {
            color?: (ol.Color | ol.ColorLike) | undefined;
        }

        interface IconOptions {
            anchor?: number[] | undefined;
            anchorOrigin?: ol.style.IconOrigin | undefined;
            anchorXUnits?: ol.style.IconAnchorUnits | undefined;
            anchorYUnits?: ol.style.IconAnchorUnits | undefined;
            color?: (ol.Color | string) | undefined;
            crossOrigin?: (string) | undefined;
            img?: (HTMLImageElement | HTMLCanvasElement) | undefined;
            offset?: number[] | undefined;
            offsetOrigin?: ol.style.IconOrigin | undefined;
            opacity?: number | undefined;
            scale?: number | undefined;
            snapToPixel?: boolean | undefined;
            rotateWithView?: boolean | undefined;
            rotation?: number | undefined;
            size?: ol.Size | undefined;
            imgSize?: ol.Size | undefined;
            src?: string | undefined;
        }

        /**
         * Specify radius for regular polygons, or radius1 and radius2 for stars.
         */
        interface RegularShapeOptions {
            fill?: ol.style.Fill | undefined;
            points: number;
            radius?: number | undefined;
            radius1?: number | undefined;
            radius2?: number | undefined;
            angle?: number | undefined;
            snapToPixel?: boolean | undefined;
            stroke?: ol.style.Stroke | undefined;
            rotation?: number | undefined;
        }

        interface StrokeOptions {
            color?: ol.Color | string | undefined;
            lineCap?: string | undefined;
            lineJoin?: string | undefined;
            lineDash?: number[] | undefined;
            lineDashOffset?: number | undefined;
            miterLimit?: number | undefined;
            width?: number | undefined;
        }

        /**
         * Text placement. One of `'point'`, `'line'`. Default is `'point'`. Note that
         * `'line'` requires the underlying geometry to be a {@link ol.geom.LineString},
         * {@link ol.geom.Polygon}, {@link ol.geom.MultiLineString} or
         * {@link ol.geom.MultiPolygon}.
         */
        type TextPlacement = "point" | "line";

        interface TextOptions {
            font?: string | undefined;
            maxAngle?: boolean | undefined;
            offsetX?: number | undefined;
            offsetY?: number | undefined;
            overflow?: boolean | undefined;
            placement?: TextPlacement | undefined;
            scale?: number | undefined;
            rotateWithView?: boolean | undefined;
            rotation?: number | undefined;
            text?: string | undefined;
            textAlign?: string | undefined;
            textBaseline?: string | undefined;
            fill?: ol.style.Fill | undefined;
            stroke?: ol.style.Stroke | undefined;
            backgroundFill?: ol.style.Fill | undefined;
            backgroundStroke?: ol.style.Stroke | undefined;
            padding?: number[] | undefined;
        }

        interface StyleOptions {
            geometry?: (string | ol.geom.Geometry | ol.StyleGeometryFunction) | undefined;
            fill?: ol.style.Fill | undefined;
            image?: ol.style.Image | undefined;
            stroke?: ol.style.Stroke | undefined;
            text?: ol.style.Text | undefined;
            zIndex?: number | undefined;
        }

        interface AtlasManagerOptions {
            initialSize?: number | undefined;
            maxSize?: number | undefined;
            space?: number | undefined;
        }
    }
    namespace tilegrid {
        interface TileGridOptions {
            extent?: ol.Extent | undefined;
            minZoom?: number | undefined;
            origin?: ol.Coordinate | undefined;
            origins?: ol.Coordinate[] | undefined;
            resolutions: number[];
            tileSize?: (number | ol.Size) | undefined;
            tileSizes?: (Array<(number | ol.Size)>) | undefined;
        }

        interface WMTSOptions {
            extent?: ol.Extent | undefined;
            origin?: ol.Coordinate | undefined;
            origins?: ol.Coordinate[] | undefined;
            resolutions: number[];
            matrixIds: string[];
            sizes?: ol.Size[] | undefined;
            tileSize?: (number | ol.Size) | undefined;
            tileSizes?: (Array<(number | ol.Size)>) | undefined;
            widths?: number[] | undefined;
        }

        interface XYZOptions {
            extent?: ol.Extent | undefined;
            maxZoom?: number | undefined;
            minZoom?: number | undefined;
            tileSize?: (number | ol.Size) | undefined;
        }
    }

    interface AttributionOptions {
        html: string;
    }

    interface DeviceOrientationOptions {
        tracking?: boolean | undefined;
    }

    interface GeolocationOptions {
        tracking?: boolean | undefined;
        trackingOptions?: PositionOptions | undefined;
        projection: ol.ProjectionLike;
    }

    /**
     * Object literal with config options for the map logo.
     */
    interface LogoOptions {
        href: string;
        src: string;
    }

    interface GraticuleOptions {
        map?: ol.Map | undefined;
        maxLines?: number | undefined;
        strokeStyle?: ol.style.Stroke | undefined;
        targetSize?: number | undefined;
        showLabels?: boolean | undefined;
        lonLabelFormatter?: ((lon: number) => string) | undefined;
        latLabelFormatter?: ((lat: number) => string) | undefined;
        lonLabelPosition?: number | undefined;
        latLabelPosition?: number | undefined;
        lonLabelStyle?: ol.style.Text | undefined;
        latLabelStyle?: ol.style.Text | undefined;
    }

    /**
     * Object literal with config options for the map.
     */
    interface MapOptions {
        controls?: (ol.Collection<ol.control.Control> | ol.control.Control[]) | undefined;
        pixelRatio?: number | undefined;
        interactions?: (ol.Collection<ol.interaction.Interaction> | ol.interaction.Interaction[]) | undefined;
        keyboardEventTarget?: (Element | Document | string) | undefined;
        layers?: (ol.layer.Base[] | ol.Collection<ol.layer.Base>) | undefined;
        loadTilesWhileAnimating?: boolean | undefined;
        loadTilesWhileInteracting?: boolean | undefined;
        logo?: (boolean | string | LogoOptions | Element) | undefined;
        overlays?: (ol.Collection<ol.Overlay> | ol.Overlay[]) | undefined;
        renderer?: (ol.RendererType | Array<(ol.RendererType | string)> | string) | undefined;
        target?: (Element | string) | undefined;
        view?: ol.View | undefined;
        moveTolerance?: number | undefined;
    }

    /**
     * Object literal with config options for the overlay.
     */
    interface OverlayOptions {
        id?: (number | string) | undefined;
        element?: Element | undefined;
        offset?: number[] | undefined;
        position?: ol.Coordinate | undefined;
        positioning?: (ol.OverlayPositioning | string) | undefined;
        stopEvent?: boolean | undefined;
        insertFirst?: boolean | undefined;
        autoPan?: boolean | undefined;
        autoPanAnimation?: animation.PanOptions | undefined;
        autoPanMargin?: number | undefined;
    }

    /**
     * Object literal with config options for the projection.
     */
    interface ProjectionOptions {
        code: string;
        units?: (ol.proj.Units | string) | undefined;
        extent?: ol.Extent | undefined;
        axisOrientation?: string | undefined;
        global?: boolean | undefined;
        metersPerUnit?: number | undefined;
        worldExtent?: ol.Extent | undefined;
        getPointResolution?: ((resolution: number, coords: ol.Coordinate) => number) | undefined;
    }

    namespace view {
        interface FitOptions {
            size?: ol.Size | undefined;
            padding?: number[] | undefined;
            constrainResolution?: boolean | undefined;
            nearest?: boolean | undefined;
            minResolution?: number | undefined;
            maxZoom?: number | undefined;
            duration?: number | undefined;
            easing?: ((t: number) => number) | undefined;
            callback?: animation.AnimateCallback | undefined;
        }
    }

    /**
     * Object literal with config options for the view.
     */
    interface ViewOptions {
        center?: ol.Coordinate | undefined;
        constrainRotation?: (boolean | number) | undefined;
        enableRotation?: boolean | undefined;
        extent?: ol.Extent | undefined;
        maxResolution?: number | undefined;
        minResolution?: number | undefined;
        maxZoom?: number | undefined;
        minZoom?: number | undefined;
        projection?: ol.ProjectionLike | undefined;
        resolution?: number | undefined;
        resolutions?: number[] | undefined;
        rotation?: number | undefined;
        zoom?: number | undefined;
        zoomFactor?: number | undefined;
    }

    /**
     * Object literal with options for the {@link ol.Map#forEachFeatureAtPixel} and
     * {@link ol.Map#hasFeatureAtPixel} methods.
     */
    interface AtPixelOptions {
        layerFilter?: ((layer: ol.layer.Layer) => boolean) | undefined;
        hitTolerance?: number | undefined;
    }

    interface FrameState {
        pixelRatio: number;
        time: number;
        viewState: ViewState;
    }

    interface ViewState {
        center: ol.Coordinate;
        projection: ol.proj.Projection;
        resolution: number;
        rotation: number;
    }
}
