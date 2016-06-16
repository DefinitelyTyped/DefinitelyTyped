// Type definitions for React v15.1.0 (react-addons-perf)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="react.d.ts" />

declare namespace __React {
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

    namespace __Addons {
        namespace Perf {
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
    }
}

declare module "react-addons-perf" {
    import Perf = __React.__Addons.Perf;
    export = Perf;
}
