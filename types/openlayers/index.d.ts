// Type definitions for OpenLayers 4.6
// Project: http://openlayers.org/
// Definitions by: Olivier Sechet <https://github.com/osechet>
//                 Bin Wang <https://github.com/wb14123>
//                 Junyoung Clare Jang <https://github.com/ailrun>
//                 Alexandre Melard <https://github.com/mylen>
//                 Chad Johnston <https://github.com/iamthechad>
//                 Dan Manastireanu <https://github.com/danmana>
//                 Yair Tawil <https://github.com/yairtawil>
//                 Pierre Marchand <https://github.com/pierremarc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Definitions partially generated using tsd-jsdoc (https://github.com/englercj/tsd-jsdoc)

declare type GlobalObject = Object;

declare module ol {
    /**
     * Error object thrown when an assertion failed. This is an ECMA-262 Error,
     * extended with a `code` property.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error}
     */
    class AssertionError extends Error {
        /**
         * Error object thrown when an assertion failed. This is an ECMA-262 Error,
         * extended with a `code` property.
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error}
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
     * @struct
     * @api stable
     */
    class Attribution {
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
         * @struct
         * @api stable
         */
        constructor(options: olx.AttributionOptions);

        /**
         * Get the attribution markup.
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
     * @template T
     * @api stable
     */
    class Collection<T> extends ol.Object {
        /**
         * @classdesc
         * An expanded version of standard JS Array, adding convenience methods for
         * manipulation. Add and remove changes to the Collection trigger a Collection
         * event. Note that this does not cover changes to the objects _within_ the
         * Collection; they trigger events on the appropriate object, not on the
         * Collection as a whole.
         *
         * @fires ol.Collection.Event
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
         * @api stable
         */
        extend(arr: T[]): ol.Collection<T>;

        /**
         * Iterate over each element, calling the provided callback.
         *     for every element. This function takes 3 arguments (the element, the
         *     index and the array). The return value is ignored.
         * @template S
         * @api stable
         */
        forEach<S>(f: ((item: T, index: number, array: T[]) => any), opt_this?: S): void;

        /**
         * Get a reference to the underlying Array object. Warning: if the array
         * is mutated, no events will be dispatched by the collection, and the
         * collection's "length" property won't be in sync with the actual length
         * of the array.
         * @api stable
         */
        getArray(): T[];

        /**
         * Get the element at the provided index.
         * @api stable
         */
        item(index: number): T;

        /**
         * Get the length of this collection.
         * @observable
         * @api stable
         */
        getLength(): number;

        /**
         * Insert an element at the provided index.
         * @api stable
         */
        insertAt(index: number, elem: T): void;

        /**
         * Remove the last element of the collection and return it.
         * Return `undefined` if the collection is empty.
         * @api stable
         */
        pop(): (T);

        /**
         * Insert the provided element at the end of the collection.
         * @api stable
         */
        push(elem: T): number;

        /**
         * Remove the first occurrence of an element from the collection.
         * @api stable
         */
        remove(elem: T): (T);

        /**
         * Remove the element at the provided index and return it.
         * Return `undefined` if the collection does not contain this index.
         * @api stable
         */
        removeAt(index: number): (T);

        /**
         * Set the element at the provided index.
         * @api stable
         */
        setAt(index: number, elem: T): void;
    }

    module Collection {
        type EventType = string;

        /**
         * @classdesc
         * Events emitted by {@link ol.Collection} instances are instances of this
         * type.
         *
         */
        class Event extends ol.events.Event {
            /**
             * @classdesc
             * Events emitted by {@link ol.Collection} instances are instances of this
             * type.
             *
             */
            constructor(type: ol.Collection.EventType, opt_element?: any);

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
    module color {
        /**
         * Return the color as an array. This function maintains a cache of calculated
         * arrays which means the result should not be modified.
         * @api
         */
        function asArray(color: (ol.Color | string)): ol.Color;

        /**
         * Return the color as an rgba string.
         * @api
         */
        function asString(color: (ol.Color | string)): string;
    }

    /**
     * An {@link ol.ColorLike} can be a color, gradient or pattern accepted by
     * [CanvasRenderingContext2D.fillStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle).
     */
    module colorlike {
        /**
         * @api
         */
        function asColorLike(color: (ol.Color | ol.ColorLike)): ol.ColorLike;
    }

    module control {
        /**
         * @classdesc
         * Control to show all the attributions associated with the layer sources
         * in the map. This control is one of the default controls included in maps.
         * By default it will show in the bottom right portion of the map, but this can
         * be changed by using a css selector for `.ol-attribution`.
         *
         * @api stable
         */
        class Attribution extends ol.control.Control {
            /**
             * @classdesc
             * Control to show all the attributions associated with the layer sources
             * in the map. This control is one of the default controls included in maps.
             * By default it will show in the bottom right portion of the map, but this can
             * be changed by using a css selector for `.ol-attribution`.
             * @api stable
             */
            constructor(opt_options?: olx.control.AttributionOptions);

            /**
             * Update the attribution element.
             * @api
             */
            static render(mapEvent: ol.MapEvent): void;

            /**
             * Return `true` if the attribution is collapsible, `false` otherwise.
             * @api stable
             */
            getCollapsible(): boolean;

            /**
             * Set whether the attribution should be collapsible.
             * @api stable
             */
            setCollapsible(collapsible: boolean): void;

            /**
             * Collapse or expand the attribution according to the passed parameter. Will
             * not do anything if the attribution isn't collapsible or if the current
             * collapsed state is already the one requested.
             * @api stable
             */
            setCollapsed(collapsed: boolean): void;

            /**
             * Return `true` when the attribution is currently collapsed or `false`
             * otherwise.
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
         * @api stable
         */
        class Control extends ol.Object {
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
             * @api stable
             */
            constructor(options: olx.control.ControlOptions);

            /**
             * Get the map associated with this control.
             * @api stable
             */
            getMap(): ol.Map;

            /**
             * Remove the control from its current map and attach it to the new map.
             * Subclasses may set up event handlers to get notified about changes to
             * the map here.
             * @api stable
             */
            setMap(map: ol.Map): void;

            /**
             * This function is used to set a target element for the control. It has no
             * effect if it is called after the control has been added to the map (i.e.
             * after `setMap` is called on the control). If no `target` is set in the
             * options passed to the control constructor and if `setTarget` is not called
             * then the control is added to the map's overlay container.
             * @api
             */
            setTarget(target: (Element | string)): void;
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
         *
         * @api stable
         */
        class FullScreen extends ol.control.Control {
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
             *
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
         * @api stable
         */
        function defaults(opt_options?: olx.control.DefaultsOptions): ol.Collection<ol.control.Control>;

        /**
         * @classdesc
         * A control to show the 2D coordinates of the mouse cursor. By default, these
         * are in the view projection, but can be in any supported projection.
         * By default the control is shown in the top right corner of the map, but this
         * can be changed by using the css selector `.ol-mouse-position`.
         *
         *     options.
         * @api stable
         */
        class MousePosition extends ol.control.Control {
            /**
             * @classdesc
             * A control to show the 2D coordinates of the mouse cursor. By default, these
             * are in the view projection, but can be in any supported projection.
             * By default the control is shown in the top right corner of the map, but this
             * can be changed by using the css selector `.ol-mouse-position`.
             *
             *     options.
             * @api stable
             */
            constructor(opt_options?: olx.control.MousePositionOptions);

            /**
             * Update the mouseposition element.
             * @api
             */
            static render(mapEvent: ol.MapEvent): void;

            /**
             * Return the coordinate format type used to render the current position or
             * undefined.
             *     position in.
             * @observable
             * @api stable
             */
            getCoordinateFormat(): (ol.CoordinateFormatType);

            /**
             * Return the projection that is used to report the mouse position.
             *     position in.
             * @observable
             * @api stable
             */
            getProjection(): (ol.proj.Projection);

            /**
             * Set the coordinate format type used to render the current position.
             *     position in.
             * @observable
             * @api stable
             */
            setCoordinateFormat(format: ol.CoordinateFormatType): void;

            /**
             * Set the projection that is used to report the mouse position.
             *     position in.
             * @observable
             * @api stable
             */
            setProjection(projection: ol.proj.Projection): void;
        }

        /**
         * Create a new control with a map acting as an overview map for an other
         * defined map.
         * @api
         */
        class OverviewMap extends ol.control.Control {
            /**
             * Create a new control with a map acting as an overview map for an other
             * defined map.
             * @api
             */
            constructor(opt_options?: olx.control.OverviewMapOptions);

            /**
             * Update the overview map element.
             * @api
             */
            static render(mapEvent: ol.MapEvent): void;

            /**
             * Return `true` if the overview map is collapsible, `false` otherwise.
             * @api stable
             */
            getCollapsible(): boolean;

            /**
             * Set whether the overview map should be collapsible.
             * @api stable
             */
            setCollapsible(collapsible: boolean): void;

            /**
             * Collapse or expand the overview map according to the passed parameter. Will
             * not do anything if the overview map isn't collapsible or if the current
             * collapsed state is already the one requested.
             * @api stable
             */
            setCollapsed(collapsed: boolean): void;

            /**
             * Determine if the overview map is collapsed.
             * @api stable
             */
            getCollapsed(): boolean;

            /**
             * Return the overview map.
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
         * @api stable
         */
        class Rotate extends ol.control.Control {
            /**
             * @classdesc
             * A button control to reset rotation to 0.
             * To style this control use css selector `.ol-rotate`. A `.ol-hidden` css
             * selector is added to the button when the rotation is 0.
             *
             * @api stable
             */
            constructor(opt_options?: olx.control.RotateOptions);

            /**
             * Update the rotate control element.
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
         * @api stable
         */
        class ScaleLine extends ol.control.Control {
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
             * @api stable
             */
            constructor(opt_options?: olx.control.ScaleLineOptions);

            /**
             * Return the units to use in the scale line.
             *     line.
             * @observable
             * @api stable
             */
            getUnits(): (ol.control.ScaleLine.Units);

            /**
             * Update the scale line element.
             * @api
             */
            static render(mapEvent: ol.MapEvent): void;

            /**
             * Set the units to use in the scale line.
             * @observable
             * @api stable
             */
            setUnits(units: ol.control.ScaleLine.Units): void;
        }

        module ScaleLine {
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
         * @api stable
         */
        class Zoom extends ol.control.Control {
            /**
             * @classdesc
             * A control with 2 buttons, one for zoom in and one for zoom out.
             * This control is one of the default controls of a map. To style this control
             * use css selectors `.ol-zoom-in` and `.ol-zoom-out`.
             *
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
         * @api stable
         */
        class ZoomSlider extends ol.control.Control {
            /**
             * @classdesc
             * A slider type of control for zooming.
             *
             * Example:
             *
             *     map.addControl(new ol.control.ZoomSlider());
             *
             * @api stable
             */
            constructor(opt_options?: olx.control.ZoomSliderOptions);

            /**
             * Update the zoomslider element.
             * @api
             */
            static render(mapEvent: ol.MapEvent): void;
        }

        /**
         * @classdesc
         * A button control which, when pressed, changes the map view to a specific
         * extent. To style this control use the css selector `.ol-zoom-extent`.
         *
         * @api stable
         */
        class ZoomToExtent extends ol.control.Control {
            /**
             * @classdesc
             * A button control which, when pressed, changes the map view to a specific
             * extent. To style this control use the css selector `.ol-zoom-extent`.
             *
             * @api stable
             */
            constructor(opt_options?: olx.control.ZoomToExtentOptions);
        }
    }

    module coordinate {
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
         *    after the decimal point. Default is `0`.
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
         *     that will be replaced by first and second coordinate values.
         *    after the decimal point. Default is `0`.
         * @api stable
         */
        function format(coordinate: (ol.Coordinate), template: string, opt_fractionDigits?: number): string;

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
         *    after the decimal point. Default is `0`.
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
         *    after the decimal point. Default is `0`.
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
     * @api
     */
    class DeviceOrientation extends ol.Object {
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
         * @api
         */
        constructor(opt_options?: olx.DeviceOrientationOptions);

        /**
         * Rotation around the device z-axis (in radians).
         *     standard Z axis.
         * @observable
         * @api
         */
        getAlpha(): (number);

        /**
         * Rotation around the device x-axis (in radians).
         *     planar X axis.
         * @observable
         * @api
         */
        getBeta(): (number);

        /**
         * Rotation around the device y-axis (in radians).
         *     planar Y axis.
         * @observable
         * @api
         */
        getGamma(): (number);

        /**
         * The heading of the device relative to north (in radians).
         *     radians, normalizing for different browser behavior.
         * @observable
         * @api
         */
        getHeading(): (number);

        /**
         * Determine if orientation is being tracked.
         * @observable
         * @api
         */
        getTracking(): boolean;

        /**
         * Enable or disable tracking of device orientation events.
         *     gamma. If true, changes are tracked and reported immediately.
         * @observable
         * @api
         */
        setTracking(tracking: boolean): void;
    }

    /**
     * Objects that need to clean up after themselves.
     */
    class Disposable {
        /**
         * Objects that need to clean up after themselves.
         */
        constructor();
    }

    /**
     * Easing functions for {@link ol.animation}.
     */
    module easing {
        /**
         * Start slow and speed up.
         * @api
         */
        function easeIn(t: number): number;

        /**
         * Start fast and slow down.
         * @api
         */
        function easeOut(t: number): number;

        /**
         * Start slow, speed up, and then slow down again.
         * @api
         */
        function inAndOut(t: number): number;

        /**
         * Maintain a constant speed over time.
         * @api
         */
        function linear(t: number): number;

        /**
         * Start slow, speed up, and at the very end slow down again.  This has the
         * same general behavior as {@link ol.easing.inAndOut}, but the final slowdown
         * is delayed.
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
    module events {
        module condition {
            /**
             * Return `true` if only the alt-key is pressed, `false` otherwise (e.g. when
             * additionally the shift-key is pressed).
             *
             * @api stable
             */
            function altKeyOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Return `true` if only the alt-key and shift-key is pressed, `false` otherwise
             * (e.g. when additionally the platform-modifier-key is pressed).
             *
             * @api stable
             */
            function altShiftKeysOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Return always true.
             *
             * @api stable
             */
            function always(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Return `true` if the event is a `click` event, `false` otherwise.
             *
             * @api stable
             */
            function click(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Return always false.
             *
             * @api stable
             */
            function never(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Return `true` if the browser event is a `pointermove` event, `false`
             * otherwise.
             *
             * @api
             */
            function pointerMove(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Return `true` if the event is a map `singleclick` event, `false` otherwise.
             *
             * @api stable
             */
            function singleClick(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Return `true` if the event is a map `dblclick` event, `false` otherwise.
             *
             * @api stable
             */
            function doubleClick(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Return `true` if no modifier key (alt-, shift- or platform-modifier-key) is
             * pressed.
             *
             * @api stable
             */
            function noModifierKeys(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Return `true` if only the platform-modifier-key (the meta-key on Mac,
             * ctrl-key otherwise) is pressed, `false` otherwise (e.g. when additionally
             * the shift-key is pressed).
             *
             * @api stable
             */
            function platformModifierKeyOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Return `true` if only the shift-key is pressed, `false` otherwise (e.g. when
             * additionally the alt-key is pressed).
             *
             * @api stable
             */
            function shiftKeyOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Return `true` if the target element is not editable, i.e. not a `<input>`-,
             * `<select>`- or `<textarea>`-element, `false` otherwise.
             *
             * @api
             */
            function targetNotEditable(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Return `true` if the event originates from a mouse device.
             *
             * @api stable
             */
            function mouseOnly(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Return `true` if the event originates from a primary pointer in
             * contact with the surface or if the left mouse button is pressed.
             * @see http://www.w3.org/TR/pointerevents/#button-states
             *
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
         *
         */
        class EventTarget extends ol.Disposable {
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
             *
             */
            constructor();
        }
    }

    module extent {
        /**
         * Build an extent that includes all given coordinates.
         *
         * @api stable
         */
        function boundingExtent(coordinates: ol.Coordinate[]): ol.Extent;

        /**
         * Return extent increased by the provided value.
         * @api stable
         */
        function buffer(extent: ol.Extent, value: number, opt_extent?: ol.Extent): ol.Extent;

        /**
         * Check if the passed coordinate is contained or on the edge of the extent.
         *
         * @api stable
         */
        function containsCoordinate(extent: ol.Extent, coordinate: ol.Coordinate): boolean;

        /**
         * Check if one extent contains another.
         *
         * An extent is deemed contained if it lies completely within the other extent,
         * including if they share one or more edges.
         *
         *     first.
         * @api stable
         */
        function containsExtent(extent1: ol.Extent, extent2: ol.Extent): boolean;

        /**
         * Check if the passed coordinate is contained or on the edge of the extent.
         *
         * @api stable
         */
        function containsXY(extent: ol.Extent, x: number, y: number): boolean;

        /**
         * Create an empty extent.
         * @api stable
         */
        function createEmpty(): ol.Extent;

        /**
         * Determine if two extents are equivalent.
         * @api stable
         */
        function equals(extent1: ol.Extent, extent2: ol.Extent): boolean;

        /**
         * Modify an extent to include another extent.
         * @api stable
         */
        function extend(extent1: ol.Extent, extent2: ol.Extent): ol.Extent;

        /**
         * Get the bottom left coordinate of an extent.
         * @api stable
         */
        function getBottomLeft(extent: ol.Extent): ol.Coordinate;

        /**
         * Get the bottom right coordinate of an extent.
         * @api stable
         */
        function getBottomRight(extent: ol.Extent): ol.Coordinate;

        /**
         * Get the center coordinate of an extent.
         * @api stable
         */
        function getCenter(extent: ol.Extent): ol.Coordinate;

        /**
         * Get the height of an extent.
         * @api stable
         */
        function getHeight(extent: ol.Extent): number;

        /**
         * Get the intersection of two extents.
         * @api stable
         */
        function getIntersection(extent1: ol.Extent, extent2: ol.Extent, opt_extent?: ol.Extent): ol.Extent;

        /**
         * Get the size (width, height) of an extent.
         * @api stable
         */
        function getSize(extent: ol.Extent): ol.Size;

        /**
         * Get the top left coordinate of an extent.
         * @api stable
         */
        function getTopLeft(extent: ol.Extent): ol.Coordinate;

        /**
         * Get the top right coordinate of an extent.
         * @api stable
         */
        function getTopRight(extent: ol.Extent): ol.Coordinate;

        /**
         * Get the width of an extent.
         * @api stable
         */
        function getWidth(extent: ol.Extent): number;

        /**
         * Determine if one extent intersects another.
         * @api stable
         */
        function intersects(extent1: ol.Extent, extent2: ol.Extent): boolean;

        /**
         * Determine if an extent is empty.
         * @api stable
         */
        function isEmpty(extent: ol.Extent): boolean;

        /**
         * Apply a transform function to the extent.
         * [minX, minY, maxX, maxY] extent coordinates.
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
     *     You may pass a Geometry object directly, or an object literal
     *     containing properties.  If you pass an object literal, you may
     *     include a Geometry associated with a `geometry` key.
     * @api stable
     */
    class Feature extends ol.Object {
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
         *     You may pass a Geometry object directly, or an object literal
         *     containing properties.  If you pass an object literal, you may
         *     include a Geometry associated with a `geometry` key.
         * @api stable
         */
        constructor(opt_geometryOrProperties?: (ol.geom.Geometry | { [k: string]: any }));

        /**
         * Clone this feature. If the original feature has a geometry it
         * is also cloned. The feature id is not set in the clone.
         * @api stable
         */
        clone(): ol.Feature;

        /**
         * Get the feature's default geometry.  A feature may have any number of named
         * geometries.  The "default" geometry (the one that is rendered by default) is
         * set when calling {@link ol.Feature#setGeometry}.
         * @api stable
         * @observable
         */
        getGeometry(): (ol.geom.Geometry);

        /**
         * Get the feature identifier.  This is a stable identifier for the feature and
         * is either set when reading data from a remote source or set explicitly by
         * calling {@link ol.Feature#setId}.
         * @api stable
         * @observable
         */
        getId(): (number | string);

        /**
         * Get the name of the feature's default geometry.  By default, the default
         * geometry is named `geometry`.
         *     for this feature.
         * @api stable
         */
        getGeometryName(): string;

        /**
         * Get the feature's style.  This return for this method depends on what was
         * provided to the {@link ol.Feature#setStyle} method.
         *     ol.FeatureStyleFunction|ol.StyleFunction} The feature style.
         * @api stable
         * @observable
         */
        getStyle(): (ol.style.Style | ol.style.Style[] | ol.FeatureStyleFunction | ol.StyleFunction);

        /**
         * Get the feature's style function.
         * representing the current style of this feature.
         * @api stable
         */
        getStyleFunction(): (ol.FeatureStyleFunction);

        /**
         * Set the default geometry for the feature.  This will update the property
         * with the name returned by {@link ol.Feature#getGeometryName}.
         * @api stable
         * @observable
         */
        setGeometry(geometry: (ol.geom.Geometry)): void;

        /**
         * Set the style for the feature.  This can be a single style object, an array
         * of styles, or a function that takes a resolution and returns an array of
         * styles. If it is `null` the feature has no style (a `null` style).
         *     ol.FeatureStyleFunction|ol.StyleFunction} style Style for this feature.
         * @api stable
         * @observable
         */
        setStyle(style: (ol.style.Style | ol.style.Style[] | ol.FeatureStyleFunction | ol.StyleFunction)): void;

        /**
         * Set the feature id.  The feature id is considered stable and may be used when
         * requesting features or comparing identifiers returned from a remote source.
         * The feature id can be used with the {@link ol.source.Vector#getFeatureById}
         * method.
         * @api stable
         * @observable
         */
        setId(id: (number | string)): void;

        /**
         * Set the property name to be used when getting the feature's default geometry.
         * When calling {@link ol.Feature#getGeometry}, the value of the property with
         * this name will be returned.
         * @api stable
         */
        setGeometryName(name: string): void;
    }

    /**
     * Loading mechanisms for vector data.
     */
    module featureloader {
        /**
         * Create an XHR feature loader for a `url` and `format`. The feature loader
         * loads features (with XHR), parses the features, and adds them to the
         * vector tile.
         * @api
         */
        function tile(url: (string | ol.FeatureUrlFunction), format: ol.format.Feature): ol.FeatureLoader;

        /**
         * Create an XHR feature loader for a `url` and `format`. The feature loader
         * loads features (with XHR), parses the features, and adds them to the
         * vector source.
         * @api
         */
        function xhr(url: (string | ol.FeatureUrlFunction), format: ol.format.Feature): ol.FeatureLoader;
    }

    module format {
        /**
         * @classdesc
         * Feature format for reading and writing data in the EsriJSON format.
         *
         * @api
         */
        class EsriJSON extends ol.format.JSONFeature {
            /**
             * @classdesc
             * Feature format for reading and writing data in the EsriJSON format.
             *
             * @api
             */
            constructor(opt_options?: olx.format.EsriJSONOptions);

            /**
             * Read a feature from a EsriJSON Feature source.  Only works for Feature,
             * use `readFeatures` to read FeatureCollection source.
             *
             * @api
             */
            readFeature(source: (ArrayBuffer | Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature;

            /**
             * Read all features from a EsriJSON source.  Works with both Feature and
             * FeatureCollection sources.
             *
             * @api
             */
            readFeatures(source: (ArrayBuffer | Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature[];

            /**
             * Read a geometry from a EsriJSON source.
             *
             * @api
             */
            readGeometry(source: (ArrayBuffer | Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.geom.Geometry;

            /**
             * Read the projection from a EsriJSON source.
             *
             * @api
             */
            readProjection(source: (ArrayBuffer | Document | Node | GlobalObject | string)): ol.proj.Projection;

            /**
             * Encode a geometry as a EsriJSON string.
             *
             * @api
             */
            writeGeometry(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): string;

            /**
             * Encode a geometry as a EsriJSON object.
             *
             * @api
             */
            writeGeometryObject(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): EsriJSONGeometry;

            /**
             * Encode a feature as a EsriJSON Feature string.
             *
             * @api
             */
            writeFeature(feature: ol.Feature, opt_options?: olx.format.WriteOptions): string;

            /**
             * Encode a feature as a esriJSON Feature object.
             *
             * @api
             */
            writeFeatureObject(feature: ol.Feature, opt_options?: olx.format.WriteOptions): GlobalObject;

            /**
             * Encode an array of features as EsriJSON.
             *
             * @api
             */
            writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

            /**
             * Encode an array of features as a EsriJSON object.
             *
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
         * @api stable
         */
        class GeoJSON extends ol.format.JSONFeature {
            /**
             * @classdesc
             * Feature format for reading and writing data in the GeoJSON format.
             *
             * @api stable
             */
            constructor(opt_options?: olx.format.GeoJSONOptions);

            /**
             * Read a feature from a GeoJSON Feature source.  Only works for Feature,
             * use `readFeatures` to read FeatureCollection source.
             *
             * @api stable
             */
            readFeature(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature;

            /**
             * Read all features from a GeoJSON source.  Works with both Feature and
             * FeatureCollection sources.
             *
             * @api stable
             */
            readFeatures(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature[];

            /**
             * Read a geometry from a GeoJSON source.
             *
             * @api stable
             */
            readGeometry(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.geom.Geometry;

            /**
             * Read the projection from a GeoJSON source.
             *
             * @api stable
             */
            readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection;

            /**
             * Encode a feature as a GeoJSON Feature string.
             *
             * @api stable
             */
            writeFeature(feature: ol.Feature, opt_options?: olx.format.WriteOptions): string;

            /**
             * Encode a feature as a GeoJSON Feature object.
             *
             * @api stable
             */
            writeFeatureObject(feature: ol.Feature, opt_options?: olx.format.WriteOptions): GeoJSONFeature;

            /**
             * Encode an array of features as GeoJSON.
             *
             * @api stable
             */
            writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

            /**
             * Encode an array of features as a GeoJSON object.
             *
             * @api stable
             */
            writeFeaturesObject(features: ol.Feature[], opt_options?: olx.format.WriteOptions): GeoJSONFeatureCollection;

            /**
             * Encode a geometry as a GeoJSON string.
             *
             * @api stable
             */
            writeGeometry(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): string;

            /**
             * Encode a geometry as a GeoJSON object.
             *
             * @api stable
             */
            writeGeometryObject(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): (GeoJSONGeometry | GeoJSONGeometryCollection);
        }

        /**
         * @classdesc
         * Feature format for reading and writing data in the GML format
         * version 3.1.1.
         * Currently only supports GML 3.1.1 Simple Features profile.
         *
         *     Optional configuration object.
         * @api stable
         */
        class GML extends ol.format.GMLBase {
            /**
             * @classdesc
             * Feature format for reading and writing data in the GML format
             * version 3.1.1.
             * Currently only supports GML 3.1.1 Simple Features profile.
             *
             *     Optional configuration object.
             * @api stable
             */
            constructor(opt_options?: olx.format.GMLOptions);

            /**
             * Encode an array of features in GML 3.1.1 Simple Features.
             *
             * @api stable
             */
            writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

            /**
             * Encode an array of features in the GML 3.1.1 format as an XML node.
             *
             * @api
             */
            writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node;
        }

        /**
         * @classdesc
         * Feature format for reading and writing data in the GML format,
         * version 2.1.2.
         *
         * @api
         */
        class GML2 extends ol.format.GMLBase {
            /**
             * @classdesc
             * Feature format for reading and writing data in the GML format,
             * version 2.1.2.
             *
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
         *     Optional configuration object.
         * @api
         */
        class GML3 extends ol.format.GMLBase {
            /**
             * @classdesc
             * Feature format for reading and writing data in the GML format
             * version 3.1.1.
             * Currently only supports GML 3.1.1 Simple Features profile.
             *
             *     Optional configuration object.
             * @api
             */
            constructor(opt_options?: olx.format.GMLOptions);

            /**
             * Encode a geometry in GML 3.1.1 Simple Features.
             *
             * @api
             */
            writeGeometryNode(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): Node;

            /**
             * Encode an array of features in GML 3.1.1 Simple Features.
             *
             * @api stable
             */
            writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

            /**
             * Encode an array of features in the GML 3.1.1 format as an XML node.
             *
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
         *     Optional configuration object.
         */
        class GMLBase extends ol.format.XMLFeature {
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Feature base format for reading and writing data in the GML format.
             * This class cannot be instantiated, it contains only base content that
             * is shared with versioned format classes ol.format.GML2 and
             * ol.format.GML3.
             *
             *     Optional configuration object.
             */
            constructor(opt_options?: olx.format.GMLOptions);

            /**
             * Read all features from a GML FeatureCollection.
             *
             * @api stable
             */
            readFeatures(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature[];
        }

        /**
         * @classdesc
         * Feature format for reading and writing data in the GPX format.
         *
         * @api stable
         */
        class GPX extends ol.format.XMLFeature {
            /**
             * @classdesc
             * Feature format for reading and writing data in the GPX format.
             *
             * @api stable
             */
            constructor(opt_options?: olx.format.GPXOptions);

            /**
             * Read the first feature from a GPX source.
             * Routes (`<rte>`) are converted into LineString geometries, and tracks (`<trk>`)
             * into MultiLineString. Any properties on route and track waypoints are ignored.
             *
             * @api stable
             */
            readFeature(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature;

            /**
             * Read all features from a GPX source.
             * Routes (`<rte>`) are converted into LineString geometries, and tracks (`<trk>`)
             * into MultiLineString. Any properties on route and track waypoints are ignored.
             *
             * @api stable
             */
            readFeatures(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature[];

            /**
             * Read the projection from a GPX source.
             *
             * @api stable
             */
            readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection;

            /**
             * Encode an array of features in the GPX format.
             * LineString geometries are output as routes (`<rte>`), and MultiLineString
             * as tracks (`<trk>`).
             *
             * @api stable
             */
            writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

            /**
             * Encode an array of features in the GPX format as an XML node.
             * LineString geometries are output as routes (`<rte>`), and MultiLineString
             * as tracks (`<trk>`).
             *
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
         * @api
         */
        class IGC extends ol.format.TextFeature {
            /**
             * @classdesc
             * Feature format for `*.igc` flight recording files.
             *
             * @api
             */
            constructor(opt_options?: olx.format.IGCOptions);

            /**
             * Read the feature from the IGC source.
             *
             * @api
             */
            readFeature(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature;

            /**
             * Read the feature from the source. As IGC sources contain a single
             * feature, this will return the feature in an array.
             *
             * @api
             */
            readFeatures(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature[];

            /**
             * Read the projection from the IGC source.
             *
             * @api
             */
            readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection;
        }

        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * Base class for JSON feature formats.
         *
         */
        class JSONFeature extends ol.format.Feature {
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for JSON feature formats.
             *
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
         * @api stable
         */
        class KML extends ol.format.XMLFeature {
            /**
             * @classdesc
             * Feature format for reading and writing data in the KML format.
             *
             * Note that the KML format uses the URL() constructor. Older browsers such as IE
             * which do not support this will need a URL polyfill to be loaded before use.
             *
             * @api stable
             */
            constructor(opt_options?: olx.format.KMLOptions);

            /**
             * Read the first feature from a KML source. MultiGeometries are converted into
             * GeometryCollections if they are a mix of geometry types, and into MultiPoint/
             * MultiLineString/MultiPolygon if they are all of the same type.
             *
             * @api stable
             */
            readFeature(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature;

            /**
             * Read all features from a KML source. MultiGeometries are converted into
             * GeometryCollections if they are a mix of geometry types, and into MultiPoint/
             * MultiLineString/MultiPolygon if they are all of the same type.
             *
             * @api stable
             */
            readFeatures(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature[];

            /**
             * Read the name of the KML.
             *
             * @api stable
             */
            readName(source: (Document | Node | string)): (string);

            /**
             * Read the network links of the KML.
             *
             * @api
             */
            readNetworkLinks(source: (Document | Node | string)): GlobalObject[];

            /**
             * Read the projection from a KML source.
             *
             * @api stable
             */
            readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection;

            /**
             * Encode an array of features in the KML format. GeometryCollections, MultiPoints,
             * MultiLineStrings, and MultiPolygons are output as MultiGeometries.
             *
             * @api stable
             */
            writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

            /**
             * Encode an array of features in the KML format as an XML node. GeometryCollections,
             * MultiPoints, MultiLineStrings, and MultiPolygons are output as MultiGeometries.
             *
             * @api
             */
            writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node;
        }

        /**
         * @classdesc
         * Feature format for reading data in the Mapbox MVT format.
         *
         * @api
         */
        class MVT extends ol.format.Feature {
            /**
             * @classdesc
             * Feature format for reading data in the Mapbox MVT format.
             *
             * @api
             */
            constructor(opt_options?: olx.format.MVTOptions);

            /**
             * @inheritDoc
             * @api
             */
            readFeatures(source: (Document | Node | ArrayBuffer | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature[];

            /**
             * @inheritDoc
             * @api
             */
            readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection;

            /**
             * Sets the layers that features will be read from.
             * @api
             */
            setLayers(layers: string[]): void;
        }

        module filter {
            /**
             * Create a `<Intersects>` operator to test whether a geometry-valued property
             * intersects a given geometry.
             *
             *    set on geometries when this is not provided.
             * @api
             */
            function intersects(geometryName: string, geometry: ol.geom.Geometry, opt_srsName?: string): ol.format.filter.Intersects;

            /**
             * Create a logical `<Or>` operator between two or more filter conditions.
             *
             * @api
             */
            function or(...conditions: ol.format.filter.Filter[]): ol.format.filter.Or;

            /**
             * Create a logical `<And>` operator between two or more filter conditions.
             *
             * @api
             */
            function and(...conditions: ol.format.filter.Filter[]): ol.format.filter.And;

            /**
             * Represents a logical `<Not>` operator for a filter condition.
             *
             * @api
             */
            function not(condition: ol.format.filter.Filter): ol.format.filter.Not;

            /**
             * Create a `<BBOX>` operator to test whether a geometry-valued property
             * intersects a fixed bounding box
             *
             *    set on geometries when this is not provided.
             * @api
             */
            function bbox(geometryName: string, extent: ol.Extent, opt_srsName?: string): ol.format.filter.Bbox;

            /**
             * Create a `<Within>` operator to test whether a geometry-valued property
             * is within a given geometry.
             *
             *    set on geometries when this is not provided.
             * @api
             */
            function within(geometryName: string, geometry: ol.geom.Geometry, opt_srsName?: string): ol.format.filter.Within;

            /**
             * Creates a `<PropertyIsEqualTo>` comparison operator.
             *
             * @api
             */
            function equalTo(propertyName: string, expression: string | number, opt_matchCase?: boolean): ol.format.filter.EqualTo;

            /**
             * Creates a `<PropertyIsNotEqualTo>` comparison operator.
             *
             * @api
             */
            function notEqualTo(propertyName: string, expression: string | number, opt_matchCase?: boolean): ol.format.filter.NotEqualTo;

            /**
             * Creates a `<PropertyIsLessThan>` comparison operator.
             *
             * @api
             */
            function lessThan(propertyName: string, expression: number): ol.format.filter.LessThan;

            /**
             * Creates a `<PropertyIsLessThanOrEqualTo>` comparison operator.
             *
             * @api
             */
            function lessThanOrEqualTo(propertyName: string, expression: number): ol.format.filter.LessThanOrEqualTo;

            /**
             * Creates a `<PropertyIsGreaterThan>` comparison operator.
             *
             * @api
             */
            function greaterThan(propertyName: string, expression: number): ol.format.filter.GreaterThan;

            /**
             * Creates a `<PropertyIsGreaterThanOrEqualTo>` comparison operator.
             *
             * @api
             */
            function greaterThanOrEqualTo(propertyName: string, expression: number): ol.format.filter.GreaterThanOrEqualTo;

            /**
             * Creates a `<PropertyIsNull>` comparison operator to test whether a property value
             * is null.
             *
             * @api
             */
            function isNull(propertyName: string): ol.format.filter.IsNull;

            /**
             * Creates a `<PropertyIsBetween>` comparison operator to test whether an expression
             * value lies within a range given by a lower and upper bound (inclusive).
             *
             * @api
             */
            function between(propertyName: string, lowerBoundary: number, upperBoundary: number): ol.format.filter.IsBetween;

            /**
             * Represents a `<PropertyIsLike>` comparison operator that matches a string property
             * value against a text pattern.
             *
             *    zero or more string characters. Default is '*'.
             *    string character. Default is '.'.
             *    the pattern characters. Default is '!'.
             * @api
             */
            function like(propertyName: string, pattern: string, opt_wildCard?: string, opt_singleChar?: string, opt_escapeChar?: string, opt_matchCase?: boolean): ol.format.filter.IsLike;

            /**
             * Create a `<During>` temporal operator.
             *
             * @api
             */
            function during(propertyName: string, begin: string, end: string): ol.format.filter.During;

            /**
             * @classdesc
             * Abstract class; normally only used for creating subclasses and not instantiated in apps.
             * Base class for WFS GetFeature filters.
             *
             * @struct
             * @api
             */
            class Filter {
                /**
                 * @classdesc
                 * Abstract class; normally only used for creating subclasses and not instantiated in apps.
                 * Base class for WFS GetFeature filters.
                 *
                 * @struct
                 * @api
                 */
                constructor(tagName: string);

                /**
                 * The XML tag name for a filter.
                 */
                getTagName(): string;
            }

            /**
             * @classdesc
             * Represents a spatial operator to test whether a geometry-valued property
             * relates to a given geometry.
             *
             *    set on geometries when this is not provided.
             * @api
             */
            class Spatial extends ol.format.filter.Filter {
                /**
                 * @classdesc
                 * Represents a spatial operator to test whether a geometry-valued property
                 * relates to a given geometry.
                 *
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
             *    set on geometries when this is not provided.
             * @api
             */
            class Intersects extends ol.format.filter.Spatial {
                /**
                 * @classdesc
                 * Represents a `<Intersects>` operator to test whether a geometry-valued property
                 * intersects a given geometry.
                 *
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
             *    set on geometries when this is not provided.
             * @api
             */
            class Within extends ol.format.filter.Spatial {
                /**
                 * @classdesc
                 * Represents a `<Within>` operator to test whether a geometry-valued property
                 * is within a given geometry.
                 *
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
            class LogicalNary extends ol.format.filter.Filter { }

            /**
             * @classdesc
             * Represents a logical <And> operator between two or more filter conditions.
             *
             * @api
             */
            class And extends ol.format.filter.LogicalNary {
                /**
                 * @classdesc
                 * Represents a logical <And> operator between two or more filter conditions.
                 *
                 * @api
                 */
                constructor(...conditions: ol.format.filter.Filter[]);
            }

            /**
             * @classdesc
             * Represents a logical <Or> operator between two or more filter conditions.
             *
             * @api
             */
            class Or extends ol.format.filter.LogicalNary {
                /**
                 * @classdesc
                 * Represents a logical <Or> operator between two or more filter conditions.
                 *
                 * @api
                 */
                constructor(...conditions: ol.format.filter.Filter[]);
            }

            /**
             * @classdesc
             * Abstract class; normally only used for creating subclasses and not instantiated in apps.
             * Base class for WFS GetFeature property comparison filters.
             *
             * deprecated: This class will no longer be exported starting from the next major version.
             *
             * @api
             */
            class Comparison extends ol.format.filter.Filter {
                /**
                 * @classdesc
                 * Abstract class; normally only used for creating subclasses and not instantiated in apps.
                 * Base class for WFS GetFeature property comparison filters.
                 *
                 * deprecated: This class will no longer be exported starting from the next major version.
                 *
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
             * @api
             */
            class ComparisonBinary extends ol.format.filter.Comparison {
                /**
                 * @classdesc
                 * Abstract class; normally only used for creating subclasses and not instantiated in apps.
                 * Base class for WFS GetFeature property binary comparison filters.
                 *
                 * deprecated: This class will no longer be exported starting from the next major version.
                 *
                 * @api
                 */
                constructor(tagName: string, propertyName: string, expression: string | number, opt_matchCase?: boolean);
            }

            /**
             * @classdesc
             * Represents a `<PropertyIsEqualTo>` comparison operator.
             *
             * @api
             */
            class EqualTo extends ol.format.filter.ComparisonBinary {
                /**
                 * @classdesc
                 * Represents a `<PropertyIsEqualTo>` comparison operator.
                 *
                 * @api
                 */
                constructor(propertyName: string, expression: string | number, opt_matchCase?: boolean);
            }

            /**
             * @classdesc
             * Represents a `<PropertyIsGreaterThan>` comparison operator.
             *
             * @api
             */
            class GreaterThan extends ol.format.filter.ComparisonBinary {
                /**
                 * @classdesc
                 * Represents a `<PropertyIsGreaterThan>` comparison operator.
                 *
                 * @api
                 */
                constructor(propertyName: string, expression: number);
            }

            /**
             * @classdesc
             * Represents a `<PropertyIsGreaterThanOrEqualTo>` comparison operator.
             *
             * @api
             */
            class GreaterThanOrEqualTo extends ol.format.filter.ComparisonBinary {
                /**
                 * @classdesc
                 * Represents a `<PropertyIsGreaterThanOrEqualTo>` comparison operator.
                 *
                 * @api
                 */
                constructor(propertyName: string, expression: number);
            }

            /**
             * @classdesc
             * Represents a `<PropertyIsLessThan>` comparison operator.
             *
             * @api
             */
            class LessThan extends ol.format.filter.ComparisonBinary {
                /**
                 * @classdesc
                 * Represents a `<PropertyIsLessThan>` comparison operator.
                 *
                 * @api
                 */
                constructor(propertyName: string, expression: number);
            }

            /**
             * @classdesc
             * Represents a `<PropertyIsLessThanOrEqualTo>` comparison operator.
             *
             * @api
             */
            class LessThanOrEqualTo extends ol.format.filter.ComparisonBinary {
                /**
                 * @classdesc
                 * Represents a `<PropertyIsLessThanOrEqualTo>` comparison operator.
                 *
                 * @api
                 */
                constructor(propertyName: string, expression: number);
            }

            /**
             * @classdesc
             * Represents a `<PropertyIsNotEqualTo>` comparison operator.
             *
             * @api
             */
            class NotEqualTo extends ol.format.filter.ComparisonBinary {
                /**
                 * @classdesc
                 * Represents a `<PropertyIsNotEqualTo>` comparison operator.
                 *
                 * @api
                 */
                constructor(propertyName: string, expression: string | number, opt_matchCase?: boolean);
            }

            /**
             * @classdesc
             * Represents a `<During>` comparison operator.
             *
             * @api
             */
            class During extends ol.format.filter.Comparison {
                /**
                 * @classdesc
                 * Represents a `<During>` comparison operator.
                 *
                 * @api
                 */
                constructor(propertyName: string, begin: string, end: string);
            }

            /**
             * @classdesc
             * Represents a `<PropertyIsBetween>` comparison operator.
             *
             * @api
             */
            class IsBetween extends ol.format.filter.Comparison {
                /**
                 * @classdesc
                 * Represents a `<PropertyIsBetween>` comparison operator.
                 *
                 * @api
                 */
                constructor(propertyName: string, lowerBoundary: number, upperBoundary: number);
            }

            /**
             * @classdesc
             * Represents a `<PropertyIsLike>` comparison operator.
             *
             *    zero or more string characters. Default is '*'.
             *    string character. Default is '.'.
             *    the pattern characters. Default is '!'.
             * @api
             */
            class IsLike extends ol.format.filter.Comparison {
                /**
                 * @classdesc
                 * Represents a `<PropertyIsLike>` comparison operator.
                 *
                 *    zero or more string characters. Default is '*'.
                 *    string character. Default is '.'.
                 *    the pattern characters. Default is '!'.
                 * @api
                 */
                constructor(propertyName: string, pattern: string, opt_wildCard?: string, opt_singleChar?: string, opt_escapeChar?: string, opt_matchCase?: boolean);
            }

            /**
             * @classdesc
             * Represents a `<PropertyIsNull>` comparison operator.
             *
             * @api
             */
            class IsNull extends ol.format.filter.Comparison {
                /**
                 * @classdesc
                 * Represents a `<PropertyIsNull>` comparison operator.
                 *
                 * @api
                 */
                constructor(propertyName: string);
            }

            /**
             * @classdesc
             * Represents a logical `<Not>` operator for a filter condition.
             *
             * @api
             */
            class Not extends ol.format.filter.Filter {
                /**
                 * @classdesc
                 * Represents a logical `<Not>` operator for a filter condition.
                 *
                 * @api
                 */
                constructor(condition: ol.format.filter.Filter);
            }

            /**
             * @classdesc
             * Represents a `<BBOX>` operator to test whether a geometry-valued property
             * intersects a fixed bounding box
             *
             *    set on geometries when this is not provided.
             * @api
             */
            class Bbox extends ol.format.filter.Filter {
                /**
                 * @classdesc
                 * Represents a `<BBOX>` operator to test whether a geometry-valued property
                 * intersects a fixed bounding box
                 *
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
        class OSMXML extends ol.format.XMLFeature {
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
             * @api stable
             */
            readFeatures(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature[];

            /**
             * Read the projection from an OSM source.
             *
             * @api stable
             */
            readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection;
        }

        /**
         * @classdesc
         * Feature format for reading and writing data in the Encoded
         * Polyline Algorithm Format.
         *
         *     Optional configuration object.
         * @api stable
         */
        class Polyline extends ol.format.TextFeature {
            /**
             * @classdesc
             * Feature format for reading and writing data in the Encoded
             * Polyline Algorithm Format.
             *
             *     Optional configuration object.
             * @api stable
             */
            constructor(opt_options?: olx.format.PolylineOptions);

            /**
             * Encode a list of n-dimensional points and return an encoded string
             *
             * Attention: This function will modify the passed array!
             *
             *     multiplied. The remaining decimal places will get rounded away.
             *     Default is `1e5`.
             * @api
             */
            static encodeDeltas(numbers: number[], stride: number, opt_factor?: number): string;

            /**
             * Decode a list of n-dimensional points from an encoded string
             *
             *     encoded string.
             *     be divided. Default is `1e5`.
             * @api
             */
            static decodeDeltas(encoded: string, stride: number, opt_factor?: number): number[];

            /**
             * Encode a list of floating point numbers and return an encoded string
             *
             * Attention: This function will modify the passed array!
             *
             *     multiplied. The remaining decimal places will get rounded away.
             *     Default is `1e5`.
             * @api
             */
            static encodeFloats(numbers: number[], opt_factor?: number): string;

            /**
             * Decode a list of floating point numbers from an encoded string
             *
             *     Default is `1e5`.
             * @api
             */
            static decodeFloats(encoded: string, opt_factor?: number): number[];

            /**
             * Read the feature from the Polyline source. The coordinates are assumed to be
             * in two dimensions and in latitude, longitude order.
             *
             * @api stable
             */
            readFeature(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature;

            /**
             * Read the feature from the source. As Polyline sources contain a single
             * feature, this will return the feature in an array.
             *
             * @api stable
             */
            readFeatures(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature[];

            /**
             * Read the geometry from the source.
             *
             * @api stable
             */
            readGeometry(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.geom.Geometry;

            /**
             * Read the projection from a Polyline source.
             *
             * @api stable
             */
            readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection;

            /**
             * Write a single geometry in Polyline format.
             *
             * @api stable
             */
            writeGeometry(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): string;
        }

        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * Base class for text feature formats.
         *
         */
        class TextFeature extends ol.format.Feature {
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for text feature formats.
             *
             */
            constructor();
        }

        /**
         * @classdesc
         * Feature format for reading data in the TopoJSON format.
         *
         * @api stable
         */
        class TopoJSON extends ol.format.JSONFeature {
            /**
             * @classdesc
             * Feature format for reading data in the TopoJSON format.
             *
             * @api stable
             */
            constructor(opt_options?: olx.format.TopoJSONOptions);

            /**
             * Read all features from a TopoJSON source.
             *
             * @api stable
             */
            readFeatures(source: (Document | Node | GlobalObject | string)): ol.Feature[];

            /**
             * Read the projection from a TopoJSON source.
             *
             * @api stable
             */
            readProjection(object: (Document | Node | GlobalObject | string)): ol.proj.Projection;
        }

        /**
         * @classdesc
         * Feature format for reading and writing data in the WFS format.
         * By default, supports WFS version 1.1.0. You can pass a GML format
         * as option if you want to read a WFS that contains GML2 (WFS 1.0.0).
         * Also see {@link ol.format.GMLBase} which is used by this format.
         *
         *     Optional configuration object.
         * @api stable
         */
        class WFS extends ol.format.XMLFeature {
            /**
             * @classdesc
             * Feature format for reading and writing data in the WFS format.
             * By default, supports WFS version 1.1.0. You can pass a GML format
             * as option if you want to read a WFS that contains GML2 (WFS 1.0.0).
             * Also see {@link ol.format.GMLBase} which is used by this format.
             *
             *     Optional configuration object.
             * @api stable
             */
            constructor(opt_options?: olx.format.WFSOptions);

            /**
             * Read all features from a WFS FeatureCollection.
             *
             * @api stable
             */
            readFeatures(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature[];

            /**
             * Read transaction response of the source.
             *
             * @api stable
             */
            readTransactionResponse(source: (Document | Node | GlobalObject | string)): (ol.WFSTransactionResponse);

            /**
             * Read feature collection metadata of the source.
             *
             *     FeatureCollection metadata.
             * @api stable
             */
            readFeatureCollectionMetadata(source: (Document | Node | GlobalObject | string)): (ol.WFSFeatureCollectionMetadata);

            /**
             * Encode format as WFS `GetFeature` and return the Node.
             *
             * @api stable
             */
            writeGetFeature(options: olx.format.WFSWriteGetFeatureOptions): Node;

            /**
             * Encode format as WFS `Transaction` and return the Node.
             *
             * @api stable
             */
            writeTransaction(inserts: ol.Feature[], updates: ol.Feature[], deletes: ol.Feature[], options: olx.format.WFSWriteTransactionOptions): Node;

            /**
             * Read the projection from a WFS source.
             *
             * @api stable
             */
            readProjection(source: (Document | Node | GlobalObject | string)): ol.proj.Projection;
        }

        /**
         * @classdesc
         * Geometry format for reading and writing data in the `WellKnownText` (WKT)
         * format.
         *
         * @api stable
         */
        class WKT extends ol.format.TextFeature {
            /**
             * @classdesc
             * Geometry format for reading and writing data in the `WellKnownText` (WKT)
             * format.
             *
             * @api stable
             */
            constructor(opt_options?: olx.format.WKTOptions);

            /**
             * Read a feature from a WKT source.
             *
             * @api stable
             */
            readFeature(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature;

            /**
             * Read all features from a WKT source.
             *
             * @api stable
             */
            readFeatures(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature[];

            /**
             * Read a single geometry from a WKT source.
             *
             * @api stable
             */
            readGeometry(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.geom.Geometry;

            /**
             * Encode a feature as a WKT string.
             *
             * @api stable
             */
            writeFeature(feature: ol.Feature, opt_options?: olx.format.WriteOptions): string;

            /**
             * Encode an array of features as a WKT string.
             *
             * @api stable
             */
            writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;

            /**
             * Write a single geometry as a WKT string.
             *
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
        class WMSCapabilities extends ol.format.XML {
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
             * @api
             */
            read(source: (Document | Node | string)): GlobalObject;
        }

        /**
         * @classdesc
         * Format for reading WMSGetFeatureInfo format. It uses
         * {@link ol.format.GML2} to read features.
         *
         * @api
         */
        class WMSGetFeatureInfo extends ol.format.XMLFeature {
            /**
             * @classdesc
             * Format for reading WMSGetFeatureInfo format. It uses
             * {@link ol.format.GML2} to read features.
             *
             * @api
             */
            constructor(opt_options?: olx.format.WMSGetFeatureInfoOptions);

            /**
             * Read all features from a WMSGetFeatureInfo response.
             *
             * @api stable
             */
            readFeatures(source: (Document | Node | GlobalObject | string), opt_options?: olx.format.ReadOptions): ol.Feature[];
        }

        /**
         * @classdesc
         * Format for reading WMTS capabilities data.
         *
         * @api
         */
        class WMTSCapabilities extends ol.format.XML {
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
             * @api
             */
            read(source: (Document | Node | string)): GlobalObject;
        }

        /**
         * @classdesc
         * Generic format for reading non-feature XML data
         *
         * @struct
         */
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
         *
         */
        class XMLFeature extends ol.format.Feature {
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for XML feature formats.
             *
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
     * @api stable
     */
    class Geolocation extends ol.Object {
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
         * @api stable
         */
        constructor(opt_options?: olx.GeolocationOptions);

        /**
         * Get the accuracy of the position in meters.
         *     meters.
         * @observable
         * @api stable
         */
        getAccuracy(): (number);

        /**
         * Get a geometry of the position accuracy.
         * @observable
         * @api stable
         */
        getAccuracyGeometry(): ol.geom.Geometry;

        /**
         * Get the altitude associated with the position.
         *     sea level.
         * @observable
         * @api stable
         */
        getAltitude(): (number);

        /**
         * Get the altitude accuracy of the position.
         *     meters.
         * @observable
         * @api stable
         */
        getAltitudeAccuracy(): (number);

        /**
         * Get the heading as radians clockwise from North.
         * @observable
         * @api stable
         */
        getHeading(): (number);

        /**
         * Get the position of the device.
         *     in the current projection.
         * @observable
         * @api stable
         */
        getPosition(): (ol.Coordinate);

        /**
         * Get the projection associated with the position.
         *     reported in.
         * @observable
         * @api stable
         */
        getProjection(): (ol.proj.Projection);

        /**
         * Get the speed in meters per second.
         *     per second.
         * @observable
         * @api stable
         */
        getSpeed(): (number);

        /**
         * Determine if the device location is being tracked.
         * @observable
         * @api stable
         */
        getTracking(): boolean;

        /**
         * Get the tracking options.
         * @see http://www.w3.org/TR/geolocation-API/#position-options
         *     the [HTML5 Geolocation spec
         *     ](http://www.w3.org/TR/geolocation-API/#position_options_interface).
         * @observable
         * @api stable
         */
        getTrackingOptions(): (PositionOptions);

        /**
         * Set the projection to use for transforming the coordinates.
         *     reported in.
         * @observable
         * @api stable
         */
        setProjection(projection: ol.proj.Projection): void;

        /**
         * Enable or disable tracking.
         * @observable
         * @api stable
         */
        setTracking(tracking: boolean): void;

        /**
         * Set the tracking options.
         * @see http://www.w3.org/TR/geolocation-API/#position-options
         *     [HTML5 Geolocation spec
         *     ](http://www.w3.org/TR/geolocation-API/#position_options_interface).
         * @observable
         * @api stable
         */
        setTrackingOptions(options: PositionOptions): void;
    }

    module geom {
        /**
         * @classdesc
         * Circle geometry.
         *
         * @api
         */
        class Circle extends ol.geom.SimpleGeometry {
            /**
             * @classdesc
             * Circle geometry.
             *
             * @api
             */
            constructor(center: ol.Coordinate, opt_radius?: number, opt_layout?: ol.geom.GeometryLayout);

            /**
             * Make a complete copy of the geometry.
             * @api
             */
            clone(): ol.geom.Circle;

            /**
             * Return the center of the circle as {@link ol.Coordinate coordinate}.
             * @api
             */
            getCenter(): ol.Coordinate;

            /**
             * Return the radius of the circle.
             * @api
             */
            getRadius(): number;

            /**
             * @inheritDoc
             * @api
             */
            getType(): ol.geom.GeometryType;

            /**
             * @inheritDoc
             * @api stable
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the center of the circle as {@link ol.Coordinate coordinate}.
             * @api
             */
            setCenter(center: ol.Coordinate): void;

            /**
             * Set the center (as {@link ol.Coordinate coordinate}) and the radius (as
             * number) of the circle.
             * @api
             */
            setCenterAndRadius(center: ol.Coordinate, radius: number, opt_layout?: ol.geom.GeometryLayout): void;

            /**
             * Set the radius of the circle. The radius is in the units of the projection.
             * @api
             */
            setRadius(radius: number): void;
        }

        /**
         * The geometry type. One of `'Point'`, `'LineString'`, `'LinearRing'`,
         * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
         * `'GeometryCollection'`, `'Circle'`.
         */
        type GeometryType = "Point" | "LineString" | "LinearRing" | "Polygon" | "MultiPoint" | "MultiLineString" | "MultiPolygon" | "GeometryCollection" | "Circle";

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
        class Geometry extends ol.Object {
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
             * @api stable
             */
            getClosestPoint(point: ol.Coordinate, opt_closestPoint?: ol.Coordinate): ol.Coordinate;

            /**
             * Returns true if this geometry includes the specified coordinate. If the
             * coordinate is on the boundary of the geometry, returns false.
             * @api
             */
            intersectsCoordinate(coordinate: ol.Coordinate): boolean;

            /**
             * Get the extent of the geometry.
             * @api stable
             */
            getExtent(opt_extent?: ol.Extent): ol.Extent;

            /**
             * Rotate the geometry around a given coordinate. This modifies the geometry
             * coordinates in place.
             * @api
             */
            rotate(angle: number, anchor: ol.Coordinate): void;

            /**
             * Scale the geometry (with an optional origin).  This modifies the geometry
             * coordinates in place.
             *     sx).
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
             *     geometry.
             * @api
             */
            simplify(tolerance: number): ol.geom.Geometry;

            /**
             * Transform each coordinate of the geometry from one coordinate reference
             * system to another. The geometry is modified in place.
             * For example, a line will be transformed to a line and a circle to a circle.
             * If you do not want the geometry modified in place, first `clone()` it and
             * then use this function on the clone.
             *
             *     string identifier or a {@link ol.proj.Projection} object.
             *     string identifier or a {@link ol.proj.Projection} object.
             *     modified in place.
             * @api stable
             */
            transform(source: ol.ProjectionLike, destination: ol.ProjectionLike): ol.geom.Geometry;

            /**
             * Get the type of this geometry.
             */
            getType(): ol.geom.GeometryType;
        }

        /**
         * @classdesc
         * An array of {@link ol.geom.Geometry} objects.
         *
         * @api stable
         */
        class GeometryCollection extends ol.geom.Geometry {
            /**
             * @classdesc
             * An array of {@link ol.geom.Geometry} objects.
             *
             * @api stable
             */
            constructor(opt_geometries?: ol.geom.Geometry[]);

            /**
             * Make a complete copy of the geometry.
             * @api stable
             */
            clone(): ol.geom.GeometryCollection;

            /**
             * Return the geometries that make up this geometry collection.
             * @api stable
             */
            getGeometries(): ol.geom.Geometry[];

            /**
             * @inheritDoc
             * @api stable
             */
            getType(): ol.geom.GeometryType;

            /**
             * @inheritDoc
             * @api stable
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the geometries that make up this geometry collection.
             * @api stable
             */
            setGeometries(geometries: ol.geom.Geometry[]): void;

            /**
             * @inheritDoc
             * @api stable
             */
            applyTransform(transformFn: ol.TransformFunction): void;

            /**
             * Translate the geometry.
             * @api
             */
            translate(deltaX: number, deltaY: number): void;
        }

        /**
         * @classdesc
         * Linear ring geometry. Only used as part of polygon; cannot be rendered
         * on its own.
         *
         * @api stable
         */
        class LinearRing extends ol.geom.SimpleGeometry {
            /**
             * @classdesc
             * Linear ring geometry. Only used as part of polygon; cannot be rendered
             * on its own.
             *
             * @api stable
             */
            constructor(coordinates: ol.Coordinate[], opt_layout?: ol.geom.GeometryLayout);

            /**
             * Make a complete copy of the geometry.
             * @api stable
             */
            clone(): ol.geom.LinearRing;

            /**
             * Return the area of the linear ring on projected plane.
             * @api stable
             */
            getArea(): number;

            /**
             * Return the coordinates of the linear ring.
             * @api stable
             */
            getCoordinates(): ol.Coordinate[];

            /**
             * @inheritDoc
             * @api stable
             */
            getType(): ol.geom.GeometryType;

            /**
             * Set the coordinates of the linear ring.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate[], opt_layout?: ol.geom.GeometryLayout): void;
        }

        /**
         * @classdesc
         * Linestring geometry.
         *
         * @api stable
         */
        class LineString extends ol.geom.SimpleGeometry {
            /**
             * @classdesc
             * Linestring geometry.
             *
             * @api stable
             */
            constructor(coordinates: ol.Coordinate[], opt_layout?: ol.geom.GeometryLayout);

            /**
             * Append the passed coordinate to the coordinates of the linestring.
             * @api stable
             */
            appendCoordinate(coordinate: ol.Coordinate): void;

            /**
             * Make a complete copy of the geometry.
             * @api stable
             */
            clone(): ol.geom.LineString;

            /**
             * Iterate over each segment, calling the provided callback.
             * If the callback returns a truthy value the function returns that
             * value immediately. Otherwise the function returns `false`.
             *
             *     called for each segment.
             *     within callback.
             * @template T,S
             * @api
             */
            forEachSegment<T, S>(callback: ((this: S, start: ol.Coordinate, end: ol.Coordinate) => T), opt_this?: S): (T | boolean);

            /**
             * Returns the coordinate at `m` using linear interpolation, or `null` if no
             * such coordinate exists.
             *
             * `opt_extrapolate` controls extrapolation beyond the range of Ms in the
             * MultiLineString. If `opt_extrapolate` is `true` then Ms less than the first
             * M will return the first coordinate and Ms greater than the last M will
             * return the last coordinate.
             *
             * @api stable
             */
            getCoordinateAtM(m: number, opt_extrapolate?: boolean): ol.Coordinate;

            /**
             * Return the coordinates of the linestring.
             * @api stable
             */
            getCoordinates(): ol.Coordinate[];

            /**
             * Return the coordinate at the provided fraction along the linestring.
             * The `fraction` is a number between 0 and 1, where 0 is the start of the
             * linestring and 1 is the end.
             *     be modified. If not provided, a new coordinate will be returned.
             * @api
             */
            getCoordinateAt(fraction: number, opt_dest?: ol.Coordinate): ol.Coordinate;

            /**
             * Return the length of the linestring on projected plane.
             * @api stable
             */
            getLength(): number;

            /**
             * @inheritDoc
             * @api stable
             */
            getType(): ol.geom.GeometryType;

            /**
             * @inheritDoc
             * @api stable
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the coordinates of the linestring.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate[], opt_layout?: ol.geom.GeometryLayout): void;
        }

        /**
         * @classdesc
         * Multi-linestring geometry.
         *
         * @api stable
         */
        class MultiLineString extends ol.geom.SimpleGeometry {
            /**
             * @classdesc
             * Multi-linestring geometry.
             *
             * @api stable
             */
            constructor(coordinates: ol.Coordinate[][], opt_layout?: ol.geom.GeometryLayout);

            /**
             * Append the passed linestring to the multilinestring.
             * @api stable
             */
            appendLineString(lineString: ol.geom.LineString): void;

            /**
             * Make a complete copy of the geometry.
             * @api stable
             */
            clone(): ol.geom.MultiLineString;

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
             * @api stable
             */
            getCoordinateAtM(m: number, opt_extrapolate?: boolean, opt_interpolate?: boolean): ol.Coordinate;

            /**
             * Return the coordinates of the multilinestring.
             * @api stable
             */
            getCoordinates(): ol.Coordinate[][];

            /**
             * Return the linestring at the specified index.
             * @api stable
             */
            getLineString(index: number): ol.geom.LineString;

            /**
             * Return the linestrings of this multilinestring.
             * @api stable
             */
            getLineStrings(): ol.geom.LineString[];

            /**
             * @inheritDoc
             * @api stable
             */
            getType(): ol.geom.GeometryType;

            /**
             * @inheritDoc
             * @api stable
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the coordinates of the multilinestring.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate[][], opt_layout?: ol.geom.GeometryLayout): void;
        }

        /**
         * @classdesc
         * Multi-point geometry.
         *
         * @api stable
         */
        class MultiPoint extends ol.geom.SimpleGeometry {
            /**
             * @classdesc
             * Multi-point geometry.
             *
             * @api stable
             */
            constructor(coordinates: ol.Coordinate[], opt_layout?: ol.geom.GeometryLayout);

            /**
             * Append the passed point to this multipoint.
             * @api stable
             */
            appendPoint(point: ol.geom.Point): void;

            /**
             * Make a complete copy of the geometry.
             * @api stable
             */
            clone(): ol.geom.MultiPoint;

            /**
             * Return the coordinates of the multipoint.
             * @api stable
             */
            getCoordinates(): ol.Coordinate[];

            /**
             * Return the point at the specified index.
             * @api stable
             */
            getPoint(index: number): ol.geom.Point;

            /**
             * Return the points of this multipoint.
             * @api stable
             */
            getPoints(): ol.geom.Point[];

            /**
             * @inheritDoc
             * @api stable
             */
            getType(): ol.geom.GeometryType;

            /**
             * @inheritDoc
             * @api stable
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the coordinates of the multipoint.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate[], opt_layout?: ol.geom.GeometryLayout): void;
        }

        /**
         * @classdesc
         * Multi-polygon geometry.
         *
         * @api stable
         */
        class MultiPolygon extends ol.geom.SimpleGeometry {
            /**
             * @classdesc
             * Multi-polygon geometry.
             *
             * @api stable
             */
            constructor(coordinates: ol.Coordinate[][][], opt_layout?: ol.geom.GeometryLayout);

            /**
             * Append the passed polygon to this multipolygon.
             * @api stable
             */
            appendPolygon(polygon: ol.geom.Polygon): void;

            /**
             * Make a complete copy of the geometry.
             * @api stable
             */
            clone(): ol.geom.MultiPolygon;

            /**
             * Return the area of the multipolygon on projected plane.
             * @api stable
             */
            getArea(): number;

            /**
             * Get the coordinate array for this geometry.  This array has the structure
             * of a GeoJSON coordinate array for multi-polygons.
             *
             *     rule (counter-clockwise for exterior and clockwise for interior rings).
             *     If `false`, coordinates will be oriented according to the left-hand rule
             *     (clockwise for exterior and counter-clockwise for interior rings).
             *     By default, coordinate orientation will depend on how the geometry was
             *     constructed.
             * @api stable
             */
            getCoordinates(opt_right?: boolean): ol.Coordinate[][][];

            /**
             * Return the interior points as {@link ol.geom.MultiPoint multipoint}.
             * @api stable
             */
            getInteriorPoints(): ol.geom.MultiPoint;

            /**
             * Return the polygon at the specified index.
             * @api stable
             */
            getPolygon(index: number): ol.geom.Polygon;

            /**
             * Return the polygons of this multipolygon.
             * @api stable
             */
            getPolygons(): ol.geom.Polygon[];

            /**
             * @inheritDoc
             * @api stable
             */
            getType(): ol.geom.GeometryType;

            /**
             * @inheritDoc
             * @api stable
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the coordinates of the multipolygon.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate[][][], opt_layout?: ol.geom.GeometryLayout): void;
        }

        /**
         * @classdesc
         * Point geometry.
         *
         * @api stable
         */
        class Point extends ol.geom.SimpleGeometry {
            /**
             * @classdesc
             * Point geometry.
             *
             * @api stable
             */
            constructor(coordinates: ol.Coordinate, opt_layout?: ol.geom.GeometryLayout);

            /**
             * Make a complete copy of the geometry.
             * @api stable
             */
            clone(): ol.geom.Point;

            /**
             * Return the coordinate of the point.
             * @api stable
             */
            getCoordinates(): ol.Coordinate;

            /**
             * @inheritDoc
             * @api stable
             */
            getType(): ol.geom.GeometryType;

            /**
             * @inheritDoc
             * @api stable
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the coordinate of the point.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate, opt_layout?: ol.geom.GeometryLayout): void;
        }

        /**
         * @classdesc
         * Polygon geometry.
         *
         * @api stable
         */
        class Polygon extends ol.geom.SimpleGeometry {
            /**
             * @classdesc
             * Polygon geometry.
             *
             * @api stable
             */
            constructor(coordinates: ol.Coordinate[][], opt_layout?: ol.geom.GeometryLayout);

            /**
             * Append the passed linear ring to this polygon.
             * @api stable
             */
            appendLinearRing(linearRing: ol.geom.LinearRing): void;

            /**
             * Make a complete copy of the geometry.
             * @api stable
             */
            clone(): ol.geom.Polygon;

            /**
             * Return the area of the polygon on projected plane.
             * @api stable
             */
            getArea(): number;

            /**
             * Get the coordinate array for this geometry.  This array has the structure
             * of a GeoJSON coordinate array for polygons.
             *
             *     rule (counter-clockwise for exterior and clockwise for interior rings).
             *     If `false`, coordinates will be oriented according to the left-hand rule
             *     (clockwise for exterior and counter-clockwise for interior rings).
             *     By default, coordinate orientation will depend on how the geometry was
             *     constructed.
             * @api stable
             */
            getCoordinates(opt_right?: boolean): ol.Coordinate[][];

            /**
             * Return an interior point of the polygon.
             * @api stable
             */
            getInteriorPoint(): ol.geom.Point;

            /**
             * Return the number of rings of the polygon,  this includes the exterior
             * ring and any interior rings.
             *
             * @api
             */
            getLinearRingCount(): number;

            /**
             * Return the Nth linear ring of the polygon geometry. Return `null` if the
             * given index is out of range.
             * The exterior linear ring is available at index `0` and the interior rings
             * at index `1` and beyond.
             *
             * @api stable
             */
            getLinearRing(index: number): ol.geom.LinearRing;

            /**
             * Return the linear rings of the polygon.
             * @api stable
             */
            getLinearRings(): ol.geom.LinearRing[];

            /**
             * @inheritDoc
             * @api stable
             */
            getType(): ol.geom.GeometryType;

            /**
             * @inheritDoc
             * @api stable
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the coordinates of the polygon.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate[][], opt_layout?: ol.geom.GeometryLayout): void;

            /**
             * Create an approximation of a circle on the surface of a sphere.
             *     the polygon vertices.
             *     polygon. Default is `32`.
             * @api stable
             */
            static circular(sphere: ol.Sphere, center: ol.Coordinate, radius: number, opt_n?: number): ol.geom.Polygon;

            /**
             * Create a polygon from an extent. The layout used is `XY`.
             * @api
             */
            static fromExtent(extent: ol.Extent): ol.geom.Polygon;

            /**
             * Create a regular polygon from a circle.
             *     radians. Default is 0.
             * @api
             */
            static fromCircle(circle: ol.geom.Circle, opt_sides?: number, opt_angle?: number): ol.geom.Polygon;
        }

        /**
         * @classdesc
         * Abstract base class; only used for creating subclasses; do not instantiate
         * in apps, as cannot be rendered.
         *
         * @api stable
         */
        class SimpleGeometry extends ol.geom.Geometry {
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
             * @api stable
             */
            getFirstCoordinate(): ol.Coordinate;

            /**
             * Return the last coordinate of the geometry.
             * @api stable
             */
            getLastCoordinate(): ol.Coordinate;

            /**
             * Return the {@link ol.geom.GeometryLayout layout} of the geometry.
             * @api stable
             */
            getLayout(): ol.geom.GeometryLayout;

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
     * @api
     */
    class Graticule {
        /**
         * Render a grid for a coordinate system on a map.
         * @api
         */
        constructor(opt_options?: olx.GraticuleOptions);

        /**
         * Get the map associated with this graticule.
         * @api
         */
        getMap(): ol.Map;

        /**
         * Get the list of meridians.  Meridians are lines of equal longitude.
         * @api
         */
        getMeridians(): ol.geom.LineString[];

        /**
         * Get the list of parallels.  Pallels are lines of equal latitude.
         * @api
         */
        getParallels(): ol.geom.LineString[];

        /**
         * Set the map for this graticule.  The graticule will be rendered on the
         * provided map.
         * @api
         */
        setMap(map: ol.Map): void;
    }

    module has {
        /**
         * The ratio between physical pixels and device-independent pixels
         * (dips) on the device (`window.devicePixelRatio`).
         * @const
         * @api stable
         */
        const DEVICE_PIXEL_RATIO: number;

        /**
         * True if both the library and browser support Canvas.  Always `false`
         * if `ol.ENABLE_CANVAS` is set to `false` at compile time.
         * @const
         * @api stable
         */
        const CANVAS: boolean;

        /**
         * Indicates if DeviceOrientation is supported in the user's browser.
         * @const
         * @api stable
         */
        const DEVICE_ORIENTATION: boolean;

        /**
         * Is HTML5 geolocation supported in the current browser?
         * @const
         * @api stable
         */
        const GEOLOCATION: boolean;

        /**
         * True if browser supports touch events.
         * @const
         * @api stable
         */
        const TOUCH: boolean;

        /**
         * True if both OpenLayers and browser support WebGL.  Always `false`
         * if `ol.ENABLE_WEBGL` is set to `false` at compile time.
         * @const
         * @api stable
         */
        const WEBGL: boolean;
    }

    class Image extends ol.ImageBase {
        constructor(extent: ol.Extent, resolution: (number), pixelRatio: number, attributions: ol.Attribution[], src: string, crossOrigin?: string, imageLoadFunction?: ol.ImageLoadFunctionType);

        /**
         * Get the HTML image element (may be a Canvas, Image, or Video).
         * @api
         */
        getImage(opt_context?: GlobalObject): (HTMLCanvasElement | Image | HTMLVideoElement);

        /**
         * Load the image or retry if loading previously failed.
         * Loading is taken care of by the tile queue, and calling this method is
         * only needed for preloading or for reloading in case of an error.
         * @api
         */
        load(): void;
    }

    class ImageBase extends ol.events.EventTarget {
        constructor(extent: ol.Extent, resolution: (number), pixelRatio: number, state: ol.ImageState, attributions: ol.Attribution[]);
    }

    type ImageState = number;

    class ImageTile extends ol.Tile {
        constructor(tileCoord: ol.TileCoord, state: ol.Tile.State, src: string, crossOrigin?: string, tileLoadFunction?: ol.TileLoadFunctionType);

        /**
         * Get the image element for this tile.
         * @inheritDoc
         * @api
         */
        getImage(opt_context?: GlobalObject): (HTMLCanvasElement | HTMLImageElement | HTMLVideoElement);
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
     * @api
     */
    function inherits(childCtor: (() => any), parentCtor: (() => any)): void;

    module interaction {
        /**
         * @classdesc
         * Allows the user to zoom by double-clicking on the map.
         *
         * @api stable
         */
        class DoubleClickZoom extends ol.interaction.Interaction {
            /**
             * @classdesc
             * Allows the user to zoom by double-clicking on the map.
             *
             * @api stable
             */
            constructor(opt_options?: olx.interaction.DoubleClickZoomOptions);

            /**
             * Handles the {@link ol.MapBrowserEvent map browser event} (if it was a
             * doubleclick) and eventually zooms the map.
             * @api
             */
            static handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean;
        }

        /**
         * @classdesc
         * Handles input of vector data by drag and drop.
         *
         * @fires ol.interaction.DragAndDropEvent
         * @api stable
         */
        class DragAndDrop extends ol.interaction.Interaction {
            /**
             * @classdesc
             * Handles input of vector data by drag and drop.
             *
             * @fires ol.interaction.DragAndDropEvent
             * @api stable
             */
            constructor(opt_options?: olx.interaction.DragAndDropOptions);

            /**
             * Handles the {@link ol.MapBrowserEvent map browser event} unconditionally and
             * neither prevents the browser default nor stops event propagation.
             * @api
             */
            static handleEvent: any;
        }

        module DragAndDrop {
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.DragAndDrop} instances are instances
             * of this type.
             *
             */
            class Event extends ol.events.Event {
                /**
                 * @classdesc
                 * Events emitted by {@link ol.interaction.DragAndDrop} instances are instances
                 * of this type.
                 *
                 */
                constructor(type: ol.interaction.DragAndDropEventType, file: File, opt_features?: ol.Feature[], opt_projection?: ol.proj.Projection);

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
         * @api stable
         */
        class DragBox extends ol.interaction.Pointer {
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
             * @api stable
             */
            constructor(opt_options?: olx.interaction.DragBoxOptions);

            /**
             * Returns geometry of last drawn box.
             * @api stable
             */
            getGeometry(): ol.geom.Polygon;
        }

        module DragBox {
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.DragBox} instances are instances of
             * this type.
             *
             */
            class Event extends ol.events.Event {
                /**
                 * @classdesc
                 * Events emitted by {@link ol.interaction.DragBox} instances are instances of
                 * this type.
                 *
                 */
                constructor(type: string, coordinate: ol.Coordinate, mapBrowserEvent: ol.MapBrowserEvent);

                /**
                 * The coordinate of the drag event.
                 * @const
                 * @api stable
                 */
                coordinate: ol.Coordinate;

                /**
                 * @const
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
         * @api stable
         */
        class DragPan extends ol.interaction.Pointer {
            /**
             * @classdesc
             * Allows the user to pan the map by dragging the map.
             *
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
         * @api stable
         */
        class DragRotate extends ol.interaction.Pointer {
            /**
             * @classdesc
             * Allows the user to rotate the map by clicking and dragging on the map,
             * normally combined with an {@link ol.events.condition} that limits
             * it to when the alt and shift keys are held down.
             *
             * This interaction is only supported for mouse devices.
             *
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
         * @api stable
         */
        class DragRotateAndZoom extends ol.interaction.Pointer {
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
         * @api stable
         */
        class DragZoom extends ol.interaction.DragBox {
            /**
             * @classdesc
             * Allows the user to zoom the map by clicking and dragging on the map,
             * normally combined with an {@link ol.events.condition} that limits
             * it to when a key, shift by default, is held down.
             *
             * To change the style of the box, use CSS and the `.ol-dragzoom` selector, or
             * your custom one configured with `className`.
             *
             * @api stable
             */
            constructor(opt_options?: olx.interaction.DragZoomOptions);
        }

        module Draw {
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.Draw} instances are instances of
             * this type.
             *
             */
            class Event extends ol.events.Event {
                /**
                 * @classdesc
                 * Events emitted by {@link ol.interaction.Draw} instances are instances of
                 * this type.
                 *
                 */
                constructor(type: ol.interaction.DrawEventType, feature: ol.Feature);

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
         * @api stable
         */
        class Draw extends ol.interaction.Pointer {
            /**
             * @classdesc
             * Interaction for drawing feature geometries.
             *
             * @fires ol.interaction.DrawEvent
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
             * @api
             */
            extend(feature: ol.Feature): void;

            /**
             * Create a `geometryFunction` that will create a box-shaped polygon (aligned
             * with the coordinate system axes).  Use this with the draw interaction and
             * `type: 'Circle'` to return a box instead of a circle geometry.
             * @api
             */
            static createBox(): ol.DrawGeometryFunctionType;

            /**
             * Create a `geometryFunction` for `mode: 'Circle'` that will create a regular
             * polygon with a user specified number of sides and start angle instead of an
             * `ol.geom.Circle` geometry.
             *     32.
             *     Default is the angle defined by the heading from the center of the
             *     regular polygon to the current pointer position.
             *     polygon.
             * @api
             */
            static createRegularPolygon(opt_sides?: number, opt_angle?: number): ol.DrawGeometryFunctionType;
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
         * interactions to be used with the ol.Map constructor's interactions option.
         * @api stable
         */
        function defaults(opt_options?: olx.interaction.DefaultsOptions): ol.Collection<ol.interaction.Interaction>;

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
         * @api
         */
        class Interaction extends ol.Object {
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
             * @api
             */
            constructor(options: olx.interaction.InteractionOptions);

            /**
             * Return whether the interaction is currently active.
             * @observable
             * @api
             */
            getActive(): boolean;

            /**
             * Get the map associated with this interaction.
             * @api
             */
            getMap(): ol.Map;

            /**
             * Activate or deactivate the interaction.
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
         * @api stable
         */
        class KeyboardPan extends ol.interaction.Interaction {
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
             * @api stable
             */
            constructor(opt_options?: olx.interaction.KeyboardPanOptions);

            /**
             * Handles the {@link ol.MapBrowserEvent map browser event} if it was a
             * `KeyEvent`, and decides the direction to pan to (if an arrow key was
             * pressed).
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
         * @api stable
         */
        class KeyboardZoom extends ol.interaction.Interaction {
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
             * @api stable
             */
            constructor(opt_options?: olx.interaction.KeyboardZoomOptions);

            /**
             * Handles the {@link ol.MapBrowserEvent map browser event} if it was a
             * `KeyEvent`, and decides whether to zoom in or out (depending on whether the
             * key pressed was '+' or '-').
             * @api
             */
            static handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean;
        }

        module Modify {
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.Modify} instances are instances of
             * this type.
             *
             *     {@link ol.MapBrowserPointerEvent}.
             */
            class Event extends ol.events.Event {
                /**
                 * @classdesc
                 * Events emitted by {@link ol.interaction.Modify} instances are instances of
                 * this type.
                 *
                 *     {@link ol.MapBrowserPointerEvent}.
                 */
                constructor(type: ol.ModifyEventType, features: ol.Collection<ol.Feature>, mapBrowserPointerEvent: ol.MapBrowserPointerEvent);

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
         * @fires ol.interaction.ModifyEvent
         * @api
         */
        class Modify extends ol.interaction.Pointer {
            /**
             * @classdesc
             * Interaction for modifying feature geometries.
             *
             * @fires ol.interaction.ModifyEvent
             * @api
             */
            constructor(options: olx.interaction.ModifyOptions);

            /**
             * Removes the vertex currently being pointed.
             * @api
             */
            removePoint(): boolean;
        }

        /**
         * @classdesc
         * Allows the user to zoom the map by scrolling the mouse wheel.
         *
         * @api stable
         */
        class MouseWheelZoom extends ol.interaction.Interaction {
            /**
             * @classdesc
             * Allows the user to zoom the map by scrolling the mouse wheel.
             *
             * @api stable
             */
            constructor(opt_options?: olx.interaction.MouseWheelZoomOptions);

            /**
             * Handles the {@link ol.MapBrowserEvent map browser event} (if it was a
             * mousewheel-event) and eventually zooms the map.
             * @api
             */
            static handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Enable or disable using the mouse's location as an anchor when zooming
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
         * @api stable
         */
        class PinchRotate extends ol.interaction.Pointer {
            /**
             * @classdesc
             * Allows the user to rotate the map by twisting with two fingers
             * on a touch screen.
             *
             * @api stable
             */
            constructor(opt_options?: olx.interaction.PinchRotateOptions);
        }

        /**
         * @classdesc
         * Allows the user to zoom the map by pinching with two fingers
         * on a touch screen.
         *
         * @api stable
         */
        class PinchZoom extends ol.interaction.Pointer {
            /**
             * @classdesc
             * Allows the user to zoom the map by pinching with two fingers
             * on a touch screen.
             *
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
         * @api
         */
        class Pointer extends ol.interaction.Interaction {
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
             * @api
             */
            constructor(opt_options?: olx.interaction.PointerOptions);

            /**
             * Handles the {@link ol.MapBrowserEvent map browser event} and may call into
             * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
             * detected.
             * @api
             */
            static handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean;
        }

        module Select {
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.Select} instances are instances of
             * this type.
             *
             *     {@link ol.MapBrowserEvent}.
             */
            class Event extends ol.events.Event {
                /**
                 * @classdesc
                 * Events emitted by {@link ol.interaction.Select} instances are instances of
                 * this type.
                 *
                 *     {@link ol.MapBrowserEvent}.
                 */
                constructor(type: string, selected: ol.Feature[], deselected: ol.Feature[], mapBrowserEvent: ol.MapBrowserEvent);

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
         * @fires ol.interaction.SelectEvent
         * @api stable
         */
        class Select extends ol.interaction.Interaction {
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
             * @fires ol.interaction.SelectEvent
             * @api stable
             */
            constructor(opt_options?: olx.interaction.SelectOptions);

            /**
             * Get the selected features.
             * @api stable
             */
            getFeatures(): ol.Collection<ol.Feature>;

            /**
             * Returns the associated {@link ol.layer.Vector vectorlayer} of
             * the (last) selected feature. Note that this will not work with any
             * programmatic method like pushing features to
             * {@link ol.interaction.Select#getFeatures collection}.
             * @api
             */
            getLayer(feature: (ol.Feature | ol.render.Feature)): ol.layer.Vector;

            /**
             * Handles the {@link ol.MapBrowserEvent map browser event} and may change the
             * selected state of features.
             * @api
             */
            static handleEvent(mapBrowserEvent: ol.MapBrowserEvent): boolean;

            /**
             * Remove the interaction from its current map, if any,  and attach it to a new
             * map, if any. Pass `null` to just remove the interaction from the current map.
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
         * @api
         */
        class Snap extends ol.interaction.Pointer {
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
             * @api
             */
            constructor(opt_options?: olx.interaction.SnapOptions);

            /**
             * Add a feature to the collection of features that we may snap to.
             *     Defaults to `true`.
             * @api
             */
            addFeature(feature: ol.Feature, opt_listen?: boolean): void;

            /**
             * Remove a feature from the collection of features that we may snap to.
             *     or not. Defaults to `true`.
             * @api
             */
            removeFeature(feature: ol.Feature, opt_unlisten?: boolean): void;
        }

        module Translate {
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.Translate} instances are instances of
             * this type.
             *
             */
            class Event extends ol.events.Event {
                /**
                 * @classdesc
                 * Events emitted by {@link ol.interaction.Translate} instances are instances of
                 * this type.
                 *
                 */
                constructor(type: ol.interaction.TranslateEventType, features: ol.Collection<ol.Feature>, coordinate: ol.Coordinate);

                /**
                 * The features being translated.
                 * @api
                 */
                features: ol.Collection<ol.Feature>;

                /**
                 * The coordinate of the drag event.
                 * @const
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
         * @api
         */
        class Translate extends ol.interaction.Pointer {
            /**
             * @classdesc
             * Interaction for translating (moving) features.
             *
             * @fires ol.interaction.TranslateEvent
             * @api
             */
            constructor(options: olx.interaction.TranslateOptions);
        }
    }

    /**
     * @classdesc
     * Implementation of inertial deceleration for map movement.
     *
     *     initial values (milliseconds).
     * @struct
     * @api
     */
    class Kinetic {
        /**
         * @classdesc
         * Implementation of inertial deceleration for map movement.
         *
         *     initial values (milliseconds).
         * @struct
         * @api
         */
        constructor(decay: number, minVelocity: number, delay: number);
    }

    module layer {
        /**
         * @classdesc
         * Abstract base class; normally only used for creating subclasses and not
         * instantiated in apps.
         * Note that with `ol.layer.Base` and all its subclasses, any property set in
         * the options is set as a {@link ol.Object} property on the layer object, so
         * is observable, and has get/set accessors.
         *
         * @api stable
         */
        class Base extends ol.Object {
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Note that with `ol.layer.Base` and all its subclasses, any property set in
             * the options is set as a {@link ol.Object} property on the layer object, so
             * is observable, and has get/set accessors.
             *
             * @api stable
             */
            constructor(options: olx.layer.BaseOptions);

            /**
             * Return the {@link ol.Extent extent} of the layer or `undefined` if it
             * will be visible regardless of extent.
             * @observable
             * @api stable
             */
            getExtent(): (ol.Extent);

            /**
             * Return the maximum resolution of the layer.
             * @observable
             * @api stable
             */
            getMaxResolution(): number;

            /**
             * Return the minimum resolution of the layer.
             * @observable
             * @api stable
             */
            getMinResolution(): number;

            /**
             * Return the opacity of the layer (between 0 and 1).
             * @observable
             * @api stable
             */
            getOpacity(): number;

            /**
             * Return the visibility of the layer (`true` or `false`).
             * @observable
             * @api stable
             */
            getVisible(): boolean;

            /**
             * Return the Z-index of the layer, which is used to order layers before
             * rendering. The default Z-index is 0.
             * @observable
             * @api
             */
            getZIndex(): number;

            /**
             * Set the extent at which the layer is visible.  If `undefined`, the layer
             * will be visible at all extents.
             * @observable
             * @api stable
             */
            setExtent(extent: (ol.Extent)): void;

            /**
             * Set the maximum resolution at which the layer is visible.
             * @observable
             * @api stable
             */
            setMaxResolution(maxResolution: number): void;

            /**
             * Set the minimum resolution at which the layer is visible.
             * @observable
             * @api stable
             */
            setMinResolution(minResolution: number): void;

            /**
             * Set the opacity of the layer, allowed values range from 0 to 1.
             * @observable
             * @api stable
             */
            setOpacity(opacity: number): void;

            /**
             * Set the visibility of the layer (`true` or `false`).
             * @observable
             * @api stable
             */
            setVisible(visible: boolean): void;

            /**
             * Set Z-index of the layer, which is used to order layers before rendering.
             * The default Z-index is 0.
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
         * @api stable
         */
        class Group extends ol.layer.Base {
            /**
             * @classdesc
             * A {@link ol.Collection} of layers that are handled together.
             *
             * A generic `change` event is triggered when the group/Collection changes.
             *
             * @api stable
             */
            constructor(opt_options?: olx.layer.GroupOptions);

            /**
             * Returns the {@link ol.Collection collection} of {@link ol.layer.Layer layers}
             * in this group.
             *   {@link ol.layer.Base layers} that are part of this group.
             * @observable
             * @api stable
             */
            getLayers(): ol.Collection<ol.layer.Base>;

            /**
             * Set the {@link ol.Collection collection} of {@link ol.layer.Layer layers}
             * in this group.
             *   {@link ol.layer.Base layers} that are part of this group.
             * @observable
             * @api stable
             */
            setLayers(layers: ol.Collection<ol.layer.Base>): void;
        }

        /**
         * @classdesc
         * Layer for rendering vector data as a heatmap.
         * Note that any property set in the options is set as a {@link ol.Object}
         * property on the layer object; for example, setting `title: 'My Title'` in the
         * options means that `title` is observable, and has get/set accessors.
         *
         * @fires ol.render.Event
         * @api
         */
        class Heatmap extends ol.layer.Vector {
            /**
             * @classdesc
             * Layer for rendering vector data as a heatmap.
             * Note that any property set in the options is set as a {@link ol.Object}
             * property on the layer object; for example, setting `title: 'My Title'` in the
             * options means that `title` is observable, and has get/set accessors.
             *
             * @fires ol.render.Event
             * @api
             */
            constructor(opt_options?: olx.layer.HeatmapOptions);

            /**
             * Return the blur size in pixels.
             * @api
             * @observable
             */
            getBlur(): number;

            /**
             * Return the gradient colors as array of strings.
             * @api
             * @observable
             */
            getGradient(): string[];

            /**
             * Return the size of the radius in pixels.
             * @api
             * @observable
             */
            getRadius(): number;

            /**
             * Set the blur size in pixels.
             * @api
             * @observable
             */
            setBlur(blur: number): void;

            /**
             * Set the gradient colors as array of strings.
             * @api
             * @observable
             */
            setGradient(colors: string[]): void;

            /**
             * Set the size of the radius in pixels.
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
         * @api stable
         */
        class Image extends ol.layer.Layer {
            /**
             * @classdesc
             * Server-rendered images that are available for arbitrary extents and
             * resolutions.
             * Note that any property set in the options is set as a {@link ol.Object}
             * property on the layer object; for example, setting `title: 'My Title'` in the
             * options means that `title` is observable, and has get/set accessors.
             *
             * @fires ol.render.Event
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
         * @api stable
         */
        class Layer extends ol.layer.Base {
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
             * @api stable
             */
            constructor(options: olx.layer.LayerOptions);

            /**
             * Get the layer source.
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
             * @api
             */
            setMap(map: ol.Map): void;

            /**
             * Set the layer source.
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
         * @api stable
         */
        class Tile extends ol.layer.Layer {
            /**
             * @classdesc
             * For layer sources that provide pre-rendered, tiled images in grids that are
             * organized by zoom levels for specific resolutions.
             * Note that any property set in the options is set as a {@link ol.Object}
             * property on the layer object; for example, setting `title: 'My Title'` in the
             * options means that `title` is observable, and has get/set accessors.
             *
             * @fires ol.render.Event
             * @api stable
             */
            constructor(opt_options?: olx.layer.TileOptions);

            /**
             * Return the level as number to which we will preload tiles up to.
             * @observable
             * @api
             */
            getPreload(): number;

            /**
             * Set the level as number to which we will preload tiles up to.
             * @observable
             * @api
             */
            setPreload(preload: number): void;

            /**
             * Whether we use interim tiles on error.
             * @observable
             * @api
             */
            getUseInterimTilesOnError(): boolean;

            /**
             * Set whether we use interim tiles on error.
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
         * @api stable
         */
        class Vector extends ol.layer.Layer {
            /**
             * @classdesc
             * Vector data that is rendered client-side.
             * Note that any property set in the options is set as a {@link ol.Object}
             * property on the layer object; for example, setting `title: 'My Title'` in the
             * options means that `title` is observable, and has get/set accessors.
             *
             * @fires ol.render.Event
             * @api stable
             */
            constructor(opt_options?: olx.layer.VectorOptions);

            /**
             * Return the associated {@link ol.source.Vector vectorsource} of the layer.
             * @api stable
             */
            getSource(): ol.source.Vector;

            /**
             * Get the style for features.  This returns whatever was passed to the `style`
             * option at construction or to the `setStyle` method.
             *     Layer style.
             * @api stable
             */
            getStyle(): (ol.style.Style | ol.style.Style[] | ol.StyleFunction);

            /**
             * Get the style function.
             * @api stable
             */
            getStyleFunction(): (ol.StyleFunction);

            /**
             * Set the style for features.  This can be a single style object, an array
             * of styles, or a function that takes a feature and resolution and returns
             * an array of styles. If it is `undefined` the default style is used. If
             * it is `null` the layer has no style (a `null` style), so only features
             * that have their own styles will be rendered in the layer. See
             * {@link ol.style} for information on the default style.
             *     style Layer style.
             * @api stable
             */
            setStyle(style: (ol.style.Style | ol.style.Style[] | ol.StyleFunction)): void;
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
         * @api
         */
        class VectorTile extends ol.layer.Vector {
            /**
             * @classdesc
             * Layer for vector tile data that is rendered client-side.
             * Note that any property set in the options is set as a {@link ol.Object}
             * property on the layer object; for example, setting `title: 'My Title'` in the
             * options means that `title` is observable, and has get/set accessors.
             *
             * @api
             */
            constructor(opt_options?: olx.layer.VectorTileOptions);

            /**
             * Return the level as number to which we will preload tiles up to.
             * @observable
             * @api
             */
            getPreload(): number;

            /**
             * Whether we use interim tiles on error.
             * @observable
             * @api
             */
            getUseInterimTilesOnError(): boolean;

            /**
             * Set the level as number to which we will preload tiles up to.
             * @observable
             * @api
             */
            setPreload(preload: number): void;

            /**
             * Set whether we use interim tiles on error.
             * @observable
             * @api
             */
            setUseInterimTilesOnError(useInterimTilesOnError: boolean): void;
        }
    }

    /**
     * Strategies for loading vector data.
     */
    module loadingstrategy {
        /**
         * Strategy function for loading all features with a single request.
         * @api
         */
        function all(extent: ol.Extent, resolution: number): ol.Extent[];

        /**
         * Strategy function for loading features based on the view's extent and
         * resolution.
         * @api
         */
        function bbox(extent: ol.Extent, resolution: number): ol.Extent[];

        /**
         * Creates a strategy function for loading features based on a tile grid.
         * @api
         */
        function tile(tileGrid: ol.tilegrid.TileGrid): ((extent: ol.Extent, i: number) => ol.Extent[]);
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
     * @fires ol.MapBrowserEvent
     * @fires ol.MapEvent
     * @fires ol.render.Event#postcompose
     * @fires ol.render.Event#precompose
     * @api stable
     */
    class Map extends ol.Object {
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
         * @fires ol.MapBrowserEvent
         * @fires ol.MapEvent
         * @fires ol.render.Event#postcompose
         * @fires ol.render.Event#precompose
         * @api stable
         */
        constructor(options: olx.MapOptions);

        /**
         * Add the given control to the map.
         * @api stable
         */
        addControl(control: ol.control.Control): void;

        /**
         * Add the given interaction to the map.
         * @api stable
         */
        addInteraction(interaction: ol.interaction.Interaction): void;

        /**
         * Adds the given layer to the top of this map. If you want to add a layer
         * elsewhere in the stack, use `getLayers()` and the methods available on
         * {@link ol.Collection}.
         * @api stable
         */
        addLayer(layer: ol.layer.Base): void;

        /**
         * Add the given overlay to the map.
         * @api stable
         */
        addOverlay(overlay: ol.Overlay): void;

        /**
         * Detect features that intersect a pixel on the viewport, and execute a
         * callback with each intersecting feature. Layers included in the detection can
         * be configured through `opt_layerFilter`.
         *     ol.layer.Layer): T} callback Feature callback. The callback will be
         *     called with two arguments. The first argument is one
         *     {@link ol.Feature feature} or
         *     {@link ol.render.Feature render feature} at the pixel, the second is
         *     the {@link ol.layer.Layer layer} of the feature and will be null for
         *     unmanaged layers. To stop detection, callback functions can return a
         *     truthy value.
         * callback execution, or the first truthy callback return value.
         * @template T
         * @api stable
         */
        forEachFeatureAtPixel<T>(
            pixel: ol.Pixel,
            callback: ((feature: (ol.Feature | ol.render.Feature), layer: ol.layer.Layer) => T),
            opt_options?: olx.AtPixelOptions
        ): (T);

        /**
         * Get all features that intersect a pixel on the viewport.
         * @api stable
         */
        getFeaturesAtPixel(
            pixel: ol.Pixel,
            opt_options?: olx.AtPixelOptions
        ): (Array<ol.Feature | ol.render.Feature> | null);

        /**
         * Detect layers that have a color value at a pixel on the viewport, and
         * execute a callback with each matching layer. Layers included in the
         * detection can be configured through `opt_layerFilter`.
         *     callback. This callback will recieve two arguments: first is the
         *     {@link ol.layer.Layer layer}, second argument is {@link ol.Color}
         *     and will be null for layer types that do not currently support this
         *     argument. To stop detection callback functions can return a truthy value.
         *     filter function. The filter function will receive one argument, the
         *     {@link ol.layer.Layer layer-candidate} and it should return a boolean
         *     value. Only layers which are visible and for which this function returns
         *     `true` will be tested for features. By default, all visible layers will
         *     be tested.
         * callback execution, or the first truthy callback return value.
         * @template S,T,U
         * @api stable
         */
        forEachLayerAtPixel<S, T, U>(pixel: ol.Pixel,
                                     callback: ((layer: ol.layer.Layer, color: ol.Color) => T),
                                     opt_this?: S,
                                     opt_layerFilter?: ((layer: ol.layer.Layer) => boolean),
                                     opt_this2?: U): (T);

        /**
         * Detect if features intersect a pixel on the viewport. Layers included in the
         * detection can be configured through `opt_layerFilter`.
         * @api
         */
        hasFeatureAtPixel(
            pixel: ol.Pixel,
            opt_options?: olx.AtPixelOptions
        ): boolean;

        /**
         * Returns the geographical coordinate for a browser event.
         * @api stable
         */
        getEventCoordinate(event: Event): ol.Coordinate;

        /**
         * Returns the map pixel position for a browser event relative to the viewport.
         * @api stable
         */
        getEventPixel(event: Event): ol.Pixel;

        /**
         * Get the target in which this map is rendered.
         * Note that this returns what is entered as an option or in setTarget:
         * if that was an element, it returns an element; if a string, it returns that.
         *     map is rendered in.
         * @observable
         * @api stable
         */
        getTarget(): (Element | string);

        /**
         * Get the DOM element into which this map is rendered. In contrast to
         * `getTarget` this method always return an `Element`, or `null` if the
         * map has no target.
         * @api
         */
        getTargetElement(): Element;

        /**
         * Get the coordinate for a given pixel.  This returns a coordinate in the
         * map view projection.
         * @api stable
         */
        getCoordinateFromPixel(pixel: ol.Pixel): ol.Coordinate;

        /**
         * Get the map controls. Modifying this collection changes the controls
         * associated with the map.
         * @api stable
         */
        getControls(): ol.Collection<ol.control.Control>;

        /**
         * Get the map overlays. Modifying this collection changes the overlays
         * associated with the map.
         * @api stable
         */
        getOverlays(): ol.Collection<ol.Overlay>;

        /**
         * Get an overlay by its identifier (the value returned by overlay.getId()).
         * Note that the index treats string and numeric identifiers as the same. So
         * `map.getOverlayById(2)` will return an overlay with id `'2'` or `2`.
         * @api
         */
        getOverlayById(id: (string | number)): ol.Overlay;

        /**
         * Get the map interactions. Modifying this collection changes the interactions
         * associated with the map.
         *
         * Interactions are used for e.g. pan, zoom and rotate.
         * @api stable
         */
        getInteractions(): ol.Collection<ol.interaction.Interaction>;

        /**
         * Get the layergroup associated with this map.
         * @observable
         * @api stable
         */
        getLayerGroup(): ol.layer.Group;

        /**
         * Get the collection of layers associated with this map.
         * @api stable
         */
        getLayers(): ol.Collection<ol.layer.Base>;

        /**
         * Get the pixel for a coordinate.  This takes a coordinate in the map view
         * projection and returns the corresponding pixel.
         * @api stable
         */
        getPixelFromCoordinate(coordinate: ol.Coordinate): ol.Pixel;

        /**
         * Get the size of this map.
         * @observable
         * @api stable
         */
        getSize(): (ol.Size);

        /**
         * Get the view associated with this map. A view manages properties such as
         * center and resolution.
         * @observable
         * @api stable
         */
        getView(): ol.View;

        /**
         * Get the element that serves as the map viewport.
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
         *     if the control was not found).
         * @api stable
         */
        removeControl(control: ol.control.Control): (ol.control.Control);

        /**
         * Remove the given interaction from the map.
         *     undefined if the interaction was not found).
         * @api stable
         */
        removeInteraction(interaction: ol.interaction.Interaction): (ol.interaction.Interaction);

        /**
         * Removes the given layer from the map.
         *     layer was not found).
         * @api stable
         */
        removeLayer(layer: ol.layer.Base): (ol.layer.Base);

        /**
         * Remove the given overlay from the map.
         *     if the overlay was not found).
         * @api stable
         */
        removeOverlay(overlay: ol.Overlay): (ol.Overlay);

        /**
         * Sets the layergroup of this map.
         *     this map.
         * @observable
         * @api stable
         */
        setLayerGroup(layerGroup: ol.layer.Group): void;

        /**
         * Set the size of this map.
         * @observable
         * @api
         */
        setSize(size: (ol.Size)): void;

        /**
         * Set the target element to render this map into.
         *     that the map is rendered in.
         * @observable
         * @api stable
         */
        setTarget(target: (Element | string)): void;

        /**
         * Set the view for this map.
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
     */
    class MapBrowserEvent extends ol.MapEvent {
        /**
         * @classdesc
         * Events emitted as map browser events are instances of this type.
         * See {@link ol.Map} for which events trigger a map browser event.
         *
         */
        constructor(type: string, map: ol.Map, browserEvent: Event, opt_dragging?: boolean, opt_frameState?: olx.FrameState);

        /**
         * The original browser event.
         * @const
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

    class MapBrowserPointerEvent extends ol.MapBrowserEvent {
        // /**
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
     */
    class MapEvent extends ol.events.Event {
        /**
         * @classdesc
         * Events emitted as map events are instances of this type.
         * See {@link ol.Map} for which events trigger a map event.
         *
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
     */
    class ObjectEvent extends ol.events.Event {
        /**
         * @classdesc
         * Events emitted by {@link ol.Object} instances are instances of this type.
         *
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
     * @fires ol.ObjectEvent
     * @api
     */
    class Object extends ol.Observable {
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
         * @fires ol.ObjectEvent
         * @api
         */
        constructor(opt_values?: { [k: string]: any });

        /**
         * Gets a value.
         * @api stable
         */
        get(key: string): any;

        /**
         * Get a list of object property names.
         * @api stable
         */
        getKeys(): string[];

        /**
         * Get an object of all property names and values.
         * @api stable
         */
        getProperties(): { [k: string]: any };

        /**
         * Sets a value.
         * @api stable
         */
        set(key: string, value: any, opt_silent?: boolean): void;

        /**
         * Sets a collection of key-value pairs.  Note that this changes any existing
         * properties and adds new ones (it does not remove any existing properties).
         * @api stable
         */
        setProperties(values: { [k: string]: any }, opt_silent?: boolean): void;

        /**
         * Unsets a property.
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
    class Observable extends ol.events.EventTarget {
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
         *     or `once()` (or an array of keys).
         * @api stable
         */
        static unByKey(key: (ol.EventsKey | ol.EventsKey[])): void;

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
         *     target: (EventTarget|ol.events.EventTarget|undefined)}|ol.events.Event|
         *     string} event Event object.
         * @api
         */
        dispatchEvent(event: (GlobalObject | ol.events.Event | string)): void;

        /**
         * Get the version number for this object.  Each time the object is modified,
         * its version number will be incremented.
         * @api
         */
        getRevision(): number;

        /**
         * Listen for a certain type of event.
         *     called with an array of event types as the first argument, the return
         *     will be an array of keys.
         * @api stable
         */
        on(type: (string | string[]), listener: Function, opt_this?: GlobalObject): (ol.EventsKey | ol.EventsKey[]);

        /**
         * Listen once for a certain type of event.
         *     called with an array of event types as the first argument, the return
         *     will be an array of keys.
         * @api stable
         */
        once(type: (string | string[]), listener: Function, opt_this?: GlobalObject): (ol.EventsKey | ol.EventsKey[]);

        /**
         * Unlisten for a certain type of event.
         * `listener`.
         * @api stable
         */
        un(type: (string | string[]), listener: Function, opt_this?: GlobalObject): void;
    }

    /**
     * Overlay position: `'bottom-left'`, `'bottom-center'`,  `'bottom-right'`,
     * `'center-left'`, `'center-center'`, `'center-right'`, `'top-left'`,
     * `'top-center'`, `'top-right'`
     */
    type OverlayPositioning = "bottom-left" | "bottom-center" | "bottom-right" | "center-left" | "center-center" | "center-right" | "top-left" | "top-center" | "top-right";

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
     * @api stable
     */
    class Overlay extends ol.Object {
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
         * @api stable
         */
        constructor(options: olx.OverlayOptions);

        /**
         * Get the DOM element of this overlay.
         * @observable
         * @api stable
         */
        getElement(): (Element);

        /**
         * Get the overlay identifier which is set on constructor.
         * @api
         */
        getId(): (number | string);

        /**
         * Get the map associated with this overlay.
         * @observable
         * @api stable
         */
        getMap(): (ol.Map);

        /**
         * Get the offset of this overlay.
         * @observable
         * @api stable
         */
        getOffset(): number[];

        /**
         * Get the current position of this overlay.
         *     anchored at.
         * @observable
         * @api stable
         */
        getPosition(): (ol.Coordinate);

        /**
         * Get the current positioning of this overlay.
         *     relative to its point on the map.
         * @observable
         * @api stable
         */
        getPositioning(): ol.OverlayPositioning;

        /**
         * Set the DOM element to be associated with this overlay.
         * @observable
         * @api stable
         */
        setElement(element: (Element)): void;

        /**
         * Set the map to be associated with this overlay.
         * @observable
         * @api stable
         */
        setMap(map: (ol.Map)): void;

        /**
         * Set the offset for this overlay.
         * @observable
         * @api stable
         */
        setOffset(offset: number[]): void;

        /**
         * Set the position for this overlay. If the position is `undefined` the
         * overlay is hidden.
         *     is anchored at.
         * @observable
         * @api stable
         */
        setPosition(position: (ol.Coordinate | undefined)): void;

        /**
         * Set the positioning for this overlay.
         *     positioned relative to its point on the map.
         * @observable
         * @api stable
         */
        setPositioning(positioning: ol.OverlayPositioning): void;
    }

    module pointer {
        /**
         * @classdesc
         * A class for pointer events.
         *
         * This class is used as an abstraction for mouse events,
         * touch events and even native pointer events.
         *
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
    module proj {
        /**
         * Projection units: `'degrees'`, `'ft'`, `'m'`, `'pixels'`, `'tile-pixels'` or
         * `'us-ft'`.
         */
        type Units = "degress" | "ft" | "m" | "pixels" | "tile-pixels" | "us-ft";

        /**
         * Meters per unit lookup table.
         * @const
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
             * @struct
             * @api stable
             */
            constructor(options: olx.ProjectionOptions);

            /**
             * Get the code for this projection, e.g. 'EPSG:4326'.
             * @api stable
             */
            getCode(): string;

            /**
             * Get the validity extent for this projection.
             * @api stable
             */
            getExtent(): ol.Extent;

            /**
             * Get the units of this projection.
             * @api stable
             */
            getUnits(): ol.proj.Units;

            /**
             * Get the amount of meters per unit of this projection.  If the projection is
             * not configured with `metersPerUnit` or a units identifier, the return is
             * `undefined`.
             * @api stable
             */
            getMetersPerUnit(): (number);

            /**
             * Get the world extent for this projection.
             * @api
             */
            getWorldExtent(): ol.Extent;

            /**
             * Is this projection a global projection which spans the whole world?
             * @api stable
             */
            isGlobal(): boolean;

            /**
             * Set if the projection is a global projection which spans the whole world
             * @api stable
             */
            setGlobal(global: boolean): void;

            /**
             * Set the validity extent for this projection.
             * @api stable
             */
            setExtent(extent: ol.Extent): void;

            /**
             * Set the world extent for this projection.
             *     [minlon, minlat, maxlon, maxlat].
             * @api
             */
            setWorldExtent(worldExtent: ol.Extent): void;

            /**
             * Set the getPointResolution function for this projection.
             * @api
             */
            setGetPointResolution(func: ((resolution: number, coords: ol.Coordinate) => number)): void;

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
         * @api
         */
        function setProj4(proj4: any): void;

        /**
         * Registers transformation functions that don't alter coordinates. Those allow
         * to transform between projections with equal meaning.
         *
         * @api
         */
        function addEquivalentProjections(projections: ol.proj.Projection[]): void;

        /**
         * Add a Projection object to the list of supported projections that can be
         * looked up by their code.
         *
         * @api stable
         */
        function addProjection(projection: ol.proj.Projection): void;

        /**
         * Registers coordinate transform functions to convert coordinates between the
         * source projection and the destination projection.
         * The forward and inverse functions convert coordinate pairs; this function
         * converts these into the functions used internally which also handle
         * extents and coordinate arrays.
         *
         *     function (that is, from the source projection to the destination
         *     projection) that takes a {@link ol.Coordinate} as argument and returns
         *     the transformed {@link ol.Coordinate}.
         *     function (that is, from the destination projection to the source
         *     projection) that takes a {@link ol.Coordinate} as argument and returns
         *     the transformed {@link ol.Coordinate}.
         * @api stable
         */
        function addCoordinateTransforms(source: ol.ProjectionLike,
                                         destination: ol.ProjectionLike,
                                         forward: ((coords: ol.Coordinate) => ol.Coordinate),
                                         inverse: ((coords: ol.Coordinate) => ol.Coordinate)): void;

        /**
         * Transforms a coordinate from longitude/latitude to a different projection.
         *     an array with longitude as 1st and latitude as 2nd element.
         *     default is Web Mercator, i.e. 'EPSG:3857'.
         * @api stable
         */
        function fromLonLat(coordinate: ol.Coordinate, opt_projection?: ol.ProjectionLike): ol.Coordinate;

        /**
         * Transforms a coordinate to longitude/latitude.
         *     The default is Web Mercator, i.e. 'EPSG:3857'.
         *     with longitude as 1st and latitude as 2nd element.
         * @api stable
         */
        function toLonLat(coordinate: ol.Coordinate, opt_projection?: ol.ProjectionLike): ol.Coordinate;

        /**
         * Fetches a Projection object for the code specified.
         *
         *     a combination of authority and identifier such as "EPSG:4326", or an
         *     existing projection object, or undefined.
         * @api stable
         */
        function get(projectionLike: ol.ProjectionLike): ol.proj.Projection;

        /**
         * Checks if two projections are the same, that is every coordinate in one
         * projection does represent the same geographic point as the same coordinate in
         * the other projection.
         *
         * @api
         */
        function equivalent(projection1: ol.proj.Projection, projection2: ol.proj.Projection): boolean;

        /**
         * Given the projection-like objects, searches for a transformation
         * function to convert a coordinates array from the source projection to the
         * destination projection.
         *
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
         */
        function transform(coordinate: ol.Coordinate, source: ol.ProjectionLike, destination: ol.ProjectionLike): ol.Coordinate;

        /**
         * Transforms an extent from source projection to destination projection.  This
         * returns a new extent (and does not modify the original).
         *
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
         */
        function getPointResolution(
            projection: ol.proj.Projection,
            resolution: number,
            point: ol.Coordinate
        ): number;
    }

    module render {
        module canvas {
            /**
             * @classdesc
             * A concrete subclass of {@link ol.render.VectorContext} that implements
             * direct rendering of features and geometries to an HTML5 Canvas context.
             * Instances of this class are created internally by the library and
             * provided to application code as vectorContext member of the
             * {@link ol.render.Event} object associated with postcompose, precompose and
             * render events emitted by layers and maps.
             *
             * @struct
             */
            class Immediate extends ol.render.VectorContext {
                /**
                 * @classdesc
                 * A concrete subclass of {@link ol.render.VectorContext} that implements
                 * direct rendering of features and geometries to an HTML5 Canvas context.
                 * Instances of this class are created internally by the library and
                 * provided to application code as vectorContext member of the
                 * {@link ol.render.Event} object associated with postcompose, precompose and
                 * render events emitted by layers and maps.
                 *
                 * @struct
                 */
                constructor(context: CanvasRenderingContext2D, pixelRatio: number, extent: ol.Extent, transform: any, viewRotation: number);

                /**
                 * Render a circle geometry into the canvas.  Rendering is immediate and uses
                 * the current fill and stroke styles.
                 *
                 * @api
                 */
                drawCircle(geometry: ol.geom.Circle): void;

                /**
                 * Set the rendering style.  Note that since this is an immediate rendering API,
                 * any `zIndex` on the provided style will be ignored.
                 *
                 * @api
                 */
                setStyle(style: ol.style.Style): void;

                /**
                 * Render a geometry into the canvas.  Call
                 * {@link ol.render.canvas.Immediate#setStyle} first to set the rendering style.
                 *
                 * @api
                 */
                drawGeometry(geometry: (ol.geom.Geometry | ol.render.Feature)): void;

                /**
                 * Render a feature into the canvas.  Note that any `zIndex` on the provided
                 * style will be ignored - features are rendered immediately in the order that
                 * this method is called.  If you need `zIndex` support, you should be using an
                 * {@link ol.layer.Vector} instead.
                 *
                 * @api
                 */
                drawFeature(feature: ol.Feature, style: ol.style.Style): void;
            }
        }

        class Event extends ol.events.Event {
            constructor(type: ol.render.EventType, opt_vectorContext?: ol.render.VectorContext, opt_frameState?: olx.FrameState, opt_context?: CanvasRenderingContext2D, opt_glContext?: any);

            /**
             * For canvas, this is an instance of {@link ol.render.canvas.Immediate}.
             * @api
             */
            vectorContext: ol.render.VectorContext;

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
         *     to be right-handed for polygons.
         */
        class Feature {
            /**
             * Lightweight, read-only, {@link ol.Feature} and {@link ol.geom.Geometry} like
             * structure, optimized for rendering and styling. Geometry access through the
             * API is limited to getting the type and extent of the geometry.
             *
             *     to be right-handed for polygons.
             */
            constructor(type: ol.geom.GeometryType, flatCoordinates: number[], ends: (number[] | number[][]), properties: { [k: string]: any });

            /**
             * Get a feature property by its key.
             * @api
             */
            get(key: string): any;

            /**
             * Get the extent of this feature's geometry.
             * @api
             */
            getExtent(): ol.Extent;

            /**
             * Get the feature for working with its geometry.
             * @api
             */
            getGeometry(): ol.render.Feature;

            /**
             * Get the feature properties.
             * @api
             */
            getProperties(): { [k: string]: any };

            /**
             * Get the type of this feature's geometry.
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
         * @api
         */
        function toContext(context: CanvasRenderingContext2D, opt_options?: olx.render.ToContextOptions): ol.render.canvas.Immediate;
    }

    /**
     * Available renderers: `'canvas'`, `'dom'` or `'webgl'`.
     */
    type RendererType = "canvas" | "dom" | "webgl";

    /**
     * Raster operation type. Supported values are `'pixel'` and `'image'`.
     */
    type RasterOperationType = "pixel" | "image";

    module source {
        /**
         * @classdesc
         * Layer source for Bing Maps tile data.
         *
         * @api stable
         */
        class BingMaps extends ol.source.TileImage {
            /**
             * @classdesc
             * Layer source for Bing Maps tile data.
             *
             * @api stable
             */
            constructor(options: olx.source.BingMapsOptions);

            /**
             * The attribution containing a link to the Microsoft® Bing™ Maps Platform APIs’
             * Terms Of Use.
             * @const
             * @api
             */
            static TOS_ATTRIBUTION: ol.Attribution;
        }

        /**
         * @classdesc
         * Layer source for the CartoDB tiles.
         *
         * @api
         */
        class CartoDB extends ol.source.XYZ {
            /**
             * @classdesc
             * Layer source for the CartoDB tiles.
             *
             * @api
             */
            constructor(options: olx.source.CartoDBOptions);

            /**
             * Returns the current config.
             * @api
             */
            getConfig(): GlobalObject;

            /**
             * Updates the carto db config.
             *     in the config.
             * @api
             */
            updateConfig(config: GlobalObject): void;

            /**
             * Sets the CartoDB config
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
         * @api
         */
        class Cluster extends ol.source.Vector {
            /**
             * @classdesc
             * Layer source to cluster vector data. Works out of the box with point
             * geometries. For other geometry types, or if not all geometries should be
             * considered for clustering, a custom `geometryFunction` can be defined.
             *
             * @api
             */
            constructor(options: olx.source.ClusterOptions);

            /**
             * Get a reference to the wrapped source.
             * @api
             */
            getSource(): ol.source.Vector;

            /**
             * Get the distance in pixels between clusters.
             * @api
             */
            getDistance(): number;

            /**
             * Set the distance in pixels between clusters.
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
         * @api
         */
        class Image extends ol.source.Source {
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for sources providing a single image.
             *
             * @api
             */
            constructor(options: ol.SourceImageOptions);
        }

        /**
         * @classdesc
         * Events emitted by {@link ol.source.Image} instances are instances of this
         * type.
         *
         */
        class ImageEvent extends ol.events.Event {
            /**
             * @classdesc
             * Events emitted by {@link ol.source.Image} instances are instances of this
             * type.
             *
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
         * @api
         */
        class ImageArcGISRest extends ol.source.Image {
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
             * @api
             */
            constructor(opt_options?: olx.source.ImageArcGISRestOptions);

            /**
             * Get the user-provided params, i.e. those passed to the constructor through
             * the "params" option, and possibly updated using the updateParams method.
             * @api stable
             */
            getParams(): GlobalObject;

            /**
             * Return the image load function of the source.
             * @api
             */
            getImageLoadFunction(): ol.ImageLoadFunctionType;

            /**
             * Return the URL used for this ArcGIS source.
             * @api stable
             */
            getUrl(): (string);

            /**
             * Set the image load function of the source.
             * @api
             */
            setImageLoadFunction(imageLoadFunction: ol.ImageLoadFunctionType): void;

            /**
             * Set the URL to use for requests.
             * @api stable
             */
            setUrl(url: (string)): void;

            /**
             * Update the user-provided params.
             * @api stable
             */
            updateParams(params: GlobalObject): void;
        }

        /**
         * @classdesc
         * Base class for image sources where a canvas element is the image.
         *
         * @api
         */
        class ImageCanvas extends ol.source.Image {
            /**
             * @classdesc
             * Base class for image sources where a canvas element is the image.
             *
             * @api
             */
            constructor(options: olx.source.ImageCanvasOptions);
        }

        /**
         * @classdesc
         * Source for images from Mapguide servers
         *
         * @fires ol.source.ImageEvent
         * @api stable
         */
        class ImageMapGuide extends ol.source.Image {
            /**
             * @classdesc
             * Source for images from Mapguide servers
             *
             * @fires ol.source.ImageEvent
             * @api stable
             */
            constructor(options: olx.source.ImageMapGuideOptions);

            /**
             * Get the user-provided params, i.e. those passed to the constructor through
             * the "params" option, and possibly updated using the updateParams method.
             * @api stable
             */
            getParams(): GlobalObject;

            /**
             * Return the image load function of the source.
             * @api
             */
            getImageLoadFunction(): ol.ImageLoadFunctionType;

            /**
             * Update the user-provided params.
             * @api stable
             */
            updateParams(params: GlobalObject): void;

            /**
             * Set the image load function of the MapGuide source.
             * @api
             */
            setImageLoadFunction(imageLoadFunction: ol.ImageLoadFunctionType): void;
        }

        /**
         * @classdesc
         * A layer source for displaying a single, static image.
         *
         * @api stable
         */
        class ImageStatic extends ol.source.Image {
            /**
             * @classdesc
             * A layer source for displaying a single, static image.
             *
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
         * @api
         */
        class ImageVector extends ol.source.ImageCanvas {
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
             * @api
             */
            constructor(options: olx.source.ImageVectorOptions);

            /**
             * Get a reference to the wrapped source.
             * @api
             */
            getSource(): ol.source.Vector;

            /**
             * Get the style for features.  This returns whatever was passed to the `style`
             * option at construction or to the `setStyle` method.
             *     Layer style.
             * @api stable
             */
            getStyle(): (ol.style.Style | ol.style.Style[] | ol.StyleFunction);

            /**
             * Get the style function.
             * @api stable
             */
            getStyleFunction(): (ol.StyleFunction);

            /**
             * Set the style for features.  This can be a single style object, an array
             * of styles, or a function that takes a feature and resolution and returns
             * an array of styles. If it is `undefined` the default style is used. If
             * it is `null` the layer has no style (a `null` style), so only features
             * that have their own styles will be rendered in the layer. See
             * {@link ol.style} for information on the default style.
             *     style Layer style.
             * @api stable
             */
            setStyle(style: (ol.style.Style | ol.style.Style[] | ol.StyleFunction)): void;
        }

        /**
         * @classdesc
         * Source for WMS servers providing single, untiled images.
         *
         * @fires ol.source.ImageEvent
         * @api stable
         */
        class ImageWMS extends ol.source.Image {
            /**
             * @classdesc
             * Source for WMS servers providing single, untiled images.
             *
             * @fires ol.source.ImageEvent
             * @api stable
             */
            constructor(opt_options?: olx.source.ImageWMSOptions);

            /**
             * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
             * projection. Return `undefined` if the GetFeatureInfo URL cannot be
             * constructed.
             *     be provided. If `QUERY_LAYERS` is not provided then the layers specified
             *     in the `LAYERS` parameter will be used. `VERSION` should not be
             *     specified here.
             * @api stable
             */
            getGetFeatureInfoUrl(coordinate: ol.Coordinate, resolution: number, projection: ol.ProjectionLike, params: GlobalObject): (string);

            /**
             * Get the user-provided params, i.e. those passed to the constructor through
             * the "params" option, and possibly updated using the updateParams method.
             * @api stable
             */
            getParams(): GlobalObject;

            /**
             * Return the image load function of the source.
             * @api
             */
            getImageLoadFunction(): ol.ImageLoadFunctionType;

            /**
             * Return the URL used for this WMS source.
             * @api stable
             */
            getUrl(): (string);

            /**
             * Set the image load function of the source.
             * @api
             */
            setImageLoadFunction(imageLoadFunction: ol.ImageLoadFunctionType): void;

            /**
             * Set the URL to use for requests.
             * @api stable
             */
            setUrl(url: (string)): void;

            /**
             * Update the user-provided params.
             * @api stable
             */
            updateParams(params: GlobalObject): void;
        }

        /**
         * @classdesc
         * Layer source for the OpenStreetMap tile server.
         *
         * @api stable
         */
        class OSM extends ol.source.XYZ {
            /**
             * @classdesc
             * Layer source for the OpenStreetMap tile server.
             *
             * @api stable
             */
            constructor(opt_options?: olx.source.OSMOptions);

            /**
             * The attribution containing a link to the OpenStreetMap Copyright and License
             * page.
             * @const
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
         * @api
         */
        class Raster extends ol.source.Image {
            /**
             * @classdesc
             * A source that transforms data from any number of input sources using an array
             * of {@link ol.RasterOperation} functions to transform input pixel values into
             * output pixel values.
             *
             * @fires ol.source.RasterEvent
             * @api
             */
            constructor(options: olx.source.RasterOptions);

            /**
             * Set the operation.
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
         */
        class RasterEvent extends ol.events.Event {
            /**
             * @classdesc
             * Events emitted by {@link ol.source.Raster} instances are instances of this
             * type.
             *
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
         * @api stable
         */
        class Source extends ol.Object {
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for {@link ol.layer.Layer} sources.
             *
             * A generic `change` event is triggered when the state of the source changes.
             *
             * @api stable
             */
            constructor(options: ol.SourceSourceOptions);

            /**
             * Get the attributions of the source.
             * @api stable
             */
            getAttributions(): ol.Attribution[];

            /**
             * Get the logo of the source.
             * @api stable
             */
            getLogo(): (string | olx.LogoOptions);

            /**
             * Get the projection of the source.
             * @api
             */
            getProjection(): ol.proj.Projection;

            /**
             * Get the state of the source, see {@link ol.source.State} for possible states.
             * @api
             */
            getState(): ol.source.State;

            /**
             * Refreshes the source and finally dispatches a 'change' event.
             * @api
             */
            refresh(): void;

            /**
             * Set the attributions of the source.
             *     Can be passed as `string`, `Array<string>`, `{@link ol.Attribution}`,
             *     `Array<{@link ol.Attribution}>` or `undefined`.
             * @api
             */
            setAttributions(attributions: (ol.AttributionLike)): void;
        }

        /**
         * @classdesc
         * Layer source for the Stamen tile server.
         *
         * @api stable
         */
        class Stamen extends ol.source.XYZ {
            /**
             * @classdesc
             * Layer source for the Stamen tile server.
             *
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
         * @api
         */
        class Tile extends ol.source.Source {
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for sources providing images divided into a tile grid.
             *
             * @api
             */
            constructor(options: ol.SourceTileOptions);

            /**
             * Return the tile grid of the tile source.
             * @api stable
             */
            getTileGrid(): ol.tilegrid.TileGrid;
        }

        /**
         * @classdesc
         * Events emitted by {@link ol.source.Tile} instances are instances of this
         * type.
         *
         */
        class TileEvent extends ol.events.Event {
            /**
             * @classdesc
             * Events emitted by {@link ol.source.Tile} instances are instances of this
             * type.
             *
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
         *     options.
         * @api
         */
        class TileArcGISRest extends ol.source.TileImage {
            /**
             * @classdesc
             * Layer source for tile data from ArcGIS Rest services. Map and Image
             * Services are supported.
             *
             * For cached ArcGIS services, better performance is available using the
             * {@link ol.source.XYZ} data source.
             *
             *     options.
             * @api
             */
            constructor(opt_options?: olx.source.TileArcGISRestOptions);

            /**
             * Get the user-provided params, i.e. those passed to the constructor through
             * the "params" option, and possibly updated using the updateParams method.
             * @api
             */
            getParams(): GlobalObject;

            /**
             * Update the user-provided params.
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
         * @api
         */
        class TileDebug extends ol.source.Tile {
            /**
             * @classdesc
             * A pseudo tile source, which does not fetch tiles from a server, but renders
             * a grid outline for the tile grid/projection along with the coordinates for
             * each tile. See examples/canvas-tiles for an example.
             *
             * Uses Canvas context2d, so requires Canvas support.
             *
             * @api
             */
            constructor(options: olx.source.TileDebugOptions);
        }

        /**
         * @classdesc
         * Base class for sources providing images divided into a tile grid.
         *
         * @fires ol.source.TileEvent
         * @api
         */
        class TileImage extends ol.source.UrlTile {
            /**
             * @classdesc
             * Base class for sources providing images divided into a tile grid.
             *
             * @fires ol.source.TileEvent
             * @api
             */
            constructor(options: olx.source.TileImageOptions);

            /**
             * Sets whether to render reprojection edges or not (usually for debugging).
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
             * @api
             */
            setTileGridForProjection(projection: ol.ProjectionLike, tilegrid: ol.tilegrid.TileGrid): void;
        }

        /**
         * @classdesc
         * Layer source for tile data in TileJSON format.
         *
         * @api stable
         */
        class TileJSON extends ol.source.TileImage {
            /**
             * @classdesc
             * Layer source for tile data in TileJSON format.
             *
             * @api stable
             */
            constructor(options: olx.source.TileJSONOptions);

            /**
             * @api
             */
            getTileJSON(): TileJSON;
        }

        /**
         * @classdesc
         * Layer source for UTFGrid interaction data loaded from TileJSON format.
         *
         * @api
         */
        class TileUTFGrid extends ol.source.Tile {
            /**
             * @classdesc
             * Layer source for UTFGrid interaction data loaded from TileJSON format.
             *
             * @api
             */
            constructor(options: olx.source.TileUTFGridOptions);

            /**
             * Return the template from TileJSON.
             * @api
             */
            getTemplate(): (string);

            /**
             * Calls the callback (synchronously by default) with the available data
             * for given coordinate and resolution (or `null` if not yet loaded or
             * in case of an error).
             *                               The tile data is requested if not yet loaded.
             * @template T
             * @api
             */
            forDataAtCoordinateAndResolution<T>(coordinate: ol.Coordinate, resolution: number, callback: ((d: any) => any), opt_this?: T, opt_request?: boolean): void;
        }

        /**
         * @classdesc
         * Layer source for tile data from WMS servers.
         *
         * @api stable
         */
        class TileWMS extends ol.source.TileImage {
            /**
             * @classdesc
             * Layer source for tile data from WMS servers.
             *
             * @api stable
             */
            constructor(opt_options?: olx.source.TileWMSOptions);

            /**
             * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
             * projection. Return `undefined` if the GetFeatureInfo URL cannot be
             * constructed.
             *     be provided. If `QUERY_LAYERS` is not provided then the layers specified
             *     in the `LAYERS` parameter will be used. `VERSION` should not be
             *     specified here.
             * @api stable
             */
            getGetFeatureInfoUrl(coordinate: ol.Coordinate, resolution: number, projection: ol.ProjectionLike, params: GlobalObject): (string);

            /**
             * Get the user-provided params, i.e. those passed to the constructor through
             * the "params" option, and possibly updated using the updateParams method.
             * @api stable
             */
            getParams(): GlobalObject;

            /**
             * Update the user-provided params.
             * @api stable
             */
            updateParams(params: GlobalObject): void;
        }

        /**
         * @classdesc
         * Base class for sources providing tiles divided into a tile grid over http.
         *
         * @fires ol.source.TileEvent
         */
        class UrlTile extends ol.source.Tile {
            /**
             * @classdesc
             * Base class for sources providing tiles divided into a tile grid over http.
             *
             * @fires ol.source.TileEvent
             */
            constructor(options: ol.SourceUrlTileOptions);

            /**
             * Return the tile load function of the source.
             * @api
             */
            getTileLoadFunction(): ol.TileLoadFunctionType;

            /**
             * Return the tile URL function of the source.
             * @api
             */
            getTileUrlFunction(): ol.TileUrlFunctionType;

            /**
             * Return the URLs used for this source.
             * When a tileUrlFunction is used instead of url or urls,
             * null will be returned.
             * @api
             */
            getUrls(): (string[]);

            /**
             * Set the tile load function of the source.
             * @api
             */
            setTileLoadFunction(tileLoadFunction: ol.TileLoadFunctionType): void;

            /**
             * Set the tile URL function of the source.
             * @api
             */
            setTileUrlFunction(tileUrlFunction: ol.TileUrlFunctionType, opt_key?: string): void;

            /**
             * Set the URL to use for requests.
             * @api stable
             */
            setUrl(url: string): void;

            /**
             * Set the URLs to use for requests.
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
         * @api stable
         */
        class Vector extends ol.source.Source {
            /**
             * @classdesc
             * Provides a source of features for vector layers. Vector features provided
             * by this source are suitable for editing. See {@link ol.source.VectorTile} for
             * vector data that is optimized for rendering.
             *
             * @fires ol.source.VectorEvent
             * @api stable
             */
            constructor(opt_options?: olx.source.VectorOptions);

            /**
             * Add a single feature to the source.  If you want to add a batch of features
             * at once, call {@link ol.source.Vector#addFeatures source.addFeatures()}
             * instead.
             * @api stable
             */
            addFeature(feature: ol.Feature): void;

            /**
             * Add a batch of features to the source.
             * @api stable
             */
            addFeatures(features: ol.Feature[]): void;

            /**
             * Remove all features from the source.
             * @api stable
             */
            clear(opt_fast?: boolean): void;

            /**
             * Iterate through all features on the source, calling the provided callback
             * with each one.  If the callback returns any "truthy" value, iteration will
             * stop and the function will return the same value.
             *
             *     on the source.  Return a truthy value to stop iteration.
             * @template T,S
             * @api stable
             */
            forEachFeature<T, S>(callback: ((feature: ol.Feature) => S), opt_this?: T): (S);

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
             *     whose bounding box intersects the provided extent.
             * @template T,S
             * @api
             */
            forEachFeatureInExtent<T, S>(extent: ol.Extent, callback: ((feature: ol.Feature) => S), opt_this?: T): (S);

            /**
             * Iterate through all features whose geometry intersects the provided extent,
             * calling the callback with each feature.  If the callback returns a "truthy"
             * value, iteration will stop and the function will return the same value.
             *
             * If you only want to test for bounding box intersection, call the
             * {@link ol.source.Vector#forEachFeatureInExtent
             * source.forEachFeatureInExtent()} method instead.
             *
             *     whose geometry intersects the provided extent.
             * @template T,S
             * @api
             */
            forEachFeatureIntersectingExtent<T, S>(extent: ol.Extent, callback: ((feature: ol.Feature) => S), opt_this?: T): (S);

            /**
             * Get the features collection associated with this source. Will be `null`
             * unless the source was configured with `useSpatialIndex` set to `false`, or
             * with an {@link ol.Collection} as `features`.
             * @api
             */
            getFeaturesCollection(): ol.Collection<ol.Feature>;

            /**
             * Get all features on the source.
             * @api stable
             */
            getFeatures(): ol.Feature[];

            /**
             * Get all features whose geometry intersects the provided coordinate.
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
             * @api
             */
            getFeaturesInExtent(extent: ol.Extent): ol.Feature[];

            /**
             * Get the closest feature to the provided coordinate.
             *
             * This method is not available when the source is configured with
             * `useSpatialIndex` set to `false`.
             *     The filter function will receive one argument, the {@link ol.Feature feature}
             *     and it should return a boolean value. By default, no filtering is made.
             * @api stable
             */
            getClosestFeatureToCoordinate(coordinate: ol.Coordinate, opt_filter?: ((feature: ol.Feature) => boolean)): ol.Feature;

            /**
             * Get the extent of the features currently in the source.
             *
             * This method is not available when the source is configured with
             * `useSpatialIndex` set to `false`.
             * @api stable
             */
            getExtent(): ol.Extent;

            /**
             * Get a feature by its identifier (the value returned by feature.getId()).
             * Note that the index treats string and numeric identifiers as the same.  So
             * `source.getFeatureById(2)` will return a feature with id `'2'` or `2`.
             *
             * @api stable
             */
            getFeatureById(id: (string | number)): ol.Feature;

            /**
             * Get the format associated with this source.
             *
             * @api
             */
            getFormat(): (ol.format.Feature);

            /**
             * Get the url associated with this source.
             *
             * @api
             */
            getUrl(): (string | ol.FeatureUrlFunction);

            /**
             * Remove a single feature from the source.  If you want to remove all features
             * at once, use the {@link ol.source.Vector#clear source.clear()} method
             * instead.
             * @api stable
             */
            removeFeature(feature: ol.Feature): void;
        }

        /**
         * @classdesc
         * Events emitted by {@link ol.source.Vector} instances are instances of this
         * type.
         *
         */
        class VectorEvent extends ol.events.Event {
            /**
             * @classdesc
             * Events emitted by {@link ol.source.Vector} instances are instances of this
             * type.
             *
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
         * @api
         */
        class VectorTile extends ol.source.UrlTile {
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
             * @api
             */
            constructor(options: olx.source.VectorTileOptions);
        }

        module wms {
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
         * @api stable
         */
        class WMTS extends ol.source.TileImage {
            /**
             * @classdesc
             * Layer source for tile data from WMTS servers.
             *
             * @api stable
             */
            constructor(options: olx.source.WMTSOptions);

            /**
             * Get the dimensions, i.e. those passed to the constructor through the
             * "dimensions" option, and possibly updated using the updateDimensions
             * method.
             * @api
             */
            getDimensions(): GlobalObject;

            /**
             * Return the image format of the WMTS source.
             * @api
             */
            getFormat(): string;

            /**
             * Return the layer of the WMTS source.
             * @api
             */
            getLayer(): string;

            /**
             * Return the matrix set of the WMTS source.
             * @api
             */
            getMatrixSet(): string;

            /**
             * Return the request encoding, either "KVP" or "REST".
             * @api
             */
            getRequestEncoding(): ol.source.WMTSRequestEncoding;

            /**
             * Return the style of the WMTS source.
             * @api
             */
            getStyle(): string;

            /**
             * Return the version of the WMTS source.
             * @api
             */
            getVersion(): string;

            /**
             * Update the dimensions.
             * @api
             */
            updateDimensions(dimensions: GlobalObject): void;

            /**
             * Generate source options from a capabilities object.
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
         *
         * @api stable
         */
        class XYZ extends ol.source.TileImage {
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
             *
             * @api stable
             */
            constructor(opt_options?: olx.source.XYZOptions);
        }

        /**
         * @classdesc
         * Layer source for tile data in Zoomify format.
         *
         * @api stable
         */
        class Zoomify extends ol.source.TileImage {
            /**
             * @classdesc
             * Layer source for tile data in Zoomify format.
             *
             * @api stable
             */
            constructor(opt_options?: olx.source.ZoomifyOptions);
        }
    }

    /**
     * Object literal with options for the {@link ol.Sphere.getLength} or
     * {@link ol.Sphere.getArea} functions.
     */
    interface SphereMetricOptions {
        /**
         * Projection of the geometry.  By default, the geometry is assumed to be in
         * EPSG:3857 (Web Mercator).
         */
        projection?: ol.proj.Projection;

        /**
         * Sphere radius.  By default, the radius of the earth is used (Clarke 1866
         * Authalic Sphere).
         * @api
         */
        radius?: number;
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
     * @api
     */
    class Sphere {
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
         * ring. If the ring is oriented clockwise, the area will be positive,
         * otherwise it will be negative.
         * @api
         */
        geodesicArea(coordinates: ol.Coordinate[]): number;

        /**
         * Returns the distance from c1 to c2 using the haversine formula.
         *
         * @api
         */
        haversineDistance(c1: ol.Coordinate, c2: ol.Coordinate): number;

        /**
         * Get the spherical area of a geometry.  This is the area (in meters) assuming
         * that polygon edges are segments of great circles on a sphere.
         *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
         *     You can change this by providing a `projection` option.
         * @api
         */
        static getArea(geometry: geom.Geometry, opt_options?: SphereMetricOptions): number;

        /**
         * Get the spherical length of a geometry.  This length is the sum of the
         * great circle distances between coordinates.  For polygons, the length is
         * the sum of all rings.  For points, the length is zero.  For multi-part
         * geometries, the length is the sum of the length of each part.
         *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
         *     You can change this by providing a `projection` option.
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
    module style {
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
         */
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
             */
            constructor(opt_options?: olx.style.AtlasManagerOptions);
        }

        /**
         * @classdesc
         * Set circle style for vector features.
         *
         * @api
         */
        class Circle extends ol.style.Image {
            /**
             * @classdesc
             * Set circle style for vector features.
             *
             * @api
             */
            constructor(opt_options?: olx.style.CircleOptions);

            /**
             * Get the fill style for the circle.
             * @api
             */
            getFill(): ol.style.Fill;

            /**
             * Get the image used to render the circle.
             * @api
             */
            getImage(pixelRatio: number): HTMLCanvasElement;

            /**
             * Get the circle radius.
             * @api
             */
            getRadius(): number;

            /**
             * Get the stroke style for the circle.
             * @api
             */
            getStroke(): ol.style.Stroke;

            /**
             * Set the circle radius.
             *
             * @api
             */
            setRadius(radius: number): void;
        }

        /**
         * @classdesc
         * Set fill style for vector features.
         *
         * @api
         */
        class Fill {
            /**
             * @classdesc
             * Set fill style for vector features.
             *
             * @api
             */
            constructor(opt_options?: olx.style.FillOptions);

            /**
             * Get the fill color.
             * @api
             */
            getColor(): (ol.Color | ol.ColorLike);

            /**
             * Set the color.
             *
             * @api
             */
            setColor(color: (ol.Color | ol.ColorLike)): void;
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
         * @api
         */
        class Icon extends ol.style.Image {
            /**
             * @classdesc
             * Set icon style for vector features.
             *
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
             * @api
             */
            getImage(pixelRatio: number): (Image | HTMLCanvasElement);

            /**
             * @inheritDoc
             * @api
             */
            getOrigin(): number[];

            /**
             * Get the image URL.
             * @api
             */
            getSrc(): (string);

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
         * @api
         */
        class Image {
            /**
             * @classdesc
             * A base class used for creating subclasses and not instantiated in
             * apps. Base class for {@link ol.style.Icon}, {@link ol.style.Circle} and
             * {@link ol.style.RegularShape}.
             *
             * @api
             */
            constructor(options: ol.StyleImageOptions);

            /**
             * Get the symbolizer opacity.
             * @api
             */
            getOpacity(): number;

            /**
             * Determine whether the symbolizer rotates with the map.
             * @api
             */
            getRotateWithView(): boolean;

            /**
             * Get the symoblizer rotation.
             * @api
             */
            getRotation(): number;

            /**
             * Get the symbolizer scale.
             * @api
             */
            getScale(): number;

            /**
             * Determine whether the symbolizer should be snapped to a pixel.
             * @api
             */
            getSnapToPixel(): boolean;

            /**
             * Set the opacity.
             *
             * @api
             */
            setOpacity(opacity: number): void;

            /**
             * Set the rotation.
             *
             * @api
             */
            setRotation(rotation: number): void;

            /**
             * Set the scale.
             *
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
         * @api
         */
        class RegularShape extends ol.style.Image {
            /**
             * @classdesc
             * Set regular shape style for vector features. The resulting shape will be
             * a regular polygon when `radius` is provided, or a star when `radius1` and
             * `radius2` are provided.
             *
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
             * @api
             */
            getAngle(): number;

            /**
             * Get the fill style for the shape.
             * @api
             */
            getFill(): ol.style.Fill;

            /**
             * @inheritDoc
             * @api
             */
            getImage(pixelRatio: number): (HTMLCanvasElement | HTMLVideoElement | Image);

            /**
             * @inheritDoc
             * @api
             */
            getOrigin(): number[];

            /**
             * Get the number of points for generating the shape.
             * @api
             */
            getPoints(): number;

            /**
             * Get the (primary) radius for the shape.
             * @api
             */
            getRadius(): number;

            /**
             * Get the secondary radius for the shape.
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
             * @api
             */
            getStroke(): ol.style.Stroke;
        }

        /**
         * @classdesc
         * Set stroke style for vector features.
         * Note that the defaults given are the Canvas defaults, which will be used if
         * option is not defined. The `get` functions return whatever was entered in
         * the options; they will not return the default.
         *
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
             * @api
             */
            constructor(opt_options?: olx.style.StrokeOptions);

            /**
             * Get the stroke color.
             * @api
             */
            getColor(): (ol.Color | string);

            /**
             * Get the line cap type for the stroke.
             * @api
             */
            getLineCap(): (string);

            /**
             * Get the line dash style for the stroke.
             * @api
             */
            getLineDash(): number[];

            /**
             * Get the line join type for the stroke.
             * @api
             */
            getLineJoin(): (string);

            /**
             * Get the miter limit for the stroke.
             * @api
             */
            getMiterLimit(): (number);

            /**
             * Get the stroke width.
             * @api
             */
            getWidth(): (number);

            /**
             * Set the color.
             *
             * @api
             */
            setColor(color: (ol.Color | string)): void;

            /**
             * Set the line cap.
             *
             * @api
             */
            setLineCap(lineCap: (string)): void;

            /**
             * Set the line dash.
             *
             * Please note that Internet Explorer 10 and lower [do not support][mdn] the
             * `setLineDash` method on the `CanvasRenderingContext2D` and therefore this
             * property will have no visual effect in these browsers.
             *
             * [mdn]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility
             *
             * @api
             */
            setLineDash(lineDash: number[]): void;

            /**
             * Set the line join.
             *
             * @api
             */
            setLineJoin(lineJoin: (string)): void;

            /**
             * Set the miter limit.
             *
             * @api
             */
            setMiterLimit(miterLimit: (number)): void;

            /**
             * Set the width.
             *
             * @api
             */
            setWidth(width: (number)): void;
        }

        /**
         * @classdesc
         * Container for vector feature rendering styles. Any changes made to the style
         * or its children through `set*()` methods will not take effect until the
         * feature or layer that uses the style is re-rendered.
         *
         * @struct
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
             * @api
             */
            constructor(opt_options?: olx.style.StyleOptions);

            /**
             * Clones the style.
             * @api
             */
            clone(): ol.style.Style;

            /**
             * Get the geometry to be rendered.
             * Feature property or geometry or function that returns the geometry that will
             * be rendered with this style.
             * @api
             */
            getGeometry(): (string | ol.geom.Geometry | ol.StyleGeometryFunction);

            /**
             * Get the function used to generate a geometry for rendering.
             * and returns the geometry to render instead of the feature's geometry.
             * @api
             */
            getGeometryFunction(): ol.StyleGeometryFunction;

            /**
             * Get the fill style.
             * @api
             */
            getFill(): ol.style.Fill;

            /**
             * Get the image style.
             * @api
             */
            getImage(): ol.style.Image;

            /**
             * Get the stroke style.
             * @api
             */
            getStroke(): ol.style.Stroke;

            /**
             * Get the text style.
             * @api
             */
            getText(): ol.style.Text;

            /**
             * Get the z-index for the style.
             * @api
             */
            getZIndex(): (number);

            /**
             * Set the fill style.
             * @api
             */
            setFill(fill: ol.style.Fill): void;

            /**
             * Set a geometry that is rendered instead of the feature's geometry.
             *
             *     Feature property or geometry or function returning a geometry to render
             *     for this style.
             * @api
             */
            setGeometry(geometry: (string | ol.geom.Geometry | ol.StyleGeometryFunction)): void;

            /**
             * Set the image style.
             * @api
             */
            setImage(image: ol.style.Image): void;

            /**
             * Set the stroke style.
             * @api
             */
            setStroke(stroke: ol.style.Stroke): void;

            /**
             * Set the text style.
             * @api
             */
            setText(text: ol.style.Text): void;

            /**
             * Set the z-index.
             *
             * @api
             */
            setZIndex(zIndex: (number)): void;
        }

        /**
         * @classdesc
         * Set text style for vector features.
         *
         * @api
         */
        class Text {
            /**
             * @classdesc
             * Set text style for vector features.
             *
             * @api
             */
            constructor(opt_options?: olx.style.TextOptions);

            /**
             * Get the font name.
             * @api
             */
            getFont(): (string);

            /**
             * Get the x-offset for the text.
             * @api
             */
            getOffsetX(): number;

            /**
             * Get the y-offset for the text.
             * @api
             */
            getOffsetY(): number;

            /**
             * Get the fill style for the text.
             * @api
             */
            getFill(): ol.style.Fill;

            /**
             * Determine whether the text rotates with the map.
             * @api
             */
            getRotateWithView(): (boolean);

            /**
             * Get the text rotation.
             * @api
             */
            getRotation(): (number);

            /**
             * Get the text scale.
             * @api
             */
            getScale(): (number);

            /**
             * Get the stroke style for the text.
             * @api
             */
            getStroke(): ol.style.Stroke;

            /**
             * Get the text to be rendered.
             * @api
             */
            getText(): (string);

            /**
             * Get the text alignment.
             * @api
             */
            getTextAlign(): (string);

            /**
             * Get the text baseline.
             * @api
             */
            getTextBaseline(): (string);

            /**
             * Set the font.
             *
             * @api
             */
            setFont(font: (string)): void;

            /**
             * Set the x offset.
             *
             * @api
             */
            setOffsetX(offsetX: number): void;

            /**
             * Set the y offset.
             *
             * @api
             */
            setOffsetY(offsetY: number): void;

            /**
             * Set the fill.
             *
             * @api
             */
            setFill(fill: ol.style.Fill): void;

            /**
             * Set the rotation.
             *
             * @api
             */
            setRotation(rotation: (number)): void;

            /**
             * Set the scale.
             *
             * @api
             */
            setScale(scale: (number)): void;

            /**
             * Set the stroke.
             *
             * @api
             */
            setStroke(stroke: ol.style.Stroke): void;

            /**
             * Set the text.
             *
             * @api
             */
            setText(text: (string)): void;

            /**
             * Set the text alignment.
             *
             * @api
             */
            setTextAlign(textAlign: (string)): void;

            /**
             * Set the text baseline.
             *
             * @api
             */
            setTextBaseline(textBaseline: (string)): void;
        }
    }

    /**
     * @classdesc
     * Base class for tiles.
     *
     */
    class Tile extends ol.events.EventTarget {
        /**
         * @classdesc
         * Base class for tiles.
         *
         */
        constructor(tileCoord: ol.TileCoord, state: ol.Tile.State);

        /**
         * Get the tile coordinate for this tile.
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

    module Tile {
        type State = number;
    }

    module tilegrid {
        /**
         * Creates a tile grid with a standard XYZ tiling scheme.
         * @api
         */
        function createXYZ(opt_options?: olx.tilegrid.XYZOptions): ol.tilegrid.TileGrid;

        /**
         * @classdesc
         * Base class for setting the grid pattern for sources accessing tiled-image
         * servers.
         *
         * @struct
         * @api stable
         */
        class TileGrid {
            /**
             * @classdesc
             * Base class for setting the grid pattern for sources accessing tiled-image
             * servers.
             *
             * @struct
             * @api stable
             */
            constructor(options: olx.tilegrid.TileGridOptions);

            /**
             * Call a function with each tile coordinate for a given extent and zoom level.
             *
             * @api
             */
            forEachTileCoord(extent: ol.Extent, zoom: number, callback: ((coords: ol.TileCoord) => any)): void;

            /**
             * Get the maximum zoom level for the grid.
             * @api
             */
            getMaxZoom(): number;

            /**
             * Get the minimum zoom level for the grid.
             * @api
             */
            getMinZoom(): number;

            /**
             * Get the origin for the grid at the given zoom level.
             * @api stable
             */
            getOrigin(z: number): ol.Coordinate;

            /**
             * Get the resolution for the given zoom level.
             * @api stable
             */
            getResolution(z: number): number;

            /**
             * Get the list of resolutions for the tile grid.
             * @api stable
             */
            getResolutions(): number[];

            /**
             * Get the extent of a tile coordinate.
             *
             * @api
             */
            getTileCoordExtent(tileCoord: ol.TileCoord, opt_extent?: ol.Extent): ol.Extent;

            /**
             * Get the tile coordinate for the given map coordinate and resolution.  This
             * method considers that coordinates that intersect tile boundaries should be
             * assigned the higher tile coordinate.
             *
             * @api
             */
            getTileCoordForCoordAndResolution(coordinate: ol.Coordinate, resolution: number, opt_tileCoord?: ol.TileCoord): ol.TileCoord;

            /**
             * Get a tile coordinate given a map coordinate and zoom level.
             * @api
             */
            getTileCoordForCoordAndZ(coordinate: ol.Coordinate, z: number, opt_tileCoord?: ol.TileCoord): ol.TileCoord;

            /**
             * Get the tile size for a zoom level. The type of the return value matches the
             * `tileSize` or `tileSizes` that the tile grid was configured with. To always
             * get an `ol.Size`, run the result through `ol.size.toSize()`.
             * @api stable
             */
            getTileSize(z: number): (number | ol.Size);

            /**
             *     If 1, the nearest lower resolution will be used. If -1, the nearest
             *     higher resolution will be used. Default is 0.
             * @api
             */
            getZForResolution(resolution: number, opt_direction?: number): number;
        }

        /**
         * @classdesc
         * Set the grid pattern for sources accessing WMTS tiled-image servers.
         *
         * @struct
         * @api
         */
        class WMTS extends ol.tilegrid.TileGrid {
            /**
             * @classdesc
             * Set the grid pattern for sources accessing WMTS tiled-image servers.
             *
             * @struct
             * @api
             */
            constructor(options: olx.tilegrid.WMTSOptions);

            /**
             * Get the list of matrix identifiers.
             * @api
             */
            getMatrixIds(): string[];

            /**
             * Create a tile grid from a WMTS capabilities matrix set.
             *     capabilities document.
             *     ranges the server provides.
             * @api
             */
            static createFromCapabilitiesMatrixSet(matrixSet: GlobalObject, opt_extent?: ol.Extent): ol.tilegrid.WMTS;
        }
    }

    type AttributionLike = (string | string[] | ol.Attribution | ol.Attribution[]);

    /**
     * A function returning the canvas element (`{HTMLCanvasElement}`)
     * used by the source as an image. The arguments passed to the function are:
     * {@link ol.Extent} the image extent, `{number}` the image resolution,
     * `{number}` the device pixel ratio, {@link ol.Size} the image size, and
     * {@link ol.proj.Projection} the image projection. The canvas returned by
     * this function is cached by the source. The this keyword inside the function
     * references the {@link ol.source.ImageCanvas}.
     */
    type CanvasFunctionType = (extent: ol.Extent, resolution: number, pixelRatio: number, size: ol.Size, proj: ol.proj.Projection) => HTMLCanvasElement;

    /**
     * A color represented as a short array [red, green, blue, alpha].
     * red, green, and blue should be integers in the range 0..255 inclusive.
     * alpha should be a float in the range 0..1 inclusive. If no alpha value is
     * given then `1` will be used.
     */
    type Color = ([number, number, number, number] | Uint8Array | Uint8ClampedArray);

    /**
     * A type accepted by CanvasRenderingContext2D.fillStyle.
     * Represents a color, pattern, or gradient.
     */
    type ColorLike = (string | CanvasPattern | CanvasGradient);

    /**
     * An array of numbers representing an xy coordinate. Example: `[16, 48]`.
     */
    type Coordinate = [number, number];

    /**
     * A function that takes a {@link ol.Coordinate} and transforms it into a
     * `{string}`.
     */
    type CoordinateFormatType = (coords?: ol.Coordinate) => string;

    /**
     * A function that takes a {@link ol.MapBrowserEvent} and two
     * {@link ol.Pixel}s and returns a `{boolean}`. If the condition is met,
     * true should be returned.
     */
    type DragBoxEndConditionType = (event: ol.MapBrowserEvent, pixel1: ol.Pixel, pixel2: ol.Pixel) => boolean;

    /**
     * Function that takes coordinates and an optional existing geometry as
     * arguments, and returns a geometry. The optional existing geometry is the
     * geometry that is returned when the function is called without a second
     * argument.
     */
    type DrawGeometryFunctionType = (coords: (ol.Coordinate | ol.Coordinate[] | ol.Coordinate[][]), geo?: ol.geom.SimpleGeometry) => ol.geom.SimpleGeometry;

    /**
     * A function that takes an {@link ol.MapBrowserEvent} and returns a
     * `{boolean}`. If the condition is met, true should be returned.
     */
    type EventsConditionType = (event: ol.MapBrowserEvent) => boolean;

    /**
     * Key to use with {@link ol.Observable#unByKey}.
     */
    type EventsKey = Object;

    /**
     * An array of numbers representing an extent: `[minx, miny, maxx, maxy]`.
     */
    type Extent = [number, number, number, number];

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
    type FeatureLoader = (extent: ol.Extent, resolution: number, proj: ol.proj.Projection) => void;

    /**
     * A function that returns an array of {@link ol.style.Style styles} given a
     * resolution. The `this` keyword inside the function references the
     * {@link ol.Feature} to be styled.
     */
    type FeatureStyleFunction = (resolution: number) => (ol.style.Style | ol.style.Style[]);

    /**
     * {@link ol.source.Vector} sources use a function of this type to get the url
     * to load features from.
     *
     * This function takes an {@link ol.Extent} representing the area to be loaded,
     * a `{number}` representing the resolution (map units per pixel) and an
     * {@link ol.proj.Projection} for the projection  as arguments and returns a
     * `{string}` representing the URL.
     */
    type FeatureUrlFunction = (extent: ol.Extent, resolution: number, proj: ol.proj.Projection) => string;

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
    type ImageLoadFunctionType = (image: ol.Image, url: string) => void;

    /**
     * A function that takes an {@link ol.Extent} and a resolution as arguments, and
     * returns an array of {@link ol.Extent} with the extents to load. Usually this
     * is one of the standard {@link ol.loadingstrategy} strategies.
     */
    type LoadingStrategy = (extent: ol.Extent, resolution: number) => ol.Extent[];

    type ModifyEventType = string;

    /**
     * An array with two elements, representing a pixel. The first element is the
     * x-coordinate, the second the y-coordinate of the pixel.
     */
    type Pixel = [number, number];

    /**
     * Function to perform manipulations before rendering. This function is called
     * with the {@link ol.Map} as first and an optional {@link olx.FrameState} as
     * second argument. Return `true` to keep this function for the next frame,
     * `false` to remove it.
     */
    type PreRenderFunction = (map: ol.Map, state?: olx.FrameState) => boolean;

    /**
     * A projection as {@link ol.proj.Projection}, SRS identifier string or
     * undefined.
     */
    type ProjectionLike = (ol.proj.Projection | string | undefined);

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
    type RasterOperation = (data: (number[][] | ImageData[]), obj: GlobalObject) => (number[] | ImageData);

    /**
     * A function that takes an {@link ol.Feature} or {@link ol.render.Feature} and
     * an {@link ol.layer.Layer} and returns `true` if the feature may be selected
     * or `false` otherwise.
     */
    type SelectFilterFunction = (feature: (ol.Feature | ol.render.Feature), layer: ol.layer.Layer) => boolean;

    /**
     * An array of numbers representing a size: `[width, height]`.
     */
    type Size = [number, number];

    interface SourceImageOptions {
        attributions?: ol.AttributionLike;
        extent?: (ol.Extent);
        logo?: (string | olx.LogoOptions);
        projection: ol.ProjectionLike;
        resolutions?: number[];
        state?: ol.source.State;
    }

    interface SourceSourceOptions {
        attributions?: ol.AttributionLike;
        logo?: (string | olx.LogoOptions);
        projection: ol.ProjectionLike;
        state?: ol.source.State;
        wrapX?: boolean;
    }

    interface SourceUrlTileOptions {
        attributions?: ol.AttributionLike;
        cacheSize?: number;
        extent?: ol.Extent;
        logo?: (string | olx.LogoOptions);
        opaque?: boolean;
        projection: ol.ProjectionLike;
        state?: ol.source.State;
        tileGrid?: ol.tilegrid.TileGrid;
        tileLoadFunction: ol.TileLoadFunctionType;
        tilePixelRatio?: number;
        tileUrlFunction?: ol.TileUrlFunctionType;
        url?: string;
        urls?: string[];
        wrapX?: boolean;
    }

    interface SourceTileOptions {
        attributions?: ol.AttributionLike;
        cacheSize?: number;
        extent?: ol.Extent;
        logo?: (string | olx.LogoOptions);
        opaque?: boolean;
        tilePixelRatio?: number;
        projection: ol.ProjectionLike;
        state?: ol.source.State;
        tileGrid?: ol.tilegrid.TileGrid;
        wrapX?: boolean;
    }

    interface StyleImageOptions {
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
    type StyleFunction = (feature: (ol.Feature | ol.render.Feature), resolution: number) => (ol.style.Style | ol.style.Style[]);

    /**
     * A function that takes an {@link ol.Feature} as argument and returns an
     * {@link ol.geom.Geometry} that will be rendered and styled for the feature.
     */
    type StyleGeometryFunction = (feature: (ol.Feature | ol.render.Feature)) => (ol.geom.Geometry | ol.render.Feature);

    /**
     * An array of three numbers representing the location of a tile in a tile
     * grid. The order is `z`, `x`, and `y`. `z` is the zoom level.
     */
    type TileCoord = [number, number, number];

    /**
     * A function that takes an {@link ol.Tile} for the tile and a `{string}` for
     * the url as arguments.
     */
    type TileLoadFunctionType = (tile: ol.Tile, url: string) => void;

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
    type TileUrlFunctionType = (coords: ol.TileCoord, pixelRatio: number, proj: ol.proj.Projection) => string;

    /**
     * A transform function accepts an array of input coordinate values, an optional
     * output array, and an optional dimension (default should be 2).  The function
     * transforms the input coordinate values, populates the output array, and
     * returns the output array.
     */
    type TransformFunction = (array: number[], out?: number[], dimension?: number) => number[];

    /**
     * Number of features; bounds/extent.
     */
    type WFSFeatureCollectionMetadata = Object;

    /**
     * Total deleted; total inserted; total updated; array of insert ids.
     */
    type WFSTransactionResponse = Object;

    class VectorTile extends ol.Tile {
        constructor(tileCoord: ol.TileCoord, state: ol.Tile.State, src: string, format: ol.format.Feature, tileLoadFunction: ol.TileLoadFunctionType);

        /**
         * Get the feature format assigned for reading this tile's features.
         * @api
         */
        getFormat(): ol.format.Feature;

        /**
         * @api
         */
        setFeatures(features: ol.Feature[]): void;

        /**
         * Set the projection of the features that were added with {@link #setFeatures}.
         * @api
         */
        setProjection(projection: ol.proj.Projection): void;

        /**
         * Set the feature loader for reading this tile's features.
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
     * @api stable
     */
    class View extends ol.Object {
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
         * @api stable
         */
        constructor(opt_options?: olx.ViewOptions);

        /**
         * Animate the view. The view's center, zoom (or resolution), and
         * rotation can be animated for smooth transitions between view states.
         * @api experimental
         */
        animate(...var_args: Array<olx.animation.AnimateOptions | olx.animation.AnimateCallback>): void;

        /**
         * Determine if the view is being animated.
         * @api
         */
        getAnimating(): boolean;

        /**
         * Determine if the user is interacting with the view, such as panning or zooming.
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
         * @api
         */
        constrainCenter(center?: ol.Coordinate): ol.Coordinate;

        /**
         * Get the constrained resolution of this view.
         * @api
         */
        constrainResolution(resolution?: number, opt_delta?: number, opt_direction?: number): number;

        /**
         * Get the constrained rotation of this view.
         * @api
         */
        constrainRotation(rotation?: number, opt_delta?: number): number;

        /**
         * Get the view center.
         * @observable
         * @api stable
         */
        getCenter(): ol.Coordinate;

        /**
         * Calculate the extent for the current view state and the passed size.
         * The size is the pixel dimensions of the box into which the calculated extent
         * should fit. In most cases you want to get the extent of the entire map,
         * that is `map.getSize()`.
         * @api stable
         */
        calculateExtent(size?: ol.Size): ol.Extent;

        /**
         * Get the maximum resolution of the view.
         * @api
         */
        getMaxResolution(): number;

        /**
         * Get the minimum resolution of the view.
         * @api
         */
        getMinResolution(): number;

        /**
         * Get the maximum zoom level for the view.
         * @api
         */
        getMaxZoom(): number;

        /**
         * Set a new maximum zoom level for the view.
         * @api stable
         */
        setMaxZoom(zoom: number): void;

        /**
         * Get the minimum zoom level for the view.
         * @api
         */
        getMinZoom(): number;

        /**
         * Set a new minimum zoom level for the view.
         * @api stable
         */
        setMinZoom(zoom: number): void;

        /**
         * Get the view projection.
         * @api stable
         */
        getProjection(): ol.proj.Projection;

        /**
         * Get the view resolution.
         * @observable
         * @api stable
         */
        getResolution(): number;

        /**
         * Get the resolutions for the view. This returns the array of resolutions
         * passed to the constructor of the {ol.View}, or undefined if none were given.
         * @api stable
         */
        getResolutions(): number[];

        /**
         * Get the resolution for a provided extent (in map units) and size (in pixels).
         *     the given size.
         * @api
         */
        getResolutionForExtent(extent: ol.Extent, opt_size?: ol.Size): number;

        /**
         * Get the view rotation.
         * @observable
         * @api stable
         */
        getRotation(): number;

        /**
         * Get the current zoom level.  If you configured your view with a resolutions
         * array (this is rare), this method may return non-integer zoom levels (so
         * the zoom level is not safe to use as an index into a resolutions array).
         * @api
         */
        getZoom(): number;

        /**
         * Get the zoom level for a resolution.
         * @api
         */
        getZoomForResolution(resolution: number): number;

        /**
         * Get the resolution for a zoom level.
         * @api
         */
        getResolutionForZoom(zoom: number): number;

        /**
         * Fit the given geometry or extent based on the given map size and border.
         * The size is pixel dimensions of the box to fit the extent into.
         * In most cases you will want to use the map size, that is `map.getSize()`.
         * Takes care of the map angle.
         * @api
         */
        fit(geometryOrExtent: (ol.geom.SimpleGeometry | ol.Extent), opt_options?: olx.view.FitOptions): void;

        /**
         * Center on coordinate and view position.
         * @api
         */
        centerOn(coordinate: ol.Coordinate, size: ol.Size, position: ol.Pixel): void;

        /**
         * Rotate the view around a given coordinate.
         * @api stable
         */
        rotate(rotation: number, opt_anchor?: ol.Coordinate): void;

        /**
         * Set the center of the current view.
         * @observable
         * @api stable
         */
        setCenter(center: ol.Coordinate): void;

        /**
         * Set the resolution for this view.
         * @observable
         * @api stable
         */
        setResolution(resolution?: number): void;

        /**
         * Set the rotation for this view.
         * @observable
         * @api stable
         */
        setRotation(rotation: number): void;

        /**
         * Zoom to a specific zoom level.
         * @api stable
         */
        setZoom(zoom: number): void;
    }
}

declare module olx {
    module animation {
        interface BounceOptions {
            resolution: number;
            start?: number;
            duration?: number;
            easing?: ((t: number) => number);
        }

        interface PanOptions {
            source: ol.Coordinate;
            start?: number;
            duration?: number;
            easing?: ((t: number) => number);
        }

        interface RotateOptions {
            rotation?: number;
            anchor?: ol.Coordinate;
            start?: number;
            duration?: number;
            easing?: ((t: number) => number);
        }

        interface ZoomOptions {
            resolution: number;
            start?: number;
            duration?: number;
            easing?: ((t: number) => number);
        }

        /**
         * Animation options. Multiple animations can be run in series by passing
         * multiple options objects. To run multiple animations in parallel, call
         * the method multiple times. An optional callback can be provided as a
         * final argument. The callback will be called with a boolean indicating
         * whether the animation completed without being cancelled.
         */
        interface AnimateOptions {
            center?: ol.Coordinate;
            zoom?: number;
            resolution?: number;
            rotation?: number;
            anchor?: ol.Coordinate;
            duration?: number;
            easing?: ((t: number) => number);
        }

        type AnimateCallback = (completed: boolean) => void;
    }

    module control {
        interface AttributionOptions {
            className?: string;
            target?: Element;
            collapsible?: boolean;
            collapsed?: boolean;
            tipLabel?: string;
            label?: (string | Node);
            collapseLabel?: (string | Node);
            render?: ((event: ol.MapEvent) => any);
        }

        interface ControlOptions {
            element?: Element;
            render?: ((event: ol.MapEvent) => any);
            target?: (Element | string);
        }

        interface DefaultsOptions {
            attribution?: boolean;
            attributionOptions?: olx.control.AttributionOptions;
            rotate?: boolean;
            rotateOptions?: olx.control.RotateOptions;
            zoom?: boolean;
            zoomOptions?: olx.control.ZoomOptions;
        }

        interface FullScreenOptions {
            className?: string;
            label?: (string | Node);
            labelActive?: (string | Node);
            tipLabel?: string;
            keys?: boolean;
            target?: Element;
            source?: (Element | string);
        }

        interface MousePositionOptions {
            className?: string;
            coordinateFormat?: ol.CoordinateFormatType;
            projection: ol.ProjectionLike;
            render?: ((event: ol.MapEvent) => any);
            target?: Element;
            undefinedHTML?: string;
        }

        interface OverviewMapOptions {
            collapsed?: boolean;
            collapseLabel?: (string | Node);
            collapsible?: boolean;
            label?: (string | Node);
            layers?: (ol.layer.Layer[] | ol.Collection<ol.layer.Layer>);
            render?: ((event: ol.MapEvent) => any);
            target?: Element;
            tipLabel?: string;
            view?: ol.View;
        }

        interface ScaleLineOptions {
            className?: string;
            minWidth?: number;
            render?: ((event: ol.MapEvent) => any);
            target?: Element;
            units?: (ol.control.ScaleLine.Units | string);
        }

        interface RotateOptions {
            className?: string;
            label?: (string | Element);
            tipLabel?: string;
            duration?: number;
            autoHide?: boolean;
            render?: ((event: ol.MapEvent) => any);
            resetNorth?: (() => any);
            target?: Element;
        }

        interface ZoomOptions {
            duration?: number;
            className?: string;
            zoomInLabel?: (string | Node);
            zoomOutLabel?: (string | Node);
            zoomInTipLabel?: string;
            zoomOutTipLabel?: string;
            delta?: number;
            target?: Element;
        }

        interface ZoomSliderOptions {
            className?: string;
            duration?: number;
            maxResolution?: number;
            minResolution?: number;
            render?: ((event: ol.MapEvent) => any);
        }

        interface ZoomToExtentOptions {
            className?: string;
            target?: Element;
            label?: (string | Node);
            tipLabel?: string;
            extent?: ol.Extent;
        }
    }

    module format {
        interface ReadOptions {
            dataProjection: ol.ProjectionLike;
            featureProjection: ol.ProjectionLike;
        }

        interface WriteOptions {
            dataProjection: ol.ProjectionLike;
            featureProjection?: ol.ProjectionLike;
            rightHanded?: boolean;
            decimals?: number;
        }

        interface GeoJSONOptions {
            defaultDataProjection: ol.ProjectionLike;
            featureProjection: ol.ProjectionLike;
            geometryName?: string;
        }

        interface EsriJSONOptions {
            geometryName?: string;
        }

        interface MVTOptions {
            featureClass?: (((geom: (ol.geom.Geometry | { [k: string]: any })) => any) | ((geom: ol.geom.GeometryType, arg2: number[],
                           arg3: (number[] | number[][]),
                           arg4: { [k: string]: any }) => any));
            geometryName?: string;
            layerName?: string;
            layers?: string[];
        }

        interface PolylineOptions {
            factor?: number;
            geometryLayout?: ol.geom.GeometryLayout;
        }

        interface TopoJSONOptions {
            defaultDataProjection: ol.ProjectionLike;
        }

        /* tslint:disable-next-line:interface-name */
        interface IGCOptions {
            altitudeMode?: ol.format.IGCZ;
        }

        interface KMLOptions {
            extractStyles?: boolean;
            showPointNames?: boolean;
            defaultStyle?: ol.style.Style[];
            writeStyles?: boolean;
        }

        interface GMLOptions {
            featureNS?: ({ [k: string]: string } | string);
            featureType?: (string[] | string);
            srsName: string;
            surface?: boolean;
            curve?: boolean;
            multiCurve?: boolean;
            multiSurface?: boolean;
            schemaLocation?: string;
        }

        interface GPXOptions {
            readExtensions?: ((feature: ol.Feature, node: Node) => any);
        }

        interface WFSOptions {
            featureNS?: ({ [k: string]: string } | string);
            featureType?: (string[] | string);
            gmlFormat?: ol.format.GMLBase;
            schemaLocation?: string;
        }

        interface WFSWriteGetFeatureOptions {
            featureNS: string;
            featurePrefix: string;
            featureTypes: string[];
            srsName?: string;
            handle?: string;
            outputFormat?: string;
            maxFeatures?: number;
            geometryName?: string;
            propertyNames?: string[];
            startIndex?: number;
            count?: number;
            bbox?: ol.Extent;
            filter?: ol.format.filter.Filter;
            resultType?: string;
        }

        interface WFSWriteTransactionOptions {
            featureNS: string;
            featurePrefix: string;
            featureType: string;
            srsName?: string;
            handle?: string;
            nativeElements: GlobalObject[];
            gmlOptions?: olx.format.GMLOptions;
        }

        interface WKTOptions {
            splitCollection?: boolean;
        }

        interface WMSGetFeatureInfoOptions {
            layers?: string[];
        }
    }

    module interaction {
        interface InteractionOptions {
            handleEvent: (event: ol.MapBrowserEvent) => boolean;
        }

        /**
         * Interactions for the map. Default is `true` for all options.
         */
        interface DefaultsOptions {
            altShiftDragRotate?: boolean;
            doubleClickZoom?: boolean;
            constrainResolution?: boolean;
            keyboard?: boolean;
            mouseWheelZoom?: boolean;
            shiftDragZoom?: boolean;
            dragPan?: boolean;
            pinchRotate?: boolean;
            pinchZoom?: boolean;
            zoomDelta?: number;
            zoomDuration?: number;
        }

        interface DoubleClickZoomOptions {
            duration?: number;
            delta?: number;
        }

        interface DragAndDropOptions {
            formatConstructors?: Array<((n: ol.format.Feature) => any)>;
            projection: ol.ProjectionLike;
            target?: Element;
            source?: ol.source.Vector;
        }

        interface DragBoxOptions {
            className?: string;
            condition?: ol.EventsConditionType;
            minArea?: number;
            boxEndCondition?: ol.DragBoxEndConditionType;
        }

        interface DragPanOptions {
            condition?: ol.EventsConditionType;
            kinetic?: ol.Kinetic;
        }

        interface DragRotateAndZoomOptions {
            condition?: ol.EventsConditionType;
            duration?: number;
        }

        interface DragRotateOptions {
            condition?: ol.EventsConditionType;
            duration?: number;
        }

        interface DragZoomOptions {
            className?: string;
            condition?: ol.EventsConditionType;
            duration?: number;
            out?: boolean;
        }

        interface DrawOptions {
            clickTolerance?: number;
            features?: ol.Collection<ol.Feature>;
            source?: ol.source.Vector;
            snapTolerance?: number;
            type: ol.geom.GeometryType;
            maxPoints?: number;
            minPoints?: number;
            finishCondition?: ol.EventsConditionType;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
            geometryFunction?: ol.DrawGeometryFunctionType;
            geometryName?: string;
            condition?: ol.EventsConditionType;
            freehandCondition?: ol.EventsConditionType;
            freehand?: boolean;
            wrapX?: boolean;
        }

        interface TranslateOptions {
            features?: ol.Collection<ol.Feature>;
            layers?: (ol.layer.Layer[] | ((layer: ol.layer.Layer) => boolean));
        }

        interface KeyboardPanOptions {
            condition?: ol.EventsConditionType;
            duration?: number;
            pixelDelta?: number;
        }

        interface KeyboardZoomOptions {
            duration?: number;
            condition?: ol.EventsConditionType;
            delta?: number;
        }

        interface ModifyOptions {
            condition?: ol.EventsConditionType;
            deleteCondition?: ol.EventsConditionType;
            insertVertexCondition?: ol.EventsConditionType;
            pixelTolerance?: number;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
            features?: ol.Collection<ol.Feature>;
            wrapX?: boolean;
            source?: ol.source.Vector;
        }

        interface MouseWheelZoomOptions {
            constrainResolution?: boolean;
            duration?: number;
            timeout?: number;
            useAnchor?: boolean;
        }

        interface PinchRotateOptions {
            duration?: number;
            threshold?: number;
        }

        interface PinchZoomOptions {
            constrainResolution?: boolean;
            duration?: number;
        }

        interface PointerOptions {
            handleDownEvent?: ((event: ol.MapBrowserPointerEvent) => boolean);
            handleDragEvent?: ((event: ol.MapBrowserPointerEvent) => boolean);
            handleEvent?: ((event: ol.MapBrowserPointerEvent) => boolean);
            handleMoveEvent?: ((event: ol.MapBrowserPointerEvent) => boolean);
            handleUpEvent?: ((event: ol.MapBrowserPointerEvent) => boolean);
        }

        interface SelectOptions {
            addCondition?: ol.EventsConditionType;
            condition?: ol.EventsConditionType;
            layers?: (ol.layer.Layer[] | ((layer: ol.layer.Layer) => boolean));
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
            removeCondition?: ol.EventsConditionType;
            toggleCondition?: ol.EventsConditionType;
            multi?: boolean;
            features?: ol.Collection<ol.Feature>;
            filter?: ol.SelectFilterFunction;
            wrapX?: boolean;
            hitTolerance?: number;
        }

        /**
         * Options for snap
         */
        interface SnapOptions {
            features?: ol.Collection<ol.Feature>;
            edge?: boolean;
            vertex?: boolean;
            pixelTolerance?: number;
            source?: ol.source.Vector;
        }
    }

    module layer {
        interface BaseOptions {
            opacity?: number;
            visible?: boolean;
            extent?: ol.Extent;
            zIndex?: number;
            minResolution?: number;
            maxResolution?: number;
        }

        interface LayerOptions {
            opacity?: number;
            source?: ol.source.Source;
            visible?: boolean;
            extent?: ol.Extent;
            zIndex?: number;
            minResolution?: number;
            maxResolution?: number;
        }

        interface GroupOptions {
            opacity?: number;
            visible?: boolean;
            extent?: ol.Extent;
            zIndex?: number;
            minResolution?: number;
            maxResolution?: number;
            layers?: (ol.layer.Base[] | ol.Collection<ol.layer.Base>);
        }

        interface HeatmapOptions {
            gradient?: string[];
            radius?: number;
            blur?: number;
            shadow?: number;
            weight: (string | ((feature: ol.Feature) => number));
            extent?: ol.Extent;
            minResolution?: number;
            maxResolution?: number;
            opacity?: number;
            source: ol.source.Vector;
            visible?: boolean;
            zIndex?: number;
        }

        interface ImageOptions {
            opacity?: number;
            source: ol.source.Image;
            map?: ol.Map;
            visible?: boolean;
            extent?: ol.Extent;
            minResolution?: number;
            maxResolution?: number;
            zIndex?: number;
        }

        interface TileOptions {
            opacity?: number;
            preload?: number;
            source: ol.source.Tile;
            map?: ol.Map;
            visible?: boolean;
            extent?: ol.Extent;
            minResolution?: number;
            maxResolution?: number;
            useInterimTilesOnError?: boolean;
            zIndex?: number;
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
            renderMode?: (olx.layer.VectorRenderType | string);
            renderOrder?: (feature1: ol.Feature, feature2: ol.Feature) => number;
            map?: ol.Map;
            extent?: ol.Extent;
            minResolution?: number;
            maxResolution?: number;
            opacity?: number;
            renderBuffer?: number;
            source: ol.source.Vector;
            declutter?: boolean;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
            updateWhileAnimating?: boolean;
            updateWhileInteracting?: boolean;
            visible?: boolean;
            zIndex?: number;
        }

        interface VectorTileOptions {
            renderBuffer?: number;
            renderMode?: (ol.layer.VectorTileRenderType | string);
            renderOrder: (feature1: ol.Feature, feature2: ol.Feature) => number;
            map?: ol.Map;
            extent?: ol.Extent;
            minResolution?: number;
            maxResolution?: number;
            opacity?: number;
            source?: ol.source.VectorTile;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
            updateWhileAnimating?: boolean;
            updateWhileInteracting?: boolean;
            visible?: boolean;
            zIndex?: number;
        }
    }

    module parser {
    }

    module render {
        interface ToContextOptions {
            size?: ol.Size;
            pixelRatio?: number;
        }
    }

    module source {
        interface BingMapsOptions {
            cacheSize?: number;
            culture?: string;
            key: string;
            imagerySet: string;
            maxZoom?: number;
            reprojectionErrorThreshold?: number;
            tileLoadFunction?: ol.TileLoadFunctionType;
            wrapX?: boolean;
        }

        interface ClusterOptions {
            attributions?: ol.AttributionLike;
            distance?: number;
            extent?: ol.Extent;
            geometryFunction?: ((feature: ol.Feature) => ol.geom.Point);
            format?: ol.format.Feature;
            logo?: string;
            projection?: ol.ProjectionLike;
            source: ol.source.Vector;
            wrapX?: boolean;
        }

        type TileJSON = JSON;

        interface TileUTFGridOptions {
            jsonp?: boolean;
            preemptive?: boolean;
            tileJSON?: TileJSON;
            url?: string;
        }

        interface TileImageOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            logo?: (string | olx.LogoOptions);
            opaque?: boolean;
            projection: ol.ProjectionLike;
            reprojectionErrorThreshold?: number;
            state?: ol.source.State;
            tileClass?: ((n: ol.ImageTile, coords: ol.TileCoord, state: ol.Tile.State, s1: string, s2: string, type: ol.TileLoadFunctionType) => any);
            tileGrid?: ol.tilegrid.TileGrid;
            tileLoadFunction?: ol.TileLoadFunctionType;
            tilePixelRatio?: number;
            tileUrlFunction?: ol.TileUrlFunctionType;
            url?: string;
            urls?: string[];
            wrapX?: boolean;
            transition?: number;
        }

        interface VectorTileOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            format?: ol.format.Feature;
            logo?: (string | olx.LogoOptions);
            overlaps?: boolean;
            projection: ol.ProjectionLike;
            state?: ol.source.State;
            tileClass?: ((n: ol.VectorTile, coords: ol.TileCoord, state: ol.Tile.State, s: string, feature: ol.format.Feature, type: ol.TileLoadFunctionType) => any);
            tileGrid?: ol.tilegrid.TileGrid;
            tileLoadFunction?: ol.TileLoadFunctionType;
            tileUrlFunction?: ol.TileUrlFunctionType;
            url?: string;
            urls?: string[];
            wrapX?: boolean;
        }

        interface ImageMapGuideOptions {
            url?: string;
            displayDpi?: number;
            metersPerUnit?: number;
            hidpi?: boolean;
            useOverlay?: boolean;
            projection: ol.ProjectionLike;
            ratio?: number;
            resolutions?: number[];
            imageLoadFunction?: ol.ImageLoadFunctionType;
            params?: GlobalObject;
        }

        interface MapQuestOptions {
            cacheSize?: number;
            layer: string;
            reprojectionErrorThreshold?: number;
            tileLoadFunction?: ol.TileLoadFunctionType;
            url?: string;
        }

        interface TileDebugOptions {
            projection: ol.ProjectionLike;
            tileGrid?: ol.tilegrid.TileGrid;
            wrapX?: boolean;
        }

        interface OSMOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            maxZoom?: number;
            opaque?: boolean;
            reprojectionErrorThreshold?: number;
            tileLoadFunction?: ol.TileLoadFunctionType;
            url?: string;
            wrapX?: boolean;
        }

        interface ImageArcGISRestOptions {
            attributions?: ol.Attribution[];
            crossOrigin?: (string);
            logo?: (string | olx.LogoOptions);
            imageLoadFunction?: ol.ImageLoadFunctionType;
            params?: { [k: string]: any };
            projection: ol.ProjectionLike;
            ratio?: number;
            resolutions?: number[];
            url?: string;
        }

        interface ImageCanvasOptions {
            attributions?: ol.AttributionLike;
            canvasFunction: ol.CanvasFunctionType;
            logo?: (string | olx.LogoOptions);
            projection: ol.ProjectionLike;
            ratio?: number;
            resolutions?: number[];
            state?: ol.source.State;
        }

        interface ImageVectorOptions {
            attributions?: ol.AttributionLike;
            logo?: (string | olx.LogoOptions);
            projection: ol.ProjectionLike;
            ratio?: number;
            renderBuffer?: number;
            resolutions?: number[];
            source: ol.source.Vector;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
        }

        interface RasterOptions {
            sources: ol.source.Source[];
            operation?: ol.RasterOperation;
            lib?: GlobalObject;
            threads?: number;
            operationType?: ol.RasterOperationType;
        }

        interface ImageWMSOptions {
            attributions?: ol.AttributionLike;
            crossOrigin?: (string);
            hidpi?: boolean;
            serverType?: (ol.source.wms.ServerType | string);
            imageLoadFunction?: ol.ImageLoadFunctionType;
            logo?: (string | olx.LogoOptions);
            params: { [k: string]: any };
            projection: ol.ProjectionLike;
            ratio?: number;
            resolutions?: number[];
            url?: string;
        }

        interface StamenOptions {
            cacheSize?: number;
            layer: string;
            minZoom?: number;
            maxZoom?: number;
            opaque?: boolean;
            reprojectionErrorThreshold?: number;
            tileLoadFunction?: ol.TileLoadFunctionType;
            url?: string;
        }

        interface ImageStaticOptions {
            attributions?: ol.AttributionLike;
            crossOrigin?: (string);
            imageExtent: ol.Extent;
            imageLoadFunction?: ol.ImageLoadFunctionType;
            logo?: (string | olx.LogoOptions);
            projection: ol.ProjectionLike;
            imageSize?: ol.Size;
            url: string;
        }

        interface TileArcGISRestOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            params?: { [k: string]: any };
            logo?: (string | olx.LogoOptions);
            tileGrid?: ol.tilegrid.TileGrid;
            projection?: ol.ProjectionLike;
            reprojectionErrorThreshold?: number;
            tileLoadFunction?: ol.TileLoadFunctionType;
            url?: string;
            wrapX?: boolean;
            transition?: number;
            urls?: string[];
        }

        interface TileJSONOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            jsonp?: boolean;
            reprojectionErrorThreshold?: number;
            tileLoadFunction?: ol.TileLoadFunctionType;
            url: string;
            wrapX?: boolean;
            transition?: number;
        }

        interface TileWMSOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            params: { [k: string]: any };
            crossOrigin?: (string);
            gutter?: number;
            hidpi?: boolean;
            logo?: (string | olx.LogoOptions);
            tileGrid?: ol.tilegrid.TileGrid;
            projection?: ol.ProjectionLike;
            reprojectionErrorThreshold?: number;
            serverType?: (ol.source.wms.ServerType | string);
            tileLoadFunction?: ol.TileLoadFunctionType;
            url?: string;
            urls?: string[];
            wrapX?: boolean;
            transition?: number;
        }

        interface VectorOptions {
            attributions?: ol.AttributionLike;
            features?: (ol.Feature[] | ol.Collection<ol.Feature>);
            format?: ol.format.Feature;
            loader?: ol.FeatureLoader;
            logo?: (string | olx.LogoOptions);
            overlaps?: boolean;
            strategy?: ol.LoadingStrategy;
            url?: (string | ol.FeatureUrlFunction);
            useSpatialIndex?: boolean;
            wrapX?: boolean;
        }

        interface WMTSOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            logo?: (string | olx.LogoOptions);
            tileGrid: ol.tilegrid.WMTS;
            projection: ol.ProjectionLike;
            reprojectionErrorThreshold?: number;
            requestEncoding?: (ol.source.WMTSRequestEncoding | string);
            layer: string;
            style: string;
            tileClass?: ((n: ol.ImageTile, coords: ol.TileCoord, state: ol.Tile.State, s1: string, s2: string, type: ol.TileLoadFunctionType) => any);
            tilePixelRatio?: number;
            version?: string;
            format?: string;
            matrixSet: string;
            dimensions?: GlobalObject;
            url?: string;
            tileLoadFunction?: ol.TileLoadFunctionType;
            urls?: string[];
            wrapX?: boolean;
        }

        interface XYZOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            logo?: (string | olx.LogoOptions);
            opaque?: boolean;
            projection?: ol.ProjectionLike;
            reprojectionErrorThreshold?: number;
            maxZoom?: number;
            minZoom?: number;
            tileGrid?: ol.tilegrid.TileGrid;
            tileLoadFunction?: ol.TileLoadFunctionType;
            tilePixelRatio?: number;
            tileSize?: (number | ol.Size);
            tileUrlFunction?: ol.TileUrlFunctionType;
            url?: string;
            urls?: string[];
            wrapX?: boolean;
        }

        interface CartoDBOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            logo?: (string | olx.LogoOptions);
            projection: ol.ProjectionLike;
            maxZoom?: number;
            minZoom?: number;
            wrapX?: boolean;
            config?: GlobalObject;
            map?: string;
            account: string;
        }

        interface ZoomifyOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            logo?: (string | olx.LogoOptions);
            reprojectionErrorThreshold?: number;
            url: string;
            tierSizeCalculation?: string;
            size: ol.Size;
        }
    }

    module style {
        interface CircleOptions {
            fill?: ol.style.Fill;
            radius: number;
            snapToPixel?: boolean;
            stroke?: ol.style.Stroke;
            atlasManager?: ol.style.AtlasManager;
        }

        interface FillOptions {
            color?: (ol.Color | ol.ColorLike);
        }

        interface IconOptions {
            anchor?: number[];
            anchorOrigin?: ol.style.IconOrigin;
            anchorXUnits?: ol.style.IconAnchorUnits;
            anchorYUnits?: ol.style.IconAnchorUnits;
            color?: (ol.Color | string);
            crossOrigin?: (string);
            img?: (any | HTMLCanvasElement);
            offset?: number[];
            offsetOrigin?: ol.style.IconOrigin;
            opacity?: number;
            scale?: number;
            snapToPixel?: boolean;
            rotateWithView?: boolean;
            rotation?: number;
            size?: ol.Size;
            imgSize?: ol.Size;
            src?: string;
        }

        interface RegularShapeOptions {
            fill?: ol.style.Fill;
            points: number;
            radius?: number;
            radius1?: number;
            radius2?: number;
            angle?: number;
            snapToPixel?: boolean;
            stroke?: ol.style.Stroke;
            rotation?: number;
        }

        interface StrokeOptions {
            color?: ol.Color | string;
            lineCap?: string;
            lineJoin?: string;
            lineDash?: number[];
            miterLimit?: number;
            width?: number;
        }

        /**
         * Text placement. One of `'point'`, `'line'`. Default is `'point'`. Note that
         * `'line'` requires the underlying geometry to be a {@link ol.geom.LineString},
         * {@link ol.geom.Polygon}, {@link ol.geom.MultiLineString} or
         * {@link ol.geom.MultiPolygon}.
         */
        type TextPlacement = 'point' | 'line';

        interface TextOptions {
            font?: string;
            maxAngle?: boolean;
            offsetX?: number;
            offsetY?: number;
            overflow?: boolean;
            placement?: olx.style.TextPlacement;
            scale?: number;
            rotateWithView?: boolean;
            rotation?: number;
            text?: string;
            textAlign?: string;
            textBaseline?: string;
            fill?: ol.style.Fill;
            stroke?: ol.style.Stroke;
            backgroundFill?: ol.style.Fill;
            backgroundStroke?: ol.style.Stroke;
            padding?: number[];
        }

        interface StyleOptions {
            geometry?: (string | ol.geom.Geometry | ol.StyleGeometryFunction);
            fill?: ol.style.Fill;
            image?: ol.style.Image;
            stroke?: ol.style.Stroke;
            text?: ol.style.Text;
            zIndex?: number;
        }

        interface AtlasManagerOptions {
            initialSize?: number;
            maxSize?: number;
            space?: number;
        }
    }

    module tilegrid {
        interface TileGridOptions {
            extent?: ol.Extent;
            minZoom?: number;
            origin?: ol.Coordinate;
            origins?: ol.Coordinate[];
            resolutions: number[];
            tileSize?: (number | ol.Size);
            tileSizes?: (Array<(number | ol.Size)>);
        }

        interface WMTSOptions {
            extent?: ol.Extent;
            origin?: ol.Coordinate;
            origins?: ol.Coordinate[];
            resolutions: number[];
            matrixIds: string[];
            sizes?: ol.Size[];
            tileSize?: (number | ol.Size);
            tileSizes?: (Array<(number | ol.Size)>);
            widths?: number[];
        }

        interface XYZOptions {
            extent?: ol.Extent;
            maxZoom?: number;
            minZoom?: number;
            tileSize?: (number | ol.Size);
        }
    }

    interface AttributionOptions {
        html: string;
    }

    interface DeviceOrientationOptions {
        tracking?: boolean;
    }

    interface GeolocationOptions {
        tracking?: boolean;
        trackingOptions?: PositionOptions;
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
        map?: ol.Map;
        maxLines?: number;
        strokeStyle?: ol.style.Stroke;
        targetSize?: number;
        showLabels?: boolean;
        lonLabelFormatter?: ((lon: number) => string);
        latLabelFormatter?: ((lat: number) => string);
        lonLabelPosition?: number;
        latLabelPosition?: number;
        lonLabelStyle?: ol.style.Text;
        latLabelStyle?: ol.style.Text;
    }

    /**
     * Object literal with config options for the map.
     */
    interface MapOptions {
        controls?: (ol.Collection<ol.control.Control> | ol.control.Control[]);
        pixelRatio?: number;
        interactions?: (ol.Collection<ol.interaction.Interaction> | ol.interaction.Interaction[]);
        keyboardEventTarget?: (Element | Document | string);
        layers?: (ol.layer.Base[] | ol.Collection<ol.layer.Base>);
        loadTilesWhileAnimating?: boolean;
        loadTilesWhileInteracting?: boolean;
        logo?: (boolean | string | olx.LogoOptions | Element);
        overlays?: (ol.Collection<ol.Overlay> | ol.Overlay[]);
        renderer?: (ol.RendererType | Array<(ol.RendererType | string)> | string);
        target?: (Element | string);
        view?: ol.View;
    }

    /**
     * Object literal with config options for the overlay.
     */
    interface OverlayOptions {
        id?: (number | string);
        element?: Element;
        offset?: number[];
        position?: ol.Coordinate;
        positioning?: (ol.OverlayPositioning | string);
        stopEvent?: boolean;
        insertFirst?: boolean;
        autoPan?: boolean;
        autoPanAnimation?: olx.animation.PanOptions;
        autoPanMargin?: number;
    }

    /**
     * Object literal with config options for the projection.
     */
    interface ProjectionOptions {
        code: string;
        units?: (ol.proj.Units | string);
        extent?: ol.Extent;
        axisOrientation?: string;
        global?: boolean;
        metersPerUnit?: number;
        worldExtent?: ol.Extent;
        getPointResolution?: ((resolution: number, coords: ol.Coordinate) => number);
    }

    module view {
        interface FitOptions {
            size?: ol.Size;
            padding?: number[];
            constrainResolution?: boolean;
            nearest?: boolean;
            minResolution?: number;
            maxZoom?: number;
            duration?: number;
            easing?: ((t: number) => number);
            callback?: olx.animation.AnimateCallback;
        }
    }

    /**
     * Object literal with config options for the view.
     */
    interface ViewOptions {
        center?: ol.Coordinate;
        constrainRotation?: (boolean | number);
        enableRotation?: boolean;
        extent?: ol.Extent;
        maxResolution?: number;
        minResolution?: number;
        maxZoom?: number;
        minZoom?: number;
        projection?: ol.ProjectionLike;
        resolution?: number;
        resolutions?: number[];
        rotation?: number;
        zoom?: number;
        zoomFactor?: number;
    }

    /**
     * Object literal with options for the {@link ol.Map#forEachFeatureAtPixel} and
     * {@link ol.Map#hasFeatureAtPixel} methods.
     */
    interface AtPixelOptions {
        layerFilter?: ((layer: ol.layer.Layer) => boolean);
        hitTolerance?: number;
    }

    interface FrameState {
        pixelRatio: number;
        time: number;
        viewState: olx.ViewState;
    }

    interface ViewState {
        center: ol.Coordinate;
        projection: ol.proj.Projection;
        resolution: number;
        rotation: number;
    }
}

declare module "openlayers" {
    export = ol;
}
