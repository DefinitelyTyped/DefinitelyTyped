// Type definitions for favicons 5.5
// Project: https://github.com/itgalaxy/favicons
// Definitions by: Mohsen Azimi <https://github.com/mohsen1>
//                 Nikk Radetskiy <https://github.com/metsawyr>
//                 Artur Androsovych <https://github.com/arturovt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

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

    interface Configuration {
        /** Path for overriding default icons path @default '/' */
        path: string;
        /** Your application's name @default null */
        appName: string | null;
        /** Your application's short_name. If not set, `appName` will be used @default null */
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
            android: boolean | IconOptions;
            /* Create Apple touch icons. */
            appleIcon: boolean | IconOptions;
            /* Create Apple startup images. */
            appleStartup: boolean | IconOptions;
            /* Create Opera Coast icon. */
            coast: boolean | IconOptions;
            /* Create regular favicons. */
            favicons: boolean | IconOptions;
            /* Create Firefox OS icons. */
            firefox: boolean | IconOptions;
            /* Create Windows 8 tile icons. */
            windows: boolean | IconOptions;
            /* Create Yandex browser icon. */
            yandex: boolean | IconOptions;
        }>;
    }

    interface FavIconResponse {
        images: Array<{ name: string; contents: Buffer }>;
        files: Array<{ name: string; contents: Buffer }>;
        html: string[];
    }

    type Callback = (error: Error | null, response: FavIconResponse) => void;

    /** You can programmatically access Favicons configuration (icon filenames, HTML, manifest files, etc) with this export */
    const config: Configuration;

    function stream(configuration?: Configuration): Duplex;
}
/**
 * Generate favicons
 * @param source Source image(s)
 * @param configuration
 * @param callback
 */
declare function favicons(
    source: string | Buffer | string[],
    configuration?: Partial<favicons.Configuration>,
): Promise<favicons.FavIconResponse>;
declare function favicons(
    source: string | Buffer | string[],
    callback?: favicons.Callback
): void;
declare function favicons(
    source: string | Buffer | string[],
    configuration?: Partial<favicons.Configuration>,
    callback?: favicons.Callback
): void;

export = favicons;
