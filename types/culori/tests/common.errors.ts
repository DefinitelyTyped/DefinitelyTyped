import type { TakeColorChannels } from '../src/common';

// THROWS Property 'l' is missing in type '{ h: number; s: number; }' but required in type 'TakeColorChannels<"hsl">'.
// @ts-expect-error
const hsl1: TakeColorChannels<'hsl'> = { h: 30, s: 0.5 };

// THROWS Property 's' is missing in type '{ l: number; }' but required in type 'TakeColorChannels<"hsl">'.
// @ts-expect-error
const hsl2: TakeColorChannels<'hsl'> = { l: 1 };
