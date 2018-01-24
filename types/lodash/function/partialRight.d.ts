import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
        * This method is like _.partial except that partial arguments are appended to those provided
        * to the new function.
        * @param func The function to partially apply arguments to.
        * @param args Arguments to be partially applied.
        * @return The new partially applied function.
        **/
        partialRight: PartialRight;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.partialRight
         */
        partialRight: ImplicitPartialRight;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.partialRight
         */
        partialRight: ExplicitPartialRight;
    }

    interface PartialRight {
        // arity 0
        <R>(func: Function0<R>): Function0<R>;
        // arity 1
        <T1, R>(func: Function1<T1, R>): Function1<T1, R>;
        <T1, R>(func: Function1<T1, R>, arg1: T1): Function0<R>;
        // arity 2
        <T1, T2, R>(func: Function2<T1, T2, R>):                      Function2<T1, T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, plc2: PH):  Function1<    T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>,           arg2: T2):  Function1<T1,     R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, arg2: T2):  Function0<        R>;
        // arity 3
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>):                                Function3<T1, T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: PH, plc3: PH):  Function2<    T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>,           arg2: T2, plc3: PH):  Function2<T1,     T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, plc3: PH):  Function1<        T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>,                     arg3: T3):  Function2<T1, T2,     R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: PH, arg3: T3):  Function1<    T2,     R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>,           arg2: T2, arg3: T3):  Function1<T1,         R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, arg3: T3):  Function0<            R>;
        // arity 4
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>):                                          Function4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, plc3: PH, plc4: PH):  Function3<    T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,           arg2: T2, plc3: PH, plc4: PH):  Function3<T1,     T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: PH, plc4: PH):  Function2<        T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,                     arg3: T3, plc4: PH):  Function3<T1, T2,     T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, arg3: T3, plc4: PH):  Function2<    T2,     T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,           arg2: T2, arg3: T3, plc4: PH):  Function2<T1,         T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, plc4: PH):  Function1<            T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,                               arg4: T4):  Function3<T1, T2, T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, plc3: PH, arg4: T4):  Function2<    T2, T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,           arg2: T2, plc3: PH, arg4: T4):  Function2<T1,     T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: PH, arg4: T4):  Function1<        T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,                     arg3: T3, arg4: T4):  Function2<T1, T2,         R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, arg3: T3, arg4: T4):  Function1<    T2,         R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,           arg2: T2, arg3: T3, arg4: T4):  Function1<T1,             R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, arg4: T4):  Function0<                R>;
        // catch-all
        (func: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any;
    }

    interface ImplicitPartialRight {
        // arity 0
        <R>(this: LoDashImplicitWrapper<Function0<R>>): LoDashImplicitWrapper<Function0<R>>;
        // arity 1
        <T1, R>(this: LoDashImplicitWrapper<Function1<T1, R>>): LoDashImplicitWrapper<Function1<T1, R>>;
        <T1, R>(this: LoDashImplicitWrapper<Function1<T1, R>>, arg1: T1): LoDashImplicitWrapper<Function0<R>>;
        // arity 2
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>):                      LoDashImplicitWrapper<Function2<T1, T2, R>>;
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>, arg1: T1, plc2: PH):  LoDashImplicitWrapper<Function1<    T2, R>>;
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>,           arg2: T2):  LoDashImplicitWrapper<Function1<T1,     R>>;
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>, arg1: T1, arg2: T2):  LoDashImplicitWrapper<Function0<        R>>;
        // arity 3
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>):                                LoDashImplicitWrapper<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, plc2: PH, plc3: PH):  LoDashImplicitWrapper<Function2<    T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>,           arg2: T2, plc3: PH):  LoDashImplicitWrapper<Function2<T1,     T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, plc3: PH):  LoDashImplicitWrapper<Function1<        T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>,                     arg3: T3):  LoDashImplicitWrapper<Function2<T1, T2,     R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, plc2: PH, arg3: T3):  LoDashImplicitWrapper<Function1<    T2,     R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>,           arg2: T2, arg3: T3):  LoDashImplicitWrapper<Function1<T1,         R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, arg3: T3):  LoDashImplicitWrapper<Function0<            R>>;
        // arity 4
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>):                                          LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, plc3: PH, plc4: PH):  LoDashImplicitWrapper<Function3<    T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, plc3: PH, plc4: PH):  LoDashImplicitWrapper<Function3<T1,     T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: PH, plc4: PH):  LoDashImplicitWrapper<Function2<        T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,                     arg3: T3, plc4: PH):  LoDashImplicitWrapper<Function3<T1, T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3, plc4: PH):  LoDashImplicitWrapper<Function2<    T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, arg3: T3, plc4: PH):  LoDashImplicitWrapper<Function2<T1,         T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, plc4: PH):  LoDashImplicitWrapper<Function1<            T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,                               arg4: T4):  LoDashImplicitWrapper<Function3<T1, T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function2<    T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function2<T1,     T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function1<        T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,                     arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function2<T1, T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function1<    T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function1<T1,             R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function0<                R>>;
        // catch-all
        (...args: any[]): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface ExplicitPartialRight {
        // arity 0
        <R>(this: LoDashExplicitWrapper<Function0<R>>): LoDashExplicitWrapper<Function0<R>>;
        // arity 1
        <T1, R>(this: LoDashExplicitWrapper<Function1<T1, R>>): LoDashExplicitWrapper<Function1<T1, R>>;
        <T1, R>(this: LoDashExplicitWrapper<Function1<T1, R>>, arg1: T1): LoDashExplicitWrapper<Function0<R>>;
        // arity 2
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>):                      LoDashExplicitWrapper<Function2<T1, T2, R>>;
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>, arg1: T1, plc2: PH):  LoDashExplicitWrapper<Function1<    T2, R>>;
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>,           arg2: T2):  LoDashExplicitWrapper<Function1<T1,     R>>;
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>, arg1: T1, arg2: T2):  LoDashExplicitWrapper<Function0<        R>>;
        // arity 3
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>):                                LoDashExplicitWrapper<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, plc2: PH, plc3: PH):  LoDashExplicitWrapper<Function2<    T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>,           arg2: T2, plc3: PH):  LoDashExplicitWrapper<Function2<T1,     T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, plc3: PH):  LoDashExplicitWrapper<Function1<        T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>,                     arg3: T3):  LoDashExplicitWrapper<Function2<T1, T2,     R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, plc2: PH, arg3: T3):  LoDashExplicitWrapper<Function1<    T2,     R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>,           arg2: T2, arg3: T3):  LoDashExplicitWrapper<Function1<T1,         R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, arg3: T3):  LoDashExplicitWrapper<Function0<            R>>;
        // arity 4
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>):                                          LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, plc3: PH, plc4: PH):  LoDashExplicitWrapper<Function3<    T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, plc3: PH, plc4: PH):  LoDashExplicitWrapper<Function3<T1,     T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: PH, plc4: PH):  LoDashExplicitWrapper<Function2<        T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,                     arg3: T3, plc4: PH):  LoDashExplicitWrapper<Function3<T1, T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3, plc4: PH):  LoDashExplicitWrapper<Function2<    T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, arg3: T3, plc4: PH):  LoDashExplicitWrapper<Function2<T1,         T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, plc4: PH):  LoDashExplicitWrapper<Function1<            T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,                               arg4: T4):  LoDashExplicitWrapper<Function3<T1, T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function2<    T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function2<T1,     T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function1<        T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,                     arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function2<T1, T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function1<    T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function1<T1,             R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function0<                R>>;
        // catch-all
        (...args: any[]): LoDashExplicitWrapper<(...args: any[]) => any>;
    }
}