import random from '../src/random';
import type { Rgb } from '../src/rgb/types';
import type { Yiq } from '../src/yiq/types';

const c1 = random();

const c2: Rgb = random();

const c3: Rgb = random('rgb');

const c4: Yiq = random('yiq');

const c5: Yiq = random('yiq', {
	y: 1
});

const c6: Yiq = random('yiq', {
	y: [0, 1]
});

const c7 = random(undefined, {
	r: 1
});

const c8 = random(undefined, {
	r: [0, 1]
});
