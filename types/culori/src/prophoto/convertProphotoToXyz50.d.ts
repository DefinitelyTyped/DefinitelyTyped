import { Prophoto } from './types';
import { Xyz50 } from '../xyz50/types';

declare function convertProphotoToXyz50(color: Omit<Prophoto, 'mode'>): Xyz50;

export default convertProphotoToXyz50;
