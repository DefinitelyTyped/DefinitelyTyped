// Type definitions for MainLoop.js v1.0.3
// Project: https://github.com/IceCreamYou/MainLoop.js
// Definitions by: Isaac Sukin <http://isaacsukin.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Interface for the MainLoop.js global.
 *
 * See the API documentation for a detailed explanation of these methods:
 * http://icecreamyou.github.com/MainLoop.js/docs/#!/api/MainLoop
 */
interface MainLoop {
    getFPS(): number;
    getMaxAllowedFPS(): number;
    getSimulationTimestep(): number;
    isRunning(): boolean;
    resetFrameDelta(): number;
    setBegin(begin: (timestamp: number, delta: number) => void): MainLoop;
    setDraw(draw: (interpolationPercentage: number) => void): MainLoop;
    setUpdate(update: (delta: number) => void): MainLoop;
    setEnd(end: (fps: number, panic: boolean) => void): MainLoop;
    setMaxAllowedFPS(fps?: number): MainLoop;
    setSimulationTimestep(timestep: number): MainLoop;
    start(): MainLoop;
    stop(): MainLoop;
}

declare var MainLoop: MainLoop;

export = MainLoop;
export as namespace MainLoop;
