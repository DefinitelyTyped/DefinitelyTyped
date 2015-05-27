// Type definitions for PIXI 1.3
// Project: https://github.com/GoodBoyDigital/pixi.js/
// Definitions by: xperiments <http://github.com/xperiments>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module PIXI
{

    /* STATICS */
    export var gl:WebGLRenderingContext;
    export var BaseTextureCache: {};
    export var texturesToUpdate: BaseTexture[];
    export var texturesToDestroy: BaseTexture[];
    export var TextureCache: {};
    export var FrameCache: {};
    export var blendModes:{ NORMAL:number; SCREEN:number; };


    /* MODULE FUNCTIONS */
    export function autoDetectRenderer(width: number, height: number, view?: HTMLCanvasElement, transparent?: boolean, antialias?: boolean): IPixiRenderer;
    export function FilterBlock( mask:Graphics ):void;
    export function MaskFilter( graphics:Graphics ):void;


    /* DEBUG METHODS */

    export function runList( x ):void;

    /*INTERFACES*/

    export interface IBasicCallback
    {
        ():void
    }

    export interface IEvent
    {
        type: string;
        content: any;
    }

    export interface IHitArea
    {
        contains(x: number, y: number):boolean;
    }

    export interface IInteractionDataCallback
    {
        (interactionData: InteractionData):void
    }

    export interface IPixiRenderer
    {
        view: HTMLCanvasElement;
        render(stage: Stage): void;
    }

    export interface IBitmapTextStyle
    {
        font?: string;
        align?: string;
    }

    export interface ITextStyle
    {
        font?: string;
        stroke?: string;
        fill?: string;
        align?: string;
        strokeThickness?: number;
        wordWrap?: boolean;
        wordWrapWidth?:number;
    }



    /* CLASES */

    export class AssetLoader extends EventTarget
    {
        assetURLs: string[];
        onComplete: IBasicCallback;
        onProgress: IBasicCallback;
        constructor(assetURLs: string[], crossorigin?:boolean );
        load(): void;
    }

    export class BaseTexture extends EventTarget
    {
        height: number;
        width: number;
        source: string;

        constructor(source: HTMLImageElement);
        constructor(source: HTMLCanvasElement);
        destroy():void;

        static fromImage(imageUrl: string, crossorigin?:boolean ): BaseTexture;
    }

    export class BitmapFontLoader extends EventTarget
    {
        baseUrl:string;
        crossorigin:boolean;
        texture:Texture;
        url:string;
        constructor(url: string, crossorigin?: boolean);
        load():void;
    }

    export class BitmapText extends DisplayObjectContainer
    {
        width:number;
        height:number;
        constructor(text: string, style: IBitmapTextStyle);
        setStyle(style: IBitmapTextStyle): void;
        setText(text: string): void;
    }

    export class CanvasRenderer implements IPixiRenderer
    {
        context: CanvasRenderingContext2D;
        height: number;
        view: HTMLCanvasElement;
        width: number;
        constructor(width: number, height: number, view?: HTMLCanvasElement, transparent?: boolean);
        render(stage: Stage): void;
        resize(width: number, height: number):void;
    }

    export class Circle implements IHitArea
    {
        x: number;
        y: number;
        radius: number;
        constructor(x: number, y: number, radius: number);
        clone(): Circle;
        contains(x: number, y: number):boolean;
    }

    // TODO what is renderGroup
    export class CustomRenderable extends DisplayObject
    {
        constructor();
        renderCanvas(renderer: CanvasRenderer): void;
        initWebGL(renderer: WebGLRenderer): void;
        renderWebGL(renderGroup: any, projectionMatrix: any): void;
    }

    export class DisplayObject
    {
        x: number;
        y: number;
        alpha: number;
        buttonMode: boolean;
        filter:boolean;
        hitArea: IHitArea;
        parent: DisplayObjectContainer;
        pivot: Point;
        position: Point;
        rotation: number;
        renderable: boolean;
        scale: Point;
        stage: Stage;
        visible: boolean;
        worldAlpha: number;
        constructor();
        static autoDetectRenderer(width: number, height: number, view?: HTMLCanvasElement, transparent?: boolean): IPixiRenderer;
        click: IInteractionDataCallback;
        mousedown: IInteractionDataCallback;
        mouseout: IInteractionDataCallback;
        mouseover: IInteractionDataCallback;
        mouseup: IInteractionDataCallback;
        mouseupoutside: IInteractionDataCallback;
        mousemove: IInteractionDataCallback;
        tap: IInteractionDataCallback;
        touchend: IInteractionDataCallback;
        touchendoutside: IInteractionDataCallback;
        touchstart: IInteractionDataCallback;
        touchmove: IInteractionDataCallback;

        //deprecated
        setInteractive(interactive: boolean): void;

        // getters setters
        interactive:boolean;
        mask:Graphics;
    }

    export class DisplayObjectContainer extends DisplayObject
    {
        children: DisplayObject[];
        constructor();

        addChild(child: DisplayObject): void;
        addChildAt(child: DisplayObject, index: number): void;
        getChildAt(index:number):DisplayObject;
        removeChild(child: DisplayObject): void;
        swapChildren(child: DisplayObject, child2: DisplayObject): void;
    }

    export class Ellipse implements IHitArea
    {
        x: number;
        y: number;
        width: number;
        height: number;

        constructor(x: number, y: number, width: number, height: number);
        clone(): Ellipse;
        contains(x: number, y: number):boolean;
        getBounds():Rectangle;
    }

    export class EventTarget
    {
        addEventListener(type: string, listener: (event: IEvent) => void );
        removeEventListener(type: string, listener: (event: IEvent) => void );
        dispatchEvent(event: IEvent);
    }

    export class Graphics extends DisplayObjectContainer
    {
        lineWidth:number;
        lineColor:string;
        constructor();

        beginFill(color?: number, alpha?: number): void;
        clear(): void;
        drawCircle(x: number, y: number, radius: number): void;
        drawElipse(x: number, y: number, width: number, height: number): void;
        drawRect(x: number, y: number, width: number, height: number): void;
        endFill(): void;
        lineStyle(lineWidth?: number, color?: number, alpha?: number ): void;
        lineTo(x: number, y: number): void;
        moveTo(x: number, y: number): void;

        static POLY:number;
        static RECT:number;
        static CIRC:number;
        static ELIP:number;
    }

    export class ImageLoader extends EventTarget
    {
        texture:Texture;
        constructor(url: string, crossorigin?: boolean);
        load(): void;
    }

    /* TODO determine type of originalEvent*/
    export class InteractionData
    {
        global: Point;
        target: Sprite;
        constructor();
        originalEvent:any;
        getLocalPosition(displayObject: DisplayObject): Point;
    }

    export class InteractionManager
    {
        mouse: InteractionData;
        stage: Stage;
        touchs:{ [id:string]:InteractionData };
        constructor(stage: Stage);
    }

    export class JsonLoader extends EventTarget
    {
        url:string;
        crossorigin: boolean;
        baseUrl:string;
        loaded:boolean;
        constructor(url: string, crossorigin?: boolean);
        load(): void;
    }

    export class MovieClip extends Sprite
    {
        animationSpeed: number;
        currentFrame:number;
        loop: boolean;
        playing: boolean;
        textures: Texture[];
        constructor(textures: Texture[]);
        onComplete:IBasicCallback;
        gotoAndPlay(frameNumber: number): void;
        gotoAndStop(frameNumber: number): void;
        play(): void;
        stop(): void;
    }

    export class Point
    {
        x: number;
        y: number;
        constructor(x: number, y: number);
        clone(): Point;
    }

    export class Polygon implements IHitArea
    {
        points: Point[];

        constructor(points: Point[]);
        constructor(points: number[]);
        constructor(...points: Point[]);
        constructor(...points: number[]);

        clone(): Polygon;
        contains( x:number, y:number ):boolean;
    }

    export class Rectangle implements IHitArea
    {
        x: number;
        y: number;
        width: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
        clone(): Rectangle;
        contains(x: number, y: number):boolean;
    }

    export class RenderTexture extends Texture
    {
        constructor(width: number, height: number);
        resize(width: number, height: number): void;
    }

    export class Sprite extends DisplayObjectContainer
    {
        anchor: Point;
        blendMode: number;
        texture: Texture;

        //getters setters
        height: number;
        width: number;

        constructor(texture: Texture);

        static fromFrame(frameId: string): Sprite;
        static fromImage(url: string): Sprite;
        setTexture(texture: Texture): void;
    }

    /* TODO determine type of frames */
    export class SpriteSheetLoader extends EventTarget
    {
        url:string;
        crossorigin:boolean;
        baseUrl:string;
        texture:Texture;
        frames:Object;
        constructor(url: string, crossorigin?: boolean);
        load();
    }

    export class Stage extends DisplayObjectContainer
    {
        interactive:boolean;
        interactionManager:InteractionManager;
        constructor(backgroundColor: number, interactive?: boolean);
        getMousePosition(): Point;
        setBackgroundColor(backgroundColor: number): void;
    }

    export class Text extends Sprite
    {
        constructor(text: string, style: ITextStyle);
        destroy(destroyTexture:boolean):void;
        setText(text: string): void;
        setStyle(style: ITextStyle): void;
    }

    export class Texture extends EventTarget
    {
        baseTexture: BaseTexture;
        frame: Rectangle;
        trim:Point;
        render( displayObject:DisplayObject, position:Point, clear:boolean ):void;
        constructor(baseTexture: BaseTexture, frame?: Rectangle);
        destroy(destroyBase:boolean):void;
        setFrame(frame: Rectangle): void;

        static addTextureToCache(texture: Texture, id: string): void;
        static fromCanvas(canvas: HTMLCanvasElement): Texture;
        static fromFrame(frameId: string): Texture;
        static fromImage(imageUrl: string, crossorigin?: boolean): Texture;
        static removeTextureFromCache(id: any): Texture;
    }

    export class TilingSprite extends DisplayObjectContainer
    {
        width:number;
        height:number;
        texture:Texture;
        tilePosition: Point;
        tileScale: Point;
        constructor(texture: Texture, width: number, height: number);
        setTexture( texture: Texture ):void;
    }

    export class WebGLBatch
    {
        constructor(webGLContext: WebGLRenderingContext);
        clean():void;
        restoreLostContext(gl:WebGLRenderingContext);
        init(sprite: Sprite): void;
        insertAfter(sprite: Sprite, previousSprite: Sprite): void;
        insertBefore(sprite: Sprite, nextSprite: Sprite): void;
        growBatch(): void;
        merge(batch: WebGLBatch): void;
        refresh(): void;
        remove(sprite: Sprite): void;
        render(): void;
        split(sprite: Sprite): WebGLBatch;
        update(): void;
    }

    /* Determine type of Object */
    export class WebGLRenderGroup
    {
        render(projection:Object):void;
    }

    export class WebGLRenderer implements IPixiRenderer
    {
        view: HTMLCanvasElement;
        constructor(width: number, height: number, view?: HTMLCanvasElement, transparent?: boolean, antialias?:boolean );
        render(stage: Stage): void;
        resize(width: number, height: number): void;
    }

}

declare function requestAnimFrame( animate: PIXI.IBasicCallback );


declare module PIXI.PolyK
{
    export function Triangulate( p:number[]):number[];
}



