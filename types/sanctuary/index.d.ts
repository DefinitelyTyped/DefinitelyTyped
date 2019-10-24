// Type definitions for sanctuary 2.0
// Project: https://github.com/sanctuary-js/sanctuary#readme
// Definitions by: David Chambers <https://github.com/davidchambers>
//                 Juan J. Jimenez-Anca <https://github.com/cortopy>
//                 Ken Aguilar <https://github.com/piq9117>
//                 Michał Kaczanowicz <https://github.com/vicrac>
//                 Edgar Rodríguez <https://github.com/edgarjrg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { TR, TIS, TR2, TIS2 } from './TR';

export type TK = any;  // temporary type used in unfinished type definitions

export type Nullable<A> = A | null;

export type Thunk<A> = () => A;

export type Fn<A, B> = (a: A) => B;
export type Fn2<A, B, C> = (a: A) => (b: B) => C;
export type Fn3<A, B, C, D> = (a: A) => (b: B) => (c: C) => D;
export type Fn4<A, B, C, D, E> = (a: A) => (b: B) => (c: C) => (d: D) => E;
export type Fn5<A, B, C, D, E, F> = (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => F;
export type Fn2_<A, B, C> = (a: A, b: B) => C;
export type Fn3_<A, B, C, D> = (a: A, b: B, c: C) => D;
export type Fn4_<A, B, C, D, E> = (a: A, b: B, c: C, d: D) => E;
export type Fn5_<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E) => F;

export type Predicate<A> = (a: A) => boolean;

export interface StrMap<A> { [k: string]: A; }

export type ValidNumber = number;
export type FiniteNumber = number;
export type NonZeroFiniteNumber = number;
export type Integer = number;
export type NonNegativeInteger = number;

export interface TypeRep { }

export interface ISetoid<A> {
  'fantasy-land/equals'(other: A): boolean;
}
//  `fantasy-land/equals` implementations are provided for the following
//  built-in types: Null, Undefined, Boolean, Number, Date, RegExp, String,
//  Array, Arguments, Error, Object, and Function.
export type Setoid<A>
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
export interface ArraySetoid<A> extends Array<Setoid<A>> { }

export interface IOrd<A> extends ISetoid<A> {
  'fantasy-land/lte'(other: A): boolean;
}
//  `fantasy-land/lte` implementations are provided for the following
//  built-in types: Null, Undefined, Boolean, Number, Date, String,
//  Array, Arguments, and Object.
export type Ord<A>
  = null
  | undefined
  | boolean
  | number
  | Date
  | string
  | ArrayOrd<A>
  | StrMap<A>
  | IOrd<A>;
export interface ArrayOrd<A> extends Array<Ord<A>> { }

export interface Semigroupoid<A, B> { }
export interface Category<A> extends Semigroupoid<A, A> { }
export interface Semigroup<A> { }
export interface Monoid<A> extends Semigroup<A> { }
export interface Functor<A> { }
export interface Bifunctor<A, C> extends Functor<C> {
  'fantasy-land/bimap'<B>(p: Fn<A, B>): <D>(q: Fn<C, D>) => (r: Bifunctor<A, C>) => Bifunctor<B, D>;
}
export interface Bifunctor2<F extends TIS2> extends Functor<F> {
  'fantasy-land/bimap'<LA, RA, LB, RB>(
    f: Fn<LA, LB>,
    g: Fn<RA, RB>,
  ): TR2<F, LB, RB>;
}
export interface Profunctor<B, C> extends Functor<C> { }
export interface Apply<A> extends Functor<A> { }
export interface Applicative<A> extends Apply<A> { }
export interface Applicative1<F extends TIS> extends Apply<F> {
  readonly 'fantasy-land/of': <A>(a: A) => TR<F, A>;
}
export interface Applicative2<F extends TIS2> extends Apply<F> {
  readonly 'fantasy-land/of': <R>(value: R) => TR2<F, any, R>;
}
export interface Chain<A> extends Apply<A> { }
export interface ChainRec<A> extends Chain<A> { }
export interface Monad<A> extends Applicative<A>, Chain<A> { }
export interface Alt<A> extends Functor<A> { }
export interface Plus<A> extends Alt<A> { }
export interface Alternative<A> extends Applicative<A>, Plus<A> { }
export interface Foldable<A> { }
export interface Traversable<A> extends Functor<A>, Foldable<A> { }
export interface Extend<A> extends Functor<A> { }
export interface Comonad<A> extends Extend<A> { }
export interface Contravariant<A> { }

export type Radix
  = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17
  | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25
  | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33
  | 34 | 35 | 36;

export type RegexFlags = '' | 'g' | 'i' | 'm' | 'gi' | 'gm' | 'im' | 'gim';

export interface MatchObj {
  match: string;
  groups: Array<Maybe<string>>;
}

// Maybe
declare module './TR' {
  interface TItoTR<A> {
    'sanctuary-maybe/Maybe@1': Maybe<A>;
  }
}

export interface Nothing {
  constructor: MaybeTypeRep;
}

export interface Just<A> {
  constructor: MaybeTypeRep;
  readonly value: A;
}

export type Maybe<A> = Nothing | Just<A>;

export type MaybeTI = 'sanctuary-maybe/Maybe@1';

export interface MaybeTypeRep extends Applicative1<MaybeTI> {
  <A>(value: A): Maybe<A>;
  readonly '@@type': MaybeTI;
}

// Either
declare module './TR' {
  interface TItoTR2<L, R> {
    'sanctuary-either/Either@1': Either<L, R>;
  }
}

export type EitherTI = 'sanctuary-either/Either@1';

export interface EitherTypeRep extends Applicative2<EitherTI>, Bifunctor2<EitherTI> {
  <R>(value: R): Either<any, R>;
  '@@type': EitherTI;
}

export interface Either<A, B> extends IOrd<Either<A, B>>, Bifunctor2<EitherTI> {
  constructor: EitherTypeRep;
}

// Pair
declare module './TR' {
  interface TItoTR2<L, R> {
    'sanctuary-pair/Pair@1': Pair<L, R>;
  }
}

export type PairTI = 'sanctuary-pair/Pair@1';

export interface PairTypeRep {
  constructor: {
    '@@type': 'sanctuary-pair/Pair@1';
  };
}

export interface Pair<A, B> extends IOrd<Pair<A, B>>, Bifunctor2<PairTI> {
  constructor: PairTypeRep;
}

//  Classify
export function type(x: any): {
  namespace: Maybe<string>
  name: string
  version: NonNegativeInteger
};
export function is(tk: TK): (tk: TK) => TK;
//  Showable
export function show(tk: TK): TK;
//  Fantasy Land
export function equals<A extends Setoid<any>>(x: A): (y: A) => boolean;
export function lt<A extends Ord<any>>(x: A): (y: A) => boolean;
export function lte<A extends Ord<any>>(x: A): (y: A) => boolean;
export function gt<A extends Ord<any>>(x: A): (y: A) => boolean;
export function gte<A extends Ord<any>>(x: A): (y: A) => boolean;
export function min<A extends Ord<any>>(x: A): (y: A) => A;
export function max<A extends Ord<any>>(x: A): (y: A) => A;
export function clamp(a: boolean): (b: boolean) => (c: boolean) => boolean;
export function clamp(a: number): (b: number) => (c: number) => number;
export function clamp(a: string): (b: string) => (c: string) => string;
export function clamp<A extends Ord<any>>(a: A): (b: A) => (c: A) => A;
export function id(p: TypeRep): <A>(a: A) => A | Category<any>;
export function concat<A>(x: Semigroup<A>): (y: Semigroup<A>) => Semigroup<A>;
export function concat<A>(x: ReadonlyArray<A>): (y: ReadonlyArray<A>) => Array<A>;
export function concat<A>(x: StrMap<A>): (y: StrMap<A>) => StrMap<A>;
export function concat(x: string): (y: string) => string;
export function empty(p: TypeRep): Monoid<any>;
export function invert(tk: TK): TK;
export function filter(tk: TK): (tk: TK) => TK;
export function reject(tk: TK): (tk: TK) => TK;
export function map<A, B>(p: Fn<A, B>): {
  <C>(q: Fn<C, A>): Fn<C, B>;
  (q: ReadonlyArray<A>): Array<B>;
  (q: StrMap<A>): StrMap<B>;
  (q: Functor<A>): Functor<B>;
};
export function flip(tk: TK): (tk: TK) => TK;
export function bimap<A, B>(p: Fn<A, B>): <C, D>(q: Fn<C, D>) => (r: Bifunctor<A, C>) => Bifunctor<B, D>;
export function bimap<LA, LB>(p: Fn<LA, LB>): <RA, RB>(q: Fn<RA, RB>) => (r: TR2<any, LA, RA>) => TR2<any, LB, RB>;
export function mapLeft<LA, LB>(p: Fn<LA, LB>): <R>(q: Bifunctor<LA, R>) => Bifunctor<LB, R>;
export function promap<A, B>(p: Fn<A, B>): <C, D>(q: Fn<C, D>) => {
  (r: Fn<B, C>): Fn<A, D>;
  (r: Profunctor<B, C>): Profunctor<A, D>;
};
export function alt<A>(x: Alt<A>): (y: Alt<A>) => Alt<A>;
export function zero(p: TypeRep): Plus<any>;
export function reduce<A, B>(p: Fn2<B, A, B>): (q: B) => (r: ReadonlyArray<A> | StrMap<A> | Maybe<A> | Either<any, A> | Foldable<A>) => B;
export function traverse(typeRep: TypeRep): <A, B>(f: Fn<A, Applicative<B>>) => (traversable: Traversable<A>) => Applicative<Traversable<B>>;
export function sequence(typeRep: TypeRep): <A>(traversable: Traversable<Applicative<A>>) => Applicative<Traversable<A>>;
export function ap<A, B>(p: Apply<Fn<A, B>>): (q: Apply<A>) => Apply<B>;
export function lift2<A, B, C>(f: Fn2<A, B, C>): {
  <X>(x: Fn<X, A>): (y: Fn<X, B>) => Fn<X, C>;
  (x: Apply<A>): (y: Apply<B>) => Apply<C>;
};
export function lift3<A, B, C, D>(f: Fn3<A, B, C, D>): {
  <X>(x: Fn<X, A>): (y: Fn<X, B>) => (z: Fn<X, C>) => Fn<X, D>;
  (x: Apply<A>): (y: Apply<B>) => (z: Apply<C>) => Apply<D>;
};
export function apFirst<A>(x: Apply<A>): (y: Apply<any>) => Apply<A>;
export function apSecond(x: Apply<any>): <B>(y: Apply<B>) => Apply<B>;
export function of<A extends Applicative1<any>>(
  typeRep: A,
): A['fantasy-land/of'];
export function of<A extends Applicative2<any>>(
  typeRep: A,
): A['fantasy-land/of'];
export function of(typeRep: ArrayConstructor): typeof Array.of;
export function of(typeRep: FunctionConstructor): <B>(x: B) => Fn<any, B>;
export function of<A>(typeRep: TypeRep): (x: A) => Fn<any, A>;
export function of<A>(typeRep: TypeRep): (x: A) => Applicative<A>;
export function chain<A, B, X>(f: Fn2<A, X, B>): (chain_: Fn<X, A>) => Fn<X, B>;
export function chain<A, B>(f: Fn<A, Chain<B>>): (chain_: Chain<A>) => Chain<B>;
export function join<A, B>(chain_: Fn2<B, B, A>): Fn<B, A>;
export function join<A>(chain_: ReadonlyArray<ReadonlyArray<A>>): Array<A>;
export function join<A>(chain_: Maybe<Maybe<A>>): Maybe<A>;
export function join<A>(chain_: Chain<Chain<A>>): Chain<A>;
export function chainRec(typeRep: TypeRep): {
  <A, B, X>(f: Fn2<A, X, Either<A, B>>): (x: A) => Fn<X, B>;
  <A, B>(f: Fn<A, ChainRec<Either<A, B>>>): (x: A) => ChainRec<B>;
};
export function extend<A, B>(f: Fn<Extend<A>, B>): (extend_: Extend<A>) => Extend<B>;
export function duplicate(tk: TK): TK;
export function extract<A>(comonad: Comonad<A>): A;
export function contramap<A, B>(f: Fn<B, A>): {
  <X>(contravariant: Fn<A, X>): Fn<B, X>;
  (contravariant: Contravariant<A>): Contravariant<B>;
};
//  Combinator
export function I<A>(x: A): A;
export function K<A>(x: A): (y: any) => A;
export function T<A>(x: A): <B>(f: Fn<A, B>) => B;
//  export Function
export function curry2<A, B, C>(f: Fn2_<A, B, C>): Fn2<A, B, C>;
export function curry3<A, B, C, D>(f: Fn3_<A, B, C, D>): Fn3<A, B, C, D>;
export function curry4<A, B, C, D, E>(f: Fn4_<A, B, C, D, E>): Fn4<A, B, C, D, E>;
export function curry5<A, B, C, D, E, F>(f: Fn5_<A, B, C, D, E, F>): Fn5<A, B, C, D, E, F>;
//  Composition
export function compose<B, C>(f: Fn<B, C>): <A>(g: Fn<A, B>) => Fn<A, C>;
export function compose<B, C>(x: Semigroupoid<B, C>): <A>(y: Semigroupoid<A, B>) => Semigroupoid<A, C>;
export function pipe<A, B>(fs: [Fn<A, B>]): (x: A) => B;
export function pipe<A, B, C>(fs: [Fn<A, B>, Fn<B, C>]): (x: A) => C;
export function pipe<A, B, C, D>(fs: [Fn<A, B>, Fn<B, C>, Fn<C, D>]): (x: A) => D;
export function pipe<A, B, C, D, E>(fs: [Fn<A, B>, Fn<B, C>, Fn<C, D>, Fn<D, E>]): (x: A) => E;
export function pipe<A, B, C, D, E, F>(fs: [Fn<A, B>, Fn<B, C>, Fn<C, D>, Fn<D, E>, Fn<E, F>]): (x: A) => F;
export function pipe(tk: TK): (tk: TK) => TK;
export function pipeK(tk: TK): (tk: TK) => TK;
export function on<A, B, C>(p: Fn2<B, B, C>): (q: Fn<A, B>) => (r: A) => Fn<A, C>;
//  Pair
export function Pair<A>(x: A): <B>(y: B) => Pair<A, B>;
export function pair<A, B, C>(f: Fn2<A, B, C>): (p: Pair<A, B>) => C;
export function fst<A>(p: Pair<A, any>): A;
export function snd<B>(p: Pair<any, B>): B;
export function swap<A, B>(p: Pair<A, B>): Pair<B, A>;
//  Maybe
export const Maybe: MaybeTypeRep;
export const Nothing: Maybe<any>;
export function Just<A>(x: A): Maybe<A>;
export function isNothing(p: Maybe<any>): boolean;
export function isJust(p: Maybe<any>): boolean;
export function fromMaybe<A>(p: A): (q: Maybe<A>) => A;
export function fromMaybe_<A>(p: Thunk<A>): (q: Maybe<A>) => A;
export function maybeToNullable<A>(p: Maybe<A>): Nullable<A>;
export function maybe<B>(p: B): <A>(q: Fn<A, B>) => (r: Maybe<A>) => B;
export function maybe_<B>(p: Thunk<B>): <A>(q: Fn<A, B>) => (r: Maybe<A>) => B;
export function justs(tk: TK): TK;
export function mapMaybe(tk: TK): (tk: TK) => TK;
export function maybeToEither<A>(p: A): <B>(q: Maybe<B>) => Either<A, B>;
//  Either
export const Either: EitherTypeRep;
export function Left<A>(x: A): Either<A, any>;
export function Right<A>(x: A): Either<any, A>;
export function isLeft(p: Either<any, any>): boolean;
export function isRight(p: Either<any, any>): boolean;
export function fromEither<B>(p: B): (q: Either<any, B>) => B;
export function either<A, C>(p: Fn<A, C>): <B>(q: Fn<B, C>) => (r: Either<A, B>) => C;
export function lefts(tk: TK): TK;
export function rights(tk: TK): TK;
export function tagBy<A>(p: Predicate<A>): (q: A) => Either<A, A>;
export function encase<A, B>(f: Fn<A, B>): (x: A) => Either<Error, B>;
export function eitherToMaybe<B>(p: Either<any, B>): Maybe<B>;
//  Logic
export function and(p: boolean): (q: boolean) => boolean;
export function or(p: boolean): (q: boolean) => boolean;
export function not(p: boolean): boolean;
export function complement<A>(p: Predicate<A>): Predicate<A>;
export function boolean<A>(f: A): (t: A) => (b: boolean) => A;
export function ifElse<A>(p: Predicate<A>): <B>(q: Fn<A, B>) => (r: Fn<A, B>) => Fn<A, B>;
export function when<A>(p: Predicate<A>): (q: Fn<A, A>) => Fn<A, A>;
export function unless<A>(p: Predicate<A>): (q: Fn<A, A>) => Fn<A, A>;
//  Array
export function array<B>(empty: B): <A>(nonempty: Fn2<A, Array<A>, B>) => (xs: Array<A>) => B;
export function head<A>(f: Foldable<A>): Maybe<A>;
export function last<A>(f: Foldable<A>): Maybe<A>;
export function tail(tk: TK): TK;
export function init(tk: TK): TK;
export function take(tk: TK): (tk: TK) => TK;
export function drop(tk: TK): (tk: TK) => TK;
export function takeLast(tk: TK): (tk: TK) => TK;
export function dropLast(tk: TK): (tk: TK) => TK;
export function takeWhile<A>(p: Predicate<A>): (xs: ReadonlyArray<A>) => Array<A>;
export function dropWhile<A>(p: Predicate<A>): (xs: ReadonlyArray<A>) => Array<A>;
export function size(tk: TK): TK;
export function all(tk: TK): (tk: TK) => TK;
export function any(tk: TK): (tk: TK) => TK;
export function none(tk: TK): (tk: TK) => TK;
export function append<A>(x: A): {
  (xs: ReadonlyArray<A>): Array<A>;
  (xs: Applicative<A>): Applicative<A>;
};
export function prepend<A>(x: A): {
  (xs: ReadonlyArray<A>): Array<A>;
  (xs: Applicative<A>): Applicative<A>;
};
export function joinWith(p: string): (q: ReadonlyArray<string>) => string;
export function elem<A>(p: A): (q: Foldable<A> | StrMap<A> | ReadonlyArray<A>) => boolean;
export function find<A>(p: Predicate<A>): (q: ReadonlyArray<A> | StrMap<A> | Foldable<A>) => Maybe<A>;
export function foldMap(tk: TK): (tk: TK) => TK;
export function unfoldr<A, B>(f: Fn<B, Maybe<Pair<A, B>>>): (x: B) => Array<A>;
export function range(from: Integer): (to: Integer) => Array<Integer>;
export function groupBy<A>(f: Fn2<A, A, boolean>): (xs: ReadonlyArray<A>) => Array<Array<A>>;
export function reverse<A>(foldable: ReadonlyArray<A>): Array<A>;
export function reverse<A>(foldable: Foldable<A>): Foldable<A>;
export function sort<A>(foldable: ReadonlyArray<A>): Array<A>;
export function sort<A>(foldable: Foldable<A>): Foldable<A>;
export function sortBy<A>(f: Fn<A, Ord<any>>): {
  (foldable: ReadonlyArray<A>): Array<A>;
  (foldable: Foldable<A>): Foldable<A>;
};
export function zip<A, B>(as: ReadonlyArray<A>): (bs: ReadonlyArray<B>) => Array<Pair<A, B>>;
export function zipWith<A, B, C>(fn: Fn2<A, B, C>): (as: ReadonlyArray<A>) => (bs: ReadonlyArray<B>) => Array<C>;
//  Object
export function prop(p: string): (q: any) => any;
export function props(p: ReadonlyArray<string>): (q: any) => any;
export function get(p: Predicate<any>): (q: string) => (r: any) => Maybe<any>;
export function gets(p: Predicate<any>): (q: ReadonlyArray<string>) => (r: any) => Maybe<any>;
//  StrMap
export function value(k: string): <A>(m: StrMap<A>) => Maybe<A>;
export function singleton(k: string): <A>(v: A) => StrMap<A>;
export function insert(k: string): <A>(v: A) => (m: StrMap<A>) => StrMap<A>;
export function remove(k: string): <A>(m: StrMap<A>) => StrMap<A>;
export function keys(m: StrMap<any>): Array<string>;
export function values<A>(m: StrMap<A>): Array<A>;
export function pairs<A>(m: StrMap<A>): Array<Pair<string, A>>;
export function fromPairs<A>(f: Foldable<Pair<string, A>>): StrMap<A>;
//  Number
export function negate(n: ValidNumber): ValidNumber;
export function add(p: FiniteNumber): (q: FiniteNumber) => FiniteNumber;
export function sum(p: Foldable<FiniteNumber> | ReadonlyArray<FiniteNumber>): FiniteNumber;
export function sub(p: FiniteNumber): (q: FiniteNumber) => FiniteNumber;
export function mult(x: FiniteNumber): (q: FiniteNumber) => FiniteNumber;
export function product(p: Foldable<FiniteNumber> | ReadonlyArray<FiniteNumber>): FiniteNumber;
export function div(p: NonZeroFiniteNumber): (q: FiniteNumber) => FiniteNumber;
export function pow(p: FiniteNumber): (q: FiniteNumber) => FiniteNumber;
export function mean(p: Foldable<FiniteNumber> | ReadonlyArray<FiniteNumber>): Maybe<FiniteNumber>;
//  Integer
export function even(n: Integer): boolean;
export function odd(n: Integer): boolean;
//  Parse
export function parseDate(s: string): Maybe<Date>;
export function parseFloat(s: string): Maybe<number>;
export function parseInt(radix: Radix): (s: string) => Maybe<Integer>;
export function parseJson(p: Predicate<any>): (q: string) => Maybe<any>;
//  RegExp
export function regex(flags: RegexFlags): (s: string) => RegExp;
export function regexEscape(s: string): string;
export function test(pattern: RegExp): Predicate<string>;
export function match(pattern: RegExp): (q: string) => Array<Maybe<MatchObj>>;
export function matchAll(pattern: RegExp): (q: string) => Array<MatchObj>;
//  String
export function toUpper(s: string): string;
export function toLower(s: string): string;
export function trim(s: string): string;
export function stripPrefix(prefix: string): (q: string) => Maybe<string>;
export function stripSuffix(suffix: string): (q: string) => Maybe<string>;
export function words(s: string): Array<string>;
export function unwords(xs: ReadonlyArray<string>): string;
export function lines(s: string): Array<string>;
export function unlines(xs: ReadonlyArray<string>): string;
export function splitOn(separator: string): (q: string) => Array<string>;
export function splitOnRegex(pattern: RegExp): (q: string) => Array<string>;

export interface StaticSanctuary {
  type: typeof type;
  is: typeof is;
  show: typeof show;
  equals: typeof equals;
  lt: typeof lt;
  lte: typeof lte;
  gt: typeof gt;
  gte: typeof gte;
  min: typeof min;
  max: typeof max;
  clamp: typeof clamp;
  id: typeof id;
  concat: typeof concat;
  empty: typeof empty;
  invert: typeof invert;
  filter: typeof filter;
  reject: typeof reject;
  map: typeof map;
  flip: typeof flip;
  bimap: typeof bimap;
  mapLeft: typeof mapLeft;
  promap: typeof promap;
  alt: typeof alt;
  zero: typeof zero;
  reduce: typeof reduce;
  traverse: typeof traverse;
  sequence: typeof sequence;
  ap: typeof ap;
  lift2: typeof lift2;
  lift3: typeof lift3;
  apFirst: typeof apFirst;
  apSecond: typeof apSecond;
  of: typeof of;
  chain: typeof chain;
  chainRec: typeof chainRec;
  extend: typeof extend;
  duplicate: typeof duplicate;
  extract: typeof extract;
  contramap: typeof contramap;
  I: typeof I;
  K: typeof K;
  T: typeof T;
  curry2: typeof curry2;
  curry3: typeof curry3;
  curry4: typeof curry4;
  curry5: typeof curry5;
  compose: typeof compose;
  pipe: typeof pipe;
  pipeK: typeof pipeK;
  on: typeof on;
  Pair: typeof Pair;
  pair: typeof pair;
  fst: typeof fst;
  snd: typeof snd;
  swap: typeof swap;
  Maybe: typeof Maybe;
  Nothing: typeof Nothing;
  Just: typeof Just;
  isNothing: typeof isNothing;
  isJust: typeof isJust;
  fromMaybe: typeof fromMaybe;
  fromMaybe_: typeof fromMaybe_;
  maybeToNullable: typeof maybeToNullable;
  maybe: typeof maybe;
  maybe_: typeof maybe_;
  justs: typeof justs;
  mapMaybe: typeof mapMaybe;
  maybeToEither: typeof maybeToEither;
  Either: typeof Either;
  Left: typeof Left;
  Right: typeof Right;
  isLeft: typeof isLeft;
  isRight: typeof isRight;
  fromEither: typeof fromEither;
  either: typeof either;
  lefts: typeof lefts;
  rights: typeof rights;
  tagBy: typeof tagBy;
  encase: typeof encase;
  eitherToMaybe: typeof eitherToMaybe;
  and: typeof and;
  or: typeof or;
  not: typeof not;
  complement: typeof complement;
  boolean: typeof boolean;
  ifElse: typeof ifElse;
  when: typeof when;
  unless: typeof unless;
  array: typeof array;
  head: typeof head;
  last: typeof last;
  tail: typeof tail;
  init: typeof init;
  take: typeof take;
  drop: typeof drop;
  takeLast: typeof takeLast;
  dropLast: typeof dropLast;
  takeWhile: typeof takeWhile;
  dropWhile: typeof dropWhile;
  size: typeof size;
  all: typeof all;
  any: typeof any;
  none: typeof none;
  append: typeof append;
  prepend: typeof prepend;
  joinWith: typeof joinWith;
  elem: typeof elem;
  find: typeof find;
  foldMap: typeof foldMap;
  unfoldr: typeof unfoldr;
  range: typeof range;
  groupBy: typeof groupBy;
  reverse: typeof reverse;
  sort: typeof sort;
  sortBy: typeof sortBy;
  zip: typeof zip;
  zipWith: typeof zipWith;
  prop: typeof prop;
  props: typeof props;
  get: typeof get;
  gets: typeof gets;
  value: typeof value;
  singleton: typeof singleton;
  insert: typeof insert;
  remove: typeof remove;
  keys: typeof keys;
  values: typeof values;
  pairs: typeof pairs;
  fromPairs: typeof fromPairs;
  negate: typeof negate;
  add: typeof add;
  sum: typeof sum;
  sub: typeof sub;
  mult: typeof mult;
  product: typeof product;
  div: typeof div;
  pow: typeof pow;
  mean: typeof mean;
  even: typeof even;
  odd: typeof odd;
  parseDate: typeof parseDate;
  parseFloat: typeof parseFloat;
  parseInt: typeof parseInt;
  parseJson: typeof parseJson;
  regex: typeof regex;
  regexEscape: typeof regexEscape;
  test: typeof test;
  match: typeof match;
  matchAll: typeof matchAll;
  toUpper: typeof toUpper;
  toLower: typeof toLower;
  trim: typeof trim;
  stripPrefix: typeof stripPrefix;
  stripSuffix: typeof stripSuffix;
  words: typeof words;
  unwords: typeof unwords;
  lines: typeof lines;
  unlines: typeof unlines;
  splitOn: typeof splitOn;
  splitOnRegex: typeof splitOnRegex;
}

export function create(opts: { checkTypes: boolean, env: ReadonlyArray<any> }): StaticSanctuary;
export const env: ReadonlyArray<any>;
export const unchecked: TK;
