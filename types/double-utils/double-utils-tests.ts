import { decompose, exp, format, frac, sign } from 'double-utils';

sign(1.1); // $ExpectType 0 | 1
exp(1.1); // $ExpectType number
frac(1.1); // $ExpectType number
decompose(1.1); // $ExpectType [sign: number, exp: number, frac: number]
format(1.1); // $ExpectType string
format(1.1, false); // $ExpectType string
