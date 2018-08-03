
declare namespace atlas {

    /**
     * The control for a visual and interactive web map.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.map?view=azure-iot-typescript-latest
     */
    export class Map {
        constructor(container: string, options: atlas.Models.ServiceOptions & atlas.Models.CameraOptions & atlas.Models.StyleOptions & atlas.Models.UserInteractionOptions);

        /**
         * Add a collection of points to a layer of the map as circles. The layer and its options can be specified through a CircleLayerOptions object. Options for the layer can only be specified upon the layer's initial creation. Map must be fully loaded before the circles can be added. Use the addEventListener method with event type 'load'.
         * @param circles The circles to add.
         * @param options The layer options for the circles.
         */
        addCircles(circles: Array<atlas.data.Feature<atlas.data.Point, atlas.Models.CircleProperties>>, options?: atlas.Models.CircleLayerOptions);

        /**
         * Add a control to the map.
         * @param control The control to add.
         * @param options The options for the added control.
         */
        addControl(control: atlas.Models.Control, options?: atlas.Models.ControlOptions);

        /**
         * Add an event listener to the map.
         * @param type 'click': A pointing device is pressed and released at the same point on the map.
         * 'dblclick': A pointing device is clicked twice on the map.
         * 'mousemove': A pointing device is moved within the map.
         * 'mouseup': A pointing device is released within the map.
         * 'mousedown': A pointing device is pressed within the map.
         * 'mouseout': A pointing device leaves the map's canvas.
         * 'touchstart': A touch point is placed on the touch surface.
         * 'touchend': A touch point is removed from the touch surface.
         * 'touchmove': A touch point is moved along the touch surface.
         * 'drag': An element is dragged.
         * 'dragstart': The user starts dragging an element.
         * 'dragend': A drag operation is ended.
         * 'zoomstart': Just before the map transitions from one zoom level to another.
         * 'zoom': During the map transitions from one zoom level to another.
         * 'zoomend': After the map completes a transition from one zoom level to another.
         * 'rotatestart': When a "drag to rotate" starts.
         * 'rotate': During a "drag to rotate" interaction.
         * 'rotateend': After When a "drag to rotate" ends.
         * 'pitchstart': When the map's pitch (tilt) starts to change.
         * 'pitch': Whenever the map's pitch (tilt) changes.
         * 'pitchend': After the map's pitch (tilt) completes the change.
         * 'resize': The document view has been resized.
         * 'load': Progression has been successful.
         * @param callback The callback to fire when the event occurs.
         */
        addEventListener(type: string, callback: any);

        /**
         * Add an event listener to a layer of the map. Event listeners cannot be added to the default "base", "transit" and "labels" layers of the map.
         * @param type 'click': A pointing device is pressed and released at the same point on the map.
         * 'dblclick': A pointing device is clicked twice on the map.
         * 'mousemove': A pointing device is moved within the map.
         * 'mouseup': A pointing device is released within the map.
         * 'mousedown': A pointing device is pressed within the map.
         * 'mouseenter': A pointing device is moved onto a specific layer that has the listener attached.
         * 'mouseleave': A pointing device is moved off a specific layer that has the listener attached.
         * 'mouseover': A pointing device is moved within the map.
         * 'touchstart': A touch point is placed on the touch surface.
         * 'touchend': A touch point is removed from the touch surface.
         * @param layer The layer of the map.
         * @param callback The callback to fire when the event occurs.
         */
        addEventListener(type: string, layer: string, callback: any);

        /**
         * 
         * @param element The HTMLElement to add.
         * @param position The position to place the element.
         */
        addHtml(element: HTMLElement, position: atlas.data.Position): string;

        /**
         * Add an icon to the map to use for pins. Map and image must be fully loaded before the icon can be added. Use the addEventListener method with event type 'load'.
         * @param id The identifier of the icon.
         * @param icon The icon image.
         */
        addIcon(id: string, icon: HTMLImageElement);


        /**
         * 
         * @param linestrings The linestrings to add.
         * @param options The layer options for the linestrings.
         */
        addLinestrings(linestrings: Array<atlas.data.Feature<atlas.data.LineString | atlas.data.MultiLineString, atlas.Models.LinestringProperties>>, options?: atlas.Models.LinestringLayerOptions);

        /**
         * Add a collection of points to a layer of the map as pins. The layer and its options can be specified through a PinLayerOptions object. Options for the layer can only be specified upon the layer's initial creation. Map must be fully loaded before the pins can be added. Use the addEventListener method with event type 'load'.
         * @param pins The points to add.
         * @param options The layer options for the pins.
         */
        addPins(pins: Array<atlas.data.Feature<atlas.data.Point, atlas.Models.PinProperties>>, options?: atlas.Models.PinLayerOptions);

        /**
         * 
         * @param polygons The polygons to add.
         * @param options The layer options for the polygons.
         */
        addPolygons(polygons: Array<atlas.data.Feature<atlas.data.Polygon | atlas.data.MultiPolygon, atlas.Models.PolygonProperties>>, options?: atlas.Models.PolygonLayerOptions)

        /**
         * Adds a raster layer to the map. The layer and its options can be specified through a RasterLayerOptions object. Options for the layer can only be specified upon the layer's initial creation.
         * @param tileSources A list of endpoints specified as strings from which raster images can be requested. The endpoints can be parameterized with the tags '{z}', '{x}' and '{y}' to specify the zoom, x-index, and y-index of the needed tile respectively. The map control will request and place the tiles that are contained in the map's viewport.
         * @param options The options for the raster layer.
         */
        addRaster(tileSources: string[], options?: atlas.Models.RasterLayerOptions);

        /**
         * Returns the camera's current properties.
         */
        getCamera(): atlas.Models.CameraOptions & atlas.Models.CameraBoundsOptions;

        /**
         * Returns the HTMLCanvasElement that the map is drawn to.
         */
        getCanvas(): HTMLCanvasElement;

        /**
         * Returns the HTMLElement that contains the map's HTMLCanvasElement. The map's events (e.g. panning and zooming) are attached to this element.
         */
        getCanvasContainer(): HTMLElement;

        /**
         * Returns a list of the map's layers from bottom to top.
         */
        getLayers(): string[];

        /**
         * Returns the HTMLElement that contains the map.
         */
        getMapContainer(): HTMLElement;

        /**
         * Returns the service options with which the map control was initialized.
         */
        getServiceOptions(): atlas.Models.ServiceOptions;

        /**
         * Returns the map control's current style settings.
         */
        getStyle(): atlas.Models.StyleOptions;

        /**
         * Return the map control's current traffic settings.
         */
        getTraffic(): atlas.Models.TrafficOptions;

        /**
         * Return the map control's current user interaction handler settings.
         */
        getUserInteraction(): atlas.Models.UserInteractionOptions;

        /**
         * Clean up the map's resources. Map will not function correctly after calling this method.
         */
        remove();

        /**
         * Remove a control from the map.
         * @param control The control to remove.
         */
        removeControl(control: atlas.Models.Control);

        /**
         * Remove an event listener from the map.
         * @param type The event type.
         * @param callback The callback of the event listener.
         */
        removeEventListener(type: string, callback: any);

        /**
         * Remove an event listener from a layer of the map.
         * @param type The event type.
         * @param layerThe layer of the map.
         * @param callback The callback of the event listener.
         */
        removeEventListener(type: string, layer: string, callback: any);

        /**
         * Removes a custom HTMLElement from the map.
         * @param elementId Removes a custom HTMLElement from the map.
         */
        removeHtml(elementId: string);

        /**
         * Removes a collection of layers from the map.
         * @param layerNames An array of layer names to remove from the map.
         */
        removeLayers(layerNames: string[]);

        /**
         * Resize the map according to the dimensions of its container element.
         */
        resize();

        /**
         * Set the camera of the map control with an animated transition. Any options not specified will default to their current values.
         * @param options The options for setting the map's camera and for the animation of any view change.
         */
        setCamera(options?: atlas.Models.CameraOptions & atlas.Models.AnimationOptions);

        /**
         * Set the camera bounds of the map control.
         * @param options The options for setting the map's camera bounds.
         */
        setCameraBounds(options?: atlas.Models.CameraBoundsOptions);

        /**
         * Set the map control's style options. Any options not specified will default to their current values.
         * @param options The options for setting the style of the map control.
         */
        setStyle(options?: atlas.Models.StyleOptions);

        /**
         * Set the traffic options for the map. Any options not specified will default to their current values
         * @param options The options for defining the map's traffic display.
         */
        setTraffic(options?: atlas.Models.TrafficOptions);

        /**
         * Set the map control's user interaction handlers. Any options not specified will default to their current values.
         * @param options The options for enabling/disabling the user interaction handlers.
         */
        setUserInteraction(options?: atlas.Models.UserInteractionOptions);

    }

    /**
     * An information window anchored at a specified position on a map.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.popup?view=azure-iot-typescript-latest
     */
    export class Popup{

        /**
         * Constructs a Popup object and initializes it with the specified options.
         * @param options The options for the popup.
         */
        constructor (options?: atlas.Models.PopupOptions)

        /**
         * Attaches the popup to the HTML document in a hidden state.
         * @param map map
         */
        attach: (map: atlas.Map) => void;

        /**
         * Closes the popup on the map. The popup remains attached to the HTML document.
         */
        close: () => void;

        /**
         * Opens the popup on the passed in map.
         */
        open: (map: Map) => void;

        /**
         * Closes the popup on the map and removes it from the HTML document.
         */
        remove: () => void;

        /**
         * Returns the options for the popup.
         */
        getPopupOptions(): atlas.Models.PopupOptions;

        /**
         * Sets the options for the popup.
         * @param options The options for the popup.
         */
        setPopupOptions(options?: atlas.Models.PopupOptions);
    }
}

declare namespace atlas.Models {

    /**
     * Positions where the control can be placed on the map.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.controlposition?view=azure-iot-typescript-latest
    */
    export enum ControlPosition {
        BottomLeft,

        BottomRight,

        NonFixed,

        TopLeft,

        TopRight
    }

    /**
     * Available styles for a Control.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.controlstyle?view=azure-iot-typescript-latest
     */
    export enum ControlStyle {
        dark,

        light
    }

    /**
     * The options for a CompassControl object.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.compasscontroloptions?view=azure-iot-typescript-latest
     */
    export class CompassControlOptions {

        /**
         * The angle that the map will rotate with each click of the control.
         */
        rotationDegreesDelta: number;

        /**
         * The style of the control.
         */
        style: ControlStyle;
    }

    /**
     * The options for a PitchControl object.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.pitchcontroloptions?view=azure-iot-typescript-latest
     */
    export class PitchControlOptions {
        /**
         * The angle that the map will tilt with each click of the control.
         */
        pitchDegreesDelta: number;

        /**
         * The style of the control.
         */
        style: ControlStyle;
    }

    /**
     * The options for a StyleControl object.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.stylecontroloptions?view=azure-iot-typescript-latest
     */
    export class StyleControlOptions {
        /**
         * The style of the control.
         */
        style: ControlStyle
    }

    /**
     * The options for a ZoomControl object.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.zoomcontroloptions?view=azure-iot-typescript-latest
     */
    export class ZoomControlOptions {
        /**
         * The style of the control.
         */
        style: ControlStyle;

        /**
         * The extent to which the map will zoom with each click of the control.
         */
        zoomDelta: number;
    }

    /**
     * The options for animating changes to the map control's camera.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.animationoptions?view=azure-iot-typescript-latest
     */
    export interface AnimationOptions {
        /**
         * The duration of the animation in milliseconds.
         */
        duration?: number;

        /**
         * The type of animation.
         * "jump" is an immediate change.
         * "ease" is a gradual change of the camera's settings.
         * "fly" is a gradual change of the camera's settings following an arc resembling flight.
         */
        type?: "jump" | "ease" | "fly";
    }

    /**
     * The options for setting the bounds of the map control's camera.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.cameraboundsoptions?view=azure-iot-typescript-latest
     */
    export interface CameraBoundsOptions {
        /**
         * The bounds of the map control's camera.
         */
        bounds?: atlas.data.BoundingBox;

        /**
         * Padding in pixels for the given bounds. 
         * Either specify a number for the padding of all sides of the map or specify each side as an array of 
         * [top, right, bottom, left].
         * Property value: number | number[]
         */
        padding?: number | number[];

    }

    /**
     * The options for setting the map control's camera.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.cameraoptions?view=azure-iot-typescript-latest
     */
    export interface CameraOptions {

        /**
         * The bearing of the camera.
         */
        bearing?: number;

        /**
         * The center of the camera.
         */
        center?: data.Position;

        /**
         * The maximum possible zoom of the camera.
         */
        maxZoom?: number;

        /**
         * The minimum possible zoom of the camera.
         */
        minZoom?: number;

        /**
         * The pitch of the camera.
         */
        pitch?: number;

        /**
         * The zoom of the camera
         */
        zoom?: number;
    }

    /**
     * The options for a circle layer.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.circlelayeroptions?view=azure-iot-typescript-latest
     */
    export interface CircleLayerOptions {
        /**
         * The fill color of the circles for the layer. Is used as the default if a fill color is not specified for a circle.
         */
        color?: string;

        /**
         * The name of the layer.
         */
        name?: string;

        /**
         * The outline color of the circles for the layer. Is used as the default if an outline color is not specified for a circle.
         */
        outlineColor?: string;

        /**
         * The outline stroke width of the circles for the layer. Is used as the default if outline width is not specified for a circle.
         */
        outlineWidth?: number;

        /**
         * The radius in pixels of the circles for the layer. Is used as the default if a radius is not specified for a circle.
         */
        radius?: number;
    }

    /**
     * Individual properties that can be specified for a circle feature.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.circleproperties?view=azure-iot-typescript-latest
     */
    export interface CircleProperties {
        /**
         * The fill color of the circle.
         */
        color?: string;

        /**
         * The outline color of the circle.
         */
        outlineColor?: string;

        /**
         * The outline stroke width of the circle.
         */
        outlineWidth?: number;

        /**
         * The radius in pixels of the circle.
         */
        radius?: number;
    }

    /**
     * An interface for defining a control of the map.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.control?view=azure-iot-typescript-latest
     */
    export interface Control {
        /**
         * Initialization method for the control which is called when added to the map
         * @param map The map that the control will be added to.
         * @param options The ControlOptions for this control.
         */
        onAdd(map: Map, options?: ControlOptions): void;

        /**
         * Method that is called when the control is removed from the map. Should perform any necessary cleanup for the control.
         */
        onRemove(): void;
    }

    /**
     * The options for adding a control to the map.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.controloptions?view=azure-iot-typescript-latest
     */
    export interface ControlOptions {
        /**
         * The position the control will be placed on the map. If not specified, the control will be located at the default position it defines.
         */
        position?: ControlPosition;
    }

    /**
     * The options for a layer of the map.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.layeroptions?view=azure-iot-typescript-latest
     */
    export interface LayerOptions {

        /**
         * Whether to defer the layer's updates to the map until a subsequent layer's update or an update to the map's style options.
         */
        defer?: boolean;

        /**
         * The maximum zoom at which the layer will display inclusive.
         */
        maxZoom?: number;

        /**
         * The minimum zoom at which the layer will display inclusive.
         */
        minZoom?: number;

        /**
         * The name of the layer.
         */
        name?: string;

        /**
         * The opacity of the layer.
         */
        opacity?: number;

        /**
         * Whether to overwrite previous data for the layer.
         */
        overwrite?: boolean;
    }

    /**
     * The options for a linestring layer.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.linestringlayeroptions?view=azure-iot-typescript-latest
     */
    export interface LinestringLayerOptions {
        /**
         * The type of cap to use for the ends of the linestrings:
         * "butt" is a squared ending that is drawn to the exact endpoint of the line.
         * "round" is a circular ending that is drawn past the exact endpoint with a radius of half the linestring's width.
         * "square" is a squared ending that is drawn past the exact endpoint by half the linestring's width.
         */
        cap?: "butt" | "round" | "square";

        /**
         * The color of the lines for the layer. Is used as the default if a specific color is not specified for a line.
         */
        color?: string;

        /**
         * The type of join to use for the linestrings:
         * "bevel" is a squared join that cuts a corner flat at half the linestring's width from the vertex.
         * "round" is a circular join that rounds a corner with a radius of half the linestring's width from the vertex.
         * "miter" is a sharp join that extends the segments of the linestring past the vertex until they intersect.
         */
        join?: "bevel" | "round" | "miter";

        /**
         * The name of the layer.
         */
        name?: string;

        /**
         * The width of the lines for the layer. Is used as the default if a specific width is not specified for a line.
         */
        width?: number;
    }

    /**
     * Individual properties that can be specified for a linstring feature.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.linestringproperties?view=azure-iot-typescript-latest
     */
    export interface LinestringProperties {
        /**
         * The color of the linestring.
         */
        color?: string;

        /**
         * The width of the linestring.
         */
        width?: number;
    }

    /**
     * A MapEventData object is passed to the callback function when a map event is fired.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.mapeventdata?view=azure-iot-typescript-latest
     */
    export interface MapEventData {

        /**
         * The pixel coordinate where the event occurred as an array of [x, y].
         */
        coordinate?: number[];

        /**
         * The features associated with the event.
         */
        features?: Array<atlas.data.Feature<atlas.data.Geometry, any>>;

        /**
         * The original event that was fired.
         */
        originalEvent: Event;

        /**
         * The geographic position on the map where the event occurred.
         */
        position?: Position;

        /**
         * The event type.
         */
        type: string;

    }

    /**
     * The options for a pin layer.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.pinlayeroptions?view=azure-iot-typescript-latest
     */
    export interface PinLayerOptions {

        /**
         * Whether the icons should cluster when they collide on the map, or stay separate.
         */
        cluster?: boolean;

        /**
         * The icon to use to represent a cluster.
         */
        clusterIcon?: string;

        /**
         * The color of the title text.
         */
        fontColor?: string;

        /**
         * The size of the title text.
         */
        fontSize?: number;

        /**
         * The icon of the pins for the layer. Is used as the default if an icon is not specified for a pin.
         * "pin-darkblue" | "pin-blue" | "pin-red" | "pin-round-darkblue" | "pin-round-blue" | "pin-round-red" | "none"
         */
        icon?: "pin-darkblue" | "pin-blue" | "pin-red" | "pin-round-darkblue" | "pin-round-blue" | "pin-round-red" | "none";

        /**
         * The factor by which the icon should be scaled. A value of 1 is the original size; a value of 2 will double the size of the icon.
         */
        iconSize?: number;

        /**
         * The name of the layer.
         */
        name?: string;

        /**
         * The font for the title of the pin. "SegoeUi-Bold" | "SegoeUi-Regular" | "StandardFont-Bold" | "StandardFont-Regular"
         */
        textFont?: "SegoeUi-Bold" | "SegoeUi-Regular" | "StandardFont-Bold" | "StandardFont-Regular";

        /**
         * An array of [pixelsRight, pixelsDown] for how many pixels to the right and down the title text should be offset. Negative numbers can be used to offset the title left and up.
         */
        textOffset?: number[];

        /**
         * The title of the pins for the layer. Is used as the default if a title is not specified for a pin.
         */
        title?: string;
    }

    /**
     * Individual properties that can be specified for a point feature.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.pinproperties?view=azure-iot-typescript-latest
     */
    export interface PinProperties {
        /**
         * The icon to display for the point. "pin-darkblue" | "pin-blue" | "pin-red" | "pin-round-darkblue" | "pin-round-blue" | "pin-round-red" | "none" | string
         */
        icon?: "pin-darkblue" | "pin-blue" | "pin-red" | "pin-round-darkblue" | "pin-round-blue" | "pin-round-red" | "none" | string

        /**
         * The title to display for the point.
         */
        title?: string;
    }

    /**
     * The options for a polygon layer.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.polygonlayeroptions?view=azure-iot-typescript-latest
     */
    export interface PolygonLayerOptions {
        /**
         * The fill color of the polygons for the layer. Is used as the default if a fill color is not specified for a polygon.
         */
        color?: string;

        /**
         * The name of the layer.
         */
        name?: string;

        /**
         * The outline color of the polygons for the layer. Is used as the default if an outline color is not specified for a polygon.
         */
        outlineColor?: string;
    }

    /**
     * Individual properties that can be specified for a polygon feature.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.polygonproperties?view=azure-iot-typescript-latest
     */
    export interface PolygonProperties {
        /**
         * The fill color of the polygon.
         */
        color?: string;

        /**
         * The outline color of the polygon.
         */
        outlineColor?: string;
    }
    /**
     * The options for a popup.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.popupoptions?view=azure-iot-typescript-latest
     */
    export interface PopupOptions {
        /**
         * The content to display within the popup.
         */
        content?: HTMLElement;

        /**
         * An array of [pixelsRight, pixelsDown] for how many pixels to the right and down the anchor of the popup should be offset. Negative numbers can be used to offset the popup left and up.
         */
        pixelOffset?: number[];

        /**
         * The position on the map where the popup should be anchored.
         */
        position?: Position;
    }

    /**
     * The options for a raster layer.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.rasterlayeroptions?view=azure-iot-typescript-latest
     */
    export interface RasterLayerOptions {

        /**
         * The options for a raster layer.
         */
        name?: string;
    }


    /**
    * Global properties used in all atlas service requests.
    * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.serviceoptions?view=azure-iot-typescript-latest
    */
    export interface ServiceOptions {

        /**
         * Disable telemetry collection
         */
        "disable-telemetry": boolean;

        /**
         * The session id to pass with requests.
         */
        "session-id"?: string;

        /**
         * The customer subscription key used to authorize requests.
         */
        "subscription-key": string;
    }

    /**
  * The options for the map's style.
  * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.styleoptions?view=azure-iot-typescript-latest
  */
    export interface StyleOptions {
        /**
         * The language of the map labels.
         */
        language?: string;

        /**
         * The style of the map tiles.
         */
        style?: "road";

        /**
         * The geopolitical view of the map.
         * Unified: The unified view of the world.
         */
        view?: "Unified";
    }

    /**
     * 
     */
    export interface TrafficOptions {

        /**
         * The type of traffic flow to display:
         * "none" is to display no traffic flow data
         * "relative" is the speed of the road relative to free-flow
         * "absolute" is the absolute speed of the road
         * "relative-delay" displays relative speed only where they differ from free-flow; false to stop displaying the traffic flow.
         */
        flow?: "none" | "relative" | "absolute" | "relative-delay";

        /**
         * Whether to display incidents on the map.
         */
        incidents?: boolean;
    }

    /**
     * The options for enabling/disabling user interaction with the map.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/models.userinteractionoptions?view=azure-iot-typescript-latest
     */
    export interface UserInteractionOptions {

        /**
         * Whether the Shift + left click and drag will draw a zoom box.
         */
        boxZoomInteraction?: boolean;

        /**
         * Whether double left click will zoom the map inwards.
         */
        dblClickZoomInteraction?: boolean;


        /**
         * Whether left click and drag will pan the map.
         */
        dragPanInteraction?: boolean;

        /**
         * Whether right click and drag will rotate and pitch the map
         */
        dragRotateInteraction?: boolean;

        /**
         * Whether the map is interactive or static. If false, all user interaction is disabled. If true, only selected user interactions will enabled.
         */
        interactive?: boolean;

        /**
         * Whether the keyboard interactions are enabled.
         */
        keyboardInteraction?: boolean;


        /**
         * Whether the map should zoom on scroll input.
         */
        scrollZoomInteraction?: boolean;

        /**
         * Whether touch interactions are enabled for touch devices.
         */
        touchInteraction?: boolean;

    }
}

declare namespace atlas.data {

    /**
     * An array that defines a shape whose edges follow lines of constant longitude, latitude, and elevation. Array should contain 4 elements. [minLon, minLat, maxLon, maxLat]
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.data.boundingbox?view=azure-iot-typescript-latest
     */
    export class BoundingBox{
        /**
         * Constructs a BoundingBox.
         * @param southwestPosition The southwestern most position of the bounding box.
         * @param northeastPosition The northeastern most position of the bounding box.
         */
        constructor (southwestPosition: Position, northeastPosition: Position);

        static Array: ArrayConstructor;
    }

    /**
     * A GeoJSON Feature object - a JSON object representing a spatially bounded entity. The full description is detailed in RFC 7946.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.data.feature?view=azure-iot-typescript-latest
     */
    export class Feature<G, P>{
        /**
         * Constructs a Feature.
         * @param geometry The geometry of the feature.
         * @param properties The properties of the feature.
         * @param id The id of the feature.
         */
        constructor(geometry: G, properties?: P, id?: string);

        /**
         * The geometry of the feature.
         */
        geometry: Geometry;

        /**
         * The id of the feature.
         */
        id?: string;

        /**
         * The properties of the feature.
         */
        properties: any;

        /**
         * A GeoJSON type descriptor with value "Feature".
         */
        type: "Feature";

        /**
         * A static GeoJSON type descriptor for the Feature class to be used in runtime comparisons.
         */
        static TYPE: string;
    }

    /**
     * A GeoJSON FeatureCollection object - a JSON object that contains a collection of GeoJSON features. The full description is detailed in RFC 7946.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.data.featurecollection?view=azure-iot-typescript-latest
     */
    export class FeatureCollection{
        /**
         * 
         * @param features The collection of features that make up the feature collection.
         */
        constructor(features: Feature<Geometry, any>[]);

        /**
         * The collection of GeoJSON features contained in the feature collection.
         */
        features: Array<Feature<Geometry, any>>;

        /**
         * A GeoJSON type descriptor with value "FeatureCollection".
         */
        type: "FeatureCollection";


        /**
         * A static GeoJSON type descriptor for the FeatureCollection class to be used in runtime comparisons.
         */
        static TYPE: string;
    }

    /**
     * A base Geometry object in which all geometyr shapes extend; Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon, GeometryCollection
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.data.geometry?view=azure-iot-typescript-latest
     */
    export class Geometry{

        /**
         * A GeoJSON type descriptor for the geometry.
         */
        type: "Point" | "LineString" | "MultiPoint" | "Polygon" | "MultiLineString" | "MultiPolygon" | "GeometryCollection";

        /**
         * A static GeoJSON type descriptor for the geometry.
         */
        static TYPE: string;
    }

    /**
     * A GeoJSON GeometryCollection object - a JSON object that contains a collection of a GeoJSON Geometry objects. The full description is detailed in RFC 7946.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.data.geometrycollection?view=azure-iot-typescript-latest
     */
    export class GeometryCollection{
        /**
         * Constructs a GeometryCollection.
         * @param geometries The collection of geometries that make up the geometry collection.
         */
        constructor(geometries: Geometry[]);

        /**
         * The collection of GeoJSON geometries contained in the geometry collection.
         */
        geometries: Geometry[];
    }

    /**
     * A GeoJSON LineString object - a JSON object that represents a geographic curve. The full description is detailed in RFC 7946.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.data.linestring?view=azure-iot-typescript-latest
     */
    export class LineString{
        /**
         * Constructs a LineString.
         * @param coordinates The bounding box of the geometry.
         * @param bbox The ordered list of positions defining the linestring.
         */
        constructor(coordinates: Position[], bbox?: BoundingBox)

        /**
         * The bounding box of the geometry.
         */
        bbox?: BoundingBox;

        /**
         * The ordered list of positions defining the linestring.
         */
        coordinates: Position[];
    }

    /**
     * A GeoJSON MultiLineString object - a JSON object that represents multiple geographic curves. The full description is detailed in RFC 7946.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.data.multilinestring?view=azure-iot-typescript-latest
     */
    export class MultiLineString{
        /**
         * Constructs a MultiLineString.
         * @param coordinates The bounding box of the geometry.
         * @param bbox 	The array of LineString coordinate arrays defining the multilinestring.
         */
        constructor(coordinates: Position[][], bbox?: BoundingBox);

        /**
         * The bounding box of the geometry.
         */
        bbox?: BoundingBox;

        /**
         * The array of LineString coordinate arrays defining the multilinestring.
         */
        coordinates: Position[][];
    }

    /**
     * A GeoJSON MultiPoint object - a JSON object that represents multiple geographic positions. The full description is detailed in RFC 7946.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.data.multipoint?view=azure-iot-typescript-latest
     */
    export class MultiPoint{
        /**
         * Constructs a MultiPoint.
         * @param coordinates The bounding box of the geometry.
         * @param bbox The array of multiple positions defining the multipoint.
         */
        constructor(coordinates: Position[], bbox?: BoundingBox);

        /**
         * The bounding box of the geometry.
         */
        bbox?: BoundingBox;

        /**
         * The array of multiple positions defining the multipoint.
         */
        coordinates: Position[];

    }

    /**
     * A GeoJSON MultiPolygon object - a JSON object that represents multiple geographic polygons. The full description is detailed in RFC 7946.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.data.multipolygon?view=azure-iot-typescript-latest
     */
    export class MultiPolygon{
        /**
         * @param coordinates The array of polygon coordinate arrays defining the multipolygon.
         * @param bbox The bounding box of the multipolygon.
         */
        constructor(coordinates: Position[][][], bbox?: BoundingBox);

        /**
         * The bounding box of the geometry.
         */
        bbox?: BoundingBox;

        /**
         * The array of polygon coordinate arrays defining the multipolygon
         */
        coordinates: Position[][][];
    }

    /**
     * A GeoJSON Point object - a JSON object that represents a geographic position. The full description is detailed in RFC 7946.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.data.point?view=azure-iot-typescript-latest
     */
    export class Point{
        /**
         * Constructs a Point.
         * @param coordinates The position defining the point.
         */
        constructor(coordinates: Position);

        /**
         * The position defining the point.
         */
        coordinates: Position;
    }

    /**
     * A GeoJSON Polygon object - a JSON object that represents a geographic polygon. The full description is detailed in RFC 7946.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.data.polygon?view=azure-iot-typescript-latest
     */
    export class Polygon{
        /**
         * Constructs a Polygon.
         * @param coordinates The array of linear ring coordinate arrays defining the polygon.
         * @param bbox The bounding box of the polygon.
         */
        constructor(coordinates: Position[][], bbox?: BoundingBox);

        /**
         * The bounding box of the geometry.
         */
        bbox?: BoundingBox;

        /**
         * The array of linear ring coordinate arrays defining the polygon.
         */
        coordinates: Position[][];
    }


    /**
     * A Position is an array of coordinates. Array should contain between two and three elements. [longitude, latitude] or [longitude, latitude, elevation]
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.data.position?view=azure-iot-typescript-latest
     */
    export class Position {
        /**
         * 
         * @param longitude The position's longitude.
         * @param latitude The position's latitude.
         * @param elevation THe position's elevation.
         */
        constructor(longitude: number, latitude: number, elevation?: number);

        /**
         * ArrayConstructor
         */
        static Array: ArrayConstructor;

    }
}

declare namespace atlas.control{
    /**
     * A control for changing the rotation of the map.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.control.compasscontrol?view=azure-iot-typescript-latest
     */
    export class CompassControl{
        /**
         * 
         * @param options The options for the control.
         */
        constructor(options?: atlas.Models.CompassControlOptions);


        /**
         * 
         * @param map Map
         * @param options ControlOptions 
         */
        onAdd(map: Map, options: atlas.Models.ControlOptions): HTMLElement;

        onRemove();
    }

    /**
     * A control for changing the pitch of the map.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.control.pitchcontrol?view=azure-iot-typescript-latest
     */
    export class PitchControl{
        /**
         * Constructs a PitchControl.
         * @param options The options for the control.
         */
        constructor(options?: atlas.Models.PitchControlOptions);

        /**
         * 
         * @param map Map
         * @param options  ControlOptions
         */
        onAdd(map: Map, options: atlas.Models.ControlOptions): HTMLElement;

        onRemove();
    }

    /**
     * A control for changing the style of the map.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.control.stylecontrol?view=azure-iot-typescript-latest
     */
    export class StyleControl{

        /**
         * Constructs a StyleControl.
         * @param options The options for the control.
         */
        constructor(options?: atlas.Models.StyleControlOptions);

        onAdd(map: Map, options?: atlas.Models.ControlOptions): HTMLElement;

        onRemove();
    }

    /**
     * A control for changing the zoom of the map.
     * https://docs.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.atlas.control.zoomcontrol?view=azure-iot-typescript-latest
     */
    export class ZoomControl{
        /**
         * Constructs a ZoomControl.
         * @param options The options for the control.
         */
        constructor(options?: atlas.Models.ZoomControlOptions);

        onAdd(map: Map): HTMLElement;

        onRemove();

        
    }
}