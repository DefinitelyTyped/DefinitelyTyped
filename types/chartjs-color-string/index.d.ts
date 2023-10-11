// Type definitions for chartjs-color-string 0.6
// Project: https://github.com/chartjs/chartjs-color-string#readme
// Definitions by: Ankan Bhattacharya <https://github.com/Ankan002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const colorString: colorString.ColorString;

declare namespace colorString {
    interface ColorString {
        getRgba(colorString?: string): number[] | undefined;
        getHsla(colorString?: string): number[] | undefined;
        getHwb(colorString?: string): number[] | undefined;
        getRgb(colorString?: string): number[] | undefined;
        getHsl(colorString?: string): number[] | undefined;
        getAlpha(colorString?: string): number | undefined;

        hexString(rgba: number[], a?: number): string;
        rgbString(rgba: number[], alpha?: number): string;
        rgbaString(rgba: number[], alpha?: number): string;
        percentString(rgba: number[], alpha?: number): string;
        percentaString(rgba: number[], alpha?: number): string;
        hslString(hsla: number[], alpha?: number): string;
        hslaString(hsla: number[], alpha?: number): string;
        hwbString(hwb: number[], alpha?: number): string;
        keyword(rgb: number[]): string;
    }
}

export = colorString;
