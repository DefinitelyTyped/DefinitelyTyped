import { Color, Mode } from "./common";

declare function differenceHueChroma(colorA: { h: number; c: number }, colorB: { h: number; c: number }): number;

declare function differenceHueSaturation(colorA: { h: number; s: number }, colorB: { h: number; s: number }): number;

declare function differenceHueNaive(colorA: { h: number }, colorB: { h: number }): number;

export type DiffFn = (colorA: Color | string, colorB: Color | string) => number;

declare function differenceEuclidean(mode?: Mode, weights?: [number, number, number, number]): DiffFn;

declare function differenceCie76(): DiffFn;

declare function differenceCie94(kL?: number, K1?: number, K2?: number): DiffFn;

declare function differenceCiede2000(Kl?: number, Kc?: number, Kh?: number): DiffFn;

declare function differenceCmc(l?: number, c?: number): DiffFn;

declare function differenceHyab(): DiffFn;

declare function differenceKotsarenkoRamos(): DiffFn;

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
};
