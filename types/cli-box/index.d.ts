// Type definitions for cli-box 6.0
// Project: https://github.com/IonicaBizau/node-cli-box
// Definitions by: Kent Wong <https://github.com/athasach>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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

type MarksKeys = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'b';
type Marks = Record<MarksKeys, string>;

interface Options {
    w?: number;
    width?: number;
    h?: number;
    height?: number;
    fullscreen?: boolean;
    stringify?: boolean;
    marks?: Partial<Marks>;
}

interface Text {
    text?: string;
    stretch?: boolean;
    autoEOL?: boolean;
    hAlign?: 'left' | 'middle' | 'right';
    vAlign?: 'top' | 'center' | 'bottom';
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
            }
        }>
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
    (options: (Exclude<Options, 'stringify'> & { stringify: true }), text?: Text | string): string;
    (options: Options | string, text?: Text | string): Box;
    defaults: { marks: Marks };
}

declare const Box: BoxConstructor;
