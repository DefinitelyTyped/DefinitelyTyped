// Type definitions for EaselJS 0.6
// Project: http://www.createjs.com/#!/EaselJS
// Definitions by: Pedro Ferreira <https://bitbucket.org/drk4>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
    Copyright (c) 2012 Pedro Ferreira
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


/// <reference path="../tweenjs/tweenjs.d.ts" />

// rename the native MouseEvent, to avoid conflit with createjs's MouseEvent
interface NativeMouseEvent extends MouseEvent {

}

module createjs {
    // :: base classes :: //

    export class DisplayObject {
        // properties
        alpha: number;
        cacheCanvas: HTMLCanvasElement;
        cacheID: number;
        compositeOperation: string;
        cursor: string;
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
        cache(x: number, y: number, width: number, height: number, scale?: number): void;
        clone(): DisplayObject;
        draw(ctx: CanvasRenderingContext2D, ignoreCache?: bool): void;
        getCacheDataURL(): string;
        getChildByName(name: string): DisplayObject;
        getConcatenatedMatrix(mtx: Matrix2D): Matrix2D;
        getMatrix(matrix: Matrix2D): Matrix2D;
        getStage(): Stage;
        globalToLocal(x: number, y: number): Point;
        hitTest(x: number, y: number): bool;
        isVisible(): bool;
        localToGlobal(x: number, y: number): Point;
        localToLocal(x: number, y: number, target: DisplayObject): Point;
        set(props: Object): DisplayObject;
        setTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX: number, regY: number): DisplayObject;
        setupContext(ctx: CanvasRenderingContext2D): void;
        toString(): string;
        uncache(): void;
        updateCache(compositeOperation: string): void;

        // events
        click: (event: MouseEvent) => any;
        dblClick: (event: MouseEvent) => any;
        mouseout: (event: MouseEvent) => any;
        mouseover: (event: MouseEvent) => any;
        mousedown: (event: MouseEvent) => any;
        tick: () => any;

        // EventDispatcher mixins
        addEventListener(type: string, listener: (eventObj: Object) => bool): Function;
        addEventListener(type: string, listener: (eventObj: Object) => void): Function;
        addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => bool; }): Object;
        addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }): Object;
        removeEventListener(type: string, listener: (eventObj: Object) => bool): void;
        removeEventListener(type: string, listener: (eventObj: Object) => void): void;
        removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => bool; }): void;
        removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }): void;
        removeAllEventListeners(type: string): void;
        dispatchEvent(eventObj: string, target: Object): bool;
        dispatchEvent(eventObj: Object, target: Object): bool;
        hasEventListener(type: string): bool;
    }


    export class Filter {
        constructor ();
        applyFilter(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, targetCtx?: CanvasRenderingContext2D, targetX?: number, targetY?: number): bool;
        clone(): Filter;
        getBounds(): Rectangle;
        toString(): string;
    }


    // :: The rest :: //

    export class AlphaMapFilter extends Filter {
        // properties
        alphaMap: any;    //Image or HTMLCanvasElement

        // methods
        constructor (alphaMap: HTMLImageElement);
        constructor (alphaMap: HTMLCanvasElement);
        clone(): AlphaMapFilter;
    }


    export class AlphaMaskFilter extends Filter {
        // properties
        mask: any;    // HTMLImageElement or HTMLCanvasElement

        // methods
        constructor (mask: HTMLImageElement);
        constructor (mask: HTMLCanvasElement);
        clone(): AlphaMaskFilter;
    }


    export class Bitmap extends DisplayObject {
        // properties
        image: any;  // HTMLImageElement or HTMLCanvasElement or HTMLVideoElement
        snapToPixel: bool;
        sourceRect: Rectangle;

        // methods
        constructor (imageOrUrl: HTMLImageElement);
        constructor (imageOrUrl: HTMLCanvasElement);
        constructor (imageOrUrl: HTMLVideoElement);
        constructor (imageOrUrl: string);

        clone(): Bitmap;
        updateCache(): void;
    }


    export class BitmapAnimation extends DisplayObject {
        // properties
        currentAnimation: string;
        currentAnimationFrame: number;
        currentFrame: number;
        offset: number;
        paused: bool;
        snapToPixel: bool;
        spriteSheet: SpriteSheet;

        // methods
        constructor (spriteSheet: SpriteSheet);
        advance(): void;
        cache(): void;
        clone(): BitmapAnimation;
        getBounds(): Rectangle;
        gotoAndPlay(frameOrAnimation: string): void;
        gotoAndPlay(frameOrAnimation: number): void;
        play(): void;
        stop(): void;
        updateCache(): void;

        // events
        onAnimationEnd: (event: Object) => any;
    }

    export class ButtonHelper {
        // properties
        target: Object;
        overLabel: string;
        outLabel: string;
        downLabel: string;
        play: bool;

        // methods
        constructor(target: MovieClip, outLabel: string, overLabel: string, downLabel: string, play: bool, hitArea: DisplayObject, hitLabel: string);
        constructor(target: BitmapAnimation, outLabel: string, overLabel: string, downLabel: string, play: bool, hitArea: DisplayObject, hitLabel: string);
        setEnabled(value: bool);
        toString(): string;
    }

    export class BoxBlurFilter extends Filter {
        // properties
        blurX: number;
        blurY: number;
        quality: number;

        // methods
        constructor (blurX: number, blurY: number, quality: number);
        clone(): BoxBlurFilter;
    }


    export class ColorFilter extends Filter {
        // properties
        alphaOffset: number;
        blueMultiplier: number;
        blueOffset: number;
        greenMultiplier: number;
        greenOffset: number;
        redMultiplier: number;
        redOffset: number;

        // methods
        constructor (redMultiplier?: number, greenMultiplier?: number, blueMultiplier?: number, alphaMultiplier?: number, redOffset?: number, greenOffset?: number, blueOffset?: number, alphaOffset?: number);
        clone(): ColorFilter;
    }


    export class ColorMatrix {
        // properties
        DELTA_INDEX: number[];
        IDENTITY_MATRIX: number[];
        LENGTH: number;

        // methods
        constructor (brightness: number, contrast: number, saturation: number, hue: number);
        adjustBrightness(value: number): ColorMatrix;
        adjustColor(brightness: number, contrast: number, saturation: number, hue: number): ColorMatrix;
        adjustContrast(value: number): ColorMatrix;
        adjustHue(value: number): ColorMatrix;
        adjustSaturation(value: number): ColorMatrix;
        clone(): ColorMatrix;
        concat(matrix: ColorMatrix[]): ColorMatrix;
        copyMatrix(matrix: ColorMatrix[]): ColorMatrix;
        reset(): ColorMatrix;
        toArray(): number[];
    }


    export class ColorMatrixFilter extends Filter {
        // methods
        constructor (matrix: number[]);
        clone(): ColorMatrixFilter;
    }


    export class Command {
        // methods
        constructor (f, params, path);
        exec(scope: any): void;
    }


    export class Container extends DisplayObject {
        // properties
        children: DisplayObject[];

        // methods
        addChild(...child: DisplayObject[]): DisplayObject;
        addChildAt(...childOrIndex: any[]): DisplayObject; // actually (...child: DisplayObject[], index: number)
        clone(recursive?: bool): Container;
        contains(child: DisplayObject): bool;
        getChildAt(index: number): DisplayObject;
        getChildIndex(child: DisplayObject): number;
        getNumChildren(): number;
        getObjectsUnderPoint(x, number, y: number): DisplayObject[];
        getObjectUnderPoint(x: number, y: number): DisplayObject;
        hitTest(x: number, y: number): bool;
        removeAllChildren(): void;
        removeChild(...child: DisplayObject[]): bool;
        removeChildAt(...index: number[]): bool;
        setChildIndex(child: DisplayObject, index: number): void;
        sortChildren(sortFunction: (a: DisplayObject, b: DisplayObject) => number): void;
        swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        swapChildrenAt(index1: number, index2: number): void;
    }


    export class DOMElement extends DisplayObject {
        // properties
        htmlElement: HTMLElement;

        // methods
        constructor (htmlElement: HTMLElement);
        clone(): DOMElement;
    }


    export class EaselJS {
        // properties
        version: string;
        buildDate: string;
    }


    export class EventDispatcher {
        // properties

        // methods
        static initialize(target: Object): void;

        addEventListener(type: string, listener: (eventObj: Object) => bool): Function;
        addEventListener(type: string, listener: (eventObj: Object) => void): Function;
        addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => bool; }): Object;
        addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }): Object;
        removeEventListener(type: string, listener: (eventObj: Object) => bool): void;
        removeEventListener(type: string, listener: (eventObj: Object) => void): void;
        removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => bool; }): void;
        removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }): void;
        removeAllEventListeners(type: string): void;
        dispatchEvent(eventObj: string, target: Object): bool;
        dispatchEvent(eventObj: Object, target: Object): bool;
        hasEventListener(type: string): bool;
        toString(): string;
    }


    export class Graphics {
        // properties
        BASE_64: Object;
        curveTo(cpx: number, cpy: number, x: number, y: number): Graphics;    // same as quadraticCurveTo()
        drawRect(x: number, y: number, width: number, height: number): Graphics;   // same as rect()
        STROKE_CAPS_MAP: string[];
        STROKE_JOINTS_MAP: string[];

        // methods
        arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: bool): Graphics;
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
        beginBitmapFill(image: Object, repetition?: string, matrix?: Matrix2D): Graphics;
        beginBitmapStroke(image: Object, repetition?: string): Graphics;
        beginFill(color: string): Graphics;
        beginLinearGradientFill(colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number): Graphics;
        beginLinearGradientStroke(colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number): Graphics;
        beginRadialGradientFill(colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): Graphics;
        beginRadialGradientStroke(colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): Graphics;
        beginStroke(color: string): Graphics;
        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): Graphics;
        clear(): Graphics;
        clone(): Graphics;
        closePath(): Graphics;
        decodePath(str: string): Graphics;
        draw(ctx: CanvasRenderingContext2D): void;
        drawAsPath(ctx: CanvasRenderingContext2D): void;
        drawCircle(x: number, y: number, radius: number): Graphics;
        drawEllipse(x: number, y: number, width: number, height: number): Graphics;
        drawPolyStar(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number): Graphics;
        drawRoundRect(x: number, y: number, width: number, height: number, radius: number): Graphics;
        drawRoundRectComplex(x: number, y: number, width: number, height: number, radiusTL: number, radiusTR: number, radiusBR: number, radisBL: number): Graphics;
        endFill(): Graphics;
        endStroke(): Graphics;
        isEmpty(): bool;
        static getHSL(hue: number, saturation: number, lightness: number, alpha?: number): string;
        static getRGB(red: number, green: number, blue: number, alpha?: number): string;
        lineTo(x: number, y: number): Graphics;
        moveTo(x: number, y: number): Graphics;
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): Graphics;
        rect(x: number, y: number, width: number, height: number): Graphics;
        setStrokeStyle(thickness: number, caps?: string, joints?: string, miter?: number, ignoreScale?: bool): Graphics;  // caps and joints can be a string or number
        setStrokeStyle(thickness: number, caps?: number, joints?: string, miter?: number, ignoreScale?: bool): Graphics;
        setStrokeStyle(thickness: number, caps?: string, joints?: number, miter?: number, ignoreScale?: bool): Graphics;
        setStrokeStyle(thickness: number, caps?: number, joints?: number, miter?: number, ignoreScale?: bool): Graphics;
        toString(): string;
    }


    export class Log {
        // properties
        static NONE: number;
        static ERROR: number;
        static WARNING: number;
        static TRACE: number;
        static ALL: number;
        static level: number;

        // methods
        static out(message: string, details: string, level: number);
        static addKeys(keys: Object);
        static log(message: string, details: string, level: number);
    }

    export class Matrix2D {
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
        constructor (a: number, b: number, c: number, d: number, tx: number, ty: number);
        append(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix2D;
        appendMatrix(matrix: Matrix2D): Matrix2D;
        appendProperties(a: number, b: number, c: number, d: number, tx: number, ty: number, alpha: number, shadow: Shadow, compositeOperation: string): Matrix2D;
        appendTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX?: number, regY?: number): Matrix2D;
        clone(): Matrix2D;
        decompose(target: Object): Matrix2D;
        identity(): Matrix2D;
        invert(): Matrix2D;
        isIdentity(): bool;
        prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix2D;
        prependMatrix(matrix: Matrix2D): Matrix2D;
        prependProperties(alpha: number, shadow: Shadow, compositeOperation: string): Matrix2D;
        prependTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX?: number, regY?: number): Matrix2D;
        rotate(angle: number): Matrix2D;
        scale(x: number, y: number): Matrix2D;
        skew(skewX: number, skewY: number): Matrix2D;
        toString(): string;
        translate(x: number, y: number): Matrix2D;
    }


    export class MouseEvent {

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
        constructor (type: string, stageX: number, stageY: number, target: DisplayObject, nativeEvent: NativeMouseEvent, pointerID: number, primary: bool, rawX: number, rawY: number);
        clone(): MouseEvent;
        toString(): string;

        // EventDispatcher mixins
        addEventListener(type: string, listener: (eventObj: Object) => bool): Function;
        addEventListener(type: string, listener: (eventObj: Object) => void ): Function;
        addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => bool; }): Object;
        addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }): Object;
        removeEventListener(type: string, listener: (eventObj: Object) => bool): void;
        removeEventListener(type: string, listener: (eventObj: Object) => void ): void;
        removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => bool; }): void;
        removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }): void;
        removeAllEventListeners(type: string): void;
        dispatchEvent(eventObj: string, target: Object): bool;
        dispatchEvent(eventObj: Object, target: Object): bool;
        hasEventListener(type: string): bool;

        // events
        onMouseMove: (event: MouseEvent) => any;
        onMouseUp: (event: MouseEvent) => any;
    }


    export class MovieClip extends Container {
        // properties
        actionsEnabled: bool;
        autoReset: bool;
        currentFrame: number;
        static INDEPENDENT: string;
        loop: bool;
        mode: string;
        paused: bool;
        static SINGLE_FRAME: string;
        startPosition: number;
        static SYNCHED: string;
        timeline: Timeline; //HERE requires tweenJS

        // methods
        constructor (mode: string, startPosition: number, loop: bool, labels: Object);
        clone(recursive?: bool): MovieClip;
        gotoAndPlay(positionOrLabel: string): void;
        gotoAndPlay(positionOrLabel: number): void;
        gotoAndStop(positionOrLabel: string): void;
        gotoAndStop(positionOrLabel: number): void;
        play(): void;
        stop(): void;
    }


    export class Point {
        // properties
        x: number;
        y: number;

        // methods
        constructor (x: number, y: number);
        clone(): Point;
        toString(): string;
    }


    export class Rectangle {
        // properties
        x: number;
        y: number;
        width: number;
        height: number;

        // methods
        constructor (x: number, y: number, width: number, height: number);
        clone(): Rectangle;
        toString(): string;
    }


    export class Shadow {
        // properties
        blur: number;
        color: string;
        static identity: Shadow;
        offsetX: number;
        offsetY: number;

        // methods
        constructor (color: string, offsetX: number, offsetY: number, blur: number);
        clone(): Shadow;
        toString(): string;
    }


    export class Shape extends DisplayObject {
        // properties
        graphics: Graphics;

        // methods
        constructor (graphics?: Graphics);
        clone(recursive?: bool): Shape;
    }


    // what is returned from .getAnimation()
    interface SpriteSheetAnimation {
        frames: number[];
        frequency: number;
        name: string;
        next: string;
    }

    export class SpriteSheet {
        // properties
        complete: bool;

        // methods
        constructor (data: Object);
        clone(): SpriteSheet;
        getAnimation(name: string): SpriteSheetAnimation;
        getAnimations(): string[];
        getFrame(frameIndex: number): Object;
        getFrameBounds(frameIndex: number);
        getNumFrames(animation: string): number;
        toString(): string;

        // events
        onComplete: () => any;
    }


    export class SpriteSheetBuilder {
        // properties
        defaultScale: number;
        maxWidth: number;
        maxHeight: number;
        padding: number;
        progress: number;
        spriteSheet: SpriteSheet;
        timeSlice: number;

        // methods
        addFrame(source: DisplayObject, sourceRect?: Rectangle, scale?: number, setupFunction?: () => any, setupParams?: any[], setupScope?: Object): any; //HERE returns number or null
        addMovieClip(source: MovieClip, sourceRect?: Rectangle, scale?: number): void;
        build(): void;
        buildAsync(timeSlice?: number): void;
        clone(): SpriteSheetBuilder;
        stopAsync(): void;
        toString(): string;

        // events
        complete: (event: Object) => any;
        onProgress: (event: Object) => any;
    }


    export class SpriteSheetUtils {
        static addFlippedFrames(spriteSheet: SpriteSheet, horizontal?: bool, vertical?: bool, both?: bool): void;
        static extractFrame(spriteSheet: SpriteSheet, frame: number): HTMLImageElement;
        static extractFrame(spriteSheet: SpriteSheet, animationName: string): HTMLImageElement;
        static flip(spriteSheet: HTMLImageElement, flipData: Object): void;
        static mergeAlpha(rgbImage: HTMLImageElement, alphaImage: HTMLImageElement, canvas?: HTMLCanvasElement): HTMLCanvasElement;
    }


    export class Stage extends Container {
        // properties
        autoClear: bool;
        canvas: HTMLCanvasElement;
        mouseInBounds: bool;
        mouseX: number;
        mouseY: number;
        snapToPixelEnabled: bool;
        tickOnUpdate: bool;

        new (): Stage;
        new (canvas: HTMLElement): Stage;

        // methods
        constructor (canvas: HTMLCanvasElement);
        clone(): Stage;
        enableMouseOver(frequency: number): void;
        enableDOMEvents(enable: bool): void;
        toDataURL(backgroundColor: string, mimeType: string): string;
        update(): void;
        clear(): void;
        handleEvent(evt: Object): void;

        // events
        stagemousemove: (event: MouseEvent) => any;
        stagemouseup: (event: MouseEvent) => any;
    }


    export class Text extends DisplayObject {
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
        constructor (text?: string, font?: string, color?: string);
        clone(): Text;
        getMeasuredHeight(): number;
        getMeasuredLineHeight(): number;
        getMeasuredWidth(): number;
    }


    export class Ticker {
        // properties
        static useRAF: bool;

        // methods
        static addListener(o: Object, pauseable?: bool): void;
        static getFPS(): number;
        static getInterval(): number;
        static getMeasuredFPS(ticks?: number): number;
        static getPaused(): bool;
        static getTicks(pauseable?: bool): number;
        static getTime(pauseable: bool): number;
        static init(): void;
        static removeAllListeners(): void;
        static removeListener(o: Object): void;
        static setFPS(value: number): void;
        static setInterval(interval: number): void;
        static setPaused(value: bool): void;

        // EventDispatcher mixins
        static addEventListener(type: string, listener: (eventObj: Object) => bool): Function;
        static addEventListener(type: string, listener: (eventObj: Object) => void): Function;
        static addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => bool; }): Object;
        static addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }): Object;
        static removeEventListener(type: string, listener: (eventObj: Object) => bool): void;
        static removeEventListener(type: string, listener: (eventObj: Object) => void): void;
        static removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => bool; }): void;
        static removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }): void;

        // events
        tick: (timeElapsed: number) => any;
    }
    
     export class TickerEvent {

        // properties
        target: Object;
        type: string;
        paused: bool;
        delta: number;
        time: number;
        runTime : number;
    }


    export class Touch {
        // methods
        static disable(stage: Stage): void;
        static enable(stage: Stage, singleTouch?: bool, allowDefault?: bool): bool;
        static isSupported(): bool;
    }


    export class UID {
        // methods
        static get(): number;
    }
}
