import { CanvasRendererConfig, HTMLRendererConfig, SVGRendererConfig } from "lottie-web";
import { Browser, LaunchOptions } from "puppeteer";

/**
 * Renders the given Lottie animation via Puppeteer.
 *
 * You must pass either `path` or `animationData` to specify the Lottie animation.
 * @async
 */
declare function renderLottie(opts?: renderLottie.Options): Promise<void>;

declare namespace renderLottie {
    /**
     * Configuration options
     */
    interface Options {
        /**
         * Path or pattern to store result
         */
        output: string;

        /**
         * JSON exported animation data
         */
        animationData?: object | undefined;

        /**
         * Relative path to the JSON file containing animation data
         */
        path?: string | undefined;

        /**
         * Optional output width
         */
        width?: number | undefined;

        /**
         * Optional output height
         */
        height?: number | undefined;

        /**
         * JPEG quality for frames (does nothing if using png)
         * @default 90
         */
        jpegQuality?: number | undefined;

        /**
         * Set to true to disable console output
         */
        quiet?: boolean | undefined;

        /**
         * Window device scale factor
         * @default 1
         */
        deviceScaleFactor?: number | undefined;

        /**
         * Which lottie-web renderer to use
         * @default 'svg'
         */
        renderer?: "svg" | "canvas" | "html" | undefined;

        /**
         * Optional lottie renderer settings
         */
        rendererSettings?: SVGRendererConfig | CanvasRendererConfig | HTMLRendererConfig | undefined;

        /**
         * Optional puppeteer launch settings
         */
        puppeteerOptions?: LaunchOptions | undefined;

        /**
         * Optional ffmpeg settings for crf, profileVideo and preset values
         */
        ffmpegOptions?: FFmpegOptions | undefined;

        /**
         * Optional gifski settings (only for GIF outputs)
         */
        gifskiOptions?: object | undefined;

        /**
         * Optional JS
         * [CSS styles](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) to apply to the animation container
         */
        style?: object | undefined;

        /**
         * Optionally injects arbitrary string content into the head, style, or body elements.
         */
        inject?: Inject | undefined;

        /**
         * Optional puppeteer instance to reuse
         */
        browser?: Browser | undefined;
    }

    interface Inject {
        /**
         *  Optionally injected into the document <head>
         */
        head?: string | undefined;

        /**
         * Optionally injected into a <style> tag within the document <head>
         */
        style?: string | undefined;

        /**
         * Optionally injected into the document <body>
         */
        body?: string | undefined;
    }

    interface GifskiOptions {
        /**
         * Resize to max this width if set
         */
        width?: number | undefined;
        /**
         * Resize to max this height if width is set. Note that aspect ratio is not preserved.
         */
        height?: number | undefined;
        /**
         * 1-100, but useful range is 50-100. Recommended to set to 100.
         */
        quality?: number | undefined;
        /**
         * If true, looping is disabled
         */
        once?: boolean | undefined;
        /**
         * Lower quality, but faster encode
         */
        fast?: boolean | undefined;
    }

    /**
     * Optional ffmpeg settings
     */
    interface FFmpegOptions {
        crf?: number | undefined;
        profileVideo?: "baseline" | "main" | "high" | "high10" | "high422" | "high444" | undefined;
        preset?:
            | "ultrafast"
            | "superfast"
            | "veryfast"
            | "faster"
            | "fast"
            | "medium"
            | "slow"
            | "slower"
            | "veryslow"
            | "placebo"
            | undefined;
    }
}

export = renderLottie;
