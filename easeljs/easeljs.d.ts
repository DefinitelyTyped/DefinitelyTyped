// Type definitions for EaselJS 0.7.1
// Project: http://www.createjs.com/#!/EaselJS
// Definitions by: Pedro Ferreira <https://bitbucket.org/drk4>, Chris Smith <https://github.com/evilangelist>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
    Copyright (c) 2012 Pedro Ferreira
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// Library documentation : http://www.createjs.com/Docs/EaselJS/modules/EaselJS.html

/// <reference path="../createjs-lib/createjs-lib.d.ts" />
/// <reference path="../tweenjs/tweenjs.d.ts" />

// rename the native MouseEvent, to avoid conflict with createjs's MouseEvent
interface NativeMouseEvent extends MouseEvent {

}

declare module createjs {
    export class AlphaMapFilter extends Filter {
        constructor(alphaMap: HTMLImageElement);
        constructor(alphaMap: HTMLCanvasElement);
        // properties
        alphaMap: any;    //Image or HTMLCanvasElement

        // methods
        clone(): AlphaMapFilter;
    }

    export class AlphaMaskFilter extends Filter {
        constructor(mask: HTMLImageElement);
        constructor(mask: HTMLCanvasElement);

        // properties
        mask: any;    // Image or HTMLCanvasElement

        // methods
        clone(): AlphaMaskFilter;
    }


    export class Bitmap extends DisplayObject {
        constructor(imageOrUrl: HTMLImageElement);
        constructor(imageOrUrl: HTMLCanvasElement);
        constructor(imageOrUrl: HTMLVideoElement);
        constructor(imageOrUrl: string);

        // properties
        image: any; // Image or HTMLCanvasElement or HTMLVideoElement
        sourceRect: Rectangle;

        // methods
        clone(): Bitmap;
        set(props: Object): Bitmap;
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number): Bitmap;
    }
    
    /**
     * @deprecated renamed to Sprite, here for backwards compatibility
     */
    export class BitmapAnimation extends Sprite {
    }
    
    export class BitmapText extends DisplayObject {
        constructor(text?:string, spriteSheet?:SpriteSheet);

        // properties
        letterSpacing: number;
        lineHeight: number;
        spaceWidth: number;
        spriteSheet: SpriteSheet;
        text: string;

        // methods
        set(props: Object): BitmapText;
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number): BitmapText;
    }
    
    export class BlurFilter extends Filter {
        constructor(blurX?: number, blurY?: number, quality?: number);

        // properties
        blurX: number;
        blurY: number;
        quality: number;

        // methods
        clone(): BlurFilter;
    }

    export class ButtonHelper {
        constructor(target: Sprite, outLabel?: string, overLabel?: string, downLabel?: string, play?: boolean, hitArea?: DisplayObject, hitLabel?: string);
        constructor(target: MovieClip, outLabel?: string, overLabel?: string, downLabel?: string, play?: boolean, hitArea?: DisplayObject, hitLabel?: string);

        // properties
        downLabel: any; // String or Number
        outLabel: any; // String or Number
        overLabel: any; // String or Number
        play: boolean;
        target: DisplayObject; // MovieClip or Sprite

        // methods
        setEnabled(value: boolean): void;
        toString(): string;
    }

    export class ColorFilter extends Filter {
        constructor(redMultiplier?: number, greenMultiplier?: number, blueMultiplier?: number, alphaMultiplier?: number, redOffset?: number, greenOffset?: number, blueOffset?: number, alphaOffset?: number);

        // properties
        alphaMultiplier: number;
        alphaOffset: number;
        blueMultiplier: number;
        blueOffset: number;
        greenMultiplier: number;
        greenOffset: number;
        redMultiplier: number;
        redOffset: number;
        
        // methods
        clone(): ColorFilter;
    }

    export class ColorMatrix {
        constructor(brightness?: number, contrast?: number, saturation?: number, hue?: number);

        // methods
        adjustBrightness(value: number): ColorMatrix;
        adjustColor(brightness: number, contrast: number, saturation: number, hue: number): ColorMatrix;
        adjustContrast(value: number): ColorMatrix;
        adjustHue(value: number): ColorMatrix;
        adjustSaturation(value: number): ColorMatrix;
        clone(): ColorMatrix;
        concat(...matrix: number[]): ColorMatrix;
        concat(matrix: ColorMatrix): ColorMatrix;
        copyMatrix(...matrix: number[]): ColorMatrix;
        copyMatrix(matrix: ColorMatrix): ColorMatrix;
        reset(): ColorMatrix;
        toArray(): number[];
        toString(): string;
    }
    
    export class ColorMatrixFilter extends Filter {
        constructor(matrix: number[]);
        constructor(matrix: ColorMatrix);

        // methods
        clone(): ColorMatrixFilter;
    }
    
    export class Command {
        // methods
        constructor(f: any, params: any, path?: any);
        exec(scope: any): void;
    }
    
    export class Container extends DisplayObject {
        constructor();

        // properties
        children: DisplayObject[];
        mouseChildren: boolean;
        tickChildren: boolean;

        // methods
        addChild(...child: DisplayObject[]): DisplayObject;
        addChildAt(child: DisplayObject, index: number): DisplayObject; // add this for the common case
        addChildAt(...childOrIndex: any[]): DisplayObject; // actually (...child: DisplayObject[], index: number)
        clone(recursive?: boolean): Container;
        contains(child: DisplayObject): boolean;
        getChildAt(index: number): DisplayObject;
        getChildByName(name: string): DisplayObject;
        getChildIndex(child: DisplayObject): number;
        getNumChildren(): number;
        getObjectsUnderPoint(x: number, y: number): DisplayObject[];
        getObjectUnderPoint(x: number, y: number): DisplayObject;
        removeAllChildren(): void;
        removeChild(...child: DisplayObject[]): boolean;
        removeChildAt(...index: number[]): boolean;
        set(props: Object): Container;
        setChildIndex(child: DisplayObject, index: number): void;
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number): Container;
        sortChildren(sortFunction: (a: DisplayObject, b: DisplayObject) => number): void;
        swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        swapChildrenAt(index1: number, index2: number): void;
    }
    
    export class DisplayObject extends EventDispatcher {
        constructor();

        // properties
        alpha: number;
        cacheCanvas: any; // HTMLCanvasElement or Object
        cacheID: number;
        compositeOperation: string;
        cursor: string;
        filters: Filter[];
        hitArea: DisplayObject;
        id: number;
        mask: Shape;
        mouseEnabled: boolean;
        name: string;
        parent: Container;
        regX: number;
        regY: number;
        rotation: number;
        scaleX: number;
        scaleY: number;
        shadow: Shadow;
        skewX: number;
        skewY: number;
        /**
         * @deprecated
         */
        snapToPixel: boolean;
        static suppressCrossDomainErrors: boolean;
        tickEnabled: boolean;
        visible: boolean;
        x: number;
        y: number;

        // methods
        cache(x: number, y: number, width: number, height: number, scale?: number): void;
        clone(): DisplayObject;
        draw(ctx: CanvasRenderingContext2D, ignoreCache?: boolean): boolean;
        getBounds(): Rectangle;
        getCacheDataURL(): string;
        getConcatenatedMatrix(mtx?: Matrix2D): Matrix2D;
        getMatrix(matrix?: Matrix2D): Matrix2D;
        getStage(): Stage;
        getTransformedBounds(): Rectangle;
        globalToLocal(x: number, y: number): Point;
        hitTest(x: number, y: number): boolean;
        isVisible(): boolean;
        localToGlobal(x: number, y: number): Point;
        localToLocal(x: number, y: number, target: DisplayObject): Point;
        set(props: Object): DisplayObject;
        setBounds(x: number, y: number, width: number, height: number): void;
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number): DisplayObject;
        uncache(): void;
        updateCache(compositeOperation?: string): void;
        updateContext(ctx: CanvasRenderingContext2D): void;
        
    }

    export class DOMElement extends DisplayObject {
        constructor(htmlElement: HTMLElement);

        // properties
        htmlElement: HTMLElement;
        
        // methods
        clone(): DisplayObject; // throw error
        set(props: Object): DOMElement;
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number): DOMElement;
    }


    export class EaselJS {
        // properties
        static buildDate: string;
        static version: string;
    }

    export class Filter {
        constructor();

        // methods
        applyFilter(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, targetCtx?: CanvasRenderingContext2D, targetX?: number, targetY?: number): boolean;
        clone(): Filter;
        getBounds(): Rectangle;
        toString(): string;
    }

    export class Graphics {
        constructor();

        // properties
        static BASE_64: Object;
        static Command: any;
        static STROKE_CAPS_MAP: string[];
        static STROKE_JOINTS_MAP: string[];

        // methods
        arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): Graphics;
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
        curveTo (cpx: number, cpy: number, x: number, y: number): Graphics;
        decodePath(str: string): Graphics;
        draw(ctx: CanvasRenderingContext2D): void;
        drawAsPath(ctx: CanvasRenderingContext2D): void;
        drawCircle(x: number, y: number, radius: number): Graphics;
        drawEllipse(x: number, y: number, w: number, h: number): Graphics;
        drawPolyStar(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number): Graphics;
        drawRect(x: number, y: number, w: number, h: number): Graphics;
        drawRoundRect(x: number, y: number, w: number, h: number, radius: number): Graphics;
        drawRoundRectComplex(x: number, y: number, w: number, h: number, radiusTL: number, radiusTR: number, radiusBR: number, radisBL: number): Graphics;
        endFill(): Graphics;
        endStroke(): Graphics;
        static getHSL(hue: number, saturation: number, lightness: number, alpha?: number): string;
        static getRGB(r: number, g: number, b: number, alpha?: number): string;
        inject(callback: (data: any) => any,  data: any): Graphics;
        isEmpty(): boolean;
        lineTo(x: number, y: number): Graphics;
        moveTo(x: number, y: number): Graphics;
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): Graphics;
        rect(x: number, y: number, w: number, h: number): Graphics;
        setStrokeStyle(thickness: number, caps?: string, joints?: string, miterLimit?: number, ignoreScale?: boolean): Graphics;  // caps and joints can be a string or number
        setStrokeStyle(thickness: number, caps?: number, joints?: string, miterLimit?: number, ignoreScale?: boolean): Graphics;
        setStrokeStyle(thickness: number, caps?: string, joints?: number, miterLimit?: number, ignoreScale?: boolean): Graphics;
        setStrokeStyle(thickness: number, caps?: number, joints?: number, miterLimit?: number, ignoreScale?: boolean): Graphics;
        toString(): string;


        // tiny API - short forms of methods above
        a(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): Graphics;
        at(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
        bf(image: Object, repetition?: string, matrix?: Matrix2D): Graphics;
        bs(image: Object, repetition?: string): Graphics;
        f(color: string): Graphics;
        lf(colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number): Graphics;
        ls(colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number): Graphics;
        rf(colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): Graphics;
        rs(colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): Graphics;
        s(color: string): Graphics;
        bt(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): Graphics;
        c(): Graphics;
        cp(): Graphics;
        p(str: string): Graphics;
        dc(x: number, y: number, radius: number): Graphics;
        de(x: number, y: number, w: number, h: number): Graphics;
        dp(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number): Graphics;
        dr(x: number, y: number, w: number, h: number): Graphics;
        rr(x: number, y: number, w: number, h: number, radius: number): Graphics;
        rc(x: number, y: number, w: number, h: number, radiusTL: number, radiusTR: number, radiusBR: number, radisBL: number): Graphics;
        ef(): Graphics;
        es(): Graphics;
        lt(x: number, y: number): Graphics;
        mt(x: number, y: number): Graphics;
        qt(cpx: number, cpy: number, x: number, y: number): Graphics;
        r(x: number, y: number, w: number, h: number): Graphics;
        ss(thickness: number, caps?: string, joints?: string, miterLimit?: number, ignoreScale?: boolean): Graphics;  // caps and joints can be a string or number
        ss(thickness: number, caps?: number, joints?: string, miterLimit?: number, ignoreScale?: boolean): Graphics;
        ss(thickness: number, caps?: string, joints?: number, miterLimit?: number, ignoreScale?: boolean): Graphics;
        ss(thickness: number, caps?: number, joints?: number, miterLimit?: number, ignoreScale?: boolean): Graphics;
    }

    export class Matrix2D {
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);

        // properties
        a: number;
        alpha: number;
        b: number;
        c: number;
        compositeOperation: string;
        d: number;
        static DEG_TO_RAD: number;
        static identity: Matrix2D;
        shadow: Shadow;
        tx: number;
        ty: number;

        // methods
        append(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix2D;
        appendMatrix(matrix: Matrix2D): Matrix2D;
        appendProperties(alpha: number, shadow: Shadow, compositeOperation: string): Matrix2D;
        appendTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX?: number, regY?: number): Matrix2D;
        clone(): Matrix2D;
        copy(matrix: Matrix2D): Matrix2D;
        decompose(target: Object): Matrix2D;
        identity(): Matrix2D;
        initialize(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix2D;
        invert(): Matrix2D;
        isIdentity(): boolean;
        prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix2D;
        prependMatrix(matrix: Matrix2D): Matrix2D;
        prependProperties(alpha: number, shadow: Shadow, compositeOperation: string): Matrix2D;
        prependTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX?: number, regY?: number): Matrix2D;
        reinitialize(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number, alpha?: number, shadow?: Shadow, compositeOperation?: string): Matrix2D;
        rotate(angle: number): Matrix2D;
        scale(x: number, y: number): Matrix2D;
        skew(skewX: number, skewY: number): Matrix2D;
        toString(): string;
        transformPoint(x: number, y: number, pt?: Point): Point;
        transformPoint(x: number, y: number, pt?: Object): Point;
        translate(x: number, y: number): Matrix2D;
    }


    export class MouseEvent extends Event {
        constructor(type: string, bubbles: boolean, cancelable: boolean, stageX: number, stageY: number, nativeEvent: NativeMouseEvent, pointerID: number, primary: boolean, rawX: number, rawY: number);
        
        // properties
        localX: number;
        localY: number;
        nativeEvent: NativeMouseEvent;
        pointerID: number;
        primary: boolean;
        rawX: number;
        rawY: number;
        stageX: number;
        stageY: number;
        
        // methods
        clone(): MouseEvent;
        
        // EventDispatcher mixins
        addEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): Function;
        addEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): Function;
        addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): Object;
        addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): Object;
        dispatchEvent(eventObj: Object, target?: Object): boolean;
        dispatchEvent(eventObj: string, target?: Object): boolean;
        dispatchEvent(eventObj: Event, target?: Object): boolean;
        hasEventListener(type: string): boolean;
        off(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
        off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
        off(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): void;
        off(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): void;
        off(type: string, listener: Function, useCapture?: boolean): void; // It is necessary for "arguments.callee"
        on(type: string, listener: (eventObj: Object) => boolean, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Function;
        on(type: string, listener: (eventObj: Object) => void, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Function;
        on(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Object;
        on(type: string, listener: { handleEvent: (eventObj: Object) => void; }, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Object;
        removeAllEventListeners(type?: string): void;
        removeEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
        removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
        removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): void;
        removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): void;
        removeEventListener(type: string, listener: Function, useCapture?: boolean): void; // It is necessary for "arguments.callee"
        toString(): string;
        willTrigger(type: string): boolean;
    }


    export class MovieClip extends Container {
        constructor(mode?: string, startPosition?: number, loop?: boolean, labels?: Object);

        // properties
        actionsEnabled: boolean;
        autoReset: boolean;
        static buildDate: string;
        currentFrame: number;
        frameBounds: Rectangle[];
        static INDEPENDENT: string;
        loop: boolean;
        mode: string;
        paused: boolean;
        static SINGLE_FRAME: string;
        startPosition: number;
        static SYNCHED: string;
        timeline: Timeline; //HERE requires tweenJS
        static version: string;

        // methods
        clone(): MovieClip; // not supported
        getCurrentLabel(): string;
        getLabels(): Object[];
        gotoAndPlay(positionOrLabel: string): void;
        gotoAndPlay(positionOrLabel: number): void;
        gotoAndStop(positionOrLabel: string): void;
        gotoAndStop(positionOrLabel: number): void;
        play(): void;
        stop(): void;
    }
    
    export class MovieClipPlugin {
        // methods
        tween(tween: Tween, prop: string, value: string, startValues: any[], endValues: any[], ratio: number, wait: Object, end: Object): void; 
        tween(tween: Tween, prop: string, value: number, startValues: any[], endValues: any[], ratio: number, wait: Object, end: Object): void; 
        tween(tween: Tween, prop: string, value: boolean, startValues: any[], endValues: any[], ratio: number, wait: Object, end: Object): void; 
    }
    
    export class Point {
        constructor(x?: number, y?: number);

        // properties
        x: number;
        y: number;

        // methods
        clone(): Point;
        copy(point: Point): Point;
        initialize (x?: number, y?: number): Point;
        toString(): string;
    }

    export class Rectangle {
        constructor(x?: number, y?: number, width?: number, height?: number);

        // properties
        height: number;
        width: number;
        x: number;
        y: number;

        // methods
        clone(): Rectangle;
        copy(rectangle: Rectangle): Rectangle;
        initialize(x?: number, y?: number, width?: number, height?: number): Rectangle;
        toString(): string;
    }


    export class Shadow {
        constructor(color: string, offsetX: number, offsetY: number, blur: number);

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


    export class Shape extends DisplayObject {
        constructor(graphics?: Graphics);

        // properties
        graphics: Graphics;

        // methods
        clone(recursive?: boolean): Shape;
        set(props: Object): Shape;
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number): Shape;
    }


    export class Sprite extends DisplayObject {
        constructor(spriteSheet: SpriteSheet, frameOrAnimation?: string);
        constructor(spriteSheet: SpriteSheet, frameOrAnimation?: number);

        // properties
        currentAnimation: string;
        currentAnimationFrame: number;
        currentFrame: number;
        framerate: number;
        /**
         * @deprecated
         */
        offset: number;
        paused: boolean;
        spriteSheet: SpriteSheet;
        
        // methods
        advance(time?: number): void;
        clone(): Sprite;
        getBounds(): Rectangle;
        gotoAndPlay(frameOrAnimation: string): void;
        gotoAndPlay(frameOrAnimation: number): void;
        gotoAndStop(frameOrAnimation: string): void;
        gotoAndStop(frameOrAnimation: number): void;
        play(): void;
        set(props: Object): Sprite;
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number): Sprite;
        stop(): void;
        
    }

    // what is returned from SpriteSheet.getAnimation(string)
    interface SpriteSheetAnimation {
        frames: number[];
        speed: number;
        name: string;
        next: string;
    }

    // what is returned from SpriteSheet.getFrame(number)
    interface SpriteSheetFrame {
        image: HTMLImageElement;
        rect: Rectangle;
    }

    export class SpriteSheet extends EventDispatcher {
        constructor(data: Object);

        // properties
        complete: boolean;
        framerate: number;
        
        // methods
        clone(): SpriteSheet;
        getAnimation(name: string): SpriteSheetAnimation;
        getAnimations(): string[];
        getFrame(frameIndex: number): SpriteSheetFrame;
        getFrameBounds(frameIndex: number, rectangle?: Rectangle): Rectangle;
        getNumFrames(animation: string): number;
    }


    export class SpriteSheetBuilder extends EventDispatcher {
        constructor();

        // properties
        maxHeight: number;
        maxWidth: number;
        padding: number;
        progress: number;
        scale: number;
        spriteSheet: SpriteSheet;
        timeSlice: number;

        // methods
        addAnimation(name: string, frames: number[], next?: string, frequency?: number): void;
        addFrame(source: DisplayObject, sourceRect?: Rectangle, scale?: number, setupFunction?: () => any, setupParams?: any[], setupScope?: Object): number;
        addMovieClip(source: MovieClip, sourceRect?: Rectangle, scale?: number): void;
        build(): SpriteSheet;
        buildAsync(timeSlice?: number): void;
        clone(): void; // throw error
        stopAsync(): void;


    }

    export class SpriteSheetUtils {
        /**
         * @deprecated
         */
        static addFlippedFrames(spriteSheet: SpriteSheet, horizontal?: boolean, vertical?: boolean, both?: boolean): void; // deprecated
        static extractFrame(spriteSheet: SpriteSheet, frameOrAnimation : number): HTMLImageElement;
        static extractFrame(spriteSheet: SpriteSheet, frameOrAnimation: string): HTMLImageElement;
        /**
         * @deprecated
         */
        static mergeAlpha(rgbImage: HTMLImageElement, alphaImage: HTMLImageElement, canvas?: HTMLCanvasElement): HTMLCanvasElement; // deprecated
    }

    export class Stage extends Container {
        constructor(canvas: HTMLCanvasElement);
        constructor(canvas: string);
        constructor(canvas: Object);

        // properties
        autoClear: boolean;
        canvas: any; // HTMLCanvasElement or Object
        handleEvent: Function;
        mouseInBounds: boolean;
        mouseMoveOutside: boolean;
        mouseX: number;
        mouseY: number;
        nextStage: Stage;
        /**
         * @deprecated
         */
        snapToPixelEnabled: boolean;  // deprecated
        tickOnUpdate: boolean;
        
        // methods
        clear(): void;
        clone(): Stage;
        enableDOMEvents(enable?: boolean): void;
        enableMouseOver(frequency?: number): void;
        toDataURL(backgroundColor: string, mimeType: string): string;
        update(...arg: any[]): void;
        
    }


    export class Text extends DisplayObject {
        constructor(text?: string, font?: string, color?: string);

        // properties
        color: string;
        font: string;
        lineHeight: number;
        lineWidth: number;
        maxWidth: number;
        outline: number;
        text: string;
        textAlign: string;
        textBaseline: string;

        // methods
        clone(): Text;
        getMeasuredHeight(): number;
        getMeasuredLineHeight(): number;
        getMeasuredWidth(): number;
        set(props: Object): Text;
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number): Text;
    }

    export class Ticker {
        // properties
        static maxDelta: number;
        static RAF: string;
        static RAF_SYNCHED: string;
        static TIMEOUT: string;
        static timingMode: string;
        /**
         * @deprecated
         */
        static useRAF: boolean;

        // methods
        static getEventTime(runTime?: boolean): number;
        static getFPS(): number;
        static getInterval(): number;
        static getMeasuredFPS(ticks?: number): number;
        static getMeasuredTickTime(ticks?: number): number;
        static getPaused(): boolean;
        static getTicks(pauseable?: boolean): number;
        static getTime(runTime?: boolean): number;
        static init(): void;
        static reset(): void;
        static setFPS(value: number): void;
        static setInterval(interval: number): void;
        static setPaused(value: boolean): void;

        // EventDispatcher mixins
        static addEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): Function;
        static addEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): Function;
        static addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): Object;
        static addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): Object;
        static dispatchEvent(eventObj: Object, target?: Object): boolean;
        static dispatchEvent(eventObj: string, target?: Object): boolean;
        static dispatchEvent(eventObj: Event, target?: Object): boolean;
        static hasEventListener(type: string): boolean;
        static off(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
        static off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
        static off(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): void;
        static off(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): void;
        static off(type: string, listener: Function, useCapture?: boolean): void; // It is necessary for "arguments.callee"
        static on(type: string, listener: (eventObj: Object) => boolean, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Function;
        static on(type: string, listener: (eventObj: Object) => void, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Function;
        static on(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Object;
        static on(type: string, listener: { handleEvent: (eventObj: Object) => void; }, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Object;
        static removeAllEventListeners(type?: string): void;
        static removeEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
        static removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
        static removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): void;
        static removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): void;
        static removeEventListener(type: string, listener: Function, useCapture?: boolean): void; // It is necessary for "arguments.callee"
        static toString(): string;
        static willTrigger(type: string): boolean;
    }

    export class TickerEvent {
        // properties
        target: Object;
        type: string;
        paused: boolean;
        delta: number;
        time: number;
        runTime: number;
    }

    export class Touch {
        // methods
        static disable(stage: Stage): void;
        static enable(stage: Stage, singleTouch?: boolean, allowDefault?: boolean): boolean;
        static isSupported(): boolean;
    }

    export class UID {
        // methods
        static get(): number;
    }
}
