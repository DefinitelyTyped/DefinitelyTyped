import { Hsi } from './types';
import { Rgb } from '../rgb/types';

export default function convertHsiToRgb(color: Omit<Hsi, 'mode'>): Rgb;
