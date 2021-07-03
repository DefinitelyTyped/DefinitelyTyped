declare module "meteor/promise" {
  export class Promise<T> extends globalThis.Promise<T> {
    static async<Fn extends (this: This, ...args: Args) => any, This, Args extends any[]>(fn: Fn, allowReuseOfCurrentFiber?: boolean): (this: This, ...args: Args) => Promise<ReturnType<Fn>>;
    static asyncApply<Fn extends (this: This, ...args: Args) => any, This, Args extends any[]>(fn: Fn, context: This, args: Args, allowReuseOfCurrentFiber?: boolean): Promise<ReturnType<Fn>>;
    static await<T>(value: PromiseLike<T>): T;
    static awaitAll<T>(values: Iterable<T | PromiseLike<T>>): T[];
    await(): T;
  }
}
