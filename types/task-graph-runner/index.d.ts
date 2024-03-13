export = taskGraphRunner;

declare function taskGraphRunner<Item, Result>(
    opts: taskGraphRunner.Opts<Item, Result>,
): Promise<taskGraphRunner.Results<Item, Result>>;

declare namespace taskGraphRunner {
    interface Opts<Item, Result> {
        graph: Map<Item, Item[]>;
        task: (item: Item) => Result;
        force?: boolean | undefined;
    }

    interface Results<Item, Result> {
        values: Map<Item, Result>;
        safe: boolean;
    }
}
