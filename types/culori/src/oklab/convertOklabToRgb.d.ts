import { Oklab } from './types';
import { Rgb } from '../rgb/types';

declare function convertOklabToRgb(color: Omit<Oklab, 'mode'>): Rgb;

export default convertOklabToRgb;
