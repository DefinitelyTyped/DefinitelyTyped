import modularscale = require('modularscale');
import { RatioLiteral } from 'modularscale';

// $ExpectError
const a: RatioLiteral = 'hey';
// ⚠️ ExpectType RatioLiteral not working (got 'double octave')
const b: RatioLiteral = 'double octave';
// $ExpectError
const c: RatioLiteral = 3;

// $ExpectType number
modularscale(3);
// $ExpectError
modularscale(b);
// $ExpectError
modularscale('phi');

// $ExpectType number
modularscale(3, 0.2);

// $ExpectType number
modularscale(3, b);
// $ExpectType number
modularscale(3, 'phi');
// $ExpectError
modularscale(3, 'foo');
