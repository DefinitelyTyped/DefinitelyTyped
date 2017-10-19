// Type definitions for clusterize.js 0.17
// Project: https://github.com/NeXTs/Clusterize.js
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Clusterize {
    constructor(options: ClusterizeOptions);

    destroy(clean?: boolean): void;
    refresh(force?: boolean): void;
    clear(): void;
    getRowsAmount(): number;
    getScrollProgress(): number;
    update(data?: string[]): void;
    append(rows: string[]): void;
    prepend(rows: string[]): void;
}

interface ClusterizeOptions {
    scrollId: string;
    contentId: string;
    rows?: string[];
    tag?: string;
    rows_in_block?: number;
    blocks_in_cluster?: number;
    show_no_data_row?: boolean;
    no_data_text?: string;
    no_data_class?: string;
    keep_parity?: boolean;
    callbacks?: ClusterizeCallbacks;
}

interface ClusterizeCallbacks {
    clusterWillChange?(cb: () => any): any;
    clusterChanged?(cb: () => any): any;
    scrollingProgress?(cb: (progress: number) => any): any;
}

export = Clusterize;
