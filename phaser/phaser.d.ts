// Type definitions for Phaser dev2.2.0 RC12 2014-12-02
// Project: https://github.com/photonstorm/phaser
// Definitions by: @clark-stevenson @draconisNoctis
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../pixi/pixi.d.ts" />

declare class Phaser {

    static VERSION: string;
    static DEV_VERSION: string;
    static GAMES: Phaser.Game[];

    static AUTO: number;
    static CANVAS: number;
    static WEBGL: number;
    static HEADLESS: number;

    static BITMAPDATA: number;
    static BITMAPTEXT: number;
    static BUTTON: number;
    static CANVAS_FILTER: number;
    static ELLIPSE: number;
    static EMITTER: number;
    static GRAPHICS: number;
    static GROUP: number;
    static IMAGE: number;
    static POINTER: number;
    static POLYGON: number;
    static RENDERTEXTURE: number;
    static RETROFONT: number;
    static SPRITE: number;
    static SPRITEBATCH: number;
    static TEXT: number;
    static TILEMAP: number;
    static TILEMAPLAYER: number;
    static TILESPRITE: number;
    static WEBGL_FILTER: number;
    static ROPE: number;

    static NONE: number;
    static LEFT: number;
    static RIGHT: number;
    static UP: number;
    static DOWN: number;

}

declare module Phaser {

    class Animation {

        constructor(game: Phaser.Game, parent: Phaser.Sprite, name: string, frameData: Phaser.FrameData, frames: any[], frameRate?: number, loop?: boolean);

        currentAnim: Phaser.Animation;
        currentFrame: Phaser.Frame;
        delay: number;
        enableUpdate: boolean;
        frame: number;
        frameTotal: number;
        game: Phaser.Game;
        isFinished: boolean;
        isPaused: boolean;
        isPlaying: boolean;
        killOnComplete: boolean;
        loop: boolean;
        loopCount: number;
        name: string;
        onComplete: Phaser.Signal;
        onLoop: Phaser.Signal;
        onStart: Phaser.Signal;
        onUpdate: Phaser.Signal;
        paused: boolean;
        speed: number;

        complete(): void;
        destroy(): void;
        static generateFrameNames(prefix: string, start: number, stop: number, suffix?: string, zeroPad?: number): string[];
        next(quantity?: number): void;
        onPause(): void;
        onResume(): void;
        play(frameRate?: number, loop?: boolean, killOnComplete?: boolean): Phaser.Animation;
        previous(quantity?: number): void;
        restart(): void;
        setFrame(frameId?: any, useLocalFrameIndex?: boolean): void;
        stop(resetFrame?: boolean, dispatchComplete?: boolean): void;
        update(): boolean;
        updateFrameData(frameData: FrameData): void;

    }

    class AnimationManager {

        constructor(sprite: Phaser.Sprite);

        currentAnim: Phaser.Animation;
        currentFrame: Phaser.Frame;
        frame: number;
        frameData: Phaser.FrameData;
        frameName: string;
        frameTotal: number;
        game: Phaser.Game;
        isLoaded: boolean;
        name: string;
        paused: boolean;
        sprite: Phaser.Sprite;
        updateIfVisible: boolean;

        add(name: string, frames?: any[], frameRate?: number, loop?: boolean, useNumericIndex?: boolean): Phaser.Animation;
        copyFrameData(frameData: Phaser.FrameData, frame: any): boolean;
        destroy(): void;
        getAnimation(name: string): Phaser.Animation;
        next(quantity?: number): void;
        play(name: string, frameRate?: number, loop?: boolean, killOnComplete?: boolean): Phaser.Animation;
        previous(quantity?: number): void;
        refreshFrame(): void;
        stop(name?: string, resetFrame?: boolean): void;
        update(): boolean;
        validateFrames(frames: Phaser.Frame[], useNumericIndex?: boolean): boolean;

    }

    class AnimationParser {

        static JSONData(game: Phaser.Game, json: any, cacheKey: string): Phaser.FrameData;
        static JSONDataHash(game: Phaser.Game, json: any, cacheKey: string): Phaser.FrameData;
        static spriteSheet(game: Phaser.Game, key: string, frameWidth: number, frameHeight: number, frameMax?: number, margin?: number, spacing?: number): Phaser.FrameData;
        static XMLData(game: Phaser.Game, xml: any, cacheKey: string): Phaser.FrameData;

    }

    class AudioSprite {

        constructor(game: Phaser.Game, key: string);

        game: Phaser.Game;
        key: string;
        config: any;
        autoplayKey: string;
        autoplay: boolean;
        sounds: any;

        get(marker: string): Phaser.Sound;
        play(marker: string, volume?: number): Phaser.Sound;
        stop(marker: string): Phaser.Sound;

    }

    class ArraySet {

        constructor(list: any[]);

        position: number;
        list: any[];
        total: number;
        first: any;
        next: any;

        add(item: any): any;
        getIndex(item: any): number;
        exists(item: any): boolean;
        reset(): void;
        remove(item: any): any;
        setAll(key: any, value: any): void;
        callAll(key: string, ...parameter: any[]): void;

    }

    class ArrayUtils {

        static getRandomItem<T>(objects: T[], startIndex?: number, length?: number): T;
        static removeRandomItem<T>(objects: T[], startIndex?: number, length?: number): T;
        static shuffle<T>(array: T[]): T[];
        static transposeMatrix<T>(array: T[]): T;
        static rotateMatrix(matrix: any, direction: number): any;
        static findClosest(value: number, arr: number[]): number;
        static rotate(array: any[]): any;
        static numberArray(start: number, end: number): number[];
        static numberArrayStep(start: number, end: number, step?: number): number[];

    }

    class BitmapData {

        constructor(game: Phaser.Game, key: string, width?: number, height?: number);

        baseTexture: PIXI.BaseTexture;
        buffer: ArrayBuffer;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        ctx: CanvasRenderingContext2D;
        data: Uint8Array;
        dirty: boolean;
        disableTextureUpload: boolean;
        game: Phaser.Game;
        height: number;
        imageData: ImageData;
        key: string;
        pixels: Uint32Array;
        smoothed: boolean;
        texture: PIXI.Texture;
        textureFrame: Phaser.Frame;
        type: number;
        width: number;

        static getTransform(translateX: number, translateY: number, scaleX: number, scaleY: number, skewX: number, skewY: number): any;

        add(object: any): Phaser.BitmapData;
        addToWorld(x?: number, y?: number, anchorX?: number, anchorY?: number, scaleX?: number, scaleY?: number): Phaser.Image;
        alphaMask(source: any, mask: any, sourceRect?: Phaser.Rectangle, maskRect?: Phaser.Rectangle): Phaser.BitmapData;
        blendAdd(): Phaser.BitmapData;
        blendColor(): Phaser.BitmapData;
        blendColorBurn(): Phaser.BitmapData;
        blendColorDodge(): Phaser.BitmapData;
        blendDarken(): Phaser.BitmapData;
        blendDestinationAtop(): Phaser.BitmapData;
        blendDestinationIn(): Phaser.BitmapData;
        blendDestinationOut(): Phaser.BitmapData;
        blendDestinationOver(): Phaser.BitmapData;
        blendDifference(): Phaser.BitmapData;
        blendExclusion(): Phaser.BitmapData;
        blendHardLight(): Phaser.BitmapData;
        blendHue(): Phaser.BitmapData;
        blendLighten(): Phaser.BitmapData;
        blendLuminosity(): Phaser.BitmapData;
        blendMultiply(): Phaser.BitmapData;
        blendOverlay(): Phaser.BitmapData;
        blendReset(): Phaser.BitmapData;
        blendSaturation(): Phaser.BitmapData;
        blendScreen(): Phaser.BitmapData;
        blendSoftLight(): Phaser.BitmapData;
        blendSourceAtop(): Phaser.BitmapData;
        blendSourceIn(): Phaser.BitmapData;
        blendSourceOut(): Phaser.BitmapData;
        blendSourceOver(): Phaser.BitmapData;
        blendXor(): Phaser.BitmapData;
        circle(x: number, y: number, radius: number, fillStyle?: string): Phaser.BitmapData;
        clear(): Phaser.BitmapData;
        cls(): Phaser.BitmapData;
        copy(source?: any, x?: number, y?: number, width?: number, height?: number, tx?: number, ty?: number, newWidth?: number, newHeight?: number, rotate?: number, anchorX?: number, anchorY?: number, scaleX?: number, scaleY?: number, alpha?: number, blendMode?: string, roundPx?: boolean): Phaser.BitmapData;
        copyPixels(source: any, area: Phaser.Rectangle, x: number, y: number, alpha?: number): void;
        copyRect(source: any, area: Phaser.Rectangle, x?: number, y?: number, alpha?: number, blendMode?: string, roundPx?: boolean): Phaser.BitmapData;
        draw(source: any, x?: number, y?: number, width?: number, height?: number, blendMode?: string, roundPx?: boolean): Phaser.BitmapData;
        extract(destination: Phaser.BitmapData, r: number, g: number, b: number, a?: number, resize?: boolean, r2?: number, g2?: number, b2?: number): Phaser.BitmapData;
        fill(r: number, g: number, b: number, a?: number): Phaser.BitmapData;
        getBounds(rect?: Phaser.Rectangle): Phaser.Rectangle;
        getFirstPixel(direction: number): { r: number; g: number; b: number; x: number; y: number; };
        getPixel(x: number, y: number, out?: any): number;
        getPixelRGB(x: number, y: number, out?: any, hsl?: boolean, hsv?: boolean): any;
        getPixel32(x: number, y: number): number;
        getPixels(rect: Phaser.Rectangle): ImageData;
        getTransform(translateX: number, translateY: number, scaleX: number, scaleY: number, skewX: number, skewY: number): any;
        load(source: any): Phaser.BitmapData;
        processPixel(callback: Function, callbackContext: any, x?: number, y?: Number, width?: number, height?: number): Phaser.BitmapData;
        processPixelRGB(callback: Function, callbackContext: any, x?: number, y?: Number, width?: number, height?: number): Phaser.BitmapData;
        rect(x: number, y: number, width: number, height: number, fillStyle?: string): Phaser.BitmapData;
        render(): Phaser.BitmapData;
        replaceRGB(r1: number, g1: number, b1: number, a1: number, r2: number, g2: number, b2: number, a2: number, region: Phaser.Rectangle): Phaser.BitmapData;
        resize(width: number, height: number): Phaser.BitmapData;
        setHSL(h?: number, s?: number, l?: number, region?: Phaser.Rectangle): Phaser.BitmapData;
        setPixel(x: number, y: number, red: number, green: number, blue: number, immediate?: boolean): Phaser.BitmapData;
        setPixel32(x: number, y: number, red: number, green: number, blue: number, alpha: number, immediate?: boolean): Phaser.BitmapData;
        shadow(color: string, blur?: number, x?: number, y?: number): Phaser.BitmapData;
        shiftHSL(h?: number, s?: number, l?: number, region?: Phaser.Rectangle): Phaser.BitmapData;
        textureLine(line: Phaser.Line, key: string, repeat?: string): Phaser.BitmapData;
        update(x: number, y: number, width: number, height: number): Phaser.BitmapData;

    }

    class BitmapText extends PIXI.BitmapText {

        constructor(game: Phaser.Game, x: number, y: number, font: string, text?: string, size?: number);

        align: string;
        angle: number;
        cameraOffset: Phaser.Point;
        destroyPhase: boolean;
        events: Phaser.Events;
        exists: boolean;
        fixedToCamera: boolean;
        font: string;
        fontSize: number;
        game: Phaser.Game;
        input: Phaser.InputHandler;
        inputEnabled: boolean;
        name: string;
        position: Phaser.Point;
        text: string;
        tint: number;
        type: number;
        world: Phaser.Point;
        z: number;

        destroy(destroyChildren?: boolean): void;
        postUpdate(): void;
        preUpdate(): void;
        update(): void;
        updateText(): void;
        updateTransform(): void;

    }

    class Button extends Phaser.Image {

        constructor(game: Phaser.Game, x?: number, y?: number, key?: string, callback?: Function, callbackContext?: any, overFrame?: any, outFrame?: any, downFrame?: any, upFrame?: any);

        forceOut: boolean;
        freezeFrames: boolean;
        onDownSound: any;
        onDownSoundMarker: string;
        onInputDown: Phaser.Signal;
        onInputOut: Phaser.Signal;
        onInputOver: Phaser.Signal;
        onInputUp: Phaser.Signal;
        onOutSound: any;
        onOutSoundMarker: string;
        onOverSound: any;
        onOverSoundMarker: string;
        onOverMouseOnly: boolean;
        onUpSound: any;
        onUpSoundMaker: string;
        type: number;

        clearFrames(): void;
        setDownSound(sound: Phaser.Sound, marker?: string): void;
        setDownSound(sound: Phaser.AudioSprite, marker?: string): void;
        setFrames(overFrame?: any, outFrame?: any, downFrame?: any, upFrame?: any): void;
        onInputDownHandler(sprite: Phaser.Button, pointer: Phaser.Pointer): void;
        onInputUpHandler(sprite: Phaser.Button, pointer: Phaser.Pointer, isOver: boolean): void;
        removedFromWorld(): void;
        setOutSound(sound: Phaser.Sound, marker?: string): void;
        setOutSound(sound: Phaser.AudioSprite, marker?: string): void;
        setOverSound(sound: Phaser.Sound, marker?: string): void;
        setOverSound(sound: Phaser.AudioSprite, marker?: string): void;
        setSounds(overSound?: Phaser.Sound, overMarker?: string, downSound?: Phaser.Sound, downMarker?: string, outSound?: Phaser.Sound, outMarker?: string, upSound?: Phaser.Sound, upMarker?: string): void;
        setSounds(overSound?: Phaser.AudioSprite, overMarker?: string, downSound?: Phaser.AudioSprite, downMarker?: string, outSound?: Phaser.AudioSprite, outMarker?: string, upSound?: Phaser.AudioSprite, upMarker?: string): void;
        setState(newState: number): void;
        setUpSound(sound: Phaser.Sound, marker?: string): void;
        setUpSound(sound: Phaser.AudioSprite, marker?: string): void;

    }

    class Cache {

        constructor(game: Phaser.Game);

        static BINARY: number;
        static BITMAPDATA: number;
        static BITMAPFONT: number;
        static CANVAS: number;
        static IMAGE: number;
        static JSON: number;
        static PHYSICS: number;
        static SOUND: number;
        static TEXT: number;
        static TEXTURE: number;
        static TILEMAP: number;
        static XML: number;

        autoResolveURL: boolean;
        game: Phaser.Game;
        onSoundUnlock: Phaser.Signal;

        addBinary(key: string, binaryData: any): void;
        addBitmapData(key: string, bitmapData: Phaser.BitmapData, frameData?: Phaser.FrameData): Phaser.BitmapData;
        addBitmapFont(key: string, texture: Phaser.RetroFont): void;
        addBitmapFont(key: string, url: string, data: any, xmlData: any, xSpacing?: number, ySpacing?: number): void;
        addCanvas(key: string, canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void;
        addDefaultImage(): void;
        addImage(key: string, url: string, data: any): void;
        addJSON(key: string, urL: string, data: any): void;
        addMisingImage(): void;
        addPhysicsData(key: string, url: string, JSONData: any, format: number): void;
        addRenderTexture(key: string, texture: RenderTexture): void;
        addSound(key: string, url: string, data: any, webAudio: boolean, audioTag: boolean): void;
        addSpriteSheet(key: string, url: string, data: any, frameWidth: number, frameHeight: number, frameMax?: number, margin?: number, spacing?: number): void;
        addText(key: string, url: string, data: any): void;
        addTextureAtlas(key: string, url: string, data: any, atlasData: any, format: number): void;
        addTilemap(key: string, url: string, mapData: any, format: number): void;
        addXML(key: string, url: string, data: any): void;
        checkBinaryKey(key: string): boolean;
        checkBitmapDataKey(key: string): boolean;
        checkBitmapFontKey(key: string): boolean;
        checkCanvasKey(key: string): boolean;
        checkImageKey(key: string): boolean;
        checkJSONKey(key: string): boolean;
        checkKey(type: number, key: string): boolean;
        checkPhysicsKey(key: string): boolean;
        checkSoundKey(key: string): boolean;
        checkTextKey(key: string): boolean;
        checkTextureKey(key: string): boolean;
        checkTilemapKey(key: string): boolean;
        checkURL(url: string): any;
        checkUrl(url: string): any;
        checkXMLKey(key: string): boolean;
        decodedSound(key: string, data: any): void;
        destroy(): void;
        getBinary(key: string): any;
        getBitmapData(key: string): Phaser.BitmapData;
        getBitmapFont(key: string): Phaser.RetroFont;
        getCanvas(key: string): any;
        getFrame(key: string): Phaser.Frame;
        getFrameByIndex(key: string, frame: string): Phaser.Frame;
        getFrameByName(key: string, frame: string): Phaser.Frame;
        getFrameCount(key: string): number;
        getFrameData(key: string, map?: string): Phaser.FrameData;
        getImage(key: string): Phaser.Image;
        getJSON(key: string): any;
        getKeys(array: string[]): string[];
        getPhysicsData(key: string, object?: string, fixtureKey?: string): any[];
        getRenderTexture(key: string): Phaser.RenderTexture;
        getSound(key: string): Phaser.Sound;
        getSoundData(key: string): any;
        getText(key: string): string;
        getTextKeys(): string[];
        getTexture(key: string): Phaser.RenderTexture;
        getTextureFrame(key: string): Phaser.Frame;
        getTilemap(key: string): any;
        getTilemapData(key: string): any;
        getURL(url: string): any;
        getUrl(url: string): any;
        getXML(key: string): any;
        isSoundDecoded(key: string): boolean;
        isSoundReady(key: string): boolean;
        isSpriteSheet(key: string): boolean;
        reloadSound(key: string): void;
        reloadSoundComplete(key: string): void;
        removeBinary(key: string): void;
        removeBitmapData(key: string): void;
        removeBitmapFont(key: string): void;
        removeCanvas(key: string): void;
        removeImage(key: string, removeFromPixi?: boolean): void;
        removeJSON(key: string): void;
        removePhysics(key: string): void;
        removeSound(key: string): void;
        removeText(key: string): void;
        removeTilemap(key: string): void;
        removeXML(key: string): void;
        updateFrameData(key: string, frameData: any): void;
        updateSound(key: string, property: string, value: Phaser.Sound): void;

    }

    class Camera {

        constructor(game: Phaser.Game, id: number, x: number, y: number, width: number, height: number);

        static FOLLOW_LOCKON: number;
        static FOLLOW_PLATFORMER: number;
        static FOLLOW_TOPDOWN: number;
        static FOLLOW_TOPDOWN_TIGHT: number;

        atLimit: { x: boolean; y: boolean; };
        bounds: Phaser.Rectangle;
        deadzone: Phaser.Rectangle;
        displayObject: PIXI.DisplayObject;
        id: number;
        game: Phaser.Game;
        height: number;
        position: Phaser.Point;
        roundPx: boolean;
        scale: Phaser.Point;
        screenView: Phaser.Rectangle;
        target: Phaser.Sprite;
        totalInView: number;
        view: Phaser.Rectangle;
        visible: boolean;
        width: number;
        world: Phaser.World;
        x: number;
        y: number;

        checkBounds(): void;
        focusOn(displayObject: any): void;
        focusOnXY(x: number, y: number): void;
        follow(target: Phaser.Sprite, style?: number): void;
        reset(): void;
        setBoundsToWorld(): void;
        setPosition(x: number, y: number): void;
        setSize(width: number, height: number): void;
        update(): void;

    }

    class Canvas {

        static addToDOM(canvas: HTMLCanvasElement, parent: any, overflowHidden?: boolean): HTMLCanvasElement;
        static create(width?: number, height?: number, id?: string): HTMLCanvasElement;
        static getAspectRatio(canvas: HTMLCanvasElement): number;
        static getOffset(element: HTMLElement, point?: Phaser.Point): Phaser.Point;
        static getSmoothngEnabled(context: CanvasRenderingContext2D): boolean;
        static removeFromDOM(canvas: HTMLCanvasElement): void;
        static setBackgroundColor(canvas: HTMLCanvasElement, color: string): HTMLCanvasElement;
        static setImageRenderingBicubic(canvas: HTMLCanvasElement): HTMLCanvasElement;
        static setImageRenderingCrisp(canvas: HTMLCanvasElement): HTMLCanvasElement;
        static setSmoothingEnabled(context: CanvasRenderingContext2D, value: boolean): CanvasRenderingContext2D;
        static setTouchAction(canvas: HTMLCanvasElement, value: string): HTMLCanvasElement;
        static setTransform(context: CanvasRenderingContext2D, translateX: number, translateY: number, scaleX: number, scaleY: number, skewX: number, skewY: number): CanvasRenderingContext2D;
        static setUserSelect(canvas: HTMLCanvasElement, value?: string): HTMLCanvasElement;

    }

    class Circle {

        constructor(x?: number, y?: number, diameter?: number);

        area: number;
        bottom: number;
        diameter: number;
        empty: boolean;
        left: number;
        radius: number;
        right: number;
        top: number;
        x: number;
        y: number;

        static circumferencePoint(a: Phaser.Circle, angle: number, asDegrees: boolean, out?: Phaser.Point): Phaser.Point;
        static contains(a: Phaser.Circle, x: number, y: number): boolean;
        static equals(a: Phaser.Circle, b: Phaser.Circle): boolean;
        static intersects(a: Phaser.Circle, b: Phaser.Circle): boolean;
        static intersectsRectangle(c: Phaser.Circle, r: Phaser.Rectangle): boolean;

        circumference(): number;
        circumferencePoint(angle: number, asDegrees?: boolean, out?: Phaser.Point): Phaser.Point;
        clone(output: Phaser.Circle): Phaser.Circle;
        contains(x: number, y: number): boolean;
        copyFrom(source: any): Circle;
        copyTo(dest: any): any;
        distance(dest: any, round?: boolean): number;
        getBounds(): Phaser.Rectangle;
        offset(dx: number, dy: number): Phaser.Circle;
        offsetPoint(point: Phaser.Point): Phaser.Circle;
        scale(x: number, y?: number): Phaser.Rectangle;
        setTo(x: number, y: number, diameter: number): Circle;
        toString(): string;

    }

    class Color {

        static componentToHex(color: number): string;
        static createColor(r?: number, g?: number, b?: number, a?: number, h?: number, s?: number, l?: number, v?: number): any;
        static fromRGBA(rgba: number, out?: any): any;
        static getAlpha(color: number): number;
        static getAlphaFloat(color: number): number;
        static getBlue(color: number): number;
        static getColor(red: number, green: number, blue: number): number;
        static getColor32(alpha: number, red: number, green: number, blue: number): number;
        static getGreen(color: number): number;
        static getRandomColor(min?: number, max?: number, alpha?: number): number;
        static getRed(color: number): number;
        static getRGB(color: number): any;
        static getWebRGB(color: any): string;
        static hexToRGB(h: string): number;
        static hexToColor(hex: string, out?: any): any;
        static HSLtoRGB(h: number, s: number, l: number, out?: any): any;
        static HSLColorWheel(s?: number, l?: number): any[];
        static HSVtoRGB(h: number, s: number, v: number, out?: any): any;
        static HSVColorWheel(s?: number, v?: number): any[];
        static hueToColor(p: number, q: number, t: number): number;
        static interpolateColor(color1: number, color2: number, steps: number, currentStep: number, alpha: number): number;
        static interpolateColorWithRGB(color: number, r: number, g: number, b: number, steps: number, currentStep: number): number;
        static interpolateRGB(r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, steps: number, currentStep: number): number;
        static packPixel(r: number, g: number, b: number, a: number): number;
        static RGBtoHSL(r: number, g: number, b: number, out?: any): any;
        static RGBtoHSV(r: number, g: number, b: number, out?: any): any;
        static RGBtoString(r: number, g: number, b: number, a?: number, prefix?: string): string;
        static toRGBA(r: number, g: number, b: number, a: number): number;
        static unpackPixel(rgba: number, out?: any, hsl?: boolean, hsv?: boolean): any;
        static updateColor(out: any): number;
        static valueToColor(value: string, out?: any): { r: number; g: number; b: number; a: number; };
        static webToColor(web: string, out?: any): { r: number; g: number; b: number; a: number; };

    }

    class ComplexPrimitiveShader {

        //where is WebGLContext in TypeScript? "any" is used
        constructor(gl: any);

        gl: any;
        program: any;
        fragmentSrc: any[];
        vertexSrc: any[];

        destroy(): void;
        init(): void;

    }

    interface CursorKeys {

        up: Phaser.Key;
        down: Phaser.Key;
        left: Phaser.Key;
        right: Phaser.Key;

    }

    class Device {

        static LITTLE_ENDIAN: boolean;

        android: boolean;
        arora: boolean;
        audioData: boolean;
        cancelFullScreen: string;
        canvas: boolean;
        chrome: boolean;
        chromeOS: boolean;
        cocoonJS: boolean;
        cocoonJSApp: boolean;
        cordova: boolean;
        crosswalk: boolean;
        css3D: boolean;
        desktop: boolean;
        deviceReadyAt: number;
        ejecta: boolean;
        epiphany: boolean;
        file: boolean;
        fileSystem: boolean;
        firefox: boolean;
        fullScreen: boolean;
        fullScreenKeyboard: boolean;
        getUserMedia: boolean;
        game: Phaser.Game;
        ie: boolean;
        ieVersion: number;
        iOS: boolean;
        initialized: boolean;
        iPad: boolean;
        iPhone: boolean;
        iPhone4: boolean;
        kindle: boolean;
        linux: boolean;
        littleEndian: boolean;
        localStorage: boolean;
        m4a: boolean;
        macOS: boolean;
        midori: boolean;
        mobileSafari: boolean;
        mp3: boolean;
        mspointer: boolean;
        node: boolean;
        nodeWebkit: boolean;
        ogg: boolean;
        onInitialized: Phaser.Signal;
        opera: boolean;
        opus: boolean;
        pixelRatio: number;
        pointerLock: boolean;
        quirksMode: boolean;
        requestFullScreen: string;
        safari: boolean;
        silk: boolean;
        support32bit: boolean;
        touch: boolean;
        trident: boolean;
        tridentVersion: number;
        typedArray: boolean;
        vibration: boolean;
        vita: boolean;
        wav: boolean;
        webApp: boolean;
        webAudio: boolean;
        webGL: boolean;
        webm: boolean;
        windows: boolean;
        windowsPhone: boolean;
        wheelEvent: string;
        worker: boolean;

        checkFullScreenSupport(): void;
        _checkAudio(): void;
        _checkBrowser(): void;
        _checkCSS3D(): void;
        _checkDevice(): void;
        _checkFeatures(): void;
        _checkFullScreenSupport(): void;
        _checkInput(): void;
        _checkIsLittleEndian(): void;
        _checkIsUint8ClampedImageData(): boolean;
        _checkOS(): void;
        canPlayAudio(type: string): boolean;
        _initialze(): void;
        isConsoleOpen(): boolean;
        isAndroidStockBrowser(): string;
        _readyCheck(): void;
        whenReady: (callback: Function, context?: any) => void;

    }

    class DOMSprite {
        //constructor
        constructor(game: Phaser.Game, id: string, x: number, y: number, text: string, style: any);
        //members
        alive: boolean;
        exists: boolean;
        game: Phaser.Game;
        group: Phaser.Group;
        name: string;
        type: number;
        visible: boolean;
    }

    module Easing {

        var Default: Function;
        var Power0: Function;
        var Power1: Function;
        var power2: Function;
        var power3: Function;
        var power4: Function;

        class Back {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        class Bounce {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        class Circular {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        class Cubic {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        class Elastic {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        class Exponential {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        class Linear {
            static None(k: number): number;
        }

        class Quadratic {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        class Quartic {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        class Quintic {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        class Sinusoidal {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

    }

    class Ellipse {

        constructor(x?: number, y?: number, width?: number, height?: number);

        bottom: number;
        empty: boolean;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
        x: number;
        y: number;

        static constains(a: Phaser.Ellipse, x: number, y: number): boolean;

        clone(output: Phaser.Ellipse): Phaser.Ellipse;
        contains(x: number, y: number): boolean;
        copyFrom(source: any): Phaser.Ellipse;
        copyTo(dest: any): any;
        getBounds(): Phaser.Rectangle;
        setTo(x: number, y: number, width: number, height: number): Phaser.Ellipse;
        toString(): string;

    }

    class Events {

        constructor(sprite: Phaser.Sprite);

        parent: Phaser.Sprite;
        onAddedToGroup: Phaser.Signal;
        onRemovedFromGroup: Phaser.Signal;
        onRemovedFromWorld: Phaser.Signal;
        onKilled: Phaser.Signal;
        onRevived: Phaser.Signal;
        onOutOfBounds: Phaser.Signal;
        onInputOver: Phaser.Signal;
        onInputOut: Phaser.Signal;
        onInputDown: Phaser.Signal;
        onInputUp: Phaser.Signal;
        onDestroy: Phaser.Signal;
        onDragStart: Phaser.Signal;
        onDragStop: Phaser.Signal;
        onAnimationStart: Phaser.Signal;
        onAnimationComplete: Phaser.Signal;
        onAnimationLoop: Phaser.Signal;

        destroy(): void;

    }

    class Filter extends PIXI.AbstractFilter {

        constructor(game: Phaser.Game, ...args: any[]);

        dirty: boolean;
        game: Phaser.Game;
        height: number;
        fragmentSrc: any[];
        padding: number;
        prevPoint: Phaser.Point;
        type: number;
        uniforms: any;
        width: number;

        apply(frameBuffer: WebGLFramebuffer): void;
        destroy(): void;
        init(...args: any[]): void;
        setResolution(width: number, height: number): void;
        syncUniforms(): void;
        update(pointer?: Phaser.Pointer): void;

    }

    module Filter {

        class BinarySerpents extends Phaser.Filter {

            constructor(game: Phaser.Game, width: number, height: number, march?: number, maxDistance?: number);

            fog: number;

        }

        class BlurX extends Phaser.Filter {

            blur: number;

        }

        class BlurY extends Phaser.Filter {

            blur: number;

        }

        class CausticLight extends Phaser.Filter {

            constructor(game: Phaser.Game, width: number, height: number, divisor?: number);

            init(width: number, height: number, divisor?: number): void;

        }

        class CheckerWave extends Phaser.Filter {

            constructor(game: Phaser.Game, width: number, height: number);

            alpha: number;
            cameraX: number;
            cameraY: number;
            cameraZ: number;

            init(width: number, height: number): void;
            setColor1(red: number, green: number, blue: number): void;
            setColor2(red: number, green: number, blue: number): void;

        }

        class ColorBars extends Phaser.Filter {

            constructor(game: Phaser.Game, width: number, height: number);

            alpha: number;

            init(width: number, height: number): void;

        }

        class Fire extends Phaser.Filter {

            constructor(width: number, height: number, alpha?: number, shift?: number);

            alpha: number;
            shift: number;
            speed: number;

            init(width: number, height: number, alpha?: number, shift?: number): void;

        }

        class Gray extends Phaser.Filter {

            gray: number;

        }

        class HueRotate extends Phaser.Filter {

            constructor(game: Phaser.Game, width: number, height: number, texture: any);

            alpha: number;

            init(width: number, height: number, texture: any): void;

        }

        class LazerBeam extends Phaser.Filter {

            init(width: number, height: number, divisor?: number): void;

        }

        class LightBeam extends Phaser.Filter {

            constructor(game: Phaser.Game, width: number, height: number);

            alpha: number;
            blue: number;
            green: number;
            red: number;
            thickness: number;
            speed: number;

            init(width: number, height: number): void;

        }

        class Marble extends Phaser.Filter {

            constructor(game: Phaser.Game, width: number, height: number, speed?: number, intensity?: number);

            alpha: number;
            intensity: number;
            speed: number;

            init(width: number, height: number, speed?: number, intensity?: number): void;

        }

        class Pixelate extends Phaser.Filter {

            size: number;

        }

        class Plasma extends Phaser.Filter {

            constructor(game: Phaser.Game, width: number, height: number, alpha?: number, size?: number);

            alpha: number;
            blueShift: number;
            greenShift: number;
            redShift: number;
            size: number;

            init(width: number, height: number, alpha?: number, size?: number): void;

        }

        class SampleFilter extends Phaser.Filter {

            constructor(game: Phaser.Game, width: number, height: number, divisor?: number);

            init(width: number, height: number, divisor?: number): void;

        }

        class Tunnel extends Phaser.Filter {

            constructor(game: Phaser.Game, width: number, height: number, texture: any);

            alpha: number;
            origin: number;

            init(width: number, height: number, texture: any): void;

        }
    }

    class FlexGrid {

        constructor(manager: Phaser.ScaleManager, width: number, height: number);

        game: Phaser.Game;
        manager: Phaser.ScaleManager;
        width: number;
        height: number;
        boundsCustom: Phaser.Rectangle;
        boundsFluid: Phaser.Rectangle;
        boundsFull: Phaser.Rectangle;
        boundsNone: Phaser.Rectangle;
        customWidth: number;
        customHeight: number;
        customOffsetX: number;
        customOffsetY: number;
        positionCustom: Phaser.Point;
        positionFluid: Phaser.Point;
        positionFull: Phaser.Point;
        positionNone: Phaser.Point;
        scaleCustom: Phaser.Point;
        scaleFluid: Phaser.Point;
        scaleFluidInversed: Phaser.Point;
        scaleFull: Phaser.Point;
        scaleNone: Phaser.Point;
        ratioH: number;
        ratioV: number;
        multiplier: number;

        createCustomLayer(width: number, height: number, children?: PIXI.DisplayObject[], addToWorld?: boolean): Phaser.FlexLayer;
        createFluidLayer(children: PIXI.DisplayObject[]): Phaser.FlexLayer;
        createFullLayer(children: PIXI.DisplayObject[]): Phaser.FlexLayer;
        createFixedLayer(children: PIXI.DisplayObject[]): Phaser.FlexLayer;
        debug(): void;
        onResize(width: number, height: number): void;
        refresh(): void;
        reset(): void;
        setSize(width: number, height: number): void;

    }

    class FlexLayer extends Phaser.Group {

        constructor(manager: Phaser.ScaleManager, position: Phaser.Point, bounds: Phaser.Rectangle, scale: Phaser.Point);

        grid: Phaser.FlexGrid;
        manager: Phaser.ScaleManager;

        bottomLeft: Phaser.Point;
        bottomMiddle: Phaser.Point;
        bottomRight: Phaser.Point;
        bounds: Phaser.Rectangle;
        position: Phaser.Point;
        scale: Phaser.Point;
        topLeft: Phaser.Point;
        topMiddle: Phaser.Point;
        topRight: Phaser.Point;

        debug(): void;
        resize(): void;

    }

    class Frame {

        constructor(index: number, x: number, y: number, width: number, height: number, name: string, uuid: string);

        bottom: number;
        centerX: number;
        centerY: number;
        distance: number;
        height: number;
        index: number;
        name: string;
        right: number;
        rotated: boolean;
        rotationDirection: string;
        sourceSizeH: number;
        sourceSizeW: number;
        spriteSourceSizeH: number;
        spriteSourceSizeW: number;
        spriteSourceSizeX: number;
        spriteSourceSizeY: number;
        trimmed: boolean;
        uuid: string;
        width: number;
        x: number;
        y: number;

        clone(): Phaser.Frame;
        getRect(out?: Phaser.Rectangle): Phaser.Rectangle;
        setTrim(trimmed: boolean, actualWidth: number, actualHeight: number, destX: number, destY: number, destWidth: number, destHeight: number): void;

    }

    class FrameData {

        total: number;

        addFrame(frame: Frame): Phaser.Frame;
        checkFrameName(name: string): boolean;
        clone(): Phaser.FrameData;
        getFrame(index: number): Phaser.Frame;
        getFrameByName(name: string): Phaser.Frame;
        getFrameIndexes(frames: number[], useNumericIndex?: boolean, output?: number[]): number[];
        getFrameRange(start: number, end: number, output: Phaser.Frame[]): Phaser.Frame[];
        getFrames(frames: number[], useNumericIndex?: boolean, output?: Phaser.Frame[]): Phaser.Frame[];

    }

    interface IGameConfig {

        enableDebug?: boolean;
        width?: number;
        height?: number;
        renderer?: number;
        parent?: any;
        transparent?: boolean;
        antialias?: boolean;
        preserveDrawingBuffer?: boolean;
        physicsConfig?: any;
        seed?: string;
        state?: Phaser.State;

    }

    class Game {

        constructor(width?: number, height?: number, renderer?: number, parent?: any, state?: any, transparent?: boolean, antialias?: boolean, physicsConfig?: any);
        constructor(config: IGameConfig);

        add: Phaser.GameObjectFactory;
        antialias: boolean;
        cache: Phaser.Cache;
        camera: Phaser.Camera;
        canvas: HTMLCanvasElement;
        config: IGameConfig;
        context: any;
        count: number;
        debug: Phaser.Utils.Debug;
        device: Phaser.Device;
        forceSingleUpdate: boolean;
        fpsProblemNotifier: Phaser.Signal;
        height: number;
        id: number;
        input: Phaser.Input;
        isBooted: boolean;
        isRunning: boolean;
        load: Phaser.Loader;
        lockRender: boolean;
        make: Phaser.GameObjectCreator;
        math: Phaser.Math;
        net: Phaser.Net;
        onBlur: Phaser.Signal;
        onFocus: Phaser.Signal;
        onPause: Phaser.Signal;
        onResume: Phaser.Signal;
        parent: HTMLElement;
        particles: Phaser.Particles;
        paused: boolean;
        pendingStep: boolean;
        physics: Phaser.Physics;
        physicsConfig: any;
        preserveDrawingBuffer: Boolean;
        raf: Phaser.RequestAnimationFrame;
        renderer: number;
        renderType: number;
        rnd: Phaser.RandomDataGenerator;
        scale: Phaser.ScaleManager;
        scratch: Phaser.BitmapData;
        sound: Phaser.SoundManager;
        stage: Phaser.Stage;
        state: Phaser.StateManager;
        stepCount: number;
        stepping: boolean;
        time: Phaser.Time;
        transparent: boolean;
        tweens: Phaser.TweenManager;
        currentUpdateID: number;
        updatesThisFrame: number;
        width: number;
        world: Phaser.World;

        boot(): void;
        destroy(): void;
        disableStep(): void;
        enableStep(): void;
        focusGain(event: any): void;
        focusLoss(event: any): void;
        gamePaused(event: any): void;
        gameResumed(event: any): void;
        parseConfig(config: any): void;
        removeFromDOM(canvas: HTMLCanvasElement): void;
        setUpRenderer(): void;
        showDebugHeader(): void;
        step(): void;
        update(time: number): void;
        updateLogic(timeStep: number): void;
        updateRender(timeStep: number): void;

    }

    class GameObjectCreator {

        constructor(game: Phaser.Game);

        game: Phaser.Game;
        world: Phaser.World;

        audio(key: string, volume?: number, loop?: boolean, connect?: boolean): Phaser.Sound;
        audioSprite(key: string): Phaser.AudioSprite;
        bitmapData(width?: number, height?: number, key?: string, addToCache?: boolean): Phaser.BitmapData;
        bitmapText(x: number, y: number, font: string, text?: string, size?: number): Phaser.BitmapText;
        button(x?: number, y?: number, key?: string, callback?: Function, callbackContext?: any, overFrame?: any, outFrame?: any, downFrame?: any, upFrame?: any): Phaser.Button;
        emitter(x?: number, y?: number, maxParticles?: number): Phaser.Particles.Arcade.Emitter;
        filter(filter: any, ...args: any[]): Phaser.Filter;
        graphics(x: number, y: number): Phaser.Graphics;
        group(parent?: any, name?: string, addToStage?: boolean, enableBody?: boolean, physicsBodyType?: number): Phaser.Group;
        image(x: number, y: number, key: any, frame?: any): Phaser.Image;
        renderTexture(width?: number, height?: number, key?: any, addToCache?: boolean): Phaser.RenderTexture;
        retroFont(font: string, characterWidth: number, characterHeight: number, chars: string, charsPerRow: number, xSpacing?: number, ySpacing?: number, xOffset?: number, yOffset?: number): Phaser.RetroFont;
        rope(x: number, y: number, key: any, frame?: any, points?: Phaser.Point[]): Phaser.Rope;
        sound(key: string, volume?: number, loop?: boolean, connect?: boolean): Phaser.Sound;
        sprite(x: number, y: number, key?: any, frame?: any): Phaser.Sprite;
        spriteBatch(parent: any, name?: String, addToStage?: boolean): Phaser.SpriteBatch;
        text(x: number, y: number, text?: string, style?: any): Phaser.Text;
        tileMap(key: string, tileWidth?: number, tileHeight?: number, width?: number, height?: number): Phaser.Tilemap;
        tileSprite(x: number, y: number, width: number, height: number, key: any, frame: any): Phaser.TileSprite;
        tween(obj: any): Phaser.Tween;

    }

    class GameObjectFactory {

        constructor(game: Phaser.Game);

        game: Phaser.Game;
        world: Phaser.World;

        audio(key: string, volume?: number, loop?: boolean, connect?: boolean): Phaser.Sound;
        audioSprite(key: string): Phaser.AudioSprite;
        bitmapData(width?: number, height?: number, key?: string, addToCache?: boolean): Phaser.BitmapData;
        bitmapText(x: number, y: number, font: string, text?: string, size?: number, group?: Phaser.Group): Phaser.BitmapText;
        button(x?: number, y?: number, key?: string, callback?: Function, callbackContext?: any, overFrame?: any, outFrame?: any, downFrame?: any, upFrame?: any, group?: Phaser.Group): Phaser.Button;
        emitter(x?: number, y?: number, maxParticles?: number): Phaser.Particles.Arcade.Emitter;
        existing(object: any): any;
        filter(filter: string, ...args: any[]): Phaser.Filter;
        graphics(x: number, y: number, group?: Phaser.Group): Phaser.Graphics;
        group(parent?: any, name?: string, addToStage?: boolean, enableBody?: boolean, physicsBodyType?: number): Phaser.Group;
        image(x: number, y: number, key: any, frame?: any, group?: Phaser.Group): Phaser.Image;
        physicsGroup(physicsBodyType: number, parent?: any, name?: string, addToStage?: boolean): Phaser.Group;
        plugin(plugin: Phaser.Plugin, ...parameter: any[]): Phaser.Plugin;
        renderTexture(width?: number, height?: number, key?: string, addToCache?: boolean): Phaser.RenderTexture;
        retroFont(font: string, characterWidth: number, characterHeight: number, chars: string, charsPerRow: number, xSpacing?: number, ySpacing?: number, xOffset?: number, yOffset?: number): Phaser.RetroFont;
        rope(x: number, y: number, key: any, frame?: any, points?: Phaser.Point[]): Phaser.Rope;
        sound(key: string, volume?: number, loop?: number, connect?: boolean): Phaser.Sound;
        sprite(x: number, y: number, key?: any, frame?: any, group?: Phaser.Group): Phaser.Sprite;
        spriteBatch(parent: any, name?: string, addToStage?: boolean): Phaser.Group;
        text(x: number, y: number, text: string, style: any, group?: Phaser.Group): Phaser.Text;
        tilemap(key?: string, tileWidth?: number, tileHeight?: number, width?: number, height?: number): Phaser.Tilemap;
        tileSprite(x: number, y: number, width: number, height: number, key?: any, frame?: any, group?: Phaser.Group): Phaser.TileSprite;
        tween(obj: any): Phaser.Tween;

    }

    class Gamepad {

        constructor(game: Phaser.Game);

        static BUTTON_0: number;
        static BUTTON_1: number;
        static BUTTON_2: number;
        static BUTTON_3: number;
        static BUTTON_4: number;
        static BUTTON_5: number;
        static BUTTON_6: number;
        static BUTTON_7: number;
        static BUTTON_8: number;
        static BUTTON_9: number;
        static BUTTON_10: number;
        static BUTTON_11: number;
        static BUTTON_12: number;
        static BUTTON_13: number;
        static BUTTON_14: number;
        static BUTTON_15: number;

        static AXIS_0: number;
        static AXIS_1: number;
        static AXIS_2: number;
        static AXIS_3: number;
        static AXIS_4: number;
        static AXIS_5: number;
        static AXIS_6: number;
        static AXIS_7: number;
        static AXIS_8: number;
        static AXIS_9: number;

        static XBOX360_A: number;
        static XBOX360_B: number;
        static XBOX360_X: number;
        static XBOX360_Y: number;
        static XBOX360_LEFT_BUMPER: number;
        static XBOX360_RIGHT_BUMPER: number;
        static XBOX360_LEFT_TRIGGER: number;
        static XBOX360_RIGHT_TRIGGER: number;
        static XBOX360_BACK: number;
        static XBOX360_START: number;
        static XBOX360_STICK_LEFT_BUTTON: number;
        static XBOX360_STICK_RIGHT_BUTTON: number;
        static XBOX360_DPAD_LEFT: number;
        static XBOX360_DPAD_RIGHT: number;
        static XBOX360_DPAD_UP: number;
        static XBOX360_DPAD_DOWN: number;
        static XBOX360_STICK_LEFT_X: number;
        static XBOX360_STICK_LEFT_Y: number;
        static XBOX360_STICK_RIGHT_X: number;
        static XBOX360_STICK_RIGHT_Y: number;

        static PS3XC_X: number;
        static PS3XC_CIRCLE: number;
        static PS3XC_SQUARE: number;
        static PS3XC_TRIANGLE: number;
        static PS3XC_L1: number;
        static PS3XC_R1: number;
        static PS3XC_L2: number;
        static PS3XC_R2: number;
        static PS3XC_SELECT: number;
        static PS3XC_START: number;
        static PS3XC_STICK_LEFT_BUTTON: number;
        static PS3XC_STICK_RIGHT_BUTTON: number;
        static PS3XC_DPAD_UP: number;
        static PS3XC_DPAD_DOWN: number;
        static PS3XC_DPAD_LEFT: number;
        static PS3XC_DPAD_RIGHT: number;
        static PS3XC_STICK_LEFT_X: number;
        static PS3XC_STICK_LEFT_Y: number;
        static PS3XC_STICK_RIGHT_X: number;
        static PS3XC_STICK_RIGHT_Y: number;

        active: boolean;
        callbackContext: any;
        disabled: boolean;
        enabled: boolean;
        game: Phaser.Game;
        onAxisCallBack: Function;
        onConnectCallback: Function;
        onDisconnectCallback: Function;
        onDownCallback: Function;
        onFloatCallback: Function;
        onUpCallback: Function;
        pad1: Phaser.SinglePad;
        pad2: Phaser.SinglePad;
        pad3: Phaser.SinglePad;
        pad4: Phaser.SinglePad;
        padsConnected: number;
        supported: boolean;

        addCallbacks(context: any, callbacks: any): void;
        isDown(buttonCode: number): boolean;
        justPressed(buttonCode: number, duration?: number): boolean;
        justReleased(buttonCode: number, duration?: number): boolean;
        reset(): void;
        setDeadZones(value: any): void;
        start(): void;
        stop(): void;
        update(): void;

    }

    class GamepadButton {

        constructor(pad: Phaser.SinglePad, buttonCode: number);

        buttonCode: number;
        duration: number;
        game: Phaser.Game;
        isDown: boolean;
        isUp: boolean;
        onDown: Phaser.Signal;
        onFloat: Phaser.Signal;
        onUp: Phaser.Signal;
        pad: Phaser.Gamepad;
        repeats: number;
        timeDown: number;
        timeUp: number;
        value: number;

        destroy(): void;
        justPressed(duration?: number): boolean;
        justReleased(duration?: number): boolean;
        processButtonDown(value: number): void;
        processButtonFloat(value: number): void;
        processButtonUp(value: number): void;
        reset(): void;
    }

    class Graphics extends PIXI.Graphics {

        constructor(game: Phaser.Game, x: number, y: number);

        angle: number;
        cameraOffset: Phaser.Point;
        destroyPhase: boolean;
        exists: boolean;
        fixedToCamera: boolean;
        game: Phaser.Game;
        height: number;
        name: string;
        position: Phaser.Point;
        type: number;
        world: Phaser.Point;
        z: number;

        destroy(): void;
        drawTriangle(points: Phaser.Point[], cull?: boolean): void;
        drawTriangles(vertices: any[], indices?: number[], cull?: boolean): void;
        postUpdate(): void;
        preUpdate(): void;
        update(): void;

    }

    class Group extends PIXI.DisplayObjectContainer {

        constructor(game: Phaser.Game, parent?: any, name?: string, addToStage?: boolean, enableBody?: boolean, physicsBodyType?: number);

        static RETURN_CHILD: number;
        static RETURN_NONE: number;
        static RETURN_TOTAL: number;
        static SORT_ASCENDING: number;
        static SORT_DESCENDING: number;

        angle: number;
        alive: boolean;
        cameraOffset: Phaser.Point;
        classType: any;
        cursor: any;
        enableBody: boolean;
        enableBodyDebug: boolean;
        exists: boolean;
        fixedToCamera: boolean;
        game: Phaser.Game;
        ignoreDestroy: boolean;
        length: number;
        name: string;
        onDestroy: Phaser.Signal;
        physicsBodyType: number;
        position: Phaser.Point;
        scale: Phaser.Point;
        total: number;
        type: number;
        z: number;

        add(child: any, silent?: boolean): any;
        addAll(property: string, amount: number, checkAlive: boolean, checkVisible: boolean): void;
        addAt(child: any, index: number, silent?: boolean): any;
        addMultiple(children: any[], silent?: boolean): any[];
        bringToTop(child: any): any;
        callAll(method: string, context: any, ...parameters: any[]): void;
        callAllExists(callback: Function, existsValue: boolean, ...parameters: any[]): void;
        callbackFromArray(child: any, callback: Function, length: number): void;
        checkAll(key: string[], value: any, checkAlive?: boolean, checkVisible?: boolean, force?: boolean): boolean;
        checkProperty(child: any, key: string[], value: any, force?: boolean): boolean;
        countDead(): number;
        countLiving(): number;
        create(x: number, y: number, key: string, frame?: any, exists?: boolean): any;
        createMultiple(quantity: number, key: string, frame?: any, exists?: boolean): void;
        customSort(sortHandler: Function, context?: any): void;
        destroy(destroyChildren?: boolean, soft?: boolean): void;
        divideAll(property: string, amount: number, checkAlive?: boolean, checkVisible?: boolean): void;
        forEach(callback: Function, callbackContext: any, checkExists?: boolean, ...args: any[]): void;
        forEachAlive(callback: Function, callbackContext: any, ...args: any[]): void;
        forEachDead(callback: Function, callbackContext: any, ...args:any[]): void;
        forEachExists(callback: Function, callbackContext: any): void;
        filter(predicate: Function, checkExists?: boolean): ArraySet;
        getAt(index: number): any;
        getBottom(): any;
        getFirstAlive(): any;
        getFirstDead(): any;
        getFirstExists(exists: boolean): any;
        getIndex(child: any): number;
        getRandom(startIndex?: number, length?: number): any;
        getTop(): any;
        hasProperty(child: any, key: string[]): boolean;
        iterate(key: string, value: any, returnType: number, callback?: Function, callbackContext?: any, ...args: any[]): any;
        moveDown(child: any): any;
        moveUp(child: any): any;
        multiplyAll(property: string, amount: number, checkAlive: boolean, checkVisible: boolean): void;
        next(): void;
        postUpdate(): void;
        preUpdate(): void;
        previous(): void;
        remove(child: any, destroy?: boolean, silent?: boolean): boolean;
        removeAll(destroy?: boolean, silent?: boolean): void;
        removeBetween(startIndex: number, endIndex?: number, destroy?: boolean, silent?: boolean): void;
        replace(oldChild: any, newChild: any): any;
        resetCursor(index?: number): any;
        reverse(): void;
        sendToBack(child: any): any;
        set(child: any, key: string[], value: any, operation?: number, force?: boolean): boolean;
        setAll(key: string, value: any, checkAlive?: boolean, checkVisible?: boolean, operation?: number, force?: boolean): boolean;
        setProperty(child: any, key: string[], value: any, operation?: number, force?: boolean): boolean;
        sort(key?: string, order?: number): void;
        subAll(property: string, amount: number, checkAlive: boolean, checkVisible: boolean): void;
        swap(child1: any, child2: any): boolean;
        update(): void;
        updateZ(): void;
        xy(index: number, x: number, y: number): void;

    }

    class Image extends PIXI.Sprite {

        constructor(game: Phaser.Game, x: number, y: number, key: any, frame: any);

        alive: boolean;
        angle: number;
        anchor: Phaser.Point;
        autoCull: boolean;
        cameraOffset: Phaser.Point;
        cropRect: Phaser.Rectangle;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
        destroyPhase: boolean;
        events: Phaser.Events;
        exists: boolean;
        fixedToCamera: boolean;
        frame: any;
        frameName: string;
        game: Phaser.Game;
        inCamera: boolean;
        input: Phaser.InputHandler;
        inputEnabled: boolean;
        inWorld: boolean;
        key: any;
        name: string;
        position: Phaser.Point;
        renderOrderID: number;
        scale: Phaser.Point;
        smoothed: boolean;
        type: number;
        z: number;

        bringToTop(): Phaser.Image;
        crop(rect: Phaser.Rectangle, copy?: boolean): void;
        destroy(destroyChildren?: boolean): void;
        kill(): Phaser.Image;
        loadTexture(key: any, frame: any): void;
        postUpdate(): void;
        preUpdate(): void;
        reset(x: number, y: number): Phaser.Image;
        resetFrame(): void;
        revive(): Phaser.Image;
        setFrame(frame: Phaser.Frame): void;
        setScaleMinMax(minX?: number, minY?: number, maxX?: number, maxY?: number): void;
        update(): void;
        updateCrop(): void;

    }

    class Input {

        constructor(game: Phaser.Game);

        static MAX_POINTERS: number;
        static MOUSE_OVERRIDES_TOUCH: number;
        static MOUSE_TOUCH_COMBINE: number;
        static TOUCH_OVERRIDES_MOUSE: number;

        activePointer: Phaser.Pointer;
        circle: Phaser.Circle;
        currentPointers: number;
        disabled: boolean;
        enabled: boolean;
        doubleTapRate: number;
        game: Phaser.Game;
        gamepad: Phaser.Gamepad;
        hitCanvas: HTMLCanvasElement;
        hitContext: CanvasRenderingContext2D;
        holdRate: number;
        interactiveItems: Phaser.ArraySet;
        justPressedRate: number;
        justReleasedRate: number;
        keyboard: Phaser.Keyboard;
        maxPointers: number;
        minPriorityID: number;
        mouse: Phaser.Mouse;
        mousePointer: Phaser.Pointer;
        moveCallbacks: (pointer: Phaser.Pointer, x: number, y: number) => void[];
        moveCallbackContext: any;
        mspointer: Phaser.MSPointer;
        multiInputOverride: number;
        onDown: Phaser.Signal;
        onHold: Phaser.Signal;
        onTap: Phaser.Signal;
        onUp: Phaser.Signal;
        pointer1: Phaser.Pointer;
        pointer2: Phaser.Pointer;
        pointer3: Phaser.Pointer;
        pointer4: Phaser.Pointer;
        pointer5: Phaser.Pointer;
        pointer6: Phaser.Pointer;
        pointer7: Phaser.Pointer;
        pointer8: Phaser.Pointer;
        pointer9: Phaser.Pointer;
        pointer10: Phaser.Pointer;
        pollLocked: boolean;
        pollRate: number;
        position: Phaser.Point;
        pointer: Phaser.Pointer[];
        recordLimit: number;
        recordPointerHistory: boolean;
        recordRate: number;
        resetLocked: boolean;
        scale: Phaser.Point;
        speed: Phaser.Point;
        tapRate: number;
        totalActivePointers: number;
        totalInactivePointers: number;
        touch: Phaser.Touch;
        worldX: number;
        worldY: number;
        x: number;
        y: number;

        addPointer(): Phaser.Pointer;
        addMoveCallback(callback: Function, context: any): number;
        boot(): void;
        countActivePointers(limit?: number): number;
        deleteMoveCallback(index: number): void;
        destroy(): void;
        getLocalPosition(displayObject: any, pointer: Phaser.Pointer): Phaser.Point;
        getPointer(isActive?: boolean): Phaser.Pointer;
        getPointerFromId(pointerID: number): Phaser.Pointer;
        getPointerFromIdentifier(identifier: number): Phaser.Pointer;
        hitTest(displayObject: any, pointer: Phaser.Pointer, localPoint: Phaser.Point): void;
        reset(hard?: boolean): void;
        resetSpeed(x: number, y: number): void;
        startPointer(event: any): Phaser.Pointer;
        stopPointer(event: any): Phaser.Pointer;
        update(): void;
        updatePointer(event: any): Phaser.Pointer;

    }

    class InputHandler {

        constructor(sprite: Phaser.Sprite);

        allowHorizontalDrag: boolean;
        allowVerticalDrag: boolean;
        boundsRect: Phaser.Rectangle;
        boundsSprite: Phaser.Sprite;
        bringToTop: boolean;
        consumePointerEvent: boolean;
        draggable: boolean;
        enabled: boolean;
        game: Phaser.Game;
        globalToLocalX(x: number): number;
        globalToLocalY(y: number): number;
        isDragged: boolean;
        pixelPerfectAlpha: number;
        pixelPerfectClick: boolean;
        pixelPerfectOver: boolean;
        priorityID: number;
        scaleLayer: boolean;
        snapOffset: Phaser.Point;
        snapOffsetX: number;
        snapOffsetY: number;
        snapOnDrag: boolean;
        snapOnRelease: boolean;
        snapX: number;
        snapY: number;
        sprite: Phaser.Sprite;
        useHandCursor: boolean;

        checkBoundsRect(): void;
        checkBoundsSprite(): void;
        checkPixel(x: number, y: number, pointer?: Phaser.Pointer): boolean;
        checkPointerDown(pointer: Phaser.Pointer, fastTest?: boolean): boolean;
        checkPointerOver(pointer: Phaser.Pointer, fastTest?: boolean): boolean;
        destroy(): void;
        disableDrag(): void;
        disableSnap(): void;
        downDuration(pointer: Phaser.Pointer): number;
        enableDrag(lockCenter?: boolean, bringToTop?: boolean, pixelPerfect?: boolean, alphaThreshold?: number, boundsRect?: Phaser.Rectangle, boundsSprite?: Phaser.Rectangle): void;
        enableSnap(snapX: number, snapY: number, onDrag?: boolean, onRelease?: boolean, snapOffsetX?: number, snapOffsetY?: number): void;
        isPixelPerfect(): boolean;
        justOut(pointer: number, delay: number): boolean;
        justOver(pointer: number, delay: number): boolean;
        justPressed(pointer: number, delay: number): boolean;
        justReleased(pointer: number, delay: number): boolean;
        overDuration(pointer: Phaser.Pointer): number;
        pointerDown(pointer: number): boolean;
        pointerDragged(pointer: Phaser.Pointer): boolean;
        pointerOut(index: number): boolean;
        pointerOver(index: number): boolean;
        pointerTimeDown(pointer: Phaser.Pointer): number;
        pointerTimeOut(pointer: Phaser.Pointer): number;
        pointerTimeOver(pointer: number): number;
        pointerTimeUp(pointer: number): number;
        pointerUp(pointer: number): boolean;
        pointerX(pointer: number): number;
        pointerY(pointer: number): number;
        reset(): void;
        setDragLock(allowHorizontal?: boolean, allowVertical?: boolean): void;
        start(priority: number, useHandCursor: boolean): Phaser.Sprite;
        startDrag(pointer: Phaser.Pointer): void;
        stop(): void;
        stopDrag(pointer: Phaser.Pointer): void;
        update(pointer: Phaser.Pointer): void;
        updateDrag(pointer: Phaser.Pointer): boolean;
        validForInput(highestID: number, highestRenderID: number, includePixelPerfect?: boolean): boolean;

    }

    class Key {

        constructor(game: Phaser.Game, keycode: number);

        altKey: boolean;
        ctrlKey: boolean;
        duration: number;
        enabled: boolean;
        event: any;
        game: Phaser.Game;
        isDown: boolean;
        isUp: boolean;
        _justDown: boolean;
        justDown: boolean;
        _justUp: boolean;
        justUp: boolean;
        keyCode: number;
        onDown: Phaser.Signal;
        onHoldCallback: Function;
        onHoldContext: any;
        onUp: Phaser.Signal;
        repeats: number;
        shiftKey: boolean;
        timeDown: number;
        timeUp: number;

        downDuration(duration?: number): boolean;
        processKeyDown(event: KeyboardEvent): void;
        processKeyUp(event: KeyboardEvent): void;
        reset(hard?: boolean): void;
        update(): void;
        upDuration(duration?: number): boolean;

    }

    class Keyboard {

        constructor(game: Phaser.Game);

        static A: number;
        static B: number;
        static C: number;
        static D: number;
        static E: number;
        static F: number;
        static G: number;
        static H: number;
        static I: number;
        static J: number;
        static K: number;
        static L: number;
        static M: number;
        static N: number;
        static O: number;
        static P: number;
        static Q: number;
        static R: number;
        static S: number;
        static T: number;
        static U: number;
        static V: number;
        static W: number;
        static X: number;
        static Y: number;
        static Z: number;
        static ZERO: number;
        static ONE: number;
        static TWO: number;
        static THREE: number;
        static FOUR: number;
        static FIVE: number;
        static SIX: number;
        static SEVEN: number;
        static EIGHT: number;
        static NINE: number;
        static NUMPAD_0: number;
        static NUMPAD_1: number;
        static NUMPAD_2: number;
        static NUMPAD_3: number;
        static NUMPAD_4: number;
        static NUMPAD_5: number;
        static NUMPAD_6: number;
        static NUMPAD_7: number;
        static NUMPAD_8: number;
        static NUMPAD_9: number;
        static NUMPAD_MULTIPLY: number;
        static NUMPAD_ADD: number;
        static NUMPAD_ENTER: number;
        static NUMPAD_SUBTRACT: number;
        static NUMPAD_DECIMAL: number;
        static NUMPAD_DIVIDE: number;
        static F1: number;
        static F2: number;
        static F3: number;
        static F4: number;
        static F5: number;
        static F6: number;
        static F7: number;
        static F8: number;
        static F9: number;
        static F10: number;
        static F11: number;
        static F12: number;
        static F13: number;
        static F14: number;
        static F15: number;
        static COLON: number;
        static EQUALS: number;
        static UNDERSCORE: number;
        static QUESTION_MARK: number;
        static TILDE: number;
        static OPEN_BRACKET: number;
        static BACKWARD_SLASH: number;
        static CLOSED_BRACKET: number;
        static QUOTES: number;
        static BACKSPACE: number;
        static TAB: number;
        static CLEAR: number;
        static ENTER: number;
        static SHIFT: number;
        static CONTROL: number;
        static ALT: number;
        static CAPS_LOCK: number;
        static ESC: number;
        static SPACEBAR: number;
        static PAGE_UP: number;
        static PAGE_DOWN: number;
        static END: number;
        static HOME: number;
        static LEFT: number;
        static UP: number;
        static RIGHT: number;
        static DOWN: number;
        static INSERT: number;
        static DELETE: number;
        static HELP: number;
        static NUM_LOCK: number;
        static PLUS: number;
        static MINUS: number;

        callbackContext: any;
        disabled: boolean;
        enabled: boolean;
        event: any;
        game: Phaser.Game;
        lastChar: string;
        lastKey: Phaser.Key;
        onDownCallback: Function;
        onPressCallback: Function;
        onUpCallback: Function;
        pressEvent: any;

        addCallbacks(context: any, onDown?: Function, onUp?: Function, onPress?: Function): void;
        addKey(keycode: number): Phaser.Key;
        addKeyCapture(keycode: any): void;
        createCursorKeys(): Phaser.CursorKeys;
        clearCaptures(): void;
        destroy(): void;
        downDuration(keycode: number, duration?: number): boolean;
        isDown(keycode: number): boolean;
        processKeyDown(event: KeyboardEvent): void;
        processKeyPress(event: KeyboardEvent): void;
        processKeyUp(event: KeyboardEvent): void;
        removeKey(keycode: number): void;
        removeKeyCapture(keycode: number): void;
        reset(hard?: boolean): void;
        start(): void;
        stop(): void;
        update(): void;
        upDuration(keycode: number, duration?: number): boolean;

    }

    class Line {

        constructor(x1?: number, y1?: number, x2?: number, y2?: number);

        angle: number;
        end: Phaser.Point;
        height: number;
        left: number;
        length: number;
        perpSlope: number;
        right: number;
        slope: number;
        start: Phaser.Point;
        top: number;
        width: number;
        x: number;
        y: number;

        static intersectsPoints(a: Phaser.Point, b: Phaser.Point, e: Phaser.Point, f: Phaser.Point, asSegment?: boolean, result?: Phaser.Point): Phaser.Point;
        static intersects(a: Phaser.Line, b: Phaser.Line, asSegment?: boolean, result?: Phaser.Point): Phaser.Point;

        clone(output: Phaser.Line): Phaser.Line;
        coordinatesOnLine(stepRate: number, results: any[]): any[];
        fromSprite(startSprite: Phaser.Sprite, endSprite: Phaser.Sprite, useCenter?: boolean): Phaser.Line;
        intersects(line: Phaser.Line, asSegment?: boolean, result?: Phaser.Point): Phaser.Point;
        pointOnLine(x: number, y: number): boolean;
        pointOnSegment(x: number, y: number): boolean;
        setTo(x1?: number, y1?: number, x2?: number, y2?: number): Phaser.Line;

    }

    class LinkedList {

        first: any;
        last: any;
        next: any;
        prev: any;
        total: number;

        add(item: any): any;
        callAll(callback: Function): void;
        remove(item: any): void;
        reset(): void;

    }

    class Loader {

        constructor(game: Phaser.Game);

        static PHYSICS_LIME_CORONA_JSON: number;
        static PHYSICS_PHASER_JSON: number;
        static TEXTURE_ATLAS_JSON_ARRAY: number;
        static TEXTURE_ATLAS_JSON_HASH: number;
        static TEXTURE_ATLAS_XML_STARLING: number;

        baseURL: string;
        crossOrigin: any;
        game: Phaser.Game;
        hasLoaded: boolean;
        isLoading: boolean;
        onFileStart: Phaser.Signal;
        onFileComplete: Phaser.Signal;
        onFileError: Phaser.Signal;
        onLoadComplete: Phaser.Signal;
        onLoadStart: Phaser.Signal;
        onPackComplete: Phaser.Signal;
        preloadSprite: any;
        progress: number;
        progressFloat: number;
        useXDomainRequest: boolean;

        addToFileList(type: string, key: string, url: string, properties: any): void;
        atlas(key: string, textureURL: string, atlasURL?: string, atlasData?: any, format?: number): Phaser.Loader;
        atlasJSONArray(key: string, textureURL: string, atlasURL?: string, atlasData?: any): Phaser.Loader;
        atlasJSONHash(key: string, textureURL: string, atlasURL?: string, atlasData?: any): Phaser.Loader;
        atlasXML(key: string, textureURL: string, atlasURL?: string, atlasData?: any): Phaser.Loader;
        audio(key: string, urls: any, autoDecode?: boolean): Phaser.Loader;
        audiosprite(key: string, urls: any, atlasurl: string): Phaser.Loader;
        binary(key: string, url: string, callback?: Function, callbackContext?: Function): Phaser.Loader;
        bitmapFont(key: string, textureURL: string, xmlURL?: string, xmlData?: any, xSpacing?: number, ySpacing?: number): Phaser.Loader;
        checkKeyExists(type: string, key: string): boolean;
        csvLoadComplete(index: number): void;
        dataLoadError(index: number): void;
        fileComplete(index: number): void;
        fileError(index: number): void;
        getAsset(type: string, key: string): any;
        getAssetIndex(type: string, key: string): number;
        image(key: string, url: string, overwrite?: boolean): Phaser.Loader;
        json(key: string, url: string, overwrite?: boolean): Phaser.Loader;
        jsonLoadComplete(index: number): void;
        pack(key: string, url?: string, data?: any, callbackContext?: any): Phaser.Loader;
        physics(key: string, url?: string, data?: any, format?: string): Phaser.Loader;
        removeAll(): void;
        removeFile(key: string, type: string): void;
        replaceInFileList(type: string, key: string, url: string, properties: any): void;
        reset(): void;
        resize(): void;
        script(key: string, url: String, callback?: Function, callbackContext?: any): Phaser.Loader;
        setPreloadSprite(sprite: Phaser.Sprite, direction?: number): void;
        spritesheet(key: string, url: string, frameWidth: number, frameHeight: number, frameMax?: number, margin?: number, spacing?: number): Phaser.Loader;
        start(): void;
        text(key: string, url: string, overwrite?: boolean): Phaser.Loader;
        tilemap(key: string, url?: string, data?: any, format?: number): Phaser.Loader;
        totalLoadedFiles(): number;
        totalLoadedPacks(): number;
        totalQueuedFiles(): number;
        totalQueuedPacks(): number;
        xml(key: string, url: string, overwrite?: boolean): Phaser.Loader;
        xmlLoadComplete(index: number): void;

    }

    class LoaderParser {

        static bitmapFont(game: Phaser.Game, xml: any, cacheKey: string, xSpacing: number, ySpacing: number): Phaser.FrameData;

    }

    class Math {

        static angleBetween(x1: number, y1: number, x2: number, y2: number): number;
        static angleBetweenPoints(point1: Phaser.Point, point2: Phaser.Point): number;
        static angleBetweenY(x1: number, y1: number, x2: number, y2: number): number;
        static angleBetweenPointsY(point1: Phaser.Point, point2: Phaser.Point): number;
        static angleLimit(angle: number, min: number, max: number): number;
        static average(...numbers: number[]): number;
        static bernstein(n: number, i: number): number;
        static bezierInterpolation(v: number[], k: number): number;
        static catmullRom(p0: number, p1: number, p2: number, p3: number, t: number): number;
        static catmullRomInterpolation(v: number[], k: number): number;
        static ceil(value: number): number;
        static ceilTo(value: number, place?: number, base?: number): number;
        static chanceRoll(chance: number): boolean;
        static clamp(x: number, a: number, b: number): number;
        static clampBottom(x: number, a: number): number;
        static degToRad(degrees: number): number;
        static difference(a: number, b: number): number;
        static distance(x1: number, y1: number, x2: number, y2: number): number;
        static distancePow(xy: number, y1: number, x2: number, y2: number, pow?: number): number;
        static distanceRounded(x1: number, y1: number, x2: number, y2: number): number;
        static factorial(value: number): number;
        static floor(value: number): number;
        static floorTo(value: number, place: number, base: number): number;
        static fuzzyCeil(val: number, epsilon?: number): boolean;
        static fuzzyEqual(a: number, b: number, epsilon?: number): boolean;
        static fuzzyLessThan(a: Number, b: number, epsilon?: number): boolean;
        static fuzzyFloor(val: number, epsilon?: number): boolean;
        static fuzzyGreaterThan(a: number, b: number, epsilon?: number): boolean;
        static fuzzyLessThan(a: number, b: number, epsilon?: number): boolean;
        static getRandom<T>(objects: T[], startIndex?: number, length?: number): T;
        static interpolateFloat(a: number, b: number, weight: number): number;
        static isEven(n: number): boolean;
        static isOdd(n: number): boolean;
        static linear(p0: number, p1: number, t: number): number;
        static linearInterpolation(v: number[], k: number): number;
        static limitValue(value: number, min: number, max: number): number;
        static mapLinear(x: number, a1: number, a2: number, b1: number, b2: number): number;
        static max(...numbers: number[]): number;
        static maxAdd(value: number, amount: number, max: number): number;
        static maxProperty(...numbers: number[]): number;
        static min(...numbers: number[]): number;
        static minProperty(...numbers: number[]): number;
        static minSub(value: number, amount: number, min: number): number;
        static normalizeAngle(angle: number, radians?: boolean): number;
        static normalizeLatitude(lat: number): number;
        static normalizeLongitude(lng: number): number;
        static numberArray(start: number, end: number): number[];
        static numberArrayStep(start: number, end: number, step?: number): number[];
        static percent(a: number, b: number, base?: number): number;
        static p2px(v: number): number;
        static PI2: number;
        static radToDeg(radians: number): number;
        static randomSign(): number;
        static reverseAngle(angleRed: number): number;
        static removeRandom<T>(objects: T[], startIndex?: number, length?: number): T;
        static roundTo(value: number, place?: number, base?: number): number;
        static shear(n: number): number;
        static shift(stack: any[]): any;
        static shuffleArray(array: any[]): any[];
        static sign(x: number): number;
        static sinCosGenerator(length: number, sinAmplitude?: number, cosAmplitude?: number, frequency?: number): { sin: number[]; cos: number[]; };
        static smootherstep(x: number, min: number, max: number): number;
        static smoothstep(x: number, min: number, max: number): number;
        static snapTo(input: number, gap: number, start?: number): number;
        static snapToCeil(input: number, gap: number, start?: number): number;
        static snapToFloor(input: number, gap: number, start?: number): number;
        static snapToInArray(input: number, arr: number[], sort?: boolean): number;
        static truncate(n: number): number;
        static within(a: number, b: number, tolerance: number): boolean;
        static wrap(value: number, min: number, max: number): number;
        static wrapAngle(angle: number, radians?: boolean): number;
        static wrapValue(value: number, amount: number, max: number): number;

    }

    interface WheelEventProxy {

        bindEvent(event: any): WheelEventProxy;

        type: string;
        deltaMode: number;
        deltaX: number;
        deltaY: number;
        deltaZ: number;

    }

    class Mouse {

        constructor(game: Phaser.Game);

        static LEFT_BUTTON: number;
        static MIDDLE_BUTTON: number;
        static NO_BUTTON: number;
        static RIGHT_BUTTON: number;
        static WHEEL_DOWN: number;
        static WHEEL_UP: number;

        button: number;
        callbackContext: any;
        capture: boolean;
        disabled: boolean;
        enabled: boolean;
        event: MouseEvent;
        game: Phaser.Game;
        locked: boolean;
        mouseDownCallback: (event: MouseEvent) => void;
        mouseMoveCallback: (event: MouseEvent) => void;
        mouseOutCallback: (event: MouseEvent) => void;
        mouseOverCallback: (event: MouseEvent) => void;
        mouseUpCallback: (event: MouseEvent) => void;
        mouseWheelCallback: (event: MouseEvent) => void;
        _onMouseDown: (event: MouseEvent) => void;
        _onMouseMove: (event: MouseEvent) => void;
        _onMouseUp: (event: MouseEvent) => void;
        _onMouseOut: (event: MouseEvent) => void;
        _onMouseOver: (event: MouseEvent) => void;
        _onMouseWheel: (event: MouseEvent) => void;
        _wheelEvent: WheelEventProxy;
        pointerLock: Phaser.Signal;
        stopOnGameOut: boolean;
        wheelDelta: WheelEventProxy;

        onMouseDown(event: MouseEvent): void;
        onMouseMove(event: MouseEvent): void;
        onMouseOut(event: MouseEvent): void;
        onMouseOver(event: MouseEvent): void;
        onMouseUp(event: MouseEvent): void;
        onMouseUpGlobal(event: MouseEvent): void;
        onMouseWheel(event: MouseEvent): void;
        pointerLockChange(event: MouseEvent): void;
        releasePointerLock(): void;
        requestPointerLock(): void;
        start(): void;
        stop(): void;

    }

    class MSPointer {

        constructor(game: Phaser.Game);

        callbackContext: any;
        disabled: boolean;
        game: Phaser.Game;

        onPointerDown(event: MSPointerEvent): void;
        onPointerMove(event: MSPointerEvent): void;
        onPointerUp(event: MSPointerEvent): void;
        mouseDownCallback(event: MSPointerEvent): void;
        mouseMoveCallback(event: MSPointerEvent): void;
        mouseUpCallback(event: MSPointerEvent): void;
        start(): void;
        stop(): void;

    }

    class Net {

        constructor(game: Phaser.Game);

        game: Phaser.Game;

        checkDomainName(domain: string): boolean;
        decodeURI(value: string): string;
        getHostName(): string;
        getQueryString(parameter?: string): string;
        updateQueryString(key: string, value: any, redirect?: boolean, url?: string): string;

    }

    class Particle extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number, key?: any, frame?: any);

        onEmit(): void;
        reset(x: number, y: number, health?: number): Phaser.Particle;
        setAlphaData(data: any[]): void;
        setScaleData(data: any[]): void;
        update(): void;

    }

    class Particles {

        constructor(game: Phaser.Game);

        emitters: any;
        game: Phaser.Game;
        ID: number;

        add(emitter: Phaser.Particles.Arcade.Emitter): Phaser.Particles.Arcade.Emitter;
        remove(emitter: Phaser.Particles.Arcade.Emitter): void;
        update(): void;

    }

    module Particles {

        module Arcade {

            class Emitter extends Phaser.Group {

                constructor(game: Phaser.Game, x?: number, y?: number, maxParticles?: number);

                alphaData: any[];
                autoAlpha: boolean;
                autoScale: boolean;
                angle: number;
                angularDrag: number;
                bottom: number;
                bounce: Phaser.Point;
                emitX: number;
                emitY: number;
                exists: boolean;
                frequency: number;
                gravity: number;
                group: Phaser.Group;
                height: number;
                left: number;
                lifespan: number;
                maxParticles: number;
                maxParticleScale: number;
                maxParticleSpeed: Phaser.Point;
                maxRotation: number;
                minParticleScale: number;
                minParticleSpeed: Phaser.Point;
                minRotation: number;
                name: string;
                on: boolean;
                particleBringToTop: boolean;
                particleSendToBack: boolean;
                particleClass: Phaser.Sprite;
                particleDrag: Phaser.Point;
                position: Phaser.Point;
                right: number;
                scaleData: any[];
                top: number;
                type: number;
                width: number;
                x: number;
                y: number;

                at(object: any): void;
                emitParticle(): void;
                explode(lifespan?: number, quantity?: number): void;
                flow(lifespan?: number, frequency?: number, quantity?: number): void;
                kill(): void;
                makeParticles(keys: any, frames?: any, quantity?: number, collide?: boolean, collideWorldBounds?: boolean): Phaser.Particles.Arcade.Emitter;
                reset(x: number, y: number, health?: number): Phaser.Particles;
                setAlpha(min?: number, max?: number, rate?: number, ease?: number, yoyo?: boolean): void;
                setRotation(min?: number, max?: number): void;
                setScale(minX?: number, maxX?: number, minY?: number, maxY?: number, rate?: number, ease?: (k: number) => number, yoyo?: boolean): void;
                setSize(width: number, height: number): void;
                setXSpeed(min: number, max: number): void;
                setYSpeed(min: number, max: number): void;
                start(explode?: boolean, lifespan?: number, frequency?: number, quantity?: number, forceQuantity?: boolean): void;
                update(): void;
                revive(): void;

            }
        }
    }

    class Physics {

        constructor(game: Phaser.Game, config?: any);

        static ARCADE: number;
        static P2JS: number;
        static NINJA: number;
        static BOX2D: number;
        static CHIPMUNK: number;

        arcade: Phaser.Physics.Arcade;
        config: any;
        game: Phaser.Game;
        ninja: Phaser.Physics.Ninja;
        p2: Phaser.Physics.P2;

        clear(): void;
        destroy(): void;
        enable(object: any, system?: number, debug?: boolean): void;
        parseConfig(): void;
        preUpdate(): void;
        setBoundsToWorld(): void;
        startSystem(system: number): void;
        update(): void;

    }

    module Physics {

        class Arcade {

            static OVERLAP_BIAS: number;
            static TILE_BIAS: number;

            constructor(game: Phaser.Game);

            bounds: Phaser.Rectangle;
            checkCollision: { up?: boolean; down?: boolean; left?: boolean; right?: boolean; };
            forceX: boolean;
            game: Phaser.Game;
            gravity: Phaser.Point;
            quadTree: Phaser.QuadTree;
            maxObjects: number;
            maxLevels: number;
            skipQuadTree: boolean;

            accelerationFromRotation(rotation: number, speed?: number, point?: Phaser.Point): Phaser.Point;
            accelerateToObject(displayObject: any, destination: any, speed?: number, xSpeedMax?: number, ySpeedMax?: number): number;
            accelerateToPointer(displayObject: any, pointer?: Phaser.Pointer, speed?: number, xSpeedMax?: number, ySpeedMax?: number): number;
            accelerateToXY(displayObject: any, x: number, y: number, speed?: number, xSpeedMax?: number, ySpeedMax?: number): number;
            angleBetween(source: any, target: any): number;
            angleToPointer(displayObject: any, pointer?: Phaser.Pointer): number;
            angleToXY(displayObject: any, x: number, y: number): number;
            collide(object1: any, object2: any, collideCallback?: Function, processCallback?: Function, callbackContext?: any): boolean;
            computeVelocity(axis: number, body: Phaser.Physics.Arcade.Body, velocity: number, acceleration: number, drag: number, max?: number): number;
            distanceBetween(source: any, target: any): number;
            distanceToPointer(displayObject: any, pointer?: Phaser.Pointer): number;
            distanceToXY(displayObject: any, x: number, y: number): number;
            enable(object: any, children?: Boolean): void;
            enableBody(object: any): void;
            getObjectsAtLocation(x: number, y: number, group: Phaser.Group, callback?: (callbackArg: any, object: any) => void, callbackContext?: any, callbackArg?: any): Sprite[];
            intersects(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body): boolean;
            moveToObject(displayObject: any, destination: any, speed?: number, maxTime?: number): number;
            moveToPointer(displayObject: any, speed?: number, pointer?: Phaser.Pointer, maxTime?: number): number;
            moveToXY(displayObject: any, x: number, y: number, speed?: number, maxTime?: number): number;
            overlap(object1: any, object2: any, overlapCallback?: Function, processCallback?: Function, callbackContext?: any): boolean;
            processTileSeparationX(body: Phaser.Physics.Arcade.Body, x: number): boolean;
            processTileSeparationY(body: Phaser.Physics.Arcade.Body, y: number): void;
            setBounds(x: number, y: number, width: number, height: number): void;
            setBoundsToWorld(): void;
            separate(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, processCallback?: Function, callbackContext?: any, overlapOnly?: boolean): boolean;
            separateX(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly: boolean): boolean;
            separateY(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly: boolean): boolean;
            separateTile(i: number, body: Phaser.Physics.Arcade.Body, tile: Phaser.Tile): boolean;
            tileCheckX(body: Phaser.Physics.Arcade.Body, tile: Phaser.Tile): number;
            tileCheckY(body: Phaser.Physics.Arcade.Body, tile: Phaser.Tile): number;
            updateMotion(body: Phaser.Physics.Arcade.Body): void;
            velocityFromAngle(angle: number, speed?: number, point?: Phaser.Point): Phaser.Point;
            velocityFromRotation(rotation: number, speed?: number, point?: Phaser.Point): Phaser.Point;

        }

        module Arcade {

            class Body {

                constructor(sprite: Phaser.Sprite);

                acceleration: Phaser.Point;
                allowGravity: boolean;
                allowRotation: boolean;
                angle: number;
                angularAcceleration: number;
                angularDrag: number;
                angularVelocity: number;
                blocked: FaceChoices;
                bottom: number;
                bounce: Phaser.Point;
                center: Phaser.Point;
                checkCollision: FaceChoices;
                collideWorldBounds: boolean;
                customSeparateX: boolean;
                customSeparateY: boolean;
                deltaMax: Phaser.Point;
                drag: Phaser.Point;
                embedded: boolean;
                enable: boolean;
                facing: number;
                game: Phaser.Game;
                gravity: Phaser.Point;
                halfWidth: number;
                halfHeight: number;
                immovable: boolean;
                mass: number;
                maxAngular: number;
                maxVelocity: Phaser.Point;
                moves: boolean;
                newVelocity: Phaser.Point;
                offset: Phaser.Point;
                overlapX: number;
                overlapY: number;
                phase: number;
                position: Phaser.Point;
                preRotation: number;
                prev: Phaser.Point;
                right: number;
                rotation: number;
                skipQuadTree: boolean;
                sourceWidth: number;
                sourceHeight: number;
                speed: number;
                sprite: Phaser.Sprite;
                tilePadding: Phaser.Point;
                touching: FaceChoices;
                type: number;
                wasTouching: FaceChoices;
                width: number;
                velocity: Phaser.Point;
                x: number;
                y: number;

                checkWorldBounds(): void;
                deltaX(): number;
                deltaY(): number;
                deltaZ(): number;
                deltaAbsX(): void;
                deltaAbsY(): void;
                destroy(): void;
                hitTest(x: number, y: number): boolean;
                onFloor(): void;
                onWall(): void;
                preUpdate(): void;
                postUpdate(): void;
                render(context: any, body: Phaser.Physics.Arcade.Body, color?: string, filled?: boolean): void;
                renderBodyInfo(debug: Phaser.Utils.Debug, body: Phaser.Physics.Arcade.Body): void;
                reset(x: number, y: number): void;
                setSize(width: number, height: number, offsetX?: number, offsetY?: number): void;
                updateBounds(): boolean;

            }

            class FaceChoices {

                none: boolean;
                any: boolean;
                up: boolean;
                down: boolean;
                left: boolean;
                right: boolean;

            }
        }

        class Ninja {

            constructor(game: Phaser.Game);

            game: Phaser.Game
            gravity: number;
            bounds: Phaser.Rectangle;
            maxObjects: number;
            maxLevels: number;
            quadTree: Phaser.QuadTree;
            time: Phaser.Time;

            clearTilemapLayerBodies(map: Phaser.Tilemap, layer: any): void;
            collide(object1: any, object2: any, collideCallback?: Function, processCallback?: Function, callbackContext?: any): boolean;
            convertTilemap(map: Phaser.Tilemap, layer?: any, slopeMap?: any): Phaser.Physics.Ninja.Tile[];
            enableAABB(object: any, children?: boolean): void;
            enableCircle(object: any, radius: number, children?: boolean): void;
            enableTile(object: any, id: number, children?: boolean): void;
            enable(object: any, type?: number, id?: number, radius?: number, children?: boolean): void;
            enableBody(object: any, type?: number, id?: number, radius?: number): void;
            overlap(object1: any, object2: any, overlapCallback?: Function, processCallback?: Function, callbackContext?: any): boolean;
            separate(body1: Phaser.Physics.Ninja.Body, body2: Phaser.Physics.Ninja.Body, processCallback?: Function, callbackContext?: any, overlapOnly?: boolean): boolean;
            setBounds(x: number, y: number, width: number, height: number): void;
            setBoundsToWorld(): void;
        }

        module Ninja {

            class Body {

                constructor(system: Phaser.Physics.Ninja, sprite: Phaser.Sprite, type?: number, id?: number, radius?: number, x?: number, y?: number, width?: number, height?: number);

                aabb: Phaser.Physics.Ninja.AABB;
                angle: number;
                bottom: number;
                bounce: number;
                checkCollision: Phaser.Physics.Arcade.FaceChoices;
                circle: Phaser.Physics.Ninja.Circle;
                collideWorldBounds: boolean;
                drag: number;
                facing: number;
                friction: number;
                game: Phaser.Game;
                gravityScale: number;
                height: number;
                immovable: boolean;
                maxSpeed: number;
                right: number;
                sprite: Phaser.Sprite;
                system: Phaser.Physics.Ninja;
                tile: Phaser.Physics.Ninja.Tile;
                touching: Phaser.Physics.Arcade.FaceChoices;
                type: number;
                shape: any;
                speed: number;
                velocity: Phaser.Point;
                wasTouching: Phaser.Physics.Arcade.FaceChoices;
                width: number;
                x: number;
                y: number;

                deltaAbsX(): number;
                deltaAbsY(): number;
                deltaX(): number;
                deltaY(): number;
                destroy(): void;
                setZeroVelocity(): void;
                moveTo(speed: number, angle: number): void;
                moveFrom(speed: number, angle: number): void;
                moveLeft(speed: number): void;
                moveRight(speed: number): void;
                moveUp(speed: number): void;
                moveDown(speed: number): void;
                poseUpdate(): void;
                preUpdate(): void;
                render(context: any, body: Phaser.Physics.Ninja.Body, color?: string, filled?: boolean): void;
                reset(): void;

            }

            class AABB {

                constructor(body: Phaser.Physics.Ninja.Body, x: number, y: number, width: number, height: number);

                static COL_NONE: number;
                static COL_AXIS: number;
                static COL_OTHER: number;

                aabbTileProjections: any;
                body: Phaser.Physics.Ninja.Body;
                height: number;
                oldPos: Phaser.Point;
                pos: Phaser.Point;
                system: Phaser.Physics.Ninja;
                width: number;
                velocity: Phaser.Point;
                xw: number;
                yw: number;

                collideWorldBounds(): void;
                collideAABBVsAABB(aabb: Phaser.Physics.Ninja.AABB): boolean;
                collideAABBVsTile(tile: Phaser.Physics.Ninja.Tile): boolean;
                destroy(): void;
                integrate(): void;
                render(context: any, xOffset: number, yOffset: number, color: string, filled: boolean): void;
                reportCollisionVsWorld(px: number, py: number, dx: number, dy: number, obj: any): void;
                reportCollisionVsBody(px: number, py: number, dx: number, dy: number, obj: any): void;
                resolveTile(x: number, y: number, body: Phaser.Physics.Ninja.AABB, tile: Phaser.Physics.Ninja.Tile): boolean;
                reverse(): void;

            }

            class Circle {

                constructor(body: Phaser.Physics.Ninja.Body, x: number, y: number, radius: number);

                COL_NONE: number;
                COL_AXIS: number;
                COL_OTHER: number;

                body: Phaser.Physics.Ninja.Body;
                circleTileProjections: any;
                oldPos: Phaser.Point;
                height: number;
                pos: Phaser.Point;
                radius: number;
                system: Phaser.Physics.Ninja;
                velocity: Phaser.Point;
                width: number;
                xw: number;
                yw: number;

                collideCircleVsTile(tile: Phaser.Physics.Ninja.Tile): boolean;
                collideWorldBounds(): void;
                destroy(): void;
                distance(dest: number, round?: boolean): number;
                integrate(): void;
                render(context: any, xOffset: number, yOffset: number, color: string, filled: boolean): void;
                reportCollisionVsWorld(px: number, py: number, dx: number, dy: number, obj: any): void;
                reportCollisionVsBody(px: number, py: number, dx: number, dy: number, obj: any): void;
                resolveCircleTile(x: number, y: number, oH: number, oV: number, obj: Phaser.Physics.Ninja.Circle, t: Phaser.Physics.Ninja.Tile): boolean;

            }

            class Tile {

                constructor(body: Phaser.Physics.Ninja.Body, x: number, y: number, width: number, height: number, type?: number);

                body: Phaser.Physics.Ninja.Body;
                bottom: number;
                height: number;
                id: number;
                oldpos: Phaser.Point;
                pos: Phaser.Point;
                right: number;
                system: Phaser.Physics.Ninja;
                type: number;
                velocity: Phaser.Point;
                width: number;
                xw: number;
                yw: number;
                x: number;
                y: number;

                clear(): void;
                collideWorldBounds(): void;
                destroy(): void;
                integrate(): void;
                reportCollisionVsWorld(px: number, py: number, dx: number, dy: number, obj: any): void;
                setType(id: number): number;

            }

        }

        class P2 {

            constructor(game: Phaser.Game, config?: any);

            applyDamping: boolean;
            applyGravity: boolean;
            applySpringForces: boolean;
            boundsCollidesWith: Phaser.Physics.P2.Body[];
            boundsCollisionGroup: Phaser.Physics.P2.CollisionGroup;
            config: any;
            callbackContext: any;
            collisionGroups: Phaser.Physics.P2.CollisionGroup[];
            contactMaterial: Phaser.Physics.P2.ContactMaterial;
            emitImpactEvent: boolean;
            everythingCollisionGroup: Phaser.Physics.P2.CollisionGroup;
            frameRate: number;
            friction: number;
            game: Phaser.Game;
            gravity: Phaser.Physics.P2.InversePointProxy;
            materials: Phaser.Physics.P2.Material[];
            nothingCollisionGroup: Phaser.Physics.P2.CollisionGroup;
            onBodyAdded: Phaser.Signal;
            onBodyRemoved: Phaser.Signal;
            onBeginContact: Phaser.Signal;
            onConstraintAdded: Phaser.Signal;
            onConstraintRemoved: Phaser.Signal;
            onContactMaterialAdded: Phaser.Signal;
            onContactMaterialRemoved: Phaser.Signal;
            onEndContact: Phaser.Signal;
            onSpringAdded: Phaser.Signal;
            onSpringRemoved: Phaser.Signal;
            paused: boolean;
            postBroaddphaseCallback: Function;
            restitution: number;
            solveConstraints: boolean;
            time: any;
            total: number;
            useElapsedTime: boolean;
            walls: {
                left?: Phaser.Physics.P2.Body;
                right?: Phaser.Physics.P2.Body;
                top?: Phaser.Physics.P2.Body;
                bottom?: Phaser.Physics.P2.Body;
            };
            world: p2.World;

            addBody(body: Phaser.Physics.P2.Body): boolean;
            addContactMaterial(material: Phaser.Physics.P2.ContactMaterial): Phaser.Physics.P2.ContactMaterial;
            addConstraint<T>(constraint: T): T;
            addSpring(spring: Phaser.Physics.P2.Spring): Phaser.Physics.P2.Spring;
            beginContactHandler(event: any): void;
            clear(): void;
            clearTilemapLayerBodies(map: Phaser.Tilemap, layer?: any): void;
            convertCollisionObjects(map: Phaser.Tilemap, layer?: any, addToWorld?: boolean): Phaser.Physics.P2.Body[];
            convertTilemap(map: Phaser.Tilemap, layer?: any, addToWorld?: Boolean, optimize?: boolean): Phaser.Physics.P2.Body[];
            createBody(x: number, y: number, mass: number, addToWorld?: boolean, options?: p2.BodyOptions, data?: number[][]): Phaser.Physics.P2.Body;
            createBody(x: number, y: number, mass: number, addToWorld?: boolean, options?: p2.BodyOptions, data?: number[]): Phaser.Physics.P2.Body;
            createCollisionGroup(group?: Phaser.Group): Phaser.Physics.P2.CollisionGroup;
            createCollisionGroup(group?: Phaser.Sprite): Phaser.Physics.P2.CollisionGroup;
            createContactMaterial(materialA: Phaser.Physics.P2.Material, materialB: Phaser.Physics.P2.Material, options?: p2.ContactMaterialOptions): Phaser.Physics.P2.ContactMaterial;
            createDistanceConstraint(bodyA: any, bodyB: any, distance: number, localAnchorA?: number[], localAnchorB?: number[], maxForce?: number): Phaser.Physics.P2.DistanceConstraint;
            createGearConstraint(bodyA: any, bodyB: any, angle?: number, ratio?: number): Phaser.Physics.P2.GearConstraint;
            createLockConstraint(bodyA: any, bodyB: any, offset?: number[], angle?: number, maxForce?: number): Phaser.Physics.P2.LockConstraint;
            createMaterial(name?: string, body?: Phaser.Physics.P2.Body): Phaser.Physics.P2.Material;
            createParticle(x: number, y: number, mass: number, addToWorld?: boolean, options?: p2.BodyOptions, data?: number[][]): Phaser.Physics.P2.Body;
            createParticle(x: number, y: number, mass: number, addToWorld?: boolean, options?: p2.BodyOptions, data?: number[]): Phaser.Physics.P2.Body;
            createPrismaticConstraint(body: any, bodyB: any, lockRotation?: boolean, anchorA?: number[], anchorB?: number[], axis?: Float32Array, maxForce?: number): Phaser.Physics.P2.PrismaticConstraint;
            createRevoluteConstraint(bodyA: any, pivotA: number[], bodyB: any, pivotB: number[], maxForce?: number, worldPivot?: number[]): Phaser.Physics.P2.RevoluteContraint;
            createRotationalSpring(bodyA: any, bodyB: any, restAngle?: number, stiffness?: number, damping?: number): p2.RotationalSpring;
            createSpring(bodyA: any, bodyB: any, restLength?: number, stiffness?: number, damping?: number, worldA?: number[], worldB?: number[], localA?: number[], localB?: number[]): Phaser.Physics.P2.Spring;
            destroy(): void;
            enable(object: any, debug?: boolean, children?: boolean): void;
            enableBody(object: any, debug: boolean): void;
            endContactHandler(event: any): void;
            getBodies(): Phaser.Physics.P2.Body[];
            getBody(object: any): Phaser.Physics.P2.Body;
            getConstraints(): p2.Constraint[];
            getSprings(): Phaser.Physics.P2.Spring[];
            getContactMaterial(materialA: Phaser.Physics.P2.Material, materialB: Phaser.Physics.P2.Material): Phaser.Physics.P2.ContactMaterial;
            hitTest(worldPoint: Phaser.Point, bodies?: any[], precision?: number, filterStatic?: boolean): Phaser.Physics.P2.Body[];
            mpx(v: number): number;
            mpxi(v: number): number;
            pause(): void;
            preUpdate(): void;
            pxm(v: number): number;
            pxmi(v: number): number;
            removeBody(body: Phaser.Physics.P2.Body): Phaser.Physics.P2.Body;
            removeBodyNextStep(body: Phaser.Physics.P2.Body): void;
            removeConstraint<T>(constraint: T): T;
            removeContactMaterial(material: Phaser.Physics.P2.ContactMaterial): Phaser.Physics.P2.ContactMaterial;
            removeSpring(spring: Phaser.Physics.P2.Spring): Phaser.Physics.P2.Spring;
            reset(): void;
            resume(): void;
            setBounds(x: number, y: number, width: number, height: number, left?: Boolean, right?: boolean, top?: boolean, bottom?: boolean, setCollisionGroup?: boolean): void;
            setBoundsToWorld(left?: boolean, right?: boolean, top?: boolean, bottom?: boolean, setCollisionGroup?: boolean): void;
            setCollisionGroup(object: any, group: Phaser.Physics.P2.CollisionGroup): void;
            setImpactEvents(state: boolean): void;
            setMaterial(material: Phaser.Physics.P2.Material, bodies?: Phaser.Physics.P2.Body[]): void;
            setPostBroadphaseCallback(callback: Function, context: any): void;
            setWorldMaterial(material: Phaser.Physics.P2.Material, left?: boolean, right?: boolean, top?: boolean, bottom?: boolean): void;
            toJSON(): any;
            update(): void;
            updateBoundsCollisionGroup(setCollisionGroup?: boolean): void;

        }

        module P2 {

            class Body {

                static DYNAMIC: number;
                static STATIC: number;
                static KINEMATIC: number;

                constructor(game: Phaser.Game, sprite?: Phaser.Sprite, x?: number, y?: number, mass?: number);

                allowSleep: boolean;
                angle: number;
                angularDamping: number;
                angularForce: number;
                angularVelocity: number;
                collidesWith: Phaser.Physics.P2.CollisionGroup[];
                collideWorldBounds: boolean;
                damping: number;
                data: p2.Body;
                debug: boolean;
                debugBody: Phaser.Physics.P2.BodyDebug;
                dynamic: boolean;
                fixedRotation: boolean;
                force: Phaser.Physics.P2.InversePointProxy;
                kinematic: boolean;
                game: Phaser.Game;
                gravity: Phaser.Point;
                id: number;
                inertia: number;
                mass: number;
                motionState: number;
                offset: Phaser.Point;
                onBeginContact: Phaser.Signal;
                onEndContact: Phaser.Signal;
                rotation: number;
                removeNextStep: boolean;
                sprite: Phaser.Sprite;
                sleepSpeedLimit: number;
                static: boolean;
                type: number;
                velocity: Phaser.Physics.P2.InversePointProxy;
                world: Phaser.Physics.P2;
                x: number;
                y: number;

                addToWorld(): void;
                addCapsule(length: number, radius: number, offsetX?: number, offsetY?: number, rotation?: number): p2.Capsule;
                addCircle(radius: number, offsetX?: number, offsetY?: number, rotation?: number): p2.Circle;
                addFixture(fixtureData: string): p2.Shape[];
                addLine(length: number, offsetX?: number, offsetY?: number, rotation?: number): p2.Line;
                addParticle(offsetX?: number, offsetY?: number, rotation?: number): p2.Particle;
                addPolygon(options: { optimalDecomp?: boolean; skipSimpleCheck?: boolean; removeCollinearPoints?: boolean; }, points: number[][]): boolean;
                addPhaserPolygon(key: string, object: string): Phaser.Physics.P2.FixtureList;
                addPlane(offsetX?: number, offsetY?: number, rotation?: number): p2.Plane;
                addRectangle(width: number, height: number, offsetX?: number, offsetY?: number, rotation?: number): p2.Rectangle;
                addShape(shape: p2.Shape, offsetX?: number, offsetY?: number, rotation?: number): p2.Shape;
                adjustCenterOfMass(): void;
                applyDamping(dt: number): void;
                applyForce(force: number[], worldX: number, worldY: number): void;
                clearCollision(clearGroup?: boolean, cleanMask?: boolean, shape?: p2.Shape): void;
                clearShapes(): void;
                collides(group: any, callback?: Function, callbackContext?: any, shape?: p2.Shape): void;
                createBodyCallback(object: any, callback: Function, callbackContext: any): void;
                createGroupCallback(group: Phaser.Physics.P2.CollisionGroup, callback: Function, callbackContext: any): void;
                destroy(): void;
                getCollisionMask(): number;
                loadPolygon(key: string, object: string): boolean;
                moveBackward(speed: number): void;
                moveDown(speed: number): void;
                moveForward(speed: number): void;
                moveLeft(speed: number): void;
                moveRight(speed: number): void;
                moveUp(speed: number): void;
                preUpdate(): void;
                postUpdate(): void;
                removeFromWorld(): void;
                removeShape(shape: p2.Shape): boolean;
                reverse(speed: number): void;
                rotateLeft(speed: number): void;
                rotateRight(speed: number): void;
                reset(x: number, y: number, resetDamping?: boolean, resetMass?: boolean): void;
                shapeChanged(): void;
                setCircle(radius: number, offsetX?: number, offsetY?: number, rotation?: number): p2.Circle;
                setCollisionGroup(group: Phaser.Physics.P2.CollisionGroup, shape?: p2.Shape): void;
                setRectangle(width?: number, height?: number, offsetX?: number, offsetY?: number, rotation?: number): p2.Rectangle;
                setRectangleFromSprite(sprite: any): p2.Rectangle;
                setMaterial(material: Phaser.Physics.P2.Material, shape?: p2.Shape): void;
                setZeroDamping(): void;
                setZeroForce(): void;
                setZeroRotation(): void;
                setZeroVelocity(): void;
                toLocalFrame(out: number[], worldPoint: number[]): void;
                thrust(speed: number): void;
                toWorldFrame(out: number[], localPoint: number[]): void;
                updateCollisionMask(shape?: p2.Shape): void;

            }

            class BodyDebug extends Phaser.Group {

                constructor(game: Phaser.Game, body: Phaser.Physics.P2.Body, settings: { pixelsPerLengthUnit?: number; debugPolygons?: boolean; lineWidth?: number; alpha?: number; });

                body: Phaser.Physics.P2.Body;
                canvas: Phaser.Graphics;
                ppu: number;

                updateSpriteTransform(): void;
                draw(): void;

            }

            class CollisionGroup {

                constructor(bitmask: number);

                mask: number;

            }

            class ContactMaterial extends p2.ContactMaterial {

            }

            class DistanceConstraint extends p2.DistanceConstraint {

                constructor(world: Phaser.Physics.P2, bodyA: Phaser.Physics.P2.Body, bodyB: Phaser.Physics.P2.Body, distance: number, maxForce: number);

                game: Phaser.Game;
                world: Phaser.Physics.P2;

            }

            class FixtureList {

                constructor(list: any[]);

                flatten(array: any[]): any[];
                getFixtures(keys: string): any[];
                getFixtureByKey(key: string): any[];
                getGroup(groupID: number): any[];
                init(): void;
                parse(): void;
                setCategory(bit: number, fictureKey: string): void;
                setMask(bit: number, fixtureKey: string): void;
                setMaterial(material: any, fixtureKey: string): void;
                setSensor(value: boolean, fixtureKey: string): void;

            }

            class GearConstraint extends p2.GearConstraint {

                constructor(world: Phaser.Physics.P2, bodyA: Phaser.Physics.P2.Body, bodyB: Phaser.Physics.P2.Body, angle?: number, ratio?: number);

                game: Phaser.Game;
                world: Phaser.Physics.P2;

            }

            class InversePointProxy {

                constructor(world: Phaser.Physics.P2, destination: any);

                x: number;
                y: number;
                mx: number;
                my: number;

            }

            class LockConstraint extends p2.LockConstraint {

                constructor(world: Phaser.Physics.P2, bodyA: Phaser.Physics.P2.Body, bodyB: Phaser.Physics.P2.Body, offset?: number[], angle?: number, maxForce?: number);

                game: Phaser.Game;
                world: Phaser.Physics.P2;
            }

            class Material extends p2.Material {

                constructor(name: string);

                name: string;

            }

            class PointProxy {

                constructor(world: Phaser.Physics.P2, destination: any);

                x: number;
                y: number;
                mx: number;
                my: number;

            }

            class PrismaticConstraint extends p2.PrismaticConstraint {

                constructor(world: Phaser.Physics.P2, bodyA?: Phaser.Physics.P2.Body, bodyB?: Phaser.Physics.P2.Body, lockRotation?: boolean, anchorA?: number[], anchorB?: number[], axis?: number[], maxForce?: number);

                game: Phaser.Game;
                world: Phaser.Physics.P2;

            }

            class RevoluteContraint extends p2.RevoluteConstraint {

                constructor(world: Phaser.Physics.P2, bodyA: Phaser.Physics.P2.Body, pivotA: number[], bodyB: Phaser.Physics.P2.Body, pivotB: number[], maxForce?: number);

                game: Phaser.Game;
                world: Phaser.Physics.P2;

            }

            class Spring {

                constructor(world: Phaser.Physics.P2, bodyA: Phaser.Physics.P2.Body, bodyB: Phaser.Physics.P2.Body, restLength?: number, stiffness?: number, damping?: number, worldA?: number[], worldB?: number[], localA?: number[], localB?: number[]);

                data: p2.LinearSpring;
                game: Phaser.Game;
                world: Phaser.Physics.P2;

            }
        }
    }

    class Plugin extends StateCycle {

        constructor(game: Phaser.Game, parent: any);

        active: boolean;
        game: Phaser.Game;
        hasPostRender: boolean;
        hasPostUpdate: boolean;
        hasPreUpdate: boolean;
        hasRender: boolean;
        hasUpdate: boolean;
        parent: any;
        visible: boolean;

        destroy(): void;
        postRender(): void;
        preUpdate(): void;
        render(): void;
        update(): void;

    }

    module Plugin {

        class AStar extends Phaser.Plugin {

            static VERSION: string;
            static COST_ORTHAGONAL: number;
            static COST_DIAGAONAL: number;
            static DISTANCE_MANHATTEN: string;
            static DISTANCE_EUCLIDIAN: string;

            constructor(parent: any);

            parent: any;
            version: string;

            findPath(startPoint: Phaser.Point, goalPoint: Phaser.Point): Phaser.Plugin.AStar.AStarPath;
            isWalkable(x: number, y: number): boolean;
            setAStarMap(map: Phaser.Tilemap, layerName: string, tilesetName: string): Phaser.Plugin.AStar;

        }

        module AStar {

            class AStarNode {

                constructor(x: number, y: number, isWalkable: boolean);

                x: number;
                y: number;
                g: number;
                h: number;
                f: number;
                parent: Phaser.Plugin.AStar.AStarNode;
                travelCost: number;
                walkable: boolean;

            }

            class AStarPath {

                constructor(nodes: Phaser.Plugin.AStar.AStarNode[], start: Phaser.Plugin.AStar.AStarNode, goal: Phaser.Plugin.AStar.AStarNode);

                nodes: Phaser.Plugin.AStar.AStarNode[];
                start: Phaser.Plugin.AStar.AStarNode;
                goal: Phaser.Plugin.AStar.AStarNode;
                visited: Phaser.Plugin.AStar.AStarNode[];

            }

        }

        class ColorHarmony extends Phaser.Plugin {

            getAnalogousHarmony(color: number, threshold?: number): any;
            getComplementHarmony(color: number): number;
            getSplitComplementHarmony(color: number, threshold: number): any;
            getTriadicHarmony(color: number): any;

        }

        class CSS3Filters extends Phaser.Plugin {

            constructor(parent: any);

            blur: number;
            brightness: number;
            contrast: number;
            grayscale: number;
            hueRotate: number;
            invert: number;
            opacity: number;
            saturate: number;
            sepia: number;

        }

        class TilemapWalker extends Phaser.Plugin {

            constructor(game: Phaser.Game, map: Phaser.Tilemap, layer?: any, x?: number, y?: number);

            collides: boolean;
            game: Phaser.Game;
            history: boolean;
            facing: number;
            map: Phaser.Tilemap;
            location: Phaser.Point;
            locationLayer: number;

            checkTile(x: number, y: number): boolean;
            getTileFromLocation(x: number, y: number): Phaser.Tile;
            getTiles(width: number, height: number, center?: boolean): any[];
            getTileBehind(distance?: number): Phaser.Tile;
            getTileBehindLeft(distance?: number): Phaser.Tile;
            getTileBehindRight(distance?: number): Phaser.Tile;
            getTileAhead(distance?: number): Phaser.Tile;
            getTileAheadLeft(distance?: number): Phaser.Tile;
            getTileAheadRight(distance?: number): Phaser.Tile;
            getTileLeft(distance: number): Phaser.Tile;
            getTileRight(distance: number): Phaser.Tile;
            moveForward(): boolean;
            moveBackward(): boolean;
            moveLeft(): boolean;
            moveRight(): boolean;
            putTile(index: number): void;
            setLocation(x: number, y: number, layer?: any): boolean;
            turnLeft(): void;
            turnRight(): void;
            updateLocation(x: number, y: number): boolean;

        }

        class SamplePlugin extends Phaser.Plugin {

            constructor(game: Phaser.Game, parent: any);

            addSprite(sprite: Phaser.Sprite): void;
            update(): void;

        }

        class VirtualJoystick extends Phaser.Plugin {

            constructor(game: Phaser.Game, parent: any);

            angle: number;
            base: Phaser.Sprite;
            baseBMD: Phaser.BitmapData;
            baseCircle: Phaser.Circle;
            deltaX: number;
            deltaY: number;
            distance: number;
            force: number;
            isDragging: boolean;
            limit: number;
            limitPoint: Phaser.Point;
            location: Phaser.Point;
            nub: Phaser.Sprite;
            nubBMD: Phaser.BitmapData;
            speed: number;
            x: number;
            y: number;

            init(x: number, y: number, diameter?: number, limit?: number): void;
            move(pointer: Phaser.Pointer, x: number, y: number): void;
            render(): void;
            setVelocity(sprite: Phaser.Sprite, minSpeed?: number, maxSpeed?: number): Phaser.Sprite;
            startDrag(): void;
            stopDrag(nub: Phaser.Sprite, pointer: Phaser.Pointer): void;
            update(): void;

        }

        class Webcam extends Phaser.Plugin {

            constructor(game: Phaser.Game, parent: any);

            active: boolean;
            context: any;
            stream: any;
            video: HTMLVideoElement;

            connectCallback: (stream: any) => void;
            errorCallback: (e: any) => void;
            grab: (context: any, x: number, y: number) => void;
            start(width: number, height: number, context: any): void;
            stop(): void;
            update(): void;
        }



    }

    class PluginManager extends StateCycle {

        constructor(game: Phaser.Game, parent: any);

        game: Phaser.Game;
        plugins: Phaser.Plugin[];

        add(plugin: Phaser.Plugin, ...parameter: any[]): Phaser.Plugin;
        destroy(): void;
        postRender(): void;
        postUpdate(): void;
        preUpdate(): void;
        remove(plugin: Phaser.Plugin): void;
        removeAll(): void;
        render(): void;
        update(): void;

    }

    class Point extends PIXI.Point {

        constructor(x?: number, y?: number);

        x: number;
        y: number;

        static add(a: Phaser.Point, b: Phaser.Point, out?: Phaser.Point): Phaser.Point;
        static subtract(a: Phaser.Point, b: Phaser.Point, out?: Phaser.Point): Phaser.Point;
        static multiply(a: Phaser.Point, b: Phaser.Point, out?: Phaser.Point): Phaser.Point;
        static divide(a: Phaser.Point, b: Phaser.Point, out?: Phaser.Point): Phaser.Point;
        static equals(a: Phaser.Point, b: Phaser.Point): boolean;
        static angle(a: Phaser.Point, b: Phaser.Point): number;
        static angleSq(a: Phaser.Point, b: Phaser.Point): number;
        static negative(a: Phaser.Point, out?: Phaser.Point): Phaser.Point;
        static multiplyAdd(a: Phaser.Point, b: Phaser.Point, scale: number, out?: Phaser.Point): Phaser.Point;
        static interpolate(a: Phaser.Point, b: Phaser.Point, alpha: number, out?: Phaser.Point): Phaser.Point;
        static parse(obj: any, xProp?: string, yProp?: string): Phaser.Point;
        static perp(a: Phaser.Point, out?: Phaser.Point): Phaser.Point;
        static rperp(a: Phaser.Point, out?: Phaser.Point): Phaser.Point;
        static distance(a: any, b: any, round?: boolean): number;
        static project(a: Phaser.Point, b: Phaser.Point, out?: Phaser.Point): Phaser.Point;
        static projectUnit(a: Phaser.Point, b: Phaser.Point, out?: Phaser.Point): Phaser.Point;
        static normalRightHand(a: Phaser.Point, out?: Phaser.Point): Phaser.Point;
        static normalize(a: Phaser.Point, out?: Phaser.Point): Phaser.Point;
        static rotate(a: Phaser.Point, x: number, y: number, angle: number, asDegrees?: boolean, distance?: number): Phaser.Point;
        static centroid(points: Phaser.Point[], out?: Phaser.Point): Phaser.Point;

        add(x: number, y: number): Phaser.Point;
        angle(a: Phaser.Point, asDegrees?: boolean): number;
        angleSq(a: Phaser.Point): number;
        clamp(min: number, max: number): Phaser.Point;
        clampX(min: number, max: number): Phaser.Point;
        clampY(min: number, max: number): Phaser.Point;
        clone(output?: Phaser.Point): Phaser.Point;
        copyFrom(source: Phaser.Point): Phaser.Point;
        copyTo<T>(dest: T): T;
        ceil(): Phaser.Point;
        cross(a: Phaser.Point): number;
        divide(x: number, y: number): Phaser.Point;
        distance(dest: Phaser.Point, round?: boolean): number;
        dot(a: Phaser.Point): number;
        equals(a: Phaser.Point): boolean;
        floor(): Phaser.Point;
        getMagnitude(): number;
        getMagnitudeSq(): number;
        invert(): Phaser.Point;
        isZero(): boolean;
        multiply(x: number, y: number): Phaser.Point;
        normalize(): Phaser.Point;
        normalRightHand(): Phaser.Point;
        perp(): Phaser.Point;
        rperp(): Phaser.Point;
        rotate(x: number, y: number, angle: number, asDegrees?: boolean, distance?: number): Phaser.Point;
        set(x: number, y?: number): Phaser.Point;
        setMagnitude(magnitude: number): Phaser.Point;
        setTo(x: number, y?: number): Phaser.Point;
        subtract(x: number, y: number): Phaser.Point;
        toString(): string;

    }

    class Pointer {

        constructor(game: Phaser.Game, id: number);

        active: boolean;
        button: any;
        circle: Phaser.Circle;
        clientX: number;
        clientY: number;
        dirty: boolean;
        duration: number;
        exists: boolean;
        game: Phaser.Game;
        id: number;
        identifier: number;
        isDown: boolean;
        isMouse: boolean;
        isUp: boolean;
        movementX: number;
        movementY: number;
        msSinceLastClick: number;
        pageX: number;
        pageY: number;
        pointerId: number;
        position: Phaser.Point;
        positionDown: Phaser.Point;
        positionUp: Phaser.Point;
        previousTapTime: number;
        rawMovementX: number;
        rawMovementY: number;
        screenX: number;
        screenY: number;
        target: any;
        targetObject: any;
        timeDown: number;
        timeUp: number;
        totalTouches: number;
        type: number;
        withinGame: boolean;
        worldX: number;
        worldY: number;
        x: number;
        y: number;

        addClickTrampoline(name: string, callback: Function, callbackContext: any, ...callbackArgs: any[]): void;
        justPressed(duration?: number): boolean;
        justReleased(duration?: number): boolean;
        leave(event: any): void;
        move(event: any, fromClick?: boolean): void;
        reset(): void;
        resetMovement(): void;
        start(event: any): void;
        stop(event: any): void;
        update(): void;

    }

    class Polygon {

        constructor(points: any[]);

        area: number;
        points: any[]; //number : point
        type: number;

        clone(output: Phaser.Polygon): Phaser.Polygon;
        contains(x: number, y: number): boolean;
        setTo(points: any[]): void;

    }

    class QuadTree {

        constructor(x: number, y: number, width: number, height: number, maxObject?: number, maxLevels?: number, level?: number);

        bounds: {
            x: number;
            y: number;
            width: number;
            height: number;
            subWidth: number;
            subHeight: number;
            right: number;
            bottom: number;
        };
        level: number;
        maxObjects: number;
        maxLevels: number;
        objects: any[];
        nodes: any[];

        clear(): void;
        getIndex(rect: any): number;
        insert(body: any): void;
        populate(group: Phaser.Group): void;
        populateHandler(sprite: Phaser.Sprite): void;
        reset(x: number, y: number, width: number, height: number, maxObject?: number, maxLevels?: number, level?: number): void;
        retrieve(source: any): any[];
        split(): void;

    }

    class RandomDataGenerator {

        constructor(seeds: number[]);

        angle(): number;
        between(min: number, max: number): number;
        frac(): number;
        integer(): number;
        integerInRange(min: number, max: number): number;
        normal(): number;
        pick<T>(ary: T[]): T;
        real(): number;
        realInRange(min: number, max: number): number;
        sow(seeds: number[]): void;
        timestamp(min: number, max: number): number;
        uuid(): number;
        weightedPick<T>(ary: T[]): T;

    }

    class Rectangle {

        constructor(x: number, y: number, width: number, height: number);

        bottom: number;
        bottomRight: Phaser.Point;
        centerX: number;
        centerY: number;
        empty: boolean;
        halfHeight: number;
        halfWidth: number;
        height: number;
        left: number;
        perimeter: number;
        randomX: number;
        randomY: number;
        right: number;
        top: number;
        topLeft: Phaser.Point;
        topRight: Phaser.Point;
        volume: number;
        width: number;
        x: number;
        y: number;

        static aabb(points: Phaser.Point[], out?: Phaser.Rectangle): Phaser.Rectangle;
        static clone(a: Phaser.Rectangle, output?: Phaser.Rectangle): Phaser.Rectangle;
        static contains(a: Phaser.Rectangle, x: number, y: number): boolean;
        static containsPoint(a: Phaser.Rectangle, point: Phaser.Point): boolean;
        static containsRaw(rx: number, ry: number, rw: number, rh: number, x: number, y: number): boolean;
        static containsRect(a: Phaser.Rectangle, b: Phaser.Rectangle): boolean;
        static equals(a: Phaser.Rectangle, b: Phaser.Rectangle): boolean;
        static inflate(a: Phaser.Rectangle, dx: number, dy: number): Phaser.Rectangle;
        static inflatePoint(a: Phaser.Rectangle, point: Phaser.Point): Phaser.Rectangle;
        static intersection(a: Phaser.Rectangle, b: Phaser.Rectangle, out?: Phaser.Rectangle): Phaser.Rectangle;
        static intersects(a: Phaser.Rectangle, b: Phaser.Rectangle): boolean;
        static intersectsRaw(left: number, right: number, top: number, bottom: number, tolerance: number): boolean;
        static size(a: Phaser.Rectangle, output?: Phaser.Point): Phaser.Point;
        static union(a: Phaser.Rectangle, b: Phaser.Rectangle, out?: Phaser.Rectangle): Phaser.Rectangle;

        centerOn(x: number, y: number): Phaser.Rectangle;
        clone(output: Phaser.Rectangle): Phaser.Rectangle;
        contains(x: number, y: number): boolean;
        containsRect(b: Phaser.Rectangle): boolean;
        copyFrom(source: any): Phaser.Rectangle;
        copyTo(dest: any): any;
        equals(b: Phaser.Rectangle): boolean;
        floor(): void;
        floorAll(): void;
        inflate(dx: number, dy: number): Phaser.Rectangle;
        intersection(b: Phaser.Rectangle, out: Phaser.Rectangle): Phaser.Rectangle;
        intersects(b: Phaser.Rectangle, tolerance: number): boolean;
        intersectsRaw(left: number, right: number, top: number, bottom: number, tolerance: number): boolean;
        offset(dx: number, dy: number): Phaser.Rectangle;
        offsetPoint(point: Phaser.Point): Phaser.Rectangle;
        setTo(x: number, y: number, width: number, height: number): Phaser.Rectangle;
        scale(x: number, y?: number): Phaser.Rectangle;
        size(output?: Phaser.Point): Phaser.Point;
        toString(): string;
        union(b: Phaser.Rectangle, out?: Phaser.Rectangle): Phaser.Rectangle;

    }

    class RenderTexture extends PIXI.RenderTexture {

        constructor(game: Phaser.Game, width?: number, height?: number, key?: string, scaleMode?: number, resolution?: number);

        crop: PIXI.Rectangle;
        game: Phaser.Game;
        key: string;
        type: number;

        render(displayObject: PIXI.DisplayObject, position: Phaser.Point, clear?: boolean): void;
        renderXY(displayObject: PIXI.DisplayObject, x: number, y: number, clear?: boolean): void;

    }

    class RequestAnimationFrame {

        constructor(game: Phaser.Game, forceSetTimeOut?: boolean);

        game: Phaser.Game;
        isRunning: boolean;

        isRAF(): boolean;
        isSetTimeOut(): boolean;
        start(): boolean;
        stop(): void;
        updateRAF(rafTime: number): void;
        updateSetTimeout(): void;

    }

    class RetroFont extends Phaser.RenderTexture {

        constructor(game: Phaser.Game, key: string, characterWidth: number, characterHeight: number, chars: string, charsPerRow?: number, xSpacing?: number, ySpacing?: number, xOffset?: number, yOffset?: number);

        static ALIGN_CENTER: string;
        static ALIGN_LEFT: string;
        static ALIGN_RIGHT: string;
        static TEXT_SET1: string;
        static TEXT_SET2: string;
        static TEXT_SET3: string;
        static TEXT_SET4: string;
        static TEXT_SET5: string;
        static TEXT_SET6: string;
        static TEXT_SET7: string;
        static TEXT_SET8: string;
        static TEXT_SET9: string;
        static TEXT_SET10: string;
        static TEXT_SET11: string;

        align: string;
        autoUpperCase: boolean;
        characterHeight: number;
        characterPerRow: number;
        characterSpacingX: number;
        characterSpacingY: number;
        characterWidth: number;
        customSpacingX: number;
        customSpacingY: number;
        fixedWidth: number;
        fontSet: Image;
        frameData: Phaser.FrameData;
        multiLine: boolean;
        offsetX: number;
        offsetY: number;
        smoothed: string;
        stamp: Phaser.Image;
        text: string;

        buildRetroFontText(): void;
        getLongestLine(): number;
        pasteLine(line: string, x: number, y: number, customSpacingX: number): void;
        removeUnsupportedCharacters(stripCR?: boolean): string;
        setFixedWidth(width: number, lineAlignment?: string): void;
        setText(content: string, multiLine?: boolean, characterSpacing?: number, lineSpacing?: number, lineAlignment?: string, allowLowerCase?: boolean): void;
        updateOffset(x?: number, y?: number): void;

    }

    class Rope extends PIXI.Rope {

        constructor(game: Phaser.Game, x: number, y: number, key: any, frame?: any, points?: Phaser.Point[]);

        angle: number;
        animations: AnimationManager;
        autoCull: boolean;
        body: any;
        cameraOffset: Phaser.Point;
        checkWorldBounds: boolean;
        destroyPhase: boolean;
        exists: boolean;
        events: Phaser.Events;
        fixedToCamera: boolean;
        frame: number;
        frameName: string;
        game: Phaser.Game;
        input: Phaser.InputHandler;
        inputEnabled: boolean;
        key: any;
        name: string;
        points: Phaser.Point[];
        position: Phaser.Point;
        segments: Phaser.Rectangle[];
        type: number;
        world: Phaser.Point;
        x: number;
        y: number;
        z: number;

        destroy(destroyChildren?: boolean): void;
        loadTexture(key: any, frame?: any): void;
        play(): void;
        preUpdate(): void;
        postUpdate(): void;
        reset(x: number, y: number): void;
        setFrame(frame: Phaser.Frame): void;
        update(): void;
        updateAnimation(): void;

    }

    class Signal {

        active: boolean;
        boundDispatch: Function;
        memorize: boolean;

        add(listener: Function, listenerContext?: any, priority?: number): Phaser.SignalBinding;
        addOnce(listener: Function, listenerContext?: any, priority?: number): Phaser.SignalBinding;
        dispatch(...params: any[]): void;
        dispose(): void;
        forget(): void;
        getNumListeners(): number;
        halt(): void;
        has(listener: Function, context?: any): boolean;
        remove(listener: Function, context?: any): Function;
        removeAll(context?: any): void;
        toString(): string;
        validateListener(listener: Function, fnName: string): void;

    }

    class SignalBinding {

        constructor(signal: Phaser.Signal, listener: Function, isOnce: boolean, listenerContext?: any, priority?: number);

        active: boolean;
        callCount: number;
        context: any;
        params: any[];

        execute(paramsArr?: any[]): void;
        detach(): Function;
        isBound(): boolean;
        isOnce(): boolean;
        getListener(): Function;
        getSignal(): Phaser.Signal;
        toString(): string;

    }

    class SinglePad {

        constructor(game: Phaser.Game, padParent: any);

        callbackContext: any;
        connected: boolean;
        deadZone: number;
        game: Phaser.Game;
        index: number;
        onAxisCallback: Function;
        onConnectCallback: Function;
        onDisconnectCallback: Function;
        onDownCallback: Function;
        onFloatCallback: Function;
        onUpCallback: Function;

        axis(axisCode: number): number;
        addCallbacks(context: any, callbacks: any): void;
        buttonValue(buttonCode: number): number;
        connect(rawPad: any): void;
        destroy(): void;
        disconnect(): void;
        getButton(buttonCode: number): Phaser.GamepadButton;
        isDown(buttonCode: number): boolean;
        isUp(buttonCode: number): boolean;
        justPressed(buttonCode: number, duration?: number): boolean;
        justReleased(buttonCode: number, duration?: number): boolean;
        pollStatus(): void;
        processAxisChange(axisState: any): void;
        processButtonDown(buttonCode: number, value: any): void;
        processButtonFloat(buttonCode: number, value: any): void;
        processButtonUp(buttonCode: number, value: any): void;
        reset(): void;

    }

    class Sound {

        constructor(game: Phaser.Game, key: string, volume?: number, loop?: boolean, connect?: boolean);

        autoplay: boolean;
        allowMultiple: boolean;
        context: any;
        currentMarker: string;
        currentTime: number;
        destroy(remove?: boolean): void;
        duration: number;
        durationMS: number;
        externalNode: any;
        game: Phaser.Game;
        gainNode: any;
        isDecoded: boolean;
        isDecoding: boolean;
        isPlaying: boolean;
        key: string;
        loop: boolean;
        markers: any;
        masterGainNode: any;
        mute: boolean;
        name: string;
        onDecoded: Phaser.Signal;
        onFadeComplete: Phaser.Signal;
        onLoop: Phaser.Signal;
        onMarkerComplete: Phaser.Signal;
        onMute: Phaser.Signal;
        onPause: Phaser.Signal;
        onPlay: Phaser.Signal;
        onResume: Phaser.Signal;
        onStop: Phaser.Signal;
        override: boolean;
        paused: boolean;
        pausedPosition: number;
        pausedTime: number;
        pendingPlayback: boolean;
        position: number;
        startTime: number;
        stopTime: number;
        totalDuration: number;
        usingAudioTag: boolean;
        usingWebAudio: boolean;
        volume: number;

        addMarker(name: string, start: number, duration: number, volume?: number, loop?: boolean): void;
        destroy(): void;
        fadeIn(duration?: number, loop?: boolean): void;
        fadeOut(duration?: number): void;
        fadeTo(duration?: number, volume?: number): void;
        pause(): void;
        play(marker?: string, position?: number, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
        removeMarker(name: string): void;
        restart(marker: string, position: number, volume?: number, loop?: boolean): void;
        resume(): void;
        soundHasUnlocked(key: string): void;
        stop(): void;
        update(): void;

    }

    class SoundManager {

        constructor(game: Phaser.Game);

        channels: number;
        connectToMaster: boolean;
        context: any;
        game: Phaser.Game;
        mute: boolean;
        noAudio: boolean;
        onSoundDecode: Phaser.Signal;
        touchLocked: boolean;
        usingAudioTag: boolean;
        usingWebAudio: boolean;
        volume: number;

        add(key: string, volume?: number, loop?: boolean, connect?: boolean): Phaser.Sound;
        addSprite(key: string): Phaser.AudioSprite;
        boot(): void;
        decode(key: string, sound?: Phaser.Sound): void;
        destroy(): void;
        pauseAll(): void;
        play(key: string, volume?: number, loop?: boolean): Phaser.Sound;
        remove(sound: Phaser.Sound): boolean;
        removeByKey(key: string): number;
        resumeAll(): void;
        stopAll(): void;
        unlock(): void;
        update(): void;

    }

    class Sprite extends PIXI.Sprite {

        constructor(game: Phaser.Game, x: number, y: number, key?: any, frame?: any);

        alive: boolean;
        anchor: Phaser.Point;
        angle: number;
        animations: Phaser.AnimationManager;
        autoCull: boolean;
        body: any;
        cameraOffset: Phaser.Point;
        checkWorldBounds: boolean;
        cropRect: Phaser.Rectangle;
        debug: boolean;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
        destroyPhase: boolean;
        events: Phaser.Events;
        exists: boolean;
        fixedToCamera: boolean;
        frame: number;
        frameName: string;
        game: Phaser.Game;
        health: number;
        inCamera: boolean;
        input: Phaser.InputHandler;
        inputEnabled: boolean;
        inWorld: boolean;
        key: any;
        lifespan: number;
        name: string;
        outOfBoundsKill: boolean;
        position: Phaser.Point;
        physicsEnabled: boolean;
        renderOrderID: number;
        scale: Phaser.Point;
        scaleMin: Phaser.Point;
        scaleMax: Phaser.Point;
        smoothed: boolean;
        type: number;
        world: Phaser.Point;
        x: number;
        y: number;
        z: number;

        bringToTop(): Phaser.Sprite;
        crop(rect: Phaser.Rectangle, copy: boolean): void;
        damage(amount: number): Phaser.Sprite;
        destroy(destroyChildren?: boolean): void;
        drawPolygon(): void;
        kill(): Phaser.Sprite;
        loadTexture(key: any, frame: any, stopAnimation?: boolean): void;
        overlap(displayObject: any): boolean;
        play(name: string, frameRate?: number, loop?: boolean, killOnComplete?: boolean): Phaser.Animation;
        postUpdate(): void;
        preUpdate(): void;
        reset(x: number, y: number, health?: number): Phaser.Sprite;
        resetFrame(): void;
        revive(health?: number): Phaser.Sprite;
        setFrame(frame: Phaser.Frame): void;
        setScaleMinMax(minX?: number, minY?: number, maxX?: number, maxY?: number): void;
        update(): void;
        updateCrop(): void;

    }

    class SpriteBatch extends Phaser.Group {

        constructor(game: Phaser.Game, parent: any, name?: string, addedToStage?: boolean);

        type: number;

    }

    class Stage extends PIXI.Stage {

        constructor(game: Phaser.Game);

        backgroundColor: any;
        currentRenderOrderID: number;
        disableVisibilityChange: boolean;
        exists: boolean;
        game: Phaser.Game;
        name: string;
        smoothed: boolean;

        boot(): void;
        checkVisiblity(): void;
        destroy(): void;
        parseConfig(config: any): void;
        postUpdate(): void;
        preUpdate(): void;
        setBackgroundColor(backgroundColor: number): void;
        setBackgroundColor(backgroundColor: string): void;
        update(): void;
        visibilityChange(event: any): void;

    }

    interface ResizeCallback {
        (width: number, height: number): any;
    }

    class ScaleManager {

        constructor(game: Phaser.Game, width: number, height: number);
        constructor(game: Phaser.Game, width: string, height: string);

        static EXACT_FIT: number;
        static NO_SCALE: number;
        static SHOW_ALL: number;
        static RESIZE: number;
        static USER_SCALE: number;

        aspectRatio: number;
        bounds: Rectangle;
        boundingParent: HTMLElement;
        compatibility: {
            canExpandParent: boolean;
            forceMinimumDocumentHeight: boolean;
            noMargins: boolean;
            scrollTo: Point;
            supportsFullScreen: boolean;
        };
        currentScaleMode: number;
        dom: Phaser.DOM;
        enterIncorrectOrientation: Signal;
        enterFullScreen: Signal;
        enterLandscape: Signal;
        enterPortrait: Signal;
        event: any;
        forceLandscape: boolean;
        forcePortrait: boolean;
        fullScreenScaleMode: number;
        fullScreenFailed: Signal;
        fullScreenTarget: HTMLElement;
        game: Phaser.Game;
        grid: Phaser.FlexGrid;
        height: number;
        incorrectOrientation: boolean;
        isFullScreen: boolean;
        isPortrait: boolean;
        isLandscape: boolean;
        leaveFullScreen: Signal;
        leaveIncorrectOrientation: Signal;
        margin: { left: number; top: number; right: number; bottom: number; x: number; y: number; };
        maxIterations: number;
        maxHeight: number;
        maxWidth: number;
        minHeight: number;
        minWidth: number;
        offset: Point;
        onFullScreenInit: Phaser.Signal;
        onFullScreenChange: Phaser.Signal;
        onFullScreenError: Phaser.Signal;
        onOrientationChange: Phaser.Signal;
        onSizeChange: Signal;
        orientation: number;
        pageAlignHorizontally: boolean;
        pageAlignVertically: boolean;
        parentNode: HTMLElement;
        parentIsWindow: boolean;
        parentScaleFactor: Point;
        scaleFactor: Point;
        scaleFactorInversed: Point;
        scaleMode: number;
        screenOrientation: string;
        sourceAspectRatio: number;
        trackParentInterval: number;
        width: number;
        windowConstraints: {
            bottom: boolean;
            right: boolean;
        };

        boot(): void;
        checkOrientationState(): boolean;
        createFullScreenTarget(): HTMLDivElement;
        destroy(): void;
        forceOrientation(forceLandscape: boolean, forcePortrait?: boolean): void;
        getParentBounds(target?: Rectangle): Rectangle;
        parseConfig(config: any): void;
        preUpdate(): void;
        pauseUpdate(): void;
        refresh(): void;
        setGameSize(width: number, height: number): void;
        setResizeCallback(callback: ResizeCallback, context: any): void;
        setUserScale(hScale: number, vScale: number, hTrim?: number, vTrim?: number): void;
        setMinMax(minWidth: number, minHeight: number, maxWidth?: number, maxHeight?: number): void;
        setupScale(width: number, height: number): void;
        setupScale(width: string, height: string): void;
        scaleSprite(sprite: Sprite, width?: number, height?: number, letterBox?: boolean): Sprite;
        scaleSprite(sprite: Image, width?: number, height?: number, letterBox?: boolean): Sprite;
        startFullScreen(antialias?: boolean, allowTrampoline?: boolean): boolean;
        stopFullScreen(): boolean;

    }

    class DOM {

        static visualBounds: Phaser.Rectangle;
        static layoutBounds: Phaser.Rectangle;
        static documentBounds: Phaser.Rectangle;

        static calibrate(coords: any, cushion?: number): any;
        static getAspectRatio(object: any): number;
        static getScreenOrientation(primaryFallback?: string): string;
        static getBounds(element: any, cushion?: number): any;
        static getOffset(element: any, point?: Point): Point;
        static inLayoutViewport(element: any, cushion?: number): boolean;

    }

    class State {

        add: Phaser.GameObjectFactory;
        cache: Phaser.Cache;
        camera: Phaser.Camera;
        game: Phaser.Game;
        input: Phaser.Input;
        load: Phaser.Loader;
        make: Phaser.GameObjectCreator;
        math: Phaser.Math;
        particles: Phaser.Particles;
        physics: Phaser.Physics;
        rnd: Phaser.RandomDataGenerator;
        scale: Phaser.ScaleManager;
        sound: Phaser.SoundManager;
        stage: Phaser.Stage;
        time: Phaser.Time;
        tweens: Phaser.TweenManager;
        world: Phaser.World;

        create(): void;
        loadRender(): void;
        loadUpdate(): void;
        paused(): void;
        preload(): void;
        render(): void;
        resize(): void;
        shutdown(): void;
        update(): void;

    }

    class StateCycle {

        preUpdate(): void;
        update(): void;
        render(): void;
        postRender(): void;
        destroy(): void;

    }

    class StateManager {

        constructor(game: Phaser.Game, pendingState?: Phaser.State);

        current: string;
        game: Phaser.Game;
        onCreateCallback: Function;
        onInitCallback: Function;
        onLoadRenderCallback: Function;
        onLoadUpdateCallback: Function;
        onPausedCallback: Function;
        onPauseUpdateCallback: Function;
        onPreloadCallback: Function;
        onPreRenderCallback: Function;
        onRenderCallback: Function;
        onResumedCallback: Function;
        onResizeCallback: Function;
        onShutDownCallback: Function;
        onUpdateCallback: Function;
        states: any;

        add(key: string, state: any, autoStart?: boolean): void;
        checkState(key: string): boolean;
        clearCurrentState(): void;
        destroy(): void;
        getCurrentState(): Phaser.State;
        link(key: string): void;
        loadComplete(): void;
        pause(): void;
        preRender(elapsedTime: number): void;
        preUpdate(): void;
        render(): void;
        remove(key: string): void;
        resume(): void;
        restart(clearWorld?: boolean, clearCache?: boolean): void;
        resize(width: number, height: number): void;
        start(key: string, clearWorld?: boolean, clearCache?: boolean, ...args: any[]): void;
        update(): void;
        unlink(key: string): void;

    }

    class Text extends PIXI.Text {

        constructor(game: Phaser.Game, x: number, y: number, text: string, style: any);

        align: string;
        angle: number;
        cameraOffset: Phaser.Point;
        colors: string[];
        destroyPhase: boolean;
        events: Phaser.Events;
        exists: boolean;
        fill: any;
        fixedToCamera: boolean;
        font: string;
        fontSize: number;
        fontWeight: string;
        game: Phaser.Game;
        input: Phaser.InputHandler;
        inputEnabled: boolean;
        lineSpacing: number;
        name: string;
        position: Phaser.Point;
        shadowBlur: number;
        shadowColor: string;
        shadowOffsetX: number;
        shadowOffsetY: number;
        stroke: string;
        strokeThickness: number;
        scale: Phaser.Point;
        text: string;
        type: number;
        world: Phaser.Point;
        wordWrap: boolean;
        wordWrapWidth: number;
        z: number;

        addColor(color: string, position: number): void;
        clearColors(): void;
        destroy(destroyChildren?: boolean): void;
        postUpdate(): void;
        preUpdate(): void;
        setShadow(x?: number, y?: number, color?: any, blur?: number): void;
        setStyle(style?: { font?: string; fill?: any; align?: string; stroke?: string; strokeThickness?: number; wordWrap?: boolean; wordWrapWidth?: number; shadowOffsetX?: number; shadowOffsetY?: number; shadowColor?: string; shadowBlur?: number; }): void;
        update(): void;

    }

    class Tile {

        constructor(layer: any, index: number, x: number, y: Number, width: number, height: number);//

        alpha: number;
        bottom: number;
        callback: Function;
        callbackContext: any;
        centerX: number;
        centerY: number;
        canCollide: boolean;
        collideDown: boolean;
        collideLeft: boolean;
        collideNone: boolean;
        collideRight: boolean;
        collisionCallback: Function;
        collisionCallbackContext: any;
        collides: boolean;
        collideUp: boolean;
        faceBottom: boolean;
        faceLeft: boolean;
        faceRight: boolean;
        faceTop: boolean;
        game: Phaser.Game;
        height: number;
        index: number;
        layer: any;
        left: number;
        properties: any;
        right: number;
        scanned: boolean;
        top: number;
        width: number;
        worldX: number;
        worldY: number;
        x: number;
        y: number;

        copy(tile: Phaser.Tile): Phaser.Tile;
        containsPoint(x: number, y: number): boolean;
        destroy(): void;
        intersects(x: number, y: number, right: number, bottom: number): boolean;
        isInterested(collides: boolean, faces: boolean): boolean;
        resetCollision(): void;
        setCollision(left: boolean, right: boolean, up: boolean, down: boolean): void;
        setCollisionCallback(callback: Function, context: any): void;

    }

    class Tilemap {

        constructor(game: Phaser.Game, key?: string, tileWidth?: number, tileHeight?: number, width?: number, height?: number);

        static CSV: number;
        static TILED_JSON: number;
        static NORTH: number;
        static EAST: number;
        static SOUTH: number;
        static WEST: number;

        collision: any[];
        collideIndexes: any[];
        currentLayer: number;
        debugMap: any[];
        format: number;
        game: Phaser.Game;
        height: number;
        heightInPixels: number;
        images: any[];
        key: string;
        layer: Phaser.TilemapLayer[];
        layers: any[];
        objects: any[];
        orientation: string;
        properties: any;
        tileHeight: number;
        tiles: Phaser.Tile[];
        tilesets: Phaser.Tileset[];
        tileWidth: number;
        version: number;
        width: number;
        widthInPixels: number;

        addTilesetImage(tileset: string, key?: string, tileWidth?: number, tileHeight?: number, tileMargin?: number, tileSpacing?: number, gid?: number): Phaser.Tileset;
        calculateFaces(layer: number): void;
        copy(x: number, y: number, width: number, height: number, layer?: any): Phaser.Tile[];
        create(name: string, width: number, height: number, tileWidth: number, tileHeight: number, group?: Phaser.Group): Phaser.TilemapLayer;
        createBlankLayer(name: string, width: number, height: number, tileWidth: number, tileHeight: number, group?: Phaser.Group): Phaser.TilemapLayer;
        createFromObjects(name: string, gid: number, key: string, frame?: any, exists?: boolean, autoCull?: boolean, group?: Phaser.Group, CustomClass?: any, adjustY?: boolean): void;
        createFromTiles(tiles: any, replacements: any, key: string, layer?: any, group?: Phaser.Group, properties?: any): number;
        createLayer(layer: any, width?: number, height?: number, group?: Phaser.Group): Phaser.TilemapLayer;
        destroy(): void;
        dump(): void;
        fill(index: number, x: number, y: number, width: number, height: number, layer?: any): void;
        forEach(callback: Function, context: any, x: number, y: Number, width: number, height: number, layer?: any): void;
        getImageIndex(name: string): number;
        getIndex(location: any[], name: string): number;
        getLayer(layer: any): number;
        getLayerIndex(name: string): number;
        getObjectIndex(name: string): number;
        getTile(x: number, y: number, layer?: any, nonNull?: boolean): Phaser.Tile;
        getTileAbove(layer: number, x: number, y: number): Phaser.Tile;
        getTileBelow(layer: number, x: number, y: number): Phaser.Tile;
        getTileLeft(layer: number, x: number, y: number): Phaser.Tile;
        getTileRight(layer: number, x: number, y: number): Phaser.Tile;
        getTilesetIndex(name: string): number;
        getTileWorldXY(x: number, y: number, tileWidth?: number, tileHeight?: number, layer?: any): Phaser.Tile;
        hasTile(x: number, y: number, layer: Phaser.TilemapLayer): boolean;
        paste(x: number, y: number, tileblock: Phaser.Tile[], layer?: any): void;
        putTile(tile: any, x: number, y: number, layer?: any): Phaser.Tile;
        putTileWorldXY(tile: any, x: number, y: number, tileWidth: number, tileHeight: number, layer?: any): void;
        random(x: number, y: number, width: number, height: number, layer?: any): void;
        removeAllLayers(): void;
        removeTile(x: number, y: number, layer?: any): Phaser.Tile;
        removeTileWorldXY(x: number, y: number, tileWidth: number, tileHeight: number, layer?: any): Phaser.Tile;
        replace(source: number, dest: number, x: number, y: number, width: number, height: number, layer?: any): void;
        searchTileIndex(index: number, skip?: number, reverse?: boolean, layer?: any): Phaser.Tile;
        setCollision(indexes: any, collides?: boolean, layer?: any, recalculate?: boolean): void;
        setCollisionBetween(start: number, stop: number, collides?: boolean, layer?: any, recalculate?: boolean): void;
        setCollisionByExclusion(indexes: any[], collides?: boolean, layer?: any, recalculate?: boolean): void;
        setCollisionByIndex(index: number, collides?: boolean, layer?: number, recalculate?: boolean): void;
        setLayer(layer: any): void;
        setPreventRecalculate(value: boolean): void;
        setTileIndexCallback(indexes: any, callback: Function, callbackContext: any, layer?: any): void;
        setTileLocationCallback(x: number, y: number, width: number, height: number, callback: Function, callbackContext: any, layer?: any): void;
        setTileSize(tileWidth: number, tileHeight: number): void;
        shuffle(x: number, y: number, width: number, height: number, layer: any): void;
        swap(tileA: number, tileB: number, x: number, y: number, width: number, height: number, layer?: any): void;

    }

    class TilemapLayer extends Phaser.Image {

        constructor(game: Phaser.Game, tilemap: Phaser.Tilemap, index: number, width?: number, height?: number);

        baseTexture: PIXI.BaseTexture;
        cameraOffset: Phaser.Point;
        canvas: HTMLCanvasElement;
        collisionHeight: number;
        collisionWidth: number;
        context: CanvasRenderingContext2D;
        debug: boolean;
        debugAlpha: number;
        debugCallbackColor: string;
        debugColor: string;
        debugSettings: { missingImageFill: string; debuggedTileOverfill: string; forceFullRedraw: boolean; debugAlpha: number; facingEdgeStroke: string; collidingTileOverfill: string; };
        dirty: boolean;
        fixedToCamera: boolean;
        game: Phaser.Game;
        index: number;
        layer: Phaser.TilemapLayer;
        map: Phaser.Tilemap;
        name: string;
        rayStepRate: number;
        renderSettings: { enableScrollDelta: boolean; overdrawRatio: number; };
        scrollFactorX: number;
        scrollFactorY: number;
        scrollX: number;
        scrollY: number;
        texture: PIXI.Texture;
        textureFrame: Phaser.Frame;
        tileColor: string;
        type: number;
        wrap: boolean;

        getRayCastTiles(line: Phaser.Line, stepRate?: number, collides?: boolean, interestingFace?: boolean): Phaser.Tile[];
        getTiles(x: number, y: number, width: number, height: number, collides?: boolean, interestingFace?: boolean): Phaser.Tile[];
        getTileX(x: number): number;
        getTileXY(x: number, y: number, point: Phaser.Point): Phaser.Point;
        getTileY(y: number): number;
        postUpdate(): void;
        render(): void;
        resizeWorld(): void;
        resetTilesetCache(): void;
        updateMax(): void;

    }

    class TilemapParser {

        static getEmptyData(tileWidth?: number, tileHeight?: number, width?: number, height?: number): any;
        static parse(game: Phaser.Game, key: string, tileWidth?: number, tileHeight?: number, width?: number, height?: number): any;
        static parseCSV(key: string, data: string, tileWidth?: number, tileHeight?: number): any;
        static parseJSON(json: any): any;

    }

    class Tileset {

        constructor(name: string, firstgid: number, width?: number, height?: number, margin?: number, spacing?: number, properties?: any);

        columns: number;
        firstgid: number;
        image: any;
        name: string;
        properties: any;
        rows: number;
        tileHeight: number;
        tileMargin: number;
        tileSpacing: number;
        tileWidth: number;
        total: number;

        containsTileIndex(tileIndex: number): boolean;
        draw(context: CanvasRenderingContext2D, x: number, y: number, index: number): void;
        setImage(image: any): void;
        setSpacing(margin?: number, spacing?: number): void;

    }

    class TileSprite extends PIXI.TilingSprite {

        constructor(game: Phaser.Game, x: number, y: number, width: number, height: number, key?: any, frame?: any);

        alive: boolean;
        angle: number;
        animations: Phaser.AnimationManager;
        autoCull: boolean;
        body: any;
        cameraOffset: Phaser.Point;
        checkWorldBounds: boolean;
        destroyPhase: boolean;
        events: Phaser.Events;
        exists: boolean;
        fixedToCamera: boolean;
        frame: number;
        frameName: string;
        game: Phaser.Game;
        input: Phaser.InputHandler;
        inputEnabled: boolean;
        key: any;
        name: string;
        position: Phaser.Point;
        type: number;
        world: Phaser.Point;
        z: number;

        autoScroll(x: number, y: number): void;
        destroy(destroyChildren: boolean): void;
        loadTexture(key: any, frame: any): void;
        play(name: string, frameRate?: number, loop?: boolean, killOnComplete?: boolean): Phaser.Animation;
        postUpdate(): void;
        preUpdate(): void;
        reset(x: number, y: number): Phaser.TileSprite;
        setFrame(frame: Phaser.Frame): void;
        stopScroll(): void;
        update(): void;

    }

    class Time {

        constructor(game: Phaser.Game);

        advancedTiming: boolean;
        desiredFps: number;
        elapsed: number;
        events: Phaser.Timer;
        elapsedMS: number;
        fps: number;
        fpsMax: number;
        fpsMin: number;
        frames: number;
        game: Phaser.Game;
        lastTime: number;
        msMax: number;
        msMin: number;
        now: number;
        pausedTime: number;
        pauseDuration: number;
        physicsElapsed: number;
        physicsElapsedMS: number;
        prevTime: number;
        slowMotion: number;
        suggestedFps: number;
        time: number;
        timeExpected: number;
        timeToCall: number;

        add(timer: Phaser.Timer): Phaser.Timer;
        boot(): void;
        create(autoDestroy?: boolean): Phaser.Timer;
        elapsedSecondsSince(since: number): number;
        elapsedSince(since: number): number;
        removeAll(): void;
        reset(): void;
        totalElapsedSeconds(): number;
        update(time: number): void;

    }

    class Timer {

        constructor(game: Phaser.Game, autoDestroy?: boolean);

        static HALF: number;
        static MINUTE: number;
        static QUARTER: number;
        static SECOND: number;

        autoDestroy: boolean;
        duration: number;
        events: Phaser.TimerEvent[];
        expired: boolean;
        game: Phaser.Game;
        length: number;
        ms: number;
        next: number;
        nextTick: number;
        onComplete: Phaser.Signal;
        running: boolean;
        paused: boolean;
        seconds: number;

        add(delay: number, callback: Function, callbackContext: any, ...args: any[]): Phaser.TimerEvent;
        clearPendingEvents(): void;
        destroy(): void;
        loop(delay: number, callback: Function, callbackContext: any, ...args: any[]): Phaser.TimerEvent;
        order(): void;
        pause(): void;
        remove(event: Phaser.TimerEvent): boolean;
        removeAll(): void;
        repeat(delay: number, repeatCount: number, callback: Function, callbackContext: any, ...args: any[]): Phaser.TimerEvent;
        resume(): void;
        sortHandler(a: any, b: any): number;
        start(startDelay?: number): void;
        stop(clearEvents?: boolean): void;
        update(time: number): boolean;

    }

    class TimerEvent {

        constructor(timer: Phaser.Timer, delay: number, tick: number, repeatCount: number, loop: boolean, callback: Function, callbackContext: any, ...args: any[]);

        args: any[];
        callback: Function;
        callbackContext: any;
        delay: number;
        loop: boolean;
        pendingDelete: boolean;
        repeatCount: number;
        tick: number;
        timer: Phaser.Timer;

    }

    class Touch {

        constructor(game: Phaser.Game);

        callbackContext: any;
        disabled: boolean;
        enabled: boolean;
        event: any;
        game: Phaser.Game;
        preventDefault: boolean;
        touchCancelCallback: Function;
        touchEndCallback: Function;
        touchEnterCallback: Function;
        touchLeaveCallback: Function;
        touchMoveCallback: Function;
        touchStartCallback: Function;

        consumeTouchMove(): void;
        onTouchCancel(event: any): void;
        onTouchEnd(event: any): void;
        onTouchEnter(event: any): void;
        onTouchLeave(event: any): void;
        onTouchMove(event: any): void;
        onTouchStart(event: any): void;
        start(): void;
        stop(): void;

    }

    class Tween {

        constructor(target: any, game: Phaser.Game, manager: Phaser.TweenManager);

        chainedTween: Phaser.Tween;
        current: number;
        game: Phaser.Game;
        isRunning: boolean;
        isPaused: boolean;
        manager: Phaser.TweenManager;
        onChildComplete: Phaser.Signal;
        onComplete: Phaser.Signal;
        onLoop: Phaser.Signal;
        onRepeat: Phaser.Signal;
        onStart: Phaser.Signal;
        pendingDelete: boolean;
        properties: any;
        repeatCounter: number;
        repeatDelay: number;
        reverse: boolean;
        target: any;
        timeline: Phaser.TweenData[];
        timeScale: number;
        totalDuration: number;

        chain(...args: any[]): Phaser.Tween;
        delay(duration: number, index?: number): Phaser.Tween;
        easing(ease: Function, index?: number): Phaser.Tween;
        easing(ease: string, index?: number): Phaser.Tween;
        from(properties: any, duration?: number, ease?: Function, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Phaser.Tween;
        from(properties: any, duration?: number, ease?: string, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Phaser.Tween;
        generateData(frameRate?: number, data?: any): any[];
        interpolation(interpolation: Function, index?: number): Phaser.Tween;
        loop(value?: boolean): Phaser.Tween;
        onUpdateCallback(callback: Function, callbackContext: any): Phaser.Tween;
        pause(): void;
        repeat(total: number, index?: number): Phaser.Tween;
        repeatAll(total?: number): Phaser.Tween;
        resume(): void;
        start(index?: number): Phaser.Tween;
        stop(complete?: boolean): Phaser.Tween;
        to(properties: any, duration?: number, ease?: Function, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Phaser.Tween;
        to(properties: any, duration?: number, ease?: string, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Phaser.Tween;
        update(time: number): boolean;
        yoyo(enable: boolean, index?: number): Phaser.Tween;

    }

    class TweenData {

        constructor(parent: Phaser.Tween);

        static COMPLETE: number;
        static LOOPED: number;
        static PENDING: number;
        static RUNNING: number;

        delay: number;
        dt: number;
        duration: number;
        easingFunction: Function;
        game: Phaser.Game;
        inReverse: boolean;
        interpolationFunction: Function;
        isRunning: boolean;
        isFrom: boolean;
        parent: Phaser.Tween;
        percent: number;
        repeatCounter: number;
        startTime: number;
        value: number;
        yoyo: boolean;

        from(properties: any, duration?: number, ease?: Function, delay?: number, repeat?: number, yoyo?: boolean): Phaser.TweenData;
        generateData(frameRate?: number): any[];
        repeat(): number;
        start(): Phaser.TweenData;
        to(properties: any, duration?: number, ease?: Function, delay?: number, repeat?: number, yoyo?: boolean): Phaser.TweenData;
        update(): number;

    }

    class TweenManager {

        constructor(game: Phaser.Game);

        game: Phaser.Game;

        add(tween: Phaser.Tween): Phaser.Tween;
        create(object: any): Phaser.Tween;
        getAll(): Phaser.Tween[];
        isTweening(object: any): boolean;
        remove(tween: Phaser.Tween): Phaser.Tween;
        removeAll(): void;
        removeFrom(obj: any, children?: boolean): void;
        resumeAll(): void;
        update(): boolean;
        pauseAll(): void;

    }

    class Utils {

        static extend(deep: boolean, target: any): any;
        static getProperty(obj: any, prop: string): any;
        static isPlainObject(object: any): boolean;
        static mixin(from: any, to: any): any;
        static pad(str: string, len: number, pad: number, dir?: number): string;
        static parseDimension(size: any, dimension: number): number;
        static rotateArray<T>(array: T[], direction: any): T;
        static setProperty(obj: any, prop: string, value: any): any;
        static shuffle<T>(array: T[]): T[];
        static transposeArray<T>(array: T[]): T[];

    }

    module Utils {

        class Debug {

            constructor(game: Phaser.Game);

            bmd: Phaser.BitmapData;
            canvas: HTMLCanvasElement;
            columnWidth: number;
            context: CanvasRenderingContext2D;
            currentAlpha: number;
            currentX: number;
            currentY: number;
            dirty: boolean;
            font: string;
            game: Phaser.Game;
            lineHeight: number;
            renderShadow: boolean;
            sprite: Phaser.Image;

            AStar(astar: Phaser.Plugin.AStar, x: number, y: number, showVisited: boolean): void;
            boot(): void;
            body(sprite: Phaser.Sprite, color?: string, filled?: boolean): void;
            bodyInfo(sprite: Phaser.Sprite, x: number, y: Number, color?: string): void;
            box2dBody(body: Phaser.Sprite, color?: string): void;
            box2dWorld(): void;
            cameraInfo(camera: Phaser.Camera, x: number, y: number, color?: string): void;
            geom(object: any, color?: string, fiiled?: boolean, forceType?: number): void;
            inputInfo(x: number, y: number, color?: string): void;
            lineInfo(line: Phaser.Line, x: number, y: number, color?: string): void;
            key(key: Phaser.Key, x?: number, y?: number, color?: string): void;
            line(): void;
            preUpdate(): void;
            pixel(x: number, y: number, color?: string, size?: number): void;
            pointer(pointer: Phaser.Pointer, hideIfUp?: boolean, downColor?: string, upColor?: string, color?: string): void;
            quadTree(quadtree: Phaser.QuadTree, color?: string): void;
            rectangle(object: Phaser.Rectangle, color?: string, filled?: boolean): void;
            reset(): void;
            ropeSegments(rope: Phaser.Rope, color?: number, filled?: boolean): void;
            soundInfo(sound: Phaser.Sound, x: number, y: number, color?: string): void;
            spriteBounds(sprite: any, color?: string, filled?: boolean): void;
            spriteCoords(sprite: any, x: number, y: number, color?: string): void;
            spriteInfo(sprite: Phaser.Sprite, x: number, y: number, color?: string): void;
            spriteInputInfo(sprite: Phaser.Sprite, x: number, y: number, color?: string): void;
            start(x?: number, y?: number, color?: string, columnWidth?: number): void;
            stop(): void;
            text(text: string, x: number, y: number, color?: string, font?: string): void;
            timer(timer: Phaser.Timer, x: number, y: number, color?: string): void;

        }

    }

    class World extends Phaser.Group {

        constructor(game: Phaser.Game);

        bounds: Phaser.Rectangle;
        camera: Phaser.Camera;
        centerX: number;
        centerY: number;
        game: Phaser.Game;
        height: number;
        randomX: number;
        randomY: number;
        width: number;

        boot(): void;
        getObjectsUnderPointer(pointer: Phaser.Pointer, group: Phaser.Group, callback?: Function, callbackContext?: any): Phaser.Sprite;
        resize(width: number, height: number): void;
        setBounds(x: number, y: number, width: number, height: number): void;
        shutdown(): void;
        wrap(sprite: any, padding?: number, useBounds?: boolean, horizontal?: boolean, vertical?: boolean): void;

    }
}

// Type definitions for p2.js v0.6.0
// Project: https://github.com/schteppe/p2.js/

declare module p2 {

    export class AABB {

        constructor(options?: {
            upperBound?: number[];
            lowerBound?: number[];
        });

        setFromPoints(points: number[][], position: number[], angle: number, skinSize: number): void;
        copy(aabb: AABB): void;
        extend(aabb: AABB): void;
        overlaps(aabb: AABB): boolean;

    }

    export class Broadphase {

        static AABB: number;
        static BOUNDING_CIRCLE: number;

        static NAIVE: number;
        static SAP: number;

        static boundingRadiusCheck(bodyA: Body, bodyB: Body): boolean;
        static aabbCheck(bodyA: Body, bodyB: Body): boolean;
        static canCollide(bodyA: Body, bodyB: Body): boolean;

        constructor(type: number);

        type: number;
        result: Body[];
        world: World;
        boundingVolumeType: number;

        setWorld(world: World): void;
        getCollisionPairs(world: World): Body[];
        boundingVolumeCheck(bodyA: Body, bodyB: Body): boolean;

    }

    export class GridBroadphase extends Broadphase {

        constructor(options?: {
            xmin?: number;
            xmax?: number;
            ymin?: number;
            ymax?: number;
            nx?: number;
            ny?: number;
        });

        xmin: number;
        xmax: number;
        ymin: number;
        ymax: number;
        nx: number;
        ny: number;
        binsizeX: number;
        binsizeY: number;

    }

    export class NativeBroadphase extends Broadphase {

    }

    export class Narrowphase {

        contactEquations: ContactEquation[];
        frictionEquations: FrictionEquation[];
        enableFriction: boolean;
        slipForce: number;
        frictionCoefficient: number;
        surfaceVelocity: number;
        reuseObjects: boolean;
        resuableContactEquations: any[];
        reusableFrictionEquations: any[];
        restitution: number;
        stiffness: number;
        relaxation: number;
        frictionStiffness: number;
        frictionRelaxation: number;
        enableFrictionReduction: boolean;
        contactSkinSize: number;

        collidedLastStep(bodyA: Body, bodyB: Body): boolean;
        reset(): void;
        createContactEquation(bodyA: Body, bodyB: Body, shapeA: Shape, shapeB: Shape): ContactEquation;
        createFrictionFromContact(c: ContactEquation): FrictionEquation;

    }

    export class SAPBroadphase extends Broadphase {

        axisList: Body[];
        axisIndex: number;

    }

    export class Constraint {

        static DISTANCE: number;
        static GEAR: number;
        static LOCK: number;
        static PRISMATIC: number;
        static REVOLUTE: number;

        constructor(bodyA: Body, bodyB: Body, type: number, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
        });

        type: number;
        equeations: Equation[];
        bodyA: Body;
        bodyB: Body;
        collideConnected: boolean;

        update(): void;
        setStiffness(stiffness: number): void;
        setRelaxation(relaxation: number): void;

    }

    export class DistanceConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, type: number, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            distance?: number;
            localAnchorA?: number[];
            localAnchorB?: number[];
            maxForce?: number;
        });

        localAnchorA: number[];
        localAnchorB: number[];
        distance: number;
        maxForce: number;
        upperLimitEnabled: boolean;
        upperLimit: number;
        lowerLimitEnabled: boolean;
        lowerLimit: number;
        position: number;

        setMaxForce(f: number): void;
        getMaxForce(): number;

    }

    export class GearConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, type: number, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            angle?: number;
            ratio?: number;
            maxTorque?: number;
        });

        ratio: number;
        angle: number;

        setMaxTorque(torque: number): void;
        getMaxTorque(): number;

    }

    export class LockConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, type: number, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            localOffsetB?: number[];
            localAngleB?: number;
            maxForce?: number;
        });

        setMaxForce(force: number): void;
        getMaxForce(): number;

    }

    export class PrismaticConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, type: number, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            maxForce?: number;
            localAnchorA?: number[];
            localAnchorB?: number[];
            localAxisA?: number[];
            disableRotationalLock?: boolean;
            upperLimit?: number;
            lowerLimit?: number;
        });

        localAnchorA: number[];
        localAnchorB: number[];
        localAxisA: number[];
        position: number;
        velocity: number;
        lowerLimitEnabled: boolean;
        upperLimitEnabled: boolean;
        lowerLimit: number;
        upperLimit: number;
        upperLimitEquation: ContactEquation;
        lowerLimitEquation: ContactEquation;
        motorEquation: Equation;
        motorEnabled: boolean;
        motorSpeed: number;

        enableMotor(): void;
        disableMotor(): void;
        setLimits(lower: number, upper: number): void;

    }

    export class RevoluteConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, type: number, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            worldPivot?: number[];
            localPivotA?: number[];
            localPivotB?: number[];
            maxForce?: number;
        });

        pivotA: number[];
        pivotB: number[];
        motorEquation: RotationalVelocityEquation;
        motorEnabled: boolean;
        angle: number;
        lowerLimitEnabled: boolean;
        upperLimitEnabled: boolean;
        lowerLimit: number;
        upperLimit: number;
        upperLimitEquation: ContactEquation;
        lowerLimitEquation: ContactEquation;

        enableMotor(): void;
        disableMotor(): void;
        motorIsEnabled(): boolean;
        setLimits(lower: number, upper: number): void;
        setMotorSpeed(speed: number): void;
        getMotorSpeed(): number;

    }

    export class AngleLockEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body, options?: {
            angle?: number;
            ratio?: number;
        });

        computeGq(): number;
        setRatio(ratio: number): number;
        setMaxTorque(torque: number): number;

    }

    export class ContactEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body);

        contactPointA: number[];
        penetrationVec: number[];
        contactPointB: number[];
        normalA: number[];
        restitution: number;
        firstImpact: boolean;
        shapeA: Shape;
        shapeB: Shape;

        computeB(a: number, b: number, h: number): number;

    }

    export class Equation {

        static DEFAULT_STIFFNESS: number;
        static DEFAULT_RELAXATION: number;

        constructor(bodyA: Body, bodyB: Body, minForce?: number, maxForce?: number);

        minForce: number;
        maxForce: number;
        bodyA: Body;
        bodyB: Body;
        stiffness: number;
        relaxation: number;
        G: number[];
        offset: number;
        a: number;
        b: number;
        epsilon: number;
        timeStep: number;
        needsUpdate: boolean;
        multiplier: number;
        relativeVelocity: number;
        enabled: boolean;

        gmult(G: number[], vi: number[], wi: number[], vj: number[], wj: number[]): number;
        computeB(a: number, b: number, h: number): number;
        computeGq(): number;
        computeGW(): number;
        computeGWlambda(): number;
        computeGiMf(): number;
        computeGiMGt(): number;
        addToWlambda(deltalambda: number): number;
        computeInvC(eps: number): number;

    }

    export class FrictionEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body, slipForce: number);

        contactPointA: number[];
        contactPointB: number[];
        t: number[];
        shapeA: Shape;
        shapeB: Shape;
        frictionCoefficient: number;

        setSlipForce(slipForce: number): number;
        getSlipForce(): number;
        computeB(a: number, b: number, h: number): number;

    }

    export class RotationalLockEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body, options?: {
            angle?: number;
        });

        angle: number;

        computeGq(): number;

    }

    export class RotationalVelocityEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body);

        computeB(a: number, b: number, h: number): number;

    }

    export class EventEmitter {

        on(type: string, listener: Function, context: any): EventEmitter;
        has(type: string, listener: Function): boolean;
        off(type: string, listener: Function): EventEmitter;
        emit(event: any): EventEmitter;

    }

    export class ContactMaterialOptions {

        friction: number;
        restitution: number;
        stiffness: number;
        relaxation: number;
        frictionStiffness: number;
        frictionRelaxation: number;
        surfaceVelocity: number;

    }

    export class ContactMaterial {

        static idCounter: number;

        constructor(materialA: Material, materialB: Material, options?: ContactMaterialOptions);

        id: number;
        materialA: Material;
        materialB: Material;
        friction: number;
        restitution: number;
        stiffness: number;
        relaxation: number;
        frictionStuffness: number;
        frictionRelaxation: number;
        surfaceVelocity: number;
        contactSkinSize: number;

    }

    export class Material {

        static idCounter: number;

        constructor(id: number);

        id: number;

    }

    export class vec2 {

        static crossLength(a: number[], b: number[]): number;
        static crossVZ(out: number[], vec: number[], zcomp: number): number;
        static crossZV(out: number[], zcomp: number, vec: number[]): number;
        static rotate(out: number[], a: number[], angle: number): void;
        static rotate90cw(out: number[], a: number[]): number;
        static centroid(out: number[], a: number[], b: number[], c: number[]): number[];
        static create(): number[];
        static clone(a: number[]): number[];
        static fromValues(x: number, y: number): number[];
        static copy(out: number[], a: number[]): number[];
        static set(out: number[], x: number, y: number): number[];
        static toLocalFrame(out: number[], worldPoint: number[], framePosition: number[], frameAngle: number): void;
        static toGlobalFrame(out: number[], localPoint: number[], framePosition: number[], frameAngle: number): void;
        static add(out: number[], a: number[], b: number[]): number[];
        static subtract(out: number[], a: number[], b: number[]): number[];
        static sub(out: number[], a: number[], b: number[]): number[];
        static multiply(out: number[], a: number[], b: number[]): number[];
        static mul(out: number[], a: number[], b: number[]): number[];
        static divide(out: number[], a: number[], b: number[]): number[];
        static div(out: number[], a: number[], b: number[]): number[];
        static scale(out: number[], a: number[], b: number): number[];
        static distance(a: number[], b: number[]): number;
        static dist(a: number[], b: number[]): number;
        static squaredDistance(a: number[], b: number[]): number;
        static sqrDist(a: number[], b: number[]): number;
        static length(a: number[]): number;
        static len(a: number[]): number;
        static squaredLength(a: number[]): number;
        static sqrLen(a: number[]): number;
        static negate(out: number[], a: number[]): number[];
        static normalize(out: number[], a: number[]): number[];
        static dot(a: number[], b: number[]): number;
        static str(a: number[]): string;

    }

    export class BodyOptions {

        mass: number;
        position: number[];
        velocity: number[];
        angle: number;
        angularVelocity: number;
        force: number[];
        angularForce: number;
        fixedRotation: number;

    }

    export class Body extends EventEmitter {

        sleepyEvent: {
            type: string;
        };

        sleepEvent: {
            type: string;
        };

        wakeUpEvent: {
            type: string;
        };

        static DYNAMIC: number;
        static STATIC: number;
        static KINEMATIC: number;
        static AWAKE: number;
        static SLEEPY: number;
        static SLEEPING: number;

        constructor(options?: BodyOptions);

        id: number;
        world: World;
        shapes: Shape[];
        shapeOffsets: number[][];
        shapeAngles: number[];
        mass: number;
        invMass: number;
        inertia: number;
        invInertia: number;
        invMassSolve: number;
        invInertiaSolve: number;
        fixedRotation: number;
        position: number[];
        interpolatedPosition: number[];
        interpolatedAngle: number;
        previousPosition: number[];
        previousAngle: number;
        velocity: number[];
        vlambda: number[];
        wlambda: number[];
        angle: number;
        angularVelocity: number;
        force: number[];
        angularForce: number;
        damping: number;
        angularDamping: number;
        type: number;
        boundingRadius: number;
        aabb: AABB;
        aabbNeedsUpdate: boolean;
        allowSleep: boolean;
        wantsToSleep: boolean;
        sleepState: number;
        sleepSpeedLimit: number;
        sleepTimeLimit: number;
        gravityScale: number;

        updateSolveMassProperties(): void;
        setDensity(density: number): void;
        getArea(): number;
        getAABB(): AABB;
        updateAABB(): void;
        updateBoundingRadius(): void;
        addShape(shape: Shape, offset?: number[], angle?: number): void;
        removeShape(shape: Shape): boolean;
        updateMassProperties(): void;
        applyForce(force: number[], worldPoint: number[]): void;
        toLocalFrame(out: number[], worldPoint: number[]): void;
        toWorldFrame(out: number[], localPoint: number[]): void;
        fromPolygon(path: number[][], options?: {
            optimalDecomp?: boolean;
            skipSimpleCheck?: boolean;
            removeCollinearPoints?: any; //boolean | number
        }): boolean;
        adjustCenterOfMass(): void;
        setZeroForce(): void;
        resetConstraintVelocity(): void;
        applyDamping(dy: number): void;
        wakeUp(): void;
        sleep(): void;
        sleepTick(time: number, dontSleep: boolean, dt: number): void;
        getVelocityFromPosition(story: number[], dt: number): number[];
        getAngularVelocityFromPosition(timeStep: number): number;
        overlaps(body: Body): boolean;

    }

    export class Spring {

        constructor(bodyA: Body, bodyB: Body, options?: {

            stiffness?: number;
            damping?: number;
            localAnchorA?: number[];
            localAnchorB?: number[];
            worldAnchorA?: number[];
            worldAnchorB?: number[];

        });

        stiffness: number;
        damping: number;
        bodyA: Body;
        bodyB: Body;

        applyForce(): void;

    }

    export class LinearSpring extends Spring {

        localAnchorA: number[];
        localAnchorB: number[];
        restLength: number;

        setWorldAnchorA(worldAnchorA: number[]): void;
        setWorldAnchorB(worldAnchorB: number[]): void;
        getWorldAnchorA(result: number[]): number[];
        getWorldAnchorB(result: number[]): number[];
        applyForce(): void;

    }

    export class RotationalSpring extends Spring {

        constructor(bodyA: Body, bodyB: Body, options?: {
            restAngle?: number;
            stiffness?: number;
            damping?: number;
        });

        restAngle: number;

    }

    export class Capsule extends Shape {

        constructor(length?: number, radius?: number);

        length: number;
        radius: number;

    }

    export class Circle extends Shape {

        constructor(radius: number);

        radius: number;

    }

    export class Convex extends Shape {

        static triangleArea(a: number[], b: number[], c: number[]): number;

        constructor(vertices: number[][], axes: number[]);

        vertices: number[][];
        axes: number[];
        centerOfMass: number[];
        triangles: number[];
        boundingRadius: number;

        projectOntoLocalAxis(localAxis: number[], result: number[]): void;
        projectOntoWorldAxis(localAxis: number[], shapeOffset: number[], shapeAngle: number, result: number[]): void;

        updateCenterOfMass(): void;

    }

    export class Heightfield extends Shape {

        constructor(data: number[], options?: {
            minValue?: number;
            maxValue?: number;
            elementWidth: number;
        });

        data: number[];
        maxValue: number;
        minValue: number;
        elementWidth: number;

    }

    export class Shape {

        static idCounter: number;
        static CIRCLE: number;
        static PARTICLE: number;
        static PLANE: number;
        static CONVEX: number;
        static LINE: number;
        static RECTANGLE: number;
        static CAPSULE: number;
        static HEIGHTFIELD: number;

        constructor(type: number);

        type: number;
        id: number;
        boundingRadius: number;
        collisionGroup: number;
        collisionMask: number;
        material: Material;
        area: number;
        sensor: boolean;

        computeMomentOfInertia(mass: number): number;
        updateBoundingRadius(): number;
        updateArea(): void;
        computeAABB(out: AABB, position: number[], angle: number): void;

    }

    export class Line extends Shape {

        constructor(length?: number);

        length: number;

    }

    export class Particle extends Shape {

    }

    export class Plane extends Shape {

    }

    export class Rectangle extends Shape {

        static sameDimensions(a: Rectangle, b: Rectangle): boolean;

        constructor(width?: number, height?: number);

        width: number;
        height: number;

    }

    export class Solver extends EventEmitter {

        static GS: number;
        static ISLAND: number;

        constructor(options?: {}, type?: number);

        type: number;
        equations: Equation[];
        equationSortFunction: Equation; //Equation | boolean

        solve(dy: number, world: World): void;
        solveIsland(dy: number, island: Island): void;
        sortEquations(): void;
        addEquation(eq: Equation): void;
        addEquations(eqs: Equation[]): void;
        removeEquation(eq: Equation): void;
        removeAllEquations(): void;

    }

    export class GSSolver extends Solver {

        constructor(options?: {
            iterations?: number;
            tolerance?: number;
        });

        iterations: number;
        tolerance: number;
        useZeroRHS: boolean;
        frictionIterations: number;
        usedIterations: number;

        solve(h: number, world: World): void;

    }

    export class OverlapKeeper {

        constructor(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Shape);

        shapeA: Shape;
        shapeB: Shape;
        bodyA: Body;
        bodyB: Body;

        tick(): void;
        setOverlapping(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Body): void;
        bodiesAreOverlapping(bodyA: Body, bodyB: Body): boolean;
        set(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Shape): void;

    }

    export class TupleDictionary {

        data: number[];
        keys: number[];

        getKey(id1: number, id2: number): string;
        getByKey(key: number): number;
        get(i: number, j: number): number;
        set(i: number, j: number, value: number): number;
        reset(): void;
        copy(dict: TupleDictionary): void;

    }

    export class Utils {

        static appendArray<T>(a: Array<T>, b: Array<T>): Array<T>;
        static chanceRoll(chance: number): boolean;
        static defaults(options: any, defaults: any): any;
        static extend(a: any, b: any): void;
        static randomChoice(choice1: any, choice2: any): any;
        static rotateArray(matrix: any[], direction: any): any[];
        static splice<T>(array: Array<T>, index: number, howMany: number): void;
        static shuffle<T>(array: T[]): T[];
        static transposeArray<T>(array: T[]): T[];

    }

    export class Island {

        equations: Equation[];
        bodies: Body[];

        reset(): void;
        getBodies(result: any): Body[];
        wantsToSleep(): boolean;
        sleep(): boolean;

    }

    export class IslandManager extends Solver {

        static getUnvisitedNode(nodes: Node[]): IslandNode; // IslandNode | boolean

        equations: Equation[];
        islands: Island[];
        nodes: IslandNode[];

        visit(node: IslandNode, bds: Body[], eqs: Equation[]): void;
        bfs(root: IslandNode, bds: Body[], eqs: Equation[]): void;
        split(world: World): Island[];

    }

    export class IslandNode {

        constructor(body: Body);

        body: Body;
        neighbors: IslandNode[];
        equations: Equation[];
        visited: boolean;

        reset(): void;

    }

    export class World extends EventEmitter {

        postStepEvent: {
            type: string;
        };

        addBodyEvent: {
            type: string;
        };

        removeBodyEvent: {
            type: string;
        };

        addSpringEvent: {
            type: string;
        };

        impactEvent: {
            type: string;
            bodyA: Body;
            bodyB: Body;
            shapeA: Shape;
            shapeB: Shape;
            contactEquation: ContactEquation;
        };

        postBroadphaseEvent: {
            type: string;
            pairs: Body[];
        };

        beginContactEvent: {
            type: string;
            shapeA: Shape;
            shapeB: Shape;
            bodyA: Body;
            bodyB: Body;
            contactEquations: ContactEquation[];
        };

        endContactEvent: {
            type: string;
            shapeA: Shape;
            shapeB: Shape;
            bodyA: Body;
            bodyB: Body;
        };

        preSolveEvent: {
            type: string;
            contactEquations: ContactEquation[];
            frictionEquations: FrictionEquation[];
        };

        static NO_SLEEPING: number;
        static BODY_SLEEPING: number;
        static ISLAND_SLEEPING: number;

        static integrateBody(body: Body, dy: number): void;

        constructor(options?: {
            solver?: Solver;
            gravity?: number[];
            broadphase?: Broadphase;
            islandSplit?: boolean;
            doProfiling?: boolean;
        });

        springs: Spring[];
        bodies: Body[];
        solver: Solver;
        narrowphase: Narrowphase;
        islandManager: IslandManager;
        gravity: number[];
        frictionGravity: number;
        useWorldGravityAsFrictionGravity: boolean;
        useFrictionGravityOnZeroGravity: boolean;
        doProfiling: boolean;
        lastStepTime: number;
        broadphase: Broadphase;
        constraints: Constraint[];
        defaultMaterial: Material;
        defaultContactMaterial: ContactMaterial;
        lastTimeStep: number;
        applySpringForces: boolean;
        applyDamping: boolean;
        applyGravity: boolean;
        solveConstraints: boolean;
        contactMaterials: ContactMaterial[];
        time: number;
        stepping: boolean;
        islandSplit: boolean;
        emitImpactEvent: boolean;
        sleepMode: number;

        addConstraint(c: Constraint): void;
        addContactMaterial(contactMaterial: ContactMaterial): void;
        removeContactMaterial(cm: ContactMaterial): void;
        getContactMaterial(materialA: Material, materialB: Material): ContactMaterial; // ContactMaterial | boolean
        removeConstraint(c: Constraint): void;
        step(dy: number, timeSinceLastCalled?: number, maxSubSteps?: number): void;
        runNarrowphase(np: Narrowphase, bi: Body, si: Shape, xi: any[], ai: number, bj: Body, sj: Shape, xj: any[], aj: number, cm: number, glen: number): void;
        addSpring(s: Spring): void;
        removeSpring(s: Spring): void;
        addBody(body: Body): void;
        removeBody(body: Body): void;
        getBodyByID(id: number): Body; //Body | boolean
        disableBodyCollision(bodyA: Body, bodyB: Body): void;
        enableBodyCollision(bodyA: Body, bodyB: Body): void;
        clear(): void;
        clone(): World;
        hitTest(worldPoint: number[], bodies: Body[], precision: number): Body[];
        setGlobalEquationParameters(parameters: {
            relaxation?: number;
            stiffness?: number;
        }): void;
        setGlobalStiffness(stiffness: number): void;
        setGlobalRelaxation(relaxation: number): void;
    }

}
