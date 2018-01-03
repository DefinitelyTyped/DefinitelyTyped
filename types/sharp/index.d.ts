// Type definitions for sharp 0.17
// Project: https://github.com/lovell/sharp
// Definitions by: François Nguyen <https://github.com/lith-light-g>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Duplex } from "stream";

/**
 * Creates a sharp instance from an image
 * @param input Buffer containing JPEG, PNG, WebP, GIF, SVG, TIFF or raw pixel image data, or String containing the path to an JPEG, PNG, WebP, GIF, SVG or TIFF image file.
 * @param options Object with optional attributes.
 * @throws {Error} Invalid parameters
 * @returns A sharp instance that can be used to chain operations
 */
declare function sharp(input?: string | Buffer, options?: sharp.SharpOptions): sharp.SharpInstance;
declare namespace sharp {
    const gravity: GravityEnum;
    const strategy: StrategyEnum;
    /**
     * Gets, or when options are provided sets, the limits of libvips' operation cache.
     * Existing entries in the cache will be trimmed after any change in limits.
     * This method always returns cache statistics, useful for determining how much working memory is required for a particular task.
     * @param options Object with the cache options, or Boolean where true uses default cache settings and false removes all caching.
     */
    function cache(options?: boolean | CacheOptions): CacheResult;
    /**
     * Gets, or when a concurrency is provided sets, the number of threads libvips' should create to process each image.
     * @param concurrency concurrency value
     */
    function concurrency(threads?: number): number;
    /**
     * Provides access to internal task counters.
     * @returns Object containing task counters
     */
    function counters(): SharpCounters;
    /**
     * Get and set use of SIMD vector unit instructions.
     * @param enable enable or disable use of SIMD vector unit instructions
     * @returns true if usage of SIMD vector unit instructions is enabled
     */
    function simd(enable?: boolean): boolean;
    const kernel: KernelEnum;
    const interpolator: InterpolatorEnum;
    /**
     * Object containing nested boolean values representing the available input and output formats/methods.
     */
    const format: FormatEnum;
    /** An EventEmitter that emits a change event when a task is either queued, waiting for libuv to provide a worker thread, complete */
    const queue: NodeJS.EventEmitter;
    /** An Object containing the version numbers of libvips and its dependencies. */
    const versions: {
        vips: string;
        cairo?: string;
        croco?: string;
        exif?: string;
        expat?: string;
        ffi?: string;
        fontconfig?: string;
        freetype?: string;
        gdkpixbuf?: string;
        gif?: string;
        glib?: string;
        gsf?: string;
        harfbuzz?: string;
        jpeg?: string;
        lcms?: string;
        orc?: string;
        pango?: string;
        pixman?: string;
        png?: string;
        svg?: string;
        tiff?: string;
        webp?: string;
        xml?: string;
        zlib?: string;
    };
    const bool: BoolEnum;

    interface SharpInstance extends Duplex {
        /**
         * Fast access to image metadata without decoding any compressed image data.
         * @returns A sharp instance that can be used to chain operations
         */
        metadata(callback: (err: Error, metadata: Metadata) => void): SharpInstance;
        /**
         * Fast access to image metadata without decoding any compressed image data.
         * @returns A promise that fulfills with a metadata object.
         */
        metadata(): Promise<Metadata>;
        /**
         * Take a "snapshot" of the Sharp instance, returning a new instance.
         * @returns A sharp instance that can be used to chain operations
         */
        clone(): SharpInstance;
        /**
         * An advanced setting that switches the libvips access method to VIPS_ACCESS_SEQUENTIAL.
         * @param sequentialRead true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        sequentialRead(sequentialRead?: boolean): SharpInstance;
        /**
         * Do not process input images where the number of pixels (width _ height) exceeds this limit.
         * @param pixels An integral Number of pixels, zero or false to remove limit, true to use default limit.
         * @throws {Error} Invalid limit
         * @returns A sharp instance that can be used to chain operations
         */
        limitInputPixels(pixels: number | boolean): SharpInstance;
        /**
         * Resize image to width x height. By default, the resized image is centre cropped to the exact size specified.
         * @param width pixels wide the resultant image should be, between 1 and 16383 (0x3FFF). Use null or  undefined to auto-scale the width to match the height.
         * @param height pixels high the resultant image should be, between 1 and 16383. Use null or undefined to auto-scale the height to match the width.
         * @param options resize options
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        resize(width?: number, height?: number, options?: ResizeOptions): SharpInstance;
        /**
         * Crop the resized image to the exact size specified, the default behaviour.
         * @param crop A member of sharp.gravity to crop to an edge/corner or sharp.strategy to crop dynamically. (optional, default 'centre')
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        crop(crop?: number | string): SharpInstance;
        /**
         * Preserving aspect ratio, resize the image to the maximum width or height specified then embed on a background of the exact width and height specified.
         * @returns A sharp instance that can be used to chain operations
         */
        embed(): SharpInstance;
        /**
         * Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to the width and height specified.
         * @returns A sharp instance that can be used to chain operations
         */
        max(): SharpInstance;
        /**
         * Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to the width and height specified.
         * @returns A sharp instance that can be used to chain operations
         */
        min(): SharpInstance;
        /**
         * Do not enlarge the output image if the input image width or height are already less than the required dimensions.
         * @param withoutEnlargement true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        withoutEnlargement(withoutEnlargement?: boolean): SharpInstance;
        /**
         * Ignoring the aspect ratio of the input, stretch the image to the exact width and/or height provided via resize.
         */
        ignoreAspectRatio(): SharpInstance;
        /**
         * Extract a region of the image.
         * @param region Region to extract
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        extract(region: Region): SharpInstance;
        /**
         * Trim "boring" pixels from all edges that contain values within a percentage similarity of the top-left pixel.
         * @param tolerance value between 1 and 99 representing the percentage similarity. (optional, default 10)
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        trim(tolerance?: number): SharpInstance;
        /**
         * Set the background for the embed, flatten and extend operations. The default background is {r: 0, g: 0, b: 0, alpha: 1}, black without transparency.
         * @param rgba String or Object parsed by the color module to extract values for red, green, blue and alpha.
         * @throws {Error} Invalid parameter
         * @returns A sharp instance that can be used to chain operations
         */
        background(rgba?: RGBA | string): SharpInstance; // Wait for typings to fetch latest color typings from DT
        /**
         * Merge alpha transparency channel, if any, with background.
         * @param flatten true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        flatten(flatten?: boolean): SharpInstance;
        /**
         * Extends/pads the edges of the image with the colour provided to the background method.
         * @param extend single pixel count to add to all edges or an Object with per-edge counts
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        extend(extend: number | ExtendOptions): SharpInstance;
        /**
         * Produce the "negative" of the image.
         * @param negate true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        negate(negate?: boolean): SharpInstance;
        /**
         * Rotate the output image by either an explicit angle or auto-orient based on the EXIF Orientation tag.
         * @param angle 0, 90, 180 or 270. (optional, default auto)
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        rotate(angle?: number): SharpInstance;
        /**
         * Flip the image about the vertical Y axis.
         * @param flip true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        flip(flip?: boolean): SharpInstance;
        /**
         * Flop the image about the horizontal X axis.
         * @param flop true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        flop(flop?: boolean): SharpInstance;
        /**
         * Blur the image.
         * @param sigma a value between 0.3 and 1000 representing the sigma of the Gaussian mask, where sigma = 1 + radius / 2.
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        blur(sigma?: number): SharpInstance;
        /**
         * Convolve the image with the specified kernel.
         * @param kernel the specified kernel
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        convolve(kernel: Kernel): SharpInstance;
        /**
         * Sharpen the image.
         * @param sigma the sigma of the Gaussian mask, where sigma = 1 + radius / 2.
         * @param flat the level of sharpening to apply to "flat" areas. (optional, default 1.0)
         * @param jagged the level of sharpening to apply to "jagged" areas. (optional, default 2.0)
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        sharpen(sigma?: number, flat?: number, jagged?: number): SharpInstance;
        /**
         * Any pixel value greather than or equal to the threshold value will be set to 255, otherwise it will be set to 0.
         * @param threshold a value in the range 0-255 representing the level at which the threshold will be applied. (optional, default 128)
         * @param options threshold options
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        threshold(threshold?: number, options?: ThresholdOptions): SharpInstance;
        /**
         * Apply a gamma correction by reducing the encoding (darken) pre-resize at a factor of 1/gamma then increasing the encoding (brighten) post-resize at a factor of gamma.
         * @param gamma value between 1.0 and 3.0. (optional, default 2.2)
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        gamma(gamma?: number): SharpInstance;
        /**
         * Alternative spelling of greyscale.
         * Convert to 8-bit greyscale; 256 shades of grey.
         * This is a linear operation.
         * If the input image is in a non-linear colour space such as sRGB, use gamma() with greyscale() for the best results.
         * By default the output image will be web-friendly sRGB and contain three (identical) color channels.
         * This may be overridden by other sharp operations such as toColourspace('b-w'), which will produce an output image containing one color channel.
         * An alpha channel may be present, and will be unchanged by the operation.
         * @param grayscale true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        grayscale(grayscale?: boolean): SharpInstance;
        /**
         * Convert to 8-bit greyscale; 256 shades of grey.
         * This is a linear operation.
         * If the input image is in a non-linear colour space such as sRGB, use gamma() with greyscale() for the best results.
         * By default the output image will be web-friendly sRGB and contain three (identical) color channels.
         * This may be overridden by other sharp operations such as toColourspace('b-w'), which will produce an output image containing one color channel.
         * An alpha channel may be present, and will be unchanged by the operation.
         * @param greyscale true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        greyscale(greyscale?: boolean): SharpInstance;
        /**
         * Enhance output image contrast by stretching its luminance to cover the full dynamic range.
         * @param normalize true to enable and false to disable (defaults to true)
         * @returns A sharp instance that can be used to chain operations
         */
        normalize(normalize?: boolean): SharpInstance;
        /**
         * Alternative spelling of normalise.
         * Enhance output image contrast by stretching its luminance to cover the full dynamic range.
         * @param normalise true to enable and false to disable (defaults to true)
         */
        normalise(normalise?: boolean): SharpInstance;
        /**
         * Overlay (composite) an image over the processed (resized, extracted etc.) image.
         * @param image Buffer containing image data or String containing the path to an image file.
         * @param options overlay options
         * @returns A sharp instance that can be used to chain operations
         */
        overlayWith(image: string | Buffer, options?: OverlayOptions): SharpInstance;
        /**
         * Set the output colourspace.
         * @param colourspace output colourspace e.g. srgb, rgb, cmyk, lab, b-w ...
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        toColourspace(colourspace?: string): SharpInstance;
        /**
         * Alternative spelling of toColourspace.
         * Set the output colorspace.
         * @param colorspace output colourspace e.g. srgb, rgb, cmyk, lab, b-w ...
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        toColorspace(colorspace: string): SharpInstance;
        /**
         * Extract a single channel from a multi-channel image.
         * @param channel zero-indexed band number to extract, or red, green or blue as alternative to 0, 1 or 2 respectively.
         * @throws {Error} Invalid channel
         * @returns A sharp instance that can be used to chain operations
         */
        extractChannel(channel: number | string): SharpInstance;
        /**
         * Join one or more channels to the image. The meaning of the added channels depends on the output colourspace, set with toColourspace().
         * @param channels one or more images (file paths, Buffers).
         * @param options image options
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        joinChannel(channels: string | string[] | Buffer | Buffer[], options?: { raw: Raw }): SharpInstance;
        /**
         * Perform a bitwise boolean operation on all input image channels (bands) to produce a single channel output image.
         * @param boolOp one of and, or or eor to perform that bitwise operation, like the C logic operators &, | and ^ respectively.
         * @returns A sharp instance that can be used to chain operations
         */
        bandbool(boolOp: string): SharpInstance;
        /**
         * Perform a bitwise boolean operation with operand image.
         * @param image Buffer containing image data or String containing the path to an image file.
         * @param operator one of and, or or eor to perform that bitwise operation, like the C logic operators &, | and ^ respectively.
         * @param options describes operand when using raw pixel data.
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        boolean(operand: string | Buffer, operator: string, options?: { raw: Raw }): SharpInstance;
        /**
         * Write output image data to a file.
         * @param fileOut The path to write the image data to.
         * @param callback Callback function called on completion with two arguments (err, info).  info contains the output image format, size (bytes), width, height and channels.
         * @throws {Error} Invalid parameters
         * @returns A sharp instance that can be used to chain operations
         */
        toFile(fileOut: string, callback: (err: Error, info: OutputInfo) => void): SharpInstance;
        /**
         * Write output image data to a file.
         * @param fileOut The path to write the image data to.
         * @throws {Error} Invalid parameters
         * @returns A promise that fulfills with an object containing informations on the resulting file
         */
        toFile(fileOut: string): Promise<OutputInfo>;
        /**
         * Write output to a Buffer. JPEG, PNG, WebP, and RAW output are supported. By default, the format will match the input image, except GIF and SVG input which become PNG output.
         * @param callback Callback function called on completion with three arguments (err, buffer, info).
         *                            err is an error message, if any.
         *                            buffer is the output image data.
         *                            info contains the output image format, size (bytes), width, height and channels.
         *                            A Promises/A+ promise is returned when callback is not provided.
         * @returns A sharp instance that can be used to chain operations
         */
        toBuffer(callback: (err: Error, buffer: Buffer, info: OutputInfo) => void): SharpInstance;
        /**
         * Write output to a Buffer. JPEG, PNG, WebP, and RAW output are supported. By default, the format will match the input image, except GIF and SVG input which become PNG output.
         * @returns A promise that fulfills with the resulting Buffer
         */
        toBuffer(): Promise<Buffer>;
        /**
         * Use these JPEG options for output image.
         * @param options Output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        jpeg(options?: JpegOptions): SharpInstance;
        /**
         * Use these PNG options for output image.
         * @param options Output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        png(options?: PngOptions): SharpInstance;
        /**
         * Use these WebP options for output image.
         * @param options Output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        webp(options?: OutputOptions): SharpInstance;
        /**
         * Use these TIFF options for output image.
         * @param options Output options.
         * @throws {Error} Invalid options
         * @returns A sharp instance that can be used to chain operations
         */
        tiff(options?: OutputOptions): SharpInstance;
        /**
         * Force output to be raw, uncompressed uint8 pixel data.
         * @returns A sharp instance that can be used to chain operations
         */
        raw(): SharpInstance;
        /**
         * Force output to a given format.
         * @param format a String or an Object with an 'id' attribute
         * @param options output options
         * @throws {Error} Unsupported format or options
         * @returns A sharp instance that can be used to chain operations
         */
        toFormat(format: string | AvailableFormatInfo, options?: OutputOptions | JpegOptions | PngOptions): SharpInstance;
        /**
         * Include all metadata (EXIF, XMP, IPTC) from the input image in the output image.
         * The default behaviour, when withMetadata is not used, is to strip all metadata and convert to the device-independent sRGB colour space.
         * This will also convert to and add a web-friendly sRGB ICC profile.
         * @throws {Error} Invalid parameters.
         */
        withMetadata(metadata?: Metadata): SharpInstance;
        /**
         * Use tile-based deep zoom (image pyramid) output. Set the format and options for tile images via the  toFormat, jpeg, png or webp functions.
         * Use a .zip or .szi file extension with toFile to write to a compressed archive file format.
         * @param options options
         */
        tile(options: TileOptions): SharpInstance;
    }

    interface SharpOptions {
        /** integral number representing the DPI for vector images. */
        density?: number;
        /** describes raw pixel image data. */
        raw?: Raw;
        /** describes a blank overlay to be created. */
        create?: Create;
    }

    interface CacheOptions {
        /** is the maximum memory in MB to use for this cache */
        memory?: number;
        /** is the maximum number of files to hold open */
        files?: number;
        /** is the maximum number of operations to cache */
        items?: number;
    }

    interface SharpCounters {
        queue: number;
        process: number;
    }

    interface Raw {
        width: number;
        height: number;
        channels: number;
    }

    interface Create {
        /** Number of pixels wide */
        width: number;
        /** Number of pixels high */
        height: number;
        /** Number of bands e.g. 3 for RGB, 4 for RGBA */
        channels: number;
        /** parsed by the [color](https://www.npmjs.org/package/color) module to extract values for red, green, blue and alpha. */
        background: string | RGBA;
    }

    interface Metadata {
        /** Name of decoder used to decompress image data e.g. jpeg, png, webp, gif, svg */
        format?: string;
        /** Number of pixels wide */
        width?: number;
        /** Number of pixels high */
        height?: number;
        /** Name of colour space interpretation e.g. srgb, rgb, cmyk, lab, b-w ... */
        space?: string;
        /** Number of bands e.g. 3 for sRGB, 4 for CMYK */
        channels?: number;
        /** Number of pixels per inch (DPI), if present */
        density?: number;
        /** Boolean indicating the presence of an embedded ICC profile */
        hasProfile?: boolean;
        /** Boolean indicating the presence of an alpha transparency channel */
        hasAlpha?: boolean;
        /** Number value of the EXIF Orientation header, if present */
        orientation?: number;
        /** Buffer containing raw EXIF data, if present */
        exif?: Buffer;
        /** Buffer containing raw ICC profile data, if present */
        icc?: Buffer;
    }

    interface JpegOptions extends OutputOptions {
        /** Use progressive (interlace) scan (optional, default false) */
        progressive?: boolean;
        /** Set to '4:4:4' to prevent chroma subsampling when quality <= 90 (optional, default '4:2:0') */
        chromaSubsampling?: string;
        /** Apply trellis quantisation, requires mozjpeg (optional, default  false) */
        trellisQuantisation?: boolean;
        /** Apply overshoot deringing, requires mozjpeg (optional, default  false) */
        overshootDeringing?: boolean;
        /** Optimise progressive scans, forces progressive, requires mozjpeg (optional, default false) */
        optimiseScans?: boolean;
        /** Alternative spelling of optimiseScans (optional, default false) */
        optimizeScans?: boolean;
    }

    interface PngOptions {
        /** Use progressive (interlace) scan (optional, default false) */
        progressive?: boolean;
        /** zlib compression level (optional, default 6) */
        compressionLevel?: number;
        /** Use adaptive row filtering (optional, default true) */
        adaptiveFiltering?: boolean;
        /** Force PNG output, otherwise attempt to use input format (optional, default  true) */
        force?: boolean;
    }

    interface OutputOptions {
        /** Quality, integer 1-100 (optional, default 80) */
        quality?: number;
        /** Force format output, otherwise attempt to use input format (optional, default true) */
        force?: boolean;
    }

    interface ResizeOptions {
        /** the kernel to use for image reduction. (optional, default 'lanczos3') */
        kernel?: string;
        /** the interpolator to use for image enlargement. (optional, default 'bicubic') */
        interpolator?: string;
        /** use magick centre sampling convention instead of corner sampling. (optional, default false) */
        centreSampling?: boolean;
        /** alternative spelling of centreSampling. (optional, default false) */
        centerSampling?: boolean;
    }

    interface Region {
        /** zero-indexed offset from left edge */
        left?: number;
        /** zero-indexed offset from top edge */
        top?: number;
        /** dimension of extracted image */
        width?: number;
        /** dimension of extracted image */
        height?: number;
    }

    interface ExtendOptions {
        top?: number;
        left?: number;
        bottom?: number;
        right?: number;
    }

    interface RGBA {
        r?: number;
        g?: number;
        b?: number;
        alpha?: number;
    }

    interface Kernel {
        /** width of the kernel in pixels. */
        width: number;
        /** height of the kernel in pixels. */
        height: number;
        /** Array of length width*height containing the kernel values. */
        kernel: number[];
        /** the scale of the kernel in pixels. (optional, default sum) */
        scale?: number;
        /** the offset of the kernel in pixels. (optional, default 0) */
        offset?: number;
    }

    interface ThresholdOptions {
        /** convert to single channel greyscale. (optional, default true) */
        greyscale?: boolean;
        /** alternative spelling for greyscale. (optional, default true) */
        grayscale?: boolean;
    }

    interface OverlayOptions {
        /** gravity at which to place the overlay. (optional, default 'centre') */
        gravity?: number;
        /** the pixel offset from the top edge. */
        top?: number;
        /** the pixel offset from the left edge. */
        left?: number;
        /** set to true to repeat the overlay image across the entire image with the given  gravity. (optional, default false) */
        tile?: boolean;
        /** set to true to apply only the alpha channel of the overlay image to the input image, giving the appearance of one image being cut out of another. (optional, default false) */
        cutout?: boolean;
        /** describes overlay when using raw pixel data. */
        raw?: Raw;
    }

    interface TileOptions {
        /** Tile size in pixels, a value between 1 and 8192. (optional, default 256) */
        size?: number;
        /** Tile overlap in pixels, a value between 0 and 8192. (optional, default 0) */
        overlap?: number;
        /** Tile container, with value fs (filesystem) or zip (compressed file). (optional, default 'fs') */
        container?: string;
        /** Filesystem layout, possible values are dz, zoomify or google. (optional, default  'dz') */
        layout?: string;
    }

    interface OutputInfo {
        format: string;
        size: number;
        width: number;
        height: number;
        channels: number;
    }

    interface AvailableFormatInfo {
        id: string;
        input: { file: boolean; buffer: boolean; stream: boolean; };
        output: { file: boolean; buffer: boolean; stream: boolean; };
    }

    interface KernelEnum {
        cubic: string;
        lanczos2: string;
        lanczos3: string;
    }

    interface InterpolatorEnum {
        nearest: string;
        bilinear: string;
        bicubic: string;
        nohalo: string;
        lbb: string;
        locallyBoundedBicubic: string;
        vsqbs: string;
        vertexSplitQuadraticBasisSpline: string;
    }

    interface BoolEnum {
        and: string;
        or: string;
        eor: string;
    }

    interface ColourspaceEnum {
        multiband: string;
        "b-w": string;
        bw: string;
        cmyk: string;
        srgb: string;
    }

    interface GravityEnum {
        north: number;
        northeast: number;
        southeast: number;
        south: number;
        southwest: number;
        west: number;
        northwest: number;
        east: number;
        center: number;
        centre: number;
    }

    interface StrategyEnum {
        entropy: number;
        attention: number;
    }

    interface FormatEnum {
        jpeg: AvailableFormatInfo;
        png: AvailableFormatInfo;
        webp: AvailableFormatInfo;
        raw: AvailableFormatInfo;
        tiff: AvailableFormatInfo;
        dz: AvailableFormatInfo;
        input: AvailableFormatInfo;
        magick: AvailableFormatInfo;
        openslide: AvailableFormatInfo;
        ppm: AvailableFormatInfo;
        fits: AvailableFormatInfo;
        gif: AvailableFormatInfo;
        svg: AvailableFormatInfo;
        pdf: AvailableFormatInfo;
        v: AvailableFormatInfo;
    }

    interface CacheResult {
        memory: { current: number; high: number; max: number; };
        files: { current: number; max: number; };
        items: { current: number; max: number; };
    }
}

export = sharp;
