// Type definitions for maptalks 0.49
// Project: https://github.com/maptalks/maptalks.js
// Definitions by: Yu Yan <https://github.com/yanyu510>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = maptalks;
export as namespace maptalks;

declare namespace maptalks {
    export const INTERNAL_LAYER_PREFIX: string;
    /**
     * Symbol properties containing external resources
     */
    export const RESOURCE_PROPERTIES: string[];

    /**
     * Corresponding size properties for the above resource properties
     */
    export const RESOURCE_SIZE_PROPERTIES: (string | null)[][];

    /**
     * numeric symbol properties
     */
    export const NUMERICAL_PROPERTIES: object;

    /**
     *  color symbol properties
     */
    export const COLOR_PROPERTIES: string[];

    export interface MapOptions {
        center: Coordinate | Array<number> | undefined;
        zoom: number | undefined;
        spatialReference?: object;
        baseLayer?: Layer;
        layers?: Layer[];
        attribution?: boolean | control.AttributionOptions;
        // allow map to drag pitching, true by default
        dragPitch?: boolean;
        // allow map to drag rotating, true by default
        dragRotate?: boolean;
        // enable map to drag pitching and rotating at the same time, false by default
        dragRotatePitch?: boolean;
        dragPan?: boolean;
        pitch?: number;
        zoomControl?: boolean | object;
        scaleControl?: boolean | object;
        overviewControl?: boolean;
        centerCross?: boolean;
        minZoom?: number;
        maxZoom?: number;
        draggable?: boolean; //  disable draggble
        scrollWheelZoom?: boolean; //  disable scroll wheel zoom
        dblClickZoom?: boolean; //  disable doubleclick
        touchZoom?: boolean;
        doubleClickZoom?: boolean;
        layerSwitcherControl?: object;
    }
    export interface MapJsonOptions {
        baseLayer?: any;
        layers?: any;
    }

    export interface LayerOptions {
        attribution?: string;
        minZoom?: number;
        maxZoom?: number;
        visible?: boolean;
        opacity?: number;
        zindex?: number;
        hitDetect?: boolean;
        renderer?: string;
        //  context.globalCompositeOperation, 'source-over' in default
        globalCompositeOperation?: string;
        debugOutline?: string;
        cssFilter?: string | null;
        forceRenderOnMoving?: boolean;
        forceRenderOnZooming?: boolean;
        forceRenderOnRotating?: boolean;
        style?: any;
    }

    export interface TileLayerOptions extends LayerOptions {
        urlTemplate: string | Function;
        subdomains?: string[] | number[];
        spatialReference?: object;
        tileSize?: number[];
        offset?: number[];
        tileSystem?: number[];
        maxAvailableZoom?: number;
        repeatWorld?: boolean;
        background?: boolean;
        backgroundZoomDiff?: number;
        placeholder?: boolean;
        fragmentShader?: string;
        crossOrigin?: string;
        fadeAnimation?: boolean;
        debug?: boolean;
        maxCacheSize?: number;
        cascadeTiles?: boolean;
        zoomOffset?: number;
        tileRetryCount?: number;
    }

    export interface WMSTileLayerOptions extends TileLayerOptions {
        service?: string;
        layers: string;
        styles?: string;
        format?: string;
        transparent?: boolean;
        version?: string;
        crs?: string;
        uppercase?: boolean;
        detectRetina?: string;
    }

    export interface VectorLayerOptions extends LayerOptions {
        debug?: boolean;
        enableSimplify?: boolean;
        cursor?: string;
        geometryEvents?: boolean;
        defaultIconSize?: boolean;
        enableAltitude?: boolean;
        altitudeProperty?: string;
        drawAltitude?: object;
        altitude?: number;
        drawImmediate?: boolean;
    }

    export interface CanvasLayerOptions extends LayerOptions {
        doubleBuffer?: boolean;
        animation?: boolean;
        fps?: boolean;
    }

    export interface ImageLayerOptions extends LayerOptions {
        crossOrigin?: string;
        renderer?: string;
    }

    export interface GeometryOptions {
        id?: string | number;
        visible?: boolean;
        editable?: boolean;
        interactive?: boolean;
        cursor?: string | null;
        measure?: string;
        draggable?: boolean;
        dragShadow?: boolean;
        drawOnAxis?: string | null;
        zIndex?: number;
        properties?: object;
        symbol?: object;
        shadowBlur?: number;
        shadowColor?: string;
    }

    export interface PathOptions extends GeometryOptions {
        smoothness?: number;
        enableSimplify?: boolean;
        simplifyTolerance?: number;
        enableClip?: boolean;
        symbol?: object;
    }

    export interface MarkerOptions extends GeometryOptions {
        hitTestForEvent?: boolean;
    }

    export interface LabelOptions extends GeometryOptions {
        boxStyle?: object;
        textSymbol?: object;
        hitTestForEvent?: string;
    }

    export interface TextBoxOptions extends GeometryOptions {
        textStyle?: object;
        boxSymbol?: object;
        hitTestForEvent?: string;
    }

    export interface LineStringOptions extends PathOptions {
        arrowStyle?: string | number[] | null;
        arrowPlacement?: string;
    }

    export interface MultiLineStringOptions extends LineStringOptions {}

    export interface ArcCurveOptions extends LineStringOptions {
        arcDegree?: number;
    }

    export interface ConnectorLineOptions extends LineStringOptions {
        showOn?: string;
    }

    export interface ArcConnectorLineOptions extends ConnectorLineOptions, ArcCurveOptions {}

    export interface EllipseOptions extends PathOptions {
        numberOfShellPoints?: number;
    }

    export interface DrawToolOptions {
        //  doubleClickZoom?: boolean;
        //  ignoreMouseleave?: boolean
        mode?: string;
        symbol?: object;
        once?: boolean;
        autoPanAtEdge?: boolean;
    }

    export interface DrawToolModeActionOptions {
        action: object;
        create: object;
        update: object;
        generate: object;
    }

    export interface DistanceToolOptions extends DrawToolOptions {
        language?: string;
        metric?: boolean;
        imperial?: boolean;
        vertexSymbol?: object;
        labelOptions?: object;
        clearButtonSymbol?: any[];
    }

    namespace control {
        export interface ZoomOptions {
            position?: string | object;
            slider?: boolean;
            zoomLevel?: boolean;
        }

        export interface LayerSwitcherOptions {
            position?: string | object;
            baseTitle?: string | object;
            overlayTitle?: string | object;
            excludeLayers?: any[];
            containerClass?: string | object;
        }

        export interface AttributionOptions {
            position?: string | object;
            content?: string;
        }

        export interface ScaleOptions {
            position?: string | object;
            maxWidth?: number;
            metric?: boolean;
            imperial?: boolean;
            containerClass?: string | object | null;
        }

        export interface PanelOptions {
            position?: string | object;
            draggable?: boolean;
            custom?: boolean;
            content?: string | HTMLElement;
            closeButton?: boolean;
        }

        export interface ToolbarOptions {
            position?: string | object;
            vertical?: boolean;
            reverseMenu?: boolean;
            items: any[];
        }

        export interface OverviewOptions {
            position?: string | object;
            level?: number;
            maximize?: boolean;
            size?: object;
            symbol?: object;
            containerClass?: string;
            buttonClass?: string;
        }

        export abstract class Control extends Eventable {
            //  new(options?: object): Control
            /**
             * Adds the control to a map.
             * @param {Map} map
             * @returns {control.Control} this
             * @fires control.Control#add
             */
            addTo(map: Map): this;

            /**
             * update control container
             * @return {control.Control} this
             */
            update(): this;

            /**
             * Get the map that the control is added to.
             * @return {Map}
             */
            getMap(): Map;

            /**
             * Get the position of the control
             * @return {object}
             */
            getPosition(): object;

            /**
             * update the control's position
             * @param {string|object} position - can be one of 'top-left', 'top-right', 'bottom-left', 'bottom-right' or a position object like {'top': 40,'left': 60}
             * @return {control.Control} this
             * @fires control.Control#positionchange
             */
            setPosition(position: string | object): this;

            /**
             * Get the container point of the control.
             * @return {Point}
             */
            getContainerPoint(): Point;

            /**
             * Get the control's container.
             * Container is a div element wrapping the control's dom and decides the control's position and display.
             * @return {HTMLElement}
             */
            getContainer(): HTMLElement;

            /**
             * Get html dom element of the control
             * @return {HTMLElement}
             */
            getDOM(): HTMLElement;

            /**
             * Show
             * @return {control.Control} this
             */
            show(): this;

            /**
             * Hide
             * @return {control.Control} this
             */
            hide(): this;

            /**
             * Whether the control is visible
             * @return {boolean}
             */
            isVisible(): boolean;

            /**
             * Remove itself from the map
             * @return {control.Control} this
             * @fires control.Control#remove
             */
            remove(): this;
        }

        export class Zoom extends Control {
            constructor(options: ZoomOptions);

            /**
             * method to build DOM of the control
             * @param  {Map} map map to build on
             * @return {HTMLElement}
             */
            buildOn(map: Map): HTMLElement;
        }

        export class LayerSwitcher extends Control {
            constructor(options: LayerSwitcherOptions);

            /**
             * method to build DOM of the control
             * @return {HTMLElement}
             */
            buildOn(): HTMLElement;
        }

        export class Attribution extends Control {
            constructor(options: AttributionOptions);
        }

        export class Scale extends Control {
            constructor(options: ScaleOptions);

            /**
             * method to build DOM of the control
             * @param  {Map} map map to build on
             * @return {HTMLElement}
             */
            buildOn(map: Map): HTMLElement;
        }

        export class Panel extends Control {
            constructor(options: PanelOptions);

            /**
             * method to build DOM of the control
             * @param  {Map} map map to build on
             * @return {HTMLElement}
             */
            buildOn(map: Map): HTMLElement;

            /**
             * update control container
             * @return {control.Panel} this
             */
            update(): this;

            /**
             * Set the content of the Panel.
             * @param {string|HTMLElement} content - content of the infowindow.
             * return {control.Panel} this
             * @fires Panel#contentchange
             */
            setContent(content: string | HTMLElement): this;

            /**
             * Get content of  the infowindow.
             * @return {string|HTMLElement} - content of the infowindow
             */
            getContent(): string | HTMLElement;
        }

        export class Toolbar extends Control {
            constructor(options: ToolbarOptions);

            /**
             * method to build DOM of the control
             * @param  {Map} map map to build on
             * @return {HTMLElement}
             */
            buildOn(map: Map): HTMLElement;
        }

        export class Overview extends Control {
            constructor(options: OverviewOptions);

            /**
             * method to build DOM of the control
             * @param  {Map} map map to build on
             * @return {HTMLElement}
             */
            buildOn(map: Map): HTMLElement;

            /**
             * Maximize overview control
             * @returns {control.Overview}
             */
            maxmize(): this;

            /**
             * Minimize overview control
             * @returns {control.Overview}
             */
            minimize(): this;

            /**
             * Return overview's map object
             * @returns {Map}
             */
            getOverviewMap(): Map;
        }
    }

    namespace ui {
        export interface UIComponentOptions {
            eventsPropagation?: boolean;
            eventsToStop?: boolean;
            dx?: number;
            dy?: number;
            autoPan?: boolean;
            autoPanDuration?: boolean;
            single?: boolean;
            animation?: string;
            animationDuration?: number;
            pitchWithMap?: boolean;
            rotateWithMap?: boolean;
        }

        export interface UIMarkerOptions extends UIComponentOptions {
            draggable?: boolean;
            content: string | HTMLElement;
        }

        export interface ToolTipOptions extends UIComponentOptions {
            width?: number;
            height?: number;
            cssName?: string;
            showTimeout?: number;
        }

        export interface MenuOptions extends UIComponentOptions {
            width?: number;
            maxHeight?: number;
            custom?: string | HTMLElement;
            items?: object[] | string | HTMLElement;
        }

        export abstract class UIComponent extends Eventable {
            _coordinate: Coordinate;
            _flashTimeout: number;
            /**
             * Adds the UI Component to a geometry or a map
             * @param {Geometry|Map} owner - geometry or map to addto.
             * @returns {ui.UIComponent} this
             * @fires ui.UIComponent#add
             */
            addTo(owner: Geometry | Map): this;

            /**
             * Get the map it added to
             * @return {Map} map instance
             * @override
             */
            getMap(): Map;

            /**
             * Show the UI Component, if it is a global single one, it will close previous one.
             * @param {Coordinate} [coordinate=null] - coordinate to show, default is owner's center
             * @return {ui.UIComponent} this
             * @fires ui.UIComponent#showstart
             * @fires ui.UIComponent#showend
             */
            show(coordinate?: Coordinate): this;

            /**
             * Hide the UI Component.
             * @return {ui.UIComponent} this
             * @fires ui.UIComponent#hide
             */
            hide(): this;

            /**
             * Decide whether the ui component is open
             * @returns {boolean} true|false
             */
            isVisible(): boolean;

            /**
             * Remove the UI Component
             * @return {ui.UIComponent} this
             * @fires ui.UIComponent#hide
             * @fires ui.UIComponent#remove
             */
            remove(): this;

            /**
             * Get pixel size of the UI Component.
             * @return {Size} size
             */
            getSize(): Size;
        }

        export class InfoWindow extends UIComponent {
            constructor(options: UIComponentOptions | object);

            /**
             * Adds the UI Component to a geometry or a map
             * @param {Geometry|Map} owner - geometry or map to addto.
             * @returns {UIComponent} this
             * @fires UIComponent#add
             */
            addTo(owner: Geometry | Map): this;

            /**
             * Set the content of the infowindow.
             * @param {string|HTMLElement} content - content of the infowindow.
             * return {InfoWindow} this
             * @fires InfoWindow#contentchange
             */
            setContent(content: string | HTMLElement): this;

            /**
             * Get content of  the infowindow.
             * @return {string|HTMLElement} - content of the infowindow
             */
            getContent(): string | HTMLElement;

            /**
             * Set the title of the infowindow.
             * @param {string|HTMLElement} title - title of the infowindow.
             * return {InfoWindow} this
             * @fires InfoWindow#titlechange
             */
            setTitle(title: string | HTMLElement): this;

            /**
             * Get title of  the infowindow.
             * @return {string|HTMLElement} - content of the infowindow
             */
            getTitle(): string | HTMLElement;

            /**
             * Gets InfoWindow's transform origin for animation transform
             * @protected
             * @return {Point} transform origin
             */
            getTransformOrigin(): Point;
        }

        export class Menuable {
            /**
             * Set a context menu
             * @param {object} options - menu options
             * @return {*} this
             * @example
             * foo.setMenu({
             *  'width'  : 160,
             *  'custom' : false,
             *  'items' : [
             *      // return false to prevent event propagation
             *     {'item': 'Query', 'click': function() {alert('Query Clicked!'); return false;}},
             *     '-',
             *     {'item': 'Edit', 'click': function() {alert('Edit Clicked!')}},
             *     {'item': 'About', 'click': function() {alert('About Clicked!')}}
             *    ]
             * });
             */
            setMenu(options: object): this;

            /**
             * Open the context menu, default on the center of the geometry or map.
             * @param {Coordinate} [coordinate=null] - coordinate to open the context menu
             * @return {*} this
             */
            openMenu(coordinate?: Coordinate): this;

            /**
             * Set menu items to the context menu
             * @param {object[]} items - menu items
             * @return {*} this
             */
            setMenuItems(items: object[]): this;

            /**
             * Get the context menu items
             * @return {object[]}
             */
            getMenuItems(): object[];

            /**
             * Close the contexnt menu
             * @return {*} this
             */
            closeMenu(): this;

            /**
             * Remove the context menu
             * @return {*} this
             */
            removeMenu(): this;
        }

        export class UIMarker extends UIComponent {
            constructor(coordinate: Coordinate | number[], options: UIMarkerOptions);

            /**
             * Sets the coordinates
             * @param {Coordinate} coordinates - UIMarker's coordinate
             * @returns {UIMarker} this
             * @fires UIMarker#positionchange
             */
            setCoordinates(coordinates: Coordinate): this;

            /**
             * Gets the coordinates
             * @return {Coordinate} coordinates
             */
            getCoordinates(): Coordinate;

            /**
             * Sets the content of the UIMarker
             * @param {string|HTMLElement} content - UIMarker's content
             * @returns {UIMarker} this
             * @fires UIMarker#contentchange
             */
            setContent(content: string | HTMLElement): this;

            /**
             * Gets the content of the UIMarker
             * @return {string|HTMLElement} content
             */
            getContent(): string | HTMLElement;

            /**
             * Show the UIMarker
             * @returns {UIMarker} this
             * @fires UIMarker#showstart
             * @fires UIMarker#showend
             */
            show(): this;

            /**
             * Flash the UIMarker, show and hide by certain internal for times of count.
             *
             * @param {number} [interval=100]     - interval of flash, in millisecond (ms)
             * @param {number} [count=4]          - flash times
             * @param {Function} [cb=null]        - callback function when flash ended
             * @param {*} [context=null]          - callback context
             * @return {UIMarker} this
             */
            flash(interval?: number, count?: number, cb?: Function, context?: any): this;

            /**
             * A callback method to build UIMarker's HTMLElement
             * @protected
             * @param {Map} map - map to be built on
             * @return {HTMLElement} UIMarker's HTMLElement
             */
            buildOn(): HTMLElement;

            /**
             * Gets UIMarker's HTMLElement's position offset, it's caculated dynamically accordiing to its actual size.
             * @protected
             * @return {Point} offset
             */
            getOffset(): Point;

            /**
             * Gets UIMarker's transform origin for animation transform
             * @protected
             * @return {Point} transform origin
             */
            getTransformOrigin(): Point;

            /**
             * Whether the uimarker is being dragged.
             * @returns {boolean}
             */
            isDragging(): boolean;
        }

        export class ToolTip extends UIComponent {
            constructor(content: string, options: ToolTipOptions);

            /**
             * Adds the UI Component to a geometry UIMarker Other graphic elements
             * @param {Geometry} owner - geometry to add.
             * @returns {UIComponent} this
             * @fires UIComponent#add
             */
            addTo(owner: Geometry): this;

            /**
             * set ToolTip's content's css class name.
             * @param {string} css class name - set for ToolTip's content.
             */
            setStyle(cssName: string): this;

            /**
             * get ToolTip's  content's css class name
             * @returns {string} css class name - set for ToolTip's content.
             */
            getStyle(): string;

            /**
             * get the UI Component's content
             * @returns {string} tooltip's content
             */
            getContent(): string;

            /**
             * remove the tooltip, this method will be called by 'this.remove()'
             */
            onRemove(): void;

            /**
             * override UIComponent method
             * ignore altitude calculation
             */
            _getViewPoint(): Coordinate | Point;
        }

        export class Menu extends UIComponent {
            defaultOptions: MenuOptions;
            constructor(options: MenuOptions);

            /**
             * Set the items of the menu.
             * @param {object[]|string|HTMLElement} items - items of the menu
             * return {ui.Menu} this
             * @example
             * menu.setItems([
             *      // return false to prevent event propagation
             *     {'item': 'Query', 'click': function() {alert('Query Clicked!'); return false;}},
             *     '-',
             *     {'item': 'Edit', 'click': function() {alert('Edit Clicked!')}},
             *     {'item': 'About', 'click': function() {alert('About Clicked!')}}
             * ]);
             */
            setItems(items: object[] | string | HTMLElement): this;

            /**
             * Get items of  the menu.
             * @return {object[]|string|HTMLElement} - items of the menu
             */
            getItems(): object[] | string | HTMLElement;

            /**
             * Create the menu DOM.
             * @protected
             * @return {HTMLElement} menu's DOM
             */
            buildOn(): HTMLElement;
        }
    }

    namespace animation {
        export interface AnimationOptions {
            easing?: object;
        }

        export interface Easing {
            /**
             * Start slow and speed up.
             * @param {number} t Input between 0 and 1.
             * @return {number} Output between 0 and 1.
             */
            in(t: number): number;

            /**
             * Start fast and slow down.
             * @param {number} t Input between 0 and 1.
             * @return {number} Output between 0 and 1.
             */
            out(t: number): number;

            /**
             * Start slow, speed up, and then slow down again.
             * @param {number} t Input between 0 and 1.
             * @return {number} Output between 0 and 1.
             */
            inAndOut(t: number): number;

            /**
             * Maintain a constant speed over time.
             * @param {number} t Input between 0 and 1.
             * @return {number} Output between 0 and 1.
             */
            linear(t: number): number;

            /**
             * Start slow, speed up, and at the very end slow down again.  This has the
             * same general behavior as {@link inAndOut}, but the final slowdown
             * is delayed.
             * @param {number} t Input between 0 and 1.
             * @return {number} Output between 0 and 1.
             */
            upAndDown(t: number): number;
        }

        export class Frame {
            state: any;
            styles: any;
        }

        export class Player {
            /**
             * Create an animation player
             * @param {Function} animation - animation [framing]{@link framing} function
             * @param {object} options     - animation options
             * @param {Function} onFrame  - callback function for animation steps
             */
            constructor(animation: Function, options: object, onFrame: Function);

            /**
             * Start or resume the animation
             * @return {Player} this
             */
            play(): this;

            /**
             * Pause the animation
             * @return {Player} this
             */
            pause(): this;

            /**
             * Cancel the animation play and ready to play again
             * @return {Player} this
             */
            cancel(): this;

            /**
             * Finish the animation play, and can't be played any more.
             * @return {Player} this
             */
            finish(): this;
        }

        export interface Animation {
            speed: {
                slow: number;
                normal: number;
                fast: number;
            };

            /**
             * Generate a framing function
             * @param  {object[]} styles        - animation style group
             * @param  {object} [options=null]  - options
             * @param  {object} [options.easing=null]  - animation easing
             * @return {Function} framing function helps to generate animation frames.
             * */
            framing(styles: object[], options?: AnimationOptions): Function;

            /**
             * Create an animation player
             * @param  {object} styles  - styles to animate
             * @param  {object} options - animation options
             * @param  {Function} step  - callback function for animation steps
             * @return {Player} player
             */
            animate(styles: object, options: object, step: Function): Player;
        }
        export const Animation: Animation;
    }

    namespace measurer {
        export interface Common {
            /**
             * Measure length between coordinate c1 and coordinate c2
             * @param  {Coordinate} c1 coordinate
             * @param  {Coordinate} c2 coordinate
             * @return {number}    length
             * @function measurer.Common.measureLength
             */
            measureLength(c1: Coordinate, c2: Coordinate): number;
        }
        export const Common: Common;

        export interface Identity extends Common {
            measure: string;
            _rotate: Function;

            /**
             * Measure the length between 2 coordinates.
             * @param  {Coordinate} c1
             * @param  {Coordinate} c2
             * @return {number}
             */
            measureLenBetween(c1: Coordinate, c2: Coordinate): number;

            /**
             * Measure the area closed by the given coordinates.
             * @param  {Coordinate[]} coordinates
             * @return {number}
             */
            measureArea(coordinates: Coordinate[]): number;

            /**
             * Locate a coordinate from the given source coordinate with a x-axis distance and a y-axis distance.
             * @param  {Coordinate} c     - source coordinate
             * @param  {number} xDist     - x-axis distance
             * @param  {number} yDist     - y-axis distance
             * @return {Coordinate}
             */
            _locate(c: Coordinate, xDist: number, yDist: number): Coordinate;
        }
        export const Identity: Identity;

        export interface Measurer {
            /**
             * Get a measurer instance.
             * @param  {string} name - code of the measurer: 'EPSG:4326', 'Identity', 'BAIDU'
             * @return {object} a measurer object
             * @function measurer.Measurer.getInstance
             */
            getInstance(name: string): object;
        }
        export const Measurer: Measurer;

        export interface WGS84Sphere extends Common {
            /**
             * Measure the length between 2 coordinates.
             * @param  {Coordinate} c1
             * @param  {Coordinate} c2
             * @return {number}
             */
            measureLenBetween(c1: Coordinate, c2: Coordinate): number;
            /**
             * Measure the area closed by the given coordinates.
             * @param  {Coordinate[]} coordinates
             * @return {number}
             */
            measureArea(coordinates: Coordinate[]): number;

            /**
             * Locate a coordinate from the given source coordinate with a x-axis distance and a y-axis distance.
             * @param  {Coordinate} c     - source coordinate
             * @param  {number} xDist              - x-axis distance
             * @param  {number} yDist              - y-axis distance
             * @return {Coordinate}
             */
            locate(c: Coordinate, xDist: number, yDist: number): Coordinate;

            /**
             * Rotate a coordinate of given angle around pivot
             * @param {Coordinate} c  - source coordinate
             * @param {Coordinate} pivot - pivot
             * @param {number} angle - angle in degree
             * @return {Coordinate}
             */
            rotate(c: Coordinate, pivot: Coordinate, angle: number): Coordinate;
        }
        export const WGS84Sphere: WGS84Sphere;

        export interface DEFAULT extends WGS84Sphere {}
        export const DEFAULT: DEFAULT;
        export interface BaiduSphere extends Common {
            /**
             * Measure the length between 2 coordinates.
             * @param  {Coordinate} c1
             * @param  {Coordinate} c2
             * @return {number}
             */
            measureLenBetween(c1: Coordinate, c2: Coordinate): number;
            /**
             * Measure the area closed by the given coordinates.
             * @param  {Coordinate[]} coordinates
             * @return {number}
             */
            measureArea(coordinates: Coordinate[]): number;

            /**
             * Locate a coordinate from the given source coordinate with a x-axis distance and a y-axis distance.
             * @param  {Coordinate} c     - source coordinate
             * @param  {number} xDist              - x-axis distance
             * @param  {number} yDist              - y-axis distance
             * @return {Coordinate}
             */
            locate(c: Coordinate, xDist: number, yDist: number): Coordinate;

            /**
             * Rotate a coordinate of given angle around pivot
             * @param {Coordinate} c  - source coordinate
             * @param {Coordinate} pivot - pivot
             * @param {number} angle - angle in degree
             * @return {Coordinate}
             */
            rotate(c: Coordinate, pivot: Coordinate, angle: number): Coordinate;
        }
        export const BaiduSphere: BaiduSphere;
    }

    namespace projection {
        export interface Common {
            /**
             * Project a geographical coordinate to a projected coordinate (2d coordinate)
             * @param  {Coordinate} p - coordinate to project
             * @return {Coordinate}
             * @function projection.Common.project
             */
            project(p: Coordinate): Coordinate;

            /**
             * Unproject a projected coordinate to a geographical coordinate (2d coordinate)
             * @param  {Coordinate} p - coordinate to project
             * @return {Coordinate}
             * @function projection.Common.unproject
             */
            unproject(p: Coordinate): Coordinate;

            /**
             * Project a group of geographical coordinates to projected coordinates.
             * @param  {Coordinate[]|Coordinate[][]|Coordinate[][][]} coordinates - coordinates to project
             * @return {Coordinate[]|Coordinate[][]|Coordinate[][][]}
             * @function projection.Common.projectCoords
             */
            projectCoords(
                coordinates: Coordinate[] | Coordinate[][] | Coordinate[][][],
            ): Coordinate[] | Coordinate[][] | Coordinate[][][];

            /**
             * Unproject a group of projected coordinates to geographical coordinates.
             * @param  {Coordinate[]|Coordinate[][]|Coordinate[][][]} projCoords - projected coordinates to unproject
             * @return {Coordinate[]|Coordinate[][]|Coordinate[][][]}
             * @function projection.Common.unprojectCoords
             */
            unprojectCoords(
                projCoords: Coordinate[] | Coordinate[][] | Coordinate[][][],
            ): Coordinate[] | Coordinate[][] | Coordinate[][][];

            /**
             * Whether the projection is spherical
             * @return {boolean}
             */
            isSphere(): boolean;

            /**
             * If the projected coord out of the sphere
             * @param  {Coordinate}  pcoord projected coord
             * @return {boolean}
             */
            isOutSphere(pcoord: Coordinate): boolean;

            /**
             * Wrap the projected coord in the sphere
             * @param  {Coordinate} pcoord projected coord
             * @return {Coordinate} wrapped projected coord
             */
            wrapCoord(pcoord: Coordinate): Coordinate;
        }
        export const Common: Common;
        export interface EPSG3857 extends Common, measurer.WGS84Sphere {
            code: string;
        }
        export const EPSG3857: EPSG3857;
        export interface DEFAULT extends EPSG3857 {}
        export const DEFAULT: DEFAULT;
        export interface BAIDU extends Common, measurer.BaiduSphere {
            code: string;
        }
        export const BAIDU: BAIDU;
        export interface EPSG4326 extends Common, measurer.WGS84Sphere {
            code: string;
        }
        export const EPSG4326: EPSG4326;
        export interface EPSG4490 extends EPSG4326, measurer.WGS84Sphere {
            code: string;
        }
        export const EPSG4490: EPSG4490;
        export interface IDENTITY extends Common, measurer.Identity {
            code: string;
        }
        export const IDENTITY: IDENTITY;
    }

    namespace renderer {
        export abstract class CanvasRenderer extends Class {
            layer: any;
            canvas: HTMLCanvasElement;
            context: CanvasRenderingContext2D;
            constructor(layer: Layer);
            /**
             * Render the layer.
             * Call checkResources
             */
            render(): void;

            /**
             * Check if has any external resources to load
             * If yes, load the resources before calling draw method
             * @abstract
             * @method checkResources
             * @instance
             * @returns {[][]} an array of resource arrays [ [url1, width, height], [url2, width, height], [url3, width, height] .. ]
             * @memberOf renderer.CanvasRenderer
             */
            checkResources(): [][];

            /**
             * a required abstract method to implement
             * draw the layer when map is not interacting
             * @abstract
             * @instance
             * @method draw
             * @memberOf renderer.CanvasRenderer
             */
            draw(): void;

            /**
             * an optional abstract method to implement
             * draw the layer when map is interacting (moving/zooming/dragrotating)
             * @abstract
             * @instance
             * @method drawOnInteracting
             * @param {object} eventParam event parameters
             * @memberOf renderer.CanvasRenderer
             */
            drawOnInteracting(eventParam: object): void;

            /**
             * Ask whether the layer renderer needs to redraw
             * @return {boolean}
             */
            needToRedraw(): boolean;

            /**
             * A callback for overriding when drawOnInteracting is skipped due to low fps
             */
            onSkipDrawOnInteracting(): void;

            /**
             * Whether must call render instead of drawOnInteracting when map is interacting
             */
            mustRenderOnInteracting(): void;

            /**
             * Set to redraw, ask map to call draw/drawOnInteracting to redraw the layer
             */
            setToRedraw(): void;

            /**
             *  Mark layer's canvas updated
             */
            setCanvasUpdated(): void;

            /**
             * Only called by map's renderer to check whether the layer's canvas is updated
             * @protected
             * @return {boolean}
             */
            isCanvasUpdated(): boolean;

            /**
             * Remove the renderer, will be called when layer is removed
             */
            remove(): void;

            /**
             * Get map
             * @return {Map}
             */
            getMap(): Map;

            /**
             * Get renderer's Canvas image object
             * @return {HTMLCanvasElement}
             */
            getCanvasImage(): HTMLCanvasElement;

            /**
             * Clear canvas
             */
            clear(): void;

            /**
             * A method to help improve performance.
             * If you are sure that layer's canvas is blank, returns true to save unnecessary layer works of maps.
             * @return {boolean}
             */
            isBlank(): boolean;

            /**
             * Show the layer
             */
            show(): void;

            /**
             * Hide the layer
             */
            hide(): void;

            /**
             * Set z-index of layer
             */
            setZIndex(): /*z*/ void;

            /**
             * Detect if there is anything painted on the given point
             * @param  {Point} point containerPoint
             * @return {boolean}
             */
            hitDetect(point: Point): boolean;

            /**
             * loadResource from resourceUrls
             * @param  {string[]} resourceUrls    - Array of urls to load
             * @param  {Function} onComplete          - callback after loading complete
             * @param  {object} context         - callback's context
             * @returns {Promise[]}
             */
            loadResources(resourceUrls: string[], onComplete: Function, context: object): Promise<any>[];

            /**
             * Create renderer's Canvas
             */
            createCanvas(): void;

            /**
             * Resize the canvas
             * @param  {Size} canvasSize the size resizing to
             */
            resizeCanvas(canvasSize: Size): void;

            /**
             * Clear the canvas to blank
             */
            clearCanvas(): void;

            /**
             * Prepare the canvas for rendering. <br>
             * 1. Clear the canvas to blank. <br>
             * 2. Clip the canvas by mask if there is any and return the mask's extent
             * @return {PointExtent} mask's extent of current zoom's 2d point.
             */
            prepareCanvas(): PointExtent;

            /**
             * Get renderer's current view extent in 2d point
             * @return {object} view.extent, view.maskExtent, view.zoom, view.southWest
             */
            getViewExtent(): object;

            /**
             * call when rendering completes, this will fire necessary events and call setCanvasUpdated
             */
            completeRender(): void;

            /**
             * Get renderer's event map registered on the map
             * @return {object} events
             */
            getEvents(): object;

            /**
            /**
             * onZoomStart
             * @param  {object} param event parameters
             */
            onZoomStart(param: object): void;

            /**
             * onZoomEnd
             * @param  {object} param event parameters
             */
            onZoomEnd(param: object): void;

            /**
             * onZooming
             * @param  {object} param event parameters
             */
            onZooming(param: object): void;

            /**
             * onMoveStart
             * @param  {object} param event parameters
             */
            onMoveStart(param: object): void;

            /**
             * onMoving
             * @param  {object} param event parameters
             */
            onMoving(param: object): void;

            /**
             * onMoveEnd
             * @param  {object} param event parameters
             */
            onMoveEnd(param: object): void;

            /**
             * onResize
             * @param  {object} param event parameters
             */
            onResize(param: object): void;

            /**
             * onDragRotateStart
             * @param  {object} param event parameters
             */
            onDragRotateStart(param: object): void;

            /**
             * onDragRotating
             * @param  {object} param event parameters
             */
            onDragRotating(param: object): void;

            /**
             * onDragRotateEnd
             * @param  {object} param event parameters
             */
            onDragRotateEnd(param: object): void;

            /**
             * onSpatialReferenceChange
             * @param  {object} param event parameters
             */
            onSpatialReferenceChange(param: object): void;

            /**
             * Get ellapsed time of previous drawing
             * @return {number}
             */
            getDrawTime(): number;
        }
    }

    export interface Ajax {
        /**
         * Get JSON data by jsonp
         * from https:// gist.github.com/gf3/132080/110d1b68d7328d7bfe7e36617f7df85679a08968
         * @param  {string}   url - resource url
         * @param  {Function} cb  - callback function when completed
         */
        jsonp(url: string, callback: Function): Ajax;

        /**
         * Fetch remote resource by HTTP "GET" method
         * @param  {string}   url - resource url
         * @param  {object}   [options=null] - request options
         * @param  {object}   [options.headers=null] - HTTP headers
         * @param  {string}   [options.responseType=null] - responseType
         * @param  {string}   [options.credentials=null]  - if with credentials, set it to "include"
         * @param  {Function} cb  - callback function when completed
         * @return {Ajax}  Ajax
         * @example
         * maptalks.Ajax.get(
         *     'url/to/resource',
         *     (err, data) => {
         *         if (err) {
         *             throw new Error(err);
         *         }
         *         //  do things with data
         *     }
         * );
         */
        get(url: string, cb: Function, options?: object): Ajax;

        /**
         * Fetch remote resource by HTTP "POST" method
         * @param  {string}   url - resource url
         * @param  {object}   options - request options
         * @param  {string|object}  options.postData - post data
         * @param  {object}   [options.headers=null]  - HTTP headers
         * @param  {Function} cb  - callback function when completed
         * @return {Ajax}  Ajax
         * @example
         * maptalks.Ajax.post(
         *   'url/to/post',
         *   {
         *     postData : {
         *       'param0' : 'val0',
         *       'param1' : 1
         *     }
         *   },
         *   (err, data) => {
         *     if (err) {
         *       throw new Error(err);
         *     }
         *     //  do things with data
         *   }
         * );
         */
        post(url: string, options: object, cb: Function): Ajax;

        /**
         * Fetch resource as arraybuffer.
         * @param {string} url    - url
         * @param {object} [options=null] - options, same as Ajax.get
         * @param {Function} cb   - callback function when completed.
         * @example
         * maptalks.Ajax.getArrayBuffer(
         *     'url/to/resource.bin',
         *     (err, data) => {
         *         if (err) {
         *             throw new Error(err);
         *         }
         *         //  data is a binary array
         *     }
         * );
         */
        getArrayBuffer(url: string, options?: object, cb?: Function): Ajax;

        /**
         * Fetch resource as a JSON Object.
         * @param {string} url          - json's url
         * @param {object} [options=null]        - optional options
         * @param {string} [options.jsonp=false] - fetch by jsonp, false by default
         * @param {Function} cb   - callback function when completed.
         * @example
         * maptalks.Ajax.getJSON(
         *     'url/to/resource.json',
         *     { jsonp : true },
         *     (err, json) => {
         *         if (err) {
         *             throw new Error(err);
         *         }
         *         //  json is a JSON Object
         *         console.log(json.foo);
         *     }
         * );
         * @static
         */
        getJSON(url: string, options?: object, cb?: Function): Ajax;
    }
    export const Ajax: Ajax;

    export class MapboxUtil {}

    export namespace Util {
        var emptyImageUrl: string;

        /**
         * Merges the properties of sources into destination object.
         * @param  {object} dest   - object to extend
         * @param  {...object} src - sources
         * @return {object}
         * @memberOf Util
         */
        function extend(dest: object, ...src: object[]): object;

        /**
         * Whether the object is null or undefined.
         * @param  {object}  obj - object
         * @return {boolean}
         * @memberOf Util
         */
        function isNil(obj: object): boolean;

        /**
         * Whether val is a number and not a NaN.
         * @param  {object}  val - val
         * @return {boolean}
         * @memberOf Util
         */
        function isNumber(val: object): boolean;

        /**
         * Whether a number is an integer
         * @param  {number}  n
         * @return {boolean}
         * @memberOf Util
         */
        function isInteger(n: number): boolean;

        /**
         * Whether the obj is a javascript object.
         * @param  {object}  obj  - object
         * @return {boolean}
         * @memberOf Util
         */
        function isObject(obj: object): boolean;

        /**
         * Check whether the object is a string
         * @param {object} obj
         * @return {boolean}
         * @memberOf Util
         */
        function isString(obj: object): boolean;

        /**
         * Check whether the object is a function
         * @param {object} obj
         * @return {Boolean}
         * @memberOf Util
         */
        function isFunction(obj: object): boolean;

        /**
         * Check whether the object owns the property.
         * @param  {object}  obj - object
         * @param  {string}  key - property
         * @return {boolean}
         * @memberOf Util
         */
        function hasOwn(obj: object, key: string): boolean;

        /**
         * Determine if an object has any properties.
         * @param object The object to check.
         * @returns {boolean} The object is empty
         */
        function isEmpty(val: object): boolean;

        /**
         * caculate the distance from a point to a segment.
         * @param {Point} p
         * @param {Point} p1
         * @param {Point} p2
         * @return {number} distance from p to (p1, p2)
         * @memberOf Util
         */
        function distanceToSegment(p: Point, p1: Point, p2: Point): number;

        /**
         * Whether the coordinate is inside the polygon
         * @param {Polygon}         - polygon
         * @param {Coordinate}      - coordinate
         * @return {boolean}
         * @memberOf Util
         */
        function pointInsidePolygon(p: Polygon, points: Coordinate): boolean;

        /**
         * Translate symbol properties to SVG properties
         * @param  {object} s - object with symbol properties
         * @return {object}   object with SVG properties
         * @memberOf Util
         */
        function translateToSVGStyles(s: object): object;

        /**
         * Get SVG Base64 String from a marker symbol with (markerType : path)
         * @param  {object} symbol - symbol with markerType of path
         * @return {string}        SVG Base64 String
         * @memberOf Util
         */
        function getMarkerPathBase64(symbol: object): string;

        /**
         * Get external resources from the given symbol
         * @param  {Object} symbol      - symbol
         * @param  {boolean} toAbsolute - whether convert url to aboslute
         * @return {string[]}           - resource urls
         * @memberOf Util
         */
        function getExternalResources(symbol: object, toAbsolute: boolean): string[];

        /**
         * Whether the color is a gradient
         * @param  {object}  g - color to test
         * @return {boolean}
         * @memberOf Util
         */
        function isGradient(g: object): boolean;

        /**
         * Get stamp of a gradient color object.
         * @param  {object} g gradient color object
         * @return {string}     gradient stamp
         * @memberOf Util
         */
        function getGradientStamp(g: object): string;

        /**
         * Get stamp of a symbol
         * @param  {object|object[]} symbol symbol
         * @return {string}        symbol's stamp
         * @memberOf Util
         */
        function getSymbolStamp(symbol: object | object[]): string;

        /**
         * Reduce opacity of the color by ratio
         * @param  {object|object[]} symbol symbols to set
         * @param  {number} ratio  ratio of opacity to reduce
         * @return {object|object[]}      new symbol or symbols
         * @memberOf Util
         */
        function lowerSymbolOpacity(symbol: object | object[], ratio: number): object | object[];

        /**
         * Merges the properties of sources into the symbol. <br>
         * @param  {object|bject[]} symbol symbol to extend
         * @param  {...object} src - sources
         * @return {object|object[]}        merged symbol
         * @memberOf Util
         */
        function extendSymbol(symbol: object | object[]): object | object[];

        /**
         * Polyfill of RequestAnimationFrame
         * @param  {Function} fn callback
         * @return {number}      request id
         * @memberOf Util
         */
        function requestAnimFrame(fn: Function): number;

        /**
         * Polyfill of cancelAnimationFrame
         * @param  {number}      request id
         * @memberOf Util
         */
        function cancelAnimFrame(id: number): void;

        /**
         * Parse a JSON string to a object
         * @param {string} str      - a JSON string
         * @return {object}
         * @memberOf Util
         */
        function parseJSON(str: string): object;

        /**
         * Compute degree bewteen 2 points.
         * @param  {Point} p1 point 1
         * @param  {Point} p2 point 2
         * @return {number}    degree between 2 points
         * @memberOf Util
         */
        function computeDegree(p1: Point, p2: Point): number;
    }

    export namespace DomUtil {
        /**
         * Vendor-prefixed fransform style name (e.g. `'webkitTransform'` for WebKit).
         * @property {string} TRANSFORM
         * @memberOf DomUtil
         * @type {string}
         */
        const TRANSFORM: string;

        /**
         * Vendor-prefixed tfransform-origin name (e.g. `'webkitTransformOrigin'` for WebKit).
         * @property {string} TRANSFORMORIGIN
         * @memberOf DomUtil
         * @type {string}
         */
        const TRANSFORMORIGIN: string;

        /**
         * Vendor-prefixed transition name (e.g. `'WebkitTransition'` for WebKit).
         * @property {string} TRANSITION
         * @memberOf DomUtil
         * @type {string}
         */
        const TRANSITION: string;

        /**
         * Vendor-prefixed filter name (e.g. `'WebkitFilter'` for WebKit).
         * @property {string} FILTER
         * @memberOf DomUtil
         * @type {string}
         */
        const CSSFILTER: string;

        function createEl(tagName: string, className: string): HTMLElement;

        /**
         * Create a html element on the specified container
         * @param {string} tagName
         * @param {string} style - css styles
         * @param {HTMLElement} container
         * @return {HTMLElement}
         * @memberOf DomUtil
         */
        function createElOn(tagName: string, style: string, container: HTMLElement): HTMLElement;

        /**
         * Adds a event listener to the dom element.
         * @param {HTMLElement} obj     - dom element to listen on
         * @param {string} typeArr      - event types, seperated by space
         * @param {Function} handler    - listener function
         * @param {object} context      - function context
         * @memberOf DomUtil
         */
        function addDomEvent(obj: HTMLElement, typeArr: string, handler: Function, context: object): void;

        /**
         * Removes event listener from a dom element
         * @param {HTMLElement} obj         - dom element
         * @param {string} typeArr          - event types, separated by space
         * @param {Function} handler        - listening function
         * @memberOf DomUtil
         */
        function removeDomEvent(obj: HTMLElement, typeArr: string, handler: Function): void;

        /**
         * Check if event type of the dom is listened by the handler
         * @param {HTMLElement} obj     - dom element to check
         * @param {string} typeArr      - event
         * @param {Function} handler    - the listening function
         * @return {number} - the handler's index in the listener chain, returns -1 if not.
         * @memberOf DomUtil
         */
        function listensDomEvent(obj: HTMLElement, typeArr: string, handler: Function): number;

        /**
         * Prevent default behavior of the browser. <br/>
         * preventDefault Cancels the event if it is cancelable, without stopping further propagation of the event.
         * @param {Event} event - browser event
         * @memberOf DomUtil
         */
        function preventDefault(event: Event): void;

        /**
         * Stop browser event propagation
         * @param  {Event} e - browser event.
         * @memberOf DomUtil
         */
        function stopPropagation(e: Event): void;

        /**
         * Get the dom element's current position or offset its position by offset
         * @param  {HTMLElement} dom - HTMLElement
         * @param  {Point} [offset=null] - position to set.
         * @return {Point} - dom element's current position if offset is null.
         * @memberOf DomUtil
         */
        function offsetDom(dom: HTMLElement, offset: Point): Point;

        /**
         * Compute dom's position
         * @param  {HTMLElement} dom
         * @return {number[]}
         * @memberOf DomUtil
         */
        function computeDomPosition(dom: HTMLElement): number[];

        /**
         * Get event's position from the top-left corner of the dom container
         * @param {Event} ev    event
         * @return {Point}
         * @memberOf DomUtil
         */
        function getEventContainerPoint(ev: Event): Point;

        /**
         * set css style to the dom element
         * @param {HTMLElement} dom dom element
         * @param {string} strCss css text
         * @memberOf DomUtil
         */
        function setStyle(dom: HTMLElement, strCss: string): void;

        /**
         * Whether the dom has the given css class.
         * @param {HTMLElement} el HTML Element
         * @param {string} name css class
         * @memberOf DomUtil
         */
        function hasClass(el: HTMLElement, name: string): void;

        /**
         * add css class to dom element
         * @param {HTMLElement} el HTML Element
         * @param {string} name css class
         * @memberOf DomUtil
         */
        function addClass(el: HTMLElement, name: string): void;

        /**
         * Set dom's css class
         * @param {HTMLElement} el HTML Element
         * @param {string} name css class
         * @memberOf DomUtil
         */
        function setClass(el: HTMLElement, name: string): void;

        /**
         * Get dom's css class
         * @param {string} name css class
         * @retrun {String} class字符串
         * @memberOf DomUtil
         */
        function getClass(el: string): string;

        /**
         * Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
         * @param {HTMLElement} el
         * @param {Point} offset
         * @memberOf DomUtil
         */
        function setTransform(el: HTMLElement, offset: Point): void;
    }

    export namespace StringUtil {
        /**
         * Trim the string
         * @param {string} str
         * @return {string}
         * @memberOf StringUtil
         */
        function trim(str: string): string;

        /**
         * Escape special characters from string.
         * Including: \b \t \r \v \f
         * @param  {string} str string to escape
         * @return {string}
         * @memberOf StringUtil
         */
        function escapeSpecialChars(str: string): string;

        /**
         * Split string by specified char
         * @param {string} chr - char to split
         * @return {string[]}
         * @memberOf StringUtil
         */
        function splitWords(chr: string): string[];

        /**
         * Gets width of the text with a certain font.
         * More performant than stringLength.
         * @param {string} text - text to measure
         * @param {string} font - font of the text, same as the CSS font.
         * @return {number}
         * @memberOf StringUtil
         */
        function stringWidth(text: string, font: string): number;

        //  const fontHeight = {};

        /**
         * Gets size in pixel of the text with a certain font.
         * @param {string} text - text to measure
         * @param {string} font - font of the text, same as the CSS font.
         * @return {Size}
         * @memberOf StringUtil
         */
        function stringLength(text: string, font: string, size?: Size): Size;

        /**
         * Split text content by dom.
         * @param {string} content - content to split
         * @param {string} font - font of the text, same as the CSS font.
         * @return {number} wrapWidth - width to wrap
         * @return {string[]}
         * @memberOf StringUtil
         */
        function splitContent(content: string, font: string, wrapWidth: number): string[];
        /**
         * Replace variables wrapped by square brackets ({foo}) with actual values in props.
         * @example
         *     //  will returns 'John is awesome'
         *     const actual = replaceVariable('{foo} is awesome', {'foo' : 'John'});
         * @param {string} str      - string to replace
         * @param {object} props    - variable value properties
         * @return {string}
         * @memberOf StringUtil
         */
        function replaceVariable(str: string, props: object): string;

        /**
         * Gets text's align point according to the horizontalAlignment and verticalAlignment
         * @param  {Size} size                  - text size
         * @param  {string} horizontalAlignment - horizontalAlignment: left/middle/right
         * @param  {string} verticalAlignment   - verticalAlignment: top/middle/bottom
         * @return {Point}
         * @memberOf StringUtil
         */
        function getAlignPoint(size: Size, horizontalAlignment: string, verticalAlignment: string): Point;

        /**
         * Returns CSS Font from a symbol with text styles.
         * @param  {object} style symbol with text styles
         * @return {string}       CSS Font String
         * @memberOf StringUtil
         */
        function getFont(style: object): string;

        /**
         * Split a text to multiple rows according to the style.
         * @param {string} text     - text to split
         * @param {object} style    - text style
         * @return {object[]} the object's structure: { rowNum: rowNum, textSize: textSize, rows: textRows, rawSize : rawSize }
         * @memberOf StringUtil
         */
        function splitTextToRow(text: string, style: object): object[];
    }

    /**
     * This library uses ES2015 class system. <br />
     * Class is the root class of class hierachy. <br />
     * It provides utility methods to make it easier to manage configration options, merge mixins and add init hooks.
     * @example
     * var defaultOptions = {
     *     'foo' : 'bar'
     * };
     * class Foo extends maptalks.Class {
     *     constructor(id, options) {
     *         super(options);
     *         this.setId(id);
     *     }
     *
     *     setId(id) {
     *         this.id = id;
     *     }
     *
     *     whenCreated() {
     *         //  .....
     *     }
     * }
     *
     * Foo.mergeOptions(defaultOptions);
     *
     * Foo.addInitHook('whenCreated');
     * @category core
     * @abstract
     */
    export abstract class Class {
        id: string | number;
        options: any;
        /**
         * Create an object, set options if given and call all the init hooks.<br />
         * Options is where the object manages its configuration. Options passed to the object will be merged with parent's instead of overriding it.
         *
         * @param  {object} options - options to set
         */
        constructor(options?: any);

        /**
         * Create an object, set options if given and call all the init hooks.<br />
         * Options is where the object manages its configuration. Options passed to the object will be merged with parent's instead of overriding it.
         *
         * @param  {object} options - options to set
         */
        constructor(id: string | number, options?: any);

        /**
         * Visit and call all the init hooks defined on Class and its parents.
         * @return {Class} this
         */
        callInitHooks(): this;

        /**
         * Merges options with the default options of the object.
         * @param {object} options - options to set
         * @return {Class} this
         */
        setOptions(options: object): this;

        /**
         * 1. Return object's options if no parameter is provided. <br/>
         *
         * 2. update an option and enable/disable the handler if a handler with the same name existed.
         * @example
         * //  Get marker's options;
         * var options = marker.config();
         * //  Set map's option "draggable" to false and disable map's draggable handler.
         * map.config('draggable', false);
         * //  You can update more than one options like this:
         * map.config({
         *     'scrollWheelZoom' : false,
         *     'doubleClickZoom' : false
         * });
         * @param  {...conf: any[]} conf - config to update
         * @return {Class} this
         */

        config(...conf: any[]): this;

        /**
         * Default callback when config is called
         */
        onConfig(): /*conf*/ void;

        /**
         * Add an init hook, which will be called when the object is initiated. <br>
         * It is useful in plugin developing to do things when creating objects without changing class's constructor.
         * @param {string|Function} fn - a hook function or name of the hook function
         * @param {any[]} args         - arguments for the init hook function
         */
        static addInitHook(fn: Function, ...args: any[]): void;

        /**
         * Mixin the specified objects into the class as prototype properties or methods.
         * @param  {...object} sources - objects to mixin
         */
        static include(...sources: object[]): void;

        /**
         * Mixin options with the class's default options. <br />
         * @param  {object} options - options to merge.
         */
        static mergeOptions(options: object): void;
    }

    /** Common methods for classes can be rendered, e.g. Map, Layers */
    export class Renderable extends Class {
        /**
         * Register a renderer class with the given name.
         * @param  {string} name  - renderer's register key
         * @param  {Function} clazz - renderer's class, a function (not necessarily a [Class]{@link Class}).
         * @return {*} this
         * @function Renderable.registerRenderer
         */
        static registerRenderer(name: string, clazz: Function): any;

        /**
         * Get the registered renderer class by the given name
         * @param  {string} name  - renderer's register key
         * @return {Function} renderer's class
         * @function Renderable.getRendererClass
         */
        static getRendererClass(name: string): any;
    }

    /** This provides methods used for event handling. It's a mixin and not meant to be used directly. */
    export class Eventable extends Renderable {
        /**
         * Register a handler function to be called whenever this event is fired.
         *
         * @param {string} eventsOn                  - event types to register, seperated by space if more than one.
         * @param {Function} handler                 - handler function to be called
         * @param {object} [context=null]            - the context of the handler
         * @return {Any} this
         * @function Eventable.on
         * @example
         * foo.on('mousedown mousemove mouseup', onMouseEvent, foo);
         */
        on(eventsOn: string, handler: Function, context?: object): this;

        /**
         * Alias for [on]{@link Eventable.on}
         *
         * @param {string} eventTypes     - event types to register, seperated by space if more than one.
         * @param {Function} handler                 - handler function to be called
         * @param {object} [context=null]            - the context of the handler
         * @return {} this
         * @function Eventable.addEventListener
         */
        addEventListener(eventTypes: string, handler: Function, context?: object): this;

        /**
         * Same as on, except the listener will only get fired once and then removed.
         *
         * @param {string} eventTypes                - event types to register, seperated by space if more than one.
         * @param {Function} handler                 - listener handler
         * @param {object} [context=null]            - the context of the handler
         * @return {} this
         * @example
         * foo.once('mousedown mousemove mouseup', onMouseEvent, foo);
         * @function Eventable.once
         */
        once(eventTypes: string, handler: Function, context?: object): this;

        /**
         * Unregister the event handler for the specified event types.
         *
         * @param {string} eventsOff                - event types to unregister, seperated by space if more than one.
         * @param {Function} handler                - listener handler
         * @param {object} [context=null]           - the context of the handler
         * @return {} this
         * @example
         * foo.off('mousedown mousemove mouseup', onMouseEvent, foo);
         * @function Eventable.off
         */
        off(eventsOff: string, handler: Function, context?: object): this;

        /**
         * Alias for [off]{@link Eventable.off}
         *
         * @param {string} eventTypes    - event types to unregister, seperated by space if more than one.
         * @param {Function} handler                - listener handler
         * @param {object} [context=null]           - the context of the handler
         * @return {} this
         * @function Eventable.removeEventListener
         */
        removeEventListener(eventTypes: string, handler: Function, context?: object): this;

        /**
         * Returns listener's count registered for the event type.
         *
         * @param {string} eventType        - an event type
         * @param {Function} [hanlder=null] - listener function
         * @param {object} [context=null]   - the context of the handler
         * @return {number}
         * @function Eventable.listens
         */
        listens(eventType: string, handler: Function, context?: object): number;

        /**
         * Get all the listening event types
         *
         * @returns {string[]} events
         */
        getListeningEvents(): string[];

        /**
         * Copy all the event listener to the target object
         * @param {object} target - target object to copy to.
         * @return {} this
         * @function Eventable.copyEventListeners
         */
        copyEventListeners(target: object): this;

        /**
         * Fire an event, causing all handlers for that event name to run.
         *
         * @param  {string} eventType - an event type to fire
         * @param  {object} param     - parameters for the listener function.
         * @return {} this
         * @function Eventable.fire
         */
        fire(eventType: string, param: object): this;
    }

    /** Common methods for classes can be rendered, e.g. Map, Layers */
    export class Handlerable extends Eventable {}

    export interface JSONAble {
        /**
         * It is a static method. <br>
         * Register layer for JSON serialization and assign a JSON type.
         * @param  {string} type - JSON type
         * @function JSONAble.registerJSONType
         */
        registerJSONType(type: string): void;

        /**
         * It is a static method. <br>
         * Get class of input JSON type
         * @param  {string} type - JSON type
         * @return {Class}      Class
         * @function JSONAble.getJSONClass
         */
        getJSONClass(type: string): Class;

        /**
         * Get object's JSON Type
         * @return {string}
         * @function JSONAble.getJSONType
         */
        getJSONType(): string;
    }

    export interface TextEditable {
        /**
         * Start to edit the text, editing will be ended automatically whenever map is clicked.
         *
         * @return {TextMarker} this
         * @fires TextMarker#edittextstart
         */
        startEditText(): this;

        /**
         * End text edit.
         *
         * @return {TextMarker} this
         * @fires TextMarker#edittextend
         */
        endEditText(): this;

        /**
         * Whether the text is being edited.
         *
         * @return {boolean}
         */
        isEditingText(): boolean;

        /**
         * Get the text editor which is an [ui.UIMarker]{@link ui.UIMarker}
         * @return {ui.UIMarker} text editor
         */
        getTextEditor(): ui.UIMarker;
    }

    export interface CenterAble {
        /**
         * Get geometry's center
         * @return {Coordinate} - center of the geometry
         * @function CenterAble.getCoordinates
         */
        getCoordinates(): Coordinate;

        /**
         * Set a new center to the geometry
         * @param {Coordinate|number[]} coordinates - new center
         * @return {Geometry} this
         * @fires Geometry#positionchange
         * @function CenterAble.setCoordinates
         */
        setCoordinates(coordinates: Coordinate | Coordinate[] | number[]): this;
    }

    /** The central class of the library, to create a map on a container */
    export interface Map extends Handlerable, ui.Menuable {
        /** Version of librar */
        VERSION: string;

        /** Version of the JSON schema */
        JSON_VERSION: string;

        /** Add hooks for additional codes when map's loading complete, useful for plugin developping. Note that it can only be called before the map is created. */
        addOnLoadHook(fn: Function): Map;

        /** Reproduce a map from map's profile JSON. */
        fromJSON(container: string | HTMLElement, mapJSON: object, options?: MapJsonOptions): Map;

        /** Whether the map is loaded or not. */
        isLoaded(): boolean;

        /** Get map's container */
        getContainer(): HTMLElement;

        /** Get the spatial reference of the Map. */
        getSpatialReference(): SpatialReference;

        /** Change the spatial reference of the map. */
        setSpatialReference(spatialReference: SpatialReference): this;

        /** Get the projection of the map. */
        getProjection(): any;

        /** Get map's full extent, which is defined in map's spatial reference. */
        getFullExtent(): Extent;

        /** Set map's cursor style, cursor style is same with CSS. */
        setCursor(cursor: string): this;

        /** Reset map's cursor style. */
        resetCursor(): this;

        /** Get center of the map. */
        getCenter(): Coordinate;

        /** Set a new center to the map. */
        setCenter(center: Coordinate): this;

        /** Get map's size (width and height) in pixel. */
        getSize(): Size;

        /** Get container extent of the map */
        getContainerExtent(): PointExtent;

        /** Get the geographical extent of map's current view extent. */
        getExtent(): Extent;

        /** Get the projected geographical extent of map's current view extent. */
        getProjExtent(): Extent;

        /** Alias for getProjExtent */
        getPrjExtent(): Extent;

        /** Get the max extent that the map is restricted to. */
        getMaxExtent(): Extent;

        /** Sets the max extent that the map is restricted to. */
        setMaxExtent(extent: Extent): this;

        /** Get map's current zoom. */
        getZoom(): number;

        /** Caculate the target zoom if scaling from "fromZoom" by "scale" */
        getZoomForScale(scale: number, fromZoom: number, isFraction: boolean): number;

        /** Sets zoom of the map */
        setZoom(zoom: number, options?: object): this;

        /** Get the max zoom that the map can be zoom to. */
        getMaxZoom(): number;

        /** Sets the max zoom that the map can be zoom to. */
        setMaxZoom(maxZoom: number): this;

        /** Get the min zoom that the map can be zoom to. */
        getMinZoom(): number;

        /** Sets the min zoom that the map can be zoom to. */
        setMinZoom(minZoom: number): this;

        /** Maximum zoom the map has */
        getMaxNativeZoom(): number;

        /** Zoom for world point in WebGL context */
        getGLZoom(): number;

        /** Caculate scale from gl zoom to given zoom (default by current zoom) */
        getGLScale(zoom?: number): number;

        /** zoom in */
        zoomIn(): this;

        /** zoom out */
        zoomOut(): this;

        /** Whether the map is zooming */
        isZooming(): boolean;

        /** Whether the map is being interacted */
        isInteracting(): boolean;

        /** Sets the center and zoom at the same time. */
        setCenterAndZoom(center: Coordinate, zoom: number): this;

        /** Caculate the zoom level that contains the given extent with the maximum zoom level possible. */
        getFitZoom(extent: Extent, isFraction: boolean): number;

        /** Get map's current view (center/zoom/pitch/bearing) */
        getView(): object;

        /** Set map's center/zoom/pitch/bearing at one time */
        setView(view: object): void;

        /** Get map's resolution */
        getResolution(zoom: number): number;

        /** Get scale of resolutions from zoom to max zoom */
        getScale(zoom: number): number;

        /** Set the map to be fit for the given extent with the max zoom level possible.*/
        fitExtent(extent: Extent, zoomOffset: number): this;

        /** Get the base layer of the map. */
        getBaseLayer(): Layer;

        /** Sets a new base layer to the map. */
        setBaseLayer(baseLayer: Layer): this;

        /** Remove the base layer from the map */
        removeBaseLayer(): this;

        /** Get the layers of the map, except base layer (which should be by getBaseLayer). */
        getLayers(filter?: Function): Layer[];

        /** Get the layer with the given id. */
        getLayer(id: string): Layer;

        /**  Add a new layer on the top of the map. */
        addLayer(layer: Layer | Layer[]): this;

        /** Remove a layer from the map */
        removeLayer(layer: string | string[] | Layer | Layer[]): this;

        /** Sort layers according to the order provided, the last will be on the top. */
        sortLayers(layers: string[] | Layer[]): this;

        /** Exports image from the map's canvas. */
        toDataURL(options?: object): string;

        /** shorter alias for coordinateToPoint */
        coordToPoint(coordinate: Coordinate, zoom?: number, out?: Point): Point;

        /** shorter alias for pointToCoordinate */
        pointToCoord(point: Point, zoom: number, out?: Coordinate): Coordinate;

        /** shorter alias for coordinateToViewPoint */
        coordToViewPoint(coordinate: Coordinate, out?: Point): Point;

        /** shorter alias for viewPointToCoordinate */
        viewPointToCoord(viewPoint: Point, out?: Coordinate): Coordinate;

        /** shorter alias for coordinateToContainerPoint   */
        coordToContainerPoint(zoom?: number, out?: Point): Point;

        /** shorter alias for containerPointToCoordinate */
        containerPointToCoord(out?: Coordinate): Coordinate;

        /** Converts a container point to the view point. Usually used in plugin development. */
        containerPointToViewPoint(containerPoint: Point, out?: Point): Point;

        /** Converts a view point to the container point. Usually used in plugin development. */
        viewPointToContainerPoint(viewPoint: Point, out?: Point): Point;

        /** Checks if the map container size changed and updates the map if so. */
        checkSize(): this;

        /** Computes the coordinate from the given meter distance. */
        locate(coordinate: Coordinate, dx: number, dy: number): Coordinate;

        /** Return map's main panel */
        getMainPanel(): HTMLElement;

        /** Returns map panels. */
        getPanels(): object;

        /** Remove the map */
        remove(): this;

        /** whether the map is removed */
        isRemoved(): this;

        /** Whether the map is moving */
        isMoving(): this;

        /** Get device's devicePixelRatio, you can override it by setting devicePixelRatio in options. */
        getDevicePixelRatio(): number;

        /** Gets map panel's current view point. */
        offsetPlatform(): Point;

        /** Get map's view point, adding in frame offset */
        getViewPoint(): Point;

        /** Converts a coordinate to the 2D point in current zoom or in the specific zoom. */
        coordinateToPoint(coordinate: Coordinate, zoom?: number, out?: Point): Point;

        /** Converts a 2D point in current zoom or a specific zoom to a coordinate. Usually used in plugin development. */
        pointToCoordinate(point: Point, zoom: number, out?: Coordinate): Coordinate;

        /** Converts a geographical coordinate to view point. */
        coordinateToViewPoint(coordinate: Coordinate, out?: Point): Point;

        /** Converts a view point to the geographical coordinate. Usually used in plugin development. */
        viewPointToCoordinate(viewPoint: Point, out?: Coordinate): Coordinate;

        /** Convert a geographical coordinate to the container point. */
        coordinateToContainerPoint(coordinate: Coordinate, zoom?: number, out?: Point): Point;

        /** Converts a container point to geographical coordinate. */
        containerPointToCoordinate(point: Point, out?: Coordinate): Coordinate;

        /** Converts a container point extent to the geographic extent. */
        containerToExtent(containerExtent: PointExtent): Extent;

        /** Converts geographical distances to the pixel length. */
        distanceToPixel(xDist: number, yDist: number): Size;

        /** Converts geographical distances to the 2d point length. */
        distanceToPoint(xDist: number, yDist: number, zoom: number): Point;

        /** Converts pixel size to geographical distance. */
        pixelToDistance(width: number, height: number): number;

        /** Converts 2d point distances to geographic length. */
        pointToDistance(dx: number, dy: number, zoom: number): number;

        /** Computes the coordinate from the given pixel distance. */
        locateByPoint(coordinate: Coordinate, px: number, py: number): Coordinate;

        /** Update map's view with animation. */
        animateTo(view: object, options?: object, step?: Function): this;

        /** Whether the map is animating with .animateTo */
        isAnimating(): boolean;

        /** Get map's fov (field of view); */
        getFov(): number;

        /** Set a new fov to map */
        setFov(fov: number): this;

        /** Get map's bearing */
        getBearing(): number;

        /** Set a new bearing to map */
        setBearing(bearing: number): this;

        /** Get map's pitch */
        getPitch(): number;

        /** Set a new pitch to map */
        setPitch(pitch: number): this;

        /** Element is currently in fullscreen. */
        isFullScreen(): boolean;

        /** Request for the full screen */
        requestFullScreen(): this;

        /** Cancel full screen */
        cancelFullScreen(): this;

        /** Pan to the given coordinate */
        panTo(coordinate: Coordinate, options?: object): this;

        /** Pan the map by the give point */
        panBy(point: Point | number[], options?: object): this;

        /** Export the map's json, a snapshot of the map in JSON format. */
        toJSON(options?: object): object;

        /** Caculate distance of two coordinates. */
        computeLength(coord1: number[] | Coordinate, coord2: number[] | Coordinate): number;

        /** Caculate a geometry's length. */
        computeGeometryLength(geometry: Geometry): number;

        /** Caculate a geometry's area. */
        computeGeometryArea(geometry: Geometry): number;

        /** Identify the geometries on the given coordinate. */
        identify(opts: object, callback: Function): this;

        /** Zoom to the previous map view in view history */
        zoomToPreviousView(): object;

        /** Whether has more previous view */
        hasPreviousView(): boolean;

        /** Zoom to the next view in view history */
        zoomToNextView(): object;

        /** Whether has more next view */
        hasNextView(): boolean;

        /** Get map view history */
        getViewHistory(): object[];

        /** Add a control on the map. */
        addControl(control: control.Control): this;

        /** Remove a control from the map. */
        removeControl(control: control.Control): this;

        getRenderer<T extends renderer.CanvasRenderer>(): T;
    }

    export interface MapStatic {
        new (container: string | HTMLElement, opts?: MapOptions): Map;
    }

    export var Map: MapStatic;

    export abstract class Layer extends Eventable implements JSONAble {
        //  new(id: string | number, options: LayerOptions): Layer
        //  new(options?: any): Layer

        /** Reproduce a Layer from layer's JSON. */
        fromJSON(layerJSON: object): Layer;

        /**
         * load the tile layer, can't be overrided by sub-classes
         */
        load(): this;

        /**
         * Get the layer id
         * @returns {string} id
         */
        getId(): string;

        /**
         * Set a new id to the layer
         * @param {string} id - new layer id
         * @return {Layer} this
         * @fires Layer#idchange
         */
        setId(id: string): this;

        /**
         * Adds itself to a map.
         * @param {Map} map - map added to
         * @return {Layer} this
         */
        addTo(map: Map): this;

        /**
         * Set a z-index to the layer
         * @param {number} zIndex - layer's z-index
         * @return {Layer} this
         */
        setZIndex(zIndex: number): this;

        /**
         * Get the layer's z-index
         * @return {number}
         */
        getZIndex(): number;

        /**
         * Get Layer's minZoom to display
         * @return {number}
         */
        getMinZoom(): number;

        /**
         * Get Layer's maxZoom to display
         * @return {number}
         */
        getMaxZoom(): number;

        /**
         * Get layer's opacity
         * @returns {number}
         */
        getOpacity(): number;

        /**
         * Set opacity to the layer
         * @param {number} opacity - layer's opacity
         * @return {Layer} this
         */
        setOpacity(op: number): this;

        /**
         * If the layer is rendered by HTML5 Canvas.
         * @return {boolean}
         * @protected
         */
        isCanvasRender(): boolean;

        /**
         * Get the map that the layer added to
         * @returns {Map}
         */
        getMap(): Map;

        /**
         * Get projection of layer's map
         * @returns {object}
         */
        getProjection(): object;

        /**
         * Brings the layer to the top of all the layers
         * @returns {Layer} this
         */
        bringToFront(): Layer;

        /**
         * Brings the layer under the bottom of all the layers
         * @returns {Layer} this
         */
        bringToBack(): Layer;

        /**
         * Show the layer
         * @returns {Layer} this
         */
        show(): Layer;

        /**
         * Hide the layer
         * @returns {Layer} this
         */
        hide(): Layer;

        /**
         * Whether the layer is visible now.
         * @return {boolean}
         */
        isVisible(): boolean;

        /**
         * Remove itself from the map added to.
         * @returns {Layer} this
         */
        remove(): Layer;

        /**
         * Get the mask geometry of the layer
         * @return {Geometry}
         */
        getMask(): Geometry;

        /**
         * Set a mask geometry on the layer, only the area in the mask will be displayed.
         * @param {Geometry} mask - mask geometry, can only be a Marker with vector symbol, a Polygon or a MultiPolygon
         * @returns {Layer} this
         */
        setMask(mask: Geometry): Layer;

        /**
         * Remove the mask
         * @returns {Layer} this
         */
        removeMask(): Layer;

        /**
         * Prepare Layer's loading, this is a method intended to be overrided by subclasses.
         * @return {boolean} true to continue loading, false to cease.
         */
        onLoad(): boolean;

        /**
         * Whether the layer is loaded
         * @return {boolean}
         */
        isLoaded(): boolean;

        getRenderer<T extends renderer.CanvasRenderer>(): T;

        /**
         * It is a static method. <br>
         * Register layer for JSON serialization and assign a JSON type.
         * @param  {string} type - JSON type
         * @function JSONAble.registerJSONType
         */
        registerJSONType(type: string): void;

        /**
         * It is a static method. <br>
         * Get class of input JSON type
         * @param  {string} type - JSON type
         * @return {Class}      Class
         * @function JSONAble.getJSONClass
         */
        getJSONClass(type: string): Class;

        /**
         * Get object's JSON Type
         * @return {string}
         * @function JSONAble.getJSONType
         */
        getJSONType(): string;
    }

    //  export const Layer:Layer

    export interface TileSystem {
        "web-mercator": TileSystem;

        "tms-global-mercator": TileSystem;

        "tms-global-geodetic": TileSystem;

        baidu: TileSystem;

        /**
         * Get the default tile system's code for the projection.
         * @param  {object} projection      - a projection object
         * @return {string} tile system code
         */
        getDefault(projection: object): string;
    }

    export interface TileSystemStatic {
        new (sx: number, sy: number, ox: number, oy: number): TileSystem;
        new (sx: number[]): TileSystem;
    }

    export var TileSystem: TileSystemStatic;

    export interface TileLayer extends Layer {
        /**
         * Reproduce a TileLayer from layer's profile JSON.
         * @param  {object} layerJSON - layer's profile JSON
         * @return {TileLayer}
         * @static
         * @private
         * @function
         */
        fromJSON(layerJSON: object): TileLayer;

        /**
         * Get tile size of the tile layer
         * @return {Size}
         */
        getTileSize(): Size;

        /**
         * Get tiles at zoom z (or current zoom)
         * @param {number} z - zoom
         * @return {object[]} tile descriptors
         */
        getTiles(z: number, parentLayer?: Layer): object[];

        /**
         * Get tile's url
         * @param {number} x
         * @param {number} y
         * @param {number} z
         * @returns {string} url
         */
        getTileUrl(x: number, y: number, z: number): string;

        /**
         * Clear the layer
         * @return {TileLayer} this
         */
        clear(): TileLayer;

        /**
         * Export the tile layer's profile json. <br>
         * Layer's profile is a snapshot of the layer in JSON format. <br>
         * It can be used to reproduce the instance by [fromJSON]{@link Layer#fromJSON} method
         * @return {object} layer's profile JSON
         */
        toJSON(): object;

        /**
         * Get tilelayer's spatial reference.
         * @returns {SpatialReference} spatial reference
         */
        getSpatialReference(): SpatialReference;
    }

    export interface TileLayerInstanceStatic {
        new (id: string | number, options?: TileLayerOptions): TileLayer;
    }

    export var TileLayer: TileLayerInstanceStatic;

    export interface GroupTileLayer extends TileLayer {
        /**
         * Get children TileLayer
         * @returns {TileLayer[]}
         */
        getLayers(): TileLayer[];
    }

    export interface GroupTileLayerStatic {
        new (id: string | number, layers: TileLayer[], options?: TileLayerOptions): GroupTileLayer;
    }

    export var GroupTileLayer: GroupTileLayerStatic;

    export interface WMSTileLayer extends TileLayer {}

    export interface WMSTileLayerStatic {
        new (id: string | number, options?: WMSTileLayerOptions): WMSTileLayer;
    }

    export const WMSTileLayer: WMSTileLayerStatic;

    export interface CanvasTileLayer extends TileLayer {
        /**
         * The interface method to draw on canvsa tile
         * @param  {HTMLCanvasElement} canvas  canvas to draw on
         * @param  {Object} options current options
         * @param  {Object} options current options
         */
        drawTile(canvas: HTMLCanvasElement, ...options: any[] /*canvas, options*/): void;
    }
    export interface CanvasTileLayerStatic {
        new (id: string | number, options?: TileLayerOptions): CanvasTileLayer;
    }
    export const CanvasTileLayer: CanvasTileLayerStatic;

    export interface OverlayLayer extends Layer {
        /**
         * Get a geometry by its id
         * @param  {string|number} id   - id of the geometry
         * @return {Geometry}
         */
        getGeometryById(id: string | number): Geometry;

        /**
         * Get all the geometries or the ones filtered if a filter function is provided.
         * @param {Function} [filter=undefined]  - a function to filter the geometries
         * @param {object} [context=undefined]   - context of the filter function, value to use as this when executing filter.
         * @return {Geometry[]}
         */
        getGeometries(filter?: Function, context?: object): Geometry[];

        /**
         * Get the first geometry, the geometry at the bottom.
         * @return {Geometry} first geometry
         */
        getFirstGeometry(): Geometry;

        /**
         * Get the last geometry, the geometry on the top
         * @return {Geometry} last geometry
         */
        getLastGeometry(): Geometry;

        /**
         * Get count of the geometries
         * @return {number} count
         */
        getCount(): number;

        /**
         * Get extent of all the geometries in the layer, return null if the layer is empty.
         * @return {Extent} - extent of the layer
         */
        getExtent(): Extent;

        /**
         * Executes the provided callback once for each geometry present in the layer in order.
         * @param  {Function} fn - a callback function
         * @param  {*} [context=undefined]   - callback's context, value to use as this when executing callback.
         * @return {OverlayLayer} this
         */
        forEach(fn: Function, context?: any): OverlayLayer;

        /**
         * Creates a GeometryCollection with all the geometries that pass the test implemented by the provided function.
         * @param  {Function} fn      - Function to test each geometry
         * @param  {*} [context=undefined]  - Function's context, value to use as this when executing function.
         * @return {GeometryCollection} A GeometryCollection with all the geometries that pass the test
         */
        filter(fn: Function, context?: any): GeometryCollection;

        /**
         * Whether the layer is empty.
         * @return {boolean}
         */
        isEmpty(): boolean;

        /**
         * Adds one or more geometries to the layer
         * @param {Geometry|Geometry[]} geometries - one or more geometries
         * @param {boolean|object} [fitView=false]  - automatically set the map to a fit center and zoom for the geometries
         * @param {string} [fitView.easing=out]  - default animation type
         * @param {number} [fitView.duration=map.options.zoomAnimationDuration]  - default animation time
         * @param {Function} [fitView.step=null]  - step function during animation, animation frame as the parameter
         * @return {OverlayLayer} this
         */
        addGeometry(geometries: Geometry | Geometry[], fitView?: boolean | object): OverlayLayer;

        /**
         * Get minimum zindex of geometries
         */
        getGeoMinZIndex(): number;

        /**
         * Get maximum zindex of geometries
         */
        getGeoMaxZIndex(): number;

        /**
         * Removes one or more geometries from the layer
         * @param  {string|string[]|Geometry|Geometry[]} geometries - geometry ids or geometries to remove
         * @returns {OverlayLayer} this
         */
        removeGeometry(geometries: string | string[] | Geometry | Geometry[]): OverlayLayer;

        /**
         * Clear all geometries in this layer
         * @returns {OverlayLayer} this
         */
        clear(): OverlayLayer;

        /**
         * Called when geometry is being removed to clear the context concerned.
         * @param  {Geometry} geometry - the geometry instance to remove
         * @protected
         */
        onRemoveGeometry(geometry: Geometry): Geometry;

        /**
         * Gets layer's style.
         * @return {object|object[]} layer's style
         */
        getStyle(): object | object[];

        /**
         * Sets style to the layer, styling the geometries satisfying the condition with style's symbol. <br>
         * Based on filter type in [mapbox-gl-js's style specification]{https:// www.mapbox.com/mapbox-gl-js/style-spec/#types-filter}.
         * @param {object|object[]} style - layer's style
         * @returns {VectorLayer} this
         * @fires VectorLayer#setstyle
         * @example
         * layer.setStyle([
            {
              'filter': ['==', 'count', 100],
              'symbol': {'markerFile' : 'foo1.png'}
            },
            {
              'filter': ['==', 'count', 200],
              'symbol': {'markerFile' : 'foo2.png'}
            }
          ]);
         */
        setStyle(style: any | any[]): this;

        /**
         * Removes layers' style
         * @returns {VectorLayer} this
         * @fires VectorLayer#removestyle
         */
        removeStyle(): this;
    }

    export interface VectorLayer extends OverlayLayer {
        /**
         * Identify the geometries on the given coordinate
         * @param  {maptalks.Coordinate} coordinate   - coordinate to identify
         * @param  {object} [options=null]  - options
         * @param  {object} [options.tolerance=0] - identify tolerance in pixel
         * @param  {object} [options.count=null]  - result count
         * @return {Geometry[]} geometries identified
         */
        identify(coordinate: Coordinate, options?: object): Geometry[];

        /**
         * Export the VectorLayer's JSON. <br>
         * @param  {object} [options=null] - export options
         * @param  {object} [options.geometries=null] - If not null and the layer is a [OverlayerLayer]{@link OverlayLayer},
         *                                            the layer's geometries will be exported with the given "options.geometries" as a parameter of geometry's toJSON.
         * @param  {Extent} [options.clipExtent=null] - if set, only the geometries intersectes with the extent will be exported.
         * @return {object} layer's JSON
         */
        toJSON(options?: object): object;
    }

    export interface VectorLayerStatic {
        new (id: string | number, geometries?: Geometry | Geometry[] | null, options?: VectorLayerOptions): VectorLayer;
    }
    export var VectorLayer: VectorLayerStatic;

    export interface CanvasLayer extends Layer {
        /**
         * An optional interface function called only once before the first draw, useful for preparing your canvas operations.
         * @param  {CanvasRenderingContext2D } context - CanvasRenderingContext2D of the layer canvas.
         * @return {object[]} objects that will be passed to function draw(context, ..) as parameters.
         */
        prepareToDraw(context?: CanvasRenderingContext2D): any[];

        /**
         * The required interface function to draw things on the layer canvas.
         * @param  {CanvasRenderingContext2D} context - CanvasRenderingContext2D of the layer canvas.
         * @param  {*} params.. - parameters returned by function prepareToDraw(context).
         */
        draw(context: CanvasRenderingContext2D, ...params: any[]): void;

        /**
         * An optional interface function to draw while map is interacting.
         * By default, it will call draw method instead.
         * You can override this method if you are clear with what to draw when interacting to improve performance.
         * @param  {CanvasRenderingContext2D} context - CanvasRenderingContext2D of the layer canvas.
         * @param  {*} params.. - parameters returned by function prepareToDraw(context).
         */
        drawOnInteracting(context: CanvasRenderingContext2D, ...params: any[]): void;

        /**
         * Redraw the layer
         * @return {CanvasLayer} this
         */
        redraw(): this;

        /**
         * Start animation
         * @return {CanvasLayer} this
         */
        play(): this;

        /**
         * Pause the animation
         * @return {CanvasLayer} this
         */
        pause(): this;

        /**
         * If the animation is playing
         * @return {boolean}
         */
        isPlaying(): boolean;

        /**
         * Clear layer's canvas
         * @return {CanvasLayer} this
         */
        clearCanvas(): this;

        /**
         * Ask the map to redraw the layer canvas without firing any event.
         * @return {CanvasLayer} this
         */
        requestMapToRender(): this;

        /**
         * Ask the map to redraw the layer canvas and fire layerload event
         * @return {CanvasLayer} this
         */
        completeRender(): this;

        /**
         * Callback function when layer's canvas is created. <br>
         * Override it to do anything needed.
         */
        onCanvasCreate(): this;

        /**
         * The event callback for map's zoomstart event.
         * @param  {object} param - event parameter
         */
        onZoomStart(param?: object): void;

        /**
         * The event callback for map's zooming event.
         * @param  {object} param - event parameter
         */
        onZooming(param?: object): void;

        /**
         * The event callback for map's zoomend event.
         * @param  {object} param - event parameter
         */
        onZoomEnd(param?: object): void;

        /**
         * The event callback for map's movestart event.
         * @param  {object} param - event parameter
         */
        onMoveStart(param?: object): void;

        /**
         * The event callback for map's moving event.
         * @param  {object} param - event parameter
         */
        onMoving(param?: object): void;

        /**
         * The event callback for map's moveend event.
         * @param  {object} param - event parameter
         */
        onMoveEnd(param?: object): void;

        /**
         * The event callback for map's resize event.
         * @param  {object} param - event parameter
         */
        onResize(param?: object): void;

        /**
         * The callback function to double buffer. <br>
         * In default, it just draws and return, and you can override it if you need to process the canvas image before drawn.
         * @param  {CanvasRenderingContext2D} bufferContext CanvasRenderingContext2D of double buffer of the layer canvas.
         * @param  {CanvasRenderingContext2D} context CanvasRenderingContext2D of the layer canvas.
         */
        doubleBuffer(bufferContext: CanvasRenderingContext2D, context: CanvasRenderingContext2D /*, context*/): this;
    }

    export interface CanvasLayerStatic {
        new (id: string | number, options: CanvasLayerOptions): CanvasLayer;
    }
    export var CanvasLayer: CanvasLayerStatic;

    export interface ParticleLayer extends CanvasLayer {
        /**
         * Interface method to get particles's position at time t.
         * @param  {number} t - current time in milliseconds
         */
        getParticles(t?: number): void;
    }

    export interface ParticleLayerStatic {
        new (id: string, options?: CanvasLayerOptions): ParticleLayer;
    }
    export const ParticleLayer: ParticleLayerStatic;

    export interface ImageLayer extends Layer {
        /**
         * Set images and redraw
         * @param {object[]} images - new images
         * @return {ImageLayer} this
         */
        setImages(images: object[]): this;

        /**
         * Get images
         * @return {object[]}
         */
        getImages(): object[];
    }

    export interface ImageLayerStatic {
        new (id: string | number, images?: object[], options?: ImageLayerOptions): ImageLayer;
    }
    export const ImageLayer: ImageLayerStatic;

    export interface SpatialReference {}

    export class Extent {
        xmin: number;
        xmax: number;
        ymin: number;
        ymax: number;

        constructor(p1: number, p2: number, p3: number, p4: number);
        constructor(x: Coordinate | Point, y: Coordinate | Point);
        constructor(json: object);
        constructor(extent: Extent);

        /**
         * Add the extent with a coordinate or a point.
         * @param {Coordinate|Point} p - point or coordinate to add
         * @returns {Extent} a new extent
         */
        add(p: Coordinate | Point): Extent;

        /**
         * Substract the extent with a coordinate or a point.
         * @param {Coordinate|Point} p - point or coordinate to substract
         * @returns {Extent} a new extent
         */
        sub(p: Coordinate | Point): Extent;

        /**
         * Round the extent
         * @return {Extent} rounded extent
         */
        round(): Extent;

        /**
         * Alias for sub
         * @param {Coordinate|Point} p - point or coordinate to substract
         * @returns {Extent} a new extent
         */
        substract(p: Coordinate | Point): Extent;

        /**
         * Get the minimum point
         * @params {Coorindate} [out=undefined] - optional point to receive result
         * @return {Coordinate}
         */
        getMin(out?: Coordinate): Coordinate;

        /**
         * Get the maximum point
         * @params {Coorindate} [out=undefined] - optional point to receive result
         * @return {Coordinate}
         */
        getMax(out?: Coordinate): Coordinate;

        /**
         * Get center of the extent.
         * @params {Coorindate} [out=undefined] - optional point to receive result
         * @return {Coordinate}
         */
        getCenter(out?: Coordinate): Coordinate;

        /**
         * Whether the extent is valid
         * @protected
         * @return {boolean}
         */
        isValid(): boolean;

        /**
         * Compare with another extent to see whether they are equal.
         * @param  {Extent}  ext2 - extent to compare
         * @return {boolean}
         */
        equals(ext2: Extent): boolean;

        /**
         * Whether it intersects with another extent
         * @param  {Extent}  ext2 - another extent
         * @return {boolean}
         */
        intersects(ext2: Extent): boolean;

        /**
         * Whether the extent is within another extent
         * @param  {Extent}  ext2 - another extent
         * @returns {boolean}
         */
        within(extent: Extent): boolean;

        /**
         * Whether the extent contains the input point.
         * @param  {Coordinate|number[]} coordinate - input point
         * @returns {boolean}
         */
        contains(c: Coordinate | number[]): boolean;

        /**
         * Get the width of the Extent
         * @return {number}
         */
        getWidth(): number;

        /**
         * Get the height of the Extent
         * @return {number}
         */
        getHeight(): number;

        /**
         * Get size of the Extent
         * @return {Size}
         */
        getSize(): Size;

        /**
         * Combine it with another extent to a larger extent.
         * @param  {Extent|Coordinate|Point} extent - extent/coordinate/point to combine into
         * @returns {Extent} extent combined
         */
        combine(extent: Extent | Coordinate | Point): Extent;

        /**
         * Gets the intersection extent of this and another extent.
         * @param  {Extent} extent - another extent
         * @return {Extent} intersection extent
         */
        intersection(extent: Extent): Extent;

        /**
         * Expand the extent by distance
         * @param  {Size|number} distance  - distance to expand
         * @returns {Extent} a new extent expanded from
         */
        expand(distance: Size | number): Extent;

        /**
         * Get extent's JSON object.
         * @return {object} jsonObject
         * @example
         * //  {xmin : 100, ymin: 10, xmax: 120, ymax:20}
         * var json = extent.toJSON();
         */
        toJSON(): object;

        /**
         * Get a coordinate array of extent's rectangle area, containing 5 coordinates in which the first equals with the last.
         * @return {Coordinate[]} coordinates array
         */
        toArray(): Coordinate[];

        /**
         * Get a copy of the extent.
         * @return {Extent} copy
         */
        copy(): Extent;

        /**
         * Convert to a new extent
         * @param  {Function} fn convert function on each point
         * @return {Extent}
         */
        convertTo(fn: Function): Extent;
    }

    export class PointExtent extends Extent {}

    export class Size {
        width: number;
        height: number;
        constructor(width: number, height: number);
        /**
         * Returns a copy of the size
         * @return {Size} copy
         */
        copy(): Size;

        /**
         * Returns the result of addition of another size.
         * @param {Size} size - size to add
         * @return {Size} result
         */
        add(size: Size): Size;

        /**
         * Returns the result of addition of another size.
         * @param {number} x - size to add
         * @param {number} y - size to add
         * @return {Size} result
         */
        add(x: number, y: number): Size;

        /**
         * Compare with another size to see whether they are equal.
         * @param {Size} size - size to compare
         * @return {boolean}
         */
        equals(size: Size): boolean;

        /**
         * Returns the result of multiplication of the current size by the given number.
         * @param {number} ratio - ratio to multi
         * @return {Size} result
         */
        multi(ratio: number): Size;

        /**
         * Converts the size object to a [Point]{Point}
         * @return {Point} point
         */
        toPoint(): Point;

        /**
         * Converts the size object to an array [width, height]
         * @return {number[]}
         */
        toArray(): number[];

        /**
         * Convert the size object to a json object {width : .., height : ..}
         * @return {object} json
         */
        toJSON(): object;
    }

    export abstract class Position {
        x: number;
        y: number;
        constructor(x: number, y: number);
        constructor(points: number[]);
        constructor(point: object);
        /**
         * Set point or coordinate's x, y value
         * @params {number} x - x value
         * @params {number} y - y value
         * @return {Coordinate|Point} this
         */
        set(x: number, y: number): Coordinate | Point;

        /**
         * Return abs value of the point
         * @return {Coordinate|Point} abs point
         */
        abs(): Coordinate | Point;

        /**
         * Like math.round, rounding the point's xy.
         * @return {Coordinate|Point} rounded point
         */
        round(): Coordinate | Point;

        /**
         * Returns the distance between the current and the given point.
         * @param  {Coordinate|Point} point - another point
         * @return {number} distance
         */
        distanceTo(point: Coordinate | Point): number;

        /**
         * Returns a copy of the coordinate
         * @return {Coordinate|Point} copy
         */
        copy(): Coordinate | Point;

        /**
         * Returns the result of addition of another coordinate.
         * @param {Coordinate|Point|any[]|number} x - coordinate to add
         * @param {number} [y=undefined] - optional, coordinate to add
         * @return {Coordinate|Point} result
         */
        add(x: Coordinate | Point | any[] | number, y?: number): Coordinate | Point;

        /**
         * Returns the result of subtraction of another coordinate.
         * @param {Coordinate|Point|any[]|number} x - coordinate to add
         * @param {number} [y=undefined] - optional, coordinate to add
         * @return {Coordinate|Point} result
         */
        sub(x: Coordinate | Point | any[] | number, y?: number): Coordinate | Point;

        /**
         * Alias for sub
         * @param {Coordinate|Point|any[]|number} x - coordinate to add
         * @param {number} [y=undefined] - optional, coordinate to add
         * @return {Coordinate|Point} result
         */
        substract(x: Coordinate | Point | any[] | number, y?: number): Coordinate | Point;

        /**
         * Returns the result of multiplication of the current coordinate by the given number.
         * @param {number} ratio - ratio to multi
         * @return {Coordinate|Point} result
         */
        multi(ratio: number): Coordinate | Point;

        /**
         * Returns the result of division of the current point by the given number.
         * @param {number} n - number to div
         * @return {Coordinate|Point} result
         */
        div(n: number): Coordinate | Point;

        /**
         * Compare with another coordinate to see whether they are equal.
         * @param {Coordinate|Point} c - coordinate to compare
         * @return {boolean}
         */
        equals(c: Coordinate | Point): boolean;

        /**
         * Whether the coordinate/point is zero
         */
        isZero(): boolean;

        /**
         * Convert to a number array [x, y]
         * @return {number[]} number array
         */
        toArray(): number[];

        /**
         * Formats coordinate number using fixed-point notation.
         * @param  {number} n The number of digits to appear after the decimal point
         * @return {Coordinate}   fixed coordinate
         */
        toFixed(n: number): Coordinate;

        /**
         * Convert to a json object {x : .., y : ..}
         * @return {object} json
         */
        toJSON(): object;
    }

    export class Coordinate extends Position {
        /**
         * Convert one or more Coordinate objects to GeoJSON style coordinates
         * @param  {Coordinate|Coordinate[]} coordinates - coordinates to convert
         * @return {number[]|number[][]}
         * @example
         * //  result is [[100,0], [101,1]]
         * var numCoords = Coordinate.toNumberArrays([new Coordinate(100,0), new Coordinate(101,1)]);
         */
        static toNumberArrays(coordinates: Coordinate | Coordinate[]): number[] | number[][];

        /**
         * Convert one or more GeoJSON style coordiantes to Coordinate objects
         * @param  {number[]|number[][]} coordinates - coordinates to convert
         * @return {Coordinate|Coordinate[]}
         * @example
         * var coordinates = Coordinate.toCoordinates([[100,0], [101,1]]);
         */
        static toCoordinates(coordinates: number[] | number[][]): Coordinate | Coordinate[];
    }

    export class Point extends Position {
        constructor(x: number, y: number);
        constructor(points: number[]);
        constructor(point: object);

        /**
         * Compare with another point with a delta
         * @param {Point} p
         * @param {number} delta
         * @return {boolean}
         */
        closeTo(p: Point, delta: number): boolean;

        /**
         * Return the magitude of this point: this is the Euclidean
         * distance from the 0, 0 coordinate to this point's x and y
         * coordinates.
         * @return {number} magnitude
         */
        mag(): number;

        /**
         * Calculate this point but as a unit vector from 0, 0, meaning
         * that the distance from the resulting point to the 0, 0
         * coordinate will be equal to 1 and the angle from the resulting
         * point to the 0, 0 coordinate will be the same as before.
         * @return {Point} unit vector point
         */
        unit(): Point;

        /**
         * Compute a perpendicular point, where the new y coordinate
         * is the old x coordinate and the new x coordinate is the old y
         * coordinate multiplied by -1
         * @return {Point} perpendicular point
         */
        perp(): Point;

        /**
         * Get the angle between this point and another point, in radians
         * from mapbox/point-geometry
         * @param {Point} b the other point
         * @return {number} angle
         */
        angleWith(b: Point): number;

        /**
         * Find the angle of the two vectors, solving the formula for
         * the cross product a x b = |a||b|sin(θ) for θ.
         * from mapbox/point-geometry
         *
         * @param {number} x the x-coordinate
         * @param {number} y the y-coordinate
         * @return {number} the angle in radians
         */
        angleWithSep(x: number, y: number): number;

        /**
         * Rotate this point around the 0, 0 origin by an angle a,
         * given in radians
         * from mapbox/point-geometry
         *
         * @param {number} a angle to rotate around, in radians
         * @return {Point} output point
         */
        rotate(a: number): Point;
    }

    export interface Geometry extends Handlerable, JSONAble, ui.Menuable {
        /**
         * Returns the first coordinate of the geometry.
         *
         * @return {Coordinate} First Coordinate
         */
        getFirstCoordinate(): Coordinate;

        /**
         * Returns the last coordinate of the geometry.
         *
         * @return {Coordinate} Last Coordinate
         */
        getLastCoordinate(): Coordinate;

        /**
         * Adds the geometry to a layer
         * @param {Layer | Map} layer    - layer add to
         * @param {boolean} [fitview=false] - automatically set the map to a fit center and zoom for the geometry
         * @return {Geometry} this
         * @fires Geometry#add
         */
        addTo(layer: Layer | Map, fitview?: boolean): this;

        /**
         * Get the layer which this geometry added to.
         * @returns {Layer} - layer added to
         */
        getLayer(): Layer;

        /**
         * Get the map which this geometry added to
         * @returns {Map} - map added to
         */
        getMap(): Map;

        /**
         * Gets geometry's id. Id is set by setId or constructor options.
         * @returns {string|number} geometry的id
         */
        getId(): string | number;

        /**
         * Set geometry's id.
         * @param {string} id - new id
         * @returns {Geometry} this
         * @fires Geometry#idchange
         */
        setId(id: string): this;

        /**
         * Get geometry's properties. Defined by GeoJSON as [feature's properties]{@link http:// geojson.org/geojson-spec.html#feature-objects}.
         *
         * @returns {object} properties
         */
        getProperties(): object;

        /**
         * Set a new properties to geometry.
         * @param {object} properties - new properties
         * @returns {Geometry} this
         * @fires Geometry#propertieschange
         */
        setProperties(properties: object): this;

        /**
         * Get type of the geometry, e.g. "Point", "LineString"
         * @returns {string} type of the geometry
         */
        getType(): string;

        /**
         * Get symbol of the geometry
         * @returns {object} geometry's symbol
         */
        getSymbol(): object;

        /**
         * Set a new symbol to style the geometry.
         * @param {object} symbol - new symbol
         * @see {@tutorial symbol Style a geometry with symbols}
         * @return {Geometry} this
         * @fires Geometry#symbolchange
         */
        setSymbol(symbol: object): this;

        /**
         * Get symbol's hash code
         * @return {string}
         */
        getSymbolHash(): string;

        /**
         * Update geometry's current symbol.
         *
         * @param  {object | any[]} props - symbol properties to update
         * @return {Geometry} this
         * @fires Geometry#symbolchange
         * @example
         * var marker = new Marker([0, 0], {
         *    symbol : {
         *       markerType : 'ellipse',
         *       markerWidth : 20,
         *       markerHeight : 30
         *    }
         * });
         * //  update symbol's markerWidth to 40
         * marker.updateSymbol({
         *     markerWidth : 40
         * });
         */
        updateSymbol(props: object | any[]): this;

        /**
         * Get the geographical center of the geometry.
         *
         * @returns {Coordinate}
         */
        getCenter(): Coordinate;

        /**
         * Get the geometry's geographical extent
         *
         * @returns {Extent} geometry's extent
         */
        getExtent(): Extent;

        /**
         * Get geometry's screen extent in pixel
         *
         * @returns {PointExtent}
         */
        getContainerExtent(out?: PointExtent): PointExtent;

        /**
         * Get pixel size of the geometry, which may vary in different zoom levels.
         *
         * @returns {Size}
         */
        getSize(): Size;

        /**
         * Whehter the geometry contains the input container point.
         *
         * @param  {Point|Coordinate} point - input container point or coordinate
         * @param  {number} [t=undefined] - tolerance in pixel
         * @return {boolean}
         * @example
         * var circle = new Circle([0, 0], 1000)
         *     .addTo(layer);
         * var contains = circle.containsPoint(new maptalks.Point(400, 300));
         */
        containsPoint(containerPoint: Point | Coordinate, t?: number): boolean;

        /**
         * Show the geometry.
         *
         * @return {Geometry} this
         * @fires Geometry#show
         */
        show(): this;

        /**
         * Hide the geometry
         *
         * @return {Geometry} this
         * @fires Geometry#hide
         */
        hide(): this;

        /**
         * Whether the geometry is visible
         *
         * @returns {boolean}
         */
        isVisible(): boolean;

        /**
         * Get zIndex of the geometry, default is 0
         * @return {number} zIndex
         */
        getZIndex(): number;

        /**
         * Set a new zIndex to Geometry and fire zindexchange event (will cause layer to sort geometries and render)
         * @param {numberPointSet} zIndex - new zIndex
         * @return {Geometry} this
         * @fires Geometry#zindexchange
         */
        setZIndex(zIndex: number): this;

        /**
         * Only set a new zIndex to Geometry without firing zindexchange event. <br>
         * Can be useful to improve perf when a lot of geometries' zIndex need to be updated. <br>
         * When updated N geometries, You can use setZIndexSilently with (N-1) geometries and use setZIndex with the last geometry for layer to sort and render.
         * @param {number} zIndex - new zIndex
         * @return {Geometry} this
         */
        setZIndexSilently(zIndex: number): this;

        /**
         * Bring the geometry on the top
         * @return {Geometry} this
         * @fires Geometry#zindexchange
         */
        bringToFront(): this;

        /**
         * Bring the geometry to the back
         * @return {Geometry} this
         * @fires Geometry#zindexchange
         */
        bringToBack(): this;

        /**
         * Translate or move the geometry by the given offset.
         *
         * @param  {number} x - x offset
         * @param  {number} y - y offset
         * @return {Geometry} this
         * @fires Geometry#positionchange
         * @fires Geometry#shapechange
         */
        translate(x: number, y: number): this;

        /**
         * Translate or move the geometry by the given offset.
         *
         * @param  {number[]} x - x offset
         * @return {Geometry} this
         * @fires Geometry#positionchange
         * @fires Geometry#shapechange
         */
        translate(x: number[]): this;

        /**
         * Flash the geometry, show and hide by certain internal for times of count.
         *
         * @param {number} [interval=100]     - interval of flash, in millisecond (ms)
         * @param {number} [count=4]          - flash times
         * @param {Function} [cb=null]        - callback function when flash ended
         * @param {*} [context=null]          - callback context
         * @return {Geometry} this
         */
        flash(interval?: number, count?: number, cb?: Function, context?: any): this;

        /**
         * Returns a copy of the geometry without the event listeners.
         * @returns {Geometry} copy
         */
        copy(): this;

        /**
         * remove itself from the layer if any.
         * @returns {Geometry} this
         * @fires Geometry#removestart
         * @fires Geometry#remove
         */
        remove(): this;

        /**
         * Exports [geometry]{@link http:// geojson.org/geojson-spec.html#feature-objects} out of a GeoJSON feature.
         * @return {object} GeoJSON Geometry
         */
        toGeoJSONGeometry(): object;

        /**
         * Exports a GeoJSON feature.
         * @param {object} [opts=null]              - export options
         * @param {boolean} [opts.geometry=true]    - whether export geometry
         * @param {boolean} [opts.properties=true]  - whether export properties
         * @returns {object} GeoJSON Feature
         */
        toGeoJSON(opts?: object): object;

        /**
         * Get the geographic length of the geometry.
         * @returns {number} geographic length, unit is meter
         */
        getLength(): number;

        /**
         * Get the geographic area of the geometry.
         * @returns {number} geographic area, unit is sq.meter
         */
        getArea(): number;

        /**
         * Rotate the geometry of given angle around a pivot point
         * @param {number} angle - angle to rotate in degree
         * @param {Coordinate} [pivot=null]  - optional, will be the geometry's center by default
         * @returns {Geometry} this
         */
        rotate(angle: number, pivot?: Coordinate): this;

        /**
         * Start to edit
         * @param {object} [options=null]        - edit options
         * @param {object} [options.symbol=null] - symbol for the geometry during editing
         * @param {object} [options.fixAspectRatio=false]    - fix outline's aspect ratio when resizing
         * @param {object} [options.centerHandleSymbol=null] - symbol of center handle
         * @param {object} [options.vertexHandleSymbol=null] - symbol of vertex handle
         * @param {object} [options.newVertexHandleSymbol=null] - symbol of new vertex handle
         * @param {object} [options.removeVertexOn=contextmenu] - event to remove a vertex from line or polygon, contextmenu by default
         * @return {Geometry} this
         */
        startEdit(opts?: object): this;

        /**
         * End editing.
         * @return {Geometry} this
         */
        endEdit(): this;

        /**
         * Redo the edit
         * @return {Geometry} this
         */
        redoEdit(): this;

        /**
         * Undo the edit
         * @return {Geometry} this
         */
        undoEdit(): this;

        /**
         * cancel the edit
         * @return {Geometry} this
         */
        cancelEdit(): this;

        /**
         * Whether the geometry is being edited.
         * @return {boolean}
         */
        isEditing(): boolean;

        /**
         * Whether the geometry is being dragged.
         * @reutrn {boolean}
         */
        isDragging(): boolean;

        /**
         * Animate the geometry
         *
         * @param  {object}   styles          - styles to animate
         * @param  {object}   [options=null]  - animation options
         * @param  {number}   [options.duration=1000]      - duration
         * @param  {number}   [options.startTime=null]  - time to start animation in ms
         * @param  {string}   [options.easing=linear]   - animation easing: in, out, inAndOut, linear, upAndDown
         * @param  {boolean}  [options.repeat=false]      - repeat animation
         * @param  {Function} [step=null]  - step function during animation, animation frame as the parameter
         * @return {animation.Player} animation player
         * @example
         * var player = marker.animate({
         *     'symbol': {
         *         'markerHeight': 82
         *      }
         * }, {
         *     'duration': 2000
         * }, function (frame) {
         *     if (frame.state.playState === 'finished') {
         *         console.log('animation finished');
         *     }
         * });
         * player.pause();
         */
        animate(styles: object, options?: object, step?: Function): animation.Player;

        /**
         * Set an InfoWindow to the geometry
         * @param {object} options - construct [options]{@link ui.InfoWindow#options} for the InfoWindow
         * @return {Geometry} this
         * @example
         * geometry.setInfoWindow({
         *     title    : 'This is a title',
         *     content  : '<div style="color:#f00">This is content of the InfoWindow</div>'
         * });
         */
        setInfoWindow(options: object): this;

        /**
         * Get the InfoWindow instance.
         * @return {ui.InfoWindow}
         */
        getInfoWindow(): ui.InfoWindow;

        /**
         * Open the InfoWindow, default on the center of the geometry.
         * @param  {Coordinate} [coordinate=null] - coordinate to open the InfoWindow
         * @return {Geometry} this
         */
        openInfoWindow(coordinate?: Coordinate): this;

        /**
         * Close the InfoWindow
         * @return {Geometry} this
         */
        closeInfoWindow(): this;

        /**
         * Remove the InfoWindow
         * @return {Geometry} this
         */
        removeInfoWindow(): this;

        /**
         * Produce a geometry from one or more [JSON]{@link Geometry#toJSON} or GeoJSON.
         * @param  {object} json - a geometry's JSON or a geojson
         * @return {Geometry} geometry
         * @example
         * var profile = {
                "feature": {
                    "type": "Feature",
                    "id" : "point1",
                    "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
                    "properties": {"prop0": "value0"}
                },
                // construct options.
                "options":{
                    "draggable" : true
                },
                // symbol
                "symbol":{
                    "markerFile"  : "http:// foo.com/icon.png",
                    "markerWidth" : 20,
                    "markerHeight": 20
                }
            };
            const marker = Geometry.fromJSON(profile);
        */
        fromJSON(json: any): Geometry;

        /**
         * Export a profile json out of the geometry. <br>
         * Besides exporting the feature object, a profile json also contains symbol, construct options and infowindow info.<br>
         * The profile json can be stored somewhere else and be used to reproduce the geometry later.<br>
         * Due to the problem of serialization for functions, event listeners and contextmenu are not included in profile json.
         * @example
         *     //  an example of a profile json.
         * var profile = {
                "feature": {
                    "type": "Feature",
                    "id" : "point1",
                    "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
                    "properties": {"prop0": "value0"}
                },
                // construct options.
                "options":{
                    "draggable" : true
                },
                // symbol
                "symbol":{
                    "markerFile"  : "http:// foo.com/icon.png",
                    "markerWidth" : 20,
                    "markerHeight": 20
                },
                // infowindow info
                "infowindow" : {
                    "options" : {
                        "style" : "black"
                    },
                    "title" : "this is a infowindow title",
                    "content" : "this is a infowindow content"
                }
            };
        * @param {object}  [options=null]          - export options
        * @param {boolean} [opts.geometry=true]    - whether export feature's geometry
        * @param {boolean} [opts.properties=true]  - whether export feature's properties
        * @param {boolean} [opts.options=true]     - whether export construct options
        * @param {boolean} [opts.symbol=true]      - whether export symbol
        * @param {boolean} [opts.infoWindow=true]  - whether export infowindow
        * @return {object} profile json object
        */
        toJSON(options?: object): any;
    }

    export const Geometry: Geometry;

    export interface Path extends Geometry {
        /**
         * Show the linestring with animation
         * @param  {object} [options=null] animation options
         * @param  {number} [options.duration=1000] duration
         * @param  {string} [options.easing=out] animation easing
         * @param  {Function} [cb=null] callback function in animation, function parameters: frame, currentCoord
         * @example
         *  line.animateShow({
         *    duration : 2000,
         *    easing : 'linear'
         *  }, function (frame, currentCoord) {
         *    // frame is the animation frame
         *    // currentCoord is current coordinate of animation
         *  });
         * @return {LineString}         this
         */
        animateShow(options?: object, cb?: Function): this;
    }

    export interface Marker extends Geometry, CenterAble {}

    export interface MarkerStatic {
        new (coordinates: Coordinate | number[], options?: MarkerOptions): Marker;
    }

    export var Marker: MarkerStatic;

    export interface TextMarker extends Marker {
        /**
         * Get text content of the label
         * @returns {string}
         */
        getContent(): string;

        /**
         * Set a new text content to the label
         * @return {Label} this
         * @fires Label#contentchange
         */
        setContent(): this;
    }

    export interface Label extends TextMarker, TextEditable {
        /**
         * Get label's box style
         * @return {object}
         */
        getBoxStyle(): object;

        /**
         * Set a new box style to the label
         * @param {object}
         * @returns {Label} this
         */
        setBoxStyle(style: object): this;

        /**
         * Get label's text symbol
         * @return {object}
         */
        getTextSymbol(): object;

        /**
         * Set a new text symbol to the label
         * @param {object} symbol
         * @returns {Label} this
         */
        setTextSymbol(symbol: object): this;
    }

    export interface LabelStatic {
        new (contetn: string, coordinates: Coordinate | number[], options?: LabelOptions): Label;
    }
    export var Label: LabelStatic;

    export interface TextBox extends TextMarker, TextEditable {
        /**
         * Get textbox's width
         * @return {number}
         */
        getWidth(): number;

        /**
         * Set new width to textbox
         * @param {number} width
         * returns {TextBox} this
         */
        setWidth(width: number): this;

        /**
         * Get textbox's height
         * @return {number}
         */
        getHeight(): number;

        /**
         * Set new height to textbox
         * @param {number} height
         * returns {TextBox} this
         */
        setHeight(height: number): this;

        /**
         * Get textbox's boxSymbol
         * @return {object} boxsymbol
         */
        getBoxSymbol(): object;

        /**
         * Set a new box symbol to textbox
         * @param {object} symbol
         * returns {TextBox} this
         */
        setBoxSymbol(symbol: object): this;

        /**
         * Get textbox's text style
         * @return {object}
         */
        getTextStyle(): object;

        /**
         * Set a new text style to the textbox
         * @param {object} style new text style
         * returns {TextBox} this
         */
        setTextStyle(style: object): this;
    }

    export interface TextBoxStatic {
        new (
            content: string,
            coordinates: Coordinate | number[],
            width: number,
            height: number,
            options?: TextBoxOptions,
        ): TextBox;
    }
    export var TextBox: TextBoxStatic;

    export interface Polygon extends Path {
        /**
         * Set coordinates to the polygon
         *
         * @param {number[] | number[][][] | Coordinate[] | Coordinate[][]} coordinates - new coordinates
         * @return {Polygon} this
         * @fires Polygon#shapechange
         */
        setCoordinates(coordinates: number[] | number[][][] | Coordinate[] | Coordinate[][]): this;

        /**
         * Gets polygons's coordinates
         *
         * @returns {Coordinate[][]}
         */
        getCoordinates(): Coordinate[][];

        /**
         * Get center of linestring's intersection with give extent
         * @example
         *  const extent = map.getExtent();
         *  const center = line.getCenterInExtent(extent);
         * @param {Extent} extent
         * @return {Coordinate} center, null if line doesn't intersect with extent
         */
        getCenterInExtent(extent: Extent): Coordinate;

        /**
         * Gets shell's coordinates of the polygon
         *
         * @returns {Coordinate[]}
         */
        getShell(): Coordinate[];

        /**
         * Gets holes' coordinates of the polygon if it has.
         * @returns {Coordinate[][]}
         */
        getHoles(): Coordinate[][];

        /**
         * Whether the polygon has any holes inside.
         *
         * @returns {boolean}
         */
        hasHoles(): boolean;
    }

    export interface PolygonStatic {
        new (coordinates: number[][] | number[][][] | Coordinate[] | Coordinate[][], options?: PathOptions): Polygon;
    }
    export var Polygon: PolygonStatic;

    export interface LineString extends Path {
        /**
         * Set new coordinates to the line string
         * @param {Coordinate[]|number[][]} coordinates - new coordinates
         * @fires LineString#shapechange
         * @return {LineString} this
         */
        setCoordinates(coordinates: Coordinate[] | number[][]): this;

        /**
         * Get coordinates of the line string
         * @return {Coordinate[] | number[][]} coordinates
         */
        getCoordinates(): Coordinate[] | number[][];

        /**
         * Get center of linestring's intersection with give extent
         * @example
         *  const extent = map.getExtent();
         *  const center = line.getCenterInExtent(extent);
         * @param {Extent} extent
         * @return {Coordinate} center, null if line doesn't intersect with extent
         */
        getCenterInExtent(extent: Extent): Coordinate;
    }

    export interface LineStringStatic {
        new (coordinates: Coordinate[] | number[][], options?: LineStringOptions): LineString;
        new (coordinates: any[], options?: LineStringOptions): LineString;
    }
    export const LineString: LineStringStatic;

    export interface Curve extends LineString {}

    export interface ArcCurve extends Curve {}

    export interface ArcCurveStatic {
        new (coordinates: Coordinate[] | number[][], options?: ArcCurveOptions): ArcCurve;
    }

    export var ArcCurve: ArcCurveStatic;

    export interface QuadBezierCurve extends Curve {}

    export interface QuadBezierCurveStatic {
        new (coordinates: Coordinate[] | number[][], options?: LineStringOptions): QuadBezierCurve;
    }

    export var QuadBezierCurve: QuadBezierCurveStatic;

    export interface CubicBezierCurve extends Curve {}
    export interface CubicBezierCurveStatic {
        new (coordinates: Coordinate[] | number[][], options?: LineStringOptions): CubicBezierCurve;
    }

    export var CubicBezierCurve: CubicBezierCurveStatic;

    export interface Connectable {
        /**
         * Gets the source of the connector line.
         * @return {Geometry|control.Control|ui.UIComponent}
         * @function Connectable.getConnectSource
         */
        getConnectSource(): Geometry | control.Control | ui.UIComponent;

        /**
         * Sets the source to the connector line.
         * @param {Geometry|control.Control|ui.UIComponent} src
         * @return {ConnectorLine} this
         * @function Connectable.setConnectSource
         */
        setConnectSource(src: Geometry | control.Control | ui.UIComponent): this;

        /**
         * Gets the target of the connector line.
         * @return {Geometry|control.Control|ui.UIComponent}
         * @function Connectable.getConnectTarget
         */
        getConnectTarget(): Geometry | control.Control | ui.UIComponent;

        /**
         * Sets the target to the connector line.
         * @param {Geometry|control.Control|ui.UIComponent} target
         * @return {ConnectorLine} this
         * @function Connectable.setConnectTarget
         */
        setConnectTarget(target: Geometry | control.Control | ui.UIComponent): this;
    }

    export interface ConnectorLine extends Connectable, LineString {}

    export interface ConnectorLineStatic {
        new (
            src: Geometry | control.Control | ui.UIComponent,
            target: Geometry | control.Control | ui.UIComponent,
            options?: ConnectorLineOptions,
        ): ConnectorLine;
    }

    export var ConnectorLine: ConnectorLineStatic;

    export interface ArcConnectorLine extends Connectable, LineString {}

    export interface ArcConnectorLineStatic {
        new (
            src: Geometry | control.Control | ui.UIComponent,
            target: Geometry | control.Control | ui.UIComponent,
            options?: ArcConnectorLineOptions,
        ): ArcConnectorLine;
    }
    export var ArcConnectorLine: ArcConnectorLineStatic;

    export interface Ellipse extends Polygon, CenterAble {
        /**
         * Get geometry's center
         * @return {Coordinate} - center of the geometry
         *
         */
        getCoordinates(): Coordinate;

        /**
         * Set a new center to the geometry
         * @param {Coordinate|number[]} coordinates - new center
         * @return {Geometry} this
         * @fires Geometry#positionchange
         *
         */
        setCoordinates(coordinates: Coordinate[] | number[]): this;

        /**
         * Set coordinates to the polygon
         *
         * @param {number[] | number[][][] | Coordinate[] | Coordinate[][]} coordinates - new coordinates
         * @return {Polygon} this
         * @fires Polygon#shapechange
         */
        setCoordinates(coordinates: number[] | number[][][] | Coordinate[] | Coordinate[][]): this;

        /**
         * Gets polygons's coordinates
         *
         * @returns {Coordinate[][]}
         */
        getCoordinates(): Coordinate[][];

        /**
         * Get ellipse's width
         * @return {number}
         */
        getWidth(): number;

        /**
         * Set new width to ellipse
         * @param {number} width - new width
         * @fires Ellipse#shapechange
         * @return {Ellipse} this
         */
        setWidth(width: number): this;

        /**
         * Get ellipse's height
         * @return {number}
         */
        getHeight(): number;

        /**
         * Set new height to ellipse
         * @param {number} height - new height
         * @fires Ellipse#shapechange
         * @return {Ellipse} this
         */
        setHeight(height: number): number;

        /**
         * Gets the shell of the ellipse as a polygon, number of the shell points is decided by [options.numberOfShellPoints]{@link Circle#options}
         * @return {Coordinate[]} - shell coordinates
         */
        getShell(): Coordinate[];

        /**
         * Ellipse won't have any holes, always returns null
         * @return {object[]} an empty array
         */
        getHoles(): object[];

        /**
         * Gets holes' coordinates of the polygon if it has.
         * @returns {Coordinate[][]}
         */
        getHoles(): Coordinate[][];
    }

    export interface EllipseStatic {
        new (center: Coordinate | number[], width: number, height: number, options?: EllipseOptions): Ellipse;
    }
    export var Ellipse: EllipseStatic;

    export interface Circle extends Polygon, CenterAble {
        /**
         * Get geometry's center
         * @return {Coordinate} - center of the geometry
         *
         */
        getCoordinates(): Coordinate;

        /**
         * Set a new center to the geometry
         * @param {Coordinate|number[]} coordinates - new center
         * @return {Geometry} this
         * @fires Geometry#positionchange
         *
         */
        setCoordinates(coordinates: Coordinate[] | number[]): this;

        /**
         * Set coordinates to the polygon
         *
         * @param {number[] | number[][][] | Coordinate[] | Coordinate[][]} coordinates - new coordinates
         * @return {Polygon} this
         * @fires Polygon#shapechange
         */
        setCoordinates(coordinates: number[] | number[][][] | Coordinate[] | Coordinate[][]): this;

        /**
         * Gets polygons's coordinates
         *
         * @returns {Coordinate[][]}
         */
        getCoordinates(): Coordinate[][];

        /**
         * Gets the shell of the ellipse as a polygon, number of the shell points is decided by [options.numberOfShellPoints]{@link Circle#options}
         * @return {Coordinate[]} - shell coordinates
         */
        getShell(): Coordinate[];

        /**
         * Ellipse won't have any holes, always returns null
         * @return {object[]} an empty array
         */
        getHoles(): object[];

        /**
         * Gets holes' coordinates of the polygon if it has.
         * @returns {Coordinate[][]}
         */
        getHoles(): Coordinate[][];

        /**
         * Get radius of the circle
         * @return {number}
         */
        getRadius(): number;

        /**
         * Set a new radius to the circle
         * @param {number} radius - new radius
         * @return {Circle} this
         * @fires Circle#shapechange
         */
        setRadius(radius: number): this;
    }

    export interface CircleStatic {
        new (center: Coordinate | number[], radius: number, options?: EllipseOptions): Circle;
    }
    export const Circle: CircleStatic;

    export interface Sector extends Circle {
        /**
         * Get the sector's start angle
         * @return {number}
         */
        getStartAngle(): number;

        /**
         * Set a new start angle to the sector
         * @param {number} startAngle
         * @return {Sector} this
         * @fires Sector#shapechange
         */
        setStartAngle(startAngle: number): this;

        /**
         * Get the sector's end angle
         * @return {number}
         */
        getEndAngle(): number;

        /**
         * Set a new end angle to the sector
         * @param {number} endAngle
         * @return {Sector} this
         * @fires Sector#shapechange
         */
        setEndAngle(endAngle: number): this;

        /**
         * Gets the shell of the sector as a polygon, number of the shell points is decided by [options.numberOfShellPoints]{@link Sector#options}
         * @return {Coordinate[]} - shell coordinates
         */
        getShell(): Coordinate[];
    }

    export interface SectorStatic {
        new (
            center: Coordinate | number[],
            radius: number,
            startAngle: number,
            endAngle: number,
            options?: EllipseOptions,
        ): Sector;
    }
    export var Sector: SectorStatic;

    export interface Rectangle extends Polygon {
        /**
         * Get coordinates of rectangle's northwest
         * @return {Coordinate}
         */
        getCoordinates(): Coordinate;

        /**
         * Set a new coordinate for northwest of the rectangle
         * @param {Coordinate} nw - coordinates of new northwest
         * @return {Rectangle} this
         * @fires Rectangle#positionchange
         */
        setCoordinates(nw: Coordinate): this;

        /**
         * Set coordinates to the polygon
         *
         * @param {number[] | number[][][] | Coordinate[] | Coordinate[][]} coordinates - new coordinates
         * @return {Polygon} this
         * @fires Polygon#shapechange
         */
        setCoordinates(coordinates: number[] | number[][][] | Coordinate[] | Coordinate[][]): this;

        /**
         * Gets polygons's coordinates
         *
         * @returns {Coordinate[][]}
         */
        getCoordinates(): Coordinate[][];

        /**
         * Get rectangle's width
         * @return {number}
         */
        getWidth(): number;

        /**
         * Set new width to the rectangle
         * @param {number} width - new width
         * @fires Rectangle#shapechange
         * @return {Rectangle} this
         */
        setWidth(width: number): this;

        /**
         * Get rectangle's height
         * @return {number}
         */
        getHeight(): number;

        /**
         * Set new height to rectangle
         * @param {number} height - new height
         * @fires Rectangle#shapechange
         * @return {Rectangle} this
         */
        setHeight(height: number): this;

        /**
         * Gets the shell of the rectangle as a polygon
         * @return {Coordinate[]} - shell coordinates
         */
        getShell(): Coordinate[];

        /**
         * Rectangle won't have any holes, always returns null
         * @return {object[]} an empty array
         */
        getHoles(): object[];

        /**
         * Gets holes' coordinates of the polygon if it has.
         * @returns {Coordinate[][]}
         */
        getHoles(): Coordinate[][];
    }

    export interface RectangleStatic {
        new (coordinates: Coordinate | number[], width: number, height: number, options?: PathOptions): Rectangle;
    }
    export var Rectangle: RectangleStatic;

    export interface GeometryCollection extends Geometry {
        /**
         * Set new geometries to the geometry collection
         * @param {Geometry[]} geometries
         * @return {GeometryCollection} this
         * @fires GeometryCollection#shapechange
         */
        setGeometries(geometries: Geometry[]): this;

        /**
         * Get geometries of the geometry collection
         * @return {Geometry[]} geometries
         */
        getGeometries(): Geometry[];

        /**
         * Executes the provided callback once for each geometry present in the collection in order.
         * @param  {Function} fn             - a callback function
         * @param  {*} [context=undefined]   - callback's context
         * @return {GeometryCollection} this
         */
        forEach(fn: Function, context?: any): this;

        /**
         * Creates a GeometryCollection with all elements that pass the test implemented by the provided function.
         * @param  {Function} fn      - Function to test each geometry
         * @param  {*} [context=undefined]    - Function's context
         * @return {GeometryCollection} A GeometryCollection with all elements that pass the test
         * @example
         * var filtered = collection.filter(['==', 'foo', 'bar]);
         * @example
         * var filtered = collection.filter(geometry => geometry.getProperties().foo === 'bar');
         */
        filter(fn: Function, context?: any): GeometryCollection;

        /**
         * Creates a GeometryCollection with all elements that pass the test implemented by the provided function.
         * @param  {any[]} expression      - Function to test each geometry
         * @param  {*} [context=undefined]    - Function's context
         * @return {GeometryCollection} A GeometryCollection with all elements that pass the test
         * @example
         * var filtered = collection.filter(['==', 'foo', 'bar]);
         * @example
         * var filtered = collection.filter(geometry => geometry.getProperties().foo === 'bar');
         */
        filter(exp: any[], context?: any): GeometryCollection;

        /**
         * Translate or move the geometry collection by the given offset.
         * @param  {Coordinate} offset - translate offset
         * @return {GeometryCollection} this
         */
        translate(offset: Coordinate): this;

        /**
         * Translate or move the geometry by the given offset.
         *
         * @param  {number[]} x - x offset
         * @return {Geometry} this
         * @fires Geometry#positionchange
         * @fires Geometry#shapechange
         */
        translate(x: number[]): this;

        /**
         * Translate or move the geometry by the given offset.
         *
         * @param  {number} x - x offset
         * @param  {number} y - y offset
         * @return {Geometry} this
         * @fires Geometry#positionchange
         * @fires Geometry#shapechange
         */
        translate(x: number, y: number): this;

        /**
         * Whether the geometry collection is empty
         * @return {boolean}
         */
        isEmpty(): boolean;
    }

    export interface GeometryCollectionStatic {
        /**
         * @param {Geometry[]} geometries - GeometryCollection's geometries
         * @param {object} [options=null] - options defined in [nGeometryCollection]{@link GeometryCollection#options}
         */
        new (geometries: Geometry[], options?: object): GeometryCollection;
    }
    export var GeometryCollection: GeometryCollectionStatic;

    export interface MultiGeometry extends GeometryCollection {
        /**
         * Get coordinates of the collection
         * @return {Coordinate[]|Coordinate[][]|Coordinate[][][]} coordinates
         */
        getCoordinates(): Coordinate[] | Coordinate[][] | Coordinate[][][];

        /**
         * Set new coordinates to the collection
         * @param {Coordinate[]|Coordinate[][]|Coordinate[][][]} coordinates
         * @returns {Geometry} this
         * @fires maptalk.Geometry#shapechange
         */
        setCoordinates(coordinates: Coordinate[] | Coordinate[][] | Coordinate[][][]): this;
    }
    export interface MultiGeometryStatic {
        new <T extends MultiGeometry>(geoType: Class, type: string, data: Geometry[], options?: GeometryOptions): T;
    }
    export var MultiGeometry: MultiGeometryStatic;

    export interface MultiPoint extends MultiGeometry {
        /**
         * Find the closet point to the give coordinate
         * @param {Coordinate} coordinate coordinate
         * @returns {Coordinate} coordinate
         */
        findClosest(coordinate: Coordinate): Coordinate;
    }
    export interface MultiPointStatic {
        new (data: number[][] | Coordinate[] | Marker[], options?: GeometryOptions): MultiPoint;
    }

    export var MultiPoint: MultiPointStatic;

    export interface MultiLineString extends MultiGeometry {}

    export interface MultiLineStringStatic {
        new (data: number[][][] | Coordinate[][] | LineString[], options?: MultiLineStringOptions): MultiLineString;
    }
    export var MultiLineString: MultiLineStringStatic;

    export interface MultiPolygon extends MultiGeometry {}

    export interface MultiPolygonStatic {
        new (data: number[][][][] | Coordinate[][][] | Polygon[], options?: GeometryOptions): MultiPolygon;
    }

    export var MultiPolygon: MultiPolygonStatic;

    export namespace GeoJSON {
        /**
         * Convert one or more GeoJSON objects to geometry
         * @param  {string|object|object[]} geoJSON - GeoJSON objects or GeoJSON string
         * @param  {Function} [foreachFn=undefined] - callback function for each geometry
         * @return {Geometry} a geometry array when input is a FeatureCollection
         * @example
         * var collection = {
         *      "type": "FeatureCollection",
         *      "features": [
         *          { "type": "Feature",
         *            "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
         *            "properties": {"prop0": "value0"}
         *           },
         *           { "type": "Feature",
         *             "geometry": {
         *                 "type": "LineString",
         *                 "coordinates": [
         *                     [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
         *                 ]
         *             },
         *             "properties": {
         *                 "prop0": "value0",
         *                 "prop1": 0.0
         *             }
         *           },
         *           { "type": "Feature",
         *             "geometry": {
         *                 "type": "Polygon",
         *                 "coordinates": [
         *                     [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
         *                       [100.0, 1.0], [100.0, 0.0] ]
         *                 ]
         *             },
         *             "properties": {
         *                 "prop0": "value0",
         *                 "prop1": {"this": "that"}
         *             }
         *          }
         *      ]
         *  }
         *  //  A geometry array.
         *  const geometries = GeoJSON.toGeometry(collection, geometry => { geometry.config('draggable', true); });
         */
        function toGeometry(geoJSON: string | object | object[], foreachFn?: Function): Geometry;
    }

    export class MapTool extends Eventable {
        _markerLayer: Layer;
        /**
         * Adds the map tool to a map.
         * @param {Map} map
         * @return {MapTool} this
         * @fires MapTool#add
         */
        addTo(map: Map): this;

        /**
         * Gets the map it added to.
         * @return {Map} map
         */
        getMap(): Map;

        /**
         * Enable the map tool.
         * @return {MapTool} this
         * @fires MapTool#enable
         */
        enable(): this;

        /**
         * Disable the map tool
         * @return {MapTool} this
         * @fires MapTool#disable
         */
        disable(): this;

        /**
         * Returns whether the tool is enabled
         * @return {boolean} true | false
         */
        isEnabled(): boolean;

        remove(): boolean;
    }

    export class DrawTool extends MapTool {
        /**
         * Register a new mode for DrawTool
         * @param  {string} name       mode name
         * @param  {object} modeAction modeActions
         * @param  {object} modeAction.action the action of DrawTool: click, mousedown, clickDblclick
         * @param  {object} modeAction.create the create method of drawn geometry
         * @param  {object} modeAction.update the update method of drawn geometry
         * @param  {object} modeAction.generate the method to generate geometry at the end of drawing.
         * @example
         * // Register "CubicBezierCurve" mode to draw Cubic Bezier Curves.
         * DrawTool.registerMode('CubicBezierCurve', {
            'action': 'clickDblclick',
            'create': path => new CubicBezierCurve(path),
            'update': (path, geometry) => {
                geometry.setCoordinates(path);
            },
            'generate': geometry => geometry
        }
        });
        */
        static registerMode(name: string, modeAction: DrawToolModeActionOptions): void;

        /**
         * Get mode actions by mode name
         * @param  {string} name DrawTool mode name
         * @return {object}      mode actions
         */
        static getRegisterMode(name: string): object;

        constructor(options?: DrawToolOptions);

        /**
         * Get current mode of draw tool
         * @return {string} mode
         */
        getMode(): string;

        /**
         * Set mode of the draw tool
         * @param {string} mode - mode of the draw tool
         * @expose
         */
        setMode(mode: string): this;

        /**
         * Get symbol of the draw tool
         * @return {object} symbol
         */
        getSymbol(): object;

        /**
         * Set draw tool's symbol
         * @param {object} symbol - symbol set
         * @returns {DrawTool} this
         */
        setSymbol(symbol: object): this;

        /**
         * Get geometry is currently drawing
         * @return {Geometry} geometry currently drawing
         */
        getCurrentGeometry(): Geometry;

        /**
         * Undo drawing, only applicable for click/dblclick mode
         * @return {DrawTool} this
         */
        undo(): this;

        /**
         * Redo drawing, only applicable for click/dblclick mode
         * @return {DrawTool} this
         */
        redo(): this;

        /**
         * End current draw
         * @param {object} [param=null] params of drawend event
         * @returns {DrawTool} this
         */
        endDraw(param?: object): this;
    }

    export class DistanceTool extends DrawTool {
        constructor(optinos?: DistanceToolOptions);

        /**
         * Clear the measurements
         * @return {DistanceTool} this
         */
        clear(): this;

        /**
         * Get the VectorLayers with the geometries drawn on the map during measuring.
         * @return {Layer[]}
         */
        getMeasureLayers(): Layer[];

        /**
         * Get last measuring result
         * @return {number}
         */
        getLastMeasure(): number;
    }

    export class AreaTool extends DistanceTool {}

    export namespace CRS {
        /**
         * Predefined CRS of well-known WGS84 (aka EPSG:4326)
         * @type {CRS}
         * @constant
         */
        const WGS84: CRS;

        /**
         * Alias for CRS.WGS84
         * @type {CRS}
         * @constant
         */
        const EPSG4326: CRS;

        /**
         * Projected Coordinate System used by google maps that has the following alias: 'EPSG:3785', 'GOOGLE', 'EPSG:900913'
         * @type {CRS}
         * @constant
         */
        const EPSG3857: CRS;

        /**
         * A CRS represents a simple Cartesian coordinate system. <br>
         * Maps x, y directly, is useful for maps of flat surfaces (e.g. indoor maps, game maps).
         * @type {CRS}
         * @constant
         */
        const IDENTITY: CRS;

        /**
         * Official coordinate system in China (aka EPSG:4490), in most cases, it can be considered the same with WGS84.
         * @type {CRS}
         * @see  {@link http:// spatialreference.org/ref/sr-org/7408/}
         * @constant
         */
        const CGCS2000: CRS;

        /**
         * Alias for static CGCS2000
         * @type {CRS}
         * @constant
         */
        const EPSG4490: CRS;

        /**
         * Projection used by [Baidu Map]{@link http:// map.baidu.com}, a popular web map service in China.
         * @type {CRS}
         * @constant
         */
        const BD09LL: CRS;

        /**
         * A encrypted CRS usded in the most online map services in China..
         * @type {CRS}
         * @see {@link https:// en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China}
         * @constant
         */
        const GCJ02: CRS;

        /**
         * Create a [proj4]{@link https:// github.com/OSGeo/proj.4} style CRS used by maptalks <br>
         * @example
         * {
         *     "type"       : "proj4",
         *     "properties" : {
         *         "proj"   : "+proj=longlat +datum=WGS84 +no_defs"
         *     }
         * }
         * var crs_wgs84 = CRS.createProj4("+proj=longlat +datum=WGS84 +no_defs");
         * @param  {string} proj - a proj4 projection string.
         * @return {CRS}
         */
        function createProj4(proj: string): CRS;
    }

    export class CRS {
        type: string;
        properties: object;
        constructor(type: string, properties: object);
    }

    /**
     * Transformation between projected coordinates and base 2d point system.
     * A core class used internally for mapping map's (usually geographical) coordinates to 2d points.<br>
     *
     * @category geo
     * @protected
     */
    export interface Transformation {
        /**
         * Transform a projected coordinate to a 2d point. <br>
         * Parameter scale in transform/untransform method is used to scale the result 2d points on map's different zoom levels.
         * @param  {number[]|Coordinate} coordinates - projected coordinate to transform
         * @param  {number} scale                              - transform scale
         * @return {Point} 2d point.
         */
        transform(coordinates: number[] | Coordinate, scale: number, out?: Point): Point;

        /**
         * Transform a 2d point to a projected coordinate.
         * @param  {Point} point   - 2d point
         * @param  {number} scale           - transform scale
         * @return {Coordinate}  projected coordinate.
         */
        untransform(point: Point, scale: number, out?: Coordinate): Coordinate;
    }
    export interface TransformationStatic {
        /**
         * The base 2d point system is a fixed system that is consistent with HTML coordinate system: on X-Axis, left is smaller and right is larger; on Y-Axis, top is smaller and bottom is larger. <br>
         * As map's coordinates may not be in the same order(e.g. on a mercator projected earth, top is larger and bottom is smaller), <br>
         * transformation provides mapping functions to map arbitrary coordinates system to the fixed 2d point system. <br>
         * How to transform is decided by the constructor parameters which is a 4 number array [a, b, c, d]:<br>
         * a : the order scale of X-axis values 1 means right is larger and -1 means the reverse, left is larger;<br>
         * b : the order scale of Y-axis values 1 means bottom is larger and -1 means the reverse, top is larger;<br>
         * c : x of the origin point of the projected coordinate system <br>
         * d : y of the origin point of the projected coordinate system <br>
         * e.g.: Transformation parameters for Google map: [1, -1, -20037508.34, 20037508.34] <br>
         * @param  {number[]} matrix transformation array
         */
        new (matrix: number[]): Transformation;
    }
    export const Transformation: TransformationStatic;

    export abstract class Handler {
        /**
         * Enables the handler
         * @return {Handler} this
         */
        enable(): this;

        /**
         * Disablesthe handler
         * @return {Handler} this
         */
        disable(): this;

        /**
         * Returns true if the handler is enabled.
         * @return {boolean}
         */
        enabled(): boolean;
    }

    export abstract class DragHandler extends Handler {}

    export namespace SpatialReference {
        function getProjectionInstance(prjName: string): any;

        function loadArcgis(url: string, cb: Function, options?: object): void;

        function loadWMTS(url: string, cb: Function, options?: object): void;
    }
}
