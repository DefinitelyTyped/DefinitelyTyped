import { average } from '../src/average';
import type { Rgb } from '../src/rgb/types';
import type { Lch } from '../src/lch/types';
import type { Oklab } from '../src/oklab/types';

const c1: Rgb = average(['#ff0000', '#0000ff']);

const c2: Lch = average(['#ff0000', '#0000ff'], 'lch');

const c3: Lch = average(['#ff0000', '#0000ff'], 'lch', _ => 1);

const c4: Rgb = average(['#ff0000', '#0000ff'], undefined, _ => 1);

const c5: Rgb = average(['#ff0000', '#0000ff'], undefined, {
	r: _ => 1
});

const c6: Oklab = average(['#ff0000', '#0000ff'], 'oklab', {
	b: _ => 1
});
