import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates a function that returns the result of invoking the provided functions with the this binding of the
         * created function, where each successive invocation is supplied the return value of the previous.
         *
         * @param funcs Functions to invoke.
         * @return Returns the new function.
         */
        // 0-argument first function
        flow<R1, R2>(f1: () => R1, f2: (a: R1) => R2): () => R2;
        flow<R1, R2, R3>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): () => R3;
        flow<R1, R2, R3, R4>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): () => R4;
        flow<R1, R2, R3, R4, R5>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): () => R5;
        flow<R1, R2, R3, R4, R5, R6>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): () => R6;
        flow<R1, R2, R3, R4, R5, R6, R7>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): () => R7;
        flow<R1, R2, R3, R4, R5, R6, R7>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): () => any;
        // 1-argument first function
        flow<A1, R1, R2>(f1: (a1: A1) => R1, f2: (a: R1) => R2): (a1: A1) => R2;
        flow<A1, R1, R2, R3>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1) => R3;
        flow<A1, R1, R2, R3, R4>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1) => R4;
        flow<A1, R1, R2, R3, R4, R5>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1) => R5;
        flow<A1, R1, R2, R3, R4, R5, R6>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1) => R6;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1) => R7;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1) => any;
        // 2-argument first function
        flow<A1, A2, R1, R2>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2) => R2;
        flow<A1, A2, R1, R2, R3>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2) => R3;
        flow<A1, A2, R1, R2, R3, R4>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2) => R4;
        flow<A1, A2, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2) => R5;
        flow<A1, A2, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2) => R6;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2) => R7;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1, a2: A2) => any;
        // 3-argument first function
        flow<A1, A2, A3, R1, R2>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3) => R2;
        flow<A1, A2, A3, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3) => R3;
        flow<A1, A2, A3, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3) => R4;
        flow<A1, A2, A3, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3) => R5;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3) => R6;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3) => R7;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1, a2: A2, a3: A3) => any;
        // 4-argument first function
        flow<A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3, a4: A4) => R2;
        flow<A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3, a4: A4) => R3;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3, a4: A4) => R4;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3, a4: A4) => R5;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3, a4: A4) => R6;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3, a4: A4) => R7;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1, a2: A2, a3: A3, a4: A4) => any;
        // any-argument first function
        flow<A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2;
        flow<A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any;
        flow(funcs: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flow
         */
        // 0-argument first function
        flow<R1, R2>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2): LoDashImplicitWrapper<() => R2>;
        flow<R1, R2, R3>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashImplicitWrapper<() => R3>;
        flow<R1, R2, R3, R4>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashImplicitWrapper<() => R4>;
        flow<R1, R2, R3, R4, R5>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashImplicitWrapper<() => R5>;
        flow<R1, R2, R3, R4, R5, R6>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashImplicitWrapper<() => R6>;
        flow<R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashImplicitWrapper<() => R7>;
        flow<R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<() => any>;
        // 1-argument first function
        flow<A1, R1, R2>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2): LoDashImplicitWrapper<(a1: A1) => R2>;
        flow<A1, R1, R2, R3>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashImplicitWrapper<(a1: A1) => R3>;
        flow<A1, R1, R2, R3, R4>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashImplicitWrapper<(a1: A1) => R4>;
        flow<A1, R1, R2, R3, R4, R5>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashImplicitWrapper<(a1: A1) => R5>;
        flow<A1, R1, R2, R3, R4, R5, R6>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashImplicitWrapper<(a1: A1) => R6>;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashImplicitWrapper<(a1: A1) => R7>;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<(a1: A1) => any>;
        // 2-argument first function
        flow<A1, A2, R1, R2>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2): LoDashImplicitWrapper<(a1: A1, a2: A2) => R2>;
        flow<A1, A2, R1, R2, R3>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashImplicitWrapper<(a1: A1, a2: A2) => R3>;
        flow<A1, A2, R1, R2, R3, R4>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashImplicitWrapper<(a1: A1, a2: A2) => R4>;
        flow<A1, A2, R1, R2, R3, R4, R5>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashImplicitWrapper<(a1: A1, a2: A2) => R5>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashImplicitWrapper<(a1: A1, a2: A2) => R6>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashImplicitWrapper<(a1: A1, a2: A2) => R7>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<(a1: A1, a2: A2) => any>;
        // 3-argument first function
        flow<A1, A2, A3, R1, R2>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R2>;
        flow<A1, A2, A3, R1, R2, R3>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R3>;
        flow<A1, A2, A3, R1, R2, R3, R4>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R4>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R5>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R6>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R7>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => any>;
        // 4-argument first function
        flow<A1, A2, A3, A4, R1, R2>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        flow<A1, A2, A3, A4, R1, R2, R3>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => any>;
        // any-argument first function
        flow<A1, A2, A3, A4, R1, R2>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2>;
        flow<A1, A2, A3, A4, R1, R2, R3>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any>;
        flow(this: LoDashImplicitWrapper<(...args: any[]) => any>, funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flow
         */
        // 0-argument first function
        flow<R1, R2>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2): LoDashExplicitWrapper<() => R2>;
        flow<R1, R2, R3>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitWrapper<() => R3>;
        flow<R1, R2, R3, R4>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitWrapper<() => R4>;
        flow<R1, R2, R3, R4, R5>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitWrapper<() => R5>;
        flow<R1, R2, R3, R4, R5, R6>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitWrapper<() => R6>;
        flow<R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitWrapper<() => R7>;
        flow<R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<() => any>;
        // 1-argument first function
        flow<A1, R1, R2>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2): LoDashExplicitWrapper<(a1: A1) => R2>;
        flow<A1, R1, R2, R3>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitWrapper<(a1: A1) => R3>;
        flow<A1, R1, R2, R3, R4>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitWrapper<(a1: A1) => R4>;
        flow<A1, R1, R2, R3, R4, R5>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitWrapper<(a1: A1) => R5>;
        flow<A1, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitWrapper<(a1: A1) => R6>;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitWrapper<(a1: A1) => R7>;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<(a1: A1) => any>;
        // 2-argument first function
        flow<A1, A2, R1, R2>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2): LoDashExplicitWrapper<(a1: A1, a2: A2) => R2>;
        flow<A1, A2, R1, R2, R3>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitWrapper<(a1: A1, a2: A2) => R3>;
        flow<A1, A2, R1, R2, R3, R4>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitWrapper<(a1: A1, a2: A2) => R4>;
        flow<A1, A2, R1, R2, R3, R4, R5>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitWrapper<(a1: A1, a2: A2) => R5>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitWrapper<(a1: A1, a2: A2) => R6>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitWrapper<(a1: A1, a2: A2) => R7>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<(a1: A1, a2: A2) => any>;
        // 3-argument first function
        flow<A1, A2, A3, R1, R2>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R2>;
        flow<A1, A2, A3, R1, R2, R3>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R3>;
        flow<A1, A2, A3, R1, R2, R3, R4>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R4>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R5>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R6>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R7>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => any>;
        // 4-argument first function
        flow<A1, A2, A3, A4, R1, R2>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        flow<A1, A2, A3, A4, R1, R2, R3>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => any>;
        // any-argument first function
        flow<A1, A2, A3, A4, R1, R2>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2>;
        flow<A1, A2, A3, A4, R1, R2, R3>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any>;
        flow(this: LoDashExplicitWrapper<(...args: any[]) => any>, funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<(...args: any[]) => any>;
    }
}