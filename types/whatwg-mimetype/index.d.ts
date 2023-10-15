// Type definitions for whatwg-mimetype 3.0
// Project: https://github.com/jsdom/whatwg-mimetype#readme
// Definitions by: Pete Johanson <https://github.com/petejohanson>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = MIMEType;

/**
 * This class will parse [MIME types](https://mimesniff.spec.whatwg.org/#understanding-mime-types) into a
 * structured format, which can then be manipulated and serialized.
 *
 * @example
 * import MIMEType = require("whatwg-mimetype");
 *
 * const mimeType = new MIMEType(`Text/HTML;Charset="utf-8"`);
 *
 * console.assert(mimeType.toString() === "text/html;charset=utf-8");
 *
 * console.assert(mimeType.type === "text");
 * console.assert(mimeType.subtype === "html");
 * console.assert(mimeType.essence === "text/html");
 * console.assert(mimeType.parameters.get("charset") === "utf-8");
 *
 * mimeType.parameters.set("charset", "windows-1252");
 * console.assert(mimeType.parameters.get("charset") === "windows-1252");
 * console.assert(mimeType.toString() === "text/html;charset=windows-1252");
 *
 * console.assert(mimeType.isHTML() === true);
 * console.assert(mimeType.isXML() === false);
 */
declare class MIMEType {
    /**
     * the MIME type's [type](https://mimesniff.spec.whatwg.org/#mime-type-type), e.g. `"text"`
     */
    type: string;
    /**
     * the MIME type's [subtype](https://mimesniff.spec.whatwg.org/#mime-type-subtype), e.g. `"html"`
     */
    subtype: string;

    /**
     * the MIME type's [essence](https://mimesniff.spec.whatwg.org/#mime-type-essence), e.g. `"text/html"`
     */
    readonly essence: string;
    /**
     * an instance of `MIMETypeParameters`, containing this MIME type's
     * [parameters](https://mimesniff.spec.whatwg.org/#mime-type-parameters)
     */
    readonly parameters: MIMEType.MIMETypeParameters;

    /**
     * As an alternative to the constructor, you can use `MIMEType.parse(string)`. The only difference
     * is that `parse()` will return `null` on failed parsing, whereas the constructor will throw.
     * It thus makes the most sense to use the constructor in cases where unparseable MIME types would
     * be exceptional, and use `parse()` when dealing with input from some unconstrained source.
     */
    static parse(s: string): MIMEType | null;

    /**
     * Attempts to parse the input into a MIME type; if parsing fails, an `Error` will be thrown.
     */
    constructor(s: string);

    /**
     * @returns `true` if this instance represents [a HTML MIME type](https://mimesniff.spec.whatwg.org/#html-mime-type)
     */
    isHTML(): boolean;
    /**
     * @returns `true` if this instance represents [an XML MIME type](https://mimesniff.spec.whatwg.org/#xml-mime-type)
     */
    isXML(): boolean;
    /**
     * @returns `true` if this instance represents
     * [a JavaScript MIME type](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type).
     *
     * @param opts.prohibitParameters can be set to `true` to disallow any parameters, i.e. to test if the
     * MIME type's serialization is a
     * [JavaScript MIME type essence match](https://mimesniff.spec.whatwg.org/#javascript-mime-type-essence-match).
     */
    isJavaScript(opts?: { prohibitParameters?: boolean | undefined }): boolean;
}

declare namespace MIMEType {
    /**
     * The `MIMETypeParameters` class, instances of which are returned by `mimeType.parameters`, has equivalent
     * surface API to a [JavaScript `Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
     *
     * However, `MIMETypeParameters` methods will always interpret their arguments as appropriate for MIME types,
     * so e.g. parameter names will be lowercased, and attempting to set invalid characters will throw.
     *
     * @example
     * import MIMEType = require("whatwg-mimetype");
     * const mimeType = new MIMEType(`x/x;a=b;c=D;E="F"`);
     *
     * // Logs:
     * // a b
     * // c D
     * // e F
     * for (const [name, value] of mimeType.parameters) {
     *   console.log(name, value);
     * }
     *
     * console.assert(mimeType.parameters.has("a"));
     * console.assert(mimeType.parameters.has("A"));
     * console.assert(mimeType.parameters.get("A") === "b");
     *
     * mimeType.parameters.set("Q", "X");
     * console.assert(mimeType.parameters.get("q") === "X");
     * console.assert(mimeType.toString() === "x/x;a=b;c=d;e=F;q=X");
     *
     * // Throws:
     * mimeType.parameters.set("@", "x");
     */
    interface MIMETypeParameters {
        readonly size: number;

        get(key: string): string | undefined;
        has(key: string): boolean;
        set(key: string, value: string): this;
        clear(): void;
        delete(key: string): boolean;
        forEach(callbackfn: (value: string, key: string, map: Map<string, string>) => void, thisArg?: any): void;
        keys(): IterableIterator<string>;
        values(): IterableIterator<string>;
        entries(): IterableIterator<[string, string]>;
        [Symbol.iterator](): IterableIterator<[string, string]>;
    }
}
