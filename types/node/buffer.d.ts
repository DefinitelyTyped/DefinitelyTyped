declare module "buffer" {
    export const INSPECT_MAX_BYTES: number;
    const BuffType: typeof Buffer;

    export function transcode(
        source: Buffer | Uint8Array,
        fromEnc: "ascii" | "utf8" | "utf16le" | "ucs2" | "latin1" | "binary",
        toEnc: "ascii" | "utf8" | "utf16le" | "ucs2" | "latin1" | "binary"): Buffer;

    export const SlowBuffer: {
        /** @deprecated since v6.0.0, use Buffer.allocUnsafeSlow() */
        new(size: number): Buffer;
        prototype: Buffer;
    };

    export { BuffType as Buffer };
}
