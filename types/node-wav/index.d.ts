/// <reference types="node" />

/**
 * Decodes a {@link Buffer} containing a WAVE file into raw sample data.
 * @param buffer The {@link Buffer} containing a WAVE file to decode.
 * @return The decoded WAVE file.
 */
export function decode(buffer: Buffer): {
    /**
     * The sample rate of the decoded WAVE file, in Hertz.
     */
    readonly sampleRate: number;

    /**
     * The raw sample data.
     * When mono, this will be a single {@link Float32Array}.
     * When stereo, this will be two {@link Float32Array}s of equal length.
     */
    readonly channelData: ReadonlyArray<Float32Array>;
};

/**
 * Encodes raw sample data into a {@link Buffer} containing the corresponding WAVE file.
 * @param channelData The raw sample data to encode.  Each {@link ArrayBuffer} must be of equal length.  One {@link ArrayBuffer} represents mono, while two {@link ArrayBuffer}s represent stereo.
 * @param opts Options regarding the WAVE file to encode.
 * @return The encoded {@link Buffer}.
 */
export function encode(
    channelData: ReadonlyArray<ArrayBuffer>,
    opts: {
        /**
         * The sample rate of the given {@link channelData}.
         * Defaults to 16000 when not given.
         */
        readonly sampleRate?: number;

        /**
         * When true, the WAVE file is encoded in floating point.
         * It is otherwise encoded in fixed point.
         * An alias of {@link floatingPoint}.
         */
        readonly float?: boolean;

        /**
         * When true, the WAVE file is encoded in floating point.
         * It is otherwise encoded in fixed point.
         * An alias of {@link float}.
         */
        readonly floatingPoint?: boolean;

        /**
         * The bit depth of the WAVE file to encode.
         * This is ignored in floating point mode; floating point WAVE files are always 32-bit.
         * Otherwise defaults to 16.
         */
        readonly bitDepth?: number;
    },
): Buffer;
