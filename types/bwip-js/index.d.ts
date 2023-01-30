// Type definitions for bwip-js  3.2.0
// Project: https://github.com/metafloor/bwip-js
// Definitions by: TANAKA Koichi <https://github.com/MugeSo>
//                 Guillaume VanderEst <https://github.com/gvanderest>
//                 Ryan Jentzsch <https://github.com/RyanNerd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage as Request, ServerResponse as Response } from 'http';

declare namespace BwipJs {
    export interface BwippOptions {
        includecheck?: boolean | undefined;
        includecheckintext?: boolean | undefined;

        parse?: boolean | undefined;
        parsefnc?: boolean | undefined;

        height?: number | undefined;
        width?: number | undefined;

        inkspread?: number | undefined;
        inkspreadh?: number | undefined;
        inkspreadv?: number | undefined;
        dotty?: boolean | undefined;

        includetext?: boolean | undefined;
        textfont?: string | undefined;
        textsize?: number | undefined;
        textgaps?: number | undefined;
        alttext?: string | undefined;

        textxalign?: 'offleft' | 'left' | 'center' | 'right' | 'offright' | 'justify' | undefined;
        textyalign?: 'below' | 'center' | 'above' | undefined;
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
    }
    export interface RenderOptions extends BwippOptions {
        bcid: string;
        text: string;

        scaleX?: number | undefined;
        scaleY?: number | undefined;
        scale?: number | undefined;

        rotate?: 'N' | 'R' | 'L' | 'I' | undefined;

        paddingwidth?: number | undefined;
        paddingheight?: number | undefined;

        paddingleft?: number | undefined;
        paddingright?: number | undefined;
        paddingtop?: number | undefined;
        paddingbottom?: number | undefined;

        monochrome?: boolean | undefined;

        sizelimit?: number | undefined;
    }
    export interface RawOptions extends BwippOptions {
        bcid: string;
        text: string;
    }
    export type ToBufferOptions = RenderOptions;
    export interface DrawingOption<T> {
        scale(sx: number, sy: number): [number, number];
        measure(
            str: string,
            font: string,
            fwidth: number,
            fheight: number,
        ): { width: number; ascent: number; descent: number };
        init(width: number, height: number): void;
        line(x0: number, y0: number, x1: number, y1: number, lw: number, rgb: string): void;
        polygon(pts: [number, number][]): void;
        hexagon(pts: [[number, number], [number, number], [number, number], [number, number], [number, number]]): void;
        ellipse(x: number, y: number, rx: number, ry: number, ccw: boolean): void;
        fill(rgb: string): void;
        text(
            x: number,
            y: number,
            str: string,
            rgb: string,
            font: { name: string; width: number; height: number; dx: number },
        ): void;
        end(): T;
    }
    export function loadFont(fontName: string, sizeMulti: number, fontFile: string): void;
    export function toBuffer(opts: RenderOptions, callback: (err: string | Error, png: Buffer) => void): void;
    export function toBuffer(opts: RenderOptions): Promise<Buffer>;
    export function toCanvas(canvas: string | HTMLCanvasElement, opts: RenderOptions): HTMLCanvasElement;
    export function toDataURL(
        opts: RenderOptions,
        callback: (err: string | Error, png: { width: number; height: number; uri: string }) => void,
    ): void;
    export function toDataURL(opts: RenderOptions): Promise<{ width: number; height: number; uri: string }>;
    export function fixupOptions(opts: RenderOptions): RenderOptions;
    export function loadFont(name: string, size: number, data: Uint8Array | string): void;
    export function render<T>(params: RenderOptions, drawing: DrawingOption<T>): T;
    export function raw(options: RawOptions): void;
    export function raw(bcid: string, text: string, opts: string): void;
    export function raw(bcid: string, text: string, opts?: BwippOptions): void;
    export function request(req: Request, res: Response, opts?: RenderOptions): void;
}

declare function BwipJs(req: Request, res: Response, opts?: BwipJs.RenderOptions): void;

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
