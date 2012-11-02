/*
    See https://bitbucket.org/drk4/createjs_ts_definitions for updates/examples

    Copyright (c) 2012 Pedro Ferreira

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


    // rename the native MouseEvent, to avoid conflit with createjs's MouseEvent
interface NativeMouseEvent extends MouseEvent
    {

    }


/// <reference path="tweenjs-0.3.0.d.ts" />


module createjs
{ 
    // :: base classes :: //

export class DisplayObject
    { 
        // properties
    alpha: number;
    cacheCanvas: HTMLCanvasElement;
    cacheID: number;
    compositeOperation: string;
    filters: Filter[];
    hitArea: DisplayObject;
    id: number;
    mask: Shape;
    mouseEnabled: bool;
    name: string;
    parent: DisplayObject;
    regX: number;
    regY: number;
    rotation: number;
    scaleX: number;
    scaleY: number;
    shadow: Shadow;
    skewX: number;
    skewY: number;
    snapToPixel: bool;
    static suppressCrossDomainErrors: bool;
    visible: bool;
    x: number;
    y: number;

        // methods
    cache( x: number, y: number, width: number, height: number, scale?: number ): void;
    clone(): DisplayObject;
    draw( ctx: CanvasRenderingContext2D, ignoreCache: bool ): void;
    getCacheDataURL(): void;
    getConcatenatedMatrix( mtx: Matrix2D ): Matrix2D;
    getMatrix( matrix: Matrix2D ): Matrix2D;
    getStage(): Stage;
    globalToLocal( x: number, y: number ): Point;
    hitTest( x: number, y: number ): bool;
    isVisible(): bool;
    localToGlobal( x: number, y: number ): Point;
    localToLocal( x: number, y: number, target: DisplayObject ): Point;
    setTransform( x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX: number, regY: number ): DisplayObject;
    setupContext( ctx: CanvasRenderingContext2D ): void;
    toString(): string;
    uncache(): void;
    updateCache( compositeOperation: string ): void;
    
        // events
    onClick: (event: MouseEvent) => any;
    onDoubleClick: (event: MouseEvent) => any;
    onMouseOut: (event: MouseEvent) => any;
    onMouseOver: (event: MouseEvent) => any;
    onPress: (event: MouseEvent) => any;
    onTick: () => any;
    }


export class Filter 
    {
    applyFilter( ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, targetCtx?: CanvasRenderingContext2D, targetX?: number, targetY?: number ): bool;
    clone(): Filter;
    getBounds(): Rectangle;
    toString(): string;
    }

    
    // :: The rest :: //

export class AlphaMapFilter extends Filter
    {
    constructor( alphaMap: Image );    //HERE doesn't recognize Image type
    constructor( alphaMap: HTMLCanvasElement );

        // properties
    alphaMap: Image;    //HERE can be also an HTMLCanvasElement.. can't overload properties

        // methods
    applyFilter( ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, targetCtx?: CanvasRenderingContext2D, targetX?: number, targetY?: number ): bool;
    clone(): AlphaMapFilter;
    toString(): string;
    }


export class AlphaMaskFilter extends Filter
    {
    constructor( mask: Image );
    constructor( mask: HTMLCanvasElement );

        // properties
    mask: Image;    //HERE or HTMLCanvasElement

        // methods
    applyFilter( ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, targetCtx?: CanvasRenderingContext2D, targetX?: number, targetY?: number ): bool;
    clone(): AlphaMaskFilter;
    toString(): string;
    }


export class Bitmap extends DisplayObject
    {
    constructor( imageOrUrl: Image );
    constructor( imageOrUrl: HTMLCanvasElement );
    constructor( imageOrUrl: HTMLVideoElement );
    constructor( imageOrUrl: string );

        // properties
    image;  //HERE how to tell the various type possibilities?
    snapToPixel: bool;
    sourceRect: Rectangle;

        // methods
    clone(): Bitmap;
    draw( ctx: CanvasRenderingContext2D, ignoreCache: bool ): void;
    isVisible(): bool;
    toString(): string;
    uncache(): void;
    updateCache(): void;
    }


export class BitmapAnimation extends DisplayObject
    {
    constructor( spriteSheet: SpriteSheet );
    
        // properties
    currentAnimation: string;
    currentAnimationFrame: number;
    currentFrame: number;
    offset: number;
    paused: bool;
    snapToPixel: bool;
    spriteSheet: SpriteSheet;

        // methods
    advance(): void;
    cache(): void;
    clone(): BitmapAnimation;
    draw( ctx: CanvasRenderingContext2D, ignoreCache: bool ): void;
    gotoAndPlay( frameOrAnimation: string ): void;
    gotoAndPlay( frameOrAnimation: number ): void; 
    isVisible(): bool;
    play(): void;
    stop(): void;
    toString(): string;
    uncache(): void;
    updateCache(): void;

        // events
    onAnimationEnd: (reference: BitmapAnimation, animationEnded: string) => any;
    }


export class BoxBlurFilter extends Filter
    {
    constructor( blurX: number, blurY: number, quality: number );

        // properties
    blurX: number;
    blurY: number;
    quality: number;

        // methods
    applyFilter( ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, targetCtx?: CanvasRenderingContext2D, targetX?: number, targetY?: number ): bool;
    clone(): BoxBlurFilter;
    getBounds(): Rectangle;
    toString(): string;
    }


export class ColorFilter extends Filter
    {
    constructor( redMultiplier?: number, greenMultiplier?: number, blueMultiplier?: number, alphaMultiplier?: number, redOffset?: number, greenOffset?: number, blueOffset?: number, alphaOffset?: number );

        // properties
    alphaOffset: number;
    blueMultiplier: number;
    blueOffset: number;
    greenMultiplier: number;
    greenOffset: number;
    redMultiplier: number;
    redOffset: number;

        // methods
    applyFilter( ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, targetCtx?: CanvasRenderingContext2D, targetX?: number, targetY?: number ): bool;
    clone(): ColorFilter;
    toString(): string;
    }


export class ColorMatrix
    {
    constructor( brightness: number, contrast: number, saturation: number, hue: number );

        // properties
    DELTA_INDEX: number[];
    IDENTITY_MATRIX: number[];
    LENGTH: number;

        // methods
    adjustBrightness( value: number ): ColorMatrix;
    adjustColor( brightness: number, contrast: number, saturation: number, hue: number ): ColorMatrix;
    adjustContrast( value: number ): ColorMatrix;
    adjustHue( value: number ): ColorMatrix;
    adjustSaturation( value: number ): ColorMatrix;
    clone(): ColorMatrix;
    concat( matrix: ColorMatrix[] ): ColorMatrix;
    copyMatrix( matrix: ColorMatrix[] ): ColorMatrix;
    reset(): ColorMatrix;
    toArray(): number[];
    }

     
export class ColorMatrixFilter extends Filter
    {
    constructor( matrix: number[] );

        // methods
    applyFilter( ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, targetCtx?: CanvasRenderingContext2D, targetX?: number, targetY?: number ): bool;
    clone(): ColorMatrixFilter;
    toString(): string;
    }


export class Command    //HERE is this supposed to be used? (or just internal of the lib)
    {
    constructor( f, params, path );
        
        // methods
    exec( scope ): void;
    }


export class Container extends DisplayObject
    {
        // properties
    children: DisplayObject[];

        // methods
    addChild( ...child: DisplayObject[] ): DisplayObject;
    addChildAt( ...child: DisplayObject[], index: number ): DisplayObject;  //HERE typescript doesnt like having an argument after the variable length argument
    clone( recursive?: bool ): Container;
    contains( child: DisplayObject ): bool;
    draw( ctx: CanvasRenderingContext2D, ignoreCache: bool ): void;
    getChildAt( index: number ): DisplayObject;
    getChildIndex( child: DisplayObject ): number;
    getNumChildren(): number;
    getObjectsUnderPoint( x, number, y: number ): DisplayObject[];
    getObjectUnderPoint( x: number, y: number ): DisplayObject;
    hitTest( x: number, y: number ): bool;
    isVisible(): bool;
    removeAllChildren(): void;
    removeChild( ...child: DisplayObject[] ): bool;
    removeChildAt( ...index: number[] ): bool;
    setChildIndex( child: DisplayObject, index: number ): void;
    sortChildren( sortFunction: (a: DisplayObject, b: DisplayObject) => number ): void;
    swapChildren( child1: DisplayObject, child2: DisplayObject ): void;
    swapChildrenAt( index1: number, index2: number ): void;
    toString(): string;
    }


export class DOMElement extends DisplayObject
    {
    constructor( htmlElement: HTMLElement );

        // properties
    htmlElement: HTMLElement;

        // methods
    cache(): void;
    clone(): DOMElement;
    draw( ctx: CanvasRenderingContext2D, ignoreCache: bool ): void;
    globalToLocal(): void;
    isVisible(): bool;
    localToGlobal(): void;
    localToLocal(): void;
    toString(): string;
    uncache(): void;
    updateCache(): void;
    }


export class Graphics 
    {
        // properties
    BASE_64: Object;
    curveTo( cpx: number, cpy: number, x: number, y: number ): Graphics;    // same as quadraticCurveTo()
    drawRect( x: number, y: number, width: number, height: number ): Graphics;   // same as rect()
    STROKE_CAPS_MAP: string[];
    STROKE_JOINTS_MAP: string[];

        // methods
    arc( x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: bool ): Graphics;
    arcTo( x1: number, y1: number, x2: number, y2: number, radius: number ): Graphics;
    beginBitmapFill( image: Object, repetition?: string ): Graphics;
    beginBitmapStroke( image: Object, repetition?: string ): Graphics;
    beginFill( color: string ): Graphics;
    beginLinearGradientFill( colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number ): Graphics;
    beginLinearGradientStroke( colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number ): Graphics;
    beginRadialGradientFill( colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number ): Graphics;
    beginRadialGradientStroke( colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number ): Graphics;
    beginStroke( color: string ): Graphics;
    bezierCurveTo( cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number ): Graphics;
    clear(): Graphics;
    clone(): Graphics;
    closePath(): Graphics;
    decodePath( str: string ): Graphics;
    draw( ctx: CanvasRenderingContext2D ): void;
    drawAsPath( ctx: CanvasRenderingContext2D ): void;
    drawCircle( x: number, y: number, radius: number ): Graphics;
    drawEllipse( x: number, y: number, width: number, height: number ): Graphics;
    drawPolyStar( x: number, y: number, radius: number, sides: number, pointSize: number, angle: number ): Graphics;
    drawRoundRect( x: number, y: number, width: number, height: number, radius: number ): Graphics;
    drawRoundRectComplex( x: number, y: number, width: number, height: number, radiusTL: number, radiusTR: number, radiusBR: number, radisBL: number ): Graphics;
    endFill(): Graphics;
    endStroke(): Graphics;
    static getHSL( hue: number, saturation: number, lightness: number, alpha?: number ): string;
    static getRGB( red: number, green: number, blue: number, alpha?: number ): string;
    lineTo( x: number, y: number ): Graphics;
    moveTo( x: number, y: number ): Graphics;
    quadraticCurveTo( cpx: number, cpy: number, x: number, y: number ): Graphics;
    rect( x: number, y: number, width: number, height: number ): Graphics;
    setStrokeStyle( thickness: number, caps?: string, joints?: string, miter?: number ): Graphics;  // caps and joints can be a string or number
    setStrokeStyle( thickness: number, caps?: number, joints?: string, miter?: number ): Graphics;
    setStrokeStyle( thickness: number, caps?: string, joints?: number, miter?: number ): Graphics;
    setStrokeStyle( thickness: number, caps?: number, joints?: number, miter?: number ): Graphics;
    toString(): string;
    }


export class Matrix2D
    {
    constructor( a: number, b: number, c: number, d: number, tx: number, ty: number );

        // properties
    a: number;
    alpha: number;
    atx: number;
    b: number;
    c: number;
    compositeOperation: string;
    d: number;
    static DEG_TO_RAD: number;
    static identity: Matrix2D;
    shadow: Shadow;
    ty: number;

        // methods
    append( a: number, b: number, c: number, d: number, tx: number, ty: number ): Matrix2D;
    appendMatrix( matrix: Matrix2D ): Matrix2D;
    appendProperties( a: number, b: number, c: number, d: number, tx: number, ty: number, alpha: number, shadow: Shadow, compositeOperation: string ): Matrix2D;
    appendTransform( x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX?: number, regY?: number ): Matrix2D;
    clone(): Matrix2D;
    decompose( target: Object ): Matrix2D;
    identity(): Matrix2D;
    invert(): Matrix2D;
    isIdentity(): bool;
    prepend( a: number, b: number, c: number, d: number, tx: number, ty: number ): Matrix2D;
    prependMatrix( matrix: Matrix2D ): Matrix2D;
    prependProperties( alpha: number, shadow: Shadow, compositeOperation: string ): Matrix2D;
    prependTransform( x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX?: number, regY?: number ): Matrix2D;
    rotate( angle: number ): Matrix2D;
    scale( x: number, y: number ): Matrix2D;
    skew( skewX: number, skewY: number ): Matrix2D;
    toString(): string;
    translate( x: number, y: number ): Matrix2D;
    }

    
export class MouseEvent 
    {
    constructor( type: string, stageX: number, stageY: number, target: DisplayObject, nativeEvent: NativeMouseEvent, pointerID: number, primary: bool, rawX: number, rawY: number );
    
        // properties
    nativeEvent: NativeMouseEvent;
    pointerID: number;
    primaryPointer: bool;
    rawX: number;
    rawY: number;
    stageX: number;
    stageY: number;
    target: DisplayObject;
    type: string;

        // methods
    clone(): MouseEvent;
    toString(): string;

        // events
    onMouseMove: ( event: MouseEvent ) => any;
    onMouseUp: ( event: MouseEvent ) => any;
    }


export class MovieClip extends Container
    {
    constructor( mode: string, startPosition: number, loop: bool, labels: Object );

        // properties
    actionsEnabled: bool;
    static INDEPENDENT: string;
    loop: bool;
    mode: string;
    paused: bool;
    static SINGLE_FRAME: string;
    startPosition: number;
    static SYNCHED: string;
    timeline: Timeline; //HERE requires tweenJS

        // methods
    clone(): void;
    draw( ctx: CanvasRenderingContext2D, ignoreCache: bool ): void;
    gotoAndPlay( positionOrLabel: string ): void;
    gotoAndPlay( positionOrLabel: number ): void;
    gotoAndStop( positionOrLabel: string ): void;
    gotoAndStop( positionOrLabel: number ): void;
    isVisible(): bool;
    play(): void;
    stop(): void;
    toString(): string;
    }

    
export class Point
    {
    constructor( x: number, y: number );

        // properties
    x: number;
    y: number;

        // methods
    clone(): Point;
    toString(): string;
    }


export class Rectangle
    {
    constructor( x: number, y: number, width: number, height: number );

        // properties
    x: number;
    y: number;
    width: number;
    height: number;

        // methods
    clone(): Rectangle;
    toString(): string;
    }


export class Shadow 
    {
    constructor( color: string, offsetX: number, offsetY: number, blur: number );

        // properties
    blur: number;
    color: string;
    static identity: Shadow;
    offsetX: number;
    offsetY: number;

        // methods
    clone(): Shadow;
    toString(): string;
    }


export class Shape extends DisplayObject
    {
    constructor( graphics?: Graphics );

        // properties
    graphics: Graphics;

        // methods
    clone(recursive: bool): Shape;
    draw( ctx, CanvasRenderingContext2D, ignoreCache: bool ): void;
    isVisible(): bool;
    toString(): string;
    }


    // what is returned from .getAnimation()
interface SpriteSheetAnimation
    {
    frames: number[];
    frequency: number;
    name: string;
    next: string;
    }

export class SpriteSheet
    {
    constructor( data: Object );

        // properties
    complete: bool;

        // methods
    clone(): SpriteSheet;
    getAnimation( name: string ): SpriteSheetAnimation;
    getAnimations(): string[];
    getFrame( frameIndex: number ): Object;
    getNumFrames( animation: string ): number;
    toString(): string;

        // events
    onComplete: () => any;
    }


export class SpriteSheetBuilder
    {
        // properties
    defaultScale: number;
    maxWidth: number;
    maxHeight: number;
    padding: number;
    spriteSheet: SpriteSheet;

        // methods
    addFrame( source: DisplayObject, sourceRect?: Rectangle, scale?: number, setupFunction?: () => any, setupParams?: any[], setupScope?: Object ): number; //HERE returns number or null
    addMovieClip( source: MovieClip, sourceRect?: Rectangle, scale?: number ): void;
    build(): void;
    buildAsync( callback?: ( reference: SpriteSheetBuilder ) => any, timeSlice?: number ): void;
    clone(): SpriteSheetBuilder;
    stopAsync(): void;
    toString(): string;
    }


export class SpriteSheetUtils
    {
    static addFlippedFrames(spriteSheet: SpriteSheet, horizontal?: bool, vertical?: bool, both?: bool ): void;
    static extractFrame( spriteSheet: Image, frame: number ): Image;   //HERE
    static flip( spriteSheet: Image, flipData: Object ): void;
    static mergeAlpha( rgbImage: Image, alphaImage: Image, canvas?: HTMLCanvasElement ): HTMLCanvasElement;
    }


export class Stage extends Container
    {
    constructor (canvas: HTMLCanvasElement);
        
        // properties
    autoClear: bool;
    canvas: HTMLCanvasElement;
    mouseInBounds: bool;
    mouseX: number;
    mouseY: number;
    snapToPixelEnabled: bool;
    tickOnUpdate: bool;
    
        // methods
    clear(): void;
    clone(): Stage;
    enableMouseOver( frequency: number ): void;
    toDataURL( backgroundColor: string, mimeType: string ): string;
    toString(): string;
    update(): void;

        // events
    onMouseDown: ( event: MouseEvent ) => any;
    onMouseMove: ( event: MouseEvent ) => any;
    onMouseUp: ( event: MouseEvent ) => any;
    }


export class Text extends DisplayObject
    {
    constructor(text?: string, font?: string, color?: string);

        // properties
    color: string;
    font: string;
    lineHeight: number;
    lineWidth: number;
    maxWidth: number;
    outline: bool;
    text: string;
    textAlign: string;
    textBaseline: string;

        // methods
    clone(): Text;
    draw(ctx: CanvasRenderingContext2D, ignoreCache: bool): void;
    getMeasuredHeight(): number;
    getMeasuredLineHeight(): number;
    getMeasuredWidth(): number;
    isVisible(): bool;
    toString(): string;
    }


export class Ticker
    {
        // properties
    static useRAF: bool;

        // methods
    static addListener( o:Object, pauseable?:bool ): void;
    static getFPS(): number;
    static getInterval(): number;
    static getMeasuredFPS( ticks?: number ): number;
    static getPaused(): bool;
    static getTicks( pauseable?: bool ): number;
    static getTime( pauseable: bool ): number;
    static init(): void;
    static removeAllListeners(): void;
    static removeListener( o: Object ): void;
    static setFPS( value: number ): void;
    static setInterval( interval: number ): void;
    static setPaused( value: bool ): void;

        // events
    tick: ( timeElapsed: number ) => any;
    }


export class Touch
    {
        // methods
    static disable( stage: Stage ): void;
    static enable( stage: Stage, singleTouch?: bool, allowDefault?: bool ): bool;
    static isSupported(): bool;
    }


export class UID
    {
        // methods
    static get(): number;
    }
}



