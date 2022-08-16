// Type definitions for create-keyframe-animation 0.1
// Project: https://github.com/HenrikJoreteg/create-keyframe-animation
// Definitions by: fengyangfifa <https://github.com/fengyangfifa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

type Direction = 'normal' | 'alternate' | 'reverse' | 'alternate-reverse';

interface PresetsConfig {
    duration: number;
    fillMode: FillMode;
    easing: string;
    iterations: number;
    delay: number;
    direction: Direction;
    resetWhenDone: boolean;
    clearTransformsBeforeStart: boolean;
}

interface RegisterAnimationConfig {
    name: string;
    animation: AnimationType;
    presets?: Partial<PresetsConfig>;
}

interface AnimationConfigStartAndEnd {
    start: number[];
    end: number[];
}

interface AnimationConfigIndex {
    [index: number | `${string}%`]: number[] | Record<string, string>;
}

type AnimationType =
    AnimationConfigStartAndEnd
    | AnimationConfigIndex
    | number[][]
    | Array<Record<string, unknown>>;

type ElsType = Element | Element[] | ReturnType<typeof document.querySelectorAll>;

type OptsType = string | (Record<string, unknown> & { name: string } & Partial<PresetsConfig>);

type InferParams<T extends ElsType> = T extends Element ? [T] : T;

/**
 * Determine if there is an animation
 * @param name Animation name
 */
export function hasAnimation(name: string): boolean;

/**
 * Run animation with the name specified on the nodes you pass in.
 * @param els This can be a single element, an array of elements or the result of querySelectorAll.
 * @param opts If this is a string it's assumed to be the name of the animation to run. If you pass an object it has to contain the name.
 */
export function runAnimation<T extends OptsType>(els: ElsType, opts: T): Promise<T> | void;

/**
 * Run animation with the name specified on the nodes you pass in.
 * @param els This can be a single element, an array of elements or the result of querySelectorAll.
 * @param opts If this is a string it's assumed to be the name of the animation to run. If you pass an object it has to contain the name.
 * @param cb If you pass a callback it will get called when the animationend or the browser specific equivalent is called.
 */
export function runAnimation<T extends ElsType, U>(
    els: T,
    opts: OptsType,
    cb: (err: Error | null, result?: InferParams<T>) => U
): Promise<U> | void;

/**
 * Unregister animation
 * @param name Animation name
 */
export function unregisterAnimation(name: string): void;

/**
 * Get the css style of the animation
 * @param name Animation name
 * @param positions Animation execution configuration
 */
export function getAnimationCSS(name: string, positions: AnimationType): string;

/**
 * Register animation
 * @param opts Animation execution configuration
 */
export function registerAnimation(opts: RegisterAnimationConfig): void;

export {};
