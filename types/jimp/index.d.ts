// Type definitions for jimp 0.2
// Project: https://github.com/oliver-moran/jimp#readme
// Definitions by: Jack Works <https://github.com/Jack-Works>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace jimp {
	type Callback<T> = (this: JimpImage, err: Error, data: T) => void;
	type ResizeMode = string;
	type PresetFont = string;
	type FileMINE = string;
	type AlignMode = number;
	type FilterType = number;

	// Used in font info provided by parse-bmfont-ascii
	type FontBoolean = 0 | 1;
	interface FontChar {
		id: number;
		x: number;
		y: number;
		weight: number;
		height: number;
		xoffset: number;
		yoffset: number;
		xadvance: number;
		page: number;
		chnl: number;
	}
	type Font = {
		common: {lineHeight: number, base: number, scaleW: number, scaleH: number, pages: number, packed: number},
		info: {
			face: string,
			size: number,
			bold: FontBoolean,
			italic: FontBoolean,
			charset: string,
			unicode: FontBoolean,
			stretchH: number,
			smooth: FontBoolean,
			aa: number,
			padding: [number, number, number, number],
			spacing: [number, number]
		},
		kernings: any,
		pages: JIMP[],
		chars: {
			[char: number]: FontChar,
			[char: string]: FontChar
		}
	} | PresetFont;

	class JimpImage {
		constructor(width: number, height: number, callback?: Callback<JimpImage>);
		constructor(width: number, height: number, initialColor: number, callback?: Callback<JimpImage>);

		/* Get/set meta data */
		hash(n?: number): string;

		getExtension(): string;
		getMIME(): FileMINE;

		getPixelColor(x: number, y: number): number;
		setPixelColor(hex: number, x: number, y: number): void;

		/* Save */
		write(path: string, callback?: Callback<undefined>): void;
		getBase64(mine: FileMINE, callback?: Callback<string>): void;
		getBuffer(mine: FileMINE, callback?: Callback<Buffer>): void;

		/* Parameter */
		quality(n: number): JimpImage;
		rgba(is: boolean): JimpImage;
		filterType(type: FilterType): JimpImage;
		deflateLevel(level: number): JimpImage;

		/* Operation */
		clone(): JimpImage;
		print(font: Font, x: number, y: number, text: string, width?: number): JimpImage;

		/* Adv */
		color(
			params: Array<{
				apply: 'lighten' | 'brighten' | 'darken' | 'desaturate' | 'saturate' | 'greyscale' | 'spin' | 'hue' | 'tint' | 'shade' | 'red' | 'green' | 'blue',
				params: [number]
			} | {
				apply: 'mix',
				params: [string, number]
			} | {
				apply: 'xor',
				params: [string]
			}>): JimpImage;

		convolution(matrix: number[][]): JimpImage;
		scan(x: number, y: number, width: number, height: number, callback?: (this: JimpImage, x: number, y: number, idx: number) => void): JimpImage;

		/* Low level data */
		bitmap: {data: Buffer, readonly width: number, readonly height: number};
		readonly _originalMime: string;

		/* Resize */
		contain(width: number, height: number, callback?: Callback<JimpImage>): JimpImage;
		contain(width: number, height: number, alignBitsOrMode?: number | ResizeMode, callback?: Callback<JimpImage>): JimpImage;
		contain(width: number, height: number, alignBits: number, mode?: ResizeMode, callback?: Callback<JimpImage>): JimpImage;

		cover(width: number, height: number, callback?: Callback<JimpImage>): JimpImage;
		cover(width: number, height: number, alignBitsOrmode?: ResizeMode | number, callback?: Callback<JimpImage>): JimpImage;
		cover(width: number, height: number, alignBits: number, mode?: ResizeMode, callback?: Callback<JimpImage>): JimpImage;

		resize(width: number, height: number, callback?: Callback<JimpImage>): JimpImage;
		resize(width: number, height: number, mode?: ResizeMode, callback?: Callback<JimpImage>): JimpImage;

		scale(factor: any, callback?: Callback<JimpImage>): JimpImage;
		scale(factor: any, mode?: ResizeMode, callback?: Callback<JimpImage>): JimpImage;

		scaleToFit(width: number, height: number, callback?: Callback<JimpImage>): JimpImage;
		scaleToFit(width: number, height: number, mode?: ResizeMode, callback?: Callback<JimpImage>): JimpImage;

		/* Crop */
		autocrop(callback?: Callback<JimpImage>): JimpImage;
		crop(x: number, y: number, width: number, height: number, callback?: Callback<JimpImage>): JimpImage;

		/* Composing */
		blit(scr: string, x: number, y: number, callback?: Callback<JimpImage>): JimpImage;
		blit(scr: string, x: number, y: number, srcx?: number, srcy?: number, callback?: Callback<JimpImage>): JimpImage;
		blit(scr: string, x: number, y: number, srcx?: number, srcy?: number, srcw?: number, srch?: number, callback?: Callback<JimpImage>): JimpImage;

		composite(scr: string, x: number, y: number, callback?: Callback<JimpImage>): JimpImage;
		mask(scr: string, x: number, y: number, callback?: Callback<JimpImage>): JimpImage;

		/* Flip and rotate */
		flip(horz: any, vert: any, callback?: Callback<JimpImage>): JimpImage;
		mirror(horz: any, vert: any, callback?: Callback<JimpImage>): JimpImage;
		rotate(deg: number, callback?: Callback<JimpImage>): JimpImage;
		rotate(deg: number, mode?: any, callback?: Callback<JimpImage>): JimpImage;

		/* Colour */
		brightness(val: number, callback?: Callback<JimpImage>): JimpImage;
		contrast(val: number, callback?: Callback<JimpImage>): JimpImage;
		dither565(callback?: Callback<JimpImage>): JimpImage;
		greyscale(callback?: Callback<JimpImage>): JimpImage;
		invert(callback?: Callback<JimpImage>): JimpImage;
		normalize(callback?: Callback<JimpImage>): JimpImage;

		/* Alpha channel */
		fade(val: number, callback?: Callback<JimpImage>): JimpImage;
		opacity(val: number, callback?: Callback<JimpImage>): JimpImage;
		opaque(callback?: Callback<JimpImage>): JimpImage;
		background(hex: number, callback?: Callback<JimpImage>): JimpImage;

		/* Blurs */
		gaussian(pixel: number, callback?: Callback<JimpImage>): JimpImage;
		blur(pixel: number, callback?: Callback<JimpImage>): JimpImage;

		/* Effects */
		posterize(level: number, callback?: Callback<JimpImage>): JimpImage;
		sepia(callback?: Callback<JimpImage>): JimpImage;
	}
	class JIMP extends JimpImage {
		static read(path: string | Buffer, callback?: Callback<JimpImage>): Promise<JimpImage>;
		static loadFont(path: string | PresetFont, callback?: Callback<Font>): Promise<Font>;
		static rgbaToInt(r: number, g: number, b: number, alpha: number): number;
		static intToRGBA(hex: number): {r: number, g: number, b: number, a: number};
		static distance(image: JimpImage, image2: JimpImage): number;
		static diff(image1: JimpImage, image2: JimpImage, threshold?: number): {image: JimpImage, percent: number};
		static deflateStrategy(deflate: number): void;

		static readonly RESIZE_NEAREST_NEIGHBOR: ResizeMode;
		static readonly RESIZE_BILINEAR: ResizeMode;
		static readonly RESIZE_BICUBIC: ResizeMode;
		static readonly RESIZE_HERMITE: ResizeMode;
		static readonly RESIZE_BEZIER: ResizeMode;

		static readonly FONT_SANS_8_BLACK: PresetFont;
		static readonly FONT_SANS_16_BLACK: PresetFont;
		static readonly FONT_SANS_32_BLACK: PresetFont;
		static readonly FONT_SANS_64_BLACK: PresetFont;
		static readonly FONT_SANS_128_BLACK: PresetFont;

		static readonly FONT_SANS_8_WHITE: PresetFont;
		static readonly FONT_SANS_16_WHITE: PresetFont;
		static readonly FONT_SANS_32_WHITE: PresetFont;
		static readonly FONT_SANS_64_WHITE: PresetFont;
		static readonly FONT_SANS_128_WHITE: PresetFont;

		static readonly MIME_PNG: FileMINE;
		static readonly MIME_JPEG: FileMINE;
		static readonly MIME_BMP: FileMINE;
		static readonly AUTO: number;

		static readonly HORIZONTAL_ALIGN_LEFT: AlignMode;
		static readonly HORIZONTAL_ALIGN_CENTER: AlignMode;
		static readonly HORIZONTAL_ALIGN_RIGHT: AlignMode;
		static readonly VERTICAL_ALIGN_TOP: AlignMode;
		static readonly VERTICAL_ALIGN_MIDDLE: AlignMode;
		static readonly VERTICAL_ALIGN_BOTTOM: AlignMode;

		static readonly PNG_FILTER_AUTO: FilterType;
		static readonly PNG_FILTER_NONE: FilterType;
		static readonly PNG_FILTER_SUB: FilterType;
		static readonly PNG_FILTER_UP: FilterType;
		static readonly PNG_FILTER_AVERAGE: FilterType;
		static readonly PNG_FILTER_PAETH: FilterType;
	}
}
export = jimp.JIMP;
