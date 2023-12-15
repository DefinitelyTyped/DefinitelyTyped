import modeA98 from "./src/a98/definition";
import { ConvertFn } from "./src/converter";
import modeCubehelix from "./src/cubehelix/definition";
import modeDlab from "./src/dlab/definition";
import modeDlch from "./src/dlch/definition";
import modeHsi from "./src/hsi/definition";
import modeHsl from "./src/hsl/definition";
import modeHsv from "./src/hsv/definition";
import modeHwb from "./src/hwb/definition";
import modeJab from "./src/jab/definition";
import modeJch from "./src/jch/definition";
import modeLab from "./src/lab/definition";
import modeLab65 from "./src/lab65/definition";
import modeLch from "./src/lch/definition";
import modeLch65 from "./src/lch65/definition";
import modeLchuv from "./src/lchuv/definition";
import modeLrgb from "./src/lrgb/definition";
import modeLuv from "./src/luv/definition";
import { useMode } from "./src/modes";
import modeOkhsl from "./src/okhsl/modeOkhsl";
import modeOkhsv from "./src/okhsv/modeOkhsv";
import modeOklab from "./src/oklab/definition";
import modeOklch from "./src/oklch/definition";
import modeP3 from "./src/p3/definition";
import modeProphoto from "./src/prophoto/definition";
import modeRec2020 from "./src/rec2020/definition";
import modeRgb from "./src/rgb/definition";
import modeXyz50 from "./src/xyz50/definition";
import modeXyz65 from "./src/xyz65/definition";
import modeYiq from "./src/yiq/definition";

export { default as converter } from "./src/converter";

export {
    formatCss,
    formatHex,
    formatHex8,
    formatHsl,
    formatRgb,
    serializeHex,
    serializeHex8,
    serializeHsl,
    serializeRgb,
} from "./src/formatter";

export { default as blend } from "./src/blend";
export { default as colorsNamed } from "./src/colors/named";
export { default as random } from "./src/random";

export { fixupHueDecreasing, fixupHueIncreasing, fixupHueLonger, fixupHueShorter } from "./src/fixup/hue";

export { fixupAlpha } from "./src/fixup/alpha";

export { mapAlphaDivide, mapAlphaMultiply, mapper, mapTransferGamma, mapTransferLinear } from "./src/map";

export { average, averageAngle, averageNumber } from "./src/average";

export { interpolate, interpolateWith, interpolateWithPremultipliedAlpha } from "./src/interpolate/interpolate";
export { default as round } from "./src/round";

export { interpolatorLinear } from "./src/interpolate/linear";

export { interpolatorPiecewise } from "./src/interpolate/piecewise";

export { interpolatorSplineBasis, interpolatorSplineBasisClosed } from "./src/interpolate/splineBasis";

export { interpolatorSplineNatural, interpolatorSplineNaturalClosed } from "./src/interpolate/splineNatural";

export {
    interpolatorSplineMonotone,
    interpolatorSplineMonotone2,
    interpolatorSplineMonotoneClosed,
} from "./src/interpolate/splineMonotone";

export { clampChroma, clampRgb } from "./src/clamp";
export { default as displayable } from "./src/displayable";
export { default as lerp } from "./src/interpolate/lerp";
export { getMode, removeParser, useMode, useParser } from "./src/modes";
export { default as nearest } from "./src/nearest";
export { default as parse } from "./src/parse";
export { default as samples } from "./src/samples";

export {
    differenceCie76,
    differenceCie94,
    differenceCiede2000,
    differenceCmc,
    differenceEuclidean,
    differenceHueChroma,
    differenceHueNaive,
    differenceHueSaturation,
    differenceHyab,
    differenceKotsarenkoRamos,
} from "./src/difference";

export {
    filterBrightness,
    filterContrast,
    filterGrayscale,
    filterHueRotate,
    filterInvert,
    filterSaturate,
    filterSepia,
} from "./src/filter";

export { filterDeficiencyDeuter, filterDeficiencyProt, filterDeficiencyTrit } from "./src/deficiency";

export { default as easingGamma } from "./src/easing/gamma";
export { default as easingInOutSine } from "./src/easing/inOutSine";
export { default as easingMidpoint } from "./src/easing/midpoint";
export { default as easingSmootherstep } from "./src/easing/smootherstep";
export { default as easingSmoothstep } from "./src/easing/smoothstep";

export { contrast as wcagContrast, luminance as wcagLuminance } from "./src/wcag";

export { default as parseHsl } from "./src/hsl/parseHsl";
export { default as parseHwb } from "./src/hwb/parseHwb";
export { default as parseLab } from "./src/lab/parseLab";
export { default as parseLch } from "./src/lch/parseLch";
export { default as parseHex } from "./src/rgb/parseHex";
export { default as parseNamed } from "./src/rgb/parseNamed";
export { default as parseRgb } from "./src/rgb/parseRgb";
export { default as parseTransparent } from "./src/rgb/parseTransparent";

export { default as convertA98ToXyz65 } from "./src/a98/convertA98ToXyz65";
export { default as convertXyz65ToA98 } from "./src/a98/convertXyz65ToA98";
export { default as convertCubehelixToRgb } from "./src/cubehelix/convertCubehelixToRgb";
export { default as convertRgbToCubehelix } from "./src/cubehelix/convertRgbToCubehelix";
export { default as convertDlchToLab65 } from "./src/dlch/convertDlchToLab65";
export { default as convertLab65ToDlch } from "./src/dlch/convertLab65ToDlch";
export { default as convertHsiToRgb } from "./src/hsi/convertHsiToRgb";
export { default as convertRgbToHsi } from "./src/hsi/convertRgbToHsi";
export { default as convertHslToRgb } from "./src/hsl/convertHslToRgb";
export { default as convertRgbToHsl } from "./src/hsl/convertRgbToHsl";
export { default as convertHsvToRgb } from "./src/hsv/convertHsvToRgb";
export { default as convertRgbToHsv } from "./src/hsv/convertRgbToHsv";
export { default as convertHwbToRgb } from "./src/hwb/convertHwbToRgb";
export { default as convertRgbToHwb } from "./src/hwb/convertRgbToHwb";
export { default as convertJabToRgb } from "./src/jab/convertJabToRgb";
export { default as convertJabToXyz65 } from "./src/jab/convertJabToXyz65";
export { default as convertRgbToJab } from "./src/jab/convertRgbToJab";
export { default as convertXyz65ToJab } from "./src/jab/convertXyz65ToJab";
export { default as convertJabToJch } from "./src/jch/convertJabToJch";
export { default as convertJchToJab } from "./src/jch/convertJchToJab";
export { default as convertLabToRgb } from "./src/lab/convertLabToRgb";
export { default as convertLabToXyz50 } from "./src/lab/convertLabToXyz50";
export { default as convertRgbToLab } from "./src/lab/convertRgbToLab";
export { default as convertXyz50ToLab } from "./src/lab/convertXyz50ToLab";
export { default as convertLab65ToRgb } from "./src/lab65/convertLab65ToRgb";
export { default as convertLab65ToXyz65 } from "./src/lab65/convertLab65ToXyz65";
export { default as convertRgbToLab65 } from "./src/lab65/convertRgbToLab65";
export { default as convertXyz65ToLab65 } from "./src/lab65/convertXyz65ToLab65";
export { default as convertLabToLch } from "./src/lch/convertLabToLch";
export { default as convertLchToLab } from "./src/lch/convertLchToLab";
export { default as convertLchuvToLuv } from "./src/lchuv/convertLchuvToLuv";
export { default as convertLuvToLchuv } from "./src/lchuv/convertLuvToLchuv";
export { default as convertLrgbToRgb } from "./src/lrgb/convertLrgbToRgb";
export { default as convertRgbToLrgb } from "./src/lrgb/convertRgbToLrgb";
export { default as convertLuvToXyz50 } from "./src/luv/convertLuvToXyz50";
export { default as convertXyz50ToLuv } from "./src/luv/convertXyz50ToLuv";
export { default as convertOkhslToOklab } from "./src/okhsl/convertOkhslToOklab";
export { default as convertOklabToOkhsl } from "./src/okhsl/convertOklabToOkhsl";
export { default as convertOkhsvToOklab } from "./src/okhsv/convertOkhsvToOklab";
export { default as convertOklabToOkhsv } from "./src/okhsv/convertOklabToOkhsv";
export { default as convertLrgbToOklab } from "./src/oklab/convertLrgbToOklab";
export { default as convertOklabToLrgb } from "./src/oklab/convertOklabToLrgb";
export { default as convertOklabToRgb } from "./src/oklab/convertOklabToRgb";
export { default as convertRgbToOklab } from "./src/oklab/convertRgbToOklab";
export { default as convertP3ToXyz65 } from "./src/p3/convertP3ToXyz65";
export { default as convertXyz65ToP3 } from "./src/p3/convertXyz65ToP3";
export { default as convertProphotoToXyz50 } from "./src/prophoto/convertProphotoToXyz50";
export { default as convertXyz50ToProphoto } from "./src/prophoto/convertXyz50ToProphoto";
export { default as convertRec2020ToXyz65 } from "./src/rec2020/convertRec2020ToXyz65";
export { default as convertXyz65ToRec2020 } from "./src/rec2020/convertXyz65ToRec2020";
export { default as convertRgbToXyz50 } from "./src/xyz50/convertRgbToXyz50";
export { default as convertXyz50ToRgb } from "./src/xyz50/convertXyz50ToRgb";
export { default as convertRgbToXyz65 } from "./src/xyz65/convertRgbToXyz65";
export { default as convertXyz50ToXyz65 } from "./src/xyz65/convertXyz50ToXyz65";
export { default as convertXyz65ToRgb } from "./src/xyz65/convertXyz65ToRgb";
export { default as convertXyz65ToXyz50 } from "./src/xyz65/convertXyz65ToXyz50";
export { default as convertRgbToYiq } from "./src/yiq/convertRgbToYiq";
export { default as convertYiqToRgb } from "./src/yiq/convertYiqToRgb";

export {
    modeA98,
    modeCubehelix,
    modeDlab,
    modeDlch,
    modeHsi,
    modeHsl,
    modeHsv,
    modeHwb,
    modeJab,
    modeJch,
    modeLab,
    modeLab65,
    modeLch,
    modeLch65,
    modeLchuv,
    modeLrgb,
    modeLuv,
    modeOkhsl,
    modeOkhsv,
    modeOklab,
    modeOklch,
    modeP3,
    modeProphoto,
    modeRec2020,
    modeRgb,
    modeXyz50,
    modeXyz65,
    modeYiq,
};

export const a98: ConvertFn<"a98">;
export const cubehelix: ConvertFn<"cubehelix">;
export const dlab: ConvertFn<"dlab">;
export const dlch: ConvertFn<"dlch">;
export const hsi: ConvertFn<"hsi">;
export const hsl: ConvertFn<"hsl">;
export const hsv: ConvertFn<"hsv">;
export const hwb: ConvertFn<"hwb">;
export const jab: ConvertFn<"jab">;
export const jch: ConvertFn<"jch">;
export const lab: ConvertFn<"lab">;
export const lab65: ConvertFn<"lab65">;
export const lch: ConvertFn<"lch">;
export const lch65: ConvertFn<"lch65">;
export const lchuv: ConvertFn<"lchuv">;
export const lrgb: ConvertFn<"lrgb">;
export const luv: ConvertFn<"luv">;
export const okhsl: ConvertFn<"okhsl">;
export const okhsv: ConvertFn<"okhsv">;
export const oklab: ConvertFn<"oklab">;
export const oklch: ConvertFn<"oklch">;
export const p3: ConvertFn<"p3">;
export const prophoto: ConvertFn<"prophoto">;
export const rec2020: ConvertFn<"rec2020">;
// tslint:disable-next-line:use-default-type-parameter
export const rgb: ConvertFn<"rgb">;
export const xyz50: ConvertFn<"xyz50">;
export const xyz65: ConvertFn<"xyz65">;
export const yiq: ConvertFn<"yiq">;

/* Types */

export type { A98 } from "./src/a98/types";
export { Color, Mode } from "./src/common";
export type { Cubehelix } from "./src/cubehelix/types";
export type { Dlab } from "./src/dlab/types";
export type { Dlch } from "./src/dlch/types";
export type { Hsi } from "./src/hsi/types";
export type { Hsl } from "./src/hsl/types";
export type { Hsv } from "./src/hsv/types";
export type { Hwb } from "./src/hwb/types";
export type { Jab } from "./src/jab/types";
export type { Jch } from "./src/jch/types";
export type { Lab } from "./src/lab/types";
export type { Lab65 } from "./src/lab65/types";
export type { Lch } from "./src/lch/types";
export type { Lch65 } from "./src/lch65/types";
export type { Lchuv } from "./src/lchuv/types";
export type { Lrgb } from "./src/lrgb/types";
export type { Luv } from "./src/luv/types";
export type { Okhsl } from "./src/okhsl/types";
export type { Okhsv } from "./src/okhsv/types";
export type { Oklab } from "./src/oklab/types";
export type { Oklch } from "./src/oklch/types";
export type { P3 } from "./src/p3/types";
export type { Prophoto } from "./src/prophoto/types";
export type { Rec2020 } from "./src/rec2020/types";
export type { Rgb } from "./src/rgb/types";
export type { Xyz50 } from "./src/xyz50/types";
export type { Xyz65 } from "./src/xyz65/types";
export type { Yiq } from "./src/yiq/types";
