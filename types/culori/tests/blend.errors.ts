import blend from '../src/blend';
import type { Rgb } from '../src/rgb/types';

// THROWS Argument of type '[]' is not assignable to parameter of type 'NonEmptyArray<string | Color>'.
// @ts-expect-error
const c1 = blend([]);

// THROWS Type 'number' is not assignable to type 'string | Color'.
// @ts-expect-error
const c2: Rgb = blend([12312]);

const c3: Rgb = blend(
    ['white', 'rgba(0, 0, 0, 0.5)'],
    // THROWS Argument of type '"darke"' is not assignable to parameter of type 'BlendTypes | BlendingFunction'.
    // @ts-expect-error
    'darke',
);

// THROWS Type 'Jab' is missing the following properties from type 'Rgb': r, g
// @ts-expect-error
const c4: Rgb = blend(['white', 'rgba(0, 0, 0, 0.5)'], 'darken', 'jab');
