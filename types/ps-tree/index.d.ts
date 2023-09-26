declare namespace ps_tree {
    interface PS {
        COMMAND: string;
        PPID: string;
        PID: string;
        STAT: string;
    }

    const prototype: {};
}

declare function ps_tree(
    pid: number,
    callback: (error: Error | null, children: ReadonlyArray<ps_tree.PS>) => void,
): void;

export as namespace ps_tree;
export = ps_tree;
