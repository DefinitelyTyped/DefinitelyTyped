import { Color, Mode } from './common';

export declare function clampRgb(color: string): Color | undefined;
export declare function clampRgb<C extends Color>(color: C): C;

export declare function clampChroma(color: string): Color | undefined;
export declare function clampChroma<C extends Color>(color: C): C;
export declare function clampChroma<C extends Color>(color: C, mode: Mode): C;
export declare function clampChroma<C extends Color>(
	color: string,
	mode: Mode
): Color | undefined;
