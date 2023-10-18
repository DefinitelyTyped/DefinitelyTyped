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
        dummyRow?: string | undefined;
        preload?: number | undefined;
        pageSize?: number | undefined;
        rows?: string[] | undefined;
        tag?: string | undefined;
        rows_in_block?: number | undefined;
        blocks_in_cluster?: number | undefined;
        show_no_data_row?: boolean | undefined;
        no_data_text?: string | undefined;
        no_data_class?: string | undefined;
        keep_parity?: boolean | undefined;
        callbacks?: Callbacks | undefined;
    }

    interface Callbacks {
        clusterWillChange?: (() => void) | undefined;
        clusterChanged?: (() => void) | undefined;
        scrollingProgress?: ((progress: number) => void) | undefined;
        rowsLoaded?: (() => void) | undefined;
        loadRows?: ((offset: number) => void) | undefined;
    }
}

export = ClusterizePaging;
