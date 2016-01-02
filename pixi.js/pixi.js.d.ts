// Type definitions for Pixi.js 3.0.9 dev
// Project: https://github.com/GoodBoyDigital/pixi.js/
// Definitions by: clark-stevenson <https://github.com/pixijs/pixi-typescript>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class PIXI {

    static VERSION: string;
    static PI_2: number;
    static RAD_TO_DEG: number;
    static DEG_TO_RAD: number;
    static TARGET_FPMS: number;
    static RENDERER_TYPE: {
        UNKNOWN: number;
        WEBGL: number;
        CANVAS: number;
    };
    static BLEND_MODES: {
        NORMAL: number;
        ADD: number;
        MULTIPLY: number;
        SCREEN: number;
        OVERLAY: number;
        DARKEN: number;
        LIGHTEN: number;
        COLOR_DODGE: number;
        COLOR_BURN: number;
        HARD_LIGHT: number;
        SOFT_LIGHT: number;
        DIFFERENCE: number;
        EXCLUSION: number;
        HUE: number;
        SATURATION: number;
        COLOR: number;
        LUMINOSITY: number;

    };
    static DRAW_MODES: {
        POINTS: number;
        LINES: number;
        LINE_LOOP: number;
        LINE_STRIP: number;
        TRIANGLES: number;
        TRIANGLE_STRIP: number;
        TRIANGLE_FAN: number;
    };
    static SCALE_MODES: {
        DEFAULT: number;
        LINEAR: number;
        NEAREST: number;
    };
    static RETINA_PREFIX: string;
    static RESOLUTION: number;
    static FILTER_RESOLUTION: number;
    static DEFAULT_RENDER_OPTIONS: {
        view: HTMLCanvasElement;
        resolution: number;
        antialias: boolean;
        forceFXAA: boolean;
        autoResize: boolean;
        transparent: boolean;
        backgroundColor: number;
        clearBeforeRender: boolean;
        preserveDrawingBuffer: boolean;
        roundPixels: boolean;
    };
    static SHAPES: {
        POLY: number;
        RECT: number;
        CIRC: number;
        ELIP: number;
        RREC: number;
    };
    static SPRITE_BATCH_SIZE: number;

}

declare module PIXI {

    export function autoDetectRenderer(width: number, height: number, options?: PIXI.RendererOptions, noWebGL?: boolean): PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    export var loader: PIXI.loaders.Loader;

    //https://github.com/primus/eventemitter3
    export class EventEmitter {

        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
        on(event: string, fn: Function, context?: any): EventEmitter;
        once(event: string, fn: Function, context?: any): EventEmitter;
        removeListener(event: string, fn: Function, once?: boolean): EventEmitter;
        removeAllListeners(event: string): EventEmitter;

        off(event: string, fn: Function, once?: boolean): EventEmitter;
        addListener(event: string, fn: Function, context?: any): EventEmitter;

    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////CORE//////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    //display

    export class DisplayObject extends EventEmitter implements interaction.InteractiveTarget {

        //begin extras.cacheAsBitmap see https://github.com/pixijs/pixi-typescript/commit/1207b7f4752d79a088d6a9a465a3ec799906b1db
        protected _originalRenderWebGL: WebGLRenderer;
        protected _originalRenderCanvas: CanvasRenderer;
        protected _originalUpdateTransform: boolean;
        protected _originalHitTest: any;
        protected _cachedSprite: any;
        protected _originalDestroy: any;

        cacheAsBitmap: boolean;

        protected _renderCachedWebGL(renderer: WebGLRenderer): void;
        protected _initCachedDisplayObject(renderer: WebGLRenderer): void;
        protected _renderCachedCanvas(renderer: CanvasRenderer): void;
        protected _initCachedDisplayObjectCanvas(renderer: CanvasRenderer): void;
        protected _getCachedBounds(): Rectangle;
        protected _destroyCachedDisplayObject(): void;
        protected _cacheAsBitmapDestroy(): void;
        //end extras.cacheAsBitmap

        protected _sr: number;
        protected _cr: number;
        protected _bounds: Rectangle;
        protected _currentBounds: Rectangle;
        protected _mask: Rectangle;
        protected _cachedObject: any;

        updateTransform(): void;

        position: Point;
        scale: Point;
        pivot: Point;
        rotation: number;
        renderable: boolean;
        alpha: number;
        visible: boolean;
        parent: Container;
        worldAlpha: number;
        worldTransform: Matrix;
        filterArea: Rectangle;

        x: number;
        y: number;
        worldVisible: boolean;
        mask: Graphics | Sprite;
        filters: AbstractFilter[];
        name: string;

        getBounds(matrix?: Matrix): Rectangle;
        getLocalBounds(): Rectangle;
        toGlobal(position: Point): Point;
        toLocal(position: Point, from?: DisplayObject): Point;
        generateTexture(renderer: CanvasRenderer | WebGLRenderer, scaleMode: number, resolution: number): Texture;
        setParent(container: Container): Container;
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): DisplayObject;
        destroy(): void;
        getChildByName(name: string): DisplayObject;
        getGlobalPosition(point: Point): Point;

        interactive: boolean;
        buttonMode: boolean;
        interactiveChildren: boolean;
        defaultCursor: string;
        hitArea: HitArea;

        on(event: 'click', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'mousedown', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'mouseout', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'mouseover', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'mouseup', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'mouseclick', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'mouseupoutside', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'rightclick', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'rightdown', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'rightup', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'rightupoutside', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'tap', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'touchend', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'touchendoutside', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'touchmove', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: 'touchstart', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: string, fn: Function, context?: any): EventEmitter;

        once(event: 'click', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'mousedown', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'mouseout', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'mouseover', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'mouseup', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'mouseclick', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'mouseupoutside', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'rightclick', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'rightdown', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'rightup', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'rightupoutside', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'tap', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'touchend', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'touchendoutside', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'touchmove', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: 'touchstart', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: string, fn: Function, context?: any): EventEmitter;

    }

    export class Container extends DisplayObject {

        protected _renderWebGL(renderer: WebGLRenderer): void;
        protected _renderCanvas(renderer: CanvasRenderer): void;

        protected onChildrenChange: () => void;

        children: DisplayObject[];

        width: number;
        height: number;

        addChild(child: DisplayObject): DisplayObject;
        addChildAt(child: DisplayObject, index: number): DisplayObject;
        swapChildren(child: DisplayObject, child2: DisplayObject): void;
        getChildIndex(child: DisplayObject): number;
        setChildIndex(child: DisplayObject, index: number): void;
        getChildAt(index: number): DisplayObject;
        removeChild(child: DisplayObject): DisplayObject;
        removeChildAt(index: number): DisplayObject;
        removeChildren(beginIndex?: number, endIndex?: number): DisplayObject[];
        destroy(destroyChildren?: boolean): void;
        generateTexture(renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer, resolution?: number, scaleMode?: number): Texture;

        renderWebGL(renderer: WebGLRenderer): void;
        renderCanvas(renderer: CanvasRenderer): void;

        once(event: 'added', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: string, fn: Function, context?: any): EventEmitter;
        once(event: 'removed', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        once(event: string, fn: Function, context?: any): EventEmitter;
        on(event: 'added', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: string, fn: Function, context?: any): EventEmitter;
        on(event: 'removed', fn: (event: interaction.InteractionEvent) => void, context?: any): EventEmitter;
        on(event: string, fn: Function, context?: any): EventEmitter;

    }

    //graphics

    export class GraphicsData {

        constructor(lineWidth: number, lineColor: number, lineAlpha: number, fillColor: number, fillAlpha: number, fill: boolean, shape: Circle | Rectangle | Ellipse | Polygon);

        lineWidth: number;
        lineColor: number;
        lineAlpha: number;
        fillColor: number;
        fillAlpha: number;
        fill: boolean;
        shape: Circle | Rectangle | Ellipse | Polygon;
        type: number;

        clone(): GraphicsData;

        protected _lineTint: number;
        protected _fillTint: number;

    }
    export class Graphics extends Container {

        protected boundsDirty: boolean;
        protected dirty: boolean;
        protected glDirty: boolean;

        fillAlpha: number;
        lineWidth: number;
        lineColor: number;
        tint: number;
        blendMode: number;
        isMask: boolean;
        boundsPadding: number;

        clone(): Graphics;
        lineStyle(lineWidth?: number, color?: number, alpha?: number): Graphics;
        moveTo(x: number, y: number): Graphics;
        lineTo(x: number, y: number): Graphics;
        quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): Graphics;
        bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): Graphics;
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
        arc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): Graphics;
        beginFill(color: number, alpha?: number): Graphics;
        endFill(): Graphics;
        drawRect(x: number, y: number, width: number, height: number): Graphics;
        drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): Graphics;
        drawCircle(x: number, y: number, radius: number): Graphics;
        drawEllipse(x: number, y: number, width: number, height: number): Graphics;
        drawPolygon(path: number[] | Point[]): Graphics;
        clear(): Graphics;
        //todo
        generateTexture(renderer: WebGLRenderer | CanvasRenderer, resolution?: number, scaleMode?: number): Texture;
        getBounds(matrix?: Matrix): Rectangle;
        containsPoint(point: Point): boolean;
        updateLocalBounds(): void;
        drawShape(shape: Circle | Rectangle | Ellipse | Polygon): GraphicsData;

    }
    export interface GraphicsRenderer extends ObjectRenderer {
        //yikes todo
    }
    export interface WebGLGraphicsData {
        //yikes todo!
    }

    //math

    export class Point {

        x: number;
        y: number;

        constructor(x?: number, y?: number);

        clone(): Point;
        copy(p: Point): void;
        equals(p: Point): boolean;
        set(x?: number, y?: number): void;

    }
    export class Matrix {

        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;

        fromArray(array: number[]): void;
        toArray(transpose?: boolean, out?: number[]): number[];
        apply(pos: Point, newPos?: Point): Point;
        applyInverse(pos: Point, newPos?: Point): Point;
        translate(x: number, y: number): Matrix;
        scale(x: number, y: number): Matrix;
        rotate(angle: number): Matrix;
        append(matrix: Matrix): Matrix;
        prepend(matrix: Matrix): Matrix;
        invert(): Matrix;
        identity(): Matrix;
        clone(): Matrix;
        copy(matrix: Matrix): Matrix;
        set(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
        setTransform(a: number, b: number, c: number, d: number, sr: number, cr: number, cy: number, sy: number, nsx: number, cs: number): PIXI.Matrix;

        static IDENTITY: Matrix;
        static TEMP_MATRIX: Matrix;

    }

    export interface HitArea {

        contains(x: number, y: number): boolean;

    }

    export class Circle implements HitArea {

        constructor(x?: number, y?: number, radius?: number);

        x: number;
        y: number;
        radius: number;
        type: number;

        clone(): Circle;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;

    }
    export class Ellipse implements HitArea {

        constructor(x?: number, y?: number, width?: number, height?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        type: number;

        clone(): Ellipse;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;

    }
    export class Polygon implements HitArea {

        constructor(points: Point[]);
        constructor(points: number[]);
        constructor(...points: Point[]);
        constructor(...points: number[]);

        closed: boolean;
        points: number[];
        type: number;

        clone(): Polygon;
        contains(x: number, y: number): boolean;


    }
    export class Rectangle implements HitArea {

        constructor(x?: number, y?: number, width?: number, height?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        type: number;

        static EMPTY: Rectangle;

        clone(): Rectangle;
        contains(x: number, y: number): boolean;

    }
    export class RoundedRectangle implements HitArea {

        constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        radius: number;
        type: number;

        static EMPTY: Rectangle;

        clone(): Rectangle;
        contains(x: number, y: number): boolean;

    }

    //particles

    export interface ParticleContainerProperties {

        scale?: boolean;
        position?: boolean;
        rotation?: boolean;
        uvs?: boolean;
        alpha?: boolean;

    }
    export class ParticleContainer extends Container {

        constructor(size?: number, properties?: ParticleContainerProperties, batchSize?: number);

        protected _maxSize: number;
        protected _batchSize: number;
        protected _properties: boolean[];
        protected _buffers: WebGLBuffer[];
        protected _bufferToUpdate: number;

        protected onChildrenChange: (smallestChildIndex?: number) => void;

        interactiveChildren: boolean;
        blendMode: number;
        roundPixels: boolean;

        setProperties(properties: ParticleContainerProperties): void;

    }
    export interface ParticleBuffer {

        gl: WebGLRenderingContext;
        vertSize: number;
        vertByteSize: number;
        size: number;
        dynamicProperties: any[];
        staticProperties: any[];

        staticStride: number;
        staticBuffer: any;
        staticData: any;
        dynamicStride: number;
        dynamicBuffer: any;
        dynamicData: any;

        initBuffers(): void;
        bind(): void;
        destroy(): void;

    }
    export interface ParticleRenderer {

    }
    export interface ParticleShader {

    }

    //renderers

    export interface RendererOptions {

        view?: HTMLCanvasElement;
        transparent?: boolean
        antialias?: boolean;
        resolution?: number;
        clearBeforeRendering?: boolean;
        preserveDrawingBuffer?: boolean;
        forceFXAA?: boolean;
        roundPixels?: boolean;
        backgroundColor?: number;

    }
    export class SystemRenderer extends EventEmitter {

        protected _backgroundColor: number;
        protected _backgroundColorRgb: number[];
        protected _backgroundColorString: string;
        protected _tempDisplayObjectParent: any;
        protected _lastObjectRendered: DisplayObject;

        constructor(system: string, width?: number, height?: number, options?: RendererOptions);

        type: number;
        width: number;
        height: number;
        view: HTMLCanvasElement;
        resolution: number;
        transparent: boolean;
        autoResize: boolean;
        blendModes: any; //todo?
        preserveDrawingBuffer: boolean;
        clearBeforeRender: boolean;
        roundPixels: boolean;
        backgroundColor: number;

        render(object: DisplayObject): void;
        resize(width: number, height: number): void;
        destroy(removeView?: boolean): void;

    }
    export class CanvasRenderer extends SystemRenderer {

        protected renderDisplayObject(displayObject: DisplayObject, context: CanvasRenderingContext2D): void;
        protected _mapBlendModes(): void;

        constructor(width?: number, height?: number, options?: RendererOptions);

        context: CanvasRenderingContext2D;
        refresh: boolean;
        maskManager: CanvasMaskManager;
        roundPixels: boolean;
        smoothProperty: string;

        render(object: DisplayObject): void;
        resize(w: number, h: number): void;

    }
    export class CanvasBuffer {

        protected clear(): void;

        constructor(width: number, height: number);

        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;

        width: number;
        height: number;

        resize(width: number, height: number): void;
        destroy(): void;

    }
    export class CanvasGraphics {

        static renderGraphicsMask(graphics: Graphics, context: CanvasRenderingContext2D): void;
        static updateGraphicsTint(graphics: Graphics): void;

        static renderGraphics(graphics: Graphics, context: CanvasRenderingContext2D): void;

    }
    export class CanvasMaskManager {

        pushMask(maskData: any, renderer: WebGLRenderer | CanvasRenderer): void;
        popMask(renderer: WebGLRenderer | CanvasRenderer): void;
        destroy(): void;

    }
    export class CanvasTinter {

        static getTintedTexture(sprite: DisplayObject, color: number): HTMLCanvasElement;
        static tintWithMultiply(texture: Texture, color: number, canvas: HTMLDivElement): void;
        static tintWithOverlay(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        static tintWithPerPixel(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        static roundColor(color: number): number;
        static cacheStepsPerColorChannel: number;
        static convertTintToImage: boolean;
        static vanUseMultiply: boolean;
        static tintMethod: Function;

    }
    export class WebGLRenderer extends SystemRenderer {

        protected _useFXAA: boolean;
        protected _FXAAFilter: filters.FXAAFilter;
        protected _contextOptions: {
            alpha: boolean;
            antiAlias: boolean;
            premultipliedAlpha: boolean;
            stencil: boolean;
            preseveDrawingBuffer: boolean;
        }
        protected _renderTargetStack: RenderTarget[];

        protected _initContext(): void;
        protected _createContext(): void;
        protected handleContextLost: (event: WebGLContextEvent) => void;
        protected _mapGlModes(): void;
        protected _managedTextures: Texture[];

        constructor(width?: number, height?: number, options?: RendererOptions);

        drawCount: number;
        shaderManager: ShaderManager;
        maskManager: MaskManager;
        stencilManager: StencilManager;
        filterManager: FilterManager;
        blendModeManager: BlendModeManager;
        currentRenderTarget: RenderTarget;
        currentRenderer: ObjectRenderer;

        render(object: DisplayObject): void;
        renderDisplayObject(displayObject: DisplayObject, renderTarget: RenderTarget, clear: boolean): void;
        setObjectRenderer(objectRenderer: ObjectRenderer): void;
        setRenderTarget(renderTarget: RenderTarget): void;
        updateTexture(texture: BaseTexture | Texture): BaseTexture | Texture;
        destroyTexture(texture: BaseTexture | Texture, _skipRemove?: boolean): void;

    }
    export class AbstractFilter {

        protected vertexSrc: string[];
        protected fragmentSrc: string[];

        constructor(vertexSrc?: string | string[], fragmentSrc?: string | string[], uniforms?: any);

        uniforms: any;

        padding: number;

        getShader(renderer: WebGLRenderer): Shader;
        applyFilter(renderer: WebGLRenderer, input: RenderTarget, output: RenderTarget, clear?: boolean): void;
        syncUniform(uniform: WebGLUniformLocation): void;

    }
    export class SpriteMaskFilter extends AbstractFilter {

        constructor(sprite: Sprite);

        maskSprite: Sprite;
        maskMatrix: Matrix;

        applyFilter(renderer: WebGLRenderbuffer, input: RenderTarget, output: RenderTarget): void;
        map: Texture;
        offset: Point;

    }
    export class BlendModeManager extends WebGLManager {

        constructor(renderer: WebGLRenderer);

        setBlendMode(blendMode: number): boolean;

    }

    export class FilterManager extends WebGLManager {

        constructor(renderer: WebGLRenderer);

        filterStack: any[];
        renderer: WebGLRenderer;
        texturePool: any[];

        onContextChange: () => void;
        setFilterStack(filterStack: any[]): void;
        pushFilter(target: RenderTarget, filters: any[]): void;
        popFilter(): AbstractFilter;
        getRenderTarget(clear?: boolean): RenderTarget;
        protected returnRenderTarget(renderTarget: RenderTarget): void;
        applyFilter(shader: Shader, inputTarget: RenderTarget, outputTarget: RenderTarget, clear?: boolean): void;
        calculateMappedMatrix(filterArea: Rectangle, sprite: Sprite, outputMatrix?: Matrix): Matrix;
        capFilterArea(filterArea: Rectangle): void;
        resize(width: number, height: number): void;
        destroy(): void;

    }

    export class MaskManager extends WebGLManager {

        stencilStack: StencilMaskStack;
        reverse: boolean;
        count: number;
        alphaMaskPool: any[];

        pushMask(target: RenderTarget, maskData: any): void;
        popMask(target: RenderTarget, maskData: any): void;
        pushSpriteMask(target: RenderTarget, maskData: any): void;
        popSpriteMask(): void;
        pushStencilMask(target: RenderTarget, maskData: any): void;
        popStencilMask(target: RenderTarget, maskData: any): void;

    }
    export class ShaderManager extends WebGLManager {

        protected _currentId: number;
        protected currentShader: Shader;

        constructor(renderer: WebGLRenderer);

        maxAttibs: number;
        attribState: any[];
        tempAttribState: any[];
        stack: any[];

        setAttribs(attribs: any[]): void;
        setShader(shader: Shader): boolean;
        destroy(): void;

    }
    export class StencilManager extends WebGLManager {

        constructor(renderer: WebGLRenderer);

        setMaskStack(stencilMaskStack: StencilMaskStack): void;
        pushStencil(graphics: Graphics, webGLData: WebGLGraphicsData): void;
        bindGraphics(graphics: Graphics, webGLData: WebGLGraphicsData): void;
        popStencil(graphics: Graphics, webGLData: WebGLGraphicsData): void;
        destroy(): void;
        pushMask(maskData: any[]): void;
        popMask(maskData: any[]): void;

    }
    export class WebGLManager {

        protected onContextChange: () => void;

        constructor(renderer: WebGLRenderer);

        renderer: WebGLRenderer;

        destroy(): void;

    }
    export class Shader {

        protected attributes: any;
        protected textureCount: number;
        protected uniforms: any;

        protected _glCompile(type: any, src: any): Shader;

        constructor(shaderManager: ShaderManager, vertexSrc: string, fragmentSrc: string, uniforms: any, attributes: any);

        uuid: number;
        gl: WebGLRenderingContext;
        shaderManager: ShaderManager;
        program: WebGLProgram;
        vertexSrc: string;
        fragmentSrc: string;

        init(): void;
        cachUniformLocations(keys: string): void;
        cacheAttributeLocations(keys: string): void;
        compile(): WebGLProgram;
        syncUniform(uniform: any): void;
        syncUniforms(): void;
        initSampler2D(uniform: any): void;
        destroy(): void;

    }
    export class ComplexPrimitiveShader extends Shader {

        constructor(shaderManager: ShaderManager);

    }
    export class PrimitiveShader extends Shader {

        constructor(shaderManager: ShaderManager);

    }
    export class TextureShader extends Shader {

        constructor(shaderManager: ShaderManager, vertexSrc?: string, fragmentSrc?: string, customUniforms?: any, customAttributes?: any);

    }
    export interface StencilMaskStack {

        stencilStack: any[];
        reverse: boolean;
        count: number;

    }
    export class ObjectRenderer extends WebGLManager {

        start(): void;
        stop(): void;
        flush(): void;
        render(object?: any): void;

    }
    export class RenderTarget {

        constructor(gl: WebGLRenderingContext, width: number, height: number, scaleMode: number, resolution: number, root: boolean);

        gl: WebGLRenderingContext;
        frameBuffer: WebGLFramebuffer;
        texture: Texture;
        size: Rectangle;
        resolution: number;
        projectionMatrix: Matrix;
        transform: Matrix;
        frame: Rectangle;
        stencilBuffer: WebGLRenderbuffer;
        stencilMaskStack: StencilMaskStack;
        filterStack: any[];
        scaleMode: number;
        root: boolean;

        clear(bind?: boolean): void;
        attachStencilBuffer(): void;
        activate(): void;
        calculateProjection(protectionFrame: Matrix): void;
        resize(width: number, height: number): void;
        destroy(): void;

    }
    export interface Quad {

        gl: WebGLRenderingContext;
        vertices: number[];
        uvs: number[];
        colors: number[];
        indices: number[];
        vertexBuffer: WebGLBuffer;
        indexBuffer: WebGLBuffer;

        map(rect: Rectangle, rect2: Rectangle): void;
        upload(): void;
        destroy(): void;

    }

    //sprites

    export class Sprite extends Container {

        static fromFrame(frameId: string): Sprite;
        static fromImage(imageId: string, crossorigin?: boolean, scaleMode?: number): Sprite;

        protected _texture: Texture;
        protected _width: number;
        protected _height: number;
        protected cachedTint: number;

        protected _onTextureUpdate(): void;

        constructor(texture?: Texture);

        anchor: Point;
        tint: number;
        blendMode: number;
        shader: Shader;
        texture: Texture;

        width: number;
        height: number;

        getBounds(matrix?: Matrix): Rectangle;
        getLocalBounds(): Rectangle;
        containsPoint(point: Point): boolean;
        destroy(destroyTexture?: boolean, destroyBaseTexture?: boolean): void;

    }
    export class SpriteRenderer extends ObjectRenderer {

        protected renderBatch(texture: Texture, size: number, startIndex: number): void;

        vertSize: number;
        vertByteSize: number;
        size: number;
        vertices: number[];
        positions: number[];
        colors: number[];
        indices: number[];
        currentBatchSize: number;
        sprites: Sprite[];
        shader: Shader;

        render(sprite: Sprite): void;
        flush(): void;
        start(): void;
        destroy(): void;

    }

    //text

    export interface TextStyle {

        font?: string;
        fill?: string | number;
        align?: string;
        stroke?: string | number;
        strokeThickness?: number;
        wordWrap?: boolean;
        wordWrapWidth?: number;
        lineHeight?: number;
        dropShadow?: boolean;
        dropShadowColor?: string | number;
        dropShadowAngle?: number;
        dropShadowDistance?: number;
        padding?: number;
        textBaseline?: string;
        lineJoin?: string;
        miterLimit?: number;

    }
    export class Text extends Sprite {

        static fontPropertiesCache: any;
        static fontPropertiesCanvas: HTMLCanvasElement;
        static fontPropertiesContext: CanvasRenderingContext2D;

        protected _text: string;
        protected _style: TextStyle;

        protected updateText(): void;
        protected updateTexture(): void;
        protected determineFontProperties(fontStyle: TextStyle): TextStyle;
        protected wordWrap(text: string): boolean;

        constructor(text?: string, style?: TextStyle, resolution?: number);

        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        dirty: boolean;
        resolution: number;
        text: string;
        style: TextStyle;

        width: number;
        height: number;

    }

    //textures

    export class BaseTexture extends EventEmitter {

        static fromImage(imageUrl: string, crossorigin?: boolean, scaleMode?: number): BaseTexture;
        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: number): BaseTexture;

        protected _glTextures: any;

        protected _sourceLoaded(): void;

        constructor(source: HTMLImageElement | HTMLCanvasElement, scaleMode?: number, resolution?: number);

        uuid: number;
        resolution: number;
        width: number;
        height: number;
        realWidth: number;
        realHeight: number;
        scaleMode: number;
        hasLoaded: boolean;
        isLoading: boolean;
        source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
        premultipliedAlpha: boolean;
        imageUrl: string;
        isPowerOfTwo: boolean;
        mipmap: boolean;

        update(): void;
        loadSource(source: HTMLImageElement | HTMLCanvasElement): void;
        destroy(): void;
        dispose(): void;
        updateSourceImage(newSrc: string): void;

        on(event: 'dispose', fn: (baseTexture: BaseTexture) => void, context?: any): EventEmitter;
        on(event: 'error', fn: (baseTexture: BaseTexture) => void, context?: any): EventEmitter;
        on(event: 'loaded', fn: (baseTexture: BaseTexture) => void, context?: any): EventEmitter;
        on(event: 'update', fn: (baseTexture: BaseTexture) => void, context?: any): EventEmitter;
        on(event: string, fn: Function, context?: any): EventEmitter;

        once(event: 'dispose', fn: (baseTexture: BaseTexture) => void, context?: any): EventEmitter;
        once(event: 'error', fn: (baseTexture: BaseTexture) => void, context?: any): EventEmitter;
        once(event: 'loaded', fn: (baseTexture: BaseTexture) => void, context?: any): EventEmitter;
        once(event: 'update', fn: (baseTexture: BaseTexture) => void, context?: any): EventEmitter;
        once(event: string, fn: Function, context?: any): EventEmitter;

    }
    export class RenderTexture extends Texture {

        protected renderWebGL(displayObject: DisplayObject, matrix?: Matrix, clear?: boolean, updateTransform?: boolean): void;
        protected renderCanvas(displayObject: DisplayObject, matrix?: Matrix, clear?: boolean, updateTransform?: boolean): void;

        constructor(renderer: CanvasRenderer | WebGLRenderer, width?: number, height?: number, scaleMode?: number, resolution?: number);

        width: number;
        height: number;
        resolution: number;
        renderer: CanvasRenderer | WebGLRenderer;
        valid: boolean;

        render(displayObject: DisplayObject, matrix?: Matrix, clear?: boolean, updateTransform?: boolean): void;
        resize(width: number, height: number, updateBase?: boolean): void;
        clear(): void;
        destroy(): void;
        getImage(): HTMLImageElement;
        getPixels(): number[];
        getPixel(x: number, y: number): number[];
        getBase64(): string;
        getCanvas(): HTMLCanvasElement;

    }
    export class Texture extends BaseTexture {

        static fromImage(imageUrl: string, crossOrigin?: boolean, scaleMode?: number): Texture;
        static fromFrame(frameId: string): Texture;
        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: number): Texture;
        static fromVideo(video: HTMLVideoElement | string, scaleMode?: number): Texture;
        static fromVideoUrl(videoUrl: string, scaleMode?: number): Texture;
        static addTextureToCache(texture: Texture, id: string): void;
        static removeTextureFromCache(id: string): Texture;
        static EMPTY: Texture;

        protected _frame: Rectangle;
        protected _uvs: TextureUvs;

        protected onBaseTextureUpdated(baseTexture: BaseTexture): void;
        protected onBaseTextureLoaded(baseTexture: BaseTexture): void;
        protected _updateUvs(): void;

        constructor(baseTexture: BaseTexture, frame?: Rectangle, crop?: Rectangle, trim?: Rectangle, rotate?: boolean);

        noFrame: boolean;
        baseTexture: BaseTexture;
        trim: Rectangle;
        valid: boolean;
        requiresUpdate: boolean;
        width: number;
        height: number;
        crop: Rectangle;
        rotate: boolean;

        frame: Rectangle;

        update(): void;
        destroy(destroyBase?: boolean): void;
        clone(): Texture;

    }
    export class TextureUvs {

        x0: number;
        y0: number;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        x3: number;
        y3: number;

        set(frame: Rectangle, baseFrame: Rectangle, rotate: boolean): void;

    }
    export class VideoBaseTexture extends BaseTexture {

        static fromVideo(video: HTMLVideoElement, scaleMode?: number): VideoBaseTexture;
        static fromUrl(videoSrc: string | any | string[] | any[]): VideoBaseTexture;

        protected _loaded: boolean;
        protected _onUpdate(): void;
        protected _onPlayStart(): void;
        protected _onPlayStop(): void;
        protected _onCanPlay(): void;

        constructor(source: HTMLVideoElement, scaleMode?: number);

        autoUpdate: boolean;

        destroy(): void;

    }

    //utils

    export class utils {

        static uuid(): number;
        static hex2rgb(hex: number, out?: number[]): number[];
        static hex2String(hex: number): string;
        static rgb2hex(rgb: Number[]): number;
        static canUseNewCanvasBlendModel(): boolean;
        static getNextPowerOfTwo(number: number): number;
        static isPowerOfTwo(width: number, height: number): boolean;
        static getResolutionOfUrl(url: string): number;
        static sayHello(type: string): void;
        static isWebGLSupported(): boolean;
        static sign(n: number): number;
        static TextureCache: any;
        static BaseTextureCache: any;

    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////EXTRAS////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    export module extras {

        export interface BitmapTextStyle {

            font?: string | {

                name?: string;
                size?: number;

            };
            align?: string;
            tint?: number;

        }
        export class BitmapText extends Container {

            static fonts: any;

            protected _glyphs: Sprite[];
            protected _font: string | {
                tint: number;
                align: string;
                name: string;
                size: number;
            }
            protected _text: string;

            protected updateText(): void;

            constructor(text: string, style?: BitmapTextStyle);

            textWidth: number;
            textHeight: number;
            maxWidth: number;
            maxLineHeight: number;
            dirty: boolean;

            tint: number;
            align: string;
            font: string | {
                tint: number;
                align: string;
                name: string;
                size: number;
            }
            text: string;

        }
        export class MovieClip extends Sprite {

            static fromFrames(frame: string[]): MovieClip;
            static fromImages(images: string[]): MovieClip;

            protected _textures: Texture[];
            protected _durations: number[];
            protected _currentTime: number;

            protected update(deltaTime: number): void;

            constructor(textures: Texture[]);

            animationSpeed: number;
            loop: boolean;
            onComplete: () => void;
            currentFrame: number;
            playing: boolean;

            totalFrames: number;
            textures: Texture[];

            stop(): void;
            play(): void;
            gotoAndStop(frameName: number): void;
            gotoAndPlay(frameName: number): void;
            destroy(): void;

        }
        export class TilingSprite extends Sprite {

            //This is really unclean but is the only way :(
            //See http://stackoverflow.com/questions/29593905/typescript-declaration-extending-class-with-static-method/29595798#29595798
            //Thanks bas!
            static fromFrame(frameId: string): Sprite;
            static fromImage(imageId: string, crossorigin?: boolean, scaleMode?: number): Sprite;

            static fromFrame(frameId: string, width?: number, height?: number): TilingSprite;
            static fromImage(imageId: string, width?: number, height?: number, crossorigin?: boolean, scaleMode?: number): TilingSprite;

            protected _tileScaleOffset: Point;
            protected _tilingTexture: boolean;
            protected _refreshTexture: boolean;
            protected _uvs: TextureUvs[];

            constructor(texture: Texture, width: number, height: number);

            tileScale: Point;
            tilePosition: Point;

            width: number;
            height: number;
            originalTexture: Texture;

            getBounds(): Rectangle;
            generateTilingTexture(renderer: WebGLRenderer | CanvasRenderer, texture: Texture, forcePowerOfTwo?: boolean): Texture;
            containsPoint(point: Point): boolean;
            destroy(): void;

        }

    }

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////FILTERS////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    module filters {

        export class AsciiFilter extends AbstractFilter {
            size: number;
        }
        export class BloomFilter extends AbstractFilter {

            blur: number;
            blurX: number;
            blurY: number;

        }
        export class BlurFilter extends AbstractFilter {

            protected blurXFilter: BlurXFilter;
            protected blurYFilter: BlurYFilter;

            blur: number;
            passes: number;
            blurX: number;
            blurY: number;

        }
        export class BlurXFilter extends AbstractFilter {

            passes: number;
            strength: number;
            blur: number;

        }
        export class BlurYFilter extends AbstractFilter {

            passes: number;
            strength: number;
            blur: number;

        }
        export class SmartBlurFilter extends AbstractFilter {

        }
        export class ColorMatrixFilter extends AbstractFilter {

            protected _loadMatrix(matrix: number[], multiply: boolean): void;
            protected _multiply(out: number[], a: number[], b: number[]): void;
            protected _colorMatrix(matrix: number[]): void;

            matrix: number[];

            brightness(b: number, multiply?: boolean): void;
            greyscale(scale: number, multiply?: boolean): void;
            blackAndWhite(multiply?: boolean): void;
            hue(rotation: number, multiply?: boolean): void;
            contrast(amount: number, multiply?: boolean): void;
            saturate(amount: number, multiply?: boolean): void;
            desaturate(multiply?: boolean): void;
            negative(multiply?: boolean): void;
            sepia(multiply?: boolean): void;
            technicolor(multiply?: boolean): void;
            polaroid(multiply?: boolean): void;
            toBGR(multiply?: boolean): void;
            kodachrome(multiply?: boolean): void;
            browni(multiply?: boolean): void;
            vintage(multiply?: boolean): void;
            colorTone(desaturation: number, toned: number, lightColor: string, darkColor: string, multiply?: boolean): void;
            night(intensity: number, multiply?: boolean): void;
            predator(amount: number, multiply?: boolean): void;
            lsd(multiply?: boolean): void;
            reset(): void;

        }
        export class ColorStepFilter extends AbstractFilter {

            step: number;

        }
        export class ConvolutionFilter extends AbstractFilter {

            constructor(matrix: number[], width: number, height: number);

            matrix: number[];
            width: number;
            height: number;

        }
        export class CrossHatchFilter extends AbstractFilter {

        }
        export class DisplacementFilter extends AbstractFilter {

            constructor(sprite: Sprite, scale?: number);

            map: Texture;

            scale: Point;

        }
        export class DotScreenFilter extends AbstractFilter {

            scale: number;
            angle: number;

        }
        export class BlurYTintFilter extends AbstractFilter {

            blur: number;

        }
        export class DropShadowFilter extends AbstractFilter {

            blur: number;
            blurX: number;
            blurY: number;
            color: number;
            alpha: number;
            distance: number;
            angle: number;

        }
        export class GrayFilter extends AbstractFilter {

            gray: number;

        }
        export class InvertFilter extends AbstractFilter {

            invert: number;

        }
        export class NoiseFilter extends AbstractFilter {

            noise: number;

        }
        export class PixelateFilter extends AbstractFilter {

            size: Point;

        }
        export class RGBSplitFilter extends AbstractFilter {

            red: number;
            green: number;
            blue: number;

        }
        export class SepiaFilter extends AbstractFilter {

            sepia: number;

        }
        export class ShockwaveFilter extends AbstractFilter {

            center: number[];
            params: any;
            time: number;

        }
        export class TiltShiftAxisFilter extends AbstractFilter {

            blur: number;
            gradientBlur: number;
            start: number;
            end: number;

            updateDelta(): void;

        }
        export class TiltShiftFilter extends AbstractFilter {

            blur: number;
            gradientBlur: number;
            start: number;
            end: number;

        }
        export class TiltShiftXFilter extends AbstractFilter {

            updateDelta(): void;

        }
        export class TiltShiftYFilter extends AbstractFilter {

            updateDelta(): void;

        }
        export class TwistFilter extends AbstractFilter {

            offset: Point;
            radius: number;
            angle: number;

        }
        export class FXAAFilter extends AbstractFilter {

            applyFilter(renderer: WebGLRenderer, input: RenderTarget, output: RenderTarget): void;

        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////INTERACTION///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    export module interaction {

        export interface InteractionEvent {

            stopped: boolean;
            target: any;
            type: string;
            data: InteractionData;
            stopPropagation(): void;

        }

        export class InteractionData {

            global: Point;
            target: DisplayObject;
            originalEvent: Event;

            getLocalPosition(displayObject: DisplayObject, point?: Point, globalPos?: Point): Point;

        }

        export class InteractionManager {

            protected interactionDOMElement: HTMLElement;
            protected eventsAdded: boolean;
            protected _tempPoint: Point;

            protected setTargetElement(element: HTMLElement, resolution: number): void;
            protected addEvents(): void;
            protected removeEvents(): void;
            protected dispatchEvent(displayObject: DisplayObject, eventString: string, eventData: any): void;
            protected onMouseDown: (event: Event) => void;
            protected processMouseDown: (displayObject: DisplayObject, hit: boolean) => void;
            protected onMouseUp: (event: Event) => void;
            protected processMouseUp: (displayObject: DisplayObject, hit: boolean) => void;
            protected onMouseMove: (event: Event) => void;
            protected processMouseMove: (displayObject: DisplayObject, hit: boolean) => void;
            protected onMouseOut: (event: Event) => void;
            protected processMouseOverOut: (displayObject: DisplayObject, hit: boolean) => void;
            protected onTouchStart: (event: Event) => void;
            protected processTouchStart: (DisplayObject: DisplayObject, hit: boolean) => void;
            protected onTouchEnd: (event: Event) => void;
            protected processTouchEnd: (displayObject: DisplayObject, hit: boolean) => void;
            protected onTouchMove: (event: Event) => void;
            protected processTouchMove: (displayObject: DisplayObject, hit: boolean) => void;
            protected getTouchData(touchEvent: InteractionData): InteractionData;
            protected returnTouchData(touchData: InteractionData): void;

            constructor(renderer: CanvasRenderer | WebGLRenderer, options?: { autoPreventDefault?: boolean; interactionFrequence?: number; });

            renderer: CanvasRenderer | WebGLRenderer;
            autoPreventDefault: boolean;
            interactionFrequency: number;
            mouse: InteractionData;
            eventData: {
                stopped: boolean;
                target: any;
                type: any;
                data: InteractionData;
            };
            interactiveDataPool: InteractionData[];
            last: number;
            currentCursorStyle: string;
            resolution: number;
            update(deltaTime: number): void;

            mapPositionToPoint(point: Point, x: number, y: number): void;
            processInteractive(point: Point, displayObject: DisplayObject, func: (displayObject: DisplayObject, hit: boolean) => void, hitTest: boolean, interactive: boolean): boolean;
            destroy(): void;

        }

        export interface InteractiveTarget {

            interactive: boolean;
            buttonMode: boolean;
            interactiveChildren: boolean;
            defaultCursor: string;
            hitArea: HitArea;

        }

    }

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////LOADER/////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //https://github.com/englercj/resource-loader/blob/master/src/Loader.js

    export module loaders {
        export interface LoaderOptions {

            crossOrigin?: boolean;
            loadType?: number;
            xhrType?: string;

        }
        export interface ResourceDictionary {

            [index: string]: PIXI.loaders.Resource;
        }
        export class Loader extends EventEmitter {

            constructor(baseUrl?: string, concurrency?: number);

            baseUrl: string;
            progress: number;
            loading: boolean;
            resources: ResourceDictionary;

            add(name: string, url: string, options?: LoaderOptions, cb?: () => void): Loader;
            add(url: string, options?: LoaderOptions, cb?: () => void): Loader;
            //todo I am not sure of object literal notional (or its options) so just allowing any but would love to improve this
            add(obj: any, options?: LoaderOptions, cb?: () => void): Loader;

            on(event: 'complete', fn: (loader: loaders.Loader, object: any) => void, context?: any): EventEmitter;
            on(event: 'error', fn: (error: Error, loader: loaders.Loader, resource: Resource) => void, context?: any): EventEmitter;
            on(event: 'load', fn: (loader: loaders.Loader, resource: Resource) => void, context?: any): EventEmitter;
            on(event: 'progress', fn: (loader: loaders.Loader, resource: Resource) => void, context?: any): EventEmitter;
            on(event: 'start', fn: (loader: loaders.Loader) => void, context?: any): EventEmitter;
            on(event: string, fn: Function, context?: any): EventEmitter;

            once(event: 'complete', fn: (loader: loaders.Loader, object: any) => void, context?: any): EventEmitter;
            once(event: 'error', fn: (error: Error, loader: loaders.Loader, resource: Resource) => void, context?: any): EventEmitter;
            once(event: 'load', fn: (loader: loaders.Loader, resource: Resource) => void, context?: any): EventEmitter;
            once(event: 'progress', fn: (loader: loaders.Loader, resource: Resource) => void, context?: any): EventEmitter;
            once(event: 'start', fn: (loader: loaders.Loader) => void, context?: any): EventEmitter;
            once(event: string, fn: Function, context?: any): EventEmitter;

            before(fn: Function): Loader;
            pre(fn: Function): Loader;

            after(fn: Function): Loader;
            use(fn: Function): Loader;

            reset(): void;

            load(cb?: (loader: loaders.Loader, object: any) => void): Loader;

        }
        export class Resource extends EventEmitter {

            static LOAD_TYPE: {
                XHR: number;
                IMAGE: number;
                AUDIO: number;
                VIDEO: number;
            };

            static XHR_READ_STATE: {
                UNSENT: number;
                OPENED: number;
                HEADERS_RECIEVED: number;
                LOADING: number;
                DONE: number;
            };

            static XHR_RESPONSE_TYPE: {
                DEFAULT: number;
                BUFFER: number;
                BLOB: number;
                DOCUMENT: number;
                JSON: number;
                TEXT: number;
            };

            constructor(name?: string, url?: string | string[], options?: LoaderOptions);

            name: string;
            texture: Texture;
            url: string;
            data: any;
            crossOrigin: string;
            loadType: number;
            xhrType: string;
            error: Error;
            xhr: XMLHttpRequest;

            complete(): void;
            load(cb?: () => void): void;

        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////MESH///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    export module mesh {

        export class Mesh extends Container {

            static DRAW_MODES: {
                TRIANGLE_MESH: number;
                TRIANGLES: number;
            }

            constructor(texture: Texture, vertices?: number[], uvs?: number[], indices?: number[], drawMode?: number);

            texture: Texture;
            uvs: number[];
            vertices: number[];
            indices: number[];
            dirty: boolean;
            blendMode: number;
            canvasPadding: number;
            drawMode: number;
            shader: Shader;

            getBounds(matrix?: Matrix): Rectangle;
            containsPoint(point: Point): boolean;

            protected _texture: Texture;

            protected _renderCanvasTriangleMesh(context: CanvasRenderingContext2D): void;
            protected _renderCanvasTriangles(context: CanvasRenderingContext2D): void;
            protected _renderCanvasDrawTriangle(context: CanvasRenderingContext2D, vertices: number, uvs: number, index0: number, index1: number, index2: number): void;
            protected renderMeshFlat(Mesh: Mesh): void;
            protected _onTextureUpdate(): void;

        }
        export class Rope extends Mesh {

            protected _ready: boolean;

            protected getTextureUvs(): TextureUvs;

            constructor(texture: Texture, points: Point[]);

            points: Point[];
            colors: number[];

            refresh(): void;

        }
        export class Plane extends Mesh {

            segmentsX: number;
            segmentsY: number;

            constructor(texture: Texture, segmentsX?: number, segmentsY?: number);

        }


        export class MeshRenderer extends ObjectRenderer {

            protected _initWebGL(mesh: Mesh): void;

            indices: number[];

            constructor(renderer: WebGLRenderer);

            render(mesh: Mesh): void;
            flush(): void;
            start(): void;
            destroy(): void;

        }

        export interface MeshShader extends Shader { }

    }

    module ticker {

        export var shared: Ticker;

        export class Ticker {

            protected _tick(time: number): void;
            protected _emitter: EventEmitter;
            protected _requestId: number;
            protected _maxElapsedMS: number;

            protected _requestIfNeeded(): void;
            protected _cancelIfNeeded(): void;
            protected _startIfPossible(): void;

            autoStart: boolean;
            deltaTime: number;
            elapsedMS: number;
            lastTime: number;
            speed: number;
            started: boolean;

            FPS: number;
            minFPS: number;

            add(fn: (deltaTime: number) => void, context?: any): Ticker;
            addOnce(fn: (deltaTime: number) => void, context?: any): Ticker;
            remove(fn: (deltaTime: number) => void, context?: any): Ticker;
            start(): void;
            stop(): void;
            update(): void;

        }

    }
}

declare module 'pixi.js' {
    export = PIXI;
}
