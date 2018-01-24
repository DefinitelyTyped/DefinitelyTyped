import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
        * Creates a function that, when called, invokes func with any additional partial arguments
        * prepended to those provided to the new function. This method is similar to _.bind except
        * it does not alter the this binding.
        * @param func The function to partially apply arguments to.
        * @param args Arguments to be partially applied.
        * @return The new partially applied function.
        **/
        partial: Partial;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.partial
         */
        partial: ImplicitPartial;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.partial
         */
        partial: ExplicitPartial;
    }

    type PH = LoDashStatic;

    type Function0<R> = () => R;
    type Function1<T1, R> = (t1: T1) => R;
    type Function2<T1, T2, R> = (t1: T1, t2: T2) => R;
    type Function3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
    type Function4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;

    interface Partial {
        // arity 0
        <R>(func: Function0<R>): Function0<R>;
        // arity 1
        <T1, R>(func: Function1<T1, R>): Function1<T1, R>;
        <T1, R>(func: Function1<T1, R>, arg1: T1): Function0<R>;
        // arity 2
        <T1, T2, R>(func: Function2<T1, T2, R>):                      Function2<T1, T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1):            Function1<    T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, plc1: PH, arg2: T2):  Function1<T1,     R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, arg2: T2):  Function0<        R>;
        // arity 3
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>):                                Function3<T1, T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1):                      Function2<    T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: PH, arg2: T2):            Function2<T1,     T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2):            Function1<        T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: PH, plc2: PH, arg3: T3):  Function2<T1, T2,     R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: PH, arg3: T3):  Function1<    T2,     R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: PH, arg2: T2, arg3: T3):  Function1<T1,         R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, arg3: T3):  Function0<            R>;
        // arity 4
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>):                                          Function4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1):                                Function3<    T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, arg2: T2):                      Function3<T1,     T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2):                      Function2<        T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, plc2: PH, arg3: T3):            Function3<T1, T2,     T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, arg3: T3):            Function2<    T2,     T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, arg2: T2, arg3: T3):            Function2<T1,         T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3):            Function1<            T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, plc2: PH, plc3: PH, arg4: T4):  Function3<T1, T2, T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, plc3: PH, arg4: T4):  Function2<    T2, T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, arg2: T2, plc3: PH, arg4: T4):  Function2<T1,     T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: PH, arg4: T4):  Function1<        T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, plc2: PH, arg3: T3, arg4: T4):  Function2<T1, T2,         R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, arg3: T3, arg4: T4):  Function1<    T2,         R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, arg2: T2, arg3: T3, arg4: T4):  Function1<T1,             R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, arg4: T4):  Function0<                R>;
        // catch-all
        (func: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any;
    }

    interface ImplicitPartial {
        // arity 0
        <R>(this: LoDashImplicitWrapper<Function0<R>>): LoDashImplicitWrapper<Function0<R>>;
        // arity 1
        <T1, R>(this: LoDashImplicitWrapper<Function1<T1, R>>): LoDashImplicitWrapper<Function1<T1, R>>;
        <T1, R>(this: LoDashImplicitWrapper<Function1<T1, R>>, arg1: T1): LoDashImplicitWrapper<Function0<R>>;
        // arity 2
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>):                      LoDashImplicitWrapper<Function2<T1, T2, R>>;
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>, arg1: T1):            LoDashImplicitWrapper<Function1<    T2, R>>;
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>, plc1: PH, arg2: T2):  LoDashImplicitWrapper<Function1<T1,     R>>;
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>, arg1: T1, arg2: T2):  LoDashImplicitWrapper<Function0<        R>>;
        // arity 3
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>):                                LoDashImplicitWrapper<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1):                      LoDashImplicitWrapper<Function2<    T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, plc1: PH, arg2: T2):            LoDashImplicitWrapper<Function2<T1,     T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2):            LoDashImplicitWrapper<Function1<        T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, plc1: PH, plc2: PH, arg3: T3):  LoDashImplicitWrapper<Function2<T1, T2,     R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, plc2: PH, arg3: T3):  LoDashImplicitWrapper<Function1<    T2,     R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, plc1: PH, arg2: T2, arg3: T3):  LoDashImplicitWrapper<Function1<T1,         R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, arg3: T3):  LoDashImplicitWrapper<Function0<            R>>;
        // arity 4
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>):                                          LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1):                                LoDashImplicitWrapper<Function3<    T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2):                      LoDashImplicitWrapper<Function3<T1,     T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2):                      LoDashImplicitWrapper<Function2<        T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, plc2: PH, arg3: T3):            LoDashImplicitWrapper<Function3<T1, T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3):            LoDashImplicitWrapper<Function2<    T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2, arg3: T3):            LoDashImplicitWrapper<Function2<T1,         T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3):            LoDashImplicitWrapper<Function1<            T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, plc2: PH, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function3<T1, T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function2<    T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function2<T1,     T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function1<        T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, plc2: PH, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function2<T1, T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function1<    T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function1<T1,             R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function0<                R>>;
        // catch-all
        (...args: any[]): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface ExplicitPartial {
        // arity 0
        <R>(this: LoDashExplicitWrapper<Function0<R>>): LoDashExplicitWrapper<Function0<R>>;
        // arity 1
        <T1, R>(this: LoDashExplicitWrapper<Function1<T1, R>>): LoDashExplicitWrapper<Function1<T1, R>>;
        <T1, R>(this: LoDashExplicitWrapper<Function1<T1, R>>, arg1: T1): LoDashExplicitWrapper<Function0<R>>;
        // arity 2
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>):                      LoDashExplicitWrapper<Function2<T1, T2, R>>;
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>, arg1: T1):            LoDashExplicitWrapper<Function1<    T2, R>>;
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>, plc1: PH, arg2: T2):  LoDashExplicitWrapper<Function1<T1,     R>>;
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>, arg1: T1, arg2: T2):  LoDashExplicitWrapper<Function0<        R>>;
        // arity 3
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>):                                LoDashExplicitWrapper<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1):                      LoDashExplicitWrapper<Function2<    T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, plc1: PH, arg2: T2):            LoDashExplicitWrapper<Function2<T1,     T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2):            LoDashExplicitWrapper<Function1<        T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, plc1: PH, plc2: PH, arg3: T3):  LoDashExplicitWrapper<Function2<T1, T2,     R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, plc2: PH, arg3: T3):  LoDashExplicitWrapper<Function1<    T2,     R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, plc1: PH, arg2: T2, arg3: T3):  LoDashExplicitWrapper<Function1<T1,         R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, arg3: T3):  LoDashExplicitWrapper<Function0<            R>>;
        // arity 4
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>):                                          LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1):                                LoDashExplicitWrapper<Function3<    T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2):                      LoDashExplicitWrapper<Function3<T1,     T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2):                      LoDashExplicitWrapper<Function2<        T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, plc2: PH, arg3: T3):            LoDashExplicitWrapper<Function3<T1, T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3):            LoDashExplicitWrapper<Function2<    T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2, arg3: T3):            LoDashExplicitWrapper<Function2<T1,         T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3):            LoDashExplicitWrapper<Function1<            T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, plc2: PH, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function3<T1, T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function2<    T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function2<T1,     T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function1<        T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, plc2: PH, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function2<T1, T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function1<    T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function1<T1,             R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function0<                R>>;
        // catch-all
        (...args: any[]): LoDashExplicitWrapper<(...args: any[]) => any>;
    }
}