/**
 * The Imaging API allows JavaScript to work directly with image data in Photoshop documents.
 *
 * The Imaging API are exposed on the `imaging` sub-module under "photoshop". You can access
 * these APIs by using the follow code:
 *
 * ```javascript
 * const imaging = require("photoshop").imaging;
 * ```
 *
 * @minVersion 24.4
 */
export declare namespace imaging {
    /**
     * This API allows JavaScript to obtain pixel data from a Photoshop document.
     * You can request pixels from an individual layer, or from the full document composite.
     *
     * ```javascript
     * const imageObj = await imaging.getPixels(options);
     * ```
     *
     * Note: the `components` property of the image data depends on whether or not the pixel source
     * includes an alpha channel, e.g., 4 for RGBA.
     *
     * If the targetSize is smaller than the requested region, then the resulting image data will
     * be scaled down. When scaling, Photoshop may use a smaller (cached) version of the image canvas.
     * This is known as a pyramid level. The number of pyramid levels that are available in a document
     * is determined by the preference: *"Performance Cache Levels"*. Using a cache level may result in
     * dramatic performance improvements. The returned level indicates which level that was used.
     * Level 0 indicates the full resolution canvas. Level 1 indicates a cache that is half of the
     * size of the full resolution, and so forth. The returned `sourceBounds` are relative to the
     * bounds of the source cache level (not relative to the full resolution bounds).
     *
     * The valid bounds for the `sourceBounds` depend on the pixel source. The origin of the composite
     * image is `(0, 0)`,and the size is given by the properties `width` and `height` on the DOM object
     * for the source document. The origin of a pixel layer can be different from `(0, 0)`. You can get
     * the valid pixel bounds for a layer by calling `boundsNoEffects` on the DOM object corresponding
     * to the source layer.
     *
     * Example - create a thumbnail of an region of the target document that is 100 pixels tall.
     * ```javascript
     * const thumbnail = await imaging.getPixels({
     *     sourceBounds: { left: 0, top: 0, right: 300, bottom: 300 },
     *     targetSize: { height: 100 }
     * });
     * ```
     *
     * @minVersion 24.4
     * @async
     */
    function getPixels(options: GetPixelsOptions): Promise<GetPixelsResult>;
    /**
     * This API allows JavaScript to change pixel data in a layer. You can replace all pixels
     * in a layer or a region of the layer.
     *
     * ```javascript
     * await imaging.putPixels(options);
     * ```
     *
     * @minVersion 24.4
     * @async
     */
    function putPixels(options: PutPixelsOptions): Promise<void>;
    /**
     * This API allows JavaScript to retrieve the pixel data representing a layer's mask.
     * ```javascript
     * const imageObj = await imaging.getLayerMask(options);
     * ```
     *
     * Example - get the user mask for a layer
     * ```javascript
     * const imageObj = await imaging.getLayerMask({
     *     documentID: 123,
     *     layerID: 5,
     *     kind: "user"
     *     sourceBounds: { left: 0, top: 0, right: 300, bottom: 300 },
     *     targetSize: { height: 100 }
     * });
     * ```
     *
     * @minVersion 24.4
     * @async
     */
    function getLayerMask(options: GetLayerMaskOptions): Promise<GetLayerMaskResult>;
    /**
     * This API allows JavaScript to edit the pixels of a layer's mask.  At this time, only pixel
     * masks are editable. In the UI, they are what is referred to as a "Layer Mask".
     *
     * ```javascript
     * await imaging.putLayerMask(options);
     * ```
     *
     * Example:
     * ```javascript
     * await imaging.putLayerMask({
     *     layerID: 123
     *     imageData: grayImageData
     * });
     * ```
     *
     * @minVersion 24.4
     * @async
     */
    function putLayerMask(options: PutLayerMaskOptions): Promise<void>;
    /**
     * This API allows JavaScript to obtain a pixel representation of the active selection.
     * Think of it like entering [Quick Mask mode](https://helpx.adobe.com/photoshop/using/create-temporary-quick-mask.html).
     * ```javascript
     * const imageObj = await imaging.getSelection(options);
     * ```
     *
     * Example - get the document selection
     * ```javascript
     * const imageObj = await imaging.getSelection({
     *     documentID: 123,
     *     sourceBounds: { left: 0, top: 0, right: 300, bottom: 300 }
     * });
     * ```
     *
     * @minVersion 24.4
     * @async
     */
    function getSelection(options: GetSelectionOptions): Promise<GetSelectionResult>;
    /**
     * This API allows JavaScript to change the selection itself using a provided pixel data representation.
     * Think of it like exiting [Quick Mask mode](https://helpx.adobe.com/photoshop/using/create-temporary-quick-mask.html).
     *
     * ```javascript
     * await imaging.putSelection(options);
     * ```
     *
     * Example:
     * ```javascript
     * await imaging.putSelection({ imageData: grayImageData });
     * ```
     *
     * @minVersion 24.4
     * @async
     */
    function putSelection(options: PutSelectionOptions): Promise<void>;
    /**
     * This API allows JavaScript to create arbitrary image data from a memory buffer.
     *
     * ```javascript
     * const imageData = await imaging.createImageDataFromBuffer(arrayBuffer, options);
     * ```
     *
     * The number of elements in imageData must be equal to: `width * height * components`.
     *
     * Example:
     * ```javascript
     * const width = 30;
     * const height = 40;
     * const components = 4;  // RGBA
     * const componentCount = width * height;
     * const dataSize = componentCount * components;
     * const arrayBuffer = new Uint8Array(dataSize);
     *
     * // Add some (chunky) data to the buffer
     * for (let i = 0 ; i < componentCount; i += components) {
     *     arrayBuffer[index]   = 255;      // red
     *     arrayBuffer[index+1] = 0;        // green
     *     arrayBuffer[index+2] = 0;        // blue
     *     arrayBuffer[index+3] = 127;      // alpha
     * }
     *
     * const options = {
     * width: width,
     * height: height,
     * components: components,
     * colorProfile: "sRGB IEC61966-2.1",
     * colorSpace: "RGB"
     * };
     * const imageData = await imaging.createImageDataFromBuffer(arrayBuffer, options)
     * ```
     *
     * Image data that is used for layer masks or document selections uses a single grayscale component.
     * When creating such data, use `components: 1`, `colorSpace: "Grayscale"`
     * and `colorProfile: "Gray Gamma 2.2"` as shown in the following example:
     *
     * ```javascript
     * const width = 30;
     * const height = 40;
     * const componentCount = width * height;
     * const arrayBuffer = new Uint8Array(componentCount);
     *
     * for (let i = 0 ; i < componentCount; ++i) {
     * arrayBuffer[i] = 127; // all set to the median value
     * }
     *
     * const options = {
     * width: width,
     * height: height,
     * components: 1,  // masks are grayscale
     * chunky: false,
     * colorProfile: "Gray Gamma 2.2",
     * colorSpace: "Grayscale"
     * };
     * const maskData = await imaging.createImageDataFromBuffer(arrayBuffer, options)
     * ```
     *
     * @minVersion 24.4
     * @async
     */
    function createImageDataFromBuffer(
        arrayBuffer: Uint8Array | Uint16Array | Float32Array,
        options: CreateImageDataFromBufferOptions,
    ): Promise<PhotoshopImageData>;
    /**
     * This API is exposed to allow image data to be used with UXP image elements. With the current version of UXP
     * you must use jpeg/base64 encoding when assigning to an image element.
     *
     * ```javascript
     * const dataImage = await imaging.encodeImageData(options);
     * ```
     *
     * Example:
     * ```javascript
     * const imageElement = document.createElement('img');
     *
     * const jpegData = await imaging.encodeImageData({"imageData": imgObj.imageData, "base64": true});
     *
     * const dataUrl = "data:image/jpeg;base64," + jpegData;
     * imageElement.src = dataUrl;
     * document.body.appendChild(imageElement);
     * ```
     *
     * @minVersion 24.4
     * @async
     */
    function encodeImageData(options: EncodeImageDataOptions): Promise<number[] | string>;
    /**
     * Image data is represented by a PhotoshopImageData instance.
     * @targetfolder objects/returnobjects
     */
    interface PhotoshopImageData {
        /**
         * Return pixel information from an `PhotoshopImageData` instance as a typed array.
         * The return type depends on the `componentSize` of the image.
         *
         * | Component Size | Return type |
         * | -------------- | ----------- |
         * | 8              | Uint8Array  |
         * | 16             | Uint16Array |
         * | 32             | Float32Array  |
         *
         * Example:
         * ```javascript
         * const pixelData = await imageObj.imageData.getData()
         * ```
         * @param options
         */
        getData: (options: GetDataOptions) => Promise<Uint8Array | Uint16Array | Float32Array>;
        /**
         * Calling this synchronous method will release the contained image data. Doing so will reduce memory
         * usage faster then waiting for the JavaScript garbage collector to run.
         *
         * ```javascript
         * pixelData.dispose();
         * ```
         */
        dispose: () => Promise<void>;
        /**
         * The width of the image data in pixels.
         */
        width: number;
        /**
         * The height of the image data in pixels.
         */
        height: number;
        /**
         * The color space (or mode) for the image data.
         */
        colorSpace: ColorSpace;
        /**
         * The color profile for the image data. For example, `"sRGB IEC61966-2.1"`. If the color profile is empty,
         * then the profile of a target document will be used.
         */
        colorProfile: string;
        /**
         * True if the image data includes an alpha channel.
         */
        hasAlpha: boolean;
        /**
         * Number of components per pixel. This is 3 for RGB, 4 for RGBA and so forth.
         */
        components: number;
        /**
         * Number of bits per component. This can be 8, 16, or 32.
         */
        componentSize: 8 | 16 | 32;
        /**
         * Memory layout (order) of components in a pixel.
         */
        pixelFormat: PixelFormat;
        /**
         * True if the image data internally is using the chunky format.
         */
        chunky: boolean;
        /**
         * Type of contained data. At the moment only "image/uncompressed" is supported.
         */
        type: Type;
    }
    /**
     * Options describing the operation.
     * @optionobject
     * @targetfolder objects/options
     * @minVersion 24.4
     */
    interface GetPixelsOptions {
        /**
         * The id of the source document. If missing, or negative, then the source is the active document.
         * @minVersion 24.4
         */
        documentID?: number;
        /**
         * The id of the source layer. If the value is not provided then the API returns pixels
         * from the composite document image.
         * @minVersion 24.4
         */
        layerID?: number;
        /**
         * The region whose pixels should be returned. If the value is not provided, then pixels from the entire
         * layer or document are is returned. The provided bounds will be trimmed to only that region that contains
         * pixel data. In this event, the returned `sourceBounds` will reflect this smaller region.
         * @minVersion 24.4
         */
        sourceBounds?: Bounds;
        /**
         * The dimensions of the returned image. If this value is not provided then the returned size will match
         * the requested size. That is, no scaling will be performed on the returned pixels.
         * @minVersion 24.4
         */
        targetSize?: Size;
        /**
         * Requested color space of the returned pixels. If omitted, then the color space of the source document
         * is used to convert colors.
         * @minVersion 24.4
         */
        colorSpace?: string;
        /**
         * The name of a color profile to apply to the returned pixels. If omitted, then the resulting color profile
         * depends on the requested color space:
         * - If the requested color space matches the source document, then the returned data will use the color
         * profile of the source document.
         * - If the requested color space is different from the source document, then the working color profile for
         * that color space is used to convert colors.
         * @minVersion 24.4
         */
        colorProfile?: string;
        /**
         * The requested `componentSize` of the returned image data. If this property is omitted then the
         * `componentSize` of the source pixel data is used. The value can be: -1
         * (for using the source document's depth), 8, 16, or 32.
         * @minVersion 24.4
         */
        componentSize?: ComponentSize;
        /**
         * If true, then RGBA pixels will be converted to RGB by matting on white.
         * The returned imageData property will not contain an alpha channel. Note that any areas devoid of pixel
         * data will still be trimmed, see `sourceBounds` above.
         * @minVersion 24.4
         */
        applyAlpha?: boolean;
    }
    /**
     * @targetfolder objects/returnobjects
     * @minVersion 24.4
     */
    interface GetPixelsResult {
        /**
         * A `PhotoshopImageData` instance describing the returned pixel data.
         * @minVersion 24.4
         */
        imageData: PhotoshopImageData;
        /**
         * The actual bounds used when obtaining pixels (see note regarding pyramid levels below).
         * @minVersion 24.4
         */
        sourceBounds: Bounds;
        /**
         * The pyramid level that was used when obtaining pixels.
         * @minVersion 24.4
         */
        level: number;
    }
    interface PutPixelsOptions {
        documentID?: number;
        layerID: number;
        imageData: PhotoshopImageData;
        replace?: boolean;
        targetBounds?: BoundsSize | Bounds;
        commandName?: string;
    }
    interface GetLayerMaskOptions {
        documentID?: number;
        layerID: number;
        kind?: "user" | "vector";
        sourceBounds?: Bounds;
        targetSize?: Size;
    }
    interface GetLayerMaskResult {
        imageData: PhotoshopImageData;
        sourceBounds: Bounds;
    }
    interface PutLayerMaskOptions {
        documentID?: number;
        layerID: number;
        kind?: "user";
        imageData: PhotoshopImageData;
        replace?: boolean;
        targetBounds?: BoundsSize | Bounds;
        commandName?: string;
    }
    interface GetSelectionOptions {
        documentID?: number;
        sourceBounds?: Bounds;
        targetSize?: Size;
    }
    interface GetSelectionResult {
        imageData: PhotoshopImageData;
        sourceBounds: Bounds;
    }
    interface PutSelectionOptions {
        documentID?: number;
        replace?: boolean;
        imageData: PhotoshopImageData;
        targetBounds?: BoundsSize | Bounds;
        commandName?: string;
    }
    /**
     * @optionobject
     * @targetfolder objects/options
     * @minVersion 24.4
     */
    interface CreateImageDataFromBufferOptions {
        /**
         * The width of the image.
         * @minVersion 24.4
         */
        width: number;
        /**
         * The height of the image.
         * @minVersion 24.4
         */
        height: number;
        /**
         * Number of components per pixel.
         * @minVersion 24.4
         */
        components: number;
        /**
         * Describes pixel layout. See discussion above. The default value is true.
         * @minVersion 24.4
         */
        chunky?: boolean;
        /**
         * Describes the color profile associated with the image data. See note regarding color profiles and 32 bit
         * pixel data at the beginning of this document.
         * @minVersion 24.4
         */
        colorProfile?: string;
        /**
         * Describes the color space associated with the image data.
         * @minVersion 24.4
         */
        colorSpace: string;
        /**
         * This value is only used for 16 bit data. Set to true if you are providing pixel data that use
         * the full 16 bit range [0..65535]. Set to false if data is using the reduced range: [0..32768].
         * The default value is false.
         * @minVersion 24.4
         */
        fullRange?: boolean;
    }
    /**
     * @optionobject
     * @targetfolder objects/options
     * @minVersion 24.4
     */
    interface EncodeImageDataOptions {
        /**
         * A `PhotoshopImageData` instance describing the pixel data.
         * @minVersion 24.4
         */
        imageData: PhotoshopImageData;
        /**
         * If provided, then the returned value will be a string that is base64 encoded.
         * @minVersion 24.4
         */
        base64?: boolean;
    }
    /**
     * @optionobject
     * @targetfolder objects/options
     * @minVersion 24.4
     */
    interface GetDataOptions {
        /**
         * If true then the data is returned as chunky data. If false, then data is returned in the planar format.
         * The default value is true.
         * @minVersion 24.4
         */
        chunky?: boolean;
        /**
         * This value is only used for 16 bit data. If true then the returned 16 bit pixel data use the full
         * 16 bit range [0..65535]. If false, then the returned pixel data use the reduced Photoshop range: [0..32768].
         * The default value is false.
         * @minVersion 24.4
         */
        fullRange?: boolean;
    }
    interface Bounds {
        left: number;
        top: number;
        bottom: number;
        right: number;
    }
    interface BoundsSize {
        left: number;
        top: number;
        width: number;
        height: number;
    }
    /**
     * If only one dimension is included, then the returned image data is scaled proportionally to match
     * the requested dimension.
     * @optionobject
     * @targetfolder objects/options
     * @minVersion 24.4
     */
    interface Size {
        width?: number;
        height?: number;
    }
    /**
     * @minVersion 24.4
     */
    type PixelFormat = "RGB" | "RGBA" | "Grayscale" | "GrayscaleAlpha" | "LAB" | "LABAlpha";
    /**
     * @minVersion 24.4
     */
    type Type = "image/uncompressed";
    /**
     * @minVersion 24.4
     */
    type ColorSpace = "RGB" | "Grayscale" | "Lab";
    /**
     * @minVersion 24.4
     */
    type ComponentSize = -1 | 8 | 16 | 32;
}
