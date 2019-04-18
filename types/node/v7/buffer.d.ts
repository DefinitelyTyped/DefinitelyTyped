/************************************************
*                                               *
*                   MODULES                     *
*                                               *
************************************************/
declare module "buffer" {
    export var INSPECT_MAX_BYTES: number;
    var BuffType: typeof Buffer;
    var SlowBuffType: typeof SlowBuffer;
    export type TranscodeEncoding = "ascii" | "utf8" | "utf16le" | "ucs2" | "latin1" | "binary";
    export function transcode(source: Buffer, fromEnc: TranscodeEncoding, toEnc: TranscodeEncoding): Buffer;
    export { BuffType as Buffer, SlowBuffType as SlowBuffer };
}
