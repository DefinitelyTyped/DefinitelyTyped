// Type definitions for sequencify 0.1
// Project: https://github.com/robrich/sequencify
// Definitions by: Nicolas Penin <https://github.com/npenin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export = sequencify;

declare namespace sequencify {
    interface Task {
        name: string;
        dep: string[];
    }

    interface TaskMap {
        [name: string]: Task;
    }
}

declare function sequencify<T extends sequencify.TaskMap>(tasks: T, names: Array<keyof T>, results: Array<keyof T>, nest?: string[]): void;
