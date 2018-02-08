// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface FlowRight {
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R2, R1>(f2: (a: R1) => R2, f1: () => R1): () => R2;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R3;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R4;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R5;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R6;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R7;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R2;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R3;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R4;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R5;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R6;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R7;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R2;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R3;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R4;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R5;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R6;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R7;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R2;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R3;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R4;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R5;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R6;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R7;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R2;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R3;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R4;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R5;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R6;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <A1, A2, A3, A4, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R7;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R2, R1>(f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R2;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R3;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R4;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R5;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R6;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    <R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R7;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    (f7: (a: any) => any, f6: (a: any) => any, f5: (a: any) => any, f4: (a: any) => any, f3: (a: any) => any, f2: (a: any) => any, f1: () => any, ...funcs: Array<_.Many<(...args: any[]) => any>>): (...args: any[]) => any;
    /**
     * This method is like _.flow except that it creates a function that invokes the provided functions from right
     * to left.
     *
     * @param funcs Functions to invoke.
     * @return Returns the new function.
     */
    (funcs: Array<_.Many<(...args: any[]) => any>>): (...args: any[]) => any;
}

declare const flowRight: FlowRight;
declare namespace flowRight {}
export = flowRight;
