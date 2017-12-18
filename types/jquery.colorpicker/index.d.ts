// Type definitions for jQuery Colorpicker Plugin 1.4.3
// Project: https://github.com/vanderlee/colorpicker
// Definitions by: Jeffery Grajkowski <https://github.com/pushplay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQueryColorpickerOptions {
    // Events
    // TODO: Figure out actual types.
    cancel?: Function,
    close?: Function,
    init?: Function,
    select?: Function,
    ok?: Function,
    open?: Function,

    alpha?: boolean;
    altAlpha?: boolean;
    altField?: string;
    altOnChange?: boolean;
    altProperties?: string;
    autoOpen?: boolean;
    buttonClass?: string;
    buttonColorize?: boolean;
    buttonImage?: string;
    buttonImageOnly?: boolean;
    buttonText?: string;
    closeOnEscape?: boolean;
    closeOnOutside?: boolean;
    color?: string;
    colorFormat?: string;
    draggable?: boolean;
    duration?: string;
    format?: string;
    horizontal?: boolean;
    hsv?: boolean;
    inline?: boolean;
    inlineFrame?: boolean;
    layout?: {[part: string]: number[];};
    limit?: string;
    modal?: boolean;
    mode?: string;
    okOnEnter?: boolean;
    part?: any;
    parts?: any;
    regional?: string;
    revert?: boolean;
    rgb?: boolean;
    showAnim?: string;
    showCancelButton?: boolean;
    showCloseButton?: boolean;
    showNoneButton?: boolean;
    showOn?: string;
    showOptions?: any;
    swatches?: any;
    swatchesWidth?: number;
    title?: string;
}

interface JQueryColorpickerStatic {
    limits: { [name: string]: (color: any) => void; };
    parsers: { [name: string]: (color: any) => any; };
    parts: { [name: string]: (inst: any) => any; };
    partslists: { [name: string]: string[]; };
    regional: { [key: string]: string; };
    swatches: { [swatch: string]: { [name: string]: JQueryColorpickerStatic.RGB; }; };
    writers: { [name: string]: (color: any, that: any) => any; };
    Color: { new (r?: number, g?: number, b?: number, a?: number): JQueryColorpickerStatic.Color; };
}

declare namespace JQueryColorpickerStatic {
    export interface CMYK {
        c: number;
        m: number;
        y: number;
        k: number;
    }
    export interface HSL {
        h: number;
        s: number;
        l: number;
    }
    export interface HSV {
        h: number;
        s: number;
        v: number;
    }
    export interface LAB {
        l: number;
        a: number;
        b: number;
    }
    export interface RGB {
        r: number;
        g: number;
        b: number;
    }
    export interface Color {
        set: boolean;
        copy(): Color;
        distance(color: Color): number;
        equals(color: Color): boolean;
        getAlpha(): number;
        getChannels(): {
            A: number;
            B: number;
            L: number;
            a: number;
            b: number;
            c: number;
            g: number;
            h: number;
            k: number;
            m: number;
            r: number;
            s: number;
            v: number;
            y: number;
        };
        getCMYK(): CMYK;
        getHSL(): HSL;
        getHSV(): HSV;
        getLAB(): LAB;
        getRGB(): RGB;
        getSpaces(): {
            cmyk: CMYK;
            hsl: HSL;
            hsv: HSV;
            lab: LAB;
            rgb: RGB;
        };
        limit(steps: number): void;
        normalize(): Color;
        setAlpha(a: number): Color;
        setCMYK(c: number, m: number, y: number, k: number): Color;
        setHSL(h: number, s: number, l: number): Color;
        setHSV(h: number, s: number, v: number): Color;
        setLAB(l: number, a: number, b: number): Color;
        setRGB(r: number, g: number, b: number): Color;
        setSpaces(new_spaces: any): Color;
        toCSS(): string;
        toHEX(): string;
    }
}

interface JQueryColorpickerInstance {
    close(): void;
    destroy(): void;
    open(): void;
    setColor(color: any): void;
}

interface JQueryStatic {
    colorpicker: JQueryColorpickerStatic;
}

interface JQuery {
    colorpicker(method: "close"): JQuery;
    colorpicker(method: "destroy"): JQuery;
    colorpicker(method: "open"): JQuery;
    colorpicker(method: string): JQuery;
    colorpicker(method: "setColor", color: any): JQuery;
    colorpicker(method: string, param: any): JQuery;
    colorpicker(options?: JQueryColorpickerOptions): JQuery;
}
