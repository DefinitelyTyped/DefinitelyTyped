// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface CurryRight {
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        <T1, R>(func: (t1: T1) => R): _.RightCurriedFunction1<T1, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        <T1, T2, R>(func: (t1: T1, t2: T2) => R): _.RightCurriedFunction2<T1, T2, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): _.RightCurriedFunction3<T1, T2, T3, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): _.RightCurriedFunction4<T1, T2, T3, T4, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): _.RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        (func: (...args: any[]) => any): (...args: any[]) => any;
    }
}

declare const curryRight: Lodash.CurryRight;
export = curryRight;
