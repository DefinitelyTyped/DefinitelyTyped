// Type definitions for simple-time-input-engine 0.0
// Project: https://github.com/Citifyd/simple-time-input-engine#readme
// Definitions by: Chethan S <https://github.com/repl-chethan-s>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function formatTimeForDisplay({ time, clockMode }: { time: string; clockMode: number }): string;

export function parseInputChange({
    newValue,
    previousTime,
    clockMode,
}: {
    newValue: string;
    previousTime: string;
    clockMode: number;
}): { time: string; valid: boolean };
