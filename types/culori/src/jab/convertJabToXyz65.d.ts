import { Jab } from './types';
import { Xyz65 } from '../xyz65/types';

declare function convertJabToXyz65(color: Omit<Jab, 'mode'>): Xyz65;

export default convertJabToXyz65;
