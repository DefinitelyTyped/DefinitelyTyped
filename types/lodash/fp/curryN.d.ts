// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Curry {
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    (): Curry;
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    (arity: number): Curry1x1;
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    <T1, R>(arity: number, func: (t1: T1) => R): _.CurriedFunction1<T1, R>;
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    <T1, T2, R>(arity: number, func: (t1: T1, t2: T2) => R): _.CurriedFunction2<T1, T2, R>;
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    <T1, T2, T3, R>(arity: number, func: (t1: T1, t2: T2, t3: T3) => R): _.CurriedFunction3<T1, T2, T3, R>;
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    <T1, T2, T3, T4, R>(arity: number, func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): _.CurriedFunction4<T1, T2, T3, T4, R>;
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    <T1, T2, T3, T4, T5, R>(arity: number, func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): _.CurriedFunction5<T1, T2, T3, T4, T5, R>;
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    (arity: number, func: (...args: any[]) => any): (...args: any[]) => any;
}
interface Curry1x1 {
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    (): Curry1x1;
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    <T1, R>(func: (t1: T1) => R): _.CurriedFunction1<T1, R>;
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    <T1, T2, R>(func: (t1: T1, t2: T2) => R): _.CurriedFunction2<T1, T2, R>;
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): _.CurriedFunction3<T1, T2, T3, R>;
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): _.CurriedFunction4<T1, T2, T3, T4, R>;
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): _.CurriedFunction5<T1, T2, T3, T4, T5, R>;
    /**
     * Creates a function that accepts one or more arguments of func that when called either invokes func returning
     * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
     * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
     * @param func The function to curry.
     * @param arity The arity of func.
     * @return Returns the new curried function.
     */
    (func: (...args: any[]) => any): (...args: any[]) => any;
}

declare const curryN: Curry;
declare namespace curryN {}
export = curryN;
