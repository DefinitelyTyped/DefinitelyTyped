// Type definitions for bwip-js  2.1.1
// Project: https://github.com/metafloor/bwip-js
// Definitions by: TANAKA Koichi <https://github.com/MugeSo>
//                 Guillaume VanderEst <https://github.com/gvanderest>
//                 Ryan Jentzsch <http://github.com/RyanNerd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage as Request, ServerResponse as Response } from "http";

declare namespace BwipJs {
    export function loadFont(fontName: string, sizeMulti: number, fontFile: string): void;
    export function toBuffer(opts: ToBufferOptions, callback: (err: string | Error, png: Buffer) => void): void;
    export function toBuffer(opts: ToBufferOptions): Promise<Buffer>;
    export function toCanvas(canvas: string | HTMLCanvasElement, opts: ToBufferOptions): HTMLCanvasElement;
    interface ToBufferOptions {
        bcid: string;
        text: string;

        parse?: boolean;
        parsefnc?: boolean;

        height?: number;
        width?: number;

        scaleX?: number;
        scaleY?: number;
        scale?: number;

        rotate?: "N" | "R" | "L" | "I";

        paddingwidth?: number;
        paddingheight?: number;

        monochrome?: boolean;
        alttext?: boolean;

        includetext?: boolean;
        textfont?: string;
        textsize?: number;
        textgaps?: number;

        textxalign?: "offleft" | "left" | "center" | "right" | "offright" | "justify";
        textyalign?: "below" | "center" | "above";
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

declare function BwipJs(req: Request, res: Response, opts?: BwipJs.ToBufferOptions): void;

/**
 * The Browser version of the library's functionality, which makes use of an HTMLCanvasElement for rendering.
 * @param canvas ID string or HTML element of the canvas to render within
 * @param opts Options to use for rendering
 * @param callback Function to execute when rendering has completed or failed
 */
declare function BwipJs(
    canvas: string | HTMLCanvasElement,
    opts: BwipJs.ToBufferOptions,
    callback: (err: undefined | string | Error, canvas?: HTMLCanvasElement) => void,
): void;

export = BwipJs;
