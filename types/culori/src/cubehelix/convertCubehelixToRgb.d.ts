import { Cubehelix } from './types';
import { Rgb } from '../rgb/types';

declare function convertCubehelixToRgb(color: Omit<Cubehelix, 'mode'>): Rgb;

export default convertCubehelixToRgb;
