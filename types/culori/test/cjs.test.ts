import culoriRequire from "culori/require";

culoriRequire.a98("#ffffff"); // $ExpectType A98 | undefined
culoriRequire.average(["salmon", "tomato"], "lab"); // $ExpectType Lab
culoriRequire.averageAngle([0, 100, 200]); // $ExpectType number
culoriRequire.averageNumber([0, 5, 72]); // $ExpectType number
culoriRequire.blend(["#ff00ff", "#00ff00"]); // $ExpectType Rgb
culoriRequire.blerp(0, 0, 0, 0, 0, 0); // $ExpectType number
culoriRequire.clampChroma("#ffffff"); // $ExpectType Color | undefined
culoriRequire.clampGamut("rgb"); // $ExpectType (color: string | Color) => Rgb | undefined
culoriRequire.clampRgb("#ffffff"); // $ExpectType Color | undefined
culoriRequire.colorsNamed.rebeccapurple; // $ExpectType 6697881
culoriRequire.convertA98ToXyz65({ r: 0, g: 0, b: 0 }); // $ExpectType Xyz65
culoriRequire.convertCubehelixToRgb({ h: 0, s: 0, l: 0 }); // $ExpectType Rgb
culoriRequire.convertDlchToLab65({ l: 0, c: 0, h: 0 }); // $ExpectType Lab65
culoriRequire.convertHsiToRgb({ h: 0, s: 0, i: 0 }); // $ExpectType Rgb
culoriRequire.convertHslToRgb({ h: 0, s: 0, l: 0 }); // $ExpectType Rgb
culoriRequire.convertHsvToRgb({ h: 0, s: 0, v: 0 }); // $ExpectType Rgb
culoriRequire.convertHwbToRgb({ h: 0, w: 0, b: 0 }); // $ExpectType Rgb
culoriRequire.convertItpToXyz65({ i: 0, t: 0, p: 0 }); // $ExpectType Xyz65
culoriRequire.convertJabToJch({ j: 0, a: 0, b: 0 }); // $ExpectType Jch
culoriRequire.convertJabToRgb({ j: 0, a: 0, b: 0 }); // $ExpectType Rgb
culoriRequire.convertJabToXyz65({ j: 0, a: 0, b: 0 }); // $ExpectType Xyz65
culoriRequire.convertJchToJab({ j: 0, c: 0, h: 0 }); // $ExpectType Jab
culoriRequire.convertLab65ToDlch({ l: 0, a: 0, b: 0 }); // $ExpectType Dlch
culoriRequire.convertLab65ToRgb({ l: 0, a: 0, b: 0 }); // $ExpectType Rgb
culoriRequire.convertLab65ToXyz65({ l: 0, a: 0, b: 0 }); // $ExpectType Xyz65
culoriRequire.convertLabToLch({ l: 0, a: 0, b: 0 }); // $ExpectType Lch
culoriRequire.convertLabToRgb({ l: 0, a: 0, b: 0 }); // $ExpectType Rgb
culoriRequire.convertLabToXyz50({ l: 0, a: 0, b: 0 }); // $ExpectType Xyz50
culoriRequire.convertLchToLab({ l: 0, c: 0, h: 0 }); // $ExpectType Lab
culoriRequire.convertLchuvToLuv({ l: 0, c: 0, h: 0 }); // $ExpectType Luv
culoriRequire.convertLrgbToOklab({ r: 0, g: 0, b: 0 }); // $ExpectType Oklab
culoriRequire.convertLrgbToRgb({ r: 0, g: 0, b: 0 }); // $ExpectType Rgb
culoriRequire.convertLuvToLchuv({ l: 0, u: 0, v: 0 }); // $ExpectType Lchuv
culoriRequire.convertLuvToXyz50({ l: 0, u: 0, v: 0 }); // $ExpectType Xyz50
culoriRequire.convertOkhslToOklab({ h: 0, s: 0, l: 0 }); // $ExpectType Oklab
culoriRequire.convertOkhsvToOklab({ h: 0, s: 0, v: 0 }); // $ExpectType Oklab
culoriRequire.convertOklabToLrgb({ l: 0, a: 0, b: 0 }); // $ExpectType Lrgb
culoriRequire.convertOklabToOkhsl({ l: 0, a: 0, b: 0 }); // $ExpectType Okhsl
culoriRequire.convertOklabToOkhsv({ l: 0, a: 0, b: 0 }); // $ExpectType Okhsv
culoriRequire.convertOklabToRgb({ l: 0, a: 0, b: 0 }); // $ExpectType Rgb
culoriRequire.convertP3ToXyz65({ r: 0, g: 0, b: 0 }); // $ExpectType Xyz65
culoriRequire.convertProphotoToXyz50({ r: 0, g: 0, b: 0 }); // $ExpectType Xyz50
culoriRequire.convertRec2020ToXyz65({ r: 0, g: 0, b: 0 }); // $ExpectType Xyz65
culoriRequire.convertRgbToCubehelix({ r: 0, g: 0, b: 0 }); // $ExpectType Cubehelix
culoriRequire.convertRgbToHsi({ r: 0, g: 0, b: 0 }); // $ExpectType Hsi
culoriRequire.convertRgbToHsl({ r: 0, g: 0, b: 0 }); // $ExpectType Hsl
culoriRequire.convertRgbToHsv({ r: 0, g: 0, b: 0 }); // $ExpectType Hsv
culoriRequire.convertRgbToHwb({ r: 0, g: 0, b: 0 }); // $ExpectType Hwb
culoriRequire.convertRgbToJab({ r: 0, g: 0, b: 0 }); // $ExpectType Jab
culoriRequire.convertRgbToLab({ r: 0, g: 0, b: 0 }); // $ExpectType Lab
culoriRequire.convertRgbToLab65({ r: 0, g: 0, b: 0 }); // $ExpectType Lab65
culoriRequire.convertRgbToLrgb({ r: 0, g: 0, b: 0 }); // $ExpectType Lrgb
culoriRequire.convertRgbToOklab({ r: 0, g: 0, b: 0 }); // $ExpectType Oklab
culoriRequire.convertRgbToXyb({ r: 0, g: 0, b: 0 }); // $ExpectType Xyb
culoriRequire.convertRgbToXyz50({ r: 0, g: 0, b: 0 }); // $ExpectType Xyz50
culoriRequire.convertRgbToXyz65({ r: 0, g: 0, b: 0 }); // $ExpectType Xyz65
culoriRequire.convertRgbToYiq({ r: 0, g: 0, b: 0 }); // $ExpectType Yiq
culoriRequire.convertXybToRgb({ x: 0, y: 0, b: 0 }); // $ExpectType Rgb
culoriRequire.convertXyz50ToLab({ x: 0, y: 0, z: 0 }); // $ExpectType Lab
culoriRequire.convertXyz50ToLuv({ x: 0, y: 0, z: 0 }); // $ExpectType Luv
culoriRequire.convertXyz50ToProphoto({ x: 0, y: 0, z: 0 }); // $ExpectType Prophoto
culoriRequire.convertXyz50ToRgb({ x: 0, y: 0, z: 0 }); // $ExpectType Rgb
culoriRequire.convertXyz50ToXyz65({ x: 0, y: 0, z: 0 }); // $ExpectType Xyz65
culoriRequire.convertXyz65ToA98({ x: 0, y: 0, z: 0 }); // $ExpectType A98
culoriRequire.convertXyz65ToItp({ x: 0, y: 0, z: 0 }); // $ExpectType Itp
culoriRequire.convertXyz65ToJab({ x: 0, y: 0, z: 0 }); // $ExpectType Jab
culoriRequire.convertXyz65ToLab65({ x: 0, y: 0, z: 0 }); // $ExpectType Lab65
culoriRequire.convertXyz65ToP3({ x: 0, y: 0, z: 0 }); // $ExpectType P3
culoriRequire.convertXyz65ToRec2020({ x: 0, y: 0, z: 0 }); // $ExpectType Rec2020
culoriRequire.convertXyz65ToRgb({ x: 0, y: 0, z: 0 }); // $ExpectType Rgb
culoriRequire.convertXyz65ToXyz50({ x: 0, y: 0, z: 0 }); // $ExpectType Xyz50
culoriRequire.convertYiqToRgb({ y: 0, i: 0, q: 0 }); // $ExpectType Rgb
culoriRequire.converter("rec2020"); // $ExpectType ConvertFn<"rec2020">
culoriRequire.cubehelix("#ffffff"); // $ExpectType Cubehelix | undefined
culoriRequire.differenceCie76(); // $ExpectType DiffFn
culoriRequire.differenceCie94(); // $ExpectType DiffFn
culoriRequire.differenceCiede2000(); // $ExpectType DiffFn
culoriRequire.differenceCmc(); // $ExpectType DiffFn
culoriRequire.differenceEuclidean(); // $ExpectType DiffFn
culoriRequire.differenceHueChroma({ h: 0, c: 0 }, { h: 120, c: 0 }); // $ExpectType number
culoriRequire.differenceHueNaive({ h: 0 }, { h: 120 }); // $ExpectType number
culoriRequire.differenceHueSaturation({ h: 0, s: 0 }, { h: 120, s: 0 }); // $ExpectType number
culoriRequire.differenceHyab(); // $ExpectType DiffFn
culoriRequire.differenceItp(); // $ExpectType DiffFn
culoriRequire.differenceKotsarenkoRamos(); // $ExpectType DiffFn
culoriRequire.displayable("#ffffff"); // $ExpectType boolean
culoriRequire.dlab("#ffffff"); // $ExpectType Dlab | undefined
culoriRequire.dlch("#ffffff"); // $ExpectType Dlch | undefined
culoriRequire.easingGamma(2); // $ExpectType (t: number) => number
culoriRequire.easingInOutSine(0); // $ExpectType number
culoriRequire.easingMidpoint(); // $ExpectType (t: number) => number
culoriRequire.easingSmootherstep(0); // $ExpectType number
culoriRequire.easingSmoothstep(0); // $ExpectType number
culoriRequire.easingSmoothstepInverse(0); // $ExpectType number
culoriRequire.filterBrightness(); // $ExpectType ColorToSameColorMapper
culoriRequire.filterContrast(); // $ExpectType ColorToSameColorMapper
culoriRequire.filterDeficiencyDeuter(0); // $ExpectType <C extends Color>(color: C) => C
culoriRequire.filterDeficiencyProt(0); // $ExpectType <C extends Color>(color: C) => C
culoriRequire.filterDeficiencyTrit(0); // $ExpectType <C extends Color>(color: C) => C
culoriRequire.filterGrayscale(); // $ExpectType ColorToSameColorMapper
culoriRequire.filterHueRotate(); // $ExpectType ColorToSameColorMapper
culoriRequire.filterInvert(); // $ExpectType ColorToSameColorMapper
culoriRequire.filterSaturate(); // $ExpectType ColorToSameColorMapper
culoriRequire.filterSepia(); // $ExpectType ColorToSameColorMapper
culoriRequire.fixupAlpha([1, 1, 1]); // $ExpectType number[]
culoriRequire.fixupHueDecreasing([]); // $ExpectType number[]
culoriRequire.fixupHueIncreasing([]); // $ExpectType number[]
culoriRequire.fixupHueLonger([]); // $ExpectType number[]
culoriRequire.fixupHueShorter([]); // $ExpectType number[]
culoriRequire.formatCss("#ffffff"); // $ExpectType string | undefined
culoriRequire.formatHex("#ffffff"); // $ExpectType string | undefined
culoriRequire.formatHex8("#ffffff"); // $ExpectType string | undefined
culoriRequire.formatHsl("#ffffff"); // $ExpectType string | undefined
culoriRequire.formatRgb("#ffffff"); // $ExpectType string | undefined
culoriRequire.getMode("oklab"); // $ExpectType Omit<ConvertFn<"lab">, keyof OklabDefinitionMixin> & OklabDefinitionMixin
culoriRequire.hsi("#ffffff"); // $ExpectType Hsi | undefined
culoriRequire.hsl("#ffffff"); // $ExpectType Hsl | undefined
culoriRequire.hsv("#ffffff"); // $ExpectType Hsv | undefined
culoriRequire.hwb("#ffffff"); // $ExpectType Hwb | undefined
culoriRequire.inGamut(); // $ExpectType (color: string | Color) => boolean
culoriRequire.interpolate(["#ffff", "#0000"]); // $ExpectType Interpolator<"rgb">
culoriRequire.interpolateWith<"rgb">((v) => v / 2); // $ExpectType (colors: ColorsParameter, mode?: "rgb" | undefined, overrides?: InterpolateOverridesParameter<"rgb"> | undefined) => Interpolator<"rgb">
culoriRequire.interpolateWithPremultipliedAlpha<"rgb">(["red", "transparent", "blue"]); // $ExpectType Interpolator<"rgb">
culoriRequire.interpolatorLinear([3, 10, 1]); // $ExpectType (t: number) => number
culoriRequire.interpolatorPiecewise(culoriRequire.lerp); // $ExpectType (arr: number[]) => (t: number) => number
culoriRequire.interpolatorSplineBasis([3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05]); // $ExpectType (t: number) => number
culoriRequire.interpolatorSplineBasisClosed([3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05]); // $ExpectType (t: number) => number
culoriRequire.interpolatorSplineMonotone([3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05]); // $ExpectType (t: number) => number
culoriRequire.interpolatorSplineMonotone2([3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05]); // $ExpectType (t: number) => number
culoriRequire.interpolatorSplineMonotoneClosed([3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05]); // $ExpectType (t: number) => number
culoriRequire.interpolatorSplineNatural([10, 20, 0, 40, 70]); // $ExpectType (t: number) => number
culoriRequire.interpolatorSplineNaturalClosed([10, 20, 0, 40, 70]); // $ExpectType (t: number) => number
culoriRequire.itp("#ffffff"); // $ExpectType Itp | undefined
culoriRequire.jab("#ffffff"); // $ExpectType Jab | undefined
culoriRequire.jch("#ffffff"); // $ExpectType Jch | undefined
culoriRequire.lab("#ffffff"); // $ExpectType Lab | undefined
culoriRequire.lab65("#ffffff"); // $ExpectType Lab65 | undefined
culoriRequire.lch("#ffffff"); // $ExpectType Lch | undefined
culoriRequire.lch65("#ffffff"); // $ExpectType Lch65 | undefined
culoriRequire.lchuv("#ffffff"); // $ExpectType Lchuv | undefined
culoriRequire.lerp(0, 0, 0); // $ExpectType number
culoriRequire.lrgb("#ffffff"); // $ExpectType Lrgb | undefined
culoriRequire.luv("#ffffff"); // $ExpectType Luv | undefined
culoriRequire.mapAlphaDivide(0, "rgb", { mode: "rgb", r: 0, g: 0, b: 0 }); // $ExpectType number
culoriRequire.mapAlphaMultiply(0, "rgb", { mode: "rgb", r: 0, g: 0, b: 0 }); // $ExpectType number
culoriRequire.mapTransferGamma(); // $ExpectType (v: number, ch: string) => number
culoriRequire.mapTransferLinear(); // $ExpectType (v: number, ch: string) => number
culoriRequire.mapper(culoriRequire.mapAlphaMultiply); // $ExpectType ColorToRgbMapper
culoriRequire.nearest(["red", "lime"], culoriRequire.differenceCiede2000()); // $ExpectType (color: string | Color, n?: number | undefined, τ?: number | undefined) => string[]
culoriRequire.okhsl("#ffffff"); // $ExpectType Okhsl | undefined
culoriRequire.okhsv("#ffffff"); // $ExpectType Okhsv | undefined
culoriRequire.oklab("#ffffff"); // $ExpectType Oklab | undefined
culoriRequire.oklch("#ffffff"); // $ExpectType Oklch | undefined
culoriRequire.p3("#ffffff"); // $ExpectType P3 | undefined
culoriRequire.parse("#ffffff"); // $ExpectType Color | undefined
culoriRequire.parseHex("#ffffff"); // $ExpectType Rgb | undefined
culoriRequire.parseHsl("color(hsl 0 0 0)"); // $ExpectType Hsl | undefined
culoriRequire.parseHslLegacy("hsl(0, 0, 0)"); // $ExpectType Hsl | undefined
culoriRequire.parseHwb("color(hwb 0 0 0)"); // $ExpectType Hwb | undefined
culoriRequire.parseLab("color(lab 0 0 0)"); // $ExpectType Lab | undefined
culoriRequire.parseLch("color(lch 0 0 0)"); // $ExpectType Lch | undefined
culoriRequire.parseNamed("rebeccapurple"); // $ExpectType Rgb | undefined
culoriRequire.parseOklab("color(oklab 0 0 0)"); // $ExpectType Oklab | undefined
culoriRequire.parseOklch("color(oklch 0 0 0)"); // $ExpectType Oklch | undefined
culoriRequire.parseRgb("color(srgb 0 0 0)"); // $ExpectType Rgb | undefined
culoriRequire.parseRgbLegacy("rgb(0, 0, 0)"); // $ExpectType Rgb | undefined
culoriRequire.parseTransparent("transparent"); // $ExpectType { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } | undefined
culoriRequire.prophoto("#ffffff"); // $ExpectType Prophoto | undefined
culoriRequire.random(); // $ExpectType Rgb
culoriRequire.rec2020("#ffffff"); // $ExpectType Rec2020 | undefined
culoriRequire.rgb("#ffffff"); // $ExpectType Rgb | undefined
culoriRequire.round(2); // $ExpectType <T>(value: T) => T
culoriRequire.samples(5); // $ExpectType number[]
culoriRequire.serializeHex({ mode: "rgb", r: 0, g: 0, b: 0 }); // $ExpectType string
culoriRequire.serializeHex8({ r: 0, g: 0, b: 0 }); // $ExpectType string
culoriRequire.serializeHsl({ h: 0, s: 0, l: 0 }); // $ExpectType string | undefined
culoriRequire.serializeRgb({ r: 0, g: 0, b: 0 }); // $ExpectType string | undefined
culoriRequire.toGamut("p3", "rgb"); // $ExpectType (color: string | Color) => P3
culoriRequire.trilerp(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // $ExpectType number
culoriRequire.unlerp(0, 0, 0); // $ExpectType number
culoriRequire.useMode(culoriRequire.modeA98); // $ExpectType ConvertFn<"a98">
culoriRequire.useMode(culoriRequire.modeCubehelix); // $ExpectType ConvertFn<"cubehelix">
culoriRequire.useMode(culoriRequire.modeDlab); // $ExpectType ConvertFn<"dlab">
culoriRequire.useMode(culoriRequire.modeDlch); // $ExpectType ConvertFn<"dlch">
culoriRequire.useMode(culoriRequire.modeHsi); // $ExpectType ConvertFn<"hsi">
culoriRequire.useMode(culoriRequire.modeHsl); // $ExpectType ConvertFn<"hsl">
culoriRequire.useMode(culoriRequire.modeHsv); // $ExpectType ConvertFn<"hsv">
culoriRequire.useMode(culoriRequire.modeHwb); // $ExpectType ConvertFn<"hwb">
culoriRequire.useMode(culoriRequire.modeItp); // $ExpectType ConvertFn<"itp">
culoriRequire.useMode(culoriRequire.modeJab); // $ExpectType ConvertFn<"jab">
culoriRequire.useMode(culoriRequire.modeJch); // $ExpectType ConvertFn<"jch">
culoriRequire.useMode(culoriRequire.modeLab); // $ExpectType ConvertFn<"lab">
culoriRequire.useMode(culoriRequire.modeLab65); // $ExpectType ConvertFn<"lab65">
culoriRequire.useMode(culoriRequire.modeLch); // $ExpectType ConvertFn<"lch">
culoriRequire.useMode(culoriRequire.modeLch65); // $ExpectType ConvertFn<"lch65">
culoriRequire.useMode(culoriRequire.modeLchuv); // $ExpectType ConvertFn<"lchuv">
culoriRequire.useMode(culoriRequire.modeLrgb); // $ExpectType ConvertFn<"lrgb">
culoriRequire.useMode(culoriRequire.modeLuv); // $ExpectType ConvertFn<"luv">
culoriRequire.useMode(culoriRequire.modeOkhsl); // $ExpectType ConvertFn<"okhsl">
culoriRequire.useMode(culoriRequire.modeOkhsv); // $ExpectType ConvertFn<"okhsv">
culoriRequire.useMode(culoriRequire.modeOklab); // $ExpectType ConvertFn<"oklab">
culoriRequire.useMode(culoriRequire.modeOklch); // $ExpectType ConvertFn<"oklch">
culoriRequire.useMode(culoriRequire.modeP3); // $ExpectType ConvertFn<"p3">
culoriRequire.useMode(culoriRequire.modeProphoto); // $ExpectType ConvertFn<"prophoto">
culoriRequire.useMode(culoriRequire.modeRec2020); // $ExpectType ConvertFn<"rec2020">
culoriRequire.useMode(culoriRequire.modeRgb); // $ExpectType ConvertFn<"rgb">
culoriRequire.useMode(culoriRequire.modeXyb); // $ExpectType ConvertFn<"xyb">
culoriRequire.useMode(culoriRequire.modeXyz50); // $ExpectType ConvertFn<"xyz50">
culoriRequire.useMode(culoriRequire.modeXyz65); // $ExpectType ConvertFn<"xyz65">
culoriRequire.useMode(culoriRequire.modeYiq); // $ExpectType ConvertFn<"yiq">
culoriRequire.useParser((str) => ({ mode: "rgb", r: 0, g: 0, b: 0 })); // $ExpectType undefined
culoriRequire.useParser("--oklab", "oklab"); // $ExpectType undefined
culoriRequire.wcagContrast("#0000ff", "#008080"); // $ExpectType number
culoriRequire.wcagLuminance("#ffffff"); // $ExpectType number
culoriRequire.xyb("#ffffff"); // $ExpectType Xyb | undefined
culoriRequire.xyz50("#ffffff"); // $ExpectType Xyz50 | undefined
culoriRequire.xyz65("#ffffff"); // $ExpectType Xyz65 | undefined
culoriRequire.yiq("#ffffff"); // $ExpectType Yiq | undefined
