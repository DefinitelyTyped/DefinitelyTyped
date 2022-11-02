import * as R from 'ramda';

() => {
    function double(x: number): number {
        return x + x;
    }

    function limit10(x: number): boolean {
        return x >= 10;
    }

    const func: (x: number) => boolean = R.compose(limit10, double);

    const wrongCompose = R.compose(
        double,
        // @ts-expect-error
        limit10,
    );
    const res: boolean = R.compose(limit10, double)(10);

    const f0 = (s: string) => +s;
    const f1 = (n: number) => n === 1;

    // $ExpectType (s: string) => boolean
    const f2 = R.compose(f1, f0);

    // akward example that bounces types between number and string
    const g0 = (list: number[]) => R.map(R.inc, list);
    const g1 = R.dropWhile(R.gt(10));
    const g2 = R.map((i: number) => (i > 5 ? 'bigger' : 'smaller'));
    const g3 = R.all((i: string) => i === 'smaller');
    // $ExpectType (list: number[]) => boolean
    const g = R.compose(g3, g2, g1, g0);
    const g_res: boolean = g([1, 2, 10, 13]);

    // compose with last function taking no params
    const f10 = () => 'str';
    const f11 = (str: string) => str;
    // $ExpectType () => string
    const f12 = R.compose(f11, f10);
};

() => {
    interface Person {
        last: string;
        age: number;
        first: string;
    }

    // $ExpectType (args_0: Person) => string
    const fullName = R.compose<[Person], string[], string>(R.join(' '), ({ first, last }) => [first, last]);
    fullName({ last: 'Bullet-Tooth', age: 33, first: 'Tony' }); // => 'Tony Bullet-Tooth'
};

() => {
    // Expected at least 1 arguments, but got 0
    // @ts-expect-error
    const f0 = R.compose();
    // $ExpectType (x: number, y: number) => number
    const f1 = R.compose(Math.pow);
    // $ExpectType (x: number, y: number) => number
    const f2 = R.compose(R.negate, Math.pow);
    // $ExpectType (x: number, y: number) => number
    const f3 = R.compose(R.inc, R.negate, Math.pow);
    // $ExpectType (x: number, y: number) => number
    const f4 = R.compose(R.inc, R.inc, R.negate, Math.pow);
    // $ExpectType (x: number, y: number) => number
    const f5 = R.compose(R.inc, R.inc, R.inc, R.negate, Math.pow);
    // $ExpectType (x: number, y: number) => number
    const f6 = R.compose(R.inc, R.inc, R.inc, R.inc, R.negate, Math.pow);
    // $ExpectType (x: number, y: number) => number
    const f7 = R.compose(R.inc, R.inc, R.inc, R.inc, R.inc, R.negate, Math.pow);
    // $ExpectType (x: number, y: number) => number
    const f8 = R.compose(R.inc, R.inc, R.inc, R.inc, R.inc, R.inc, R.negate, Math.pow);
    // $ExpectType (x: number, y: number) => number
    const f9 = R.compose(R.inc, R.inc, R.inc, R.inc, R.inc, R.inc, R.inc, R.negate, Math.pow);
    // $ExpectType (x: number, y: number) => number
    const f10 = R.compose(R.inc, R.inc, R.inc, R.inc, R.inc, R.inc, R.inc, R.inc, R.negate, Math.pow);
    const x1: number = f1(3, 4);
    const x2: number = f2(3, 4);
    const x3: number = f3(3, 4);
    const x4: number = f4(3, 4);
    const x5: number = f5(3, 4);
    const x6: number = f1(3, 4);
    const x7: number = f2(3, 4);
    const x8: number = f3(3, 4);
    const x9: number = f4(3, 4);
    const x10: number = f5(3, 4);
};

() => {
    function fn(a: string, b: number, c: string) {
        return [a, b, c];
    }

    // $ExpectType (a: string, b: number, c: string) => number
    const gn = R.compose(R.length, fn);
    const x: number = gn('Hello', 4, 'world');
};
