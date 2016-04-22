// Type definitions for mmmagic v0.4.1
// Project: https://github.com/mscdex/mmmagic
// Definitions by: Andrei Sebastian Cîmpean <http://andreime.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />


export type bitmask = number;
declare export class Magic {
    constructor(magicPath?: string, mask?: bitmask);
    constructor(mask?: bitmask);
    detectFile(path: string, callback: (err: Error, result: string) => void): void;
    detect(data: Buffer, callback: (err: Error, result: string) => void): void;
}
declare export var MAGIC_NONE: bitmask; // no flags set
declare export var MAGIC_DEBUG: bitmask; // turn on debugging
declare export var MAGIC_SYMLINK: bitmask; // follow symlinks (default for non-Windows)
declare export var MAGIC_DEVICES: bitmask; // look at the contents of devices
declare export var MAGIC_MIME_TYPE: bitmask; // return the MIME type
declare export var MAGIC_CONTINUE: bitmask; // return all matches (returned as an array of strings)
declare export var MAGIC_CHECK: bitmask; // print warnings to stderr
declare export var MAGIC_PRESERVE_ATIME: bitmask; // restore access time on exit
declare export var MAGIC_RAW: bitmask; // don't translate unprintable chars
declare export var MAGIC_MIME_ENCODING: bitmask; // return the MIME encoding
declare export var MAGIC_MIME: bitmask; // (export var MAGIC_MIME_TYPE | export var MAGIC_MIME_ENCODING)
declare export var MAGIC_APPLE: bitmask; // return the Apple creator and type
declare export var MAGIC_NO_CHECK_TAR: bitmask; // don't check for tar files
declare export var MAGIC_NO_CHECK_SOFT: bitmask; // don't check magic entries
declare export var MAGIC_NO_CHECK_APPTYPE: bitmask; // don't check application type
declare export var MAGIC_NO_CHECK_ELF: bitmask; // don't check for elf details
declare export var MAGIC_NO_CHECK_TEXT: bitmask; // don't check for text files
declare export var MAGIC_NO_CHECK_CDF: bitmask; // don't check for cdf files
declare export var MAGIC_NO_CHECK_TOKENS: bitmask; // don't check tokens
declare export var MAGIC_NO_CHECK_ENCODING: bitmask
