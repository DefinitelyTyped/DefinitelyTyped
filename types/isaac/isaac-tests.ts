import * as isaac from 'isaac';

const r1 = isaac.random();
const r2 = isaac.rand();
isaac.reset();
isaac.seed(42);
const r3 = isaac.random();
const r4 = isaac.rand();
