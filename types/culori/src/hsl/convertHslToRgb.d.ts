import { Hsl } from './types';
import { Rgb } from '../rgb/types';

export default function convertHslToRgb(color: Omit<Hsl, 'mode'>): Rgb;
