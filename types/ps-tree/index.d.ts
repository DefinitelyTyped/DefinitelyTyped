// Type definitions for ps-tree 1.1
// Project: http://github.com/indexzero/ps-tree
// Definitions by: Alessio Paccoia <https://github.com/alessiopcc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare namespace ps_tree {
    interface PS {
        COMMAND: string;
        PPID: string;
        PID: string;
        STAT: string;
    }

    const prototype: {
    };
}

declare function ps_tree(pid: number, callback: (error: Error, children: ReadonlyArray<ps_tree.PS>) => void): void;

export as namespace ps_tree;
export = ps_tree;
