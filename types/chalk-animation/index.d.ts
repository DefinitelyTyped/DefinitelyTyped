// Type definitions for chalk-animation 1.6
// Project: https://github.com/bokub/chalk-animation
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const rainbow: AnimationFn;
export const pulse: AnimationFn;
export const glitch: AnimationFn;
export const radar: AnimationFn;
export const neon: AnimationFn;
export const karaoke: AnimationFn;

export type AnimationFn = (text: string, speed?: number) => Animation;

export interface Animation {
    start(): void;
    stop(): void;
    replace(text: string): void;
    render(): void;
    frame(): string;
}
