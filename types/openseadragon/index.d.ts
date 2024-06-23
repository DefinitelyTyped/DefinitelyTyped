declare namespace OpenSeadragon {
    class Browser {
        vendor: BROWSERS;
        version: number;
        alpha: boolean;
    }

    enum BROWSERS {
        UNKNOWN = 0,
        IE = 1,
        FIREFOX = 2,
        SAFARI = 3,
        CHROME = 4,
        OPERA = 5,
        EDGE = 6,
        CHROMEEDGE = 7,
    }

    enum ButtonState {
        REST,
        GROUP,
        HOVER,
        DOWN,
    }

    enum ControlAnchor {
        NONE,
        TOP_LEFT,
        TOP_RIGHT,
        BOTTOM_LEFT,
        BOTTOM_RIGHT,
        ABSOLUTE,
    }

    const DEFAULT_SETTINGS: Options;

    const fullScreenApi: {
        supportsFullScreen: boolean;
        isFullScreen: () => boolean;
        getFullScreenElement: () => HTMLElement;
        requestFullScreen: () => void;
        exitFullScreen: () => void;
        cancelFullScreen: () => void;
        fullScreenEventName: string;
        fullScreenErrorEventName: string;
    };

    enum OverlayPlacement {
        CENTER,
        TOP_LEFT,
        TOP,
        TOP_RIGHT,
        RIGHT,
        BOTTOM_RIGHT,
        BOTTOM,
        BOTTOM_LEFT,
        LEFT,
    }

    enum OverlayRotationMode {
        NO_ROTATION,
        EXACT,
        BOUNDING_BOX,
    }

    let pixelDensityRatio: number;

    enum Placement {
        CENTER,
        TOP_LEFT,
        TOP,
        TOP_RIGHT,
        RIGHT,
        BOTTOM_RIGHT,
        BOTTOM,
        BOTTOM_LEFT,
        LEFT,
    }

    let supportsCanvas: boolean;

    let version: {
        versionStr: string;
        major: number;
        minor: number;
        revision: number;
    };

    function addClass(element: Element | string, className: string): void;

    function addEvent(
        element: Element | string,
        eventName: string,
        handler: (event: Event) => void,
        useCapture?: boolean | { capture?: boolean; passive?: boolean; once?: boolean },
    ): void;

    function cancelEvent(event?: OSDEvent<any>): void;

    function capitalizeFirstLetter(value: string): string;

    function createCallback(object: object, method: (...args: any[]) => void, ...args: any[]): (...args: any[]) => void;

    function delegate(object: object, method: (...args: any[]) => void): (object: any, ...args: any[]) => void; // REVIEW: unsure of return type

    function eventIsCanceled(event: OSDEvent<any>): boolean;

    function extend(): any;

    function getCssPropertyWithVendorPrefix(property: string): string;

    function getElement(element: string | Element): Element;

    function getElementOffset(element: Element | string): Point;

    function getElementPosition(element: Element | string): Point;

    function getElementSize(element: Element | string): Point;

    function getElementStyle(element: Element | string): CSSStyleDeclaration;

    function getViewer(element: Element): Viewer;

    function getMousePosition(event?: OSDEvent<any>): Point;

    function getPageScroll(): Point;

    function getString(property: string): string;

    function getUrlParameter(key: string): string;

    function getWindowSize(): Point;

    function imageFormatSupported(extension?: string): boolean;

    function indexOf(array: any[], searchElement: object, fromIndex?: number): number;

    // (missing jquery functions)

    function makeAjaxRequest(options: {
        url: string;
        success: (obj: object) => void;
        error: (obj: object) => void;
        headers: object;
        responseType: string;
        withCredentials?: boolean | undefined;
    }): XMLHttpRequest;

    function makeCenteredNode(element: Element | string): Element;

    function makeNeutralElement(tagName: string): Element;

    function makeTransparentImage(src: string): Element;

    function normalizeEventListenerOptions(
        options: boolean | { capture?: boolean; passive?: boolean; once?: boolean },
    ): string;

    function now(): number;

    function parseJSON(string: string): object;

    function parseXml(string: string): Document;

    function pointInElement(element: Element | string, point: Point): boolean;

    function positiveModulo(number: number, modulo: number): number;

    function removeClass(element: Element | string, className: string): void;

    function removeEvent(
        element: Element | string,
        eventName: string,
        handler: EventHandler<any>,
        useCapture?: boolean | { capture?: boolean },
    ): void;

    function setElementOpacity(element: Element | string, opacity: number, usesAlpha?: boolean): void;

    function setElementPointerEvents(element: Element | string, value: string): void;

    function setElementPointerEventsNone(element: Element | string): void;

    function setElementTouchActionNone(element: Element | string): void;

    function setImageFormatsSupported(formats: {
        bmp?: boolean;
        jpeg?: boolean;
        jpg?: boolean;
        png?: boolean;
        tif?: boolean;
        wdp?: boolean;
    }): void;

    function setPageScroll(point: Point): void;

    function setString(property: string, value: string): void;

    function stopEvent(event?: OSDEvent<any>): void;

    interface GestureSettings {
        scrollToZoom?: boolean | undefined;
        clickToZoom?: boolean | undefined;
        dblClickToZoom?: boolean | undefined;
        dragToPan?: boolean | undefined;
        pinchToZoom?: boolean | undefined;
        flickEnabled?: boolean | undefined;
        flickMinSpeed?: number | undefined;
        flickMomentum?: number | undefined;
    }

    interface NavImagesValues {
        REST: string;
        GROUP: string;
        HOVER: string;
        DOWN: string;
    }
    interface NavImages {
        zoomIn: NavImagesValues;
        zoomOut: NavImagesValues;
        home: NavImagesValues;
        fullpage: NavImagesValues;
        rotateleft: NavImagesValues;
        rotateright: NavImagesValues;
        flip: NavImagesValues;
        previous: NavImagesValues;
        next: NavImagesValues;
    }

    interface Options {
        id?: string | undefined;
        element?: HTMLElement | undefined;
        tileSources?:
            | string
            | TileSourceOptions
            | {
                type: string;
                levels?: Array<{
                    url: string;
                    height: number;
                    width: number;
                }>;
            }
            | {
                Image: {
                    xmlns?: string | undefined;
                    Url: string;
                    Format: string;
                    Overlap: string;
                    TileSize: string;
                    Size: {
                        Width: string;
                        Height: string;
                    };
                };
            }
            | Array<string | TileSource | { type: "openstreetmaps" }>;
        tabIndex?: number | undefined;
        overlays?: any[] | undefined;
        prefixUrl?: string | undefined;
        navImages?: NavImages | undefined;
        debugMode?: boolean | undefined;
        debugGridColor?: string[] | undefined;
        blendTime?: number | undefined;
        alwaysBlend?: boolean | undefined;
        autoHideControls?: boolean | undefined;
        immediateRender?: boolean | undefined;
        defaultZoomLevel?: number | undefined;
        opacity?: number | undefined;
        preload?: boolean | undefined;
        compositeOperation?:
            | "source-over"
            | "source-atop"
            | "source-in"
            | "source-out"
            | "destination-over"
            | "destination-atop"
            | "destination-in"
            | "destination-out"
            | "lighter"
            | "copy"
            | "xor"
            | undefined;
        placeholderFillStyle?: string | CanvasGradient | CanvasPattern | undefined;
        degrees?: number | undefined;
        flipped?: boolean | undefined;
        minZoomLevel?: number | undefined;
        maxZoomLevel?: number | undefined;
        homeFillsViewer?: boolean | undefined;
        panHorizontal?: boolean | undefined;
        panVertical?: boolean | undefined;
        constrainDuringPan?: boolean | undefined;
        wrapHorizontal?: boolean | undefined;
        wrapVertical?: boolean | undefined;
        minZoomImageRatio?: number | undefined;
        maxZoomPixelRatio?: number | undefined;
        smoothTileEdgesMinZoom?: number | undefined;
        iOSDevice?: boolean | undefined;
        autoResize?: boolean | undefined;
        preserveImageSizeOnResize?: boolean | undefined;
        minScrollDeltaTime?: number | undefined;
        pixelsPerWheelLine?: number | undefined;
        pixelsPerArrowPress?: number | undefined;
        visibilityRatio?: number | undefined;
        viewportMargins?: object | undefined;
        imageLoaderLimit?: number | undefined;
        clickTimeThreshold?: number | undefined;
        clickDistThreshold?: number | undefined;
        dblClickTimeThreshold?: number | undefined;
        dblClickDistThreshold?: number | undefined;
        springStiffness?: number | undefined;
        animationTime?: number | undefined;
        gestureSettingsMouse?: GestureSettings | undefined;
        gestureSettingsTouch?: GestureSettings | undefined;
        gestureSettingsPen?: GestureSettings | undefined;
        gestureSettingsUnknown?: GestureSettings | undefined;
        zoomPerClick?: number | undefined;
        zoomPerScroll?: number | undefined;
        zoomPerSecond?: number | undefined;
        showNavigator?: boolean | undefined;
        navigatorId?: string | undefined;
        navigatorPosition?: "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "ABSOLUTE" | undefined;
        navigatorSizeRatio?: number | undefined;
        navigatorMaintainSizeRatio?: boolean | undefined;
        navigatorTop?: number | string | undefined;
        navigatorLeft?: number | string | undefined;
        navigatorHeight?: number | string | undefined;
        navigatorWidth?: number | string | undefined;
        navigatorAutoResize?: boolean | undefined;
        navigatorAutoFade?: boolean | undefined;
        navigatorRotate?: boolean | undefined;
        navigatorBackground?: string | undefined;
        navigatorOpacity?: number | undefined;
        navigatorBorderColor?: string | undefined;
        navigatorDisplayRegionColor?: string | undefined;
        controlsFadeDelay?: number | undefined;
        controlsFadeLength?: number | undefined;
        maxImageCacheCount?: number | undefined;
        timeout?: number | undefined;
        useCanvas?: boolean | undefined;
        minPixelRatio?: number | undefined;
        mouseNavEnabled?: boolean | undefined;
        showNavigationControl?: boolean | undefined;
        navigationControlAnchor?: ControlAnchor | undefined;
        showZoomControl?: boolean | undefined;
        showHomeControl?: boolean | undefined;
        showFullPageControl?: boolean | undefined;
        showRotationControl?: boolean | undefined;
        showFlipControl?: boolean | undefined;
        showSequenceControl?: boolean | undefined;
        sequenceControlAnchor?: ControlAnchor | undefined;
        navPrevNextWrap?: boolean | undefined;
        zoomInButton?: string | undefined;
        zoomOutButton?: string | undefined;
        homeButton?: string | undefined;
        fullPageButton?: string | undefined;
        rotateLeftButton?: string | undefined;
        rotateRightButton?: string | undefined;
        previousButton?: string | undefined;
        nextButton?: string | undefined;
        sequenceMode?: boolean | undefined;
        /**
         * If sequenceMode is true, display this page initially.
         * @default 0
         */
        initialPage?: number | undefined;
        preserveViewport?: boolean | undefined;
        preserveOverlays?: boolean | undefined;
        showReferenceStrip?: boolean | undefined;
        referenceStripScroll?: string | undefined;
        referenceStripElement?: HTMLElement | undefined;
        referenceStripHeight?: number | undefined;
        referenceStripWidth?: number | undefined;
        referenceStripPosition?: string | undefined;
        referenceStripSizeRatio?: number | undefined;
        collectionMode?: boolean | undefined;
        collectionRows?: number | undefined;
        collectionColumns?: number | undefined;
        collectionLayout?: "horizontal" | "vertical" | undefined;
        collectionTileSize?: number | undefined;
        collectionTileMargin?: number | undefined;
        crossOriginPolicy?: "Anonymous" | "use-credentials" | false | undefined;
        ajaxWithCredentials?: boolean | undefined;
        loadTilesWithAjax?: boolean | undefined;
        ajaxHeaders?: object | undefined;
        imageSmoothingEnabled?: boolean | undefined;
        rotationIncrement?: number | undefined;
    }

    interface TileSourceOptions {
        url?: string | undefined;
        referenceStripThumbnailUrl?: string | undefined;
        success?: ((event: Event) => void) | undefined;
        ajaxWithCredentials?: boolean | undefined;
        ajaxHeaders?: object | undefined;
        width?: number | undefined;
        height?: number | undefined;
        tileSize?: number | undefined;
        tileWidth?: number | undefined;
        tileHeight?: number | undefined;
        tileOverlap?: number | undefined;
        minLevel?: number | undefined;
        maxLevel?: number | undefined;
        getTileUrl?: ((l: number, x: number, y: number) => string) | undefined;
    }

    class Button extends EventSource {
        currentState: ButtonState;
        element: Element;
        fadeDelay: number;
        fadeLength: number;
        tracker: MouseTracker;

        constructor(options: {
            userData?: string | undefined;
            element?: Element | undefined;
            tooltip?: string | undefined;
            srcRest?: string | undefined;
            srcGroup?: string | undefined;
            srcHover?: string | undefined;
            srcDown?: string | undefined;
            fadeDelay?: number | undefined;
            fadeLength?: number | undefined;
            onPress?: EventHandler<ButtonEvent> | undefined;
            onRelease?: EventHandler<ButtonEvent> | undefined;
            onClick?: EventHandler<ButtonEvent> | undefined;
            onEnter?: EventHandler<ButtonEvent> | undefined;
            onExit?: EventHandler<ButtonEvent> | undefined;
            onFocus?: EventHandler<ButtonEvent> | undefined;
            onBlur?: EventHandler<ButtonEvent> | undefined;
        });

        addHandler(eventName: ButtonEventName, handler: EventHandler<ButtonEvent>, userData?: object): void;
        addOnceHandler(
            eventName: ButtonEventName,
            handler: EventHandler<ButtonEvent>,
            userData?: object,
            times?: number,
        ): void;
        disable(): void;
        enable(): void;
        getHandler(eventName: ButtonEventName): (source: ButtonEventName, ...args: any[]) => void;
        raiseEvent(eventName: ButtonEventName, eventArgs: object): void;
        removeAllHandlers(eventName: ButtonEventName): void;
        removeHandler(eventName: ButtonEventName, handler: EventHandler<ButtonEvent>): void;
        notifyGroupEnter(): void;
        notifyGroupExit(): void;
        destroy(): void;
    }

    class ButtonGroup {
        buttons: Button[];
        element: Element;
        tracker: MouseTracker;

        constructor(options: { buttons: Button[]; element?: Element | undefined });

        destroy(): void;
    }

    interface TControlOptions {
        anchor?: ControlAnchor | undefined;
        attachToViewer?: boolean | undefined;
        autoFade?: boolean | undefined;
    }

    class Control {
        anchor: ControlAnchor;
        autoFade: boolean;
        container: Element;
        element: Element;
        wrapper: Element;

        constructor(element: Element, options: TControlOptions, container: Element);

        destroy(): void;
        isVisible(): boolean;
        setOpacity(opacity: number): void;
        setVisible(visible: boolean): void;
    }

    class ControlDock {
        constructor(options: object);

        addControl(element: string | Element, controlOptions: TControlOptions): void;
        areControlsEnabled(): boolean;
        clearControls(): ControlDock;
        removeControl(element: Control): ControlDock;
        setControlsEnabled(enabled: boolean): ControlDock;
    }

    class DisplayRect extends Rect {
        maxLevel: number;
        minLevel: number;

        constructor(x: number, y: number, width: number, height: number, minLevel: number, maxLevel: number);
    }

    class Drawer {
        canvas: HTMLCanvasElement | HTMLElement;
        container: Element;
        context: CanvasRenderingContext2D | null;
        // element : Element; // Deprecated

        constructor(options: {
            viewer: Viewer;
            viewport: Viewport;
            element: Element;
            debugGridColor?: string | undefined;
        });

        blendSketch(options: {
            opacity: number;
            scale?: number | undefined;
            translate?: Point | undefined;
            compositeOperation?: string | undefined;
            bounds?: Rect | undefined;
        }): void;
        canRotate(): boolean;
        clear(): void;
        destroy(): void;
        drawTile(
            tile: Tile,
            drawingHandler: (context: CanvasRenderingContext2D, tile: any, rendered: any) => void, // TODO: determine handler parameter types
            useSketch: boolean,
            scale?: number,
            translate?: Point,
        ): void;
        getCanvasSize(sketch: boolean): Point;
        getOpacity(): number;
        setOpacity(opacity: number): Drawer;
        viewportToDrawerRectangle(rectangle: Rect): Rect;
        setImageSmoothingEnabled(imageSmoothingEnabled?: boolean): void;
        viewportCoordToDrawerCoord(point: Point): Point;
        clipWithPolygons(polygons: Point[][], useSketch?: boolean): void;
    }

    class DziTileSource extends TileSource {
        constructor(
            width: number,
            height: number,
            tileSize: number,
            tileOverlap: number,
            tilesUrl: number,
            fileFormat: number,
            displayRects: number,
            minLevel: number,
            maxLevel: number,
        );
    }

    class IIIFTileSource extends TileSource {
        constructor(options: TileSourceOptions & { tileFormat?: string | undefined });
    }

    class ImageLoader {
        constructor(options: { jobLimit?: number | undefined; timeout?: number | undefined });

        addJob(options: {
            src?: string | undefined;
            loadWithAjax?: string | undefined;
            ajaxHeaders?: string | undefined;
            crossOriginPolicy?: string | boolean | undefined;
            ajaxWithCredentials?: boolean | undefined;
            callback?: (() => void) | undefined;
            abort?: (() => void) | undefined;
        }): void;
        clear(): void;
    }

    class ImageTileSource extends TileSource {
        constructor(options: {
            url: string;
            buildPyramid?: boolean | undefined;
            crossOriginPolicy?: string | boolean | undefined;
            ajaxWithCredentials?: string | boolean | undefined;
            useCanvas?: boolean | undefined;
        });
        destroy(): void;
    }

    class LegacyTileSource extends TileSource {
        constructor(
            levels?: Array<{
                url: string;
                width: number;
                height: number;
            }>,
        );
    }

    interface MouseTrackerOptions {
        element: Element | string;
        startDisabled?: boolean | undefined;
        clickTimeThreshold?: number | undefined;
        clickDistThreshold?: number | undefined;
        dblClickTimeThreshold?: number | undefined;
        dblClickDistThreshold?: number | undefined;
        stopDelay?: number | undefined;
        preProcessEventHandler?: PreprocessEventHandler | undefined;
        contextMenuHandler?: EventHandler<ContextMenuMouseTrackerEvent> | undefined;
        enterHandler?: EventHandler<MouseTrackerEvent> | undefined;
        /**
         * @deprecated use leaveHandler instead
         */
        exitHandler?: EventHandler<MouseTrackerEvent> | undefined;
        leaveHandler?: EventHandler<MouseTrackerEvent> | undefined;
        overHandler?: EventHandler<MouseTrackerEvent> | undefined;
        outHandler?: EventHandler<MouseTrackerEvent> | undefined;
        pressHandler?: EventHandler<PressMouseTrackerEvent> | undefined;
        nonPrimaryPressHandler?: EventHandler<MouseTrackerEvent> | undefined;
        releaseHandler?: EventHandler<MouseTrackerEvent> | undefined;
        nonPrimaryReleaseHandler?: EventHandler<MouseTrackerEvent> | undefined;
        moveHandler?: EventHandler<MouseTrackerEvent> | undefined;
        scrollHandler?: EventHandler<MouseTrackerEvent> | undefined;
        clickHandler?: EventHandler<MouseTrackerEvent> | undefined;
        dblClickHandler?: EventHandler<MouseTrackerEvent> | undefined;
        dragHandler?: EventHandler<MouseTrackerEvent> | undefined;
        dragEndHandler?: EventHandler<MouseTrackerEvent> | undefined;
        pinchHandler?: EventHandler<MouseTrackerEvent> | undefined;
        keyDownHandler?: EventHandler<MouseTrackerEvent> | undefined;
        keyUpHandler?: EventHandler<MouseTrackerEvent> | undefined;
        keyHandler?: EventHandler<MouseTrackerEvent> | undefined;
        focusHandler?: EventHandler<MouseTrackerEvent> | undefined;
        blurHandler?: EventHandler<MouseTrackerEvent> | undefined;
        userData?: object | undefined;
    }

    class MouseTracker {
        clickTimeThreshold: number;
        clickDistThreshold: number;
        dblClickTimeThreshold: number;
        dblClickDistThreshold: number;
        element: Element;

        constructor(options: MouseTrackerOptions);

        blurHandler: EventHandler<MouseTrackerEvent>;
        clickHandler: EventHandler<MouseTrackerEvent>;
        contextMenuHandler: EventHandler<ContextMenuMouseTrackerEvent>;
        dblClickHandler: EventHandler<MouseTrackerEvent>;
        destroy(): void;
        dragEndHandler: EventHandler<MouseTrackerEvent>;
        dragHandler: EventHandler<MouseTrackerEvent>;
        enterHandler: EventHandler<MouseTrackerEvent>;
        /**
         * @deprecated use leaveHandler instead
         */
        exitHandler: EventHandler<MouseTrackerEvent>;
        leaveHandler: EventHandler<MouseTrackerEvent>;
        focusHandler: EventHandler<MouseTrackerEvent>;
        getActivePointerCount(): number;
        getActivePointersListByType(type: string): GesturePointList;
        keyDownHandler: EventHandler<KeyMouseTrackerEvent>;
        keyHandler: EventHandler<KeyMouseTrackerEvent>;
        keyUpHandler: EventHandler<KeyMouseTrackerEvent>;
        moveHandler: EventHandler<MouseTrackerEvent>;
        nonPrimaryPressHandler: EventHandler<MouseTrackerEvent>;
        nonPrimaryReleaseHandler: EventHandler<MouseTrackerEvent>;
        overHandler: EventHandler<MouseTrackerEvent>;
        outHandler: EventHandler<MouseTrackerEvent>;
        pinchHandler: EventHandler<MouseTrackerEvent>;
        pressHandler: EventHandler<PressMouseTrackerEvent>;
        preProcessEventHandler: PreprocessEventHandler;
        releaseHandler: EventHandler<MouseTrackerEvent>;
        scrollHandler: EventHandler<MouseTrackerEvent>;
        setTracking(track: boolean): MouseTracker;
        stopHandler: EventHandler<MouseTrackerEvent>;
    }

    interface EventProcessInfo {
        eventSource: MouseTracker;
        originalEvent: Event;
        originalTarget: Element;
        eventPhase: EventPhase;
        eventType:
            | "keydown"
            | "keyup"
            | "keypress"
            | "focus"
            | "blur"
            | "contextmenu"
            | "gotpointercapture"
            | "lostpointercapture"
            | "pointerenter"
            | "pointerleave"
            | "pointerover"
            | "pointerout"
            | "pointerdown"
            | "pointerup"
            | "pointermove"
            | "pointercancel"
            | "wheel"
            | "click"
            | "dblclick";
        pointerType: string;
        isEmulated: boolean;
        isStoppable: boolean;
        isCancelable: boolean;
        defaultPrevented: boolean;
        preventDefault: boolean;
        preventGesture: boolean;
        stopPropagation: boolean;
        shouldCapture: boolean;
        shouldReleaseCapture: boolean;
        userData: unknown;
    }

    interface GesturePoint {
        id: number;
        type: string;
        captured: boolean;
        isPrimary: boolean;
        insideElementPressed: boolean;
        insideElement: boolean;
        speed: number;
        direction: number;
        contactPos: Point;
        contactTime: number;
        lastPos: Point;
        lastTime: number;
        currentPos: Point;
        currentTime: number;
    }

    class GesturePointList {
        buttons: Button[];
        captureCount: number;
        clicks: number;
        contacts: number;
        type: string;

        constructor(type: string);

        add(gesturePoint: GesturePoint): number;
        addContact(): void;
        asArray(): GesturePoint[];
        getById(id: number): GesturePoint | null;
        getByIndex(index: number): GesturePoint | null;
        getLength(): number;
        getPrimary(): GesturePoint | null;
        removeById(id: number): number;
        removeContact(): void;
    }

    class Navigator extends Viewer {
        setFlip(state: boolean): void;
        update(viewport: Viewport): void;
        updateSize(): void;
        setWidth(width: number | string): void;
        setHeight(width: number | string): void;
    }

    class OsmTileSource extends TileSource {
        constructor(width: number, height: number, tileSize: number, tileOverlap: number, tilesUrl: string);
    }

    type OnDrawCallback = (position: Point, size: Point, element: HTMLElement) => void;

    interface OverlayOptions {
        element: HTMLElement;
        location: Point | Rect;
        placement?: Placement | undefined;
        onDraw?: OnDrawCallback | undefined;
        checkResize?: boolean | undefined;
        width?: number | undefined;
        height?: number | undefined;
        rotationMode?: OverlayRotationMode | undefined;
    }

    class Overlay {
        constructor(options: OverlayOptions);
        adjust(position: Point, size: Point): void;
        destroy(): void;
        drawHTML(container: HTMLElement): void;
        getBounds(viewport: Viewport): Rect;
        update(location: Point | Rect, placement: Placement): void;
    }

    class Point {
        x: number;
        y: number;
        constructor(x?: number, y?: number);
        apply(func: (v: number) => number): Point;
        clone(): Point;
        distanceTo(point: Point): number;
        divide(factor: number): Point;
        equals(point: Point): boolean;
        minus(point: Point): Point;
        negate(): Point;
        plus(point: Point): Point;
        rotate(degrees: number, pivot?: Point): Point;
        squaredDistanceTo(point: Point): number;
        times(factor: number): Rect;
        toString(): string;
    }

    class Rect {
        x: number;
        y: number;
        width: number;
        height: number;
        degrees: number;
        constructor(x?: number, y?: number, width?: number, height?: number, degrees?: number);
        clone(): Rect;
        containsPoint(point: Point, epsilon?: number): boolean;
        equals(rectangle: Rect): boolean;
        getAspectRatio(): number;
        getBottomLeft(): Point;
        getBottomRight(): Point;
        getBoundingBox(): Rect;
        getCenter(): Point;
        getIntegerBoundingBox(): Rect;
        getSize(): Point;
        getTopLeft(): Point;
        getTopRight(): Point;
        intersection(rect: Rect): Rect;
        rotate(degrees: number, pivot?: Rect): Rect;
        times(factor: number): Rect;
        toString(): string;
        translate(delta: Point): Rect;
        union(rect: Rect): Rect;
    }

    class ReferenceStrip {
        constructor(options: object);
        setFocus(): void;
        update(): void;
    }

    class Spring {
        animationTime: number;
        current: {
            value: number;
            time: number;
        };
        springStiffness: number;
        start: {
            value: number;
            time: number;
        };
        constructor(options: {
            springStiffness: number;
            animationTime: number;
            initial?: number | undefined;
            exponential?: boolean | undefined;
        });
        isAtTargetValue(): boolean;
        resetTo(target: number): void;
        shiftBy(delta: number): void;
        springTo(target: number): void;
        update(): void;
    }

    class Tile {
        ajaxHeaders: object;
        beingDrawn: boolean;
        blendStart: number;
        bounds: Rect;
        cacheKey: string;
        context2D: CanvasRenderingContext2D;
        element: Element;
        exists: boolean;
        flipped: boolean;
        image: object;
        imgElement: HTMLImageElement;
        isBottomMost: boolean;
        isRightMost: boolean;
        lastTouchTime: number;
        level: number;
        loaded: boolean;
        loading: boolean;
        loadWithAjax: boolean;
        opacity: number;
        position: Point;
        size: Point;
        sourceBounds: Rect;
        style: string;
        url: string;
        visibility: number;
        x: number;
        y: number;

        constructor(
            level: number,
            x: number,
            y: number,
            bounds: Rect,
            exists: boolean,
            url: string,
            context2D: CanvasRenderingContext2D,
            loadWithAjax: boolean,
            ajaxHeaders: object,
            sourceBounds: Rect,
        );
        drawCanvas(
            context: CanvasRenderingContext2D,
            drawingHandler: (context: CanvasRenderingContext2D, tile: any, rendered: any) => void,
            scale?: number,
            translate?: Point,
        ): void;
        drawHTML(container: Element): void;
        getScaleForEdgeSmoothing(): number;
        getTranslationForEdgeSmoothing(scale?: number): Point;
        toString(): string;
        unload(): void;
    }

    class TileCache {
        constructor(options: { maxImageCacheCount?: number | undefined });
        cacheTile(options: {
            tile: Tile;
            image: HTMLImageElement; // TODO: check type
            tiledImage: TiledImage;
            cutoff?: number | undefined;
        }): void;
        clearTilesFor(tiledImage: TiledImage): void;
        numTilesLoaded(): number;
    }

    class TiledImage {
        source: TileSource;
        constructor(options: {
            source: TileSource;
            viewer: Viewer;
            tileCache: TileCache;
            drawer: Drawer;
            imageLoader: ImageLoader;
            x?: number | undefined;
            y?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            fitBounds?: Rect | undefined;
            fitBoundsPlacement?: Placement | undefined;
            clip?: Rect | undefined;
            springStiffness?: number | undefined;
            animationTime?: boolean | undefined;
            minZoomImageRatio?: number | undefined;
            wrapHorizontal?: boolean | undefined;
            wrapVertical?: boolean | undefined;
            immediateRender?: boolean | undefined;
            blendTime?: number | undefined;
            alwaysBlend?: boolean | undefined;
            minPixelRatio?: number | undefined;
            smoothTileEdgesMinZoom?: number | undefined;
            iOSDevice?: boolean | undefined;
            opacity?: number | undefined;
            preload?: boolean | undefined;
            compositeOperation?: string | undefined;
            debugMode?: boolean | undefined;
            placeholderFillStyle?: string | CanvasGradient | CanvasPattern | undefined;
            crossOriginPolicy?: string | boolean | undefined;
            ajaxWithCredentials?: boolean | undefined;
            loadTilesWithAjax?: boolean | undefined;
            ajaxHeaders?: object | undefined;
        });

        addHandler<T extends keyof TiledImageEventMap>(
            eventName: T,
            handler: EventHandler<TiledImageEventMap[T]>,
            userData?: object,
        ): void;
        addOnceHandler<T extends keyof TiledImageEventMap>(
            eventName: T,
            handler: EventHandler<TiledImageEventMap[T]>,
            userData?: object,
        ): void;
        destroy(): void;
        draw(): void;
        fitBounds(bounds: Rect, anchor?: Placement, immediately?: boolean): void;
        getBounds(current?: boolean): Rect;
        getBoundsNoRotate(current?: boolean): Rect;
        getClip(): Rect | null;
        getClippedBounds(current?: boolean): Rect;
        getCompositeOperation(): string;
        getContentSize(): Point;
        getFullyLoaded(): boolean;
        getFlip(): boolean;
        getHandler(eventName: string): (source: Event, ...args: any[]) => void;
        getOpacity(): number;
        getPreload(): boolean;
        getRotation(current?: boolean): number;
        getSizeInWindowCoordinates(): Point;
        getTileBounds(level: number, x: number, y: number): Rect;
        imageToViewerElementCoordinates(pixel: Point): Point;
        imageToViewportCoordinates(position: Point, current?: boolean): Point;
        imageToViewportCoordinates(imageX: number, imageY: number, current?: boolean): Point;
        imageToViewportRectangle(
            imageX: number,
            imageY?: number,
            pixelWidth?: number,
            pixelHeight?: number,
            current?: boolean,
        ): Rect;
        imageToViewportRectangle(position: Rect, pixelWidth?: number, pixelHeight?: number, current?: boolean): Rect;

        imageToViewportZoom(imageZoom: number): number;
        imageToWindowCoordinates(pixel: Point): Point;
        needsDraw(): boolean;
        raiseEvent(eventName: string, eventArgs: object): void;
        removeAllHandlers(eventName: keyof TiledImageEventMap): void;
        removeHandler<T extends keyof TiledImageEventMap>(
            eventName: T,
            handler: EventHandler<TiledImageEventMap[T]>,
        ): void;
        reset(): void;
        resetCroppingPolygons(): void;
        setClip(newClip: Rect | null): void;
        setCompositeOperation(compositeOperation: string): void;
        setCroppingPolygons(polygons: Point[][]): void;
        setFlip(flip: boolean): void;
        setHeight(height: number, immediately?: boolean): void;
        setOpacity(opacity: number): void;
        setPosition(position: Point, immediately?: boolean): void;
        setPreload(preload: boolean): void;
        setRotation(degrees: number, immediately?: boolean): void;
        setWidth(width: number, immediately?: boolean): void;
        update(): boolean;
        viewerElementToImageCoordinates(pixel: Point): Point;
        viewportToImageCoordinates(position: Point, current?: boolean): Point;
        viewportToImageCoordinates(viewerX: number, viewerY: number, current?: boolean): Point;
        viewportToImageRectangle(position: Rect): Rect;
        viewportToImageRectangle(
            viewportX: number,
            viewportY: number,
            pixelWidth?: number,
            pixelHeight?: number,
            current?: boolean,
        ): Rect;
        viewportToImageZoom(viewportZoom: number): number;
        windowToImageCoordinates(pixel: Point): Point;
    }

    class TileSource extends EventSource {
        aspectRatio: number;
        dimensions: Point;
        maxLevel: number;
        minLevel: number;
        ready: boolean;
        tileOverlap: number;
        constructor(options: TileSourceOptions);
        addHandler<T extends keyof TileSourceEventMap>(
            eventName: T,
            handler: EventHandler<TileSourceEventMap[T]>,
            userData?: object,
        ): void;
        addOnceHandler<T extends keyof TileSourceEventMap>(
            eventName: T,
            handler: EventHandler<TileSourceEventMap[T]>,
            userData?: object,
            times?: number,
        ): void;
        configure(data: string | object | any[] | Document): object;
        getClosestLevel(): number;
        getHandler(eventName: string): (event: Event) => void;
        getImageInfo(url: string): void;
        getLevelScale(level: number): number;
        getNumTiles(level: number): number;
        getPixelRatio(level: number): number;
        getTileAjaxHeaders(level: number, x: number, y: number): object;
        getTileAtPoint(level: number, point: Point): Tile;
        getTileBounds(level: number, x: number, y: number, isSource?: boolean): Rect;
        getTileHeight(level: number): number;
        getTileUrl(level: number, x: number, y: number): string;
        getTileWidth(level: number): number;
        raiseEvent(eventName: string, eventArgs: object): void;
        removeAllHandlers(eventName: keyof TileSourceEventMap): void;
        removeHandler<T extends keyof TileSourceEventMap>(
            eventName: T,
            handler: EventHandler<TileSourceEventMap[T]>,
        ): void;
        setMaxLevel(level: number): void;
        supports(data: string | object | any[] | Document, url: string): boolean;
        tileExists(level: number, x: number, y: number): boolean;
    }

    class TmsTileSource extends TileSource {
        constructor(width: number, height: number, tileSize: number, tileOverlap: number, tilesUrl: string);
    }

    interface ImageOptions {
        index?: number | undefined;
        replace?: boolean | undefined;
        x?: number | undefined;
        y?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        fitBounds?: Rect | undefined;
        fitBoundsPlacement?: Placement | undefined;
        clip?: Rect | undefined;
        opacity?: number | undefined;
        preload?: boolean | undefined;
        degrees?: number | undefined;
        flipped?: boolean | undefined;
        compositeOperation?: string | undefined;
        crossOriginPolicy?: string | undefined;
        ajaxWithCredentials?: boolean | undefined;
        loadTilesWithAjax?: boolean | undefined;
        ajaxHeaders?: object | undefined;
        success?: ((event: Event) => void) | undefined;
        error?: ((error: Error) => void) | undefined;
        collectionImmediately?: boolean | undefined;
        placeholderFillStyle?: string | CanvasGradient | CanvasPattern | undefined;
    }

    interface TiledImageOptions extends ImageOptions {
        tileSource: string | object;
    }

    interface SimpleImageOptions extends ImageOptions {
        url: string;
    }

    class Viewer extends ControlDock {
        canvas: HTMLElement;
        container: HTMLElement;
        drawer: Drawer;
        element: HTMLElement;
        initialPage: number;
        navigator: Navigator;
        viewport: Viewport;
        world: World;
        referenceStrip: ReferenceStrip;

        constructor(options: Options);
        _cancelPendingImages(): void;
        addHandler<T extends keyof ViewerEventMap>(
            eventName: T,
            callback: EventHandler<ViewerEventMap[T]>,
            userData?: object,
        ): void;
        addOnceHandler<T extends keyof ViewerEventMap>(
            eventName: T,
            callback: EventHandler<ViewerEventMap[T]>,
            userData?: object,
            times?: number,
        ): void;
        addOverlay(
            element: HTMLElement | string | OverlayOptions,
            location?: Point | Rect,
            placement?: Placement,
            onDraw?: (element: HTMLElement, location: Location, placement: Placement) => void,
        ): Viewer;
        addReferenceStrip(): void;
        addSimpleImage(options: SimpleImageOptions): void;
        addTiledImage(options: TiledImageOptions): void;
        bindSequenceControls(): Viewer;
        bindStandardControls(): Viewer;
        clearOverlays(): Viewer;
        close(): Viewer;
        currentPage(): number;
        destroy(): void;
        forceRedraw(): Viewer;
        gestureSettingsByDeviceType(type: string): GestureSettings;
        getHandler(eventName: string): (event: Event) => void;
        getOverlayById(element: Element | string): Overlay;
        goToPage(page: number): Viewer;
        isFullPage(): boolean;
        isMouseNavEnabled(): boolean;
        isOpen(): boolean;
        isVisible(): boolean;
        open(tileSources: string | object | TileSource[], initialPage?: number): Viewer;
        raiseEvent(eventName: string, eventArgs?: object): void;
        removeAllHandlers(eventName: keyof ViewerEventMap): void;
        removeHandler<T extends keyof ViewerEventMap>(eventName: T, handler: EventHandler<ViewerEventMap[T]>): void;
        removeOverlay(overlay: Element | string): Viewer;
        removeReferenceStrip(): void;
        setControlsEnabled(enabled: boolean): Viewer;
        setDebugMode(debug: boolean): Viewer;
        setFullPage(fullScreen: boolean): Viewer;
        setFullScreen(fullScreen: boolean): Viewer;
        setMouseNavEnabled(enabled: boolean): Viewer;
        setVisible(visible: boolean): Viewer;
        updateOverlay(element: Element | string, location: Point | Rect, placement?: Placement): Viewer;
    }

    class Viewport {
        constructor(options: {
            margins: object;
            springStiffness?: number | undefined;
            animationTime?: number | undefined;
            minZoomImageRatio?: number | undefined;
            maxZoomPixelRatio?: number | undefined;
            visibilityRatio?: number | undefined;
            wrapHorizontal?: boolean | undefined;
            wrapVertical?: boolean | undefined;
            defaultZoomLevel?: number | undefined;
            minZoomLevel?: number | undefined;
            maxZoomLevel?: number | undefined;
            degrees?: number | undefined;
            homeFillsViewer?: boolean | undefined;
        });

        applyConstraints(immediately?: boolean): Viewport;
        deltaPixelsFromPoints(deltaPoints: Point, current?: boolean): Point;
        deltaPixelsFromPointsNoRotate(deltaPoints: Point, current?: boolean): Point;
        deltaPointsFromPixels(deltaPoints: Point, current?: boolean): Point;
        deltaPointsFromPixelsNoRotate(deltaPoints: Point, current?: boolean): Point;
        ensureVisible(immediately?: boolean): Viewport;
        fitBounds(bounds: Rect, immediately?: boolean): Viewport;
        fitBoundsWithConstraints(bounds: Rect, immediately?: boolean): Viewport;
        fitHorizontally(immediately?: boolean): Viewport;
        fitVertically(immediately?: boolean): Viewport;
        getAspectRatio(): number;
        getBounds(current?: boolean): Rect;
        getBoundsNoRotate(current?: boolean): Rect;
        getBoundsNoRotateWithMargins(current?: boolean): Rect;
        getBoundsWithMargins(current?: boolean): Rect;
        getCenter(current?: boolean): Point;
        getConstrainedBounds(current?: boolean): Viewport;
        getContainerSize(): Point;
        getFlip(): boolean;
        getHomeBounds(): Rect;
        getHomeBoundsNoRotate(): Rect;
        getHomeZoom(): number;
        getMargins(): object;
        getMaxZoom(): number;
        getMinZoom(): number;
        getRotation(): number;
        getZoom(current?: boolean): number;
        goHome(immediately?: boolean): void;
        imageToViewerElementCoordinates(pixel: Point): Point;
        imageToViewportCoordinates(position: Point): Point;
        imageToViewportCoordinates(imageX: number, imageY: number): Point;
        imageToViewportCoordinates(imageX: number, imageY: number, pixelWidth: number, pixelHeight: number): Point;
        imageToViewportRectangle(
            imageX: number | Rect,
            imageY?: number,
            pixelWidth?: number,
            pixelHeight?: number,
        ): Rect;
        imageToViewportZoom(imageZoom: number): number;
        imageToWindowCoordinates(pixel: Point): Point;
        panBy(delta: Point, immediately?: boolean): Viewport;
        panTo(center: Point, immediately?: boolean): Viewport;
        pixelFromPoint(point: Point, current?: boolean): Point;
        pixelFromPointNoRotate(point: Point, current?: boolean): Point;
        pointFromPixel(point: Point, current?: boolean): Point;
        pointFromPixelNoRotate(point: Point, current?: boolean): Point;
        resetContentSize(contentSize: Point): Viewport;
        resize(): Viewport;
        setFlip(state: boolean): Viewport;
        setMargins(margins: object): void;
        setRotation(degrees: number): Viewport;
        toggleFlip(): Viewport;
        update(): boolean;
        viewerElementToImageCoordinates(pixel: Point): Point;
        viewerElementToViewportCoordinates(pixel: Point): Point;
        viewerElementToViewportRectangle(rectangle: Rect): Rect;
        viewportToImageCoordinates(position: Point): Point;
        viewportToImageCoordinates(viewerX: number, viewerY: number): Point;
        viewportToImageRectangle(rectangle: Rect): Rect;
        viewportToImageRectangle(viewerX: number, viewerY: number, pointWidth: number, pointHeight: number): Rect;
        viewportToImageZoom(viewportZoom: number): number;
        viewportToViewerElementCoordinates(point: Point): Point;
        viewportToViewerElementRectangle(rectangle: Rect): Rect;
        viewportToWindowCoordinates(point: Point): Point;
        windowToImageCoordinates(pixel: Point): Point;
        windowToViewportCoordinates(pixel: Point): Point;
        zoomBy(factor: number, refPoint?: Point, immediately?: boolean): Viewport;
        zoomTo(factor: number, refPoint?: Point, immediately?: boolean): Viewport;
    }

    class World extends EventSource {
        constructor(options: object);

        addHandler<T extends keyof WorldEventMap>(
            eventName: T,
            callback: EventHandler<WorldEventMap[T]>,
            userData?: object,
        ): void;
        addItem(item: TiledImage, options?: { index?: number | undefined }): void;
        addOnceHandler<T extends keyof WorldEventMap>(
            eventName: T,
            callback: EventHandler<WorldEventMap[T]>,
            userData?: object,
            times?: number,
        ): void;
        arrange(options: {
            immediately?: boolean | undefined;
            layout?: "horizontal" | "vertical" | undefined;
            rows?: number | undefined;
            columns?: number | undefined;
            tileSize?: number | undefined;
            tileMargin?: number | undefined;
        }): void;
        draw(): void;
        getContentFactor(): number;
        getHandler(eventName: string): (event: Event) => void;
        getHomeBounds(): Rect;
        getIndexOfItem(item: TiledImage): number;
        getItemAt(id: number): TiledImage;
        getItemCount(): number;
        needsDraw(): boolean;
        raiseEvent(eventName: string, eventArgs?: object): void;
        removeAll(): void;
        removeAllHandlers(eventName: keyof WorldEventMap): void;
        removeHandler<T extends keyof WorldEventMap>(eventName: T, callback: EventHandler<WorldEventMap[T]>): void;
        removeItem(item: TiledImage): void;
        resetItems(): void;
        setAutoRefigureSizes(value?: boolean): void;
        setItemIndex(item: TiledImage, index: number): void;
        update(): void;
    }

    class ZoomifyTileSource extends TileSource {
        constructor(width: number, height: number, tileSize: number, tilesUrl: string);
    }

    type EventHandler<T extends OSDEvent<unknown>> = (event: T) => void;

    type PreprocessEventHandler = (event: EventProcessInfo) => void;

    type ButtonEventName = "blur" | "click" | "enter" | "exit" | "focus" | "press" | "release";

    interface TiledImageEventMap {
        "bounds-change": TiledImageEvent;
        "clip-change": TiledImageEvent;
        "composite-operation-change": CompositeOperationChangeTiledImageEvent;
        "fully-loaded-change": FullyLoadedChangeTiledImageEvent;
        "opacity-change": OpacityChangeTiledImageEvent;
    }

    interface TileSourceEventMap {
        "open-failed": OpenFailedTileSourceEvent;
        "ready": ReadyTileSourceEvent;
    }

    interface ViewerEventMap {
        "add-item-failed": AddItemFailedEvent;
        "add-overlay": AddOverlayEvent;
        "animation": ViewerEvent;
        "animation-finish": ViewerEvent;
        "animation-start": ViewerEvent;
        "canvas-click": CanvasClickEvent;
        "canvas-contextmenu": CanvasContextMenuEvent;
        "canvas-double-click": CanvasDoubleClickEvent;
        "canvas-drag": CanvasDragEvent;
        "canvas-drag-end": CanvasDragEvent;
        "canvas-enter": CanvasEnterEvent;
        "canvas-exit": CanvasExitEvent;
        "canvas-key": CanvasKeyEvent;
        "canvas-nonprimary-press": CanvasNonPrimaryButtonEvent;
        "canvas-nonprimary-release": CanvasNonPrimaryButtonEvent;
        "canvas-pinch": CanvasPinchEvent;
        "canvas-press": CanvasPressEvent;
        "canvas-release": CanvasReleaseEvent;
        "canvas-scroll": CanvasScrollEvent;
        "clear-overlay": ViewerEvent;
        "close": ViewerEvent;
        "constrain": ConstrainEvent;
        "container-enter": ContainerEvent;
        "container-exit": ContainerEvent;
        "controls-enabled": ControlsEnabledEvent;
        "flip": FlipEvent;
        "full-page": FullPageEvent;
        "full-screen": FullScreenEvent;
        "home": HomeEvent;
        "mouse-enabled": MouseEnabledEvent;
        "navigator-click": NavigatorClickEvent;
        "navigator-drag": NavigatorDragEvent;
        "navigator-scroll": NavigatorScrollEvent;
        "open": OpenEvent;
        "open-failed": OpenFailedEvent;
        "page": PageEvent;
        "pan": PanEvent;
        "pre-full-page": PreFullPageEvent;
        "pre-full-screen": PreFullScreenEvent;
        "remove-overlay": RemoveOverlayEvent;
        "reset-size": ResetSizeEvent;
        "resize": ResizeEvent;
        "rotate": RotateEvent;
        "tile-drawing": TileDrawingEvent;
        "tile-drawn": TileEvent;
        "tile-load-failed": TileLoadFailedEvent;
        "tile-loaded": TileLoadedEvent;
        "tile-unloaded": TileEvent;
        "update-level": UpdateLevelEvent;
        "update-overlay": UpdateOverlayEvent;
        "update-tile": TileEvent;
        "update-viewport": ViewerEvent;
        "viewport-change": ViewerEvent;
        "visible": VisibleEvent;
        "zoom": ZoomEvent;
    }

    interface WorldEventMap {
        "add-item": AddItemWorldEvent;
        "item-index-change": ItemIndexChangeWorldEvent;
        "metrics-change": WorldEvent;
        "remove-item": RemoveItemWorldEvent;
    }

    interface OSDEvent<T> {
        eventSource: T;
        userData: unknown;
    }

    interface ButtonEvent extends OSDEvent<Button> {
        originalEvent: Event;
    }

    // -- TILED IMAGE EVENTS --
    interface TiledImageEvent extends OSDEvent<TiledImage> {}

    interface CompositeOperationChangeTiledImageEvent extends TiledImageEvent {
        compositeOperationChange: string;
    }

    interface FullyLoadedChangeTiledImageEvent extends TiledImageEvent {
        fullyLoaded: boolean;
    }

    interface OpacityChangeTiledImageEvent extends TiledImageEvent {
        opacity: boolean;
    }

    // -- TILE SOURCE EVENTS --
    interface TileSourceEvent extends OSDEvent<TileSource> {}

    interface OpenFailedTileSourceEvent extends TileSourceEvent {
        message: string;
        source: string;
    }

    interface ReadyTileSourceEvent extends TileSourceEvent {
        tileSource: object;
    }

    // -- VIEWER EVENTS --
    interface ViewerEvent extends OSDEvent<Viewer> {}

    interface AddItemFailedEvent extends ViewerEvent {
        message: string;
        source: string;
        options: object;
    }

    interface AddOverlayEvent extends ViewerEvent {
        element: Element;
        location: Point | Rect;
        placement: Placement;
    }

    interface CanvasEvent extends ViewerEvent {
        tracker: MouseTracker;
        position: Point;
        originalEvent: Event;
    }

    interface CanvasClickEvent extends CanvasEvent {
        quick: boolean;
        shift: boolean;
        originalTarget: Element;
        preventDefaultAction: boolean;
    }

    interface CanvasContextMenuEvent extends CanvasEvent {
        preventDefault: boolean;
    }

    interface CanvasDoubleClickEvent extends CanvasEvent {
        shift: boolean;
        preventDefaultAction: boolean;
    }

    interface CanvasDragEvent extends CanvasEvent {
        pointerType: PointerType;
        delta: Point;
        speed: number;
        direction: number;
        shift: boolean;
        preventDefaultAction: boolean;
    }

    interface CanvasEnterEvent extends CanvasEvent {
        pointerType: PointerType;
        buttons: number;
        pointers: number;
        insideElementPressed: boolean;
        /**
         * @deprecated Use `buttons` instead
         */
        buttonDownAny: boolean;
    }

    interface CanvasExitEvent extends CanvasEvent {
        pointerType: PointerType;
        buttons: number;
        pointers: number;
        insideElementPressed: boolean;
        /**
         * @deprecated Use `buttons` instead
         */
        buttonDownAny: boolean;
    }

    interface CanvasKeyEvent extends CanvasEvent {
        preventDefaultAction: boolean;
        preventVerticalPan: boolean;
        preventHorizontalPan: boolean;
    }

    interface CanvasNonPrimaryButtonEvent extends CanvasEvent {
        pointerType: PointerType;
        button: number;
        buttons: number;
    }

    interface CanvasPinchEvent extends CanvasEvent {
        pointerType: PointerType;
        gesturePoints: GesturePoint[];
        lastCenter: Point;
        center: Point;
        lastDistance: number;
        distance: number;
        shift: boolean;
        preventDefaultPanAction: boolean;
        preventDefaultZoomAction: boolean;
        preventDefaultRotateAction: boolean;
    }

    interface CanvasPressEvent extends CanvasEvent {
        pointerType: PointerType;
        insideElementPressed: boolean;
        insideElementReleased: boolean;
    }

    interface CanvasReleaseEvent extends CanvasEvent {
        pointerType: PointerType;
        insideElementPressed: boolean;
        insideElementReleased: boolean;
    }

    interface CanvasScrollEvent extends CanvasEvent {
        scroll: number;
        shift: boolean;
        preventDefaultAction: boolean;
        preventDefault: boolean;
    }

    interface ConstrainEvent extends ViewerEvent {
        immediately: boolean;
    }

    interface ContainerEvent extends ViewerEvent {
        tracker: MouseTracker;
        pointerType: PointerType;
        position: Point;
        buttons: number;
        pointers: number;
        insideElementPressed: boolean;
        /**
         * @deprecated Use `buttons` instead
         */
        buttonDownAny: boolean;
        originalEvent: Event;
    }

    interface ControlsEnabledEvent extends ViewerEvent {
        enabled: boolean;
    }

    interface FlipEvent extends ViewerEvent {
        flipped: number;
    }

    interface FullPageEvent extends ViewerEvent {
        fullPage: boolean;
    }

    interface FullScreenEvent extends ViewerEvent {
        fullScreen: boolean;
    }

    interface HomeEvent extends ViewerEvent {
        immediately: boolean;
    }

    interface MouseEnabledEvent extends ViewerEvent {
        enabled: boolean;
    }

    interface NavigatorEvent extends ViewerEvent {
        tracker: MouseTracker;
        position: Point;
        shift: boolean;
        originalEvent: Event;
    }

    interface NavigatorClickEvent extends NavigatorEvent {
        quick: boolean;
        preventDefaultAction: boolean;
    }

    interface NavigatorDragEvent extends NavigatorEvent {
        delta: Point;
        speed: number;
        direction: number;
        preventDefaultAction: boolean;
    }

    interface NavigatorScrollEvent extends NavigatorEvent {
        scroll: number;
        preventDefault: boolean;
    }

    interface OpenEvent extends ViewerEvent {
        source: TileSource;
    }

    interface OpenFailedEvent extends OpenEvent {
        message: string;
    }

    interface PageEvent extends ViewerEvent {
        page: number;
    }

    interface PanEvent extends ViewerEvent {
        center: Point;
        immediately: boolean;
    }

    interface PreFullPageEvent extends ViewerEvent {
        fullPage: boolean;
        preventDefaultAction: boolean;
    }

    interface PreFullScreenEvent extends ViewerEvent {
        fullScreen: boolean;
        preventDefaultAction: boolean;
    }

    interface RemoveOverlayEvent extends ViewerEvent {
        element: Element;
    }

    interface ResetSizeEvent extends ViewerEvent {
        contentSize: Point;
        contentBounds: Rect;
        homeBounds: Rect;
        contentFactor: number;
    }

    interface ResizeEvent extends ViewerEvent {
        newContainerSize: Point;
        maintain: boolean;
    }

    interface RotateEvent extends ViewerEvent {
        degrees: number;
    }

    interface TileEvent extends ViewerEvent {
        tile: Tile;
        tiledImage: TiledImage;
    }

    interface TileDrawingEvent extends TileEvent {
        context: Tile;
        rendered: Tile;
    }

    interface TileLoadFailedEvent extends TileEvent {
        time: number;
        message: string;
        tileRequest: XMLHttpRequest;
    }

    interface TileLoadedEvent extends TileEvent {
        image: HTMLImageElement;
        tileRequest: XMLHttpRequest;
        getCompletionCallback: () => () => void;
    }

    interface UpdateLevelEvent extends ViewerEvent {
        tiledImage: TiledImage;
        havedrawn: object;
        level: object;
        opacity: object;
        visibility: object;
        drawArea: Rect;
        /**
         * @deprecated use `drawArea` instead
         */
        topleft: object;
        /**
         * @deprecated use `drawArea` instead
         */
        bottomright: object;
        currenttime: object;
        best: object;
    }

    interface UpdateOverlayEvent extends ViewerEvent {
        element: Element;
        location: Point | Rect;
        placement: Placement;
    }

    interface VisibleEvent extends ViewerEvent {
        visible: boolean;
    }

    interface ZoomEvent extends ViewerEvent {
        zoom: number;
        refPoint: Point;
        immediately: boolean;
    }

    // -- WORLD EVENTS --
    interface WorldEvent extends OSDEvent<World> {}

    interface AddItemWorldEvent extends WorldEvent {
        item: TiledImage;
    }

    interface ItemIndexChangeWorldEvent extends WorldEvent {
        item: TiledImage;
        previousIndex: number;
        newIndex: number;
    }

    interface RemoveItemWorldEvent extends WorldEvent {
        item: TiledImage;
    }

    // -- MOUSE TRACKER EVENTS --
    interface MouseTrackerEvent<T extends Event = Event> extends OSDEvent<MouseTracker> {
        originalEvent: T;
    }

    interface PointerMouseTrackerEvent extends MouseTrackerEvent<PointerEvent> {
        pointerType: PointerType;
        position: Point;
        /**
         * @deprecated Use `pointerType` and/or `originalEvent` instead
         */
        isTouchEvent: boolean;
    }

    interface KeyMouseTrackerEvent extends MouseTrackerEvent<KeyboardEvent> {
        keyCode: number;
        ctrl: boolean;
        shift: boolean;
        alt: boolean;
        meta: boolean;
        preventDefault: boolean;
    }

    interface ContextMenuMouseTrackerEvent extends MouseTrackerEvent<MouseEvent> {
        position: Point;
        preventDefault: boolean;
    }

    interface PressMouseTrackerEvent extends PointerMouseTrackerEvent {
        buttons: number;
    }

    type PointerType = "mouse" | "touch" | "pen";

    type EventPhase = 0 | 1 | 2 | 3;
}

export as namespace OpenSeadragon;

declare function OpenSeadragon(options: OpenSeadragon.Options): OpenSeadragon.Viewer;

export = OpenSeadragon;
