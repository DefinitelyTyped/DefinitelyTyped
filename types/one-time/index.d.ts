// Type definitions for one-time 0.0
// Project: https://github.com/3rd-eden/one-time
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = oneTime;

declare function oneTime<TFn extends Function>(fn: TFn): TFn; // tslint:disable-line:ban-types
