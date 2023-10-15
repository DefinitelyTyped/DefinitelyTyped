// Type definitions for defined 1.0
// Project: https://github.com/substack/defined
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = defined;

declare function defined<T>(...args: T[]): T;
declare function defined(...args: any[]): any;
