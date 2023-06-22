import { Dlch } from './types';
import { Lab65 } from '../lab65/types';

declare function convertDlchToLab65(color: Omit<Dlch, 'mode'>): Lab65;

export default convertDlchToLab65;
