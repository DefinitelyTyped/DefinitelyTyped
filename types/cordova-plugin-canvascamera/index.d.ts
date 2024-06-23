interface CordovaPlugins {
    /**
     * cordova-plugin-device-name interface
     */
    CanvasCamera: CanvasCamera;
}

declare class CanvasCamera {
    constructor();

    createFrame(image: HTMLImageElement, element: HTMLCanvasElement): Frame;
    createRenderer(element: HTMLCanvasElement, parent: CanvasCamera): Renderer;
    initialize(fcanvas: HTMLCanvasElement, tcanvas: HTMLCanvasElement): void;
    start(
        options: CanvasCameraOptions,
        onError?: (error?: any) => void,
        onSuccess?: (data: any) => void,
    ): void;
    stop(
        onError?: (error?: any) => void,
        onSuccess?: (data: any) => void,
    ): void;
    flashMode(
        flashMode: boolean,
        onError?: (error?: any) => void,
        onSuccess?: (data: any) => void,
    ): void;
    cameraPosition(
        cameraFacing: "front" | "back",
        onError?: (error?: any) => void,
        onSuccess?: (data: any) => void,
    ): void;
    capture(data: any): void;
    enableRenderers(): void;
    disableRenderers(): void;
    setRenderingPresets(): CanvasCamera;
    getUISize(): { width: number; height: number };
    getUIOrientation(): "portrait" | "landscape";
    setRenderersSize(size: { width: number; height: number }): CanvasCamera;
}

interface CanvasCameraOptions {
    /**
     * Number, optional, default: 352, width in pixels of the video to capture and the output canvas width in pixels.
     */
    width?: number | undefined;

    /**
     * Number, optional, default: 288, height in pixels of the video to capture and the output canvas height in pixels.
     */
    height?: number | undefined;

    canvas?: {
        /**
         * Number, optional, default: 352, width in pixels of the video to capture.
         */
        width?: number | undefined;

        /**
         * Number, optional, default: 288, height in pixels of the video to capture.
         */
        height?: number | undefined;
    } | undefined;

    capture?: {
        /**
         * Number, optional, default: 352, output canvas width in pixels.
         */
        width?: number | undefined;

        /**
         * Number, optional, default: 288, output canvas height in pixels.
         */
        height?: number | undefined;
    } | undefined;

    /**
     * Number, optional, default: 30, desired number of frames per second.
     */
    fps?: number | undefined;

    /**
     * String, optional, default: 'front', 'front' or 'back'.
     */
    use?: "file" | "data" | undefined;

    /**
     * Boolean, optional, default: false, a boolean to set flash mode on/off.
     */
    flashMode?: boolean | undefined;

    /**
     * Number, optional, default: 1/6, a ratio used to scale down the thumbnail.
     */
    thumbnailRatio?: number | undefined;

    /**
     * String, optional, default: file, file to use files for rendering (lower CPU / higher storage) or data to use base64 jpg data for rendering (higher cpu / lower storage).
     */
    cameraFacing?: "front" | "back" | undefined;

    /**
     * Function, optional, default : null, callback executed before a frame has been drawn. frame contains the canvas element, the image element, the tracking data.
     */
    onBeforeDraw?: ((frame?: Frame) => void) | undefined;

    /**
     * Function, optional, default : null, callback executed after a frame has been drawn. frame contains the canvas element, the image element, the tracking data.
     */
    onAfterDraw?: ((frame?: Frame) => void) | undefined;
}

declare class Frame {
    sx: number;
    sy: number;
    sWidth: number;
    sHeight: number;
    dx: number;
    dy: number;
    dWidth: number;
    dHeight: number;
    image: HTMLImageElement;
    element: HTMLCanvasElement;

    private constructor();

    initialize(): Frame;
    recycle(): void;
}

declare class Renderer {
    size: { width: number; height: number };
    type: "file" | "data";
    image: HTMLImageElement;
    context: CanvasRenderingContext2D;
    orientation: "portrait" | "landscape";
    buffer: any[];
    available: boolean;
    fullscreen: boolean;
    parent: CanvasCamera;
    element: HTMLCanvasElement;
    onAfterDraw: (frame?: Frame) => void;
    onBeforeDraw: (frame?: Frame) => void;

    private constructor();

    initialize(): Renderer;
    onOrientationChange(): void;
    clear(): Renderer;
    draw(frame: Frame): Renderer;
    bufferize(data: any, type: "file" | "data"): Renderer;
    run(): Renderer;
    render(data: any, type: "file" | "data"): Renderer;
    enable(): Renderer;
    disable(): Renderer;
    enabled(): boolean;
    disabled(): boolean;
    invert(): Renderer;
    resize(): Renderer;
    setSize(size: { width: number; height: number }, auto?: boolean): Renderer;
    setOnBeforeDraw(onBeforeDraw: (frame?: Frame) => void): Renderer;
    setOnAfterDraw(onAfterDraw: (frame?: Frame) => void): Renderer;
}
