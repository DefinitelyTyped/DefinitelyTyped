// Type definitions for randomColor 0.5.2
// Project: https://github.com/davidmerfield/randomColor
// Definitions by: Mathias Feitzinger <https://github.com/feitzi>, Brady Liles <https://github.com/BradyLiles>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
