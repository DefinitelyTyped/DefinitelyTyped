import { Color, FindColorByMode, Mode } from "./common.js";
import { ConvertFn } from "./converter.js";

import modeA98 from "./a98/definition.js";
import modeCubehelix from "./cubehelix/definition.js";
import modeDlab from "./dlab/definition.js";
import modeDlch from "./dlch/definition.js";
import modeHsi from "./hsi/definition.js";
import modeHsl from "./hsl/definition.js";
import modeHsv from "./hsv/definition.js";
import modeHwb from "./hwb/definition.js";
import modeItp from "./itp/definition.js";
import modeJab from "./jab/definition.js";
import modeJch from "./jch/definition.js";
import modeLab from "./lab/definition.js";
import modeLab65 from "./lab65/definition.js";
import modeLch from "./lch/definition.js";
import modeLch65 from "./lch65/definition.js";
import modeLchuv from "./lchuv/definition.js";
import modeLrgb from "./lrgb/definition.js";
import modeLuv from "./luv/definition.js";
import modeOkhsl from "./okhsl/modeOkhsl.js";
import modeOkhsv from "./okhsv/modeOkhsv.js";
import modeOklab from "./oklab/definition.js";
import modeOklch from "./oklch/definition.js";
import modeP3 from "./p3/definition.js";
import modeProphoto from "./prophoto/definition.js";
import modeRec2020 from "./rec2020/definition.js";
import modeRgb from "./rgb/definition.js";
import modeXyb from "./xyb/definition.js";
import modeXyz50 from "./xyz50/definition.js";
import modeXyz65 from "./xyz65/definition.js";
import modeYiq from "./yiq/definition.js";

type Converters = {
    [K1 in Mode]: {
        [K2 in Mode]: ((c: Omit<FindColorByMode<K1>, "mode">) => FindColorByMode<K2>) | undefined;
    };
};

declare const converters: Converters;

declare const parsers: (string | ParserFn)[];
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
    | typeof modeItp
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
    | typeof modeXyb
    | typeof modeXyz50
    | typeof modeXyz65
    | typeof modeYiq;

type FindDefinitionByMode<M extends Mode, D extends Definition = Definition> = D extends { mode: M } ? D : never;

declare function useMode<D extends Definition>(_definition: D): ConvertFn<D["mode"]>;

declare function getMode<M extends Mode>(mode: M): FindDefinitionByMode<M>;

type ParserFn = (c: string) => Color;

declare function useParser(_parser: string, mode: Mode): undefined;
declare function useParser(_parser: ParserFn, mode?: Mode): undefined;

declare function removeParser(_parser: string | ParserFn): undefined;

export { colorProfiles, converters, getMode, parsers, removeParser, useMode, useParser };
