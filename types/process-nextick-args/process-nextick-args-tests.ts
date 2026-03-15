import { nextTick } from "process-nextick-args";

// $ExpectType void
nextTick(() => {});

// $ExpectType void
nextTick((a: string) => {}, "hello");

// $ExpectType void
nextTick((a: string, b: number) => {}, "hello", 42);

// $ExpectType void
nextTick((a: string, b: number, c: boolean) => {}, "hello", 42, true);

// @ts-expect-error - callback must be a function
nextTick("not a function");
