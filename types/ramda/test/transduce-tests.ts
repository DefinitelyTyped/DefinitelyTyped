import * as R from 'ramda';

() => {
    const numbers = [1, 2, 3, 4];
    // $ExpectType (xs: readonly number[]) => number[]
    const transducer = R.compose(R.map(R.add(1)), R.take<number>(2));
    const fn = R.flip<number, readonly number[], number[]>(R.append);
    // $ExpectType number[]
    R.transduce(transducer, fn, [], numbers); // => [2, 3]
    // $ExpectType number[]
    R.transduce(transducer, fn, [])(numbers); // => [2, 3]
    // $ExpectType number[]
    R.transduce(transducer, fn)([], numbers); // => [2, 3]
    // $ExpectType number[]
    R.transduce<number, number, number[]>(transducer)(fn, [], numbers); // => [2, 3]
    // @ts-expect-error
    R.transduce(transducer, fn, [], ['1']);
    // $ExpectType number
    R.transduce(transducer, (acc, n: number) => acc + n, 0, [1, 2, 3]);
    // @ts-expect-error
    R.transduce(transducer, (acc: number, n: number) => acc + n, 0, ['1']);
    // @ts-expect-error
    R.transduce(transducer, (acc: string, n: number) => acc + n, 0, [1, 2, 3]);
    // @ts-expect-error
    R.transduce(transducer, (acc: number, n: string) => acc + Number(n), 0, [1, 2, 3]);

    // $ExpectType (a: string) => string
    R.compose((a: string) => a + '', R.take(2) as (a: string) => string);

    const isOdd = (x: number) => x % 2 !== 0;
    const firstOddTransducer = R.compose(R.filter(isOdd), R.take<number>(1));
    // $ExpectType number[]
    R.transduce(firstOddTransducer, R.flip<number, readonly number[], number[]>(R.append), [], R.range(0, 100)); // => [1]
};
