/**
 * Main classes and use
 *
 * @module NodeWebcam
 * @class API
 */
export declare module NodeWebcam {
    const version: string;
    const REVISION: number;
    const Factory: Factory;
    const Webcam: Factory;
    const FSWebcam: FSWebcam;
    const ImageSnapWebcam: ImageSnapWebcam;
    const WindowsWebcam: WindowsWebcam;
    /**
     * Main create
     *
     * @method create
     *
     * @param {Object} options
     */
    function create(options: WebcamOptions & { platform: 'linux' | 'fswebcam' }): FSWebcam;
    function create(options: WebcamOptions & { platform: 'win32' | 'win64' }): WindowsWebcam;
    function create(options: WebcamOptions & { platform: 'darwin' }): ImageSnapWebcam;
    function create(options: WebcamOptions): ImageSnapWebcam | FSWebcam | WindowsWebcam;

    /**
     * Quick capture helper
     *
     * @method capture
     *
     * @param {String} location
     * @param {Object} options
     * @param {Function} callback
     *
     */
    function capture(
        location: string | null,
        options: WebcamOptions,
        callback: (err: Error | null, data: string | Buffer) => void,
    ): ImageSnapWebcam | FSWebcam | WindowsWebcam;

    /**
     * Camera list helper
     *
     * @method list
     *
     * @param {Function(Array<String>)} callback
     *
     */
    function list(callback?: (cams: string[]) => void): void;

    /**
     * Camera options helper
     *
     * @method listControls
     *
     * @param {String} device
     * @param {Function(Array<CameraControl>)} callback
     */
    function listControls(device: string, callback: (cameraControl: CameraControl[]) => void): void;
}

declare type IPlatformType = 'linux' | 'darwin' | 'fswebcam' | 'win32' | 'win64' | string;

/**
 * Factory based on OS output
 */
declare class Factory {
    create(options: WebcamOptions, platform: 'darwin'): ImageSnapWebcam;

    create(options: WebcamOptions, platform: 'linux' | 'fswebcam'): FSWebcam;

    create(options: WebcamOptions, platform: 'win32' | 'win64'): WindowsWebcam;

    create(options: WebcamOptions, platform?: IPlatformType): ImageSnapWebcam | FSWebcam | WindowsWebcam;

    Platform: IPlatformType;

    static Types: {
        linux: FSWebcam;
        darwin: ImageSnapWebcam;
        fswebcam: FSWebcam;
        win32: WindowsWebcam;
        win64: WindowsWebcam;
    };
}

declare class ImageSnapWebcam extends Webcam {
    static readonly Defaults: {
        readonly delay: 1;
    };

    constructor(options: WebcamOptions);

    readonly bin: 'imagesnap';

    /**
     * @override
     *
     * Generate shell statement
     *
     * @param String location
     */
    override generateSh(location: string | null): string;

    /**
     * @Override
     *
     * Webcam list
     *
     * @param Function callback
     */
    override list(callback?: (cams: string[]) => void): void;

    override runCaptureValidations(data: string): Error | null;
}

/**
 * API for fswebcam
 *
 * @requires [ fswebcam ]
 *
 * @param Object options
 */
declare class FSWebcam extends Webcam {
    static readonly Defaults: {
        readonly topBanner: false;
        readonly bottomBanner: false;
        readonly title: false;
        readonly subTitle: false;
        readonly timestamp: false;
        readonly greyscale: false;
        readonly saturation: false;
        readonly skip: false;
        readonly setValues: { [attr: string]: string };
    };

    static readonly Validations: {
        noWebcam: RegExp;
    };

    constructor(options: WebcamOptions);

    readonly bin: 'fswebcam';

    /**
     * @override
     *
     * Create shot possibly from memory stdout
     *
     */
    override createShot(location: string | null, data: Buffer | null): Shot;

    /**
     * @override
     *
     * Generate shell statement
     *
     * @param String location
     *
     */
    override generateSh(location: string | null): string;

    /**
     * Get control values string
     *
     * @param {Object} setValues
     *
     * @returns {String}
     *
     */
    getControlSetString(setValues: { [attr: string]: string }): string;

    /**
     * Get shell statement to get the available camera controls
     *
     * @returns {String}
     */
    getListControlsSh(): string;

    /**
     * Parse output of list camera controls shell command
     *
     * @param {String} stdout Output of the list camera control shell command
     *
     * @param {Function(Array<CameraControl>)} callback Function that receives
     * camera controls
     */
    parseListControls(stdout: string, callback: (cameraControl: CameraControl[]) => void): void;

    /**
     * Data validations based on fs output
     *
     * @inheritdoc
     *
     */
    override runCaptureValidations(data: string): Error | null;
}

/**
 * API for Windows
 *
 * @requires [ CommandCam ]
 *
 * @param Object options
 */
declare class WindowsWebcam extends Webcam {
    static readonly Defaults: {
        readonly output: 'bmp';
    };

    constructor(options: WebcamOptions);

    readonly bin: string;

    /**
     * @override
     *
     * Generate shell statement
     *
     * @param String location
     *
     */
    override generateSh(location: string | null): string;

    override list(callback?: (cams: string[]) => void): void;

    override runCaptureValidations(data: string): Error | null;
}

/**
 * @typedef CameraControl
 * @type {Object}
 * @param {String} name Control name, as it should appear in the setValues object
 * @param {String} type Either "range" or "list"
 * @param {Number} min For "range" controls, minimum control value
 * @param {Number} max For "range" controls, maximum control value
 * @param {Array(<String>)} opts For "list" controls, available control options
 *
 */
declare type CameraControl =
    | {
          name: string;
          type: 'range';
          min?: number;
          max?: number;
      }
    | {
          name: string;
          type: 'list';
          opts?: string[];
      };

declare interface WebcamOptions {
    width?: number;
    height?: number;
    quality?: number;

    /**
     * Number of frames to capture
     * More the frames, longer it takes to capture
     * Use higher framerate for quality. Ex: 60
     */
    frames?: number;

    /**
     * Delay in seconds to take shot
     * if the platform supports miliseconds
     * use a float (0.1)
     * Currently only on windows
     */
    delay?: number;

    /* Save shots in memory */
    saveShots?: boolean;

    /**
     * [jpeg, png, bmp] support varies
     * Webcam.OutputTypes
     */
    output?: 'jpeg' | 'png' | 'bmp';

    /**
     * [location, buffer, base64]
     * Webcam.CallbackReturnTypes
     */
    callbackReturn?: 'location' | 'buffer' | 'base64';

    //Logging
    verbose?: boolean;

    title?: string | false;
    subtitle?: string | false;
    timestamp?: number | false;
    device?: string | false;
    greyscale?: string | false;
    rotation?: string | false;
    saturation?: string | false;
    topBanner?: boolean;
    bottomBanner?: boolean;
    skip?: boolean;
    setValues?: { [attr: string]: string };
}

/**
 * Webcam base class
 *
 * @class Webcam
 * @constructor
 * @param {Object} options composition options
 * used to set
 */
declare abstract class Webcam {
    /**
     * Main opts from construction
     *
     * @property opts
     * @type {Object}
     *
     */
    opts: WebcamOptions;
    static readonly Defaults: Readonly<WebcamOptions>;
    static readonly OutputTypes: {
        readonly jpeg: 'jpg';
        readonly png: 'png';
        readonly bmp: 'bmp';
    };

    /**
     * Array of Shot objects
     *
     * @property shots
     * @type {Shot[]}
     *
     */
    shots: Shot[];

    constructor(options: WebcamOptions);

    /**
     * Basic camera instance clone
     *
     * @method clone
     *
     * @return Webcam
     */
    clone(): Webcam;

    /**
     * Clear shot and camera memory data
     *
     * @method clear
     */
    clear(): void;

    /**
     * List available cameras
     *
     * @method list
     * @param {Function} callback returns a list of cameras
     */
    list(callback?: (cams: string[]) => void): void;

    /**
     * List available camera controls
     *
     * @method listControls
     *
     * @param {Function(Array<CameraControl>)} callback Function that receives
     * camera controls
     *
     * @param {String} stdoutOverride fswebcam command output override (for
     * testing purposes)
     */
    listControls(callback: (cams: any[] | Error) => void, stdoutOverride: string): void;

    /**
     * Has camera
     *
     * @method hasCamera
     * @param {Function} callback returns a Boolean
     */
    hasCamera(callback: (length: number) => void): void;

    /**
     * Capture shot
     *
     * @method capture
     *
     * @param {String} location
     * @param {Function} callback
     * @return void
     *
     */
    capture(location: string | null, callback: (err: Error | null, data: string | Buffer) => void): void;

    /**
     * Generate cli command string
     *
     * @method generateSh
     *
     * @return {String}
     */
    abstract generateSh(location: string | null): string;

    /**
     * Create a shot overider
     *
     * @method createShot
     * @return {String}
     */
    createShot(location: string | null, data: Buffer | null): Shot;

    /**
     * Get shot instances from cache index
     *
     * @method getShot
     *
     * @param {Number} shot Index of shots called
     * @param {Function} callback Returns a call from FS.readFile data
     *
     * @throws Error if shot at index not found
     *
     * @return {Boolean}
     *
     */
    getShot(index: number, callback: (err: Error | null, data: string | Buffer) => void): void;

    /**
     * Get last shot taken image data
     *
     * @method getLastShot
     * @throws Error Camera has no last shot
     * @return {Shot}
     */
    getLastShot(): Shot;

    /**
     * Get shot buffer from location
     * 0 indexed
     *
     * @method getShotBuffer
     *
     * @param {Number} shot Index of shots called
     * @param {Function} callback Returns a call from FS.readFile data
     */
    getShotBuffer(shot: number | Shot, callback: (err: Error | null, data: string | Buffer) => void): void;

    /**
     * Get last shot buffer taken image data
     *
     * @method getLastShotBuffer
     * @throws Error Shot not found
     */
    getLastShotBuffer(callback: (err: Error | null, data: string | Buffer) => void): void;

    /**
     * Get shot base64 as image
     * if passed Number will return a base 64 in the callback
     *
     * @method getBase64
     *
     * @param {Number|FS.readFile} shot To be converted
     * @param {Function( Error|null, Mixed )} callback Returns base64 string
     *
     * @return {String} Dont use
     *
     */
    getBase64(shot: number | Shot, callback: (err: Error | null, data: string | Buffer) => void): void;
    getBase64FromBuffer(shotBuffer: string | Buffer): string;

    /**
     * Get last shot taken base 64 string
     *
     * @method getLastShot64
     * @param {Function} callback
     */
    getLastShot64(callback: (err: Error | null, data: string | Buffer) => void): void;

    /**
     * Get last shot taken image data
     *
     * @method handleCallbackReturnType
     *
     * @param {Function} callback
     * @param {String} location
     *
     * @throws Error callbackReturn Type not valid
     */
    handleCallbackReturnType(callback: (err: Error | null, data: string | Buffer) => void, shot: Shot): void;
    abstract runCaptureValidations(data: string): Error | null;
}

/**
 * based on mrdoob's named like Node's EventEmitter
 * Used primarily as an inheritance via apply
 */
declare class EventDispatcher {
    apply(obj: Webcam): Webcam & EventDispatcher;
    on(type: WebcamEventType, listener: (event: WebcamEvent) => void): void;
    hasListener(type: WebcamEventType, listener: (event: WebcamEvent) => void): void;
    removeListener(type: WebcamEventType, listener: (event: WebcamEvent) => void): void;
    dispatch(event: WebcamEvent): void;
}

declare interface WebcamEvent {
    [attr: string]: any;
    type: WebcamEventType;
}

declare type WebcamEventType = 'capture' | string;

/**
 * Shared camera utils
 */
declare class CameraUtils {
    private constructor();

    static getCameras(callback?: (cams: string[]) => void): void;

    /**
     * Linux cameras read /dev dir
     */
    static getLinuxCameras(callback?: (cams: string[]) => void): void;
}

/**
 * JS utils
 */
declare class Utils {
    /** Highly used as an inheritance */
    setDefaults(object: WebcamOptions, defaults: WebcamOptions): WebcamOptions;

    /** Node-webcam escape string */
    escape(cmd: string): string;
}

declare class Shot {
    /**
     * Shot location
     *
     * @property location
     *
     * @type {String|null}
     *
     */
    public location: string | null;

    /**
     * Shot data or buffer
     *
     * @property data
     *
     * @type {Buffer|null}
     *
     */
    public data: Buffer | null;

    constructor(
        /**
         * Shot location
         *
         * @property location
         *
         * @type {String|null}
         *
         */
        location: string | null,

        /**
         * Shot data or buffer
         *
         * @property data
         *
         * @type {Buffer|null}
         *
         */
        data: Buffer | null,
    );
}

// Definitions by: Ricardo Azzi Silva <https://github.com/lordazzi>
