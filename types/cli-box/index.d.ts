/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export = Box;

type MarksKeys = "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "b";
type Marks = Record<MarksKeys, string>;

interface Options {
    w?: number | undefined;
    width?: number | undefined;
    h?: number | undefined;
    height?: number | undefined;
    fullscreen?: boolean | undefined;
    stringify?: boolean | undefined;
    marks?: Partial<Marks> | undefined;
}

interface Text {
    text?: string | undefined;
    stretch?: boolean | undefined;
    autoEOL?: boolean | undefined;
    hAlign?: "left" | "middle" | "right" | undefined;
    vAlign?: "top" | "center" | "bottom" | undefined;
}

interface Box {
    stringify(): string;
    settings: {
        width: number;
        height: number;
        marks: Marks;
        lines: Array<{
            text: string;
            offset: {
                y: number;
            };
        }>;
    };
    options: {
        width: number;
        height: number;
        marks: Marks;
        fullscreen: boolean;
        stringify: boolean;
    };
}

interface BoxConstructor {
    new(options: Options | string, text?: Text | string): Box;
    (options: Exclude<Options, "stringify"> & { stringify: true }, text?: Text | string): string;
    (options: Options | string, text?: Text | string): Box;
    defaults: { marks: Marks };
}

declare const Box: BoxConstructor;
