import * as R from 'ramda';

() => {
    const x0: boolean = R.and(false, true); // => false
    const x1: number | unknown[] = R.and(0, []); // => 0
    const x2: number | unknown[] = R.and(0)([]); // => 0
    const x3: string | null = R.and(null, ''); // => null
};
