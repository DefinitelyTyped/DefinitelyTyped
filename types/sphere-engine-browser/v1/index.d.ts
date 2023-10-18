/*
 * Deprecated Sphere 1.x objects necessary for some functions
 * Most of the JSDoc comments have been copied/adapted from the old Sphere documentation
 * https://github.com/sphere-group/sphere/blob/master/sphere/docs/development/api.txt
 */

declare const COMMAND_WAIT = 0;
declare const COMMAND_ANIMATE = 1;
declare const COMMAND_FACE_NORTH = 2;
declare const COMMAND_FACE_NORTHEAST = 3;
declare const COMMAND_FACE_EAST = 4;
declare const COMMAND_FACE_SOUTHEAST = 5;
declare const COMMAND_FACE_SOUTH = 6;
declare const COMMAND_FACE_SOUTHWEST = 7;
declare const COMMAND_FACE_WEST = 8;
declare const COMMAND_FACE_NORTHWEST = 9;
declare const COMMAND_MOVE_NORTH = 10;
declare const COMMAND_MOVE_EAST = 11;
declare const COMMAND_MOVE_SOUTH = 12;
declare const COMMAND_MOVE_WEST = 13;

declare const EDGE_LEFT = 0;
declare const EDGE_TOP = 1;
declare const EDGE_RIGHT = 2;
declare const EDGE_BOTTOM = 3;

declare const KEY_ESCAPE = 0;
declare const KEY_F1 = 1;
declare const KEY_F2 = 2;
declare const KEY_F3 = 3;
declare const KEY_F4 = 4;
declare const KEY_F5 = 5;
declare const KEY_F6 = 6;
declare const KEY_F7 = 7;
declare const KEY_F8 = 8;
declare const KEY_F9 = 9;
declare const KEY_F10 = 10;
declare const KEY_F11 = 11;
declare const KEY_F12 = 12;
declare const KEY_TILDE = 13;
declare const KEY_0 = 14;
declare const KEY_1 = 15;
declare const KEY_2 = 16;
declare const KEY_3 = 17;
declare const KEY_4 = 18;
declare const KEY_5 = 19;
declare const KEY_6 = 20;
declare const KEY_7 = 21;
declare const KEY_8 = 22;
declare const KEY_9 = 23;
declare const KEY_MINUS = 24;
declare const KEY_EQUALS = 25;
declare const KEY_BACKSPACE = 26;
declare const KEY_TAB = 27;
declare const KEY_A = 28;
declare const KEY_B = 29;
declare const KEY_C = 30;
declare const KEY_D = 31;
declare const KEY_E = 32;
declare const KEY_F = 33;
declare const KEY_G = 34;
declare const KEY_H = 35;
declare const KEY_I = 36;
declare const KEY_J = 37;
declare const KEY_K = 38;
declare const KEY_L = 39;
declare const KEY_M = 40;
declare const KEY_N = 41;
declare const KEY_O = 42;
declare const KEY_P = 43;
declare const KEY_Q = 44;
declare const KEY_R = 45;
declare const KEY_S = 46;
declare const KEY_T = 47;
declare const KEY_U = 48;
declare const KEY_V = 49;
declare const KEY_W = 50;
declare const KEY_X = 51;
declare const KEY_Y = 52;
declare const KEY_Z = 53;
declare const KEY_SHIFT = 54;
declare const KEY_CTRL = 55;
declare const KEY_ALT = 56;
declare const KEY_SPACE = 57;
declare const KEY_OPENBRACE = 58;
declare const KEY_CLOSEBRACE = 59;
declare const KEY_SEMICOLON = 60;
declare const KEY_APOSTROPHE = 61;
declare const KEY_COMMA = 62;
declare const KEY_PERIOD = 63;
declare const KEY_SLASH = 64;
declare const KEY_BACKSLASH = 65;
declare const KEY_ENTER = 66;
declare const KEY_INSERT = 67;
declare const KEY_DELETE = 68;
declare const KEY_HOME = 69;
declare const KEY_END = 70;
declare const KEY_PAGEUP = 71;
declare const KEY_PAGEDOWN = 72;
declare const KEY_UP = 73;
declare const KEY_RIGHT = 74;
declare const KEY_DOWN = 75;
declare const KEY_LEFT = 76;
declare const KEY_NUM_0 = 77;
declare const KEY_NUM_1 = 78;
declare const KEY_NUM_2 = 79;
declare const KEY_NUM_3 = 80;
declare const KEY_NUM_4 = 81;
declare const KEY_NUM_5 = 82;
declare const KEY_NUM_6 = 83;
declare const KEY_NUM_7 = 84;
declare const KEY_NUM_8 = 85;
declare const KEY_NUM_9 = 86;
declare const KEY_CAPSLOCK = 87;
declare const KEY_NUMLOCK = 88;
declare const KEY_SCROLLOCK = 89;

declare const SCRIPT_ON_ENTER_MAP = 0;
declare const SCRIPT_ON_LEAVE_MAP = 1;
declare const SCRIPT_ON_LEAVE_MAP_NORTH = 2;
declare const SCRIPT_ON_LEAVE_MAP_EAST = 3;
declare const SCRIPT_ON_LEAVE_MAP_SOUTH = 4;
declare const SCRIPT_ON_LEAVE_MAP_WEST = 5;
declare const SCRIPT_ON_CREATE = 0;
declare const SCRIPT_ON_DESTROY = 1;
declare const SCRIPT_ON_ACTIVATE_TOUCH = 2;
declare const SCRIPT_ON_ACTIVATE_TALK = 3;
/** Called when the command queue for the person runs out */
declare const SCRIPT_COMMAND_GENERATOR = 4;

/** default for drawing */
declare const BLEND = 0;
declare const REPLACE = 1;
declare const RGB_ONLY = 2;
declare const ALPHA_ONLY = 3;
declare const ADD = 4;
declare const SUBTRACT = 5;
/** default for masking */
declare const MULTIPLY = 6;
declare const AVERAGE = 7;
declare const INVERT = 8;

/**
 * A Sphere 1.x color object
 *
 * Note that the RGBA properties of Sphere 1.x color objects are integers between 0 and 255, but
 * the properties of miniSphere `Color` classes are floating point numbers between 0.0 and 1.0
 *
 * Objects from the 1.x API should generally only be used for Sphere 1.x API functions
 * that require them.
 */
interface Sphere1Color {
    red: number;
    green: number;
    blue: number;
    alpha: number;
}

/**
 * A Sphere 1.x font object
 *
 * Objects from the 1.x API should generally only be used for Sphere 1.x API functions
 * that require them.
 */
interface Sphere1Font {
    setColorMask(color: Sphere1Color): void;
    getColorMask(): Sphere1Color;
    drawText(x: number, y: number, text: any): void;
    drawZoomedText(x: number, y: number, scale: number, text: any): void;
    drawTextBox(x: number, y: number, w: number, h: number, offset: number, text: any): void;
    wordWrapString(string: any, width: number): any[];
    getHeight(): number;
    getStringWidth(string: any): number;
    getStringHeight(string: any, width: number): number;
    clone(): Sphere1Font;
    getCharacterImage(code: number): Sphere1Image;
    setCharacterImage(code: number, image: Sphere1Image): void;
}

/**
 * A Sphere 1.x image object
 *
 * Objects from the 1.x API should generally only be used for Sphere 1.x API functions
 * that require them.
 */
interface Sphere1Image {
    width: number;
    height: number;
    blit(x: number, y: number, blendMode?: number): void;
    blitMask(x: number, y: number, mask: Sphere1Color, blendMode?: number, maskBlendMode?: number): void;
    rotateBlit(x: number, y: number, radians: number, blendMode?: number): void;
    rotateBlitMask(
        x: number,
        y: number,
        radians: number,
        mask: Sphere1Color,
        blendMode?: number,
        maskBlendMode?: number,
    ): void;
    zoomBlit(x: number, y: number, factor: number, blendmode?: number): void;
    zoomBlitMask(
        x: number,
        y: number,
        factor: number,
        color: Sphere1Color,
        blendmode?: number,
        maskBlendMode?: number,
    ): void;
    transformBlit(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        x4: number,
        y4: number,
        blendmode?: number,
    ): void;
    transformBlitMask(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        x4: number,
        y4: number,
        mask: Sphere1Color,
        blendmode?: number,
        maskBlendMode?: number,
    ): void;
    createSurface(): Sphere1Surface;
}

interface Sphere1Point {
    x: number;
    y: number;
}

/**
 * A Sphere 1.x surface object
 *
 * Objects from the 1.x API should generally only be used for Sphere 1.x API functions
 * that require them.
 */
interface Sphere1Surface {
    width: number;
    height: number;
    applyLookup(
        x: number,
        y: number,
        w: number,
        h: number,
        redLookup: number[],
        greenLookup: number[],
        blueLookup: number[],
        alphaLookup: number[],
    ): void;
    applyColorFX(x: number, y: number, w: number, h: number, colorMatrix: any): void;
    applyColorFX4(
        x: number,
        y: number,
        w: number,
        h: number,
        matrixUL: any,
        matrixUR: any,
        matrixLL: any,
        matrixLR: any,
    ): void;
    blit(x: number, y: number): void;
    blitSurface(surface: Sphere1Surface, x: number, y: number): void;
    blitMaskSurface(surface: Sphere1Surface, x: number, y: number, mask: Sphere1Color, maskBlendMode: number): void;
    rotateBlitSurface(surface: Sphere1Surface, x: number, y: number, radians: number): void;
    rotateBlitMaskSurface(
        surface: Sphere1Surface,
        x: number,
        y: number,
        radians: number,
        mask: Sphere1Color,
        maskBlendMode: number,
    ): void;
    zoomBlitSurface(surface: Sphere1Surface, x: number, y: number, factor: number): void;
    zoomBlitMaskSurface(
        surface: Sphere1Surface,
        x: number,
        y: number,
        factor: number,
        mask: Sphere1Color,
        maskBlendMode?: number,
    ): void;
    transformBlitSurface(
        surface: Sphere1Surface,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        x4: number,
        y4: number,
    ): void;
    transformBlitMaskSurface(
        surface: Sphere1Surface,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        x4: number,
        y4: number,
        mask: Sphere1Color,
        maskBlendMode?: number,
    ): void;
    createImage(): Sphere1Image;
    setBlendMode(mode: number): void;
    getPixel(x: number, y: number): Sphere1Color;
    setPixel(x: number, y: number, color: Sphere1Color): void;
    setAlpha(alpha: number): void;
    replaceColor(oldColor: Sphere1Color, newColor: Sphere1Color): void;
    findColor(aColor: Sphere1Color): boolean;
    floodFill(x: number, y: number, color: Sphere1Color): void;
    pointSeries(array: Sphere1Color[], color: Sphere1Color): void;
    line(x1: number, y1: number, x2: number, y2: number, color: Sphere1Color): void;
    gradientLine(x1: number, y1: number, x2: number, y2: number, color1: Sphere1Color, color2: Sphere1Color): void;
    lineSeries(array: Sphere1Point[], color: Sphere1Color, type?: number): void;
    bezierCurve(
        color: Sphere1Color,
        step: number,
        Ax: number,
        Ay: number,
        Bx: number,
        By: number,
        Cx: number,
        Cy: number,
        Dx?: number,
        Dy?: number,
    ): void;
    outlinedRectangle(x: number, y: number, width: number, height: number, color: Sphere1Color, size?: number): void;
    rectangle(x: number, y: number, width: number, height: number, color: Sphere1Color): void;
    gradientRectangle(
        x: number,
        y: number,
        width: number,
        colorUL: Sphere1Color,
        colorUR: Sphere1Color,
        colorLR: Sphere1Color,
        colorLL: Sphere1Color,
    ): void;
    triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color: Sphere1Color): void;
    gradientTriangle(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        c1: Sphere1Color,
        c2: Sphere1Color,
        c3: Sphere1Color,
    ): void;
    polygon(array: Sphere1Point[], color: Sphere1Color, invert: boolean): void;
    outlinedEllipse(x: number, y: number, rx: number, ry: number, c: Sphere1Color): void;
    filledEllipse(x: number, y: number, rx: number, ry: number, c: Sphere1Color): void;
    outlinedCircle(x: number, y: number, radius: number, color: Sphere1Color, antialias?: boolean): void;
    filledCircle(x: number, y: number, radius: number, color: Sphere1Color, antialias?: boolean): void;
    gradientCircle(
        x: number,
        y: number,
        radius: number,
        color1: Sphere1Color,
        color2: Sphere1Color,
        antialias: boolean,
    ): void;
    rotate(radians: number, resize: boolean): void;
    resize(w: number, h: number): void;
    rescale(w: number, h: number): void;
    flipHorizontally(): void;
    flipVertically(): void;
    clone(): Sphere1Surface;
    cloneSection(x: number, y: number, w: number, h: number): Sphere1Surface;
    drawText(font: Sphere1Font, x: number, y: number, text: string): void;
    drawZoomedText(font: Sphere1Font, x: number, y: number, scale: number, text: string): void;
    drawTextBox(font: Sphere1Font, x: number, y: number, w: number, h: number, offset: number, text: string): void;
    save(filename: string): void;
}

interface SphereGame {
    name: string;
    directory: string;
    author: string;
    description: string;
}

interface SpherePersonData {
    /** the number of frames for the person's current direction */
    num_frames: number;
    /** the number of directions for the person */
    num_directions: number;
    /** the width of the spriteset's current frame */
    width: number;
    /** the height of the spriteset's current frame */
    height: number;
    /** the person that `name` is following, or "" if no-one */
    leader: string;
}

interface SphereSpriteset {
    /* Spriteset base obstruction object */
    base: SphereSpritesetBase;
    /** The filename that the spriteset was loaded with */
    filename: string;
    /** Array of image objects */
    images: Sphere1Image[];
    /** Array of spriteset_direction objects */
    directions: any[];
    /** Saves the spriteset object to `filename` */
    save(filename: string): void;
    /** Returns a copy of the spriteset object */
    clone(): SphereSpriteset;
}

interface SphereSpritesetBase {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

interface SphereSpritesetDirection {
    /** Name of the direction */
    name: string;
    /** Array of spriteset frame objects */
    frames: SphereSpritesetFrame[];
}

interface SphereSpritesetFrame {
    /** Index into images array */
    index: number;
    /** Number of frames before animation should switch */
    delay: number;
}

interface SphereWindowStyle {
    /**
     * Draws the window at `x`,`y` with the width and height of `w` and `h`.
     * Note that window corners and edges are drawn outside of the width
     * and height of the window.
     */
    drawWindow(x: number, y: number, w: number, h: number): void;
    /**
     * Sets the color mask for a windowstyle to `color`
     * @see ApplyColorMask
     */
    setColorMask(color: Sphere1Color): void;
    /**
     * Gets the color mask being used by the windowstyle object
     */
    getColorMask(): Sphere1Color;
    /**
     * Return the border size (height or width) in pixels for the windowstyle object.
     * You can use EDGE_LEFT, EDGE_TOP, EDGE_RIGHT and EDGE_BOTTOM as parameters.
     * Note that the corner sizes are ignored.
     */
    getBorder(border: number): number;
}

/*
 * Sphere 1.x functions
 */

/**
 * Returns the Sphere API version (2 for miniSphere)
 */
declare function GetVersion(): number;

/**
 * Returns the API version string (v2.0 for miniSphere)
 */
declare function GetVersionString(): string;

/**
 * Invoke the garbage collector (you shouldn't need to use this in most cases)
 */
declare function GarbageCollect(): void;

/**
 * Returns an array of object literals with properties describing the games in
 * `$HOME/Documents/miniSphere/Games/` for creating a startup game loader
 */
declare function GetGameList(): SphereGame[];

/**
 * Runs a Sphere game, given its directory
 */
declare function ExecuteGame(directory: string): void;

/**
 * Restarts the current game (use Sphere.restart() instead)
 * @deprecated
 */
declare function RestartGame(): void;

/**
 * Exits miniSphere (use Sphere.shutDown() instead)
 * @deprecated
 */
declare function Exit(): void;

/**
 * Displays the given message and exits (use Sphere.abort() instead)
 * @deprecated
 */
declare function Abort(message: any): void;

/**
 * Opens `filename` as a log file
 */
declare function OpenLog(
    filename: string,
): {
    /**
     * writes `text` to the log file
     */
    write(text: string): void;
    /**
     * Begins an indented block in the text file with `name` as the block title
     */
    beginBlock(name: string): void;
    /**
     * Closes the current block
     */
    endBlock(): void;
};

/**
 * Returns the number of milliseconds since some arbitrary time
 * @example
 * let start = GetTime();
 * while (GetTime() < start + 1000) {
 *     // do stuff
 * }
 */
declare function GetTime(): number;

/**
 * Creates and returns a Sphere 1.x color object. `r`, `g`, `b`, and `a` should be 0-255
 */
declare function CreateColor(r: number, g: number, b: number, a: number): Sphere1Color;

/**
 * Blends `c1` and `c2` and returns the result
 */
declare function BlendColors(c1: Sphere1Color, c2: Sphere1Color): Sphere1Color;

/**
 * Blends `c1` and `c2` with custom weights
 * @example
 * BlendColorsWeighted(a,b,1,1) // blends a and b equally
 * BlendColorsWeighted(a,b,1,2) // 33% a, 66% b
 */
declare function BlendColorsWeighted(
    c1: Sphere1Color,
    c2: Sphere1Color,
    c1_weight: number,
    c2_weight: number,
): Sphere1Color;

/**
 * Creates a colormatrix that is used to transform the colors contained in a pixel
 */
declare function CreateColorMatrix(
    rn: number,
    rr: number,
    rg: number,
    rb: number,
    gn: number,
    gr: number,
    gg: number,
    gb: number,
    bn: number,
    br: number,
    bg: number,
    bb: number,
): any;

/**
 * Returns an object representing the map engine
 */
declare function GetMapEngine(): {
    /**
     * Saves the loaded map to `filename`
     */
    save(filename: string): void;
    /**
     * Adds a new layer filled with tile index
     */
    layerAppend(width: number, height: number, tile: string): void;
};

/**
 * Starts the map engine with the map specified and runs at `fps` frames per second
 */
declare function MapEngine(filename: string, fps: number): void;

/**
 * Changes the current map
 */
declare function ChangeMap(filename: string): void;

/**
 * Exits the map engine. Note: This tells the map engine to shut
 * down. This does not mean the engine shuts down immediately. You
 * must wait for the original call to MapEngine() to return before you
 * can start a new map engine.
 */
declare function ExitMapEngine(): void;

/**
 * Returns `true` if the map engine is running
 */
declare function IsMapEngineRunning(): boolean;

/**
 * Updates the map engine (entity states, color masks, etc)
 */
declare function UpdateMapEngine(): void;

/**
 * Sets the frame rate of the map engine
 */
declare function SetMapEngineFrameRate(fps: number): void;

/**
 * Returns the map engine's framerate
 */
declare function GetMapEngineFrameRate(): number;

/**
 * Calls the given map script. `which` can be one of the following:
 * `SCRIPT_ON_ENTER_MAP`, `SCRIPT_ON_LEAVE_MAP`,
 * `SCRIPT_ON_LEAVE_MAP_NORTH`, `SCRIPT_ON_LEAVE_MAP_EAST`,
 * `SCRIPT_ON_LEAVE_MAP_SOUTH`, or `SCRIPT_ON_LEAVE_MAP_WEST`
 */
declare function CallMapScript(which: number): void;

/**
 * Specifies that `script` should be called before the `which` map script.
 * The map engine doesn't necessarily need to be running.
 */
declare function SetDefaultMapScript(which: number, script: string): void;

/**
 * Calls the default `which` map script.
 */
declare function CallDefaultMapScript(which: number): void;

/**
 * Returns the number of layers in the loaded map
 */
declare function GetNumLayers(): number;

/**
 * Returns the name of the layer at `index`, with 0 as the bottom layer
 */
declare function GetLayerName(index: number): string;

/**
 * Returns the width (in tiles) of the layer at `index`, with 0 as the bottom layer
 */
declare function GetLayerWidth(index: number): number;

/**
 * Returns the height (in tiles) of the layer at `index`, with 0 as the bottom layer
 */
declare function GetLayerHeight(index: number): number;

/**
 * Returns `true` if the layer at `index` is visible, with 0 as the bottom layer
 */
declare function IsLayerVisible(index: number): boolean;

/**
 * Sets the visibility of the layer at `index` to `visible`, with 0 as the bottom layer
 */
declare function SetLayerVisible(index: number, visible: boolean): void;

/**
 * Returns true if the layer at `index` is reflective, with 0 as the bottom layer
 */
declare function IsLayerReflective(index: number): boolean;

/**
 * Makes the layer at `index` reflective if `reflective` is true, with 0 as the bottom layer
 */
declare function SetLayerReflective(index: number, reflective: boolean): void;

/**
 * Sets the color mask of the layer at `index` to `mask`, with 0 as the bottom layer
 */
declare function SetLayerMask(index: number, mask: Sphere1Color): void;

/**
 * Returns the color mask of the layer at `index, with 0 as the bottom layer
 */
declare function GetLayerMask(index: number): Sphere1Color;

/**
 * Sets the x zoom/scale factor for the layer at `index` to `factorX`
 * @example
 * SetLayerScaleFactor(0, 0.5); // makes bottom layer zoom out to half the normal size
 */
declare function SetLayerScaleFactorX(index: number, factorX: number): void;

/**
 * Gets the angle (in radians) for the layer at `index`
 * @example
 * let angle = GetLayerAngle(0) // gets the angle of the bottom layer
 */
declare function GetLayerAngle(index: number): number;

/**
 * Sets the angle (in radians) for the layer at `index`, with 0 as the bottom layer
 */
declare function SetLayerAngle(index: number, angle: number): void;

/**
 * Returns the number of tiles in the loaded map
 */
declare function GetNumTiles(): number;

/**
 * Changes the specified tile on the loaded map to `tile`, with 0 as the bottom layer
 */
declare function SetTile(x: number, y: number, layer: number, tile: number): void;

/**
 * Returns the tile index at the specified location, with 0 as the bottom layer
 */
declare function GetTile(x: number, y: number, layer: number): number;

/**
 * Returns the name of the tile at `index`
 */
declare function GetTileName(index: number): string;

/**
 * Returns the width in pixels of the tiles on the loaded map
 */
declare function GetTileWidth(): number;

/**
 * Returns the height in pixels of the tiles on the loaded map
 */
declare function GetTileHeight(): number;

/**
 * Returns the Sphere 1.x image of the tile at `index`
 */
declare function GetTileImage(index: number): Sphere1Image;

/**
 * Sets the tile image at `index` to `image`
 */
declare function SetTileImage(index: number, image: Sphere1Image): void;

/**
 * Returns the surface of the tile at `index`
 */
declare function GetTileSurface(index: number): Sphere1Surface;

/**
 * Sets the tile surface at `index` to `surface`
 */
declare function SetTileSurface(index: number, surface: Sphere1Surface): void;

/**
 * Gets the animation delay of the tile at `tile`. If it returns 0, the tile is not animated
 */
declare function GetTileDelay(tile: number): number;

/**
 * Sets the animation delay of the tile at `tile` to `delay`. A delay of 0 is considered not animated
 */
declare function SetTileDelay(tile: number, delay: number): void;

/**
 * Gets the next tile index in the animation sequence of `tile`. If the return value is `tile`, the tile is not animated
 */
declare function GetNextAnimatedTile(tile: number): number;

/**
 * Sets the next tile in the animation sequence of `tile` to `nextTile`. If both have the same value, it won't be animated.
 */
declare function SetNextAnimatedTile(tile: number, nextTile: number): void;

/**
 * Replaces all `oldTile` tiles with `newTile` on layer `layer`, with 0 as the bottom layer
 */
declare function ReplaceTilesOnLayer(layer: number, oldTile: number, newTile: number): void;

/**
 * Returns true if there is a trigger at `mapX`,`mapY`,`layer`.
 * `mapX` and `mapY` are per-pixel coordinates.
 */
declare function IsTriggerAt(mapX: number, mapY: number, layer: number): boolean;

/**
 * Activates the trigger positioned at `mapX`,`mapY`,`layer` if one exists.
 * `mapX` and `mapY` are per-pixel coordinates.
 */
declare function ExecuteTrigger(mapX: number, mapY: number, layer: number): void;

/**
 * Returns true if there are any zones at `mapX`,`mapY`,`layer`
 * `mapX` and `mapY` are per-pixel coordinates.
 */
declare function AreZonesAt(mapX: number, mapY: number, layer: number): boolean;

/**
 * Executes all the zones containing `mapX`,`mapY`,`layer`.
 * `mapX` and `mapY` are per-pixel coordinates.
 */
declare function ExecuteZones(mapX: number, mapY: number, layer: number): void;

/**
 * Returns the number of zones in the loaded map
 */
declare function GetNumZones(): number;

/**
 * Returns the index of the current script's zone. This should be called from inside a ZoneScript handler.
 */
declare function GetCurrentZone(): number;

/**
 * Returns the x value of zone `zone`
 */
declare function GetZoneX(zone: number): number;

/**
 * Returns the y value of zone `zone`
 */
declare function GetZoneY(zone: number): number;

/**
 * Returns the width of zone `zone`
 */
declare function GetZoneWidth(zone: number): number;

/**
 * Returns the height of zone `zone`
 */
declare function GetZoneHeight(zone: number): number;

/**
 * Returns the layer of zone `zone`
 */
declare function GetZoneLayer(zone: number): number;

/**
 * Changes the layer of `zone` to `layer`
 */
declare function SetZoneLayer(zone: number, layer: number): void;

/**
 * Executes the script for the zone `zone`
 */
declare function ExecuteZoneScript(zone: number): void;

/**
 * Renders the map into the video buffer
 */
declare function RenderMap(): void;

/**
 * Applies a color mask to things drawn by the map engine for `numFrames` frames
 */
declare function SetColorMask(color: Sphere1Color, numFrames: number): void;

/**
 * Execute `script` (as a string, not a filename) after `numFrames` frames have passed
 */
declare function SetDelayScript(numFrames: number, script: string): void;

/**
 * Makes `person` respond to input
 */
declare function AttachInput(person: string): void;

/**
 * Releases input from the attached person entity
 */
declare function DetachInput(): void;

/**
 * Returns true if a person is attached to the input
 */
declare function IsInputAttached(): boolean;

/**
 * Returns the name of the person who currently holds input
 */
declare function GetInputPerson(): string;

/**
 * Makes `person` respond to the input. `playerIndex` should be from 0-3 (max four players)
 * Note: AttachInput is equilivent to AttachPlayerInput(person, 0)
 */
declare function AttachPlayerInput(person: string, playerIndex: number): void;

/**
 * Releases input from `personEntity`
 */
declare function DetachPlayerInput(personEntity: string): void;

/**
 * Calls `script` after each frame (don't draw stuff in here!)
 */
declare function SetUpdateScript(script: string): void;

/**
 * Calls `script` after all map layers are rendered
 */
declare function SetRenderScript(script: string): void;

/**
 * Calls `script` after `layer` has been rendered. Only one rendering script can be used for each layer
 */
declare function SetLayerRenderer(layer: number, script: string): void;

/**
 * Attaches the camera view to `person`
 */
declare function AttachCamera(person: string): void;

/**
 * Detaches camera so it can be controlled directly
 */
declare function DetachCamera(): void;

/**
 * Returns true if the camera is attached to a person
 */
declare function IsCameraAttached(): boolean;

/**
 * Returns the name of the person whom the camera is attached to
 */
declare function GetCameraPerson(): string;

/**
 * Sets the x value of the map camera (the center of the screen, if possible)
 */
declare function SetCameraX(x: number): void;

/**
 * Sets the y value of the map camera (the center of the screen, if possible)
 */
declare function SetCameraY(y: number): void;

/**
 * Returns the x value of the map camera (the center of the screen, if possible)
 */
declare function GetCameraX(): number;

/**
 * Returns the y value of the map camera (the center of the screen, if possible)
 */
declare function GetCameraY(): number;

/**
 * Returns the x value of the screen's position on the map
 */
declare function MapToScreenX(layer: number, x: number): number;

/**
 * Returns the y value of the screen's position on the map
 */
declare function MapToScreenY(layer: number, y: number): number;

/**
 * Returns the x value of the map's position on the screen
 */
declare function ScreenToMapX(layer: number, x: number): number;

/**
 * Returns the y value of the map's position on the screen
 */
declare function ScreenToMapY(layer: number, y: number): number;

/**
 * Returns an array of strings representing the current person entities
 */
declare function GetPersonList(): string[];

/**
 * Creates a person with `name` from `spriteset`. If the file is unable to be opened,
 * miniSphere will show an error message and exit. If `destroyWithMap` is true, the spriteset
 * will be destroyed when the current map is changed.
 */
declare function CreatePerson(name: string, spriteset: string, destroyWithMap: boolean): void;

/**
 * Destroys the person with `name`
 */
declare function DestroyPerson(name: string): void;

/**
 * Returns the x offset of `name`
 */
declare function GetPersonOffsetX(name: string): number;

/**
 * Sets the horizontal offset to use for drawing frames for `name`.
 * e.g. setting `x` to 10 would result in `name` always being drawn 10 pixels
 * to the right, with the actual x position remaining unchanged
 */
declare function SetPersonOffsetX(name: string, x: number): void;

/**
 * Returns the y offset of `name`
 */
declare function GetPersonOffsetY(name: string): number;

/**
 * Sets the vertical offset to use for drawing frames for `name`.
 * e.g. setting `y` to 10 would result in `name` always being drawn 10 pixels
 * to the bottom, with the actual y position remaining unchanged
 */
declare function SetPersonOffsetY(name: string, y: number): void;

/**
 * Returns the x position of `name`
 */
declare function GetPersonX(name: string): number;

/**
 * Returns the y position of `name`
 */
declare function GetPersonY(name: string): number;

/**
 * Sets the x position of `name`
 */
declare function SetPersonX(name: string, x: number): void;

/**
 * Sets the y position of `name`
 */
declare function SetPersonY(name: string, y: number): void;

/**
 * Returns the layer of `name`
 */
declare function GetPersonLayer(name: string): number;

/**
 * Change the layer of `name` to `layer`
 */
declare function SetPersonLayer(name: string, layer: number): void;

/**
 * Get the x position of `name` with floating point accuracy
 */
declare function GetPersonXFloat(name: string): number;

/**
 * Get the y position of `name` with floating point accuracy
 */
declare function GetPersonYFloat(name: string): number;

/**
 * Sets the position of `name` to `x`,`y` with floating point accuracy
 */
declare function SetPersonXYFloat(name: string, x: number, y: number): void;

/**
 * Returns the direction of `name`
 */
declare function GetPersonDirection(name: string): string;

/**
 * Sets the direction of `name` to `direction`
 */
declare function SetPersonDirection(name: string, direction: string): void;

/**
 * Returns the direction animation frame number of `name`
 */
declare function GetPersonFrame(name: string): number;

/**
 * Sets the direction animation frame of `name` to `frame`
 */
declare function SetPersonFrame(name: string, frame: number): void;

/**
 * Returns the x movement speed of `name`
 */
declare function GetPersonSpeedX(name: string): number;

/**
 * Returns the y movement speed of `name`
 */
declare function GetPersonSpeedY(name: string): number;

/**
 * Sets the movement speed for both x and y of `name` to `speed`
 */
declare function SetPersonSpeed(name: string, speed: number): void;

/**
 * Set the x and y movement speed of `name` to `speedX`,`speedY` respectively
 */
declare function SetPersonSpeedXY(name: string, speedX: number, speedY: number): void;

/**
 * Returns the number of animation frames to delay for `name` between the first and last frame
 */
declare function GetPersonFrameRevert(name: string): number;

/**
 * Sets the number of animation frames to delay for `name` between the first and last frame
 */
declare function SetPersonFrameRevert(name: string, delay: number): void;

/**
 * Rescales `name`'s spriteset by a factor of `scaleW`,`scaleH`
 * (e.g. 1.0 = original size, 1.5 = 1.5 times the original size, etc)
 */
declare function SetPersonScaleFactor(name: string, scaleW: number, scaleH: number): void;

/**
 * Rescales `name`'s spriteset to exactly `width`,`height` pixels
 */
declare function SetPersonScaleAbsolute(name: string, width: number, height: number): void;

/**
 * Returns the person's spriteset
 */
declare function GetPersonSpriteset(name: string): SphereSpriteset;

/**
 * Set `name`'s spriteset to `spriteset
 * @example SetPersonSpriteset("Jimmy", LoadSpriteset("jimmy.running.rss"));
 */
declare function SetPersonSpriteset(name: string, spriteset: SphereSpriteset): void;

/**
 * Returns the person's base obstruction object.
 */
declare function GetPersonBase(name: string): SphereSpritesetBase;

/** Returns the person's angle in radians */
declare function GetPersonAngle(name: string): number;

/**
 * Sets the angle of `name` in radians (obstruction base is unaffected)
 */
declare function SetPersonAngle(name: string, angle: number): void;

/**
 * Sets a color multiplier to use when drawing sprites for `name`
 * @example
 * SetPersonMask("Jimmy", CreateColor(255, 0, 0, 255)); // only red elements are drawn
 * SetPersonMask("Jimmy", CreateColor(255, 255, 128)); // draw at half transparency
 */
declare function SetPersonMask(name: string, color: Sphere1Color): void;

/**
 * Returns the color mask of `name`
 */
declare function GetPersonMask(name: string): Sphere1Color;

/**
 * Returns true if `name` is visible
 */
declare function IsPersonVisible(name: string): boolean;

/**
 * Sets the visibility status of `name` to `visible`
 */
declare function SetPersonVisible(name: string, visible: boolean): void;

/**
 * Returns a data object associated with the person `name` with the following default properties:
 * @example
 * let data = GetPersonData("Jimmy");
 * let num_frames = data["num_frames"];
 */
declare function GetPersonData(name: string): SpherePersonData;

/**
 * Sets the data object associated with `name` to `data`
 * @example
 * let data = GetPersonData("Jimmy");
 * data["talked_to_jimmy"] = true;
 * SetPersonData("Jimmy", data);
 */
declare function SetPersonData(name: string, data: SpherePersonData): void;

/**
 * Sets a specific data value of `name` to `value`
 * @see SetPersonData
 * @see GetPersonData
 */
declare function SetPersonValue(name: string, key: string, value: any): void;

/**
 * Gets a specific data value from `name`
 * @see SetPersonData
 * @see GetPersonData
 */
declare function GetPersonValue(name: string, key: string): any;

/**
 * Makes the sprite of `name` follow `pixels` behind the sprite of `leader`.
 * If `leader` is "", it will detach from anyone it is following
 */
declare function FollowPerson(name: string, leader: string, pixels: number): void;

/**
 * Sets `script` to be called during `which` event for `name`
 * @example
 * SetPersonScript("Jimmy", SCRIPT_ON_DESTROY, "SSj.log('Jimmy spriteset destroyed'")
 */
declare function SetPersonScript(name: string, which: number, script: string): void;

/**
 * Calls `which` script for `name`
 */
declare function CallPersonScript(name: string, which: number): void;

/**
 * Returns the name of the person for whom the current script is running.
 * This should be called from inside a PersonScript handler.
 */
declare function GetCurrentPerson(): string;

/**
 * Adds a command to the `name`'s command queue. If `immediate` is true, it will be executed immediately.
 * Otherwise it will wait until the next frame.
 */
declare function QueuePersonCommand(name: string, command: number, immediate: boolean): void;

/**
 * Adds `script` to `name`'s queue. If `immediate` is true, it will be executed immediately.
 * Otherwise it will wait until the next frame.
 */
declare function QueuePersonScript(name: string, script: string, immediate: boolean): void;

/**
 * Clears the command queue of `name`
 */
declare function ClearPersonCommands(name: string): void;

/**
 * Returns true if `name` has an empty command queue
 */
declare function IsCommandQueueEmpty(name: string): boolean;

/**
 * Returns true if `name` would be obstructed at `x`,`y`
 */
declare function IsPersonObstructed(name: string, x: number, y: number): boolean;

/**
 * Returns the tile index of the tile `name` would be obstructed by at `x`,`y` or -1
 * if it isn't obstructed at that position
 */
declare function GetObstructingTile(name: string, x: number, y: number): number;

/**
 * Returns the name of the person who `name` would be obstructed by at `x`,`y`
 * or "" if it isn't obstructed by a person at that position
 */
declare function GetObstructingPerson(name: string, x: number, y: number): string;

/**
 * Sets whether `person` should ignore other spriteset obstruction bases
 */
declare function IgnorePersonObstructions(person: string, ignore: boolean): void;

/**
 * Returns true if `person` is ignoring person obstructions, else false
 */
declare function IsIgnoringPersonObstructions(person: string): boolean;

/**
 * Sets whether `person` should ignore tile obstructions
 */
declare function IgnoreTileObstructions(person: string, ignore: boolean): void;

/**
 * Returns true if `person` is ignoring tile obstructions, else false
 */
declare function IsIgnoringTileObstructions(person: string): boolean;

/**
 * Returns a list of people that `name` is ignoring
 */
declare function GetPersonIgnoreList(person: string): string[];

/**
 * Tells `person` to ignore everyone in `ignoreList`
 * @example SetPersonIgnoreList("White-Bomberman", ["bomb", "powerup"]);
 */
declare function SetPersonIgnoreList(person: string, ignoreList: string[]): void;

/**
 * Get the (Sphere 1.x) key used to activate talk scripts
 */
declare function GetTalkActivationKey(): number;

/**
 * Set the (Sphere 1.x) key used to activate talk scripts
 */
declare function SetTalkActivationKey(key: number): void;

/**
 * Returns the distance between the input person and another person required for talk script activation
 */
declare function GetTalkDistance(): number;

/**
 * Set the distance between the input person and another person required for talk script activation
 */
declare function SetTalkDistance(pixels: number): void;

/**
 * Returns a spriteset object from `filename`. If the file is unable to be opened,
 * an error will be shown and miniSphere will exit
 */
declare function LoadSpriteset(filename: string): SphereSpriteset;

/**
 * Returns a blank spriteset object with the given dimensions
 */
declare function CreateSpriteset(
    frameWidth: number,
    frameHeight: number,
    numImages: number,
    numDirections: number,
    numFrames: number,
): SphereSpriteset;
