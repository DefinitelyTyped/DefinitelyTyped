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
    type Setup = { scrollId: string; contentId: string } | { scrollElem: HTMLElement; contentElem: HTMLElement };

    type Options = Setup & {
        rows?: string[] | undefined;
        tag?: string | undefined;
        rows_in_block?: number | undefined;
        blocks_in_cluster?: number | undefined;
        show_no_data_row?: boolean | undefined;
        no_data_text?: string | undefined;
        no_data_class?: string | undefined;
        keep_parity?: boolean | undefined;
        callbacks?: Callbacks | undefined;
    };

    interface Callbacks {
        clusterWillChange?: (() => void) | undefined;
        clusterChanged?: (() => void) | undefined;
        scrollingProgress?: ((progress: number) => void) | undefined;
    }
}

export = Clusterize;
