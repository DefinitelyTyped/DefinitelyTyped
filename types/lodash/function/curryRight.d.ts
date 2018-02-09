import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight<T1, R>(func: (t1: T1) => R, arity?: number):
            RightCurriedFunction1<T1, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, R>(func: (t1: T1, t2: T2) => R, arity?: number):
            RightCurriedFunction2<T1, T2, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R, arity?: number):
            RightCurriedFunction3<T1, T2, T3, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, arity?: number):
            RightCurriedFunction4<T1, T2, T3, T4, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, arity?: number):
            RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight(func: (...args: any[]) => any, arity?: number): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.curryRight
         **/
        curryRight<T1, R>(this: LoDashImplicitWrapper<(t1: T1) => R>, arity?: number):
            LoDashImplicitWrapper<RightCurriedFunction1<T1, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2) => R>, arity?: number):
            LoDashImplicitWrapper<RightCurriedFunction2<T1, T2, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, T3, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2, t3: T3) => R>, arity?: number):
            LoDashImplicitWrapper<RightCurriedFunction3<T1, T2, T3, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4) => R>, arity?: number):
            LoDashImplicitWrapper<RightCurriedFunction4<T1, T2, T3, T4, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, T3, T4, T5, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>, arity?: number):
            LoDashImplicitWrapper<RightCurriedFunction5<T1, T2, T3, T4, T5, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight(arity?: number): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.curryRight
         **/
        curryRight<T1, R>(this: LoDashExplicitWrapper<(t1: T1) => R>, arity?: number):
            LoDashExplicitWrapper<RightCurriedFunction1<T1, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2) => R>, arity?: number):
            LoDashExplicitWrapper<RightCurriedFunction2<T1, T2, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, T3, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2, t3: T3) => R>, arity?: number):
            LoDashExplicitWrapper<RightCurriedFunction3<T1, T2, T3, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4) => R>, arity?: number):
            LoDashExplicitWrapper<RightCurriedFunction4<T1, T2, T3, T4, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, T3, T4, T5, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>, arity?: number):
            LoDashExplicitWrapper<RightCurriedFunction5<T1, T2, T3, T4, T5, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight(arity?: number): LoDashExplicitWrapper<(...args: any[]) => any>;
    }
}