// Type definitions for OpenSeadragon 2.4
// Project: https://openseadragon.github.io/
// Definitions by:  Álvaro Martínez <https://github.com/alvaromartmart>
//                  RobertYost <https://github.com/RobertYost>
//                  Jasper Staab <https://github.com/jstaab>
//                  Kristin Ruben <https://github.com/kristinruben>
//                  Geoff Harper <https://github.com/geoff-harper>
//                  Justin <https://github.com/justincy>
//                  Peter Blazejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/alvaromartmart/types-openseadragon
// TypeScript Version: 3.1
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
        useCapture?: boolean,
    ): void;

    function cancelEvent(event?: OSDEvent<any>): void;

    function capitalizeFirstLetter(value: string): string;

    function createCallback(object: object, method: (...args: any[]) => void, ...args: any[]): (...args: any[]) => void;

    function delegate(object: object, method: (...args: any[]) => void): (object: any, ...args: any[]) => void; // REVIEW: unsure of return type

    function extend(): any;

    function getCssPropertyWithVendorPrefix(property: string): string;

    function getElement(element: string | Element): Element;

    function getElementOffset(element: Element | string): Point;

    function getElementPosition(element: Element | string): Point;

    function getElementSize(element: Element | string): Point;

    function getElementStyle(element: Element | string): any; // CSSStyle?

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
        withCredentials?: boolean;
    }): XMLHttpRequest;

    function makeCenteredNode(element: Element | string): Element;

    function makeNeutralElement(tagName: string): Element;

    function makeTransparentImage(src: string): Element;

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
        useCapture?: boolean,
    ): void;

    function setElementOpacity(element: Element | string, opacity: number, usesAlpha?: boolean): void;

    function setElementTouchActionNone(element: Element | string): void;

    function setPageScroll(point: Point): void;

    function setString(property: string, value: any): void;

    function stopEvent(event?: OSDEvent<any>): void;

    interface GestureSettings {
        scrollToZoom?: boolean;
        clickToZoom?: boolean;
        dblClickToZoom?: boolean;
        pinchToZoom?: boolean;
        flickEnabled?: boolean;
        flickMinSpeed?: number;
        flickMomentum?: number;
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
        id?: string;
        element?: HTMLElement;
        tileSources?:
            | string
            | string[]
            | TileSource[]
            | TileSourceOptions
            | {
                  type: string;
                  levels: Array<{
                      url: string;
                      height: number;
                      width: number;
                  }>;
              }
            | {
                  Image: {
                      xmlns?: string;
                      Url: string;
                      Format: string;
                      Overlap: string;
                      TileSize: string;
                      Size: {
                          Width: string;
                          Height: string;
                      };
                  };
              };
        tabIndex?: number;
        overlays?: any[];
        prefixUrl?: string;
        navImages?: NavImages;
        debugMode?: boolean;
        debugGridColor?: string[];
        blendTime?: number;
        alwaysBlend?: boolean;
        autoHideControls?: boolean;
        immediateRender?: boolean;
        defaultZoomLevel?: number;
        opacity?: number;
        preload?: boolean;
        compositeOperation?:
            | 'source-over'
            | 'source-atop'
            | 'source-in'
            | 'source-out'
            | 'destination-over'
            | 'destination-atop'
            | 'destination-in'
            | 'destination-out'
            | 'lighter'
            | 'copy'
            | 'xor';
        placeholderFillStyle?: string | CanvasGradient | CanvasPattern;
        degrees?: number;
        flipped?: boolean;
        minZoomLevel?: number;
        maxZoomLevel?: number;
        homeFillsViewer?: boolean;
        panHorizontal?: boolean;
        panVertical?: boolean;
        constrainDuringPan?: boolean;
        wrapHorizontal?: boolean;
        wrapVertical?: boolean;
        minZoomImageRatio?: number;
        maxZoomPixelRatio?: number;
        smoothTileEdgesMinZoom?: number;
        iOSDevice?: boolean;
        autoResize?: boolean;
        preserveImageSizeOnResize?: boolean;
        minScrollDeltaTime?: number;
        pixelsPerWheelLine?: number;
        pixelsPerArrowPress?: number;
        visibilityRatio?: number;
        viewportMargins?: object;
        imageLoaderLimit?: number;
        clickTimeThreshold?: number;
        clickDistThreshold?: number;
        dblClickTimeThreshold?: number;
        dblClickDistThreshold?: number;
        springStiffness?: number;
        animationTime?: number;
        gestureSettingsMouse?: GestureSettings;
        gestureSettingsTouch?: GestureSettings;
        gestureSettingsPen?: GestureSettings;
        gestureSettingsUnknown?: GestureSettings;
        zoomPerClick?: number;
        zoomPerScroll?: number;
        zoomPerSecond?: number;
        showNavigator?: boolean;
        navigatorId?: string;
        navigatorPosition?: 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT' | 'ABSOLUTE';
        navigatorSizeRatio?: number;
        navigatorMaintainSizeRatio?: boolean;
        navigatorTop?: number | string;
        navigatorLeft?: number | string;
        navigatorHeight?: number | string;
        navigatorWidth?: number | string;
        navigatorAutoResize?: boolean;
        navigatorAutoFade?: boolean;
        navigatorRotate?: boolean;
        navigatorBackground?: string;
        navigatorOpacity?: number;
        navigatorBorderColor?: string;
        navigatorDisplayRegionColor?: string;
        controlsFadeDelay?: number;
        controlsFadeLength?: number;
        maxImageCacheCount?: number;
        timeout?: number;
        useCanvas?: boolean;
        minPixelRatio?: number;
        mouseNavEnabled?: number;
        showNavigationControl?: boolean;
        navigationControlAnchor?: ControlAnchor;
        showZoomControl?: boolean;
        showHomeControl?: boolean;
        showFullPageControl?: boolean;
        showRotationControl?: boolean;
        showFlipControl?: boolean;
        showSequenceControl?: boolean;
        sequenceControlAnchor?: ControlAnchor;
        navPrevNextWrap?: boolean;
        zoomInButton?: string;
        zoomOutButton?: string;
        homeButton?: string;
        fullPageButton?: string;
        rotateLeftButton?: string;
        rotateRightButton?: string;
        previousButton?: string;
        nextButton?: string;
        sequenceMode?: boolean;
        /**
         * If sequenceMode is true, display this page initially.
         * @default 0
         */
        initialPage?: number;
        preserveViewport?: boolean;
        preserveOverlays?: boolean;
        showReferenceStrip?: boolean;
        referenceStripScroll?: string;
        referenceStripElement?: HTMLElement;
        referenceStripHeight?: number;
        referenceStripWidth?: number;
        referenceStripPosition?: string;
        referenceStripSizeRatio?: number;
        collectionMode?: boolean;
        collectionRows?: number;
        collectionColumns?: number;
        collectionLayout?: 'horizontal' | 'vertical';
        collectionTileSize?: number;
        collectionTileMargin?: number;
        crossOriginPolicy?: 'Anonymous' | 'use-credentials' | false;
        ajaxWithCredentials?: boolean;
        loadTilesWithAjax?: boolean;
        ajaxHeaders?: object;
        imageSmoothingEnabled?: boolean;
        rotationIncrement?: number;
    }

    interface TileSourceOptions {
        url?: string;
        referenceStripThumbnailUrl?: string;
        success?: (event: Event) => void;
        ajaxWithCredentials?: boolean;
        ajaxHeaders?: object;
        width?: number;
        height?: number;
        tileSize?: number;
        tileWidth?: number;
        tileHeight?: number;
        tileOverlap?: number;
        minLevel?: number;
        maxLevel?: number;
        getTileUrl?: (l: number, x: number, y: number) => string;
    }

    class Button extends EventSource {
        currentState: ButtonState;
        element: Element;
        fadeDelay: number;
        fadeLength: number;
        tracker: MouseTracker;

        constructor(options: {
            element?: Element;
            tooltip?: string;
            srcRest?: string;
            srcGroup?: string;
            srcHover?: string;
            srcDown?: string;
            fadeDelay?: number;
            fadeLength?: number;
            onPress?: EventHandler<ButtonEvent>;
            onRelease?: EventHandler<ButtonEvent>;
            onClick?: EventHandler<ButtonEvent>;
            onEnter?: EventHandler<ButtonEvent>;
            onExit?: EventHandler<ButtonEvent>;
            onFocus?: EventHandler<ButtonEvent>;
            onBlur?: EventHandler<ButtonEvent>;
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
    }

    class ButtonGroup {
        buttons: Button[];
        element: Element;
        tracker: MouseTracker;

        constructor(options: { buttons: Button[]; element?: Element });
    }

    interface TControlOptions {
        anchor?: ControlAnchor;
        attachToViewer?: boolean;
        autoFade?: boolean;
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

        addControl(element: Control, controlOptions: TControlOptions): void;
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

        constructor(options: { viewer: Viewer; viewport: Viewport; element: Element; debugGridColor?: string });

        blendSketch(options: {
            opacity: number;
            scale?: number;
            translate?: Point;
            compositeOperation?: string;
            bounds?: Rect;
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
        constructor(options: TileSourceOptions & { tileFormat?: string });
    }

    class ImageLoader {
        constructor(options: { jobLimit?: number; timeout?: number });

        addJob(options: {
            src?: string;
            loadWithAjax?: string;
            ajaxHeaders?: string;
            crossOriginPolicy?: string | boolean;
            ajaxWithCredentials?: boolean;
            callback?: () => void;
            abort?: () => void;
        }): void;
        clear(): void;
    }

    class ImageTileSource extends TileSource {
        constructor(options: {
            url: string;
            buildPyramid?: boolean;
            crossOriginPolicy?: string | boolean;
            ajaxWithCredentials?: string | boolean;
            useCanvas?: boolean;
        });
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
        startDisabled?: boolean;
        clickTimeThreshold?: number;
        clickDistThreshold?: number;
        dblClickTimeThreshold?: number;
        dblClickDistThreshold?: number;
        stopDelay?: number;
        enterHandler?: EventHandler<OSDEvent<any>>;
        exitHandler?: EventHandler<OSDEvent<any>>;
        pressHandler?: EventHandler<OSDEvent<any>>;
        nonPrimaryPressHandler?: EventHandler<OSDEvent<any>>;
        releaseHandler?: EventHandler<OSDEvent<any>>;
        nonPrimaryReleaseHandler?: EventHandler<OSDEvent<any>>;
        moveHandler?: EventHandler<OSDEvent<any>>;
        scrollHandler?: EventHandler<OSDEvent<any>>;
        clickHandler?: EventHandler<OSDEvent<any>>;
        dblClickHandler?: EventHandler<OSDEvent<any>>;
        dragHandler?: EventHandler<OSDEvent<any>>;
        dragEndHandler?: EventHandler<OSDEvent<any>>;
        pinchHandler?: EventHandler<OSDEvent<any>>;
        keyDownHandler?: EventHandler<OSDEvent<any>>;
        keyUpHandler?: EventHandler<OSDEvent<any>>;
        keyHandler?: EventHandler<OSDEvent<any>>;
        focusHandler?: EventHandler<OSDEvent<any>>;
        blurHandler?: EventHandler<OSDEvent<any>>;
        userData?: object;
    }
    class MouseTracker {
        clickTimeThreshold: number;
        clickDistThreshold: number;
        dblClickTimeThreshold: number;
        dblClickDistThreshold: number;
        element: Element;

        constructor(options: MouseTrackerOptions);

        blurHandler: (event: OSDEvent<any>) => void;
        clickHandler: (event: OSDEvent<any>) => void;
        dblClickHandler: (event: OSDEvent<any>) => void;
        destroy(): void;
        dragEndHandler: (event: OSDEvent<any>) => void;
        dragHandler: (event: OSDEvent<any>) => void;
        enterHandler: (event: OSDEvent<any>) => void;
        exitHandler: (event: OSDEvent<any>) => void;
        focusHandler: (event: OSDEvent<any>) => void;
        getActivePointerCount(): number;
        getActivePointersListByType(type: string): GesturePointList;
        getActivePointersListsExceptType(type: string): GesturePointList[];
        keyDownHandler: (event: OSDEvent<any>) => void;
        keyHandler: (event: OSDEvent<any>) => void;
        keyUpHandler: (event: OSDEvent<any>) => void;
        moveHandler: (event: OSDEvent<any>) => void;
        nonPrimaryPressHandler: (event: OSDEvent<any>) => void;
        nonPrimaryReleaseHandler: (event: OSDEvent<any>) => void;
        pinchHandler: (event: OSDEvent<any>) => void;
        pressHandler: (event: OSDEvent<any>) => void;
        releaseHandler: (event: OSDEvent<any>) => void;
        scrollHandler: (event: OSDEvent<any>) => void;
        setTracking(track: boolean): any;
        stopHandler: (event: OSDEvent<any>) => void;
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
        placement?: Placement;
        onDraw?: OnDrawCallback;
        checkResize?: boolean;
        width?: number;
        height?: number;
        rotationMode?: boolean;
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
            initial?: number;
            exponential?: boolean;
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
        constructor(options: { maxImageCacheCount?: number });
        cacheTile(options: {
            tile: Tile;
            image: HTMLImageElement; // TODO: check type
            tiledImage: TiledImage;
            cutoff?: number;
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
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            fitBounds?: Rect;
            fitBoundsPlacement?: Placement;
            clip?: Rect;
            springStiffness?: number;
            animationTime?: boolean;
            minZoomImageRatio?: number;
            wrapHorizontal?: boolean;
            wrapVertical?: boolean;
            immediateRender?: boolean;
            blendTime?: number;
            alwaysBlend?: boolean;
            minPixelRatio?: number;
            smoothTileEdgesMinZoom?: number;
            iOSDevice?: boolean;
            opacity?: number;
            preload?: boolean;
            compositeOperation?: string;
            debugMode?: boolean;
            placeholderFillStyle?: string | CanvasGradient | CanvasPattern;
            crossOriginPolicy?: string | boolean;
            ajaxWithCredentials?: boolean;
            loadTilesWithAjax?: boolean;
            ajaxHeaders?: object;
        });

        addHandler(eventName: string, handler: EventHandler<TiledImageEvent>, userData?: object): void;
        addOnceHandler(eventName: string, handler: EventHandler<TiledImageEvent>, userData?: object): void;
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
        getHandler(eventName: string): (source: Event, ...args: any[]) => void;
        getOpacity(): number;
        getPreload(): boolean;
        getRotation(current?: boolean): number;
        imageToViewerElementCoordinats(pixel: Point): Point;
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
        removeAllHandlers(eventName: string): void;
        removeHandler(eventName: string, handler: EventHandler<TiledImageEvent>): void;
        reset(): void;
        resetCroppingPolygons(): void;
        setClip(newClip: Rect | null): void;
        setCompositeOperation(compositeOperation: string): void;
        setCroppingPolygons(polygons: Point[][]): void;
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
        minlevel: number;
        ready: boolean;
        tileOverlap: number;
        constructor(options: TileSourceOptions);
        addHandler(eventName: string, handler: EventHandler<TileSourceEvent>, userData?: object): void;
        addOnceHandler(
            eventName: string,
            handler: EventHandler<TileSourceEvent>,
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
        removeAllHandlers(eventName: string): void;
        removeHandler(eventName: string, handler: EventHandler<TileSourceEvent>): void;
        supports(data: string | object | any[] | Document, url: string): boolean;
        tileExists(level: number, x: number, y: number): boolean;
    }

    class TmsTileSource extends TileSource {
        constructor(width: number, height: number, tileSize: number, tileOverlap: number, tilesUrl: string);
    }

    interface ImageOptions {
        index?: number;
        replace?: boolean;
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        fitBounds?: Rect;
        fitBoundsPlacement?: Placement;
        clip?: Rect;
        opacity?: number;
        preload?: boolean;
        degrees?: number;
        compositeOperation?: string;
        crossOriginPolicy?: string;
        ajaxWithCredentials?: boolean;
        loadTilesWithAjax?: boolean;
        ajaxHeaders?: object;
        success?: (event: Event) => void;
        error?: (error: Error) => void;
        collectionImmediately?: boolean;
        placeholderFillStyle?: string | CanvasGradient | CanvasPattern;
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
        addHandler(eventName: ViewerEventName, callback: EventHandler<ViewerEvent>, userData?: object): void;
        addOnceHandler(
            eventName: ViewerEventName,
            callback: EventHandler<ViewerEvent>,
            userData?: object,
            times?: number,
        ): void;
        addOverlay(
            element: HTMLElement | string | object,
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
        removeAllHandlers(eventName: string): void;
        removeHandler(eventName: string, handler: EventHandler<ViewerEvent>): void;
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
            springStiffness?: number;
            animationTime?: number;
            minZoomImageRatio?: number;
            maxZoomPixelRatio?: number;
            visibilityRatio?: number;
            wrapHorizontal?: boolean;
            wrapVertical?: boolean;
            defaultZoomLevel?: number;
            minZoomLevel?: number;
            maxZoomLevel?: number;
            degrees?: number;
            homeFillsViewer?: boolean;
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
        getAspectRatio(): any; // TODO: determine return type
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

        addHandler(eventName: WorldEventName, callback: EventHandler<WorldEvent>, userData?: object): void;
        addItem(item: TiledImage, options?: { index?: number }): void;
        addOnceHandler(eventName: string, handler: EventHandler<WorldEvent>, userData?: object, times?: number): void;
        arrange(options: {
            immediately?: boolean;
            layout?: 'horizontal' | 'vertical';
            rows?: number;
            columns?: number;
            tileSize?: number;
            tileMargin?: number;
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
        removeAllHandlers(eventName: string): void;
        removeHandler(eventName: string, handler: EventHandler<WorldEvent>): void;
        removeItem(item: TiledImage): void;
        resetItems(): void;
        setAutoRefigureSizes(value?: boolean): void;
        setItemIndex(item: TiledImage, index: number): void;
        update(): void;
    }

    class ZoomifyTileSource extends TileSource {
        constructor(width: number, height: number, tileSize: number, tilesUrl: string);
    }

    // TODO: use proper eventName type aliases, and OSDEvent where appropiate

    type EventHandler<T extends OSDEvent<any>> = (event: T) => void;

    type ButtonEventName = 'blur' | 'click' | 'enter' | 'exit' | 'focus' | 'press' | 'release';
    type TiledImageEventName =
        | 'bounds-change'
        | 'clip-change'
        | 'composite-operation-change'
        | 'fully-loaded-change'
        | 'opacity-change';
    type TileSourceEventname = 'open-failed' | 'ready';
    type ViewerEventName =
        | 'add-item-failed'
        | 'add-overlay'
        | 'animation'
        | 'animation-finish'
        | 'animation-start'
        | 'canvas-click'
        | 'canvas-double-click'
        | 'canvas-drag'
        | 'canvas-drag-end'
        | 'canvas-enter'
        | 'canvas-exit'
        | 'canvas-key'
        | 'canvas-nonprimary-press'
        | 'canvas-nonprimary-release'
        | 'canvas-pinch'
        | 'canvas-press'
        | 'canvas-release'
        | 'canvas-scroll'
        | 'clear-overlay'
        | 'close'
        | 'constrain'
        | 'container-enter'
        | 'container-exit'
        | 'controls-enabled'
        | 'flip'
        | 'full-page'
        | 'full-screen'
        | 'home'
        | 'mouse-enabled'
        | 'navigator-click'
        | 'navigator-drag'
        | 'navigator-scroll'
        | 'open'
        | 'open-failed'
        | 'page'
        | 'pan'
        | 'pre-full-page'
        | 'pre-full-screen'
        | 'remove-overlay'
        | 'reset-size'
        | 'resize'
        | 'rotate'
        | 'tile-drawing'
        | 'tile-drawn'
        | 'tile-load-failed'
        | 'tile-loaded'
        | 'tile-unloaded'
        | 'update-level'
        | 'update-overlay'
        | 'update-tile'
        | 'update-viewport'
        | 'viewport-change'
        | 'visible'
        | 'zoom';
    type WorldEventName = 'add-item' | 'item-index-change' | 'metrics-change' | 'remove-item';

    interface OSDEvent<T> extends Event {
        eventSource?: T;
        userData: any;
    }

    interface ButtonEvent extends OSDEvent<Button> {
        originalEvent: Event;
    }

    interface TiledImageEvent extends OSDEvent<TiledImage> {
        compositeOperationChange?: string;
        fullyLoaded?: boolean;
        opacity?: boolean;
    }

    interface TileSourceEvent extends OSDEvent<TileSource> {
        message?: string;
        source?: string;
        tileSource?: object;
    }

    interface ViewerEvent extends OSDEvent<Viewer> {
        message?: string;
        source?: string;
        options?: object;
        element?: Element;
        location?: Point | Rect;
        placement?: Placement;
        tracker?: MouseTracker;
        position?: Point;
        quick?: boolean;
        shift?: boolean;
        preventDefaultAction?: true;
        delta?: Point;
        speed?: number;
        direction?: number;
        pointerType?: string;
        button?: number;
        buttons?: number;
        pointers?: number;
        insideElementPressed?: boolean;
        buttonDownAny?: boolean;
        preventVerticalPan?: boolean;
        preventHorizontalPan?: boolean;
        gesturePoints?: GesturePoint[];
        lastCenter?: Point;
        center?: Point;
        lastDistance?: number;
        insideElementReleased?: boolean;
        scroll?: number;
        immediately?: number;
        enabled?: boolean;
        flipped?: number;
        fullPage?: boolean;
        fullScreen?: boolean;
        page?: number;
        contentSize?: Point;
        contentBounds?: Rect;
        homeBounds?: Rect;
        contentFactor?: number;
        newContainerSize?: Point;
        mantain?: boolean;
        degrees?: number;
        tile?: Tile;
        tiledImage?: TiledImage | XMLHttpRequest;
        context?: Tile;
        rendered?: Tile;
        time?: number;
        tileRequest?: XMLHttpRequest;
        getCompletionCallback?: (...args: any) => void;
        visible?: boolean;
        refPoint?: Point;
        zoom?: number;
    }

    interface WorldEvent extends OSDEvent<World> {
        item?: TiledImage;
        previousIndex?: number;
        newIndex?: number;
    }
}

export as namespace OpenSeadragon;

declare function OpenSeadragon(options: OpenSeadragon.Options): OpenSeadragon.Viewer;

export = OpenSeadragon;
