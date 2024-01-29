/** Provides indirect access to global variables as properties of an object. */
declare const global: typeof globalThis;

/** Provides facilities for controlling the Sphere engine. */
declare namespace Sphere {
    /**
     * The Sphere v2 API level supported by the engine. When new APIs are standardized, this value
     * is increased.
     */
    const APILevel: number;

    /** Name and version number of the build tool used to package the game. */
    const Compiler: string;

    /** Name and version number of the Sphere engine in use. */
    const Engine: string;

    /**
     * Information about the current game.  All values are taken from the game's JSON manifest
     * (`game.json`).
     */
    const Game: {
        author: string;
        main: string;
        name: string;
        resolution: string;
        saveId: string;
        summary: string;
    };

    /** Sphere API version supported by the engine. */
    const Version: number;

    /** The current frame rate. The engine will try to maintain the FPS according to this value. */
    let frameRate: number;

    /** The maximum numer of consecutive frames the engine is allowed to skip. */
    let frameSkip: number;

    /**
     * `true` if the engine is currently in fullscreen mode, otherwise `false`. You can freely
     * change this value at any time.
     */
    let fullScreen: boolean;

    /**
     * If the main module exports a class, the engine automatically creates an instance of it on
     * startup. Use this to access that object from anywhere.
     */
    let main: any;

    /** Abort execution immediately with an error message. This error will not be catchable. */
    function abort(message: any): void;

    /** Get the number of frames elapsed since the engine started. */
    function now(): number;

    /** Restart the engine at the end of the current frame. */
    function restart(): void;

    /** Set the current backbuffer resolution. The contents of the backbuffer may be lost. */
    function setResolution(width: number, height: number): void;

    /** Shut down the engine at the end of the current frame. */
    function shutDown(): void;

    /**
     * Get a promise that resolves after a given number of frames.  Use with `await`.
     * @param numFrames The number of frames to wait before resolving the promise.
     */
    function sleep(numFrames: number): Promise<void>;
}

/**
 * Provides functions that are useful for debugging. All functions in this namespace are no-ops
 * (i.e. they do nothing) when running in production, avoiding the need to remove them from code.
 */
declare namespace SSj {
    /**
     * Verify that an expression or runtime check evaluates to `true`, throwing an error if the
     * verification fails.
     * @param check   Either a Boolean expression or a function that returns a Boolean.
     * @param summary Human-readable summary of what's being checked. Keep it short and sweet.
     */
    function assert(check: boolean | (() => boolean), summary?: string): void;

    /**
     * Log a JavaScript value or object to the console. A log line will also be displayed in SSj
     * while debugging.
     * @param message A message, object or other value to be logged.
     */
    function log(message: any): void;

    /**
     * Get the amount of time that's passed since some arbitrary time, in seconds. The exact
     * precision isn't specified but will typically be less than a microsecond.
     */
    function now(): number;

    /**
     * Add a method to be profiled (timed for performance) when SpheRun is started in Profile mode.
     * @param object       Any object containing methods. For `class`, methods are typically defined
     *                     on the class prototype, e.g. `MyClass.prototype`.
     * @param methodName   The name of the method to profile.
     * @param description  Optional description shown in the profiler results. Omit this argument
     *                     to have SpheRun use the name of the method as the description.
     */
    function profile(object: object, methodName: string, description?: string): void;

    /**
     * Log a line of text to the debugger. The line is only shown when SSj is started in Trace mode.
     * @param message A message to be logged.
     */
    function trace(message: string): void;
}

/**
 * Describes a file or subdirectory as yielded by a `DirectoryStream`.
 */
interface DirectoryEntry {
    /** `true` if the entry names a subdirectory, otherwise `false`. */
    isDirectory: boolean;

    /** Path of the file or subdirectory, relative to the directory being enumerated. */
    fileName: string;

    /** Full SphereFS path to the file or subdirectory. */
    fullPath: string;
}

/**
 * Specifies options for creating a new `DirectoryStream`.
 */
interface DirectoryStreamOptions {
    /**
     * `true` to enable recursive enumeration. In this mode, the directory stream will list files
     * from all subdirectories, at any depth. Only file entries will be yielded in this case.
     * @default false
     */
    recursive?: boolean | undefined;
}

/**
 * Specifies options for creating a new `Font` object.
 */
interface FontOptions {
    /**
     * `true` if text rendered with the font should be antialiased.  Antialiasing generally doesn't
     * look good with small font sizes, but begins to show a benefit at larger sizes. As such, it's
     * recommended that this option only be used in high-resolution games.
     * @default false
     */
    antialias?: boolean | undefined;

    /**
     * `true` to enable automatic kerning. Kerning adjusts the spacing between each character so the
     * distance between adjacent characters appears uniform.
     * @default true
     */
    kern?: boolean | undefined;
}

/**
 * Specifies scheduling options for a recurring Dispatch job.
 */
interface JobOptions {
    /**
     * `true` if the job should be treated as a background process. If the only jobs in the event
     * loop are background jobs at the end of a frame, the engine will shut down as if it were
     * empty.
     * @default false
     */
    inBackground?: boolean | undefined;

    /**
     * Job priority. Priority can be positive, negative, or even fractional. Higher priority jobs
     * are updated earlier and rendered later, allowing the game to control the order in which
     * things are scheduled within a frame.
     * @default 0.0
     */
    priority?: number | undefined;
}

interface MouseEvent {
    key: MouseKey | null;
    x?: number | undefined;
    y?: number | undefined;
    delta?: number | undefined;
}

/**
 * Specifies options for creating a new `Shader`.
 */
interface ShaderOptions {
    /** SphereFS path to a GLSL vertex shader file. */
    vertexFile: string;

    /** SphereFS path to a GLSL fragment shader file. */
    fragmentFile: string;
}

/** Specifies the 2D dimensions (width and height) of something. */
interface Size2D {
    /** Width, as measured in pixels. */
    width: number;

    /** Height, as measured in pixels. */
    height: number;
}

/** Specifies options for playing back an audio sample. */
interface SoundOptions {
    /**
     * L/R stereo balance. 0.0 is centered, +/- 1.0 is full right/left respectively.
     * @default 0.0
     */
    pan?: number | undefined;

    /**
     * Playback speed. 1.0 is normal speed.
     * @default 1.0
     */
    speed?: number | undefined;

    /**
     * Volume, as a percentage of the mixer's master volume. Sometimes called "gain".
     * @default 1.0
     */
    volume?: number | undefined;
}

/**
 * Describes a vertex of a `Shape`.
 */
interface Vertex {
    x: number;
    y: number;
    z?: number | undefined;
    u?: number | undefined;
    v?: number | undefined;
    color?: Color | undefined;
}

/** Specifies the mode to use when opening a file. */
declare enum FileOp {
    /**
     * File will be opened for reading only, with the cursor initially placed at the beginning of
     * the file.
     */
    Read,

    /**
     * Enable reading and writing. If the file already exists, the existing contents will be erased
     * first. Otherwise a new file will be created.
     */
    Write,

    /**
     * Enables reading and writing. If the file already exists, the file pointer will be placed at
     * the end of the file for convenience. Otherwise a new file will be created.
     */
    Update,
}

/**
 * Identifies a specific key on the keyboard.
 */
declare enum Key {
    Alt,
    AltGr,
    Apostrophe,
    Backslash,
    Backspace,
    CapsLock,
    CloseBrace,
    Comma,
    Delete,
    Down,
    End,
    Enter,
    Equals,
    Escape,
    F1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7,
    F8,
    F9,
    F10,
    F11,
    F12,
    Home,
    Hyphen,
    Insert,
    LCtrl,
    LShift,
    Left,
    NumLock,
    OpenBrace,
    PageDown,
    PageUp,
    Period,
    RCtrl,
    RShift,
    Right,
    ScrollLock,
    Semicolon,
    Slash,
    Space,
    Tab,
    Tilde,
    Up,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
    D1,
    D2,
    D3,
    D4,
    D5,
    D6,
    D7,
    D8,
    D9,
    D0,
    NumPad1,
    NumPad2,
    NumPad3,
    NumPad4,
    NumPad5,
    NumPad6,
    NumPad7,
    NumPad8,
    NumPad9,
    NumPad0,
    NumPadEnter,
    Add,
    Decimal,
    Divide,
    Multiply,
    Subtract,
}

/**
 * Identifies the type of input received from a mouse.
 */
declare enum MouseKey {
    /** The left mouse button. */
    Left,

    /** The middle mouse button or the wheel button. */
    Middle,

    /** The right mouse button. */
    Right,

    /** Synthetic. Produced when the wheel is spun to scroll up. */
    WheelUp,

    /** Synthetic. Produced when the wheel is spun to scroll down. */
    WheelDown,

    /** The Back button. */
    Back,

    /** The Forward button. */
    Forward,
}

/**
 * Specifies how to interpret the vertices of a `Shape`.
 */
declare enum ShapeType {
    /**
     * Triangle fan: First 3 vertices form a triangle, then each additional vertex forms
     * another triangle fanning out from the initial vertex (the center of the fan).
     */
    Fan,

    /** Line list: Every 2 vertices form a line segment. */
    Lines,

    /**
     * Line loop: First 2 vertices form a line segment; each additional vertex forms another
     * segment connected to the last; an implied final segment connects the last one to the
     * first, forming a loop.
     */
    LineLoop,

    /**
     * Line strip: First 2 vertices form a line segment; each additional vertex forms another
     * segment connected to the last.
     */
    LineStrip,

    /** Point list: Each vertex specifies a single point in space. */
    Points,

    /** Triangle list: Every 3 vertices form a triangle. */
    Triangles,

    /**
     * Triangle strip: First 3 vertices form a triangle; each additional vertex forms another
     * triangle connected to the previous one on two sides.
     */
    TriStrip,
}

/**
 * Specifies how colors are combined with the existing contents of a surface.
 */
declare class BlendOp {
    /**
     * Basic Alpha blend: The final color is a weighted average of the source and destination
     * colors based on the Alpha component of the source color.
     */
    static readonly Default: BlendOp;

    /**
     * Additive blend: The components of the source color are added to those of the destination
     * color.
     */
    static readonly Add: BlendOp;

    /**
     * Average blend: The components of the source and destination colors are averaged, producing
     * a 50/50 blend of the two colors.
     */
    static readonly Average: BlendOp;

    /**
     * Multiply blend: The components of the source and destination colors are multiplied together.
     */
    static readonly Multiply: BlendOp;

    /**
     * Replace mode: The contents of the destination surface are ignored and the components of the
     * source color are written as-is.
     */
    static readonly Replace: BlendOp;

    /**
     * Subtractive blend: The components of the source color are subtracted from those of the
     * destination color.
     */
    static readonly Subtract: BlendOp;

    private _workaround: null; // this doesn't actually exist, it's just a workaround for dtslint
}

/**
 * Represents an RGBA color value for use in rendering operations.
 */
declare class Color {
    static readonly AliceBlue: Color;
    static readonly AntiqueWhite: Color;
    static readonly Aqua: Color;
    static readonly Aquamarine: Color;
    static readonly Azure: Color;
    static readonly Beige: Color;
    static readonly Bisque: Color;
    static readonly Black: Color;
    static readonly BlanchedAlmond: Color;
    static readonly Blue: Color;
    static readonly BlueViolet: Color;
    static readonly Brown: Color;
    static readonly BurlyWood: Color;
    static readonly CadetBlue: Color;

    /** Chartreuse. The best color with the best name. */
    static readonly Chartreuse: Color;

    static readonly Chocolate: Color;
    static readonly Coral: Color;
    static readonly CornflowerBlue: Color;
    static readonly Cornsilk: Color;
    static readonly Crimson: Color;
    static readonly Cyan: Color;
    static readonly DarkBlue: Color;
    static readonly DarkCyan: Color;
    static readonly DarkGoldenrod: Color;
    static readonly DarkGray: Color;
    static readonly DarkGreen: Color;
    static readonly DarkKhaki: Color;
    static readonly DarkMagenta: Color;
    static readonly DarkOliveGreen: Color;
    static readonly DarkOrange: Color;
    static readonly DarkOrchid: Color;
    static readonly DarkRed: Color;
    static readonly DarkSalmon: Color;
    static readonly DarkSeaGreen: Color;
    static readonly DarkSlateBlue: Color;
    static readonly DarkSlateGray: Color;
    static readonly DarkTurquoise: Color;
    static readonly DarkViolet: Color;
    static readonly DeepPink: Color;
    static readonly DeepSkyBlue: Color;
    static readonly DimGray: Color;
    static readonly DodgerBlue: Color;
    static readonly FireBrick: Color;
    static readonly FloralWhite: Color;
    static readonly ForestGreen: Color;
    static readonly Fuchsia: Color;
    static readonly Gainsboro: Color;
    static readonly GhostWhite: Color;
    static readonly Gold: Color;
    static readonly Goldenrod: Color;
    static readonly Gray: Color;
    static readonly Green: Color;
    static readonly GreenYellow: Color;
    static readonly Honeydew: Color;
    static readonly HotPink: Color;
    static readonly IndianRed: Color;
    static readonly Indigo: Color;
    static readonly Ivory: Color;
    static readonly Khaki: Color;
    static readonly Lavender: Color;
    static readonly LavenderBlush: Color;
    static readonly LawnGreen: Color;
    static readonly LemonChiffon: Color;
    static readonly LightBlue: Color;
    static readonly LightCoral: Color;
    static readonly LightCyan: Color;
    static readonly LightGoldenrodYellow: Color;
    static readonly LightGray: Color;
    static readonly LightGreen: Color;
    static readonly LightPink: Color;
    static readonly LightSalmon: Color;
    static readonly LightSeaGreen: Color;
    static readonly LightSkyBlue: Color;
    static readonly LightSlateGray: Color;
    static readonly LightSteelBlue: Color;
    static readonly LightYellow: Color;
    static readonly Lime: Color;
    static readonly LimeGreen: Color;
    static readonly Linen: Color;
    static readonly Magenta: Color;
    static readonly Maroon: Color;
    static readonly MediumAquamarine: Color;
    static readonly MediumBlue: Color;
    static readonly MediumOrchid: Color;
    static readonly MediumPurple: Color;
    static readonly MediumSeaGreen: Color;
    static readonly MediumSlateBlue: Color;
    static readonly MediumSpringGreen: Color;
    static readonly MediumTurquoise: Color;
    static readonly MediumVioletRed: Color;
    static readonly MidnightBlue: Color;
    static readonly MintCream: Color;
    static readonly MistyRose: Color;
    static readonly Moccasin: Color;
    static readonly NavajoWhite: Color;
    static readonly Navy: Color;
    static readonly OldLace: Color;
    static readonly Olive: Color;
    static readonly OliveDrab: Color;
    static readonly Orange: Color;
    static readonly OrangeRed: Color;
    static readonly Orchid: Color;
    static readonly PaleGoldenrod: Color;
    static readonly PaleGreen: Color;
    static readonly PaleTurquoise: Color;
    static readonly PaleVioletRed: Color;
    static readonly PapayaWhip: Color;
    static readonly PeachPuff: Color;
    static readonly Peru: Color;

    /** Pink. The color of eaty pigs. **\*MUNCH\*** */
    static readonly Pink: Color;

    static readonly Plum: Color;
    static readonly PowderBlue: Color;
    static readonly Purple: Color;
    static readonly Red: Color;
    static readonly RosyBrown: Color;
    static readonly RoyalBlue: Color;
    static readonly SaddleBrown: Color;
    static readonly Salmon: Color;
    static readonly SandyBrown: Color;
    static readonly SeaGreen: Color;
    static readonly Seashell: Color;
    static readonly Sienna: Color;
    static readonly Silver: Color;
    static readonly SkyBlue: Color;
    static readonly SlateBlue: Color;
    static readonly SlateGray: Color;
    static readonly Snow: Color;
    static readonly SpringGreen: Color;
    static readonly SteelBlue: Color;
    static readonly Tan: Color;
    static readonly Teal: Color;
    static readonly Thistle: Color;
    static readonly Tomato: Color;
    static readonly Transparent: Color;
    static readonly Turquoise: Color;
    static readonly Violet: Color;
    static readonly Wheat: Color;
    static readonly White: Color;
    static readonly WhiteSmoke: Color;
    static readonly Yellow: Color;
    static readonly YellowGreen: Color;
    static readonly PurwaBlue: Color;
    static readonly RebeccaPurple: Color;

    /** Stanky Bean. The first color created and named by an AI. */
    static readonly StankyBean: Color;

    /** Check if two `Color` objects are equivalent without regard to their alpha values. */
    static is(color1: Color, color2: Color): boolean;

    /** Get a new `Color` which is a 50/50 blend of the two given ones. */
    static mix(color1: Color, color2: Color): Color;

    /**
     * Get a new `Color` which is a weighted average of the two given ones, using the given
     * weighting factors.
     */
    static mix(color1: Color, color2: Color, w1: number, w2: number): Color;

    /**
     * Gets a `Color` corresponding to the specified color name which can be either HTML notation
     * (e.g. `#7FFF00`) or an X11 color name such as `chartreuse` (case insensitive).
     */
    static of(name: string): Color;

    /**
     * Construct a new `Color` object from the given RGBA values. All values must be in the range
     * [0.0,1.0].
     * @param red    The amount of red in the color.
     * @param green  The amount of green in the color.
     * @param blue   The amount of blue in the color.
     * @param alpha  Alpha (opacity).  Defaults to `1.0`.
     */
    constructor(red: number, green: number, blue: number, alpha?: number);

    /** The X11 name of the color for known colors, or else its HTML representation, e.g. `#FF8080FF`. */
    name: string;

    /** The value of the color's red component. */
    r: number;

    /** The value of the color's green component. */
    g: number;

    /** The value of the color's blue component. */
    b: number;

    /**
     * The value of the color's alpha component, representing its opacity. Use values less than 1.0
     * for translucency.
     */
    a: number;

    /** Gets a new `Color` object with the same values as this one. */
    clone(): Color;

    /**
     * Gets a new `Color` with the same RGB as this one but with its alpha multiplied by the given
     * factor. Useful for implementing transitions.
     */
    fadeTo(alphaFactor: number): Color;
}

/**
 * Provides a means for enumerating the contents of a directory (files and subdirectories).
 */
declare class DirectoryStream implements Iterable<DirectoryEntry> {
    /**
     * Construct a new `DirectoryStream` for a specified directory.
     * @param directoryName SphereFS path to the directory whose contents will be enumerated.
     * @param options       Options for creating the new directory stream.
     */
    constructor(directoryName: string, options?: DirectoryStreamOptions);

    /** Total number of file and subdirectory entries in the directory. */
    readonly fileCount: number;

    /** SphereFS path to the directory being enumerated. */
    readonly fileName: string;

    /** The current position within the stream of directory entries. Starts at 0. */
    position: number;

    [Symbol.iterator](): Iterator<DirectoryEntry>;

    /** Clean up any resources held by this `DirectoryStream` after using it. */
    dispose(): void;

    /** Get the next file or directory entry. */
    next(): IteratorResult<DirectoryEntry>;

    /** Rewind this stream so the directory contents can be enumerated again. */
    rewind(): void;
}

/**
 * The Dispatch API provides the means by which the game can manage the event loop.
 */
declare namespace Dispatch {
    /**
     * Cancel all currently scheduled one-time jobs, excluding those scheduled with `onExit`.
     * Recurring jobs are not affected.
     */
    function cancelAll(): void;

    /**
     * Schedule a one-time job to be run during a future frame.
     * @param numFrames How many frames to wait before firing.
     * @param callback  A function to be called when the Dispatch job fires.
     */
    function later(numFrames: number, callback: () => void): JobToken;

    /**
     * Schedule a one-time job to run during the current frame.
     * @param callback A function to be called when the Dispatch job fires.
     */
    function now(callback: () => void): JobToken;

    /**
     * Schedule a one-time job to run when the engine shuts down.
     * @param callback A function to be called when the Dispatch job fires.
     */
    function onExit(callback: () => void): JobToken;

    /**
     * Schedule a recurring job to run during the Render phase of each frame, before the backbuffer
     * is flipped to the screen.
     * @param callback A non-`async` function to be called when the job fires.
     * @param options  Scheduling options for this job.
     */
    function onRender(callback: () => void, options?: JobOptions): JobToken;

    /**
     * Schedule a recurring job to run during the Update phase of each frame. Use an `async`
     * callback to spread an update over multiple frames.
     * @param callback A function to be called when the job fires.
     * @param options  Scheduling options for this job.
     */
    function onUpdate(callback: () => void, options?: JobOptions): JobToken;
}

declare namespace FS {
    /**
     * Create a directory if it doesn't already exist. If it already exists, nothing happens.
     * @param path SphereFS path of the directory to create.
     */
    function createDirectory(path: string): void;

    /**
     * Delete a file from the file system. The SphereFS prefix must be writable.
     * @param path SphereFS path of the file to delete.
     */
    function deleteFile(path: string): void;

    /**
     * Get a Boolean value indicating whether a directory exists.
     * @param path SphereFS path of the directory to check for existence.
     */
    function directoryExists(path: string): boolean;

    /**
     * Get the directory component of a path, stripping the filename if present.
     * @param path SphereFS or relative path of a file or directory. It doesn't need to exist.
     */
    function directoryOf(path: string): string;

    /**
     * Evaluate a JavaScript script file (`.js`) as traditional code (not as a module).
     * @param path SphereFS path of the script file to execute.
     */
    function evaluateScript(path: string): void;

    /**
     * Get the filename extension (everything after the last `.`) from a file path.
     * @param path SphereFS or relative path of a file. The file need not exist.
     * @returns The extension starting with the last `.`, or `null` if the path has no extension.
     * @throws {TypeError} `path` must not name a known directory or end in a slash.
     */
    function extensionOf(path: string): string | null;

    /**
     * Get a Boolean value indicating whether a file exists.
     * @param path SphereFS path of the file to check for existence.
     */
    function fileExists(path: string): boolean;

    /**
     * Get the filename component from a file path, stripping any directory information if present.
     * @param path SphereFS or relative path of a file. The file need not exist.
     * @returns The filename component of the path, or `undefined` if the path names a known
     *          directory and/or ends in a slash.
     */
    function fileNameOf(path: string): string | undefined;

    /**
     * Get the full, canonical SphereFS pathname of a file, relative path, or absolute path. If two
     * paths have the same SphereFS pathname, they can be assumed to refer to the same file (or
     * directory).
     * @param path          The filename or path string to be interpreted.
     * @param baseDirectory Path to the base directory used to resolve relative paths.
     * @returns The normalized SphereFS pathname for the given path and base directory.
     */
    function fullPath(path: string, baseDirectory?: string): string;

    /**
     * Check whether a given path matches the specified wildcard pattern.
     * @param patterns One or more wildcard patterns using globbing syntax where `?` matches a
     *                 single character, `*` matches any number of characters except for slash
     *                 (`/`), and `**` is the same but also matches slashes.
     * @param path     The path to check.
     * @returns `true` if the path matches the pattern, otherwise `false`.
     */
    function match(path: string, patterns: string | string[]): boolean;

    function readFile(path: string): string;

    /**
     * Get an abbreviated version of a full SphereFS path by finding its path relative to a given
     * base directory.
     * @param path          A full SphereFS path to be abbreviated.
     * @param baseDirectory SphereFS path of the base directory for the relative path.
     */
    function relativePath(path: string, baseDirectory: string): string;

    /**
     * Remove an empty directory from the file system. The SphereFS prefix must be writable.
     * @param directoryPath SphereFS path of the directory to remove.
     */
    function removeDirectory(directoryPath: string): void;

    /**
     * Rename a file or directory or move it to a new location. The source and target prefixes must
     * be writable.
     * @param path    SphereFS path of the file to rename or move.
     * @param newPath The new SphereFS path of the file.
     */
    function rename(path: string, newPath: string): void;

    function writeFile(path: string, content: string | string[] | ArrayBuffer | ArrayBufferView): void;
}

/**
 * Provides stream-like access to the raw byte content of a file.
 */
declare class FileStream {
    /**
     * Opens a file asynchronously and returns a promise for a `FileStream` that
     * provides access to the contents of the file.
     * @param filename refers to the SphereFS path to the file
     * @param fileOp specifies the file operation requested.
     */
    static fromFile(fileName: string, fileOp: FileOp): Promise<FileStream>;

    constructor(fileName: string, fileOp: FileOp);

    /** Full, canonical SphereFS path of the open file. */
    readonly fileName: string;

    /** Amount of disk space used by the open file, in bytes. */
    readonly fileSize: number;

    /** Position of the next byte in the file to be read or written, starting at 0. */
    position: number;

    asyncRead(numBytes: number): Promise<ArrayBuffer>;
    asyncWrite(data: ArrayBuffer | ArrayBufferView): Promise<void>;

    /** Clean up any resources held by this `FileStream` after using it. */
    dispose(): void;

    read(size: number): ArrayBuffer;
    write(data: ArrayBuffer | ArrayBufferView): void;
}

/**
 * Represents a font for rendering text. This can be either RFN (Sphere raster font format) or a
 * TrueType font.
 */
declare class Font {
    /** The default font provided by the engine. */
    static readonly Default: Font;

    /**
     * Load a font in the background and construct a new `Font` for it once it's ready.
     * @async
     * @param fileName SphereFS path of an RFN format font file.
     * @param size     The size of the font when rendered, in pixels (not points!). Has no effect
     *                 for RFN fonts.
     * @param options  Options for creating the `Font` object.
     * @returns A promise for a newly constructed `Font` object.
     */
    static fromFile(fileName: string, size?: number, options?: FontOptions): Promise<Font>;

    /** SphereFS path of the file from which this `Font` was constructed. */
    readonly fileName: string;

    /** Height of a line of text as rendered using this font, in pixels. */
    readonly height: number;

    /**
     * Construct a new `Font` from a given font file. The font is usable immediately, but text will
     * not be rendered until it loads completely.
     * @param fileName SphereFS path of an RFN format font file.
     * @param size     The size of the font when rendered, in pixels (not points!). Has no effect
     *                 for RFN fonts.
     * @param options  Options for creating the `Font` object.
     */
    constructor(fileName: string, size?: number, options?: FontOptions);

    /**
     * Render text to a surface using this font.
     * @param surface   The surface on which to render.
     * @param x         X coordinate where the text will be drawn.
     * @param y         Y coordinate where the text will be drawn.
     * @param text      Text string to render.
     * @param color     Color of the text.
     * @param wrapWidth If the text is wider than `wrapWidth` in pixels, it will be wrapped to
     *                  multiple lines automatically.
     */
    drawText(surface: Surface, x: number, y: number, text: string, color?: Color, wrapWidth?: number): void;

    /**
     * Get the width and height, in pixels, of a text as drawn with this font.
     * @param text      The text to be measured.
     * @param wrapWidth Maximum width at which to wrap the text, in pixels.
     * @returns A `Size2D` object with the measured width and height of the text.
     */
    getTextSize(text: string, wrapWidth?: number): Size2D;

    /**
     * Get the height of a text, in pixels, as drawn with this font using a given `wrapWidth`.
     * @param text      The text to be measured.
     * @param wrapWidth The maximum width at which to wrap the text, in pixels.
     */
    heightOf(text: string, wrapWidth?: number): number;

    /**
     * Get the width of a single line of text as drawn with this font, in pixels.
     * @param text The text to be measured.
     * @returns The width of the text when rendered, in pixels.
     */
    widthOf(text: string): number;

    /**
     * Split a text into multiple lines by applying word wrapping and newlines.
     * @param text      The text string to process.
     * @param wrapWidth The maximum width at which to wrap the text, in pixels.
     * @returns An array of strings, with each string being a new line of text.
     */
    wordWrap(text: string, wrapWidth: number): string[];
}

/**
 * Stores a list of numeric indices directly on the GPU that specify which entries in a vertex list
 * are used for a `Shape`.
 */
declare class IndexList {
    /**
     * Construct a new index list from an array of numeric indices.
     * @param indices The indices to be stored in the index list.
     */
    constructor(indices: number[]);
    private _workaround: null; // this doesn't actually exist, it's just a workaround for dtslint
}

/**
 * Provides proof of a scheduled Dispatch job and allows its scheduling to be manipulated.
 */
interface JobToken {
    /**
     * Cancels the job. For one-time jobs, if the job has already fired, calling this has no
     * effect.
     */
    cancel(): void;

    /** Pauses the job, preventing it from firing until `resume` is called. */
    pause(): void;

    /** Resumes a job whose scheduling was paused with `pause`. */
    resume(): void;
}

declare class Joystick {
    static readonly Null: Joystick;
    static readonly P1: Joystick;
    static readonly P2: Joystick;
    static readonly P3: Joystick;
    static readonly P4: Joystick;

    static getDevices(): Joystick[];

    readonly name: string;
    readonly numAxes: number;
    readonly numButtons: number;

    getPosition(axisID: number): number;
    isPressed(buttonID: number): boolean;
}

/**
 * Represents a keyboard-like input device.
 */
declare class Keyboard {
    /** The default keyboard device provided by the engine. */
    static readonly Default: Keyboard;

    /** `true` if Caps Lock is active, otherwise `false`. */
    readonly capsLock: boolean;

    /** `true` if Num Lock is active, otherwise false. */
    readonly numLock: boolean;

    /** `true` if Scroll Lock is active, otherwise false. Not all keyboards support Scroll Lock. */
    readonly scrollLock: boolean;

    /**
     * Get the printable string representation of a keyboard key, if one exists.
     * @param key A member of `Key` specifying the keyboard key.
     * @param shifted `true` for a shifted version of the key (i.e. pretend `Shift` is pressed).
     * @returns The printable string representation of the key, or an empty string for non-printable
     *          keys.
     */
    charOf(key: Key, shifted?: boolean): string;

    /** Clear any keys from the keyboard queue that haven't yet been retrieved with `getKey`. */
    clearQueue(): void;

    /**
     * Get the next key in the keyboard queue. The key is removed from the queue.
     * @returns The next key in the keyboard queue, or `null` if the queue was empty.
     */
    getKey(): Key | null;

    /**
     * Get a Boolean value indicating whether a given key is currently pressed down.
     * @param key A member of `Key` naming the keyboard key to check.
     * @returns `true` if the key is currently pressed, otherwise `false`.
     */
    isPressed(key: Key): boolean;
}

/**
 * Mixes audio from different sources and allows them all to be controlled as a unit.
 */
declare class Mixer {
    /** The default CD-quality mixer provided by the engine. */
    static readonly Default: Mixer;

    /** The output volume of the mixer. 0.0 is silent, 1.0 is full volume. */
    volume: number;

    /**
     * Construct a new mixer with the given parameters.
     * @param sampleRate    The sample rate of the audio produced by the mixer, in Hz.
     * @param bitsPerSample Number of bits per sample.
     * @param numChannels   Number of independent sound channels in the mixer output.
     */
    constructor(sampleRate: number, bitsPerSample: 8 | 16 | 24 | 32, numChannels?: number);
}

/**
 * Represents a collection of related shapes with an associated shader program and transformation
 * matrix.
 */
declare class Model {
    /**
     * Construct a new model from a list of shapes.
     * @param shapes An array of shapes that make up the model.
     * @param shader Shader to use when rendering this model.
     */
    constructor(shapes: Shape[], shader?: Shader);

    shader: Shader;
    transform: Transform;

    /**
     * Render the model to a surface or the backbuffer if no surface is provided.
     * @param surface Surface on which to render the model.
     */
    draw(surface?: Surface): void;
}

/**
 * Represents a mouse-like pointing device.
 */
declare class Mouse {
    /** The default mouse device provided by the engine. */
    static readonly Default: Mouse;

    /**
     * 2D position of the mouse cursor in pixels, relative to the top-left corner of the game,
     * represented as a two-element array (2-tuple).
     */
    readonly position: [number, number];

    /** X coordinate of the mouse cursor in pixels, relative to the top-left corner of the game. */
    readonly x: number;

    /** Y coordinate of the mouse cursor in pixels, relative to the top-left corner of the game. */
    readonly y: number;

    /** Clear any events from the mouse queue that haven't yet been retrieved with `getEvent`. */
    clearQueue(): void;

    /**
     * Get the next event in the mouse queue. The event is removed from the queue.
     * @returns A `MouseEvent` object describing the event retrieved, if any.
     */
    getEvent(): MouseEvent;

    /**
     * Get a Boolean value indicating whether a given mouse button is currently pressed down.
     * @param key A member of `MouseKey` naming the mouse button to check.
     * @returns `true` if the button is currently pressed down, otherwise `false`.
     */
    isPressed(key: MouseKey): boolean;
}

/**
 * Represents an instance of the built-in pseudorandom number generator.
 */
declare class RNG implements Iterable<number> {
    /**
     * Construct a new RNG using a given seed. Each seed value produces a different sequence of
     * random numbers.
     * @param seed A number whose integer part will be used to determine the initial RNG state.
     */
    static fromSeed(seed: number): RNG;

    /**
     * Construct a new RNG which starts in a specified state.
     * @param state A 32-byte hexadecimal string specifying the initial state of the new RNG, in the
     *              same format as the `state` property.
     * @throws `TypeError` if `state` is not exactly 32 characters or contains anything other than
     *         hexadecimal digits (0-9, A-F, case-insensitive).
     */
    static fromState(state: string): RNG;

    [Symbol.iterator](): Iterator<number>;

    /**
     * Construct a new RNG using a seed based on the current date and time.
     */
    constructor();

    /**
     * A 32-byte string of hexadecimal digits representing the current state of this RNG. This
     * string can be saved, e.g., to a file, and later passed to `RNG.fromState` to resume the
     * RNG from that exact point.
     */
    state: string;

    /**
     * Get the next random number in the sequence. Follows the ES6 iterator protocol.
     */
    next(): IteratorResult<number>;
}

/**
 * Represents an audio clip optimized for regular, repeated playback.
 */
declare class Sample {
    /**
     * Load an audio file in the background and construct a new sample from its contents.
     * @async
     * @param fileName SphereFS path of an audio file.
     * @returns A promise for the newly constructed `Sample`.
     */
    static fromFile(fileName: string): Promise<Sample>;

    /**
     * Construct a new sample from the contents of an audio file. The sample can be used
     * immediately; playback will be silent until the file is fully loaded.
     * @param fileName SphereFS path of an audio file.
     */
    constructor(fileName: string);

    /** Full, canonical SphereFS path of the audio file used for this sample. */
    readonly fileName: string;

    /**
     * Play a new instance of this sample on a given mixer.
     * @param mixer   The mixer used to play back the sample.
     * @param options Playback options.
     */
    play(mixer: Mixer, options?: SoundOptions): void;

    /** Stop playback of all currently playing instances of this sample. */
    stopAll(): void;
}

/**
 * Represents a TCP server that listens for incoming TCP connections on a specific port.
 */
declare class Server {
    /**
     * Initialize a TCP server that listens for incoming connections on a given port.
     * @param port        TCP port number on which to run the server.
     * @param backlogSize Maximum number of incoming connections that can remain unaccepted before
     *                    new connections are refused.
     */
    constructor(port: number, backlogSize?: number);

    /**
     * Boolean value specifying whether Nagle's algorithm (write coalescing) should be **disabled**
     * for sockets spawned by this server.
     * @default false
     */
    noDelay: boolean;

    /**
     * Number of incoming connections still waiting to be accepted.
     */
    numPending: number;

    /**
     * Accept a pending incoming connection and create a new `Socket` for it.
     * @returns A `Socket` for the newly completed connection.
     * @throws A `RangeError` is thrown if there are no pending connections.
     */
    accept(): Socket;

    /**
     * Get a promise for the `Socket` of the next incoming connection, whenever one is available.
     * @returns A promise for the next connection's `Socket`.
     */
    acceptNext(): Promise<Socket>;

    /**
     * Shut down the server. Incoming connections that haven't yet been accepted will be dropped.
     */
    close(): void;
}

/**
 * Represents a shader program used to control low-level graphics rendering.
 */
declare class Shader {
    /** The default shader program provided by the engine. */
    static readonly Default: Shader;

    /**
     * Load the given shader files in the background and construct a new shader program from them.
     * @async
     * @param options Options for creating the new shader program.
     * @returns A promise for the new `Shader` object.
     */
    static fromFiles(options: ShaderOptions): Promise<Shader>;

    /**
     * Construct a new shader program. The shader can be used immediately, but will not have an
     * effect on rendering until it's fully loaded.
     * @param options Options for creating the new shader program.
     */
    constructor(options: ShaderOptions);

    /**
     * Get a new `Shader` using the same program as this one but with an independent set of uniform
     * variables.
     */
    clone(): Shader;

    /**
     * Set the value of a `bool` uniform.
     * @param name  Name of the uniform variable in the GLSL source text.
     * @param value Value to set: either `true` or `false`.
     */
    setBoolean(name: string, value: boolean): void;

    /**
     * Set the values of a `vec4` uniform from the components of a `Color` (RGBA).
     * @param name  Name of a `uniform` variable in the GLSL source text.
     * @param color A `Color` object whose RGBA values will be used.
     */
    setColorVector(name: string, color: Color): void;

    /**
     * Set the value of a `float` (floating point) uniform.
     * @param name  Name of a `uniform` variable in the GLSL source text.
     * @param value Value to set.
     */
    setFloat(name: string, value: number): void;

    /**
     * Set the values of a `vec2`, `vec3`, or `vec4` (floating point vector) uniform.
     * @param name   Name of a `uniform` variable in the GLSL source text.
     * @param values Values to set: an array of 2, 3, or 4 numbers.
     */
    setFloatVector(
        name: string,
        values: [number, number] | [number, number, number] | [number, number, number, number],
    ): void;

    /**
     * Set the value of an `int` (integer) uniform.
     * @param name  Name of a `uniform` variable in the GLSL source text.
     * @param value Value to set. Anything after the decimal point will be ignored.
     */
    setInt(name: string, value: number): void;

    /**
     * Set the values of an `ivec2`, `ivec3`, or `ivec4` (integer vector) uniform.
     * @param name   Name of a `uniform` variable in the GLSL source text.
     * @param values Values to set: an array of 2, 3, or 4 numbers. Anything after the decimal point
     *               will be ignored.
     */
    setIntVector(
        name: string,
        values: [number, number] | [number, number, number] | [number, number, number, number],
    ): void;

    /**
     * Set the values of a `mat4` (4x4 matrix) uniform from the matrix cells of a `Transform`.
     * @param name      Name of the `uniform` in the GLSL source text.
     * @param transform A `Transform` object whose 4x4 matrix cells will be used.
     */
    setMatrix(name: string, transform: Transform): void;
}

/**
 * Represents a graphics primitive whose parameters are stored on the GPU.
 */
declare class Shape {
    /**
     * Render a shape of the given type to the backbuffer.
     * @param type     Type of primitive to draw.
     * @param vertices Array of `Vertex` objects describing the shape's vertices.
     */
    static drawImmediate(type: ShapeType, vertices: Vertex[]): void;

    /**
     * Render a textured shape of the given type to the backbuffer.
     * @param type     Type of primitive to draw.
     * @param texture  Texture to use for the shape, or `null` for no texture.
     * @param vertices Array of `Vertex` objects describing the shape's vertices.
     */
    static drawImmediate(type: ShapeType, texture: Texture | null, vertices: Vertex[]): void;

    /**
     * Render a shape of the given type to a surface.
     * @param surface  Surface on which to render the shape.
     * @param type     Type of primitive to draw.
     * @param vertices Array of `Vertex` objects describing the shape's vertices.
     */
    static drawImmediate(surface: Surface, type: ShapeType, vertices: Vertex[]): void;

    /**
     * Render a textured shape of the given type to a surface.
     * @param surface  Surface on which to render the shape.
     * @param type     Type of primitive to draw.
     * @param texture  Texture to use for the shape, or `null` for no texture.
     * @param vertices Array of `Vertex` objects describing the shape's vertices.
     */
    static drawImmediate(surface: Surface, type: ShapeType, texture: Texture | null, vertices: Vertex[]): void;

    /**
     * Construct a new `Shape` with the given texture and vertices.
     * @param type     Type of primitive the new `Shape` will represent.
     * @param texture  Texture to use for this shape, or `null` for no texture.
     * @param vertices A vertex list containing vertices for this shape.
     * @param indices  Optional index list specifying which members of `vertices` are used in the
     *                 shape. Omit this to use the entire vertex list.
     */
    constructor(type: number, texture: Texture | null, vertices: VertexList, indices?: IndexList);

    /**
     * Index list specifying which elements of `vertexList` are used in the shape.  Set this to
     * `null` to use all elements of the vertex list in order.
     */
    indexList: IndexList | null;

    /**
     * Texture image used to texture the shape when rendered. How the texture is applied is
     * typically determined by the `u` and `v` components of each vertex, but may depend on the
     * shader in use. Use `null` for no texture.
     */
    texture: Texture | null;

    /** Vertex list containing the vertices used in this shape. */
    vertexList: VertexList;

    /**
     * Draw this shape to the backbuffer using an optional transform.
     * @param transform Transform to be applied before the projection transform.
     */
    draw(transform?: Transform): void;

    /**
     * Draw this shape to a given surface using an optional transform.
     * @param surface   Surface the shape will be rendered to.
     * @param transform Transform to be applied before the projection transform.
     */
    draw(surface: Surface, transform?: Transform): void;
}

/**
 * Represents an active connection to a remote machine over the TCP protocol.
 */
declare class Socket {
    /**
     * Connect to a host in the background. The promise resolves once the connection has been made.
     * @param hostName The name or IP address of the remote machine to connect to.
     * @param port     TCP port to connect on. The host must be listening on this port.
     */
    static connectTo(hostName: string, port: number): Promise<Socket>;

    /**
     * Construct a new socket object. It will start out disconnected and a connection must be
     * initiated manually later.
     */
    constructor();

    /**
     * Construct a new socket and attempt to make a connection. If the connection fails, there is no
     * way to tell; it is recommended to use `Socket.connectTo` instead.
     * @deprecated
     * @param hostName The name or IP address of the remote machine to connect to.
     * @param port     TCP port to connect on. The host must be listening on this port.
     */
    constructor(hostName: string, port: number);

    /** Number of bytes available for immediate reading from this socket. */
    readonly bytesAvailable: number;

    /** Number of bytes written to this socket but not yet sent over the network. */
    readonly bytesPending: number;

    /** Total number of bytes received since this socket was connected. */
    readonly bytesReceived: number;

    /** Total number of bytes sent over the network through this socket since it was connected. */
    readonly bytesSent: number;

    /** `true` if the socket is fully connected, otherwise `false`. */
    readonly connected: boolean;

    /**
     * Whether Nagle's algorithm is **disabled** for this socket. Setting this to `true` can reduce
     * latency for small writes but might increase overhead and lead to network congestion. Unless
     * you understand exactly what this does, it is recommended to leave it alone.
     * @default false
     */
    noDelay: boolean;

    /** Name or IP address of the remote machine this socket is connected to. */
    readonly remoteAddress: string;

    /**
     * The port number the remote machine is using to send data. This will be different from the
     * port used to make the connection and is generally only useful for diagnostic purposes.
     */
    readonly remotePort: number;

    /**
     * Read data from the socket in the background. The promise resolves once the requested number
     * of bytes has been read.
     * @param numBytes Number of bytes to read from the socket.
     * @returns A promise for an `ArrayBuffer` containing the data received.
     * @throws Rejects with `Error` if the connection is lost before all bytes can be read.
     */
    asyncRead(numBytes: number): Promise<ArrayBuffer>;

    /**
     * Write data to the socket in the background. The promise resolves once all the data has been
     * transmitted.
     * @param data A buffer object containing the data to write.
     * @throws Rejects with `Error` if the connection is lost before all bytes can be transmitted.
     */
    asyncWrite(data: ArrayBuffer | ArrayBufferView): Promise<void>;

    /**
     * Shut down the connection. If data remains in this socket's write buffer, it will be sent over
     * the network before disconnecting. The promise resolves once the socket is fully disconnected.
     */
    close(): Promise<void>;

    /**
     * Start trying to connect this socket in the background. The promise resolves once the
     * connection is established.
     * @param hostName The name or IP address of the remote machine to connect to.
     * @param port     TCP port to connect on. The host must be listening on this port.
     * @throws Rejects with `Error` if the connection fails.
     */
    connectTo(hostName: string, port: number): Promise<void>;

    /**
     * Immediately disconnect this socket. Any data remaining in the write-behind buffer will be
     * discarded without being sent over the network.
     */
    disconnect(): void;

    /**
     * Peek at the next `numBytes` in the socket's receive buffer without removing that data from
     * the buffer.
     * @param numBytes Number of bytes to read ahead.
     * @throws `RangeError` if there is less data in the receive buffer than requested.
     */
    peek(numBytes: number): ArrayBuffer;

    /**
     * Read the next `numBytes` from this socket's receive buffer. There must be at least that much
     * data available for immediate reading (see `bytesAvailable`).
     * @param numBytes Number of bytes of data to read.
     */
    read(numBytes: number): ArrayBuffer;

    /**
     * Write data to this socket. The data can be read on the other side of the connection.
     * @param data A buffer object containing the data to write.
     */
    write(data: ArrayBuffer | ArrayBufferView): void;
}

/**
 * Represents an audio clip optimized for streaming playback.
 */
declare class Sound {
    /**
     * Open an audio file in the background and construct a `Sound` that can be used to play it.
     * @async
     * @param fileName SphereFS path of an audio file.
     * @returns A promise for the newly constructed `Sound`.
     */
    static fromFile(fileName: string): Promise<Sound>;

    /**
     * Construct a `Sound` that can be used to play back the given audio file. The sound can be used
     * immediately, but playback may be silent until enough audio data has been buffered.
     * @param fileName SphereFS path of an audio file.
     */
    constructor(fileName: string);

    /** SphereFS path of the audio file used to construct the `Sound`. */
    readonly fileName: string;

    /** Duration of this sound, in seconds. */
    readonly length: number;

    /**
     * L/R stereo balance. 0.0 is centered, +/- 1.0 is full right/left respectively.
     * @default 0.0
     */
    pan: number;

    /** `true` if the sound is currently playing; `false` otherwise. */
    readonly playing: boolean;

    /** Playback position within the sound, in seconds. */
    position: number;

    /**
     * Set to `true` to have the sound repeat over and over.
     * @default true
     */
    repeat: boolean;

    /**
     * Playback speed. 1.0 is normal speed.
     * @default 1.0
     */
    speed: number;

    /**
     * Volume, as a percentage of the mixer's master volume. Sometimes called "gain".
     * @default 1.0
     */
    volume: number;

    /**
     * Pause playback of this sound. It can be resumed later by calling `play()` without a mixer.
     */
    pause(): void;

    /**
     * Play the sound on a given mixer. If the sound is paused and a mixer is not specified, resume
     * playback from the paused position.
     * @param mixer The mixer used to play back the sound.
     */
    play(mixer?: Mixer): void;

    /** Stop playback of this sound. */
    stop(): void;
}

/**
 * Provides a stream-like interface for playing raw audio data.
 */
declare class SoundStream {
    /**
     * Construct a new audio stream with the given parameters.
     * @param sampleRate The sample rate of the audio data, in Hz.
     * @param bitsPerSample The number of bits per sample.
     * @param numChannels Number of independent audio channels in the audio data.
     */
    constructor(sampleRate?: number, bitsPerSample?: 8 | 16 | 32, numChannels?: number);

    /* Amount of audio currently buffered (and not yet played), in seconds. */
    readonly length: number;

    /** Pause playback of this audio stream. */
    pause(): void;

    /**
     * Play this audio stream on a given mixer. If the stream is paused and a mixer is not
     * specified, resume playback from the paused position.
     */
    play(mixer?: Mixer): void;

    /** Stop playback and discard any unplayed data in the stream buffer. */
    stop(): void;

    /**
     * Write new audio data to the end of the stream buffer. Can (and should!) be called during
     * active playback.
     * @param data Buffer containing audio data to feed into the stream.
     */
    write(data: ArrayBuffer | ArrayBufferView): void;
}

/**
 * Represents a surface that can be used as a target for rendering operations. Surfaces can also be
 * used as textures.
 */
declare class Surface extends Texture {
    /**
     * A surface representing the backbuffer. The contents of `Surface.Screen` are presented to the
     * screen at the end of every frame's Render phase.
     */
    static readonly Screen: Surface;

    /**
     * Create a new surface initialized from the contents of an image file. The image is loaded in
     * the background; the promise resolves once the surface is ready for use.
     * @returns A promise for the new surface.
     */
    static fromFile(fileName: string): Promise<Surface>;

    /** Blending operation to use when rendering to this surface. */
    blendOp: BlendOp;

    /** Height of the surface, in pixels. */
    readonly height: number;

    /** Transform to use when rendering to this surface. Must include a projection. */
    transform: Transform;

    /** Width of the surface, in pixels. */
    readonly width: number;

    /**
     * Construct a new surface from the contents of an image file. Not supported in Oozaru; prefer
     * `Surface.fromFile` in new code.
     * @deprecated
     * @param fileName SphereFS path to an image file.
     */
    constructor(fileName: string);

    /**
     * Construct a new surface of a given size and initial contents.
     * @param width   Width of the new texture, in pixels.
     * @param height  Height of the new texture, in pixels.
     * @param content Either a `Color` to fill the texture with or a buffer of RGBA pixels.
     */
    constructor(width: number, height: number, content?: Color | ArrayBuffer);

    /**
     * Set this surface's clipping rectangle. When drawing to a surface, anything falling outside of
     * the clipping rectangle will not be rendered.
     * @param x       X coordinate relative to the upper-left corner of the surface, in pixels.
     * @param y       Y coordinate relative to the upper-left corner of the surface, in pixels.
     * @param width   Width of the new clipping rectangle, in pixels.
     * @param height  Height of the new clipping rectangle, in pixels.
     */
    clipTo(x: number, y: number, width: number, height: number): void;

    /**
     * Convert the contents of this surface to a texture. All surfaces are also textures, so this is
     * provided only for backward compatibility with API level 1.
     * @deprecated
     * @returns A new `Texture` created from the contents of this surface.
     */
    toTexture(): Texture;
}

/**
 * Represents an image used for texturing `Shape` primitives.
 */
declare class Texture {
    /**
     * Create a texture from an image file in the background. The promise resolves with a new
     * `Texture` once it's ready to use.
     * @param fileName SphereFS path of the image file to load.
     */
    static fromFile(fileName: string): Promise<Texture>;

    /**
     * The SphereFS path of the image file used to create the texture, or `null` for non-file-based
     * textures.
     */
    readonly fileName: string | null;

    /** Height of the texture image, in pixels. */
    readonly height: number;

    /** Width of the texture image, in pixels. */
    readonly width: number;

    /**
     * Construct a new texture from an image file or from the contents of a `Surface`
     * @param source SphereFS path of the image file to load, or a Surface object whose
     *               contents will be used for the new texture
     */
    constructor(source: string | Surface);

    /**
     * Construct a new texture of a given size and initial contents.
     * @param width   The width of the new texture, in pixels.
     * @param height  The height of the new texture, in pixels.
     * @param content Either a `Color` to fill the texture with or a buffer of RGBA pixels.
     */
    constructor(width: number, height: number, content?: Color | ArrayBuffer | ArrayBufferView);

    /**
     * Get the raw RGBA pixel data from this texture. May be slow!
     */
    download(): Uint8ClampedArray;

    /**
     * Upload new RGBA pixel data to this texture.
     * @param data A buffer with the new RGBA pixel values.
     */
    upload(data: ArrayBuffer | ArrayBufferView): void;
}

/**
 * Represents a transformation matrix for rendering operations.
 */
declare class Transform {
    /** Constructs a new transform initialized to the identity matrix. */
    constructor();

    /** Provides direct access to the 4x4 matrix cells of this transform. */
    readonly matrix: number[][];

    /**
     * Composes another transform with this one. The result is the same as if the two were applied
     * consecutively.
     * @param transform The transform to be applied after this one.
     */
    compose(transform: Transform): Transform;

    /** Reset this transform to the identity matrix. */
    identity(): Transform;

    /** Add a 2D orthographic projection to the transform. */
    project2D(left: number, top: number, right: number, bottom: number, near?: number, far?: number): Transform;

    /** Add a 3D frustum projection to the transform. */
    project3D(fov: number, aspect: number, near: number, far: number): Transform;

    /**
     * Add a 2D rotation (i.e. rotation about the Z axis) to the transform.
     * @param angle The angle of rotation, in radians.
     */
    rotate(angle: number): Transform;

    /**
     * Add a rotation to the transform.
     * @param angle The angle of rotation, in radians.
     * @param vx    The X component of the vector to rotate around.
     * @param vy    The Y component of the vector to rotate around.
     * @param vz    The Z component of the vector to rotate around.
     */
    rotate(angle: number, vx: number, vy: number, vz: number): Transform;

    /**
     * Add a scaling transformation to the transform.
     * @param sx The scaling factor for the X axis.
     * @param sy The scaling factor for the Y axis.
     * @param sz The scaling factor for the Z axis.
     */
    scale(sx: number, sy: number, sz?: number): Transform;

    /**
     * Add a translation (slide) to the transform.
     * @param tx The amount to move the X axis.
     * @param ty The amount to move the Y axis.
     * @param tz The amount to move the Z axis.
     */
    translate(tx: number, ty: number, tz?: number): Transform;
}

/**
 * Stores vertex data for a `Shape` directly on the GPU.
 */
declare class VertexList {
    /**
     * Construct a new vertex list from an array of vertex descriptors.
     * @param vertices An array of `Vertex` objects describing the vertices.
     */
    constructor(vertices: Vertex[]);
    private _workaround: null; // this doesn't actually exist, it's just a workaround for dtslint
}

/**
 * Provides functions for data compression and decompression.
 */
declare namespace Z {
    /**
     * Compress data using the DEFLATE compression algorithm.
     * @param data  A buffer containing the data to compress.
     * @param level Compression level between 0 (no compression) and 9 (max).
     * @returns An ArrayBuffer containing the compressed data.
     */
    function deflate(data: ArrayBuffer | ArrayBufferView, level?: number): ArrayBuffer;

    /**
     * Uncompress data that was previously compressed using `Z.deflate`, with optional "inflate
     * bomb" protection.
     * @param data    A buffer containing some data compressed using `deflate`.
     * @param maxSize The maximum allowed size of the data after inflation, in bytes.
     * @returns An ArrayBuffer containing the uncompressed data.
     */
    function inflate(data: ArrayBuffer | ArrayBufferView, maxSize?: number): ArrayBuffer;
}

/**
 * Collects all the built-in classes and objects provided as part of the Sphere Runtime into one
 * convenient package.
 */
declare module "sphere-runtime" {
    export { default as Console } from "console";
    export { default as DataStream } from "data-stream";
    export { default as FocusTarget } from "focus-target";
    export { default as from, Query } from "from";
    export { default as Logger } from "logger";
    export { default as Music } from "music";
    export { default as Prim } from "prim";
    export { default as Random } from "random";
    export { default as Tween, Easing } from "tween";
    export { default as Thread } from "thread";
}

declare module "console" {
    export default Console;

    import Thread from "thread";

    /**
     * Specifies options for creating a console.
     */
    interface ConsoleOptions extends JobOptions {
        /**
         * The hotkey the player can use to display the console, or `null` to disable keyboard
         * activation.
         * @default null
         */
        hotKey?: Key | null | undefined;

        /**
         * SphereFS path of a file to which all console output will be written, or `null` to disable
         * logging.
         * @default null
         */
        logFileName?: string | null | undefined;

        /**
         * The mouse button the player can use to display the console, or `null` to disable mouse
         * activation.
         * @default null
         */
        mouseKey?: MouseKey | null | undefined;

        /**
         * Text to show next to the command prompt at the top of the console.
         * @default "$"
         */
        prompt?: string | undefined;
    }

    /**
     * Represents a text console. The player can use the console to view internal log messages as
     * well as enter commands to control the game's low-level workings.
     */
    class Console extends Thread {
        /**
         * Construct a new console. There is rarely a need to make more than one.
         * @param options Options for the new console.
         */
        constructor(options?: ConsoleOptions);

        /** Whether this console is currently being displayed to the player. */
        visible: boolean;

        /**
         * Registers an object and associated set of commands with the console.
         * @param name    The name of the object, as used in commands. Note that if this contains
         *                any spaces, the player will have to quote it.
         * @param object  The JavaScript object to be registered.
         * @param methods An object whose methods correspond to commands. When the user types the
         *                associated command, its method is called with `this` set to `thisArg`.
         */
        defineObject<T>(
            name: string,
            object: T,
            methods: Record<string, (this: T, ...args: Array<(string | number)>) => void>,
        ): void;

        /**
         * Write a line of text to the console.
         * @param texts One or more strings to write. If more than one string is provided, they will
         *              be separated will chevrons (`>>`).
         */
        log(...texts: string[]): void;

        /**
         * Start up the console. The console is initially invisible, but the player can activate it
         * using its configured hotkey.
         */
        start(): Promise<void>;

        /**
         * Unregisters a set of commands that was previously registered with `defineObject`.
         * @param name
         */
        undefineObject(name: string): void;
    }
}

interface FieldDescriptor {
    type:
        | "bool"
        | "float32be"
        | "float32le"
        | "float64be"
        | "float64le"
        | "int8"
        | "int16be"
        | "int16le"
        | "int32be"
        | "int32le"
        | "uint8"
        | "uint16be"
        | "uint16le"
        | "uint32be"
        | "uint32le"
        | "fstring"
        | "lstr8"
        | "lstr16be"
        | "lstr16le"
        | "lstr32be"
        | "lstr32le"
        | "raw";
    length?: number | undefined;
    size?: number | undefined;
}

interface FileDescriptor {
    [key: string]: FieldDescriptor;
}

declare module "data-stream" {
    export default DataStream;

    /**
     * Allows you to read from structured binary files like those used for Sphere game
     * assets (maps, tilesets, etc.) based on a simple JSON read individual binary values
     * from the file.
     * @see FileStream
     */
    class DataStream {
        /**
         * Opens a file asynchronously and returns a promise for a `DataStream` that
         * provides access to the contents of the file.
         * @param filename refers to the SphereFS path to the file
         * @param fileOp specifies the file operation requested.
         */
        static fromFile(filename: string, fileOp: FileOp): Promise<DataStream>;

        constructor(filename: string, fileOp: FileOp);

        /**
         * Reads an IEEE floating point value from the data file.
         * @param littleEndian Reads the file in little-endian mode if true.
         */
        readFloat32(littleEndian?: boolean): number;
        /**
         * Reads an IEEE floating point value from the data file.
         * @param littleEndian Reads the file in little-endian mode if true.
         */
        readFloat64(littleEndian?: boolean): number;

        /**
         * Reads an 8-bit signed integer (-128 to 127) value from the data file.
         */
        readInt8(): number;
        /**
         * Reads a 16-bit signed integer (-32,768 to 32,767) value from the data file.
         * @param littleEndian Reads in little-endian mode if true.
         */
        readInt16(littleEndian?: boolean): number;
        /**
         * Reads a 32-bit signed integer (-2,147,483,648 to 2,147,483,647) value from the
         * data file.
         * @param littleEndian Reads in little-endian mode if true.
         */
        readInt32(littleEndian?: boolean): number;

        /**
         * Reads an 8-bit unsigned integer (0 to 255) value from the data file.
         */
        readUint8(): number;
        /**
         * Reads a 16-bit unsigned integer (0 to 65,535) value from the data file.
         * @param littleEndian Reads in little-endian mode if true.
         */
        readUint16(littleEndian?: boolean): number;
        /**
         * Reads a 32-bit unsigned integer (0 to 4,294,967,295) value from the data file.
         * @param littleEndian Reads in little-endian mode if true.
         */
        readUint32(littleEndian?: boolean): number;

        /**
         * Reads a UTF-8 string from the data file.
         * @param length Specifies how many bytes to read.
         */
        readStringRaw(length: number): string;
        /**
         * Reads a UTF-8 length-prefixed string from the data file, where the length
         * in bytes is stored as an unsigned integer.
         */
        readString8(): string;
        /**
         * Reads a UTF-8 length-prefixed string from the data file, where the length
         * in bytes is stored as an unsigned integer.
         * @param littleEndian Reads the file in little-endian mode if true.
         */
        readString16(littleEndian?: boolean): string;
        /**
         * Reads a UTF-8 length-prefixed string from the data file, where the length
         * in bytes is stored as an unsigned integer.
         * @param littleEndian Reads the file in little-endian mode if true.
         */
        readString32(littleEndian?: boolean): string;

        /**
         * Reads an object from the data file.
         * @param desc An object describing the layout of the file.
         * @returns An object with the same fields as `desc`, whose values are based on the contents
         * of `desc`.
         * @example
         * // from the miniSphere runtime docs
         * rmp_header = myReader.readStruct({
         *     signature: { type: 'fstring', length: 4 },
         *     version: { type: 'uint16le' },
         *     type: { type: 'uint8' },
         *     numLayers: { type: 'uint8' },
         *     reserved1: { type: 'raw', size: 1 },
         *     numEntities: { type: 'uint16le' },
         *     startX: { type: 'uint16le' },
         *     startY: { type: 'uint16le' },
         *     startLayer: { type: 'uint8' },
         *     startDir: { type: 'uint8' },
         *     numStrings: { type: 'uint16le' },
         *     numZones: { type: 'uint16le' },
         *     repeating: { type: 'bool' },
         *     reserved2: { type: 'raw', size: 234 },
         * });
         */
        readStruct(desc: FileDescriptor): any;

        /**
         * Writes a 32-bit floating point value (-3.4*10^38 to 3.4*10^38) to the data file.
         * @param value The number to be written.
         * @param littleEndian Writes in little-endian mode if true.
         */
        writeFloat32(value: number, littleEndian?: boolean): void;
        /**
         * Writes a 64-bit floating point value (-1.7*10^308 to 1.7*10^308) to the data file.
         * @param value The number to be written.
         * @param littleEndian Writes in little-endian mode if true.
         */
        writeFloat64(value: number, littleEndian?: boolean): void;

        /**
         * Writes an 8-bit signed integer (-128 to 127) value to the data file.
         * @param value The number to be written.
         */
        writeInt8(value: number): void;
        /**
         * Writes a 16-bit signed integer (-32,768 to 32,767) value to the data file.
         * @param value The number to be written.
         * @param littleEndian Writes in little-endian mode if true.
         */
        writeInt16(value: number, littleEndian?: boolean): void;
        /**
         * Writes a 32-bit signed integer (-2,147,483,648 to 2,147,483,647) value to the
         * data file.
         * @param value The number to be written.
         * @param littleEndian Writes in little-endian mode if true.
         */
        writeInt32(value: number, littleEndian?: boolean): void;

        /**
         * Writes an 8-bit unsigned integer (0 to 255) value to the data file.
         * @param value The number to be written.
         */
        writeUint8(value: number): void;
        /**
         * Writes a 16-bit unsigned integer (0 to 65,535) value to the data file.
         * @param value The number to be written.
         * @param littleEndian Writes in little-endian mode if true.
         */
        writeUint16(value: number, littleEndian?: boolean): void;
        /**
         * Writes a 32-bit unsigned integer (0 to 4,294,967,295) value to the data file.
         * @param value The number to be written.
         * @param littleEndian Writes in little-endian mode if true.
         */
        writeUint32(value: number, littleEndian?: boolean): void;

        /**
         * Writes a UTF-8 string to the data file.
         * @param value The string written to the file.
         */
        writeStringRaw(value: string): void;
        /**
         * Writes a UTF-8 length-prefixed string to the data file, where the length is
         * stored as an unsigned integer.
         * @param value The string written to the file.
         */
        writeString8(value: string): void;
        /**
         * Writes a UTF-8 length-prefixed string to the data file, where the length is
         * stored as an unsigned integer.
         * @param value The string written to the file.
         * @param littleEndian Reads the file in little-endian mode if true.
         */
        writeString16(value: string, littleEndian?: boolean): void;
        /**
         * Writes a UTF-8 length-prefixed string to the data file, where the length is
         * stored as an unsigned integer.
         * @param value The string written to the file.
         * @param littleEndian Reads the file in little-endian mode if true.
         */
        writeString32(value: string, littleEndian?: boolean): void;
    }
}

declare module "focus-target" {
    export default FocusTarget;

    /**
     * Specifies options for creating a focus target.
     */
    interface FocusTargetOptions {
        /**
         * Priority of the focus target. Higher-priority targets can take focus away from
         * lower-priority ones, but not vice versa.
         */
        priority?: number | undefined;
    }

    /**
     * Represents an entity which can receive input focus. It is strictly enforced that only one
     * `FocusTarget` can have the focus at a time and Z-order is automatically managed.
     */
    class FocusTarget {
        /**
         * Construct a new `FocusTarget`.
         * @param options Options for creating the new focus target.
         */
        constructor(options?: FocusTargetOptions);

        /** `true` if the focus target currently has the focus, otherwise `false`. */
        readonly hasFocus: boolean;

        /**
         * Get rid of this focus target by feeding it to the nearest eaty pig. If you don't feed it
         * enough focus targets, *you* get eaten. OH NO AAAAAAHHHHHHHHHH\*munch\*
         */
        dispose(): void;

        /**
         * Attempts to give this focus target the focus. If a higher-priority target currently has
         * the focus, this will not steal it.
         */
        takeFocus(): void;

        /**
         * Yield the focus to whichever focus target previously had it. If this target does not
         * currently have the focus, `yield` has no effect.
         */
        yield(): void;
    }
}

declare module "from" {
    export default from;
    export { Query };

    /**
     * Get a new query for the elements of one or more arrays or other iterable objects.
     * @param sources One or more arrays or iterable objects to query.
     */
    function from<T>(...sources: Array<Iterable<T>>): Query<T>;

    /**
     * Represents a sequence of values with optional query transformations applied. Queries can be
     * enumerated using `for..of` or additional query operations can be chained to produce a new
     * query.
     */
    class Query<T> implements Iterable<T> {
        [Symbol.iterator](): Iterator<T>;

        aggregate<R>(reducer: (accumulator: R, value: T) => R, seed: R): R;

        /**
         * Run the query and check if every result satisfies the given predicate function.
         * @param predicate A Boolean predicate function. It takes a query result and returns `true`
         *                  if the value matches, or `false` if it doesn't.
         * @returns `true` if all results match, `false` if not. `true` in case of an empty query.
         */
        all(predicate: (value: T) => boolean): boolean;

        /**
         * Run the query and check if every result is one of a fixed set of values.
         * @param values An `Iterable` containing the allowed values.
         * @returns `true` if all results match, `false` if not. `true` in case of an empty query.
         */
        allIn(values: Iterable<T>): boolean;

        /**
         * Run the query and check if at least one result satisfies the given predicate function.
         * @param predicate A Boolean predicate function. It takes a query result and returns `true`
         *                  if the value matches, or `false` if it doesn't.
         * @returns `true` if any result matches, `false` if not. `false` in case of an empty query.
         */
        any(predicate: (value: T) => boolean): boolean;

        /**
         * Run the query and check if at least one result is one of a fixed set of values.
         * @param values An `Iterable` containing the set of values to match.
         * @returns `true` if any result matches, `false` if not. `false` in case of an empty query.
         */
        anyIn(values: Iterable<T>): boolean;

        /**
         * Run the query and check if at least one result is equal to a specific value.
         * @param value The value or object reference to match.
         * @returns `true` if any result matches, `false` if not. `false` in case of an empty query.
         */
        anyIs(value: T): boolean;

        /**
         * Extend the query with a sorting operation that sorts the values in ascending order
         * according to the result of calling a key-selection function for each value.
         * @param keySelector A key selector function. It takes a query result and returns a string,
         *                    a number, or a Boolean value to be used as a key for sorting.
         */
        ascending(keySelector?: (value: T) => string | number | boolean): Query<T>;

        /**
         * Extend the query with an operation that calls a user-supplied function for each result
         * before passing it on as-is.
         * @param iteratee A callback function. It takes a query result as input and its return
         *                 value is ignored.
         */
        besides(iteratee: (value: T) => void): Query<T>;

        /**
         * Extend the query by appending the elements of one or more `Iterable` objects to the
         * results.
         * @param sources One or more `Iterable`s whose contents will be appended.
         * @return A new query for the transformed sequence.
         */
        concat(...sources: Array<Iterable<T>>): Query<T>;

        /**
         * Run the query and count the number of results it produces.
         * @returns The number of values produced by the query.
         */
        count(): number;

        /**
         * Run the query and count the number of results per unique string key.
         * @param keySelector A key selector function. It takes a query result and returns a string
         *                    to be used as a key for grouping.
         * @returns An object with properties corresponding to each key. The value of each property
         *          is the number of results with that key.
         */
        countBy(keySelector: (value: T) => string): Record<string, number>;

        /**
         * Extend the query with a sorting operation that sorts the values in descending order
         * according to the result of calling a key-selection function for each value.
         * @param keySelector A key selector function. It takes a query result and returns a string,
         *                    a number, or a Boolean value to be used as a key for sorting.
         */
        descending(keySelector?: (value: T) => string | number | boolean): Query<T>;

        distinct(): Query<T>;
        distinct(predicate: (value: T) => string): Query<T>;

        /**
         * Run the query and get the query result at a given position in the sequence.
         * @param index Position within the sequence, starting at 0.
         * @returns The value at the given position if present; `undefined` if the index exceeds the
         *          number of results.
         */
        elementAt(index: number): T | undefined;

        /**
         * Run the query and get the first result that satisfies the given predicate function.
         * @param predicate A Boolean predicate function. It takes a query result and returns `true`
         *                  if the value matches, or `false` if it doesn't.
         */
        first(predicate?: (value: T) => boolean): T | undefined;

        /**
         * Run the query and call a function for each result.
         * @param iteratee A callback function. It takes a query result as input and its return
         *                 value is ignored.
         */
        forEach(iteratee: (value: T) => void): void;

        groupBy(keySelector: (value: T) => string): Record<string, T[]>;
        join<U, R>(
            joinSource: Iterable<U>,
            predicate: (left: T, right: U) => boolean,
            selector: (left: T, right: U) => R,
        ): Query<R>;

        /**
         * Run the query and get the last result that satisfies the given predicate function.
         * @param predicate A Boolean predicate function. It takes a query result and returns `true`
         *                  if the value matches, or `false` if it doesn't.
         */
        last(predicate?: (value: T) => boolean): T | undefined;

        /**
         * Run the query and get a new query for the values produced. Memoized queries always return
         * the same results, even if the original source is modified.
         * @returns A new query for the memoized sequence.
         */
        memoize(): Query<T>;

        /**
         * Extend the query with an operation that appends additional values to the query results.
         * @param values Value(s) to inject into the query.
         */
        plus(...values: T[]): Query<T>;

        /**
         * Remove all values from the original array source found in the given list of values.
         * @param values The value(s) to be removed.
         * @throws If the query is memoized, has a non-array source, or any transformation happened
         *         before `pull`, throws a `TypeError`.
         */
        pull(...values: T[]): void;

        /**
         * Extend the query with a sampling operation that takes a given number of random results.
         * Unlike `sample`, this can select the same result more than once.
         * @param count Number of random results to take.
         * @returns A new query for the sampled sequence.
         */
        random(count: number): Query<T>;

        /**
         * Remove all values from the original array source that satisfy a given predicate function.
         * @param predicate A Boolean predicate function. It takes a query result and returns `true`
         *                  if the value matches, or `false` if it doesn't.
         * @throws If the query is memoized, has a non-array source, or any transformation happened
         *         before `remove`, a `TypeError` will be thrown.
         */
        remove(predicate: (value: T) => boolean): void;

        /**
         * Extend the query with a reversal operation that passes results through last-to-first.
         * @returns A new query for the inverted sequence.
         */
        reverse(): Query<T>;

        /**
         * Extend the query with a sampling operation that takes a given number of equal-probability
         * random samples from the results.
         * @param count Number of samples to take.
         * @returns A new query for the sampled sequence.
         */
        sample(count: number): Query<T>;

        /**
         * Extend the query with a mapping operation that transforms values using a selector
         * function.
         * @param selector A selector function. It takes a query result and returns a new value.
         * @returns A new query for the transformed results.
         */
        select<R>(selector: (value: T) => R): Query<R>;

        /**
         * Extend the query with a mapping operation that maps each incoming result to a list of
         * new values.
         * @param selector A selector function. It takes a query result and returns an array of new
         *                 values.
         * @returns A new query for the transformed results.
         */
        selectMany<R>(selector: (value: T) => Iterable<R>): Query<R>;

        /**
         * Extend the query with a randomizing operation that passes through results in a random
         * order using a Fisher-Yates shuffle.
         * @returns A new query for the randomized sequence.
         */
        shuffle(): Query<T>;

        /**
         * Run the query and get the single result that satisfies the given predicate function.
         * @param predicate A Boolean predicate function. It takes a query result and returns `true`
         *                  if the value matches, or `false` if it doesn't.
         * @returns The matching value, if there is one; otherwise, `undefined`.
         * @throws An `Error` is thrown if more than one match is found.
         */
        single(predicate?: (value: T) => boolean): T | undefined;

        /**
         * Extend the query with a filtering operation that discards a given number of results at
         * the beginning of the sequence.
         * @param count The number of results to discard.
         */
        skip(count: number): Query<T>;

        /**
         * Extend the query with a filtering operation that discards a given number of results at
         * the end of the sequence.
         * @param count The number of results to discard.
         */
        skipLast(count: number): Query<T>;

        /**
         * Extend the query with a filtering operation that discards results until the first time a
         * given predicate function is not satisifed.
         * @param predicate A Boolean predicate function. It takes a query result and returns `true`
         *                  if the value matches, or `false` if it doesn't.
         */
        skipWhile(predicate: (value: T) => boolean): Query<T>;

        /**
         * Extend the query with a filtering operation that keeps only a finite number of results
         * from the beginning of the sequence.
         * @param count The number of results to keep.
         */
        take(count: number): Query<T>;

        /**
         * Extend the query with a filtering operation that keeps only a finite number of results
         * from the end of the sequence.
         * @param count The number of results to keep.
         */
        takeLast(count: number): Query<T>;

        /**
         * Extend the query with a filtering operation that discards all results after the first
         * time a given predicate function is not satisfied.
         * @param predicate A Boolean predicate function. It takes a query result and returns `true`
         *                  if the value matches, or `false` if it doesn't.
         */
        takeWhile(predicate: (value: T) => boolean): Query<T>;

        /**
         * Extend the query with an operation that collects all incoming results into an array and
         * produces a new list of values.
         * @param transform A transformer function that takes an array of all results and returns an
         *                  iterable for the new set of results.
         */
        thru<R>(transform: (values: T[]) => Iterable<R>): Query<R>;

        /**
         * Run the query and get an array of the results produced.
         */
        toArray(): T[];

        update(selector: (value: T) => string): void;

        /**
         * Extend the query with a filter operation that keeps only those values satisfying a given
         * predicate function.
         * @param predicate A Boolean predicate function. It takes a query result and returns `true`
         *                  if the value matches, or `false` if it doesn't.
         * @returns A new query for the filtered results.
         */
        where(predicate: (value: T) => boolean): Query<T>;

        /**
         * Extend the query with a filtering operation that removes all results found in a fixed set
         * of values.
         * @param values Array of values to exclude.
         */
        without(...values: T[]): Query<T>;

        zip<U>(zipSource: Iterable<U>): Query<[T, U]>;
        zip<U, R>(zipSource: Iterable<U>, selector: (left: T, right: U) => R): Query<R>;
    }
}

declare module "logger" {
    export default Logger;

    /**
     * Provides a means to log individual lines of text to a file, with associated timestamps for
     * each entry.
     */
    class Logger {
        /**
         * Construct a `Logger` which writes to a specified file. If the file doesn't exist, it will
         * be created; otherwise, new entries will be appended to the existing file.
         * @param fileName SphereFS path of the log file.
         */
        constructor(fileName: string);

        /**
         * Begin a grouping of related log entries. Everything written between this and the
         * corresponding `endGroup` will be indented under the grouping's header.
         * @param title Name of the grouping to start.
         */
        beginGroup(title: string): void;

        /**
         * Close the most recently opened group of log entries.
         */
        endGroup(): void;

        /**
         * Write a timestamped log entry to this log file.
         * @param text The text of the log entry.
         */
        write(text: string): void;
    }
}

declare module "music" {
    export default Music;

    /**
     * Provides utility functions for controlling background music.
     */
    namespace Music {
        /**
         * Adjust the BGM volume, optionally over the course of several frames.
         * @param newVolume The target volume level.
         * @param numFrames The number of frames over which to adjust the volume.
         * @returns A promise that resolves when the volume reaches the new level.
         */
        function adjustVolume(newVolume: number, numFrames?: number): Promise<void>;

        /**
         * Temporarily override the normal BGM with a specific track, with optional crossfade.
         * @param fileName   SphereFS path of the music track to play.
         * @param fadeFrames Duration of the optional crossfade transition, in frames.
         */
        function override(fileName: string, fadeFrames?: number): void;

        /**
         * Play a different track, replacing the track currently on top of the music stack.
         * @param fileName   SphereFS path of the music track to play.
         * @param fadeFrames Duration of the optional crossfade transition, in frames.
         */
        function play(fileName: string, fadeFrames?: number): void;

        /**
         * Remove the music currently at the top of the music stack and resume the previously
         * playing track.
         * @param fadeFrames Duration of the optional crossfade transition, in frames.
         */
        function pop(fadeFrames?: number): void;

        /**
         * Push a new track onto the top of the music stack. The previous track can be resumed by
         * calling `pop`.
         * @param fileName   SphereFS path of the music file to play.
         * @param fadeFrames Duration of the optional crossfade transition, in frames.
         */
        function push(fileName: string, fadeFrames?: number): void;

        /**
         * Reset the music manager to normal operation after the game has called `override`.
         * @param fadeFrames Duration of the optional crossfade, in frames.
         */
        function reset(fadeFrames?: number): void;
    }
}

declare module "pact" {
    export default Pact;

    /**
     * Represents a promise which can be resolved or rejected externally.
     */
    class Pact<T> extends Promise<T> {
        /**
         * Construct a new, unsettled pact.
         */
        constructor();

        /**
         * Reject this pact's promise.
         * @param reason Value to reject the promise with.
         */
        reject(reason?: any): void;

        /**
         * Resolve this pact's promise.
         * @param value Value to resolve the promise with.
         */
        resolve(value?: T): void;

        /**
         * Get a standard promise which resolves or rejects with the same result as this pact.
         * Unlike the pact, the promise cannot be settled externally.
         */
        toPromise(): Promise<T>;
    }
}

declare module "prim" {
    export default Prim;

    /**
     * Provides utility functions for rendering primitive shapes such as circles and rectangles.
     */
    namespace Prim {
        /**
         * Render an entire texture as an 2D image to a surface.
         * @param surface Surface on which to render the image.
         * @param x       X coordinate of the upper-left corner on the surface.
         * @param y       Y coordinate of the upper-left corner on the surface.
         * @param texture Texture to be rendered.
         * @param mask    Optional color whose RGBA values will be multiplied with those of the
         *                texture. Use to tint the rendered image.
         */
        function blit(surface: Surface, x: number, y: number, texture: Texture, mask?: Color): void;

        /**
         * Render a portion of a texture as an 2D image to a surface.
         * @param surface Surface on which to render the image.
         * @param x       X coordinate of the upper-left corner on the surface.
         * @param y       Y coordinate of the upper-left corner on the surface.
         * @param texture Texture to be rendered.
         * @param sx      X coordinate, in pixels, of the top-left corner of the texture portion to draw.
         * @param sy      Y coordinate, in pixels, of the top-left corner of the texture portion to draw.
         * @param width   Width, in pixels, of the texture portion to draw.
         * @param height  Height, in pixels, of the texture portion to draw.
         * @param mask    Optional color whose RGBA values will be multiplied with those of the
         *                texture. Use to tint the rendered image.
         */
        function blitSection(
            surface: Surface,
            x: number,
            y: number,
            texture: Texture,
            sx: number,
            sy: number,
            width: number,
            height: number,
            mask?: Color,
        ): void;

        function drawCircle(surface: Surface, x: number, y: number, radius: number, color: Color): void;
        function drawEllipse(surface: Surface, x: number, y: number, rx: number, ry: number, color: Color): void;
        function drawLine(
            surface: Surface,
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            thickness: number,
            color: Color,
            color2?: Color,
        ): void;
        function drawPoint(surface: Surface, x: number, y: number, color: Color): void;
        function drawRectangle(
            surface: Surface,
            x: number,
            y: number,
            width: number,
            height: number,
            thickness: number,
            color: Color,
        ): void;
        function drawSolidCircle(
            surface: Surface,
            x: number,
            y: number,
            radius: number,
            color: Color,
            color2?: Color,
        ): void;
        function drawSolidEllipse(
            surface: Surface,
            x: number,
            y: number,
            rx: number,
            ry: number,
            color: Color,
            color2?: Color,
        ): void;
        function drawSolidRectangle(
            surface: Surface,
            x: number,
            y: number,
            width: number,
            height: number,
            color: Color,
        ): void;
        function drawSolidRectangle(
            surface: Surface,
            x: number,
            y: number,
            width: number,
            height: number,
            colorUL: Color,
            colorUR: Color,
            colorLR: Color,
            colorLL: Color,
        ): void;
        function drawSolidTriangle(
            surface: Surface,
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            x3: number,
            y3: number,
            color: Color,
        ): void;
        function drawSolidTriangle(
            surface: Surface,
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            x3: number,
            y3: number,
            color1: Color,
            color2: Color,
            color3: Color,
        ): void;

        /**
         * Fill an entire surface with a specified color.
         * @param surface The surface to fill.
         * @param color   Color to fill the surface with. Can be translucent, in which case the fill will be too.
         */
        function fill(surface: Surface, color: Color): void;
    }
}

declare module "random" {
    export default Random;

    /**
     * Provides utility functions for generating different kinds of random values.
     */
    namespace Random {
        /**
         * Take a random sample which is either `true` or `false` depending on given odds.
         * @param odds A number between `0.0` and `1.0` specifying the percentage chance of
         *             returning `true`.
         */
        function chance(odds: number): boolean;

        /**
         * Compute a random integer within a specified range.
         * @param min Highest value to return.
         * @param max Highest value to return.
         */
        function discrete(min: number, max: number): number;

        /**
         * Compute a random value according to the specified average. Over many samples, this
         * function will tend to a normal (Gaussian) distribution, or "bell curve".
         * @param mean Mean value. The sample distribution is centered around this value.
         * @param sigma Standard deviation. 68% of results are within 1x standard deviation, 95% are
         *              within 2x, etc.
         */
        function normal(mean: number, sigma: number): number;

        /**
         * Sample a single random value from an array.
         * @param array Array whose values are being sampled.
         */
        function sample<T>(array: T[]): T;

        /**
         * Compute a randomized alphanumeric string.
         * @param length Number of characters to generate. If not specified, defaults to `10`.
         */
        function string(length?: number): string;

        /**
         * Compute a random value according to the specified average value and variance.
         * @param mean     Mean value. The sample distribution is centered around this value.
         * @param variance Maximum amount by which the value is allowed to deviate from the mean, in
         *                 either direction ("give or take").
         */
        function uniform(mean: number, variance: number): number;
    }
}

declare module "thread" {
    export default Thread;

    /**
     * Represents a set of Dispatch jobs with associated state which can be controlled as a unit.
     */
    abstract class Thread {
        /**
         * Resolve a promise when one or more threads terminate. Use with `await`.
         * @param threads One or more threads to wait for. The promise resolves only once all
         *                specified threads have finished.
         */
        static join(...threads: Thread[]): Promise<void>;

        /**
         * Construct a new `Thread`, optionally specifying options for its Dispatch jobs.
         * @param options Options for the thread's recurring Dispatch jobs.
         */
        constructor(options?: JobOptions);

        /** Whether the thread currently has input focus. */
        readonly hasFocus: boolean;

        /**
         * Priority of this thread's Dispatch jobs. Higher priority threads are updated earlier and
         * rendered later in a frame.
         */
        readonly priority: number;

        /** Whether the thread is currently running (paused threads count as running). */
        readonly running: boolean;

        /**
         * Override this method to execute code when the thread starts up.
         */
        on_startUp(): void;

        /**
         * Override this method to execute code when the thread terminates or when the engine exits,
         * whichever comes first.
         */
        on_shutDown(): void;

        /**
         * Override this to check for input during the Update phase of each frame. Unlike
         * `on_update`, this is called only on frames in which the thread has the focus.
         */
        on_inputCheck(): void;

        /**
         * Override this to execute code during the Render phase of each frame.
         */
        on_render(): void;

        /**
         * Override this to execute code during the Update phase of each frame.
         */
        on_update(): void;

        /**
         * Pause updates for this thread. While paused, the thread will continue to render, but will
         * not update or check for input.
         */
        pause(): void;

        /**
         * Resume updates for this thread. If the thread isn't paused, this has no effect.
         */
        resume(): void;

        /**
         * Start execution of the thread and resolve a promise when the thread has fully started--which
         * may take several frames if its `on_startUp` handler is `async`.
         */
        start(): Promise<void>;

        /**
         * Shut down the thread, completely cancelling its Dispatch jobs. `on_shutDown` will be
         * called.
         */
        stop(): void;

        /**
         * Attempt to give this thread input focus. If a higher-priority `FocusTarget` or `Thread`
         * currently has the focus, it won't be stolen.
         */
        takeFocus(): void;

        /**
         * Give the focus back to whichever `FocusTarget` or `Thread` had it previously. Has no
         * effect if this thread doesn't currently have the focus.
         */
        yieldFocus(): void;
    }
}

declare module "tween" {
    export default Tween;
    export { Easing };

    /**
     * Specifies the interpolation method for a tween.
     */
    enum Easing {
        /** Overshoots the target values, then reverses into place. */
        Back,

        Bounce,
        Circular,
        Cubic,
        Elastic,
        Exponential,

        /** Linear interpolation: Animate smoothly from one value to the next, with no acceleration. */
        Linear,

        Quadratic,
        Quartic,
        Quintic,
        Sine,
    }

    /**
     * Provides a means to adjust the numeric values of an object over time via interpolation.
     */
    class Tween<T extends object> {
        /**
         * Construct a new `Tween` that can be used to adjust a specified object.
         * @param object     Object to animate with this tween.
         * @param easingType Easing function to use; `Easing.Sine` if not specified.
         */
        constructor(object: T, easingType?: Easing);

        /**
         * Adjust by easing in. This inverts the easing function and may look bad with certain ones.
         * @param newValues Object specifying the target values for each property.
         * @param numFrames Number of frames over which to do the adjustment.
         * @returns A promise that resolves once the adjustment is complete.
         */
        easeIn(newValues: Partial<T>, numFrames: number): Promise<void>;

        /**
         * Adjust by easing in *and* out. Approximately equivalent to easing in up to the halfway
         * point, then easing out the rest of the way.
         * @param newValues Object specifying the target values for each property.
         * @param numFrames Number of frames over which to do the adjustment.
         * @returns A promise that resolves once the adjustment is complete.
         */
        easeInOut(newValues: Partial<T>, numFrames: number): Promise<void>;

        /**
         * Adjust by easing out.
         * @param newValues Object specifying the target values for each property.
         * @param numFrames Number of frames over which to do the adjustment.
         * @returns A promise that resolves once the adjustment is complete.
         */
        easeOut(newValues: Partial<T>, numFrames: number): Promise<void>;
    }
}
