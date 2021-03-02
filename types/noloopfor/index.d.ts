// Type definitions for noloopfor 2.0
// Project: https://github.com/david-fernando/noLoopFor
// Definitions by: David Fernando <https://github.com/david-fernando/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export function loop(value: number, target: number, callback: (index: number) => void): void;
export function loopStep(value: number, target: number, step: number, callback: (index: number) => void): void;
export function decrementLoop(value: number, target: number, callback: (index: number) => void): void;
export function decrementStep(value: number, target: number, step: number, callback: (index: number) => void): void;
