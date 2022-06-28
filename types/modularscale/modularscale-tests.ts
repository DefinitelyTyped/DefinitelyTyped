import modularscale = require('modularscale');
import { RatioLiteral } from 'modularscale';

// @ts-expect-error
const a: RatioLiteral = 'hey';
// ⚠️ ExpectType RatioLiteral not working (got 'double octave')
const b: RatioLiteral = 'double octave';
// @ts-expect-error
const c: RatioLiteral = 3;

// $ExpectType number
modularscale(3);
// @ts-expect-error
modularscale(b);
// @ts-expect-error
modularscale('phi');

// $ExpectType number
modularscale(3, 0.2);

// $ExpectType number
modularscale(3, b);
// $ExpectType number
modularscale(3, 'phi');
// @ts-expect-error
modularscale(3, 'foo');
