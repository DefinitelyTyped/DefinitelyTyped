// Type definitions for PleaseJS
// Project: https://github.com/Fooidge/PleaseJS
// Definitions by: Toshiya Nakakura <https://github.com/nakakura>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var Please: PleaseJS.Please;

declare namespace PleaseJS{
    export interface Please{
        /***
         * generate and return a random hex string
         * @param {MakeColorOption} options
         * @returns {Array}
         */
        make_color(options?: MakeColorOption): Array<string | RGB | HSV>;

        /***
         * make a color scheme
         * @param {MakeSchemeOption} options
         * @returns {Array}
         */
        make_scheme(base_color: HSV, options?: MakeSchemeOption): Array<string | RGB | HSV>;

        /***
         * convert color name into hex string
         * @param {string} name
         * @returns {string}
         */
        NAME_to_HEX(name: string): string | undefined;

        /***
         * convert color name into RGB
         * @param {string} name
         * @returns {RGB}
         */
        NAME_to_RGB(name: string): RGB | null;

        /***
         * convert color name into RGB
         * @param {string} name
         * @returns {HSV}
         */
        NAME_to_HSV(name: string): HSV;

        /***
         * convert HEX into RGB
         * @param {string} hex
         * @returns {RGB}
         */
        HEX_to_RGB(hex: string): RGB | null;

        /***
         * convert RGB into HEX
         * @param {RGB} rgb
         * @returns {string}
         */
        RGB_to_HEX(rgb: RGB): string;

        /***
         * convert HSV into RGB
         * @param {HSV} hsv
         * @returns {RGB}
         */
        HSV_to_RGB(hsv: HSV): RGB;

        /***
         * convert RGB into HSV
         * @param {RGB} rgb
         * @returns {HSV}
         */
        RGB_to_HSV(rgb: RGB): HSV;

        /***
         * convert HSV into HEX
         * @param {HSV} hsv
         * @returns {string}
         */
        HSV_to_HEX(hsv: HSV): string;

        /***
         * convert HEX into HSV
         * @param {string} hex
         * @returns {HSV}
         */
        HEX_to_HSV(hex: string): HSV;
    }

    export interface MakeColorOption{
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

    export interface MakeSchemeOption{
        scheme_type: string;
        format: string;
    }

    export interface RGB{
        r: number;
        g: number;
        b: number;
    }

    export interface HSV{
        h: number;
        s: number;
        v: number;
    }
}
