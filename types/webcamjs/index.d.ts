export as namespace Webcam;

export {};

declare class FlashError extends Error {}
declare class WebcamError extends Error {}

/**
 * Format of the images taken by the webcam.
 */
export type ImageFormat = "jpeg" | "png" | "default";

/**
 * A user-defined callback that may be passed to `Webcam.snap(callback)`. It is invokes once an image was taken
 * successfully.
 */
export type SnapCallback =
    /**
     * @param dataUri The image that was taken, as a data URI.
     * @param canvas The canvas that contains the image.
     * @param context2D The rendering context of the canvas.
     */
    (dataUri: string, canvas: HTMLCanvasElement, context2D: CanvasRenderingContext2D) => void;

/**
 * Mapping between the event names supported by photo cam and the callback function type for the event.
 */
export interface WebcamEventMap {
    /**
     * Fires when the library finishes loading.
     */
    load: () => void;

    /**
     * Fires when the user's camera goes live (i.e. showing a live preview). This will only happen after the user
     * allows access to their camera.
     */
    live: () => void;

    /**
     * Fires when an error occurs.
     * @param error The error that occurred, usually one of the errors from {@link errors}.
     */
    error: (errorMessage: Error) => void;

    /**
     * Fires repeatedly while an upload is in progress.
     *
     * If you want to track progress while your image is uploading, you can register an event listener for the
     * `uploadProgress` event. This event is called very frequently while an upload is in progress, and passes
     * the function a floating point number between 0.0 and 1.0 representing the upload progress:
     *
     * ```javascript
     * Webcam.snap(data_uri => {
     *   Webcam.on("uploadProgress", progress => {
     *     // Upload in progress
     *     // "progress" will be between 0.0 and 1.0
     *   });
     *
     *   Webcam.on("uploadComplete", (code, text) => {
     *     // Upload complete!
     *     // "code" will be the HTTP response code from the server, e.g., 200
     *     // "text" will be the raw response content
     *   });
     *
     *   Webcam.upload(data_uri, "myScript.php");
     * });
     * ```
     *
     * @param progress A number between `0` and `1`, indicating the current progress. `0` means that the upload
     * just started, `1` means that the upload has finished.
     */
    uploadProgress: (progress: number) => void;

    /**
     * Fires once when the upload completes.
     * @param httpStatusCode Status code as received from the server.
     * @param rawResponseContent The raw response content as received from the server.
     */
    uploadComplete: (httpStatusCode: number, rawResponseContent: string) => void;
}

/**
 * Available settings for configuring the webcam.
 */
export interface WebcamSettings {
    /**
     * Width of the live camera viewer in pixels, defaults to the actual size of the DOM element.
     */
    width?: number;

    /**
     * Height of the live camera viewer in pixels, defaults to the actual size of the DOM element.
     */
    height?: number;

    /**
     * Width of the captured camera image in pixels, defaults to the live viewer size.
     */
    dest_width?: number;

    /**
     * Height of the captured camera image in pixels, defaults to the live viewer size.
     */
    dest_height?: number;

    /**
     * Width of the final cropped image in pixels, defaults to `dest_width`.
     */
    crop_width: number;

    /**
     * Height of the final cropped image in pixels, defaults to `dest_height`.
     */
    crop_height: number;

    /**
     * Desired image format of captured image.
     */
    image_format?: ImageFormat;

    /**
     * For JPEG images, this is the desired quality, from 0 (worst) to 100 (best).
     */
    jpeg_quality?: number;

    /**
     * Enable or disable Flash fallback, if there is no native webcam access.
     */
    enable_flash?: boolean;

    /**
     * Setting this to true will always run in Adobe Flash fallback mode.
     */
    force_flash?: boolean;

    /**
     * Setting this to true will flip the image horizontally (mirror mode).
     */
    flip_horiz?: boolean;

    /**
     * Set the desired fps (frames per second) capture rate.
     */
    fps?: number;

    /**
     * Set an alternate location for the Adobe Flash fallback SWF file.
     */
    swfURL?: string;

    /**
     * HTML string for flash player not detected.
     */
    flashNotDetectedText?: string;

    /**
     * Whether to unfreeze the camera after snap (defaults to true)
     */
    unfreeze_snap?: boolean;

    /**
     * Which HTTP POST parameter name to use when uploading the webcam image file.
     */
    upload_name?: string;

    /**
     * The HTML5 getUserMedia API has a constraints system by which you can specify optional or mandatory
     * requirements for the video stream. These include things such a minimum or maximum resolution and/or
     * framerate. By default, WebcamJS will specify a mandatory minimum width and height, matching your `dest_width`
     * and `dest_height` parameters. However, if you want to customize this, you can set a constraints parameter
     * using `Webcam.set()`, and pass in an object containing all the custom constraints you want:
     *
     * ```javascript
     * Webcam.set("constraints", {
     *   mandatory: {
     *     minWidth: 1280,
     *     minHeight: 720,
     *     minFrameRate: 30,
     *   },
     *   optional: [
     *     {
     *       minFrameRate: 60,
     *     }
     *   ],
     * });
     * ```
     *
     * To remove the mandatory constraints and instead just specify the resolution you would prefer, you can just
     * this property set this to a `MediaTrackConstraints` object:
     *
     * ```javascript
     * Webcam.set("constraints", {
     *   width: 1280,
     *   height: 720
     * }
     * ```
     */
    constraints?: MediaTrackConstraints;

    /**
     * The device to grab images from. Either `user`, `environment`, or
     * a custom video device ID.
     */
    device?: string;
}

/**
 * Subtypes of {@link Error} that are used by webcam methods. Can be used
 * e.g. for `instanceof` checks.
 */
export const errors: {
    /**
     * Error when flash is not available or failed.
     */
    FlashError: typeof FlashError;
    /**
     * General error when a snapshot could not be taken.
     */
    WebcamError: typeof WebcamError;
};

/**
 * Updates a global webcam setting with the given new value.
 * @typeParam K Name of the setting.
 * @param setting Name of a settings to change.
 * @param newValue New value for the setting.
 */
export function set<K extends keyof WebcamSettings>(setting: K, newValue: WebcamSettings[K]): void;

/**
 * Updates the global webcam settings with the given settings.
 * @param settings New settings for the webcam.
 */
export function set(settings: Partial<WebcamSettings>): void;

/**
 * WebcamJS is initialized and activated by attaching a live camera viewer to a DOM element. The DOM element must
 * already be created and empty:
 *
 * ```javascript
 * Webcam.attach("#my_camera");
 * ```
 *
 * This will activate the user's webcam, ask for the appropriate permission, and begin showing a live camera image in
 * the specified DOM element.
 *
 * Note that the browser itself handles asking the user for permission to use their camera. WebcamJS has no control
 * over this, so there is no way to style the UI. Each browser does it a little differently, typically a bar at the
 * top of the page, and Flash does it inside the view area.
 *
 * @param selector CSS selector for the DOM element to which the webcam is attached.
 */
export function attach(selector: string): void;

/**
 * To snap a picture, just call the `Webcam.snap()` function, passing in a callback function. The image data will be
 * passed to your function as a daata URI, which you can then display in your web page, or submit to a server:
 *
 * ```javascript
 * Webcam.snap(data_uri => {
 *   document.getElementById("my_result").innerHTML = `<img src="${data_uri}">`;
 * });
 * ```
 *
 * Your function is also passed a HTML5 Canvas and a 2D Context object, so you can gain access to the raw pixels
 * instead of a compressed image Data URI. These are passed as the 2nd and 3rd arguments to your callback function:
 *
 * ```javascript
 * Webcam.snap( (data_uri, canvas, context) => {
 *   // copy image to my own canvas
 *   myContext.drawImage(canvas, 0, 0);
 * });
 * ```
 *
 * If you would prefer that WebcamJS simply copy the image into your own canvas, it can do that instead of generating
 * a data URI (which can be an expensive operation). To do this, simply pass your canvas object to the `Webcam.snap()`
 * method, as the 2nd argument, right after your callback function:
 *
 * ```javascript
 * // assumes 'myCanvas' is a reference to your own canvas object, at the correct size
 * Webcam.snap(() => {
 *   // the webcam image is now in your own canvas
 * }, myCanvas );
 * ```
 *
 * @param callback A callback function that is invoked with the image data once the images was taken.
 * @param canvas Optional. If given, draws the image to this canvas.
 */
export function snap(callback: SnapCallback, canvas?: HTMLCanvasElement): void;

/**
 * To shut down the live camera preview and reset the system, call `Webcam.reset()`. This removes any DOM elements we
 * added, including a Flash movie if applicable, and resets everything in the library to the initial state.
 *
 * To use the library again after resetting, you must call `Webcam.attach()` and pass it your DOM element.
 */
export function reset(): void;

/**
 * Freeze the current live camera frame, allowing the user to preview before saving.
 */
export function freeze(): void;

/**
 * Cancel the preview (discard image) and resume the live camera view.
 */
export function unfreeze(): void;

/**
 * Register an event listener for a given event. Pass in the event name, and a callback function.
 * @typeParam K Name of the event.
 * @param eventName Name of the event for which to attach a listener.
 * @param eventCallback Callback to attach.
 */
export function on<K extends keyof WebcamEventMap>(eventName: K, eventCallback: WebcamEventMap[K]): void;

/**
 * Remove an event listener for a given event. Pass in the event name, and the callback function to remove. Omit the
 * callback reference to remove all listeners.
 * @typeParam K Name of the event.
 * @param eventName Name of the event for which to remove a listener.
 * @param eventCallback Callback to remove. If omitted, removes all callback for the given event.
 */
export function off<K extends keyof WebcamEventMap>(eventName: K, eventCallback?: WebcamEventMap[K]): void;

/**
 * Upload a saved image to your server via binary AJAX. Fires progress events.
 *
 * The `Webcam.snap()` function delivers your image by way of a client-side JavaScript Data URI. The binary image
 * data is encoded with Base64 and stuffed into the URI. You can use this image in JavaScript and display it on your
 * page. However, the library also provides a way to decode and submit this image data to a server API endpoint, via
 * binary AJAX:
 *
 * ```javascript
 * Webcam.snap(data_uri => {
 *   // snap complete, image data is in "data_uri"
 *   Webcam.upload(data_uri, "myScript.php", (code, text) => {
 *     // Upload complete!
 *     // "code" will be the HTTP response code from the server, e.g., 200
 *     // 'text' will be the raw response content
 *   });
 * });
 * ```
 *
 * The image data is uploaded as part of a standard multipart form post, and included as a form element named
 * webcam. To gain access to this data, write some server-side code like this (PHP shown):
 *
 * ```php
 * // be aware of file / directory permissions on your server
 * move_uploaded_file($_FILES['webcam']['tmp_name'], 'webcam.jpg');
 * ```
 *
 * Treat the uploaded data as if you were receiving a standard form submission with a
 * `<input type="file" name="webcam">` element. The data is sent in the same exact way.
 *
 * @param imageData Data of the image to be sent to the server, usually the data URI.
 * @param endpointUrl URL to which the image data is sent.
 * @param onComplete Callback that is invoked once the upload is complete. You can alternatively specify the
 * callback using `Webcam.on("uploadComplete", callback)`.
 */
export function upload(imageData: string, endpointUrl: string, onComplete?: WebcamEventMap["uploadComplete"]): void;
