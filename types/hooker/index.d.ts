/* eslint-disable @typescript-eslint/no-invalid-void-type */
declare type HookerPreHookFunction<F extends (...args: any[]) => any = (...args: any[]) => any> = (
    ...args: Parameters<F>
) => HookerOverride<ReturnType<F>> | HookerPreempt<ReturnType<F>> | HookerFilter<Parameters<F>> | Promise<void> | void;
declare type HookerPostHookFunction<F extends (...args: any[]) => any = (...args: any[]) => any> = (
    result: ReturnType<F>,
    ...args: Parameters<F>
) => HookerOverride<ReturnType<F>> | Promise<void> | void;
/* eslint-enable @typescript-eslint/no-invalid-void-type */

declare module "hooker" {
    function hook<T, K extends keyof T>(
        object: T,
        props: K,
        options: IHookerOptions<T[K] extends (...args: any[]) => any ? T[K] : never>,
    ): void;
    function hook<T, K extends keyof T>(
        object: T,
        props: K,
        prehookFunction: HookerPreHookFunction<T[K] extends (...args: any[]) => any ? T[K] : never>,
    ): void;
    function hook(object: any, props: string[], options: IHookerOptions): void;
    function hook(object: any, props: string[], prehookFunction: HookerPreHookFunction): void;
    function unhook(object: any, props?: string | string[]): string[];
    function orig<T, K extends keyof T>(object: T, prop: K): T[K] extends (...args: any[]) => any ? T[K] : never;
    function orig(object: any, prop: string): Function;
    function override<T>(value: T): HookerOverride<T>;
    function preempt<T>(value: T): HookerPreempt<T>;
    function filter<T>(context: any, args: T): HookerFilter<T>;
}

declare class HookerOverride<T> {
    value: T;
}

declare class HookerPreempt<T> {
    value: T;
}

declare class HookerFilter<T> {
    context: any;
    args: T;
}

interface IHookerOptions<F extends (...args: any[]) => any = (...args: any[]) => any> {
    pre?: HookerPreHookFunction<F>;
    post?: HookerPostHookFunction<F>;
    once?: boolean;
    passName?: boolean;
}
