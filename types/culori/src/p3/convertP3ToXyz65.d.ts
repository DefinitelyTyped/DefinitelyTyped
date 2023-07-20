import { P3 } from './types';
import { Xyz65 } from '../xyz65/types';

declare function convertP3ToXyz65(color: Omit<P3, 'mode'>): Xyz65;

export default convertP3ToXyz65;
