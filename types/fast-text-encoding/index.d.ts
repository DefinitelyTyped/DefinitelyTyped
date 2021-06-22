// Type definitions for fast-text-encoding 1.0
// Project: https://github.com/samthor/fast-text-encoding#readme
// Definitions by: Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * fast-text-encoding does not export any members, but defines the global classes
 * 1) TextDecoder (https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder)
 * 2) TextEncoder (https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder)
 * if they are not already defined.
 *
 * We do not declare these globals here since they are already declared in "lib.dom.d.ts" and would
 * result in name collisions. Instead, we export the types so that `TextDecoder` and `TextEncoder`
 * can be manually declared in a non-DOM environment (see tests).
 */

declare namespace fastTextEncoding {
    /**
     * Options for `TextDecoder.decode` and `TextEncoder.encode`.
     */
    interface TextEncodingOptions {
        stream: boolean;
    }

    /**
     * Options for TextDecoder constructor.
     */
    interface TextDecoderOptions {
        fatal: boolean;
    }

    /**
     * TextDecoder instance.
     */
    class TextDecoderClass {
        encoding: string;
        fatal: boolean;
        ignoreBOM: boolean;

        constructor(utfLabel?: string, options?: TextDecoderOptions);

        decode(buffer: Uint8Array, options?: TextEncodingOptions): string;
    }

    /**
     * TextEncoder instance.
     */
    class TextEncoderClass {
        encoding: string;

        constructor(label?: string);

        encode(string: string, options?: TextEncodingOptions): Uint8Array;
    }

    /**
     * TextDecoder class.
     */
    type TextDecoder = typeof TextDecoderClass;

    /**
     * TextEncoder class.
     */
    type TextEncoder = typeof TextEncoderClass;
}
