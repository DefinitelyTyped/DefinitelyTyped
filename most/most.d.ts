// Type definitions for most 1.0.0
// Project: https://github.com/cujojs/most
// Definitions by: Brian Cavalier <https://github.com/briancavalier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module most {

type SeedValue<S, V> = { seed: S, value: V };
type TimeValue<V>    = { time: number, value: V };

interface Generator<A, B, C> {}
interface Iterable<A> {}

type CreateGenerator<A> = (...args: Array<any>) => Generator<A|Promise<A>, any, any>;

export interface Sink<A> {
  event(time: number, value: A): void;
  end(time: number, value?: A): void;
  error(time: number, err: Error): void;
}

export interface Task {
  run(time: number): void;
  error(time: number, e: Error): void;
  dispose(): void;
}

export interface ScheduledTask {
  task: Task;
  run(): void;
  error(err: Error): void;
  dispose(): void;
}

export interface Scheduler {
  now(): number;
  asap(task: Task): ScheduledTask;
  delay(task: Task): ScheduledTask;
  periodic(task: Task): ScheduledTask;
  schedule(delay: number, period: number, task: Task): ScheduledTask;
  cancel(task: Task): void;
  cancelAll(predicate: (task: Task) => boolean): void;
}

export interface Disposable<A> {
  dispose(): void | Promise<A>;
}

export interface Source<A> {
  run (sink: Sink<A>, scheduler: Scheduler): Disposable<A>;
}

export interface Subscriber<A> {
  next(value: A): void;
  error(err: Error): void;
  complete(value?: A): void;
}

export interface Subscription<A> {
  unsubscribe(): void;
}

export interface Stream<A> {
  reduce<B>(f: (b: B, a: A) => B, b: B): Promise<B>;
  observe(f: (a: A) => any): Promise<any>;
  forEach(f: (a: A) => any): Promise<any>;
  drain(): Promise<any>;
  subscribe(subscriber: Subscriber<A>): Subscription<A>;

  constant<B>(b: B): Stream<B>;
  map<B>(f: (a: A) => B): Stream<B>;
  tap(f: (a: A) => any): Stream<A>;
  chain<B>(f: (a: A) => Stream<B>): Stream<B>;
  flatMap<B>(f: (a: A) => Stream<B>): Stream<B>;

  ap<B, C>(fs: Stream<(a: A) => B>): Stream<C>;

  // Note: Without higher-kinded types, the types for these
  // cannot be written in a completely safe manner; See https://github.com/Microsoft/TypeScript/issues/1290
  // For better type safety, consider using most.join/switch/switchLatest with thru
  join(): A;
  switch(): A;
  switchLatest(): A;

  continueWith(f: (a: any) => Stream<A>): Stream<A>;
  concatMap<B>(f: (a: A) => Stream<B>): Stream<B>;
  mergeConcurrently<B>(concurrency: number): Stream<B>;
  merge(...ss: Array<Stream<A>>): Stream<A>;
  mergeArray(streams: Array<Stream<A>>): Stream<A>;

  combine<B, R>(
    fn: (a: A, b: B) => R,
    b: Stream<B>
  ): Stream<R>;
  combine<B, C, R>(
    fn: (a: A, b: B, c: C) => R,
    b: Stream<B>,
    c: Stream<C>
  ): Stream<R>;
  combine<B, C, D, R>(
    fn: (a: A, b: B, c: C, d: D) => R,
    b: Stream<B>,
    c: Stream<C>,
    d: Stream<D>
  ): Stream<R>;
  combine<B, C, D, E, R>(
    fn: (a: A, b: B, c: C, d: D, e: E) => R,
    b: Stream<B>,
    c: Stream<C>,
    d: Stream<D>,
    e: Stream<E>
  ): Stream<R>;

  combineArray<B, R>(
    fn: (a: A, b: B) => R,
    streams: [Stream<B>]
  ): Stream<R>;
  combineArray<B, C, R>(
    fn: (a: A, b: B, c: C) => R,
    streams: [Stream<B>, Stream<C>]
  ): Stream<R>;
  combineArray<B, C, D, R>(
    fn: (a: A, b: B, c: C, d: D) => R,
    streams: [Stream<B>, Stream<C>, Stream<D>]
  ): Stream<R>;
  combineArray<B, C, D, E, R>(
    fn: (a: A, b: B, c: C, d: D, e: E) => R,
    streams: [Stream<B>, Stream<C>, Stream<D>, Stream<E>]
  ): Stream<R>;

  scan<B>(f: (b: B, a: A) => B, b: B): Stream<B>;
  loop<S, B>(f: (seed: S, a: A) => SeedValue<S, B>, seed: S): Stream<B>;

  concat(s2: Stream<A>): Stream<A>;
  startWith(a: A): Stream<A>;

  filter(p: (a: A) => boolean): Stream<A>;
  skipRepeats(): Stream<A>;
  skipRepeatsWith(eq: (a1: A, a2: A) => boolean): Stream<A>;

  take(n: number): Stream<A>;
  skip(n: number): Stream<A>;
  takeWhile(p: (a: A) => boolean): Stream<A>;
  skipWhile(p: (a: A) => boolean): Stream<A>;
  slice(start: number, end: number): Stream<A>;

  until(signal: Stream<any>): Stream<A>;
  takeUntil(signal: Stream<any>): Stream<A>;
  since(signal: Stream<any>): Stream<A>;
  skipUntil(signal: Stream<any>): Stream<A>;
  during(timeWindow: Stream<Stream<any>>): Stream<A>;
  throttle(period: number): Stream<A>;
  debounce(period: number): Stream<A>;

  timestamp(): Stream<TimeValue<A>>;
  delay(dt: number): Stream<A>;

  // Note: Without higher-kinded types, this type cannot be written properly
  await<B>(): Stream<B>;

  sample<B, C, R>(
    fn: (b: B, c: C) => R,
    b: Stream<B>,
    c: Stream<C>
  ): Stream<R>;
  sample<B, C, D, R>(
    fn: (b: B, c: C, d: D) => R,
    b: Stream<B>,
    c: Stream<C>,
    d: Stream<D>
  ): Stream<R>;
  sample<B, C, D, E, R>(
    fn: (b: B, c: C, d: D, e: E) => R,
    b: Stream<B>,
    c: Stream<C>,
    d: Stream<D>,
    e: Stream<E>
  ): Stream<R>;

  sampleWith<A>(sampler: Stream<any>): Stream<A>;

  zip<B, R>(
    fn: (a: A, b: B) => R,
    b: Stream<B>
  ): Stream<R>;
  zip<B, C, R>(
    fn: (a: A, b: B, c: C) => R,
    b: Stream<B>,
    c: Stream<C>
  ): Stream<R>;
  zip<B, C, D, R>(
    fn: (a: A, b: B, c: C, d: D) => R,
    b: Stream<B>,
    c: Stream<C>,
    d: Stream<D>
  ): Stream<R>;
  zip<B, C, D, E, R>(
    fn: (a: A, b: B, c: C, d: D, e: E) => R,
    b: Stream<B>,
    c: Stream<C>,
    d: Stream<D>,
    e: Stream<E>
  ): Stream<R>;

  recoverWith<B>(p: (a: B) => A): Stream<A>;
  multicast(): Stream<A>;

  thru<B>(transform: (stream: Stream<A>) => Stream<B>): Stream<B>;
}

interface DisposeFn {
  (): void|Promise<any>;
}

export class Stream<A> {
  source: Source<A>;
  constructor(source: Source<A>);
}

export function just<A>(a: A): Stream<A>;
export function of<A>(a: A): Stream<A>;
export function empty(): Stream<any>;
export function never(): Stream<any>;
export function from<A>(as: Iterable<A>): Stream<A>;
export function periodic<A>(period: number, a?: A): Stream<A>;
export function fromEvent(event: string, target: any, useCapture?: boolean): Stream<Event>;

export function unfold<A, B, S>(f: (seed: S) => SeedValue<S, B|Promise<B>>, seed: S): Stream<B>;
export function iterate<A>(f: (a: A) => A|Promise<A>, a: A): Stream<A>;
export function generate<A>(g: CreateGenerator<A>, ...args: Array<any>): Stream<A>;

export function reduce<A, B>(f: (b: B, a: A) => B, b: B, s: Stream<A>): Promise<B>;
export function observe<A>(f: (a: A) => any, s: Stream<A>): Promise<any>;
export function forEach<A>(f: (a: A) => any, s: Stream<A>): Promise<any>;
export function drain<A>(s: Stream<A>): Promise<any>;

export function subscribe<A>(subscriber: Subscriber<A>, s: Stream<A>): Subscription<A>;

export function constant<A, B>(b: B, s: Stream<A>): Stream<B>;
export function map<A, B>(f: (a: A) => B, s: Stream<A>): Stream<B>;
export function tap<A>(f: (a: A) => any, s: Stream<A>): Stream<A>;
export function ap<A, B>(fs: Stream<(a: A) => B>, as: Stream<A> ): Stream<B>;
export function chain<A, B>(f: (a: A) => Stream<B>, s: Stream<A>): Stream<B>;
export function flatMap<A, B>(f: (a: A) => Stream<B>, s: Stream<A>): Stream<B>;
export function join<A>(s: Stream<Stream<A>>): Stream<A>;
export function switchLatest<A>(s: Stream<Stream<A>>): Stream<A>;

export function continueWith<A>(f: (a: any) => Stream<A>, s: Stream<A>): Stream<A>;
export function concatMap<A, B>(f: (a: A) => Stream<B>, s: Stream<A>): Stream<B>;
export function mergeConcurrently<A>(concurrency: number, s: Stream<Stream<A>>): Stream<A>;

export function merge<A>(...ss: Array<Stream<A>>): Stream<A>;
export function mergeArray<A>(streams: Array<Stream<A>>): Stream<A>;

export function combine<A, B, R>(
  fn: (a: A, b: B) => R,
  a: Stream<A>,
  b: Stream<B>
): Stream<R>;
export function combine<A, B, C, R>(
  fn: (a: A, b: B, c: C) => R,
  a: Stream<A>,
  b: Stream<B>,
  c: Stream<C>
): Stream<R>;
export function combine<A, B, C, D, R>(
  fn: (a: A, b: B, c: C, d: D) => R,
  a: Stream<A>,
  b: Stream<B>,
  c: Stream<C>,
  d: Stream<D>
): Stream<R>;
export function combine<A, B, C, D, E, R>(
  fn: (a: A, b: B, c: C, d: D, e: E) => R,
  a: Stream<A>,
  b: Stream<B>,
  c: Stream<C>,
  d: Stream<D>,
  e: Stream<E>
): Stream<R>;

export function combineArray<A, B, R>(
  fn: (a: A, b: B) => R,
  streams: [Stream<A>, Stream<B>]
): Stream<R>;
export function combineArray<A, B, C, R>(
  fn: (a: A, b: B, c: C) => R,
  streams: [Stream<A>, Stream<B>, Stream<C>]
): Stream<R>;
export function combineArray<A, B, C, D, R>(
  fn: (a: A, b: B, c: C, d: D) => R,
  streams: [Stream<A>, Stream<B>, Stream<C>, Stream<D>]
): Stream<R>;
export function combineArray<A, B, C, D, E, R>(
  fn: (a: A, b: B, c: C, d: D, e: E) => R,
  streams: [Stream<A>, Stream<B>, Stream<C>, Stream<D>, Stream<E>]
): Stream<R>;

export function scan<A, B>(f: (b: B, a: A) => B, b: B, s: Stream<A>): Stream<B>;
export function loop<A, B, S>(f: (seed: S, a: A) => SeedValue<S, B>, seed: S, s: Stream<A>): Stream<B>;

export function concat<A>(s1: Stream<A>, s2: Stream<A>): Stream<A>;
export function startWith<A>(a: A, s: Stream<A>): Stream<A>;

export function filter<A>(p: (a: A) => boolean, s: Stream<A>): Stream<A>;
export function skipRepeats<A>(s: Stream<A>): Stream<A>;
export function skipRepeatsWith<A>(eq: (a1: A, a2: A) => boolean, s: Stream<A>): Stream<A>;

export function take<A>(n: number, s: Stream<A>): Stream<A>;
export function skip<A>(n: number, s: Stream<A>): Stream<A>;
export function takeWhile<A>(p: (a:  A) => boolean, s: Stream<A>): Stream<A>;
export function skipWhile<A>(p: (a: A) => boolean, s: Stream<A>): Stream<A>;
export function slice<A>(start: number, end: number, s: Stream<A>): Stream<A>;

export function until<A>(signal: Stream<any>, s: Stream<A>): Stream<A>;
export function takeUntil<A>(signal: Stream<any>, s: Stream<A>): Stream<A>;
export function since<A>(signal: Stream<any>, s: Stream<A>): Stream<A>;
export function skipUntil<A>(signal: Stream<any>, s: Stream<A>): Stream<A>;
export function during<A>(timeWindow: Stream<Stream<any>>, s: Stream<A>): Stream<A>;
export function throttle<A>(period: number, s: Stream<A>): Stream<A>;
export function debounce<A>(period: number, s: Stream<A>): Stream<A>;

export function timestamp<A>(s: Stream<A>): Stream<TimeValue<A>>;
export function delay<A>(dt: number, s: Stream<A>): Stream<A>;

export function fromPromise<A>(p: Promise<A>): Stream<A>;
export function await<A>(s: Stream<Promise<A>>): Stream<A>;

export function sample<A, B, R>(
  fn: (a: A, b: B) => R,
  sampler: Stream<any>,
  a: Stream<A>,
  b: Stream<B>
): Stream<R>;
export function sample<A, B, C, R>(
  fn: (a: A, b: B, c: C) => R,
  sampler: Stream<any>,
  a: Stream<A>,
  b: Stream<B>,
  c: Stream<C>
): Stream<R>;
export function sample<A, B, C, D, R>(
  fn: (a: A, b: B, c: C, d: D) => R,
  sampler: Stream<any>,
  a: Stream<A>,
  b: Stream<B>,
  c: Stream<C>,
  d: Stream<D>
): Stream<R>;
export function sample<A, B, C, D, E, R>(
  fn: (a: A, b: B, c: C, d: D, e: E) => R,
  sampler: Stream<any>,
  a: Stream<A>,
  b: Stream<B>,
  c: Stream<C>,
  d: Stream<D>,
  e: Stream<E>
): Stream<R>;

export function sampleWith<A>(sampler: Stream<any>, s: Stream<A>): Stream<A>;

export function zip<A, B, R>(
  fn: (a: A, b: B) => R,
  a: Stream<A>,
  b: Stream<B>
): Stream<R>;
export function zip<A, B, C, R>(
  fn: (a: A, b: B, c: C) => R,
  a: Stream<A>,
  b: Stream<B>,
  c: Stream<C>
): Stream<R>;
export function zip<A, B, C, D, R>(
  fn: (a: A, b: B, c: C, d: D) => R,
  a: Stream<A>,
  b: Stream<B>,
  c: Stream<C>,
  d: Stream<D>
): Stream<R>;
export function zip<A, B, C, D, E, R>(
  fn: (a: A, b: B, c: C, d: D, e: E) => R,
  a: Stream<A>,
  b: Stream<B>,
  c: Stream<C>,
  d: Stream<D>,
  e: Stream<E>
): Stream<R>;

export function recoverWith<A, B>(p: (a: B) => A, s: Stream<A>): Stream<A>;
export function throwError(e: Error): Stream<any>;

export function multicast<A>(s: Stream<A>): Stream<A>;

}

