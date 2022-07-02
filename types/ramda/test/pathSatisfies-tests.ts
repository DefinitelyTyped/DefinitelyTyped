import * as R from 'ramda';

() => {
    const a: boolean = R.pathSatisfies((x: number) => x > 0, ['x'], {
        x: 1,
        y: 2,
    }); // => true
    const b: boolean = R.pathSatisfies(
        (x: number) => x > 0,
        ['x'],
    )({
        x: 1,
        y: 2,
    }); // => true
    const c: boolean = R.pathSatisfies((x: number) => x > 0)(['x'])({
        x: 1,
        y: 2,
    }); // => true
};
