/**
 * compose2 :: (c -> d -> e) -> (a -> c) -> (b -> d) -> a -> b -> e
 */
declare function compose2<A, B, C, D, E>(f: (c: C, d: D) => E, d: (a: A) => C, h: (b: B) => D): (x: A, y: B) => E;
declare function compose2<A, B, C, D, E>(f: (c: C, d: D) => E, d: (a: A) => C): (h: (b: B) => D) => (x: A, y: B) => E;
declare function compose2<A, B, C, D, E>(f: (c: C, d: D) => E): (d: (a: A) => C) => (h: (b: B) => D) => (x: A, y: B) => E;
declare function compose2<A, B, C, D, E>(f: (c: C, d: D) => E, d: (a: A) => C, h: (b: B) => D): (x: A) => (y: B) => E;
declare function compose2<A, B, C, D, E>(f: (c: C, d: D) => E, d: (a: A) => C): (h: (b: B) => D) => (x: A) => (y: B) => E;
declare function compose2<A, B, C, D, E>(f: (c: C, d: D) => E): (d: (a: A) => C) => (h: (b: B) => D) => (x: A) => (y: B) => E;

export default compose2;
