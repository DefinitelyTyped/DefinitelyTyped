// Type definitions for mmmagic v0.4.1
// Project: https://github.com/mscdex/mmmagic
// Definitions by: Andrei Sebastian Cîmpean <http://andreime.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * callback for detect() and detectFile()
 * Result is a string, except when MAGIC_CONTINUE is set,
 * then it is an array of string
 */
type DetectionCallback = ((err: Error, result: string | string[]) => void)

export type bitmask = number;
export declare class Magic {
    constructor(magicPath?: string, mask?: bitmask);
    constructor(mask?: bitmask);
    detectFile(path: string, callback: DetectionCallback): void;
    detect(data: Buffer, callback: DetectionCallback): void;
}
export declare var MAGIC_NONE: bitmask; // no flags set
export declare var MAGIC_DEBUG: bitmask; // turn on debugging
export declare var MAGIC_SYMLINK: bitmask; // follow symlinks (default for non-Windows)
export declare var MAGIC_DEVICES: bitmask; // look at the contents of devices
export declare var MAGIC_MIME_TYPE: bitmask; // return the MIME type
export declare var MAGIC_CONTINUE: bitmask; // return all matches (returned as an array of strings)
export declare var MAGIC_CHECK: bitmask; // print warnings to stderr
export declare var MAGIC_PRESERVE_ATIME: bitmask; // restore access time on exit
export declare var MAGIC_RAW: bitmask; // don't translate unprintable chars
export declare var MAGIC_MIME_ENCODING: bitmask; // return the MIME encoding
export declare var MAGIC_MIME: bitmask; // (export var MAGIC_MIME_TYPE | export var MAGIC_MIME_ENCODING)
export declare var MAGIC_APPLE: bitmask; // return the Apple creator and type
export declare var MAGIC_NO_CHECK_TAR: bitmask; // don't check for tar files
export declare var MAGIC_NO_CHECK_SOFT: bitmask; // don't check magic entries
export declare var MAGIC_NO_CHECK_APPTYPE: bitmask; // don't check application type
export declare var MAGIC_NO_CHECK_ELF: bitmask; // don't check for elf details
export declare var MAGIC_NO_CHECK_TEXT: bitmask; // don't check for text files
export declare var MAGIC_NO_CHECK_CDF: bitmask; // don't check for cdf files
export declare var MAGIC_NO_CHECK_TOKENS: bitmask; // don't check tokens
export declare var MAGIC_NO_CHECK_ENCODING: bitmask
