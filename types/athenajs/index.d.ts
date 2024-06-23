export as namespace AthenaJS;

export function Dom(sel?: string | HTMLElement): _Dom<HTMLElement>;

export class Scene {
    constructor(options?: SceneOptions);
    map: Map;
    hudScene: Scene | null;
    running: boolean;
    opacity: number;
    addObject(object: Drawable | Drawable[], layer?: number): Scene;
    animate(fxName: string, options: EffectOptions): Promise;
    bindEvents(eventList: string): void;
    debug(bool?: boolean): void;
    fadeIn(duration: number): Promise;
    fadeOut(duration: number): Promise;
    fadeInAndOut(inDuration: number, delay: number, outDuration: number): Promise;
    getOpacity(): number;
    getPlayTime(): number;
    load(type: string, src: string, id?: string): void;
    loadAudio(src: string, id?: string): void;
    loadImage(src: string, id?: string): void;
    loadMap(src: string, id?: string): void;
    notify(name: string, data?: JSObject): void;
    removeObject(obj: Drawable): void;
    setBackgroundImage(image: string | HTMLImageElement): void;
    setLayerPriority(layer: number, background: boolean): void;
    setMap(map: Map | JSObject, x?: number, y?: number): void;
    setOpacity(opacity: number): void;
    setup(): void;
    start(): void;
    stop(): void;
}
export class Game {
    constructor(options: GameOptions);
    bindEvents(eventList: string): void;
    setScene(scene: Scene): void;
    toggleFullscreen(): void;
    toggleSound(bool: boolean): void;
    toggleTileInspector(bool: boolean): void;
    togglePause(): void;
    scene: Scene;
    sound: boolean;
}
export class Drawable {
    constructor(type: string, options: DrawableOptions);
    addChild(child: Drawable): void;
    animate(name: string, options: JSObject): Promise;
    center(): Drawable;
    destroy(data?: any): void;
    moveTo(x: number, y: number, duration?: number): Drawable;
    notify(id: string, data?: JSObject): void;
    onCollision(object: Drawable): void;
    onEvent(eventType: string, data?: JSObject): void;
    playSound(id: string, options?: { pan?: boolean | undefined; loop?: false | undefined }): void;
    setBehavior(behavior: string | { new(sprite: Drawable, options?: JSObject): Behavior }, options?: JSObject): void;
    setScale(scale: number): void;
    getCurrentWidth(): number;
    getCurrentHeight(): number;
    getProperty(prop: string): any;
    setProperty(prop: string, value: any): void;
    setMask(mask: MaskOptions | null, exclude?: boolean): void;
    stopAnimate(endValue?: number): void;
    reset(): void;
    show(): void;
    hide(): void;
    type: string;
    width: number;
    height: number;
    x: number;
    y: number;
    vx: number;
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

export interface MaskOptions {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface MenuItem {
    text: string;
    selectable: boolean;
    visible: boolean;
    active?: boolean | undefined;
}

export interface MenuOptions {
    title: string;
    color: string;
    menuItems: MenuItem[];
}

export class Menu extends Drawable {
    constructor(id: string, options: MenuOptions);
    nextItem(): void;
    getSelectedItemIndex(): number;
}

export class SimpleText extends Drawable {
    constructor(type: string, simpleTextOptions: SimpleTextOptions);
    getCurrentOffsetX(): number;
    getCurrentOffsetY(): number;
    setColor(color: string): void;
    setSize(width: number, height: number): void;
    setText(text: string): void;
}
export class Paint extends Drawable {
    constructor(type: string, paintOptions: PaintOptions);
    arc(
        cx: number,
        cy: number,
        r: number,
        starteAngle: number,
        endAngle: number,
        fillStyle: string,
        borderSize: number,
    ): void;
    fill(color?: string): void;
    circle(cx: number, cy: number, r: number, fillStyle?: string, borderWidth?: number, borderStyle?: string): void;
    rect(x: number, y: number, width: number, height: number, color: string): void;
    name: string;
    color: string;
}

export class BitmapText extends Drawable {
    constructor(type: string, textOptions: BitmapTextOptions);
    setText(text: string): void;
}

export class Sprite extends Drawable {
    constructor(type: string, spriteOptions: SpriteOptions);
    addAnimation(name: string, imgPath: string, options: AnimOptions): void;
    setAnimation(name: string, fn?: Callback, frameNum?: number, revert?: boolean): void;
    clearMove(): void;
}

export interface pixelPos {
    x: number;
    y: number;
}

export class Map {
    constructor(options: MapOptions);
    addObject(obj: Drawable, layerIndex?: number): void;
    addTileSet(tiles: TileDesc[]): void;
    checkMatrixForCollision(buffer: number[], matrixWidth: number, x: number, y: number, behavior: number): boolean;
    clear(tileNum?: number, behavior?: number): void;
    getTileBehaviorAtIndex(col: number, row: number): number;
    getTileIndexFromPixel(x: number, y: number): pixelPos;
    moveTo(x: number, y: number): void;
    respawn(): void;
    setData(map: Uint8Array, behaviors: Uint8Array): void;
    setEasing(easing: string): void;
    shift(startLine: number, height: number): void;
    updateTile(col: number, row: number, tileNum?: number, behavior?: number): void;
    duration: number;
    numRows: number;
    numCols: number;
    width: number;
    height: number;
    tileWidth: number;
    tileHeight: number;
}

export class Tile {
    constructor(options: JSObject);
    static TYPE: {
        AIR: 1;
        WALL: 2;
        LADDER: 3;
    };
    offsetX: number;
    offsetY: number;
    width: number;
    height: number;

    inertia: number;
    upCollide: boolean;
    downCollide: boolean;
}

export interface TileDesc {
    offsetX: number;
    offsetY: number;
    width: number;
    height: number;
}

export interface MapOptions {
    src: string;
    tileWidth: number;
    tileHeight: number;
    width: number;
    height: number;
    viewportW?: number | undefined;
    viewportH?: number | undefined;
    buffer?: ArrayBuffer | undefined;
}

export interface FXInstance {
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
     */
    addFX(fxName: string, FxClass: { new(): Effect }): void;

    /**
     * Retrieve an effect Class by its name
     */
    getEffect(fxName: string): Effect;

    /**
     * Add a new easing function for other objects to use
     */
    addEasing(easingName: string, easingFn: (x?: number, t?: number, b?: number, c?: number, d?: number) => void): void;

    /**
     * Retrieves an easing function
     */
    getEasing(easingName: string): (x?: number, t?: number, b?: number, c?: number, d?: number) => void;
}

export interface EffectOptions {
    easing?: string | undefined;
    when?: string | undefined;
    startValue?: number | undefined;
    endValue?: number | undefined;
    duration?: number | undefined;
}

export class Effect {
    width: number;
    height: number;
    buffer: RenderingContext;
    animProgress: number;
    startValue: number;
    ended: boolean;
    /**
     * This the class constructor. Default options are:
     */
    constructor(options: EffectOptions, display: Display);

    /**
     * Changes the easing function used for the ffect
     */
    setEasing(easing: (x?: number, t?: number, b?: number, c?: number, d?: number) => void): void;

    /**
     * Called when the ffect is started.
     *
     * This method can be overriden but the super should always be called
     */
    start(): Promise;

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
export type RenderingContext = CanvasRenderingContext2D;

export interface DisplayOptions {
    width: number;
    height: number;
    type: string;
    layers?: boolean[] | undefined;
    name: string;
}

export class Display {
    /**
     * Creates a new Display instance
     */
    constructor(options: DisplayOptions, target: string | HTMLElement);

    /**
     * Creates a new (offscreen) drawing buffer
     */
    getBuffer(width: number, height: number): RenderingContext;

    /**
     * Toggles fullscreen display scaling
     */
    toggleFullscreen(): void;

    /**
     * Changes the zIndex property of the specified layer canvas
     */
    setLayerZIndex(layer: number, zIndex: number): void;

    /**
     * Clears a canvas display buffer
     */
    clearScreen(ctx: RenderingContext): void;

    /**
     * Clears every rendering buffer, including the special fxCtx one
     */
    clearAllScreens(): void;

    /**
     * Changes the (CSS) opacity of a canvas
     */
    setCanvasOpacity(canvas: HTMLElement, opacity: number): void;

    /**
     * Renders the specified scene
     */
    renderScene(scene: Scene): void;

    /**
     * Prepares the canvas before rendering images.
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
     */
    animate(fxName: string, options: EffectOptions, context: RenderingContext): Promise;

    /**
     * stops current animation
     *
     * TODO
     */
    stopAnimate(fxName?: string): void;

    /**
     * Executes an effect on a frame at a given time
     */
    executeFx(ctx: RenderingContext, fxCtx: RenderingContext, obj: Drawable, time: number, when: string): void;

    /**
     * Clears every display layer and clears fx queues
     */
    clearDisplay(): void;
}

export const InputManager: _InputManager;

export class MapEvent {
    /**
     * Creates a new MapEvent
     */
    constructor(map: Map);

    /**
     * Resets the MapEvent switches, events and items
     */
    reset(): void;

    /**
     * Adds a new [`Drawable`]{#item} onto the map
     */
    addItem(id: string, item: Drawable): void;

    /**
     * Returns an item
     */
    getItem(id: string): Drawable | undefined;

    // TODO: ability to trigger an event once a switch has been modified
    setSwitch(id: string, bool: boolean): void;

    toggleSwitch(id: string): void;

    /**
     * Retrieves a switch from the map using its id
     */
    getSwitch(id: string): any;

    /**
     * checks of conditions of specified trigger are valid
     */
    checkConditions(trigger: JSObject): boolean;

    handleAction(options: JSObject): void;

    handleEvent(options: JSObject): boolean;

    /**
     * Schedule adding a new object to the map
     */
    scheduleSprite(spriteId: string, spriteOptions: JSObject, delay: number): Drawable;

    /**
     * Add a new wave of objects to the map
     * Used for example when the player triggers apparition of several enemies or bonuses
     *
     * @related {Wave}
     */
    handleWave(options: JSObject): boolean;

    endWave(): void;

    triggerEvent(id: string): void;

    isEventTriggered(id: string): boolean;
}

export class Behavior {
    vx: number;
    vy: number;
    gravity: number;
    sprite: Drawable;
    constructor(sprite: Drawable, options?: JSObject);
    onUpdate(timestamp: number): void;
    onVXChange?(vx: number): void;
    onVYChange?(vy: number): void;

    /**
     * Returns current mapEvent
     */
    getMapEvent(): MapEvent;
    reset(): void;
}

export interface _AudioManager {
    audioCache: JSObject;
    enabled: boolean;
    /**
     * Adds a new sound element to the audio cache.
     * *Note* if a sound with the same id has already been added, it will be replaced
     * by the new one.
     */
    addSound(id: string, element: HTMLAudioElement): void;
    /**
     * Toggles global sound playback
     */
    toggleSound(bool: boolean): void;
    /**
     * Plays the specified sound with `id`.
     */
    play(id: string, loop?: boolean, volume?: number, panning?: number): any;
    /**
     * Stops playing the sound id
     */
    stop(id: string, instanceId: any): void;
}

export const AudioManager: _AudioManager;

export interface Res {
    id: string;
    type: string;
    src: string;
}

export type Callback = (...args: any[]) => void;

export interface _NotificationManager {
    notify(name: string, data?: JSObject): void;
}

export const NotificationManager: _NotificationManager;

export interface _ResourceManager {
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

export interface _InputManager {
    /**
     * A list of common keyCodes
     */
    KEYS: {
        "UP": 38;
        "DOWN": 40;
        "LEFT": 37;
        "RIGHT": 39;
        "SPACE": 32;
        "ENTER": 13;
        "ESCAPE": 27;
        "CTRL": 17;
    };
    /**
     * List of common pad buttons
     */
    PAD_BUTTONS: {
        32: 1; // Face (main) buttons
        FACE_0: 1;
        FACE_3: 2;
        FACE_4: 3;
        LEFT_SHOULDER: 4; // Top shoulder buttons
        RIGHT_SHOULDER: 5;
        LEFT_SHOULDER_BOTTOM: 6; // Bottom shoulder buttons
        RIGHT_SHOULDER_BOTTOM: 7;
        SELECT: 8;
        START: 9;
        LEFT_ANALOGUE_STICK: 10; // Analogue sticks (if depressible)
        RIGHT_ANALOGUE_STICK: 11;
        38: 12; // Directional (discrete) pad
        40: 13;
        37: 14;
        39: 15;
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
    inputMode: string;
    // virtual joystick instance
    dPadJoystick: null;
    jPollInterval: number;
    /**
     * Initializes the InputManager with a reference to the game.
     *
     * This method prepares the InputManager by reseting keyboard states/handlers and
     * set current inputMode
     */
    init(): void;
    /**
     * Starts recording input events. They are stored into `InputManager.recordedEvents`
     */
    startRecordingEvents(): void;
    /**
     * Stops recording events.
     */
    stopRecordingEvents(): void;
    /**
     * After events have been reccorded they can be played back using this method.
     */
    playRecordedEvents(): void;
    /**
     * Sets next key states using recorded events
     *
     * TODO: add an optional callback to be called at the end of the playback
     * so that demo can be looped.
     */
    nextRecordedEvents(): void;
    /**
     * Saves current event state onto the recordedEvents stack
     */
    /**
     * Changes input mode
     */
    setInputMode(mode: string): void;
    /**
     * Returns an object with the state of all keys
     */
    getAllKeysStatus(): JSObject;
    getKeyStatus(key: string, latch: boolean): boolean;
    isKeyDown(key: string | number, latch?: boolean): boolean;
    /**
     * Install callback that gets called when a key is pressed/released
     */
    installKeyCallback(key: string, event: string, callback: (key: string, event: string) => void): void;
    removeKeyCallback(key: string, event: string, callback: () => void): void;
    clearEvents(): void;
}

export interface Promise {
    then(val?: () => any): Promise;
    catch(val?: () => any): Promise;
}

/* Deferred */
export class Deferred {
    constructor();
    /**
     * Creates and immediately resolves a new deferred.
     */
    static resolve(val?: any): Promise;
    promise: Promise;
    reject(val: any): void;
    resolve(val: any): void;
}

/* Dom support */
export interface _Dom<TElement> extends Iterable<TElement> {
    [key: number]: TElement;
    length: number;
    css(prop: string, val: string): _Dom<TElement>;
    css(prop: JSObject): _Dom<TElement>;
    css(prop: string): string | null;
    find(selector: string): _Dom<TElement>;
    appendTo(selector: string | _Dom<TElement> | HTMLElement): _Dom<TElement>;
    attr(att: string, val: string): _Dom<TElement>;
    attr(att: JSObject): _Dom<TElement>;
    addClass(classes: string): _Dom<TElement>;
    removeClass(classes: string): _Dom<TElement>;
    html(str: string): _Dom<TElement>;
    show(): _Dom<TElement>;
    hide(): _Dom<TElement>;
}

/* Game Support */
export interface GameOptions {
    name: string;
    showFps: boolean;
    width: number;
    height: number;
    debug: boolean;
    scene?: Scene | undefined;
    target?: string | HTMLElement | undefined;
    sound?: boolean | undefined;
}

export interface SceneOptions {
    name?: string | undefined;
    resources?: Res[] | undefined;
    opacity?: number | undefined;
    layers?: number | undefined;
    hudScene?: Scene | undefined;
}

export interface DrawableOptions {
    x?: number | undefined;
    y?: number | undefined;
    behavior?: { new(sprite: Drawable, options?: JSObject): Behavior } | undefined;
    canCollide?: boolean | undefined;
    canCollideFriendBullet?: boolean | undefined;
    collideGroup?: number | undefined;
    objectId?: string | undefined;
    layer?: number | undefined;
    map?: Map | undefined;
    visible?: boolean | undefined;
    pool?: number | undefined;
}

export interface SimpleTextOptions extends DrawableOptions {
    text?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    fontFace?: string | undefined;
    fontSize?: string | undefined;
    fontStyle?: string | undefined;
    fontWeight?: string | undefined;
    align?: string | undefined;
    color?: string | undefined;
}

export interface PaintOptions extends DrawableOptions {
    width?: number | undefined;
    height?: number | undefined;
    color?: string | undefined;
    lineHeight?: number | undefined;
}

export interface BitmapTextOptions extends DrawableOptions {
    width?: number | undefined;
    height?: number | undefined;
    offsetX: number;
    startY: number;
    charWidth: number;
    charHeight: number;
    imageId?: string | undefined;
    imageSrc?: string | undefined;
    scrollOffsetX?: number | undefined;
    scrollOffsetY?: number | undefined;
    text?: string | undefined;
    size?: string | undefined;
}

export interface SpriteOptions extends DrawableOptions {
    easing?: string | undefined;
    imageId?: string | undefined;
    animations?: Animations | undefined;
    data?: JSObject | undefined;
}

export interface AnimOptions {
    numFrames: number;
    frameWidth: number;
    frameHeight: number;
    frameDuration: number;
    offsetX?: number | undefined;
    offsetY?: number | undefined;
    frameSpacing?: number | undefined;
}

export interface AnimationObject {
    frameDuration?: number | undefined;
    frames: Array<{
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
        hitBox?: {
            x: number;
            y: number;
            x2: number;
            y2: number;
        } | undefined;
        plane?: number | undefined;
    }>;
    loop?: number | undefined;
    speed?: number | undefined;
}

export interface JSObject {
    [key: string]: any;
}

export interface Animations {
    [key: string]: AnimationObject;
}

export interface GameEvent {
    type: string;
    data: JSObject;
}
