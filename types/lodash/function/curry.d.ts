declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry<T1, R>(func: (t1: T1) => R, arity?: number):
            CurriedFunction1<T1, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry<T1, T2, R>(func: (t1: T1, t2: T2) => R, arity?: number):
            CurriedFunction2<T1, T2, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry<T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R, arity?: number):
            CurriedFunction3<T1, T2, T3, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry<T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, arity?: number):
            CurriedFunction4<T1, T2, T3, T4, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry<T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, arity?: number):
            CurriedFunction5<T1, T2, T3, T4, T5, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry(func: (...args: any[]) => any, arity?: number): (...args: any[]) => any;
    }

    interface CurriedFunction1<T1, R> {
        (): CurriedFunction1<T1, R>;
        (t1: T1): R;
    }

    interface CurriedFunction2<T1, T2, R> {
        (): CurriedFunction2<T1, T2, R>;
        (t1: T1): CurriedFunction1<T2, R>;
        (t1: T1, t2: T2): R;
    }

    interface CurriedFunction3<T1, T2, T3, R> {
        (): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1): CurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2): CurriedFunction1<T3, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }

    interface CurriedFunction4<T1, T2, T3, T4, R> {
        (): CurriedFunction4<T1, T2, T3, T4, R>;
        (t1: T1): CurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }

    interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
        (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction1<T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }
    interface RightCurriedFunction1<T1, R> {
        (): RightCurriedFunction1<T1, R>;
        (t1: T1): R;
    }
    interface RightCurriedFunction2<T1, T2, R> {
        (): RightCurriedFunction2<T1, T2, R>;
        (t2: T2): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: T2): R;
    }
    interface RightCurriedFunction3<T1, T2, T3, R> {
        (): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: T3): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }
    interface RightCurriedFunction4<T1, T2, T3, T4, R> {
        (): RightCurriedFunction4<T1, T2, T3, T4, R>;
        (t4: T4): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3, t4: T4): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: T3, t4: T4): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }
    interface RightCurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t5: T5): RightCurriedFunction4<T1, T2, T3, T4, R>;
        (t4: T4, t5: T5): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3, t4: T4, t5: T5): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: T3, t4: T4, t5: T5): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
        * @see _.curry
        **/
        curry<T1, R>(this: LoDashImplicitWrapper<(t1: T1) => R>, arity?: number):
            LoDashImplicitWrapper<CurriedFunction1<T1, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2) => R>, arity?: number):
            LoDashImplicitWrapper<CurriedFunction2<T1, T2, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, T3, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2, t3: T3) => R>, arity?: number):
            LoDashImplicitWrapper<CurriedFunction3<T1, T2, T3, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4) => R>, arity?: number):
            LoDashImplicitWrapper<CurriedFunction4<T1, T2, T3, T4, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, T3, T4, T5, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>, arity?: number):
            LoDashImplicitWrapper<CurriedFunction5<T1, T2, T3, T4, T5, R>>;

        /**
        * @see _.curry
        **/
        curry(arity?: number): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
        * @see _.curry
        **/
        curry<T1, R>(this: LoDashExplicitWrapper<(t1: T1) => R>):
            LoDashExplicitWrapper<CurriedFunction1<T1, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2) => R>):
            LoDashExplicitWrapper<CurriedFunction2<T1, T2, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, T3, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2, t3: T3) => R>):
            LoDashExplicitWrapper<CurriedFunction3<T1, T2, T3, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4) => R>):
            LoDashExplicitWrapper<CurriedFunction4<T1, T2, T3, T4, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, T3, T4, T5, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>):
            LoDashExplicitWrapper<CurriedFunction5<T1, T2, T3, T4, T5, R>>;

        /**
        * @see _.curry
        **/
        curry(arity?: number): LoDashExplicitWrapper<(...args: any[]) => any>;
    }
}