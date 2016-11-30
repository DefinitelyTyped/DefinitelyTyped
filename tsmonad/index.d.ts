// Type definitions for TsMonad
// Project: https://github.com/cbowdon/TsMonad
// Definitions by: Chris Bowdon <https://github.com/cbowdon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace TsMonad {
    /**
    * @name EitherType
    * @description Enumerate the different types contained by an Either object.
    */
    enum EitherType {
        Left = 0,
        Right = 1,
    }
    /**
    * @name EitherPatterns
    * @description Define a contract to unwrap Either object using callbacks
    *     for Left and Right.
    * @see Either#
    */
    interface EitherPatterns<L, R, T> {
        /**
        * @name left
        * @description Function to handle the Left.
        * @type {(l: L) => T}
        */
        left: (l: L) => T;
        /**
        * @name right
        * @description Function to handle the Right.
        * @type {(r: R) => T}
        */
        right: (r: R) => T;
    }
    /**
    * @name either
    * @description Build an Either object.
    * @function
    * @param l The object as a Left (optional).
    * @param r The object as a Right (optional).
    * @returns {Either<L, R>} Either object containing the input.
    * @throws {TypeError} If there are both or none of left and right
    *     parameter.
    * @see Either#
    */
    function either<L, R>(l?: L, r?: R): Either<L, R>;
    /**
    * @name Either
    * @class Either has exactly two sub types, Left (L) and Right (R). If an
    *     Either<L, R> object contains an instance of L, then the Either is a
    *     Left. Otherwise it contains an instance of R and is a Right. By
    *     convention, the Left constructor is used to hold an error value and
    *     the Right constructor is used to hold a correct value.
    */
    class Either<L, R> implements Monad<R>, Functor<R>, Eq<Either<L, R>> {
        private type;
        private l;
        private r;
        /**
        * @description Build an Either object. For internal use only.
        * @constructor
        * @methodOf Either#
        * @param {EitherType} type Indicates if the Either content is a Left or a Right.
        * @param {L} l The Left value (optional).
        * @param {R} l The Right value (optional).
        */
        constructor(type: EitherType, l?: L, r?: R);
        /**
        * @name left
        * @description Helper function to build an Either with a Left.
        * @methodOf Either#
        * @static
        * @param {L} l The Left value.
        * @returns {Either<L, R>} Either object containing a Left.
        */
        static left<L, R>(l: L): Either<L, R>;
        /**
        * @name right
        * @description Helper function to build an Either with a Right.
        * @methodOf Either#
        * @static
        * @param {R} r The Right value.
        * @returns {Either<L, R>} Either object containing a Right.
        */
        static right<L, R>(r: R): Either<L, R>;
        /**
        * @name unit
        * @description Wrap a value inside an Either Right object.
        * @methodOf Either#
        * @public
        * @param {T} t
        * @returns {Either<L, R>} Either object containing a Right.
        * @see Monad#unit
        */
        public unit<T>(t: T): Either<L, T>;
        /**
        * @name bind
        * @description Apply the function passed as parameter on the object.
        * @methodOf Either#
        * @public
        * @param {(r: R) => Either<L, T>} f Function applied on the Right.
        * @returns {Either<L, T>} The result of the function f wrapped inside
        *     an Either object.
        * @see Monad#bind
        */
        public bind<T>(f: (r: R) => Either<L, T>): Either<L, T>;
        /**
        * @name of
        * @description Alias for unit.
        * @methodOf Either#
        * @public
        * @see Either#unit
        * @see Monad#of
        */
        public of: <T>(t: T) => Either<L, T>;
        /**
        * @name chain
        * @description Alias for bind.
        * @methodOf Either#
        * @public
        * @see Either#bind
        * @see Monad#chain
        */
        public chain: <T>(f: (r: R) => Either<L, T>) => Either<L, T>;
        /**
        * @name fmap
        * @description Apply the function passed as parameter on the object.
        * @methodOf Either#
        * @public
        * @param {(r: R) => T} f Function applied on the Right.
        * @returns {Either<L, T>} The result of the function f wrapped inside
        *     an Either object.
        * @see Functor#fmap
        */
        public fmap<T>(f: (r: R) => T): Either<L, T>;
        /**
        * @name lift
        * @description Alias for fmap.
        * @methodOf Either#
        * @public
        * @see Either#fmap
        * @see Functor#lift
        */
        public lift: <T>(f: (r: R) => T) => Either<L, T>;
        /**
        * @name map
        * @description Alias for fmap.
        * @methodOf Either#
        * @public
        * @see Either#fmap
        * @see Functor#map
        */
        public map: <T>(f: (r: R) => T) => Either<L, T>;
        /**
        * @name caseOf
        * @description Execute a function depending on the Either content.
        *     It allows to unwrap the object for Left or Right types.
        * @methodOf Either#
        * @public
        * @param {EitherPatterns<L, R, T>} pattern Object containing the
        *     functions to applied on each Either types.
        * @return {T} The returned value of the functions specified in the
        *     EitherPatterns interface.
        * @see EitherPatterns#
        */
        public caseOf<T>(pattern: EitherPatterns<L, R, T>): T;
        /**
        * @name equals
        * @description Compare the type and the content of two Either
        *     objects.
        * @methodOf Either#
        * @public
        * @param {Either<L, R>} other The Either to compare with.
        * @return {boolean} True if the type and content value are equals,
        *     false otherwise.
        * @see Eq#equals
        */
        public equals(other: Either<L, R>): any;
    }
}
declare namespace TsMonad {
    /**
    * @name eq
    * @description Compare two objects :
    *     1. if objects implement Eq, defer to their .equals
    *     2. if are arrays, iterate and recur
    * @function
    * @param {any} a Any object.
    * @param {any} b Any object.
    * @returns {boolean} In case 1, the `.equals()` function returned value.
    *     In case 2, true if each elements are equals, false otherwise.
    */
    function eq(a: any, b: any): any;
    /**
    * @name Eq
    * @description Define a contract to compare (in)equalities between
    *     objects.
    */
    interface Eq<T> {
        /**
        * @name equals
        * @description Determine if two objects are equals.
        * @methodOf Eq
        * @public
        * @param {T} The object to compare with.
        * @returns {boolean} True if the objects are equals, false otherwise.
        */
        equals(t: T): boolean;
    }
    interface Monad<T> {
        /**
        * @name unit
        * @description Wrap an object inside a monad.
        * @methodOf Monad#
        * @public
        * @param {U} t The object to wrap.
        * @returns {Monad<U>} A Monad with the value wrapped inside.
        */
        unit<U>(t: U): Monad<U>;
        /**
        * @name bind
        * @description Apply the function passed as parameter on the object.
        * @methodOf Monad#
        * @public
        * @param {(t: T) => Monad<U>} f Function applied on the Monad content.
        * @returns {Monad<U>} The result of the function f wrapped inside
        *     a Monad object.
        */
        bind<U>(f: (t: T) => Monad<U>): Monad<U>;
        /**
        * @name of
        * @description Alias for unit. Fantasy Land Monad conformance.
        * @methodOf Monad#
        * @public
        * @see Monad#unit
        */
        of<U>(t: U): Monad<U>;
        /**
        * @name chain
        * @description Alias for bind. Fantasy Land Monad conformance.
        * @methodOf Monad#
        * @public
        * @see Monad#bind
        */
        chain<U>(f: (t: T) => Monad<U>): Monad<U>;
    }
    /**
    * @name Functor
    * @description Define a contract to add basic functor functions to an
    *     object.
    */
    interface Functor<T> {
        /**
        * @name fmap
        * @description Apply the function passed as parameter on the object.
        * @methodOf Functor#
        * @public
        * @param {(t: T) => U} f Function applied on the functor content.
        * @returns {Functor<U>} The result of the function f wrapped inside
        *     an Functor object.
        * @see Functor#fmap
        */
        fmap<U>(f: (t: T) => U): Functor<U>;
        /**
        * @name lift
        * @description Alias for fmap.
        * @methodOf Functor#
        * @public
        * @see Functor#fmap
        */
        lift<U>(f: (t: T) => U): Functor<U>;
        /**
        * @name map
        * @description Alias for fmap. Fantasy Land Monad conformance.
        * @methodOf Functor#
        * @public
        * @see Functor#fmap
        */
        map<U>(f: (t: T) => U): Functor<U>;
    }
}
declare namespace TsMonad {
    /**
    * @name MaybeType
    * @description Enumerate the different types contained by an Maybe object.
    * @see Maybe#
    */
    enum MaybeType {
        Nothing = 0,
        Just = 1,
    }
    /**
    * @name MaybePatterns
    * @description Define a contract to unwrap Maybe object using callbacks
    *     for Just and Nothing.
    * @see Maybe#
    */
    interface MaybePatterns<T, U> {
        /**
        * @name just
        * @description Function to handle the Just.
        * @type {(t: T) => U}
        */
        just: (t: T) => U;
        /**
        * @name nothing
        * @description Function to handle the Nothing.
        * @type {() => U}
        */
        nothing: () => U;
    }
    // ditto, but optional
    export interface OptionalMaybePatterns<T, U> {
        just?: (t: T) => U;
        nothing?: () => U;
    }
    /**
    * @name maybe
    * @description Build a Maybe object.
    * @function
    * @param {T} t The object to wrap.
    * @returns {Maybe<T>} A Maybe object containing the input. If t is null
    *     or undefined, the Maybe object is filled with Nothing.
    * @see Maybe#
    */
    function maybe<T>(t: T): Maybe<T>;
    /**
    * @name Maybe
    * @class Encapsulates an optional value. A value of type Maybe a either
    *     contains a value of type a (represented as Just a), or it is empty
    *     (represented as Nothing).
    */
    class Maybe<T> implements Monad<T>, Functor<T>, Eq<Maybe<T>> {
        private type;
        private value;
        /**
        * @description Build a Maybe object. For internal use only.
        * @constructor
        * @methodOf Maybe#
        * @param {MaybeType} type Indicates if the Maybe content is a Just or a Nothing.
        * @param {T} value The value to wrap (optional).
        */
        constructor(type: MaybeType, value?: T);
        /**
        * @name maybe
        * @description Helper function to build a Maybe object.
        * @methodOf Maybe#
        * @static
        * @param {T} t The value to wrap.
        * @returns {Maybe<T>} A Maybe object containing the value passed in input. If t is null
        *     or undefined, the Maybe object is filled with Nothing.
        */
        static maybe<T>(t: T): Maybe<T>;
        /**
        * @name just
        * @description Helper function to build a Maybe object filled with a
        *     Just type.
        * @methodOf Maybe#
        * @static
        * @param {T} t The value to wrap.
        * @returns {Maybe<T>} A Maybe object containing the value passed in input.
        * @throws {TypeError} If t is null or undefined.
        */
        static just<T>(t: T): Maybe<T>;
        /**
        * @name nothing
        * @description Helper function to build a Maybe object filled with a
        *     Nothing type.
        * @methodOf Maybe#
        * @static
        * @returns {Maybe<T>} A Maybe with a Nothing type.
        */
        static nothing<T>(): Maybe<T>;
        /**
        * @name unit
        * @description Wrap an object inside a Maybe.
        * @public
        * @methodOf Maybe#
        * @param {U} u The object to wrap.
        * @returns {Monad<U>} A Monad with the value wrapped inside.
        * @see Monad#unit
        */
        public unit<U>(u: U): Maybe<U>;
        /**
        * @name bind
        * @description Apply the function passed as parameter on the object.
        * @methodOf Maybe#
        * @public
        * @param {(t: T) => Maybe<U>} f Function applied on the Maybe content.
        * @returns {Maybe<U>} The result of the function f wrapped inside
        *     a Maybe object.
        * @see Monad#bind
        */
        public bind<U>(f: (t: T) => Maybe<U>): Maybe<U>;
        /**
        * @name of
        * @description Alias for unit.
        * @methodOf Maybe#
        * @public
        * @see Maybe#unit
        * @see Monad#of
        */
        public of: <U>(u: U) => Maybe<U>;
        /**
        * @name chain
        * @description Alias for bind.
        * @methodOf Maybe#
        * @public
        * @see Maybe#unit
        * @see Monad#of
        */
        public chain: <U>(f: (t: T) => Maybe<U>) => Maybe<U>;
        /**
        * @name fmap
        * @description Apply the function passed as parameter on the object.
        * @methodOf Maybe#
        * @public
        * @param {(t: T) => U} f Function applied on the Maybe content.
        * @returns {Maybe<U>} The result of the function f wrapped inside
        *     an Maybe object.
        * @see Functor#fmap
        */
        public fmap<U>(f: (t: T) => U): Maybe<U>;
        /**
        * @name lift
        * @description Alias for fmap.
        * @methodOf Maybe#
        * @public
        * @see Maybe#fmap
        * @see Monad#of
        */
        public lift: <U>(f: (t: T) => U) => Maybe<U>;
        /**
        * @name map
        * @description Alias for fmap.
        * @methodOf Maybe#
        * @public
        * @see Maybe#fmap
        * @see Monad#of
        */
        public map: <U>(f: (t: T) => U) => Maybe<U>;
        /**
        * @name caseOf
        * @description Execute a function depending on the Maybe content. It
        *     allows to unwrap the object for Just or Nothing types.
        * @methodOf Maybe#
        * @public
        * @param {MaybePatterns<T, U>} pattern Object containing the
        *     functions to applied on each Maybe types.
        * @return {U} The returned value of the functions specified in the
        *     MaybePatterns interface.
        * @see MaybePatterns#
        */
        public caseOf<U>(patterns: MaybePatterns<T, U>): U;
        /**
        * @name defaulting
        * @description Convert a possible Nothing into a guaranteed Maybe.Just.
        * @methodOf Maybe#
        * @public
        * @param {T} pattern Default value to have if Nothing
        * @return {Maybe<T>}
        */
        public defaulting(defaultValue: T): Maybe<T>;
        /**
        * @name equals
        * @description Compare the type and the content of two Maybe
        *     objects.
        * @methodOf Maybe#
        * @public
        * @param {Maybe<T>} other The Maybe to compare with.
        * @return {boolean} True if the type and content value are equals,
        *     false otherwise.
        * @see Eq#equals
        */
        public equals(other: Maybe<T>): any;
        /**
        * @name valueOr
        * @description Unwrap a Maybe with a default value
        * @methodOf Maybe#
        * @public
        * @param {T} defaultValue Default value to have if Nothing
        * @return {T}
        * Separate U type to allow Maybe.nothing().valueOr() to match
        * without explicitly typing Maybe.nothing.
        */
        valueOr<U extends T>(defaultValue: U): T | U;
        /**
        * @name valueOrCompute
        * @description Unwrap a Maybe with a default value computed from a thunk
        * @methodOf Maybe#
        * @public
        * @param {T} defaultValueFunction Default value to compute if Nothing
        * @return {T}
        * Separate U type to allow Maybe.nothing().valueOrCompute() to match
        * without explicitly typing Maybe.nothing.
        */
        valueOrCompute<U extends T>(defaultValueFunction: () => U): T | U;
        /**
        * @name valueOrThrow
        * @description Unwrap a Maybe throwing if it is nothing
        * @methodOf Maybe#
        * @public
        * @param {Error} [error] Optional error to throw
        * @return {T}
        */
        valueOrThrow(error?: Error): T;
        /**
        * @name do
        * @description Execute a function based on the Maybe content. Returns the
        *     original value, so is meant for running functions with side-effects.
        * @methodOf Maybe#
        * @public
        * @param {OptionalMaybePatterns<T, U>} pattern Object containing the
        *     functions to applied on each Maybe type.
        * @return The original Maybe value.
        * @see OptionalMaybePatterns#
        */
        do(patterns: OptionalMaybePatterns<T, void>): Maybe<T>;
    }
}
declare namespace TsMonad {
    /**
    * @name WriterPatterns
    * @description Define a contract to unwrap Writer object using a
    *     callback.
    * @see Writer#
    */
    interface WriterPatterns<S, T, U> {
        /**
        * @name writer
        * @description Function to handle the Writer content.
        * @type {(story: S[], value: T) => U}
        */
        writer: (story: S[], value: T) => U;
    }
    /**
    * @name writer
    * @description Build a Writer object.
    * @function
    * @param {S[]} story The collection to store logs.
    * @param {T} value The object to wrap.
    * @returns {Writer<S, T>} A Writer object containing the log collection
    *     and the wrapped value.
    * @see Writer#
    */
    function writer<S, T>(story: S[], value: T): Writer<S, T>;
    /**
    * @name Writer
    * @class Allow to do computations while making sure that all the log
    *     values are combined into one log value that then gets attached to
    *     the result.
    */
    class Writer<S, T> implements Monad<T>, Eq<Writer<S, T>> {
        private story;
        private value;
        /**
        * @description Build a Writer object. For internal use only.
        * @constructor
        * @methodOf Writer#
        * @param {S[]} story The collection of logs.
        * @param {T} value The object to wrap.
        */
        constructor(story: S[], value: T);
        /**
        * @name writer
        * @description Helper function to build a Writer object.
        * @methodOf Writer#
        * @static
        * @param {S[]} story The collection of logs.
        * @param {T} value The object to wrap.
        * @returns {Writer<S, T>} A Writer object containing the collection of logs
        *     and the wrapped value.
        */
        static writer<S, T>(story: S[], value: T): Writer<S, T>;
        /**
        * @name writer
        * @description Helper function to build a Writer object with the log
        *     passed in input only.
        * @methodOf Writer#
        * @static
        * @param {S} s A log to store.
        * @returns {Writer<S, number>} A Writer object containing the collection of logs
        *     and a zeroed value.
        */
        static tell<S>(s: S): Writer<S, number>;
        /**
        * @name unit
        * @description Wrap an object inside a Writer.
        * @public
        * @methodOf Writer#
        * @param {U} u The object to wrap.
        * @returns {Monad<U>} A Writer with the value wrapped inside and an
        *     empty collection of logs.
        * @see Monad#unit
        */
        public unit<U>(u: U): Writer<any, U>;
        /**
        * @name bind
        * @description Apply the function passed as parameter on the object.
        * @methodOf Writer#
        * @public
        * @param {(t: T) => Writer<S, U>} f Function applied on the Writer content.
        * @returns {Writer<S, U>} The result of the function f append to the
        *     Writer object.
        * @see Monad#bind
        */
        public bind<U>(f: (t: T) => Writer<S, U>): Writer<S, U>;
        /**
        * @name of
        * @description Alias for unit.
        * @methodOf Writer#
        * @public
        * @see Writer#unit
        * @see Monad#of
        */
        public of: <U>(u: U) => Writer<any, U>;
        /**
        * @name chain
        * @description Alias for bind
        * @methodOf Writer#
        * @public
        * @see Writer#unit
        * @see Monad#of
        */
        public chain: <U>(f: (t: T) => Writer<S, U>) => Writer<S, U>;
        /**
        * @name fmap
        * @description Apply the function passed as parameter on the object.
        * @methodOf Writer#
        * @public
        * @param {(t: T) => U} f Function applied on the wrapped value.
        * @returns {Writer<S, U>} The result of the function f wrapped inside
        *     an Writer object. It has an empty collection of logs.
        * @see Functor#fmap
        */
        public fmap<U>(f: (t: T) => U): Writer<S, U>;
        /**
        * @name lift
        * @description Alias for fmap
        * @methodOf Writer#
        * @public
        * @see Writer#fmap
        * @see Monad#of
        */
        public lift: <U>(f: (t: T) => U) => Writer<S, U>;
        /**
        * @name map
        * @description Alias for fmap
        * @methodOf Writer#
        * @public
        * @see Writer#fmap
        * @see Monad#of
        */
        public map: <U>(f: (t: T) => U) => Writer<S, U>;
        /**
        * @name caseOf
        * @description Execute a function on the Writer content. It allows to
        *     unwrap the object.
        * @methodOf Writer#
        * @public
        * @param {WriterPatterns<S, T, U>} pattern Object containing the
        *     functions to applied on the Writer content.
        * @return {U} The returned value of the function specified in the
        *     WriterPatterns interface.
        * @see WriterPatterns#
        */
        public caseOf<U>(patterns: WriterPatterns<S, T, U>): U;
        /**
        * @name equals
        * @description Compare the type and the content of two Writer
        *     objects.
        * @methodOf Writer#
        * @public
        * @param {Writer<S, T>} other The Writer to compare with.
        * @return {boolean} True if the collection of logs and content value
        *     are equals, false otherwise.
        * @see Eq#equals
        */
        public equals(other: Writer<S, T>): boolean;
    }
}
declare var module: {
    exports: any;
    require(id: string): any;
    id: string;
    filename: string;
    loaded: boolean;
    parent: any;
    children: any[];
};
/**
* @name tsmonad
* @namespace Hold functionalities related to TsMonad library.
*/
declare module 'tsmonad' {
    export = TsMonad;
}
