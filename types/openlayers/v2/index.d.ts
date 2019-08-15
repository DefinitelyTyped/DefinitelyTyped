// Type definitions for OpenLayers.js 2.10
// Project: https://github.com/openlayers/openlayers
// Definitions by: Ilya Bolkhovsky <https://github.com/bolhovsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace OpenLayers {

    export interface MapOptions {

        projection?: string;

        maxExtend?: Bounds;

        center?: LonLat;
    }

    export interface DistanceOptions {
        /**
         * Return details from the distance calculation.  Default is false.
         */
        details?: boolean;

        /**
         * Calculate the distance from this geometry to the nearest edge of the target geometry.  Default is true.  If true, calling distanceTo from a geometry that is wholly contained within the target will result in a non-zero distance.  If false, whenever geometries intersect, calling distanceTo will return 0.  If false, details cannot be returned.
         */
        edge?: boolean;
    }

    export interface BoundsOptions {
        /**
         * Whether or not to include the border. Default is true.
         */
        inclusive?: boolean;

        /**
         * If a worldBounds is provided, the
         * ll will be considered as contained if it exceeds the world bounds,
         * but can be wrapped around the dateline so it is contained by this
         * bounds.
         */
        worldBounds?: Bounds;
    }

    export interface WrapDateLineOptions {
        /**
         * Allow for a margin of error
         * with the 'left' value of this
         * bound.
         * Default is 0.
         */
        leftTolerance?: number;

        /**
         * Allow for a margin of error
         * with the 'right' value of this
         * bound.
         * Default is 0.
         */
        rightTolerance?: number;
    }

    export interface LayerOptions {

    }

    export class Animation {
        // TODO
    }

    export class String {
        // TODO
    }

    export class Number {
        // TODO
    }

    export class Function {
        // TODO
    }

    export class Array {
        // TODO
    }

    export class Console {
        // TODO
    }

    export class Control {
        // TODO
    }

    export class Event {
        // TODO
    }

    export class Events {
        /**
         * Method: attachToElement
         *
         * Parameters:
         * element - {HTMLDOMElement} a DOM element to attach browser events to
         */
        attachToElement(element: HTMLElement): void;

        /**
         * APIMethod: on
         * Convenience method for registering listeners with a common scope.
         *     Internally, this method calls <register> as shown in the examples
         *     below.
         *
         * Example use:
         * (code)
         * // register a single listener for the "loadstart" event
         * events.on({"loadstart": loadStartListener});
         *
         * // this is equivalent to the following
         * events.register("loadstart", undefined, loadStartListener);
         *
         * // register multiple listeners to be called with the same `this` object
         * events.on({
         *     "loadstart": loadStartListener,
         *     "loadend": loadEndListener,
         *     scope: object
         * });
         *
         * // this is equivalent to the following
         * events.register("loadstart", object, loadStartListener);
         * events.register("loadend", object, loadEndListener);
         * (end)
         *
         * Parameters:
         *  object - {Object}
         */
        on(object: any): void;

        /**
         * APIMethod: register
         * Register an event on the events object.
         *
         * When the event is triggered, the 'func' function will be called, in the
         * context of 'obj'. Imagine we were to register an event, specifying an
         * OpenLayers.Bounds Object as 'obj'. When the event is triggered, the
         * context in the callback function will be our Bounds object. This means
         * that within our callback function, we can access the properties and
         * methods of the Bounds object through the "this" variable. So our
         * callback could execute something like:
         * :    leftStr = "Left: " + this.left;
         *
         *                   or
         *
         * :    centerStr = "Center: " + this.getCenterLonLat();
         *
         * Parameters:
         * type - {String} Name of the event to register
         * obj - {Object} The object to bind the context to for the callback#.
         *     If no object is specified, default is the Events's 'object' property.
         * func - {Function} The callback function. If no callback is
         *     specified, this function does nothing.
         * priority - {Boolean|Object} If true, adds the new listener to the
         *     *front* of the events queue instead of to the end.
         *
         * Valid options for priority:
         * extension - {Boolean} If true, then the event will be registered as
         *     extension event. Extension events are handled before all other
         *     events.
         */
        register(type: string, obj: any, func: () => void, priority: boolean): void;

        /**
         * APIMethod: registerPriority
         * Same as register() but adds the new listener to the *front* of the
         *     events queue instead of to the end.
         *
         *     TODO: get rid of this in 3.0 - Decide whether listeners should be
         *     called in the order they were registered or in reverse order.
         *
         *
         * Parameters:
         * type - {String} Name of the event to register
         * obj - {Object} The object to bind the context to for the callback#.
         *                If no object is specified, default is the Events's
         *                'object' property.
         * func - {Function} The callback function. If no callback is
         *                   specified, this function does nothing.
         */
        registerPriority(type: string, obj: any, func: () => void): void;

        /**
         * APIMethod: un
         * Convenience method for unregistering listeners with a common scope.
         *     Internally, this method calls <unregister> as shown in the examples
         *     below.
         *
         * Example use:
         * (code)
         * // unregister a single listener for the "loadstart" event
         * events.un({"loadstart": loadStartListener});
         *
         * // this is equivalent to the following
         * events.unregister("loadstart", undefined, loadStartListener);
         *
         * // unregister multiple listeners with the same `this` object
         * events.un({
         *     "loadstart": loadStartListener,
         *     "loadend": loadEndListener,
         *     scope: object
         * });
         *
         * // this is equivalent to the following
         * events.unregister("loadstart", object, loadStartListener);
         * events.unregister("loadend", object, loadEndListener);
         * (end)
         */
        un(object: any): void;

        /**
         * APIMethod: unregister
         *
         * Parameters:
         * type - {String}
         * obj - {Object} If none specified, defaults to this.object
         * func - {Function}
         */
        unregister(type: string, obj: any, func: () => void): void;

        /**
         * Method: remove
         * Remove all listeners for a given event type. If type is not registered,
         *     does nothing.
         *
         * Parameters:
         * type - {String}
         */
        remove(type: string): void;

        /**
         * APIMethod: triggerEvent
         * Trigger a specified registered event.
         *
         * Parameters:
         * type - {String}
         * evt - {Event || Object} will be passed to the listeners.
         *
         * Returns:
         * {Boolean} The last listener return.  If a listener returns false, the
         *     chain of listeners will stop getting called.
         */
        triggerEvent(type: string, evt: Event): boolean;

        /**
         * Method: handleBrowserEvent
         * Basically just a wrapper to the triggerEvent() function, but takes
         *     care to set a property 'xy' on the event with the current mouse
         *     position.
         *
         * Parameters:
         * evt - {Event}
         */
        handleBrowserEvent(evt: Event): void;

        /**
         * Method: getMousePosition
         *
         * Parameters:
         * evt - {Event}
         *
         * Returns:
         * {<OpenLayers.Pixel>} The current xy coordinate of the mouse, adjusted
         *                      for offsets
         */
        getMousePosition(evt: Event): Pixel;
    }

    export class Feature {
        // TODO
    }

    export class Filter {
        // TODO
    }

    export class Format {
        // TODO
    }

    export class Handler {
        // TODO
    }

    export class Icon {
        // TODO
    }

    export class Kinetic {
        // TODO
    }

    export class Lang {
        // TODO
    }

    export class Layer {
        /**
         *
         */
        id: string;

        /**
         *
         */
        name: string;

        /**
         *
         */
        div: HTMLElement;

        /**
         * The layer's opacity. Float number between 0.0 and 1.0.
         */
        opacity: number;

        /**
         * If a layer's display should not be scale-based, this should
         * be set to true. This will cause the layer, as an overlay, to always
         * be 'active', by always returning true from the calculateInRange()
         * function.
         *
         * If not explicitly specified for a layer, its value will be
         * determined on startup in initResolutions() based on whether or not
         * any scale-specific properties have been set as options on the
         * layer. If no scale-specific options have been set on the layer, we
         * assume that it should always be in range.
         */
        alwaysInRange: boolean;

        /**
         * The properties that are used for calculating resolutions information.
         */
        RESOLUTION_PROPERTIES: string[];

        /**
        * APIProperty: events
        * {<OpenLayers.Events>}
        *
        * Register a listener for a particular event with the following syntax:
        * (code)
        * layer.events.register(type, obj, listener);
        * (end)
        *
        * Listeners will be called with a reference to an event object. The
        * properties of this event depends on exactly what happened.
        *
        * All event objects have at least the following properties:
        * object - {Object} A reference to layer.events.object.
        * element - {DOMElement} A reference to layer.events.element.
        *
        * Supported map event types:
        * loadstart - Triggered when layer loading starts. When using a Vector
        * layer with a Fixed or BBOX strategy, the event object includes
        * a *filter* property holding the OpenLayers.Filter used when
        * calling read on the protocol.
        * loadend - Triggered when layer loading ends. When using a Vector layer
        * with a Fixed or BBOX strategy, the event object includes a
        * *response* property holding an OpenLayers.Protocol.Response object.
        * visibilitychanged - Triggered when the layer's visibility property is
        * changed, e.g. by turning the layer on or off in the layer switcher.
        * Note that the actual visibility of the layer can also change if it
        * gets out of range (see <calculateInRange>). If you also want to catch
        * these cases, register for the map's 'changelayer' event instead.
        * move - Triggered when layer moves (triggered with every mousemove
        * during a drag).
        * moveend - Triggered when layer is done moving, object passed as
        * argument has a zoomChanged boolean property which tells that the
        * zoom has changed.
        * added - Triggered after the layer is added to a map. Listeners will
        * receive an object with a *map* property referencing the map and a
        * *layer* property referencing the layer.
        * removed - Triggered after the layer is removed from the map. Listeners
        * will receive an object with a *map* property referencing the map and
        * a *layer* property referencing the layer.
        */
        events: Events;

        /**
         * This variable is set when the layer is added to
         * the map, via the accessor function setMap()
         */
        map: Map;

        /**
         * Whether or not the layer is a base layer. This should be set
         *      individually by all subclasses. Default is false
         */
        isBaseLayer: boolean;

        /**
         * The layer's images have an alpha channel.  Default is false.
         */
        alpha: boolean;

        /**
         * Display the layer's name in the layer switcher.  Default is true
         */
        displayInLayerSwitcher: boolean;

        /**
         * The layer should be displayed in the map.  Default is true.
         */
        visibility: boolean;

        /**
         * Attribution string, displayed when an
         *      <OpenLayers.Control.Attribution> has been added to the map.
         */
        attribution: string;

        /**
         * The current map resolution is within the layer's min/max
         * range. This is set in <OpenLayers.Map.setCenter> whenever the zoom
         * changes.
         */
        inRange: boolean;

        /**
         * For layers with a gutter, the image is larger than
         * the tile by twice the gutter in each dimension.
         */
        imageSize: Size;

        /**
         * An optional object whose properties will be set on the layer.
         * Any of the layer properties can be set as a property of the options
         * object and sent to the constructor when the layer is created.
         */
        options: Object;

        /**
         * An optional object whose properties will be set on the layer.
         * Any of the layer properties can be set as a property of the options
         * object and sent to the constructor when the layer is created.
         */
        eventListeners: Object;

        /**
         * Determines the width (in pixels) of the gutter around image
         * tiles to ignore. By setting this property to a non-zero value,
         * images will be requested that are wider and taller than the tile
         * size by a value of 2 x gutter. This allows artifacts of rendering
         * at tile edges to be ignored. Set a gutter value that is equal to
         * half the size of the widest symbol that needs to be displayed.
         * Defaults to zero. Non-tiled layers always have zero gutter.
         */
        gutter: number;

        /**
         * Specifies the projection of the layer.
         * Can be set in the layer options. If not specified in the layer options,
         * it is set to the default projection specified in the map,
         * when the layer is added to the map.
         * Projection along with default maxExtent and resolutions
         * are set automatically with commercial baselayers in EPSG:3857,
         * such as Google, Bing and OpenStreetMap, and do not need to be specified.
         * Otherwise, if specifying projection, also set maxExtent,
         * maxResolution or resolutions as appropriate.
         * When using vector layers with strategies, layer projection should be set
         * to the projection of the source data if that is different from the map default.
         */
        projection: Projection;

        /**
         * The layer map units. Defaults to null. Possible values
         * are 'degrees' (or 'dd'), 'm', 'ft', 'km', 'mi', 'inches'.
         * Normally taken from the projection.
         * Only required if both map and layers do not define a projection,
         * or if they define a projection which does not define units.
         */
        units: string;

        /**
         * An array of map scales in descending order. The values in the
         * array correspond to the map scale denominator. Note that these
         * values only make sense if the display (monitor) resolution of the
         * client is correctly guessed by whomever is configuring the
         * application. In addition, the units property must also be set.
         * Use <resolutions> instead wherever possible.
         */
        scales: any[];

        /**
         * A list of map resolutions (map units per pixel) in descending
         * order. If this is not set in the layer constructor, it will be set
         * based on other resolution related properties (maxExtent,
         * maxResolution, maxScale, etc.).
         */
        resolutions: any[];

        /**
         * The maximum extent for the layer.  Defaults to null.
         */
        maxExtent: Bounds;

        /**
         * The minimum extent for the layer.  Defaults to null.
         */
        minExtent: Bounds;

        /**
         * Default max is 360 deg / 256 px, which corresponds to
         * zoom level 0 on gmaps. Specify a different value in the layer
         * options if you are not using the default <OpenLayers.Map.tileSize>
         * and displaying the whole world.
         */
        maxResolution: number;

        /**
         *
         */
        minResolution: number;

        /**
         *
         */
        numZoomLevels: number;

        /**
         *
         */
        minScale: number;

        /**
         *
         */
        maxScale: number;

        /**
         * Request map tiles that are completely outside of the max
         * extent for this layer. Defaults to false.
         */
        displayOutsideMaxExtent: boolean;

        /**
         * Wraps the world at the international dateline, so the map can
         * be panned infinitely in longitudinal direction. Only use this on the
         * base layer, and only if the layer's maxExtent equals the world bounds.
         */
        wrapDateLine: boolean;

        /**
         * This object can be used to store additional information on a
         * layer object.
         */
        metadata: Object;

        /**
        * Constructor: OpenLayers.Layer
        *
        * Parameters:
        * name - {String} The layer name
        * options - {Object} Hashtable of extra options to tag onto the layer
        */
        constructor(name: string, options: LayerOptions);

        /**
         * Method: destroy
         * Destroy is a destructor: this is to alleviate cyclic references which
         * the Javascript garbage cleaner can not take care of on its own.
         *
         * Parameters:
         * setNewBaseLayer - {Boolean} Set a new base layer when this layer has
         * been destroyed. Default is true.
         */
        destroy(setNewBaseLayer?: boolean): void;

        /**
         * Method: clone
         *
         * Parameters:
         * obj - {<OpenLayers.Layer>} The layer to be cloned
         *
         * Returns:
         * {<OpenLayers.Layer>} An exact clone of this <OpenLayers.Layer>
         */
        clone(): Layer;

        /**
         * Method: getOptions
         * Extracts an object from the layer with the properties that were set as
         * options, but updates them with the values currently set on the
         * instance.
         *
         * Returns:
         * {Object} the <options> of the layer, representing the current state.
         */
        private getOptions(): LayerOptions;

        /**
         * APIMethod: setName
         * Sets the new layer name for this layer. Can trigger a changelayer event
         * on the map.
         *
         * Parameters:
         * newName - {String} The new name.
         */
        setName(newName: string): void;

        /**
         * APIMethod: addOptions
         *
         * Parameters:
         * newOptions - {Object}
         * reinitialize - {Boolean} If set to true, and if resolution options of the
         * current baseLayer were changed, the map will be recentered to make
         * sure that it is displayed with a valid resolution, and a
         * changebaselayer event will be triggered.
         */
        addOptions(newOptions: LayerOptions, reinitialize: boolean): void;

        /**
         * This function can be implemented by subclasses
         */
        onMapResize(): void;

        /**
         * APIMethod: redraw
         * Redraws the layer. Returns true if the layer was redrawn, false if not.
         *
         * Returns:
         * {Boolean} The layer was redrawn.
         */
        redraw(): void;

        /**
         * Method: moveTo
         *
         * Parameters:
         * bounds - {<OpenLayers.Bounds>}
         * zoomChanged - {Boolean} Tells when zoom has changed, as layers have to
         * do some init work in that case.
         * dragging - {Boolean}
         */
        moveTo(bounds: Bounds, zoomChanged: boolean, dragging: boolean): void;

        /**
         * Method: moveByPx
         * Move the layer based on pixel vector. To be implemented by subclasses.
         *
         * Parameters:
         * dx - {Number} The x coord of the displacement vector.
         * dy - {Number} The y coord of the displacement vector.
         */
        moveByPx(dx: number, dy: number): void;

        /**
         * Method: setMap
         * Set the map property for the layer. This is done through an accessor
         * so that subclasses can override this and take special action once
         * they have their map variable set.
         *
         * Here we take care to bring over any of the necessary default
         * properties from the map.
         *
         * Parameters:
         * map - {<OpenLayers.Map>}
         */
        setMap(map: Map): void;

        /**
         * Method: afterAdd
         * Called at the end of the map.addLayer sequence. At this point, the map
         * will have a base layer. To be overridden by subclasses.
         */
        private afterAdd(): void;

        /**
         * APIMethod: removeMap
         * Just as setMap() allows each layer the possibility to take a
         * personalized action on being added to the map, removeMap() allows
         * each layer to take a personalized action on being removed from it.
         * For now, this will be mostly unused, except for the EventPane layer,
         * which needs this hook so that it can remove the special invisible
         * pane.
         *
         * Parameters:
         * map - {<OpenLayers.Map>}
         */
        removeMap(map: Map): void;

        /**
         * APIMethod: getImageSize
         *
         * Parameters:
         * bounds - {<OpenLayers.Bounds>} optional tile bounds, can be used
         * by subclasses that have to deal with different tile sizes at the
         * layer extent edges (e.g. Zoomify)
         *
         * Returns:
         * {<OpenLayers.Size>} The size that the image should be, taking into
         * account gutters.
         */
        getImageSize(bounds: Bounds): Size;

        /**
         * APIMethod: setTileSize
         * Set the tile size based on the map size. This also sets layer.imageSize
         * or use by Tile.Image.
         *
         * Parameters:
         * size - {<OpenLayers.Size>}
         */
        setTileSize(size: Size): void;

        /**
         * APIMethod: getVisibility
         *
         * Returns:
         * {Boolean} The layer should be displayed (if in range).
         */
        getVisibility(): boolean;

        /**
         * APIMethod: setVisibility
         * Set the visibility flag for the layer and hide/show & redraw
         * accordingly. Fire event unless otherwise specified
         *
         * Note that visibility is no longer simply whether or not the layer's
         * style.display is set to "block". Now we store a 'visibility' state
         * property on the layer class, this allows us to remember whether or
         * not we *desire* for a layer to be visible. In the case where the
         * map's resolution is out of the layer's range, this desire may be
         * subverted.
         *
         * Parameters:
         * visibility - {Boolean} Whether or not to display the layer (if in range)
         */
        setVisibility(visibility: boolean): void;

        /**
         * APIMethod: display
         * Hide or show the Layer. This is designed to be used internally, and
         * is not generally the way to enable or disable the layer. For that,
         * use the setVisibility function instead..
         *
         * Parameters:
         * display - {Boolean}
         */
        display(display: boolean): void;

        /**
         * APIMethod: calculateInRange
         *
         * Returns:
         * {Boolean} The layer is displayable at the current map's current
         * resolution. Note that if 'alwaysInRange' is true for the layer,
         * this function will always return true.
         */
        calculateInRange(): boolean;

        /**
         * APIMethod: setIsBaseLayer
         *
         * Parameters:
         * isBaseLayer - {Boolean}
         */
        setIsBaseLayer(isBaseLayer: boolean): void;

        /********************************************************/
        /*                                                      */
        /*               Baselayer Functions                    */
        /*                                                      */
        /********************************************************/

        /**
         * Method: initResolutions
         * This method's responsibility is to set up the 'resolutions' array
         * for the layer -- this array is what the layer will use to interface
         * between the zoom levels of the map and the resolution display
         * of the layer.
         *
         * The user has several options that determine how the array is set up.
         *
         * For a detailed explanation, see the following wiki from the
         * openlayers.org homepage:
         * http://trac.openlayers.org/wiki/SettingZoomLevels
         */
        initResolutions(): void;

        /**
         * Method: resolutionsFromScales
         * Derive resolutions from scales.
         *
         * Parameters:
         * scales - {Array(Number)} Scales
         *
         * Returns
         * {Array(Number)} Resolutions
         */
        private resolutionsFromScales(scales: number[]): number[];

        /**
         * Method: calculateResolutions
         * Calculate resolutions based on the provided properties.
         *
         * Parameters:
         * props - {Object} Properties
         *
         * Returns:
         * {Array({Number})} Array of resolutions.
         */
        calculateResolutions(props: Object): number[];

        /**
         * APIMethod: getResolution
         *
         * Returns:
         * {Float} The currently selected resolution of the map, taken from the
         * resolutions array, indexed by current zoom level.
         */
        getResolution(): number;

        /**
         * APIMethod: getExtent
         *
         * Returns:
         * {<OpenLayers.Bounds>} A Bounds object which represents the lon/lat
         * bounds of the current viewPort.
         */
        getExtent(): Bounds;

        /**
         * APIMethod: getZoomForExtent
         *
         * Parameters:
         * extent - {<OpenLayers.Bounds>}
         * closest - {Boolean} Find the zoom level that most closely fits the
         * specified bounds. Note that this may result in a zoom that does
         * not exactly contain the entire extent.
         * Default is false.
         *
         * Returns:
         * {Integer} The index of the zoomLevel (entry in the resolutions array)
         * for the passed-in extent. We do this by calculating the ideal
         * resolution for the given extent (based on the map size) and then
         * calling getZoomForResolution(), passing along the 'closest'
         * parameter.
         */
        getZoomForExtent(extent: Bounds, closest?: boolean): number;

        /**
         * Method: getDataExtent
         * Calculates the max extent which includes all of the data for the layer.
         * This function is to be implemented by subclasses.
         *
         * Returns:
         * {<OpenLayers.Bounds>}
         */
        private getDataExtent(): Bounds;

        /**
         * APIMethod: getResolutionForZoom
         *
         * Parameters:
         * zoom - {Float}
         *
         * Returns:
         * {Float} A suitable resolution for the specified zoom.
         */
        getResolutionForZoom(zoom: number): number;

        /**
         * APIMethod: getZoomForResolution
         *
         * Parameters:
         * resolution - {Float}
         * closest - {Boolean} Find the zoom level that corresponds to the absolute
         * closest resolution, which may result in a zoom whose corresponding
         * resolution is actually smaller than we would have desired (if this
         * is being called from a getZoomForExtent() call, then this means that
         * the returned zoom index might not actually contain the entire
         * extent specified... but it'll be close).
         * Default is false.
         *
         * Returns:
         * {Integer} The index of the zoomLevel (entry in the resolutions array)
         * that corresponds to the best fit resolution given the passed in
         * value and the 'closest' specification.
         */
        getZoomForResolution(resolution: number, closest?: boolean): number;

        /**
         * APIMethod: getLonLatFromViewPortPx
         *
         * Parameters:
         * viewPortPx - {<OpenLayers.Pixel>|Object} An OpenLayers.Pixel or
         * an object with a 'x'
         * and 'y' properties.
         *
         * Returns:
         * {<OpenLayers.LonLat>} An OpenLayers.LonLat which is the passed-in
         * view port <OpenLayers.Pixel>, translated into lon/lat by the layer.
         */
        getLonLatFromViewPortPx(viewPortPx: Pixel): LonLat;

        /**
         * APIMethod: getViewPortPxFromLonLat
         * Returns a pixel location given a map location. This method will return
         * fractional pixel values.
         *
         * Parameters:
         * lonlat - {<OpenLayers.LonLat>|Object} An OpenLayers.LonLat or
         * an object with a 'lon'
         * and 'lat' properties.
         *
         * Returns:
         * {<OpenLayers.Pixel>} An <OpenLayers.Pixel> which is the passed-in
         * lonlat translated into view port pixels.
         */
        getViewPortPxFromLonLat(lonlat: LonLat, resolution: number): Pixel;

        /**
         * APIMethod: setOpacity
         * Sets the opacity for the entire layer (all images)
         *
         * Parameters:
         * opacity - {Float}
         */
        setOpacity(opacity: number): void;

        /**
         * Method: getZIndex
         *
         * Returns:
         * {Integer} the z-index of this layer
         */
        getZIndex(): number;

        /**
         * Method: setZIndex
         *
         * Parameters:
         * zIndex - {Integer}
         */
        setZIndex(zIndex: number): void;

        /**
         * Method: adjustBounds
         * This function will take a bounds, and if wrapDateLine option is set
         * on the layer, it will return a bounds which is wrapped around the
         * world. We do not wrap for bounds which *cross* the
         * maxExtent.left/right, only bounds which are entirely to the left
         * or entirely to the right.
         *
         * Parameters:
         * bounds - {<OpenLayers.Bounds>}
         */
        adjustBounds(bounds: Bounds): Bounds;

        static CLASS_NAME: string;
    }

    export class Marker {
        // TODO
    }

    export class Popup {
        // TODO
    }

    export class Protocol {
        // TODO
    }

    export class Renderer {
        // TODO
    }

    export class Request {
        // TODO
    }

    export class Rule {
        // TODO
    }

    export class SingleFile {
        // TODO
    }

    export class Spherical {
        // TODO
    }

    export class Strategy {
        // TODO
    }

    export class Style {
        // TODO
    }

    export class Style2 {
        // TODO
    }

    export class StyleMap {
        // TODO
    }

    export class Symbolizer {
        // TODO
    }

    export class Tile {
        // TODO
    }

    export class TileManager {
        // TODO
    }

    export class Tween {
        // TODO
    }

    export class Util {
        // TODO
    }

    export class WPSClient {
        // TODO
    }

    export class WPSProcess {
        // TODO
    }

    export class Geometry {
        /**
         * A unique identifier for this geometry.
         */
        id: string;

        /**
         * This is set when a Geometry is added as component
         * of another geometry
         */
        parent: Geometry;

        /**
         * The bounds of this geometry
         */
        bounds: Bounds;

        /**
          * A Geometry is a description of a geographic object.
          */
        constructor();

        /**
          * Destroy this geometry.
          */
        destroy(): void;

        /**
         * Create a clone of this geometry.  Does not set any non-standard properties of the cloned geometry.
         */
        clone(): Geometry;

        /**
         * Set the bounds for this Geometry.
         */
        setBounds(bounds: Bounds): void;

        /**
         * Nullify this components bounds and that of its parent as well.
         */
        clearBounds(): void;

        /**
         * Extend the existing bounds to include the new bounds.
         * If geometry's bounds is not yet set, then set a new Bounds.
         */
        extendBounds(newBounds: Bounds): void;

        /**
         * Get the bounds for this Geometry.  If bounds is not set, it is calculated again, this makes queries faster.
         */
        getBounds(): Bounds;

        /**
         * Calculate the closest distance between two geometries (on the x-y plane).
         */
        distanceTo(geometry: Geometry, options: Object): Object;

        /**
         * Return a list of all points in this geometry.
         */
        getVertices(nodes: boolean): any[];

        /**
         * Return whether or not the geometry is at the specified location
         */
        atPoint(lonlat: LonLat, toleranceLon?: number, toleranceLat?: number): boolean;

        /**
         * Returns the length of the collection by summing its parts
         */
        getLength(): number;

        /**
         * Returns the area of the collection by summing its parts
         */
        getArea(): number;

        /**
         * Returns a text representation of the geometry. If the WKT format is
         * included in a build, this will be the Well-Known Text
         * representation.
         */
        toString(): string;

        /**
         * Calculate the centroid of this geometry.  This method is defined in subclasses.
         */
        getCentroid(): Geometry.Point;

        static CLASS_NAME: string;
    }

    export class Projection {
        /**
          * This class offers several methods for interacting with a wrapped pro4js projection object.
          */
        constructor(projCode: string, options?: any);

        /**
          * Get the string SRS code.
          */
        getCode(): string;

        /**
          * Get the units string for the projection -- returns null if proj4js is not available.
          */
        getUnits(): string;

        /**
          * Set a custom transform method between two projections.  Use this method in cases where the proj4js lib is not available or where custom projections need to be handled.
          */
        addTransform(from: string, to: string, method: () => void): void;

        /**
          * Transform a point coordinate from one projection to another. Note that the input point is transformed in place.
          */
        transform(point: Geometry.Point, source: Projection, dest: OpenLayers.Projection): Object;

        /**
          * Transform a point coordinate from one projection to another. Note that the input point is transformed in place.
          */
        transform(point: Object, source: Projection, dest: OpenLayers.Projection): Object;

        /**
          * A null transformation useful for defining projection aliases when proj4js is not available:
          */
        nullTransform(point: Object): Function;
    }

    export class Bounds {
        /**
         * Minimum horizontal coordinate.
         */
        left: number;

        /**
         * Minimum vertical coordinate.
         */
        bottom: number;

        /**
         * Maximum horizontal coordinate.
         */
        right: number;

        /**
         * Maximum vertical coordinate.
         */
        top: number;

        /**
         * Construct a new bounds object. Coordinates can either be passed as four
         * arguments, or as a single argument.
         */
        constructor(left: number, bottom: number, right: number, top: number);

        /**
         * Construct a new bounds object. Coordinates can either be passed as four
         * arguments, or as a single argument.
         */
        constructor(bounds: number[]);

        /**
         * Create a cloned instance of this bounds.
         */
        clone(): Bounds;

        /**
         * Test a two bounds for equivalence.
         */
        equals(bounds: Bounds): boolean;

        /**
         * Returns a string representation of the bounds object.
         */
        toString(): string;

        /**
         * Returns an array representation of the bounds object.
         */
        toArray(reverseAxisOrder?: boolean): number[];

        /**
         * Returns a boundingbox-string representation of the bounds object.
         */
        toBBOX(decimal?: number, reverseAxisOrder?: boolean): string;

        /**
         * Create a new polygon geometry based on this bounds.
         */
        toGeometry(): OpenLayers.Geometry.Polygon;

        /**
         * Returns the width of the bounds.
         */
        getWidth(): number;

        /**
         * Returns the height of the bounds.
         */
        getHeight(): number;

        /**
         *
         */
        getSize(): Size;

        /**
         * Returns the Pixel object which represents the center of the bounds.
         */
        getCenterPixel(): Pixel;

        /**
         * Returns the LonLat object which represents the center of the bounds.
         */
        getCenterLonLat(): LonLat;

        /**
         * Scales the bounds around a pixel or lonlat. Note that the new
         * bounds may return non-integer properties, even if a pixel
         * is passed.
         */
        scale(ratio: number, origin?: Pixel): void;

        /**
         * Scales the bounds around a pixel or lonlat. Note that the new
         * bounds may return non-integer properties, even if a pixel
         * is passed.
         */
        scale(ratio: number, origin?: LonLat): void;

        /**
         * Shifts the coordinates of the bound by the given horizontal and vertical
         * deltas.
         */
        add(x: number, y: number): Bounds;

        /**
         * Extend the bounds.
         */
        extend(object: LonLat): void;

        /**
         * Extend the bounds.
         */
        extend(object: Geometry.Point): void;

        /**
         * Extend the bounds.
         */
        extend(object: Bounds): void;

        /**
         *
         */
        extendXY(x: number, y: number): void;

        /**
         * Returns whether the bounds object contains the given <OpenLayers.LonLat>.
         */
        containsLonLat(ll: LonLat, options: BoundsOptions): boolean;

        /**
         * Returns whether the bounds object contains the given <OpenLayers.LonLat>.
         */
        containsLonLat(ll: Object, options: BoundsOptions): boolean;

        /**
         * Returns whether the bounds object contains the given <OpenLayers.Pixel>.
         */
        containsPixel(px: Pixel, inclusive: boolean): boolean;

        /**
         * Returns whether the bounds object contains the given x and y.
         */
        contains(x: number, y: number, inclusive?: boolean): boolean;

        /**
         * Determine whether the target bounds intersects this bounds. Bounds are
         * considered intersecting if any of their edges intersect or if one
         * bounds contains the other.
         */
        intersectsBounds(bounds: Bounds, options: BoundsOptions): boolean;

        /**
         * Returns whether the bounds object contains the given <OpenLayers.Bounds>.
         */
        containsBounds(bounds: Bounds, partial: boolean, inclusive: boolean): boolean;

        /**
         * Returns the the quadrant ("br", "tr", "tl", "bl") in which the given
         *<OpenLayers.LonLat> lies.
         */
        determineQuadrant(lonlat: LonLat): string;

        /**
         * Transform the Bounds object from source to dest.
         */
        transform(source: Projection, dest: Projection): Bounds;

        /**
         * Wraps the bounds object around the dateline.
         */
        wrapDateLine(maxExtent: Bounds, options: WrapDateLineOptions): Bounds;

        static CLASS_NAME: string;

        /**
         * Alternative constructor that builds a new OpenLayers.Bounds from a
         * parameter string.
         */
        static fromString(str: string, reverseAxisOrder: boolean): Bounds;

        /**
         * Alternative constructor that builds a new OpenLayers.Bounds from an array.
         */
        static fromArray(bbox: number[], reverseAxisOrder: boolean): Bounds;

        /**
         * Alternative constructor that builds a new OpenLayers.Bounds from a size.
         */
        static fromSize(size: Size): Bounds;

        /**
         * Get the opposite quadrant for a given quadrant string.
         */
        static oppositeQuadrant(quadrant: string): string;
    }

    export class LonLat {
        /**
          * Create a new map location.  Coordinates can be passed either as two arguments, or as a single argument.
          */
        constructor(lon: number, lat: number);

        /**
          * Create a new map location.  Coordinates can be passed either as two arguments, or as a single argument.
          */
        constructor(lonlat: number[]);

        /**
          * Shortened String representation of OpenLayers.LonLat object.
          */
        toShortString(): string;

        /**
          * New OpenLayers.LonLat object with the same lon and lat values
          */
        clone(): LonLat;

        /**
          * A new OpenLayers.LonLat object with the lon and lat passed-in added to this’s.
          */
        add(lon: number, lat: number): LonLat;

        /**
          * Boolean value indicating whether the passed-in OpenLayers.LonLat object has the same lon and lat components as this.  Note: if ll passed in is null, returns false.
          */
        equals(ll: LonLat): boolean;

        /**
          * Transform the LonLat object from source to dest.  This transformation is in place: if you want a new lonlat, use .clone() first.
          */
        transform(source: Projection, dest: Projection): LonLat;

        /**
          * Returns a copy of this lonlat, but wrapped around the "dateline" (as specified by the borders of maxExtent).
          */
        wrapDateLine(maxExtend: Bounds): LonLat;
    }

    export class Map {
        /**
         * Unique identifier for the map
         */
        id: string;

        /**
         * For a base layer that supports it, allow the map resolution
         * to be set to a value between one of the values in the resolutions
         * array. Default is false.
         */
        fractionalZoom: boolean;

        /**
         * An events object that handles all
         * events on the map
         */
        events: Events;

        /**
         * Allow the map to function with "overlays" only. Defaults to
         * false. If true, the lowest layer in the draw order will act as
         * the base layer. In addition, if set to true, all layers will
         * have isBaseLayer set to false when they are added to the map.
         */
        allOverlays: boolean;

        /**
         * The element that contains the map (or an id for that element).
         */
        div: HTMLElement;

        /**
         * The map is currently being dragged.
         */
        dragging: boolean;

        /**
         * Size of the main div (this.div)
         */
        size: Size;

        /**
         * The element that represents the map viewport
         */
        viewPortDiv: HTMLDivElement;

        /**
         * The lonlat at which the later container was re-initialized (on-zoom)
         */
        layerContainerOrigin: LonLat;

        /**
         * The element that contains the layers.
         */
        layerContainerDiv: HTMLDivElement;

        /**
         * Ordered list of layers in the map
         */
        layers: Layer[];

        /**
         * List of controls associated with the map.
         */
        controls: Control[];

        /**
         * List of popups associated with the map
         */
        popups: Popup[];

        /**
         * The currently selected base layer. This determines
         * min/max zoom level, projection, etc.
         */
        baseLayer: Layer;

        /**
         * The current center of the map
         */
        center: LonLat;

        /**
         * The resolution of the map.
         */
        resolution: number;

        /**
         * The current zoom level of the map
         */
        zoom: number;

        /**
         * The ratio of the current extent within which panning will tween.
         */
        panRatio: number;

        /**
         * The options object passed to the class constructor. Read-only.
         */
        options: Object;

        /**
         * Set in the map options to override the default tile size for this map.
         */
        tileSize: Size;

        /**
         * Set in the map options to specify the default projection
         * for layers added to this map. When using a projection other than EPSG:4326
         * (CRS:84, Geographic) or EPSG:3857 (EPSG:900913, Web Mercator),
         * also set maxExtent, maxResolution or resolutions. Default is "EPSG:4326".
         * Note that the projection of the map is usually determined
         * by that of the current baseLayer (see <baseLayer> and <getProjectionObject>).
         */
        projection: string;

        /**
         * The map units. Possible values are 'degrees' (or 'dd'), 'm',
         * 'ft', 'km', 'mi', 'inches'. Normally taken from the projection.
         * Only required if both map and layers do not define a projection,
         * or if they define a projection which does not define units
         */
        units: string;

        /**
         * A list of map resolutions (map units per pixel) in
         * descending order. If this is not set in the layer constructor, it
         * will be set based on other resolution related properties
         * (maxExtent, maxResolution, maxScale, etc.).
         */
        resolutions: number[];

        /**
         * Required if you are not displaying the whole world on a tile
         * with the size specified in <tileSize>.
         */
        maxResolution: number;

        /**
         * APIProperty: minResolution
         * {Float}
         */
        minResolution: number;

        /**
         * APIProperty: maxScale
         * {Float}
         */
        maxScale: number;

        /**
         * APIProperty: minScale
         * {Float}
         */
        minScale: number;

        /**
         * APIProperty: maxExtent
         * {<OpenLayers.Bounds>|Array} If provided as an array, the array
         * should consist of four values (left, bottom, right, top).
         * The maximum extent for the map.
         * Default depends on projection; if this is one of those defined in OpenLayers.Projection.defaults
         * (EPSG:4326 or web mercator), maxExtent will be set to the value defined there;
         * else, defaults to null.
         * To restrict user panning and zooming of the map, use <restrictedExtent> instead.
         * The value for <maxExtent> will change calculations for tile URLs.
         */
        maxExtent: Bounds;

        /**
         * APIProperty: minExtent
         * {<OpenLayers.Bounds>|Array} If provided as an array, the array
         * should consist of four values (left, bottom, right, top).
         * The minimum extent for the map. Defaults to null.
         */
        minExtent: Bounds;

        /**
         * APIProperty: restrictedExtent
         * Limit map navigation to this extent where possible.
         * If a non-null restrictedExtent is set, panning will be restricted
         * to the given bounds. In addition, zooming to a resolution that
         * displays more than the restricted extent will center the map
         * on the restricted extent. If you wish to limit the zoom level
         * or resolution, use maxResolution.
         */
        restrictedExtent: Bounds;

        /**
         * APIProperty: numZoomLevels
         * {Integer} Number of zoom levels for the map. Defaults to 16. Set a
         * different value in the map options if needed.
         */
        numZoomLevels: number;

        /**
         * APIProperty: theme
         * {String} Relative path to a CSS file from which to load theme styles.
         * Specify null in the map options (e.g. {theme: null}) if you
         * want to get cascading style declarations - by putting links to
         * stylesheets or style declarations directly in your page.
         */
        theme: string;

        /**
         * APIProperty: displayProjection
         * {<OpenLayers.Projection>} Requires proj4js support for projections other
         * than EPSG:4326 or EPSG:900913/EPSG:3857. Projection used by
         * several controls to display data to user. If this property is set,
         * it will be set on any control which has a null displayProjection
         * property at the time the control is added to the map.
         */
        displayProjection: Projection;

        /**
         * APIProperty: fallThrough
         * {Boolean} Should OpenLayers allow events on the map to fall through to
         * other elements on the page, or should it swallow them? (#457)
         * Default is to swallow.
         */
        fallThrough: boolean;

        /**
         * APIProperty: autoUpdateSize
         * {Boolean} Should OpenLayers automatically update the size of the map
         * when the resize event is fired. Default is true.
         */
        autoUpdateSize: boolean;

        /**
         * APIProperty: eventListeners
         * {Object} If set as an option at construction, the eventListeners
         * object will be registered with <OpenLayers.Events.on>. Object
         * structure must be a listeners object as shown in the example for
         * the events.on method.
         */
        eventListeners: Object;

        /**
         * Property: panTween
         * {<OpenLayers.Tween>} Animated panning tween object, see panTo()
         */
        panTween: Tween;

        /**
         * APIProperty: panMethod
         * {Function} The Easing function to be used for tweening. Default is
         * OpenLayers.Easing.Expo.easeOut. Setting this to 'null' turns off
         * animated panning.
         */
        panMethod: () => void;

        /**
         * Property: panDuration
         * {Integer} The number of steps to be passed to the
         * OpenLayers.Tween.start() method when the map is
         * panned.
         * Default is 50.
         */
        panDuration: number;

        /**
         * Property: zoomTween
         * {<OpenLayers.Tween>} Animated zooming tween object, see zoomTo()
         */
        zoomTween: Tween;

        /**
         * APIProperty: zoomMethod
         * {Function} The Easing function to be used for tweening. Default is
         * OpenLayers.Easing.Quad.easeOut. Setting this to 'null' turns off
         * animated zooming.
         */
        zoomMethod: () => void;

        /**
         * Property: zoomDuration
         * {Integer} The number of steps to be passed to the
         * OpenLayers.Tween.start() method when the map is zoomed.
         * Default is 20.
         */
        zoomDuration: number;

        /**
         * Property: paddingForPopups
         * {<OpenLayers.Bounds>} Outside margin of the popup. Used to prevent
         * the popup from getting too close to the map border.
         */
        paddingForPopups: Bounds;

        /**
         * Property: layerContainerOriginPx
         * {Object} Cached object representing the layer container origin (in pixels).
         */
        layerContainerOriginPx: Object;

        /**
         * Property: minPx
         * {Object} An object with a 'x' and 'y' values that is the lower
         * left of maxExtent in viewport pixel space.
         * Used to verify in moveByPx that the new location we're moving to
         * is valid. It is also used in the getLonLatFromViewPortPx function
         * of Layer.
         */
        minPx: { x: number; y: number };

        /**
         * Property: maxPx
         * {Object} An object with a 'x' and 'y' values that is the top
         * right of maxExtent in viewport pixel space.
         * Used to verify in moveByPx that the new location we're moving to
         * is valid.
         */
        maxPx: { x: number; y: number };

        /**
         * Constructor: OpenLayers.Map
         * Constructor for a new OpenLayers.Map instance. There are two possible
         * ways to call the map constructor. See the examples below.
         *
         * Parameters:
         * div - {DOMElement|String} The element or id of an element in your page
         * that will contain the map. May be omitted if the <div> option is
         * provided or if you intend to call the <render> method later.
         * options - {Object} Optional object with properties to tag onto the map.
         *
         * Valid options (in addition to the listed API properties):
         * center - {<OpenLayers.LonLat>|Array} The default initial center of the map.
         * If provided as array, the first value is the x coordinate,
         * and the 2nd value is the y coordinate.
         * Only specify if <layers> is provided.
         * Note that if an ArgParser/Permalink control is present,
         * and the querystring contains coordinates, center will be set
         * by that, and this option will be ignored.
         * zoom - {Number} The initial zoom level for the map. Only specify if
         * <layers> is provided.
         * Note that if an ArgParser/Permalink control is present,
         * and the querystring contains a zoom level, zoom will be set
         * by that, and this option will be ignored.
         *
         * Examples:
         * (code)
         * // create a map with default options in an element with the id "map1"
         * var map = new OpenLayers.Map("map1");
         *
         * // create a map with non-default options in an element with id "map2"
         * var options = {
         * projection: "EPSG:3857",
         * maxExtent: new OpenLayers.Bounds(-200000, -200000, 200000, 200000),
         * center: new OpenLayers.LonLat(-12356463.476333, 5621521.4854095)
         * };
         * var map = new OpenLayers.Map("map2", options);
         *
         * // map with non-default options - same as above but with a single argument,
         * // a restricted extent, and using arrays for bounds and center
         * var map = new OpenLayers.Map({
         * div: "map_id",
         * projection: "EPSG:3857",
         * maxExtent: [-18924313.432222, -15538711.094146, 18924313.432222, 15538711.094146],
         * restrictedExtent: [-13358338.893333, -9608371.5085962, 13358338.893333, 9608371.5085962],
         * center: [-12356463.476333, 5621521.4854095]
         * });
         *
         * // create a map without a reference to a container - call render later
         * var map = new OpenLayers.Map({
         * projection: "EPSG:3857",
         * maxExtent: new OpenLayers.Bounds(-200000, -200000, 200000, 200000)
         * });
         * (end)
         */
        constructor(id: HTMLElement, options?: MapOptions);
        constructor(id: string, options?: MapOptions);

        /**
         * APIMethod: getViewport
         * Get the DOMElement representing the view port.
         *
         * Returns:
         * {DOMElement}
         */
        getViewport(): HTMLElement;

        /**
         * APIMethod: render
         * Render the map to a specified container.
         *
         * Parameters:
         * div - {String|DOMElement} The container that the map should be rendered
         * to. If different than the current container, the map viewport
         * will be moved from the current to the new container.
         */
        render(div: string): void;
        render(div: HTMLElement): void;

        /**
         * Method: unloadDestroy
         * Function that is called to destroy the map on page unload. stored here
         * so that if map is manually destroyed, we can unregister this.
         */
        private unloadDestroy(): () => void;

        /**
         * Method: updateSizeDestroy
         * When the map is destroyed, we need to stop listening to updateSize
         * events: this method stores the function we need to unregister in
         * non-IE browsers.
         */
        private updateSizeDestroy: () => void;

        /**
         * APIMethod: destroy
         * Destroy this map.
         * Note that if you are using an application which removes a container
         * of the map from the DOM, you need to ensure that you destroy the
         * map *before* this happens; otherwise, the page unload handler
         * will fail because the DOM elements that map.destroy() wants
         * to clean up will be gone. (See
         * http://trac.osgeo.org/openlayers/ticket/2277 for more information).
         * This will apply to GeoExt and also to other applications which
         * modify the DOM of the container of the OpenLayers Map.
         */
        destroy(): void;

        /**
         * APIMethod: setOptions
         * Change the map options
         *
         * Parameters:
         * options - {Object} Hashtable of options to tag to the map
         */
        setOptions(options: {}): void;

        /**
         * APIMethod: getTileSize
         * Get the tile size for the map
         *
         * Returns:
         * {<OpenLayers.Size>}
         */
        getTileSize(): Size;

        /**
         * APIMethod: getBy
         * Get a list of objects given a property and a match item.
         *
         * Parameters:
         * array - {String} A property on the map whose value is an array.
         * property - {String} A property on each item of the given array.
         * match - {String | Object} A string to match. Can also be a regular
         * expression literal or object. In addition, it can be any object
         * with a method named test. For reqular expressions or other, if
         * match.test(map[array][i][property]) evaluates to true, the item will
         * be included in the array returned. If no items are found, an empty
         * array is returned.
         *
         * Returns:
         * {Array} An array of items where the given property matches the given
         * criteria.
         */
        getBy(array: string, property: string, match: string): any[];
        getBy(array: string, property: string, match: Object): any[];

        /**
         * APIMethod: getLayersBy
         * Get a list of layers with properties matching the given criteria.
         *
         * Parameters:
         * property - {String} A layer property to be matched.
         * match - {String | Object} A string to match. Can also be a regular
         * expression literal or object. In addition, it can be any object
         * with a method named test. For reqular expressions or other, if
         * match.test(layer[property]) evaluates to true, the layer will be
         * included in the array returned. If no layers are found, an empty
         * array is returned.
         *
         * Returns:
         * {Array(<OpenLayers.Layer>)} A list of layers matching the given criteria.
         * An empty array is returned if no matches are found.
         */
        getLayersBy(property: string, match: string): Layer[];
        getLayersBy(property: string, match: Object): Layer[];

        /**
         * APIMethod: getLayersByName
         * Get a list of layers with names matching the given name.
         *
         * Parameters:
         * match - {String | Object} A layer name. The name can also be a regular
         * expression literal or object. In addition, it can be any object
         * with a method named test. For reqular expressions or other, if
         * name.test(layer.name) evaluates to true, the layer will be included
         * in the list of layers returned. If no layers are found, an empty
         * array is returned.
         *
         * Returns:
         * {Array(<OpenLayers.Layer>)} A list of layers matching the given name.
         * An empty array is returned if no matches are found.
         */
        getLayersByName(match: string): Layer[];
        getLayersByName(match: Object): Layer[];

        /**
         * APIMethod: getLayersByClass
         * Get a list of layers of a given class (CLASS_NAME).
         *
         * Parameters:
         * match - {String | Object} A layer class name. The match can also be a
         * regular expression literal or object. In addition, it can be any
         * object with a method named test. For reqular expressions or other,
         * if type.test(layer.CLASS_NAME) evaluates to true, the layer will
         * be included in the list of layers returned. If no layers are
         * found, an empty array is returned.
         *
         * Returns:
         * {Array(<OpenLayers.Layer>)} A list of layers matching the given class.
         * An empty array is returned if no matches are found.
         */
        getLayersByClass(match: string): Layer[];
        getLayersByClass(match: Object): Layer[];

        /**
         * APIMethod: getControlsBy
         * Get a list of controls with properties matching the given criteria.
         *
         * Parameters:
         * property - {String} A control property to be matched.
         * match - {String | Object} A string to match. Can also be a regular
         * expression literal or object. In addition, it can be any object
         * with a method named test. For reqular expressions or other, if
         * match.test(layer[property]) evaluates to true, the layer will be
         * included in the array returned. If no layers are found, an empty
         * array is returned.
         *
         * Returns:
         * {Array(<OpenLayers.Control>)} A list of controls matching the given
         * criteria. An empty array is returned if no matches are found.
         */
        getControlsBy(property: string, match: string): Control[];
        getControlsBy(property: string, match: Object): Control[];

        /**
         * APIMethod: getControlsByClass
         * Get a list of controls of a given class (CLASS_NAME).
         *
         * Parameters:
         * match - {String | Object} A control class name. The match can also be a
         * regular expression literal or object. In addition, it can be any
         * object with a method named test. For reqular expressions or other,
         * if type.test(control.CLASS_NAME) evaluates to true, the control will
         * be included in the list of controls returned. If no controls are
         * found, an empty array is returned.
         *
         * Returns:
         * {Array(<OpenLayers.Control>)} A list of controls matching the given class.
         * An empty array is returned if no matches are found.
         */
        getControlsByClass(match: string): Control[];
        getControlsByClass(match: Object): Control[];

        /**
         * APIMethod: getLayer
         * Get a layer based on its id
         *
         * Parameters:
         * id - {String} A layer id
         *
         * Returns:
         * {<OpenLayers.Layer>} The Layer with the corresponding id from the map's
         * layer collection, or null if not found.
         */
        getLayer(id: string): Layer;

        /**
         * Method: setLayerZIndex
         *
         * Parameters:
         * layer - {<OpenLayers.Layer>}
         * zIdx - {int}
         */
        private setLayerZIndex(layer: Layer, zIdx: number): void;

        /**
         * Method: resetLayersZIndex
         * Reset each layer's z-index based on layer's array index
         */
        private resetLayersZIndex(): void;

        /**
         * APIMethod: addLayer
         *
         * Parameters:
         * layer - {<OpenLayers.Layer>}
         *
         * Returns:
         * {Boolean} True if the layer has been added to the map.
         */
        addLayer(layer: Layer): boolean;

        /**
         * APIMethod: addLayers
         *
         * Parameters:
         * layers - {Array(<OpenLayers.Layer>)}
         */
        addLayers(layers: Layer[]): void;

        /**
         * APIMethod: removeLayer
         * Removes a layer from the map by removing its visual element (the
         * layer.div property), then removing it from the map's internal list
         * of layers, setting the layer's map property to null.
         *
         * a "removelayer" event is triggered.
         *
         * very worthy of mention is that simply removing a layer from a map
         * will not cause the removal of any popups which may have been created
         * by the layer. this is due to the fact that it was decided at some
         * point that popups would not belong to layers. thus there is no way
         * for us to know here to which layer the popup belongs.
         *
         * A simple solution to this is simply to call destroy() on the layer.
         * the default OpenLayers.Layer class's destroy() function
         * automatically takes care to remove itself from whatever map it has
         * been attached to.
         *
         * The correct solution is for the layer itself to register an
         * event-handler on "removelayer" and when it is called, if it
         * recognizes itself as the layer being removed, then it cycles through
         * its own personal list of popups, removing them from the map.
         *
         * Parameters:
         * layer - {<OpenLayers.Layer>}
         * setNewBaseLayer - {Boolean} Default is true
         */
        removeLayer(layer: Layer, setNewBaseLayer?: boolean): void;

        /**
         * APIMethod: getNumLayers
         *
         * Returns:
         * {Int} The number of layers attached to the map.
         */
        getNumLayers(): number;

        /**
         * APIMethod: getLayerIndex
         *
         * Parameters:
         * layer - {<OpenLayers.Layer>}
         *
         * Returns:
         * {Integer} The current (zero-based) index of the given layer in the map's
         * layer stack. Returns -1 if the layer isn't on the map.
         */
        getLayerIndex(layer: Layer): number;

        /**
         * APIMethod: setLayerIndex
         * Move the given layer to the specified (zero-based) index in the layer
         * list, changing its z-index in the map display. Use
         * map.getLayerIndex() to find out the current index of a layer. Note
         * that this cannot (or at least should not) be effectively used to
         * raise base layers above overlays.
         *
         * Parameters:
         * layer - {<OpenLayers.Layer>}
         * idx - {int}
         */
        setLayerIndex(layer: Layer, idx: number): void;

        /**
         * APIMethod: raiseLayer
         * Change the index of the given layer by delta. If delta is positive,
         * the layer is moved up the map's layer stack; if delta is negative,
         * the layer is moved down. Again, note that this cannot (or at least
         * should not) be effectively used to raise base layers above overlays.
         *
         * Paremeters:
         * layer - {<OpenLayers.Layer>}
         * delta - {int}
         */
        raiseLayer(layer: Layer, delta: number): void;

        /**
         * APIMethod: setBaseLayer
         * Allows user to specify one of the currently-loaded layers as the Map's
         * new base layer.
         *
         * Parameters:
         * newBaseLayer - {<OpenLayers.Layer>}
         */
        setBaseLayer(newBaseLayer: Layer): void;

        /**
         * APIMethod: addControl
         * Add the passed over control to the map. Optionally
         * position the control at the given pixel.
         *
         * Parameters:
         * control - {<OpenLayers.Control>}
         * px - {<OpenLayers.Pixel>}
         */
        addControl(control: Control, px: Pixel): void;

        /**
         * APIMethod: addControls
         * Add all of the passed over controls to the map.
         * You can pass over an optional second array
         * with pixel-objects to position the controls.
         * The indices of the two arrays should match and
         * you can add null as pixel for those controls
         * you want to be autopositioned.
         *
         * Parameters:
         * controls - {Array(<OpenLayers.Control>)}
         * pixels - {Array(<OpenLayers.Pixel>)}
         */
        addControls(controls: Control[], pixels: Pixel[]): void;

        /**
         * Method: addControlToMap
         *
         * Parameters:
         *
         * control - {<OpenLayers.Control>}
         * px - {<OpenLayers.Pixel>}
         */
        private addControlToMap(control: Control, px: Pixel): void;

        /**
         * APIMethod: getControl
         *
         * Parameters:
         * id - {String} ID of the control to return.
         *
         * Returns:
         * {<OpenLayers.Control>} The control from the map's list of controls
         * which has a matching 'id'. If none found,
         * returns null.
         */
        getControl(id: string): Control;

        /**
         * APIMethod: removeControl
         * Remove a control from the map. Removes the control both from the map
         * object's internal array of controls, as well as from the map's
         * viewPort (assuming the control was not added outsideViewport)
         *
         * Parameters:
         * control - {<OpenLayers.Control>} The control to remove.
         */
        removeControl(control: Control): void;

        /**
         * APIMethod: addPopup
         *
         * Parameters:
         * popup - {<OpenLayers.Popup>}
         * exclusive - {Boolean} If true, closes all other popups first
         */
        addPopup(popup: Popup, exclusive: boolean): void;

        /**
         * APIMethod: removePopup
         *
         * Parameters:
         * popup - {<OpenLayers.Popup>}
         */
        removePopup(popup: Popup): void;

        /**
         * APIMethod: getSize
         *
         * Returns:
         * {<OpenLayers.Size>} An <OpenLayers.Size> object that represents the
         * size, in pixels, of the div into which OpenLayers
         * has been loaded.
         * Note - A clone() of this locally cached variable is
         * returned, so as not to allow users to modify it.
         */
        getSize(): Size;

        /**
         * APIMethod: updateSize
         * This function should be called by any external code which dynamically
         * changes the size of the map div (because mozilla wont let us catch
         * the "onresize" for an element)
         */
        updateSize(): void;

        /**
         * Method: getCurrentSize
         *
         * Returns:
         * {<OpenLayers.Size>} A new <OpenLayers.Size> object with the dimensions
         * of the map div
         */
        private getCurrentSize(): Size;

        /**
         * Method: calculateBounds
         *
         * Parameters:
         * center - {<OpenLayers.LonLat>} Default is this.getCenter()
         * resolution - {float} Default is this.getResolution()
         *
         * Returns:
         * {<OpenLayers.Bounds>} A bounds based on resolution, center, and
         * current mapsize.
         */
        calculateBounds(center?: LonLat, resolution?: number): Bounds;

        /**
         * APIMethod: getCenter
         *
         * Returns:
         * {<OpenLayers.LonLat>}
         */
        getCenter(): LonLat;

        /**
         * APIMethod: getZoom
         *
         * Returns:
         * {Integer}
         */
        getZoom(): number;

        /**
         * APIMethod: pan
         * Allows user to pan by a value of screen pixels
         *
         * Parameters:
         * dx - {Integer}
         * dy - {Integer}
         * options - {Object} Options to configure panning:
         * - *animate* {Boolean} Use panTo instead of setCenter. Default is true.
         * - *dragging* {Boolean} Call setCenter with dragging true. Default is
         * false.
         */
        pan(dx: number, dy: number, options?: { animate?: boolean; dragging?: boolean }): void;

        /**
         * APIMethod: panTo
         * Allows user to pan to a new lonlat
         * If the new lonlat is in the current extent the map will slide smoothly
         *
         * Parameters:
         * lonlat - {<OpenLayers.LonLat>}
         */
        panTo(lonlat: LonLat): void;

        /**
         * APIMethod: setCenter
         * Set the map center (and optionally, the zoom level).
         *
         * Parameters:
         * lonlat - {<OpenLayers.LonLat>|Array} The new center location.
         * If provided as array, the first value is the x coordinate,
         * and the 2nd value is the y coordinate.
         * zoom - {Integer} Optional zoom level.
         * dragging - {Boolean} Specifies whether or not to trigger
         * movestart/end events
         * forceZoomChange - {Boolean} Specifies whether or not to trigger zoom
         * change events (needed on baseLayer change)
         */
        setCenter(lonlat: LonLat, zoom?: number, dragging?: boolean, forceZoomChange?: boolean): void;
        setCenter(lonlat: number[], zoom?: number, dragging?: boolean, forceZoomChange?: boolean): void;

        /**
         * APIMethod: getMinZoom
         * Returns the minimum zoom level for the current map view. If the base
         * layer is configured with <wrapDateLine> set to true, this will be the
         * first zoom level that shows no more than one world width in the current
         * map viewport. Components that rely on this value (e.g. zoom sliders)
         * should also listen to the map's "updatesize" event and call this method
         * in the "updatesize" listener.
         *
         * Returns:
         * {Number} Minimum zoom level that shows a map not wider than its
         * <baseLayer>'s maxExtent. This is an Integer value, unless the map is
         * configured with <fractionalZoom> set to true.
         */
        getMinZoom(): number;

        /**
         * APIMethod: getProjection
         * This method returns a string representing the projection. In
         * the case of projection support, this will be the srsCode which
         * is loaded -- otherwise it will simply be the string value that
         * was passed to the projection at startup.
         *
         * Returns:
         * {String} The Projection string from the base layer or null.
         */
        getProjection(): string;

        /**
         * APIMethod: getProjectionObject
         * Returns the projection obect from the baselayer.
         *
         * Returns:
         * {<OpenLayers.Projection>} The Projection of the base layer.
         */
        getProjectionObject(): Projection;

        /**
         * APIMethod: getMaxResolution
         *
         * Returns:
         * {String} The Map's Maximum Resolution
         */
        getMaxResolution(): string;

        /**
         * APIMethod: getMaxExtent
         *
         * Parameters:
         * options - {Object}
         *
         * Allowed Options:
         * restricted - {Boolean} If true, returns restricted extent (if it is
         * available.)
         *
         * Returns:
         * {<OpenLayers.Bounds>} The maxExtent property as set on the current
         * baselayer, unless the 'restricted' option is set, in which case
         * the 'restrictedExtent' option from the map is returned (if it
         * is set).
         */
        getMaxExtent(options: { restricted: boolean }): Bounds;

        /**
         * APIMethod: getNumZoomLevels
         *
         * Returns:
         * {Integer} The total number of zoom levels that can be displayed by the
         * current baseLayer.
         */
        getNumZoomLevels(): number;

        /**
         * APIMethod: getExtent
         *
         * Returns:
         * {<OpenLayers.Bounds>} A Bounds object which represents the lon/lat
         * bounds of the current viewPort.
         * If no baselayer is set, returns null.
         */
        getExtent(): Bounds;

        /**
         * APIMethod: getResolution
         *
         * Returns:
         * {Float} The current resolution of the map.
         * If no baselayer is set, returns null.
         */
        getResolution(): number;

        /**
         * APIMethod: getUnits
         *
         * Returns:
         * {Float} The current units of the map.
         * If no baselayer is set, returns null.
         */
        getUnits(): number;

        /**
         * APIMethod: getScale
         *
         * Returns:
         * {Float} The current scale denominator of the map.
         * If no baselayer is set, returns null.
         */
        getScale(): number;

        /**
         * APIMethod: getZoomForExtent
         *
         * Parameters:
         * bounds - {<OpenLayers.Bounds>}
         * closest - {Boolean} Find the zoom level that most closely fits the
         * specified bounds. Note that this may result in a zoom that does
         * not exactly contain the entire extent.
         * Default is false.
         *
         * Returns:
         * {Integer} A suitable zoom level for the specified bounds.
         * If no baselayer is set, returns null.
         */
        getZoomForExtent(bounds: Bounds, closest?: boolean): number;

        /**
         * APIMethod: getResolutionForZoom
         *
         * Parameters:
         * zoom - {Float}
         *
         * Returns:
         * {Float} A suitable resolution for the specified zoom. If no baselayer
         * is set, returns null.
         */
        getResolutionForZoom(zoom: number): number;

        /**
         * APIMethod: getZoomForResolution
         *
         * Parameters:
         * resolution - {Float}
         * closest - {Boolean} Find the zoom level that corresponds to the absolute
         * closest resolution, which may result in a zoom whose corresponding
         * resolution is actually smaller than we would have desired (if this
         * is being called from a getZoomForExtent() call, then this means that
         * the returned zoom index might not actually contain the entire
         * extent specified... but it'll be close).
         * Default is false.
         *
         * Returns:
         * {Integer} A suitable zoom level for the specified resolution.
         * If no baselayer is set, returns null.
         */
        getZoomForResolution(resolution: number, closest?: boolean): number;

        /**
         * APIMethod: zoomTo
         * Zoom to a specific zoom level. Zooming will be animated unless the map
         * is configured with {zoomMethod: null}. To zoom without animation, use
         * <setCenter> without a lonlat argument.
         *
         * Parameters:
         * zoom - {Integer}
         */
        zoomTo(zoom: number, px: Pixel): void;

        /**
         * APIMethod: zoomIn
         *
         */
        zoomIn(): void;

        /**
         * APIMethod: zoomOut
         *
         */
        zoomOut(): void;

        /**
         * APIMethod: zoomToExtent
         * Zoom to the passed in bounds, recenter
         *
         * Parameters:
         * bounds - {<OpenLayers.Bounds>|Array} If provided as an array, the array
         * should consist of four values (left, bottom, right, top).
         * closest - {Boolean} Find the zoom level that most closely fits the
         * specified bounds. Note that this may result in a zoom that does
         * not exactly contain the entire extent.
         * Default is false.
         *
         */
        zoomToExtent(bounds: Bounds, closest?: boolean): void;
        zoomToExtent(bounds: number[], closest?: boolean): void;

        /**
         * APIMethod: zoomToMaxExtent
         * Zoom to the full extent and recenter.
         *
         * Parameters:
         * options - {Object}
         *
         * Allowed Options:
         * restricted - {Boolean} True to zoom to restricted extent if it is
         * set. Defaults to true.
         */
        zoomToMaxExtent(options?: { restricted: boolean }): void;

        /**
         * APIMethod: zoomToScale
         * Zoom to a specified scale
         *
         * Parameters:
         * scale - {float}
         * closest - {Boolean} Find the zoom level that most closely fits the
         * specified scale. Note that this may result in a zoom that does
         * not exactly contain the entire extent.
         * Default is false.
         *
         */
        zoomToScale(scale: number, closest: boolean): void;

        /**
         * APIMethod: getViewPortPxFromLonLat
         *
         * Parameters:
         * lonlat - {<OpenLayers.LonLat>}
         *
         * Returns:
         * {<OpenLayers.Pixel>} An OpenLayers.Pixel which is the passed-in
         * <OpenLayers.LonLat>, translated into view port
         * pixels by the current base layer.
         */
        getViewPortPxFromLonLat(lonlat: LonLat): Pixel;

        /**
         * APIMethod: getLonLatFromPixel
         *
         * Parameters:
         * px - {<OpenLayers.Pixel>|Object} An OpenLayers.Pixel or an object with
         * a 'x' and 'y' properties.
         *
         * Returns:
         * {<OpenLayers.LonLat>} An OpenLayers.LonLat corresponding to the given
         * OpenLayers.Pixel, translated into lon/lat by the
         * current base layer
         */
        getLonLatFromPixel(px: Pixel): LonLat;
        getLonLatFromPixel(px: { x: number; y: number }): LonLat;

        /**
         * APIMethod: getPixelFromLonLat
         * Returns a pixel location given a map location. The map location is
         * translated to an integer pixel location (in viewport pixel
         * coordinates) by the current base layer.
         *
         * Parameters:
         * lonlat - {<OpenLayers.LonLat>} A map location.
         *
         * Returns:
         * {<OpenLayers.Pixel>} An OpenLayers.Pixel corresponding to the
         * <OpenLayers.LonLat> translated into view port pixels by the current
         * base layer.
         */
        getPixelFromLonLat(lonlat: LonLat): Pixel;

        /**
         * APIMethod: getViewPortPxFromLayerPx
         *
         * Parameters:
         * layerPx - {<OpenLayers.Pixel>}
         *
         * Returns:
         * {<OpenLayers.Pixel>} Layer Pixel translated into ViewPort Pixel
         * coordinates
         */
        getViewPortPxFromLayerPx(layerPx: Pixel): Pixel;

        /**
         * APIMethod: getLayerPxFromViewPortPx
         *
         * Parameters:
         * viewPortPx - {<OpenLayers.Pixel>}
         *
         * Returns:
         * {<OpenLayers.Pixel>} ViewPort Pixel translated into Layer Pixel
         * coordinates
         */
        getLayerPxFromViewPortPx(viewPortPx: Pixel): Pixel;

        /**
         * APIMethod: getLayerPxFromLonLat
         *
         * Parameters:
         * lonlat - {<OpenLayers.LonLat>} lonlat
         *
         * Returns:
         * {<OpenLayers.Pixel>} An OpenLayers.Pixel which is the passed-in
         * <OpenLayers.LonLat>, translated into layer pixels
         * by the current base layer
         */
        getLayerPxFromLonLat(lonlat: LonLat): Pixel;

        static TILE_WIDTH: string;

        static TILE_HEIGHT: string;
    }

    export class Class {

    }

    export class Date {
        /**
         * APIProperty: dateRegEx
         * The regex to be used for validating dates. You can provide your own
         * regex for instance for adding support for years before BC. Default
         * value is: /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:(?:T(\d{1,2}):(\d{2}):(\d{2}(?:\.\d+)?)(Z|(?:[+-]\d{1,2}(?::(\d{2}))?)))|Z)?$/
         */
        dateRegEx: string;

        /**
         * APIMethod: toISOString
         * Generates a string representing a date. The format of the string follows
         * the profile of ISO 8601 for date and time on the Internet (see
         * http://tools.ietf.org/html/rfc3339). If the toISOString method is
         * available on the Date prototype, that is used. The toISOString
         * method for Date instances is defined in ECMA-262.
         *
         * Parameters:
         * date - {Date} A date object.
         *
         * Returns:
         * {String} A string representing the date (e.g.
         * "2010-08-07T16:58:23.123Z"). If the date does not have a valid time
         * (i.e. isNaN(date.getTime())) this method returns the string "Invalid
         * Date". The ECMA standard says the toISOString method should throw
         * RangeError in this case, but Firefox returns a string instead. For
         * best results, use isNaN(date.getTime()) to determine date validity
         * before generating date strings.
         */
        toISOString(date: Date): string;

        /**
         * APIMethod: parse
         * Generate a date object from a string. The format for the string follows
         * the profile of ISO 8601 for date and time on the Internet (see
         * http://tools.ietf.org/html/rfc3339). We don't call the native
         * Date.parse because of inconsistency between implmentations. In
         * Chrome, calling Date.parse with a string that doesn't contain any
         * indication of the timezone (e.g. "2011"), the date is interpreted
         * in local time. On Firefox, the assumption is UTC.
         *
         * Parameters:
         * str - {String} A string representing the date (e.g.
         * "2010", "2010-08", "2010-08-07", "2010-08-07T16:58:23.123Z",
         * "2010-08-07T11:58:23.123-06").
         *
         * Returns:
         * {Date} A date object. If the string could not be parsed, an invalid
         * date is returned (i.e. isNaN(date.getTime())).
         */
        parse(str: string): Date;
    }

    export class Element {
        /**
         * APIFunction: visible
         *
         * Parameters:
         * element - {DOMElement}
         *
         * Returns:
         * {Boolean} Is the element visible?
         */
        visible(element: HTMLElement): boolean;

        /**
         * APIFunction: toggle
         * Toggle the visibility of element(s) passed in
         *
         * Parameters:
         * element - {DOMElement} Actually user can pass any number of elements
         */
        toggle(element: HTMLElement): void;

        /**
         * APIFunction: remove
         * Remove the specified element from the DOM.
         *
         * Parameters:
         * element - {DOMElement}
         */
        remove(element: HTMLElement): void;

        /**
         * APIFunction: getHeight
         *
         * Parameters:
         * element - {DOMElement}
         *
         * Returns:
         * {Integer} The offset height of the element passed in
         */
        getHeight(element: HTMLElement): number;

        /**
         * Function: hasClass
         * Tests if an element has the given CSS class name.
         *
         * Parameters:
         * element - {DOMElement} A DOM element node.
         * name - {String} The CSS class name to search for.
         *
         * Returns:
         * {Boolean} The element has the given class name.
         */
        hasClass(element: HTMLElement, name: string): boolean;

        /**
         * Function: addClass
         * Add a CSS class name to an element. Safe where element already has
         * the class name.
         *
         * Parameters:
         * element - {DOMElement} A DOM element node.
         * name - {String} The CSS class name to add.
         *
         * Returns:
         * {DOMElement} The element.
         */
        addClass(element: HTMLElement, name: string): HTMLElement;

        /**
         * Function: removeClass
         * Remove a CSS class name from an element. Safe where element does not
         * have the class name.
         *
         * Parameters:
         * element - {DOMElement} A DOM element node.
         * name - {String} The CSS class name to remove.
         *
         * Returns:
         * {DOMElement} The element.
         */
        removeClass(element: HTMLElement, name: string): HTMLElement;

        /**
         * Function: toggleClass
         * Remove a CSS class name from an element if it exists. Add the class name
         * if it doesn't exist.
         *
         * Parameters:
         * element - {DOMElement} A DOM element node.
         * name - {String} The CSS class name to toggle.
         *
         * Returns:
         * {DOMElement} The element.
         */
        toggleClass(element: HTMLElement, name: string): HTMLElement;

        /**
         * APIFunction: getStyle
         *
         * Parameters:
         * element - {DOMElement}
         * style - {?}
         *
         * Returns:
         * {?}
         */
        getStyle(element: HTMLElement, style: any): any;
    }

    export class Pixel {
        /**
        * APIProperty: x
        * {Number} The x coordinate
        */
        x: number;

        /**
        * APIProperty: y
        * {Number} The y coordinate
        */
        y: number;

        /**
         * Constructor: OpenLayers.Pixel
         * Create a new OpenLayers.Pixel instance
         *
         * Parameters:
         * x - {Number} The x coordinate
         * y - {Number} The y coordinate
         *
         * Returns:
         * An instance of OpenLayers.Pixel
         */
        constructor(x: number, y: number);

        /**
         * APIMethod: clone
         * Return a clone of this pixel object
         *
         * Returns:
         * {<OpenLayers.Pixel>} A clone pixel
         */
        clone(): Pixel;

        /**
         * APIMethod: equals
         * Determine whether one pixel is equivalent to another
         *
         * Parameters:
         * px - {<OpenLayers.Pixel>|Object} An OpenLayers.Pixel or an object with
         * a 'x' and 'y' properties.
         *
         * Returns:
         * {Boolean} The point passed in as parameter is equal to this. Note that
         * if px passed in is null, returns false.
         */
        equals(px: Pixel): boolean;
        equals(px: { x: number; y: number }): boolean;

        /**
         * APIMethod: distanceTo
         * Returns the distance to the pixel point passed in as a parameter.
         *
         * Parameters:
         * px - {<OpenLayers.Pixel>}
         *
         * Returns:
         * {Float} The pixel point passed in as parameter to calculate the
         * distance to.
         */
        distanceTo(px: Pixel): number;

        /**
         * APIMethod: add
         *
         * Parameters:
         * x - {Integer}
         * y - {Integer}
         *
         * Returns:
         * {<OpenLayers.Pixel>} A new Pixel with this pixel's x&y augmented by the
         * values passed in.
         */
        add(x: number, y: number): Pixel;

        /**
        * APIMethod: offset
        *
        * Parameters
        * px - {<OpenLayers.Pixel>|Object} An OpenLayers.Pixel or an object with
        * a 'x' and 'y' properties.
        *
        * Returns:
        * {<OpenLayers.Pixel>} A new Pixel with this pixel's x&y augmented by the
        * x&y values of the pixel passed in.
        */
        offset(px: Pixel): Pixel;
        offset(px: { x: number; y: number }): Pixel;

        CLASS_NAME: string;
    }

    export class Size {
        /**
         * APIProperty: w
         * {Number} width
         */
        w: number;

        /**
         * APIProperty: h
         * {Number} height
         */
        h: number;

        /**
         * Constructor: OpenLayers.Size
         * Create an instance of OpenLayers.Size
         *
         * Parameters:
         * w - {Number} width
         * h - {Number} height
         */
        constructor(w: number, h: number);

        /**
         * Method: toString
         * Return the string representation of a size object
         *
         * Returns:
         * {String} The string representation of OpenLayers.Size object.
         * (e.g. <i>"w=55,h=66"</i>)
         */
        toString(): string;

        /**
         * APIMethod: clone
         * Create a clone of this size object
         *
         * Returns:
         * {<OpenLayers.Size>} A new OpenLayers.Size object with the same w and h
         * values
         */
        clone(): Size;

        /**
         *
         * APIMethod: equals
         * Determine where this size is equal to another
         *
         * Parameters:
         * sz - {<OpenLayers.Size>|Object} An OpenLayers.Size or an object with
         * a 'w' and 'h' properties.
         *
         * Returns:
         * {Boolean} The passed in size has the same h and w properties as this one.
         * Note that if sz passed in is null, returns false.
         */
        equals(sz: Size): boolean;

        CLASS_NAME: string;
    }

    namespace Geometry {

        export class Collection extends Geometry {
            /**
             * The component parts of this geometry
             */
            components: Geometry[];

            /**
             * An array of class names representing the types of
             * components that the collection can include. A null value means the
             * component types are not restricted.
             */
            componentTypes: string[];

            /**
             * Creates a Geometry Collection -- a list of geoms.
             */
            constructor(components: Geometry[]);

            /**
             * Destroy this geometry.
             */
            destroy(): void;

            /**
             * Clone this geometry.
             */
            clone(): Collection;

            /**
             * Get a string representing the components for this collection
             */
            getComponentsString(): string;

            /**
             * Recalculate the bounds by iterating through the components and
             * calling calling extendBounds() on each item.
             */
            calculateBounds(): void;

            /**
             * Add components to this geometry.
             */
            addComponents(components: Geometry[]): void;

            /**
             * Add a new component (geometry) to the collection. If this.componentTypes
             * is set, then the component class name must be in the componentTypes array.
             */
            addComponent(component: Geometry, index: number): boolean;

            /**
             * Remove components from this geometry.
             */
            removeComponents(components: Geometry[]): boolean;

            /**
             * Remove a component from this geometry.
             */
            removeComponent(component: Geometry): boolean;

            /**
             * Calculate the length of this geometry
             */
            getLength(): number;

            /**
             * Calculate the area of this geometry. Note how this function is overridden
             * in <OpenLayers.Geometry.Polygon>.
             */
            getArea(): number;

            /**
             * Calculate the approximate area of the polygon were it projected onto
             * the earth.
             */
            getGeodesicArea(projection: Projection): number;

            /**
             * Compute the centroid for this geometry collection.
             */
            getCentroid(weighted?: boolean): Point;

            /**
             * Calculate the approximate length of the geometry were it projected onto
             * the earth.
             */
            getGeodesicLength(projection: Projection): number;

            /**
             * Moves a geometry by the given displacement along positive x and y axes.
             * This modifies the position of the geometry and clears the cached
             * bounds.
             */
            move(x: number, y: number): void;

            /**
             * Rotate a geometry around some origin
             */
            rotate(angle: number, origin: Point): void;

            /**
             * Resize a geometry relative to some origin. Use this method to apply
             * a uniform scaling to a geometry.
             */
            resize(scale: number, origin: Point, ratio: number): Geometry;

            /**
             * Calculate the closest distance between two geometries (on the x-y plane).
             */
            distanceTo(geometry: Geometry, options: DistanceOptions): Object;

            /**
             * Determine whether another geometry is equivalent to this one. Geometries
             * are considered equivalent if all components have the same coordinates.
             */
            equals(geometry: Geometry): boolean;

            /**
             * Reproject the components geometry from source to dest.
             */
            transform(source: Projection, dest: Projection): Geometry;

            /**
             * Determine if the input geometry intersects this one.
             */
            intersects(geometry: Geometry): boolean;

            /**
             * Return a list of all points in this geometry.
             */
            getVertices(nodes: boolean): any[];

            static CLASS_NAME: string;
        }

        export class Point extends Geometry {

            x: number;

            y: number;

            /**
             * Construct a point geometry.
             */
            constructor(x: number, y: number);

            /**
             * Create a clone of this geometry.
             */
            clone(): Geometry;

            /**
             * An exact clone of this OpenLayers.Geometry.Point
             */
            clone(obj: Point): Point;

            /**
             * Calculate the closest distance between two geometries (on the x-y plane).
             */
            distanceTo(geometry: Geometry, options: DistanceOptions): Object;

            /**
             * Determine whether another geometry is equivalent to this one.  Geometries are considered equivalent if all components have the same coordinates.
             */
            equals(geom: Point): boolean;

            /**
             * Moves a geometry by the given displacement along positive x and y axes.  This modifies the position of the geometry and clears the cached bounds.
             */
            move(x: number, y: number): void;

            /**
             * Rotate a point around another.
             */
            rotate(angle: number, origin: Point): void;

            /**
             * Resize a point relative to some origin.  For points, this has the effect of scaling a vector (from the origin to the point).  This method is more useful on geometry collection subclasses.
             */
            resize(scale: number, origin: Point, ratio: number): Geometry;

            /**
             * Determine if the input geometry intersects this one.
             */
            intersects(geometry: Geometry): boolean;

            /**
             * Translate the x,y properties of the point from source to dest.
             */
            transform(source: Projection, dest: Projection): Geometry;

            /**
             * Return a list of all points in this geometry.
             */
            getVertices(nodes: boolean): any[];
        }

        export class Curve extends Geometry.MultiPoint {

            // TODO

        }

        export class LineString extends Geometry.Curve {

            // TODO

        }

        export class LinearRing extends Geometry.LineString {

            // TODO

        }

        export class MultiLineString extends Geometry.Collection {

            // TODO

        }

        export class MultiPoint extends Geometry.Collection {

        }
        // TODO


        export class MultiPolygon extends Geometry.Collection {

            // TODO

        }

        export class Polygon extends Geometry.Collection {

            // TODO

        }
    }

    namespace Control {
        export class ArgParser {

            // TODO

        }

        export class Attribution {

            // TODO

        }

        export class Button {

            // TODO

        }

        export class CacheRead {

            // TODO

        }

        export class CacheWrite {

            // TODO

        }

        export class DragFeature {

            // TODO

        }

        export class DragPan {

            // TODO

        }

        export class DrawFeature {

            // TODO

        }

        export class EditingToolbar {

            // TODO

        }

        export class Geolocate {

            // TODO

        }

        export class GetFeature {

            // TODO

        }

        export class Graticule {

            // TODO

        }

        export class KeyboardDefaults {

            // TODO

        }

        export class LayerSwitcher {

            // TODO

        }

        export class Measure {

            // TODO

        }

        export class ModifyFeature {

            // TODO

        }

        export class MousePosition {

            // TODO

        }

        export class NavToolbar {

            // TODO

        }

        export class Navigation {

            // TODO

        }

        export class NavigationHistory {

            // TODO

        }

        export class OverviewMap {

            // TODO

        }

        export class Pan {

            // TODO

        }

        export class PanPanel {

            // TODO

        }

        export class PanZoom {

            // TODO

        }

        export class PanZoomBar {

            // TODO

        }

        export class Panel {

            // TODO

        }

        export class Permalink {

            // TODO

        }

        export class PinchZoom {

            // TODO

        }

        export class SLDSelect {

        }

        export class Scale {

            // TODO

        }

        export class ScaleLine {

            // TODO

        }

        export class SelectFeature {

            // TODO

        }

        export class Snapping {

            // TODO

        }

        export class Split {

            // TODO

        }

        export class TextButtonPanel {

            // TODO

        }

        export class TouchNavigation {

            // TODO

        }

        export class TransformFeature {

            // TODO

        }

        export class UTFGrid {

            // TODO

        }

        export class WMSGetFeatureInfo {

            // TODO

        }

        export class WMTSGetFeatureInfo {

            // TODO

        }

        export class Zoom {

            // TODO

        }

        export class ZoomBox {

            // TODO

        }

        export class ZoomIn {

            // TODO

        }

        export class ZoomOut {

            // TODO

        }

        export class ZoomPanel {

            // TODO

        }

        export class ZoomToMaxExtent {

            // TODO

        }
    }

    namespace Events {
        export class buttonclick extends OpenLayers.Class {

            // TODO

        }

        export class featureclick extends OpenLayers.Class {

            // TODO

        }
    }

    namespace Feature {
        export class Vector {

            // TODO

        }
    }

    namespace Filter {
        export class Comparison {

            // TODO

        }

        export class FeatureId {

            // TODO

        }

        export class Function {

            // TODO

        }

        export class Logical {

            // TODO

        }

        export class Spatial {

            // TODO

        }
    }

    namespace Format {
        export class ArcXML {
            constructor();
        }

        export class Atom {

            // TODO

        }

        export class CQL {

            // TODO

        }

        export class CSWGetDomain {

            // TODO

        }

        export class CSWGetRecords {

            // TODO

        }

        export class Context {
            // TODO
        }
        export class EncodedPolyline {
            // TODO
        }
        export class Filter {
            // TODO
        }
        export class GML {
            // TODO
        }
        export class GPX {
            // TODO
        }
        export class GeoJSON {
            // TODO
        }
        export class GeoRSS {
            // TODO
        }
        export class JSON {
            // TODO
        }
        export class KML {
            // TODO
        }
        export class OGCExceptionReport {
            // TODO
        }
        export class OSM {
            // TODO
        }
        export class OWSCommon {
            // TODO
        }
        export class OWSContext {
            // TODO
        }
        export class QueryStringFilter {
            // TODO
        }
        export class SLD {
            // TODO
        }
        export class SOSCapabilities {
            // TODO
        }
        export class SOSGetFeatureOfInterest {
            // TODO
        }
        export class SOSGetObservation {
            // TODO
        }
        export class TMSCapabilities {
            // TODO
        }
        export class Text {
            // TODO
        }
        export class WCSCapabilities {
            // TODO
        }
        export class WCSDescribeCoverage {
            // TODO
        }
        export class WCSGetCoverage {
            // TODO
        }
        export class WFS {
            // TODO
        }
        export class WFSCapabilities {
            // TODO
        }
        export class WFSDescribeFeatureType {
            // TODO
        }
        export class WFST {
            // TODO
        }
        export class WKT {
            // TODO
        }
        export class WMC {
            // TODO
        }
        export class WMSCapabilities {
            // TODO
        }
        export class WMSDescribeLayer {
            // TODO
        }
        export class WMSGetFeatureInfo {
            // TODO
        }
        export class WMTSCapabilities {
            // TODO
        }
        export class WPSCapabilities {
            // TODO
        }
        export class WPSDescribeProcess {
            // TODO
        }
        export class WPSExecute {
            // TODO
        }
        export class XLS {
            // TODO
        }
        export class XML {
            // TODO
        }

        namespace ArcXML {
            export class Features extends OpenLayers.Class {

                // TODO

            }
        }

        namespace CSWGetDomain {
            export class v2_0_2 {
                // TODO
            }
        }

        namespace CSWGetRecords {
            export class v2_0_2 {
                // TODO
            }
        }

        namespace Filter {

            // TODO

        }

        namespace GML {

            // TODO

        }

        namespace OWSCommon {

            // TODO

        }

        namespace OWSContext {

            // TODO

        }

        namespace SLD {

            // TODO

        }

        namespace SOSCapabilities {

            // TODO

        }

        namespace WCSCapabilities {

            // TODO

        }

        namespace WCSDescribeCoverage {

            // TODO

        }

        namespace WFSCapabilities {

            // TODO

        }

        namespace WFST {

            // TODO

        }

        namespace WMC {

            // TODO

        }

        namespace WMSCapabilities {

            // TODO


        }

        namespace WMSDescribeLayer {

            // TODO

        }

        namespace WMTSCapabilities {

            // TODO

        }

        namespace WPSCapabilities {

            // TODO

        }

        namespace XLS {

            // TODO

        }

        namespace XML {

            // TODO

        }
    }

    namespace Handler {
        export class Box {

            // TODO

        }

        export class Click {

            // TODO

        }

        export class Drag {

            // TODO

        }

        export class Feature {

            // TODO

        }

        export class Hover {

            // TODO

        }

        export class Keyboard {

            // TODO

        }

        export class MouseWheel {

            // TODO

        }

        export class Path {

            // TODO

        }

        export class Pinch {

            // TODO

        }

        export class Point {

            // TODO

        }

        export class Polygon {

            // TODO

        }

        export class RegularPolygon {

            // TODO

        }
    }

    namespace Lang {

    }

    namespace Layer {
        export interface WMSGetMapParams {
            version?: string;
            exceptions?: string;
            transparent?: string;
            format?: string;
            styles?: string;
            layers: string;
            service?: string;
        }

        export interface WMSOptions {
            opacity?: number;
            singleTile?: boolean;
            isBaseLayer?: boolean;
            encodeBBOX?: boolean;
            noMagic?: boolean;
            yx?: Object;
        }

        export interface TileOptions {
            crossOriginKeyword?: string;
        }

        export class ArcGIS93Rest { }
        export class ArcGISCache { }
        export class ArcIMS { }
        export class Bing { }
        export class Boxes { }
        export class EventPane { }
        export class FixedZoomLevels { }
        export class GeoRSS { }
        export class Google { }

        export class Grid extends HTTPRequest {
            /**
             * APIProperty: tileSize
             * {<OpenLayers.Size>}
             */
            tileSize: Size;

            /**
             * Property: tileOriginCorner
             * {String} If the <tileOrigin> property is not provided, the tile origin
             * will be derived from the layer's <maxExtent>. The corner of the
             * <maxExtent> used is determined by this property. Acceptable values
             * are "tl" (top left), "tr" (top right), "bl" (bottom left), and "br"
             * (bottom right). Default is "bl".
             */
            tileOriginCorner: string;

            /**
             * APIProperty: tileOrigin
             * {<OpenLayers.LonLat>} Optional origin for aligning the grid of tiles.
             * If provided, requests for tiles at all resolutions will be aligned
             * with this location (no tiles shall overlap this location). If
             * not provided, the grid of tiles will be aligned with the layer's
             * <maxExtent>. Default is ``null``.
             */
            tileOrigin: LonLat;

            /** APIProperty: tileOptions
             * {Object} optional configuration options for <OpenLayers.Tile> instances
             * created by this Layer, if supported by the tile class.
             */
            tileOptions: Object;

            /**
             * APIProperty: tileClass
             * {<OpenLayers.Tile>} The tile class to use for this layer.
             * Defaults is OpenLayers.Tile.Image.
             */
            tileClass: OpenLayers.Tile;

            /**
             * Property: grid
             * {Array(Array(<OpenLayers.Tile>))} This is an array of rows, each row is
             * an array of tiles.
             */
            grid: OpenLayers.Tile[][];

            /**
             * APIProperty: singleTile
             * {Boolean} Moves the layer into single-tile mode, meaning that one tile
             * will be loaded. The tile's size will be determined by the 'ratio'
             * property. When the tile is dragged such that it does not cover the
             * entire viewport, it is reloaded.
             */
            singleTile: boolean;

            /** APIProperty: ratio
             * {Float} Used only when in single-tile mode, this specifies the
             * ratio of the size of the single tile to the size of the map.
             * Default value is 1.5.
             */
            ratio: number;

            /**
             * APIProperty: buffer
             * {Integer} Used only when in gridded mode, this specifies the number of
             * extra rows and columns of tiles on each side which will
             * surround the minimum grid tiles to cover the map.
             * For very slow loading layers, a larger value may increase
             * performance somewhat when dragging, but will increase bandwidth
             * use significantly.
             */
            buffer: number;

            /**
             * APIProperty: transitionEffect
             * {String} The transition effect to use when the map is zoomed.
             * Two posible values:
             *
             * "resize" - Existing tiles are resized on zoom to provide a visual
             * effect of the zoom having taken place immediately. As the
             * new tiles become available, they are drawn on top of the
             * resized tiles (this is the default setting).
             * "map-resize" - Existing tiles are resized on zoom and placed below the
             * base layer. New tiles for the base layer will cover existing tiles.
             * This setting is recommended when having an overlay duplicated during
             * the transition is undesirable (e.g. street labels or big transparent
             * fills).
             * null - No transition effect.
             *
             * Using "resize" on non-opaque layers can cause undesired visual
             * effects. Set transitionEffect to null in this case.
             */
            transitionEffect: string;

            /**
             * APIProperty: numLoadingTiles
             * {Integer} How many tiles are still loading?
             */
            numLoadingTiles: number;

            /**
             * Property: serverResolutions
             * {Array(Number}} This property is documented in subclasses as
             * an API property.
             */
            serverResolutions: number[];

            /**
             * Property: loading
             * {Boolean} Indicates if tiles are being loaded.
             */
            loading: boolean;

            /**
             * Property: backBuffer
             * {DOMElement} The back buffer.
             */
            backBuffer: HTMLElement;

            /**
             * Property: gridResolution
             * {Number} The resolution of the current grid. Used for backbuffer and
             * client zoom. This property is updated every time the grid is
             * initialized.
             */
            gridResolution: number;

            /**
             * Property: backBufferResolution
             * {Number} The resolution of the current back buffer. This property is
             * updated each time a back buffer is created.
             */
            backBufferResolution: number;

            /**
             * Property: backBufferLonLat
             * {Object} The top-left corner of the current back buffer. Includes lon
             * and lat properties. This object is updated each time a back buffer
             * is created.
             */
            backBufferLonLat: { lon: number; lat: number };

            /**
             * Property: backBufferTimerId
             * {Number} The id of the back buffer timer. This timer is used to
             * delay the removal of the back buffer, thereby preventing
             * flash effects caused by tile animation.
             */
            backBufferTimerId: number;

            /**
             * APIProperty: removeBackBufferDelay
             * {Number} Delay for removing the backbuffer when all tiles have finished
             * loading. Can be set to 0 when no css opacity transitions for the
             * olTileImage class are used. Default is 0 for <singleTile> layers,
             * 2500 for tiled layers. See <className> for more information on
             * tile animation.
             */
            removeBackBufferDelay: number;

            /**
             * APIProperty: className
             * {String} Name of the class added to the layer div. If not set in the
             * options passed to the constructor then className defaults to
             * "olLayerGridSingleTile" for single tile layers (see <singleTile>),
             * and "olLayerGrid" for non single tile layers.
             *
             * Note:
             *
             * The displaying of tiles is not animated by default for single tile
             * layers - OpenLayers' default theme (style.css) includes this:
             * (code)
             * .olLayerGrid .olTileImage {
             * -webkit-transition: opacity 0.2s linear;
             * -moz-transition: opacity 0.2s linear;
             * -o-transition: opacity 0.2s linear;
             * transition: opacity 0.2s linear;
             * }
             * (end)
             * To animate tile displaying for any grid layer the following
             * CSS rule can be used:
             * (code)
             * .olTileImage {
             * -webkit-transition: opacity 0.2s linear;
             * -moz-transition: opacity 0.2s linear;
             * -o-transition: opacity 0.2s linear;
             * transition: opacity 0.2s linear;
             * }
             * (end)
             * In that case, to avoid flash effects, <removeBackBufferDelay>
             * should not be zero.
             */
            className: string;

            /**
             * Property: gridLayout
             * {Object} Object containing properties tilelon, tilelat, startcol,
             * startrow
             */
            gridLayout: { tilelon: number; tilelat: number; startcol: number; startrow: number; };

            /**
             * Property: rowSign
             * {Number} 1 for grids starting at the top, -1 for grids starting at the
             * bottom. This is used for several grid index and offset calculations.
             */
            rowSign: number;

            /**
             * Property: transitionendEvents
             * {Array} Event names for transitionend
             */
            transitionendEvents: string[];

            /**
             * Constructor: OpenLayers.Layer.Grid
             * Create a new grid layer
             *
             * Parameters:
             * name - {String}
             * url - {String}
             * params - {Object}
             * options - {Object} Hashtable of extra options to tag onto the layer
             */
            constructor(name: string, url: string, params: {}, options: {});

            /**
             * Method: initProperties
             * Set any properties that depend on the value of singleTile.
             * Currently sets removeBackBufferDelay and className
             */
            private initProperties(): void;

            /**
             * Method: setMap
             *
             * Parameters:
             * map - {<OpenLayers.Map>} The map.
             */
            setMap(map: Map): void;

            /**
             * Method: removeMap
             * Called when the layer is removed from the map.
             *
             * Parameters:
             * map - {<OpenLayers.Map>} The map.
             */
            removeMap(map: Map): void;

            /**
             * APIMethod: destroy
             * Deconstruct the layer and clear the grid.
             */
            destroy(): void;

            /**
             * Method: clearGrid
             * Go through and remove all tiles from the grid, calling
             * destroy() on each of them to kill circular references
             */
            private clearGrid(): void;

            /**
             * APIMethod: addOptions
             *
             * Parameters:
             * newOptions - {Object}
             * reinitialize - {Boolean} If set to true, and if resolution options of the
             * current baseLayer were changed, the map will be recentered to make
             * sure that it is displayed with a valid resolution, and a
             * changebaselayer event will be triggered.
             */
            addOptions(newOptions: {}, reinitialize: boolean): void;

            /**
             * APIMethod: clone
             * Create a clone of this layer
             *
             * Parameters:
             * obj - {Object} Is this ever used?
             *
             * Returns:
             * {<OpenLayers.Layer.Grid>} An exact clone of this OpenLayers.Layer.Grid
             */
            clone(obj?: Object): Layer.Grid;

            /**
             * Method: moveTo
             * This function is called whenever the map is moved. All the moving
             * of actual 'tiles' is done by the map, but moveTo's role is to accept
             * a bounds and make sure the data that that bounds requires is pre-loaded.
             *
             * Parameters:
             * bounds - {<OpenLayers.Bounds>}
             * zoomChanged - {Boolean}
             * dragging - {Boolean}
             */
            moveTo(bounds: Bounds, zoomChanged: boolean, dragging: boolean): void;

            /**
             * Method: getTileData
             * Given a map location, retrieve a tile and the pixel offset within that
             * tile corresponding to the location. If there is not an existing
             * tile in the grid that covers the given location, null will be
             * returned.
             *
             * Parameters:
             * loc - {<OpenLayers.LonLat>} map location
             *
             * Returns:
             * {Object} Object with the following properties: tile ({<OpenLayers.Tile>}),
             * i ({Number} x-pixel offset from top left), and j ({Integer} y-pixel
             * offset from top left).
             */
            private getTileData(loc: LonLat): { tile: Tile; i: number; j: number };

            /**
             * Method: destroyTile
             *
             * Parameters:
             * tile - {<OpenLayers.Tile>}
             */
            private destroyTile(tile: Tile): void;

            /**
             * Method: getServerResolution
             * Return the closest server-supported resolution.
             *
             * Parameters:
             * resolution - {Number} The base resolution. If undefined the
             * map resolution is used.
             *
             * Returns:
             * {Number} The closest server resolution value.
             */
            private getServerResolution(resolution: number): number;

            /**
             * Method: getServerZoom
             * Return the zoom value corresponding to the best matching server
             * resolution, taking into account <serverResolutions> and <zoomOffset>.
             *
             * Returns:
             * {Number} The closest server supported zoom. This is not the map zoom
             * level, but an index of the server's resolutions array.
             */
            private getServerZoom(): number;

            /**
             * Method: applyBackBuffer
             * Create, insert, scale and position a back buffer for the layer.
             *
             * Parameters:
             * resolution - {Number} The resolution to transition to.
             */
            private applyBackBuffer(resolution: number): void;

            /**
             * Method: createBackBuffer
             * Create a back buffer.
             *
             * Returns:
             * {DOMElement} The DOM element for the back buffer, undefined if the
             * grid isn't initialized yet.
             */
            private createBackBuffer(): HTMLElement;

            /**
             * Method: removeBackBuffer
             * Remove back buffer from DOM.
             */
            private removeBackBuffer(): void;

            /**
             * Method: moveByPx
             * Move the layer based on pixel vector.
             *
             * Parameters:
             * dx - {Number}
             * dy - {Number}
             */
            moveByPx(dx: number, dy: number): void;

            /**
             * APIMethod: setTileSize
             * Check if we are in singleTile mode and if so, set the size as a ratio
             * of the map size (as specified by the layer's 'ratio' property).
             *
             * Parameters:
             * size - {<OpenLayers.Size>}
             */
            setTileSize(size: Size): void;

            /**
             * APIMethod: getTilesBounds
             * Return the bounds of the tile grid.
             *
             * Returns:
             * {<OpenLayers.Bounds>} A Bounds object representing the bounds of all the
             * currently loaded tiles (including those partially or not at all seen
             * onscreen).
             */
            getTilesBounds(): Bounds;

            /**
             * Method: initSingleTile
             *
             * Parameters:
             * bounds - {<OpenLayers.Bounds>}
             */
            private initSingleTile(bounds: Bounds);

            /**
             * Method: calculateGridLayout
             * Generate parameters for the grid layout.
             *
             * Parameters:
             * bounds - {<OpenLayers.Bound>|Object} OpenLayers.Bounds or an
             * object with a 'left' and 'top' properties.
             * origin - {<OpenLayers.LonLat>|Object} OpenLayers.LonLat or an
             * object with a 'lon' and 'lat' properties.
             * resolution - {Number}
             *
             * Returns:
             * {Object} Object containing properties tilelon, tilelat, startcol,
             * startrow
             */
            private calculateGridLayout(bounds: Bounds, origin: LonLat, resolution: number): { tilelon: number; tilelat: number; startcol: number; startrow: number };

            getImageSize(): Size;

            /**
             * Method: getTileOrigin
             * Determine the origin for aligning the grid of tiles. If a <tileOrigin>
             * property is supplied, that will be returned. Otherwise, the origin
             * will be derived from the layer's <maxExtent> property. In this case,
             * the tile origin will be the corner of the <maxExtent> given by the
             * <tileOriginCorner> property.
             *
             * Returns:
             * {<OpenLayers.LonLat>} The tile origin.
             */
            private getTileOrigin(): LonLat;

            /**
             * Method: getTileBoundsForGridIndex
             *
             * Parameters:
             * row - {Number} The row of the grid
             * col - {Number} The column of the grid
             *
             * Returns:
             * {<OpenLayers.Bounds>} The bounds for the tile at (row, col)
             */
            private getTileBoundsForGridIndex(row: number, col: number): Bounds;

            /**
             * Method: initGriddedTiles
             *
             * Parameters:
             * bounds - {<OpenLayers.Bounds>}
             */
            private initGriddedTiles(bounds: Bounds): void;

            /**
             * Method: getMaxExtent
             * Get this layer's maximum extent. (Implemented as a getter for
             * potential specific implementations in sub-classes.)
             *
             * Returns:
             * {<OpenLayers.Bounds>}
             */
            private getMaxExtent(): Bounds;

            /**
             * APIMethod: addTile
             * Create a tile, initialize it, and add it to the layer div.
             *
             * Parameters
             * bounds - {<OpenLayers.Bounds>}
             * position - {<OpenLayers.Pixel>}
             *
             * Returns:
             * {<OpenLayers.Tile>} The added OpenLayers.Tile
             */
            addTile(bounds: Bounds, position: number): Tile;

            /**
             * Method: addTileMonitoringHooks
             * This function takes a tile as input and adds the appropriate hooks to
             * the tile so that the layer can keep track of the loading tiles.
             *
             * Parameters:
             * tile - {<OpenLayers.Tile>}
             */
            private addTileMonitoringHooks(tile: Tile): void;

            /**
             * Method: removeTileMonitoringHooks
             * This function takes a tile as input and removes the tile hooks
             * that were added in addTileMonitoringHooks()
             *
             * Parameters:
             * tile - {<OpenLayers.Tile>}
             */
            private removeTileMonitoringHooks(tile: Tile): void;

            /**
             * Method: moveGriddedTiles
             */
            private moveGriddedTiles(): void;

            /**
             * Method: shiftRow
             * Shifty grid work
             *
             * Parameters:
             * prepend - {Boolean} if true, prepend to beginning.
             * if false, then append to end
             * tileSize - {Object} rendered tile size; object with w and h properties
             */
            private shiftRow(prepend: boolean, tileSize: { w: number; h: number }): void;

            /**
             * Method: shiftColumn
             * Shift grid work in the other dimension
             *
             * Parameters:
             * prepend - {Boolean} if true, prepend to beginning.
             * if false, then append to end
             * tileSize - {Object} rendered tile size; object with w and h properties
             */
            private shiftColumn(prepend: boolean, tileSize: { w: number; h: number }): void;

            /**
             * Method: removeExcessTiles
             * When the size of the map or the buffer changes, we may need to
             * remove some excess rows and columns.
             *
             * Parameters:
             * rows - {Integer} Maximum number of rows we want our grid to have.
             * columns - {Integer} Maximum number of columns we want our grid to have.
             */
            private removeExcessTiles(rows: number, columns: number): void;

            /**
             * Method: onMapResize
             * For singleTile layers, this will set a new tile size according to the
             * dimensions of the map pane.
             */
            onMapResize(): void;

            /**
             * APIMethod: getTileBounds
             * Returns The tile bounds for a layer given a pixel location.
             *
             * Parameters:
             * viewPortPx - {<OpenLayers.Pixel>} The location in the viewport.
             *
             * Returns:
             * {<OpenLayers.Bounds>} Bounds of the tile at the given pixel location.
             */
            getTileBounds(viewPortPx: Pixel): Bounds;
        }

        export class HTTPRequest extends Layer {
            /**
             * Constant: URL_HASH_FACTOR
             * {Float} Used to hash URL param strings for multi-WMS server selection.
             * Set to the Golden Ratio per Knuth's recommendation.
             */
            static URL_HASH_FACTOR: number;

            /**
             * Property: url
             * {Array(String) or String} This is either an array of url strings or
             * a single url string.
             */
            url: string[];

            /**
             * Property: params
             * {Object} Hashtable of key/value parameters
             */
            params: Object;

            /**
             * APIProperty: reproject
             * *Deprecated*. See http://docs.openlayers.org/library/spherical_mercator.html
             * for information on the replacement for this functionality.
             * {Boolean} Whether layer should reproject itself based on base layer
             * locations. This allows reprojection onto commercial layers.
             * Default is false: Most layers can't reproject, but layers
             * which can create non-square geographic pixels can, like WMS.
             */
            reproject: boolean;

            /**
             * Constructor: OpenLayers.Layer.HTTPRequest
             *
             * Parameters:
             * name - {String}
             * url - {Array(String) or String}
             * params - {Object}
             * options - {Object} Hashtable of extra options to tag onto the layer
             */
            constructor(name: string, url: string, params: Object, options: Object);
            constructor(name: string, url: string[], params: Object, options: Object);

            /**
             * APIMethod: destroy
             */
            destroy(): void;

            /**
             * APIMethod: clone
             *
             * Parameters:
             * obj - {Object}
             *
             * Returns:
             * {<OpenLayers.Layer.HTTPRequest>} An exact clone of this
             * <OpenLayers.Layer.HTTPRequest>
             */
            clone(obj?: Object): HTTPRequest;

            /**
             * APIMethod: setUrl
             *
             * Parameters:
             * newUrl - {String}
             */
            setUrl(newUrl: string): void;

            /**
             * APIMethod: mergeNewParams
             *
             * Parameters:
             * newParams - {Object}
             *
             * Returns:
             * redrawn: {Boolean} whether the layer was actually redrawn.
             */
            mergeNewParams(newParams: Object): boolean;

            /**
             * APIMethod: redraw
             * Redraws the layer. Returns true if the layer was redrawn, false if not.
             *
             * Parameters:
             * force - {Boolean} Force redraw by adding random parameter.
             *
             * Returns:
             * {Boolean} The layer was redrawn.
             */
            redraw(force?: boolean): boolean;

            /**
             * Method: selectUrl
             * selectUrl() implements the standard floating-point multiplicative
             * hash function described by Knuth, and hashes the contents of the
             * given param string into a float between 0 and 1. This float is then
             * scaled to the size of the provided urls array, and used to select
             * a URL.
             *
             * Parameters:
             * paramString - {String}
             * urls - {Array(String)}
             *
             * Returns:
             * {String} An entry from the urls array, deterministically selected based
             * on the paramString.
             */
            private selectUrl(paramString: string, urls: string[]): string;

            /**
             * Method: getFullRequestString
             * Combine url with layer's params and these newParams.
             *
             * does checking on the serverPath variable, allowing for cases when it
             * is supplied with trailing ? or &, as well as cases where not.
             *
             * return in formatted string like this:
             * "server?key1=value1&key2=value2&key3=value3"
             *
             * WARNING: The altUrl parameter is deprecated and will be removed in 3.0.
             *
             * Parameters:
             * newParams - {Object}
             * altUrl - {String} Use this as the url instead of the layer's url
             *
             * Returns:
             * {String}
             */
            getFullRequestString(newParams: Object, altUrl: string): string;
        }

        export class Image extends Layer {
            /**
             * Property: isBaseLayer
             * {Boolean} The layer is a base layer. Default is true. Set this property
             * in the layer options
             */
            isBaseLayer: boolean;

            /**
             * Property: url
             * {String} URL of the image to use
             */
            url: string;

            /**
             * Property: extent
             * {<OpenLayers.Bounds>} The image bounds in map units. This extent will
             * also be used as the default maxExtent for the layer. If you wish
             * to have a maxExtent that is different than the image extent, set the
             * maxExtent property of the options argument (as with any other layer).
             */
            extent: OpenLayers.Bounds;

            /**
             * Property: size
             * {<OpenLayers.Size>} The image size in pixels
             */
            size: OpenLayers.Size;

            /**
             * Property: tile
             * {<OpenLayers.Tile.Image>}
             */
            tile: OpenLayers.Tile.Image;

            /**
             * Property: aspectRatio
             * {Float} The ratio of height/width represented by a single pixel in the
             * graphic
             */
            aspectRatio: number;

            /**
             * Constructor: OpenLayers.Layer.Image
             * Create a new image layer
             *
             * Parameters:
             * name - {String} A name for the layer.
             * url - {String} Relative or absolute path to the image
             * extent - {<OpenLayers.Bounds>} The extent represented by the image
             * size - {<OpenLayers.Size>} The size (in pixels) of the image
             * options - {Object} Hashtable of extra options to tag onto the layer
             */
            constructor(name: string, url: string, extent: OpenLayers.Bounds, size: OpenLayers.Size, options: any);

            /**
             * Method: destroy
             * Destroy this layer
             */
            destroy(): void;

            /**
             * Method: clone
             * Create a clone of this layer
             *
             * Parameters:
             * obj - {Object} An optional layer (is this ever used?)
             *
             * Returns:
             * {<OpenLayers.Layer.Image>} An exact copy of this layer
             */
            clone(obj?: any): OpenLayers.Layer.Image;

            /**
             * APIMethod: setMap
             *
             * Parameters:
             * map - {<OpenLayers.Map>}
             */
            setMap(map: OpenLayers.Map): void;

            /**
             * Method: moveTo
             * Create the tile for the image or resize it for the new resolution
             *
             * Parameters:
             * bounds - {<OpenLayers.Bounds>}
             * zoomChanged - {Boolean}
             * dragging - {Boolean}
             */
            moveTo(bounds: OpenLayers.Bounds, zoomChanged: boolean, dragging: boolean): void;

            /**
             * Set the tile size based on the map size.
             */
            setTileSize(): void;

            /**
             * Method: addTileMonitoringHooks
             * This function takes a tile as input and adds the appropriate hooks to
             * the tile so that the layer can keep track of the loading tiles.
             *
             * Parameters:
             * tile - {<OpenLayers.Tile>}
             */
            addTileMonitoringHooks(tile: OpenLayers.Tile): void;

            /**
             * Method: removeTileMonitoringHooks
             * This function takes a tile as input and removes the tile hooks
             * that were added in <addTileMonitoringHooks>.
             *
             * Parameters:
             * tile - {<OpenLayers.Tile>}
             */
            removeTileMonitoringHooks(tile: OpenLayers.Tile): void;

            /**
             * APIMethod: setUrl
             *
             * Parameters:
             * newUrl - {String}
             */
            setUrl(newUrl: string): void;

            /**
             * APIMethod: getURL
             * The url we return is always the same (the image itself never changes)
             * so we can ignore the bounds parameter (it will always be the same,
             * anyways)
             *
             * Parameters:
             * bounds - {<OpenLayers.Bounds>}
             */
            getURL(bounds: OpenLayers.Bounds): string;

            CLASS_NAME: string;
        }
        export class KaMap {
            // TODO
        }
        export class KaMapCache {
            // TODO
        }
        export class MapGuide {
            // TODO
        }
        export class MapServer {
            // TODO
        }
        export class Markers {
            // TODO
        }

        export class OSM extends Layer.XYZ {
            /**
             * The layer name. Defaults to "OpenStreetMap" if the first
             * argument to the constructor is null or undefined.
             */
            name: string;

            /**
             * The tileset URL scheme. Defaults to
             * : http://[a|b|c].tile.openstreetmap.org/${z}/${x}/${y}.png
             * (the official OSM tileset) if the second argument to the constructor
             * is null or undefined. To use another tileset you can have something
             * like this:
             * new OpenLayers.Layer.OSM("OpenCycleMap",
             * ["http://a.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png",
             * "http://b.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png",
             * "http://c.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png"]);
             */
            url: string[];

            /**
             * The layer attribution.
             */
            attribution: string;

            sphericalMercator: boolean;

            wrapDateLine: boolean;

            /**
             * optional configuration options for <OpenLayers.Tile> instances
             * created by this Layer.
             */
            tileOptions: TileOptions;

            constructor();

            constructor(name: string, url: string, options: TileOptions);

            /**
             * Create a clone of this layer
             */
            clone(obj?: Object): Layer.OSM;

            static CLASS_NAME: string;
        }

        export class PointGrid {
            // TODO
        }
        export class PointTrack {
            // TODO
        }
        export class SphericalMercator {
            // TODO
        }
        export class TMS {
            // TODO
        }
        export class Text {
            // TODO
        }
        export class TileCache {
            // TODO
        }
        export class UTFGrid {
            // TODO
        }
        export class Vector {
            // TODO
        }

        export class WMS extends Layer.Grid {
            /**
             * Default is true for WMS layer
             */
            isBaseLayer: boolean;

            /**
             * Should the BBOX commas be encoded? The WMS spec says 'no',
             * but some services want it that way. Default false.
             */
            encodeBBOX: boolean;

            /**
             * If true, the image format will not be automagicaly switched
             * from image/jpeg to image/png or image/gif when using
             * TRANSPARENT=TRUE. Also isBaseLayer will not changed by the
             * constructor. Default false.
             */
            noMagic: boolean;

            /**
             * Keys in this object are EPSG codes for which the axis order
             * is to be reversed (yx instead of xy, LatLon instead of LonLat), with
             * true as value. This is only relevant for WMS versions >= 1.3.0, and
             * only if yx is not set in <OpenLayers.Projection.defaults> for the
             * used projection.
             */
            yx: Object;

            /**
             * Constructor: OpenLayers.Layer.WMS
             * Create a new WMS layer object
             *
             * Examples:
             *
             * The code below creates a simple WMS layer using the image/jpeg format.
             * (code)
             * var wms = new OpenLayers.Layer.WMS("NASA Global Mosaic",
             * "http://wms.jpl.nasa.gov/wms.cgi",
             * {layers: "modis,global_mosaic"});
             * (end)
             * Note the 3rd argument (params). Properties added to this object will be
             * added to the WMS GetMap requests used for this layer's tiles. The only
             * mandatory parameter is "layers". Other common WMS params include
             * "transparent", "styles" and "format". Note that the "srs" param will
             * always be ignored. Instead, it will be derived from the baseLayer's or
             * map's projection.
             *
             * The code below creates a transparent WMS layer with additional options.
             * (code)
             * var wms = new OpenLayers.Layer.WMS("NASA Global Mosaic",
             * "http://wms.jpl.nasa.gov/wms.cgi",
             * {
             * layers: "modis,global_mosaic",
             * transparent: true
             * }, {
             * opacity: 0.5,
             * singleTile: true
             * });
             * (end)
             * Note that by default, a WMS layer is configured as baseLayer. Setting
             * the "transparent" param to true will apply some magic (see <noMagic>).
             * The default image format changes from image/jpeg to image/png, and the
             * layer is not configured as baseLayer.
             *
             * Parameters:
             * name - {String} A name for the layer
             * url - {String} Base url for the WMS
             * (e.g. http://wms.jpl.nasa.gov/wms.cgi)
             * params - {Object} An object with key/value pairs representing the
             * GetMap query string parameters and parameter values.
             * options - {Object} Hashtable of extra options to tag onto the layer.
             * These options include all properties listed above, plus the ones
             * inherited from superclasses.
             */
            constructor(name: string, url: string, params: WMSGetMapParams, options: WMSOptions);

            /**
             * Create a clone of this layer
             */
            clone(): Layer.WMS;

            /**
             * Returns true if the axis order is reversed for the WMS version and
             * projection of the layer.
             */
            reverseAxisOrder(): boolean;

            /**
             * Return a GetMap query string for this layer
             */
            getURL(bounds: Bounds): string;

            /**
             * Catch changeParams and uppercase the new params to be merged in
             * before calling changeParams on the super class.
             * Once params have been changed, the tiles will be reloaded with
             * the new parameters.
             */
            mergeNewParams(newParams: Object): boolean;

            /**
             * Combine the layer's url with its params and these newParams.
             *
             * Add the SRS parameter from projection -- this is probably
             * more eloquently done via a setProjection() method, but this
             * works for now and always.
             */
            getFullRequestString(newParams: Object, altUrl: string): string;

            static CLASS_NAME: string;
        }

        export class WMTS {
            // TODO
        }

        export class WorldWind {
            // TODO
        }

        export class XYZ extends Layer.Grid {
            /**
             * APIProperty: isBaseLayer
             * Default is true, as this is designed to be a base tile source.
             */
            isBaseLayer: boolean;

            /**
             * APIProperty: sphericalMercator
             * Whether the tile extents should be set to the defaults for
             * spherical mercator. Useful for things like OpenStreetMap.
             * Default is false, except for the OSM subclass.
             */
            sphericalMercator: boolean;

            /**
             * APIProperty: zoomOffset
             * {Number} If your cache has more zoom levels than you want to provide
             * access to with this layer, supply a zoomOffset. This zoom offset
             * is added to the current map zoom level to determine the level
             * for a requested tile. For example, if you supply a zoomOffset
             * of 3, when the map is at the zoom 0, tiles will be requested from
             * level 3 of your cache. Default is 0 (assumes cache level and map
             * zoom are equivalent). Using <zoomOffset> is an alternative to
             * setting <serverResolutions> if you only want to expose a subset
             * of the server resolutions.
             */
            zoomOffset: number;

            /**
             * APIProperty: serverResolutions
             * {Array} A list of all resolutions available on the server. Only set this
             * property if the map resolutions differ from the server. This
             * property serves two purposes. (a) <serverResolutions> can include
             * resolutions that the server supports and that you don't want to
             * provide with this layer; you can also look at <zoomOffset>, which is
             * an alternative to <serverResolutions> for that specific purpose.
             * (b) The map can work with resolutions that aren't supported by
             * the server, i.e. that aren't in <serverResolutions>. When the
             * map is displayed in such a resolution data for the closest
             * server-supported resolution is loaded and the layer div is
             * stretched as necessary.
             */
            serverResolutions: number[];

            /**
             * Constructor: OpenLayers.Layer.XYZ
             *
             * Parameters:
             * name - {String}
             * url - {String}
             * options - {Object} Hashtable of extra options to tag onto the layer
             */
            constructor(name: string, url: string, options?: any);

            /**
             * APIMethod: clone
             * Create a clone of this layer
             *
             * Parameters:
             * obj - {Object} Is this ever used?
             *
             * Returns:
             * {<OpenLayers.Layer.XYZ>} An exact clone of this OpenLayers.Layer.XYZ
             */
            clone(obj?: any): Layer.XYZ;

            /**
             * Method: getURL
             *
             * Parameters:
             * bounds - {<OpenLayers.Bounds>}
             *
             * Returns:
             * {String} A string with the layer's url and parameters and also the
             * passed-in bounds and appropriate tile size specified as
             * parameters
             */
            private getURL(bounds: Bounds): string;

            /**
             * Method: getXYZ
             * Calculates x, y and z for the given bounds.
             *
             * Parameters:
             * bounds - {<OpenLayers.Bounds>}
             *
             * Returns:
             * {Object} - an object with x, y and z properties.
             */
            private getXYZ(bounds: Bounds): { x: number; y: number; z: number };

            /* APIMethod: setMap
             * When the layer is added to a map, then we can fetch our origin
             * (if we don't have one.)
             *
             * Parameters:
             * map - {<OpenLayers.Map>}
             */
            setMap(map: Map): void;
        }

        export class Zoomify {
            // TODO
        }

        namespace Google {
            export class v3 {
                // TODO
            }
        }

        namespace Vector {
            export class RootContainer {
                // TODO
            }
        }
    }

    namespace Marker {
        export class Box {
            // TODO
        }
    }

    namespace Popup {
        export class Anchored {
            // TODO
        }
        export class Framed {
            // TODO
        }
        export class FramedCloud {
            // TODO
        }
    }

    namespace Protocol {
        export class CSW {
            // TODO
        }
        export class HTTP {
            // TODO
        }
        export class SOS {
            // TODO
        }
        export class Script {
            // TODO
        }
        export class WFS {
            // TODO
        }

        namespace CSW {
            export class v2_0_2 {
                // TODO
            }
        }

        namespace SOS {
            export class v1_0_0 {
                // TODO
            }
        }

        namespace WFS {
            export class v2_0_0 {
                // TODO
            }
        }
    }

    namespace Renderer {
        export class Canvas {
            // TODO
        }
        export class Elements {
            // TODO
        }
        export class SVG {
            // TODO
        }
        export class VML {
            // TODO
        }
    }

    namespace Request {
        export class XMLHttpRequest {
            // TODO
        }
    }

    namespace Strategy {
        export class BBOX {
            // TODO
        }
        export class Cluster {
            // TODO
        }
        export class Filter {
            // TODO
        }
        export class Fixed {
            // TODO
        }
        export class Paging {
            // TODO
        }
        export class Refresh {
            // TODO
        }
        export class Save {
            // TODO
        }
    }

    namespace Symbolizer {
        export class Line {
            // TODO
        }
        export class Point {
            // TODO
        }
        export class Polygon {
            // TODO
        }
        export class Raster {
            // TODO
        }
        export class Text {
            // TODO
        }
    }

    namespace Tile {
        export class Image {
            // TODO
        }
        export class UTFGrid {
            // TODO
        }

        namespace Image {
            export class IFrame {
                // TODO
            }
        }
    }

    namespace Util {
        export class vendorPrefix {
            // TODO
        }
    }
}

