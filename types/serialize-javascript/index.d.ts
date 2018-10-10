// Type definitions for serialize-javascript 1.3
// Project: https://github.com/yahoo/serialize-javascript
// Definitions by: François Nguyen <https://github.com/lith-light-g>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace serializeJavascript {
    interface SerializeJSOptions {
        /**
         * This option is the same as the space argument that can be passed to JSON.stringify.
         * It can be used to add whitespace and indentation to the serialized output to make it more readable.
         */
        space?: string | number;
        /**
         * This option is a signal to serialize() that the object being serialized does not contain any function or regexps values.
         * This enables a hot-path that allows serialization to be over 3x faster.
         * If you're serializing a lot of data, and know its pure JSON, then you can enable this option for a speed-up.
         */
        isJSON?: boolean;
    }
}

/**
 * Serialize JavaScript to a superset of JSON that includes regular expressions and functions.
 * @param input data to serialize
 * @param options optional object
 * @returns serialized data
 */
declare function serializeJavascript(input: any, options?: serializeJavascript.SerializeJSOptions): string;
export = serializeJavascript;
