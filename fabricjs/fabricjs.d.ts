// Type definitions for FabricJS
// Project: http://fabricjs.com/
// Definitions by: Oliver Klemencic <https://github.com/oklemencic/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module fabric {

    function createCanvasForNode(width: number, height: number): ICanvas;
    function getCSSRules(doc: SVGElement);
    function getGradientDefs(doc: SVGElement);
    function loadSVGFromString(text: string, callback: (results: IObject[], options) => void , reviver?: (el, obj) => void );
    function loadSVGFromURL(url, callback: (results: IObject[], options) => void , reviver?: (el, obj) => void );
    function log(values);
    function parseAttributes(element, attributes: any[]): any;
    function parseElements(elements: any[], callback, options, reviver);
    function parsePointsAttribute(points: string): any[];
    function parseStyleAttribute(element: SVGElement);
    function parseSVGDocument(doc: SVGElement, callback: (results, options) => void , reviver?: (el, obj) => void );
    function parseTransformAttribute(attributeValue: string);
    function warn(values);

    var isLikelyNode: boolean;
    var isTouchSupported: boolean;

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
        flipX?: boolean;
        flipY?: boolean;
        hasBorders?: boolean;
        hasControls?: boolean;
        hasRotatingPoint?: boolean;
        height?: number;
        includeDefaultValues?: boolean;
        left?: number;
        lockMovementX?: boolean;
        lockMovementY?: boolean;
        lockScalingX?: boolean;
        lockScalingY?: boolean;
        lockUniScaling?: boolean;
        lockRotation?: boolean;
        opacity?: number;
        originX?: string;
        originY?: string;
        overlayFill?: string;
        padding?: number;
        perPixelTargetFind?: boolean;
        rotatingPointOffset?: number;
        scaleX?: number;
        scaleY?: number;
        selectable?: boolean;
        stateProperties?: any[];
        stroke?: string;
        strokeDashArray?: any[];
        strokeWidth?: number;
        top?: number;
        transformMatrix?: any[];
        transparentCorners?: boolean;
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
        initialize(options: any);
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

        initialize(options: any);
        initialize(text: string, options: any): IText;
        toString(): string;
        render(ctx: CanvasRenderingContext2D, noTransform: boolean);
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
        render(ctx: CanvasRenderingContext2D, noTransform: boolean);
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
        lockMovementX: boolean;
        lockMovementY: boolean;
        lockScalingX: boolean;
        lockScalingY: boolean;
        lockScaling: boolean;
        lockUniScaling: boolean;
        lockRotation: boolean;

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

        flipX: boolean;
        getFlipX(): boolean;
        setFlipX(value: boolean): IObject;

        flipY: boolean;
        getFlipY(): boolean;
        setFlipY(value: boolean): IObject;

        hasBorders: boolean;

        hasControls: boolean;
        hasRotatingPoint: boolean;
        
        height: number;
        getHeight(): number;
        setHeight(value: number): IObject;

        includeDefaultValues: boolean;
        
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
        perPixelTargetFind: boolean;
        rotatingPointOffset: number;
        
        scaleX: number;
        getScaleX(): number;
        setScaleX(value: number): IObject;

        scaleY: number;
        getScaleY(): number;
        setScaleY(value: number): IObject;

        selectable: boolean;
        stateProperties: any[];
        stroke: string;
        strokeDashArray: any[];
        strokeWidth: number;
        
        top: number;
        getTop(): number;
        setTop(value: number): IObject;

        transformMatrix: any[];
        transparentCorners: boolean;
        type: string;
        
        width: number;
        getWidth(): number;
        setWidth(value: number): IObject;

        // methods
        bringForward(intersecting?: boolean): IObject;
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
        getBoundingRect(): {left:number; top:number; width:number; height:number};
        getBoundingRectHeight(): number;
        getBoundingRectWidth(): number;
        getSvgStyles(): string;
        getSvgTransform(): string;
        hasStateChanged(): boolean;
        initialize(options: any);
        intersectsWithObject(other: IObject): boolean;
        intersectsWithRect(selectionTL: any, selectionBR: any): boolean;
        isActive(): boolean;
        isContainedWithinObject(other: IObject): boolean;
        isContainedWithinRect(selectionTL: any, selectionBR: any): boolean;
        isType(type: string): boolean;
        remove(): IObject;
        render(ctx: CanvasRenderingContext2D, noTransform: boolean);
        rotate(value: number): IObject;
        saveState(): IObject;
        scale(value: number): IObject;
        scaleToHeight(value: number): IObject;
        scaleToWidth(value: number): IObject;
        sendBackwards(intersecting?: boolean): IObject;
        sendToBack(): IObject;

        set (properties: IObjectOptions): IObject;
        set (name: string, value: any): IObject;
        setActive(active: boolean): IObject;
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
        contains(object): boolean;
        containsPoint(point): boolean;
        destroy(): IGroup;
        getObjects(): IObject[];
        hasMoved(): boolean;
        initialize(options: any);
        initialize(objects, options): any;
        item(index): IObject;
        remove(object?): IGroup;
        removeWithUpdate(object): IGroup;
        render(ctx, noTransform): void;
        saveCoords(): IGroup;
        setObjectsCoords(): IGroup;
        size(): number;
        toGrayscale(): IGroup;
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
        initialize(options: any);
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
        clone(callback?, propertiesToInclude?): IObject;
        clone(propertiesToInclude, callback);
        complexity(): number;
        getElement(): HTMLImageElement;
        getOriginalSize(): { width: number; height: number; };
        getSrc(): string;
        initialize(options: any);
        initialize(element: string, options: any);
        initialize(element: HTMLImageElement, options: any);
        render(ctx: CanvasRenderingContext2D, noTransform: boolean);
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
        initialize(options: any);
        initialize(path, options);
        render(ctx: CanvasRenderingContext2D, noTransform: boolean);
        toDatalessObject(propertiesToInclude): any;
        toObject(propertiesToInclude): any;
        tostring(): string;
        toSVG(): string;
    }

    export interface IPolygon extends IObject {
        complexity(): number;
        initialize(options: any);
        initialize(points, options);
        toObject(propertiesToInclude): any;
        toSVG(): string;
    }

    export interface IPolyline extends IObject {
        complexity(): number;
        initialize(options: any);
        initialize(points, options);
        toObject(propertiesToInclude): any;
        toSVG(): string;
    }

    export interface IPathGroup extends IObject {
        complexity(): number;
        initialize(options: any);
        initialize(paths, options);
        isSameColor(): boolean;
        render(ctx: CanvasRenderingContext2D);
        toDatalessObject(propertiesToInclude): any;
        toGrayscale(): IPathGroup;
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
        controlsAboveOverlay: boolean;
        includeDefaultValues: boolean;
        overlayImage: string;
        overlayImageLeft: number;
        overlayImageTop: number;
        renderOnAddition: boolean;
        stateful: boolean;

        // static 
        EMPTY_JSON: string;
        supports(methodName: string): boolean;

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
        getObjects(): IObject[];
        getWidth(): number;
        insertAt(object: IObject, index: number, nonSplicing: boolean): ICanvas;
        isEmpty(): boolean;
        item(index: number): IObject;
        onBeforeScaleRotate(target: IObject);
        remove(object: IObject): IObject;
        renderAll(allOnTop?: boolean): ICanvas;
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
        interactive: boolean;
        moveCursor: string;
        perPixelTargetFind: boolean;
        rotationCursor: string;
        selection: boolean;
        selectionBorderColor: string;
        selectionColor: string;
        selectionDashArray: number[];
        selectionLineWidth: number;
        targetFindTolerance: number;

        // methods
        containsPoint(e: Event, target: IObject): boolean;
        deactivateAll(): ICanvas;
        deactivateAllWithDispatch(): ICanvas;
        discardActiveGroup(): ICanvas;
        discardActiveObject(): ICanvas;
        drawDashedLine(ctx: CanvasRenderingContext2D, x: number, y: number, x2: number, y2: number, dashArray: number[]): ICanvas;
        findTarget(e: MouseEvent, skipGroup: boolean): ICanvas;
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

    export interface IPattern {
        (options: IPatternOptions): IPattern;

        initialise(options: IPatternOptions): IPattern;

        toLive(ctx: CanvasRenderingContext2D): IPattern;
        toObject(): any;
        toSVG(): string;

        offsetX: number;
        offsetY: number;
        repeat: string;
        source: any;
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
        interactive?: boolean;
        moveCursor?: string;
        perPixelTargetFind?: boolean;
        rotationCursor?: string;
        selection?: boolean;
        selectionBorderColor?: string;
        selectionColor?: string;
        selectionDashArray?: number[];
        selectionLineWidth?: number;
        targetFindTolerance?: number;

        backgroundColor?: string;
        backgroundImage?: string;
        backgroundImageOpacity?: number;
        backgroundImageStretch?: number;
        controlsAboveOverlay?: boolean;
        includeDefaultValues?: boolean;
        overlayImage?: string;
        overlayImageLeft?: number;
        overlayImageTop?: number;
        renderOnAddition?: boolean;
        stateful?: boolean;
    }

    export interface IPatternOptions {
        source: any;
        offsetX: number;
        offsetY: number;
        repeat: string;
    }

    export interface IRectOptions extends IObjectOptions {
        x?: number; 
        y?: number;
        rx?: number;
        ry?: number;
    }

    export interface ITriangleOptions extends IObjectOptions {
    }

    var Rect: {
        fromElement(element: SVGElement, options: IRectOptions): IRect;
        fromObject(object): IRect;
        new (options?: IRectOptions): IRect;
        prototype: any;
    }

    var Triangle: {
        new (options?: ITriangleOptions): ITriangle;
    }

    var Canvas: {
        new (element: HTMLCanvasElement, options?: ICanvasOptions): ICanvas;
        new (element: string, options?: ICanvasOptions): ICanvas;

        EMPTY_JSON: string;
        supports(methodName: string): boolean;
        prototype: any;
    }

    var StaticCanvas: {
        new (element: HTMLCanvasElement, options?: ICanvasOptions): ICanvas;
        new (element: string, options?: ICanvasOptions): ICanvas;

        EMPTY_JSON: string;
        supports(methodName: string): boolean;
        prototype: any;
    }

    var Pattern: {
        new (options: IPatternOptions): IPattern;

        prototype: any;
    }

    var Circle: {
        ATTRIBUTE_NAMES: string[];
        fromElement(element: SVGElement, options: ICircleOptions): ICircle;
        fromObject(object): ICircle;
        new (options?: ICircleOptions): ICircle;
        prototype: any;
    }

    var Group: {
        new (items?: any[], options?: IObjectOptions): IGroup;
    }

    var Line: {
        ATTRIBUTE_NAMES: string[];
        fromElement(element: SVGElement, options): ILine;
        fromObject(object): ILine;
        prototype: any;
        new (points: number[], objObjects?: IObjectOptions): ILine;
    }

    var Intersection: {
        intersectLineLine(a1, a2, b1, b2);
        intersectLinePolygon(a1, a2, points);
        intersectPolygonPolygon(points1, points2);
        intersectPolygonRectangle(points, r1, r2);
    }

    var Path: {
        fromElement(element: SVGElement, options): IPath;
        fromObject(object): IPath;
        new (): IPath;
    }

    var PathGroup: {
        fromObject(object): IPathGroup;
        new (): IPathGroup;
        prototype: any;
    }

    var Point: {
        new (x, y): IPoint;
        prototype: any;
    }

    var Object: {
        prototype: any;
    }

    var Polygon: {
        fromObject(object): IPolygon;
        fromElement(element: SVGElement, options): IPolygon;
        new (): IPolygon;
        prototype: any;
    }

    var Polyline: {
        fromObject(object): IPolyline;
        fromElement(element: SVGElement, options): IPolyline;
        new (): IPolyline;
        prototype: any;
    }

    var Text: {
        new (text: string, options?: ITextOptions): IText;
    }

    var Image: {
        fromURL(url: string): IImage;
        fromURL(url: string, callback: (image: IImage) => any): IImage;
        fromURL(url: string, callback: (image: IImage) => any, objObjects: IObjectOptions): IImage;
        new (element: HTMLImageElement, objObjects: IObjectOptions): IImage;
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

    var util: {
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
        falseFunction(): () => boolean;
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
}
