interface PipePFn {
    <T1>(
      fn0: () => Promise<T1>): () => Promise<T1>;

    <V0, T1>(
      fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T1>;

    <V0, V1, T1>(
      fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T1>;

    <V0, V1, V2, T1>(
      fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T1>;

    <T1, T2>(
      fn0: () => Promise<T1>,
      fn1: (x: T1) => Promise<T2>): () => Promise<T2>;

    <V0, T1, T2>(
      fn0: (x0: V0) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>): (x0: V0) => Promise<T2>;

    <V0, V1, T1, T2>(
      fn0: (x0: V0, x1: V1) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>): (x0: V0, x1: V1) => Promise<T2>;

    <V0, V1, V2, T1, T2>(
      fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>): (x0: V0, x1: V1, x2: V2) => Promise<T2>;

    <T1, T2, T3>(
      fn0: () => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>): () => Promise<T3>;

    <V0, T1, T2, T3>(
      fn0: (x0: V0) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>): (x0: V0) => Promise<T3>;

    <V0, V1, T1, T2, T3>(
      fn0: (x0: V0, x1: V1) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>): (x0: V0, x1: V1) => Promise<T3>;

    <V0, V1, V2, T1, T2, T3>(
      fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>): (x0: V0, x1: V1, x2: V2) => Promise<T3>;

    <T1, T2, T3, T4>(
      fn0: () => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>): () => Promise<T4>;

    <V0, T1, T2, T3, T4>(
      fn0: (x0: V0) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>): (x0: V0) => Promise<T4>;

    <V0, V1, T1, T2, T3, T4>(
      fn0: (x0: V0, x1: V1) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>): (x0: V0, x1: V1) => Promise<T4>;

    <V0, V1, V2, T1, T2, T3, T4>(
      fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>): (x0: V0, x1: V1, x2: V2) => Promise<T4>;

    <T1, T2, T3, T4, T5>(
      fn0: () => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>): () => Promise<T5>;

    <V0, T1, T2, T3, T4, T5>(
      fn0: (x0: V0) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>): (x0: V0) => Promise<T5>;

    <V0, V1, T1, T2, T3, T4, T5>(
      fn0: (x0: V0, x1: V1) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>): (x0: V0, x1: V1) => Promise<T5>;

    <V0, V1, V2, T1, T2, T3, T4, T5>(
      fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>): (x0: V0, x1: V1, x2: V2) => Promise<T5>;

    <T1, T2, T3, T4, T5, T6>(
      fn0: () => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>): () => Promise<T6>;

    <V0, T1, T2, T3, T4, T5, T6>(
      fn0: (x0: V0) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>): (x0: V0) => Promise<T6>;

    <V0, V1, T1, T2, T3, T4, T5, T6>(
      fn0: (x0: V0, x1: V1) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>): (x0: V0, x1: V1) => Promise<T6>;

    <V0, V1, V2, T1, T2, T3, T4, T5, T6>(
      fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>): (x0: V0, x1: V1, x2: V2) => Promise<T6>;

    <T1, T2, T3, T4, T5, T6, T7>(
      fn0: () => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>): () => Promise<T7>;

    <V0, T1, T2, T3, T4, T5, T6, T7>(
      fn0: (x0: V0) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>): (x0: V0) => Promise<T7>;

    <V0, V1, T1, T2, T3, T4, T5, T6, T7>(
      fn0: (x0: V0, x1: V1) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>): (x0: V0, x1: V1) => Promise<T7>;

    <V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(
      fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>): (x0: V0, x1: V1, x2: V2) => Promise<T7>;

    <T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: () => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>,
      fn7: (x: T7) => Promise<T8>): () => Promise<T8>;

    <V0, T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: (x0: V0) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>,
      fn7: (x: T7) => Promise<T8>): (x0: V0) => Promise<T8>;

    <V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: (x0: V0, x1: V1) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>,
      fn7: (x: T7) => Promise<T8>): (x0: V0, x1: V1) => Promise<T8>;

    <V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>,
      fn7: (x: T7) => Promise<T8>): (x0: V0, x1: V1, x2: V2) => Promise<T8>;

    <T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: () => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>,
      fn7: (x: T7) => Promise<T8>,
      fn8: (x: T8) => Promise<T9>): () => Promise<T9>;

    <V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: (x0: V0) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>,
      fn7: (x: T7) => Promise<T8>,
      fn8: (x: T8) => Promise<T9>): (x0: V0) => Promise<T9>;

    <V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: (x0: V0, x1: V1) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>,
      fn7: (x: T7) => Promise<T8>,
      fn8: (x: T8) => Promise<T9>): (x0: V0, x1: V1) => Promise<T9>;

    <V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>,
      fn7: (x: T7) => Promise<T8>,
      fn8: (x: T8) => Promise<T9>): (x0: V0, x1: V1, x2: V2) => Promise<T9>;

    <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      fn0: () => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>,
      fn7: (x: T7) => Promise<T8>,
      fn8: (x: T8) => Promise<T9>,
      fn9: (x: T9) => Promise<T10>): () => Promise<T10>;

    <V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      fn0: (x0: V0) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>,
      fn7: (x: T7) => Promise<T8>,
      fn8: (x: T8) => Promise<T9>,
      fn9: (x: T9) => Promise<T10>): (x0: V0) => Promise<T10>;

    <V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      fn0: (x0: V0, x1: V1) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>,
      fn7: (x: T7) => Promise<T8>,
      fn8: (x: T8) => Promise<T9>,
      fn9: (x: T9) => Promise<T10>): (x0: V0, x1: V1) => Promise<T10>;

    <V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>,
      fn1: (x: T1) => Promise<T2>,
      fn2: (x: T2) => Promise<T3>,
      fn3: (x: T3) => Promise<T4>,
      fn4: (x: T4) => Promise<T5>,
      fn5: (x: T5) => Promise<T6>,
      fn6: (x: T6) => Promise<T7>,
      fn7: (x: T7) => Promise<T8>,
      fn8: (x: T8) => Promise<T9>,
      fn9: (x: T9) => Promise<T10>): (x0: V0, x1: V1, x2: V2) => Promise<T10>;
}
