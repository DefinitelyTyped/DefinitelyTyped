// Type definitions for v8flags 3.1
// Project: https://github.com/gulpjs/v8flags
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = v8flags;

declare function v8flags(cb: (err: any, flags: string[]) => void): void;

declare namespace v8flags {
    const configfile: string;
    const configPath: string;
}
