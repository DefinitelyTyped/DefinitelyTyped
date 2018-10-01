// Type definitions for athenajs 0.1.0
// Project: https://github.com/AthenaJS/athenajs
// Definitions by: Nicolas Ramz <https://github.com/warpdesign>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'athenajs' {
    export function Dom(sel?: string | HTMLElement): _Dom;

    export class Scene{
        constructor(options?: SceneOptions);
        map: Map;
        hudScene: Scene | null;
        running: boolean;
        opacity: number;
        addObject(object: Drawable | Array<Drawable>, layer?:number): Scene;
        animate(fxName: string, options: EffectOptions): Promise;
        bindEvents(eventList: string): void;
        debug(bool?: boolean): void;
        fadeIn(duration: number): Promise;
        fadeOut(duration: number): Promise;
        fadeInAndOut(inDuration: number, delay: number, outDuration: number): Promise;
        getOpacity(): number;
        getPlayTime(): number;
        load(type:string, src:string, id?:string): void;
        loadAudio(src: string, id?: string): void;
        loadImage(src: string, id?: string): void;
        loadMap(src: string, id?: string): void;
        notify(name: string, data?: JSObject): void;
        removeObject(obj: Drawable): void;
        setBackgroundImage(image:string|HTMLImageElement): void;
        setLayerPriority(layer: number, background: boolean): void;
        setMap(map: Map | JSObject, x?: number, y?: number): void;
        setOpacity(opacity: number): void;
        setup(): void;
        start(): void;
        stop(): void;
    }
    export class Game {
        constructor(options: GameOptions);
        bindEvents(eventList: string):void;
        setScene(scene: Scene): void;
        toggleFullscreen(): void;
        toggleSound(bool: boolean): void;
        toggleTileInspector(bool: boolean): void;
        togglePause(): void;
        scene: Scene;
        sound: boolean;
    }
    export class Drawable{
        constructor(type: string, options: DrawableOptions);
        addChild(child:Drawable): void;
        animate(name: string, options: JSObject): Promise;
        center(): Drawable;
        destroy(data?:any): void;
        moveTo(x: number, y: number, duration?: number): Drawable;
        notify(id: string, data?: JSObject): void;
        onCollision(object: Drawable): void;
        onEvent(eventType: string, data?: JSObject): void;
        playSound(id: string, options?: { pan?: boolean, loop?: false }): void;
        setBehavior(behavior: string | { new(sprite: Drawable, options?: JSObject): Behavior }, options?: JSObject): void;
        setScale(scale: number): void;
        getCurrentWidth(): number;
        getCurrentHeight(): number;
        getProperty(prop: string): any;
        setProperty<T>(prop: string, value: T): void;
        setMask(mask: MaskOptions | null, exclude?: boolean): void;
        stopAnimate(endValue?: number): void;
        reset(): void;
        show(): void;
        hide(): void;
        type: string;
        width: number;
        height: number;
        x:number;
        y:number;
        vx:number;
        vy: number;
        canCollide: boolean;
        currentMovement: string;
        running: boolean;
        movable: boolean;
        behavior: Behavior;
        currentMap: Map;
        data: JSObject;
        visible: boolean;
    }

    export interface MaskOptions{
        x: number,
        y: number,
        width: number,
        height: number
    }

    export interface MenuItem {
        text: string,
        selectable: boolean,
        visible: boolean,
        active?: boolean
    }

    export interface MenuOptions {
        title: string,
        color: string,
        menuItems: MenuItem[]
    }

    export class Menu extends Drawable{
        constructor(id: string, options: MenuOptions);
        nextItem(): void;
        getSelectedItemIndex(): number;
    }

    export class SimpleText extends Drawable{
        constructor(type: string, simpleTextOptions: SimpleTextOptions);
        getCurrentOffsetX(): number;
        getCurrentOffsetY(): number;
        setColor(color: string): void;
        setSize(width: number, height: number): void;
        setText(text: string): void;
    }
    export class Paint extends Drawable{
        constructor(type: string, paintOptions: PaintOptions);
        arc(cx: number, cy: number, r: number, starteAngle: number, endAngle: number, fillStyle: string, borderSize: number): void;
        fill(color?: string): void;
        circle(cx: number, cy: number, r: number, fillStyle?: string, borderWidth?: number, borderStyle?: string): void;
        rect(x:number, y:number, width:number, height:number, color:string): void;
        name: string;
        color: string;
    }

    export class BitmapText extends Drawable{
        constructor(type: string, textOptions: BitmapTextOptions);
        setText(text: string): void;
    }

    export class Sprite extends Drawable {
        constructor(type: string, spriteOptions: SpriteOptions);
        addAnimation(name: string, imgPath: string, options: AnimOptions): void;
        setAnimation(name: string, fn?: Callback, frameNum?: number, revert?: boolean): void;
        clearMove(): void;
    }

    interface pixelPos {
        x: number,
        y: number
    }

    export class Map{
        constructor(options:MapOptions)
        addObject(obj: Drawable, layerIndex?: number): void;
        addTileSet(tiles: TileDesc[]): void;
        checkMatrixForCollision(buffer: number[], matrixWidth: number, x: number, y: number, behavior: number): boolean;
        clear(tileNum?: number, behavior?: number): void;
        getTileBehaviorAtIndex(col:number, row:number): number;
        getTileIndexFromPixel(x: number, y: number): pixelPos;
        moveTo(x: number, y: number): void;
        respawn(): void;
        setData(map: Uint8Array, behaviors: Uint8Array): void;
        setEasing(easing: string): void;
        shift(startLine:number, height:number): void;
        updateTile(col: number, row: number, tileNum?: number, behavior?: number): void;
        duration: number;
        numRows: number;
        numCols: number;
        width: number;
        height: number;
        tileWidth: number;
        tileHeight: number;
    }

    export class Tile{
        static TYPE: {
            AIR: 1,
            WALL: 2,
            LADDER: 3
        };
    }

    interface TileDesc {
        offsetX: number,
        offsetY: number,
        width: number,
        height: number
    }

    interface MapOptions{
        src: string,
        tileWidth: number,
        tileHeight: number,
        width: number,
        height: number,
        viewportW?: number,
        viewportH?: number,
        buffer?:ArrayBuffer
    }

    interface FXInstance{
        addFX(fxName: string, FxClass: { new(options: EffectOptions, display: Display): Effect }): void;
    }

    export const FX: FXInstance;

    export class _FX {
        /**
         * Creates the FX class, adding the linear easing
         */
        constructor();

        /**
         * Add a new Effect
         * @param {String} fxName The name of the effect to add.
         * @param {Effect} FxClass The Effect Class to add.
         */
        addFX(fxName: string, FxClass: { new(): Effect }): void;

        /**
         * Retrieve an effect Class by its name
         *
         * @param {String} fxName The name of the Effect to retrive.
         * @returns {Effect} the effect Class or undefined
         */
        getEffect(fxName: string): Effect;

        /**
         * Add a new easing function for other objects to use
         *
         * @param {String} easingName The name of the easing.
         * @param {Function} easingFn The function to be used for easing. This function may use these parameters: `x , t, b, c, d`
        */
        addEasing(easingName: string, easingFn: (x?: number, t?: number, b?: number, c?: number, d?: number) => void):void;

        /**
         * Retrieves an easing function
         *
         * @param {String} easingName The name of the easing function to retrive.
         * @returns {Function} The easing function, or linear function if it didn't exist.
         */
        getEasing(easingName: string): (x?: number, t?: number, b?: number, c?: number, d?: number) => void;
    }

    interface EffectOptions {
        easing?: string,
        when?: string,
        startValue?: number,
        endValue?: number,
        duration?: number
    }

    export class Effect {
        width: number;
        height: number;
        buffer: RenderingContext;
        animProgress: number;
        startValue: number;
        ended:boolean;
        /**
         * This the class constructor. Default options are:
         *
         * @param {Object} options
         * @param {Number} options.startValue The start value of the effect.
         * @param {Number} options.endValue The end value of the effect.
         * @param {Number} options.duration The duration of the effect (ms).*
         * @param {boolean} options.loop Set to true to make the effect loop.
         * @param {Display} display Reference to the Display in case a buffer is needed.
         */
        constructor(options: EffectOptions, display: Display);

        /**
         * Changes the easing function used for the ffect
         *
         * @param {Function} easing The new easing function.
         */
        setEasing(easing: (x?: number, t?: number, b?: number, c?: number, d?: number) => void): void;

        /**
         * Called when the ffect is started.
         *
         * This method can be overriden but the super should always be called
         */
        start():Promise;

        /**
         * called when the effect is stopped
         */
        stop(object: any, setEndValue: any): void;

        /**
         * Calculates current animation process
         *
         * This method can be overridden but the super should always be calle first
         */
        process(ctx: RenderingContext, fxCtx?: RenderingContext, obj?: any): boolean;
    }

    // why do we need this ?
    type RenderingContext = CanvasRenderingContext2D;

    interface DisplayOptions {
        width: number,
        height: number,
        type: string,
        layers?: boolean[],
        name: string
    }

    export class Display {
        /**
         * Creates a new Display instance
         *
         * @param {Object} options
         * @param {Number} [options.width=1024] The width of the display.
         * @param {Number} [options.height=768] The height of the display.
         * @param {String} [options.type] What type of rendere to use, only '2d' supported for now.
         * @param {Array<boolean>} [options.layers] An array describing each layer that will be added: [true, true] will create two background layers, set to true for a foreground layer.
         * @param {String} options.name The name of the display.
         * @param {(String|HTMLElement)} target The target where the game DOM element should be appended.
         */
        constructor(options: DisplayOptions, target: string | HTMLElement);

        /**
         * Creates a new (offscreen) drawing buffer
         *
         * @param {Number} width width of the buffer
         * @param {Number} height height of the buffer
         */
        getBuffer(width: number, height: number): RenderingContext;

        /**
         * Toggles fullscreen display scaling
         */
        toggleFullscreen(): void;


        /**
         * Changes the zIndex property of the specified layer canvas
         *
         * @param {Number} layer The layer number.
         * @param {Number} zIndex The new zIndex value for this layer
         */
        setLayerZIndex(layer: number, zIndex: number): void;

        /**
         * Clears a canvas display buffer
         *
         * @param {RenderingContext} ctx The context to clear
         */
        clearScreen(ctx: RenderingContext): void;

        /**
         * Clears every rendering buffer, including the special fxCtx one
         */
        clearAllScreens(): void;

        /**
         * Changes the (CSS) opacity of a canvas
         *
         * @param {Canvas} canvas The Canvas HTML element.
         * @param {Number} opacity The new opacity value for this canvas.
         */
        setCanvasOpacity(canvas: HTMLElement, opacity: number): void;

        /**
         * Renders the specified scene
         *
         * @param {Scene} scene the scene to render
         */
        renderScene(scene: Scene): void;

        /**
         * Prepares the canvas before rendering images.
         *
         * @param {Array} resources Array of resources to use.
         *
         * Explanation: during development, I noticed that the very first time
         * the ctx.drawImage() was used to draw onto a canvas, it took a very long time,
         * like at least 10ms for a very small 32x32 pixels drawImage.
         *
         * Subsequent calls do not have this problem and are instant.
         * Maybe some ColorFormat conversion happens.
         *
         * This method makes sure that when the game starts rendering, we don't have
         * any of these delays that can impact gameplay and alter the gameplay experience
         * in a negative way.
         */
        prepareCanvas(resources: JSObject[]): void;

        /**
         * Starts an animation on the display
         *
         * @param {String} fxName Name of the effect to apply.
         * @param {Object} options
         * @param {String} [options.easing='linear'] The easing method to use
         * @param {String} [options.when='pre'] When is the effect applied: can be before the game frame rendering ('pre') or after ('post')
         * @param {any} [options.context=this] The context (this) to apply to the animation.
         * @param {any} context The context to bind the Effect to
         */
        animate(fxName: string, options: EffectOptions, context: RenderingContext): Promise;

        /**
         * stops current animation
         *
         * TODO
         * @private
         */
        stopAnimate(fxName?: string): void;

        /**
         * Executes an effect on a frame at a given time
         *
         * @param {RenderingContext} ctx Context that contains current frame rendering.
         * @param {RenderingContext} fxCtx The context in which to render the transformed frame.
         * @param {any} obj The object on which animation is applied: should be a `Drawable`.
         * @param {any} time Unused.
         * @param {String} when is this effect executed: 'pre' means before rendering, 'post' means after frame render.
         */
        executeFx(ctx: RenderingContext, fxCtx: RenderingContext, obj: Drawable, time: number, when: string): void;

        /**
         * Clears every display layer and clears fx queues
         */
        clearDisplay(): void;
    }

    export const InputManager:_InputManager;

    export class MapEvent {
        /**
         * Creates a new MapEvent
         *
         * @param {Map} map
         */
        constructor(map:Map);

        /**
         * Resets the MapEvent switches, events and items
         */
        reset():void;

        /**
         * Adds a new [`Drawable`]{#item} onto the map
         *
         * @param {String} id of the item to add
         * @param {Drawable} item to add
         */
        addItem(id:string, item:Drawable):void;

        /**
         * Returns an item
         *
         * @param {String} id of the item to retrieve
         *
         * @returns {Drawable|undefined} The item or undefined if it wasn't handled by the map
         */
        getItem(id:string):Drawable|undefined;

        // TODO: ability to trigger an event once a switch has been modified
        setSwitch(id:string, bool:boolean):void;

        toggleSwitch(id:string):void;

        /**
         * Retrieves a switch from the map using its id
         *
         * @param {String} id The switch to retrieve.
         *
         * @returns {any} returns the switch or false if it could not be found
         */
        getSwitch(id:string):any;

        /**
         * checks of conditions of specified trigger are valid
         *
         * @param {Object} trigger The trigger to check.
         *
         * @returns {boolean} true if the trigger is valid
         */
        checkConditions(trigger:JSObject):boolean;

        handleAction(options:JSObject):void;

        handleEvent(options:JSObject):boolean;

        /**
         * Schedule adding a new object to the map
         *
         * @param {String} spriteId The id of the new sprite to add.
         * @param {Object} spriteOptions The options that will be passed to the object constructor.
         * @param {Number} [delay=0] The delay in milliseconds to wait before adding the object.
         * @returns {Drawable} the new drawable
         *
         */
        scheduleSprite(spriteId:string, spriteOptions:JSObject, delay:number):Drawable;


        /**
         * Add a new wave of objects to the map
         * Used for example when the player triggers apparition of several enemies or bonuses
         *
         * @param {Object} options The options to pass to the wav object
         * @returns {boolean}
         *
         * @related {Wave}
         */
        handleWave(options:object):boolean;

        endWave():void;

        triggerEvent(id:string):void;

        isEventTriggered(id:string):boolean;
    }


    export class Behavior {
        vx:number;
        vy:number
        gravity:number;
        sprite:Drawable;
        constructor(sprite:Drawable, options:JSObject);
        onUpdate(timestamp:number):void;
        onVXChange?(vx:number):void;
        onVYChange?(vy:number):void;

        /**
         * Returns current mapEvent
         *
         * @returns {MapEvent} the object's current map event
         */
        getMapEvent(): MapEvent;
        reset():void;
    }

    interface _AudioManager {
        audioCache: JSObject,
        enabled: boolean,
        /**
         * Adds a new sound element to the audio cache.
         * *Note* if a sound with the same id has already been added, it will be replaced
         * by the new one.
         *
         * @param {String} id
         * @param {HTMLAudioElement} element
         */
        addSound(id: string, element: HTMLAudioElement): void;
    /**
     * Toggles global sound playback
     *
     * @param {boolean} bool whether to enabled or disable sound playback.
     */
        toggleSound(bool: boolean): void;
    /**
     * Plays the specified sound with `id`.
     *
     * @param {String} id The id of the sound to play.
     * @param {boolean} [loop=false] Set to true to have the sound playback loop.
     * @param {Number} [volume=1] a Number between 0 and 1.
     * @param {Number} [panning=0] a Number between 10 (left) and -10 (right).
     * @returns {Wad} the created sound instance
     */
        play(id: string, loop?: boolean, volume?: number, panning?: number): any;
    /**
     * Stops playing the sound id
     *
     * @param {String} id The id of the sound to stop playing.
     * @param {any} instanceId The instanceId to use, in case several sounds with the same Id are being played.
     *
     * @returns {undefined}
     */
        stop(id: string, instanceId: any): void;
    }

    export const AudioManager: _AudioManager;

    interface Res {
        id: string,
        type: string,
        src: string
    }

    export type Callback = (...args: any[]) => void;

    interface _NotificationManager {
        notify(name: string, data?: JSObject): void;
    }

    export const NotificationManager: _NotificationManager;

    interface _ResourceManager {
        addResources(resource: Res, group?: string): Promise;
        getCanvasFromImage(image: HTMLImageElement): HTMLCanvasElement;
        getResourceById(id: string, group?: string, fullObject?: boolean): any;
        loadResources(group: string, progressCb?: Callback, errorCb?: Callback): void;
        loadImage(res: Res, group?: string): Promise;
        loadAudio(res: Res, group?: string): Promise;
        newResourceFromPool(id: string): any;
        registerScript(id: string, elt: any, poolSize?: number): void;
    }

    export const ResourceManager: _ResourceManager;

    interface _InputManager {
 /**
     * A list of common keyCodes
     */
    KEYS: {
        'UP': 38,
        'DOWN': 40,
        'LEFT': 37,
        'RIGHT': 39,
        'SPACE': 32,
        'ENTER': 13,
        'ESCAPE': 27,
        'CTRL': 17
    };
    /**
     * List of common pad buttons
     */
    PAD_BUTTONS: {
        32: 1, // Face (main) buttons
        FACE_0: 1,
        FACE_3: 2,
        FACE_4: 3,
        LEFT_SHOULDER: 4, // Top shoulder buttons
        RIGHT_SHOULDER: 5,
        LEFT_SHOULDER_BOTTOM: 6, // Bottom shoulder buttons
        RIGHT_SHOULDER_BOTTOM: 7,
        SELECT: 8,
        START: 9,
        LEFT_ANALOGUE_STICK: 10, // Analogue sticks (if depressible)
        RIGHT_ANALOGUE_STICK: 11,
        38: 12, // Directional (discrete) pad
        40: 13,
        37: 14,
        39: 15
    };
    axes: JSObject;
    newGamepadPollDelay: number;
    gamepadSupport: boolean;
    recording: boolean;
    playingEvents: boolean;
    playingPos: number;
    /*recordedEvents: Array,*/
    pad: null;
    latches: JSObject;
    keyPressed: JSObject;
    padPressed: JSObject;
    keyCb: JSObject;
    enabled: boolean;
    inputMode:string;
    // virtual joystick instance
    dPadJoystick: null;
    jPollInterval: number;
    /**
     * Initializes the InputManager with a reference to the game.
     *
     * This method prepares the InputManager by reseting keyboard states/handlers and
     * set current inputMode
     *
     * @param {Object} options List of input options, unused for now
     *
     */
    init():void
    /**
     * Starts recording input events. They are stored into `InputManager.recordedEvents`
     */
    startRecordingEvents():void;
    /**
     * Stops recording events.
     */
    stopRecordingEvents():void;
    /**
     * After events have been reccorded they can be played back using this method.
     */
    playRecordedEvents():void;
    /**
     * Sets next key states using recorded events
     *
     * TODO: add an optional callback to be called at the end of the playback
     * so that demo can be looped.
     */
    nextRecordedEvents():void;
    /**
     * Saves current event state onto the recordedEvents stack
     *
     * @private
     */
    /**
     * Changes input mode
     *
     * @param {String} mode Changes current input mode, can be `virtual_joystick`, `keyboard`, `gamepad`
     */
    setInputMode(mode:string):void;
        /**
         * Returns an object with the state of all keys
         */
        getAllKeysStatus():JSObject;
        getKeyStatus(key:string,  latch:boolean):boolean;
        isKeyDown(key:string|number, latch?:boolean):boolean;
        /**
         * Install callback that gets called when a key is pressed/released
         *
         * @param {String} key space-separated list of keys to listen for
         * @param {String} event to listen for: can be `up` or `down`
         * @param {Function} callback the function to call
         */
        installKeyCallback(key:string, event:string, callback:(key:string, event:string) => void):void;
        removeKeyCallback(key:string, event:string, callback:() => void):void;
        clearEvents():void;
    }

    interface Promise {
        then(val?: () => any): Promise;
        catch(val?: () => any): Promise;
    }

    /* Deferred */
    export class Deferred {
        constructor();
        /**
         * Creates and immediately resolves a new deferred.
         *
         * @param {any} val the value to resolve the promise with
         *
         *
         */
        static resolve(val?: any): Promise;
        promise: Promise;
        reject(val: any): void;
        resolve(val: any): void;
    }

    /* Dom support */
    interface _Dom<TElement = HTMLElement> extends Iterable<TElement>{
        [key: number]: HTMLElement;
        length: number;
        css(prop: string, val: string): _Dom;
        css(prop: JSObject): _Dom;
        css(prop: string): string|null;
        find(selector: string): _Dom;
        appendTo(selector: string | _Dom | HTMLElement): _Dom;
        attr(att: string, val: string): _Dom;
        attr(att: JSObject): _Dom;
        addClass(classes: string): _Dom;
        removeClass(classes: string): _Dom;
        html(str: string): _Dom;
        show(): _Dom;
        hide(): _Dom;
    }

    /* Game Support */
    export interface GameOptions{
        name: string,
        showFps: boolean,
        width: number,
        height: number,
        debug: boolean,
        scene?: Scene,
        target?: string | HTMLElement,
        sound?:boolean
    }

    interface SceneOptions{
        name?:string,
        resources?:Res[],
        opacity?:number,
        layers?:number
        hudScene?:Scene
    }

    interface DrawableOptions{
        x?: number,
        y?: number,
        behavior?: { new(sprite: Drawable, options?: JSObject): Behavior },
        canCollide?: boolean,
        canCollideFriendBullet?: boolean,
        collideGroup?: number,
        objectId?: string,
        layer?: number,
        map?: Map
        visible?: boolean,
        pool?: number
    }

    interface SimpleTextOptions extends DrawableOptions{
        text?: string,
        width?: number,
        height?: number,
        fontFace?: string,
        fontSize?: string,
        fontStyle?: string,
        fontWeight?: string,
        align?: string,
        color?: string,
    }

    interface PaintOptions extends DrawableOptions{
        width?: number,
        height?: number,
        color?: string;
    }

    interface BitmapTextOptions extends DrawableOptions{
        width?: number,
        height?:number,
        offsetX: number,
        startY: number,
        charWidth: number,
        charHeight: number,
        imageId?: string,
        imageSrc?:string,
        scrollOffsetX?: number,
        scrollOffsetY?: number,
        text?: string,
        size?: string
    }

    interface SpriteOptions extends DrawableOptions{
        easing?:string,
        imageId?: string,
        animations?: Animations,
        data?: JSObject
    }

    interface AnimOptions {
        numFrames: number,
        frameWidth: number,
        frameHeight: number,
        frameDuration: number,
        offsetX?: number,
        offsetY?: number,
        frameSpacing?: number
    }

    interface AnimationObject{
        frameDuration?: number,
        frames: {
            offsetX: number,
            offsetY: number,
            width: number,
            height: number,
            hitBox?: {
                x: number,
                y: number,
                x2: number,
                y2: number
            },
            plane?: number
        }[],
        loop?: number,
        speed?: number
    }

    type JSObject = {
        [key: string]: any
    }

    type Animations = {
        [key: string]: AnimationObject
    }

    export interface GameEvent {
        type: string,
        data: JSObject
    }
}