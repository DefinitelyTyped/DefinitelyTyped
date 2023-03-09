import { Color } from './common';

declare function luminance(color: Color | string): number;

declare function contrast(
	colorA: Color | string,
	colorB: Color | string
): number;
