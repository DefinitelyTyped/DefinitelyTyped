declare function randomColor(options?: RandomColorOptionsSingle): string;
declare function randomColor(options?: RandomColorOptionsMultiple): string[];

interface RandomColorOptionsSingle {
    hue?: number | string | undefined;
    luminosity?: "bright" | "light" | "dark" | "random" | undefined;
    seed?: number | string | undefined;
    format?: "hsvArray" | "hslArray" | "hsl" | "hsla" | "rgbArray" | "rgb" | "rgba" | "hex" | undefined;
    alpha?: number | undefined;
}

interface RandomColorOptionsMultiple extends RandomColorOptionsSingle {
    count: number;
}

export = randomColor;
export as namespace randomColor;
