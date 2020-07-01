// Type definitions for React (react-addons-perf) 0.14
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
    export function printInclusive(measurements?: Measurements[]): void;
    export function printExclusive(measurements?: Measurements[]): void;
    export function printWasted(measurements?: Measurements[]): void;
    export function printOperations(measurements?: Measurements[]): void;
    export function getLastMeasurements(): Measurements[];
    export function getExclusive(measurements?: Measurements[]): any;
    export function getInclusive(measurements?: Measurements[]): any;
    export function getWasted(measurements?: Measurements[]): any;
    export function getOperations(measurements?: Measurements[]): any;

    // Renamed to printOperations().  Please use it instead.
    export function printDOM(measurements?: Measurements[]): void;
}
