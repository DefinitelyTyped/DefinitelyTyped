import { CATs, defineCAT, adapt } from 'colorjs.io/src/CATs';

CATs['abc']; // $ExpectType CAT

// @ts-expect-error
defineCAT();
// @ts-expect-error
defineCAT({});

defineCAT({
    id: 'abc',
    toCone_M: [[123]],
    fromCone_M: [[123]],
});

// @ts-expect-error
adapt();
// @ts-expect-error
adapt([1, 2, 3]);
// @ts-expect-error
adapt([1, 2], [3, 4]);

adapt([1, 2, 3], [4, 5, 6]);
adapt([1, 2, 3], [4, 5, 6], 'Bradford');
