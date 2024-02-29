import tinycolor = require("tinycolor2");

declare namespace gradient {
    interface PositionedColorInput {
        color: tinycolor.ColorInput;
        pos: number;
    }

    interface Gradient {
        (message?: string, opt?: Options): string;
        multiline(message?: string, opt?: Options): string;
    }

    interface Options {
        interpolation?: string | undefined;
        hsvSpin?: string | undefined;
    }

    const atlas: Gradient;
    const cristal: Gradient;
    const teen: Gradient;
    const mind: Gradient;
    const morning: Gradient;
    const vice: Gradient;
    const passion: Gradient;
    const fruit: Gradient;
    const instagram: Gradient;
    const retro: Gradient;
    const summer: Gradient;
    const rainbow: Gradient;
    const pastel: Gradient;
}

declare function gradient(colors: tinycolor.ColorInput[] | gradient.PositionedColorInput[]): gradient.Gradient;
declare function gradient(...colors: tinycolor.ColorInput[]): gradient.Gradient;
declare function gradient(...colors: gradient.PositionedColorInput[]): gradient.Gradient;
export = gradient;
