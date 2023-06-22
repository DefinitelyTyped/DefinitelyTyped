import { Lchuv } from './types';
import { Luv } from '../luv/types';

declare function convertLchuvToLuv(color: Omit<Lchuv, 'mode'>): Luv;

export default convertLchuvToLuv;
