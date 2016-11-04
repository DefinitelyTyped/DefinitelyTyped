// Type definitions for bwip-js 1.1.1
// Project: https://github.com/metafloor/bwip-js
// Definitions by: TANAKA Koichi <https://github.com/MugeSo/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'bwip-js' {
    import {IncomingMessage as Request, ServerResponse as Response} from 'http';

    module BwipJs {
        export function loadFont(fontName:string, sizeMulti: number, fontFile: string): void;
        export function toBuffer(opts: ToBufferOptions, callback:(err: string|Error, png: Buffer) => void): void;
        interface ToBufferOptions {
            bcid: string;
            text: string;

            parse?: boolean;
            parsefunc?: boolean;

            height?: number;
            width?: number;

            scaleX?: number;
            scaleY?: number;
            scale?: number;

            rotate?: 'N'|'R'|'L'|'I';

            paddingwidth?: number;
            paddingheight?: number;

            monochrome?: boolean;
            alttext?: boolean;

            includetext?: boolean;
            textfont?: string;
            textsize?: number;
            textgaps?: number;

            textxalign?:'offleft'|'left'|'center'|'right'|'offright'|'justify';
            textyalign?:'below'|'center'|'above';
            textxoffset?: number;
            textyoffset?: number;

            showborder?: boolean;
            borderwidth?: number;
            borderleft?: number;
            borderright?: number;
            bordertop?: number;
            boraderbottom?: number;

            barcolor?: string;
            backgroundcolor?: string;
            bordercolor?: string;
            textcolor?: string;

            addontextxoffset?: number;
            addontextyoffset?: number;
            addontextfont?: string;
            addontextsize?: number;

            guardwhitespace?: boolean;
            guardwidth?: number;
            guardheight?: number;
            guardleftpos?: number;
            guardrightpos?: number;
            guardleftypos?: number;
            guardrightypos?: number;

            sizelimit?: number;

            includecheck?: boolean;
            includecheckintext?: boolean;

            inkspread?: number;
            inkspreadh?: number;
            inkspreadv?: number;
        }
    }


    function BwipJs(req: Request, res: Response, opts?:BwipJs.ToBufferOptions): void;

    export = BwipJs;
}
