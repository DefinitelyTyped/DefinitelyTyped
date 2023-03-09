import { filterBrightness } from '../src/filter';
import type { Hsl } from '../src/hsl/types';

const case_1_expect_success: Hsl = filterBrightness(1)({
	mode: 'hsl',
	h: 60,
	s: 1,
	l: 0.5,
	alpha: 0.25
});
