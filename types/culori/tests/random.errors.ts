import random from '../src/random';
import type { Rgb } from '../src/rgb/types';
import type { Yiq } from '../src/yiq/types';
import type { Hsl } from '../src/hsl/types';

// THROWS No overload matches this call
// @ts-expect-error
const c1 = random('1');

// THROWS Type 'Rgb' is not assignable to type 'Hsl'
// @ts-expect-error
const c2: Hsl = random();

// THROWS Type 'Hsi' is missing the following properties from type 'Rgb': r, g, b
// @ts-expect-error
const c3: Rgb = random('hsi');

// THROWS No overload matches this call
// @ts-expect-error
const c4: Yiq = random('yiq', {
    r: [1, 2],
});

// THROWS No overload matches this call
// @ts-expect-error
const c5: Yiq = random('yiq', {
    y: [],
});

// THROWS No overload matches this call
// @ts-expect-error
const c6: Yiq = random('yiq', {
    y: [1],
});

// THROWS No overload matches this call
// @ts-expect-error
const c7 = random(undefined, { h: [0, 1] });
