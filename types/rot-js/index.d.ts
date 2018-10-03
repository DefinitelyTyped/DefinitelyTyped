// Type definitions for rot-js 0.6
// Project: https://github.com/ondras/rot.js
// Definitions by: Roger Ostrander <https://github.com/atiaxi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

// Extensions (thanks, https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html )
declare global {
    interface Array<T> {
        random(): T;
        randomize(): T[];
    }

    interface Number {
        mod(n: number): number;
    }

    // Added to support `String.format`
    interface FormatFunc {
        (...args: any[]): string;
        map: { [key: string]: string };
    }

    interface StringConstructor {
        format: FormatFunc;
    }

    interface String {
        capitalize(): string;
        lpad(character?: string, count?: number): string;
        rpad(character?: string, count?: number): string;

        format: FormatFunc;
    }
}

export function isSupported(): boolean;

// Docs explicitly show examples of overriding these, but TS2 (and ES6)
// say that module-level vars are constant, so here we are:
export const DEFAULT_WIDTH: number;
export const DEFAULT_HEIGHT: number;

/** Directional constants. Ordering is important! */
export const DIRS: {
    "4": Array<[number, number]>;
    "6": Array<[number, number]>;
    "8": Array<[number, number]>;
};

/** Cancel key. */
export const VK_CANCEL: number;
/** Help key. */
export const VK_HELP: number;
/** Backspace key. */
export const VK_BACK_SPACE: number;
/** Tab key. */
export const VK_TAB: number;
/** 5 key on Numpad when NumLock is unlocked. Or on Mac, clear key which is positioned at NumLock key. */
export const VK_CLEAR: number;
/** Return/enter key on the main keyboard. */
export const VK_RETURN: number;
/** Reserved, but not used. */
export const VK_ENTER: number;
/** Shift key. */
export const VK_SHIFT: number;
/** Control key. */
export const VK_CONTROL: number;
/** Alt (Option on Mac) key. */
export const VK_ALT: number;
/** Pause key. */
export const VK_PAUSE: number;
/** Caps lock. */
export const VK_CAPS_LOCK: number;
/** Escape key. */
export const VK_ESCAPE: number;
/** Space bar. */
export const VK_SPACE: number;
/** Page Up key. */
export const VK_PAGE_UP: number;
/** Page Down key. */
export const VK_PAGE_DOWN: number;
/** End key. */
export const VK_END: number;
/** Home key. */
export const VK_HOME: number;
/** Left arrow. */
export const VK_LEFT: number;
/** Up arrow. */
export const VK_UP: number;
/** Right arrow. */
export const VK_RIGHT: number;
/** Down arrow. */
export const VK_DOWN: number;
/** Print Screen key. */
export const VK_PRINTSCREEN: number;
/** Ins(ert) key. */
export const VK_INSERT: number;
/** Del(ete) key. */
export const VK_DELETE: number;
export const VK_0: number;
export const VK_1: number;
export const VK_2: number;
export const VK_3: number;
export const VK_4: number;
export const VK_5: number;
export const VK_6: number;
export const VK_7: number;
export const VK_8: number;
export const VK_9: number;
/** Colon (:) key. Requires Gecko 15.0 */
export const VK_COLON: number;
/** Semicolon (;) key. */
export const VK_SEMICOLON: number;
/** Less-than (<) key. Requires Gecko 15.0 */
export const VK_LESS_THAN: number;
/** Equals (=) key. */
export const VK_EQUALS: number;
/** Greater-than (>) key. Requires Gecko 15.0 */
export const VK_GREATER_THAN: number;
/** Question mark (?) key. Requires Gecko 15.0 */
export const VK_QUESTION_MARK: number;
/** Atmark (@) key. Requires Gecko 15.0 */
export const VK_AT: number;
export const VK_A: number;
export const VK_B: number;
export const VK_C: number;
export const VK_D: number;
export const VK_E: number;
export const VK_F: number;
export const VK_G: number;
export const VK_H: number;
export const VK_I: number;
export const VK_J: number;
export const VK_K: number;
export const VK_L: number;
export const VK_M: number;
export const VK_N: number;
export const VK_O: number;
export const VK_P: number;
export const VK_Q: number;
export const VK_R: number;
export const VK_S: number;
export const VK_T: number;
export const VK_U: number;
export const VK_V: number;
export const VK_W: number;
export const VK_X: number;
export const VK_Y: number;
export const VK_Z: number;
export const VK_CONTEXT_MENU: number;
/** 0 on the numeric keypad. */
export const VK_NUMPAD0: number;
/** 1 on the numeric keypad. */
export const VK_NUMPAD1: number;
/** 2 on the numeric keypad. */
export const VK_NUMPAD2: number;
/** 3 on the numeric keypad. */
export const VK_NUMPAD3: number;
/** 4 on the numeric keypad. */
export const VK_NUMPAD4: number;
/** 5 on the numeric keypad. */
export const VK_NUMPAD5: number;
/** 6 on the numeric keypad. */
export const VK_NUMPAD6: number;
/** 7 on the numeric keypad. */
export const VK_NUMPAD7: number;
/** 8 on the numeric keypad. */
export const VK_NUMPAD8: number;
/** 9 on the numeric keypad. */
export const VK_NUMPAD9: number;
/** * on the numeric keypad. */
export const VK_MULTIPLY: number;
/** + on the numeric keypad. */
export const VK_ADD: number;
export const VK_SEPARATOR: number;
/** - on the numeric keypad. */
export const VK_SUBTRACT: number;
/** Decimal point on the numeric keypad. */
export const VK_DECIMAL: number;
/** / on the numeric keypad. */
export const VK_DIVIDE: number;
/** F1 key. */
export const VK_F1: number;
/** F2 key. */
export const VK_F2: number;
/** F3 key. */
export const VK_F3: number;
/** F4 key. */
export const VK_F4: number;
/** F5 key. */
export const VK_F5: number;
/** F6 key. */
export const VK_F6: number;
/** F7 key. */
export const VK_F7: number;
/** F8 key. */
export const VK_F8: number;
/** F9 key. */
export const VK_F9: number;
/** F10 key. */
export const VK_F10: number;
/** F11 key. */
export const VK_F11: number;
/** F12 key. */
export const VK_F12: number;
/** F13 key. */
export const VK_F13: number;
/** F14 key. */
export const VK_F14: number;
/** F15 key. */
export const VK_F15: number;
/** F16 key. */
export const VK_F16: number;
/** F17 key. */
export const VK_F17: number;
/** F18 key. */
export const VK_F18: number;
/** F19 key. */
export const VK_F19: number;
/** F20 key. */
export const VK_F20: number;
/** F21 key. */
export const VK_F21: number;
/** F22 key. */
export const VK_F22: number;
/** F23 key. */
export const VK_F23: number;
/** F24 key. */
export const VK_F24: number;
/** Num Lock key. */
export const VK_NUM_LOCK: number;
/** Scroll Lock key. */
export const VK_SCROLL_LOCK: number;
/** Circumflex (^) key. Requires Gecko 15.0 */
export const VK_CIRCUMFLEX: number;
/** Exclamation (!) key. Requires Gecko 15.0 */
export const VK_EXCLAMATION: number;
/** Double quote () key. Requires Gecko 15.0 */
export const VK_DOUBLE_QUOTE: number;
/** Hash (#) key. Requires Gecko 15.0 */
export const VK_HASH: number;
/** Dollar sign ($) key. Requires Gecko 15.0 */
export const VK_DOLLAR: number;
/** Percent (%) key. Requires Gecko 15.0 */
export const VK_PERCENT: number;
/** Ampersand (&) key. Requires Gecko 15.0 */
export const VK_AMPERSAND: number;
/** Underscore (_) key. Requires Gecko 15.0 */
export const VK_UNDERSCORE: number;
/** Open parenthesis (() key. Requires Gecko 15.0 */
export const VK_OPEN_PAREN: number;
/** Close parenthesis ()) key. Requires Gecko 15.0 */
export const VK_CLOSE_PAREN: number;
/* Asterisk (*) key. Requires Gecko 15.0 */
export const VK_ASTERISK: number;
/** Plus (+) key. Requires Gecko 15.0 */
export const VK_PLUS: number;
/** Pipe (|) key. Requires Gecko 15.0 */
export const VK_PIPE: number;
/** Hyphen-US/docs/Minus (-) key. Requires Gecko 15.0 */
export const VK_HYPHEN_MINUS: number;
/** Open curly bracket ({) key. Requires Gecko 15.0 */
export const VK_OPEN_CURLY_BRACKET: number;
/** Close curly bracket (}) key. Requires Gecko 15.0 */
export const VK_CLOSE_CURLY_BRACKET: number;
/** Tilde (~) key. Requires Gecko 15.0 */
export const VK_TILDE: number;
/** Comma (,) key. */
export const VK_COMMA: number;
/** Period (.) key. */
export const VK_PERIOD: number;
/** Slash (/) key. */
export const VK_SLASH: number;
/** Back tick (`) key. */
export const VK_BACK_QUOTE: number;
/** Open square bracket ([) key. */
export const VK_OPEN_BRACKET: number;
/** Back slash (\) key. */
export const VK_BACK_SLASH: number;
/** Close square bracket (]) key. */
export const VK_CLOSE_BRACKET: number;
/** Quote (''') key. */
export const VK_QUOTE: number;
/** Meta key on Linux, Command key on Mac. */
export const VK_META: number;
/** AltGr key on Linux. Requires Gecko 15.0 */
export const VK_ALTGR: number;
/** Windows logo key on Windows. Or Super or Hyper key on Linux. Requires Gecko 15.0 */
export const VK_WIN: number;
/** Linux support for this keycode was added in Gecko 4.0. */
export const VK_KANA: number;
/** Linux support for this keycode was added in Gecko 4.0. */
export const VK_HANGUL: number;
/** 英数 key on Japanese Mac keyboard. Requires Gecko 15.0 */
export const VK_EISU: number;
/** Linux support for this keycode was added in Gecko 4.0. */
export const VK_JUNJA: number;
/** Linux support for this keycode was added in Gecko 4.0. */
export const VK_FINAL: number;
/** Linux support for this keycode was added in Gecko 4.0. */
export const VK_HANJA: number;
/** Linux support for this keycode was added in Gecko 4.0. */
export const VK_KANJI: number;
/** Linux support for this keycode was added in Gecko 4.0. */
export const VK_CONVERT: number;
/** Linux support for this keycode was added in Gecko 4.0. */
export const VK_NONCONVERT: number;
/** Linux support for this keycode was added in Gecko 4.0. */
export const VK_ACCEPT: number;
/** Linux support for this keycode was added in Gecko 4.0. */
export const VK_MODECHANGE: number;
/** Linux support for this keycode was added in Gecko 4.0. */
export const VK_SELECT: number;
/** Linux support for this keycode was added in Gecko 4.0. */
export const VK_PRINT: number;
/** Linux support for this keycode was added in Gecko 4.0. */
export const VK_EXECUTE: number;
/** Linux support for this keycode was added in Gecko 4.0.	 */
export const VK_SLEEP: number;

// Added to support `measure`
export interface Size {
    width: number;
    height: number;
}

export namespace Text {
    const RE_COLORS: RegExp;

    /* token types */
    const TYPE_BG: number;
    const TYPE_FG: number;
    const TYPE_NEWLINE: number;
    const TYPE_TEXT: number;

    function measure(str: string, maxWidth: number): Size;

    // Added to support `tokenize`
    interface Token {
        type: number;
        value?: string;
    }

    function tokenize(str: string, maxWidth: number): Token[];
}

// Duplication is so that we can support chaining like ROT does,
// but also use ROT.RNG like a normal namespace
export interface RNGable {
    getSeed(): number;
    setSeed(seed: number): RNGable;
    getUniform(): number;
    getUniformInt(lowerBound: number, upperBound: number): number;
    getNormal(mean?: number, stddev?: number): number;
    getPercentage(): number;
    getWeightedValue<K extends string>(data: Record<K, number>): K;
    getState(): [number, number, number, number];
    setState(state: [number, number, number, number]): RNGable;
    clone(): RNGable;
}

export namespace RNG {
    function getSeed(): number;
    function setSeed(seed: number): RNGable;
    function getUniform(): number;
    function getUniformInt(lowerBound: number, upperBound: number): number;
    function getNormal(mean?: number, stddev?: number): number;
    function getPercentage(): number;
    // Can't do the following because index has to explicitly be strings
    // or numbers, see https://github.com/Microsoft/TypeScript/issues/5683
    // function getWeightedValue<T>(data: {[key: T]: number}): T;
    // Provide a type-safe version for strings, at least:
    function getWeightedValue(data: { [key: string]: number }): string;
    // And everything else:
    function getWeightedValue(data: any): any;
    function getState(): [number, number, number, number];
    function setState(state: [number, number, number, number]): RNGable;
    function clone(): RNGable;
}

export interface DisplayOptions {
    width?: number;
    height?: number;
    transpose?: boolean;
    fontSize?: number;
    fontFamily?: string;
    fontStyle?: string;
    fg?: string;
    bg?: string;
    spacing?: number;
    border?: number;
    layout?: string;
    forceSquareRatio?: boolean;
    tileWidth?: number;
    tileHeight?: number;
    tileMap?: any;
    tileSet?: any;
    tileColorize?: boolean;
    termColor?: string;
}

export class Display {
    DEBUG: DigCallback;

    constructor(options?: DisplayOptions);
    clear(): void;
    computeSize(availWidth: number, availHeight: number): [number, number];
    computeFontSize(availWidth: number, availHeight: number): number;
    draw(x: number, y: number, character: string | string[], fg?: string | string[], bg?: string | string[]): void;
    drawText(x: number, y: number, text: string, maxWidth?: number): number;
    eventToPosition(e: UIEvent): [number, number] | number;
    getContainer(): Node;
    getOptions(): DisplayOptions;
    setOptions(options: DisplayOptions): Display;
}

// Map callbacks
export type DigCallback = (x: number, y: number, cellValue: number) => any;
export type DoorCallback = (x: number, y: number) => any;
export type CanBeDugCallback = (x: number, y: number) => boolean;
export type IsWallCallback = (x: number, y: number) => boolean;

// Map
export class Map {
    constructor(width: number, height: number);
    create(callback?: DigCallback): Map;
}

export interface CellularOptions {
    born?: number[];
    survive?: number[];
    topology?: number;
    // Docs say this exists, even though it's never used:
    connected?: boolean;
}

export interface DiggerOptions {
    roomWidth?: [number, number];
    roomHeight?: [number, number];
    corridorLength?: [number, number];
    dugPercentage?: number;
    timeLimit?: number;
}

export interface UniformOptions {
    roomWidth?: [number, number];
    roomHeight?: [number, number];
    roomDugPercentage?: number;
    timeLimit?: number;
}

export interface RogueOptions {
    cellWidth?: number;
    cellHeight?: number;
    roomWidth?: [number, number];
    roomHeight?: [number, number];
}

export interface RoomOptions {
    roomWidth?: [number, number];
    roomHeight?: [number, number];
}

export interface CorridorOptions {
    corridorLength: [number, number];
}
export type FeatureOptions = RoomOptions | CorridorOptions;

export namespace Map {
    class Arena extends Map { }
    class DividedMaze extends Map { }
    class IceyMaze extends Map {
        constructor(width?: number, height?: number, regularity?: number);
    }
    class EllerMaze extends Map { }
    class Cellular extends Map {
        constructor(width?: number, height?: number, options?: CellularOptions);
        randomize(probability: number): this;
        setOptions(options: CellularOptions): void;
        set(x: number, y: number, value: any): void;
        serviceCallback(callback: DigCallback): void;
        connect(callback: DigCallback, value?: number, connectionCallback?: DoorCallback): void;
    }
    class Dungeon extends Map {
        getRooms(): Feature.Room[];
        getCorridors(): Feature.Corridor[];
    }

    class Digger extends Dungeon {
        constructor(width?: number, height?: number, options?: DiggerOptions);
    }

    class Uniform extends Dungeon {
        constructor(width?: number, height?: number, options?: UniformOptions);
    }

    class Rogue extends Map {
        constructor(width?: number, height?: number, options?: RogueOptions);
    }

    class Feature {
        isValid(canBeDugCallback: CanBeDugCallback): boolean;
        create(digCallback: DigCallback): void;
        debug(): void;
        static createRandomAt(x: number, y: number, dx: number, dy: number, options?: FeatureOptions): Feature;
    }

    namespace Feature {
        class Room {
            constructor(x1: number, y1: number, x2: number, y2: number, doorX?: number, doorY?: number);

            static createRandom(availWidth: number, availHeight: number, options?: RoomOptions): Room;
            static createRandomAt(x: number, y: number, dx: number, dy: number, options?: RoomOptions): Room;
            static createRandomCenter(cx: number, cy: number, options?: RoomOptions): Room;

            create(digCallback: DigCallback): void;
            debug(): void;

            addDoor(x: number, y: number): this;
            getDoors(callback: DoorCallback): this;
            clearDoors(): this;
            addDoors(isWallCallback: IsWallCallback): this;
            isValid(isWallCallback: IsWallCallback, canBeDugCallback: CanBeDugCallback): boolean;
            getCenter(): [number, number];

            getLeft(): number;
            getRight(): number;
            getTop(): number;
            getBottom(): number;
        }

        class Corridor {
            constructor(startX: number, startY: number, endX: number, endY: number);

            static createRandomAt(x: number, y: number, dx: number, dy: number, options?: CorridorOptions): Corridor;

            create(digCallback: DigCallback): boolean;
            debug(): void;

            isValid(isWallCallback: IsWallCallback, canBeDugCallback: CanBeDugCallback): boolean;
            createPriorityWalls(priorityWallCallback: DoorCallback): void;
        }
    }
}

// FOV callbacks
export type LightPassesCallback = (x: number, y: number) => boolean;
export type FOVCallback = (x: number, y: number, R: number, visibility: number) => any;

export interface FOVOptions {
    topology?: number;
}

export class FOV {
    constructor(lightPassesCallback: LightPassesCallback, options?: FOVOptions);
    compute(x: number, y: number, R: number, callback: FOVCallback): void;
}
export namespace FOV {
    class DiscreteShadowcasting extends FOV { }
    class PreciseShadowcasting extends FOV { }

    class RecursiveShadowcasting extends FOV {
        compute180(x: number, y: number, R: number, dir: number, callback: FOVCallback): void;
        compute90(x: number, y: number, R: number, dir: number, callback: FOVCallback): void;
    }
    namespace RecursiveShadowcasting {
        const OCTANTS: Array<[number, number, number, number]>;
    }
}

export type ColorArray = [number, number, number];

export namespace Color {
    function fromString(str: string): [number, number, number];
    function add(color1: [number, number, number], ...colors2: Array<[number, number, number]>): [number, number, number];
    function add_(color1: [number, number, number], ...colors2: Array<[number, number, number]>): [number, number, number];
    function multiply(color1: [number, number, number], ...colors2: Array<[number, number, number]>): [number, number, number];
    function multiply_(color1: [number, number, number], ...colors2: Array<[number, number, number]>): [number, number, number];
    function interpolate(color1: [number, number, number], color2: [number, number, number], factor: number): [number, number, number];
    function interpolateHSL(color1: [number, number, number], color2: [number, number, number], factor: number): [number, number, number];
    function randomize(color: [number, number, number], diff: number | [number, number, number]): [number, number, number];
    function rgb2hsl(color: [number, number, number]): [number, number, number];
    function hsl2rgb(color: [number, number, number]): [number, number, number];
    function toRGB(color: [number, number, number]): string;
    function toHex(color: [number, number, number]): string;
}

// Lighting callbacks
export type ReflectivityCallback = (x: number, y: number) => number;
export type LightingCallback = (x: number, y: number, color: [number, number, number]) => any;

export interface LightingOptions {
    passes?: number;
    emissionThreshold?: number;
    range?: number;
}

export class Lighting {
    constructor(reflectivityCallback: ReflectivityCallback, options?: LightingOptions);

    setOptions(options: LightingOptions): this;
    setFOV(fov: FOV): this;
    setLight(x: number, y: number, color: string | [number, number, number]): this;
    clearLights(): void;
    reset(): this;
    compute(lightingCallback: LightingCallback): this;
}

// Path callbacks
export type PassableCallback = (x: number, y: number) => boolean;
export type PathCallback = (x: number, y: number) => any;

export interface PathOptions {
    topology?: number;
}

export class Path {
    constructor(toX: number, toY: number, passableCallback: PassableCallback, options?: PathOptions);

    compute(fromX: number, fromY: number, callback: PathCallback): void;
}

export namespace Path {
    class Dijkstra extends Path { }
    class AStar extends Path { }
}

export interface Noise {
    get(x: number, y: number): number;
}
export namespace Noise {
    class Simplex implements Noise {
        constructor(gradients?: number);
        get(xin: number, yin: number): number;
    }
}

export class EventQueue<T> {
    getTime(): number;
    clear(): void;
    add(event: T, time: number): void;
    get(): T;
    getEventTime(event: T): number;
    remove(event: T): boolean;
    remove(index: number): boolean;
}

export class Scheduler {
    getTime(): number;
    add(item: any, repeat: boolean, time?: number): Scheduler;
    getTimeOf(item: any): number;
    clear(): Scheduler;
    remove(item: any): any;
    next(): any;
}

export namespace Scheduler {
    class Simple extends Scheduler { }
    class Speed extends Scheduler { }
    class Action extends Scheduler {
        setDuration(time: number): Action;
    }
}

export class Engine {
    constructor(scheduler: Scheduler);
    start(): Engine;
    lock(): Engine;
    unlock(): Engine;
}

export interface StringGeneratorOptions {
    words?: boolean;
    order?: number;
    prior?: number;
}

export class StringGenerator {
    constructor(options?: StringGeneratorOptions);
    clear(): void;
    generate(): string;
    observe(str: string): void;
    getStats(): string;
}
