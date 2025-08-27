/// <reference types="jquery" />

interface JQueryColorpickerOptions {
    // Events
    // TODO: Figure out actual types.
    cancel?: Function | undefined;
    close?: Function | undefined;
    init?: Function | undefined;
    select?: Function | undefined;
    ok?: Function | undefined;
    open?: Function | undefined;

    alpha?: boolean | undefined;
    altAlpha?: boolean | undefined;
    altField?: string | undefined;
    altOnChange?: boolean | undefined;
    altProperties?: string | undefined;
    autoOpen?: boolean | undefined;
    buttonClass?: string | undefined;
    buttonColorize?: boolean | undefined;
    buttonImage?: string | undefined;
    buttonImageOnly?: boolean | undefined;
    buttonText?: string | undefined;
    closeOnEscape?: boolean | undefined;
    closeOnOutside?: boolean | undefined;
    color?: string | undefined;
    colorFormat?: string | undefined;
    disabled?: boolean | undefined;
    draggable?: boolean | undefined;
    duration?: string | undefined;
    format?: string | undefined;
    horizontal?: boolean | undefined;
    hsv?: boolean | undefined;
    inline?: boolean | undefined;
    inlineFrame?: boolean | undefined;
    layout?: { [part: string]: number[] } | undefined;
    limit?: string | undefined;
    modal?: boolean | undefined;
    mode?: string | undefined;
    okOnEnter?: boolean | undefined;
    part?: any;
    parts?: any;
    regional?: string | undefined;
    revert?: boolean | undefined;
    rgb?: boolean | undefined;
    showAnim?: string | undefined;
    showCancelButton?: boolean | undefined;
    showCloseButton?: boolean | undefined;
    showNoneButton?: boolean | undefined;
    showOn?: string | undefined;
    showOptions?: any;
    swatches?: any;
    swatchesWidth?: number | undefined;
    title?: string | undefined;
}

interface JQueryColorpickerStatic {
    limits: { [name: string]: (color: any) => void };
    parsers: { [name: string]: (color: any) => any };
    parts: { [name: string]: (inst: any) => any };
    partslists: { [name: string]: string[] };
    regional: { [key: string]: string };
    swatches: { [swatch: string]: { [name: string]: JQueryColorpickerStatic.RGB } };
    writers: { [name: string]: (color: any, that: any) => any };
    Color: { new(r?: number, g?: number, b?: number, a?: number): JQueryColorpickerStatic.Color };
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
    colorpicker(method: string, ...params: any[]): JQuery;
    colorpicker(options?: JQueryColorpickerOptions): JQuery;
}
