import { Yiq } from './types';
import { Rgb } from '../rgb/types';

declare function convertYiqToRgb(color: Omit<Yiq, 'mode'>): Rgb;

export default convertYiqToRgb;
