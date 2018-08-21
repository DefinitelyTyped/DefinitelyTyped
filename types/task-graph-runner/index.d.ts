// Type definitions for task-graph-runner 1.0
// Project: https://github.com/thejameskyle/task-graph-runner#readme
// Definitions by: Melvin Groenhoff <https://github.com/mgroenhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = taskGraphRunner;

declare function taskGraphRunner<Item, Result>(opts: taskGraphRunner.Opts<Item, Result>): Promise<taskGraphRunner.Results<Item, Result>>;

declare namespace taskGraphRunner {
    interface Opts<Item, Result> {
        graph: Map<Item, Item[]>;
        task: (item: Item) => Result;
        force?: boolean;
    }

    interface Results<Item, Result> {
        values: Map<Item, Result>;
        safe: boolean;
    }
}
