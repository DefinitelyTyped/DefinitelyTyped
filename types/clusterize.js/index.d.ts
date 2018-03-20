// Type definitions for clusterize.js 0.17
// Project: https://github.com/NeXTs/Clusterize.js
// Definitions by: Pr1st0n <https://github.com/Pr1st0n>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Clusterize {
    constructor(options: Clusterize.Options);

    destroy(clean?: boolean): void;
    refresh(force?: boolean): void;
    clear(): void;
    getRowsAmount(): number;
    getScrollProgress(): number;
    update(data?: string[]): void;
    append(rows: string[]): void;
    prepend(rows: string[]): void;
}

declare namespace Clusterize {
    interface Options {
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
        callbacks?: Callbacks;
    }

    interface Callbacks {
        clusterWillChange?(cb: () => void): void;
        clusterChanged?(cb: () => void): void;
        scrollingProgress?(cb: (progress: number) => void): void;
    }
}

export = Clusterize;
