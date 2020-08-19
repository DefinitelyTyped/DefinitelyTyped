// Type definitions for tiff-to-png 2.0
// Project: https://github.com/RickCraig/node-tiff-to-png
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class TiffConverter {
    constructor(options?: TiffConverter.Options);

    static call(command: string): Promise<true>;

    static createDir(target: string, filename: string): Promise<void>;

    static count(
        converted: { [key: string]: unknown } | Array<{ [key: string]: unknown }>,
        key: string,
        value: unknown,
    ): number;

    /** @default '' */
    location: string;

    /** @default {} */
    options: TiffConverter.Options;

    progress: TiffConverter.ProgressCallback;

    complete: TiffConverter.CompleteCallback;

    convert(tiff: string, isArray: boolean, location: string): Promise<TiffConverter.SingleConvertResult>;

    convertOne(tiff: string, location: string): Promise<TiffConverter.ConvertResult>;

    convertArray(tiffs: string[], location: string): Promise<TiffConverter.ConvertResult>;

    removePaths(): Promise<void>;

    unlink(file: string): Promise<void>;

    onComplete(
        error: Error[],
        converted: TiffConverter.Converted | TiffConverter.Converted[],
        total: number,
    ): Promise<void>;
}

declare namespace TiffConverter {
    /**
     * The complete callback will be called when the conversion of the final TIFF has finished.
     */
    interface ProgressCallback {
        /**
         * @param converted - An array of objects that contain the original path, the target path and whether the conversion is a success or not
         * @param total - The total number of requested conversions.
         */
        (converted: Converted[], total: number): void;
    }

    /**
     * The complete callback will be called when the conversion of the final TIFF has finished.
     */
    interface CompleteCallback {
        /**
         * @param errors - An array of strings with the error returned by Imagemagick on fail
         * @param [total] - The total number of requested conversions
         */
        (errors: string[], total?: number): void;
    }

    interface Options {
        page?: 'A4' | 'A3';

        /**
         * The file type of the converted files
         * @default 'png'
         */
        type?: 'png' | 'jpg';

        /**
         * The level of the logs required. 0: Errors only, 1: Information
         * @default 0
         */
        logLevel?: number;

        /**
         * Automatically removes all files from tmpPath prefixed with magick-*, this happens on process completion
         * @default false
         */
        autoRemoveTmp?: boolean;

        /**
         * The image scene number
         * @default null
         */
        scene?: 1 | 2;

        /**
         * The string that will be prepended to the file names of the pages converted. E.g. 'page': `page1.png`
         * @default 'page'
         */
        prefix?: string;

        /**
         * The string that will be appended onto the end of the file names of the page converted. E.g. '_invoices': page1_invoices.png
         * @default ''
         */
        suffix?: string;

        /**
         * Overwrites the Imagemagick default tmp directory path
         * @default null
         */
        tmpPath?: string;

        saveFolder?: string;

        /**
         * Allows the specification of the command path for use with binaries or aliased convert commands
         * @default null
         */
        commandPath?: string;
    }

    interface Converted {
        readonly tiff: string;
        readonly target: string;
        readonly success: boolean;
        readonly filename: string;
    }

    interface TiffConverterError {
        readonly tiff: string;
        readonly target: string;
        readonly filename: string;
        error: Error;
    }

    interface SingleConvertResult {
        readonly converted: Converted;
        readonly error: TiffConverterError;
    }

    interface ConvertResult {
        readonly errors: TiffConverterError[];
        readonly converted: Converted[];
        readonly total: number;
    }
}

export = TiffConverter;
