import * as R from 'ramda';

() => {
    const numbers = [1, 2, 3, 4];
    // $ExpectType (args_0: number[]) => number[]
    const transducer = R.compose<[number[]], number[], number[]>(R.map(R.add(1)), R.take(2));
    const fn = R.flip<number, number[], number[]>(R.append);
    R.transduce(transducer, fn, [], numbers); // => [2, 3]
    R.transduce(transducer, fn, [])(numbers); // => [2, 3]
    R.transduce(transducer, fn)([], numbers); // => [2, 3]
    R.transduce<number, number>(transducer)(fn, [], numbers); // => [2, 3]
};
