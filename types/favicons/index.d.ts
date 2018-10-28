// Type definitions for favicons 5.1
// Project: https://github.com/evilebottnawi/favicons/blob/master/package.json
// Definitions by: Mohsen Azimi <https://github.com/mohsen1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

export interface Configuration {
    /** Path for overriding default icons path @default "/" */
    path: string;
    /** Your application's name @default null */
    appName: string | null;
    /** Your application's description @default null */
    appDescription: string | null;
    /** Your (or your developer's) name @default null */
    developerName: string | null;
    /** Your (or your developer's) URL @default null */
    developerURL: string | null;
    /** Primary text direction for name, short_name, and description @default "auto" */
    dir: string;
    /** Primary language for name and short_name @default "en-US */
    lang: string;
    /** Background colour for flattened icons @default "#fff" */
    background: string;
    /** Theme color user for example in Android's task switcher @default "#fff" */
    theme_color: string;
    /** Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser" @default "standalone" */
    display: "fullscreen" | "standalone" | "minimal-ui" | "browser";
    /** Default orientation: "any", "natural", "portrait" or "landscape" @default "any" */
    orientation: "any" | "natural" | "portrait" | "landscape";
    /** Start URL when launching the application from a device @default "/?homescreen=1" */
    start_url: string;
    /** Your application's version string @default "1.0" */
    version: string;
    /** Print logs to console? @default false */
    logging: boolean;
    /**
     * Platform Options:
     * - offset - offset in percentage
     * - background:
     *   * false - use default
     *   * true - force use default, e.g. set background for Android icons
     *   * color - set background for the specified icons
     */
    icons: Partial<{
        /* Create Android homescreen icon.  */
        android: boolean | { offset: string; background: string };
        /* Create Apple touch icons.  */
        appleIcon: boolean | { offset: string; background: string };
        /* Create Apple startup images.  */
        appleStartup: boolean | { offset: string; background: string };
        /* Create Opera Coast icon.  */
        coast: boolean | { offset: string; background: string };
        /* Create regular favicons.  */
        favicons: boolean;
        /* Create Firefox OS icons.  */
        firefox: boolean | { offset: string; background: string };
        /* Create Windows 8 tile icons.   */
        windows: boolean | { background: string };
        /* Create Yandex browser icon. */
        yandex: boolean | { background: string };
    }>;
}

export interface FavIconResponse {
    images: Array<{ name: string; contents: Buffer }>;
    files: Array<{ name: string; contents: Buffer }>;
    html: string[];
}

export type Callback = (error: Error | null, response: FavIconResponse) => void;

/** You can programmatically access Favicons configuration (icon filenames, HTML, manifest files, etc) with this export */
export const config: Configuration;

/**
 * Generate favicons
 * @param source Source image(s)
 * @param configuration
 * @param callback
 */
declare function favicons(
    source: string | Buffer | string[],
    callback?: Callback
): void;
declare function favicons(
    source: string | Buffer | string[],
    configuration?: Partial<Configuration>,
    callback?: Callback
): void;

export default favicons;
