import { Xyz65 } from './types';
import { Rgb } from '../rgb/types';

declare function convertXyz65ToRgb(color: Omit<Xyz65, 'mode'>): Rgb;

export default convertXyz65ToRgb;
