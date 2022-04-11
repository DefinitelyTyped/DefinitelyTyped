import * as R from 'ramda';

() => {
    const x0: boolean = R.or(false, true); // => false
    const x1: number | any[] = R.or(0, []); // => []
    const x2: number | any[] = R.or(0)([]); // => []
    const x3: string | null = R.or(null, ''); // => ''
};
