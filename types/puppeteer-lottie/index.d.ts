// Type definitions for puppeteer-lottie 1.1
// Project: https://github.com/transitive-bullshit/puppeteer-lottie
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { Browser, LaunchOptions } from 'puppeteer';
import { SVGRendererConfig, CanvasRendererConfig, HTMLRendererConfig } from 'lottie-web';

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
        animationData?: object;

        /**
         * Relative path to the JSON file containing animation data
         */
        path?: string;

        /**
         * Optional output width
         */
        width?: number;

        /**
         * Optional output height
         */
        height?: number;

        /**
         * JPEG quality for frames (does nothing if using png)
         * @default 90
         */
        jpegQuality?: number;

        /**
         * Set to true to disable console output
         */
        quiet?: boolean;

        /**
         * Window device scale factor
         * @default 1
         */
        deviceScaleFactor?: number;

        /**
         * Which lottie-web renderer to use
         * @default 'svg'
         */
        renderer?: 'svg' | 'canvas' | 'html';

        /**
         * Optional lottie renderer settings
         */
        rendererSettings?: SVGRendererConfig | CanvasRendererConfig | HTMLRendererConfig;

        /**
         * Optional puppeteer launch settings
         */
        puppeteerOptions?: LaunchOptions;

        /**
         * Optional ffmpeg settings for crf, profileVideo and preset values
         */
        ffmpegOptions?: FFmpegOptions;

        /**
         * Optional gifski settings (only for GIF outputs)
         */
        gifskiOptions?: object;

        /**
         * Optional JS
         * [CSS styles](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) to apply to the animation container
         */
        style?: object;

        /**
         * Optionally injects arbitrary string content into the head, style, or body elements.
         */
        inject?: Inject;

        /**
         * Optional puppeteer instance to reuse
         */
        browser?: Browser;
    }

    interface Inject {
        /**
         *  Optionally injected into the document <head>
         */
        head?: string;

        /**
         * Optionally injected into a <style> tag within the document <head>
         */
        style?: string;

        /**
         * Optionally injected into the document <body>
         */
        body?: string;
    }

    interface GifskiOptions {
        /**
         * Resize to max this width if set
         */
        width?: number;
        /**
         * Resize to max this height if width is set. Note that aspect ratio is not preserved.
         */
        height?: number;
        /**
         * 1-100, but useful range is 50-100. Recommended to set to 100.
         */
        quality?: number;
        /**
         * If true, looping is disabled
         */
        once?: boolean;
        /**
         * Lower quality, but faster encode
         */
        fast?: boolean;
    }

    /**
     * Optional ffmpeg settings
     */
    interface FFmpegOptions {
        crf?: number;
        profileVideo?: 'baseline' | 'main' | 'high' | 'high10' | 'high422' | 'high444';
        preset?:
            | 'ultrafast'
            | 'superfast'
            | 'veryfast'
            | 'faster'
            | 'fast'
            | 'medium'
            | 'slow'
            | 'slower'
            | 'veryslow'
            | 'placebo';
    }
}

export = renderLottie;
