import inflight = require("inflight");

// $ExpectType ((a: string) => Promise<number>) | null
const fn = inflight("key", async (a: string) => 1);

// $ExpectType Promise<number>
fn!("a");

// $ExpectType (() => void) | null
const fn2 = inflight("key", () => {});

// $ExpectType void
fn2!();

// $ExpectType ((a: string, b: number, c: Record<string, number>) => number) | null
const fn3 = inflight("key", (a: string, b: number, c: Record<string, number>) => 1);

// $ExpectType number
fn3!("a", 1, {});
