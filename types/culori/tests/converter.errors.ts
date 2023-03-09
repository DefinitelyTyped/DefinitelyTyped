import converter from '../src/converter';
import type { Rgb } from '../src/rgb/types';

// THROWS Type 'Rgb | undefined' is not assignable to type 'Rgb'.
// @ts-expect-error
const case_1_expect_error: Rgb = converter()('#f0f0f0');

// THROWS Type 'Lab | undefined' is not assignable to type 'Rgb'.
// @ts-expect-error
const case_3_expect_error: Rgb = converter('lab')('#f0f0f0');
