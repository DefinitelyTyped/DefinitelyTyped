import { Rec2020 } from './types';
import { Xyz65 } from '../xyz65/types';

declare function convertRec2020ToXyz65(color: Omit<Rec2020, 'mode'>): Xyz65;

export default convertRec2020ToXyz65;
