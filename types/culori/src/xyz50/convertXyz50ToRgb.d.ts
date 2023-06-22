import { Xyz50 } from './types';
import { Rgb } from '../rgb/types';

declare function convertXyz50ToRgb(color: Omit<Xyz50, 'mode'>): Rgb;

export default convertXyz50ToRgb;
