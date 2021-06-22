// Type definitions for favicons 6.2
// Project: https://github.com/itgalaxy/favicons
// Definitions by: Mohsen Azimi <https://github.com/mohsen1>
//                 Nikk Radetskiy <https://github.com/metsawyr>
//                 Artur Androsovych <https://github.com/arturovt>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { Duplex } from 'stream';

declare namespace favicons {
    interface IconOptions {
        offset?: number;
        background?: boolean | string;
        mask?: boolean;
        overlayGlow?: boolean;
        ovelayShadow?: boolean;
    }

    interface FaviconOptions {
        /** Path for overriding default icons path @default '/' */
        path: string;
        /** Your application's name @default null */
        appName: string | null;
        /**
         * Your application's short_name.
         * @default appName
         */
        appShortName: string | null;
        /** Your application's description @default null */
        appDescription: string | null;
        /** Your (or your developer's) name @default null */
        developerName: string | null;
        /** Your (or your developer's) URL @default null */
        developerURL: string | null;
        /** Primary text direction for name, short_name, and description @default 'auto' */
        dir: string;
        /** Primary language for name and short_name @default 'en-US' */
        lang: string;
        /** Background colour for flattened icons @default '#fff' */
        background: string;
        /** Theme color user for example in Android's task switcher @default '#fff' */
        theme_color: string;
        /** Style for Apple status bar @default 'black-translucent' */
        appleStatusBarStyle: 'black-translucent' | 'default' | 'black';
        /** Preferred display mode: 'fullscreen', 'standalone', 'minimal-ui' or 'browser' @default 'standalone' */
        display: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';
        /** Default orientation: 'any', 'natural', 'portrait' or 'landscape' @default 'any' */
        orientation: 'any' | 'natural' | 'portrait' | 'landscape';
        /** Set of URLs that the browser considers within your app @default null */
        scope: string;
        /** Start URL when launching the application from a device @default '/?homescreen=1' */
        start_url: string;
        /** Your application's version string @default '1.0' */
        version: string;
        /** Print logs to console? @default false */
        logging: boolean;
        /** Determines whether to allow piping html as a file @default false */
        pipeHTML: boolean;
        /** Use nearest neighbor resampling to preserve hard edges on pixel art @default false */
        pixel_art: boolean;
        /** Browsers don't send cookies when fetching a manifest, enable this to fix that @default false */
        loadManifestWithCredentials: boolean;
        /** Determines whether to set relative paths in manifests @default false */
        manifestRelativePaths: boolean;
        /**
         * Platform Options:
         * - offset - offset in percentage
         * - background:
         *   * false - use default
         *   * true - force use default, e.g. set background for Android icons
         *   * color - set background for the specified icons
         * - mask - apply mask in order to create circle icon (applied by default for firefox)
         * - overlayGlow - apply glow effect after mask has been applied (applied by default for firefox)
         * - overlayShadow - apply drop shadow after mask has been applied
         */
        icons: Partial<{
            /* Create Android homescreen icon. */
            android: boolean | IconOptions | string[];
            /* Create Apple touch icons. */
            appleIcon: boolean | IconOptions | string[];
            /* Create Apple startup images. */
            appleStartup: boolean | IconOptions | string[];
            /* Create Opera Coast icon. */
            coast: boolean | IconOptions | string[];
            /* Create regular favicons. */
            favicons: boolean | IconOptions | string[];
            /* Create Firefox OS icons. */
            firefox: boolean | IconOptions | string[];
            /* Create Windows 8 tile icons. */
            windows: boolean | IconOptions | string[];
            /* Create Yandex browser icon. */
            yandex: boolean | IconOptions | string[];
        }>;
    }

    interface FaviconResponse {
        images: FaviconImage[];
        files: FaviconFile[];
        html: FaviconHtmlElement[];
    }

    interface FaviconImage {
        name: string;
        contents: Buffer;
    }

    interface FaviconFile {
        name: string;
        contents: string;
    }

    type FaviconHtmlElement = string;

    type FaviconCallback = (error: Error | null, response: FaviconResponse) => void;

    /** You can programmatically access Favicons configuration (icon filenames, HTML, manifest files, etc) with this export */
    const config: FaviconOptions;

    function stream(configuration?: FaviconOptions): Duplex;
}
/**
 * Generate favicons
 * @param source Source image(s)
 * @param configuration
 * @param callback
 */
declare function favicons(
    source: string | Buffer | string[],
    options?: Partial<favicons.FaviconOptions>,
): Promise<favicons.FaviconResponse>;
declare function favicons(source: string | Buffer | string[], next?: favicons.FaviconCallback): void;
declare function favicons(
    source: string | Buffer | string[],
    options?: Partial<favicons.FaviconOptions>,
    next?: favicons.FaviconCallback,
): void;

export = favicons;
