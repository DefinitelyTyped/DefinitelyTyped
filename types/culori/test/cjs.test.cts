import culori = require("culori");

culori.a98("#ffffff"); // $ExpectType A98 | undefined
culori.average(["salmon", "tomato"], "lab"); // $ExpectType Lab
culori.averageAngle([0, 100, 200]); // $ExpectType number
culori.averageNumber([0, 5, 72]); // $ExpectType number
culori.blend(["#ff00ff", "#00ff00"]); // $ExpectType Rgb
culori.blerp(0, 0, 0, 0, 0, 0); // $ExpectType number
culori.clampChroma("#ffffff"); // $ExpectType Color | undefined
culori.clampGamut("rgb"); // $ExpectType (color: string | Color) => Rgb | undefined
culori.clampRgb("#ffffff"); // $ExpectType Color | undefined
culori.colorsNamed.rebeccapurple; // $ExpectType 6697881
culori.convertA98ToXyz65({ r: 0, g: 0, b: 0 }); // $ExpectType Xyz65
culori.convertCubehelixToRgb({ h: 0, s: 0, l: 0 }); // $ExpectType Rgb
culori.convertDlchToLab65({ l: 0, c: 0, h: 0 }); // $ExpectType Lab65
culori.convertHsiToRgb({ h: 0, s: 0, i: 0 }); // $ExpectType Rgb
culori.convertHslToRgb({ h: 0, s: 0, l: 0 }); // $ExpectType Rgb
culori.convertHsvToRgb({ h: 0, s: 0, v: 0 }); // $ExpectType Rgb
culori.convertHwbToRgb({ h: 0, w: 0, b: 0 }); // $ExpectType Rgb
culori.convertItpToXyz65({ i: 0, t: 0, p: 0 }); // $ExpectType Xyz65
culori.convertJabToJch({ j: 0, a: 0, b: 0 }); // $ExpectType Jch
culori.convertJabToRgb({ j: 0, a: 0, b: 0 }); // $ExpectType Rgb
culori.convertJabToXyz65({ j: 0, a: 0, b: 0 }); // $ExpectType Xyz65
culori.convertJchToJab({ j: 0, c: 0, h: 0 }); // $ExpectType Jab
culori.convertLab65ToDlch({ l: 0, a: 0, b: 0 }); // $ExpectType Dlch
culori.convertLab65ToRgb({ l: 0, a: 0, b: 0 }); // $ExpectType Rgb
culori.convertLab65ToXyz65({ l: 0, a: 0, b: 0 }); // $ExpectType Xyz65
culori.convertLabToLch({ l: 0, a: 0, b: 0 }); // $ExpectType Lch
culori.convertLabToRgb({ l: 0, a: 0, b: 0 }); // $ExpectType Rgb
culori.convertLabToXyz50({ l: 0, a: 0, b: 0 }); // $ExpectType Xyz50
culori.convertLchToLab({ l: 0, c: 0, h: 0 }); // $ExpectType Lab
culori.convertLchuvToLuv({ l: 0, c: 0, h: 0 }); // $ExpectType Luv
culori.convertLrgbToOklab({ r: 0, g: 0, b: 0 }); // $ExpectType Oklab
culori.convertLrgbToRgb({ r: 0, g: 0, b: 0 }); // $ExpectType Rgb
culori.convertLuvToLchuv({ l: 0, u: 0, v: 0 }); // $ExpectType Lchuv
culori.convertLuvToXyz50({ l: 0, u: 0, v: 0 }); // $ExpectType Xyz50
culori.convertOkhslToOklab({ h: 0, s: 0, l: 0 }); // $ExpectType Oklab
culori.convertOkhsvToOklab({ h: 0, s: 0, v: 0 }); // $ExpectType Oklab
culori.convertOklabToLrgb({ l: 0, a: 0, b: 0 }); // $ExpectType Lrgb
culori.convertOklabToOkhsl({ l: 0, a: 0, b: 0 }); // $ExpectType Okhsl
culori.convertOklabToOkhsv({ l: 0, a: 0, b: 0 }); // $ExpectType Okhsv
culori.convertOklabToRgb({ l: 0, a: 0, b: 0 }); // $ExpectType Rgb
culori.convertP3ToXyz65({ r: 0, g: 0, b: 0 }); // $ExpectType Xyz65
culori.convertProphotoToXyz50({ r: 0, g: 0, b: 0 }); // $ExpectType Xyz50
culori.convertRec2020ToXyz65({ r: 0, g: 0, b: 0 }); // $ExpectType Xyz65
culori.convertRgbToCubehelix({ r: 0, g: 0, b: 0 }); // $ExpectType Cubehelix
culori.convertRgbToHsi({ r: 0, g: 0, b: 0 }); // $ExpectType Hsi
culori.convertRgbToHsl({ r: 0, g: 0, b: 0 }); // $ExpectType Hsl
culori.convertRgbToHsv({ r: 0, g: 0, b: 0 }); // $ExpectType Hsv
culori.convertRgbToHwb({ r: 0, g: 0, b: 0 }); // $ExpectType Hwb
culori.convertRgbToJab({ r: 0, g: 0, b: 0 }); // $ExpectType Jab
culori.convertRgbToLab({ r: 0, g: 0, b: 0 }); // $ExpectType Lab
culori.convertRgbToLab65({ r: 0, g: 0, b: 0 }); // $ExpectType Lab65
culori.convertRgbToLrgb({ r: 0, g: 0, b: 0 }); // $ExpectType Lrgb
culori.convertRgbToOklab({ r: 0, g: 0, b: 0 }); // $ExpectType Oklab
culori.convertRgbToXyb({ r: 0, g: 0, b: 0 }); // $ExpectType Xyb
culori.convertRgbToXyz50({ r: 0, g: 0, b: 0 }); // $ExpectType Xyz50
culori.convertRgbToXyz65({ r: 0, g: 0, b: 0 }); // $ExpectType Xyz65
culori.convertRgbToYiq({ r: 0, g: 0, b: 0 }); // $ExpectType Yiq
culori.convertXybToRgb({ x: 0, y: 0, b: 0 }); // $ExpectType Rgb
culori.convertXyz50ToLab({ x: 0, y: 0, z: 0 }); // $ExpectType Lab
culori.convertXyz50ToLuv({ x: 0, y: 0, z: 0 }); // $ExpectType Luv
culori.convertXyz50ToProphoto({ x: 0, y: 0, z: 0 }); // $ExpectType Prophoto
culori.convertXyz50ToRgb({ x: 0, y: 0, z: 0 }); // $ExpectType Rgb
culori.convertXyz50ToXyz65({ x: 0, y: 0, z: 0 }); // $ExpectType Xyz65
culori.convertXyz65ToA98({ x: 0, y: 0, z: 0 }); // $ExpectType A98
culori.convertXyz65ToItp({ x: 0, y: 0, z: 0 }); // $ExpectType Itp
culori.convertXyz65ToJab({ x: 0, y: 0, z: 0 }); // $ExpectType Jab
culori.convertXyz65ToLab65({ x: 0, y: 0, z: 0 }); // $ExpectType Lab65
culori.convertXyz65ToP3({ x: 0, y: 0, z: 0 }); // $ExpectType P3
culori.convertXyz65ToRec2020({ x: 0, y: 0, z: 0 }); // $ExpectType Rec2020
culori.convertXyz65ToRgb({ x: 0, y: 0, z: 0 }); // $ExpectType Rgb
culori.convertXyz65ToXyz50({ x: 0, y: 0, z: 0 }); // $ExpectType Xyz50
culori.convertYiqToRgb({ y: 0, i: 0, q: 0 }); // $ExpectType Rgb
culori.converter("rec2020"); // $ExpectType ConvertFn<"rec2020">
culori.cubehelix("#ffffff"); // $ExpectType Cubehelix | undefined
culori.differenceCie76(); // $ExpectType DiffFn
culori.differenceCie94(); // $ExpectType DiffFn
culori.differenceCiede2000(); // $ExpectType DiffFn
culori.differenceCmc(); // $ExpectType DiffFn
culori.differenceEuclidean(); // $ExpectType DiffFn
culori.differenceHueChroma({ h: 0, c: 0 }, { h: 120, c: 0 }); // $ExpectType number
culori.differenceHueNaive({ h: 0 }, { h: 120 }); // $ExpectType number
culori.differenceHueSaturation({ h: 0, s: 0 }, { h: 120, s: 0 }); // $ExpectType number
culori.differenceHyab(); // $ExpectType DiffFn
culori.differenceItp(); // $ExpectType DiffFn
culori.differenceKotsarenkoRamos(); // $ExpectType DiffFn
culori.displayable("#ffffff"); // $ExpectType boolean
culori.dlab("#ffffff"); // $ExpectType Dlab | undefined
culori.dlch("#ffffff"); // $ExpectType Dlch | undefined
culori.easingGamma(2); // $ExpectType (t: number) => number
culori.easingInOutSine(0); // $ExpectType number
culori.easingMidpoint(); // $ExpectType (t: number) => number
culori.easingSmootherstep(0); // $ExpectType number
culori.easingSmoothstep(0); // $ExpectType number
culori.easingSmoothstepInverse(0); // $ExpectType number
culori.filterBrightness(); // $ExpectType ColorToSameColorMapper
culori.filterContrast(); // $ExpectType ColorToSameColorMapper
culori.filterDeficiencyDeuter(0); // $ExpectType <C extends Color>(color: C) => C
culori.filterDeficiencyProt(0); // $ExpectType <C extends Color>(color: C) => C
culori.filterDeficiencyTrit(0); // $ExpectType <C extends Color>(color: C) => C
culori.filterGrayscale(); // $ExpectType ColorToSameColorMapper
culori.filterHueRotate(); // $ExpectType ColorToSameColorMapper
culori.filterInvert(); // $ExpectType ColorToSameColorMapper
culori.filterSaturate(); // $ExpectType ColorToSameColorMapper
culori.filterSepia(); // $ExpectType ColorToSameColorMapper
culori.fixupAlpha([1, 1, 1]); // $ExpectType number[]
culori.fixupHueDecreasing([]); // $ExpectType number[]
culori.fixupHueIncreasing([]); // $ExpectType number[]
culori.fixupHueLonger([]); // $ExpectType number[]
culori.fixupHueShorter([]); // $ExpectType number[]
culori.formatCss("#ffffff"); // $ExpectType string | undefined
culori.formatHex("#ffffff"); // $ExpectType string | undefined
culori.formatHex8("#ffffff"); // $ExpectType string | undefined
culori.formatHsl("#ffffff"); // $ExpectType string | undefined
culori.formatRgb("#ffffff"); // $ExpectType string | undefined
culori.getMode("oklab"); // $ExpectType Omit<ConvertFn<"lab">, keyof OklabDefinitionMixin> & OklabDefinitionMixin
culori.hsi("#ffffff"); // $ExpectType Hsi | undefined
culori.hsl("#ffffff"); // $ExpectType Hsl | undefined
culori.hsv("#ffffff"); // $ExpectType Hsv | undefined
culori.hwb("#ffffff"); // $ExpectType Hwb | undefined
culori.inGamut(); // $ExpectType (color: string | Color) => boolean
culori.interpolate(["#ffff", "#0000"]); // $ExpectType Interpolator<"rgb">
culori.interpolateWith<"rgb">((v) => v / 2); // $ExpectType (colors: ColorsParameter, mode?: "rgb" | undefined, overrides?: InterpolateOverridesParameter<"rgb"> | undefined) => Interpolator<"rgb">
culori.interpolateWithPremultipliedAlpha<"rgb">(["red", "transparent", "blue"]); // $ExpectType Interpolator<"rgb">
culori.interpolatorLinear([3, 10, 1]); // $ExpectType (t: number) => number
culori.interpolatorPiecewise(culori.lerp); // $ExpectType (arr: number[]) => (t: number) => number
culori.interpolatorSplineBasis([3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05]); // $ExpectType (t: number) => number
culori.interpolatorSplineBasisClosed([3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05]); // $ExpectType (t: number) => number
culori.interpolatorSplineMonotone([3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05]); // $ExpectType (t: number) => number
culori.interpolatorSplineMonotone2([3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05]); // $ExpectType (t: number) => number
culori.interpolatorSplineMonotoneClosed([3, 2.8, 2.5, 1, 0.95, 0.8, 0.5, 0.1, 0.05]); // $ExpectType (t: number) => number
culori.interpolatorSplineNatural([10, 20, 0, 40, 70]); // $ExpectType (t: number) => number
culori.interpolatorSplineNaturalClosed([10, 20, 0, 40, 70]); // $ExpectType (t: number) => number
culori.itp("#ffffff"); // $ExpectType Itp | undefined
culori.jab("#ffffff"); // $ExpectType Jab | undefined
culori.jch("#ffffff"); // $ExpectType Jch | undefined
culori.lab("#ffffff"); // $ExpectType Lab | undefined
culori.lab65("#ffffff"); // $ExpectType Lab65 | undefined
culori.lch("#ffffff"); // $ExpectType Lch | undefined
culori.lch65("#ffffff"); // $ExpectType Lch65 | undefined
culori.lchuv("#ffffff"); // $ExpectType Lchuv | undefined
culori.lerp(0, 0, 0); // $ExpectType number
culori.lrgb("#ffffff"); // $ExpectType Lrgb | undefined
culori.luv("#ffffff"); // $ExpectType Luv | undefined
culori.mapAlphaDivide(0, "rgb", { mode: "rgb", r: 0, g: 0, b: 0 }); // $ExpectType number
culori.mapAlphaMultiply(0, "rgb", { mode: "rgb", r: 0, g: 0, b: 0 }); // $ExpectType number
culori.mapTransferGamma(); // $ExpectType (v: number, ch: string) => number
culori.mapTransferLinear(); // $ExpectType (v: number, ch: string) => number
culori.mapper(culori.mapAlphaMultiply); // $ExpectType ColorToRgbMapper
culori.nearest(["red", "lime"], culori.differenceCiede2000()); // $ExpectType (color: string | Color, n?: number | undefined, τ?: number | undefined) => string[]
culori.okhsl("#ffffff"); // $ExpectType Okhsl | undefined
culori.okhsv("#ffffff"); // $ExpectType Okhsv | undefined
culori.oklab("#ffffff"); // $ExpectType Oklab | undefined
culori.oklch("#ffffff"); // $ExpectType Oklch | undefined
culori.p3("#ffffff"); // $ExpectType P3 | undefined
culori.parse("#ffffff"); // $ExpectType Color | undefined
culori.parseHex("#ffffff"); // $ExpectType Rgb | undefined
culori.parseHsl("color(hsl 0 0 0)"); // $ExpectType Hsl | undefined
culori.parseHslLegacy("hsl(0, 0, 0)"); // $ExpectType Hsl | undefined
culori.parseHwb("color(hwb 0 0 0)"); // $ExpectType Hwb | undefined
culori.parseLab("color(lab 0 0 0)"); // $ExpectType Lab | undefined
culori.parseLch("color(lch 0 0 0)"); // $ExpectType Lch | undefined
culori.parseNamed("rebeccapurple"); // $ExpectType Rgb | undefined
culori.parseOklab("color(oklab 0 0 0)"); // $ExpectType Oklab | undefined
culori.parseOklch("color(oklch 0 0 0)"); // $ExpectType Oklch | undefined
culori.parseRgb("color(srgb 0 0 0)"); // $ExpectType Rgb | undefined
culori.parseRgbLegacy("rgb(0, 0, 0)"); // $ExpectType Rgb | undefined
culori.parseTransparent("transparent"); // $ExpectType { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } | undefined
culori.prophoto("#ffffff"); // $ExpectType Prophoto | undefined
culori.random(); // $ExpectType Rgb
culori.rec2020("#ffffff"); // $ExpectType Rec2020 | undefined
culori.rgb("#ffffff"); // $ExpectType Rgb | undefined
culori.round(2); // $ExpectType <T>(value: T) => T
culori.samples(5); // $ExpectType number[]
culori.serializeHex({ mode: "rgb", r: 0, g: 0, b: 0 }); // $ExpectType string
culori.serializeHex8({ r: 0, g: 0, b: 0 }); // $ExpectType string
culori.serializeHsl({ h: 0, s: 0, l: 0 }); // $ExpectType string | undefined
culori.serializeRgb({ r: 0, g: 0, b: 0 }); // $ExpectType string | undefined
culori.toGamut("p3", "rgb"); // $ExpectType (color: string | Color) => P3
culori.trilerp(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // $ExpectType number
culori.unlerp(0, 0, 0); // $ExpectType number
culori.useMode(culori.modeA98); // $ExpectType ConvertFn<"a98">
culori.useMode(culori.modeCubehelix); // $ExpectType ConvertFn<"cubehelix">
culori.useMode(culori.modeDlab); // $ExpectType ConvertFn<"dlab">
culori.useMode(culori.modeDlch); // $ExpectType ConvertFn<"dlch">
culori.useMode(culori.modeHsi); // $ExpectType ConvertFn<"hsi">
culori.useMode(culori.modeHsl); // $ExpectType ConvertFn<"hsl">
culori.useMode(culori.modeHsv); // $ExpectType ConvertFn<"hsv">
culori.useMode(culori.modeHwb); // $ExpectType ConvertFn<"hwb">
culori.useMode(culori.modeItp); // $ExpectType ConvertFn<"itp">
culori.useMode(culori.modeJab); // $ExpectType ConvertFn<"jab">
culori.useMode(culori.modeJch); // $ExpectType ConvertFn<"jch">
culori.useMode(culori.modeLab); // $ExpectType ConvertFn<"lab">
culori.useMode(culori.modeLab65); // $ExpectType ConvertFn<"lab65">
culori.useMode(culori.modeLch); // $ExpectType ConvertFn<"lch">
culori.useMode(culori.modeLch65); // $ExpectType ConvertFn<"lch65">
culori.useMode(culori.modeLchuv); // $ExpectType ConvertFn<"lchuv">
culori.useMode(culori.modeLrgb); // $ExpectType ConvertFn<"lrgb">
culori.useMode(culori.modeLuv); // $ExpectType ConvertFn<"luv">
culori.useMode(culori.modeOkhsl); // $ExpectType ConvertFn<"okhsl">
culori.useMode(culori.modeOkhsv); // $ExpectType ConvertFn<"okhsv">
culori.useMode(culori.modeOklab); // $ExpectType ConvertFn<"oklab">
culori.useMode(culori.modeOklch); // $ExpectType ConvertFn<"oklch">
culori.useMode(culori.modeP3); // $ExpectType ConvertFn<"p3">
culori.useMode(culori.modeProphoto); // $ExpectType ConvertFn<"prophoto">
culori.useMode(culori.modeRec2020); // $ExpectType ConvertFn<"rec2020">
culori.useMode(culori.modeRgb); // $ExpectType ConvertFn<"rgb">
culori.useMode(culori.modeXyb); // $ExpectType ConvertFn<"xyb">
culori.useMode(culori.modeXyz50); // $ExpectType ConvertFn<"xyz50">
culori.useMode(culori.modeXyz65); // $ExpectType ConvertFn<"xyz65">
culori.useMode(culori.modeYiq); // $ExpectType ConvertFn<"yiq">
culori.useParser((str) => ({ mode: "rgb", r: 0, g: 0, b: 0 })); // $ExpectType undefined
culori.useParser("--oklab", "oklab"); // $ExpectType undefined
culori.wcagContrast("#0000ff", "#008080"); // $ExpectType number
culori.wcagLuminance("#ffffff"); // $ExpectType number
culori.xyb("#ffffff"); // $ExpectType Xyb | undefined
culori.xyz50("#ffffff"); // $ExpectType Xyz50 | undefined
culori.xyz65("#ffffff"); // $ExpectType Xyz65 | undefined
culori.yiq("#ffffff"); // $ExpectType Yiq | undefined
