// Type definitions for sequencify 0.0
// Project: https://github.com/robrich/sequencify
// Definitions by: Nicolas Penin <https://github.com/npenin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Definition file started by dts-gen
// TypeScript Version: 2.1

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

declare function sequencify(tasks: sequencify.TaskMap, names: Array<keyof sequencify.TaskMap>, results: string[], nest?: string[]): void;
