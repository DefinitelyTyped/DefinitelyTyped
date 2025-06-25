/// <reference types="node" />

import type { ExifData } from "./exif-data";
import type { EXIF_TAGS } from "./tags";

interface ExifFile extends File {
    exifdata: ExifData.Data;
    iptcdata: object;
}

type getDataCallback = (this: ExifFile, title: string, message: string) => void;

interface ExifStatic {
    /**
     * Fills file with readable exifData
     *
     * @param file - could be item of files from input[type=file] or URL (by docs, not tested)
     * @param callback - function receiving file with exif tags
     */
    getData(file: string | ExifFile, callback: getDataCallback): void;

    /**
     * Returns value of exif tag
     *
     * @param file - could be item of files from input[type=file]
     * @param tag - name of exif tag
     */
    getTag(file: ExifFile, tag: EXIF_TAGS.ALL): any;

    /**
     * Returns all exif tags from file
     *
     * @param file - could be item of files from input[type=file]
     */
    getAllTags(file: ExifFile): ExifData.Data;

    /**
     * Returns JSON with exif tags from file
     *
     * @param file - could be item of files from input[type=file]
     */
    pretty(file: ExifFile): string;

    /**
     * Gets exif tags from binary file
     *
     * @param file - binary file which will be sent to new DataView(file)
     */
    readFromBinaryFile(file: ArrayBuffer /*| SharedArrayBuffer*/): ExifData.Data;
}

/**
 * Library for reading EXIF meta data from image files
 */
declare const EXIF: ExifStatic;

export default EXIF;

export { EXIF_TAGS, ExifData, ExifFile, ExifStatic, getDataCallback };
