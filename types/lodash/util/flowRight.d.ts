declare namespace _ {
    interface LoDashStatic {
        /**
         * This method is like _.flow except that it creates a function that invokes the provided functions from right
         * to left.
         *
         * @param funcs Functions to invoke.
         * @return Returns the new function.
         */
        // 0-argument first function
        flowRight<R2, R1>(f2: (a: R1) => R2, f1: () => R1): () => R2;
        flowRight<R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R3;
        flowRight<R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R4;
        flowRight<R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R5;
        flowRight<R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R6;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R7;
        // 1-argument first function
        flowRight<A1, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R2;
        flowRight<A1, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R3;
        flowRight<A1, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R4;
        flowRight<A1, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R5;
        flowRight<A1, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R6;
        flowRight<A1, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R7;
        // 2-argument first function
        flowRight<A1, A2, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R2;
        flowRight<A1, A2, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R3;
        flowRight<A1, A2, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R4;
        flowRight<A1, A2, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R5;
        flowRight<A1, A2, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R6;
        flowRight<A1, A2, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R7;
        // 3-argument first function
        flowRight<A1, A2, A3, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R2;
        flowRight<A1, A2, A3, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R3;
        flowRight<A1, A2, A3, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R4;
        flowRight<A1, A2, A3, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R5;
        flowRight<A1, A2, A3, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R6;
        flowRight<A1, A2, A3, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R7;
        // 4-argument first function
        flowRight<A1, A2, A3, A4, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R2;
        flowRight<A1, A2, A3, A4, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R3;
        flowRight<A1, A2, A3, A4, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R4;
        flowRight<A1, A2, A3, A4, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R5;
        flowRight<A1, A2, A3, A4, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R6;
        flowRight<A1, A2, A3, A4, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R7;
        // any-argument first function
        flowRight<R2, R1>(f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R2;
        flowRight<R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R3;
        flowRight<R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R4;
        flowRight<R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R5;
        flowRight<R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R6;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R7;
        flowRight(f7: (a: any) => any, f6: (a: any) => any, f5: (a: any) => any, f4: (a: any) => any, f3: (a: any) => any, f2: (a: any) => any, f1: () => any, ...funcs: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
        flowRight(funcs: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flowRight
         */
        // 0-argument first function
        flowRight<R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f1: () => R1): LoDashImplicitWrapper<() => R2>;
        flowRight<R3, R2, R1>(this: LoDashImplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: () => R1): LoDashImplicitWrapper<() => R3>;
        flowRight<R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashImplicitWrapper<() => R4>;
        flowRight<R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashImplicitWrapper<() => R5>;
        flowRight<R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashImplicitWrapper<() => R6>;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashImplicitWrapper<() => R7>;
        // 1-argument first function
        flowRight<A1, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f1: (a1: A1) => R1): LoDashImplicitWrapper<(a1: A1) => R2>;
        flowRight<A1, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashImplicitWrapper<(a1: A1) => R3>;
        flowRight<A1, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashImplicitWrapper<(a1: A1) => R4>;
        flowRight<A1, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashImplicitWrapper<(a1: A1) => R5>;
        flowRight<A1, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashImplicitWrapper<(a1: A1) => R6>;
        flowRight<A1, R7, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashImplicitWrapper<(a1: A1) => R7>;
        // 2-argument first function
        flowRight<A1, A2, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2) => R2>;
        flowRight<A1, A2, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2) => R3>;
        flowRight<A1, A2, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2) => R4>;
        flowRight<A1, A2, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2) => R5>;
        flowRight<A1, A2, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2) => R6>;
        flowRight<A1, A2, R7, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2) => R7>;
        // 3-argument first function
        flowRight<A1, A2, A3, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R2>;
        flowRight<A1, A2, A3, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R3>;
        flowRight<A1, A2, A3, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R4>;
        flowRight<A1, A2, A3, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R5>;
        flowRight<A1, A2, A3, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R6>;
        flowRight<A1, A2, A3, R7, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R7>;
        // 4-argument first function
        flowRight<A1, A2, A3, A4, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        flowRight<A1, A2, A3, A4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        flowRight<A1, A2, A3, A4, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        flowRight<A1, A2, A3, A4, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        flowRight<A1, A2, A3, A4, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        flowRight<A1, A2, A3, A4, R7, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        // any-argument first function
        flowRight<R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f1: (...args: any[]) => R1): LoDashImplicitWrapper<(...args: any[]) => R2>;
        flowRight<R3, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashImplicitWrapper<(...args: any[]) => R3>;
        flowRight<R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashImplicitWrapper<(...args: any[]) => R4>;
        flowRight<R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashImplicitWrapper<(...args: any[]) => R5>;
        flowRight<R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashImplicitWrapper<(...args: any[]) => R6>;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashImplicitWrapper<(...args: any[]) => R7>;
        flowRight(this: LoDashImplicitWrapper<(a: any) => any>, f6: (a: any) => any, f5: (a: any) => any, f4: (a: any) => any, f3: (a: any) => any, f2: (a: any) => any, f1: () => any, ...funcs: Array<Many<(...args: any[]) => any>>): LoDashImplicitWrapper<(...args: any[]) => any>;
        flowRight(this: LoDashImplicitWrapper<(a: any) => any>, funcs: Array<Many<(...args: any[]) => any>>): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flowRight
         */
        // 0-argument first function
        flowRight<R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f1: () => R1): LoDashExplicitWrapper<() => R2>;
        flowRight<R3, R2, R1>(this: LoDashExplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitWrapper<() => R3>;
        flowRight<R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitWrapper<() => R4>;
        flowRight<R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitWrapper<() => R5>;
        flowRight<R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitWrapper<() => R6>;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitWrapper<() => R7>;
        // 1-argument first function
        flowRight<A1, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f1: (a1: A1) => R1): LoDashExplicitWrapper<(a1: A1) => R2>;
        flowRight<A1, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitWrapper<(a1: A1) => R3>;
        flowRight<A1, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitWrapper<(a1: A1) => R4>;
        flowRight<A1, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitWrapper<(a1: A1) => R5>;
        flowRight<A1, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitWrapper<(a1: A1) => R6>;
        flowRight<A1, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitWrapper<(a1: A1) => R7>;
        // 2-argument first function
        flowRight<A1, A2, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2) => R2>;
        flowRight<A1, A2, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2) => R3>;
        flowRight<A1, A2, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2) => R4>;
        flowRight<A1, A2, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2) => R5>;
        flowRight<A1, A2, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2) => R6>;
        flowRight<A1, A2, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2) => R7>;
        // 3-argument first function
        flowRight<A1, A2, A3, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R2>;
        flowRight<A1, A2, A3, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R3>;
        flowRight<A1, A2, A3, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R4>;
        flowRight<A1, A2, A3, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R5>;
        flowRight<A1, A2, A3, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R6>;
        flowRight<A1, A2, A3, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R7>;
        // 4-argument first function
        flowRight<A1, A2, A3, A4, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        flowRight<A1, A2, A3, A4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        flowRight<A1, A2, A3, A4, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        flowRight<A1, A2, A3, A4, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        flowRight<A1, A2, A3, A4, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        flowRight<A1, A2, A3, A4, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        // any-argument first function
        flowRight<R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f1: (...args: any[]) => R1): LoDashExplicitWrapper<(...args: any[]) => R2>;
        flowRight<R3, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitWrapper<(...args: any[]) => R3>;
        flowRight<R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitWrapper<(...args: any[]) => R4>;
        flowRight<R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitWrapper<(...args: any[]) => R5>;
        flowRight<R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitWrapper<(...args: any[]) => R6>;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitWrapper<(...args: any[]) => R7>;
        flowRight(this: LoDashExplicitWrapper<(a: any) => any>, f6: (a: any) => any, f5: (a: any) => any, f4: (a: any) => any, f3: (a: any) => any, f2: (a: any) => any, f1: () => any, ...funcs: Array<Many<(...args: any[]) => any>>): LoDashExplicitWrapper<(...args: any[]) => any>;
        flowRight(this: LoDashExplicitWrapper<(a: any) => any>, funcs: Array<Many<(...args: any[]) => any>>): LoDashExplicitWrapper<(...args: any[]) => any>;
    }
}