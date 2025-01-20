/**
 * Object for keeping track of time. This uses
 * [performance.now]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance/now}.
 * @see [Official Documentation]{@link https://threejs.org/docs/index.html#api/en/core/Clock}
 * @see [Source]{@link https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js}
 */
export class Clock {
    /**
     * Create a new instance of {@link THREE.Clock | Clock}
     * @param autoStart - Whether to automatically start the clock when {@link getDelta | .getDelta()} is called for the first time. Default `true`
     */
    constructor(autoStart?: boolean);

    /**
     * If set, starts the clock automatically when {@link getDelta | .getDelta()} is called for the first time.
     * @defaultValue `true`
     */
    autoStart: boolean;

    /**
     * Holds the time at which the clock's {@link start | .start()} method was last called.
     * @defaultValue `0`
     */
    startTime: number;

    /**
     * Holds the time at which the clock's {@link start | .start()}, {@link getElapsedTime | .getElapsedTime()} or {@link getDelta | .getDelta()} methods were last called.
     * @defaultValue `0`
     */
    oldTime: number;

    /**
     * Keeps track of the total time that the clock has been running.
     * @defaultValue `0`
     */
    elapsedTime: number;

    /**
     * Whether the clock is running or not.
     * @defaultValue `false`
     */
    running: boolean;

    /**
     * Starts clock.
     * @remarks
     * Also sets the {@link startTime | .startTime} and {@link oldTime | .oldTime} to the current time,
     * sets {@link elapsedTime | .elapsedTime} to `0` and {@link running | .running} to `true`.
     */
    start(): void;

    /**
     * Stops clock and sets {@link oldTime | oldTime} to the current time.
     */
    stop(): void;

    /**
     * Get the seconds passed since the clock started and sets {@link oldTime | .oldTime} to the current time.
     * @remarks
     * If {@link autoStart | .autoStart} is `true` and the clock is not running, also starts the clock.
     */
    getElapsedTime(): number;

    /**
     * Get the seconds passed since the time {@link oldTime | .oldTime} was set and sets {@link oldTime | .oldTime} to the current time.
     * @remarks
     * If {@link autoStart | .autoStart} is `true` and the clock is not running, also starts the clock.
     */
    getDelta(): number;
}
