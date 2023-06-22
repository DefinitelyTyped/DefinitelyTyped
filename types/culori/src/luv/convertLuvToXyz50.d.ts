import { Luv } from './types';
import { Xyz50 } from '../xyz50/types';

declare function convertLuvToXyz50(color: Omit<Luv, 'mode'>): Xyz50;

export default convertLuvToXyz50;
