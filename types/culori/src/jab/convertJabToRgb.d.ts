import { Jab } from './types';
import { Rgb } from '../rgb/types';

declare function convertJabToRgb(color: Omit<Jab, 'mode'>): Rgb;

export default convertJabToRgb;
