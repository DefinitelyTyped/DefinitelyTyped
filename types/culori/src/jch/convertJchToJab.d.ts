import { Jch } from './types';
import { Jab } from '../jab/types';

declare function convertJchToJab(color: Omit<Jch, 'mode'>): Jab;

export default convertJchToJab;
