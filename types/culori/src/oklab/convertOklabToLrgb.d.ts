import { Oklab } from './types';
import { Lrgb } from '../lrgb/types';

declare function convertOklabToLrgb(color: Omit<Oklab, 'mode'>): Lrgb;

export default convertOklabToLrgb;
