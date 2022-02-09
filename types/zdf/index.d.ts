// Type definitions for zdf 1.2
// Project: https://github.com/MauriceConrad/zdf-mediathek#readme
// Definitions by: Christian Koop <https://github.com/SpraxDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ZdfInfoMeta {
    readonly title: string;
    readonly teasertext: string;
    readonly preview: string;
}

export interface ZdfInfo {
    readonly info: ZdfInfoMeta;

    readonly files: Array<{ uri: string, quality: string }>;
    readonly stream: string[];
}

export interface ZdfProgress {
    readonly parts: number;
    readonly all: number;
    readonly length: number;
    readonly total: number;
    readonly time: number;
}

/**
 * Fetches show info, mp4 files and a list of all ts-files for a given show
 *
 * @param url The show URL (without https://) from https://www.zdf.de
 * @param handle Called when the data has been fetched
 * @param handleInfo Called when the data has been fetched (only contains the show info)
 */
export function getSources(
    url: string,
    handle: (result: ZdfInfo) => void,
    handleInfo?: (result: ZdfInfoMeta) => void
): void;

/**
 * Downloads all HD streams and merges them into one file.
 * If provided with an URL, it calls `#getSources` to fetch the required data itself.
 *
 * @param url The show URL (without https://) from https://www.zdf.de (May only be undefined if `streamInfo` is provided)
 * @param output The path to be used for the finished file (Default: `__dirname + '/output.ts'`)
 * @param handle Called every time one of the streams has been downloaded (Download is done when `progress.parts == progress.all`
 * @param streamInfo Can be used instead of an URL if you e.g. already called `#getSources`
 */
export function downloadStream(
    url: string | undefined,
    output: string | undefined,
    handle: (progress: ZdfProgress) => void,
    streamInfo?: ZdfInfo
): void;
