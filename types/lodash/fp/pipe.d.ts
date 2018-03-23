// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Flow {
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R1, R2>(f1: () => R1, f2: (a: R1) => R2): () => R2;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R1, R2, R3>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): () => R3;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R1, R2, R3, R4>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): () => R4;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R1, R2, R3, R4, R5>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): () => R5;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R1, R2, R3, R4, R5, R6>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): () => R6;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R1, R2, R3, R4, R5, R6, R7>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): () => R7;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R1, R2, R3, R4, R5, R6, R7>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): () => any;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, R1, R2>(f1: (a1: A1) => R1, f2: (a: R1) => R2): (a1: A1) => R2;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, R1, R2, R3>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1) => R3;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, R1, R2, R3, R4>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1) => R4;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, R1, R2, R3, R4, R5>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1) => R5;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, R1, R2, R3, R4, R5, R6>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1) => R6;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1) => R7;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): (a1: A1) => any;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, R1, R2>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2) => R2;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, R1, R2, R3>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2) => R3;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, R1, R2, R3, R4>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2) => R4;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2) => R5;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2) => R6;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2) => R7;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): (a1: A1, a2: A2) => any;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, R1, R2>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3) => R2;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3) => R3;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3) => R4;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3) => R5;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3) => R6;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3) => R7;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): (a1: A1, a2: A2, a3: A3) => any;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3, a4: A4) => R2;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3, a4: A4) => R3;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3, a4: A4) => R4;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3, a4: A4) => R5;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3, a4: A4) => R6;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3, a4: A4) => R7;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): (a1: A1, a2: A2, a3: A3, a4: A4) => any;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any;
    /**
     * Creates a function that returns the result of invoking the provided functions with the this binding of the
     * created function, where each successive invocation is supplied the return value of the previous.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    (funcs: Array<_.Many<(...args: any[]) => any>>): (...args: any[]) => any;
}

declare const pipe: Flow;
export = pipe;
