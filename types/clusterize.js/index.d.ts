// Type definitions for clusterize.js 0.18
// Project: https://github.com/NeXTs/Clusterize.js
// Definitions by: Pr1st0n <https://github.com/Pr1st0n>
//                 Goran Jovanovic <https://github.com/gjovanovicst>
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
    type Setup = { scrollId: string; contentId: string } | { scrollElem: HTMLElement; contentElem: HTMLElement };

    type Options = Setup & {
        rows?: string[];
        tag?: string;
        rows_in_block?: number;
        blocks_in_cluster?: number;
        show_no_data_row?: boolean;
        no_data_text?: string;
        no_data_class?: string;
        keep_parity?: boolean;
        callbacks?: Callbacks;
    };

    interface Callbacks {
        clusterWillChange?: () => void;
        clusterChanged?: () => void;
        scrollingProgress?: (progress: number) => void;
    }
}

export = Clusterize;
