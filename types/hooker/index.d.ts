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
    /**
     * Monkey-patch (hook) one or more methods of an object. Returns an array of hooked method names.
     *
     * @param object
     * @param props Can be a method name, array of method names or null. If null (or omitted), all enumerable methods of `object` will be hooked.
     * @param options
     */
    function hook<T, K extends keyof T>(
        object: T,
        props: K,
        options: IHookerOptions<T[K] extends (...args: any[]) => any ? T[K] : never>,
    ): string[];
    /**
     * Monkey-patch (hook) one or more methods of an object. Returns an array of hooked method names.
     *
     * @param object
     * @param props Can be a method name, array of method names or null. If null (or omitted), all enumerable methods of `object` will be hooked.
     * @param prehookFunction A pre-hook function to be executed before the original function. Arguments passed into the method will be passed into the pre-hook function as well.
     */
    function hook<T, K extends keyof T>(
        object: T,
        props: K,
        prehookFunction: HookerPreHookFunction<T[K] extends (...args: any[]) => any ? T[K] : never>,
    ): string[];
    /**
     * Monkey-patch (hook) one or more methods of an object. Returns an array of hooked method names.
     *
     * @param object
     * @param props Can be a method name, array of method names or null. If null (or omitted), all enumerable methods of `object` will be hooked.
     * @param options
     */
    function hook(object: any, props: string[], options: IHookerOptions): string[];
    /**
     * Monkey-patch (hook) one or more methods of an object. Returns an array of hooked method names.
     *
     * @param object
     * @param props Can be a method name, array of method names or null. If null (or omitted), all enumerable methods of `object` will be hooked.
     * @param prehookFunction A pre-hook function to be executed before the original function. Arguments passed into the method will be passed into the pre-hook function as well.
     */
    function hook(object: any, props: string[], prehookFunction: HookerPreHookFunction): string[];
    /**
     * Un-monkey-patch (unhook) one or more methods of an object.
     *
     * @param object
     * @param props Can be a method name, array of method names or null. If null (or omitted), all methods of object will be unhooked.
     */
    function unhook(object: any, props?: string | string[]): string[];
    /**
     * Get a reference to the original method from a hooked function.
     *
     * @param object
     * @param prop
     */
    function orig<T, K extends keyof T>(object: T, prop: K): T[K] extends (...args: any[]) => any ? T[K] : never;
    function orig(object: any, prop: string): Function;
    /**
     * When a pre- or post-hook returns the result of this function, the value passed will be used in place of the original function's return value. Any post-hook override value will take precedence over a pre-hook override value.
     *
     * @param value
     */
    function override<T>(value: T): HookerOverride<T>;
    /**
     * When a pre-hook returns the result of this function, the value passed will be used in place of the original function's return value, and the original function will **NOT** be executed.
     *
     * @param value
     */
    function preempt<T>(value: T): HookerPreempt<T>;
    /**
     * When a pre-hook returns the result of this function, the context and arguments passed will be applied into the original function.
     *
     * @param context
     * @param args
     */
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
    /**
     * A pre-hook function to be executed before the original function. Arguments passed into the method will be passed into the pre-hook function as well.
     */
    pre?: HookerPreHookFunction<F>;
    /**
     * A post-hook function to be executed after the original function. The original function's result is passed into the post-hook function as its first argument, followed by the method arguments.
     */
    post?: HookerPostHookFunction<F>;
    /**
     * If true, auto-unhook the function after the first execution.
     */
    once?: boolean;
    /**
     * If true, pass the name of the method into the pre-hook function as its first arg (preceding all other arguments), and into the post-hook function as the second arg (after result but preceding all other arguments).
     */
    passName?: boolean;
}
