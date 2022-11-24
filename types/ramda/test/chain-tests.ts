import * as R from 'ramda';

// array
() => {
    function duplicate(n: number) {
        return [n, n];
    }

    function duplicateConst(n: number) {
        return [n, n] as const;
    }

    function duplicateReadonly(n: number): ReadonlyArray<number> {
        return [n, n];
    }

    // $ExpectType (list: readonly number[]) => number[]
    const chainDuplicate = R.chain(duplicate);

    // $ExpectType number[]
    chainDuplicate([1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
    // $ExpectType number[]
    R.chain(duplicate)([1, 2, 3]); // => [1, 1, 2, 2, 3, 3]

    // $ExpectType number[]
    R.chain(duplicateConst, [1, 2, 3] as const); // => [1, 1, 2, 2, 3, 3]
    // $ExpectType number[]
    R.chain(duplicateConst)([1, 2, 3] as const); // => [1, 1, 2, 2, 3, 3]

    // $ExpectType number[]
    R.chain(duplicateReadonly, [1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
    // $ExpectType number[]
    R.chain(duplicateReadonly)([1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
};

// monad
() => {
    abstract class Maybe<A> {
        constructor(public value: A) {}
    }

    class Just<A> extends Maybe<A> {
        static of<T>(value: T) { return new Just<T>(value); }

        chain<B>(fn: (a: A) => Maybe<B>) {
            return fn(this.value);
        }
    }

    class Nothing<A> extends Maybe<A> {
        static of<T>() { return new Nothing<T>(); }

        constructor() {
            super(undefined as unknown as A);
        }

        chain<B>(fn: (a: A) => Maybe<B>) {
            return this as unknown as Maybe<B>;
        }
    }

    const findIndexMaybe = <A>(pred: (value: A) => boolean) => (arr: A[]): Maybe<number> => {
        const index = arr.findIndex(pred);
        return index === -1 ? Nothing.of<number>() : Just.of(index);
    };

    const sqrtMaybe = (value: number): Maybe<number> => {
        const result = Math.sqrt(value);
        return Number.isNaN(result) ? Nothing.of<number>() : Just.of(result);
    };

    // $ExpectType Maybe<number>
    R.chain(findIndexMaybe<number>(x => x === 2), Just.of([1, 2, 3]));
    // $ExpectType Maybe<number>
    R.chain(sqrtMaybe, Just.of(4));
};

// transducer
() => {
    interface Score {
        maths: number;
        physics: number;
        chemistry: number;
        total?: number;
    }

    const score = {
        maths: 90,
        physics: 80,
        chemistry: 70,
    };

    const calculateTotal = (score: Score): number => {
        const { maths, physics, chemistry } = score;
        return maths + physics + chemistry;
    };

    const assocTotalToScore = (total: number, score: Score): Score => ({ ...score, total });

    // $ExpectType (r: Score) => Score
    const calculateAndAssocTotalToScore = R.chain<number, Score, Score>(assocTotalToScore, calculateTotal);
    // $ExpectType Score
    const scoreWithTotal = calculateAndAssocTotalToScore(score); // => { maths: 90, physics: 80, chemistry: 70, total: 240 }
};
