import * as wcwidth from 'wcwidth';

const length1 = wcwidth('한');   // => 2

const length2 = wcwidth('한글'); // => 4
