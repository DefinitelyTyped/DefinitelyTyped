import { Color, Mode } from "./common.js";

declare function differenceHueChroma(colorA: { h: number; c: number }, colorB: { h: number; c: number }): number;

declare function differenceHueSaturation(colorA: { h: number; s: number }, colorB: { h: number; s: number }): number;

declare function differenceHueNaive(colorA: { h: number }, colorB: { h: number }): number;

export type DiffFn = (colorA: Color | string, colorB: Color | string) => number;

declare function differenceEuclidean(mode?: Mode, weights?: [number, number, number, number]): DiffFn;

declare function differenceCie76(): DiffFn;

declare function differenceCie94(kL?: number, K1?: number, K2?: number): DiffFn;

/**
	CIEDE2000 color difference, original Matlab implementation by Gaurav Sharma
	Based on "The CIEDE2000 Color-Difference Formula: Implementation Notes, Supplementary Test Data, and Mathematical Observations"
	by Gaurav Sharma, Wencheng Wu, Edul N. Dalal in Color Research and Application, vol. 30. No. 1, pp. 21-30, February 2005.
	http://www2.ece.rochester.edu/~gsharma/ciede2000/
 */
declare function differenceCiede2000(Kl?: number, Kc?: number, Kh?: number): DiffFn;

/**
	CMC (l:c) difference formula

	References:
		https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_(1984)
		http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html
 */
declare function differenceCmc(l?: number, c?: number): DiffFn;

/**
	HyAB color difference formula, introduced in:

		Abasi S, Amani Tehran M, Fairchild MD.
		"Distance metrics for very large color differences."
		Color Res Appl. 2019; 1–16.
		https://doi.org/10.1002/col.22451

	PDF available at:

		http://markfairchild.org/PDFs/PAP40.pdf
 */
declare function differenceHyab(): DiffFn;

/**
	"Measuring perceived color difference using YIQ NTSC
	transmission color space in mobile applications"

		by Yuriy Kotsarenko, Fernando Ramos in:
		Programación Matemática y Software (2010)

	Available at:

		http://www.progmat.uaem.mx:8080/artVol2Num2/Articulo3Vol2Num2.pdf
 */
declare function differenceKotsarenkoRamos(): DiffFn;

/**
	ΔE_ITP, as defined in Rec. ITU-R BT.2124:

	https://www.itu.int/rec/R-REC-BT.2124/en
*/
declare function differenceItp(): DiffFn;

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
};
