import { Lrgb } from './types';
import { FindColorByMode } from '../common';

declare function convertLrgbToRgb<M extends 'rgb' | 'p3' = 'rgb'>(
	color: Omit<Lrgb, 'mode'>,
	mode?: M
): FindColorByMode<M>;

export default convertLrgbToRgb;
