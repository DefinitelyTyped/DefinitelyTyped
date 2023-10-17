declare type HookerPostHookFunction = (result: any, ...args: any[]) => IHookerPostHookResult | void;
declare type HookerPreHookFunction = (...args: any[]) => IHookerPreHookResult | void;

declare module "hooker" {
    function hook(object: any, props: string | string[], options: IHookerOptions): void;
    function hook(object: any, props: string | string[], prehookFunction: HookerPreHookFunction): void;
    function unhook(object: any, props?: string | string[]): string[];
    function orig(object: any, props: string | string[]): Function;
    function override(value: any): HookerOverride;
    function preempt(value: any): HookerPreempt;
    function filter(context: any, args: any[]): HookerFilter;
}

declare class HookerOverride implements IHookerPostHookResult, IHookerPreHookResult {
    value: any;
}

declare class HookerPreempt implements IHookerPreHookResult {
    value: any;
}

declare class HookerFilter implements IHookerPreHookResult {
    context: any;
    args: any[];
}

interface IHookerPostHookResult {}

interface IHookerPreHookResult {}

interface IHookerOptions {
    pre?: HookerPreHookFunction | undefined;
    post?: HookerPostHookFunction | undefined;
    once?: boolean | undefined;
    passName?: boolean | undefined;
}
