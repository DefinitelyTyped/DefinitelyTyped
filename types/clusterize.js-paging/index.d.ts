// Type definitions for clusterize.js-paging 1.0
// Project: https://github.com/zazukoians/clusterize.js-paging
// Definitions by: Goran Jovanovic <https://github.com/gjovanovicst>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class ClusterizePaging {
    constructor(options: ClusterizePaging.Options);

    destroy(clean?: boolean): void;
    refresh(force?: boolean): void;
    clear(): void;
    getRowsAmount(): number;
    getScrollProgress(): number;
    update(data?: string[]): void;
    append(rows: string[]): void;
    prepend(rows: string[]): void;
}

declare namespace ClusterizePaging {
    interface Options {
        scrollId: string;
        contentId: string;
        dummyRow?: string;
        preload?: number;
        pageSize?: number;
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
        clusterWillChange?: () => void;
        clusterChanged?: () => void;
        scrollingProgress?: (progress: number) => void;
        rowsLoaded?: () => void;
        loadRows?: (offset: number) => void;
    }
}

export = ClusterizePaging;
