// Type definitions for sequencify v0.0
// Project: https://github.com/robrich/sequencify
// Definitions by: Nicolas Penin <https://github.com/npenin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Definition file started by dts-gen

export = sequencify;

declare namespace sequencify {
    export type Task = { name: string, dep: string[] };

    export type TaskMap = { [name: string]: Task }
}

declare function sequencify(tasks: sequencify.TaskMap, names: (keyof sequencify.TaskMap)[], results: string[], nest?: string[]): void;
