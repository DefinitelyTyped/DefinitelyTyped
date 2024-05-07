export const INTERNAL_LAYER_PREFIX: string;
/**
 * Symbol properties containing external resources
 */
export const RESOURCE_PROPERTIES: string[];

/**
 * Corresponding size properties for the above resource properties
 */
export const RESOURCE_SIZE_PROPERTIES: Array<Array<string | null>>;

/**
 * numeric symbol properties
 */
export const NUMERICAL_PROPERTIES: object;

/**
 *  color symbol properties
 */
export const COLOR_PROPERTIES: string[];

export interface MapOptions {
    center: Coordinate | number[] | undefined;
    zoom: number | undefined;
    spatialReference?: object | undefined;
    baseLayer?: Layer | undefined;
    layers?: Layer[] | undefined;
    attribution?: boolean | control.AttributionOptions | undefined;
    // allow map to drag pitching, true by default
    dragPitch?: boolean | undefined;
    // allow map to drag rotating, true by default
    dragRotate?: boolean | undefined;
    // enable map to drag pitching and rotating at the same time, false by default
    dragRotatePitch?: boolean | undefined;
    dragPan?: boolean | undefined;
    pitch?: number | undefined;
    zoomControl?: boolean | object | undefined;
    scaleControl?: boolean | object | undefined;
    overviewControl?: boolean | undefined;
    centerCross?: boolean | undefined;
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    draggable?: boolean | undefined; //  disable draggble
    scrollWheelZoom?: boolean | undefined; //  disable scroll wheel zoom
    dblClickZoom?: boolean | undefined; //  disable doubleclick
    touchZoom?: boolean | undefined;
    doubleClickZoom?: boolean | undefined;
    layerSwitcherControl?: object | undefined;
}
export interface MapJsonOptions {
    baseLayer?: any;
    layers?: any;
}

export interface LayerOptions {
    attribution?: string | undefined;
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    visible?: boolean | undefined;
    opacity?: number | undefined;
    zindex?: number | undefined;
    hitDetect?: boolean | undefined;
    renderer?: string | undefined;
    //  context.globalCompositeOperation, 'source-over' in default
    globalCompositeOperation?: string | undefined;
    debugOutline?: string | undefined;
    cssFilter?: string | null | undefined;
    forceRenderOnMoving?: boolean | undefined;
    forceRenderOnZooming?: boolean | undefined;
    forceRenderOnRotating?: boolean | undefined;
    style?: any;
}

export type urlTemplateFun = (...param: any[]) => string;
export interface TileLayerOptions extends LayerOptions {
    urlTemplate: string | urlTemplateFun;
    subdomains?: string[] | number[] | undefined;
    spatialReference?: object | undefined;
    tileSize?: number[] | undefined;
    offset?: number[] | undefined;
    tileSystem?: number[] | undefined;
    maxAvailableZoom?: number | undefined;
    repeatWorld?: boolean | undefined;
    background?: boolean | undefined;
    backgroundZoomDiff?: number | undefined;
    placeholder?: boolean | undefined;
    fragmentShader?: string | undefined;
    crossOrigin?: string | undefined;
    fadeAnimation?: boolean | undefined;
    debug?: boolean | undefined;
    maxCacheSize?: number | undefined;
    cascadeTiles?: boolean | undefined;
    zoomOffset?: number | undefined;
    tileRetryCount?: number | undefined;
}

export interface WMSTileLayerOptions extends TileLayerOptions {
    service?: string | undefined;
    layers: string;
    styles?: string | undefined;
    format?: string | undefined;
    transparent?: boolean | undefined;
    version?: string | undefined;
    crs?: string | undefined;
    uppercase?: boolean | undefined;
    detectRetina?: string | undefined;
}

export interface VectorLayerOptions extends LayerOptions {
    debug?: boolean | undefined;
    enableSimplify?: boolean | undefined;
    cursor?: string | undefined;
    geometryEvents?: boolean | undefined;
    defaultIconSize?: boolean | undefined;
    enableAltitude?: boolean | undefined;
    altitudeProperty?: string | undefined;
    drawAltitude?: object | undefined;
    altitude?: number | undefined;
    drawImmediate?: boolean | undefined;
}

export interface CanvasLayerOptions extends LayerOptions {
    doubleBuffer?: boolean | undefined;
    animation?: boolean | undefined;
    fps?: boolean | undefined;
}

export interface ImageLayerOptions extends LayerOptions {
    crossOrigin?: string | undefined;
    renderer?: string | undefined;
}

export interface GeometryOptions {
    id?: string | number | undefined;
    visible?: boolean | undefined;
    editable?: boolean | undefined;
    interactive?: boolean | undefined;
    cursor?: string | null | undefined;
    measure?: string | undefined;
    draggable?: boolean | undefined;
    dragShadow?: boolean | undefined;
    drawOnAxis?: string | null | undefined;
    zIndex?: number | undefined;
    properties?: object | undefined;
    symbol?: object | undefined;
    shadowBlur?: number | undefined;
    shadowColor?: string | undefined;
}

export interface PathOptions extends GeometryOptions {
    smoothness?: number | undefined;
    enableSimplify?: boolean | undefined;
    simplifyTolerance?: number | undefined;
    enableClip?: boolean | undefined;
    symbol?: object | undefined;
}

export interface MarkerOptions extends GeometryOptions {
    hitTestForEvent?: boolean | undefined;
}

export interface LabelOptions extends GeometryOptions {
    boxStyle?: object | undefined;
    textSymbol?: object | undefined;
    hitTestForEvent?: string | undefined;
}

export interface TextBoxOptions extends GeometryOptions {
    textStyle?: object | undefined;
    boxSymbol?: object | undefined;
    hitTestForEvent?: string | undefined;
}

export interface LineStringOptions extends PathOptions {
    arrowStyle?: string | number[] | null | undefined;
    arrowPlacement?: string | undefined;
}

export interface ArcCurveOptions extends LineStringOptions {
    arcDegree?: number | undefined;
}

export interface ConnectorLineOptions extends LineStringOptions {
    showOn?: string | undefined;
}

export interface ArcConnectorLineOptions extends ConnectorLineOptions, ArcCurveOptions {}

export interface EllipseOptions extends PathOptions {
    numberOfShellPoints?: number | undefined;
}

export interface DrawToolOptions {
    //  doubleClickZoom?: boolean;
    //  ignoreMouseleave?: boolean
    mode?: string | undefined;
    symbol?: object | undefined;
    once?: boolean | undefined;
    autoPanAtEdge?: boolean | undefined;
}

export interface DrawToolModeActionOptions {
    action: string[];
    create: (projection: object, clickCoords: object, event: object) => object;
    update: (projection: object, path: object, geometry: object, event: object) => void;
    generate: (geometry: object, extraData: { drawTool: DrawTool }) => object;
}

export interface DistanceToolOptions extends DrawToolOptions {
    language?: string | undefined;
    metric?: boolean | undefined;
    imperial?: boolean | undefined;
    vertexSymbol?: object | undefined;
    labelOptions?: object | undefined;
    clearButtonSymbol?: any[] | undefined;
}

export namespace control {
    interface ZoomOptions {
        position?: string | object | undefined;
        slider?: boolean | undefined;
        zoomLevel?: boolean | undefined;
    }

    interface LayerSwitcherOptions {
        position?: string | object | undefined;
        baseTitle?: string | object | undefined;
        overlayTitle?: string | object | undefined;
        excludeLayers?: any[] | undefined;
        containerClass?: string | object | undefined;
    }

    interface AttributionOptions {
        position?: string | object | undefined;
        content?: string | undefined;
    }

    interface ScaleOptions {
        position?: string | object | undefined;
        maxWidth?: number | undefined;
        metric?: boolean | undefined;
        imperial?: boolean | undefined;
        containerClass?: string | object | null | undefined;
    }

    interface PanelOptions {
        position?: string | object | undefined;
        draggable?: boolean | undefined;
        custom?: boolean | undefined;
        content?: string | HTMLElement | undefined;
        closeButton?: boolean | undefined;
    }

    interface ToolbarOptions {
        position?: string | object | undefined;
        vertical?: boolean | undefined;
        reverseMenu?: boolean | undefined;
        items: any[];
    }

    interface OverviewOptions {
        position?: string | object | undefined;
        level?: number | undefined;
        maximize?: boolean | undefined;
        size?: object | undefined;
        symbol?: object | undefined;
        containerClass?: string | undefined;
        buttonClass?: string | undefined;
    }

    abstract class Control extends Eventable {
        //  new(options?: object): Control
        /**
         * Adds the control to a map.
         * @param  map
         * @returns  this
         * @fires control.Control#add
         */
        addTo(map: Map): this;

        /**
         * update control container
         * @return  this
         */
        update(): this;

        /**
         * Get the map that the control is added to.
         * @return
         */
        getMap(): Map;

        /**
         * Get the position of the control
         * @return
         */
        getPosition(): object;

        /**
         * update the control's position
         * @param  position - can be one of 'top-left', 'top-right', 'bottom-left', 'bottom-right' or a position object like {'top': 40,'left': 60}
         * @return  this
         * @fires control.Control#positionchange
         */
        setPosition(position: string | object): this;

        /**
         * Get the container point of the control.
         * @return
         */
        getContainerPoint(): Point;

        /**
         * Get the control's container.
         * Container is a div element wrapping the control's dom and decides the control's position and display.
         * @return
         */
        getContainer(): HTMLElement;

        /**
         * Get html dom element of the control
         * @return
         */
        getDOM(): HTMLElement;

        /**
         * Show
         * @return  this
         */
        show(): this;

        /**
         * Hide
         * @return  this
         */
        hide(): this;

        /**
         * Whether the control is visible
         * @return
         */
        isVisible(): boolean;

        /**
         * Remove itself from the map
         * @return  this
         * @fires control.Control#remove
         */
        remove(): this;
    }

    class Zoom extends Control {
        constructor(options: ZoomOptions);

        /**
         * method to build DOM of the control
         * @param   map map to build on
         * @return
         */
        buildOn(map: Map): HTMLElement;
    }

    class LayerSwitcher extends Control {
        constructor(options: LayerSwitcherOptions);

        /**
         * method to build DOM of the control
         * @return
         */
        buildOn(): HTMLElement;
    }

    class Attribution extends Control {
        constructor(options: AttributionOptions);
    }

    class Scale extends Control {
        constructor(options: ScaleOptions);

        /**
         * method to build DOM of the control
         * @param   map map to build on
         * @return
         */
        buildOn(map: Map): HTMLElement;
    }

    class Panel extends Control {
        constructor(options: PanelOptions);

        /**
         * method to build DOM of the control
         * @param   map map to build on
         * @return
         */
        buildOn(map: Map): HTMLElement;

        /**
         * update control container
         * @return  this
         */
        update(): this;

        /**
         * Set the content of the Panel.
         * @param  content - content of the infowindow.
         * return  this
         * @fires Panel#contentchange
         */
        setContent(content: string | HTMLElement): this;

        /**
         * Get content of  the infowindow.
         * @return  - content of the infowindow
         */
        getContent(): string | HTMLElement;
    }

    class Toolbar extends Control {
        constructor(options: ToolbarOptions);

        /**
         * method to build DOM of the control
         * @param   map map to build on
         * @return
         */
        buildOn(map: Map): HTMLElement;
    }

    class Overview extends Control {
        constructor(options: OverviewOptions);

        /**
         * method to build DOM of the control
         * @param   map map to build on
         * @return
         */
        buildOn(map: Map): HTMLElement;

        /**
         * Maximize overview control
         * @returns
         */
        maxmize(): this;

        /**
         * Minimize overview control
         * @returns
         */
        minimize(): this;

        /**
         * Return overview's map object
         * @returns
         */
        getOverviewMap(): Map;
    }
}

export namespace ui {
    interface UIComponentOptions {
        eventsPropagation?: boolean | undefined;
        eventsToStop?: boolean | undefined;
        dx?: number | undefined;
        dy?: number | undefined;
        autoPan?: boolean | undefined;
        autoPanDuration?: boolean | undefined;
        single?: boolean | undefined;
        animation?: string | undefined;
        animationDuration?: number | undefined;
        pitchWithMap?: boolean | undefined;
        rotateWithMap?: boolean | undefined;
    }

    interface UIMarkerOptions extends UIComponentOptions {
        draggable?: boolean | undefined;
        content: string | HTMLElement;
    }

    interface ToolTipOptions extends UIComponentOptions {
        width?: number | undefined;
        height?: number | undefined;
        cssName?: string | undefined;
        showTimeout?: number | undefined;
    }

    interface MenuOptions extends UIComponentOptions {
        width?: number | undefined;
        maxHeight?: number | undefined;
        custom?: string | HTMLElement | undefined;
        items?: object[] | string | HTMLElement | undefined;
    }

    abstract class UIComponent extends Eventable {
        _coordinate: Coordinate;
        _flashTimeout: number;
        /**
         * Adds the UI Component to a geometry or a map
         * @param  owner - geometry or map to addto.
         * @returns  this
         * @fires ui.UIComponent#add
         */
        addTo(owner: Geometry | Map): this;

        /**
         * Get the map it added to
         * @return  map instance
         */
        getMap(): Map;

        /**
         * Show the UI Component, if it is a global single one, it will close previous one.
         * @param  [coordinate=null] - coordinate to show, default is owner's center
         * @return  this
         * @fires ui.UIComponent#showstart
         * @fires ui.UIComponent#showend
         */
        show(coordinate?: Coordinate): this;

        /**
         * Hide the UI Component.
         * @return  this
         * @fires ui.UIComponent#hide
         */
        hide(): this;

        /**
         * Decide whether the ui component is open
         * @returns  true|false
         */
        isVisible(): boolean;

        /**
         * Remove the UI Component
         * @return  this
         * @fires ui.UIComponent#hide
         * @fires ui.UIComponent#remove
         */
        remove(): this;

        /**
         * Get pixel size of the UI Component.
         * @return  size
         */
        getSize(): Size;
    }

    class InfoWindow extends UIComponent {
        constructor(options: UIComponentOptions | object);

        /**
         * Adds the UI Component to a geometry or a map
         * @param  owner - geometry or map to addto.
         * @returns  this
         * @fires UIComponent#add
         */
        addTo(owner: Geometry | Map): this;

        /**
         * Set the content of the infowindow.
         * @param  content - content of the infowindow.
         * return {InfoWindow} this
         * @fires InfoWindow#contentchange
         */
        setContent(content: string | HTMLElement): this;

        /**
         * Get content of  the infowindow.
         * @return  - content of the infowindow
         */
        getContent(): string | HTMLElement;

        /**
         * Set the title of the infowindow.
         * @param  title - title of the infowindow.
         * return {InfoWindow} this
         * @fires InfoWindow#titlechange
         */
        setTitle(title: string | HTMLElement): this;

        /**
         * Get title of  the infowindow.
         * @return  - content of the infowindow
         */
        getTitle(): string | HTMLElement;

        /**
         * Gets InfoWindow's transform origin for animation transform
         *
         * @return  transform origin
         */
        getTransformOrigin(): Point;
    }

    class Menuable {
        /**
         * Set a context menu
         * @param  options - menu options
         * @return  this
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
         * @param  [coordinate=null] - coordinate to open the context menu
         * @return  this
         */
        openMenu(coordinate?: Coordinate): this;

        /**
         * Set menu items to the context menu
         * @param  items - menu items
         * @return  this
         */
        setMenuItems(items: object[]): this;

        /**
         * Get the context menu items
         * @return
         */
        getMenuItems(): object[];

        /**
         * Close the contexnt menu
         * @return  this
         */
        closeMenu(): this;

        /**
         * Remove the context menu
         * @return  this
         */
        removeMenu(): this;
    }

    type flashCallbackFun = (...param: any[]) => any;
    class UIMarker extends UIComponent {
        constructor(coordinate: Coordinate | number[], options: UIMarkerOptions);

        /**
         * Sets the coordinates
         * @param  coordinates - UIMarker's coordinate
         * @returns  this
         * @fires UIMarker#positionchange
         */
        setCoordinates(coordinates: Coordinate): this;

        /**
         * Gets the coordinates
         * @return  coordinates
         */
        getCoordinates(): Coordinate;

        /**
         * Sets the content of the UIMarker
         * @param  content - UIMarker's content
         * @returns  this
         * @fires UIMarker#contentchange
         */
        setContent(content: string | HTMLElement): this;

        /**
         * Gets the content of the UIMarker
         * @return  content
         */
        getContent(): string | HTMLElement;

        /**
         * Show the UIMarker
         * @returns  this
         * @fires UIMarker#showstart
         * @fires UIMarker#showend
         */
        show(): this;

        /**
         * Flash the UIMarker, show and hide by certain internal for times of count.
         *
         * @param  [interval=100]     - interval of flash, in millisecond (ms)
         * @param  [count=4]          - flash times
         * @param  [cb=null]        - callback function when flash ended
         * @param context          - callback context
         * @return  this
         */
        flash(interval?: number, count?: number, cb?: flashCallbackFun, context?: any): this;

        /**
         * A callback method to build UIMarker's HTMLElement
         *
         * @param  map - map to be built on
         * @return  UIMarker's HTMLElement
         */
        buildOn(): HTMLElement;

        /**
         * Gets UIMarker's HTMLElement's position offset, it's caculated dynamically accordiing to its actual size.
         *
         * @return  offset
         */
        getOffset(): Point;

        /**
         * Gets UIMarker's transform origin for animation transform
         *
         * @return  transform origin
         */
        getTransformOrigin(): Point;

        /**
         * Whether the uimarker is being dragged.
         * @returns
         */
        isDragging(): boolean;
    }

    class ToolTip extends UIComponent {
        constructor(content: string, options: ToolTipOptions);

        /**
         * Adds the UI Component to a geometry UIMarker Other graphic elements
         * @param  owner - geometry to add.
         * @returns  this
         * @fires UIComponent#add
         */
        addTo(owner: Geometry): this;

        /**
         * set ToolTip's content's css class name.
         * @param  css class name - set for ToolTip's content.
         */
        setStyle(cssName: string): this;

        /**
         * get ToolTip's  content's css class name
         * @returns  css class name - set for ToolTip's content.
         */
        getStyle(): string;

        /**
         * get the UI Component's content
         * @returns  tooltip's content
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

    class Menu extends UIComponent {
        defaultOptions: MenuOptions;
        constructor(options: MenuOptions);

        /**
         * Set the items of the menu.
         * @param  items - items of the menu
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
         * @return  - items of the menu
         */
        getItems(): object[] | string | HTMLElement;

        /**
         * Create the menu DOM.
         *
         * @return  menu's DOM
         */
        buildOn(): HTMLElement;
    }
}

export namespace animation {
    interface AnimationOptions {
        easing?: object | undefined;
    }

    interface Easing {
        /**
         * Start slow and speed up.
         * @param  t Input between 0 and 1.
         * @return  Output between 0 and 1.
         */
        in(t: number): number;

        /**
         * Start fast and slow down.
         * @param  t Input between 0 and 1.
         * @return  Output between 0 and 1.
         */
        out(t: number): number;

        /**
         * Start slow, speed up, and then slow down again.
         * @param  t Input between 0 and 1.
         * @return  Output between 0 and 1.
         */
        inAndOut(t: number): number;

        /**
         * Maintain a constant speed over time.
         * @param  t Input between 0 and 1.
         * @return  Output between 0 and 1.
         */
        linear(t: number): number;

        /**
         * Start slow, speed up, and at the very end slow down again.  This has the
         * same general behavior as {@link inAndOut}, but the final slowdown
         * is delayed.
         * @param  t Input between 0 and 1.
         * @return  Output between 0 and 1.
         */
        upAndDown(t: number): number;
    }

    class Frame {
        state: any;
        styles: any;
    }

    type PlayerAnimationFun = (elapsed: number, duration: number) => Frame;
    type FrameStepFun = (frame: Frame, ...params: any[]) => void;
    class Player {
        /**
         * Create an animation player
         * @param  animation - animation [framing]{@link framing} function
         * @param  options     - animation options
         * @param  onFrame  - callback function for animation steps
         */
        constructor(animation: PlayerAnimationFun, options: object, onFrame: FrameStepFun);

        /**
         * Start or resume the animation
         * @return  this
         */
        play(): this;

        /**
         * Pause the animation
         * @return  this
         */
        pause(): this;

        /**
         * Cancel the animation play and ready to play again
         * @return  this
         */
        cancel(): this;

        /**
         * Finish the animation play, and can't be played any more.
         * @return  this
         */
        finish(): this;
    }

    interface Animation {
        speed: {
            slow: number;
            normal: number;
            fast: number;
        };

        /**
         * Generate a framing function
         * @param   styles        - animation style group
         * @param   [options=null]  - options
         * @param   [options.easing=null]  - animation easing
         * @return  framing function helps to generate animation frames.
         */
        framing(styles: object[], options?: AnimationOptions): PlayerAnimationFun;

        /**
         * Create an animation player
         * @param   styles  - styles to animate
         * @param   options - animation options
         * @param   step  - callback function for animation steps
         * @return  player
         */
        animate(styles: object, options: object, step: FrameStepFun): Player;
    }
    const Animation: Animation;
}

export namespace measurer {
    interface Common {
        /**
         * Measure length between coordinate c1 and coordinate c2
         * @param   c1 coordinate
         * @param   c2 coordinate
         * @return     length
         *  measurer.Common.measureLength
         */
        measureLength(c1: Coordinate, c2: Coordinate): number;
    }
    const Common: Common;

    interface Identity extends Common {
        measure: string;
        _rotate: (c: Coordinate, pivot: Coordinate, angle: number) => Coordinate;

        /**
         * Measure the length between 2 coordinates.
         * @param   c1
         * @param   c2
         * @return
         */
        measureLenBetween(c1: Coordinate, c2: Coordinate): number;

        /**
         * Measure the area closed by the given coordinates.
         * @param   coordinates
         * @return
         */
        measureArea(coordinates: Coordinate[]): number;

        /**
         * Locate a coordinate from the given source coordinate with a x-axis distance and a y-axis distance.
         * @param   c     - source coordinate
         * @param   xDist     - x-axis distance
         * @param   yDist     - y-axis distance
         * @return
         */
        _locate(c: Coordinate, xDist: number, yDist: number): Coordinate;
    }
    const Identity: Identity;

    interface Measurer {
        /**
         * Get a measurer instance.
         * @param   name - code of the measurer: 'EPSG:4326', 'Identity', 'BAIDU'
         * @return  a measurer object
         *  measurer.Measurer.getInstance
         */
        getInstance(name: string): object;
    }
    const Measurer: Measurer;

    interface WGS84Sphere extends Common {
        /**
         * Measure the length between 2 coordinates.
         * @param   c1
         * @param   c2
         * @return
         */
        measureLenBetween(c1: Coordinate, c2: Coordinate): number;
        /**
         * Measure the area closed by the given coordinates.
         * @param   coordinates
         * @return
         */
        measureArea(coordinates: Coordinate[]): number;

        /**
         * Locate a coordinate from the given source coordinate with a x-axis distance and a y-axis distance.
         * @param   c     - source coordinate
         * @param   xDist              - x-axis distance
         * @param   yDist              - y-axis distance
         * @return
         */
        locate(c: Coordinate, xDist: number, yDist: number): Coordinate;

        /**
         * Rotate a coordinate of given angle around pivot
         * @param  c  - source coordinate
         * @param  pivot - pivot
         * @param  angle - angle in degree
         * @return
         */
        rotate(c: Coordinate, pivot: Coordinate, angle: number): Coordinate;
    }
    const WGS84Sphere: WGS84Sphere;

    interface DEFAULT extends WGS84Sphere {
        _default: string;
    }
    const DEFAULT: DEFAULT;
    interface BaiduSphere extends Common {
        /**
         * Measure the length between 2 coordinates.
         * @param   c1
         * @param   c2
         * @return
         */
        measureLenBetween(c1: Coordinate, c2: Coordinate): number;
        /**
         * Measure the area closed by the given coordinates.
         * @param   coordinates
         * @return
         */
        measureArea(coordinates: Coordinate[]): number;

        /**
         * Locate a coordinate from the given source coordinate with a x-axis distance and a y-axis distance.
         * @param  c     - source coordinate
         * @param  xDist              - x-axis distance
         * @param  yDist              - y-axis distance
         */
        locate(c: Coordinate, xDist: number, yDist: number): Coordinate;

        /**
         * Rotate a coordinate of given angle around pivot
         * @param  c  - source coordinate
         * @param  pivot - pivot
         * @param  angle - angle in degree
         * @return
         */
        rotate(c: Coordinate, pivot: Coordinate, angle: number): Coordinate;
    }
    const BaiduSphere: BaiduSphere;
}

export namespace projection {
    interface Common {
        /**
         * Project a geographical coordinate to a projected coordinate (2d coordinate)
         * @param   p - coordinate to project
         * @return
         *  projection.Common.project
         */
        project(p: Coordinate): Coordinate;

        /**
         * Unproject a projected coordinate to a geographical coordinate (2d coordinate)
         * @param   p - coordinate to project
         * @return
         *  projection.Common.unproject
         */
        unproject(p: Coordinate): Coordinate;

        /**
         * Project a group of geographical coordinates to projected coordinates.
         * @param   coordinates - coordinates to project
         * @return
         *  projection.Common.projectCoords
         */
        projectCoords(
            coordinates: Coordinate[] | Coordinate[][] | Coordinate[][][],
        ): Coordinate[] | Coordinate[][] | Coordinate[][][];

        /**
         * Unproject a group of projected coordinates to geographical coordinates.
         * @param   projCoords - projected coordinates to unproject
         * @return
         *  projection.Common.unprojectCoords
         */
        unprojectCoords(
            projCoords: Coordinate[] | Coordinate[][] | Coordinate[][][],
        ): Coordinate[] | Coordinate[][] | Coordinate[][][];

        /**
         * Whether the projection is spherical
         * @return
         */
        isSphere(): boolean;

        /**
         * If the projected coord out of the sphere
         * @param    pcoord projected coord
         * @return
         */
        isOutSphere(pcoord: Coordinate): boolean;

        /**
         * Wrap the projected coord in the sphere
         * @param   pcoord projected coord
         * @return  wrapped projected coord
         */
        wrapCoord(pcoord: Coordinate): Coordinate;
    }
    const Common: Common;
    interface EPSG3857 extends Common, measurer.WGS84Sphere {
        code: string;
    }
    const EPSG3857: EPSG3857;
    interface DEFAULT extends EPSG3857 {
        _default: string;
    }
    const DEFAULT: DEFAULT;
    interface BAIDU extends Common, measurer.BaiduSphere {
        code: string;
    }
    const BAIDU: BAIDU;
    interface EPSG4326 extends Common, measurer.WGS84Sphere {
        code: string;
    }
    const EPSG4326: EPSG4326;
    interface EPSG4490 extends EPSG4326, measurer.WGS84Sphere {
        code: string;
    }
    const EPSG4490: EPSG4490;
    interface DIDENTITY extends Common, measurer.Identity {
        code: string;
    }

    const IDENTITY: DIDENTITY;
}

export namespace renderer {
    abstract class CanvasRenderer extends Class {
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
         *
         *  checkResources
         *
         * @returns  an array of resource arrays [ [url1, width, height], [url2, width, height], [url3, width, height] .. ]
         *  renderer.CanvasRenderer
         */
        checkResources(): Array<Array<[]>>;

        /**
         * a required abstract method to implement
         * draw the layer when map is not interacting
         *
         *  draw
         *  renderer.CanvasRenderer
         */
        draw(): void;

        /**
         * an optional abstract method to implement
         * draw the layer when map is interacting (moving/zooming/dragrotating)
         *
         *  drawOnInteracting
         * @param  eventParam event parameters
         *  renderer.CanvasRenderer
         */
        drawOnInteracting(eventParam: object): void;

        /**
         * Ask whether the layer renderer needs to redraw
         * @return
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
         *
         * @return
         */
        isCanvasUpdated(): boolean;

        /**
         * Remove the renderer, will be called when layer is removed
         */
        remove(): void;

        /**
         * Get map
         * @return
         */
        getMap(): Map;

        /**
         * Get renderer's Canvas image object
         * @return
         */
        getCanvasImage(): HTMLCanvasElement;

        /**
         * Clear canvas
         */
        clear(): void;

        /**
         * A method to help improve performance.
         * If you are sure that layer's canvas is blank, returns true to save unnecessary layer works of maps.
         * @return
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
         * @param   point containerPoint
         * @return
         */
        hitDetect(point: Point): boolean;

        /**
         * loadResource from resourceUrls
         * @param  resourceUrls    - Array of urls to load
         * @param   onComplete          - callback after loading complete
         * @param   context         - callback's context
         * @returns
         */
        loadResources(
            resourceUrls: string[],
            onComplete?: (...param: any) => void,
            context?: object,
        ): Array<Promise<any>>;

        /**
         * Create renderer's Canvas
         */
        createCanvas(): void;

        /**
         * Resize the canvas
         * @param   canvasSize the size resizing to
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
         * @return  mask's extent of current zoom's 2d point.
         */
        prepareCanvas(): PointExtent;

        /**
         * Get renderer's current view extent in 2d point
         * @return  view.extent, view.maskExtent, view.zoom, view.southWest
         */
        getViewExtent(): object;

        /**
         * call when rendering completes, this will fire necessary events and call setCanvasUpdated
         */
        completeRender(): void;

        /**
         * Get renderer's event map registered on the map
         * @return  events
         */
        getEvents(): object;

        /**
         * onZoomStart
         * @param   param event parameters
         */
        onZoomStart(param: object): void;

        /**
         * onZoomEnd
         * @param   param event parameters
         */
        onZoomEnd(param: object): void;

        /**
         * onZooming
         * @param   param event parameters
         */
        onZooming(param: object): void;

        /**
         * onMoveStart
         * @param   param event parameters
         */
        onMoveStart(param: object): void;

        /**
         * onMoving
         * @param   param event parameters
         */
        onMoving(param: object): void;

        /**
         * onMoveEnd
         * @param   param event parameters
         */
        onMoveEnd(param: object): void;

        /**
         * onResize
         * @param   param event parameters
         */
        onResize(param: object): void;

        /**
         * onDragRotateStart
         * @param   param event parameters
         */
        onDragRotateStart(param: object): void;

        /**
         * onDragRotating
         * @param   param event parameters
         */
        onDragRotating(param: object): void;

        /**
         * onDragRotateEnd
         * @param   param event parameters
         */
        onDragRotateEnd(param: object): void;

        /**
         * onSpatialReferenceChange
         * @param   param event parameters
         */
        onSpatialReferenceChange(param: object): void;

        /**
         * Get ellapsed time of previous drawing
         * @return
         */
        getDrawTime(): number;
    }
}

export type AjaxCallbackFun = (err: any, data: any) => void;
export interface Ajax {
    /**
     * Get JSON data by jsonp
     * from https:// gist.github.com/gf3/132080/110d1b68d7328d7bfe7e36617f7df85679a08968
     * @param     url - resource url
     * @param   cb  - callback function when completed
     */
    jsonp(url: string, callback: AjaxCallbackFun): Ajax;

    /**
     * Fetch remote resource by HTTP "GET" method
     * @param     url - resource url
     * @param     [options=null] - request options
     * @param     [options.headers=null] - HTTP headers
     * @param     [options.responseType=null] - responseType
     * @param     [options.credentials=null]  - if with credentials, set it to "include"
     * @param   cb  - callback function when completed
     * @return   Ajax
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
    get(url: string, cb: AjaxCallbackFun, options?: object): Ajax;

    /**
     * Fetch remote resource by HTTP "POST" method
     * @param     url - resource url
     * @param     options - request options
     * @param   options.postData - post data
     * @param     [options.headers=null]  - HTTP headers
     * @param   cb  - callback function when completed
     * @return   Ajax
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
    post(url: string, options: object, cb: AjaxCallbackFun): Ajax;

    /**
     * Fetch resource as arraybuffer.
     * @param  url    - url
     * @param  [options=null] - options, same as Ajax.get
     * @param  cb   - callback function when completed.
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
    getArrayBuffer(url: string, options?: object, cb?: AjaxCallbackFun): Ajax;

    /**
     * Fetch resource as a JSON Object.
     * @param  url          - json's url
     * @param  [options=null]        - optional options
     * @param  [options.jsonp=false] - fetch by jsonp, false by default
     * @param  cb   - callback function when completed.
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
     */
    getJSON(url: string, options?: object, cb?: AjaxCallbackFun): Ajax;
}
export const Ajax: Ajax;

export class MapboxUtil {}

export namespace Util {
    const emptyImageUrl: string;

    /**
     * Merges the properties of sources into destination object.
     * @param   dest   - object to extend
     * @param   src - sources
     * @return
     *  Util
     */
    function extend(dest: object, ...src: object[]): object;

    /**
     * Whether the object is null or undefined.
     * @param    obj - object
     * @return
     *  Util
     */
    function isNil(obj: object): boolean;

    /**
     * Whether val is a number and not a NaN.
     * @param    val - val
     * @return
     *  Util
     */
    function isNumber(val: object): boolean;

    /**
     * Whether a number is an integer
     * @param    n
     * @return
     *  Util
     */
    function isInteger(n: number): boolean;

    /**
     * Whether the obj is a javascript object.
     * @param    obj  - object
     * @return
     *  Util
     */
    function isObject(obj: object): boolean;

    /**
     * Check whether the object is a string
     * @param  obj
     * @return
     *  Util
     */
    function isString(obj: object): boolean;

    /**
     * Check whether the object is a function
     * @param  obj
     * @return const
     */
    function isFunction(obj: object): boolean;

    /**
     * Check whether the object owns the property.
     * @param    obj - object
     * @param    key - property
     * @return
     *  Util
     */
    function hasOwn(obj: object, key: string): boolean;

    /**
     * Determine if an object has any properties.
     * @param object The object to check.
     * @returns  The object is empty
     */
    function isEmpty(val: object): boolean;

    /**
     * caculate the distance from a point to a segment.
     * @param  p
     * @param  p1
     * @param  p2
     * @return  distance from p to (p1, p2)
     *  Util
     */
    function distanceToSegment(p: Point, p1: Point, p2: Point): number;

    /**
     * Whether the coordinate is inside the polygon
     * @param          - polygon
     * @param       - coordinate
     * @return
     *  Util
     */
    function pointInsidePolygon(p: Polygon, points: Coordinate): boolean;

    /**
     * Translate symbol properties to SVG properties
     * @param   s - object with symbol properties
     * @return    object with SVG properties
     *  Util
     */
    function translateToSVGStyles(s: object): object;

    /**
     * Get SVG Base64 String from a marker symbol with (markerType : path)
     * @param   symbol - symbol with markerType of path
     * @return         SVG Base64 String
     *  Util
     */
    function getMarkerPathBase64(symbol: object): string;

    /**
     * Get external resources from the given symbol
     * @param   symbol      - symbol
     * @param   toAbsolute - whether convert url to aboslute
     * @return            - resource urls
     *  Util
     */
    function getExternalResources(symbol: object, toAbsolute: boolean): string[];

    /**
     * Whether the color is a gradient
     * @param    g - color to test
     * @return
     *  Util
     */
    function isGradient(g: object): boolean;

    /**
     * Get stamp of a gradient color object.
     * @param   g gradient color object
     * @return      gradient stamp
     *  Util
     */
    function getGradientStamp(g: object): string;

    /**
     * Get stamp of a symbol
     * @param  symbol symbol
     * @return         symbol's stamp
     *  Util
     */
    function getSymbolStamp(symbol: object | object[]): string;

    /**
     * Reduce opacity of the color by ratio
     * @param  symbol symbols to set
     * @param   ratio  ratio of opacity to reduce
     * @return      new symbol or symbols
     *  Util
     */
    function lowerSymbolOpacity(symbol: object | object[], ratio: number): object | object[];

    /**
     * Merges the properties of sources into the symbol. <br>
     * @param  symbol symbol to extend
     * @param   src - sources
     * @return        merged symbol
     *  Util
     */
    function extendSymbol(symbol: object | object[]): object | object[];

    /**
     * Polyfill of RequestAnimationFrame
     * @param   fn callback
     * @return       request id
     *  Util
     */
    function requestAnimFrame(fn: (...params: any[]) => void): number;

    /**
     * Polyfill of cancelAnimationFrame
     * @param        request id
     *  Util
     */
    function cancelAnimFrame(id: number): void;

    /**
     * Parse a JSON string to a object
     * @param  str      - a JSON string
     * @return
     *  Util
     */
    function parseJSON(str: string): object;

    /**
     * Compute degree bewteen 2 points.
     * @param   p1 point 1
     * @param   p2 point 2
     * @return     degree between 2 points
     *  Util
     */
    function computeDegree(p1: Point, p2: Point): number;
}

export type DomEventHandlerFun = (context: HTMLElement | object, e: Event) => void;
export namespace DomUtil {
    /**
     * Vendor-prefixed fransform style name (e.g. `'webkitTransform'` for WebKit).
     *   TRANSFORM
     *  DomUtil
     */
    const TRANSFORM: string;

    /**
     * Vendor-prefixed tfransform-origin name (e.g. `'webkitTransformOrigin'` for WebKit).
     *   TRANSFORMORIGIN
     *  DomUtil
     */
    const TRANSFORMORIGIN: string;

    /**
     * Vendor-prefixed transition name (e.g. `'WebkitTransition'` for WebKit).
     *   TRANSITION
     *  DomUtil
     */
    const TRANSITION: string;

    /**
     * Vendor-prefixed filter name (e.g. `'WebkitFilter'` for WebKit).
     *   FILTER
     *  DomUtil
     */
    const CSSFILTER: string;

    function createEl(tagName: string, className: string): HTMLElement;

    /**
     * Create a html element on the specified container
     * @param  tagName
     * @param  style - css styles
     * @param  container
     * @return
     *  DomUtil
     */
    function createElOn(tagName: string, style: string, container: HTMLElement): HTMLElement;

    /**
     * Adds a event listener to the dom element.
     * @param  obj     - dom element to listen on
     * @param  typeArr      - event types, seperated by space
     * @param  handler    - listener function
     * @param  context      - function context
     *  DomUtil
     */
    function addDomEvent(obj: HTMLElement, typeArr: string, handler: DomEventHandlerFun, context: object): void;

    /**
     * Removes event listener from a dom element
     * @param  obj         - dom element
     * @param  typeArr          - event types, separated by space
     * @param  handler        - listening function
     *  DomUtil
     */
    function removeDomEvent(obj: HTMLElement, typeArr: string, handler: DomEventHandlerFun): void;

    /**
     * Check if event type of the dom is listened by the handler
     * @param  obj     - dom element to check
     * @param  typeArr      - event
     * @param  handler    - the listening function
     * @return  - the handler's index in the listener chain, returns -1 if not.
     *  DomUtil
     */
    function listensDomEvent(obj: HTMLElement, typeArr: string, handler: DomEventHandlerFun): number;

    /**
     * Prevent default behavior of the browser. <br/>
     * preventDefault Cancels the event if it is cancelable, without stopping further propagation of the event.
     * @param const  event - browser event
     *  DomUtil
     */
    function preventDefault(event: Event): void;

    /**
     * Stop browser event propagation
     * @param  const  e - browser event.
     *  DomUtil
     */
    function stopPropagation(e: Event): void;

    /**
     * Get the dom element's current position or offset its position by offset
     * @param   dom - HTMLElement
     * @param   [offset=null] - position to set.
     * @return  - dom element's current position if offset is null.
     *  DomUtil
     */
    function offsetDom(dom: HTMLElement, offset: Point): Point;

    /**
     * Compute dom's position
     * @param   dom
     * @return
     *  DomUtil
     */
    function computeDomPosition(dom: HTMLElement): number[];

    /**
     * Get event's position from the top-left corner of the dom container
     * @param const  ev    event
     * @return
     *  DomUtil
     */
    function getEventContainerPoint(ev: Event): Point;

    /**
     * set css style to the dom element
     * @param  dom dom element
     * @param  strCss css text
     *  DomUtil
     */
    function setStyle(dom: HTMLElement, strCss: string): void;

    /**
     * Whether the dom has the given css class.
     * @param  el HTML Element
     * @param  name css class
     *  DomUtil
     */
    function hasClass(el: HTMLElement, name: string): void;

    /**
     * add css class to dom element
     * @param  el HTML Element
     * @param  name css class
     *  DomUtil
     */
    function addClass(el: HTMLElement, name: string): void;

    /**
     * Set dom's css class
     * @param  el HTML Element
     * @param  name css class
     *  DomUtil
     */
    function setClass(el: HTMLElement, name: string): void;

    /**
     * Get dom's css class
     * @param  name css class
     * @return class字符串
     *  DomUtil
     */
    function getClass(el: string): string;

    /**
     * Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
     * @param  el
     * @param  offset
     *  DomUtil
     */
    function setTransform(el: HTMLElement, offset: Point): void;
}

export namespace StringUtil {
    /**
     * Trim the string
     * @param  str
     * @return
     *  StringUtil
     */
    function trim(str: string): string;

    /**
     * Escape special characters from string.
     * Including: \b \t \r \v \f
     * @param   str string to escape
     * @return
     *  StringUtil
     */
    function escapeSpecialChars(str: string): string;

    /**
     * Split string by specified char
     * @param  chr - char to split
     * @return
     *  StringUtil
     */
    function splitWords(chr: string): string[];

    /**
     * Gets width of the text with a certain font.
     * More performant than stringLength.
     * @param  text - text to measure
     * @param  font - font of the text, same as the CSS font.
     * @return
     *  StringUtil
     */
    function stringWidth(text: string, font: string): number;

    //  const fontHeight = {};

    /**
     * Gets size in pixel of the text with a certain font.
     * @param  text - text to measure
     * @param  font - font of the text, same as the CSS font.
     * @return
     *  StringUtil
     */
    function stringLength(text: string, font: string, size?: Size): Size;

    /**
     * Split text content by dom.
     * @param  content - content to split
     * @param  font - font of the text, same as the CSS font.
     * @return  wrapWidth - width to wrap
     * @return
     *  StringUtil
     */
    function splitContent(content: string, font: string, wrapWidth: number): string[];
    /**
     * Replace variables wrapped by square brackets ({foo}) with actual values in props.
     * @example
     *     //  will returns 'John is awesome'
     *     const actual = replaceVariable('{foo} is awesome', {'foo' : 'John'});
     * @param  str      - string to replace
     * @param  props    - variable value properties
     * @return
     *  StringUtil
     */
    function replaceVariable(str: string, props: object): string;

    /**
     * Gets text's align point according to the horizontalAlignment and verticalAlignment
     * @param   size                  - text size
     * @param   horizontalAlignment - horizontalAlignment: left/middle/right
     * @param   verticalAlignment   - verticalAlignment: top/middle/bottom
     * @return
     *  StringUtil
     */
    function getAlignPoint(size: Size, horizontalAlignment: string, verticalAlignment: string): Point;

    /**
     * Returns CSS Font from a symbol with text styles.
     * @param   style symbol with text styles
     * @return        CSS Font String
     *  StringUtil
     */
    function getFont(style: object): string;

    /**
     * Split a text to multiple rows according to the style.
     * @param  text     - text to split
     * @param  style    - text style
     * @return  the object's structure: { rowNum: rowNum, textSize: textSize, rows: textRows, rawSize : rawSize }
     *  StringUtil
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
 */
export abstract class Class {
    id: string | number;
    options: any;
    /**
     * Create an object, set options if given and call all the init hooks.<br />
     * Options is where the object manages its configuration. Options passed to the object will be merged with parent's instead of overriding it.
     *
     * @param   options - options to set
     */
    constructor(options?: any);

    /**
     * Create an object, set options if given and call all the init hooks.<br />
     * Options is where the object manages its configuration. Options passed to the object will be merged with parent's instead of overriding it.
     *
     * @param   options - options to set
     */
    constructor(id: string | number, options?: any);

    /**
     * Visit and call all the init hooks defined on Class and its parents.
     * @return  this
     */
    callInitHooks(): this;

    /**
     * Merges options with the default options of the object.
     * @param  options - options to set
     * @return  this
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
     * @param   conf - config to update
     * @return  this
     */

    config(...conf: any[]): this;

    /**
     * Default callback when config is called
     */
    onConfig(): /*conf*/ void;

    /**
     * Add an init hook, which will be called when the object is initiated. <br>
     * It is useful in plugin developing to do things when creating objects without changing class's constructor.
     * @param  fn - a hook function or name of the hook function
     * @param  args         - arguments for the init hook function
     */
    static addInitHook(fn: (...param: any) => void, ...args: any[]): void;

    /**
     * Mixin the specified objects into the class as prototype properties or methods.
     * @param   sources - objects to mixin
     */
    static include(...sources: object[]): void;

    /**
     * Mixin options with the class's default options. <br />
     * @param   options - options to merge.
     */
    static mergeOptions(options: object): void;
}

/** Common methods for classes can be rendered, e.g. Map, Layers */
export class Renderable extends Class {
    /**
     * Register a renderer class with the given name.
     * @param   name  - renderer's register key
     * @param   clazz - renderer's class, a function (not necessarily a [Class]{@link Class}).
     * @return  this
     *  Renderable.registerRenderer
     */
    static registerRenderer(name: string, clazz: object): any;

    /**
     * Get the registered renderer class by the given name
     * @param   name  - renderer's register key
     * @return  renderer's class
     *  Renderable.getRendererClass
     */
    static getRendererClass(name: string): any;
}

export type EvenableHandlerFun = (...params: any[]) => void;
/** This provides methods used for event handling. It's a mixin and not meant to be used directly. */
export class Eventable extends Renderable {
    /**
     * Register a handler function to be called whenever this event is fired.
     *
     * @param  eventsOn                  - event types to register, seperated by space if more than one.
     * @param  handler                 - handler function to be called
     * @param  [context=null]            - the context of the handler
     * @return  this
     *  Eventable.on
     * @example
     * foo.on('mousedown mousemove mouseup', onMouseEvent, foo);
     */
    on(eventsOn: string, handler: EvenableHandlerFun, context?: object): this;

    /**
     * Alias for [on]{@link Eventable.on}
     *
     * @param  eventTypes     - event types to register, seperated by space if more than one.
     * @param  handler                 - handler function to be called
     * @param  [context=null]            - the context of the handler
     * @return this
     *  Eventable.addEventListener
     */
    addEventListener(eventTypes: string, handler: EvenableHandlerFun, context?: object): this;

    /**
     * Same as on, except the listener will only get fired once and then removed.
     *
     * @param  eventTypes                - event types to register, seperated by space if more than one.
     * @param  handler                 - listener handler
     * @param  [context=null]            - the context of the handler
     * @return  this
     * @example
     * foo.once('mousedown mousemove mouseup', onMouseEvent, foo);
     *  Eventable.once
     */
    once(eventTypes: string, handler: EvenableHandlerFun, context?: object): this;

    /**
     * Unregister the event handler for the specified event types.
     *
     * @param  eventsOff                - event types to unregister, seperated by space if more than one.
     * @param  handler                - listener handler
     * @param  [context=null]           - the context of the handler
     * @return  this
     * @example
     * foo.off('mousedown mousemove mouseup', onMouseEvent, foo);
     *  Eventable.off
     */
    off(eventsOff: string, handler: EvenableHandlerFun, context?: object): this;

    /**
     * Alias for [off]{@link Eventable.off}
     *
     * @param  eventTypes    - event types to unregister, seperated by space if more than one.
     * @param  handler                - listener handler
     * @param  [context=null]           - the context of the handler
     * @return  this
     *  Eventable.removeEventListener
     */
    removeEventListener(eventTypes: string, handler: EvenableHandlerFun, context?: object): this;

    /**
     * Returns listener's count registered for the event type.
     *
     * @param  eventType        - an event type
     * @param  [hanlder=null] - listener function
     * @param  [context=null]   - the context of the handler
     * @return
     *  Eventable.listens
     */
    listens(eventType: string, handler: EvenableHandlerFun, context?: object): number;

    /**
     * Get all the listening event types
     *
     * @returns events
     */
    getListeningEvents(): string[];

    /**
     * Copy all the event listener to the target object
     * @param  target - target object to copy to.
     * @return this
     *  Eventable.copyEventListeners
     */
    copyEventListeners(target: object): this;

    /**
     * Fire an event, causing all handlers for that event name to run.
     *
     * @param   eventType - an event type to fire
     * @param   param     - parameters for the listener function.
     * @return  this
     *  Eventable.fire
     */
    fire(eventType: string, param: object): this;
}

/** Common methods for classes can be rendered, e.g. Map, Layers */
export class Handlerable extends Eventable {}

export interface JSONAble {
    /**
     * It is a static method. <br>
     * Register layer for JSON serialization and assign a JSON type.
     * @param   type - JSON type
     *  JSONAble.registerJSONType
     */
    registerJSONType(type: string): void;

    /**
     * It is a static method. <br>
     * Get class of input JSON type
     * @param   type - JSON type
     * @return       Class
     *  JSONAble.getJSONClass
     */
    getJSONClass(type: string): Class;

    /**
     * Get object's JSON Type
     * @return
     *  JSONAble.getJSONType
     */
    getJSONType(): string;
}

export interface TextEditable {
    /**
     * Start to edit the text, editing will be ended automatically whenever map is clicked.
     *
     * @return  this
     * @fires TextMarker#edittextstart
     */
    startEditText(): this;

    /**
     * End text edit.
     *
     * @return  this
     * @fires TextMarker#edittextend
     */
    endEditText(): this;

    /**
     * Whether the text is being edited.
     *
     * @return
     */
    isEditingText(): boolean;

    /**
     * Get the text editor which is an [ui.UIMarker]{@link ui.UIMarker}
     * @return  text editor
     */
    getTextEditor(): ui.UIMarker;
}

export interface CenterAble {
    /**
     * Get geometry's center
     * @return  - center of the geometry
     *  CenterAble.getCoordinates
     */
    getCoordinates(): Coordinate;

    /**
     * Set a new center to the geometry
     * @param  coordinates - new center
     * @return  this
     * @fires Geometry#positionchange
     *  CenterAble.setCoordinates
     */
    setCoordinates(coordinates: any): this;
}

/** The central class of the library, to create a map on a container */
export interface Map extends Handlerable, ui.Menuable {
    /** Version of librar */
    VERSION: string;

    /** Version of the JSON schema */
    JSON_VERSION: string;

    /** Add hooks for additional codes when map's loading complete, useful for plugin developping. Note that it can only be called before the map is created. */
    addOnLoadHook(fn: () => void): Map;

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

    /** Set the map to be fit for the given extent with the max zoom level possible */
    fitExtent(extent: Extent, zoomOffset: number): this;

    /** Get the base layer of the map. */
    getBaseLayer(): Layer;

    /** Sets a new base layer to the map. */
    setBaseLayer(baseLayer: Layer): this;

    /** Remove the base layer from the map */
    removeBaseLayer(): this;

    /** Get the layers of the map, except base layer (which should be by getBaseLayer). */
    getLayers(filter?: (layer: Layer) => Layer[]): Layer[];

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
    animateTo(view: object, options?: object, step?: animation.FrameStepFun): this;

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
    identify(opts: object, callback: (his: any[]) => void): this;

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

    getRenderer(): any;
}

export interface MapStatic {
    new(container: string | HTMLElement, opts?: MapOptions): Map;
}

export const Map: MapStatic;

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
     * @returns  id
     */
    getId(): string;

    /**
     * Set a new id to the layer
     * @param  id - new layer id
     * @return  this
     * @fires Layer#idchange
     */
    setId(id: string): this;

    /**
     * Adds itself to a map.
     * @param  map - map added to
     * @return  this
     */
    addTo(map: Map): this;

    /**
     * Set a z-index to the layer
     * @param  zIndex - layer's z-index
     * @return  this
     */
    setZIndex(zIndex: number): this;

    /**
     * Get the layer's z-index
     * @return
     */
    getZIndex(): number;

    /**
     * Get Layer's minZoom to display
     * @return
     */
    getMinZoom(): number;

    /**
     * Get Layer's maxZoom to display
     * @return
     */
    getMaxZoom(): number;

    /**
     * Get layer's opacity
     * @returns
     */
    getOpacity(): number;

    /**
     * Set opacity to the layer
     * @param  opacity - layer's opacity
     * @return  this
     */
    setOpacity(op: number): this;

    /**
     * If the layer is rendered by HTML5 Canvas.
     * @return
     */
    isCanvasRender(): boolean;

    /**
     * Get the map that the layer added to
     * @returns
     */
    getMap(): Map;

    /**
     * Get projection of layer's map
     * @returns
     */
    getProjection(): object;

    /**
     * Brings the layer to the top of all the layers
     * @returns  this
     */
    bringToFront(): Layer;

    /**
     * Brings the layer under the bottom of all the layers
     * @returns  this
     */
    bringToBack(): Layer;

    /**
     * Show the layer
     * @returns  this
     */
    show(): Layer;

    /**
     * Hide the layer
     * @returns  this
     */
    hide(): Layer;

    /**
     * Whether the layer is visible now.
     * @return
     */
    isVisible(): boolean;

    /**
     * Remove itself from the map added to.
     * @returns  this
     */
    remove(): Layer;

    /**
     * Get the mask geometry of the layer
     * @return
     */
    getMask(): Geometry;

    /**
     * Set a mask geometry on the layer, only the area in the mask will be displayed.
     * @param  mask - mask geometry, can only be a Marker with vector symbol, a Polygon or a MultiPolygon
     * @returns  this
     */
    setMask(mask: Geometry): Layer;

    /**
     * Remove the mask
     * @returns  this
     */
    removeMask(): Layer;

    /**
     * Prepare Layer's loading, this is a method intended to be overrided by subclasses.
     * @return  true to continue loading, false to cease.
     */
    onLoad(): boolean;

    /**
     * Whether the layer is loaded
     * @return
     */
    isLoaded(): boolean;

    getRenderer(): any;

    /**
     * It is a static method. <br>
     * Register layer for JSON serialization and assign a JSON type.
     * @param   type - JSON type
     *  JSONAble.registerJSONType
     */
    registerJSONType(type: string): void;

    /**
     * It is a static method. <br>
     * Get class of input JSON type
     * @param   type - JSON type
     * @return       Class
     *  JSONAble.getJSONClass
     */
    getJSONClass(type: string): Class;

    /**
     * Get object's JSON Type
     * @return
     *  JSONAble.getJSONType
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
     * @param   projection      - a projection object
     * @return  tile system code
     */
    getDefault(projection: object): string;
}

export interface TileSystemStatic {
    new(sx: number, sy: number, ox: number, oy: number): TileSystem;
    new(sx: number[]): TileSystem;
}

export const TileSystem: TileSystemStatic;

export interface TileLayer extends Layer {
    /**
     * Reproduce a TileLayer from layer's profile JSON.
     * @param   layerJSON - layer's profile JSON
     * @return
     */
    fromJSON(layerJSON: object): TileLayer;

    /**
     * Get tile size of the tile layer
     * @return
     */
    getTileSize(): Size;

    /**
     * Get tiles at zoom z (or current zoom)
     * @param  z - zoom
     * @return  tile descriptors
     */
    getTiles(z: number, parentLayer?: Layer): object[];

    /**
     * Get tile's url
     * @param  x
     * @param  y
     * @param  z
     * @returns  url
     */
    getTileUrl(x: number, y: number, z: number): string;

    /**
     * Clear the layer
     * @return  this
     */
    clear(): TileLayer;

    /**
     * Export the tile layer's profile json. <br>
     * Layer's profile is a snapshot of the layer in JSON format. <br>
     * It can be used to reproduce the instance by [fromJSON]{@link Layer#fromJSON} method
     * @return  layer's profile JSON
     */
    toJSON(): object;

    /**
     * Get tilelayer's spatial reference.
     * @returns  spatial reference
     */
    getSpatialReference(): SpatialReference;
}

export interface TileLayerInstanceStatic {
    new(id: string | number, options?: TileLayerOptions): TileLayer;
}

export const TileLayer: TileLayerInstanceStatic;

export interface GroupTileLayer extends TileLayer {
    /**
     * Get children TileLayer
     * @returns
     */
    getLayers(): TileLayer[];
}

export interface GroupTileLayerStatic {
    new(id: string | number, layers: TileLayer[], options?: TileLayerOptions): GroupTileLayer;
}

export const GroupTileLayer: GroupTileLayerStatic;

export interface WMSTileLayer extends TileLayer {
    _placeholder: string;
}

export interface WMSTileLayerStatic {
    new(id: string | number, options?: WMSTileLayerOptions): WMSTileLayer;
}

export const WMSTileLayer: WMSTileLayerStatic;

export interface CanvasTileLayer extends TileLayer {
    /**
     * The interface method to draw on canvsa tile
     * @param   canvas  canvas to draw on
     * @param   options current options
     * @param   options current options
     */
    drawTile(canvas: HTMLCanvasElement, ...options: any[] /*canvas, options*/): void;
}
export interface CanvasTileLayerStatic {
    new(id: string | number, options?: TileLayerOptions): CanvasTileLayer;
}
export const CanvasTileLayer: CanvasTileLayerStatic;

export interface OverlayLayer extends Layer {
    /**
     * Get a geometry by its id
     * @param   id   - id of the geometry
     * @return
     */
    getGeometryById(id: string | number): Geometry;

    /**
     * Get all the geometries or the ones filtered if a filter function is provided.
     * @param  [filter=undefined]  - a function to filter the geometries
     * @param  [context=undefined]   - context of the filter function, value to use as this when executing filter.
     * @return
     */
    getGeometries(filter?: (geometry: Geometry, context?: any) => boolean, context?: object): Geometry[];

    /**
     * Get the first geometry, the geometry at the bottom.
     * @return  first geometry
     */
    getFirstGeometry(): Geometry;

    /**
     * Get the last geometry, the geometry on the top
     * @return  last geometry
     */
    getLastGeometry(): Geometry;

    /**
     * Get count of the geometries
     * @return  count
     */
    getCount(): number;

    /**
     * Get extent of all the geometries in the layer, return null if the layer is empty.
     * @return  - extent of the layer
     */
    getExtent(): Extent;

    /**
     * Executes the provided callback once for each geometry present in the layer in order.
     * @param   fn - a callback function
     * @param  context   - callback's context, value to use as this when executing callback.
     * @return  this
     */
    forEach(fn: (geometry: Geometry, idx: number, context?: any) => void, context?: any): OverlayLayer;

    /**
     * Creates a GeometryCollection with all the geometries that pass the test implemented by the provided function.
     * @param   fn      - Function to test each geometry
     * @param  context  - Function's context, value to use as this when executing function.
     * @return  A GeometryCollection with all the geometries that pass the test
     */
    filter(fn: (geometry: Geometry, context?: any) => boolean, context?: any): GeometryCollection;

    /**
     * Whether the layer is empty.
     * @return
     */
    isEmpty(): boolean;

    /**
     * Adds one or more geometries to the layer
     * @param  geometries - one or more geometries
     * @param  [fitView=false]  - automatically set the map to a fit center and zoom for the geometries
     * @param  [fitView.easing=out]  - default animation type
     * @param  [fitView.duration=map.options.zoomAnimationDuration]  - default animation time
     * @param  [fitView.step=null]  - step function during animation, animation frame as the parameter
     * @return  this
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
     * @param   geometries - geometry ids or geometries to remove
     * @returns  this
     */
    removeGeometry(geometries: string | string[] | Geometry | Geometry[]): OverlayLayer;

    /**
     * Clear all geometries in this layer
     * @returns  this
     */
    clear(): OverlayLayer;

    /**
     * Called when geometry is being removed to clear the context concerned.
     * @param   geometry - the geometry instance to remove
     */
    onRemoveGeometry(geometry: Geometry): Geometry;

    /**
     * Gets layer's style.
     * @return layer's style
     */
    getStyle(): object | object[];

    /**
     * Sets style to the layer, styling the geometries satisfying the condition with style's symbol. <br>
     * Based on filter type in [mapbox-gl-js's style specification]{https:// www.mapbox.com/mapbox-gl-js/style-spec/#types-filter}.
     * @param style - layer's style
     * @returns  this
     * @fires VectorLayer#setstyle
     * @example
     */
    setStyle(style: any): this;

    /**
     * Removes layers' style
     * @returns  this
     * @fires VectorLayer#removestyle
     */
    removeStyle(): this;
}

export interface VectorLayer extends OverlayLayer {
    /**
     * Identify the geometries on the given coordinate
     * @param   coordinate   - coordinate to identify
     * @param   [options=null]  - options
     * @param   [options.tolerance=0] - identify tolerance in pixel
     * @param   [options.count=null]  - result count
     * @return  geometries identified
     */
    identify(coordinate: Coordinate, options?: object): Geometry[];

    /**
     * Export the VectorLayer's JSON. <br>
     * @param   [options=null] - export options
     * @param   [options.geometries=null] - If not null and the layer is a [OverlayerLayer]{@link OverlayLayer},
     *                                            the layer's geometries will be exported with the given "options.geometries" as a parameter of geometry's toJSON.
     * @param   [options.clipExtent=null] - if set, only the geometries intersectes with the extent will be exported.
     * @return  layer's JSON
     */
    toJSON(options?: object): object;
}

export interface VectorLayerStatic {
    new(id: string | number, geometries?: Geometry | Geometry[] | null, options?: VectorLayerOptions): VectorLayer;
}
export const VectorLayer: VectorLayerStatic;

export interface CanvasLayer extends Layer {
    /**
     * An optional interface function called only once before the first draw, useful for preparing your canvas operations.
     * @param   context - CanvasRenderingContext2D of the layer canvas.
     * @return  objects that will be passed to function draw(context, ..) as parameters.
     */
    prepareToDraw(context?: CanvasRenderingContext2D): any[];

    /**
     * The required interface function to draw things on the layer canvas.
     * @param   context - CanvasRenderingContext2D of the layer canvas.
     * @param  params - parameters returned by function prepareToDraw(context).
     */
    draw(context: CanvasRenderingContext2D, ...params: any[]): void;

    /**
     * An optional interface function to draw while map is interacting.
     * By default, it will call draw method instead.
     * You can override this method if you are clear with what to draw when interacting to improve performance.
     * @param   context - CanvasRenderingContext2D of the layer canvas.
     * @param  params - parameters returned by function prepareToDraw(context).
     */
    drawOnInteracting(context: CanvasRenderingContext2D, ...params: any[]): void;

    /**
     * Redraw the layer
     * @return  this
     */
    redraw(): this;

    /**
     * Start animation
     * @return  this
     */
    play(): this;

    /**
     * Pause the animation
     * @return  this
     */
    pause(): this;

    /**
     * If the animation is playing
     * @return
     */
    isPlaying(): boolean;

    /**
     * Clear layer's canvas
     * @return  this
     */
    clearCanvas(): this;

    /**
     * Ask the map to redraw the layer canvas without firing any event.
     * @return  this
     */
    requestMapToRender(): this;

    /**
     * Ask the map to redraw the layer canvas and fire layerload event
     * @return  this
     */
    completeRender(): this;

    /**
     * Callback function when layer's canvas is created. <br>
     * Override it to do anything needed.
     */
    onCanvasCreate(): this;

    /**
     * The event callback for map's zoomstart event.
     * @param   param - event parameter
     */
    onZoomStart(param?: object): void;

    /**
     * The event callback for map's zooming event.
     * @param   param - event parameter
     */
    onZooming(param?: object): void;

    /**
     * The event callback for map's zoomend event.
     * @param   param - event parameter
     */
    onZoomEnd(param?: object): void;

    /**
     * The event callback for map's movestart event.
     * @param   param - event parameter
     */
    onMoveStart(param?: object): void;

    /**
     * The event callback for map's moving event.
     * @param   param - event parameter
     */
    onMoving(param?: object): void;

    /**
     * The event callback for map's moveend event.
     * @param   param - event parameter
     */
    onMoveEnd(param?: object): void;

    /**
     * The event callback for map's resize event.
     * @param   param - event parameter
     */
    onResize(param?: object): void;

    /**
     * The callback function to double buffer. <br>
     * In default, it just draws and return, and you can override it if you need to process the canvas image before drawn.
     * @param   bufferContext CanvasRenderingContext2D of double buffer of the layer canvas.
     * @param   context CanvasRenderingContext2D of the layer canvas.
     */
    doubleBuffer(bufferContext: CanvasRenderingContext2D, context: CanvasRenderingContext2D /*, context*/): this;
}

export interface CanvasLayerStatic {
    new(id: string | number, options: CanvasLayerOptions): CanvasLayer;
}
export const CanvasLayer: CanvasLayerStatic;

export interface ParticleLayer extends CanvasLayer {
    /**
     * Interface method to get particles's position at time t.
     * @param   t - current time in milliseconds
     */
    getParticles(t?: number): void;
}

export interface ParticleLayerStatic {
    new(id: string, options?: CanvasLayerOptions): ParticleLayer;
}
export const ParticleLayer: ParticleLayerStatic;

export interface ImageLayer extends Layer {
    /**
     * Set images and redraw
     * @param  images - new images
     * @return  this
     */
    setImages(images: object[]): this;

    /**
     * Get images
     * @return
     */
    getImages(): object[];
}

export interface ImageLayerStatic {
    new(id: string | number, images?: object[], options?: ImageLayerOptions): ImageLayer;
}
export const ImageLayer: ImageLayerStatic;

export interface SpatialReference {
    _placeholder: string;
}

export class Extent {
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;

    constructor(p1: number, p2: number, p3: number, p4: number);
    constructor(x: Coordinate | Point, y: Coordinate | Point);
    constructor(json: object | Extent);

    /**
     * Add the extent with a coordinate or a point.
     * @param  p - point or coordinate to add
     * @returns  a new extent
     */
    add(p: Coordinate | Point): Extent;

    /**
     * Substract the extent with a coordinate or a point.
     * @param  p - point or coordinate to substract
     * @returns  a new extent
     */
    sub(p: Coordinate | Point): Extent;

    /**
     * Round the extent
     * @return  rounded extent
     */
    round(): Extent;

    /**
     * Alias for sub
     * @param  p - point or coordinate to substract
     * @returns  a new extent
     */
    substract(p: Coordinate | Point): Extent;

    /**
     * Get the minimum point
     * @param [out=undefined] - optional point to receive result
     * @return
     */
    getMin(out?: Coordinate): Coordinate;

    /**
     * Get the maximum point
     * @param [out=undefined] - optional point to receive result
     * @return
     */
    getMax(out?: Coordinate): Coordinate;

    /**
     * Get center of the extent.
     * @param [out=undefined] - optional point to receive result
     * @return
     */
    getCenter(out?: Coordinate): Coordinate;

    /**
     * Whether the extent is valid
     *
     * @return
     */
    isValid(): boolean;

    /**
     * Compare with another extent to see whether they are equal.
     * @param    ext2 - extent to compare
     * @return
     */
    equals(ext2: Extent): boolean;

    /**
     * Whether it intersects with another extent
     * @param    ext2 - another extent
     * @return
     */
    intersects(ext2: Extent): boolean;

    /**
     * Whether the extent is within another extent
     * @param    ext2 - another extent
     * @returns
     */
    within(extent: Extent): boolean;

    /**
     * Whether the extent contains the input point.
     * @param   coordinate - input point
     * @returns
     */
    contains(c: Coordinate | number[]): boolean;

    /**
     * Get the width of the Extent
     * @return
     */
    getWidth(): number;

    /**
     * Get the height of the Extent
     * @return
     */
    getHeight(): number;

    /**
     * Get size of the Extent
     * @return
     */
    getSize(): Size;

    /**
     * Combine it with another extent to a larger extent.
     * @param   extent - extent/coordinate/point to combine into
     * @returns  extent combined
     */
    combine(extent: Extent | Coordinate | Point): Extent;

    /**
     * Gets the intersection extent of this and another extent.
     * @param   extent - another extent
     * @return  intersection extent
     */
    intersection(extent: Extent): Extent;

    /**
     * Expand the extent by distance
     * @param   distance  - distance to expand
     * @returns  a new extent expanded from
     */
    expand(distance: Size | number): Extent;

    /**
     * Get extent's JSON object.
     * @return  jsonObject
     * @example
     * //  {xmin : 100, ymin: 10, xmax: 120, ymax:20}
     * var json = extent.toJSON();
     */
    toJSON(): object;

    /**
     * Get a coordinate array of extent's rectangle area, containing 5 coordinates in which the first equals with the last.
     * @return  coordinates array
     */
    toArray(): Coordinate[];

    /**
     * Get a copy of the extent.
     * @return  copy
     */
    copy(): Extent;

    /**
     * Convert to a new extent
     * @param   fn convert function on each point
     * @return
     */
    convertTo(fn: (coord: Coordinate | Point) => Extent): Extent;
}

export class PointExtent extends Extent {}

export class Size {
    width: number;
    height: number;
    constructor(width: number, height: number);
    /**
     * Returns a copy of the size
     * @return  copy
     */
    copy(): Size;

    /**
     * Returns the result of addition of another size.
     * @param  size - size to add
     * @return  result
     */
    add(size: Size): Size;

    /**
     * Returns the result of addition of another size.
     * @param  x - size to add
     * @param  y - size to add
     * @return  result
     */
    add(x: number, y: number): Size;

    /**
     * Compare with another size to see whether they are equal.
     * @param  size - size to compare
     * @return
     */
    equals(size: Size): boolean;

    /**
     * Returns the result of multiplication of the current size by the given number.
     * @param  ratio - ratio to multi
     * @return  result
     */
    multi(ratio: number): Size;

    /**
     * Converts the size object to a [Point]
     * @return  point
     */
    toPoint(): Point;

    /**
     * Converts the size object to an array [width, height]
     * @return
     */
    toArray(): number[];

    /**
     * Convert the size object to a json object {width : .., height : ..}
     * @return  json
     */
    toJSON(): object;
}

export abstract class Position {
    x: number;
    y: number;
    constructor(x: number, y: number);
    constructor(points: number[] | object);

    /**
     * Set point or coordinate's x, y value
     * @param  x - x value
     * @param  y - y value
     * @return  this
     */
    set(x: number, y: number): Coordinate | Point;

    /**
     * Return abs value of the point
     * @return  abs point
     */
    abs(): Coordinate | Point;

    /**
     * Like math.round, rounding the point's xy.
     * @return  rounded point
     */
    round(): Coordinate | Point;

    /**
     * Returns the distance between the current and the given point.
     * @param   point - another point
     * @return  distance
     */
    distanceTo(point: Coordinate | Point): number;

    /**
     * Returns a copy of the coordinate
     * @return  copy
     */
    copy(): Coordinate | Point;

    /**
     * Returns the result of addition of another coordinate.
     * @param  x - coordinate to add
     * @param  [y=undefined] - optional, coordinate to add
     * @return  result
     */
    add(x: Coordinate | Point | any[] | number, y?: number): Coordinate | Point;

    /**
     * Returns the result of subtraction of another coordinate.
     * @param  x - coordinate to add
     * @param  [y=undefined] - optional, coordinate to add
     * @return  result
     */
    sub(x: Coordinate | Point | any[] | number, y?: number): Coordinate | Point;

    /**
     * Alias for sub
     * @param  x - coordinate to add
     * @param  [y=undefined] - optional, coordinate to add
     * @return  result
     */
    substract(x: Coordinate | Point | any[] | number, y?: number): Coordinate | Point;

    /**
     * Returns the result of multiplication of the current coordinate by the given number.
     * @param  ratio - ratio to multi
     * @return  result
     */
    multi(ratio: number): Coordinate | Point;

    /**
     * Returns the result of division of the current point by the given number.
     * @param  n - number to div
     * @return  result
     */
    div(n: number): Coordinate | Point;

    /**
     * Compare with another coordinate to see whether they are equal.
     * @param  c - coordinate to compare
     * @return
     */
    equals(c: Coordinate | Point): boolean;

    /**
     * Whether the coordinate/point is zero
     */
    isZero(): boolean;

    /**
     * Convert to a number array [x, y]
     * @return  number array
     */
    toArray(): number[];

    /**
     * Formats coordinate number using fixed-point notation.
     * @param   n The number of digits to appear after the decimal point
     * @return    fixed coordinate
     */
    toFixed(n: number): Coordinate;

    /**
     * Convert to a json object {x : .., y : ..}
     * @return  json
     */
    toJSON(): object;
}

export class Coordinate extends Position {
    /**
     * Convert one or more Coordinate objects to GeoJSON style coordinates
     * @param   coordinates - coordinates to convert
     * @return
     * @example
     * //  result is [[100,0], [101,1]]
     * var numCoords = Coordinate.toNumberArrays([new Coordinate(100,0), new Coordinate(101,1)]);
     */
    static toNumberArrays(coordinates: Coordinate | Coordinate[]): number[] | number[][];

    /**
     * Convert one or more GeoJSON style coordiantes to Coordinate objects
     * @param   coordinates - coordinates to convert
     * @return
     * @example
     * var coordinates = Coordinate.toCoordinates([[100,0], [101,1]]);
     */
    static toCoordinates(coordinates: number[] | number[][]): Coordinate | Coordinate[];
}

export class Point extends Position {
    constructor(x: number, y: number);
    constructor(points: number[] | object);

    /**
     * Compare with another point with a delta
     * @param  p
     * @param  delta
     * @return
     */
    closeTo(p: Point, delta: number): boolean;

    /**
     * Return the magitude of this point: this is the Euclidean
     * distance from the 0, 0 coordinate to this point's x and y
     * coordinates.
     * @return  magnitude
     */
    mag(): number;

    /**
     * Calculate this point but as a unit vector from 0, 0, meaning
     * that the distance from the resulting point to the 0, 0
     * coordinate will be equal to 1 and the angle from the resulting
     * point to the 0, 0 coordinate will be the same as before.
     * @return  unit vector point
     */
    unit(): Point;

    /**
     * Compute a perpendicular point, where the new y coordinate
     * is the old x coordinate and the new x coordinate is the old y
     * coordinate multiplied by -1
     * @return  perpendicular point
     */
    perp(): Point;

    /**
     * Get the angle between this point and another point, in radians
     * from mapbox/point-geometry
     * @param  b the other point
     * @return  angle
     */
    angleWith(b: Point): number;

    /**
     * Find the angle of the two vectors, solving the formula for
     * the cross product a x b = |a||b|sin(θ) for θ.
     * from mapbox/point-geometry
     *
     * @param  x the x-coordinate
     * @param  y the y-coordinate
     * @return  the angle in radians
     */
    angleWithSep(x: number, y: number): number;

    /**
     * Rotate this point around the 0, 0 origin by an angle a,
     * given in radians
     * from mapbox/point-geometry
     *
     * @param  a angle to rotate around, in radians
     * @return  output point
     */
    rotate(a: number): Point;
}

export interface Geometry extends Handlerable, JSONAble, ui.Menuable {
    /**
     * Returns the first coordinate of the geometry.
     *
     * @return  First Coordinate
     */
    getFirstCoordinate(): Coordinate;

    /**
     * Returns the last coordinate of the geometry.
     *
     * @return  Last Coordinate
     */
    getLastCoordinate(): Coordinate;

    /**
     * Adds the geometry to a layer
     * @param layer    - layer add to
     * @param  [fitview=false] - automatically set the map to a fit center and zoom for the geometry
     * @return  this
     * @fires Geometry#add
     */
    addTo(layer: Layer | Map, fitview?: boolean): this;

    /**
     * Get the layer which this geometry added to.
     * @returns  - layer added to
     */
    getLayer(): Layer;

    /**
     * Get the map which this geometry added to
     * @returns  - map added to
     */
    getMap(): Map;

    /**
     * Gets geometry's id. Id is set by setId or constructor options.
     * @returns  geometry的id
     */
    getId(): string | number;

    /**
     * Set geometry's id.
     * @param  id - new id
     * @returns  this
     * @fires Geometry#idchange
     */
    setId(id: string): this;

    /**
     * Get geometry's properties. Defined by GeoJSON as [feature's properties]{@link http:// geojson.org/geojson-spec.html#feature-objects}.
     *
     * @returns  properties
     */
    getProperties(): object;

    /**
     * Set a new properties to geometry.
     * @param  properties - new properties
     * @returns  this
     * @fires Geometry#propertieschange
     */
    setProperties(properties: object): this;

    /**
     * Get type of the geometry, e.g. "Point", "LineString"
     * @returns  type of the geometry
     */
    getType(): string;

    /**
     * Get symbol of the geometry
     * @returns  geometry's symbol
     */
    getSymbol(): object;

    /**
     * Set a new symbol to style the geometry.
     * @param  symbol - new symbol
     * @see {@tutorial symbol Style a geometry with symbols}
     * @return  this
     * @fires Geometry#symbolchange
     */
    setSymbol(symbol: object): this;

    /**
     * Get symbol's hash code
     * @return
     */
    getSymbolHash(): string;

    /**
     * Update geometry's current symbol.
     *
     * @param props - symbol properties to update
     * @return  this
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
     * @returns
     */
    getCenter(): Coordinate;

    /**
     * Get the geometry's geographical extent
     *
     * @returns  geometry's extent
     */
    getExtent(): Extent;

    /**
     * Get geometry's screen extent in pixel
     * @returns
     */
    getContainerExtent(out?: PointExtent): PointExtent;

    /**
     * Get pixel size of the geometry, which may vary in different zoom levels.
     *
     * @returns
     */
    getSize(): Size;

    /**
     * Whehter the geometry contains the input container point.
     *
     * @param   point - input container point or coordinate
     * @param   [t=undefined] - tolerance in pixel
     * @return
     * @example
     * var circle = new Circle([0, 0], 1000)
     *     .addTo(layer);
     * var contains = circle.containsPoint(new maptalks.Point(400, 300));
     */
    containsPoint(containerPoint: Point | Coordinate, t?: number): boolean;

    /**
     * Show the geometry.
     *
     * @return  this
     * @fires Geometry#show
     */
    show(): this;

    /**
     * Hide the geometry
     *
     * @return  this
     * @fires Geometry#hide
     */
    hide(): this;

    /**
     * Whether the geometry is visible
     *
     * @returns
     */
    isVisible(): boolean;

    /**
     * Get zIndex of the geometry, default is 0
     * @return  zIndex
     */
    getZIndex(): number;

    /**
     * Set a new zIndex to Geometry and fire zindexchange event (will cause layer to sort geometries and render)
     * @param  zIndex - new zIndex
     * @return  this
     * @fires Geometry#zindexchange
     */
    setZIndex(zIndex: number): this;

    /**
     * Only set a new zIndex to Geometry without firing zindexchange event. <br>
     * Can be useful to improve perf when a lot of geometries' zIndex need to be updated. <br>
     * When updated N geometries, You can use setZIndexSilently with (N-1) geometries and use setZIndex with the last geometry for layer to sort and render.
     * @param  zIndex - new zIndex
     * @return  this
     */
    setZIndexSilently(zIndex: number): this;

    /**
     * Bring the geometry on the top
     * @return  this
     * @fires Geometry#zindexchange
     */
    bringToFront(): this;

    /**
     * Bring the geometry to the back
     * @return  this
     * @fires Geometry#zindexchange
     */
    bringToBack(): this;

    /**
     * Translate or move the geometry by the given offset.
     *
     * @param   x - x offset
     * @param   y - y offset
     * @return  this
     * @fires Geometry#positionchange
     * @fires Geometry#shapechange
     */
    translate(x: number, y: number): this;

    /**
     * Translate or move the geometry by the given offset.
     *
     * @param   x - x offset
     * @return  this
     * @fires Geometry#positionchange
     * @fires Geometry#shapechange
     */
    translate(x: number[]): this;

    /**
     * Flash the geometry, show and hide by certain internal for times of count.
     *
     * @param  [interval=100]     - interval of flash, in millisecond (ms)
     * @param  [count=4]          - flash times
     * @param  [cb=null]        - callback function when flash ended
     * @param context          - callback context
     * @return  this
     */
    flash(interval?: number, count?: number, cb?: (context?: any) => void, context?: any): this;

    /**
     * Returns a copy of the geometry without the event listeners.
     * @returns  copy
     */
    copy(): this;

    /**
     * remove itself from the layer if any.
     * @returns  this
     * @fires Geometry#removestart
     * @fires Geometry#remove
     */
    remove(): this;

    /**
     * Exports [geometry]{@link http:// geojson.org/geojson-spec.html#feature-objects} out of a GeoJSON feature.
     * @return  GeoJSON Geometry
     */
    toGeoJSONGeometry(): object;

    /**
     * Exports a GeoJSON feature.
     * @param  [opts=null]              - export options
     * @param  [opts.geometry=true]    - whether export geometry
     * @param  [opts.properties=true]  - whether export properties
     * @returns  GeoJSON Feature
     */
    toGeoJSON(opts?: object): object;

    /**
     * Get the geographic length of the geometry.
     * @returns  geographic length, unit is meter
     */
    getLength(): number;

    /**
     * Get the geographic area of the geometry.
     * @returns  geographic area, unit is sq.meter
     */
    getArea(): number;

    /**
     * Rotate the geometry of given angle around a pivot point
     * @param  angle - angle to rotate in degree
     * @param  [pivot=null]  - optional, will be the geometry's center by default
     * @returns  this
     */
    rotate(angle: number, pivot?: Coordinate): this;

    /**
     * Start to edit
     * @param  [options=null]        - edit options
     * @param  [options.symbol=null] - symbol for the geometry during editing
     * @param  [options.fixAspectRatio=false]    - fix outline's aspect ratio when resizing
     * @param  [options.centerHandleSymbol=null] - symbol of center handle
     * @param  [options.vertexHandleSymbol=null] - symbol of vertex handle
     * @param  [options.newVertexHandleSymbol=null] - symbol of new vertex handle
     * @param  [options.removeVertexOn=contextmenu] - event to remove a vertex from line or polygon, contextmenu by default
     * @return  this
     */
    startEdit(opts?: object): this;

    /**
     * End editing.
     * @return  this
     */
    endEdit(): this;

    /**
     * Redo the edit
     * @return  this
     */
    redoEdit(): this;

    /**
     * Undo the edit
     * @return  this
     */
    undoEdit(): this;

    /**
     * cancel the edit
     * @return  this
     */
    cancelEdit(): this;

    /**
     * Whether the geometry is being edited.
     */
    isEditing(): boolean;

    /**
     * Whether the geometry is being dragged.
     */
    isDragging(): boolean;

    /**
     * Animate the geometry
     *
     * @param     styles          - styles to animate
     * @param     [options=null]  - animation options
     * @param     [options.duration=1000]      - duration
     * @param     [options.startTime=null]  - time to start animation in ms
     * @param     [options.easing=linear]   - animation easing: in, out, inAndOut, linear, upAndDown
     * @param    [options.repeat=false]      - repeat animation
     * @param   [step=null]  - step function during animation, animation frame as the parameter
     * @return  animation player
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
    animate(styles: object, options?: object, step?: animation.FrameStepFun): animation.Player;

    /**
     * Set an InfoWindow to the geometry
     * @param  options - construct [options]{@link ui.InfoWindow#options} for the InfoWindow
     * @return  this
     * @example
     * geometry.setInfoWindow({
     *     title    : 'This is a title',
     *     content  : '<div style="color:#f00">This is content of the InfoWindow</div>'
     * });
     */
    setInfoWindow(options: object): this;

    /**
     * Get the InfoWindow instance.
     * @return
     */
    getInfoWindow(): ui.InfoWindow;

    /**
     * Open the InfoWindow, default on the center of the geometry.
     * @param   [coordinate=null] - coordinate to open the InfoWindow
     * @return  this
     */
    openInfoWindow(coordinate?: Coordinate): this;

    /**
     * Close the InfoWindow
     * @return  this
     */
    closeInfoWindow(): this;

    /**
     * Remove the InfoWindow
     * @return  this
     */
    removeInfoWindow(): this;

    /**
     * Produce a geometry from one or more [JSON]{@link Geometry#toJSON} or GeoJSON.
     * @param   json - a geometry's JSON or a geojson
     * @return  geometry
     */
    fromJSON(json: any): Geometry;

    /**
     * Export a profile json out of the geometry. <br>
     * Besides exporting the feature object, a profile json also contains symbol, construct options and infowindow info.<br>
     * The profile json can be stored somewhere else and be used to reproduce the geometry later.<br>
     * Due to the problem of serialization for functions, event listeners and contextmenu are not included in profile json.
     * @param   [options=null]          - export options
     * @param  [opts.geometry=true]    - whether export feature's geometry
     * @param  [opts.properties=true]  - whether export feature's properties
     * @param  [opts.options=true]     - whether export construct options
     * @param  [opts.symbol=true]      - whether export symbol
     * @param  [opts.infoWindow=true]  - whether export infowindow
     * @return  profile json object
     */
    toJSON(options?: object): any;
}

export const Geometry: Geometry;

export interface Path extends Geometry {
    /**
     * Show the linestring with animation
     * @param   [options=null] animation options
     * @param   [options.duration=1000] duration
     * @param   [options.easing=out] animation easing
     * @param   [cb=null] callback function in animation, function parameters: frame, currentCoord
     * @example
     *  line.animateShow({
     *    duration : 2000,
     *    easing : 'linear'
     *  }, function (frame, currentCoord) {
     *    // frame is the animation frame
     *    // currentCoord is current coordinate of animation
     *  });
     * @return          this
     */
    animateShow(options?: object, cb?: animation.FrameStepFun): this;
}

export interface Marker extends Geometry, CenterAble {}

export interface MarkerStatic {
    new(coordinates: Coordinate | number[], options?: MarkerOptions): Marker;
}

export const Marker: MarkerStatic;

export interface TextMarker extends Marker {
    /**
     * Get text content of the label
     * @returns
     */
    getContent(): string;

    /**
     * Set a new text content to the label
     * @return const  this
     * @fires Label#contentchange
     */
    setContent(): this;
}

export interface Label extends TextMarker, TextEditable {
    /**
     * Get label's box style
     * @return
     */
    getBoxStyle(): object;

    /**
     * Set a new box style to the label
     * @param
     * @returns const  this
     */
    setBoxStyle(style: object): this;

    /**
     * Get label's text symbol
     * @return
     */
    getTextSymbol(): object;

    /**
     * Set a new text symbol to the label
     * @param  symbol
     * @returns const  this
     */
    setTextSymbol(symbol: object): this;
}

export interface LabelStatic {
    new(contetn: string, coordinates: Coordinate | number[], options?: LabelOptions): Label;
}
export const Label: LabelStatic;

export interface TextBox extends TextMarker, TextEditable {
    /**
     * Get textbox's width
     * @return
     */
    getWidth(): number;

    /**
     * Set new width to textbox
     * @param  width
     * returns {TextBox} this
     */
    setWidth(width: number): this;

    /**
     * Get textbox's height
     * @return
     */
    getHeight(): number;

    /**
     * Set new height to textbox
     * @param  height
     * returns {TextBox} this
     */
    setHeight(height: number): this;

    /**
     * Get textbox's boxSymbol
     * @return  boxsymbol
     */
    getBoxSymbol(): object;

    /**
     * Set a new box symbol to textbox
     * @param  symbol
     * returns {TextBox} this
     */
    setBoxSymbol(symbol: object): this;

    /**
     * Get textbox's text style
     * @return
     */
    getTextStyle(): object;

    /**
     * Set a new text style to the textbox
     * @param  style new text style
     * returns {TextBox} this
     */
    setTextStyle(style: object): this;
}

export interface TextBoxStatic {
    new(
        content: string,
        coordinates: Coordinate | number[],
        width: number,
        height: number,
        options?: TextBoxOptions,
    ): TextBox;
}
export const TextBox: TextBoxStatic;

export interface Polygon extends Path {
    /**
     * Set coordinates to the polygon
     *
     * @param  coordinates - new coordinates
     * @return  this
     * @fires Polygon#shapechange
     */
    setCoordinates(coordinates: any): this;

    /**
     * Gets polygons's coordinates
     *
     * @returns
     */
    getCoordinates(): Coordinate[][];

    /**
     * Get center of linestring's intersection with give extent
     * @example
     *  const extent = map.getExtent();
     *  const center = line.getCenterInExtent(extent);
     * @param  extent
     * @return  center, null if line doesn't intersect with extent
     */
    getCenterInExtent(extent: Extent): Coordinate;

    /**
     * Gets shell's coordinates of the polygon
     *
     * @returns
     */
    getShell(): Coordinate[];

    /**
     * Gets holes' coordinates of the polygon if it has.
     * @returns
     */
    getHoles(): Coordinate[][];

    /**
     * Whether the polygon has any holes inside.
     *
     * @returns
     */
    hasHoles(): boolean;
}

export interface PolygonStatic {
    new(coordinates: number[][] | number[][][] | Coordinate[] | Coordinate[][], options?: PathOptions): Polygon;
}
export const Polygon: PolygonStatic;

export interface LineString extends Path {
    /**
     * Set new coordinates to the line string
     * @param coordinates - new coordinates
     * @fires LineString#shapechange
     * @return  this
     */
    setCoordinates(coordinates: Coordinate[] | number[][]): this;

    /**
     * Get coordinates of the line string
     * @return coordinates
     */
    getCoordinates(): Coordinate[] | number[][];

    /**
     * Get center of linestring's intersection with give extent
     * @example
     *  const extent = map.getExtent();
     *  const center = line.getCenterInExtent(extent);
     * @param  extent
     * @return  center, null if line doesn't intersect with extent
     */
    getCenterInExtent(extent: Extent): Coordinate;
}

export interface LineStringStatic {
    new(coordinates: Coordinate[] | number[][] | any[], options?: LineStringOptions): LineString;
}
export const LineString: LineStringStatic;

export interface Curve extends LineString {
    _curve: string;
}

export interface ArcCurve extends Curve {
    _arcCurve: string;
}

export interface ArcCurveStatic {
    new(coordinates: Coordinate[] | number[][], options?: ArcCurveOptions): ArcCurve;
}

export const ArcCurve: ArcCurveStatic;

export interface QuadBezierCurve extends Curve {
    _quadBezierCurve: string;
}

export interface QuadBezierCurveStatic {
    new(coordinates: Coordinate[] | number[][], options?: LineStringOptions): QuadBezierCurve;
}

export const QuadBezierCurve: QuadBezierCurveStatic;

export interface CubicBezierCurve extends Curve {
    _cubicBezierCurve: string;
}
export interface CubicBezierCurveStatic {
    new(coordinates: Coordinate[] | number[][], options?: LineStringOptions): CubicBezierCurve;
}

export const CubicBezierCurve: CubicBezierCurveStatic;

export interface Connectable {
    /**
     * Gets the source of the connector line.
     * @return
     *  Connectable.getConnectSource
     */
    getConnectSource(): Geometry | control.Control | ui.UIComponent;

    /**
     * Sets the source to the connector line.
     * @param src
     * @return  this
     *  Connectable.setConnectSource
     */
    setConnectSource(src: Geometry | control.Control | ui.UIComponent): this;

    /**
     * Gets the target of the connector line.
     * @return
     *  Connectable.getConnectTarget
     */
    getConnectTarget(): Geometry | control.Control | ui.UIComponent;

    /**
     * Sets the target to the connector line.
     * @param  target
     * @return  this
     *  Connectable.setConnectTarget
     */
    setConnectTarget(target: Geometry | control.Control | ui.UIComponent): this;
}

export interface ConnectorLine extends Connectable, LineString {}

export interface ConnectorLineStatic {
    new(
        src: Geometry | control.Control | ui.UIComponent,
        target: Geometry | control.Control | ui.UIComponent,
        options?: ConnectorLineOptions,
    ): ConnectorLine;
}

export const ConnectorLine: ConnectorLineStatic;

export interface ArcConnectorLine extends Connectable, LineString {}

export interface ArcConnectorLineStatic {
    new(
        src: Geometry | control.Control | ui.UIComponent,
        target: Geometry | control.Control | ui.UIComponent,
        options?: ArcConnectorLineOptions,
    ): ArcConnectorLine;
}
export const ArcConnectorLine: ArcConnectorLineStatic;

export interface Ellipse extends Polygon, CenterAble {
    /**
     * Set a new center to the geometry
     * @param  coordinates - new center
     * @return  this
     * @fires Geometry#positionchange
     *  CenterAble.setCoordinates
     */
    setCoordinates(coordinates: Coordinate | number[]): this;

    /**
     * Get geometry's center
     * @return  - center of the geometry
     */
    getCoordinates(): Coordinate;

    /**
     * Gets polygons's coordinates
     *
     * @returns
     */
    getCoordinates(): Coordinate[][];

    /**
     * Get ellipse's width
     * @return
     */
    getWidth(): number;

    /**
     * Set new width to ellipse
     * @param  width - new width
     * @fires Ellipse#shapechange
     * @return  this
     */
    setWidth(width: number): this;

    /**
     * Get ellipse's height
     * @return
     */
    getHeight(): number;

    /**
     * Set new height to ellipse
     * @param  height - new height
     * @fires Ellipse#shapechange
     * @return  this
     */
    setHeight(height: number): number;

    /**
     * Gets the shell of the ellipse as a polygon, number of the shell points is decided by [options.numberOfShellPoints]{@link Circle#options}
     * @return  - shell coordinates
     */
    getShell(): Coordinate[];

    /**
     * Ellipse won't have any holes, always returns null
     * @return  an empty array
     */
    getHoles(): object[];

    /**
     * Gets holes' coordinates of the polygon if it has.
     * @returns
     */
    getHoles(): Coordinate[][];
}

export interface EllipseStatic {
    new(center: Coordinate | number[], width: number, height: number, options?: EllipseOptions): Ellipse;
}
export const Ellipse: EllipseStatic;

export interface Circle extends Polygon, CenterAble {
    /**
     * Set a new center to the geometry
     * @param  coordinates - new center
     * @return  this
     * @fires Geometry#positionchange
     *  CenterAble.setCoordinates
     */
    setCoordinates(coordinates: Coordinate | number[]): this;

    /**
     * Get geometry's center
     * @return  - center of the geometry
     */
    getCoordinates(): Coordinate;

    /**
     * Gets polygons's coordinates
     *
     * @returns
     */
    getCoordinates(): Coordinate[][];

    /**
     * Gets the shell of the ellipse as a polygon, number of the shell points is decided by [options.numberOfShellPoints]{@link Circle#options}
     * @return  - shell coordinates
     */
    getShell(): Coordinate[];

    /**
     * Ellipse won't have any holes, always returns null
     * @return  an empty array
     */
    getHoles(): object[];

    /**
     * Gets holes' coordinates of the polygon if it has.
     * @returns
     */
    getHoles(): Coordinate[][];

    /**
     * Get radius of the circle
     * @return
     */
    getRadius(): number;

    /**
     * Set a new radius to the circle
     * @param  radius - new radius
     * @return  this
     * @fires Circle#shapechange
     */
    setRadius(radius: number): this;
}

export interface CircleStatic {
    new(center: Coordinate | number[], radius: number, options?: EllipseOptions): Circle;
}
export const Circle: CircleStatic;

export interface Sector extends Circle {
    /**
     * Get the sector's start angle
     * @return
     */
    getStartAngle(): number;

    /**
     * Set a new start angle to the sector
     * @param  startAngle
     * @return  this
     * @fires Sector#shapechange
     */
    setStartAngle(startAngle: number): this;

    /**
     * Get the sector's end angle
     * @return
     */
    getEndAngle(): number;

    /**
     * Set a new end angle to the sector
     * @param  endAngle
     * @return  this
     * @fires Sector#shapechange
     */
    setEndAngle(endAngle: number): this;

    /**
     * Gets the shell of the sector as a polygon, number of the shell points is decided by [options.numberOfShellPoints]{@link Sector#options}
     * @return  - shell coordinates
     */
    getShell(): Coordinate[];
}

export interface SectorStatic {
    new(
        center: Coordinate | number[],
        radius: number,
        startAngle: number,
        endAngle: number,
        options?: EllipseOptions,
    ): Sector;
}
export const Sector: SectorStatic;

export interface Rectangle extends Polygon {
    /**
     * Get coordinates of rectangle's northwest
     * @return
     */
    getCoordinates(): Coordinate;

    /**
     * Gets polygons's coordinates
     *
     * @returns
     */
    getCoordinates(): Coordinate[][];

    /**
     * Get rectangle's width
     * @return
     */
    getWidth(): number;

    /**
     * Set new width to the rectangle
     * @param  width - new width
     * @fires Rectangle#shapechange
     * @return  this
     */
    setWidth(width: number): this;

    /**
     * Get rectangle's height
     * @return
     */
    getHeight(): number;

    /**
     * Set new height to rectangle
     * @param  height - new height
     * @fires Rectangle#shapechange
     * @return  this
     */
    setHeight(height: number): this;

    /**
     * Gets the shell of the rectangle as a polygon
     * @return  - shell coordinates
     */
    getShell(): Coordinate[];

    /**
     * Rectangle won't have any holes, always returns null
     * @return  an empty array
     */
    getHoles(): object[];

    /**
     * Gets holes' coordinates of the polygon if it has.
     * @returns
     */
    getHoles(): Coordinate[][];
}

export interface RectangleStatic {
    new(coordinates: Coordinate | number[], width: number, height: number, options?: PathOptions): Rectangle;
}
export const Rectangle: RectangleStatic;

export interface GeometryCollection extends Geometry {
    /**
     * Set new geometries to the geometry collection
     * @param  geometries
     * @return  this
     * @fires GeometryCollection#shapechange
     */
    setGeometries(geometries: Geometry[]): this;

    /**
     * Get geometries of the geometry collection
     * @return  geometries
     */
    getGeometries(): Geometry[];

    /**
     * Executes the provided callback once for each geometry present in the collection in order.
     * @param   fn             - a callback function
     * @param  context   - callback's context
     * @return  this
     */
    forEach(fn: (geometry: Geometry, idx: number) => void, context?: any): this;

    /**
     * Creates a GeometryCollection with all elements that pass the test implemented by the provided function.
     * @param   fn      - Function to test each geometry
     * @param  context    - Function's context
     * @return  A GeometryCollection with all elements that pass the test
     * @example
     * var filtered = collection.filter(['==', 'foo', 'bar]);
     * @example
     * var filtered = collection.filter(geometry => geometry.getProperties().foo === 'bar');
     */
    filter(fn: ((geometry: Geometry, context?: any) => boolean) | any[], context?: any): GeometryCollection;

    /**
     * Translate or move the geometry collection by the given offset.
     * @param   offset - translate offset
     * @return  this
     */
    translate(offset: Coordinate | number[]): this;

    /**
     * Translate or move the geometry by the given offset.
     *
     * @param   x - x offset
     * @param   y - y offset
     * @return  this
     * @fires Geometry#positionchange
     * @fires Geometry#shapechange
     */
    translate(x: number, y: number): this;

    /**
     * Whether the geometry collection is empty
     * @return
     */
    isEmpty(): boolean;
}

export interface GeometryCollectionStatic {
    /**
     * @param  geometries - GeometryCollection's geometries
     * @param  [options=null] - options defined in [nGeometryCollection]{@link GeometryCollection#options}
     */
    new(geometries: Geometry[], options?: object): GeometryCollection;
}
export const GeometryCollection: GeometryCollectionStatic;

export interface MultiGeometry extends GeometryCollection {
    /**
     * Get coordinates of the collection
     * @return  coordinates
     */
    getCoordinates(): Coordinate[] | Coordinate[][] | Coordinate[][][];

    /**
     * Set new coordinates to the collection
     * @param  coordinates
     * @returns  this
     * @fires maptalk.Geometry#shapechange
     */
    setCoordinates(coordinates: Coordinate[] | Coordinate[][] | Coordinate[][][]): this;
}
export interface MultiGeometryStatic {
    new(geoType: Class, type: string, data: Geometry[], options?: GeometryOptions): any;
}
export const MultiGeometry: MultiGeometryStatic;

export interface MultiPoint extends MultiGeometry {
    /**
     * Find the closet point to the give coordinate
     * @param  coordinate coordinate
     * @returns  coordinate
     */
    findClosest(coordinate: Coordinate): Coordinate;
}
export interface MultiPointStatic {
    new(data: number[][] | Coordinate[] | Marker[], options?: GeometryOptions): MultiPoint;
}

export const MultiPoint: MultiPointStatic;

export interface MultiLineString extends MultiGeometry {
    _multiLineString: string;
}

export interface MultiLineStringStatic {
    new(data: number[][][] | Coordinate[][] | LineString[], options?: LineStringOptions): MultiLineString;
}
export const MultiLineString: MultiLineStringStatic;

export interface MultiPolygon extends MultiGeometry {
    _multiPolygon: string;
}

export interface MultiPolygonStatic {
    new(data: number[][][][] | Coordinate[][][] | Polygon[], options?: GeometryOptions): MultiPolygon;
}

export const MultiPolygon: MultiPolygonStatic;

export namespace GeoJSON {
    /**
     * Convert one or more GeoJSON objects to geometry
     * @param   geoJSON - GeoJSON objects or GeoJSON string
     * @param   [foreachFn=undefined] - callback function for each geometry
     * @return  a geometry array when input is a FeatureCollection
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
    function toGeometry(geoJSON: string | object | object[], foreachFn?: (geometry: Geometry) => void): Geometry;
}

export class MapTool extends Eventable {
    _markerLayer: Layer;
    /**
     * Adds the map tool to a map.
     * @param  map
     * @return  this
     * @fires MapTool#add
     */
    addTo(map: Map): this;

    /**
     * Gets the map it added to.
     * @return  map
     */
    getMap(): Map;

    /**
     * Enable the map tool.
     * @return  this
     * @fires MapTool#enable
     */
    enable(): this;

    /**
     * Disable the map tool
     * @return  this
     * @fires MapTool#disable
     */
    disable(): this;

    /**
     * Returns whether the tool is enabled
     * @return  true | false
     */
    isEnabled(): boolean;

    remove(): boolean;
}

export class DrawTool extends MapTool {
    /**
     * Register a new mode for DrawTool
     * @param   name       mode name
     * @param   modeAction modeActions
     * @param   modeAction.action the action of DrawTool: click, mousedown, clickDblclick
     * @param   modeAction.create the create method of drawn geometry
     * @param   modeAction.update the update method of drawn geometry
     * @param   modeAction.generate the method to generate geometry at the end of drawing.
     * @example
     * Register "CubicBezierCurve" mode to draw Cubic Bezier Curves.
     */
    static registerMode(name: string, modeAction: DrawToolModeActionOptions): void;

    /**
     * Get mode actions by mode name
     * @param   name DrawTool mode name
     * @return       mode actions
     */
    static getRegisterMode(name: string): object;

    constructor(options?: DrawToolOptions);

    /**
     * Get current mode of draw tool
     * @return  mode
     */
    getMode(): string;

    /**
     * Set mode of the draw tool
     * @param  mode - mode of the draw tool
     * @expose
     */
    setMode(mode: string): this;

    /**
     * Get symbol of the draw tool
     * @return  symbol
     */
    getSymbol(): object;

    /**
     * Set draw tool's symbol
     * @param  symbol - symbol set
     * @returns  this
     */
    setSymbol(symbol: object): this;

    /**
     * Get geometry is currently drawing
     * @return  geometry currently drawing
     */
    getCurrentGeometry(): Geometry;

    /**
     * Undo drawing, only applicable for click/dblclick mode
     * @return  this
     */
    undo(): this;

    /**
     * Redo drawing, only applicable for click/dblclick mode
     * @return  this
     */
    redo(): this;

    /**
     * End current draw
     * @param  [param=null] params of drawend event
     * @returns  this
     */
    endDraw(param?: object): this;
}

export class DistanceTool extends DrawTool {
    constructor(optinos?: DistanceToolOptions);

    /**
     * Clear the measurements
     * @return this
     */
    clear(): this;

    /**
     * Get the VectorLayers with the geometries drawn on the map during measuring.
     * @return
     */
    getMeasureLayers(): Layer[];

    /**
     * Get last measuring result
     * @return
     */
    getLastMeasure(): number;
}

export class AreaTool extends DistanceTool {}

export namespace CRS {
    /**
     * Predefined CRS of well-known WGS84 (aka EPSG:4326)
     */
    const WGS84: CRS;

    /**
     * Alias for CRS.WGS84
     */
    const EPSG4326: CRS;

    /**
     * Projected Coordinate System used by google maps that has the following alias: 'EPSG:3785', 'GOOGLE', 'EPSG:900913'
     */
    const EPSG3857: CRS;

    /**
     * A CRS represents a simple Cartesian coordinate system. <br>
     * Maps x, y directly, is useful for maps of flat surfaces (e.g. indoor maps, game maps).
     */
    const IDENTITY: CRS;

    /**
     * Official coordinate system in China (aka EPSG:4490), in most cases, it can be considered the same with WGS84.
     * @see  {@link http:// spatialreference.org/ref/sr-org/7408/}
     */
    const CGCS2000: CRS;

    /**
     * Alias for static CGCS2000
     */
    const EPSG4490: CRS;

    /**
     * Projection used by [Baidu Map]{@link http:// map.baidu.com}, a popular web map service in China.
     */
    const BD09LL: CRS;

    /**
     * A encrypted CRS usded in the most online map services in China..
     *
     * @see {@link https:// en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China}
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
     * @param   proj - a proj4 projection string.
     * @return
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
 */
export interface Transformation {
    /**
     * Transform a projected coordinate to a 2d point. <br>
     * Parameter scale in transform/untransform method is used to scale the result 2d points on map's different zoom levels.
     * @param   coordinates - projected coordinate to transform
     * @param   scale                              - transform scale
     * @return  2d point.
     */
    transform(coordinates: number[] | Coordinate, scale: number, out?: Point): Point;

    /**
     * Transform a 2d point to a projected coordinate.
     * @param   point   - 2d point
     * @param   scale           - transform scale
     * @return   projected coordinate.
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
     * @param   matrix transformation array
     */
    new(matrix: number[]): Transformation;
}
export const Transformation: TransformationStatic;

export abstract class Handler {
    /**
     * Enables the handler
     * @return this
     */
    enable(): this;

    /**
     * Disablesthe handler
     * @return this
     */
    disable(): this;

    /**
     * Returns true if the handler is enabled.
     * @return
     */
    enabled(): boolean;
}

export abstract class DragHandler extends Handler {}

export namespace SpatialReference {
    function getProjectionInstance(prjName: string): any;

    function loadArcgis(url: string, cb: (err: any, spatialRef: any) => void, options?: object): void;

    function loadWMTS(url: string, cb: (err: any, spatialRef: any) => void, options?: object): void;
}
