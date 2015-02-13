interface PleaseColorOptions {
    hue?: number;
    saturation?: number;
    value?: number;
    base_color?: string;
    greyscale?: boolean;
    grayscale?: boolean;
    golden?: boolean;
    full_random?: boolean;
    colors_returned?: number;
    format?: string;
}
interface PleaseSchemeOptions {
    scheme_type?: string;
    format?: string;
}

interface Please {
    make_color(options?: PleaseColorOptions): any[];
    make_scheme(base_color?: string, options?: PleaseSchemeOptions): any[];
}

declare var Please: Please;

declare module 'pleasejs' {
    export = Please;
}