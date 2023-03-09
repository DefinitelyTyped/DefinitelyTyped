import { Lab } from './types';
import { Xyz50 } from '../xyz50/types';

declare function convertLabToXyz50(color: Omit<Lab, 'mode'>): Xyz50;

export default convertLabToXyz50;
