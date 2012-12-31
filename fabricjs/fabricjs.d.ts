// Type definitions for FabricJS
// Project: http://fabricjs.com/
// Definitions by: Oliver Klemencic <https://github.com/oklemencic/>

/* 
USAGE
///<reference path="fabricjs.d.ts"/>
*/
declare module fabric {

    function createCanvasForNode(width: number, height: number): ICanvas;
    function getCSSRules(doc: SVGDocument);
    function getGradientDefs(doc: SVGDocument);
    function loadSVGFromString(text: string, callback: (results: IObject[], options) => void , reviver?: (el, obj) => void );
    function loadSVGFromURL(url, callback: (results: IObject[], options) => void , reviver?: (el, obj) => void );
    function log(values);
    function parseAttributes(element, attributes: any[]): any;
    function parseElements(elements: any[], callback, options, reviver);
    function parsePointsAttribute(points: string): any[];
    function parseStyleAttribute(element: SVGElement);
    function parseSVGDocument(doc: SVGDocument, callback: (results, options) => void , reviver?: (el, obj) => void );
    function parseTransformAttribute(attributeValue: string);
    function warn(values);

    var isLikelyNode: bool;
    var isTouchSupported: bool;

    export interface IObservable {
        observe(eventCollection: IEventList);
        on(eventCollection: IEventList);

        observe(eventName: string, handler: (e) => any);
        on(eventName: string, handler: (e) => any);

        fire(eventName: string, options);
        stopObserving(eventName: string, handler: (e) => any);

        off(eventName, handler);
    }

    export interface IFilter {
        new (): IFilter;
        new (options: any): IFilter;
    }

    export interface IEventList {
        [index: string]: (e: Event) => void;
    }

    export interface IObjectOptions {
        angle?: number;
        borderColor?: string;
        borderOpacityWhenMoving?: number;
        borderScaleFactor?: number;
        cornerColor?: string;
        cornersize?: number;
        fill?: string;
        fillRule?: string;
        flipX?: bool;
        flipY?: bool;
        hasBorders?: bool;
        hasControls?: bool;
        hasRotatingPoint?: bool;
        height?: number;
        includeDefaultValues?: bool;
        left?: number;
        lockMovementX?: bool;
        lockMovementY?: bool;
        lockScalingX?: bool;
        lockScalingY?: bool;
        lockUniScaling?: bool;
        lockRotation?: bool;
        opacity?: number;
        originX?: string;
        originY?: string;
        overlayFill?: string;
        padding?: number;
        perPixelTargetFind?: bool;
        rotatingPointOffset?: number;
        scaleX?: number;
        scaleY?: number;
        selectable?: bool;
        stateProperties?: any[];
        stroke?: string;
        strokeDashArray?: any[];
        strokeWidth?: number;
        top?: number;
        transformMatrix?: any[];
        transparentCorners?: bool;
        type?: string;
        width?: number;
    }

    export interface ITextOptions extends IObjectOptions {
        fontSize?: number;
        fontWeight?: any;
        fontFamily?: string;
        textDecoration?: string;
        textShadow?: string;
        textAlign?: string;
        fontStyle?: string;
        lineHeight?: number;
        strokeStyle?: string;
        strokeWidth?: number;
        backgroundColor?: string;
        textBackgroundColor?: string;
        path?: string;
        type?: string;
        useNative?: Boolean;
    }

    export interface ICircleOptions extends IObjectOptions {
        radius?: number;
    }

    export interface IPoint {
        add(that: IPoint): IPoint;
        addEquals(that: IPoint): IPoint;
        distanceFrom(that: IPoint);
        divide(scalar: number);
        divideEquals(scalar: number);
        eq(that: IPoint);
        gt(that: IPoint);
        gte(that: IPoint);
        init(x, y);
        lerp(that: IPoint, t);
        lt(that: IPoint);
        lte(that: IPoint);
        max(that: IPoint);
        min(that: IPoint);
        multiply(scalar);
        multiplyEquals(scalar);
        scalarAdd(scalar): IPoint;
        scalarAddEquals(scalar: number, thisArg: IPoint);
        scalarSubtract(scalar: number);
        scalarSubtractEquals(scalar);
        setFromPoint(that: IPoint);
        setXY(x, y);
        subtract(that: IPoint): IPoint;
        subtractEquals(that: IPoint): IPoint;
        swap(that: IPoint);
        tostring(): string;
    }

    export interface IRect extends IObject {
        x: number;
        y: number;
        rx: number;
        ry: number;

        complexity(): number;
        initialize(points: number[], options: any): IRect;
        toObject(propertiesToInclude: any[]): any;
        toSVG(): string;
    }

    export interface IText extends IObject {
        fontSize: number;
        fontWeight: any;
        fontFamily: string;
        text: string;
        textDecoration: string;
        textShadow?: string;
        textAlign: string;
        fontStyle: string;
        lineHeight: number;
        strokeStyle: string;
        strokeWidth: number;
        backgroundColor: string;
        textBackgroundColor: string;
        path?: string;
        type: string;
        useNative: Boolean;

        initialize(text: string, options: any): IText;
        toString(): string;
        render(ctx: CanvasRenderingContext2D, noTransform: bool);
        toObject(propertiesToInclude: any[]): IObject;
        toSVG(): string;
        setColor(value: string): IText;
        setFontsize(value: number): IText;
        getText(): string;
        setText(value: string): IText;
    }

    export interface ITriangle extends IObject {
        complexity(): number;
        initialize(options: any): ITriangle;
        toSVG(): string;
    }

    export interface IEllipse {
        initialize(options: any): any;
        toObject(propertiesToInclude: any[]): any;
        toSVG(): string;
        render(ctx: CanvasRenderingContext2D, noTransform: bool);
        complexity(): number;
    }

    export interface IGradient {
        initialize(options): any;
        toObject(): any;
        toLiveGradient(ctx: CanvasRenderingContext2D): any;
    }

    export interface IColor {
        getSource(): any[];
        setSource(source: any[]): any;
        toRgb(): string;
        toRgba(): string;
        toHex(): string;
        getAlpha(): number;
        setAlpha(alpha: number): IColor;
        toGrayscale(): IColor;
        toBlackWhite(threshold): IColor;
        overlayWith(otherColor: string): IColor;
        overlayWith(otherColor: IColor): IColor;
    }

    export interface IElement {
    }

    export interface IObject extends IObservable {

        // constraint properties
        lockMovementX: bool;
        lockMovementY: bool;
        lockScalingX: bool;
        lockScalingY: bool;
        lockScaling: bool;
        lockUniScaling: bool;
        lockRotation: bool;

        getCurrentWidth(): number;
        getCurrentHeight(): number;

        originX: string;
        originY: string;

        angle: number;
        getAngle(): number;
        setAngle(value: number): IObject;

        borderColor: string;
        getBorderColor(): string;
        setBorderColor(value: string): IObject;

        borderOpacityWhenMoving: number;
        borderScaleFactor: number;
        getBorderScaleFactor(): number;

        cornerColor: string;

        cornersize: number;
        getCornersize(): number;
        setCornersize(value: number): IObject;

        fill: string;
        getFill(): string;
        setFill(value: string): IObject;

        fillRule: string;
        getFillRule(): string;
        setFillRule(value: string): IObject;

        flipX: bool;
        getFlipX(): bool;
        setFlipX(value: bool): IObject;

        flipY: bool;
        getFlipY(): bool;
        setFlipY(value: bool): IObject;

        hasBorders: bool;

        hasControls: bool;
        hasRotatingPoint: bool;
        
        height: number;
        getHeight(): number;
        setHeight(value: number): IObject;

        includeDefaultValues: bool;
        
        left: number;
        getLeft(): number;
        setLeft(value: number): IObject;

        opacity: number;
        getOpacity(): number;
        setOpacity(value: number): IObject;

        overlayFill: string;
        getOverlayFill(): string;
        setOverlayFill(value: string): IObject;

        padding: number;
        perPixelTargetFind: bool;
        rotatingPointOffset: number;
        
        scaleX: number;
        getScaleX(): number;
        setScaleX(value: number): IObject;

        scaleY: number;
        getScaleY(): number;
        setScaleY(value: number): IObject;

        selectable: bool;
        stateProperties: any[];
        stroke: string;
        strokeDashArray: any[];
        strokeWidth: number;
        
        top: number;
        getTop(): number;
        setTop(value: number): IObject;

        transformMatrix: any[];
        transparentCorners: bool;
        type: string;
        
        width: number;
        getWidth(): number;
        setWidth(value: number): IObject;

        // methods
        bringForward(): IObject;
        bringToFront(): IObject;
        center(): IObject;
        centerH(): IObject;
        centerV(): IObject;
        clone(callback?, propertiesToInclude?): IObject;
        cloneAsImage(callback): IObject;
        complexity(): number;
        drawBorders(context: CanvasRenderingContext2D): IObject;
        drawCorners(context: CanvasRenderingContext2D): IObject;
        get (property: string): any;
        getBoundingRectHeight(): number;
        getBoundingRectWidth(): number;
        getSvgStyles(): string;
        getSvgTransform(): string;
        hasStateChanged(): bool;
        initialize(options: any);
        intersectsWithObject(other: IObject): bool;
        intersectsWithRect(selectionTL: any, selectionBR: any): bool;
        isActive(): bool;
        isContainedWithinObject(other: IObject): bool;
        isContainedWithinRect(selectionTL: any, selectionBR: any): bool;
        isType(type: string): bool;
        remove(): IObject;
        render(ctx: CanvasRenderingContext2D, noTransform: bool);
        rotate(value: number): IObject;
        saveState(): IObject;
        scale(value: number): IObject;
        scaleToHeight(value: number): IObject;
        scaleToWidth(value: number): IObject;
        sendBackwards(): IObject;
        sendToBack(): IObject;

        set (properties: IObjectOptions): IObject;
        set (name: string, value: any): IObject;
        setActive(active: bool): IObject;
        setCoords();
        setGradientFill(options);
        setOptions(options: any);
        setSourcePath(value: string): IObject;
        toDatalessObject(propertiesToInclude): any;
        toDataURL(callback): string;
        toggle(property): IObject;
        toGrayscale(): IObject;
        toJSON(propertiesToInclude): string;
        toObject(propertiesToInclude): any;
        tostring(): string;
        transform(ctx: CanvasRenderingContext2D);
    }

    export interface IGroup extends IObject {
        type: string;

        activateAllObjects(): IGroup;
        add(object): IGroup;
        addWithUpdate(object): IGroup;
        complexity(): number;
        contains(object): bool;
        containsPoint(point): bool;
        destroy(): IGroup;
        getObjects(): IObject[];
        hasMoved(): bool;
        initialize(objects, options): any;
        item(index): IObject;
        remove(object): IGroup;
        removeWithUpdate(object): IGroup;
        render(ctx, noTransform): void;
        saveCoords(): IGroup;
        setObjectsCoords(): IGroup;
        size(): number;
        toGrayscale(): void;
        toObject(propertiesToInclude: any[]): any;
        tostring(): string;
        toSVG(): string;
    }


    export interface ILine extends IObject {
        x1: number;
        x2: number;
        y1: number;
        y2: number;

        complexity(): number;
        initialize(points: number[], options: any): ILine;
        toObject(propertiesToInclude: any[]): any;
        toSVG(): string;
    }

    export interface IIntersection {
        appendPoint(status: string);
        appendPoints(status: string);
        init(status: string);
    }

    export interface IImage extends IObject {
        filters: any;

        applyFilters(callback);
        clone(propertiesToInclude, callback);
        complexity(): number;
        getElement(): HTMLImageElement;
        getOriginalSize(): { width: number; height: number; };
        getSrc(): string;
        initialize(element: string, options: any);
        initialize(element: HTMLImageElement, options: any);
        render(ctx: CanvasRenderingContext2D, noTransform: bool);
        setElement(element): IImage;
        toObject(propertiesToInclude): any;
        tostring(): string;
        toSVG(): string;
    }

    export interface ICircle extends IObject {
        // methods
        complexity(): number;
        getRadiusX(): number;
        getRadiusY(): number;
        initialize(options: ICircleOptions): ICircle;
        setRadius(value: number): number;
        toObject(propertiesToInclude): any;
        toSVG(): string;
    }

    

    export interface IPath extends IObject {
        complexity(): number;
        initialize(path, options);
        render(ctx: CanvasRenderingContext2D, noTransform: bool);
        toDatalessObject(propertiesToInclude): any;
        toObject(propertiesToInclude): any;
        tostring(): string;
        toSVG(): string;
    }

    export interface IPolygon extends IObject {
        complexity(): number;
        initialize(points, options);
        toObject(propertiesToInclude): any;
        toSVG(): string;
    }

    export interface IPolyline extends IObject {
        complexity(): number;
        initialize(points, options);
        toObject(propertiesToInclude): any;
        toSVG(): string;
    }

    export interface IPathGroup extends IObject {
        complexity(): number;
        initialize(paths, options);
        isSameColor(): bool;
        render(ctx: CanvasRenderingContext2D);
        toDatalessObject(propertiesToInclude): any;
        toGrayscale();
        toObject(propertiesToInclude): any;
        tostring(): string;
        toSVG(): string;
    }

    export interface IStaticCanvas extends IObservable {

        // fields
        backgroundColor: string;
        backgroundImage: string;
        backgroundImageOpacity: number;
        backgroundImageStretch: number;
        clipTo(clipFunction: (context: CanvasRenderingContext2D) => void );
        controlsAboveOverlay: bool;
        includeDefaultValues: bool;
        overlayImage: string;
        overlayImageLeft: number;
        overlayImageTop: number;
        renderOnAddition: bool;
        stateful: bool;

        // static 
        EMPTY_JSON: string;
        supports(methodName: string): bool;

        // methods
        add(...object: IObject[]): ICanvas;
        bringForward(object: IObject): ICanvas;
        calcOffset(): ICanvas;
        centerObject(object: IObject): ICanvas;
        centerObjectH(object: IObject): ICanvas;
        centerObjectV(object: IObject): ICanvas;
        clear(): ICanvas;
        clearContext(context: CanvasRenderingContext2D): ICanvas;
        complexity(): number;
        dispose(): ICanvas;
        drawControls();
        forEachObject(callback: (object: IObject) => void , context?: CanvasRenderingContext2D): ICanvas;
        getActiveGroup(): IGroup;
        getActiveObject(): IObject;
        getCenter(): IObject;
        getContext(): CanvasRenderingContext2D;
        getElement(): HTMLCanvasElement;
        getHeight(): number;
        getWidth(): number;
        insertAt(object: IObject, index: number, nonSplicing: bool): ICanvas;
        isEmpty(): bool;
        item(index: number): IObject;
        onBeforeScaleRotate(target: IObject);
        remove(object: IObject): IObject;
        renderAll(allOnTop?: bool): ICanvas;
        renderTop(): ICanvas;

        sendBackwards(object: IObject): ICanvas;
        sendToBack(object: IObject): ICanvas;
        setBackgroundImage(object: IObject): ICanvas;
        setDimensions(object: { width: number; height: number; }): ICanvas;
        setHeight(height: number): ICanvas;
        setOverlayImage(url: string, callback: () => any, options): ICanvas;
        setWidth(width: number): ICanvas;
        toDatalessJSON(propertiesToInclude?: any[]): string;
        toDatalessObject(propertiesToInclude?: any[]): string;
        toDataURL(format: string, quality?: number): string;
        toDataURLWithMultiplier(propertiesToInclude: any[]): string;
        toGrayscale(propertiesToInclude: any[]): string;
        toJSON(propertiesToInclude: any[]): string;
        toObject(propertiesToInclude: any[]): string;
        tostring(): string;
        toSVG(): string;
    }

    export interface ICanvas extends IStaticCanvas {

        // constructors
        (element: HTMLCanvasElement): ICanvas;
        (element: string): ICanvas;

        _objects: IObject[];

        // fields
        containerClass: string;
        defaultCursor: string;
        freeDrawingColor: string;
        freeDrawingLineWidth: number;
        hoverCursor: string;
        interactive: bool;
        moveCursor: string;
        perPixelTargetFind: bool;
        rotationCursor: string;
        selection: bool;
        selectionBorderColor: string;
        selectionColor: string;
        selectionDashArray: number[];
        selectionLineWidth: number;
        targetFindTolerance: number;

        // methods
        containsPoint(e: Event, target: IObject): bool;
        deactivateAll(): ICanvas;
        deactivateAllWithDispatch(): ICanvas;
        discardActiveGroup(): ICanvas;
        discardActiveObject(): ICanvas;
        drawDashedLine(ctx: CanvasRenderingContext2D, x: number, y: number, x2: number, y2: number, dashArray: number[]): ICanvas;
        findTarget(e: MouseEvent, skipGroup: bool): ICanvas;
        getActiveGroup(): IGroup;
        getActiveObject(): IObject;
        getPointer(e): { x: number; y: number; };
        getSelectionContext(): CanvasRenderingContext2D;
        getSelectionElement(): HTMLCanvasElement;
        setActiveGroup(group: IGroup): ICanvas;
        setActiveObject(object: IObject, e?): ICanvas;

        loadFromJSON(json, callback: () => void): void;
        loadFromDatalessJSON(json, callback: () => void): void;
    }

    export interface IBrightnessFilter {
    }
    export interface IInvertFilter {
    }
    export interface IRemoveWhiteFilter {
    }
    export interface IGrayscaleFilter {
    }
    export interface ISepiaFilter {
    }
    export interface ISepia2Filter {
    }
    export interface INoiseFilter {
    }
    export interface IGradientTransparencyFilter {
    }
    export interface IPixelateFilter {
    }
    export interface IConvoluteFilter {
    }

    export interface ICanvasOptions {
        containerClass?: string;
        defaultCursor?: string;
        freeDrawingColor?: string;
        freeDrawingLineWidth?: number;
        hoverCursor?: string;
        interactive?: bool;
        moveCursor?: string;
        perPixelTargetFind?: bool;
        rotationCursor?: string;
        selection?: bool;
        selectionBorderColor?: string;
        selectionColor?: string;
        selectionDashArray?: number[];
        selectionLineWidth?: number;
        targetFindTolerance?: number;

        backgroundColor?: string;
        backgroundImage?: string;
        backgroundImageOpacity?: number;
        backgroundImageStretch?: number;
        controlsAboveOverlay?: bool;
        includeDefaultValues?: bool;
        overlayImage?: string;
        overlayImageLeft?: number;
        overlayImageTop?: number;
        renderOnAddition?: bool;
        stateful?: bool;
    }

    export interface IRectOptions extends IObjectOptions {
        x?: number; 
        y?: number;
        rx?: number;
        ry?: number;
    }

    export interface ITriangleOptions extends IObjectOptions {
    }

    declare var Rect: {
        fromElement(element: SVGElement, options: IRectOptions): IRect;
        fromObject(object): IRect;
        new (options?: IRectOptions): IRect;
        prototype: any;
    }

    declare var Triangle: {
        new (options?: ITriangleOptions): ITriangle;
    }

    declare var Canvas: {
        new (element: HTMLCanvasElement, options?: ICanvasOptions): ICanvas;
        new (element: string, options?: ICanvasOptions): ICanvas;

        EMPTY_JSON: string;
        supports(methodName: string): bool;
        prototype: any;
    }

    declare var StaticCanvas: {
        new (element: HTMLCanvasElement, options?: ICanvasOptions): ICanvas;
        new (element: string, options?: ICanvasOptions): ICanvas;

        EMPTY_JSON: string;
        supports(methodName: string): bool;
        prototype: any;
    }

    declare var Circle: {
        ATTRIBUTE_NAMES: string[];
        fromElement(element: SVGElement, options: ICircleOptions): ICircle;
        fromObject(object): ICircle;
        new (options?: ICircleOptions): ICircle;
        prototype: any;
    }

    declare var Group: {
        new (items?: any[], options?: IObjectOptions): IGroup;
    }

    declare var Line: {
        ATTRIBUTE_NAMES: string[];
        fromElement(element: SVGElement, options): ILine;
        fromObject(object): ILine;
        prototype: any;
        new (points: number[], objObjects?: IObjectOptions): ILine;
    }

    declare var Intersection: {
        intersectLineLine(a1, a2, b1, b2);
        intersectLinePolygon(a1, a2, points);
        intersectPolygonPolygon(points1, points2);
        intersectPolygonRectangle(points, r1, r2);
    }

    declare var Path: {
        fromElement(element: SVGElement, options): IPath;
        fromObject(object): IPath;
        new (): IPath;
    }

    declare var PathGroup: {
        fromObject(object): IPathGroup;
        new (): IPathGroup;
        prototype: any;
    }

    declare var Point: {
        new (x, y): IPoint;
        prototype: any;
    }

    declare var Object: {
        prototype: any;
    }

    declare var Polygon: {
        fromObject(object): IPolygon;
        fromElement(element: SVGElement, options): IPolygon;
        new (): IPolygon;
        prototype: any;
    }

    declare var Polyline: {
        fromObject(object): IPolyline;
        fromElement(element: SVGElement, options): IPolyline;
        new (): IPolyline;
        prototype: any;
    }

    declare var Text: {
        new (text: string, options?: ITextOptions): IText;
    }

    declare var Image: {
        fromURL(url: string): IImage;
        fromURL(url: string, callback: (image: IImage) => any): IImage;
        fromURL(url: string, callback: (image: IImage) => any, objObjects: IObjectOptions): IImage;
        prototype: any;

        filters: 
        {
            Grayscale: {
                new (): IGrayscaleFilter;
            };
            Brightness: {
                new (options?: { brightness: number; }): IBrightnessFilter;
            };
            RemoveWhite: {
                new (options?: {
                    threshold?: string; // TODO: Check this
                    distance?: string; // TODO: Check this
            }): IRemoveWhiteFilter;
            };
            Invert: {
                new (): IInvertFilter;
            };
            Sepia: {
                new (): ISepiaFilter;
            };
            Sepia2: {
                new (): ISepia2Filter;
            };
            Noise: {
                new (options?: {
                        noise?: number;
            }): INoiseFilter;
            };
            GradientTransparency: {
                new (options?: {
                        threshold?: number;
            }): IGradientTransparencyFilter;
            };
            Pixelate: {
                new (options?: {
                        color?: any;
            }): IPixelateFilter;
            };
            Convolute: {
                    new (options?: {
                        matrix: any;
            }): IConvoluteFilter;
            };
        };

    }

    declare var util: {
        addClass(element: HTMLElement, className: string);
        addListener(element, eventName: string, handler);
        animate(options: {
            onChange?: (value: number) => void;
            onComplete?: () => void;
            startValue?: number;
            endValue?: number;
            byValue?: number;
            easing?: (currentTime, startValue, byValue, duration) => number;
            duration?: number;
        });
        createClass(parent, properties);
        degreesToRadians(degrees: number): number;
        falseFunction(): () => bool;
        getById(id: HTMLElement): HTMLElement;
        getById(id: string): HTMLElement;
        getElementOffset(element): { left: number; top: number; };
        getPointer(event: Event);
        getRandomInt(min: number, max: number);
        getScript(url: string, callback);
        groupSVGElements(elements: any[], options, path?: string);
        loadImage(url, callback, context);
        makeElement(tagName: string, attributes);
        makeElementSelectable(element: HTMLElement);
        makeElementUnselectable(element: HTMLElement);
        populateWithProperties(source, destination, properties): any[];
        radiansToDegrees(radians: number): number;
        removeFromArray(array: any[], value);
        removeListener(element: HTMLElement, eventName, handler);
        request(url, options);
        requestAnimFrame(callback, element);
        setStyle(element: HTMLElement, styles);
        toArray(arrayLike): any[];
        toFixed(number, fractionDigits);
        wrapElement(element: HTMLElement, wrapper, attributes);
    }
};

