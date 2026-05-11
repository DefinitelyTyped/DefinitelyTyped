/// <reference types="node" />

export type ColorObject = { r: number; g: number; b: number; a?: number | undefined };
export type Color = string | [number, number, number, number] | ColorObject;

export interface ImageCallback {
    (err: any, image: Image): void;
}

export interface BufferCallback {
    (err: any, buffer: Buffer): void;
}

/**
 * Open an image
 * @param source The path to the image on disk.
 */
export function open(source: string, callback: ImageCallback): void;

/**
 * Open an image
 * @param source The path to the image on disk.
 * @param type Optional type of the image. If omitted, the type will be inferred from the file extension. Type must be a string of the image type (i.e. "jpg").
 */
export function open(source: string, type: string, callback: ImageCallback): void;

/**
 * Open an image
 * @param source The path to the image on disk or an image buffer.
 * @param type Type of the image. If source is an encoded image buffer, type must be a string of the image type (i.e. "jpg"). If source is a raw pixels buffer type must be an object with type.width and type.height properties.
 */
export function open(source: Buffer, type: string | { width: number; height: number }, callback: ImageCallback): any;

/**
 * Create a new image
 * @param width The width of the new image.
 * @param height The height of the new image.
 */
export function create(width: number, height: number, callback: ImageCallback): void;

/**
 * Create a new image
 * @param width The width of the new image.
 * @param height The height of the new image.
 * @param color Optional Color of the canvas.
 */
export function create(width: number, height: number, color: Color, callback: ImageCallback): void;

export type JpegBufferParams = {
    quality?: number | undefined;
};

export type PngBufferParams = {
    compression?: string | undefined;
    interlaced?: boolean | undefined;
    transparency?: boolean | string | undefined;
};

export type GifBufferParams = {
    colors?: number | undefined;
    interlaced?: boolean | undefined;
    transparency?: boolean | string | undefined;
    threshold: number;
};

export interface Image {
    // Image operations

    /**
     * Resize
     * @param Width in pixels.
     */
    resize(width: number, callback: ImageCallback): void;

    /**
     * Resize
     * @param Width in pixels.
     * @param Interpolation method.
     */
    resize(width: number, inter: string, callback: ImageCallback): void;

    /**
     * Resize
     * @param Width in pixels.
     * @param Height in pixels.
     */
    resize(width: number, height: number, callback: ImageCallback): void;

    /**
     * Resize
     * @param Width in pixels.
     * @param Height in pixels.
     * @param Interpolation method.
     */
    resize(width: number, height: number, inter: string, callback: ImageCallback): void;

    /**
     * Scale
     * @param wRatio Width scale ratio.
     */
    scale(wRatio: number, callback: ImageCallback): void;

    /**
     * Scale
     * @param wRatio Width scale ratio.
     * @param inter Interpolation method.
     */
    scale(wRatio: number, inter: string, callback: ImageCallback): void;

    /**
     * Scale
     * @param wRatio Width scale ratio.
     * @param hRatio Height scale ratio.
     */
    scale(wRatio: number, hRatio: number, callback: ImageCallback): void;

    /**
     * Scale
     * @param wRatio Width scale ratio.
     * @param hRatio Height scale ratio.
     * @param inter Interpolation method.
     */
    scale(wRatio: number, hRatio: number, inter: string, callback: ImageCallback): void;

    /**
     * Contain the image in a colored canvas. The image will be resized to the largest possible size such that it's fully contained inside the canvas.
     * @param width Canvas' width in pixels.
     * @param height Canvas' height in pixels.
     */
    contain(width: number, height: number, callback: ImageCallback): void;

    /**
     * Contain the image in a colored canvas. The image will be resized to the largest possible size such that it's fully contained inside the canvas.
     * @param width Canvas' width in pixels.
     * @param height Canvas' height in pixels.
     * @param color Color of the canvas.
     */
    contain(width: number, height: number, color: Color, callback: ImageCallback): void;

    /**
     * Contain the image in a colored canvas. The image will be resized to the largest possible size such that it's fully contained inside the canvas.
     * @param width Canvas' width in pixels.
     * @param height Canvas' height in pixels.
     * @param inter Interpolation method.
     */
    contain(width: number, height: number, inter: string, callback: ImageCallback): void;

    /**
     * Contain the image in a colored canvas. The image will be resized to the largest possible size such that it's fully contained inside the canvas.
     * @param width Canvas' width in pixels.
     * @param height Canvas' height in pixels.
     * @param color Color of the canvas.
     * @param inter Interpolation method.
     */
    contain(width: number, height: number, color: Color, inter: string, callback: ImageCallback): void;

    /**
     * Cover a canvas with the image. The image will be resized to the smallest possible size such that both its dimensions are bigger than the canvas's dimensions. Margins of the image exceeding the canvas will be discarded.
     * @param width Canvas' width in pixels.
     * @param height Canvas' height in pixels.
     */
    cover(width: number, height: number, callback: ImageCallback): void;

    /**
     * Cover a canvas with the image. The image will be resized to the smallest possible size such that both its dimensions are bigger than the canvas's dimensions. Margins of the image exceeding the canvas will be discarded.
     * @param width Canvas' width in pixels.
     * @param height Canvas' height in pixels.
     * @param inter Interpolation method.
     */
    cover(width: number, height: number, inter: string, callback: ImageCallback): void;

    /**
     * Rotate
     * @param degs Clockwise rotation degrees.
     */
    rotate(degs: number, callback: ImageCallback): void;

    /**
     * Rotate
     * @param degs Clockwise rotation degrees.
     * @param color Color of the canvas.
     */
    rotate(degs: number, color: Color, callback: ImageCallback): void;

    /**
     * Crop with rectangle coordinates
     */
    crop(left: number, top: number, right: number, bottom: number, callback: ImageCallback): void;

    /**
     * Crop a rectangle from center
     * @param width Width of the rectangle to crop from the center of the image.
     * @param height Height of the rectangle to crop from the center of the image.
     */
    crop(width: number, height: number, callback: ImageCallback): void;

    /**
     * Gaussian blur.
     * @param sigma Standard deviation of the Gaussian filter.
     */
    blur(sigma: number, callback: ImageCallback): void;

    /**
     * Inverse diffusion shapren.
     * @param amplitude Sharpening amplitude.
     */
    sharpen(amplitude: number, callback: ImageCallback): void;

    /**
     * Mirror an image along the 'x' axis, 'y' axis or both.
     * @param axes 'x', 'y' or 'xy' (case sensitive).
     */
    mirror(axes: string, callback: ImageCallback): void;

    /**
     * Alias of mirror. Mirror an image along the 'x' axis, 'y' axis or both.
     * @param axes 'x', 'y' or 'xy' (case sensitive).
     */
    flip(axes: string, callback: ImageCallback): void;

    /**
     * Add a colored border to the image.
     * @param width Border width in pixels.
     */
    border(width: number, callback: ImageCallback): void;

    /**
     * Add a colored border to the image.
     * @param width Border width in pixels.
     * @param color Color of the border.
     */
    border(width: number, color: Color, callback: ImageCallback): void;

    /**
     * Pad image edges with colored pixels.
     * @param left Number of pixels to add to left edge.
     * @param top Number of pixels to add to top edge.
     * @param right Number of pixels to add to right edge.
     * @param bottom Number of pixels to add to bottom edge.
     */
    pad(left: number, top: number, right: number, bottom: number, callback: ImageCallback): void;

    /**
     * Pad image edges with colored pixels.
     * @param left Number of pixels to add to left edge.
     * @param top Number of pixels to add to top edge.
     * @param right Number of pixels to add to right edge.
     * @param bottom Number of pixels to add to bottom edge.
     * @param color Color of the padding.
     */
    pad(left: number, top: number, right: number, bottom: number, color: Color, callback: ImageCallback): void;

    /**
     * Adjust image saturation.
     *
     * Examples:
     * 1. image.saturate(0, ...) will have no effect on the image.
     * 2. image.saturate(0.5, ...) will increase the saturation by 50%.
     * 3. image.saturate(-1, ...) will decrease the saturation by 100%, effectively desaturating the image.
     *
     * @param delta By how much to increase / decrease the saturation.
     */
    saturate(delta: number, callback: ImageCallback): void;

    /**
     * Adjust image lightness.
     *
     * Examples:
     * 1. image.lighten(0, ...) will have no effect on the image.
     * 2. image.lighten(0.5, ...) will increase the lightness by 50%.
     * 3. image.lighten(-1, ...) will decrease the lightness by 100%, effectively making the image black.
     *
     * @param delta By how much to increase / decrease the lightness.
     */
    lighten(delta: number, callback: ImageCallback): void;

    /**
     * Adjust image lightness. Equivalent to image.lighten(-delta, callback).
     * @param delta By how much to increase / decrease the lightness.
     */
    darken(delta: number, callback: ImageCallback): void;

    /**
     * Adjust image hue.
     *
     * Examples:
     * 1. image.hue(0, ...) will have no effect on the image.
     * 2. image.hue(100, ...) will shift pixels' hue by 100 degrees.
     *
     * Note: The hue is shifted in a circular manner in the range [0,360] for each pixel individually.
     *
     * @param shift By how many degrees to shift each pixel's hue.
     */
    hue(shift: number, callback: ImageCallback): void;

    /**
     * Adjust image transperancy.
     *
     * Examples:
     * 1. image.fade(0, ...) will have no effect on the image.
     * 2. image.fade(0.5, ...) will increase the transparency by 50%.
     * 3. image.fade(1, ...) will make the image completely transparent.
     *
     * Note: The transparency is adjusted independently for each pixel.
     *
     * @param delta By how much to increase / decrease the transperancy.
     */
    fade(delta: number, callback: ImageCallback): void;

    /**
     * Make image completely opaque.
     */
    opacity(callback: ImageCallback): void;

    /**
     * Paste an image on top of this image.
     *
     * Notes:
     * 1. If the pasted image exceeds the bounds of the base image, an exception is thrown.
     * 2. img is pasted in the state it was at the time image.paste( ... ) was called, eventhough callback is called asynchronously.
     * 3. For transparent images, alpha blending is done according to the equations described here.
     * 4. Extra caution is required when using this method in batch mode, as the images may change by the time this operation is called.
     *
     * @param left Coordinates of the left corner of the pasted image.
     * @param top Coordinates of the top corner of the pasted image.
     * @param img The image to paste.
     */
    paste(left: number, top: number, img: Image, callback: ImageCallback): void;

    /**
     * Set the color of a pixel.
     *
     * Notes:
     * 1. If the coordinates exceed the bounds of the image, an exception is thrown.
     * 2. Extra caution is required when using this method in batch mode, as the dimensions of the image may change by the time this operation is called.
     *
     * @param left Coordinates of the pixel from the left corner of the image.
     * @param top Coordinates of the pixel from the top corner of the image.
     * @param color Color of the pixel to set.
     */
    setPixel(left: number, top: number, color: Color, callback: ImageCallback): void;

    /**
     * Set the metadata in an image. This is currently only supported for PNG files. Sets a tEXt chunk with the key lwip_data and comment as the given string. If called with a null parameter, removes existing metadata from the image, if present.
     * @param metadata A string of arbitrary length, or null.
     */
    setMetaData(metadata: string): void;

    // Getters

    /**
     * Return the image's width in pixels.
     */
    width(): number;

    /**
     * Return the image's height in pixels.
     */
    height(): number;

    /**
     * Return the color of the pixel at the (left, top) coordinate.
     */
    getPixel(left: number, top: number): ColorObject;

    /**
     * Clone the image into a new image object.
     *
     * Note: The image is cloned to the state it was at the time image.clone( ... ) was called, eventhough callback is called asynchronously.
     */
    clone(callback: ImageCallback): void;

    /**
     * Copy an area of the image into a new image object.
     *
     * Note: The sub-image is extracted from the original image in the state it was at the time image.extract( ... ) was called, eventhough callback is called asynchronously.
     */
    extract(left: number, top: number, right: number, bottom: number, callback: ImageCallback): void;

    /**
     * Get encoded binary image data as a NodeJS Buffer.
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     */
    toBuffer(format: "jpg", callback: BufferCallback): void;

    /**
     * Get encoded binary image data as a NodeJS Buffer.
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    toBuffer(format: "jpg", params: JpegBufferParams, callback: BufferCallback): void;

    /**
     * Get encoded binary image data as a NodeJS Buffer.
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     */
    toBuffer(format: "png", callback: BufferCallback): void;

    /**
     * Get encoded binary image data as a NodeJS Buffer.
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    toBuffer(format: "png", params: PngBufferParams, callback: BufferCallback): void;

    /**
     * Get encoded binary image data as a NodeJS Buffer.
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     */
    toBuffer(format: "gif", callback: BufferCallback): void;

    /**
     * Get encoded binary image data as a NodeJS Buffer.
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    toBuffer(format: "gif", params: GifBufferParams, callback: BufferCallback): void;

    /**
     * Get encoded binary image data as a NodeJS Buffer.
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     */
    toBuffer(format: string, callback: BufferCallback): void;

    /**
     * Get encoded binary image data as a NodeJS Buffer.
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    toBuffer(
        format: string,
        params: JpegBufferParams | PngBufferParams | GifBufferParams,
        callback: BufferCallback,
    ): void;

    /**
     * Write encoded binary image data directly to a file.
     *
     * @param path Path of file to write.
     */
    writeFile(path: string, callback: ImageCallback): void;

    /**
     * Write encoded binary image data directly to a file.
     *
     * @param path Path of file to write.
     * @param params Format-specific parameters.
     */
    writeFile(
        path: string,
        params: JpegBufferParams | PngBufferParams | GifBufferParams,
        callback: ImageCallback,
    ): void;

    /**
     * Write encoded binary image data directly to a file.
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     */
    writeFile(path: string, format: "jpg", callback: ImageCallback): void;

    /**
     * Write encoded binary image data directly to a file.
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    writeFile(path: string, format: "jpg", params: JpegBufferParams, callback: ImageCallback): void;

    /**
     * Write encoded binary image data directly to a file.
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     */
    writeFile(path: string, format: "png", callback: ImageCallback): void;

    /**
     * Write encoded binary image data directly to a file.
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    writeFile(path: string, format: "png", params: PngBufferParams, callback: ImageCallback): void;

    /**
     * Write encoded binary image data directly to a file.
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     */
    writeFile(path: string, format: "gif", callback: ImageCallback): void;

    /**
     * Write encoded binary image data directly to a file.
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    writeFile(path: string, format: "gif", params: GifBufferParams, callback: ImageCallback): void;

    /**
     * Write encoded binary image data directly to a file.
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     */
    writeFile(path: string, format: string, callback: ImageCallback): void;

    /**
     * Write encoded binary image data directly to a file.
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    writeFile(
        path: string,
        format: string,
        params: JpegBufferParams | PngBufferParams | GifBufferParams,
        callback: ImageCallback,
    ): void;

    /**
     * Get the textual metadata from an image. This is currently only supported for tEXt chunks in PNG images, and will get the first tEXt chunk found with the key lwip_data. If none is found, returns null.
     */
    getMetaData<T>(): T;

    // Obtaining a batch object

    /**
     * Obtain a batch object from the image
     */
    batch(): Batch;
}

export interface Batch {
    // Using a batch object

    /**
     * Resize
     * @param Width in pixels.
     */
    resize(width: number): Batch;

    /**
     * Resize
     * @param Width in pixels.
     * @param Interpolation method.
     */
    resize(width: number, inter: string): Batch;

    /**
     * Resize
     * @param Width in pixels.
     * @param Height in pixels.
     */
    resize(width: number, height: number): Batch;

    /**
     * Resize
     * @param Width in pixels.
     * @param Height in pixels.
     * @param Interpolation method.
     */
    resize(width: number, height: number, inter: string): Batch;

    /**
     * Scale
     * @param wRatio Width scale ratio.
     */
    scale(wRatio: number): Batch;

    /**
     * Scale
     * @param wRatio Width scale ratio.
     * @param inter Interpolation method.
     */
    scale(wRatio: number, inter: string): Batch;

    /**
     * Scale
     * @param wRatio Width scale ratio.
     * @param hRatio Height scale ratio.
     */
    scale(wRatio: number, hRatio: number): Batch;

    /**
     * Scale
     * @param wRatio Width scale ratio.
     * @param hRatio Height scale ratio.
     * @param inter Interpolation method.
     */
    scale(wRatio: number, hRatio: number, inter: string): Batch;

    /**
     * Contain the image in a colored canvas. The image will be resized to the largest possible size such that it's fully contained inside the canvas.
     * @param width Canvas' width in pixels.
     * @param height Canvas' height in pixels.
     */
    contain(width: number, height: number): Batch;

    /**
     * Contain the image in a colored canvas. The image will be resized to the largest possible size such that it's fully contained inside the canvas.
     * @param width Canvas' width in pixels.
     * @param height Canvas' height in pixels.
     * @param color Color of the canvas.
     */
    contain(width: number, height: number, color: Color): Batch;

    /**
     * Contain the image in a colored canvas. The image will be resized to the largest possible size such that it's fully contained inside the canvas.
     * @param width Canvas' width in pixels.
     * @param height Canvas' height in pixels.
     * @param inter Interpolation method.
     */
    contain(width: number, height: number, inter: string): Batch;

    /**
     * Contain the image in a colored canvas. The image will be resized to the largest possible size such that it's fully contained inside the canvas.
     * @param width Canvas' width in pixels.
     * @param height Canvas' height in pixels.
     * @param color Color of the canvas.
     * @param inter Interpolation method.
     */
    contain(width: number, height: number, color: Color, inter: string): Batch;

    /**
     * Cover a canvas with the image. The image will be resized to the smallest possible size such that both its dimensions are bigger than the canvas's dimensions. Margins of the image exceeding the canvas will be discarded.
     * @param width Canvas' width in pixels.
     * @param height Canvas' height in pixels.
     */
    cover(width: number, height: number): Batch;

    /**
     * Cover a canvas with the image. The image will be resized to the smallest possible size such that both its dimensions are bigger than the canvas's dimensions. Margins of the image exceeding the canvas will be discarded.
     * @param width Canvas' width in pixels.
     * @param height Canvas' height in pixels.
     * @param inter Interpolation method.
     */
    cover(width: number, height: number, inter: string): Batch;

    /**
     * Rotate
     * @param degs Clockwise rotation degrees.
     */
    rotate(degs: number): Batch;

    /**
     * Rotate
     * @param degs Clockwise rotation degrees.
     * @param color Color of the canvas.
     */
    rotate(degs: number, color: Color): Batch;

    /**
     * Crop with rectangle coordinates
     */
    crop(left: number, top: number, right: number, bottom: number): Batch;

    /**
     * Crop a rectangle from center
     * @param width Width of the rectangle to crop from the center of the image.
     * @param height Height of the rectangle to crop from the center of the image.
     */
    crop(width: number, height: number): Batch;

    /**
     * Gaussian blur.
     * @param sigma Standard deviation of the Gaussian filter.
     */
    blur(sigma: number): Batch;

    /**
     * Inverse diffusion shapren.
     * @param amplitude Sharpening amplitude.
     */
    sharpen(amplitude: number): Batch;

    /**
     * Mirror an image along the 'x' axis, 'y' axis or both.
     * @param axes 'x', 'y' or 'xy' (case sensitive).
     */
    mirror(axes: string): Batch;

    /**
     * Alias of mirror. Mirror an image along the 'x' axis, 'y' axis or both.
     * @param axes 'x', 'y' or 'xy' (case sensitive).
     */
    flip(axes: string): Batch;

    /**
     * Add a colored border to the image.
     * @param width Border width in pixels.
     */
    border(width: number): Batch;

    /**
     * Add a colored border to the image.
     * @param width Border width in pixels.
     * @param color Color of the border.
     */
    border(width: number, color: Color): Batch;

    /**
     * Pad image edges with colored pixels.
     * @param left Number of pixels to add to left edge.
     * @param top Number of pixels to add to top edge.
     * @param right Number of pixels to add to right edge.
     * @param bottom Number of pixels to add to bottom edge.
     */
    pad(left: number, top: number, right: number, bottom: number): Batch;

    /**
     * Pad image edges with colored pixels.
     * @param left Number of pixels to add to left edge.
     * @param top Number of pixels to add to top edge.
     * @param right Number of pixels to add to right edge.
     * @param bottom Number of pixels to add to bottom edge.
     * @param color Color of the padding.
     */
    pad(left: number, top: number, right: number, bottom: number, color: Color): Batch;

    /**
     * Adjust image saturation.
     *
     * Examples:
     * 1. image.saturate(0, ...) will have no effect on the image.
     * 2. image.saturate(0.5, ...) will increase the saturation by 50%.
     * 3. image.saturate(-1, ...) will decrease the saturation by 100%, effectively desaturating the image.
     *
     * @param delta By how much to increase / decrease the saturation.
     */
    saturate(delta: number): Batch;

    /**
     * Adjust image lightness.
     *
     * Examples:
     * 1. image.lighten(0, ...) will have no effect on the image.
     * 2. image.lighten(0.5, ...) will increase the lightness by 50%.
     * 3. image.lighten(-1, ...) will decrease the lightness by 100%, effectively making the image black.
     *
     * @param delta By how much to increase / decrease the lightness.
     */
    lighten(delta: number): Batch;

    /**
     * Adjust image lightness. Equivalent to image.lighten(-delta, callback).
     * @param delta By how much to increase / decrease the lightness.
     */
    darken(delta: number): Batch;

    /**
     * Adjust image hue.
     *
     * Examples:
     * 1. image.hue(0, ...) will have no effect on the image.
     * 2. image.hue(100, ...) will shift pixels' hue by 100 degrees.
     *
     * Note: The hue is shifted in a circular manner in the range [0,360] for each pixel individually.
     *
     * @param shift By how many degrees to shift each pixel's hue.
     */
    hue(shift: number): Batch;

    /**
     * Adjust image transperancy.
     *
     * Examples:
     * 1. image.fade(0, ...) will have no effect on the image.
     * 2. image.fade(0.5, ...) will increase the transparency by 50%.
     * 3. image.fade(1, ...) will make the image completely transparent.
     *
     * Note: The transparency is adjusted independently for each pixel.
     *
     * @param delta By how much to increase / decrease the transperancy.
     */
    fade(delta: number): Batch;

    /**
     * Make image completely opaque.
     */
    opacity(callback: ImageCallback): void;

    /**
     * Paste an image on top of this image.
     *
     * Notes:
     * 1. If the pasted image exceeds the bounds of the base image, an exception is thrown.
     * 2. img is pasted in the state it was at the time image.paste( ... ) was called, eventhough callback is called asynchronously.
     * 3. For transparent images, alpha blending is done according to the equations described here.
     * 4. Extra caution is required when using this method in batch mode, as the images may change by the time this operation is called.
     *
     * @param left Coordinates of the left corner of the pasted image.
     * @param top Coordinates of the top corner of the pasted image.
     * @param img The image to paste.
     */
    paste(left: number, top: number, img: Image): Batch;

    /**
     * Set the color of a pixel.
     *
     * Notes:
     * 1. If the coordinates exceed the bounds of the image, an exception is thrown.
     * 2. Extra caution is required when using this method in batch mode, as the dimensions of the image may change by the time this operation is called.
     *
     * @param left Coordinates of the pixel from the left corner of the image.
     * @param top Coordinates of the pixel from the top corner of the image.
     * @param color Color of the pixel to set.
     */
    setPixel(left: number, top: number, color: Color): Batch;

    /**
     * Set the metadata in an image. This is currently only supported for PNG files. Sets a tEXt chunk with the key lwip_data and comment as the given string. If called with a null parameter, removes existing metadata from the image, if present.
     * @param metadata A string of arbitrary length, or null.
     */
    setMetaData(metadata: string): void;

    // Executing a batch

    /**
     * Execute batch and obtain the manipulated image object
     */
    exec(callback: ImageCallback): void;

    /**
     * Execute batch and obtain a Buffer object
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     */
    toBuffer(format: "jpg", callback: BufferCallback): void;

    /**
     * Execute batch and obtain a Buffer object
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    toBuffer(format: "jpg", params: JpegBufferParams, callback: BufferCallback): void;

    /**
     * Execute batch and obtain a Buffer object
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     */
    toBuffer(format: "png", callback: BufferCallback): void;

    /**
     * Execute batch and obtain a Buffer object
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    toBuffer(format: "png", params: PngBufferParams, callback: BufferCallback): void;

    /**
     * Execute batch and obtain a Buffer object
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     */
    toBuffer(format: "gif", callback: BufferCallback): void;

    /**
     * Execute batch and obtain a Buffer object
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    toBuffer(format: "gif", params: GifBufferParams, callback: BufferCallback): void;

    /**
     * Execute batch and obtain a Buffer object
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     */
    toBuffer(format: string, callback: BufferCallback): void;

    /**
     * Execute batch and obtain a Buffer object
     *
     * When opening an image, it is decoded and stored in memory as an uncompressed image. All manipulations are done on the uncompressed data in memory. This method allows to encode the image to one of the specified formats and get the encoded data as a NodeJS Buffer object.
     *
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    toBuffer(
        format: string,
        params: JpegBufferParams | PngBufferParams | GifBufferParams,
        callback: BufferCallback,
    ): void;

    /**
     * Execute batch and write to file
     *
     * @param path Path of file to write.
     */
    writeFile(path: string, callback: ImageCallback): void;

    /**
     * Execute batch and write to file
     *
     * @param path Path of file to write.
     * @param params Format-specific parameters.
     */
    writeFile(
        path: string,
        params: JpegBufferParams | PngBufferParams | GifBufferParams,
        callback: ImageCallback,
    ): void;

    /**
     * Execute batch and write to file
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     */
    writeFile(path: string, format: "jpg", callback: ImageCallback): void;

    /**
     * Execute batch and write to file
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    writeFile(path: string, format: "jpg", params: JpegBufferParams, callback: ImageCallback): void;

    /**
     * Execute batch and write to file
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     */
    writeFile(path: string, format: "png", callback: ImageCallback): void;

    /**
     * Execute batch and write to file
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    writeFile(path: string, format: "png", params: PngBufferParams, callback: ImageCallback): void;

    /**
     * Execute batch and write to file
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     */
    writeFile(path: string, format: "gif", callback: ImageCallback): void;

    /**
     * Execute batch and write to file
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    writeFile(path: string, format: "gif", params: GifBufferParams, callback: ImageCallback): void;

    /**
     * Execute batch and write to file
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     */
    writeFile(path: string, format: string, callback: ImageCallback): void;

    /**
     * Execute batch and write to file
     *
     * @param path Path of file to write.
     * @param format Encoding format.
     * @param params Format-specific parameters.
     */
    writeFile(
        path: string,
        format: string,
        params: JpegBufferParams | PngBufferParams | GifBufferParams,
        callback: ImageCallback,
    ): void;
}
