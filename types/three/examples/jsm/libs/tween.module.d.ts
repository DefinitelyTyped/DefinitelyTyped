type EasingFunction = (amount: number) => number;
interface EasingFunctionGroup {
    In: EasingFunction;
    Out: EasingFunction;
    InOut: EasingFunction;
}
/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */
declare const Easing: Readonly<{
    Linear: Readonly<
        EasingFunctionGroup & {
            None: EasingFunction;
        }
    >;
    Quadratic: Readonly<EasingFunctionGroup>;
    Cubic: Readonly<EasingFunctionGroup>;
    Quartic: Readonly<EasingFunctionGroup>;
    Quintic: Readonly<EasingFunctionGroup>;
    Sinusoidal: Readonly<EasingFunctionGroup>;
    Exponential: Readonly<EasingFunctionGroup>;
    Circular: Readonly<EasingFunctionGroup>;
    Elastic: Readonly<EasingFunctionGroup>;
    Back: Readonly<EasingFunctionGroup>;
    Bounce: Readonly<EasingFunctionGroup>;
    generatePow(power?: number): EasingFunctionGroup;
}>;

type InterpolationFunction = (v: number[], k: number) => number;
declare const Interpolation: {
    Linear: (v: number[], k: number) => number;
    Bezier: (v: number[], k: number) => number;
    CatmullRom: (v: number[], k: number) => number;
    Utils: {
        Linear: (p0: number, p1: number, t: number) => number;
        Bernstein: (n: number, i: number) => number;
        Factorial: (n: number) => number;
        CatmullRom: (p0: number, p1: number, p2: number, p3: number, t: number) => number;
    };
};

/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */
declare class Group {
    private _tweens;
    private _tweensAddedDuringUpdate;
    getAll(): Array<Tween<UnknownProps>>;
    removeAll(): void;
    add(tween: Tween<UnknownProps>): void;
    remove(tween: Tween<UnknownProps>): void;
    update(time?: number, preserve?: boolean): boolean;
}

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */

declare class Tween<T extends UnknownProps> {
    private _object;
    private _group;
    private _isPaused;
    private _pauseStart;
    private _valuesStart;
    private _valuesEnd;
    private _valuesStartRepeat;
    private _duration;
    private _isDynamic;
    private _initialRepeat;
    private _repeat;
    private _repeatDelayTime?;
    private _yoyo;
    private _isPlaying;
    private _reversed;
    private _delayTime;
    private _startTime;
    private _easingFunction;
    private _interpolationFunction;
    private _chainedTweens;
    private _onStartCallback?;
    private _onStartCallbackFired;
    private _onEveryStartCallback?;
    private _onEveryStartCallbackFired;
    private _onUpdateCallback?;
    private _onRepeatCallback?;
    private _onCompleteCallback?;
    private _onStopCallback?;
    private _id;
    private _isChainStopped;
    private _propertiesAreSetUp;
    constructor(_object: T, _group?: Group | false);
    getId(): number;
    isPlaying(): boolean;
    isPaused(): boolean;
    to(target: UnknownProps, duration?: number): this;
    duration(duration?: number): this;
    dynamic(dynamic?: boolean): this;
    start(time?: number, overrideStartingValues?: boolean): this;
    startFromCurrentValues(time?: number): this;
    private _setupProperties;
    stop(): this;
    end(): this;
    pause(time?: number): this;
    resume(time?: number): this;
    stopChainedTweens(): this;
    group(group?: Group): this;
    delay(amount?: number): this;
    repeat(times?: number): this;
    repeatDelay(amount?: number): this;
    yoyo(yoyo?: boolean): this;
    easing(easingFunction?: EasingFunction): this;
    interpolation(interpolationFunction?: InterpolationFunction): this;
    chain(...tweens: Array<Tween<any>>): this;
    onStart(callback?: (object: T) => void): this;
    onEveryStart(callback?: (object: T) => void): this;
    onUpdate(callback?: (object: T, elapsed: number) => void): this;
    onRepeat(callback?: (object: T) => void): this;
    onComplete(callback?: (object: T) => void): this;
    onStop(callback?: (object: T) => void): this;
    private _goToEnd;
    /**
     * @returns true if the tween is still playing after the update, false
     * otherwise (calling update on a paused tween still returns true because
     * it is still playing, just paused).
     */
    update(time?: number, autoStart?: boolean): boolean;
    private _updateProperties;
    private _handleRelativeValue;
    private _swapEndStartRepeatValues;
}
type UnknownProps = Record<string, any>;

declare function now(): number;

/**
 * Utils
 */
// tslint:disable-next-line:no-unnecessary-class
declare class Sequence {
    private static _nextId;
    static nextId(): number;
}

declare const VERSION = '21.0.0';

declare const nextId: typeof Sequence.nextId;
declare function getAll(): Array<Tween<UnknownProps>>;
declare function removeAll(): void;
declare function add(tween: Tween<UnknownProps>): void;
declare function remove(tween: Tween<UnknownProps>): void;
declare function update(time?: number, preserve?: boolean): boolean;

declare const exports: {
    Easing: Readonly<{
        Linear: Readonly<
            EasingFunctionGroup & {
                None: EasingFunction;
            }
        >;
        Quadratic: Readonly<EasingFunctionGroup>;
        Cubic: Readonly<EasingFunctionGroup>;
        Quartic: Readonly<EasingFunctionGroup>;
        Quintic: Readonly<EasingFunctionGroup>;
        Sinusoidal: Readonly<EasingFunctionGroup>;
        Exponential: Readonly<EasingFunctionGroup>;
        Circular: Readonly<EasingFunctionGroup>;
        Elastic: Readonly<EasingFunctionGroup>;
        Back: Readonly<EasingFunctionGroup>;
        Bounce: Readonly<EasingFunctionGroup>;
        generatePow(power?: number): EasingFunctionGroup;
    }>;
    Group: typeof Group;
    Interpolation: {
        Linear: (v: number[], k: number) => number;
        Bezier: (v: number[], k: number) => number;
        CatmullRom: (v: number[], k: number) => number;
        Utils: {
            Linear: (p0: number, p1: number, t: number) => number;
            Bernstein: (n: number, i: number) => number;
            Factorial: (n: number) => number;
            CatmullRom: (p0: number, p1: number, p2: number, p3: number, t: number) => number;
        };
    };
    now: () => number;
    Sequence: typeof Sequence;
    nextId: typeof Sequence.nextId;
    Tween: typeof Tween;
    VERSION: string;
    getAll: () => Array<Tween<UnknownProps>>;
    removeAll: () => void;
    add: (tween: Tween<UnknownProps>) => void;
    remove: (tween: Tween<UnknownProps>) => void;
    update: (time?: number, preserve?: boolean) => boolean;
};

export {
    Easing,
    Group,
    Interpolation,
    Sequence,
    Tween,
    VERSION,
    add,
    exports as default,
    getAll,
    nextId,
    now,
    remove,
    removeAll,
    update,
};
