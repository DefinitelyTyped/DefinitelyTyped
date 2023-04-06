import { Okhsv } from './types';
import { Oklab } from '../oklab/types';

declare function convertOkhsvToOklab(color: Omit<Okhsv, 'mode'>): Oklab;

export default convertOkhsvToOklab;
