/// <reference types="node" />
import sharp = require("sharp");
import generateImageHTML = require("./generate-html");

type Awaitable<T> = PromiseLike<T> | T;
type WithImplicitCoercion<T> = T | { valueOf(): T };

declare namespace EleventyImage {
    type ImageSource = string | URL | Buffer;
    type ImageFormat = "webp" | "jpeg" | "png" | "svg" | "avif";
    type ImageFormatWithAliases = ImageFormat | "jpg" | "svg+xml";

    type FormatHook = (
        this: MetadataEntry,
        sharpInstance: sharp.Sharp,
    ) => Awaitable<WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>>;

    interface CacheOptions {
        /**
         * @default 'buffer'
         */
        type?: "buffer" | "json" | "text";
        /**
         * @default ".cache"
         */
        directory?: string;
        fetchOptions?: RequestInit;
        /**
         * @default 10
         */
        concurrency?: number;
        /**
         * @default '1d'
         */
        duration?: string;
        removeUrlQueryParams?: boolean;
        dryRun?: boolean;
        verbose?: boolean;
        /**
         * Truncates the hash to this length
         * @default 30
         */
        hashLength?: number;
    }

    interface BaseImageOptions {
        /**
         * Controls how many output images will be created for each image format. Aspect ratio is preserved.
         * - numbers represent output width in pixels.
         * - `null` and `'auto'` represent the original image width.
         * @default [null]
         */
        widths?: ReadonlyArray<number | "auto" | null>;
        /**
         * Controls the output image formats.
         * - `null and `'auto'` keep the original format.
         * - `svg` requires SVG input to work.
         * @default ['webp', 'jpeg']
         */
        formats?: ReadonlyArray<ImageFormatWithAliases | "auto" | null>;
        /**
         * @default 10
         */
        concurrency?: number;
        /**
         * A path-prefix-esque directory for the `<img src>` attribute.
         * e.g. `/img/` for `<img src="/img/MY_IMAGE.jpeg">`.
         * @default "/img/"
         */
        urlPath?: string;
        /**
         * Where to write the new images to disk.
         * Project-relative path to the output image directory.
         * Maybe you want to write these to your output directory directly (e.g. `./_site/img/`)?
         * @default "img/"
         */
        outputDir?: string;
        /**
         * Skip raster formats for SVG
         *
         * If using SVG output (the input format is SVG and svg is added to your formats array),
         * we will skip all of the raster formats even if they’re in formats.
         * This may be useful in a CMS-driven workflow when the input could be vector or raster.
         * @default false
         */
        svgShortCircuit?: boolean;
        /**
         * Allow SVG to upscale
         *
         * While we do prevent raster images from upscaling (and filter upscaling widths from the output),
         * you can optionally enable SVG input to upscale to larger sizes when converting to raster format.
         * @default true
         */
        svgAllowUpscale?: boolean;

        /** options passed to the Sharp constructor */
        sharpOptions?: sharp.SharpOptions;
        /** options passed to the Sharp webp output method */
        sharpWebpOptions?: sharp.WebpOptions;
        /** options passed to the Sharp png output method */
        sharpPngOptions?: sharp.PngOptions;
        /** options passed to the Sharp jpeg output method */
        sharpJpegOptions?: sharp.JpegOptions;
        /** options passed to the Sharp avif output method */
        sharpAvifOptions?: sharp.AvifOptions;

        extensions?: Partial<Record<ImageFormat, string>>;
        formatHooks?: Partial<Record<ImageFormat, FormatHook>>;

        /**
         * @deprecated use cacheOptions.duration
         */
        cacheDuration?: string;
        /**
         * For any full URL first argument to this plugin,
         * the full-size remote image will be downloaded and cached locally.
         */
        cacheOptions?: CacheOptions;

        /**
         * Custom filenames
         *
         * Don’t like those hash ids? Make your own!
         * @param id hash of the original image
         * @param src original image path
         * @param width current width in px
         * @param format current file format
         * @param options set of options passed to the Image call
         *
         * @example
         * const path = require("path");
         * const Image = require("@11ty/eleventy-img");
         *
         * await Image("./test/bio-2017.jpg", {
         *   widths: [300],
         *   formats: [null],
         *   filenameFormat: function (id, src, width, format, options) {
         *     const extension = path.extname(src);
         *     const name = path.basename(src, extension);
         *
         *     return `${name}-${width}w.${format}`;
         *   }
         * });
         *
         * // Writes: "test/img/bio-2017-300w.jpeg"
         */
        filenameFormat?:
            | ((
                id: string,
                src: string,
                width: number,
                format: string,
                options: Required<ImageOptions>,
            ) => string | null | undefined)
            | null
            | undefined;

        /**
         * urlFormat allows you to return a full URL to an image including the domain.
         * Useful when you’re using your own hosted image service (probably via .statsSync or .statsByDimensionsSync)
         * Note: when you use this, metadata will not include .filename or .outputPath
         * @example
         * {
         *   urlFormat: function ({
         *     hash, // not included for `statsOnly` images
         *     src,
         *     width,
         *     format,
         *   }) {
         *     return `https://sample-image-service.11ty.dev/${encodeURIComponent(src)}/${width}/${format}/`;
         *   }
         * }
         */
        urlFormat?:
            | ((
                format: {
                    hash: string;
                    src: string;
                    width: number;
                    format: string;
                },
                options: Required<ImageOptions>,
            ) => string)
            | null;

        /**
         * If true, skips all image processing, just return stats. Doesn’t read files, doesn’t write files.
         * Important to note that `dryRun: true` performs image processing and includes a buffer—this does not.
         * Useful when used with `urlFormat` above.
         * Better than .statsSync* functions, because this will use the in-memory cache and de-dupe requests. Those will not.
         */
        statsOnly?: boolean;

        /**
         * in-memory cache
         * @default true
         */
        useCache?: boolean;
        /**
         * Also returns a buffer instance in the return object. Doesn’t write anything to the file system
         */
        dryRun?: boolean;

        /**
         * Customize the length of the default filename format hash
         * @default 10
         */
        hashLength?: number;

        /**
         * Advanced
         * @default true
         */
        useCacheValidityInHash?: true;
    }

    interface StatsOnlyImageOptions extends BaseImageOptions {
        statsOnly: true;
        /** For `statsOnly` remote images, this needs to be populated with { width, height, format? } */
        remoteImageMetadata?: {
            width: number;
            height: number;
            format?: ImageFormat;
        };
    }

    type ImageOptions = StatsOnlyImageOptions | BaseImageOptions;

    interface Stats {
        format: ImageFormat;
        width: number;
        height: number;
        url: string;
        sourceType: string;
        srcset: string;
        filename?: string;
        outputPath?: string;
    }

    interface MetadataEntry {
        format: ImageFormat;
        width: number;
        height: number;
        url: string;
        sourceType: string;
        srcset: string;
        filename?: string;
        outputPath?: string;
        size?: number;
    }

    type Metadata = {
        [Format in ImageFormat]?: Array<MetadataEntry & { format: Format }>;
    };

    const Util: {
        /*
         * Does not mutate, returns new Object
         * Note if keysToKeep is empty it will keep all keys.
         */
        getSortedObject<T extends object>(unordered: T): T;

        isRemoteUrl(url: string): boolean;
        isFullUrl(url: string): boolean;
    };

    const ImagePath: {
        filenameFormat: (id: string, src: unknown, width: number, format: string) => string;
        getFilename: (id: string, src: unknown, width: number, format: string, options?: ImageOptions) => string;
        convertFilePathToUrl: (dir: string, filename: string) => string;
    };

    /**
     * Use `Image.statsSync` to get the metadata of a source even if the image generation is not finished yet.
     *
     * `statsSync` doesn’t generate any files, but will tell you where the asynchronously generated files will end up!
     * This is useful in synchronous-only template environments where you need the image URLs synchronously
     * but can’t rely on the files being in the correct location yet.
     *
     * `options.dryRun` is still asynchronous but also doesn’t generate any files.
     */
    function statsSync(src: ImageSource, opts?: ImageOptions): Metadata;

    function statsByDimensionsSync(src: ImageSource, width: number, height: number, opts?: ImageOptions): Metadata;

    function getFormats(
        formats: string | ReadonlyArray<ImageFormatWithAliases | null | "auto">,
        autoFormat: ImageFormat,
    ): ImageFormat[];
    function getFormats(
        formats: string | ReadonlyArray<ImageFormatWithAliases | null>,
        autoFormat?: ImageFormat,
    ): ImageFormat[];

    function getWidths(
        originalWidth: number,
        widths?: ReadonlyArray<number | "auto" | null>,
        allowUpscale?: boolean,
    ): number[];

    function getHash(src: ImageSource, opts?: ImageOptions): string;

    class Image {
        src: ImageSource;
        isRemoteUrl: boolean;
        options: Required<ImageOptions>;

        cacheOptions?: Required<ImageOptions["cacheOptions"]>;

        constructor(src: ImageSource, opts?: ImageOptions);

        getInMemoryCacheKey(): string;

        getFileContents(): Buffer;

        getSharpOptionsForFormat(format: ImageFormat): sharp.OutputOptions;

        getInput(): Promise<ImageSource>;

        getHash(): string;

        getStat(outputFormat: ImageFormat, width: number, height: number): Stats;

        needsRotation(orientation: number): boolean;

        getFullStats(metadata: {
            width: number;
            height: number;
            format?: ImageFormatWithAliases;
            orientation?: number;
        }): Metadata;

        resize(
            input:
                | Buffer
                | Uint8Array
                | Uint8ClampedArray
                | Int8Array
                | Uint16Array
                | Int16Array
                | Uint32Array
                | Int32Array
                | Float32Array
                | Float64Array
                | string,
        ): Promise<Metadata>;

        static statsSync: typeof statsSync;
        static statsByDimensionsSync: typeof statsByDimensionsSync;
        static getValidWidths: typeof getWidths;
        static getFormatsArray: typeof getFormats;
    }

    /**
     * Change global plugin concurrency
     * @default 10
     */
    let concurrency: number;

    const generateHTML: typeof generateImageHTML;
    const generateObject: typeof generateImageHTML.generateObject;
}

/**
 * This utility returns a Promise and works best in async friendly functions, filters, shortcodes.
 * @param src Image data, either a path or a Buffer.
 * If a remote URL is given, we download the remote image and cache it locally.
 * This cached original is then used for the cache duration to avoid a bunch of network requests.
 * @example
 * const Image = require("@11ty/eleventy-img");
 *
 * (async () => {
 *   let url = "https://images.unsplash.com/photo-1608178398319-48f814d0750c";
 *   let stats = await Image(url, {
 *     widths: [300]
 *   });
 *
 *   console.log( stats );
 * })();
 */
declare function EleventyImage(
    src: EleventyImage.ImageSource,
    opts?: EleventyImage.ImageOptions,
): Promise<EleventyImage.Metadata>;

export = EleventyImage;
