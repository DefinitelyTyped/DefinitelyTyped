// Type definitions for sanctuary 2.0
// Project: https://github.com/sanctuary-js/sanctuary#readme
// Definitions by: David Chambers <https://github.com/davidchambers>
//                 Juan J. Jimenez-Anca <https://github.com/cortopy>
//                 Ken Aguilar <https://github.com/piq9117>
//                 Michał Kaczanowicz <https://github.com/vicrac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var S: Sanctuary.Environment;
export = S;
export as namespace S;

type TK = any;  // temporary type used in unfinished type definitions

type Nullable<A> = A | null;

type Thunk<A> = () => A;

type Fn<A, B>                = (a: A) => B;
type Fn2<A, B, C>            = (a: A) => (b: B) => C;
type Fn3<A, B, C, D>         = (a: A) => (b: B) => (c: C) => D;
type Fn4<A, B, C, D, E>      = (a: A) => (b: B) => (c: C) => (d: D) => E;
type Fn5<A, B, C, D, E, F>   = (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => F;
type Fn2_<A, B, C>           = (a: A, b: B) => C;
type Fn3_<A, B, C, D>        = (a: A, b: B, c: C) => D;
type Fn4_<A, B, C, D, E>     = (a: A, b: B, c: C, d: D) => E;
type Fn5_<A, B, C, D, E, F>  = (a: A, b: B, c: C, d: D, e: E) => F;

type Predicate<A> = (a: A) => boolean;

interface StrMap<A> { [k: string]: A; }

interface Pair<A, B> extends IOrd<Pair<A, B>> {
  constructor: {
    '@@type': 'sanctuary-pair/Pair@1';
  };
}

interface Maybe<A> extends IOrd<Maybe<A>> {
  constructor: {
    '@@type': 'sanctuary-maybe/Maybe@1';
  };
}

interface Either<A, B> extends IOrd<Either<A, B>> {
  constructor: {
    '@@type': 'sanctuary-either/Either@1';
  };
}

type ValidNumber            = number;
type FiniteNumber           = number;
type NonZeroFiniteNumber    = number;
type Integer                = number;
type NonNegativeInteger     = number;

interface TypeRep {}

interface ISetoid<A> {
  'fantasy-land/equals'(other: A): boolean;
}
//  `fantasy-land/equals` implementations are provided for the following
//  built-in types: Null, Undefined, Boolean, Number, Date, RegExp, String,
//  Array, Arguments, Error, Object, and Function.
type Setoid<A>
  = null
  | undefined
  | boolean
  | number
  | Date
  | RegExp
  | string
  | ArraySetoid<A>
  | Error
  | StrMap<A>
  // tslint:disable-next-line:ban-types
  | Function
  | ISetoid<A>;
interface ArraySetoid<A> extends Array<Setoid<A>> {}

interface IOrd<A> extends ISetoid<A> {
  'fantasy-land/lte'(other: A): boolean;
}
//  `fantasy-land/lte` implementations are provided for the following
//  built-in types: Null, Undefined, Boolean, Number, Date, String,
//  Array, Arguments, and Object.
type Ord<A>
  = null
  | undefined
  | boolean
  | number
  | Date
  | string
  | ArrayOrd<A>
  | StrMap<A>
  | IOrd<A>;
interface ArrayOrd<A> extends Array<Ord<A>> {}

interface Semigroupoid<A, B> {}
interface Category<A> extends Semigroupoid<A, A> {}
interface Semigroup<A> {}
interface Monoid<A> extends Semigroup<A> {}
interface Functor<A> {}
interface Bifunctor<A, C> extends Functor<C> {
  'fantasy-land/bimap'<B>(p: Fn<A, B>): <D>(q: Fn<C, D>) => (r: Bifunctor<A, C>) => Bifunctor<B, D>;
}
interface Profunctor<B, C> extends Functor<C> {}
interface Apply<A> extends Functor<A> {}
interface Applicative<A> extends Apply<A> {}
interface Chain<A> extends Apply<A> {}
interface ChainRec<A> extends Chain<A> {}
interface Monad<A> extends Applicative<A>, Chain<A> {}
interface Alt<A> extends Functor<A> {}
interface Plus<A> extends Alt<A> {}
interface Alternative<A> extends Applicative<A>, Plus<A> {}
interface Foldable<A> {}
interface Traversable<A> extends Functor<A>, Foldable<A> {}
interface Extend<A> extends Functor<A> {}
interface Comonad<A> extends Extend<A> {}
interface Contravariant<A> {}

type Radix
  = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17
  | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25
  | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33
  | 34 | 35 | 36;

type RegexFlags = '' | 'g' | 'i' | 'm' | 'gi' | 'gm' | 'im' | 'gim';

interface MatchObj {
  match: string;
  groups: Array<Maybe<string>>;
}

declare namespace Sanctuary {
  interface Static {
    //  Classify
    type(x: any): {
      namespace: Maybe<string>
      name: string
      version: NonNegativeInteger
    };
    is(tk: TK): (tk: TK) => TK;
    //  Showable
    show(tk: TK): TK;
    //  Fantasy Land
    equals<A extends Setoid<any>>(x: A): (y: A) => boolean;
    lt <A extends Ord<any>>(x: A): (y: A) => boolean;
    lte<A extends Ord<any>>(x: A): (y: A) => boolean;
    gt <A extends Ord<any>>(x: A): (y: A) => boolean;
    gte<A extends Ord<any>>(x: A): (y: A) => boolean;
    min<A extends Ord<any>>(x: A): (y: A) => A;
    max<A extends Ord<any>>(x: A): (y: A) => A;
    clamp(a: boolean): (b: boolean) => (c: boolean) => boolean;
    clamp(a: number): (b: number) => (c: number) => number;
    clamp(a: string): (b: string) => (c: string) => string;
    clamp<A extends Ord<any>>(a: A): (b: A) => (c: A) => A;
    id<A>(p: TypeRep): Fn<A, A> | Category<any>;
    concat<A>(x: Semigroup<A>): (y: Semigroup<A>) => Semigroup<A>;
    concat<A>(x: ReadonlyArray<A>): (y: ReadonlyArray<A>) => Array<A>;
    concat<A>(x: StrMap<A>): (y: StrMap<A>) => StrMap<A>;
    concat(x: string): (y: string) => string;
    empty(p: TypeRep): Monoid<any>;
    invert(tk: TK): TK;
    filter(tk: TK): (tk: TK) => TK;
    reject(tk: TK): (tk: TK) => TK;
    map<A, B>(p: Fn<A, B>): {
      <C>(q: Fn<C, A>): Fn<C, B>;
        (q: ReadonlyArray<A>): Array<B>;
        (q: StrMap<A>): StrMap<B>;
        (q: Functor<A>): Functor<B>;
    };
    flip(tk: TK): (tk: TK) => TK;
    bimap<A, B>(p: Fn<A, B>): <C, D>(q: Fn<C, D>) => (r: Bifunctor<A, C>) => Bifunctor<B, D>;
    mapLeft<LA, LB>(p: Fn<LA, LB>): <R>(q: Bifunctor<LA, R>) => Bifunctor<LB, R>;
    promap<A, B>(p: Fn<A, B>): <C, D>(q: Fn<C, D>) => {
      (r: Fn<B, C>): Fn<A, D>;
      (r: Profunctor<B, C>): Profunctor<A, D>;
    };
    alt<A>(x: Alt<A>): (y: Alt<A>) => Alt<A>;
    zero(p: TypeRep): Plus<any>;
    reduce<A, B>(p: Fn2<B, A, B>): (q: B) => (r: ReadonlyArray<A> | StrMap<A> | Maybe<A> | Either<any, A> | Foldable<A>) => B;
    traverse(typeRep: TypeRep): <A, B>(f: Fn<A, Applicative<B>>) => (traversable: Traversable<A>) => Applicative<Traversable<B>>;
    sequence(typeRep: TypeRep): <A>(traversable: Traversable<Applicative<A>>) => Applicative<Traversable<A>>;
    ap<A, B>(p: Apply<Fn<A, B>>): (q: Apply<A>) => Apply<B>;
    lift2<A, B, C>(f: Fn2<A, B, C>): {
      <X>(x: Fn<X, A>): (y: Fn<X, B>) => Fn<X, C>;
        (x: Apply<A>): (y: Apply<B>) => Apply<C>;
    };
    lift3<A, B, C, D>(f: Fn3<A, B, C, D>): {
      <X>(x: Fn<X, A>): (y: Fn<X, B>) => (z: Fn<X, C>) => Fn<X, D>;
        (x: Apply<A>): (y: Apply<B>) => (z: Apply<C>) => Apply<D>;
    };
    apFirst <A>(x: Apply<A>): (y: Apply<any>) => Apply<A>;
    apSecond(x: Apply<any>): <B>(y: Apply<B>) => Apply<B>;
    of<A>(typeRep: TypeRep): (x: A) =>     Fn<any, A>;
    of<A>(typeRep: TypeRep): (x: A) => Applicative<A>;
    chain<A, B, X>(f: Fn2<A, X, B>): (chain_: Fn<X, A>) => Fn<X, B>;
    chain<A, B>(f: Fn <A,  Chain<B>>): (chain_: Chain<A>) => Chain<B>;
    join<A, B>(chain_: Fn2<B, B, A>): Fn<B, A>;
    join<A>(chain_: ReadonlyArray<ReadonlyArray<A>>): Array<A>;
    join<A>(chain_: Maybe<Maybe<A>>): Maybe<A>;
    join<A>(chain_: Chain<Chain<A>>): Chain<A>;
    chainRec(typeRep: TypeRep): {
      <A, B, X>(f: Fn2<A, X, Either<A, B>>): (x: A)        => Fn<X, B>;
      <A, B>   (f: Fn <A, ChainRec<Either<A, B>>>): (x: A) => ChainRec<B>;
    };
    extend<A, B>(f: Fn<Extend<A>, B>): (extend_: Extend<A>) => Extend<B>;
    duplicate(tk: TK): TK;
    extract<A>(comonad: Comonad<A>): A;
    contramap<A, B>(f: Fn<B, A>): {
      <X>(contravariant: Fn<A, X>): Fn<B, X>;
        (contravariant: Contravariant<A>): Contravariant<B>;
    };
    //  Combinator
    I<A>(x: A): A;
    K<A>(x: A): (y: any) => A;
    T<A>(x: A): <B>(f: Fn<A, B>) => B;
    //  Function
    curry2<A, B, C>(f: Fn2_<A, B, C>): Fn2<A, B, C>;
    curry3<A, B, C, D>(f: Fn3_<A, B, C, D>): Fn3<A, B, C, D>;
    curry4<A, B, C, D, E>(f: Fn4_<A, B, C, D, E>): Fn4<A, B, C, D, E>;
    curry5<A, B, C, D, E, F>(f: Fn5_<A, B, C, D, E, F>): Fn5<A, B, C, D, E, F>;
    //  Composition
    compose<B, C>(f: Fn<B, C>): <A>(g: Fn<A, B>) => Fn<A, C>;
    compose<B, C>(x: Semigroupoid<B, C>): <A>(y: Semigroupoid<A, B>) => Semigroupoid<A, C>;
    pipe<A, B>(fs: [Fn<A, B>]): (x: A) => B;
    pipe<A, B, C>(fs: [Fn<A, B>, Fn<B, C>]): (x: A) => C;
    pipe<A, B, C, D>(fs: [Fn<A, B>, Fn<B, C>, Fn<C, D>]): (x: A) => D;
    pipe<A, B, C, D, E>(fs: [Fn<A, B>, Fn<B, C>, Fn<C, D>, Fn<D, E>]): (x: A) => E;
    pipe<A, B, C, D, E, F>(fs: [Fn<A, B>, Fn<B, C>, Fn<C, D>, Fn<D, E>, Fn<E, F>]): (x: A) => F;
    pipe(tk: TK): (tk: TK) => TK;
    pipeK(tk: TK): (tk: TK) => TK;
    on<A, B, C>(p: Fn2<B, B, C>): (q: Fn<A, B>) => (r: A) => Fn<A, C>;
    //  Pair
    Pair<A>(x: A): <B>(y: B) => Pair<A, B>;
    pair<A, B, C>(f: Fn2<A, B, C>): (p: Pair<A, B>) => C;
    fst<A>(p: Pair<A, any>): A;
    snd<B>(p: Pair<any, B>): B;
    swap<A, B>(p: Pair<A, B>): Pair<B, A>;
    //  Maybe
    Maybe: TypeRep;
    Nothing: Maybe<any>;
    Just<A>(x: A): Maybe<A>;
    isNothing(p: Maybe<any>): boolean;
    isJust(p: Maybe<any>): boolean;
    fromMaybe<A>(p: A): (q: Maybe<A>) => A;
    fromMaybe_<A>(p: Thunk<A>): (q: Maybe<A>) => A;
    maybeToNullable<A>(p: Maybe<A>): Nullable<A>;
    maybe<B>(p: B): <A>(q: Fn<A, B>) => (r: Maybe<A>) => B;
    maybe_<B>(p: Thunk<B>): <A>(q: Fn<A, B>) => (r: Maybe<A>) => B;
    justs(tk: TK): TK;
    mapMaybe(tk: TK): (tk: TK) => TK;
    maybeToEither<A>(p: A): <B>(q: Maybe<B>) => Either<A, B>;
    //  Either
    Either: TypeRep;
    Left<A>(x: A): Either<A, any>;
    Right<A>(x: A): Either<any, A>;
    isLeft(p: Either<any, any>): boolean;
    isRight(p: Either<any, any>): boolean;
    fromEither<B>(p: B): (q: Either<any, B>) => B;
    either<A, C>(p: Fn<A, C>): <B>(q: Fn<B, C>) => (r: Either<A, B>) => C;
    lefts(tk: TK): TK;
    rights(tk: TK): TK;
    tagBy<A>(p: Predicate<A>): (q: A) => Either<A, A>;
    encase<A, B>(f: Fn<A, B>): (x: A) => Either<Error, B>;
    eitherToMaybe<B>(p: Either<any, B>): Maybe<B>;
    //  Logic
    and(p: boolean): (q: boolean) => boolean;
    or(p: boolean): (q: boolean) => boolean;
    not(p: boolean): boolean;
    complement<A>(p: Predicate<A>): Predicate<A>;
    boolean<A>(f: A): (t: A) => (b: boolean) => A;
    ifElse<A>(p: Predicate<A>): <B>(q: Fn<A, B>) => (r: Fn<A, B>) => Fn<A, B>;
    when<A>(p: Predicate<A>): (q: Fn<A, A>) => Fn<A, A>;
    unless<A>(p: Predicate<A>): (q: Fn<A, A>) => Fn<A, A>;
    //  Array
    array<B>(empty: B): <A>(nonempty: Fn2<A, Array<A>, B>) => (xs: Array<A>) => B;
    head<A>(f: Foldable<A>): Maybe<A>;
    last<A>(f: Foldable<A>): Maybe<A>;
    tail(tk: TK): TK;
    init(tk: TK): TK;
    take(tk: TK): (tk: TK) => TK;
    drop(tk: TK): (tk: TK) => TK;
    takeLast(tk: TK): (tk: TK) => TK;
    dropLast(tk: TK): (tk: TK) => TK;
    takeWhile<A>(p: Predicate<A>): (xs: ReadonlyArray<A>) => Array<A>;
    dropWhile<A>(p: Predicate<A>): (xs: ReadonlyArray<A>) => Array<A>;
    size(tk: TK): TK;
    all(tk: TK): (tk: TK) => TK;
    any(tk: TK): (tk: TK) => TK;
    none(tk: TK): (tk: TK) => TK;
    append<A>(x: A): {
      (xs: ReadonlyArray<A>): Array<A>;
      (xs: Applicative<A>): Applicative<A>;
    };
    prepend<A>(x: A): {
      (xs: ReadonlyArray<A>): Array<A>;
      (xs: Applicative<A>): Applicative<A>;
    };
    joinWith(p: string): (q: ReadonlyArray<string>) => string;
    elem<A>(p: A): (q: Foldable<A> | StrMap<A> | ReadonlyArray<A>) => boolean;
    find<A>(p: Predicate<A>): (q: ReadonlyArray<A> | StrMap<A> | Foldable<A>) => Maybe<A>;
    foldMap(tk: TK): (tk: TK) => TK;
    unfoldr<A, B>(f: Fn<B, Maybe<Pair<A, B>>>): (x: B) => Array<A>;
    range(from: Integer): (to: Integer) => Array<Integer>;
    groupBy<A>(f: Fn2<A, A, boolean>): (xs: ReadonlyArray<A>) => Array<Array<A>>;
    reverse<A>(foldable: ReadonlyArray<A>): Array<A>;
    reverse<A>(foldable: Foldable<A>): Foldable<A>;
    sort<A>(foldable: ReadonlyArray<A>): Array<A>;
    sort<A>(foldable: Foldable<A>): Foldable<A>;
    sortBy<A>(f: Fn<A, Ord<any>>): {
      (foldable: ReadonlyArray<A>): Array<A>;
      (foldable: Foldable<A>): Foldable<A>;
    };
    zip<A, B>(as: ReadonlyArray<A>): (bs: ReadonlyArray<B>) => Array<Pair<A, B>>;
    zipWith<A, B, C>(fn: Fn2<A, B, C>): (as: ReadonlyArray<A>) => (bs: ReadonlyArray<B>) => Array<C>;
    //  Object
    prop(p: string): (q: any) => any;
    props(p: ReadonlyArray<string>): (q: any) => any;
    get(p: Predicate<any>): (q: string) => (r: any) => Maybe<any>;
    gets(p: Predicate<any>): (q: ReadonlyArray<string>) => (r: any) => Maybe<any>;
    //  StrMap
    value(k: string): <A>(m: StrMap<A>) => Maybe<A>;
    singleton(k: string): <A>(v: A) => StrMap<A>;
    insert(k: string): <A>(v: A) => (m: StrMap<A>) => StrMap<A>;
    remove(k: string): <A>(m: StrMap<A>) => StrMap<A>;
    keys(m: StrMap<any>): Array<string>;
    values<A>(m: StrMap<A>): Array<A>;
    pairs<A>(m: StrMap<A>): Array<Pair<string, A>>;
    fromPairs<A>(f: Foldable<Pair<string, A>>): StrMap<A>;
    //  Number
    negate(n: ValidNumber): ValidNumber;
    add(p: FiniteNumber): (q: FiniteNumber) => FiniteNumber;
    sum(p: Foldable<FiniteNumber> | ReadonlyArray<FiniteNumber>): FiniteNumber;
    sub(p: FiniteNumber): (q: FiniteNumber) => FiniteNumber;
    mult(x: FiniteNumber): (q: FiniteNumber) => FiniteNumber;
    product(p: Foldable<FiniteNumber> | ReadonlyArray<FiniteNumber>): FiniteNumber;
    div(p: NonZeroFiniteNumber): (q: FiniteNumber) => FiniteNumber;
    pow(p: FiniteNumber): (q: FiniteNumber) => FiniteNumber;
    mean(p: Foldable<FiniteNumber> | ReadonlyArray<FiniteNumber>): Maybe<FiniteNumber>;
    //  Integer
    even(n: Integer): boolean;
    odd(n: Integer): boolean;
    //  Parse
    parseDate(s: string): Maybe<Date>;
    parseFloat(s: string): Maybe<number>;
    parseInt(radix: Radix): (s: string) => Maybe<Integer>;
    parseJson(p: Predicate<any>): (q: string) => Maybe<any>;
    //  RegExp
    regex(flags: RegexFlags): (s: string) => RegExp;
    regexEscape(s: string): string;
    test(pattern: RegExp): Predicate<string>;
    match(pattern: RegExp): (q: string) => Array<Maybe<MatchObj>>;
    matchAll(pattern: RegExp): (q: string) => Array<MatchObj>;
    //  String
    toUpper(s: string): string;
    toLower(s: string): string;
    trim(s: string): string;
    stripPrefix(prefix: string): (q: string) => Maybe<string>;
    stripSuffix(suffix: string): (q: string) => Maybe<string>;
    words(s: string): Array<string>;
    unwords(xs: ReadonlyArray<string>): string;
    lines(s: string): Array<string>;
    unlines(xs: ReadonlyArray<string>): string;
    splitOn(separator: string): (q: string) => Array<string>;
    splitOnRegex(pattern: RegExp): (q: string) => Array<string>;
  }

  interface Environment extends Static {
    //  Configure
    create(opts: {checkTypes: boolean, env: ReadonlyArray<any>}): Static;
    env: ReadonlyArray<any>;
    unchecked: TK;
  }
}
