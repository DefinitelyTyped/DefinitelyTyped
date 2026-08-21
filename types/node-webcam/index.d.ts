// Minimum TypeScript Version: 4.3
/// <reference types="node" />
export const NodeWebcam: {
    version: string;
    REVISION: number;
    Factory: Factory;
    Webcam: Factory;
    FSWebcam: FSWebcam;
    ImageSnapWebcam: ImageSnapWebcam;
    WindowsWebcam: WindowsWebcam;
    /**
     * Main create
     */
    create: typeof create;

    /**
     * Quick capture helper
     */
    capture: typeof capture;

    /**
     * Camera list helper
     */
    list: typeof list;

    /**
     * Camera options helper
     */
    listControls: typeof listControls;
};

export const version: string;
export const REVISION: number;

export function create(options: WebcamOptions & { platform: "linux" | "fswebcam" }): FSWebcam;
export function create(options: WebcamOptions & { platform: "win32" | "win64" }): WindowsWebcam;
export function create(options: WebcamOptions & { platform: "darwin" }): ImageSnapWebcam;
export function create(options: WebcamOptions): ImageSnapWebcam | FSWebcam | WindowsWebcam;

/**
 * Quick capture helper
 */
export function capture(
    location: string | null,
    options: WebcamOptions,
    callback: (err: Error | null, data: string | Buffer) => void,
): ImageSnapWebcam | FSWebcam | WindowsWebcam;

/**
 * Camera list helper
 */
export function list(callback?: (cams: string[]) => void): void;

/**
 * Camera options helper
 */
export function listControls(device: string, callback: (cameraControl: CameraControl[]) => void): void;

export type IPlatformType = "linux" | "darwin" | "fswebcam" | "win32" | "win64" | string;

/**
 * Factory based on OS output
 */
export class Factory {
    create(options: WebcamOptions, platform: "darwin"): ImageSnapWebcam;

    create(options: WebcamOptions, platform: "linux" | "fswebcam"): FSWebcam;

    create(options: WebcamOptions, platform: "win32" | "win64"): WindowsWebcam;

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

export class ImageSnapWebcam extends Webcam {
    static readonly Defaults: {
        readonly delay: 1;
    };

    constructor(options: WebcamOptions);

    readonly bin: "imagesnap";

    /**
     * Generate shell statement
     */
    override generateSh(location: string | null): string;

    /**
     * Webcam list
     */
    override list(callback?: (cams: string[]) => void): void;

    override runCaptureValidations(data: string): Error | null;
}

/**
 * API for fswebcam
 */
export class FSWebcam extends Webcam {
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

    readonly bin: "fswebcam";

    /**
     * Create shot possibly from memory stdout
     */
    override createShot(location: string | null, data: Buffer | null): Shot;

    /**
     * Generate shell statement
     */
    override generateSh(location: string | null): string;

    /**
     * Get control values string
     */
    getControlSetString(setValues: { [attr: string]: string }): string;

    /**
     * Get shell statement to get the available camera controls
     */
    getListControlsSh(): string;

    /**
     * Parse output of list camera controls shell command
     * camera controls
     */
    parseListControls(stdout: string, callback: (cameraControl: CameraControl[]) => void): void;

    /**
     * Data validations based on fs output
     */
    override runCaptureValidations(data: string): Error | null;
}

/**
 * API for Windows
 */
export class WindowsWebcam extends Webcam {
    static readonly Defaults: {
        readonly output: "bmp";
    };

    constructor(options: WebcamOptions);

    readonly bin: string;

    /**
     * Generate shell statement
     */
    override generateSh(location: string | null): string;

    override list(callback?: (cams: string[]) => void): void;

    override runCaptureValidations(data: string): Error | null;
}

export type CameraControl =
    | {
        name: string;
        type: "range";
        min?: number;
        max?: number;
    }
    | {
        name: string;
        type: "list";
        opts?: string[];
    };

export interface WebcamOptions {
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
    output?: "jpeg" | "png" | "bmp";

    /**
     * [location, buffer, base64]
     * Webcam.CallbackReturnTypes
     */
    callbackReturn?: "location" | "buffer" | "base64";

    // Logging
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
 * used to set
 */
export abstract class Webcam {
    /**
     * Main opts from construction
     */
    opts: WebcamOptions;
    static readonly Defaults: Readonly<WebcamOptions>;
    static readonly OutputTypes: {
        readonly jpeg: "jpg";
        readonly png: "png";
        readonly bmp: "bmp";
    };

    /**
     * Array of Shot objects
     */
    shots: Shot[];

    constructor(options: WebcamOptions);

    /**
     * Basic camera instance clone
     */
    clone(): Webcam;

    /**
     * Clear shot and camera memory data
     */
    clear(): void;

    /**
     * List available cameras
     */
    list(callback?: (cams: string[]) => void): void;

    /**
     * List available camera controls
     * camera controls
     *
     * testing purposes)
     */
    listControls(callback: (cams: any[] | Error) => void, stdoutOverride: string): void;

    /**
     * Has camera
     */
    hasCamera(callback: (length: number) => void): void;

    /**
     * Capture shot
     */
    capture(location: string | null, callback: (err: Error | null, data: string | Buffer) => void): void;

    /**
     * Generate cli command string
     */
    abstract generateSh(location: string | null): string;

    /**
     * Create a shot overider
     */
    createShot(location: string | null, data: Buffer | null): Shot;

    /**
     * Get shot instances from cache index
     */
    getShot(index: number, callback: (err: Error | null, data: string | Buffer) => void): void;

    /**
     * Get last shot taken image data
     */
    getLastShot(): Shot;

    /**
     * Get shot buffer from location
     * 0 indexed
     */
    getShotBuffer(shot: number | Shot, callback: (err: Error | null, data: string | Buffer) => void): void;

    /**
     * Get last shot buffer taken image data
     */
    getLastShotBuffer(callback: (err: Error | null, data: string | Buffer) => void): void;

    /**
     * Get shot base64 as image
     * if passed Number will return a base 64 in the callback
     */
    getBase64(shot: number | Shot, callback: (err: Error | null, data: string | Buffer) => void): void;
    getBase64FromBuffer(shotBuffer: string | Buffer): string;

    /**
     * Get last shot taken base 64 string
     */
    getLastShot64(callback: (err: Error | null, data: string | Buffer) => void): void;

    /**
     * Get last shot taken image data
     */
    handleCallbackReturnType(callback: (err: Error | null, data: string | Buffer) => void, shot: Shot): void;
    abstract runCaptureValidations(data: string): Error | null;
}

/**
 * based on mrdoob's named like Node's EventEmitter
 * Used primarily as an inheritance via apply
 */
export class EventDispatcher {
    apply(obj: Webcam): Webcam & EventDispatcher;
    on(type: WebcamEventType, listener: (event: WebcamEvent) => void): void;
    hasListener(type: WebcamEventType, listener: (event: WebcamEvent) => void): void;
    removeListener(type: WebcamEventType, listener: (event: WebcamEvent) => void): void;
    dispatch(event: WebcamEvent): void;
}

export interface WebcamEvent {
    [attr: string]: any;
    type: WebcamEventType;
}

export type WebcamEventType = "capture" | string;

/**
 * Shared camera utils
 */
export const CameraUtils: {
    getCameras: (callback?: (cams: string[]) => void) => void;

    /**
     * Linux cameras read /dev dir
     */
    getLinuxCameras: (callback?: (cams: string[]) => void) => void;
};

/**
 * JS utils
 */
export class Utils {
    /** Highly used as an inheritance */
    setDefaults(object: WebcamOptions, defaults: WebcamOptions): WebcamOptions;

    /** Node-webcam escape string */
    escape(cmd: string): string;
}

export class Shot {
    /**
     * Shot location
     */
    location: string | null;

    /**
     * Shot data or buffer
     */
    data: Buffer | null;

    constructor(
        /**
         * Shot location
         */
        location: string | null,
        /**
         * Shot data or buffer
         */
        data: Buffer | null,
    );
}
