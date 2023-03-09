import { converters } from '../src/modes';
import type { Cubehelix, Rgb } from '../';

// THROWS Type '((c: Omit<Cubehelix, "mode">) => Rgb) | undefined' is not assignable to type '(c: Omit<Cubehelix, "mode">) => Rgb'
// @ts-expect-error
const c1: (c: Omit<Cubehelix, 'mode'>) => Rgb = converters.cubehelix.rgb;
