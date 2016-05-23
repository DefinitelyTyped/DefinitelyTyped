// Type definitions for scalike API
// Project: https://github.com/ryoppy/scalike-typescript
// Definitions by: ryoppy <https://github.com/ryoppy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = scalike;
export as namespace scalike;

declare namespace scalike {

    export interface Either<A, B> {
        value: A | B;
        isLeft: boolean;
        isRight: boolean;
        left(): LeftProjection<A, B>;
        right(): RightProjection<A, B>;
        fold<X>(fa: (a: A) => X, fb: (b: B) => X): X;
        swap(): Either<B, A>;
    }
    export function Right<A, B>(b: B): Either<A, B>;
    export function Left<A, B>(a: A): Either<A, B>;
    export class LeftProjection<A, B> {
        private self;
        constructor(self: Either<A, B>);
        toString(): string;
        get(): A;
        foreach(f: (a: A) => void): void;
        getOrElse<X extends A>(x: X): A;
        forall(f: (a: A) => boolean): boolean;
        exists(f: (a: A) => boolean): boolean;
        filter(f: (a: A) => boolean): Optional<Either<A, B>>;
        map<X>(f: (a: A) => X): Either<X | A, B>;
        flatMap<X>(f: (a: A) => Either<X, B>): Either<X | A, B>;
        toOptional(): Optional<A>;
    }
    export class RightProjection<A, B> {
        private self;
        constructor(self: Either<A, B>);
        toString(): string;
        get(): B;
        foreach(f: (b: B) => void): void;
        getOrElse<X extends B>(x: X): B;
        forall(f: (b: B) => boolean): boolean;
        exists(f: (b: B) => boolean): boolean;
        filter(f: (b: B) => boolean): Optional<Either<A, B>>;
        map<X>(f: (b: B) => X): Either<A, X | B>;
        flatMap<X>(f: (a: B) => Either<A, X>): Either<A, X | B>;
        toOptional(): Optional<B>;
    }

    export interface Optional<A> {
        isEmpty: boolean;
        nonEmpty: boolean;
        get(): A;
        getOrElse<B extends A>(a: B): A;
        map<B>(f: (a: A) => B): Optional<B>;
        fold<B>(ifEmpty: B, f: (a: A) => B): B;
        flatten(): Optional<A>;
        filter(f: (a: A) => boolean): Optional<A>;
        contains<B extends A>(b: B): boolean;
        exists(f: (a: A) => boolean): boolean;
        forall(f: (a: A) => boolean): boolean;
        flatMap<B>(f: (a: A) => Optional<B>): Optional<B>;
        foreach(f: (a: A) => void): void;
        orElse<B extends A>(ob: Optional<B>): Optional<A>;
        apply1<B, C>(ob: Optional<B>, f: (a: A, b: B) => C): Optional<C>;
        apply2<B, C, D>(ob: Optional<B>, oc: Optional<C>, f: (a: A, b: B, c: C) => D): Optional<D>;
        chain<B>(ob: Optional<B>): OptionalBuilder1<A, B>;
    }
    export const None: Optional<any>;
    export function Optional<A>(a: A): Optional<A>;
    export function Some<A>(a: A): Optional<A>;
    export class OptionalBuilder1<A, B> {
        private oa;
        private ob;
        constructor(oa: Optional<A>, ob: Optional<B>);
        run<C>(f: (a: A, b: B) => C): Optional<C>;
        chain<C>(oc: Optional<C>): OptionalBuilder2<A, B, C>;
    }
    export class OptionalBuilder2<A, B, C> {
        private oa;
        private ob;
        private oc;
        constructor(oa: Optional<A>, ob: Optional<B>, oc: Optional<C>);
        run<D>(f: (a: A, b: B, c: C) => D): Optional<D>;
        chain<D>(od: Optional<D>): OptionalBuilder3<A, B, C, D>;
    }
    export class OptionalBuilder3<A, B, C, D> {
        private oa;
        private ob;
        private oc;
        private od;
        constructor(oa: Optional<A>, ob: Optional<B>, oc: Optional<C>, od: Optional<D>);
        run<E>(f: (a: A, b: B, c: C, d: D) => E): Optional<E>;
        chain<E>(oe: Optional<E>): OptionalBuilder4<A, B, C, D, E>;
    }
    export class OptionalBuilder4<A, B, C, D, E> {
        private oa;
        private ob;
        private oc;
        private od;
        private oe;
        constructor(oa: Optional<A>, ob: Optional<B>, oc: Optional<C>, od: Optional<D>, oe: Optional<E>);
        run<F>(f: (a: A, b: B, c: C, d: D, e: E) => F): Optional<F>;
        chain<F>(of: Optional<F>): OptionalBuilder5<A, B, C, D, E, F>;
    }
    export class OptionalBuilder5<A, B, C, D, E, F> {
        private oa;
        private ob;
        private oc;
        private od;
        private oe;
        private of;
        constructor(oa: Optional<A>, ob: Optional<B>, oc: Optional<C>, od: Optional<D>, oe: Optional<E>, of: Optional<F>);
        run<G>(f: (a: A, b: B, c: C, d: D, e: E, f: F) => G): Optional<G>;
    }

    export interface Try<A> {
        isSuccess: boolean;
        isFailure: boolean;
        get(): A;
        getError(): Error;
        fold<B>(fe: (e: Error) => B, ff: (a: A) => B): B;
        getOrElse<B extends A>(a: B): A;
        orElse<B extends A>(a: Try<B>): Try<A>;
        foreach<B>(f: (a: A) => void): void;
        flatMap<B>(f: (a: A) => Try<B>): Try<B>;
        map<B>(f: (a: A) => B): Try<B>;
        filter(f: (a: A) => boolean): Try<A>;
        toOptional(): Optional<A>;
        failed(): Try<A>;
        transform<B>(fs: (a: A) => Try<B>, ff: (e: Error) => Try<B>): Try<B>;
        recover<B extends A>(f: (e: Error) => Optional<Try<B>>): Try<A>;
        apply1<B, C>(ob: Try<B>, f: (a: A, b: B) => C): Try<C>;
        apply2<B, C, D>(ob: Try<B>, oc: Try<C>, f: (a: A, b: B, c: C) => D): Try<D>;
        chain<B>(ob: Try<B>): TryBuilder1<A, B>;
    }
    export function Try<A>(f: () => A): Try<A>;
    export function Success<A>(a: A): Try<A>;
    export function Failure<A>(e: Error): Try<A>;

    export class TryBuilder1<A, B> {
        private oa;
        private ob;
        constructor(oa: Try<A>, ob: Try<B>);
        run<C>(f: (a: A, b: B) => C): Try<C>;
        chain<C>(oc: Try<C>): TryBuilder2<A, B, C>;
    }
    export class TryBuilder2<A, B, C> {
        private oa;
        private ob;
        private oc;
        constructor(oa: Try<A>, ob: Try<B>, oc: Try<C>);
        run<D>(f: (a: A, b: B, c: C) => D): Try<D>;
        chain<D>(od: Try<D>): TryBuilder3<A, B, C, D>;
    }
    export class TryBuilder3<A, B, C, D> {
        private oa;
        private ob;
        private oc;
        private od;
        constructor(oa: Try<A>, ob: Try<B>, oc: Try<C>, od: Try<D>);
        run<E>(f: (a: A, b: B, c: C, d: D) => E): Try<E>;
        chain<E>(oe: Try<E>): TryBuilder4<A, B, C, D, E>;
    }
    export class TryBuilder4<A, B, C, D, E> {
        private oa;
        private ob;
        private oc;
        private od;
        private oe;
        constructor(oa: Try<A>, ob: Try<B>, oc: Try<C>, od: Try<D>, oe: Try<E>);
        run<F>(f: (a: A, b: B, c: C, d: D, e: E) => F): Try<F>;
        chain<F>(of: Try<F>): TryBuilder5<A, B, C, D, E, F>;
    }
    export class TryBuilder5<A, B, C, D, E, F> {
        private oa;
        private ob;
        private oc;
        private od;
        private oe;
        private of;
        constructor(oa: Try<A>, ob: Try<B>, oc: Try<C>, od: Try<D>, oe: Try<E>, of: Try<F>);
        run<G>(f: (a: A, b: B, c: C, d: D, e: E, f: F) => G): Try<G>;
    }

    export interface Future<A> {
        getPromise(): Promise<A>;
        onComplete<B>(f: (t: Try<A>) => B): void;
        isCompleted(): boolean;
        value(): Optional<Try<A>>;
        failed(): Future<Error>;
        foreach<B>(f: (a: A) => B): void;
        transform<B>(f: (t: Try<A>) => Try<B>): Future<B>;
        transform1<B>(fs: (a: A) => B, ff: (e: Error) => Error): Future<B>;
        transformWith<B>(f: (t: Try<A>) => Future<B>): Future<B>;
        map<B>(f: (a: A) => B): Future<B>;
        flatMap<B>(f: (a: A) => Future<B>): Future<B>;
        filter(f: (a: A) => boolean): Future<A>;
        recover<B extends A>(f: (e: Error) => Optional<B>): Future<A>;
        recoverWith<B extends A>(f: (e: Error) => Optional<Future<B>>): Future<A>;
        zip<B>(fu: Future<B>): Future<[A, B]>;
        zipWith<B, C>(fu: Future<B>, f: (a: A, b: B) => C): Future<C>;
        fallbackTo<B extends A>(fu: Future<B>): Future<A>;
        andThen<B>(f: (t: Try<A>) => B): Future<A>;
        apply1<B, C>(ob: Future<B>, f: (a: A, b: B) => C): Future<C>;
        apply2<B, C, D>(ob: Future<B>, oc: Future<C>, f: (a: A, b: B, c: C) => D): Future<D>;
        chain<B>(ob: Future<B>): FutureBuilder1<A, B>;
    }
    export function Future<A>(f: Promise<A> | (() => A)): Future<A>;
    export namespace Future {
        function fromPromise<A>(p: Promise<A>): Future<A>;
        function unit(): Future<void>;
        function failed<A>(e: Error): Future<A>;
        function successful<A>(a: A): Future<A>;
        function fromTry<A>(t: Try<A>): Future<A>;
        function sequence<A>(fus: Array<Future<A>>): Future<Array<A>>;
        function firstCompletedOf<A>(fus: Array<Future<A>>): Future<A>;
        function find<A>(fus: Array<Future<A>>, f: (a: A) => boolean): Future<Optional<A>>;
        function foldLeft<A, B>(fu: Array<Future<A>>, zero: B, f: (b: B, a: A) => B): Future<B>;
        function reduceLeft<A, B>(fu: Array<Future<A>>, f: (b: B, a: A) => B): Future<B>;
        function traverse<A, B>(fu: Array<A>, f: (a: A) => Future<B>): Future<Array<B>>;
    }
    export class FutureBuilder1<A, B> {
        private oa;
        private ob;
        constructor(oa: Future<A>, ob: Future<B>);
        run<C>(f: (a: A, b: B) => C): Future<C>;
        chain<C>(oc: Future<C>): FutureBuilder2<A, B, C>;
    }
    export class FutureBuilder2<A, B, C> {
        private oa;
        private ob;
        private oc;
        constructor(oa: Future<A>, ob: Future<B>, oc: Future<C>);
        run<D>(f: (a: A, b: B, c: C) => D): Future<D>;
        chain<D>(od: Future<D>): FutureBuilder3<A, B, C, D>;
    }
    export class FutureBuilder3<A, B, C, D> {
        private oa;
        private ob;
        private oc;
        private od;
        constructor(oa: Future<A>, ob: Future<B>, oc: Future<C>, od: Future<D>);
        run<E>(f: (a: A, b: B, c: C, d: D) => E): Future<E>;
        chain<E>(oe: Future<E>): FutureBuilder4<A, B, C, D, E>;
    }
    export class FutureBuilder4<A, B, C, D, E> {
        private oa;
        private ob;
        private oc;
        private od;
        private oe;
        constructor(oa: Future<A>, ob: Future<B>, oc: Future<C>, od: Future<D>, oe: Future<E>);
        run<F>(f: (a: A, b: B, c: C, d: D, e: E) => F): Future<F>;
        chain<F>(of: Future<F>): FutureBuilder5<A, B, C, D, E, F>;
    }
    export class FutureBuilder5<A, B, C, D, E, F> {
        private oa;
        private ob;
        private oc;
        private od;
        private oe;
        private of;
        constructor(oa: Future<A>, ob: Future<B>, oc: Future<C>, od: Future<D>, oe: Future<E>, of: Future<F>);
        run<G>(f: (a: A, b: B, c: C, d: D, e: E, f: F) => G): Future<G>;
    }
}
