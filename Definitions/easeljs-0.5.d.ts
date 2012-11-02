// Type definitions for EaselJS 0.5
// Project: http://www.createjs.com/#!/EaselJS
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface AlphaMapFilter extends Filter {
    alphaMap: Image;

    constructor (alphaMap: Image);
    clone(): AlphaMapFilter;
}

interface AlphaMaskFilter extends Filter {
    mask: Image;

    constructor (mask: Image);
    clone(): AlphaMaskFilter;
}

interface Bitmap extends DisplayObject {
    image?: any;
    snapToPixel?: bool;
    sourceRect?: Rectangle;

    constructor (imageOrUri: any);
    cache(): void;
    clone(): Bitmap;
    toString(): string;
    uncache(): void;
    updateCache(): void;
}

interface BitmapAnimation extends DisplayObject {
    currentAnimation?: string;
    currentAnimationFrame?: number;
    currentFrame?: number;
    offset?: number;
    onAnimationEnd?: Function;
    paused?: bool;
    snapToPixel?: bool;
    spriteSheet?: SpriteSheet;

    constructor (spriteSheet: SpriteSheet);
    advance(): void;
    cache(): void;
    clone(): Point;
    gotoAndPlay(frame: number): void;
    gotoAndPlay(animation: string): void;
    gotoAndStop(frame: number): void;
    gotoAndStop(animation: string): void;
    play(): void;
    stop(): void;
    toString(): string;
    uncache(): void;
    updateCache(): void;
}

interface BoxBlurFilter extends Filter {
    blurX: number;
    blurY: number;
    quality: number;

    constructor (blurX: number, blurY: number, quality: number);
    clone(): BoxBlurFilter;
}

interface ColorFilter extends Filter {
    alphaOffset: number;
    blueMultiplier: number;
    blueOffset: number;
    greenMultiplier: number;
    greenOffset: number;
    redMultiplier: number;
    redOffset: number;

    constructor (redMultiplier: number, greenMultiplier: number, blueMultiplier: number, alphaMultiplier: number, redOffset: number, greenOffset: number, blueOffset: number, alphaOffset: number);
    clone(): ColorFilter;
}

interface ColorMatrix {
    DELTA_INDEX: number[];
    IDENTITY_MATRIX: number[];
    LENGTH: number;

    constructor (brightness: number, contrast: number, saturation: number, hue: number);
    adjustBrightness(value: number): ColorMatrix;
    adjustColor(brightness: number, contrast: number, saturation: number, hue: number): ColorMatrix;
    adjustContrast(value: number): ColorMatrix;
    adjustSaturation(value: number): ColorMatrix;
    clone(): ColorMatrix;
    concat(matrix: number[]): ColorMatrix;
    copyMatrix(matrix: number[]): ColorMatrix;
    reset(): ColorMatrix;
    toArray(): number[];
}

interface ColorMatrixFilter extends Filter {
    constructor (matrix: ColorMatrix);
    clone(): ColorMatrixFilter;
}

interface Command {
    exec(scope: any): void;
}

interface Container extends DisplayObject {
    children: DisplayObject[];

    constructor ();
    addChild(child: DisplayObject): DisplayObject;
    addChildAt(child: DisplayObject, index: number): DisplayObject;
    clone(recursive?: bool): Container;
    contains(child: DisplayObject): bool;
    getChildAt(index: number): DisplayObject;
    getChildIndex(child: DisplayObject): number;
    getNumChildren(): number;
    getObjectsUnderPoint(x: number, y: number): DisplayObject[];
    getObjectUnderPoint(x: number, y: number): DisplayObject;
    removeAllChildren(): void;
    removeChild(child: DisplayObject): bool;
    removeChildAt(index: number): bool;
    setChildIndex(child: DisplayObject, index: number): void;
    sortChildren(sortFunction: Function): void;
    swapChildren(child1: DisplayObject, child2: DisplayObject): void;
    swapChildrenAt(index1: number, index2: number): void;
}

interface DisplayObject {
    alpha?: number;
    cacheCanvas?: HTMLCanvasElement;
    cacheID?: number;
    compositeOperation?: string;
    filters?: Filter[];
    hitArea?: DisplayObject;
    id?: Number;
    mask?: Shape;
    mouseEnabled?: bool;
    name?: string;
    parent?: DisplayObject;
    regX?: number;
    regY?: number;
    rotation?: number;
    scaleX?: number;
    scaleY?: number;
    shadow?: Shadow;
    skewX?: number;
    skewY?: number;
    snapToPixel?: bool;
    suppressCrossDomainErrors?: bool;
    visible?: bool;
    x?: number;
    y?: number;

    cache(x: number, y: number, width: number, height: number, scale?: number): void;
    clone(): DisplayObject;
    draw(ctx: CanvasRenderingContext2D, ignoreCache?: bool): void;
    getCacheDataURL(): string;
    getConcatenatedMatrix(matrix: Matrix2D): Matrix2D;
    getMatrix(matrix: Matrix2D): Matrix2D;
    getStage(): Stage;
    globalToLocal(x: number, y: number): Point;
    hitTest(x: number, y: number): bool;
    isVisible(): bool;
    localToGlobal(x: number, y: number): Point;
    localToLocal(x: number, y: number, target: DisplayObject): Point;
    setTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX: number, regY: number): DisplayObject;
    setupContext(ctx: CanvasRenderingContext2D): void;
    toString(): string;
    uncache(): void;
    updateCache(compositeOperation: string);

    onClick?: (event: MouseEvent) =>void;
    onDoubleClick?: (event: MouseEvent) =>void;
    onMouseOut?: (event: MouseEvent) =>void;
    onMouseOver?: (event: MouseEvent) =>void;
    onPress?: (event: MouseEvent) =>void;
    onTick?: () =>void;
}

interface DOMElement extends DisplayObject {
    htmlElement: HTMLElement;

    constructor (htmlElement: HTMLElement);
    cache(): void;
    clone(): DOMElement;
}

interface Filter {
    constructor ();
    applyFilter(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, targetCtx: number, targetX: number, targetY: number): bool;
    clone(): Filter;
    getBounds(): Rectangle;
    toString(): string;
}

interface Graphics {
    BASE_64: any;
    curveTo: Function;
    drawRect: Function;
    STROKE_CAPS_MAP: string[];
    STROKE_JOINTS_MAP: string[];

    constructor ();

}

interface Matrix2D {
}

interface MouseEvent {
}

interface MovieClip extends Container {
}

interface Point {
}

interface Rectangle {
}

interface Shadow {
}

interface Shape extends DisplayObject {
}

interface SpriteSheet {
}

interface SpriteSheetBuilder {
}

interface SpriteSheetUtils {
}

interface Stage extends Container {
}

interface Text extends DisplayObject {
}

interface Ticker {
}

interface Touch {
}

interface UID {
    get(): number;
}
