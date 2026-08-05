/*
 * Custom entities exposed in the global environment.
 *
 * The global environment changes with execution context. Some items are
 * available only in the init context, others only during VU logic execution,
 * others in both contexts. Comments note availability.
 */

export {};

// Available without importing
declare global {
    // === Init context only ===
    // -------------------------

    /**
     * Opens a file, reading all its contents into memory.
     * https://grafana.com/docs/k6/latest/javascript-api/init-context/open/
     * @param filePath - Path to file.
     * @returns File contents decoded as UTF-8.
     * @example
     * let binFile = open('/path/to/file.bin', 'b');
     * export default function () {
     * var data = {
     *    field: 'this is a standard form field',
     *    file: http.file(binFile, 'test.bin'),
     *  };
     *  const res = http.post('https://example.com/upload', data);
     *  sleep(3);
     * }
     */
    function open(filePath: string): string;

    /**
     * Opens a file, reading all its contents into memory.
     * https://grafana.com/docs/k6/latest/javascript-api/init-context/open/
     * @param filePath - Path to file.
     * @returns Binary file contents.
     * @example
     * let binFile = open('/path/to/file.bin', 'b');
     * export default function () {
     * var data = {
     *    field: 'this is a standard form field',
     *    file: http.file(binFile, 'test.bin'),
     *  };
     *  const res = http.post('https://example.com/upload', data);
     *  sleep(3);
     * }
     */
    function open(filePath: string, mode: "b"): ArrayBuffer;

    // === Init context and VU logic ===
    // ---------------------------------

    /** Options for the TextDecoder.decode() method. */
    interface TextDecodeOptions {
        /** Whether additional data will follow in subsequent calls to decode(). */
        stream?: boolean;
    }

    /** Options for the TextDecoder constructor. */
    interface TextDecoderOptions {
        /** Whether decode() throws a TypeError when the input contains invalid data. */
        fatal?: boolean;
        /** Whether the decoder treats a byte order mark as part of the text. */
        ignoreBOM?: boolean;
    }

    /**
     * Decodes UTF-8 or UTF-16 encoded bytes into a string.
     * https://grafana.com/docs/k6/latest/javascript-api/text-encoding/
     */
    interface TextDecoder {
        /** The canonical name of the decoder's encoding. */
        readonly encoding: string;
        /** Whether invalid encoded data causes decode() to throw a TypeError. */
        readonly fatal: boolean;
        /** Whether the decoder treats a byte order mark as part of the text. */
        readonly ignoreBOM: boolean;
        /** Decodes an ArrayBuffer, typed array, or DataView into a string. */
        decode(input?: ArrayBuffer | ArrayBufferView, options?: TextDecodeOptions): string;
    }

    var TextDecoder: {
        prototype: TextDecoder;
        new(label?: string, options?: TextDecoderOptions): TextDecoder;
    };

    /**
     * Encodes strings as UTF-8 bytes.
     * https://grafana.com/docs/k6/latest/javascript-api/text-encoding/
     */
    interface TextEncoder {
        /** The encoder's encoding, which is always "utf-8". */
        readonly encoding: string;
        /** Encodes a string as UTF-8 bytes. */
        encode(input?: string): Uint8Array;
    }

    var TextEncoder: {
        prototype: TextEncoder;
        new(): TextEncoder;
    };

    /**
     * Environment variables.
     * https://grafana.com/docs/k6/latest/using-k6/environment-variables/
     */
    var __ENV: { [name: string]: string };

    // === VU logic only ===
    // ---------------------

    /**
     * Current VU number.
     * https://grafana.com/docs/k6/latest/using-k6/execution-context-variables/
     */
    var __VU: number;

    /**
     * Current iteration number.
     * https://grafana.com/docs/k6/latest/using-k6/execution-context-variables/
     */
    var __ITER: number;

    interface ImportMeta {
        /**
         * Resolve a path to a URL string in the same way an import statement does.
         * https://grafana.com/docs/k6/latest/javascript-api/import.meta/resolve/
         */
        resolve(specifier: string): string;
    }
}
