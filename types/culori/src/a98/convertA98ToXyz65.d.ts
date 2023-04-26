import { A98 } from './types';
import { Xyz50 } from '../xyz50/types';

declare function convertA98ToXyz65(color: Omit<A98, 'mode'>): Xyz50;

export default convertA98ToXyz65;
