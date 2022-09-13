import * as S from 'sanctuary';

// $ExpectType readonly (readonly number[])[] || ReadonlyArray<ReadonlyArray<number>>
S.duplicate ([1]);

// $ExpectType Maybe<Maybe<number>>
S.duplicate (S.Just (1));

// $ExpectType ReadonlyArray<Pair<number, string>>
S.zip ([1, 2, 3]) (['a', 'a', 'a']);

// $ExpectType ReadonlyArray<Maybe<number>>
S.zipWith ((a: number) => (b: number) => S.Just (a + b))
          (['a', 'b'])
          (['x', 'y', 'z']);

// $ExpectType Pair<string, number>
S.mapLeft (S.toUpper) (S.Pair ('foo') (64));

// $ExpectType Either<string, any>
S.mapLeft (S.toUpper) (S.Left ('foo'));

// $ExpectType number[]
S.foldMap (Array) ((x: number) => [x + 1, x + 2]) ([10, 20, 30]);

// $ExpectType string
S.show (S.Just (1));

// $ExpectType Pair<number, string>
S.Pair (1) ('a');

// $ExpectType number
S.fst (S.Pair (1) ('a'));

// $ExpectType string
S.snd (S.Pair (1) ('a'));

// $ExpectType Pair<string, number>
S.swap (S.Pair (1) ('a'));

// $ExpectType string
S.boolean ('no') ('yes') (false);

// $ExpectType number
S.clamp (0) (100) (42);

// $ExpectType number || 1
S.min (1) (100);

// $ExpectType number || 100
S.max (0) (100);

// $ExpectType boolean
S.all (S.odd) ([]);

// $ExpectType boolean
S.any (S.odd) ([]);

// $ExpectType boolean
S.none (S.odd) ([]);

// $ExpectType string
S.intercalate (', ') ([]);

// $ExpectType number[]
S.intercalate ([0, 0, 0]) ([[1], [2, 3], [4, 5, 6], [7, 8], [9]]);

// $ExpectType number
S.fromLeft (1) (S.Right ('a'));

// $ExpectType number
S.fromRight (1) (S.Left ('a'));

// $ExpectType number
S.size ([]);

//  Sum :: Number -> Sum
const Sum = (value: number) => Object.create ({
    'fantasy-land/invert'() {
        return Sum (-value);
    },
    '@@show'() {
        return `Sum (${S.show (value)})`;
    }
});
// $ExpectType Group<number>
S.invert<number> (Sum (5));

// $ExpectType number
S.reduce (S.add) (0) ([1, 2, 3, 4, 5]);

// $ExpectType number[]
S.reduce ((xs: number[]) => (x: number) => S.prepend (x) (xs))
         ([])
         ([1, 2, 3, 4, 5]);

// $ExpectType number[]
S.reduce<number, number[]> (xs => x => S.prepend (x) (xs))
                           ([])
                           ([1, 2, 3, 4, 5]);

// $ExpectType number[]
S.reduce_<number, number[]> (S.append) ([]) ([1, 2, 3]);

/*** StrMap ***/

// $ExpectType Maybe<number>
S.value ('foo') ({foo: 1, bar: 2});

// $ExpectType Maybe<string>
S.value ('foo') ({foo: 'hallo', bar: 'world'});

// $ExpectType StrMap<number>
S.singleton ('foo') (42);

// $ExpectType StrMap<string>
S.singleton ('foo') ('42');

// $ExpectType StrMap<number>
S.insert ('c') (3) ({a: 1, b: 2});

// $ExpectType StrMap<number>
S.remove ('c') ({a: 1, b: 2, c: 3});

// $ExpectType StrMap<unknown>
S.remove ('c') ({});

// $ExpectType string[]
S.keys ({b: 2, c: 3, a: 1});

// $ExpectType number[]
S.values ({a: 1, c: 3, b: 2});

// $ExpectType Pair<string, number>[]
S.pairs ({b: 2, a: 1, c: 3});

// $ExpectType StrMap<number>
S.fromPairs<number> ([S.Pair ('a') (1), S.Pair ('b') (2), S.Pair ('c') (3)]);
