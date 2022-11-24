// Type definitions for bwip-js  3.0.1
// Project: https://github.com/metafloor/bwip-js
// Definitions by: TANAKA Koichi <https://github.com/MugeSo>
//                 Guillaume VanderEst <https://github.com/gvanderest>
//                 Ryan Jentzsch <https://github.com/RyanNerd>
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

        parse?: boolean | undefined;
        parsefnc?: boolean | undefined;

        height?: number | undefined;
        width?: number | undefined;

        scaleX?: number | undefined;
        scaleY?: number | undefined;
        scale?: number | undefined;

        rotate?: "N" | "R" | "L" | "I" | undefined;

        paddingwidth?: number | undefined;
        paddingheight?: number | undefined;

        monochrome?: boolean | undefined;
        alttext?: string | undefined;

        includetext?: boolean | undefined;
        textfont?: string | undefined;
        textsize?: number | undefined;
        textgaps?: number | undefined;

        textxalign?: "offleft" | "left" | "center" | "right" | "offright" | "justify" | undefined;
        textyalign?: "below" | "center" | "above" | undefined;
        textxoffset?: number | undefined;
        textyoffset?: number | undefined;

        showborder?: boolean | undefined;
        borderwidth?: number | undefined;
        borderleft?: number | undefined;
        borderright?: number | undefined;
        bordertop?: number | undefined;
        boraderbottom?: number | undefined;

        barcolor?: string | undefined;
        backgroundcolor?: string | undefined;
        bordercolor?: string | undefined;
        textcolor?: string | undefined;

        addontextxoffset?: number | undefined;
        addontextyoffset?: number | undefined;
        addontextfont?: string | undefined;
        addontextsize?: number | undefined;

        guardwhitespace?: boolean | undefined;
        guardwidth?: number | undefined;
        guardheight?: number | undefined;
        guardleftpos?: number | undefined;
        guardrightpos?: number | undefined;
        guardleftypos?: number | undefined;
        guardrightypos?: number | undefined;

        sizelimit?: number | undefined;

        includecheck?: boolean | undefined;
        includecheckintext?: boolean | undefined;

        inkspread?: number | undefined;
        inkspreadh?: number | undefined;
        inkspreadv?: number | undefined;
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
