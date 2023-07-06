import { Okhsl } from './types';
import { Oklab } from '../oklab/types';

declare function convertOkhslToOklab(hsl: Omit<Okhsl, 'mode'>): Oklab;

export default convertOkhslToOklab;
