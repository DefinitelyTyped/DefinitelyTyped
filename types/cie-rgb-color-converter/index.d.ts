interface ColorPoint {
    x: number;
    y: number;
}

interface ColorGamut {
    red: [number, number];
    green: [number, number];
    blue: [number, number];
}

interface RGBColor {
    r: number;
    g: number;
    b: number;
}

declare class ColorConverter {
    static getGamutRanges(): {
        gamutA: ColorGamut;
        gamutB: ColorGamut;
        gamutC: ColorGamut;
        default: ColorGamut;
    };

    static getLightColorGamutRange(modelId?: string | null): ColorGamut;

    static rgbToXy(red: number, green: number, blue: number, modelId?: string | null): ColorPoint;

    static xyIsInGamutRange(xy: ColorPoint | [number, number], gamut?: ColorGamut): boolean;

    static getClosestColor(xy: ColorPoint, gamut: ColorGamut): ColorPoint;

    static xyBriToRgb(x: number, y: number, bri: number): RGBColor;
}

export = ColorConverter;
