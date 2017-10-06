interface PipeFn {
    <T1>(
      fn0: () => T1): () => T1;

    <V0, T1>(
      fn0: (x0: V0) => T1): (x0: V0) => T1;

    <V0, V1, T1>(
      fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;

    <V0, V1, V2, T1>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

    <T1, T2>(
      fn0: () => T1,
      fn1: (x: T1) => T2): () => T2;

    <V0, T1, T2>(
      fn0: (x0: V0) => T1,
      fn1: (x: T1) => T2): (x0: V0) => T2;

    <V0, V1, T1, T2>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2): (x0: V0, x1: V1) => T2;

    <V0, V1, V2, T1, T2>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2) => T2;

    <T1, T2, T3>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3): () => T3;

    <V0, T1, T2, T3>(
      fn0: (x0: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3): (x0: V0) => T3;

    <V0, V1, T1, T2, T3>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3): (x0: V0, x1: V1) => T3;

    <V0, V1, V2, T1, T2, T3>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2) => T3;

    <T1, T2, T3, T4>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4): () => T4;

    <V0, T1, T2, T3, T4>(
      fn0: (x0: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4): (x0: V0) => T4;

    <V0, V1, T1, T2, T3, T4>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4): (x0: V0, x1: V1) => T4;

    <V0, V1, V2, T1, T2, T3, T4>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2) => T4;

    <T1, T2, T3, T4, T5>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5): () => T5;

    <V0, T1, T2, T3, T4, T5>(
      fn0: (x0: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5): (x0: V0) => T5;

    <V0, V1, T1, T2, T3, T4, T5>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5): (x0: V0, x1: V1) => T5;

    <V0, V1, V2, T1, T2, T3, T4, T5>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2) => T5;

    <T1, T2, T3, T4, T5, T6>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6): () => T6;

    <V0, T1, T2, T3, T4, T5, T6>(
      fn0: (x0: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6): (x0: V0) => T6;

    <V0, V1, T1, T2, T3, T4, T5, T6>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6): (x0: V0, x1: V1) => T6;

    <V0, V1, V2, T1, T2, T3, T4, T5, T6>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2) => T6;

    <T1, T2, T3, T4, T5, T6, T7>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7): () => T7;

    <V0, T1, T2, T3, T4, T5, T6, T7>(
      fn0: (x0: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7): (x0: V0) => T7;

    <V0, V1, T1, T2, T3, T4, T5, T6, T7>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7): (x0: V0, x1: V1) => T7;

    <V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2) => T7;

    <T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8): () => T8;

    <V0, T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: (x0: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8): (x0: V0) => T8;

    <V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8): (x0: V0, x1: V1) => T8;

    <V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2) => T8;

    <T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9): () => T9;

    <V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: (x0: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9): (x0: V0) => T9;

    <V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9): (x0: V0, x1: V1) => T9;

    <V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2) => T9;

    <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9,
      fn9: (x: T9) => T10): () => T10;

    <V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      fn0: (x0: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9,
      fn9: (x: T9) => T10): (x0: V0) => T10;

    <V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9,
      fn9: (x: T9) => T10): (x0: V0, x1: V1) => T10;

    <V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9,
      fn9: (x: T9) => T10): (x0: V0, x1: V1, x2: V2) => T10;
}
