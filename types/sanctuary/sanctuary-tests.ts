import * as S from 'sanctuary';

// $ExpectType readonly (readonly number[])[] || ReadonlyArray<ReadonlyArray<number>>
S.duplicate([1]);

// $ExpectType Maybe<Maybe<number>>
S.duplicate(S.Just(1));

// $ExpectType ReadonlyArray<Pair<number, string>>
S.zip([1, 2, 3])(['a', 'a', 'a']);

// $ExpectType ReadonlyArray<Maybe<number>>
S.zipWith((a: number) => (b: number) => S.Just(a + b))(['a', 'b'])(['x', 'y', 'z']);

// $ExpectType Pair<string, number>
S.mapLeft(S.toUpper)(S.Pair('foo')(64));

// $ExpectType Either<string, any>
S.mapLeft(S.toUpper)(S.Left('foo'));

// $ExpectType number[]
S.foldMap(Array)((x: number) => [x + 1, x + 2])([10, 20, 30]);

// $ExpectType string
S.show(S.Just(1));

// $ExpectType Pair<number, string>
S.Pair(1)('a');

// $ExpectType number
S.fst(S.Pair(1)('a'));

// $ExpectType string
S.snd(S.Pair(1)('a'));

// $ExpectType Pair<string, number>
S.swap(S.Pair(1)('a'));

// $ExpectType string
S.boolean('no')('yes')(false);

// $ExpectType number
S.clamp(0)(100)(42);

// $ExpectType number || 1
S.min(1)(100);

// $ExpectType number || 100
S.max(0)(100);

// $ExpectType boolean
S.all(S.odd)([]);

// $ExpectType boolean
S.any(S.odd)([]);

// $ExpectType boolean
S.none(S.odd)([]);

// $ExpectType string
S.intercalate(', ')([]);

// $ExpectType number[]
S.intercalate([0, 0, 0])([[1], [2, 3], [4, 5, 6], [7, 8], [9]]);

// $ExpectType number
S.fromLeft(1)(S.Right('a'));

// $ExpectType number
S.fromRight(1)(S.Left('a'));
