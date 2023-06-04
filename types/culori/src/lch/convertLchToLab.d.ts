import { Lch } from './types';
import { Lab } from '../lab/types';

declare function convertLchToLab(color: Omit<Lch, 'mode'>): Lab;

export default convertLchToLab;
