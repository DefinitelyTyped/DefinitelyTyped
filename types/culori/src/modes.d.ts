import { Color, FindColorByMode, Mode } from "./common";
import { ConvertFn } from "./converter.js";

import modeA98 from "./a98/definition";
import modeCubehelix from "./cubehelix/definition";
import modeDlab from "./dlab/definition";
import modeDlch from "./dlch/definition";
import modeHsi from "./hsi/definition";
import modeHsl from "./hsl/definition";
import modeHsv from "./hsv/definition";
import modeHwb from "./hwb/definition";
import modeJab from "./jab/definition";
import modeJch from "./jch/definition";
import modeLab from "./lab/definition";
import modeLab65 from "./lab65/definition";
import modeLch from "./lch/definition";
import modeLch65 from "./lch65/definition";
import modeLchuv from "./lchuv/definition";
import modeLrgb from "./lrgb/definition";
import modeLuv from "./luv/definition";
import modeOkhsl from "./okhsl/modeOkhsl";
import modeOkhsv from "./okhsv/modeOkhsv";
import modeOklab from "./oklab/definition";
import modeOklch from "./oklch/definition";
import modeP3 from "./p3/definition";
import modeProphoto from "./prophoto/definition";
import modeRec2020 from "./rec2020/definition";
import modeRgb from "./rgb/definition";
import modeXyz50 from "./xyz50/definition";
import modeXyz65 from "./xyz65/definition";
import modeYiq from "./yiq/definition";

type Converters = {
    [K1 in Mode]: {
        [K2 in Mode]: ((c: Omit<FindColorByMode<K1>, "mode">) => FindColorByMode<K2>) | undefined;
    };
};

declare const converters: Converters;

declare const parsers: Parser[];
declare const colorProfiles: Record<string, string>;

type Definition =
    | typeof modeA98
    | typeof modeCubehelix
    | typeof modeDlab
    | typeof modeDlch
    | typeof modeHsi
    | typeof modeHsl
    | typeof modeHsv
    | typeof modeHwb
    | typeof modeJab
    | typeof modeJch
    | typeof modeLab
    | typeof modeLab65
    | typeof modeLch
    | typeof modeLch65
    | typeof modeLchuv
    | typeof modeLrgb
    | typeof modeLuv
    | typeof modeOkhsl
    | typeof modeOkhsv
    | typeof modeOklab
    | typeof modeOklch
    | typeof modeP3
    | typeof modeProphoto
    | typeof modeRec2020
    | typeof modeRgb
    | typeof modeXyz50
    | typeof modeXyz65
    | typeof modeYiq;

type FindDefinitionByMode<M extends Mode, D extends Definition = Definition> = D extends { mode: M } ? D : never;

declare function useMode<D extends Definition>(_definition: D): ConvertFn<D["mode"]>;

declare function getMode<M extends Mode>(mode: M): FindDefinitionByMode<M>;

type Parser = string | ((c: string) => Color);

declare function useParser(_parser: Parser): undefined;

declare function removeParser(_parser: Parser): undefined;

export { colorProfiles, converters, getMode, parsers, removeParser, useMode, useParser };
