// Type definitions for PIXI with Phaser Deviations. 

declare module PIXI {

    export var WEBGL_RENDERER: number;
    export var CANVAS_RENDERER: number;
    export var VERSION: string;

    export enum blendModes {

        NORMAL,
        ADD,
        MULTIPLY,
        SCREEN,
        OVERLAY,
        DARKEN,
        LIGHTEN,
        COLOR_DODGE,
        COLOR_BURN,
        HARD_LIGHT,
        SOFT_LIGHT,
        DIFFERENCE,
        EXCLUSION,
        HUE,
        SATURATION,
        COLOR,
        LUMINOSITY

    }

    export enum scaleModes {

        DEFAULT,
        LINEAR,
        NEAREST

    }

    export var defaultRenderOptions: PixiRendererOptions;

    export var INTERACTION_REQUENCY: number;
    export var AUTO_PREVENT_DEFAULT: boolean;

    export var PI_2: number;
    export var RAD_TO_DEG: number;
    export var DEG_TO_RAD: number;

    export var RETINA_PREFIX: string;
    export var identityMatrix: Matrix;
    export var glContexts: WebGLRenderingContext[];
    export var instances: any[];

    export var BaseTextureCache: { [key: string]: BaseTexture };
    export var TextureCache: { [key: string]: Texture };
    export var TextureSilentFail: boolean;
    export var BitmapText: { fonts: {} };

    export function isPowerOfTwo(width: number, height: number): boolean;

    export function rgb2hex(rgb: number[]): string;
    export function hex2rgb(hex: string): number[];

    export function autoDetectRenderer(width?: number, height?: number, options?: PixiRendererOptions): PixiRenderer;
    export function autoDetectRecommendedRenderer(width?: number, height?: number, options?: PixiRendererOptions): PixiRenderer;

    export function canUseNewCanvasBlendModes(): boolean;
    export function getNextPowerOfTwo(number: number): number;

    export function AjaxRequest(): XMLHttpRequest;

    export function CompileFragmentShader(gl: WebGLRenderingContext, shaderSrc: string[]): any;
    export function CompileProgram(gl: WebGLRenderingContext, vertexSrc: string[], fragmentSrc: string[]): any;


    export interface IEventCallback {
        (e?: IEvent): void
    }

    export interface IEvent {
        type: string;
        content: any;
    }

    export interface HitArea {
        contains(x: number, y: number): boolean;
    }

    export interface IInteractionDataCallback {
        (interactionData: InteractionData): void
    }

    export interface PixiRenderer {

        autoResize: boolean;
        clearBeforeRender: boolean;
        height: number;
        resolution: number;
        transparent: boolean;
        type: number;
        view: HTMLCanvasElement;
        width: number;

        destroy(): void;
        render(stage: Stage): void;
        resize(width: number, height: number): void;

    }

    export interface PixiRendererOptions {

        autoResize?: boolean;
        antialias?: boolean;
        clearBeforeRender?: boolean;
        preserveDrawingBuffer?: boolean;
        resolution?: number;
        transparent?: boolean;
        view?: HTMLCanvasElement;

    }

    export interface BitmapTextStyle {

        font?: string;
        align?: string;
        tint?: string;

    }

    export interface TextStyle {

        align?: string;
        dropShadow?: boolean;
        dropShadowColor?: string;
        dropShadowAngle?: number;
        dropShadowDistance?: number;
        fill?: string;
        font?: string;
        lineJoin?: string;
        stroke?: string;
        strokeThickness?: number;
        wordWrap?: boolean;
        wordWrapWidth?: number;

    }

    export interface Loader {

        load(): void;

    }

    export interface MaskData {

        alpha: number;
        worldTransform: number[];

    }

    export interface RenderSession {

        context: CanvasRenderingContext2D;
        maskManager: CanvasMaskManager;
        scaleMode: scaleModes;
        smoothProperty: string;
        roundPixels: boolean;

    }

    export interface ShaderAttribute {
        // TODO: Find signature of shader attributes
    }

    export interface FilterBlock {

        visible: boolean;
        renderable: boolean;

    }


    /**
    * This is the base class for creating a PIXI filter. Currently only webGL supports filters.
    * If you want to make a custom filter this should be your base class.
    */
    export class AbstractFilter {


        /**
        * This is the base class for creating a PIXI filter. Currently only webGL supports filters.
        * If you want to make a custom filter this should be your base class.
        * 
        * @param fragmentSrc The fragment source in an array of strings.
        * @param uniforms An object containing the uniforms for this filter.
        */
        constructor(fragmentSrc: string | string[], uniforms: any);

        dirty: boolean;
        padding: number;
        uniforms: any;
        fragmentSrc: string | string[];

        apply(frameBuffer: WebGLFramebuffer): void;

        /**
        * Syncs the uniforms between the class object and the shaders.
        */
        syncUniforms(): void;

    }

    export class AlphaMaskFilter extends AbstractFilter {

        constructor(texture: Texture);

        map: Texture;

        onTextureLoaded(): void;

    }

    export class AsciiFilter extends AbstractFilter {

        size: number;

    }

    export class AssetLoader implements Mixin {

        assetURLs: string[];
        crossorigin: boolean;
        loadersByType: { [key: string]: Loader };

        constructor(assetURLs: string[], crossorigin: boolean);

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;


    }

    export class AtlasLoader implements Mixin {

        url: string;
        baseUrl: string;
        crossorigin: boolean;
        loaded: boolean;

        constructor(url: string, crossorigin: boolean);

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;

    }


    /**
    * A texture stores the information that represents an image. All textures have a base texture.
    */
    export class BaseTexture implements Mixin {


        /**
        * Helper function that creates a base texture from the given image url.
        * If the image is not in the base texture cache it will be created and loaded.
        * 
        * @param imageUrl The image url of the texture
        * @param crossorigin -
        * @param scaleMode See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
        * @return BaseTexture
        */
        static fromImage(imageUrl: string, crossorigin?: boolean, scaleMode?: scaleModes): BaseTexture;

        /**
        * Helper function that creates a base texture from the given canvas element.
        * 
        * @param canvas The canvas element source of the texture
        * @param scaleMode See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
        * @return BaseTexture
        */
        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: scaleModes): BaseTexture;


        /**
        * A texture stores the information that represents an image. All textures have a base texture.
        * 
        * @param source the source object (image or canvas)
        * @param scaleMode See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
        */
        constructor(source: HTMLImageElement, scaleMode: scaleModes);

        /**
        * A texture stores the information that represents an image. All textures have a base texture.
        * 
        * @param source the source object (image or canvas)
        * @param scaleMode See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
        */
        constructor(source: HTMLCanvasElement, scaleMode: scaleModes);


        /**
        * [read-only] The height of the base texture set when the image has loaded
        */
        height: number;

        /**
        * [read-only] Set to true once the base texture has loaded
        */
        hasLoaded: boolean;

        /**
        * Set this to true if a mipmap of this texture needs to be generated. This value needs to be set before the texture is used
        * Also the texture must be a power of two size to work
        */
        mipmap: boolean;

        /**
        * Controls if RGB channels should be pre-multiplied by Alpha  (WebGL only)
        * Default: true
        */
        premultipliedAlpha: boolean;

        /**
        * The Resolution of the texture.
        */
        resolution: number;

        /**
        * The scale mode to apply when scaling this texture
        * Default: PIXI.scaleModes.LINEAR
        */
        scaleMode: scaleModes;

        /**
        * The image source that is used to create the texture.
        */
        source: HTMLImageElement;

        /**
        * [read-only] The width of the base texture set when the image has loaded
        */
        width: number;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        /**
        * Forces this BaseTexture to be set as loaded, with the given width and height.
        * Then calls BaseTexture.dirty.
        * Important for when you don't want to modify the source object by forcing in `complete` or dimension properties it may not have.
        * 
        * @param width - The new width to force the BaseTexture to be.
        * @param height - The new height to force the BaseTexture to be.
        */
        forceLoaded(width: number, height: number): void;

        /**
        * Destroys this base texture
        */
        destroy(): void;

        /**
        * Sets all glTextures to be dirty.
        */
        dirty(): void;

        /**
        * Changes the source image of the texture
        * 
        * @param newSrc the path of the image
        */
        updateSourceImage(newSrc: string): void;

        /**
        * Removes the base texture from the GPU, useful for managing resources on the GPU.
        * Atexture is still 100% usable and will simply be reuploaded if there is a sprite on screen that is using it.
        */
        unloadFromGPU(): void;

    }

    export class BitmapFontLoader implements Mixin {

        constructor(url: string, crossorigin: boolean);

        baseUrl: string;
        crossorigin: boolean;
        texture: Texture;
        url: string;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;

    }

    export class BlurFilter extends AbstractFilter {

        blur: number;
        blurX: number;
        blurY: number;

    }

    export class BlurXFilter extends AbstractFilter {

        blur: number;

    }

    export class BlurYFilter extends AbstractFilter {

        blur: number;

    }


    /**
    * Creates a Canvas element of the given size.
    */
    export class CanvasBuffer {


        /**
        * Creates a Canvas element of the given size.
        * 
        * @param width the width for the newly created canvas
        * @param height the height for the newly created canvas
        */
        constructor(width: number, height: number);


        /**
        * The Canvas object that belongs to this CanvasBuffer.
        */
        canvas: HTMLCanvasElement;

        /**
        * A CanvasRenderingContext2D object representing a two-dimensional rendering context.
        */
        context: CanvasRenderingContext2D;

        /**
        * The height of the Canvas in pixels.
        */
        height: number;

        /**
        * The width of the Canvas in pixels.
        */
        width: number;


        /**
        * Clears the canvas that was created by the CanvasBuffer class.
        */
        clear(): void;

        /**
        * Resizes the canvas to the specified width and height.
        * 
        * @param width the new width of the canvas
        * @param height the new height of the canvas
        */
        resize(width: number, height: number): void;

    }


    /**
    * A set of functions used to handle masking.
    */
    export class CanvasMaskManager {


        /**
        * This method adds it to the current stack of masks.
        * 
        * @param maskData the maskData that will be pushed
        * @param renderSession The renderSession whose context will be used for this mask manager.
        */
        pushMask(maskData: MaskData, renderSession: RenderSession): void;

        /**
        * Restores the current drawing context to the state it was before the mask was applied.
        * 
        * @param renderSession The renderSession whose context will be used for this mask manager.
        */
        popMask(renderSession: RenderSession): void;

    }


    /**
    * The CanvasRenderer draws the Stage and all its content onto a 2d canvas. This renderer should be used for browsers that do not support webGL.
    * Don't forget to add the CanvasRenderer.view to your DOM or you will not see anything :)
    */
    export class CanvasRenderer implements PixiRenderer {


        /**
        * The CanvasRenderer draws the Stage and all its content onto a 2d canvas. This renderer should be used for browsers that do not support webGL.
        * Don't forget to add the CanvasRenderer.view to your DOM or you will not see anything :)
        * 
        * @param width the width of the canvas view - Default: 800
        * @param height the height of the canvas view - Default: 600
        * @param options The optional renderer parameters
        */
        constructor(width?: number, height?: number, options?: PixiRendererOptions);


        /**
        * Whether the render view should be resized automatically
        */
        autoResize: boolean;

        /**
        * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
        * If the Stage is NOT transparent Pixi will use a canvas sized fillRect operation every frame to set the canvas background color.
        * If the Stage is transparent Pixi will use clearRect to clear the canvas every frame.
        * Disable this by setting this to false. For example if your game has a canvas filling background image you often don't need this set.
        */
        clearBeforeRender: boolean;

        /**
        * The canvas 2d context that everything is drawn with
        */
        context: CanvasRenderingContext2D;

        /**
        * Internal var.
        */
        count: number;

        /**
        * The height of the canvas view
        * Default: 600
        */
        height: number;
        maskManager: CanvasMaskManager;

        /**
        * Boolean flag controlling canvas refresh.
        */
        refresh: boolean;

        /**
        * The render session is just a bunch of parameter used for rendering
        */
        renderSession: RenderSession;

        /**
        * The resolution of the canvas.
        */
        resolution: number;

        /**
        * Whether the render view is transparent
        */
        transparent: boolean;

        /**
        * The renderer type.
        */
        type: number;

        /**
        * The canvas element that everything is drawn to.
        */
        view: HTMLCanvasElement;

        /**
        * The width of the canvas view
        * Default: 800
        */
        width: number;


        /**
        * Removes everything from the renderer and optionally removes the Canvas DOM element.
        * 
        * @param removeView Removes the Canvas element from the DOM. - Default: true
        */
        destroy(removeView?: boolean): void;

        /**
        * Renders the Stage to this canvas view
        * 
        * @param stage the Stage element to be rendered
        */
        render(stage: Stage): void;

        /**
        * Resizes the canvas view to the specified width and height
        * 
        * @param width the new width of the canvas view
        * @param height the new height of the canvas view
        */
        resize(width: number, height: number): void;

    }


    /**
    * Utility methods for Sprite/Texture tinting.
    */
    export class CanvasTinter {


        /**
        * Basically this method just needs a sprite and a color and tints the sprite with the given color.
        * 
        * @param sprite the sprite to tint
        * @param color the color to use to tint the sprite with
        * @return The tinted canvas
        */
        static getTintedTexture(sprite: Sprite, color: number): HTMLCanvasElement;

        /**
        * Tint a texture using the "multiply" operation.
        * 
        * @param texture the texture to tint
        * @param color the color to use to tint the sprite with
        * @param canvas the current canvas
        */
        static tintWithMultiply(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        static tintWithOverlay(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        static tintWithPerPixel(texture: Texture, color: number, canvas: HTMLCanvasElement): void;


        /**
        * Whether or not the Canvas BlendModes are supported, consequently the ability to tint using the multiply method.
        */
        static canUseMultiply: boolean;
        static tintMethod: any;

    }

    export class Circle implements HitArea {

        constructor(x: number, y: number, radius: number);

        x: number;
        y: number;
        radius: number;

        clone(): Circle;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;

    }

    export class ColorMatrixFilter extends AbstractFilter {

        matrix: Matrix;

    }

    export class ColorStepFilter extends AbstractFilter {

        step: number;

    }

    export class ConvolutionFilter extends AbstractFilter {

        constructor(matrix: number[], width: number, height: number);

        matrix: Matrix;
        width: number;
        height: number;

    }

    export class CrossHatchFilter extends AbstractFilter {

        blur: number;

    }

    export class DisplacementFilter extends AbstractFilter {

        constructor(texture: Texture);

        map: Texture;
        offset: Point;
        scale: Point;

    }

    export class DotScreenFilter extends AbstractFilter {

        angle: number;
        scale: Point;

    }


    /**
    * The base class for all objects that are rendered on the screen.
    * This is an abstract class and should not be used on its own rather it should be extended.
    */
    export class DisplayObject {


        /**
        * The opacity of the object.
        */
        alpha: number;
        buttonMode: boolean;

        /**
        * Set if this display object is cached as a bitmap.
        * This basically takes a snap shot of the display object as it is at that moment. It can provide a performance benefit for complex static displayObjects.
        * To remove simply set this property to 'null'
        */
        cacheAsBitmap: boolean;
        defaultCursor: string;

        /**
        * The area the filter is applied to like the hitArea this is used as more of an optimisation
        * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle
        */
        filterArea: Rectangle;

        /**
        * Sets the filters for the displayObject.
        * IMPORTANT: This is a webGL only feature and will be ignored by the Canvas renderer.
        * 
        * To remove filters simply set this property to 'null'.
        * 
        * You cannot have a filter and a multiply blend mode active at the same time. Setting a filter will reset
        * this objects blend mode to NORMAL.
        */
        filters: AbstractFilter[];

        /**
        * This is the defined area that will pick up mouse / touch events. It is null by default.
        * Setting it is a neat way of optimising the hitTest function that the interactionManager will use (as it will not need to hit test all the children)
        */
        hitArea: HitArea;
        interactive: boolean;

        /**
        * Sets a mask for the displayObject. A mask is an object that limits the visibility of an object to the shape of the mask applied to it.
        * In PIXI a regular mask must be a PIXI.Graphics object. This allows for much faster masking in canvas as it utilises shape clipping.
        * To remove a mask, set this property to null.
        */
        mask: Graphics;

        /**
        * [read-only] The display object container that contains this display object.
        */
        parent: DisplayObjectContainer;

        /**
        * The pivot point of the displayObject that it rotates around
        */
        pivot: Point;

        /**
        * The coordinate of the object relative to the local coordinates of the parent.
        */
        position: Point;

        /**
        * Can this object be rendered
        */
        renderable: boolean;

        /**
        * The rotation of the object in radians.
        */
        rotation: number;

        /**
        * The scale factor of the object.
        */
        scale: Point;

        /**
        * [read-only] The stage the display object is connected to, or undefined if it is not connected to the stage.
        */
        stage: Stage;

        /**
        * The visibility of the object.
        */
        visible: boolean;

        /**
        * [read-only] The multiplied alpha of the displayObject
        */
        worldAlpha: number;

        /**
        * The position of the Display Object based on the world transform.
        * This value is updated at the end of updateTransform and takes all parent transforms into account.
        */
        worldPosition: PIXI.Point;

        /**
        * The scale of the Display Object based on the world transform.
        * This value is updated at the end of updateTransform and takes all parent transforms into account.
        */
        worldScale: PIXI.Point;

        /**
        * The rotation of the Display Object, in radians, based on the world transform.
        * This value is updated at the end of updateTransform and takes all parent transforms into account.
        */
        worldRotation: number;

        /**
        * [read-only] Indicates if the sprite is globally visible.
        */
        worldVisible: boolean;

        /**
        * The position of the displayObject on the x axis relative to the local coordinates of the parent.
        */
        x: number;

        /**
        * The position of the displayObject on the y axis relative to the local coordinates of the parent.
        */
        y: number;

        click(e: InteractionData): void;
        displayObjectUpdateTransform(): void;

        /**
        * Retrieves the bounds of the displayObject as a rectangle object
        * 
        * @param matrix -
        * @return the rectangular bounding area
        */
        getBounds(matrix?: Matrix): Rectangle;

        /**
        * Retrieves the local bounds of the displayObject as a rectangle object
        * @return the rectangular bounding area
        */
        getLocalBounds(): Rectangle;

        /**
        * Useful function that returns a texture of the displayObject object that can then be used to create sprites
        * This can be quite useful if your displayObject is static / complicated and needs to be reused multiple times.
        * 
        * @param resolution The resolution of the texture being generated
        * @param scaleMode See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
        * @param renderer The renderer used to generate the texture.
        * @return a texture of the graphics object
        */
        generateTexture(resolution?: number, scaleMode?: number, renderer?: PixiRenderer): Texture;
        mousedown(e: InteractionData): void;
        mouseout(e: InteractionData): void;
        mouseover(e: InteractionData): void;
        mouseup(e: InteractionData): void;
        mousemove(e: InteractionData): void;
        mouseupoutside(e: InteractionData): void;
        rightclick(e: InteractionData): void;
        rightdown(e: InteractionData): void;
        rightup(e: InteractionData): void;
        rightupoutside(e: InteractionData): void;

        /**
        * Sets the object's stage reference, the stage this object is connected to
        * 
        * @param stage the stage that the object will have as its current stage reference
        */
        setStageReference(stage: Stage): void;
        tap(e: InteractionData): void;

        /**
        * Calculates the global position of the display object
        * 
        * @param position The world origin to calculate from
        * @return A point object representing the position of this object
        */
        toGlobal(position: Point): Point;

        /**
        * Calculates the local position of the display object relative to another point
        * 
        * @param position The world origin to calculate from
        * @param from The DisplayObject to calculate the global position from
        * @return A point object representing the position of this object
        */
        toLocal(position: Point, from: DisplayObject): Point;
        touchend(e: InteractionData): void;
        touchendoutside(e: InteractionData): void;
        touchstart(e: InteractionData): void;
        touchmove(e: InteractionData): void;
        updateTransform(parent?: PIXI.DisplayObjectContainer): void;

    }


    /**
    * A DisplayObjectContainer represents a collection of display objects.
    * It is the base class of all display objects that act as a container for other objects.
    */
    export class DisplayObjectContainer extends DisplayObject {


        /**
        * A DisplayObjectContainer represents a collection of display objects.
        * It is the base class of all display objects that act as a container for other objects.
        */
        constructor();


        /**
        * [read-only] The array of children of this container.
        */
        children: DisplayObject[];

        /**
        * The height of the displayObjectContainer, setting this will actually modify the scale to achieve the value set
        */
        height: number;

        /**
        * The width of the displayObjectContainer, setting this will actually modify the scale to achieve the value set
        */
        width: number;


        /**
        * Adds a child to the container.
        * 
        * @param child The DisplayObject to add to the container
        * @return The child that was added.
        */
        addChild(child: DisplayObject): DisplayObject;

        /**
        * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
        * 
        * @param child The child to add
        * @param index The index to place the child in
        * @return The child that was added.
        */
        addChildAt(child: DisplayObject, index: number): DisplayObject;

        /**
        * Retrieves the bounds of the displayObjectContainer as a rectangle. The bounds calculation takes all visible children into consideration.
        * @return The rectangular bounding area
        */
        getBounds(): Rectangle;

        /**
        * Returns the child at the specified index
        * 
        * @param index The index to get the child from
        * @return The child at the given index, if any.
        */
        getChildAt(index: number): DisplayObject;

        /**
        * Returns the index position of a child DisplayObject instance
        * 
        * @param child The DisplayObject instance to identify
        * @return The index position of the child display object to identify
        */
        getChildIndex(child: DisplayObject): number;

        /**
        * Retrieves the non-global local bounds of the displayObjectContainer as a rectangle. The calculation takes all visible children into consideration.
        * @return The rectangular bounding area
        */
        getLocalBounds(): Rectangle;

        /**
        * Removes a child from the container.
        * 
        * @param child The DisplayObject to remove
        * @return The child that was removed.
        */
        removeChild(child: DisplayObject): DisplayObject;

        /**
        * Removes a child from the specified index position.
        * 
        * @param index The index to get the child from
        * @return The child that was removed.
        */
        removeChildAt(index: number): DisplayObject;

        /**
        * Removes all children from this container that are within the begin and end indexes.
        * 
        * @param beginIndex The beginning position. Default value is 0.
        * @param endIndex The ending position. Default value is size of the container.
        */
        removeChildren(beginIndex?: number, endIndex?: number): DisplayObject[];

        /**
        * Removes the current stage reference from the container and all of its children.
        */
        removeStageReference(): void;

        /**
        * Changes the position of an existing child in the display object container
        * 
        * @param child The child DisplayObject instance for which you want to change the index number
        * @param index The resulting index number for the child display object
        */
        setChildIndex(child: DisplayObject, index: number): void;

        /**
        * Swaps the position of 2 Display Objects within this container.
        * 
        * @param child -
        * @param child2 -
        */
        swapChildren(child: DisplayObject, child2: DisplayObject): void;

    }

    export class Ellipse implements HitArea {

        constructor(x: number, y: number, width: number, height: number);

        x: number;
        y: number;
        width: number;
        height: number;

        clone(): Ellipse;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;

    }


    /**
    * Creates an homogenous object for tracking events so users can know what to expect.
    */
    export class Event {


        /**
        * Creates an homogenous object for tracking events so users can know what to expect.
        * 
        * @param target The target object that the event is called on
        * @param name The string name of the event that was triggered
        * @param data Arbitrary event data to pass along
        */
        constructor(target: any, name: string, data: any);


        /**
        * The original target the event triggered on.
        */
        target: any;

        /**
        * The string name of the event that this represents.
        */
        type: string;

        /**
        * The data that was passed in with this event.
        */
        data: any;

        /**
        * The timestamp when the event occurred.
        */
        timeStamp: number;


        /**
        * Stops the propagation of events up the scene graph (prevents bubbling).
        */
        stopPropagation(): void;
        preventDefault(): void;

        /**
        * Stops the propagation of events to sibling listeners (no longer calls any listeners).
        */
        stopImmediatePropagation(): void;

    }


    /**
    * Mixins event emitter functionality to a class
    */
    export class EventTarget {


        /**
        * Mixes in the properties of the EventTarget prototype onto another object
        * 
        * @param object The obj to mix into
        */
        static mixin(obj: any): void;

    }

    export class FilterTexture {


        /**
        * 
        * 
        * @param gl the current WebGL drawing context
        * @param width the horizontal range of the filter
        * @param height the vertical range of the filter
        * @param scaleMode See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
        */
        constructor(gl: WebGLRenderingContext, width: number, height: number, scaleMode: scaleModes);

        fragmentSrc: string[];
        frameBuffer: WebGLFramebuffer;
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        scaleMode: number;
        texture: WebGLTexture;


        /**
        * Clears the filter texture.
        */
        clear(): void;

        /**
        * Resizes the texture to the specified width and height
        * 
        * @param width the new width of the texture
        * @param height the new height of the texture
        */
        resize(width: number, height: number): void;

        /**
        * Destroys the filter texture.
        */
        destroy(): void;

    }


    /**
    * A GraphicsData object.
    */
    export class GraphicsData {


        /**
        * A GraphicsData object.
        */
        constructor(lineWidth?: number, lineColor?: number, lineAlpha?: number, fillColor?: number, fillAlpha?: number, fill?: boolean, shape?: any);

        lineWidth: number;
        lineColor: number;
        lineAlpha: number;
        fillColor: number;
        fillAlpha: number;
        fill: boolean;
        shape: any;
        type: number;

    }


    /**
    * The Graphics class contains methods used to draw primitive shapes such as lines, circles and rectangles to the display, and color and fill them.
    */
    export class Graphics extends DisplayObjectContainer {

        static POLY: number;
        static RECT: number;
        static CIRC: number;
        static ELIP: number;
        static RREC: number;


        /**
        * The blend mode to be applied to the graphic shape. Apply a value of PIXI.blendModes.NORMAL to reset the blend mode.
        * Default: PIXI.blendModes.NORMAL;
        */
        blendMode: number;

        /**
        * The bounds' padding used for bounds calculation.
        */
        boundsPadding: number;

        /**
        * The alpha value used when filling the Graphics object.
        */
        fillAlpha: number;

        /**
        * Whether this shape is being used as a mask.
        */
        isMask: boolean;

        /**
        * The width (thickness) of any lines drawn.
        */
        lineWidth: number;

        /**
        * The color of any lines drawn.
        * Default: 0
        */
        lineColor: number;

        /**
        * The tint applied to the graphic shape. This is a hex value. Apply a value of 0xFFFFFF to reset the tint.
        * Default: 0xFFFFFF
        */
        tint: number;

        /**
        * [read-only] The multiplied alpha of the displayObject
        */
        worldAlpha: number;


        /**
        * The arc method creates an arc/curve (used to create circles, or parts of circles).
        * 
        * @param cx The x-coordinate of the center of the circle
        * @param cy The y-coordinate of the center of the circle
        * @param radius The radius of the circle
        * @param startAngle The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
        * @param endAngle The ending angle, in radians
        * @param anticlockwise Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
        */
        arc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): Graphics;
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;

        /**
        * Specifies a simple one-color fill that subsequent calls to other Graphics methods
        * (such as lineTo() or drawCircle()) use when drawing.
        * 
        * @param color the color of the fill
        * @param alpha the alpha of the fill
        */
        beginFill(color?: number, alpha?: number): Graphics;

        /**
        * Calculate the points for a bezier curve and then draws it.
        * 
        * @param cpX Control point x
        * @param cpY Control point y
        * @param cpX2 Second Control point x
        * @param cpY2 Second Control point y
        * @param toX Destination point x
        * @param toY Destination point y
        */
        bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): Graphics;

        /**
        * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
        */
        clear(): Graphics;

        /**
        * Destroys a previous cached sprite.
        */
        destroyCachedSprite(): void;

        /**
        * Draws a circle.
        * 
        * @param x The X coordinate of the center of the circle
        * @param y The Y coordinate of the center of the circle
        * @param diameter The diameter of the circle
        */
        drawCircle(x: number, y: number, diameter: number): Graphics;

        /**
        * Draws an ellipse.
        * 
        * @param x The X coordinate of the center of the ellipse
        * @param y The Y coordinate of the center of the ellipse
        * @param width The half width of the ellipse
        * @param height The half height of the ellipse
        */
        drawEllipse(x: number, y: number, width: number, height: number): Graphics;

        /**
        * Draws a polygon using the given path.
        * 
        * @param path The path data used to construct the polygon. Can either be an array of points or a Phaser.Polygon object.
        */
        drawPolygon(...path: any[]): Graphics;

        /**
        * 
        * 
        * @param x The X coord of the top-left of the rectangle
        * @param y The Y coord of the top-left of the rectangle
        * @param width The width of the rectangle
        * @param height The height of the rectangle
        */
        drawRect(x: number, y: number, width: number, height: number): Graphics;

        /**
        * 
        * 
        * @param x The X coord of the top-left of the rectangle
        * @param y The Y coord of the top-left of the rectangle
        * @param width The width of the rectangle
        * @param height The height of the rectangle
        * @param radius Radius of the rectangle corners. In WebGL this must be a value between 0 and 9.
        */
        drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): Graphics;

        /**
        * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
        * 
        * @param shape The Shape object to draw.
        * @return The generated GraphicsData object.
        */
        drawShape(shape: Circle): GraphicsData;

        /**
        * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
        * 
        * @param shape The Shape object to draw.
        * @return The generated GraphicsData object.
        */
        drawShape(shape: Rectangle): GraphicsData;

        /**
        * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
        * 
        * @param shape The Shape object to draw.
        * @return The generated GraphicsData object.
        */
        drawShape(shape: Ellipse): GraphicsData;

        /**
        * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
        * 
        * @param shape The Shape object to draw.
        * @return The generated GraphicsData object.
        */
        drawShape(shape: Polygon): GraphicsData;

        /**
        * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
        */
        endFill(): Graphics;

        /**
        * Useful function that returns a texture of the graphics object that can then be used to create sprites
        * This can be quite useful if your geometry is complicated and needs to be reused multiple times.
        * 
        * @param resolution The resolution of the texture being generated
        * @param scaleMode Should be one of the PIXI.scaleMode consts
        * @return a texture of the graphics object
        */
        generateTexture(resolution?: number, scaleMode?: number): Texture;

        /**
        * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo() method or the drawCircle() method.
        * 
        * @param lineWidth width of the line to draw, will update the objects stored style
        * @param color color of the line to draw, will update the objects stored style
        * @param alpha alpha of the line to draw, will update the objects stored style
        */
        lineStyle(lineWidth?: number, color?: number, alpha?: number): Graphics;

        /**
        * Draws a line using the current line style from the current drawing position to (x, y);
        * The current drawing position is then set to (x, y).
        * 
        * @param x the X coordinate to draw to
        * @param y the Y coordinate to draw to
        */
        lineTo(x: number, y: number): Graphics;

        /**
        * Moves the current drawing position to x, y.
        * 
        * @param x the X coordinate to move to
        * @param y the Y coordinate to move to
        */
        moveTo(x: number, y: number): Graphics;

        /**
        * Calculate the points for a quadratic bezier curve and then draws it.
        * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
        * 
        * @param cpX Control point x
        * @param cpY Control point y
        * @param toX Destination point x
        * @param toY Destination point y
        */
        quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): Graphics;

    }

    export class GrayFilter extends AbstractFilter {

        gray: number;

    }

    export class ImageLoader implements Mixin {

        constructor(url: string, crossorigin?: boolean);

        texture: Texture;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;
        loadFramedSpriteSheet(frameWidth: number, frameHeight: number, textureName: string): void;

    }

    export class InteractionData {

        global: Point;
        target: Sprite;
        originalEvent: Event;

        getLocalPosition(displayObject: DisplayObject, point?: Point, globalPos?: Point): Point;

    }

    export class InteractionManager {

        currentCursorStyle: string;
        last: number;
        mouse: InteractionData;
        mouseOut: boolean;
        mouseoverEnabled: boolean;
        onMouseMove: Function;
        onMouseDown: Function;
        onMouseOut: Function;
        onMouseUp: Function;
        onTouchStart: Function;
        onTouchEnd: Function;
        onTouchMove: Function;
        pool: InteractionData[];
        resolution: number;
        stage: Stage;
        touches: { [id: string]: InteractionData };

        constructor(stage: Stage);
    }

    export class InvertFilter extends AbstractFilter {

        invert: number;

    }

    export class JsonLoader implements Mixin {

        constructor(url: string, crossorigin?: boolean);

        baseUrl: string;
        crossorigin: boolean;
        loaded: boolean;
        url: string;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;

    }

    export class Matrix {

        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;

        append(matrix: Matrix): Matrix;
        apply(pos: Point, newPos: Point): Point;
        applyInverse(pos: Point, newPos: Point): Point;
        determineMatrixArrayType(): number[];
        identity(): Matrix;
        rotate(angle: number): Matrix;
        fromArray(array: number[]): void;
        translate(x: number, y: number): Matrix;
        toArray(transpose: boolean): number[];
        scale(x: number, y: number): Matrix;

    }

    export interface Mixin {

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

    }

    export class MovieClip extends Sprite {

        static fromFrames(frames: string[]): MovieClip;
        static fromImages(images: HTMLImageElement[]): HTMLImageElement;

        constructor(textures: Texture[]);

        animationSpeed: number;
        currentFrame: number;
        loop: boolean;
        playing: boolean;
        textures: Texture[];
        totalFrames: number;

        gotoAndPlay(frameNumber: number): void;
        gotoAndStop(frameNumber: number): void;
        onComplete(): void;
        play(): void;
        stop(): void;

    }

    export class NoiseFilter extends AbstractFilter {

        noise: number;

    }

    export class NormalMapFilter extends AbstractFilter {

        map: Texture;
        offset: Point;
        scale: Point;

    }

    export class PixelateFilter extends AbstractFilter {

        size: number;

    }

    export interface IPixiShader {

        fragmentSrc: string[];
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        vertexSrc: string[];

        destroy(): void;
        init(): void;

    }

    export class PixiShader implements IPixiShader {


        /**
        * 
        * 
        * @param gl the current WebGL drawing context
        */
        constructor(gl: WebGLRenderingContext);


        /**
        * Uniform attributes cache.
        */
        attributes: ShaderAttribute[];

        /**
        * The Default Vertex shader source.
        */
        defaultVertexSrc: string[];

        /**
        * A dirty flag
        */
        dirty: boolean;

        /**
        * A local flag
        */
        firstRun: boolean;

        /**
        * A local texture counter for multi-texture shaders.
        */
        textureCount: number;

        /**
        * The fragment shader.
        */
        fragmentSrc: string[];
        gl: WebGLRenderingContext;

        /**
        * The WebGL program.
        */
        program: WebGLProgram;
        vertexSrc: string[];


        /**
        * Initialises a Sampler2D uniform (which may only be available later on after initUniforms once the texture has loaded)
        */
        initSampler2D(): void;

        /**
        * Initialises the shader uniform values.
        * 
        * Uniforms are specified in the GLSL_ES Specification: http://www.khronos.org/registry/webgl/specs/latest/1.0/
        * http://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf
        */
        initUniforms(): void;

        /**
        * Updates the shader uniform values.
        */
        syncUniforms(): void;


        /**
        * Destroys the shader.
        */
        destroy(): void;

        /**
        * Initialises the shader.
        */
        init(): void;

    }

    export class PixiFastShader implements IPixiShader {


        /**
        * 
        * 
        * @param gl the current WebGL drawing context
        */
        constructor(gl: WebGLRenderingContext);


        /**
        * A local texture counter for multi-texture shaders.
        */
        textureCount: number;

        /**
        * The fragment shader.
        */
        fragmentSrc: string[];
        gl: WebGLRenderingContext;

        /**
        * The WebGL program.
        */
        program: WebGLProgram;

        /**
        * The vertex shader.
        */
        vertexSrc: string[];


        /**
        * Destroys the shader.
        */
        destroy(): void;

        /**
        * Initialises the shader.
        */
        init(): void;

    }

    export class PrimitiveShader implements IPixiShader {


        /**
        * 
        * 
        * @param gl the current WebGL drawing context
        */
        constructor(gl: WebGLRenderingContext);

        /**
        * The fragment shader.
        */
        fragmentSrc: string[];
        gl: WebGLRenderingContext;

        /**
        * The WebGL program.
        */
        program: WebGLProgram;

        /**
        * The vertex shader.
        */
        vertexSrc: string[];


        /**
        * Destroys the shader.
        */
        destroy(): void;

        /**
        * Initialises the shader.
        */
        init(): void;

    }

    export class ComplexPrimitiveShader implements IPixiShader {


        /**
        * 
        * 
        * @param gl the current WebGL drawing context
        */
        constructor(gl: WebGLRenderingContext);

        /**
        * The fragment shader.
        */
        fragmentSrc: string[];
        gl: WebGLRenderingContext;

        /**
        * The WebGL program.
        */
        program: WebGLProgram;

        /**
        * The vertex shader.
        */
        vertexSrc: string[];


        /**
        * Destroys the shader.
        */
        destroy(): void;

        /**
        * Initialises the shader.
        */
        init(): void;

    }

    export class StripShader implements IPixiShader {


        /**
        * 
        * 
        * @param gl the current WebGL drawing context
        */
        constructor(gl: WebGLRenderingContext);

        /**
        * The fragment shader.
        */
        fragmentSrc: string[];
        gl: WebGLRenderingContext;

        /**
        * The WebGL program.
        */
        program: WebGLProgram;

        /**
        * The vertex shader.
        */
        vertexSrc: string[];


        /**
        * Destroys the shader.
        */
        destroy(): void;

        /**
        * Initialises the shader.
        */
        init(): void;

    }

    export class Point {

        constructor(x?: number, y?: number);

        x: number;
        y: number;

        clone(): Point;
        set(x: number, y: number): void;

    }

    export class Polygon implements HitArea {

        constructor(points: Point[]);
        constructor(points: number[]);
        constructor(...points: Point[]);
        constructor(...points: number[]);

        points: any[]; //number[] Point[]

        clone(): Polygon;
        contains(x: number, y: number): boolean;

    }

    export class Rectangle implements HitArea {

        constructor(x?: number, y?: number, width?: number, height?: number);

        x: number;
        y: number;
        width: number;
        height: number;

        clone(): Rectangle;
        contains(x: number, y: number): boolean;

    }

    export class RGBSplitFilter extends AbstractFilter {

        red: Point;
        green: Point;
        blue: Point;

    }

    export class Rope extends Strip {

        points: Point[];
        vertices: number[];


        /**
        * 
        * 
        * @param texture - The texture to use on the rope.
        * @param points - An array of {PIXI.Point}.
        */
        constructor(texture: Texture, points: Point[]);

        refresh(): void;
        setTexture(texture: Texture): void;

    }

    export class RoundedRectangle implements HitArea {

        constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        radius: number;

        clone(): RoundedRectangle;
        contains(x: number, y: number): boolean;

    }

    export class SepiaFilter extends AbstractFilter {

        sepia: number;

    }

    export class SmartBlurFilter extends AbstractFilter {

        blur: number;

    }

    export class SpineLoader implements Mixin {

        url: string;
        crossorigin: boolean;
        loaded: boolean;

        constructor(url: string, crossOrigin: boolean);

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;

    }

    export class SpineTextureLoader {

        constructor(basePath: string, crossorigin: boolean);

        load(page: AtlasPage, file: string): void;
        unload(texture: BaseTexture): void;

    }


    /**
    * The Sprite object is the base for all textured objects that are rendered to the screen
    */
    export class Sprite extends DisplayObjectContainer {


        /**
        * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
        *  The frame ids are created when a Texture packer file has been loaded
        * 
        * @param frameId The frame Id of the texture in the cache
        * @return A new Sprite using a texture from the texture cache matching the frameId
        */
        static fromFrame(frameId: string): Sprite;

        /**
        * Helper function that creates a sprite that will contain a texture based on an image url
        *  If the image is not in the texture cache it will be loaded
        * 
        * @param imageId The image url of the texture
        * @return A new Sprite using a texture from the texture cache matching the image id
        */
        static fromImage(url: string, crossorigin?: boolean, scaleMode?: scaleModes): Sprite;


        /**
        * The Sprite object is the base for all textured objects that are rendered to the screen
        * 
        * @param texture The texture for this sprite
        * 
        *                A sprite can be created directly from an image like this :
        *                var sprite = new PIXI.Sprite.fromImage('assets/image.png');
        *                yourStage.addChild(sprite);
        *                then obviously don't forget to add it to the stage you have already created
        */
        constructor(texture: Texture);


        /**
        * The anchor sets the origin point of the texture.
        * The default is 0,0 this means the texture's origin is the top left
        * Setting than anchor to 0.5,0.5 means the textures origin is centered
        * Setting the anchor to 1,1 would mean the textures origin points will be the bottom right corner
        */
        anchor: Point;

        /**
        * The blend mode to be applied to the sprite. Set to PIXI.blendModes.NORMAL to remove any blend mode.
        * 
        * Warning: You cannot have a blend mode and a filter active on the same Sprite. Doing so will render the sprite invisible.
        * Default: PIXI.blendModes.NORMAL;
        */
        blendMode: blendModes;

        /**
        * The shader that will be used to render the texture to the stage. Set to null to remove a current shader.
        * Default: null
        */
        shader: IPixiShader;

        /**
        * The texture that the sprite is using
        */
        texture: Texture;

        /**
        * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
        * Default: 0xFFFFFF
        */
        tint: number;


        /**
        * Sets the texture of the sprite. Be warned that this doesn't remove or destroy the previous
        * texture this Sprite was using.
        * 
        * @param texture The PIXI texture that is displayed by the sprite
        * @param destroy Call Texture.destroy on the current texture before replacing it with the new one? - Default: false
        */
        setTexture(texture: Texture): void;

    }


    /**
    * The SpriteBatch class is a really fast version of the DisplayObjectContainer
    * built solely for speed, so use when you need a lot of sprites or particles.
    * And it's extremely easy to use :
    * 
    *    var container = new PIXI.SpriteBatch();
    * 
    *    stage.addChild(container);
    * 
    *    for(var i  = 0; i < 100; i++)
    *    {
    *        var sprite = new PIXI.Sprite.fromImage("myImage.png");
    *        container.addChild(sprite);
    *    }
    * And here you have a hundred sprites that will be renderer at the speed of light
    */
    export class SpriteBatch extends DisplayObjectContainer {


        /**
        * The SpriteBatch class is a really fast version of the DisplayObjectContainer
        * built solely for speed, so use when you need a lot of sprites or particles.
        * And it's extremely easy to use :
        * 
        *    var container = new PIXI.SpriteBatch();
        * 
        *    stage.addChild(container);
        * 
        *    for(var i  = 0; i < 100; i++)
        *    {
        *        var sprite = new PIXI.Sprite.fromImage("myImage.png");
        *        container.addChild(sprite);
        *    }
        * And here you have a hundred sprites that will be renderer at the speed of light
        * 
        * @param texture -
        */
        constructor(texture?: Texture);

        ready: boolean;
        textureThing: Texture;

        initWebGL(gl: WebGLRenderingContext): void;

    }

    export class SpriteSheetLoader implements Mixin {

        constructor(url: string, crossorigin?: boolean);

        baseUrl: string;
        crossorigin: boolean;
        frames: any;
        texture: Texture;
        url: string;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;

    }


    /**
    * A Stage represents the root of the display tree. Everything connected to the stage is rendered
    */
    export class Stage extends DisplayObjectContainer {


        /**
        * A Stage represents the root of the display tree. Everything connected to the stage is rendered
        * 
        * @param backgroundColor the background color of the stage, you have to pass this in is in hex format
        *                        like: 0xFFFFFF for white
        * 
        *                        Creating a stage is a mandatory process when you use Pixi, which is as simple as this :
        *                        var stage = new PIXI.Stage(0xFFFFFF);
        *                        where the parameter given is the background colour of the stage, in hex
        *                        you will use this stage instance to add your sprites to it and therefore to the renderer
        *                        Here is how to add a sprite to the stage :
        *                        stage.addChild(sprite);
        */
        constructor(backgroundColor: number);

        interactionManager: InteractionManager;

        getMousePosition(): Point;

        /**
        * Sets the background color for the stage
        * 
        * @param backgroundColor the color of the background, easiest way to pass this in is in hex format
        *                        like: 0xFFFFFF for white
        */
        setBackgroundColor(backgroundColor: number): void;
        setInteractionDelegate(domElement: HTMLElement): void;

    }

    export class Strip extends DisplayObjectContainer {

        static DrawModes: {

            TRIANGLE_STRIP: number;
            TRIANGLES: number;

        }


        /**
        * 
        * 
        * @param texture The texture to use
        * @param width the width
        * @param height the height
        */
        constructor(texture: Texture);


        /**
        * The blend mode to be applied to the sprite. Set to PIXI.blendModes.NORMAL to remove any blend mode.
        * Default: PIXI.blendModes.NORMAL;
        */
        blendMode: number;
        colors: number[];

        /**
        * Whether the strip is dirty or not
        */
        dirty: boolean;
        indices: number[];

        /**
        * Triangles in canvas mode are automatically antialiased, use this value to force triangles to overlap a bit with each other.
        */
        canvasPadding: number;

        /**
        * The texture of the strip
        */
        texture: Texture;
        uvs: number[];
        vertices: number[];


        /**
        * Returns the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
        * 
        * @param matrix the transformation matrix of the sprite
        * @return the framing rectangle
        */
        getBounds(matrix?: Matrix): Rectangle;

    }


    /**
    * A texture stores the information that represents an image or part of an image. It cannot be added
    * to the display list directly. Instead use it as the texture for a PIXI.Sprite. If no frame is provided then the whole image is used.
    */
    export class Texture implements Mixin {

        static emptyTexture: Texture;


        /**
        * Helper function that creates a new a Texture based on the given canvas element.
        * 
        * @param canvas The canvas element source of the texture
        * @param scaleMode See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
        * @return Texture
        */
        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: scaleModes): Texture;

        /**
        * Helper function that returns a Texture objected based on the given frame id.
        * If the frame id is not in the texture cache an error will be thrown.
        * 
        * @param frameId The frame id of the texture
        * @return Texture
        */
        static fromFrame(frameId: string): Texture;

        /**
        * Helper function that creates a Texture object from the given image url.
        * If the image is not in the texture cache it will be  created and loaded.
        * 
        * @param imageUrl The image url of the texture
        * @param crossorigin Whether requests should be treated as crossorigin
        * @param scaleMode See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
        * @return Texture
        */
        static fromImage(imageUrl: string, crossorigin?: boolean, scaleMode?: scaleModes): Texture;

        /**
        * Adds a texture to the global PIXI.TextureCache. This cache is shared across the whole PIXI object.
        * 
        * @param texture The Texture to add to the cache.
        * @param id The id that the texture will be stored against.
        */
        static addTextureToCache(texture: Texture, id: string): void;

        /**
        * Remove a texture from the global PIXI.TextureCache.
        * 
        * @param id The id of the texture to be removed
        * @return The texture that was removed
        */
        static removeTextureFromCache(id: string): Texture;


        /**
        * A texture stores the information that represents an image or part of an image. It cannot be added
        * to the display list directly. Instead use it as the texture for a PIXI.Sprite. If no frame is provided then the whole image is used.
        * 
        * @param baseTexture The base texture source to create the texture from
        * @param frame The rectangle frame of the texture to show
        * @param crop The area of original texture
        * @param trim Trimmed texture rectangle
        */
        constructor(baseTexture: BaseTexture, frame?: Rectangle, crop?: Rectangle, trim?: Rectangle);


        /**
        * The base texture that this texture uses.
        */
        baseTexture: BaseTexture;

        /**
        * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
        * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
        */
        crop: Rectangle;

        /**
        * The frame specifies the region of the base texture that this texture uses
        */
        frame: Rectangle;

        /**
        * The height of the Texture in pixels.
        */
        height: number;

        /**
        * Does this Texture have any frame data assigned to it?
        */
        noFrame: boolean;

        /**
        * This will let a renderer know that a texture has been updated (used mainly for webGL uv updates)
        */
        requiresUpdate: boolean;

        /**
        * The texture trim data.
        */
        trim: Point;

        /**
        * The width of the Texture in pixels.
        */
        width: number;
        scope: any;

        /**
        * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
        */
        valid: boolean;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;


        /**
        * Destroys this texture
        * 
        * @param destroyBase Whether to destroy the base texture as well
        */
        destroy(destroyBase: boolean): void;

        /**
        * Specifies the region of the baseTexture that this texture will use.
        * 
        * @param frame The frame of the texture to set it to
        */
        setFrame(frame: Rectangle): void;

    }


    /**
    * A tiling sprite is a fast way of rendering a tiling image
    */
    export class TilingSprite extends Sprite {


        /**
        * A tiling sprite is a fast way of rendering a tiling image
        * 
        * @param texture the texture of the tiling sprite
        * @param width the width of the tiling sprite
        * @param height the height of the tiling sprite
        */
        constructor(texture: Texture, width: number, height: number);


        /**
        * The CanvasBuffer object that the tiled texture is drawn to.
        */
        canvasBuffer: PIXI.CanvasBuffer;

        /**
        * The blend mode to be applied to the sprite
        * Default: PIXI.blendModes.NORMAL;
        */
        blendMode: number;

        /**
        * If true the TilingSprite will run generateTexture on its **next** render pass.
        * This is set by the likes of Phaser.LoadTexture.setFrame.
        * Default: true
        */
        refreshTexture: boolean;

        /**
        * The texture that the sprite is using
        */
        texture: Texture;

        /**
        * If enabled a green rectangle will be drawn behind the generated tiling texture, allowing you to visually
        * debug the texture being used.
        */
        textureDebug: boolean;

        /**
        * The tint applied to the sprite. This is a hex value
        * Default: 0xFFFFFF
        */
        tint: number;

        /**
        * The offset position of the image that is being tiled
        */
        tilePosition: Point;

        /**
        * The Context fill pattern that is used to draw the TilingSprite in Canvas mode only (will be null in WebGL).
        */
        tilePattern: PIXI.Texture;

        /**
        * The scaling of the image that is being tiled
        */
        tileScale: Point;

        /**
        * A point that represents the scale of the texture object
        */
        tileScaleOffset: Point;


        /**
        * Destroy this DisplayObject.
        * Removes all references to transformCallbacks, its parent, the stage, filters, bounds, mask and cached Sprites.
        */
        destroy(): void;

        /**
        * 
        * 
        * @param forcePowerOfTwo Whether we want to force the texture to be a power of two
        */
        generateTilingTexture(forcePowerOfTwo?: boolean): void;

        /**
        * Sets the texture of the sprite. Be warned that this doesn't remove or destroy the previous
        * texture this Sprite was using.
        * 
        * @param texture The PIXI texture that is displayed by the sprite
        * @param destroy Call Texture.destroy on the current texture before replacing it with the new one? - Default: false
        */
        setTexture(texture: Texture): void;

    }

    export class TiltShiftFilter extends AbstractFilter {

        blur: number;
        gradientBlur: number;
        start: number;
        end: number;

    }

    export class TiltShiftXFilter extends AbstractFilter {

        blur: number;
        gradientBlur: number;
        start: number;
        end: number;

        updateDelta(): void;

    }

    export class TiltShiftYFilter extends AbstractFilter {

        blur: number;
        gradientBlur: number;
        start: number;
        end: number;

        updateDelta(): void;

    }

    export class TwistFilter extends AbstractFilter {

        angle: number;
        offset: Point;
        radius: number;

    }

    export class VideoTexture extends BaseTexture {

        static baseTextureFromVideo(video: HTMLVideoElement, scaleMode: number): BaseTexture;
        static textureFromVideo(video: HTMLVideoElement, scaleMode: number): Texture;
        static fromUrl(videoSrc: string, scaleMode?: number, autoPlay?: boolean, type?: string, loop?: boolean): Texture;

        controls: boolean;
        autoUpdate: boolean;
        type: string;

        changeSource(src: string, type: string, loop: boolean): void;
        play(): void;
        stop(): void;

        destroy(): void;
        updateBound(): void;
        onPlayStart: () => void;
        onPlayStop: () => void;
        onCanPlay: (event: any) => void;

    }

    export class WebGLBlendModeManager {

        currentBlendMode: number;


        /**
        * Destroys this object.
        */
        destroy(): void;

        /**
        * Sets-up the given blendMode from WebGL's point of view.
        * 
        * @param blendMode the blendMode, should be a Pixi const, such as PIXI.BlendModes.ADD
        */
        setBlendMode(blendMode: number): boolean;

        /**
        * Sets the WebGL Context.
        * 
        * @param gl the current WebGL drawing context
        */
        setContext(gl: WebGLRenderingContext): void;

    }

    export class WebGLFastSpriteBatch {

        constructor(gl: CanvasRenderingContext2D);

        currentBatchSize: number;
        currentBaseTexture: BaseTexture;
        currentBlendMode: number;
        renderSession: RenderSession;
        drawing: boolean;
        indexBuffer: any;

        /**
        * Index data
        */
        indices: number[];
        lastIndexCount: number;
        matrix: Matrix;
        maxSize: number;
        shader: IPixiShader;
        size: number;
        vertexBuffer: any;

        /**
        * Vertex data
        */
        vertices: number[];
        vertSize: number;

        end(): void;

        /**
        * 
        * 
        * @param spriteBatch -
        * @param renderSession -
        */
        begin(spriteBatch: SpriteBatch, renderSession: RenderSession): void;
        destroy(removeView?: boolean): void;
        flush(): void;

        /**
        * 
        * 
        * @param spriteBatch -
        */
        render(spriteBatch: SpriteBatch): void;

        /**
        * 
        * 
        * @param sprite -
        */
        renderSprite(sprite: Sprite): void;

        /**
        * Sets the WebGL Context.
        * 
        * @param gl the current WebGL drawing context
        */
        setContext(gl: WebGLRenderingContext): void;
        start(): void;
        stop(): void;

    }

    export class WebGLFilterManager {

        filterStack: AbstractFilter[];
        transparent: boolean;
        offsetX: number;
        offsetY: number;


        /**
        * Applies the filter to the specified area.
        * 
        * @param filter the filter that needs to be applied
        * @param filterArea TODO - might need an update
        * @param width the horizontal range of the filter
        * @param height the vertical range of the filter
        */
        applyFilterPass(filter: AbstractFilter, filterArea: Texture, width: number, height: number): void;

        /**
        * 
        * 
        * @param renderSession -
        * @param buffer -
        */
        begin(renderSession: RenderSession, buffer: ArrayBuffer): void;

        /**
        * Destroys the filter and removes it from the filter stack.
        */
        destroy(): void;

        /**
        * Initialises the shader buffers.
        */
        initShaderBuffers(): void;

        /**
        * Removes the last filter from the filter stack and doesn't return it.
        */
        popFilter(): void;

        /**
        * Applies the filter and adds it to the current filter stack.
        * 
        * @param filterBlock the filter that will be pushed to the current filter stack
        */
        pushFilter(filterBlock: FilterBlock): void;

        /**
        * Initialises the context and the properties.
        * 
        * @param gl the current WebGL drawing context
        */
        setContext(gl: WebGLRenderingContext): void;

    }


    /**
    * A set of functions used by the webGL renderer to draw the primitive graphics data
    */
    export class WebGLGraphics {

        static graphicsDataPool: any[];


        /**
        * Renders the graphics object
        * 
        * @param graphics -
        * @param renderSession -
        */
        static renderGraphics(graphics: Graphics, renderRession: RenderSession): void;

        /**
        * Updates the graphics object
        * 
        * @param graphicsData The graphics object to update
        * @param gl the current WebGL drawing context
        */
        static updateGraphics(graphics: Graphics, gl: WebGLRenderingContext): void;

        /**
        * 
        * 
        * @param webGL -
        * @param type -
        */
        static switchMode(webGL: WebGLRenderingContext, type: number): any; //WebGLData

        /**
        * Builds a rectangle to draw
        * 
        * @param graphicsData The graphics object containing all the necessary properties
        * @param webGLData -
        */
        static buildRectangle(graphicsData: GraphicsData, webGLData: any): void;

        /**
        * Builds a rounded rectangle to draw
        * 
        * @param graphicsData The graphics object containing all the necessary properties
        * @param webGLData -
        */
        static buildRoundedRectangle(graphicsData: GraphicsData, webGLData: any): void;

        /**
        * Calculate the points for a quadratic bezier curve. (helper function..)
        * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
        * 
        * @param fromX Origin point x
        * @param fromY Origin point x
        * @param cpX Control point x
        * @param cpY Control point y
        * @param toX Destination point x
        * @param toY Destination point y
        */
        static quadraticBezierCurve(fromX: number, fromY: number, cpX: number, cpY: number, toX: number, toY: number): number[];

        /**
        * Builds a circle to draw
        * 
        * @param graphicsData The graphics object to draw
        * @param webGLData -
        */
        static buildCircle(graphicsData: GraphicsData, webGLData: any): void;

        /**
        * Builds a line to draw
        * 
        * @param graphicsData The graphics object containing all the necessary properties
        * @param webGLData -
        */
        static buildLine(graphicsData: GraphicsData, webGLData: any): void;

        /**
        * Builds a complex polygon to draw
        * 
        * @param graphicsData The graphics object containing all the necessary properties
        * @param webGLData -
        */
        static buildComplexPoly(graphicsData: GraphicsData, webGLData: any): void;

        /**
        * Builds a polygon to draw
        * 
        * @param graphicsData The graphics object containing all the necessary properties
        * @param webGLData -
        */
        static buildPoly(graphicsData: GraphicsData, webGLData: any): boolean;

        reset(): void;
        upload(): void;

    }

    export class WebGLGraphicsData {

        constructor(gl: WebGLRenderingContext);

        gl: WebGLRenderingContext;
        glPoints: any[];
        color: number[];
        points: any[];
        indices: any[];
        buffer: WebGLBuffer;
        indexBuffer: WebGLBuffer;
        mode: number;
        alpha: number;
        dirty: boolean;

        reset(): void;
        upload(): void;

    }

    export class WebGLMaskManager {


        /**
        * Destroys the mask stack.
        */
        destroy(): void;

        /**
        * Removes the last filter from the filter stack and doesn't return it.
        * 
        * @param maskData -
        * @param renderSession an object containing all the useful parameters
        */
        popMask(renderSession: RenderSession): void;

        /**
        * Applies the Mask and adds it to the current filter stack.
        * 
        * @param maskData -
        * @param renderSession -
        */
        pushMask(maskData: any[], renderSession: RenderSession): void;

        /**
        * Sets the drawing context to the one given in parameter.
        * 
        * @param gl the current WebGL drawing context
        */
        setContext(gl: WebGLRenderingContext): void;

    }


    /**
    * The WebGLRenderer draws the stage and all its content onto a webGL enabled canvas. This renderer
    * should be used for browsers that support webGL. This Render works by automatically managing webGLBatchs.
    * So no need for Sprite Batches or Sprite Clouds.
    * Don't forget to add the view to your DOM or you will not see anything :)
    */
    export class WebGLRenderer implements PixiRenderer {

        static createWebGLTexture(texture: Texture, gl: WebGLRenderingContext): void;


        /**
        * The WebGLRenderer draws the stage and all its content onto a webGL enabled canvas. This renderer
        * should be used for browsers that support webGL. This Render works by automatically managing webGLBatchs.
        * So no need for Sprite Batches or Sprite Clouds.
        * Don't forget to add the view to your DOM or you will not see anything :)
        * 
        * @param width the width of the canvas view - Default: 0
        * @param height the height of the canvas view - Default: 0
        * @param options The optional renderer parameters
        */
        constructor(width?: number, height?: number, options?: PixiRendererOptions);


        /**
        * Whether the render view should be resized automatically
        */
        autoResize: boolean;

        /**
        * This sets if the WebGLRenderer will clear the context texture or not before the new render pass. If true:
        * If the Stage is NOT transparent, Pixi will clear to alpha (0, 0, 0, 0).
        * If the Stage is transparent, Pixi will clear to the target Stage's background color.
        * Disable this by setting this to false. For example: if your game has a canvas filling background image, you often don't need this set.
        */
        clearBeforeRender: boolean;
        contextLost: boolean;
        contextLostBound: Function;
        contextRestoreLost: boolean;
        contextRestoredBound: Function;

        /**
        * The height of the canvas view
        * Default: 600
        */
        height: number;
        gl: WebGLRenderingContext;
        offset: Point;

        /**
        * The value of the preserveDrawingBuffer flag affects whether or not the contents of the stencil buffer is retained after rendering.
        */
        preserveDrawingBuffer: boolean;
        projection: Point;

        /**
        * The resolution of the renderer
        * Default: 1
        */
        resolution: number;

        /**
        * TODO remove
        */
        renderSession: RenderSession;

        /**
        * Deals with managing the shader programs and their attribs
        */
        shaderManager: WebGLShaderManager;

        /**
        * Manages the rendering of sprites
        */
        spriteBatch: WebGLSpriteBatch;

        /**
        * Manages the masks using the stencil buffer
        */
        maskManager: WebGLMaskManager;

        /**
        * Manages the filters
        */
        filterManager: WebGLFilterManager;

        /**
        * Manages the stencil buffer
        */
        stencilManager: WebGLStencilManager;

        /**
        * Manages the blendModes
        */
        blendModeManager: WebGLBlendModeManager;

        /**
        * Whether the render view is transparent
        */
        transparent: boolean;
        type: number;

        /**
        * The canvas element that everything is drawn to
        */
        view: HTMLCanvasElement;

        /**
        * The width of the canvas view
        * Default: 800
        */
        width: number;


        /**
        * Removes everything from the renderer (event listeners, spritebatch, etc...)
        */
        destroy(): void;
        initContext(): void;

        /**
        * Maps Pixi blend modes to WebGL blend modes.
        */
        mapBlendModes(): void;

        /**
        * Renders the stage to its webGL view
        * 
        * @param stage the Stage element to be rendered
        */
        render(stage: Stage): void;

        /**
        * Renders a Display Object.
        * 
        * @param displayObject The DisplayObject to render
        * @param projection The projection
        * @param buffer a standard WebGL buffer
        */
        renderDisplayObject(displayObject: DisplayObject, projection: Point, buffer: WebGLBuffer): void;

        /**
        * Resizes the webGL view to the specified width and height.
        * 
        * @param width the new width of the webGL view
        * @param height the new height of the webGL view
        */
        resize(width: number, height: number): void;

        /**
        * Updates and Creates a WebGL texture for the renderers context.
        * 
        * @param texture the texture to update
        */
        updateTexture(texture: Texture): void;

    }

    export class WebGLShaderManager {

        maxAttibs: number;
        attribState: any[];
        stack: any[];
        tempAttribState: any[];


        /**
        * Destroys this object.
        */
        destroy(): void;

        /**
        * Takes the attributes given in parameters.
        * 
        * @param attribs attribs
        */
        setAttribs(attribs: ShaderAttribute[]): void;

        /**
        * Initialises the context and the properties.
        * 
        * @param gl the current WebGL drawing context
        */
        setContext(gl: WebGLRenderingContext): void;

        /**
        * Sets the current shader.
        * 
        * @param shader -
        */
        setShader(shader: IPixiShader): boolean;

    }

    export class WebGLStencilManager {

        stencilStack: any[];
        reverse: boolean;
        count: number;


        /**
        * TODO this does not belong here!
        * 
        * @param graphics -
        * @param webGLData -
        * @param renderSession -
        */
        bindGraphics(graphics: Graphics, webGLData: any[], renderSession: RenderSession): void;

        /**
        * Destroys the mask stack.
        */
        destroy(): void;

        /**
        * 
        * 
        * @param graphics -
        * @param webGLData -
        * @param renderSession -
        */
        popStencil(graphics: Graphics, webGLData: any[], renderSession: RenderSession): void;
        pushStencil(graphics: Graphics, webGLData: any[], renderSession: RenderSession): void;

        /**
        * Sets the drawing context to the one given in parameter.
        * 
        * @param gl the current WebGL drawing context
        */
        setContext(gl: WebGLRenderingContext): void;

    }

    export class WebGLSpriteBatch {

        blendModes: number[];

        /**
        * View on the vertices as a Uint32Array
        */
        colors: number[];
        currentBatchSize: number;
        currentBaseTexture: Texture;
        defaultShader: AbstractFilter;
        dirty: boolean;
        drawing: boolean;

        /**
        * Holds the indices
        */
        indices: number[];
        lastIndexCount: number;

        /**
        * View on the vertices as a Float32Array
        */
        positions: number[];
        textures: Texture[];
        shaders: IPixiShader[];

        /**
        * The number of images in the SpriteBatch before it flushes
        */
        size: number;
        sprites: any[]; //todo Sprite[]?

        /**
        * Holds the vertices
        */
        vertices: number[];
        vertSize: number;


        /**
        * 
        * 
        * @param renderSession The RenderSession object
        */
        begin(renderSession: RenderSession): void;

        /**
        * Destroys the SpriteBatch.
        */
        destroy(): void;
        end(): void;

        /**
        * Renders the content and empties the current batch.
        */
        flush(shader?: IPixiShader): void;

        /**
        * 
        * 
        * @param sprite the sprite to render when using this spritebatch
        * @param matrix - Optional matrix. If provided the Display Object will be rendered using this matrix, otherwise it will use its worldTransform.
        */
        render(sprite: Sprite): void;

        /**
        * 
        * 
        * @param texture -
        * @param size -
        * @param startIndex -
        */
        renderBatch(texture: Texture, size: number, startIndex: number): void;

        /**
        * Renders a TilingSprite using the spriteBatch.
        * 
        * @param sprite the sprite to render
        */
        renderTilingSprite(sprite: TilingSprite): void;
        setBlendMode(blendMode: blendModes): void;

        /**
        * 
        * 
        * @param gl the current WebGL drawing context
        */
        setContext(gl: WebGLRenderingContext): void;
        start(): void;
        stop(): void;

    }


    /**
    * A RenderTexture is a special texture that allows any Pixi display object to be rendered to it.
    * 
    * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded otherwise black rectangles will be drawn instead.
    * 
    * A RenderTexture takes a snapshot of any Display Object given to its render method. The position and rotation of the given Display Objects is ignored. For example:
    * 
    *    var renderTexture = new PIXI.RenderTexture(800, 600);
    *    var sprite = PIXI.Sprite.fromImage("spinObj_01.png");
    *    sprite.position.x = 800/2;
    *    sprite.position.y = 600/2;
    *    sprite.anchor.x = 0.5;
    *    sprite.anchor.y = 0.5;
    *    renderTexture.render(sprite);
    * 
    * The Sprite in this case will be rendered to a position of 0,0. To render this sprite at its actual position a DisplayObjectContainer should be used:
    * 
    *    var doc = new PIXI.DisplayObjectContainer();
    *    doc.addChild(sprite);
    *    renderTexture.render(doc);  // Renders to center of renderTexture
    */
    export class RenderTexture extends Texture {


        /**
        * A RenderTexture is a special texture that allows any Pixi display object to be rendered to it.
        * 
        * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded otherwise black rectangles will be drawn instead.
        * 
        * A RenderTexture takes a snapshot of any Display Object given to its render method. The position and rotation of the given Display Objects is ignored. For example:
        * 
        *    var renderTexture = new PIXI.RenderTexture(800, 600);
        *    var sprite = PIXI.Sprite.fromImage("spinObj_01.png");
        *    sprite.position.x = 800/2;
        *    sprite.position.y = 600/2;
        *    sprite.anchor.x = 0.5;
        *    sprite.anchor.y = 0.5;
        *    renderTexture.render(sprite);
        * 
        * The Sprite in this case will be rendered to a position of 0,0. To render this sprite at its actual position a DisplayObjectContainer should be used:
        * 
        *    var doc = new PIXI.DisplayObjectContainer();
        *    doc.addChild(sprite);
        *    renderTexture.render(doc);  // Renders to center of renderTexture
        * 
        * @param width The width of the render texture
        * @param height The height of the render texture
        * @param renderer The renderer used for this RenderTexture
        * @param scaleMode See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
        * @param resolution The resolution of the texture being generated
        */
        constructor(width?: number, height?: number, renderer?: PixiRenderer, scaleMode?: scaleModes, resolution?: number);


        /**
        * The framing rectangle of the render texture
        */
        frame: Rectangle;

        /**
        * The base texture object that this texture uses
        */
        baseTexture: BaseTexture;

        /**
        * The renderer this RenderTexture uses. A RenderTexture can only belong to one renderer at the moment if its webGL.
        */
        renderer: PixiRenderer;

        /**
        * The Resolution of the texture.
        */
        resolution: number;
        valid: boolean;


        /**
        * Clears the RenderTexture.
        */
        clear(): void;

        /**
        * Will return a base64 encoded string of this texture. It works by calling RenderTexture.getCanvas and then running toDataURL on that.
        * @return A base64 encoded string of the texture.
        */
        getBase64(): string;

        /**
        * Creates a Canvas element, renders this RenderTexture to it and then returns it.
        * @return A Canvas element with the texture rendered on.
        */
        getCanvas(): HTMLCanvasElement;

        /**
        * Will return a HTML Image of the texture
        */
        getImage(): HTMLImageElement;

        /**
        * Resizes the RenderTexture.
        * 
        * @param width The width to resize to.
        * @param height The height to resize to.
        * @param updateBase Should the baseTexture.width and height values be resized as well?
        */
        resize(width: number, height: number, updateBase: boolean): void;
        render(displayObject: DisplayObject, matrix?: Matrix, clear?: boolean): void;

    }

    //SPINE

    export class BoneData {

        constructor(name: string, parent?: any);

        name: string;
        parent: any;
        length: number;
        x: number;
        y: number;
        rotation: number;
        scaleX: number;
        scaleY: number;

    }

    export class SlotData {

        constructor(name: string, boneData: BoneData);

        name: string;
        boneData: BoneData;
        r: number;
        g: number;
        b: number;
        a: number;
        attachmentName: string;

    }

    export class Bone {

        constructor(boneData: BoneData, parent?: any);

        data: BoneData;
        parent: any;
        yDown: boolean;
        x: number;
        y: number;
        rotation: number;
        scaleX: number;
        scaleY: number;
        worldRotation: number;
        worldScaleX: number;
        worldScaleY: number;

        updateWorldTransform(flipX: boolean, flip: boolean): void;
        setToSetupPose(): void;

    }

    export class Slot {

        constructor(slotData: SlotData, skeleton: Skeleton, bone: Bone);

        data: SlotData;
        skeleton: Skeleton;
        bone: Bone;
        r: number;
        g: number;
        b: number;
        a: number;
        attachment: RegionAttachment;
        setAttachment(attachment: RegionAttachment): void;
        setAttachmentTime(time: number): void;
        getAttachmentTime(): number;
        setToSetupPose(): void;

    }

    export class Skin {

        constructor(name: string);

        name: string;
        attachments: any;

        addAttachment(slotIndex: number, name: string, attachment: RegionAttachment): void;
        getAttachment(slotIndex: number, name: string): void;

    }

    export class Animation {

        constructor(name: string, timelines: ISpineTimeline[], duration: number);

        name: string;
        timelines: ISpineTimeline[];
        duration: number;
        apply(skeleton: Skeleton, time: number, loop: boolean): void;
        min(skeleton: Skeleton, time: number, loop: boolean, alpha: number): void;

    }

    export class Curves {

        constructor(frameCount: number);

        curves: number[];

        setLinear(frameIndex: number): void;
        setStepped(frameIndex: number): void;
        setCurve(frameIndex: number, cx1: number, cy1: number, cx2: number, cy2: number): void;
        getCurvePercent(frameIndex: number, percent: number): number;

    }

    export interface ISpineTimeline {

        curves: Curves;
        frames: number[];

        getFrameCount(): number;
        apply(skeleton: Skeleton, time: number, alpha: number): void;

    }

    export class RotateTimeline implements ISpineTimeline {

        constructor(frameCount: number);

        curves: Curves;
        frames: number[];
        boneIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, time: number, angle: number): void;
        apply(skeleton: Skeleton, time: number, alpha: number): void;

    }

    export class TranslateTimeline implements ISpineTimeline {

        constructor(frameCount: number);

        curves: Curves;
        frames: number[];
        boneIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, time: number, x: number, y: number): void;
        apply(skeleton: Skeleton, time: number, alpha: number): void;

    }

    export class ScaleTimeline implements ISpineTimeline {

        constructor(frameCount: number);

        curves: Curves;
        frames: number[];
        boneIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, time: number, x: number, y: number): void;
        apply(skeleton: Skeleton, time: number, alpha: number): void;

    }

    export class ColorTimeline implements ISpineTimeline {

        constructor(frameCount: number);

        curves: Curves;
        frames: number[];
        boneIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, time: number, r: number, g: number, b: number, a: number): void;
        apply(skeleton: Skeleton, time: number, alpha: number): void;

    }

    export class AttachmentTimeline implements ISpineTimeline {

        constructor(frameCount: number);

        curves: Curves;
        frames: number[];
        attachmentNames: string[];
        slotIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, time: number, attachmentName: string): void;
        apply(skeleton: Skeleton, time: number, alpha: number): void;

    }

    export class SkeletonData {

        bones: Bone[];
        slots: Slot[];
        skins: Skin[];
        animations: Animation[];
        defaultSkin: Skin;

        findBone(boneName: string): Bone;
        findBoneIndex(boneName: string): number;
        findSlot(slotName: string): Slot;
        findSlotIndex(slotName: string): number;
        findSkin(skinName: string): Skin;
        findAnimation(animationName: string): Animation;

    }

    export class Skeleton {

        constructor(skeletonData: SkeletonData);

        data: SkeletonData;
        bones: Bone[];
        slots: Slot[];
        drawOrder: any[];
        x: number;
        y: number;
        skin: Skin;
        r: number;
        g: number;
        b: number;
        a: number;
        time: number;
        flipX: boolean;
        flipY: boolean;

        updateWorldTransform(): void;
        setToSetupPose(): void;
        setBonesToSetupPose(): void;
        setSlotsToSetupPose(): void;
        getRootBone(): Bone;
        findBone(boneName: string): Bone;
        fineBoneIndex(boneName: string): number;
        findSlot(slotName: string): Slot;
        findSlotIndex(slotName: string): number;
        setSkinByName(skinName: string): void;
        setSkin(newSkin: Skin): void;
        getAttachmentBySlotName(slotName: string, attachmentName: string): RegionAttachment;
        getAttachmentBySlotIndex(slotIndex: number, attachmentName: string): RegionAttachment;
        setAttachment(slotName: string, attachmentName: string): void;
        update(data: number): void;

    }

    export class RegionAttachment {

        offset: number[];
        uvs: number[];
        x: number;
        y: number;
        rotation: number;
        scaleX: number;
        scaleY: number;
        width: number;
        height: number;
        rendererObject: any;
        regionOffsetX: number;
        regionOffsetY: number;
        regionWidth: number;
        regionHeight: number;
        regionOriginalWidth: number;
        regionOriginalHeight: number;

        setUVs(u: number, v: number, u2: number, v2: number, rotate: number): void;
        updateOffset(): void;
        computeVertices(x: number, y: number, bone: Bone, vertices: number[]): void;

    }

    export class AnimationStateData {

        constructor(skeletonData: SkeletonData);

        skeletonData: SkeletonData;
        animationToMixTime: any;
        defaultMix: number;

        setMixByName(fromName: string, toName: string, duration: number): void;
        setMix(from: string, to: string): number;

    }

    export class AnimationState {

        constructor(stateData: any);

        animationSpeed: number;
        current: any;
        previous: any;
        currentTime: number;
        previousTime: number;
        currentLoop: boolean;
        previousLoop: boolean;
        mixTime: number;
        mixDuration: number;
        queue: Animation[];

        update(delta: number): void;
        apply(skeleton: any): void;
        clearAnimation(): void;
        setAnimation(animation: any, loop: boolean): void;
        setAnimationByName(animationName: string, loop: boolean): void;
        addAnimationByName(animationName: string, loop: boolean, delay: number): void;
        addAnimation(animation: any, loop: boolean, delay: number): void;
        isComplete(): number;

    }

    export class SkeletonJson {

        constructor(attachmentLoader: AtlasAttachmentLoader);

        attachmentLoader: AtlasAttachmentLoader;
        scale: number;

        readSkeletonData(root: any): SkeletonData;
        readAttachment(skin: Skin, name: string, map: any): RegionAttachment;
        readAnimation(name: string, map: any, skeletonData: SkeletonData): void;
        readCurve(timeline: ISpineTimeline, frameIndex: number, valueMap: any): void;
        toColor(hexString: string, colorIndex: number): number;

    }

    export class Atlas {

        static FORMAT: {

            alpha: number;
            intensity: number;
            luminanceAlpha: number;
            rgb565: number;
            rgba4444: number;
            rgb888: number;
            rgba8888: number;

        }

        static TextureFilter: {

            nearest: number;
            linear: number;
            mipMap: number;
            mipMapNearestNearest: number;
            mipMapLinearNearest: number;
            mipMapNearestLinear: number;
            mipMapLinearLinear: number;

        }

        static textureWrap: {

            mirroredRepeat: number;
            clampToEdge: number;
            repeat: number;

        }

        constructor(atlasText: string, textureLoader: AtlasLoader);

        textureLoader: AtlasLoader;
        pages: AtlasPage[];
        regions: AtlasRegion[];

        findRegion(name: string): AtlasRegion;
        dispose(): void;
        updateUVs(page: AtlasPage): void;

    }

    export class AtlasPage {

        name: string;
        format: number;
        minFilter: number;
        magFilter: number;
        uWrap: number;
        vWrap: number;
        rendererObject: any;
        width: number;
        height: number;

    }

    export class AtlasRegion {

        page: AtlasPage;
        name: string;
        x: number;
        y: number;
        width: number;
        height: number;
        u: number;
        v: number;
        u2: number;
        v2: number;
        offsetX: number;
        offsetY: number;
        originalWidth: number;
        originalHeight: number;
        index: number;
        rotate: boolean;
        splits: any[];
        pads: any[];

    }

    export class AtlasReader {

        constructor(text: string);

        lines: string[];
        index: number;

        trim(value: string): string;
        readLine(): string;
        readValue(): string;
        readTuple(tuple: number): number;

    }

    export class AtlasAttachmentLoader {

        constructor(atlas: Atlas);

        atlas: Atlas;

        newAttachment(skin: Skin, type: number, name: string): RegionAttachment;

    }

    export class Spine extends DisplayObjectContainer {

        constructor(url: string);

        autoUpdate: boolean;
        spineData: any;
        skeleton: Skeleton;
        stateData: AnimationStateData;
        state: AnimationState;
        slotContainers: DisplayObjectContainer[];

        createSprite(slot: Slot, descriptor: { name: string }): Sprite[];
        update(dt: number): void;

    }

}

declare function requestAnimFrame(callback: Function): void;

declare module PIXI.PolyK {
    export function Triangulate(p: number[]): number[];
}
