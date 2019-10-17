// Type definitions for pixi.js 4.8
// Project: https://github.com/pixijs/pixi.js/tree/v4.x
// Definitions by: clark-stevenson <https://github.com/clark-stevenson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace PIXI {
    // from CONST
    /** String of the current PIXI version. */
    const VERSION: typeof CONST.VERSION;
    /** Two Pi. */
    const PI_2: typeof CONST.PI_2;
    /** Conversion factor for converting radians to degrees. */
    const RAD_TO_DEG: typeof CONST.RAD_TO_DEG;
    /** Conversion factor for converting degrees to radians. */
    const DEG_TO_RAD: typeof CONST.DEG_TO_RAD;
    /** Constant to identify the Renderer Type. */
    const RENDERER_TYPE: typeof CONST.RENDERER_TYPE;
    /**
     * Various blend modes supported by PIXI.
     *
     * IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes.
     * Anything else will silently act like NORMAL.
     */
    const BLEND_MODES: typeof CONST.BLEND_MODES;
    /**
     * Various webgl draw modes. These can be used to specify which GL drawMode to use
     * under certain situations and renderers.
     */
    const DRAW_MODES: typeof CONST.DRAW_MODES;
    /**
     * The scale modes that are supported by pixi.
     *
     * The {@link PIXI.settings.SCALE_MODE} scale mode affects the default scaling mode of future operations.
     * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
     */
    const SCALE_MODES: typeof CONST.SCALE_MODES;
    /**
     * The wrap modes that are supported by pixi.
     *
     * The {@link PIXI.settings.WRAP_MODE} wrap mode affects the default wrapping mode of future operations.
     * It can be re-assigned to either CLAMP or REPEAT, depending upon suitability.
     * If the texture is non power of two then clamp will be used regardless as webGL can
     * only use REPEAT if the texture is po2.
     *
     * This property only affects WebGL.
     */
    const WRAP_MODES: typeof CONST.WRAP_MODES;
    /**
     * Constants that specify the transform type.
     */
    const TRANSFORM_MODE: typeof CONST.TRANSFORM_MODE;
    /**
     * Constants that specify float precision in shaders.
     */
    const PRECISION: typeof CONST.PRECISION;
    /**
     * The gc modes that are supported by pixi.
     *
     * The {@link PIXI.settings.GC_MODE} Garbage Collection mode for PixiJS textures is AUTO
     * If set to GC_MODE, the renderer will occasionally check textures usage. If they are not
     * used for a specified period of time they will be removed from the GPU. They will of course
     * be uploaded again when they are required. This is a silent behind the scenes process that
     * should ensure that the GPU does not  get filled up.
     *
     * Handy for mobile devices!
     * This property only affects WebGL.
     */
    const GC_MODES: typeof CONST.GC_MODES;
    /**
     * Constants that identify shapes, mainly to prevent `instanceof` calls.
     */
    const SHAPES: typeof CONST.SHAPES;
    /**
     * Constants that define the type of gradient on text.
     */
    const TEXT_GRADIENT: typeof CONST.TEXT_GRADIENT;
    /**
     * Represents the update priorities used by internal PIXI classes when registered with
     * the {@link PIXI.ticker.Ticker} object. Higher priority items are updated first and lower
     * priority items, such as render, should go later.
     */
    const UPDATE_PRIORITY: typeof CONST.UPDATE_PRIORITY;

    function autoDetectRenderer(
        width: number,
        height: number,
        options?: PIXI.RendererOptions,
        forceCanvas?: boolean,
    ): PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    /**
     * This helper function will automatically detect which renderer you should be using.
     * WebGL is the preferred renderer as it is a lot faster. If webGL is not supported by
     * the browser then this function will return a canvas renderer
     * @param [options] - The optional renderer parameters
     * @param [options.width=800] - the width of the renderers view
     * @param [options.height=600] - the height of the renderers view
     * @param [options.view] - the canvas to use as a view, optional
     * @param [options.transparent=false] - If the render view is transparent, default false
     * @param [options.antialias=false] - sets antialias (only applicable in chrome at the moment)
     * @param [options.preserveDrawingBuffer=false] - enables drawing buffer preservation, enable this if you
     *  need to call toDataUrl on the webgl context
     * @param [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     * @param [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
     *   not before the new render pass.
     * @param [options.resolution=1] - The resolution / device pixel ratio of the renderer, retina would be 2
     * @param [options.forceCanvas=false] - prevents selection of WebGL renderer, even if such is present
     * @param [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when rendering,
     *  stopping pixel interpolation.
     * @param [options.forceFXAA=false] - forces FXAA antialiasing to be used over native.
     *  FXAA is faster, but may not always look as great **webgl only**
     * @param [options.legacy=false] - `true` to ensure compatibility with older / less advanced devices.
     *  If you experience unexplained flickering try setting this to true. **webgl only**
     * @param [options.powerPreference] - Parameter passed to webgl context, set to "high-performance"
     *  for devices with dual graphics card **webgl only**
     * @return Returns WebGL renderer if available, otherwise CanvasRenderer
     */
    function autoDetectRenderer(options?: PIXI.RendererOptions): PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    const loader: PIXI.loaders.Loader;

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////SETTINGS///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    /**
     * User"s customizable globals for overriding the default PIXI settings, such
     * as a renderer"s default resolution, framerate, float percision, etc.
     * @example
     * // Use the native window resolution as the default resolution
     * // will support high-density displays when rendering
     * PIXI.settings.RESOLUTION = window.devicePixelRatio.
     *
     * // Disable interpolation when scaling, will make texture be pixelated
     * PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
     */
    namespace settings {
        /**
         * Target frames per millisecond.
         * @default 0.06
         */
        let TARGET_FPMS: number;
        /**
         * If set to true WebGL will attempt make textures mimpaped by default.
         * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
         * @default true
         */
        let MIPMAP_TEXTURES: boolean;
        /**
         * If set to true WebGL will attempt make textures mimpaped by default.
         * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
         * @default true
         */
        let RESOLUTION: number;
        /**
         * Default filter resolution.
         * @default 1
         */
        let FILTER_RESOLUTION: number;
        /**
         * The maximum textures that this device supports.
         * @default 32
         */
        let SPRITE_MAX_TEXTURES: number;
        /**
         * The default sprite batch size.
         *
         * The default aims to balance desktop and mobile devices.
         * @default 4096
         */
        let SPRITE_BATCH_SIZE: number;
        /**
         * The prefix that denotes a URL is for a retina asset.
         * @example `@2x`
         * @default /@([0-9\.]+)x/
         */
        let RETINA_PREFIX: RegExp;
        /**
         * The default render options if none are supplied to {@link PIXI.WebGLRenderer}
         * or {@link PIXI.CanvasRenderer}.
         *
         * @static
         * @constant
         * @memberof PIXI.settings
         * @type {object}
         * @property {HTMLCanvasElement} view=null
         * @property {number} resolution=1
         * @property {boolean} antialias=false
         * @property {boolean} forceFXAA=false
         * @property {boolean} autoResize=false
         * @property {boolean} transparent=false
         * @property {number} backgroundColor=0x000000
         * @property {boolean} clearBeforeRender=true
         * @property {boolean} preserveDrawingBuffer=false
         * @property {boolean} roundPixels=false
         * @property {number} width=800
         * @property {number} height=600
         * @property {boolean} legacy=false
         */
        const RENDER_OPTIONS: {
            view: HTMLCanvasElement | null;
            antialias: boolean;
            forceFXAA: boolean;
            autoResize: boolean;
            transparent: boolean;
            backgroundColor: number;
            clearBeforeRender: boolean;
            preserveDrawingBuffer: boolean;
            roundPixels: boolean;
            width: number;
            height: number;
            legacy: boolean;
        };
        /**
         * Default transform type.
         * @type {PIXI.TRANSFORM_MODE}
         * @default PIXI.TRANSFORM_MODE.STATIC
         */
        let TRANSFORM_MODE: number;
        /**
         * Default Garbage Collection mode.
         * @type {PIXI.GC_MODES}
         * @default PIXI.GC_MODES.AUTO
         */
        let GC_MODE: number;
        /**
         * Default Garbage Collection max idle.
         * @default 3600
         */
        let GC_MAX_IDLE: number;
        /**
         * Default Garbage Collection maximum check count.
         * @default 600
         */
        let GC_MAX_CHECK_COUNT: number;
        /**
         * Default wrap modes that are supported by pixi.
         * @type {PIXI.WRAP_MODES}
         * @default PIXI.WRAP_MODES.CLAMP
         */
        let WRAP_MODE: number;
        /**
         * The scale modes that are supported by pixi.
         * @type {PIXI.SCALE_MODES}
         * @default PIXI.SCALE_MODES.LINEAR
         */
        let SCALE_MODE: number;
        /**
         * Default specify float precision in vertex shader.
         * @type {PIXI.PRECISION}
         * @default PIXI.PRECISION.HIGH
         */
        let PRECISION_VERTEX: string;
        /**
         * Default specify float precision in fragment shader.
         * @type {PIXI.PRECISION}
         * @default PIXI.PRECISION.MEDIUM
         */
        let PRECISION_FRAGMENT: string;
        /**
         * @deprecated since version 4.4.0
         */
        let PRECISION: string;
        /**
         * Default number of uploads per frame using prepare plugin.
         * @default 4
         */
        let UPLOADS_PER_FRAME: number;
        /**
         * Can we upload the same buffer in a single frame?
         */
        let CAN_UPLOAD_SAME_BUFFER: boolean;
        /**
         * Default Mesh `canvasPadding`.
         * @see PIXI.mesh.Mesh#canvasPadding
         */
        let MESH_CANVAS_PADDING: number;
    }

    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////ACCESSIBILITY////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    namespace accessibility {
        // accessibility
        class AccessibilityManager {
            constructor(renderer: CanvasRenderer | WebGLRenderer);
            activate(): void;
            deactivate(): void;
            protected div: HTMLElement;
            protected pool: HTMLElement[];
            protected renderId: number;
            debug: boolean;
            renderer: SystemRenderer;
            protected children: AccessibleTarget[];
            protected isActive: boolean;

            protected updateAccessibleObjects(displayObject: DisplayObject): void;
            protected update(): void;
            protected capHitArea(hitArea: HitArea): void;
            protected addChild(displayObject: DisplayObject): void;
            protected _onClick(e: interaction.InteractionEvent): void;
            protected _onFocus(e: interaction.InteractionEvent): void;
            protected _onFocusOut(e: interaction.InteractionEvent): void;
            protected _onKeyDown(e: interaction.InteractionEvent): void;
            protected _onMouseMove(e: MouseEvent): void;

            destroy(): void;
        }
        interface AccessibleTarget {
            accessible: boolean;
            accessibleTitle: string | null;
            accessibleHint: string | null;
            tabIndex: number;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////CORE//////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    // const

    namespace CONST {
        /** String of the current PIXI version. */
        const VERSION: string;
        /** Two Pi. */
        const PI_2: number;
        /** Conversion factor for converting radians to degrees. */
        const RAD_TO_DEG: number;
        /** Conversion factor for converting degrees to radians. */
        const DEG_TO_RAD: number;
        const TARGET_FPMS: number;
        /** Constant to identify the Renderer Type. */
        const RENDERER_TYPE: {
            /** Unknown render type. */
            UNKNOWN: number;
            /** WebGL render type. */
            WEBGL: number;
            /** Canvas render type. */
            CANVAS: number;
        };
        /**
         * Various blend modes supported by PIXI.
         *
         * IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes.
         * Anything else will silently act like NORMAL.
         */
        const BLEND_MODES: {
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
            NORMAL_NPM: number;
            ADD_NPM: number;
            SCREEN_NPM: number;
        };
        /**
         * Various webgl draw modes. These can be used to specify which GL drawMode to use
         * under certain situations and renderers.
         */
        const DRAW_MODES: {
            POINTS: number;
            LINES: number;
            LINE_LOOP: number;
            LINE_STRIP: number;
            TRIANGLES: number;
            TRIANGLE_STRIP: number;
            TRIANGLE_FAN: number;
        };
        /**
         * The scale modes that are supported by pixi.
         *
         * The {@link PIXI.settings.SCALE_MODE} scale mode affects the default scaling mode of future operations.
         * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
         */
        const SCALE_MODES: {
            LINEAR: number;
            NEAREST: number;
        };
        /**
         * The gc modes that are supported by pixi.
         *
         * The {@link PIXI.settings.GC_MODE} Garbage Collection mode for PixiJS textures is AUTO
         * If set to GC_MODE, the renderer will occasionally check textures usage. If they are not
         * used for a specified period of time they will be removed from the GPU. They will of course
         * be uploaded again when they are required. This is a silent behind the scenes process that
         * should ensure that the GPU does not  get filled up.
         *
         * Handy for mobile devices!
         * This property only affects WebGL.
         */
        const GC_MODES: {
            /** Garbage collection will happen periodically automatically */
            AUTO: number;
            /** Garbage collection will need to be called manually */
            MANUAL: number;
        };
        const WRAP_MODES: {
            /** The textures uvs are clamped */
            CLAMP: number;
            /** The texture uvs tile and repeat */
            MIRRORED_REPEAT: number;
            /** The texture uvs tile and repeat with mirroring */
            REPEAT: number;
        };
        /**
         * Constants that specify the transform type.
         */
        const TRANSFORM_MODE: {
            DEFAULT: number;
            DYNAMIC: number;
            STATIC: number;
        };
        /**
         * Regexp for image type by extension.
         *
         * @example `image.png`
         */
        const URL_FILE_EXTENSION: RegExp | string;
        /**
         * Regexp for data URI.
         * Based on: {@link https://github.com/ragingwind/data-uri-regex}
         *
         * @example data:image/png;base64
         */
        const DATA_URI: RegExp | string;
        /**
         * Regexp for SVG size.
         *
         * @example <svg width="100" height="100"></svg>;
         */
        const SVG_SIZE: RegExp | string;
        /**
         * Constants that identify shapes, mainly to prevent `instanceof` calls.
         */
        const SHAPES: {
            /** Polygon */
            POLY: number;
            /** Rectangle */
            RECT: number;
            /** Circle */
            CIRC: number;
            /** Ellipse */
            ELIP: number;
            /** Rounded Rectangle */
            RREC: number;
        };
        /**
         * Constants that specify float precision in shaders.
         */
        const PRECISION: {
            /** "lowp" */
            LOW: string;
            /** "mediump" */
            MEDIUM: string;
            /** "highp" */
            HIGH: string;
        };
        /**
         * Constants that define the type of gradient on text.
         */
        const TEXT_GRADIENT: {
            /** Vertical gradient */
            LINEAR_VERTICAL: number;
            /** Linear gradient */
            LINEAR_HORIZONTAL: number;
        };
        /**
         * Represents the update priorities used by internal PIXI classes when registered with
         * the {@link PIXI.ticker.Ticker} object. Higher priority items are updated first and lower
         * priority items, such as render, should go later.
         */
        const UPDATE_PRIORITY: {
            /** INTERACTION=50 Highest priority, used for {@link PIXI.interaction.InteractionManager} */
            INTERACTION: number;
            /** HIGH=25 High priority updating, {@link PIXI.VideoBaseTexture} and {@link PIXI.extras.AnimatedSprite} */
            HIGH: number;
            /** NORMAL=0 Default priority for ticker events, see {@link PIXI.ticker.Ticker#add}. */
            NORMAL: number;
            /** LOW=-25 Low priority used for {@link PIXI.Application} rendering. */
            LOW: number;
            /** UTILITY=-50 Lowest priority used for {@link PIXI.prepare.BasePrepare} utility. */
            UTILITY: number;
        };
    }

    // display

    interface StageOptions {
        children?: boolean;
        texture?: boolean;
        baseTexture?: boolean;
    }

    /**
     * Convenience class to create a new PIXI application.
     * This class automatically creates the renderer, ticker
     * and root container.
     *
     * @example
     * // Create the application
     * const app = new PIXI.Application();
     *
     * // Add the view to the DOM
     * document.body.appendChild(app.view);
     *
     * // ex, add display objects
     * app.stage.addChild(PIXI.Sprite.fromImage("something.png"));
     */
    class Application {
        constructor(options?: ApplicationOptions);
        constructor(
            width?: number,
            height?: number,
            options?: ApplicationOptions,
            noWebGL?: boolean,
            sharedTicker?: boolean,
            sharedLoader?: boolean,
        );

        private _ticker: ticker.Ticker;

        renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
        stage: Container;
        ticker: ticker.Ticker;
        /**
         * Loader instance to help with asset loading.
         */
        loader: loaders.Loader;
        readonly screen: Rectangle;

        /**
         * Convenience method for stopping the render.
         */
        stop(): void;
        /**
         * Convenience method for starting the render.
         */
        start(): void;
        /**
         * Render the current stage.
         */
        render(): void;
        /**
         * Destroy and don"t use after this.
         * @param [removeView=false] Automatically remove canvas from DOM.
         * @param [stageOptions] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         */
        destroy(removeView?: boolean, stageOptions?: StageOptions | boolean): void;
        readonly view: HTMLCanvasElement;
    }

    interface DestroyOptions {
        /** if set to true, all the children will have their destroy method called as well. "options" will be passed on to those calls. */
        children?: boolean;
        /**
         * It Should it destroy the current texture of the sprite as well
         *
         * Only used for child Sprites if options.children is set to true
         */
        texture?: boolean;
        /**
         * Should it destroy the base texture of the sprite as well
         *
         * Only used for child Sprites if options.children is set to true
         */
        baseTexture?: boolean;
    }
    /**
     * "Builder" pattern for bounds rectangles
     * Axis-Aligned Bounding Box
     * It is not a shape! Its mutable thing, no "EMPTY" or that kind of problems
     */
    class Bounds {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
        rect: Rectangle;

        /**
         * Checks if bounds are empty.
         *
         * @return True if empty.
         */
        isEmpty(): boolean;
        /**
         * Clears the bounds and resets.
         *
         */
        clear(): void;

        /**
         * Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle
         * It is not guaranteed that it will return tempRect
         *
         * @param rect - temporary object will be used if AABB is not empty
         * @returns A rectangle of the bounds
         */
        getRectangle(rect?: Rectangle): Rectangle;
        /**
         * This function should be inlined when its possible.
         *
         * @param point - The point to add.
         */
        addPoint(point: Point): void;
        /**
         * Adds a quad, not transformed
         *
         * @param vertices - The verts to add.
         */
        addQuad(vertices: ArrayLike<number>): Bounds | undefined;
        /**
         * Adds sprite frame, transformed.
         *
         * @param transform - TODO
         * @param x0 - TODO
         * @param y0 - TODO
         * @param x1 - TODO
         * @param y1 - TODO
         */
        addFrame(transform: Transform, x0: number, y0: number, x1: number, y1: number): void;
        /**
         * Add an array of vertices
         *
         * @param transform - TODO
         * @param vertices - TODO
         * @param beginOffset - TODO
         * @param endOffset - TODO
         */
        addVertices(transform: Transform, vertices: ArrayLike<number>, beginOffset: number, endOffset: number): void;
        /**
         * Adds other Bounds
         *
         * @param bounds - TODO
         */
        addBounds(bounds: Bounds): void;
        /**
         * Adds other Bounds, masked with Bounds
         *
         * @param bounds - TODO
         * @param mask - TODO
         */
        addBoundsMask(bounds: Bounds, mask: Bounds): void;
        /**
         * Adds other Bounds, masked with Rectangle
         *
         * @param bounds - TODO
         * @param area - TODO
         */
        addBoundsArea(bounds: Bounds, area: Rectangle): void;
    }
    /**
     * A Container represents a collection of display objects.
     *
     * It is the base class of all display objects that act as a container for other objects.
     *
     * ```js
     *  let container = new PIXI.Container();
     *  container.addChild(sprite);
     *  ```
     */
    class Container extends DisplayObject {
        // begin extras.getChildByName
        /**
         * Returns the display object in the container
         *
         * @param name - instance name
         * @return The child with the specified name.
         */
        getChildByName<T extends DisplayObject = Container>(name: string): T;
        // end extras.getChildByName

        children: DisplayObject[];
        width: number;
        height: number;

        protected onChildrenChange: (...args: any[]) => void;
        addChild<T extends DisplayObject>(...children: T[]): T;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param child - The child to add
         * @param index - The index to place the child in
         * @return The child that was added.
         */
        addChildAt<T extends DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param child - First display object to swap
         * @param child2 - Second display object to swap
         */
        swapChildren(child: DisplayObject, child2: DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param child - The DisplayObject instance to identify
         * @return The index position of the child display object to identify
         */
        getChildIndex(child: DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param child - The child DisplayObject instance for which you want to change the index number
         * @param index - The resulting index number for the child display object
         */
        setChildIndex(child: DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param index - The index to get the child at
         * @return The child at the given index, if any.
         */
        getChildAt<T extends DisplayObject = Container>(index: number): T;
        removeChild<T extends DisplayObject = Container>(child: DisplayObject): T;
        /**
         * Removes a child from the specified index position.
         *
         * @param index - The index to get the child from
         * @return The child that was removed.
         */
        removeChildAt<T extends DisplayObject = Container>(index: number): T;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param [beginIndex=0] - The beginning position.
         * @param [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns List of removed children
         */
        removeChildren<T extends DisplayObject = Container>(beginIndex?: number, endIndex?: number): T[];
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         */
        calculateBounds(): void;
        /**
         * Recalculates the bounds of the object. Override this to
         * calculate the bounds of the specific object (not including children).
         *
         */
        protected _calculateBounds(): void;
        protected containerUpdateTransform(): void;
        renderWebGL(renderer: WebGLRenderer): void;
        renderAdvancedWebGL(renderer: WebGLRenderer): void;
        protected _renderWebGL(renderer: WebGLRenderer): void;
        protected _renderCanvas(renderer: CanvasRenderer): void;
        renderCanvas(renderer: CanvasRenderer): void;
        /**
         * Removes all internal references and listeners as well as removes children from the display list.
         * Do not use a Container after calling `destroy`.
         *
         * @param [options] - Options parameter. A boolean will act as if all options have been set to that value
         */
        destroy(options?: DestroyOptions | boolean): void;

        once(
            event: interaction.InteractionEventTypes | "added" | "removed",
            fn: (event: interaction.InteractionEvent) => void,
            context?: any,
        ): this;
        once(event: string | symbol, fn: (...args: any[]) => any, context?: any): this;
        on(
            event: interaction.InteractionEventTypes | "added" | "removed",
            fn: (event: interaction.InteractionEvent) => void,
            context?: any,
        ): this;
        on(event: string | symbol, fn: (...args: any[]) => any, context?: any): this;
        off(event: "added" | "removed" | string | symbol, fn?: (...args: any[]) => any, context?: any): this;
    }
    /**
     * The base class for all objects that are rendered on the screen.
     * This is an abstract class and should not be used on its own rather it should be extended.
     */
    class DisplayObject extends utils.EventEmitter
        implements interaction.InteractiveTarget, accessibility.AccessibleTarget {
        // begin extras.cacheAsBitmap
        protected _cacheAsBitmap: boolean;
        protected _cacheData: boolean;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to "false"
         *
         * IMPORTANT GOTCHA - make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         */
        cacheAsBitmap: boolean;
        protected _renderCachedWebGL(renderer: WebGLRenderer): void;
        protected _initCachedDisplayObject(renderer: WebGLRenderer): void;
        protected _renderCachedCanvas(renderer: CanvasRenderer): void;
        protected _initCachedDisplayObjectCanvas(renderer: CanvasRenderer): void;
        protected _calculateCachedBounds(): Rectangle;
        protected _getCachedLocalBounds(): Rectangle;
        protected _destroyCachedDisplayObject(): void;
        protected _cacheAsBitmapDestroy(options: boolean | any): void;
        // end extras.cacheAsBitmap

        // begin extras.getChildByName
        /**
         * The instance name of the object.
         */
        name: string | null;
        // end extras.getChildByName

        // begin extras.getGlobalPosition
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @param point - the point to write the global value to. If null a new point will be returned
         * @param skipUpdate - setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost
         * @return The updated point
         */
        getGlobalPosition(point?: Point, skipUpdate?: boolean): Point;
        // end extras.getGlobalPosition

        // begin accessible target
        accessible: boolean;
        accessibleTitle: string | null;
        accessibleHint: string | null;
        tabIndex: number;
        // end accessible target

        // begin interactive target
        interactive: boolean;
        interactiveChildren: boolean;
        hitArea: PIXI.Rectangle | PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.RoundedRectangle | PIXI.HitArea;
        buttonMode: boolean;
        cursor: string;
        trackedPointers: { [key: number]: interaction.InteractionTrackingData };
        // Deprecated
        /** @deprecated */
        defaultCursor: string;
        // end interactive target

        transform: TransformBase;
        alpha: number;
        visible: boolean;
        renderable: boolean;
        parent: Container;
        worldAlpha: number;
        filterArea: Rectangle | null;
        protected _filters: Array<Filter<any>> | null;
        protected _enabledFilters: Array<Filter<any>> | null;
        protected _bounds: Bounds;
        protected _boundsID: number;
        protected _lastBoundsID: number;
        protected _boundsRect: Rectangle;
        protected _localBoundsRect: Rectangle;
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        protected readonly _destroyed: boolean;
        x: number;
        y: number;
        worldTransform: Matrix;
        localTransform: Matrix;
        position: Point | ObservablePoint;
        scale: Point | ObservablePoint;
        pivot: Point | ObservablePoint;
        skew: ObservablePoint;
        rotation: number;
        worldVisible: boolean;
        mask: PIXI.Graphics | PIXI.Sprite | null;
        filters: Array<Filter<any>> | null;

        /**
         * Updates the object transform for rendering
         *
         * TODO - Optimization pass!
         */
        updateTransform(): void;
        protected displayObjectUpdateTransform(): void;
        /**
         * recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        protected _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param skipUpdate - setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost
         * @param rect - Optional rectangle to store the result of the bounds calculation
         * @return the rectangular bounding area
         */
        getBounds(skipUpdate?: boolean, rect?: Rectangle): Rectangle;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object
         *
         * @param [rect] - Optional rectangle to store the result of the bounds calculation
         * @return the rectangular bounding area
         */
        getLocalBounds(rect?: Rectangle): Rectangle;
        /**
         * Calculates the global position of the display object
         *
         * @param position - The world origin to calculate from
         * @param [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point)
         * @param [skipUpdate=false] - Should we skip the update transform.
         * @return A point object representing the position of this object
         */
        toGlobal(position: PointLike): Point;
        /**
         * Calculates the global position of the display object
         *
         * @param position - The world origin to calculate from
         * @param [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point)
         * @param [skipUpdate=false] - Should we skip the update transform.
         * @return A point object representing the position of this object
         */
        toGlobal<T extends PointLike>(position: PointLike, point?: T, skipUpdate?: boolean): T;
        //creates and returns a new point
        toLocal(position: PointLike, from?: DisplayObject): Point;
        /**
         * Calculates the local position of the display object relative to another point
         *
         * @param position - The world origin to calculate from
         * @param [from] - The DisplayObject to calculate the global position from
         * @param [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point)
         * @param [skipUpdate=false] - Should we skip the update transform
         * @return A point object representing the position of this object
         */
        toLocal<T extends PointLike>(position: PointLike, from?: DisplayObject, point?: T, skipUpdate?: boolean): T;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param renderer - The renderer
         */
        renderWebGL(renderer: WebGLRenderer): void;
        renderCanvas(renderer: CanvasRenderer): void;
        setParent(container: Container): Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param [x=0] - The X position
         * @param [y=0] - The Y position
         * @param [scaleX=1] - The X scale value
         * @param [scaleY=1] - The Y scale value
         * @param [rotation=0] - The rotation
         * @param [skewX=0] - The X skew value
         * @param [skewY=0] - The Y skew value
         * @param [pivotX=0] - The X pivot value
         * @param [pivotY=0] - The Y pivot value
         * @return The DisplayObject instance
         */
        setTransform(
            x?: number,
            y?: number,
            scaleX?: number,
            scaleY?: number,
            rotation?: number,
            skewX?: number,
            skewY?: number,
            pivotX?: number,
            pivotY?: number,
        ): DisplayObject;
        /**
         * Base destroy method for generic display objects. This will automatically
         * remove the display object from its parent Container as well as remove
         * all current event listeners and internal references. Do not use a DisplayObject
         * after calling `destroy`.
         */
        destroy(): void;

        on(
            event: interaction.InteractionEventTypes,
            fn: (event: interaction.InteractionEvent) => void,
            context?: any,
        ): this;
        on(event: string | symbol, fn: (...args: any[]) => any, context?: any): this;
        once(
            event: interaction.InteractionEventTypes,
            fn: (event: interaction.InteractionEvent) => void,
            context?: any,
        ): this;
        once(event: string | symbol, fn: (...args: any[]) => any, context?: any): this;
        removeListener(
            event: interaction.InteractionEventTypes,
            fn?: (event: interaction.InteractionEvent) => void,
            context?: any,
        ): this;
        removeAllListeners(event?: interaction.InteractionEventTypes): this;
        off(
            event: interaction.InteractionEventTypes,
            fn?: (event: interaction.InteractionEvent) => void,
            context?: any,
        ): this;
        addListener(
            event: interaction.InteractionEventTypes,
            fn: (event: interaction.InteractionEvent) => void,
            context?: any,
        ): this;
    }
    /**
     * Generic class to deal with traditional 2D matrix transforms
     */
    class TransformBase {
        static IDENTITY: TransformBase;

        worldTransform: Matrix;
        localTransform: Matrix;
        protected _worldID: number;
        protected _parentID: number;
        /**
         * Updates only local matrix
         */
        updateLocalTransform(): void;
        /**
         * Updates the values of the object and applies the parent"s transform.
         *
         * @param parentTransform - The transform of the parent of this object
         */
        updateTransform(parentTransform: TransformBase): void;
        updateWorldTransform(parentTransform: TransformBase): void;
    }
    /**
     * Transform that takes care about its versions
     */
    class TransformStatic extends TransformBase {
        position: ObservablePoint;
        scale: ObservablePoint;
        pivot: ObservablePoint;
        skew: ObservablePoint;

        protected _rotation: number;
        protected _sr?: number;
        protected _cr?: number;
        protected _cy?: number;
        protected _sy?: number;
        protected _sx?: number;
        protected _cx?: number;
        protected _localID: number;
        protected _currentLocalID: number;

        protected onChange(): void;
        updateSkew(): void;
        /**
         * Decomposes a matrix and sets the transforms properties based on it.
         *
         * @param matrix - The matrix to decompose
         */
        setFromMatrix(matrix: Matrix): void;
        rotation: number;
    }
    /**
     * Generic class to deal with traditional 2D matrix transforms
     * local transformation is calculated from position,scale,skew and rotation
     */
    class Transform extends TransformBase {
        constructor();

        position: Point;
        scale: Point;
        skew: ObservablePoint;
        pivot: Point;

        protected _rotation: number;
        protected _sr?: number;
        protected _cr?: number;
        protected _cy?: number;
        protected _sy?: number;
        protected _sx?: number;
        protected _cx?: number;

        updateSkew(): void;
        /**
         * Decomposes a matrix and sets the transforms properties based on it.
         *
         * @param matrix - The matrix to decompose
         */
        setFromMatrix(matrix: Matrix): void;

        rotation: number;
    }
    // graphics
    /**
     * A GraphicsData object.
     */
    class GraphicsData {
        constructor(
            lineWidth: number,
            lineColor: number,
            lineAlpha: number,
            fillColor: number,
            fillAlpha: number,
            fill: boolean,
            nativeLines: boolean,
            shape: Circle | Rectangle | Ellipse | Polygon | RoundedRectangle | any,
            lineAlignment?: number,
        );
        lineWidth: number;
        lineAlignment: number;
        nativeLines: boolean;
        lineColor: number;
        lineAlpha: number;
        protected _lineTint: number;
        fillColor: number;
        fillAlpha: number;
        protected _fillTint: number;
        fill: boolean;
        protected holes: Circle[] | Rectangle[] | Ellipse[] | Polygon[] | RoundedRectangle[] | any[];
        shape: Circle | Rectangle | Ellipse | Polygon | RoundedRectangle | any;
        type?: number;
        /**
         * Creates a new GraphicsData object with the same values as this one.
         *
         * @return Cloned GraphicsData object
         */
        clone(): GraphicsData;
        /**
         * Adds a hole to the shape.
         *
         * @param shape - The shape of the hole.
         */
        addHole(shape: Circle | Rectangle | Ellipse | Polygon | RoundedRectangle | any): void;
        /**
         * Destroys the Graphics data.
         */
        destroy(options?: DestroyOptions | boolean): void;
    }
    /**
     * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
     * rectangles to the display, and to color and fill them.
     */
    class Graphics extends Container {
        /**
         * Graphics curves resolution settings. If `adaptive` flag is set to `true`,
         * the resolution is calculated based on the curve"s length to ensure better visual quality.
         * Adaptive draw works with `bezierCurveTo` and `quadraticCurveTo`.
         *
         * @property {boolean} adaptive=false - flag indicating if the resolution should be adaptive
         * @property {number} maxLength=10 - maximal length of a single segment of the curve (if adaptive = false, ignored)
         * @property {number} minSegments=8 - minimal number of segments in the curve (if adaptive = false, ignored)
         * @property {number} maxSegments=2048 - maximal number of segments in the curve (if adaptive = false, ignored)
         */
        static CURVES: {
            adaptive: boolean;
            maxLength: number;
            minSegments: number;
            maxSegments: number;
        };

        constructor(nativeLines?: boolean);

        /**
         * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
         * This is useful if your graphics element does not change often, as it will speed up the rendering
         * of the object in exchange for taking up texture memory. It is also useful if you need the graphics
         * object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
         * you are constantly redrawing the graphics element.
         *
         * @default false
         */
        cacheAsBitmap: boolean;
        fillAlpha: number;
        lineWidth: number;
        nativeLines: boolean;
        lineColor: number;
        lineAlignment: number;
        protected graphicsData: GraphicsData[];
        tint: number;
        protected _prevTint: number;
        blendMode: number;
        currentPath: GraphicsData;
        protected _webGL: any;
        isMask: boolean;
        boundsPadding: number;
        protected _localBounds: Bounds;
        dirty: number;
        canvasTintDirty: number;
        fastRectDirty: number;
        clearDirty: number;
        boundsDirty: number;
        protected cachedSpriteDirty: boolean;
        protected _spriteRect: Rectangle;
        protected _fastRect: boolean;

        static _SPRITE_TEXTURE: Texture;

        clone(): Graphics;
        protected _quadraticCurveLength(
            fromX: number,
            fromY: number,
            cpX: number,
            cpY: number,
            toX: number,
            toY: number,
        ): number;
        protected _bezierCurveLength(
            fromX: number,
            fromY: number,
            cpX: number,
            cpY: number,
            cpX2: number,
            cpY2: number,
            toX: number,
            toY: number,
        ): number;
        protected _segmentsCount(length: number): number;
        lineStyle(lineWidth?: number, color?: number, alpha?: number, alignment?: number): Graphics;
        moveTo(x: number, y: number): Graphics;
        lineTo(x: number, y: number): Graphics;
        quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): Graphics;
        bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): Graphics;
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
        arc(
            cx: number,
            cy: number,
            radius: number,
            startAngle: number,
            endAngle: number,
            anticlockwise?: boolean,
        ): Graphics;
        beginFill(color: number, alpha?: number): Graphics;
        endFill(): Graphics;
        drawRect(x: number, y: number, width: number, height: number): Graphics;
        drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): Graphics;
        drawCircle(x: number, y: number, radius: number): Graphics;
        drawEllipse(x: number, y: number, width: number, height: number): Graphics;
        drawPolygon(path: number[] | Point[] | Polygon): Graphics;
        drawStar(
            x: number,
            y: number,
            points: number,
            radius: number,
            innerRadius: number,
            rotation?: number,
        ): Graphics;
        clear(): Graphics;
        isFastRect(): boolean;
        protected _renderCanvas(renderer: CanvasRenderer): void;
        protected _calculateBounds(): Rectangle;
        protected _renderSpriteRect(renderer: PIXI.SystemRenderer): void;
        containsPoint(point: Point): boolean;
        updateLocalBounds(): void;
        drawShape(shape: Circle | Rectangle | Ellipse | Polygon | RoundedRectangle | any): GraphicsData;
        generateCanvasTexture(scaleMode?: number, resolution?: number): Texture;
        closePath(): Graphics;
        addHole(): Graphics;
        destroy(options?: DestroyOptions | boolean): void;
    }
    class CanvasGraphicsRenderer {
        constructor(renderer: SystemRenderer);
        render(graphics: Graphics): void;
        protected updateGraphicsTint(graphics: Graphics): void;
        protected renderPolygon(points: Point[], close: boolean, context: CanvasRenderingContext2D): void;
        destroy(): void;
    }
    /**
     * Renders the graphics object.
     */
    class GraphicsRenderer extends ObjectRenderer {
        constructor(renderer: PIXI.CanvasRenderer);

        protected graphicsDataPool: GraphicsData[];
        protected primitiveShader: PrimitiveShader;
        gl: WebGLRenderingContext;

        CONTEXT_UID: number;
        /**
         * Destroys this renderer.
         */
        destroy(): void;
        /**
         * Renders a graphics object.
         *
         * @param graphics - The graphics object to render.
         */
        render(graphics: Graphics): void;
        protected updateGraphics(graphics: PIXI.Graphics): void;
        getWebGLData(webGL: WebGLRenderingContext, type: number, nativeLines: number): WebGLGraphicsData;
    }
    class WebGLGraphicsData {
        constructor(gl: WebGLRenderingContext, shader: glCore.GLShader, attribsState: glCore.AttribState);

        gl: WebGLRenderingContext;
        color: number[];
        points: Point[];
        indices: number[];
        buffer: WebGLBuffer;
        indexBuffer: WebGLBuffer;
        dirty: boolean;
        glPoints: number[];
        glIndices: number[];
        shader: glCore.GLShader;
        vao: glCore.VertexArrayObject;
        nativeLines: boolean;

        reset(): void;
        upload(): void;
        destroy(): void;
    }
    /**
     * This shader is used to draw simple primitive shapes for {@link PIXI.Graphics}.
     */
    class PrimitiveShader extends glCore.GLShader {}

    // math

    /**
     * Implements Dihedral Group D_8, see [group D4]{@link http://mathworld.wolfram.com/DihedralGroupD4.html},
     * D8 is the same but with diagonals. Used for texture rotations.
     *
     * Vector xX(i), xY(i) is U-axis of sprite with rotation i
     * Vector yY(i), yY(i) is V-axis of sprite with rotation i
     * Rotations: 0 grad (0), 90 grad (2), 180 grad (4), 270 grad (6)
     * Mirrors: vertical (8), main diagonal (10), horizontal (12), reverse diagonal (14)
     * This is the small part of gameofbombs.com portal system. It works.
     *
     * @author Ivan @ivanpopelyshev
     * @class
     * @memberof PIXI
     */
    namespace GroupD8 {
        const E: number;
        const SE: number;
        const S: number;
        const SW: number;
        const W: number;
        const NW: number;
        const N: number;
        const NE: number;
        const MIRROR_HORIZONTAL: number;
        const MIRROR_VERTICAL: number;
        function uX(ind: number): number;
        function uY(ind: number): number;
        function vX(ind: number): number;
        function vY(ind: number): number;
        function inv(rotation: number): number;
        function add(rotationSecond: number, rotationFirst: number): number;
        function sub(rotationSecond: number, rotationFirst: number): number;
        /**
         * Adds 180 degrees to rotation. Commutative operation.
         *
         * @param rotation - The number to rotate.
         * @returns rotated number
         */
        function rotate180(rotation: number): number;
        /**
         * Direction of main vector can be horizontal, vertical or diagonal.
         * Some objects work with vertical directions different.
         *
         * @param rotation - The number to check.
         * @returns Whether or not the direction is vertical
         */
        function isVertical(rotation: number): boolean;
        /**
         * @param dx - TODO
         * @param dy - TODO
         *
         * @return TODO
         */
        function byDirection(dx: number, dy: number): number;
        /**
         * Helps sprite to compensate texture packer rotation.
         *
         * @param matrix - sprite world matrix
         * @param rotation - The rotation factor to use.
         * @param tx - sprite anchoring
         * @param ty - sprite anchoring
         */
        function matrixAppendRotationInv(matrix: Matrix, rotation: number, tx: number, ty: number): void;
    }
    /**
     * The PixiJS Matrix class as an object, which makes it a lot faster,
     * here is a representation of it :
     * | a | c | tx|
     * | b | d | ty|
     * | 0 | 0 | 1 |
     */
    class Matrix {
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);

        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;

        /**
         * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
         *
         * a = array[0]
         * b = array[1]
         * c = array[3]
         * d = array[4]
         * tx = array[2]
         * ty = array[5]
         *
         * @param {number[]} array - The array that the matrix will be populated from.
         */
        fromArray(array: number[]): void;
        /**
         * sets the matrix properties
         *
         * @param a - Matrix component
         * @param b - Matrix component
         * @param c - Matrix component
         * @param d - Matrix component
         * @param tx - Matrix component
         * @param ty - Matrix component
         *
         * @return This matrix. Good for chaining method calls.
         */
        set(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
        /**
         * Creates an array from the current Matrix object.
         *
         * @param transpose - Whether we need to transpose the matrix or not
         * @param [out=new Float32Array(9)] - If provided the array will be assigned to out
         * @return the newly created array which contains the matrix
         */
        toArray(transpose?: boolean, out?: number[]): number[];
        /**
         * Get a new position with the current transformation applied.
         * Can be used to go from a child"s coordinate space to the world coordinate space. (e.g. rendering)
         *
         * @param pos - The origin
         * @param [newPos] - The point that the new position is assigned to (allowed to be same as input)
         * @return The new point, transformed through this matrix
         */
        apply(pos: Point, newPos?: Point): Point;
        applyInverse(pos: Point, newPos?: Point): Point;
        translate(x: number, y: number): Matrix;
        scale(x: number, y: number): Matrix;
        rotate(angle: number): Matrix;
        append(matrix: Matrix): Matrix;
        setTransform(
            x: number,
            y: number,
            pivotX: number,
            pivotY: number,
            scaleX: number,
            scaleY: number,
            rotation: number,
            skewX: number,
            skewY: number,
        ): PIXI.Matrix;
        prepend(matrix: Matrix): Matrix;
        invert(): Matrix;
        identity(): Matrix;
        decompose(transform: TransformBase): TransformBase;
        clone(): Matrix;
        copy(matrix: Matrix): Matrix;

        static IDENTITY: Matrix;
        static TEMP_MATRIX: Matrix;
    }
    class PointLike {
        x: number;
        y: number;

        set(x?: number, y?: number): void;
        copy(point: PointLike): void;
    }
    /**
     * The Point object represents a location in a two-dimensional coordinate system, where x represents
     * the horizontal axis and y represents the vertical axis.
     * An observable point is a point that triggers a callback when the point"s position is changed.
     */
    class ObservablePoint extends PointLike {
        constructor(cb: () => any, scope?: any, x?: number, y?: number);
        clone(cb?: Function, scope?: any): ObservablePoint;
        equals(p: Point | ObservablePoint | PointLike): boolean;
        cb: () => any;
        scope: any;
    }
    /**
     * The Point object represents a location in a two-dimensional coordinate system, where x represents
     * the horizontal axis and y represents the vertical axis.
     */
    class Point extends PointLike {
        constructor(x?: number, y?: number);
        clone(): Point;
        equals(p: PointLike): boolean;
    }
    interface HitArea {
        contains(x: number, y: number): boolean;
    }
    /**
     * The Circle object can be used to specify a hit area for displayObjects
     */
    class Circle implements HitArea {
        constructor(x?: number, y?: number, radius?: number);

        x: number;
        y: number;
        radius: number;
        type: number;

        clone(): Circle;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;
    }
    /**
     * The Ellipse object can be used to specify a hit area for displayObjects
     */
    class Ellipse implements HitArea {
        constructor(x?: number, y?: number, halfWidth?: number, halfHeight?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        type: number;

        clone(): Ellipse;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;
    }
    class Polygon implements HitArea {
        constructor(points: Point[] | number[]);
        // Note - Rest Params cannot be combined with |
        //tslint:disable-next-line:unified-signatures
        constructor(...points: Point[]);
        //tslint:disable-next-line:unified-signatures
        constructor(...points: number[]);

        closed: boolean;
        points: number[];
        type: number;

        clone(): Polygon;
        contains(x: number, y: number): boolean;
        close(): void;
    }
    /**
     * Rectangle object is an area defined by its position, as indicated by its top-left corner
     * point (x, y) and by its width and its height.
     */
    class Rectangle implements HitArea {
        constructor(x?: number, y?: number, width?: number, height?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        type: number;
        left: number;
        right: number;
        top: number;
        bottom: number;

        static EMPTY: Rectangle;

        /**
         * Creates a clone of this Rectangle
         *
         * @return a copy of the rectangle
         */
        clone(): Rectangle;
        /**
         * Enlarges rectangle that way its corners lie on grid
         *
         * @param [resolution=1] resolution
         * @param [eps=0.001] precision
         */
        ceil(resolution?: number, eps?: number): void;
        /**
         * Copies another rectangle to this one.
         *
         * @param rectangle - The rectangle to copy.
         * @return Returns itself.
         */
        copy(rectangle: Rectangle): Rectangle;
        /**
         * Checks whether the x and y coordinates given are contained within this Rectangle
         *
         * @param x - The X coordinate of the point to test
         * @param y - The Y coordinate of the point to test
         * @return Whether the x/y coordinates are within this Rectangle
         */
        contains(x: number, y: number): boolean;
        /**
         * Pads the rectangle making it grow in all directions.
         *
         * @param paddingX - The horizontal padding amount.
         * @param [paddingY] - The vertical padding amount.
         */
        pad(paddingX: number, paddingY: number): void;
        /**
         * Fits this rectangle around the passed one.
         *
         * @param rectangle - The rectangle to fit.
         */
        fit(rectangle: Rectangle): void;
        /**
         * Enlarges this rectangle to include the passed rectangle.
         *
         * @param rectangle - The rectangle to include.
         */
        enlarge(rectangle: Rectangle): void;
    }
    class RoundedRectangle implements HitArea {
        constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        radius: number;
        type: number;

        clone(): RoundedRectangle;
        contains(x: number, y: number): boolean;
    }
    // renderers
    interface RendererOptions {
        /**
         * the width of the renderers view [default=800]
         */
        width?: number;

        /**
         * the height of the renderers view [default=600]
         */
        height?: number;

        /**
         * the canvas to use as a view, optional
         */
        view?: HTMLCanvasElement;

        /**
         * If the render view is transparent, [default=false]
         */
        transparent?: boolean;

        /**
         * sets antialias (only applicable in chrome at the moment) [default=false]
         */
        antialias?: boolean;

        /**
         * enables drawing buffer preservation, enable this if you need to call toDataUrl on the webgl context [default=false]
         */
        preserveDrawingBuffer?: boolean;

        /**
         * The resolution / device pixel ratio of the renderer, retina would be 2 [default=1]
         */
        resolution?: number;

        /**
         * prevents selection of WebGL renderer, even if such is present [default=false]
         */
        forceCanvas?: boolean;

        /**
         * The background color of the rendered area (shown if not transparent) [default=0x000000]
         */
        backgroundColor?: number;

        /**
         * This sets if the renderer will clear the canvas or not before the new render pass. [default=true]
         */
        clearBeforeRender?: boolean;

        /**
         * If true Pixi will Math.floor() x/ y values when rendering, stopping pixel interpolation. [default=false]
         */
        roundPixels?: boolean;

        /**
         * forces FXAA antialiasing to be used over native FXAA is faster, but may not always look as great ** webgl only** [default=false]
         */
        forceFXAA?: boolean;

        /**
         * `true` to ensure compatibility with older / less advanced devices. If you experience unexplained flickering try setting this to true. **webgl only** [default=false]
         */
        legacy?: boolean;

        /**
         * Deprecated
         */
        context?: WebGLRenderingContext;

        /**
         * @deprecated
         */
        autoResize?: boolean;

        /**
         * Parameter passed to webgl context, set to "high-performance" for devices with dual graphics card
         */
        powerPreference?: "high-performance";
    }
    interface ApplicationOptions extends RendererOptions {
        /**
         * `true` to use PIXI.ticker.shared, `false` to create new ticker. [default=false]
         */
        sharedTicker?: boolean;

        /**
         * `true` to use PIXI.loaders.shared, `false` to create new Loader.
         */
        sharedLoader?: boolean;

        /**
         * automatically starts the rendering after the construction.
         * Note that setting this parameter to false does NOT stop the shared ticker even if you set
         * options.sharedTicker to true in case that it is already started. Stop it by your own.
         */
        autoStart?: boolean;
    }
    interface DefaultRendererPlugins {
        accessibility: accessibility.AccessibilityManager;
        interaction: interaction.InteractionManager;
    }
    interface RendererPlugins extends DefaultRendererPlugins {}
    /**
     * The SystemRenderer is the base for a PixiJS Renderer. It is extended by the {@link PIXI.CanvasRenderer}
     * and {@link PIXI.WebGLRenderer} which can be used for rendering a PixiJS scene.
     */
    class SystemRenderer extends utils.EventEmitter {
        constructor(system: string, options?: RendererOptions);
        constructor(system: string, screenWidth?: number, screenHeight?: number, options?: RendererOptions);

        type: number;
        options: RendererOptions;
        screen: Rectangle;
        readonly width: number;
        readonly height: number;
        view: HTMLCanvasElement;
        resolution: number;
        transparent: boolean;
        autoResize: boolean;
        blendModes: any; // todo?
        preserveDrawingBuffer: boolean;
        clearBeforeRender: boolean;
        roundPixels: boolean;
        backgroundColor: number;
        protected _backgroundColor: number;
        protected _backgroundColorRgba: number[];
        protected _backgroundColorString: string;
        protected _tempDisplayObjectParent: Container;
        protected _lastObjectRendered: DisplayObject;

        resize(screenWidth: number, screenHeight: number): void;
        generateTexture(
            displayObject: DisplayObject,
            scaleMode?: number,
            resolution?: number,
            region?: Rectangle,
        ): RenderTexture;
        render(...args: any[]): void;
        destroy(removeView?: boolean): void;
    }
    interface DefaultCanvasRendererPlugins {
        extract: extract.CanvasExtract;
        prepare: prepare.CanvasPrepare;
    }
    interface CanvasRendererPlugins extends DefaultCanvasRendererPlugins, RendererPlugins {}
    /**
     * The CanvasRenderer draws the scene and all its content onto a 2d canvas. This renderer should
     * be used for browsers that do not support WebGL. Don"t forget to add the CanvasRenderer.view to
     * your DOM or you will not see anything :)
     */
    class CanvasRenderer extends SystemRenderer {
        // plugintarget mixin start
        static __plugins: {
            [pluginName: string]: { new (renderer: CanvasRenderer): any };
        };
        /**
         * Adds a plugin to the renderer.
         *
         * @param pluginName - The name of the plugin.
         * @param ctor - The constructor function or class for the plugin.
         */
        static registerPlugin(pluginName: string, ctor: { new (renderer: CanvasRenderer): any }): void;
        /**
         * Collection of installed plugins. These are included by default in PIXI, but can be excluded
         * by creating a custom build. Consult the README for more information about creating custom
         * builds and excluding plugins.
         *
         * @property {PIXI.accessibility.AccessibilityManager} accessibility Support tabbing interactive elements.
         * @property {PIXI.extract.CanvasExtract} extract Extract image data from renderer.
         * @property {PIXI.interaction.InteractionManager} interaction Handles mouse, touch and pointer events.
         * @property {PIXI.prepare.CanvasPrepare} prepare Pre-render display objects.
         */
        plugins: any;
        initPlugins(): void;
        destroyPlugins(): void;
        // plugintarget mixin end

        constructor(options?: RendererOptions);
        constructor(screenWidth?: number, screenHeight?: number, options?: RendererOptions);

        protected _activeBlendMode: number;
        rootContext: CanvasRenderingContext2D;
        rootResolution?: number;
        refresh: boolean;
        maskManager: CanvasMaskManager;
        smoothProperty: string;
        /**
         * Collection of methods for extracting data (image, pixels, etc.) from a display object or render texture
         */
        extract: extract.CanvasExtract;

        context: CanvasRenderingContext2D | null;

        render(
            displayObject: PIXI.DisplayObject,
            renderTexture?: PIXI.RenderTexture,
            clear?: boolean,
            transform?: PIXI.Matrix,
            skipUpdateTransform?: boolean,
        ): void;
        setBlendMode(blendMode: number): void;
        destroy(removeView?: boolean): void;
        clear(clearColor?: string): void;
        invalidateBlendMode(): void;

        on(event: "prerender" | "postrender", fn: () => void, context?: any): this;
        once(event: "prerender" | "postrender", fn: () => void, context?: any): this;
        removeListener(event: "prerender" | "postrender", fn?: () => void, context?: any): this;
        removeAllListeners(event?: "prerender" | "postrender"): this;
        off(event: "prerender" | "postrender", fn?: () => void, context?: any): this;
        addListener(event: "prerender" | "postrender", fn: () => void, context?: any): this;
    }
    /**
     * A set of functions used to handle masking.
     */
    class CanvasMaskManager {
        constructor(renderer: CanvasRenderer);

        pushMask(maskData: any): void;
        protected renderGraphicsShape(graphics: Graphics): void;
        popMask(renderer: WebGLRenderer | CanvasRenderer): void;
        destroy(): void;
    }
    /**
     * Creates a Canvas element of the given size.
     */
    class CanvasRenderTarget {
        constructor(width: number, height: number, resolution: number);

        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        resolution: number;

        width: number;
        height: number;

        clear(): void;
        resize(width: number, height: number): void;
        destroy(): void;
    }

    interface WebGLRendererOptions extends RendererOptions {}
    interface DefaultWebGLRendererPlugins {
        extract: extract.WebGLExtract;
        prepare: prepare.WebGLPrepare;
    }
    interface WebGLRendererPlugins extends DefaultWebGLRendererPlugins, RendererPlugins {}
    interface WebGLRendererOptions extends RendererOptions {}
    /**
     * The WebGLRenderer draws the scene and all its content onto a webGL enabled canvas. This renderer
     * should be used for browsers that support webGL. This Render works by automatically managing webGLBatchs.
     * So no need for Sprite Batches or Sprite Clouds.
     * Don"t forget to add the view to your DOM or you will not see anything :)
     */
    class WebGLRenderer extends SystemRenderer {
        // plugintarget mixin start
        static __plugins: {
            [pluginName: string]: { new (renderer: WebGLRenderer): any };
        };
        /**
         * Adds a plugin to the renderer.
         */
        static registerPlugin(pluginName: string, ctor: { new (renderer: WebGLRenderer): any }): void;
        /**
         * Collection of installed plugins. These are included by default in PIXI, but can be excluded
         * by creating a custom build. Consult the README for more information about creating custom
         * builds and excluding plugins.
         * @property {PIXI.accessibility.AccessibilityManager} accessibility Support tabbing interactive elements.
         * @property {PIXI.extract.WebGLExtract} extract Extract image data from renderer.
         * @property {PIXI.interaction.InteractionManager} interaction Handles mouse, touch and pointer events.
         * @property {PIXI.prepare.WebGLPrepare} prepare Pre-render display objects.
         */
        plugins: any;
        initPlugins(): void;
        destroyPlugins(): void;
        // plugintarget mixin end

        constructor(options?: WebGLRendererOptions);
        constructor(screenWidth?: number, screenHeight?: number, options?: WebGLRendererOptions);

        protected _contextOptions: {
            alpha: boolean;
            antiAlias?: boolean;
            premultipliedAlpha: boolean;
            stencil: boolean;
            preseveDrawingBuffer?: boolean;
        };
        protected _backgroundColorRgba: number[];
        maskManager: MaskManager;
        stencilManager?: StencilManager;
        emptyRenderer: ObjectRenderer;
        currentRenderer: ObjectRenderer;
        gl: WebGLRenderingContext;
        CONTEXT_UID: number;
        state?: WebGLState;
        renderingToScreen: boolean;
        boundTextures: BaseTexture[];
        emptyTextures: BaseTexture[];
        protected _unknownBoundTextures: BaseTexture[];
        filterManager: FilterManager;
        textureManager?: TextureManager;
        textureGC?: TextureGarbageCollector;
        /**
         * Collection of methods for extracting data (image, pixels, etc.) from a display object or render texture
         */
        extract: extract.WebGLExtract;
        protected drawModes: any;
        protected _activeShader: Shader;
        _activeRenderTarget: RenderTarget;
        protected _initContext(): void;

        render(
            displayObject: PIXI.DisplayObject,
            renderTexture?: PIXI.RenderTexture,
            clear?: boolean,
            transform?: PIXI.Matrix,
            skipUpdateTransform?: boolean,
        ): void;
        setObjectRenderer(objectRenderer: ObjectRenderer): void;
        flush(): void;
        setBlendMode(blendMode: number): void;
        clear(clearColor?: number): void;
        setTransform(matrix: Matrix): void;
        clearRenderTexture(renderTexture: RenderTexture, clearColor?: number): WebGLRenderer;
        bindRenderTexture(renderTexture: RenderTexture, transform: Matrix): WebGLRenderer;
        bindRenderTarget(renderTarget: RenderTarget): WebGLRenderer;
        bindShader(shader: Shader, autoProject?: boolean): WebGLRenderer;
        bindTexture(texture: Texture | BaseTexture, location?: number, forceLocation?: boolean): number;
        unbindTexture(texture: Texture | BaseTexture): WebGLRenderer | undefined;
        createVao(): glCore.VertexArrayObject;
        bindVao(vao: glCore.VertexArrayObject): WebGLRenderer;
        reset(): WebGLRenderer;
        handleContextLost: (event: WebGLContextEvent) => void;
        handleContextRestored: () => void;
        destroy(removeView?: boolean): void;

        on(event: "prerender" | "postrender", fn: () => void, context?: any): this;
        on(event: "context", fn: (gl: WebGLRenderingContext) => void, context?: any): this;
        once(event: "prerender" | "postrender", fn: () => void, context?: any): this;
        once(event: "context", fn: (gl: WebGLRenderingContext) => void, context?: any): this;
        removeListener(event: "prerender" | "postrender", fn?: () => void, context?: any): this;
        removeListener(event: "context", fn?: (gl: WebGLRenderingContext) => void, context?: any): this;
        removeAllListeners(event?: "prerender" | "postrender" | "context"): this;
        off(event: "prerender" | "postrender", fn?: () => void, context?: any): this;
        off(event: "context", fn?: (gl: WebGLRenderingContext) => void, context?: any): this;
        addListener(event: "prerender" | "postrender", fn: () => void, context?: any): this;
        addListener(event: "context", fn: (gl: WebGLRenderingContext) => void, context?: any): this;
    }
    /**
     * A WebGL state machines
     */
    class WebGLState {
        constructor(gl: WebGLRenderingContext);

        activeState: number[];
        defaultState: number[];
        stackIndex: number;
        stack: number[];
        gl: WebGLRenderingContext;
        maxAttribs: number;
        attribState: glCore.AttribState;
        nativeVaoExtension: any;

        push(): void;
        pop(): void;
        setState(state: number[]): void;
        setBlend(value: number): void;
        setBlendMode(value: number): void;
        setDepthTest(value: number): void;
        setCullFace(value: number): void;
        setFrontFace(value: number): void;
        resetAttributes(): void;
        resetToDefault(): void;
    }
    /**
     * Helper class to create a webGL Texture
     */
    class TextureManager {
        constructor(renderer: WebGLRenderer);

        renderer: WebGLRenderer;
        gl: WebGLRenderingContext;
        protected _managedTextures: Texture[];

        bindTexture(): void;
        getTexture(): WebGLTexture;
        updateTexture(texture: BaseTexture | Texture): WebGLTexture;
        destroyTexture(texture: BaseTexture, _skipRemove?: boolean): void;
        removeAll(): void;
        destroy(): void;
    }
    /**
     * TextureGarbageCollector. This class manages the GPU and ensures that it does not get clogged
     * up with textures that are no longer being used.
     */
    class TextureGarbageCollector {
        constructor(renderer: WebGLRenderer);

        renderer: WebGLRenderer;
        count: number;
        checkCount: number;
        maxIdle: number;
        checkCountMax: number;
        mode: number;

        update(): void;
        run(): void;
        unload(displayObject: DisplayObject): void;
    }
    /**
     * Base for a common object renderer that can be used as a system renderer plugin.
     */
    abstract class ObjectRenderer extends WebGLManager {
        constructor(renderer: WebGLRenderer);
        /**
         * Starts the renderer and sets the shader
         */
        start(): void;
        stop(): void;
        /**
         * Stub method for rendering content and emptying the current batch.
         */
        flush(): void;

        render(...args: any[]): void;
    }
    /**
     * Helper class to create a quad
     */
    class Quad {
        constructor(gl: WebGLRenderingContext);

        gl: WebGLRenderingContext;
        vertices: number[];
        uvs: number[];
        interleaved: number[];
        indices: number[];
        vertexBuffer: WebGLBuffer;
        vao: glCore.VertexArrayObject;
        initVao(shader: glCore.GLShader): void;
        map(targetTextureFrame: Rectangle, destinationFrame: Rectangle): Quad;
        upload(): Quad;
        destroy(): void;
    }
    interface FilterDataStackItem {
        renderTarget: RenderTarget;
        filter: any[];
        bounds: Rectangle;
    }
    class RenderTarget {
        protected filterPoolKey: string;

        constructor(
            gl: WebGLRenderingContext,
            width: number,
            height: number,
            scaleMode: number,
            resolution: number,
            root?: boolean,
        );

        gl: WebGLRenderingContext;
        frameBuffer: glCore.GLFramebuffer;
        texture: Texture;
        clearColor: number[];
        size: Rectangle;
        resolution: number;
        projectionMatrix: Matrix;
        transform: Matrix;
        frame: Rectangle;
        defaultFrame: Rectangle;
        destinationFrame: Rectangle;
        sourceFrame?: Rectangle;
        stencilBuffer: glCore.GLFramebuffer;
        stencilMaskStack: Graphics[];
        filterData: {
            index: number;
            stack: FilterDataStackItem[];
        };
        scaleMode: number;
        root: boolean;

        clear(clearColor?: number[]): void;
        attachStencilBuffer(): void;
        setFrame(destinationFrame: Rectangle, sourceFrame: Rectangle): void;
        activate(): void;
        calculateProjection(destinationFrame: Rectangle, sourceFrame: Rectangle): void;
        resize(width: number, height: number): void;
        destroy(): void;
    }

    class BlendModeManager extends WebGLManager {
        constructor(renderer: WebGLRenderer);

        currentBlendMode: number;

        setBlendMode(blendMode: number): boolean;
    }
    interface FilterManagerStackItem {
        renderTarget: RenderTarget;
        sourceFrame: Rectangle;
        destinationFrame: Rectangle;
        filters: Array<Filter<any>>;
        target: any;
        resolution: number;
    }
    class FilterManager extends WebGLManager {
        constructor(renderer: WebGLRenderer);
        protected _screenWidth: number;
        protected _screenHeight: number;
        gl: WebGLRenderingContext;
        quad: Quad;
        stack: FilterManagerStackItem[];
        stackIndex: number;
        shaderCache: any;
        filterData: any;

        onPrerender(): void;
        pushFilter(target: RenderTarget, filters: Array<Filter<any>>): void;
        popFilter(): void;
        applyFilter(
            shader: glCore.GLShader | Filter<any>,
            inputTarget: RenderTarget,
            outputTarget: RenderTarget,
            clear?: boolean,
        ): void;
        syncUniforms(shader: glCore.GLShader, filter: Filter<any>): void;
        getRenderTarget(clear?: boolean, resolution?: number): RenderTarget;
        returnRenderTarget(renderTarget: RenderTarget): RenderTarget;
        calculateScreenSpaceMatrix(outputMatrix: Matrix): Matrix;
        calculateNormalizedScreenSpaceMatrix(outputMatrix: Matrix): Matrix;
        calculateSpriteMatrix(outputMatrix: Matrix, sprite: Sprite): Matrix;
        destroy(contextLost?: boolean): void;
        emptyPool(): void;
        getPotRenderTarget(
            gl: WebGLRenderingContext,
            minWidth: number,
            minHeight: number,
            resolution: number,
        ): RenderTarget;
        freePotRenderTarget(renderTarget: RenderTarget): void;
    }
    class StencilMaskStack {
        stencilStack: any[];
        reverse: boolean;
        count: number;
    }
    class MaskManager extends WebGLManager {
        scissor: boolean;
        scissorData: any;
        scissorRenderTarget: RenderTarget;
        enableScissor: boolean;
        alphaMaskPool: number[];
        alphaMaskIndex: number;
        pushMask(target: RenderTarget, maskData: Sprite | Graphics): void;
        popMask(target: RenderTarget, maskData: Sprite | Graphics): void;
        pushSpriteMask(target: RenderTarget, maskData: Sprite | Graphics): void;
        popSpriteMask(): void;
        pushStencilMask(maskData: Sprite | Graphics): void;
        popStencilMask(): void;
        pushScissorMask(target: RenderTarget, maskData: Sprite | Graphics): void;
        popScissorMask(): void;
    }
    class StencilManager extends WebGLManager {
        constructor(renderer: WebGLRenderer);

        stencilMaskStack: Graphics[];

        protected _useCurrent(): void;
        protected _getBitwiseMask(): number;

        setMaskStack(stencilMasStack: Graphics[]): void;
        pushStencil(graphics: Graphics): void;
        popStencil(): void;
        destroy(): void;
    }
    class WebGLManager {
        constructor(renderer: WebGLRenderer);

        renderer: WebGLRenderer;
        onContextChange(): void;
        destroy(): void;
    }
    interface UniformData<V> {
        type: string;
        value: V;

        // name is set by pixi if uniforms were automatically extracted from shader code, but not used anywhere
        name?: string;
    }
    type UniformDataMap<U> = { [K in keyof U]: UniformData<U[K]> };
    class Filter<U extends Object> {
        constructor(vertexSrc?: string, fragmentSrc?: string, uniformData?: UniformDataMap<U>);

        protected _blendMode: number;
        vertexSrc?: string;
        fragmentSrc: string;
        blendMode: number;
        protected uniformData: UniformDataMap<U>;
        uniforms: U;
        glShaders: any;
        glShaderKey?: number;
        padding: number;
        resolution: number;
        enabled: boolean;
        autoFit: boolean;
        apply(
            filterManager: FilterManager,
            input: RenderTarget,
            output: RenderTarget,
            clear?: boolean,
            currentState?: any,
        ): void;

        static defaultVertexSrc: string;
        static defaultFragmentSrc: string;
    }
    interface SpriteMaskFilterUniforms {
        mask: Texture;
        otherMatrix: Matrix;
        alpha: number;
    }
    /**
     * The SpriteMaskFilter class
     */
    class SpriteMaskFilter extends Filter<SpriteMaskFilterUniforms> {
        constructor(sprite: Sprite);

        maskSprite: Sprite;
        maskMatrix: Matrix;
        apply(filterManager: FilterManager, input: RenderTarget, output: RenderTarget, clear?: boolean): void;
    }

    // sprites

    /**
     * The Sprite object is the base for all textured objects that are rendered to the screen
     *
     * A sprite can be created directly from an image like this:
     *
     * ```js
     * let sprite = new PIXI.Sprite.fromImage("assets/image.png");
     * ```
     *
     * The more efficient way to create sprites is using a {@link PIXI.Spritesheet}:
     *
     * ```js
     * PIXI.loader.add("assets/spritesheet.json").load(setup);
     *
     * function setup() {
     *   let sheet = PIXI.loader.resources["assets/spritesheet.json"].spritesheet;
     *   let sprite = new PIXI.Sprite(sheet.textures["image.png"]);
     *   ...
     * }
     * ```
     */
    class Sprite extends Container {
        constructor(texture?: Texture);

        protected _anchor: ObservablePoint;
        anchor: ObservablePoint;
        protected _texture: Texture;
        protected _transformTrimmedID: number;
        protected _textureTrimmedID: number;
        protected _width: number;
        protected _height: number;
        tint: number;
        protected _tint: number;
        protected _tintRGB: number;
        blendMode: number;
        pluginName: string;
        protected cachedTint: number;
        texture: Texture;
        protected textureDirty: boolean;
        protected _textureID: number;
        protected _transformID: number;
        protected vertexTrimmedData: Float32Array;
        vertexData: Float32Array;
        width: number;
        height: number;

        protected _onTextureUpdate(): void;
        /**
         * calculates worldTransform * vertices, store it in vertexData
         */
        calculateVertices(): void;
        protected _calculateBounds(): void;
        /**
         * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
         * This is used to ensure that the true width and height of a trimmed texture is respected
         */
        protected calculateTrimmedVertices(): void;
        protected onAnchorUpdate(): void;
        protected _renderWebGL(renderer: WebGLRenderer): void;
        protected _renderCanvas(renderer: CanvasRenderer): void;
        /**
         * Gets the local bounds of the sprite object.
         *
         * @param rect - The output rectangle.
         * @return The bounds.
         */
        getLocalBounds(): Rectangle;
        /**
         * Tests if a point is inside this sprite
         *
         * @param point - the point to test
         * @return the result of the test
         */
        containsPoint(point: Point): boolean;
        /**
         * Destroys this sprite and optionally its texture and children
         *
         * @param [options] - Options parameter. A boolean will act as if all options have been set to that value
         */
        destroy(options?: DestroyOptions | boolean): void;

        static from(
            source: number | string | BaseTexture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
        ): Sprite;
        static fromFrame(frameId: string): Sprite;
        static fromImage(imageId: string, crossorigin?: boolean, scaleMode?: number): Sprite;
    }
    class BatchBuffer {
        vertices: ArrayBuffer;
        float32View: number[];
        uint32View: number[];

        destroy(): void;
    }
    class SpriteRenderer extends ObjectRenderer {
        constructor(renderer: PIXI.WebGLRenderer);

        vertSize: number;
        vertByteSize: number;
        size: number;
        buffers: BatchBuffer[];
        indices: number[];
        shaders: Shader[];
        currentIndex: number;
        tick: number;
        groups: any[];
        sprites: Sprite[];
        vertexBuffers: number[];
        vaos: glCore.VertexArrayObject[];
        vaoMax: number;
        vertexCount: number;

        protected onContextChanged: () => void;
        protected onPrerender: () => void;
        render(sprite: Sprite): void;
        flush(): void;
        start(): void;
        stop(): void;
        destroy(): void;
    }
    class CanvasSpriteRenderer extends ObjectRenderer {
        constructor(renderer: WebGLRenderer);

        render(sprite: Sprite): void;
        destroy(): void;
    }
    namespace CanvasTinter {
        function getTintedTexture(sprite: Sprite, color: number): HTMLCanvasElement;
        function tintWithMultiply(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        function tintWithOverlay(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        function tintWithPerPixel(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        function roundColor(color: number): number;

        let cacheStepsPerColorChannel: number;
        let convertTintToImage: boolean;
        let canUseMultiply: boolean;
        let tintMethod: number;
    }

    // text
    interface TextStyleOptions {
        align?: string;
        breakWords?: boolean;
        dropShadow?: boolean;
        dropShadowAlpha?: number;
        dropShadowAngle?: number;
        dropShadowBlur?: number;
        dropShadowColor?: string | number;
        dropShadowDistance?: number;
        fill?: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        fillGradientType?: number;
        fillGradientStops?: number[];
        fontFamily?: string | string[];
        fontSize?: number | string;
        fontStyle?: string;
        fontVariant?: string;
        fontWeight?: string;
        letterSpacing?: number;
        lineHeight?: number;
        lineJoin?: string;
        miterLimit?: number;
        padding?: number;
        stroke?: string | number;
        strokeThickness?: number;
        textBaseline?: string;
        trim?: boolean;
        whiteSpace?: string;
        wordWrap?: boolean;
        wordWrapWidth?: number;
        leading?: number;
    }

    class TextStyle implements TextStyleOptions {
        constructor(style: TextStyleOptions);

        styleID: number;

        clone(): TextStyle;
        reset(): void;

        protected _align: string;
        align: string;
        protected _breakWords: boolean;
        breakWords: boolean;
        protected _dropShadow: boolean;
        dropShadow: boolean;
        protected _dropShadowAlpha: number;
        dropShadowAlpha: number;
        protected _dropShadowAngle: number;
        dropShadowAngle: number;
        protected _dropShadowBlur: number;
        dropShadowBlur: number;
        protected _dropShadowColor: string | number;
        dropShadowColor: string | number;
        protected _dropShadowDistance: number;
        dropShadowDistance: number;
        protected _fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        protected _fillGradientType: number;
        fillGradientType: number;
        protected _fillGradientStops: number[];
        fillGradientStops: number[];
        protected _fontFamily: string | string[];
        fontFamily: string | string[];
        protected _fontSize: number | string;
        fontSize: number | string;
        protected _fontStyle: string;
        fontStyle: string;
        protected _fontVariant: string;
        fontVariant: string;
        protected _fontWeight: string;
        fontWeight: string;
        protected _leading: number;
        leading: number;
        protected _letterSpacing: number;
        letterSpacing: number;
        protected _lineHeight: number;
        lineHeight: number;
        protected _lineJoin: string;
        lineJoin: string;
        protected _miterLimit: number;
        miterLimit: number;
        protected _padding: number;
        padding: number;
        protected _stroke: string | number;
        stroke: string | number;
        protected _strokeThickness: number;
        strokeThickness: number;
        protected _textBaseline: string;
        textBaseline: string;
        protected _trim: boolean;
        trim: boolean;
        protected _whiteSpace: string;
        whiteSpace: string;
        protected _wordWrap: boolean;
        wordWrap: boolean;
        protected _wordWrapWidth: number;
        wordWrapWidth: number;
        toFontString(): string;
    }
    class TextMetrics {
        static METRICS_STRING: string;
        static BASELINE_SYMBOL: string;
        static BASELINE_MULTIPLIER: number;

        static _canvas: HTMLCanvasElement;
        static _context: CanvasRenderingContext2D;
        static _fonts: FontMetrics;
        static _newLines: number[];
        static _breakingSpaces: number[];

        text: string;
        style: TextStyle;
        width: number;
        height: number;
        lines: number[];
        lineWidths: number[];
        lineHeight: number;
        maxLineWidth: number;
        fontProperties: any;

        constructor(
            text: string,
            style: TextStyle,
            width: number,
            height: number,
            lines: number[],
            lineWidths: number[],
            lineHeight: number,
            maxLineWidth: number,
            fontProperties: any,
        );

        static measureText(text: string, style: TextStyle, wordWrap?: boolean, canvas?: HTMLCanvasElement): TextMetrics;
        static wordWrap(text: string, style: TextStyle, canvas?: HTMLCanvasElement): string;
        static wordWrap(text: string, style: TextStyle, canvas?: HTMLCanvasElement): string;
        static addLine(line: string, newLine?: boolean): string;
        static getFromCache(key: string, letterSpacing: number, cache: any, context: CanvasRenderingContext2D): number;
        static collapseSpaces(whiteSpace?: string): boolean;
        static collapseNewlines(whiteSpace?: string): boolean;
        static trimRight(text?: string): string;
        static isNewline(char?: string): boolean;
        static isBreakingSpace(char?: string): boolean;
        static tokenize(text?: string): string[];
        static canBreakWords(token?: string, breakWords?: boolean): boolean;
        static canBreakChars(
            char: string,
            nextChar: string,
            token: string,
            index: number,
            breakWords?: boolean,
        ): boolean;
        static measureFont(font: string): FontMetrics;
        static clearMetrics(font: string): void;
    }
    interface FontMetrics {
        ascent: number;
        descent: number;
        fontSize: number;
    }
    class Text extends Sprite {
        constructor(text?: string, style?: TextStyleOptions, canvas?: HTMLCanvasElement);

        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        resolution: number;
        protected _text: string;
        protected _style: TextStyle;
        protected _styleListener: (...args: any[]) => any;
        protected _font: string;
        protected localStyleID: number;

        width: number;
        height: number;
        style: TextStyle;
        text: string;

        protected updateText(respectDirty?: boolean): void;
        protected drawLetterSpacing(text: string, x: number, y: number, isStroke?: boolean): void;
        protected updateTexture(): void;
        renderWebGL(renderer: WebGLRenderer): void;
        protected _renderCanvas(renderer: CanvasRenderer): void;
        getLocalBounds(rect?: Rectangle): Rectangle;
        protected _calculateBounds(): void;
        protected _onStyleChange: () => void;
        protected _generateFillStyle(style: TextStyle, lines: string[]): string | number | CanvasGradient;
        destroy(options?: DestroyOptions | boolean): void;
        dirty: boolean;
    }
    // textures
    class BaseRenderTexture extends BaseTexture {
        constructor(width?: number, height?: number, scaleMode?: number, resolution?: number);

        height: number;
        width: number;
        realHeight: number;
        realWidth: number;
        resolution: number;
        scaleMode: number;
        hasLoaded: boolean;
        protected _glRenderTargets: { [n: number]: WebGLTexture };
        protected _canvasRenderTarget: { [n: number]: WebGLTexture };
        valid: boolean;

        resize(width: number, height: number): void;
        destroy(): void;

        on(event: "update", fn: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
        once(event: "update", fn: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
        removeListener(event: "update", fn?: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
        removeAllListeners(event?: "update"): this;
        off(event: "update", fn?: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
        addListener(event: "update", fn: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
    }
    class BaseTexture extends utils.EventEmitter {
        static from(
            source: string | HTMLImageElement | HTMLCanvasElement,
            scaleMode?: number,
            sourceScale?: number,
        ): BaseTexture;

        constructor(
            source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
            scaleMode?: number,
            resolution?: number,
        );

        protected uuid?: number;
        protected touched: number;
        resolution: number;
        width: number;
        height: number;
        realWidth: number;
        realHeight: number;
        scaleMode: number;
        hasLoaded: boolean;
        isLoading: boolean;
        wrapMode: number;
        source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | null;
        origSource: HTMLImageElement | null;
        imageType: string | null;
        sourceScale: number;
        premultipliedAlpha: boolean;
        imageUrl: string | null;
        protected isPowerOfTwo: boolean;
        mipmap: boolean;
        wrap?: boolean;
        protected _glTextures: any;
        protected _enabled: number;
        protected _id?: number;
        protected _virtualBoundId: number;
        protected readonly _destroyed: boolean;
        textureCacheIds: string[];

        update(): void;
        protected _updateDimensions(): void;
        protected _updateImageType(): void;
        protected _loadSvgSource(): void;
        protected _loadSvgSourceUsingDataUri(dataUri: string): void;
        protected _loadSvgSourceUsingXhr(): void;
        protected _loadSvgSourceUsingString(svgString: string): void;
        protected loadSource(source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): void;
        protected _sourceLoaded(): void;
        destroy(): void;
        dispose(): void;
        updateSourceImage(newSrc: string): void;

        static fromImage(
            imageUrl: string,
            crossorigin?: boolean,
            scaleMode?: number,
            sourceScale?: number,
        ): BaseTexture;
        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: number, origin?: string): BaseTexture;
        static addToCache(baseTexture: BaseTexture, id: string): void;
        static removeFromCache(baseTexture: string | BaseTexture): BaseTexture;

        on(
            event: "update" | "loaded" | "error" | "dispose",
            fn: (baseTexture: BaseTexture) => void,
            context?: any,
        ): this;
        once(
            event: "update" | "loaded" | "error" | "dispose",
            fn: (baseTexture: BaseTexture) => void,
            context?: any,
        ): this;
        removeListener(
            event: "update" | "loaded" | "error" | "dispose",
            fn?: (baseTexture: BaseTexture) => void,
            context?: any,
        ): this;
        removeAllListeners(event?: "update" | "loaded" | "error" | "dispose"): this;
        off(
            event: "update" | "loaded" | "error" | "dispose",
            fn?: (baseTexture: BaseTexture) => void,
            context?: any,
        ): this;
        addListener(
            event: "update" | "loaded" | "error" | "dispose",
            fn: (baseTexture: BaseTexture) => void,
            context?: any,
        ): this;
    }
    class RenderTexture extends Texture {
        constructor(baseRenderTexture: BaseRenderTexture, frame?: Rectangle);

        protected legacyRenderer: any;
        valid: boolean;

        resize(width: number, height: number, doNotResizeBaseTexture?: boolean): void;

        static create(width?: number, height?: number, scaleMode?: number, resolution?: number): RenderTexture;
    }
    class Texture extends utils.EventEmitter {
        constructor(
            baseTexture: BaseTexture,
            frame?: Rectangle,
            orig?: Rectangle,
            trim?: Rectangle,
            rotate?: number,
            anchor?: Point,
        );

        noFrame: boolean;
        baseTexture: BaseTexture;
        protected _frame: Rectangle;
        trim?: Rectangle;
        valid: boolean;
        requiresUpdate: boolean;
        protected _uvs: TextureUvs;
        orig: Rectangle;
        defaultAnchor: Point;
        protected _updateID: number;
        transform: TextureMatrix;
        textureCacheIds: string[];

        update(): void;
        protected onBaseTextureLoaded(baseTexture: BaseTexture): void;
        protected onBaseTextureUpdated(baseTexture: BaseTexture): void;
        destroy(destroyBase?: boolean): void;
        clone(): Texture;
        _updateUvs(): void;

        static fromImage(imageUrl: string, crossOrigin?: boolean, scaleMode?: number, sourceScale?: number): Texture;
        static fromFrame(frameId: string): Texture;
        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: number, origin?: string): Texture;
        static fromVideo(
            video: HTMLVideoElement | string,
            scaleMode?: number,
            crossorigin?: boolean,
            autoPlay?: boolean,
        ): Texture;
        static fromVideoUrl(videoUrl: string, scaleMode?: number, crossorigin?: boolean, autoPlay?: boolean): Texture;
        static from(
            source: number | string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | BaseTexture,
        ): Texture;
        static fromLoader(source: HTMLImageElement | HTMLCanvasElement, imageUrl: string, name?: string): Texture;
        static addToCache(texture: Texture, id: string): void;
        static removeFromCache(texture: string | Texture): Texture;

        // depreciation
        static addTextureToCache(texture: Texture, id: string): void;
        static removeTextureFromCache(id: string): Texture;

        frame: Rectangle;
        protected _rotate: boolean | 0;
        rotate: number;
        width: number;
        height: number;

        static EMPTY: Texture;
        static WHITE: Texture;

        on(event: "update", fn: (texture: Texture) => void, context?: any): this;
        once(event: "update", fn: (texture: Texture) => void, context?: any): this;
        removeListener(event: "update", fn?: (texture: Texture) => void, context?: any): this;
        removeAllListeners(event?: "update"): this;
        off(event: "update", fn?: (texture: Texture) => void, context?: any): this;
        addListener(event: "update", fn: (texture: Texture) => void, context?: any): this;
    }
    class TextureMatrix {
        constructor(texture: Texture, clampMargin?: number);

        protected _texture: Texture;
        mapCoord: Matrix;
        uClampFrame: Float32Array;
        uClampOffset: Float32Array;
        protected _lastTextureID: number;

        clampOffset: number;
        clampMargin: number;

        texture: Texture;

        update(forceUpdate?: boolean): boolean;
        multiplyUvs(uvs: Float32Array, out?: Float32Array): Float32Array;
    }
    class TextureUvs {
        x0: number;
        y0: number;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        x3: number;
        y3: number;

        uvsUint32: Uint32Array;

        protected set(frame: Rectangle, baseFrame: Rectangle, rotate: number): void;
    }

    class Spritesheet {
        static BATCH_SIZE: number;

        constructor(baseTexture: BaseTexture, data: any, resolutionFilename?: string);

        baseTexture: BaseTexture;
        animations: { [key: string]: Texture[] };
        textures: { [key: string]: Texture };
        data: any;
        resolution: number;
        protected _frames: any;
        protected _frameKeys: string;
        protected _batchIndex: number;
        protected _callback: (spriteSheet: this, textures: { [key: string]: Texture }) => void;
        protected _updateResolution(resolutionFilename: string): number;
        parse(callback: (spriteSheet: this, textures: { [key: string]: Texture }) => void): void;
        protected _processFrames(initialFrameIndex: number): void;
        protected _parseComplete(): void;
        protected _processAnimations(): void;
        protected _nextBatch(): void;
        destroy(destroyBase?: boolean): void;
    }

    class VideoBaseTexture extends BaseTexture {
        constructor(source: HTMLVideoElement, scaleMode?: number, autoPlay?: boolean);

        autoUpdate: boolean;
        autoPlay: boolean;
        protected _isAutoUpdating: boolean;

        update(): void;
        protected _onCanPlay(): void;
        protected _onPlayStart(): void;
        protected _onPlayStop(): void;
        destroy(): void;
        protected _isSourcePlaying(): boolean;
        protected _isSourceReady(): boolean;

        static fromVideo(video: HTMLVideoElement, scaleMode?: number, autoPlay?: boolean): VideoBaseTexture;
        static fromUrl(
            videoSrc: string | any | string[] | any[],
            crossorigin?: boolean,
            autoPlay?: boolean,
        ): VideoBaseTexture;
        static fromUrls(videoSrc: string | any | string[] | any[]): VideoBaseTexture;

        source: HTMLVideoElement;
        protected loadSource(source: HTMLVideoElement): void;
    }

    // ticker

    namespace ticker {
        const shared: Ticker;

        class TickerListener {
            constructor(fn: (deltaTime: number) => void, context?: any, priority?: number, once?: boolean);
            fn: (deltaTime: number) => void;
            context: any;
            priority: number;
            once: boolean;
            next: TickerListener;
            previous: TickerListener;
            protected _destroyed: boolean;
            match(fn: (deltaTime: number) => void, context?: any): boolean;
            emit(deltaTime: number): TickerListener;
            connect(previous: TickerListener): void;
            destroy(hard?: boolean): void;
        }
        class Ticker {
            protected _tick: (time: number) => void;
            protected _head: TickerListener;
            protected _requestId: number | null;
            protected _maxElapsedMS: number;

            autoStart: boolean;
            deltaTime: number;
            elapsedMS: number;
            lastTime: number;
            speed: number;
            started: boolean;

            protected _requestIfNeeded(): void;
            protected _cancelIfNeeded(): void;
            protected _startIfPossible(): void;

            add(fn: (deltaTime: number) => void, context?: any, priority?: number): Ticker;
            addOnce(fn: (deltaTime: number) => void, context?: any, priority?: number): Ticker;
            remove(fn: (...args: any[]) => any, context?: any, priority?: number): Ticker;
            protected _addListener(listener: TickerListener): Ticker;
            readonly FPS: number;
            minFPS: number;

            start(): void;
            stop(): void;
            destroy(): void;
            update(currentTime?: number): void;
        }
    }

    // shader

    /**
     * Wrapper class, webGL Shader for Pixi.
     * Adds precision string if vertexSrc or fragmentSrc have no mention of it.
     */
    class Shader extends glCore.GLShader {
        constructor(
            gl: WebGLRenderingContext,
            vertexSrc: string | string[],
            fragmentSrc: string | string[],
            attributeLocations?: { [key: string]: number },
            precision?: string,
        );
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////EXTRACT///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    namespace extract {
        class CanvasExtract {
            protected renderer: CanvasRenderer;

            constructor(renderer: CanvasRenderer);

            image(target?: DisplayObject | RenderTexture): HTMLImageElement;
            base64(target?: DisplayObject | RenderTexture): string;
            canvas(target?: DisplayObject | RenderTexture): HTMLCanvasElement;
            pixels(renderTexture?: DisplayObject | RenderTexture): Uint8ClampedArray;

            destroy(): void;
        }
        class WebGLExtract {
            protected renderer: WebGLRenderer;

            constructor(renderer: WebGLRenderer);

            image(target?: DisplayObject | RenderTexture): HTMLImageElement;
            base64(target?: DisplayObject | RenderTexture): string;
            canvas(target?: DisplayObject | RenderTexture): HTMLCanvasElement;
            pixels(renderTexture?: DisplayObject | RenderTexture): Uint8Array;

            destroy(): void;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////EXTRAS////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    namespace extras {
        interface BitmapTextStyle {
            font?:
                | string
                | {
                      name?: string;
                      size?: number;
                  };
            align?: string;
            tint?: number;
        }
        class BitmapText extends Container {
            static registerFont(xml: XMLDocument, textures: Texture | Texture[] | { [key: string]: Texture }): any;

            constructor(text: string, style?: BitmapTextStyle);

            letterSpacing: number;
            protected _letterSpacing: number;
            protected _textWidth: number;
            protected _textHeight: number;
            textWidth: number;
            textHeight: number;
            protected _glyphs: Sprite[];
            protected _font:
                | string
                | {
                      name?: string;
                      size?: number;
                  };
            font:
                | string
                | {
                      name?: string;
                      size?: number;
                  };
            protected _text: string;
            protected _maxWidth: number;
            maxWidth: number;
            protected _maxLineHeight: number;
            maxLineHeight: number;
            protected _anchor: ObservablePoint;
            dirty: boolean;
            tint: number;
            align: string;
            text: string;
            anchor: PIXI.Point | number;

            protected updateText(): void;
            updateTransform(): void;
            getLocalBounds(): Rectangle;
            protected validate(): void;

            static fonts: any;
        }
        interface AnimatedSpriteTextureTimeObject {
            texture: Texture;
            time?: number;
        }
        class AnimatedSprite extends Sprite {
            constructor(textures: Texture[] | AnimatedSpriteTextureTimeObject[], autoUpdate?: boolean);

            protected _autoUpdate: boolean;
            protected _textures: Texture[];
            protected _durations: number[];
            textures: Texture[] | AnimatedSpriteTextureTimeObject[];
            animationSpeed: number;
            loop: boolean;
            updateAnchor: boolean;
            onComplete: () => void;
            onFrameChange: (currentFrame: number) => void;
            onLoop: () => void;
            protected _currentTime: number;
            playing: boolean;
            totalFrames: number;
            currentFrame: number;
            stop(): void;
            play(): void;
            gotoAndStop(frameNumber: number): void;
            gotoAndPlay(frameNumber: number): void;
            protected update(deltaTime: number): void;
            destroy(options?: DestroyOptions | boolean): void;

            static fromFrames(frame: string[]): AnimatedSprite;
            static fromImages(images: string[]): AnimatedSprite;
        }
        class TextureMatrix {
            constructor(texture: Texture, clampMargin?: number);

            protected _texture: Texture;
            mapCoord: Matrix;
            uClampFrame: Float32Array;
            uClampOffset: Float32Array;
            protected _lastTextureID: number;

            clampOffset: number;
            clampMargin: number;

            texture: Texture;

            update(forceUpdate?: boolean): boolean;
            multiplyUvs(uvs: Float32Array, out?: Float32Array): Float32Array;
        }
        class TilingSprite extends Sprite {
            constructor(texture: Texture, width?: number, height?: number);

            tileTransform: TransformStatic;
            protected _width: number;
            protected _height: number;
            protected _canvasPattern: CanvasPattern;
            uvTransform: TextureMatrix;
            uvRespectAnchor: boolean;

            clampMargin: number;
            tileScale: Point | ObservablePoint;
            tilePosition: Point | ObservablePoint;

            multiplyUvs(uvs: Float32Array, out: Float32Array): Float32Array;
            protected _onTextureUpdate(): void;
            protected _renderWebGL(renderer: WebGLRenderer): void;
            protected _renderCanvas(renderer: CanvasRenderer): void;
            protected _calculateBounds(): void;
            getLocalBounds(rect?: Rectangle): Rectangle;
            containsPoint(point: Point): boolean;
            destroy(options?: DestroyOptions | boolean): void;

            static from(
                source: number | string | BaseTexture | HTMLCanvasElement | HTMLVideoElement,
                width?: number,
                height?: number,
            ): TilingSprite;
            static fromFrame(frameId: string, width?: number, height?: number): TilingSprite;
            // if you remove the next line, the class will break. https://github.com/pixijs/pixi-typescript/issues/96
            static fromImage(imageId: string, crossorigin?: boolean, scaleMode?: number): Sprite;
            static fromImage(
                imageId: string,
                width?: number,
                height?: number,
                crossorigin?: boolean,
                scaleMode?: number,
            ): TilingSprite;

            width: number;
            height: number;
        }
        class TilingSpriteRenderer extends ObjectRenderer {
            constructor(renderer: WebGLRenderer);

            render(ts: TilingSprite): void;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////FILTERS///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    namespace filters {
        class FXAAFilter extends Filter<{}> {}
        class BlurFilter extends Filter<{}> {
            constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);

            blurXFilter: BlurXFilter;
            blurYFilter: BlurYFilter;
            resolution: number;
            padding: number;
            passes: number;
            blur: number;
            blurX: number;
            blurY: number;
            quality: number;
            blendMode: number;
        }
        interface BlurXFilterUniforms {
            strength: number;
        }
        class BlurXFilter extends Filter<BlurXFilterUniforms> {
            constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);

            protected _quality: number;

            quality: number;
            passes: number;
            resolution: number;
            strength: number;
            firstRun: boolean;
            blur: number;
        }
        interface BlurYFilterUniforms {
            strength: number;
        }
        class BlurYFilter extends Filter<BlurYFilterUniforms> {
            constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);

            protected _quality: number;

            quality: number;
            passes: number;
            resolution: number;
            strength: number;
            firstRun: boolean;
            blur: number;
        }
        interface ColorMatrixFilterUniforms {
            m: Matrix;
            uAlpha: number;
        }
        class ColorMatrixFilter extends Filter<ColorMatrixFilterUniforms> {
            constructor();

            protected _loadMatrix(matrix: number[], multiply?: boolean): void;
            protected _multiply(out: number[], a: number[], b: number[]): void;
            protected _colorMatrix(matrix: number[]): void;

            matrix: number[];
            alpha: number;

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
            colorTone(
                desaturation: number,
                toned: number,
                lightColor: string,
                darkColor: string,
                multiply?: boolean,
            ): void;
            night(intensity: number, multiply?: boolean): void;
            predator(amount: number, multiply?: boolean): void;
            lsd(multiply?: boolean): void;
            reset(): void;
        }
        interface DisplacementFilterUniforms {
            mapSampler: Texture;
            filterMatrix: Matrix;
            scale: Point;
        }
        class DisplacementFilter extends Filter<DisplacementFilterUniforms> {
            constructor(sprite: Sprite, scale?: number);

            scale: Point;
            map: Texture;
        }
        class AlphaFilter extends Filter<{}> {
            constructor(alpha?: number);

            alpha: number;
            glShaderKey: number;
        }
        interface NoiseFilterUniforms {
            uNoise: number;
            uSeed: number;
        }
        // pixi-filters.d.ts todo
        // https://github.com/pixijs/pixi-filters/
        class NoiseFilter extends Filter<NoiseFilterUniforms> {
            constructor(noise?: number, seed?: number);
            noise: number;
            seed: number;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////INTERACTION///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    namespace interaction {
        interface InteractiveTarget {
            /**
             * Enable interaction events for the DisplayObject. Touch, pointer and mouse
             * events will not be emitted unless `interactive` is set to `true`.
             *
             * @example
             * const sprite = new PIXI.Sprite(texture);
             * sprite.interactive = true;
             * sprite.on("tap", (event) => {
             *    //handle event
             * });
             */
            interactive: boolean;
            /**
             * Determines if the children to the displayObject can be clicked/touched
             * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
             */
            interactiveChildren: boolean;
            /**
             * Interaction shape. Children will be hit first, then this shape will be checked.
             * Setting this will cause this shape to be checked in hit tests rather than the displayObject"s bounds.
             * @example
             * const sprite = new PIXI.Sprite(texture);
             * sprite.interactive = true;
             * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
             */
            hitArea: PIXI.Rectangle | PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.RoundedRectangle | PIXI.HitArea;
            /**
             * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
             * Setting this changes the "cursor" property to `"pointer"`.
             *
             * @example
             * const sprite = new PIXI.Sprite(texture);
             * sprite.interactive = true;
             * sprite.buttonMode = true;
             */
            buttonMode: boolean;
            /**
             * This defines what cursor mode is used when the mouse cursor
             * is hovered over the displayObject.
             * @example
             * const sprite = new PIXI.Sprite(texture);
             * sprite.interactive = true;
             * sprite.cursor = "wait";
             * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
             */
            cursor: string;
            trackedPointers: { [key: number]: InteractionTrackingData };

            /** @deprecated */
            defaultCursor: string;
        }
        interface InteractionTrackingData {
            readonly pointerId: number;
            flags: number;
            none: number;
            over: boolean;
            rightDown: boolean;
            leftDown: boolean;
        }
        interface InteractionEvent {
            stopped: boolean;
            target: DisplayObject;
            currentTarget: DisplayObject;
            type: string;
            data: InteractionData;
            stopPropagation(): void;
            reset(): void;
        }
        class InteractionData {
            global: Point;
            target: DisplayObject;
            originalEvent: MouseEvent | TouchEvent | PointerEvent;
            identifier: number;
            isPrimary: boolean;
            button: number;
            buttons: number;
            width: number;
            height: number;
            tiltX: number;
            tiltY: number;
            pointerType: string;
            pressure: number;
            rotationAngle: number;
            twist: number;
            tangentialPressure: number;
            readonly pointerID: number;
            copyEvent(event: Touch | MouseEvent | PointerEvent): void;
            reset(): void;
            getLocalPosition(displayObject: DisplayObject, point?: Point, globalPos?: Point): Point;
        }
        type InteractionPointerEvents =
            | "pointerdown"
            | "pointercancel"
            | "pointerup"
            | "pointertap"
            | "pointerupoutside"
            | "pointermove"
            | "pointerover"
            | "pointerout";
        type InteractionTouchEvents =
            | "touchstart"
            | "touchcancel"
            | "touchend"
            | "touchendoutside"
            | "touchmove"
            | "tap";
        type InteractionMouseEvents =
            | "rightdown"
            | "mousedown"
            | "rightup"
            | "mouseup"
            | "rightclick"
            | "click"
            | "rightupoutside"
            | "mouseupoutside"
            | "mousemove"
            | "mouseover"
            | "mouseout";
        type InteractionPixiEvents = "added" | "removed";
        type InteractionEventTypes =
            | InteractionPointerEvents
            | InteractionTouchEvents
            | InteractionMouseEvents
            | InteractionPixiEvents;
        interface InteractionManagerOptions {
            autoPreventDefault?: boolean;
            interactionFrequency?: number;
        }
        class InteractionManager extends utils.EventEmitter {
            constructor(renderer: CanvasRenderer | WebGLRenderer | SystemRenderer, options?: InteractionManagerOptions);

            renderer: SystemRenderer;
            autoPreventDefault: boolean;
            interactionFrequency: number;
            mouse: InteractionData;
            activeInteractionData: { [key: number]: InteractionData };
            interactionDataPool: InteractionData[];
            eventData: InteractionEvent;
            protected interactionDOMElement: HTMLElement;
            moveWhenInside: boolean;
            eventsAdded: boolean;
            protected mouseOverRenderer: boolean;
            readonly supportsTouchEvents: boolean;
            readonly supportsPointerEvents: boolean;
            protected onPointerUp: (event: PointerEvent) => void;
            protected processPointerUp: (
                interactionEvent: InteractionEvent,
                displayObject: Container | PIXI.Sprite | PIXI.extras.TilingSprite,
                hit: boolean,
            ) => void;
            protected onPointerCancel: (event: PointerEvent) => void;
            protected processPointerCancel: (
                interactionEvent: InteractionEvent,
                displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite,
            ) => void;
            protected onPointerDown: (event: PointerEvent) => void;
            protected processPointerDown: (
                interactionEvent: InteractionEvent,
                displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite,
                hit: boolean,
            ) => void;
            protected onPointerMove: (event: PointerEvent) => void;
            protected processPointerMove: (
                interactionEvent: InteractionEvent,
                displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite,
                hit: boolean,
            ) => void;
            protected onPointerOut: (event: PointerEvent) => void;
            protected processPointerOverOut: (
                interactionEvent: InteractionEvent,
                displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite,
                hit: boolean,
            ) => void;
            protected onPointerOver: (event: PointerEvent) => void;
            cursorStyles: {
                default: string;
                pointer: string;
            };
            currentCursorMode: string;
            cursor: string;
            protected _tempPoint: Point;
            resolution: number;
            hitTest(globalPoint: Point, root?: Container): DisplayObject;
            setTargetElement(element: HTMLCanvasElement, resolution?: number): void;
            protected addEvents(): void;
            protected removeEvents(): void;
            update(deltaTime?: number): void;
            setCursorMode(mode: string): void;
            protected dispatchEvent(
                displayObject: Container | Sprite | extras.TilingSprite,
                eventString: string,
                eventData: any,
            ): void;
            mapPositionToPoint(point: Point, x: number, y: number): void;
            protected processInteractive(
                interactionEvent: InteractionEvent,
                displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite,
                func?: (...args: any[]) => any,
                hitTest?: boolean,
                interactive?: boolean,
            ): boolean;
            protected onPointerComplete(
                originalEvent: PointerEvent,
                cancelled: boolean,
                func: (...args: any[]) => any,
            ): void;
            protected getInteractionDataForPointerId(pointerId: number): InteractionData;
            protected releaseInteractionDataForPointerId(event: PointerEvent): void;
            protected configureInteractionEventForDOMEvent(
                interactionEvent: InteractionEvent,
                pointerEvent: PointerEvent,
                interactionData: InteractionData,
            ): InteractionEvent;
            protected normalizeToPointerData(event: TouchEvent | MouseEvent | PointerEvent): PointerEvent[];
            destroy(): void;

            // Deprecated
            defaultCursorStyle: string;
            currentCursorStyle: string;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////LOADER/////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    // pixi loader extends
    // https://github.com/englercj/resource-loader/
    // 2.2.3

    class MiniSignalBinding {
        detach(): boolean;
    }
    class MiniSignal<CbType extends (...args: any[]) => any> {
        constructor();
        handlers(exists: true): boolean;
        handlers(exists?: false): MiniSignalBinding[];
        has(node: MiniSignalBinding): boolean;
        add(fn: (...args: any[]) => any, thisArg?: any): any;
        add(fn: CbType, thisArg?: any): MiniSignalBinding;
        once(fn: (...args: any[]) => any, thisArg?: any): any;
        once(fn: CbType, thisArg?: any): MiniSignalBinding;
        detach(node: MiniSignalBinding): MiniSignal<CbType>;
        detachAll(): MiniSignal<CbType>;
        dispatch: CbType;
    }
    namespace loaders {
        /**
         * Options for a call to `.add()`.
         * @property [name] - The name of the resource to load, if not passed the url is used.
         * @property [key] - Alias for `name`.
         * @property [url] - The url for this resource, relative to the baseUrl of this loader.
         * @property [crossOrigin] - Is this request cross-origin? Default is to
         *      determine automatically.
         * @property [timeout=0] - A timeout in milliseconds for the load. If the load takes
         *      longer than this time it is cancelled and the load is considered a failure. If this value is
         *      set to `0` then there is no explicit timeout.
         * @property [loadType=Resource.LOAD_TYPE.XHR] - How should this resource
         *      be loaded?
         * @property [xhrType=Resource.XHR_RESPONSE_TYPE.DEFAULT] - How
         *      should the data being loaded be interpreted when using XHR?
         * @property [onComplete] - Callback to add an an onComplete signal istener.
         * @property [callback] - Alias for `onComplete`.
         * @property [metadata] - Extra configuration for middleware and the Resource object.
         */
        interface LoaderOptions {
            crossOrigin?: string | boolean;
            timeout?: number;
            loadType?: Resource.LOAD_TYPE;
            xhrType?: Resource.XHR_RESPONSE_TYPE;
            onComplete?: OnCompleteSignal;
            callback?: OnCompleteSignal;
            metadata?: IMetadata;
        }
        interface ResourceDictionary {
            [key: string]: PIXI.loaders.Resource;
        }
        function encodeBinary(input: string): string;
        type OnProgressSignal = (loader: Loader, resource: Resource) => void;
        type OnErrorSignal = (loader: Loader, resource: Resource) => void;
        type OnLoadSignal = (loader: Loader, resource: Resource) => void;
        type OnStartSignal = (loader: Loader) => void;
        type OnCompleteSignal = (loader: Loader) => void;

        // As of ResourceLoader v2 we no longer require EventEmitter
        // However, for depreciation reasons, it remains.
        class Loader extends utils.EventEmitter {
            // pixi overrides here
            static addPixiMiddleware(fn: (...args: any[]) => any): void;

            // below this line is the original non-pixi loader

            constructor(baseUrl?: string, concurrency?: number);
            static Resource: typeof Resource;
            static async: typeof Resource;
            static encodeBinary: typeof encodeBinary;
            static base64: typeof encodeBinary;
            baseUrl: string;
            progress: number;
            loading: boolean;
            defaultQueryString: string;
            resources: ResourceDictionary;

            onProgress: MiniSignal<OnProgressSignal>;
            onError: MiniSignal<OnErrorSignal>;
            onLoad: MiniSignal<OnLoadSignal>;
            onStart: MiniSignal<OnStartSignal>;
            onComplete: MiniSignal<OnCompleteSignal>;

            add(name: string, url: string, callback?: OnCompleteSignal): this;
            add(name: string, url: string, options?: LoaderOptions, callback?: OnCompleteSignal): this;
            add(url: string, callback?: OnCompleteSignal): this;
            add(url: string, options?: LoaderOptions, callback?: OnCompleteSignal): this;
            add(options: LoaderOptions, callback?: OnCompleteSignal): this;
            add(resources: Array<LoaderOptions | string>, callback?: OnCompleteSignal): this;
            add(...params: any[]): this;
            pre(fn: (...params: any[]) => any): this;
            use(fn: (...params: any[]) => any): this;
            reset(): this;
            load(cb?: (...params: any[]) => any): this;
            concurrency: number;
            static pre(fn: (...params: any[]) => any): Loader;
            static use(fn: (...params: any[]) => any): Loader;

            destroy(): void;

            // depreciation

            on(event: "complete", fn: (loader: loaders.Loader, object: any) => void, context?: any): this;
            on(
                event: "error",
                fn: (error: Error, loader: loaders.Loader, resource: Resource) => void,
                context?: any,
            ): this;
            on(
                event: "load" | "progress",
                fn: (loader: loaders.Loader, resource: Resource) => void,
                context?: any,
            ): this;
            on(event: "start", fn: (loader: loaders.Loader) => void, context?: any): this;

            once(event: "complete", fn: (loader: loaders.Loader, object: any) => void, context?: any): this;
            once(
                event: "error",
                fn: (error: Error, loader: loaders.Loader, resource: Resource) => void,
                context?: any,
            ): this;
            once(
                event: "load" | "progress",
                fn: (loader: loaders.Loader, resource: Resource) => void,
                context?: any,
            ): this;
            once(event: "start", fn: (loader: loaders.Loader) => void, context?: any): this;
            off(
                event: "complete" | "error" | "load" | "progress" | "start" | string,
                fn?: (...args: any[]) => any,
                context?: any,
            ): this;
        }
        interface TextureDictionary {
            [index: string]: PIXI.Texture;
        }
        interface IMetadata {
            loadElement?: HTMLImageElement | HTMLAudioElement | HTMLVideoElement;
            skipSource?: boolean;
            mimeType?: string | string[];
        }
        class Resource {
            constructor(name: string, url: string | string[], options?: LoaderOptions);
            readonly name: string;
            readonly url: string;
            readonly extension: string;
            data: any;
            crossOrigin: string;
            timeout: number;
            loadType: Resource.LOAD_TYPE;
            xhrType: string;
            metadata: IMetadata;
            readonly error: Error;
            readonly xhr: XMLHttpRequest;
            readonly children: Resource[];
            readonly type: Resource.LOAD_TYPE;
            readonly progressChunk: number;
            onStart: MiniSignal<OnStartSignal>;
            onProgress: MiniSignal<OnProgressSignal>;
            onComplete: MiniSignal<OnCompleteSignal>;
            onAfterMiddleware: MiniSignal<OnCompleteSignal>;
            readonly isDataUrl: boolean;
            readonly isComplete: boolean;
            readonly isLoading: boolean;
            complete(): void;
            abort(message: string): void;
            load(cb?: OnCompleteSignal): void;
            texture: Texture;
            sound: any;
            spineAtlas: any;
            spineData: any;
            textures?: TextureDictionary;
            spritesheet?: Spritesheet;
        }
        namespace Resource {
            enum STATUS_FLAGS {
                NONE,
                DATA_URL,
                COMPLETE,
                LOADING,
            }
            enum TYPE {
                UNKNOWN,
                JSON,
                XML,
                IMAGE,
                AUDIO,
                VIDEO,
                TEXT,
            }
            enum LOAD_TYPE {
                XHR,
                IMAGE,
                AUDIO,
                VIDEO,
            }
            enum XHR_RESPONSE_TYPE {
                DEFAULT,
                BUFFER,
                BLOB,
                DOCUMENT,
                JSON,
                TEXT,
            }
            function setExtensionLoadType(extname: string, loadType: Resource.LOAD_TYPE): void;
            function setExtensionXhrType(extname: string, xhrType: Resource.XHR_RESPONSE_TYPE): void;
            const EMPTY_GIF: string;
        }
        const shared: Loader;
    }

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////MESH///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    namespace mesh {
        class Mesh extends Container {
            constructor(
                texture: Texture,
                vertices?: Float32Array,
                uvs?: Float32Array,
                indices?: Uint16Array,
                drawMode?: number,
            );

            protected _texture: Texture;
            uvs: Float32Array;
            vertices: Float32Array;
            indices: Uint16Array;
            dirty: number;
            indexDirty: number;
            vertexDirty: number;
            autoUpdate: boolean;
            dirtyVertex: boolean;
            protected _geometryVersion: number;
            blendMode: number;
            pluginName: string;
            canvasPadding: number;
            drawMode: number;
            texture: Texture;
            tintRgb: Float32Array;
            protected _glDatas: { [n: number]: any };
            protected _uvTransform: extras.TextureMatrix;
            uploadUvTransform: boolean;
            multiplyUvs(): void;
            refresh(forceUpdate?: boolean): void;
            protected _refresh(): void;
            protected _renderWebGL(renderer: WebGLRenderer): void;
            protected _renderCanvas(renderer: CanvasRenderer): void;
            protected _onTextureUpdate(): void;
            protected _calculateBounds(): void;
            containsPoint(point: Point): boolean;
            tint: number;

            static DRAW_MODES: {
                TRIANGLE_MESH: number;
                TRIANGLES: number;
            };
        }

        class CanvasMeshRenderer {
            constructor(renderer: CanvasRenderer);

            renderer: CanvasRenderer;

            render(mesh: Mesh): void;
            protected _renderTriangleMesh(mesh: Mesh): void;
            protected _renderTriangles(mesh: Mesh): void;
            protected _renderDrawTriangle(mesh: Mesh, index0: number, index1: number, index2: number): void;
            protected renderMeshFlat(mesh: Mesh): void;

            destroy(): void;
        }

        class MeshRenderer extends ObjectRenderer {
            constructor(renderer: WebGLRenderer);

            shader: Shader;
            render(mesh: Mesh): void;
        }

        class Plane extends Mesh {
            constructor(texture: Texture, verticesX?: number, verticesY?: number);
            protected _ready: boolean;
            verticesX: number;
            verticesY: number;
            drawMode: number;

            refresh(): void;

            protected _onTexureUpdate(): void;
        }

        class NineSlicePlane extends Plane {
            constructor(
                texture: Texture,
                leftWidth?: number,
                topHeight?: number,
                rightWidth?: number,
                bottomHeight?: number,
            );

            width: number;
            height: number;
            leftWidth: number;
            rightWidth: number;
            topHeight: number;
            bottomHeight: number;

            protected _leftWidth: number;
            protected _rightWidth: number;
            protected _topHeight: number;
            protected _bottomHeight: number;
            protected _height: number;
            protected _width: number;
            protected _origHeight: number;
            protected _origWidth: number;
            protected _uvh: number;
            protected _uvw: number;

            updateHorizontalVertices(): void;
            updateVerticalVertices(): void;
            protected drawSegment(
                context: CanvasRenderingContext2D | WebGLRenderingContext,
                textureSource: any,
                w: number,
                h: number,
                x1: number,
                y1: number,
                x2: number,
                y2: number,
            ): void;
            protected _renderCanvas(renderer: CanvasRenderer): void;
            protected _refresh(): void;
        }

        class Rope extends Mesh {
            constructor(texture: Texture, points: Point[]);

            points: Point[];
            colors: number[];
            autoUpdate: boolean;
            protected _refresh(): void;

            refreshVertices(): void;
        }
    }
    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////PARTICLES////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    namespace particles {
        interface ParticleContainerProperties {
            /**
             * DEPRECIATED - Use `vertices`
             */
            scale?: boolean;
            vertices?: boolean;
            position?: boolean;
            rotation?: boolean;
            uvs?: boolean;
            tint?: boolean;
            alpha?: boolean;
        }
        class ParticleContainer extends Container {
            constructor(
                maxSize?: number,
                properties?: ParticleContainerProperties,
                batchSize?: number,
                autoResize?: boolean,
            );
            protected _tint: number;
            protected tintRgb: number | any[];
            tint: number;
            protected _properties: boolean[];
            protected _maxSize: number;
            protected _batchSize: number;
            protected _glBuffers: { [n: number]: WebGLBuffer };
            protected _bufferUpdateIDs: number[];
            protected _updateID: number;
            interactiveChildren: boolean;
            blendMode: number;
            autoSize: boolean;
            roundPixels: boolean;
            baseTexture: BaseTexture;

            setProperties(properties: ParticleContainerProperties): void;
            protected onChildrenChange: (smallestChildIndex?: number) => void;

            destroy(options?: DestroyOptions | boolean): void;
        }
        class ParticleBuffer {
            constructor(gl: WebGLRenderingContext, properties: any, dynamicPropertyFlags: any[], size: number);

            gl: WebGLRenderingContext;
            size: number;
            dynamicProperties: any[];
            staticProperties: any[];
            staticStride: number;
            staticBuffer: any;
            staticData: any;
            staticDataUint32: any;
            dynamicStride: number;
            dynamicBuffer: any;
            dynamicData: any;
            dynamicDataUint32: any;

            protected _updateID: number;

            destroy(): void;
        }
        interface ParticleRendererProperty {
            attribute: number;
            size: number;
            uploadFunction(
                children: PIXI.DisplayObject[],
                startIndex: number,
                amount: number,
                array: number[],
                stride: number,
                offset: number,
            ): void;
            unsignedByte: any;
            offset: number;
        }
        class ParticleRenderer extends ObjectRenderer {
            constructor(renderer: WebGLRenderer);

            shader: glCore.GLShader;
            indexBuffer: WebGLBuffer;
            properties: ParticleRendererProperty[];
            protected tempMatrix: Matrix;

            start(): void;
            generateBuffers(container: ParticleContainer): ParticleBuffer[];
            protected _generateOneMoreBuffer(container: ParticleContainer): ParticleBuffer;
            uploadVertices(
                children: DisplayObject[],
                startIndex: number,
                amount: number,
                array: number[],
                stride: number,
                offset: number,
            ): void;
            uploadPosition(
                children: DisplayObject[],
                startIndex: number,
                amount: number,
                array: number[],
                stride: number,
                offset: number,
            ): void;
            uploadRotation(
                children: DisplayObject[],
                startIndex: number,
                amount: number,
                array: number[],
                stride: number,
                offset: number,
            ): void;
            uploadUvs(
                children: DisplayObject[],
                startIndex: number,
                amount: number,
                array: number[],
                stride: number,
                offset: number,
            ): void;
            uploadTint(
                children: DisplayObject[],
                startIndex: number,
                amount: number,
                array: number[],
                stride: number,
                offset: number,
            ): void;
            uploadAlpha(
                children: DisplayObject[],
                startIndex: number,
                amount: number,
                array: number[],
                stride: number,
                offset: number,
            ): void;
            destroy(): void;

            indices: Uint16Array;
        }
    }
    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////PREPARE///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    namespace prepare {
        type AddHook = (item: any, queue: any[]) => boolean;
        type UploadHook<UploadHookSource> = (prepare: UploadHookSource, item: any) => boolean;
        abstract class BasePrepare<UploadHookSource> {
            constructor(renderer: SystemRenderer);

            limiter: CountLimiter | TimeLimiter;
            protected renderer: SystemRenderer;
            protected uploadHookHelper: UploadHookSource;
            protected queue: any[];
            protected addHooks: AddHook[];
            protected uploadHooks: Array<UploadHook<UploadHookSource>>;
            protected completes: (...args: any[]) => any[];
            protected ticking: boolean;
            protected delayedTick: () => void;

            //tslint:disable-next-line:ban-types forbidden-types
            upload(
                item: Function | DisplayObject | Container | BaseTexture | Texture | Graphics | Text | any,
                done?: () => void,
            ): void;
            protected tick(): void;
            protected prepareItems(): void;
            registerFindHook(addHook: AddHook): this;
            registerUploadHook(uploadHook: UploadHook<UploadHookSource>): this;
            protected findMultipleBaseTextures(item: PIXI.DisplayObject, queue: any[]): boolean;
            protected findBaseTexture(item: PIXI.DisplayObject, queue: any[]): boolean;
            protected findTexture(item: PIXI.DisplayObject, queue: any[]): boolean;
            add(
                item:
                    | PIXI.DisplayObject
                    | PIXI.Container
                    | PIXI.BaseTexture
                    | PIXI.Texture
                    | PIXI.Graphics
                    | PIXI.Text
                    | any,
            ): this;
            destroy(): void;
        }
        class CanvasPrepare extends BasePrepare<CanvasPrepare> {
            constructor(renderer: CanvasRenderer);

            protected canvas: HTMLCanvasElement;
            protected ctx: CanvasRenderingContext2D;
        }
        class WebGLPrepare extends BasePrepare<WebGLRenderer> {
            constructor(renderer: WebGLRenderer);
        }
        class CountLimiter {
            constructor(maxItemsPerFrame: number);

            protected maxItemsPerFrame: number;
            protected itemsLeft: number;

            beginFrame(): void;
            allowedToUpload(): boolean;
        }
        class TimeLimiter {
            constructor(maxMilliseconds: number);

            protected maxMilliseconds: number;
            protected frameStart: number;

            beginFrame(): void;
            allowedToUpload(): boolean;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////pixi-gl-core/////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    // pixi-gl-core 1.1.4 https://github.com/pixijs/pixi-gl-core
    // sharedArrayBuffer as a type is not available yet.
    // need to fully define what an `Attrib` is.
    namespace glCore {
        interface ContextOptions {
            /**
             * Boolean that indicates if the canvas contains an alpha buffer.
             */
            alpha?: boolean;
            /**
             * Boolean that indicates that the drawing buffer has a depth buffer of at least 16 bits.
             */
            depth?: boolean;
            /**
             * Boolean that indicates that the drawing buffer has a stencil buffer of at least 8 bits.
             */
            stencil?: boolean;
            /**
             * Boolean that indicates whether or not to perform anti-aliasing.
             */
            antialias?: boolean;
            /**
             * Boolean that indicates that the page compositor will assume the drawing buffer contains colors with pre-multiplied alpha.
             */
            premultipliedAlpha?: boolean;
            /**
             * If the value is true the buffers will not be cleared and will preserve their values until cleared or overwritten by the author.
             */
            preserveDrawingBuffer?: boolean;
            /**
             *  Boolean that indicates if a context will be created if the system performance is low.
             */
            failIfMajorPerformanceCaveat?: boolean;
        }
        function createContext(view: HTMLCanvasElement, options?: ContextOptions): WebGLRenderingContext;
        function setVertexAttribArrays(
            gl: WebGLRenderingContext,
            attribs: Attrib[],
            state?: WebGLState,
        ): WebGLRenderingContext | undefined;
        class GLBuffer {
            constructor(
                gl: WebGLRenderingContext,
                type: number,
                data: ArrayBuffer | ArrayBufferView | any,
                drawType: number,
            );

            protected _updateID?: number;
            gl: WebGLRenderingContext;
            buffer: WebGLBuffer;
            type: number;
            drawType: number;
            data: ArrayBuffer | ArrayBufferView | any;

            upload(data?: ArrayBuffer | ArrayBufferView | any, offset?: number, dontBind?: boolean): void;
            bind(): void;

            static createVertexBuffer(
                gl: WebGLRenderingContext,
                data: ArrayBuffer | ArrayBufferView | any,
                drawType: number,
            ): GLBuffer;
            static createIndexBuffer(
                gl: WebGLRenderingContext,
                data: ArrayBuffer | ArrayBufferView | any,
                drawType: number,
            ): GLBuffer;
            static create(
                gl: WebGLRenderingContext,
                type: number,
                data: ArrayBuffer | ArrayBufferView | any,
                drawType: number,
            ): GLBuffer;

            destroy(): void;
        }
        class GLFramebuffer {
            constructor(gl: WebGLRenderingContext, width: number, height: number);

            gl: WebGLRenderingContext;
            frameBuffer: WebGLFramebuffer;
            stencil: WebGLRenderbuffer;
            texture: GLTexture;
            width: number;
            height: number;

            enableTexture(texture: GLTexture): void;
            enableStencil(): void;
            clear(r: number, g: number, b: number, a: number): void;
            bind(): void;
            unbind(): void;
            resize(width: number, height: number): void;
            destroy(): void;

            static createRGBA(
                gl: WebGLRenderingContext,
                width: number,
                height: number,
                data: ArrayBuffer | ArrayBufferView | any,
            ): GLFramebuffer;
            static createFloat32(
                gl: WebGLRenderingContext,
                width: number,
                height: number,
                data: ArrayBuffer | ArrayBufferView | any,
            ): GLFramebuffer;
        }
        class GLShader {
            constructor(
                gl: WebGLRenderingContext,
                vertexSrc: string | string[],
                fragmentSrc: string | string[],
                precision?: string,
                attributeLocations?: { [key: string]: number },
            );

            gl: WebGLRenderingContext;
            program?: WebGLProgram | null;
            uniformData: any;
            uniforms: any;
            attributes: any;

            bind(): this;
            destroy(): void;
        }
        class GLTexture {
            constructor(gl: WebGLRenderingContext, width?: number, height?: number, format?: number, type?: number);

            gl: WebGLRenderingContext;
            texture: WebGLTexture;
            mipmap: boolean;
            premultiplyAlpha: boolean;
            width: number;
            height: number;
            format: number;
            type: number;

            upload(source: HTMLImageElement | ImageData | HTMLVideoElement | HTMLCanvasElement): void;
            uploadData(data: ArrayBuffer | ArrayBufferView, width: number, height: number): void;
            bind(location?: number): void;
            unbind(): void;
            minFilter(linear: boolean): void;
            magFilter(linear: boolean): void;
            enableMipmap(): void;
            enableLinearScaling(): void;
            enableNearestScaling(): void;
            enableWrapClamp(): void;
            enableWrapRepeat(): void;
            enableWrapMirrorRepeat(): void;
            destroy(): void;

            static fromSource(
                gl: WebGLRenderingContext,
                source: HTMLImageElement | ImageData | HTMLVideoElement | HTMLCanvasElement,
                premultipleAlpha?: boolean,
            ): GLTexture;
            static fromData(gl: WebGLRenderingContext, data: number[], width: number, height: number): GLTexture;
        }
        interface Attrib {
            attribute: {
                location: number;
                size: number;
            };
            normalized: boolean;
            stride: number;
            start: number;
            buffer: ArrayBuffer;
        }
        interface WebGLRenderingContextAttribute {
            buffer: WebGLBuffer;
            attribute: any;
            type: number;
            normalized: boolean;
            stride: number;
            start: number;
        }
        interface AttribState {
            tempAttribState: Attrib[];
            attribState: Attrib[];
        }
        class VertexArrayObject {
            static FORCE_NATIVE: boolean;

            constructor(gl: WebGLRenderingContext, state?: WebGLState);

            protected nativeVaoExtension: any;
            protected nativeState: AttribState;
            protected nativeVao: VertexArrayObject;
            gl: WebGLRenderingContext;
            attributes: Attrib[];
            indexBuffer: GLBuffer;
            dirty: boolean;

            bind(): this;
            unbind(): this;
            activate(): this;
            addAttribute(
                buffer: GLBuffer,
                attribute: Attrib,
                type?: number,
                normalized?: boolean,
                stride?: number,
                start?: number,
            ): this;
            addIndex(buffer: GLBuffer, options?: any): this;
            clear(): this;
            draw(type: number, size: number, start: number): this;
            destroy(): void;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////UTILS//////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    interface DecomposedDataUri {
        mediaType: string;
        subType: string;
        encoding: string;
        data: any;
    }

    namespace utils {
        function uid(): number;
        function hex2rgb(hex: number, out?: number[]): number[];
        function hex2string(hex: number): string;
        function rgb2hex(rgb: number[]): number;
        function canUseNewCanvasBlendModes(): boolean;
        function getResolutionOfUrl(url: string, defaultValue?: number): number;
        function getSvgSize(svgString: string): any;
        function decomposeDataUri(dataUri: string): DecomposedDataUri | void;
        function getUrlFileExtension(url: string): string | void;
        function sayHello(type: string): void;
        function skipHello(): void;
        function isWebGLSupported(): boolean;
        function sign(n: number): number;
        /**
         * Remove a range of items from an array
         *
         * @param arr The target array
         * @param startIdx The index to begin removing from (inclusive)
         * @param removeCount How many items to remove
         */
        function removeItems<T>(arr: T[], startIdx: number, removeCount: number): void;
        function correctBlendMode(blendMode: number, premultiplied: boolean): number;
        function clearTextureCache(): void;
        function destroyTextureCache(): void;
        function premultiplyTint(tint: number, alpha: number): number;
        function premultiplyRgba(
            rgb: Float32Array | number[],
            alpha: number,
            out?: Float32Array,
            premultiply?: boolean,
        ): Float32Array;
        function premultiplyTintToRgba(
            tint: number,
            alpha: number,
            out?: Float32Array,
            premultiply?: boolean,
        ): Float32Array;
        const premultiplyBlendMode: number[][];
        const TextureCache: any;
        const BaseTextureCache: any;

        // https://github.com/kaimallea/isMobile
        namespace isMobile {
            const apple: {
                phone: boolean;
                ipod: boolean;
                tablet: boolean;
                device: boolean;
            };
            const android: {
                phone: boolean;
                tablet: boolean;
                device: boolean;
            };
            const amazon: {
                phone: boolean;
                tablet: boolean;
                device: boolean;
            };
            const windows: {
                phone: boolean;
                tablet: boolean;
                device: boolean;
            };
            const seven_inch: boolean;
            const other: {
                blackberry10: boolean;
                blackberry: boolean;
                opera: boolean;
                firefox: boolean;
                chrome: boolean;
                device: boolean;
            };
            const any: boolean;
            const phone: boolean;
            const tablet: boolean;
        }
        // https://github.com/primus/eventemitter3
        class EventEmitter {
            static prefixed: string | boolean;
            static EventEmitter: {
                new (): EventEmitter;
                prefixed: string | boolean;
            };
            /**
             * Minimal EventEmitter interface that is molded against the Node.js
             * EventEmitter interface.
             *
             * @constructor
             * @api public
             */
            constructor();
            /**
             * Return an array listing the events for which the emitter has registered listeners.
             *
             * @returns
             */
            eventNames(): Array<string | symbol>;
            /**
             * Return the listeners registered for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @returns
             */
            //tslint:disable-next-line:ban-types forbidden-types
            listeners(event: string | symbol): Function[];
            /**
             * Check if there listeners for a given event.
             * If `exists` argument is not `true` lists listeners.
             *
             * @param event The event name.
             * @param exists Only check if there are listeners.
             * @returns
             */
            listeners(event: string | symbol, exists: boolean): boolean;
            /**
             * Calls each of the listeners registered for a given event.
             *
             * @param event The event name.
             * @param args Arguments that are passed to registered listeners
             * @returns `true` if the event had listeners, else `false`.
             */
            emit(event: string | symbol, ...args: any[]): boolean;
            /**
             * Add a listener for a given event.
             *
             * @param event The event name.
             * @param fn The listener function.
             * @param [context=this] The context to invoke the listener with.
             * @returns `this`
             */
            on(event: string | symbol, fn: (...args: any[]) => any, context?: any): this;
            /**
             * Add a one-time listener for a given event.
             *
             * @param event The event name.
             * @param fn The listener function.
             * @param [context=this] The context to invoke the listener with.
             * @returns `this`
             */
            once(event: string | symbol, fn: (...args: any[]) => any, context?: any): this;
            /**
             * Remove the listeners of a given event.
             *
             * @param event The event name.
             * @param fn Only remove the listeners that match this function.
             * @param context Only remove the listeners that have this context.
             * @param once Only remove one-time listeners.
             * @returns `this`
             */
            removeListener(event: string | symbol, fn?: (...args: any[]) => any, context?: any, once?: boolean): this;
            /**
             * Remove all listeners, or those of the specified event.
             *
             * @param event The event name.
             * @returns `this`.
             */
            removeAllListeners(event?: string | symbol): this;
            /**
             * Alias method for `removeListener`
             */
            off(event: string | symbol, fn?: (...args: any[]) => any, context?: any, once?: boolean): this;
            /**
             * Alias method for `on`
             */
            addListener(event: string | symbol, fn: (...args: any[]) => any, context?: any): this;
            /**
             * This function doesn"t apply anymore.
             * @deprecated
             */
            setMaxListeners(): this;
        }
    }
    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////depreciation/////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    // not sure how to handle blendmodes scalemodes basetexturecache
    namespace core {
        /**
         * @class
         * @private
         * @name SpriteBatch
         * @memberof PIXI
         * @see PIXI.ParticleContainer
         * @throws {ReferenceError} SpriteBatch does not exist any more, please use the new ParticleContainer instead.
         * @deprecated since version 3.0.0
         */
        type SpriteBatch = ParticleContainer;

        /**
         * @class
         * @private
         * @name AssetLoader
         * @memberof PIXI
         * @see PIXI.loaders.Loader
         * @throws {ReferenceError} The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.
         * @deprecated since version 3.0.0
         */
        type AssetLoader = loaders.Loader;

        /**
         * @class
         * @private
         * @name Stage
         * @memberof PIXI
         * @see PIXI.Container
         * @deprecated since version 3.0.0
         */
        type Stage = Container;

        /**
         * @class
         * @private
         * @name DisplayObjectContainer
         * @memberof PIXI
         * @see PIXI.Container
         * @deprecated since version 3.0.0
         */
        type DisplayObjectContainer = Container;

        /**
         * @class
         * @private
         * @name Strip
         * @memberof PIXI
         * @see PIXI.mesh.Mesh
         * @deprecated since version 3.0.0
         */
        type Strip = mesh.Mesh;

        /**
         * @class
         * @private
         * @name Rope
         * @memberof PIXI
         * @see PIXI.mesh.Rope
         * @deprecated since version 3.0.0
         */
        type Rope = mesh.Rope;

        /**
         * @class
         * @private
         * @name ParticleContainer
         * @memberof PIXI
         * @see PIXI.particles.ParticleContainer
         * @deprecated since version 4.0.0
         */
        type ParticleContainer = particles.ParticleContainer;

        /**
         * @class
         * @private
         * @name MovieClip
         * @memberof PIXI
         * @see PIXI.extras.MovieClip
         * @deprecated since version 3.0.0
         */
        type MovieClip = extras.AnimatedSprite;

        /**
         * @class
         * @private
         * @name TilingSprite
         * @memberof PIXI
         * @see PIXI.extras.TilingSprite
         * @deprecated since version 3.0.0
         */
        type TilingSprite = extras.TilingSprite;

        /**
         * @class
         * @private
         * @name BaseTextureCache
         * @memberof PIXI
         * @see PIXI.utils.BaseTextureCache
         * @deprecated since version 3.0.0
         */
        type BaseTextureCache = any;

        /**
         * @class
         * @private
         * @name BitmapText
         * @memberof PIXI
         * @see PIXI.extras.BitmapText
         * @deprecated since version 3.0.0
         */
        type BitmapText = extras.BitmapText;

        /**
         * @namespace
         * @private
         * @name math
         * @memberof PIXI
         * @see PIXI
         * @deprecated since version 3.0.6
         */
        type math = any;

        /**
         * @class
         * @private
         * @name PIXI.AbstractFilter
         * @see PIXI.Filter
         * @deprecated since version 3.0.6
         */
        type AbstractFilter<U extends Object> = Filter<U>;

        /**
         * @class
         * @private
         * @name PIXI.TransformManual
         * @see PIXI.TransformBase
         * @deprecated since version 4.0.0
         */
        type TransformManual = TransformBase;

        /**
         * @static
         * @constant
         * @name PIXI.TARGET_FPMS
         * @see PIXI.settings.TARGET_FPMS
         * @deprecated since version 4.2.0
         */
        type TARGET_FPMS = number;

        /**
         * @static
         * @constant
         * @name PIXI.FILTER_RESOLUTION
         * @see PIXI.settings.FILTER_RESOLUTION
         * @deprecated since version 4.2.0
         */
        type FILTER_RESOLUTION = number;

        /**
         * @static
         * @constant
         * @name PIXI.RESOLUTION
         * @see PIXI.settings.RESOLUTION
         * @deprecated since version 4.2.0
         */
        type RESOLUTION = number;

        /**
         * @static
         * @constant
         * @name PIXI.MIPMAP_TEXTURES
         * @see PIXI.settings.MIPMAP_TEXTURES
         * @deprecated since version 4.2.0
         */
        type MIPMAP_TEXTURES = any;

        /**
         * @static
         * @constant
         * @name PIXI.SPRITE_BATCH_SIZE
         * @see PIXI.settings.SPRITE_BATCH_SIZE
         * @deprecated since version 4.2.0
         */
        type SPRITE_BATCH_SIZE = number;

        /**
         * @static
         * @constant
         * @name PIXI.SPRITE_MAX_TEXTURES
         * @see PIXI.settings.SPRITE_MAX_TEXTURES
         * @deprecated since version 4.2.0
         */
        type SPRITE_MAX_TEXTURES = number;

        /**
         * @static
         * @constant
         * @name PIXI.RETINA_PREFIX
         * @see PIXI.settings.RETINA_PREFIX
         * @deprecated since version 4.2.0
         */
        type RETINA_PREFIX = RegExp | string;

        /**
         * @static
         * @constant
         * @name PIXI.DEFAULT_RENDER_OPTIONS
         * @see PIXI.settings.RENDER_OPTIONS
         * @deprecated since version 4.2.0
         */
        type DEFAULT_RENDER_OPTIONS = number;

        /**
         * @static
         * @name PRECISION
         * @memberof PIXI.settings
         * @see PIXI.PRECISION
         * @deprecated since version 4.4.0
         */
        type PRECISION = string;
    }

    namespace GroupD8 {
        /**
         * @name PIXI.GroupD8.isSwapWidthHeight
         * @see PIXI.GroupD8.isVertical
         * @param rotation - The number to check.
         * @returns Whether or not the direction is vertical
         * @deprecated since version 4.6.0
         */
        function isSwapWidthHeight(rotation: number): boolean;
    }

    namespace extras {
        /**
         * @class
         * @name MovieClip
         * @memberof PIXI.extras
         * @see PIXI.extras.AnimatedSprite
         * @deprecated since version 4.2.0
         */
        type MovieClip = extras.AnimatedSprite;

        /**
         * @class
         * @name TextureTransform
         * @memberof PIXI.extras
         * @see PIXI.TextureMatrix
         * @deprecated since version 4.6.0
         */
        type TextureTranform = TextureMatrix;
    }

    namespace filters {
        /**
         * @class
         * @private
         * @name PIXI.filters.VoidFilter
         * @see PIXI.filters.AlphaFilter
         * @deprecated since version 4.5.7
         */
        type VoidFilter = filters.AlphaFilter;
    }

    namespace settings {
        /**
         * @static
         * @name PRECISION
         * @memberof PIXI.settings
         * @see PIXI.PRECISION
         * @deprecated since version 4.4.0
         */
        type PRECISION = number;
    }
}

declare namespace pixi {
    const gl: typeof PIXI.glCore;
}

//tslint:disable-next-line:no-single-declare-module
declare module "pixi.js" {
    export = PIXI;
}
