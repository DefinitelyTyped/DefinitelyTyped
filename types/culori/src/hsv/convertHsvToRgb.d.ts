import { Hsv } from './types';
import { Rgb } from '../rgb/types';

export default function convertHsvToRgb(color: Omit<Hsv, 'mode'>): Rgb;
