// Type definitions for serialize-javascript 5.0
// Project: https://github.com/yahoo/serialize-javascript
// Definitions by: François Nguyen <https://github.com/lith-light-g>
//                 Pochodaydayup <https://github.com/Pochodaydayup>
//                 undefined-moe <https://github.com/undefined-moe>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
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
        /**
         * This option is to signal serialize() that we want to do a straight conversion, without the XSS protection.
         * This options needs to be explicitly set to true. HTML characters and JavaScript line terminators will not be escaped.
         * You will have to roll your own.
         */
        unsafe?: true;
        /**
         * This option is to signal serialize() that we do not want serialize JavaScript function.
         * Just treat function like JSON.stringify do, but other features will work as expected.
         */
        ignoreFunction?: boolean;
    }
}

/**
 * Serialize JavaScript to a superset of JSON that includes regular expressions and functions.
 * @param input data to serialize
 * @param options optional object
 * @returns serialized data
 */
declare function serializeJavascript(
    input: any,
    options?: serializeJavascript.SerializeJSOptions | number | string,
): string;

export = serializeJavascript;
