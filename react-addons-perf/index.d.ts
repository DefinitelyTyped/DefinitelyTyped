// Type definitions for React v0.14 (react-addons-perf)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Perf;

interface ComponentPerfContext {
    current: string;
    owner: string;
}

interface NumericPerfContext {
    [key: string]: number;
}

interface Measurements {
    exclusive: NumericPerfContext;
    inclusive: NumericPerfContext;
    render: NumericPerfContext;
    counts: NumericPerfContext;
    writes: NumericPerfContext;
    displayNames: {
        [key: string]: ComponentPerfContext;
    };
    totalTime: number;
}

declare namespace Perf {
    export function start(): void;
    export function stop(): void;
    export function printInclusive(measurements: Measurements[]): void;
    export function printExclusive(measurements: Measurements[]): void;
    export function printWasted(measurements: Measurements[]): void;
    export function printDOM(measurements: Measurements[]): void;
    export function getLastMeasurements(): Measurements[];
}
