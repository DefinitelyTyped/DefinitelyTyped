import blend from '../src/blend';
import type { Rgb } from '../src/rgb/types';
import type { Jab } from '../src/jab/types';

const c1: Rgb = blend([
    { mode: 'rgb' as const, r: 1, g: 0, b: 0, alpha: 0.5 },
    { mode: 'rgb' as const, r: 0, g: 0, b: 1, alpha: 0.5 },
]);
const c2: Rgb = blend(['white', 'rgba(0, 0, 0, 0.5)']);

const c3: Rgb = blend(['white', 'rgba(0, 0, 0, 0.5)'], 'darken');
const c4: Rgb = blend(['white', 'rgba(0, 0, 0, 0.5)'], b => b * 2);
const c5: Rgb = blend(['white', 'rgba(0, 0, 0, 0.5)'], (b, s) => b + s);
const c6: Rgb = blend(['white', 'rgba(0, 0, 0, 0.5)'], 'darken');
const c7: Jab = blend(['white', 'rgba(0, 0, 0, 0.5)'], 'darken', 'jab');
