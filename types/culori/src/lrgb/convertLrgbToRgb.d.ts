import { Lrgb } from './types';
import { FindColorByMode, Mode } from '../common';

declare function convertLrgbToRgb<M extends Mode = 'rgb'>(color: Omit<Lrgb, 'mode'>, mode?: M): FindColorByMode<M>;

export default convertLrgbToRgb;
