// Color space definitions
import modeA98 from "./a98/definition.js";
import { ConvertFn } from "./converter.js";
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

export { default as converter } from "./converter.js";

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
} from "./formatter.js";

export { default as blend } from "./blend.js";
export { default as colorsNamed } from "./colors/named.js";
export { default as random } from "./random.js";

export { fixupHueDecreasing, fixupHueIncreasing, fixupHueLonger, fixupHueShorter } from "./fixup/hue.js";

export { fixupAlpha } from "./fixup/alpha.js";

export { mapAlphaDivide, mapAlphaMultiply, mapper, mapTransferGamma, mapTransferLinear } from "./map.js";

export { average, averageAngle, averageNumber } from "./average.js";

export { interpolate, interpolateWith, interpolateWithPremultipliedAlpha } from "./interpolate/interpolate.js";
export { default as round } from "./round.js";

export { interpolatorLinear } from "./interpolate/linear.js";

export { interpolatorPiecewise } from "./interpolate/piecewise.js";

export { interpolatorSplineBasis, interpolatorSplineBasisClosed } from "./interpolate/splineBasis.js";

export { interpolatorSplineNatural, interpolatorSplineNaturalClosed } from "./interpolate/splineNatural.js";

export {
    interpolatorSplineMonotone,
    interpolatorSplineMonotone2,
    interpolatorSplineMonotoneClosed,
} from "./interpolate/splineMonotone.js";

export { clampChroma, clampGamut, clampRgb, displayable, inGamut, toGamut } from "./clamp.js";
export { blerp, lerp, trilerp, unlerp } from "./interpolate/lerp.js";
export { getMode, removeParser, useMode, useParser } from "./modes.js";
export { default as nearest } from "./nearest.js";
export { default as parse } from "./parse.js";
export { default as samples } from "./samples.js";

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
    differenceItp,
    differenceKotsarenkoRamos,
} from "./difference.js";

export {
    filterBrightness,
    filterContrast,
    filterGrayscale,
    filterHueRotate,
    filterInvert,
    filterSaturate,
    filterSepia,
} from "./filter.js";

export { filterDeficiencyDeuter, filterDeficiencyProt, filterDeficiencyTrit } from "./deficiency.js";

// Easings
export { default as easingGamma } from "./easing/gamma.js";
export { default as easingInOutSine } from "./easing/inOutSine.js";
export { default as easingMidpoint } from "./easing/midpoint.js";
export { default as easingSmootherstep } from "./easing/smootherstep.js";
export { easingSmoothstep, easingSmoothstepInverse } from "./easing/smoothstep.js";

export { wcagContrast, wcagLuminance } from "./wcag.js";

export { default as parseHsl } from "./hsl/parseHsl.js";
export { default as parseHslLegacy } from "./hsl/parseHslLegacy.js";
export { default as parseHwb } from "./hwb/parseHwb.js";
export { default as parseLab } from "./lab/parseLab.js";
export { default as parseLch } from "./lch/parseLch.js";
export { default as parseOklab } from "./oklab/parseOklab.js";
export { default as parseOklch } from "./oklch/parseOklch.js";
export { default as parseHex } from "./rgb/parseHex.js";
export { default as parseNamed } from "./rgb/parseNamed.js";
export { default as parseRgb } from "./rgb/parseRgb.js";
export { default as parseRgbLegacy } from "./rgb/parseRgbLegacy.js";
export { default as parseTransparent } from "./rgb/parseTransparent.js";

export { default as convertA98ToXyz65 } from "./a98/convertA98ToXyz65.js";
export { default as convertXyz65ToA98 } from "./a98/convertXyz65ToA98.js";
export { default as convertCubehelixToRgb } from "./cubehelix/convertCubehelixToRgb.js";
export { default as convertRgbToCubehelix } from "./cubehelix/convertRgbToCubehelix.js";
export { default as convertDlchToLab65 } from "./dlch/convertDlchToLab65.js";
export { default as convertLab65ToDlch } from "./dlch/convertLab65ToDlch.js";
export { default as convertHsiToRgb } from "./hsi/convertHsiToRgb.js";
export { default as convertRgbToHsi } from "./hsi/convertRgbToHsi.js";
export { default as convertHslToRgb } from "./hsl/convertHslToRgb.js";
export { default as convertRgbToHsl } from "./hsl/convertRgbToHsl.js";
export { default as convertHsvToRgb } from "./hsv/convertHsvToRgb.js";
export { default as convertRgbToHsv } from "./hsv/convertRgbToHsv.js";
export { default as convertHwbToRgb } from "./hwb/convertHwbToRgb.js";
export { default as convertRgbToHwb } from "./hwb/convertRgbToHwb.js";
export { default as convertItpToXyz65 } from "./itp/convertItpToXyz65.js";
export { default as convertXyz65ToItp } from "./itp/convertXyz65ToItp.js";
export { default as convertJabToRgb } from "./jab/convertJabToRgb.js";
export { default as convertJabToXyz65 } from "./jab/convertJabToXyz65.js";
export { default as convertRgbToJab } from "./jab/convertRgbToJab.js";
export { default as convertXyz65ToJab } from "./jab/convertXyz65ToJab.js";
export { default as convertJabToJch } from "./jch/convertJabToJch.js";
export { default as convertJchToJab } from "./jch/convertJchToJab.js";
export { default as convertLabToRgb } from "./lab/convertLabToRgb.js";
export { default as convertLabToXyz50 } from "./lab/convertLabToXyz50.js";
export { default as convertRgbToLab } from "./lab/convertRgbToLab.js";
export { default as convertXyz50ToLab } from "./lab/convertXyz50ToLab.js";
export { default as convertLab65ToRgb } from "./lab65/convertLab65ToRgb.js";
export { default as convertLab65ToXyz65 } from "./lab65/convertLab65ToXyz65.js";
export { default as convertRgbToLab65 } from "./lab65/convertRgbToLab65.js";
export { default as convertXyz65ToLab65 } from "./lab65/convertXyz65ToLab65.js";
export { default as convertLabToLch } from "./lch/convertLabToLch.js";
export { default as convertLchToLab } from "./lch/convertLchToLab.js";
export { default as convertLchuvToLuv } from "./lchuv/convertLchuvToLuv.js";
export { default as convertLuvToLchuv } from "./lchuv/convertLuvToLchuv.js";
export { default as convertLrgbToRgb } from "./lrgb/convertLrgbToRgb.js";
export { default as convertRgbToLrgb } from "./lrgb/convertRgbToLrgb.js";
export { default as convertLuvToXyz50 } from "./luv/convertLuvToXyz50.js";
export { default as convertXyz50ToLuv } from "./luv/convertXyz50ToLuv.js";
export { default as convertOkhslToOklab } from "./okhsl/convertOkhslToOklab.js";
export { default as convertOklabToOkhsl } from "./okhsl/convertOklabToOkhsl.js";
export { default as convertOkhsvToOklab } from "./okhsv/convertOkhsvToOklab.js";
export { default as convertOklabToOkhsv } from "./okhsv/convertOklabToOkhsv.js";
export { default as convertLrgbToOklab } from "./oklab/convertLrgbToOklab.js";
export { default as convertOklabToLrgb } from "./oklab/convertOklabToLrgb.js";
export { default as convertOklabToRgb } from "./oklab/convertOklabToRgb.js";
export { default as convertRgbToOklab } from "./oklab/convertRgbToOklab.js";
export { default as convertP3ToXyz65 } from "./p3/convertP3ToXyz65.js";
export { default as convertXyz65ToP3 } from "./p3/convertXyz65ToP3.js";
export { default as convertProphotoToXyz50 } from "./prophoto/convertProphotoToXyz50.js";
export { default as convertXyz50ToProphoto } from "./prophoto/convertXyz50ToProphoto.js";
export { default as convertRec2020ToXyz65 } from "./rec2020/convertRec2020ToXyz65.js";
export { default as convertXyz65ToRec2020 } from "./rec2020/convertXyz65ToRec2020.js";
export { default as convertRgbToXyb } from "./xyb/convertRgbToXyb.js";
export { default as convertXybToRgb } from "./xyb/convertXybToRgb.js";
export { default as convertRgbToXyz50 } from "./xyz50/convertRgbToXyz50.js";
export { default as convertXyz50ToRgb } from "./xyz50/convertXyz50ToRgb.js";
export { default as convertRgbToXyz65 } from "./xyz65/convertRgbToXyz65.js";
export { default as convertXyz50ToXyz65 } from "./xyz65/convertXyz50ToXyz65.js";
export { default as convertXyz65ToRgb } from "./xyz65/convertXyz65ToRgb.js";
export { default as convertXyz65ToXyz50 } from "./xyz65/convertXyz65ToXyz50.js";
export { default as convertRgbToYiq } from "./yiq/convertRgbToYiq.js";
export { default as convertYiqToRgb } from "./yiq/convertYiqToRgb.js";

export {
    modeA98,
    modeCubehelix,
    modeDlab,
    modeDlch,
    modeHsi,
    modeHsl,
    modeHsv,
    modeHwb,
    modeItp,
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
    modeXyb,
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
export const itp: ConvertFn<"itp">;
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
export const rgb: ConvertFn<"rgb">;
export const xyb: ConvertFn<"xyb">;
export const xyz50: ConvertFn<"xyz50">;
export const xyz65: ConvertFn<"xyz65">;
export const yiq: ConvertFn<"yiq">;

export type { A98 } from "./a98/types.js";
export type { Color, Mode, TakeColorChannels } from "./common.js";
export type { Cubehelix } from "./cubehelix/types.js";
export type { Dlab } from "./dlab/types.js";
export type { Dlch } from "./dlch/types.js";
export type { Hsi } from "./hsi/types.js";
export type { Hsl } from "./hsl/types.js";
export type { Hsv } from "./hsv/types.js";
export type { Hwb } from "./hwb/types.js";
export type { Itp } from "./itp/types.js";
export type { Jab } from "./jab/types.js";
export type { Jch } from "./jch/types.js";
export type { Lab } from "./lab/types.js";
export type { Lab65 } from "./lab65/types.js";
export type { Lch } from "./lch/types.js";
export type { Lch65 } from "./lch65/types.js";
export type { Lchuv } from "./lchuv/types.js";
export type { Lrgb } from "./lrgb/types.js";
export type { Luv } from "./luv/types.js";
export type { Okhsl } from "./okhsl/types.js";
export type { Okhsv } from "./okhsv/types.js";
export type { Oklab } from "./oklab/types.js";
export type { Oklch } from "./oklch/types.js";
export type { P3 } from "./p3/types.js";
export type { Prophoto } from "./prophoto/types.js";
export type { Rec2020 } from "./rec2020/types.js";
export type { Rgb } from "./rgb/types.js";
export type { Xyb } from "./xyb/types.js";
export type { Xyz50 } from "./xyz50/types.js";
export type { Xyz65 } from "./xyz65/types.js";
export type { Yiq } from "./yiq/types.js";
