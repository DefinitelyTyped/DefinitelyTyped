// Type definitions for cli-table 0.3
// Project: https://github.com/Automattic/cli-table
// Definitions by: AryloYeung <https://github.com/arylo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

interface TableOptions {
    chars: Partial<Record<(
        'top' |
        'top-mid' |
        'top-left' |
        'top-right' |
        'bottom' |
        'bottom-mid' |
        'bottom-left' |
        'bottom-right' |
        'left' |
        'left-mid' |
        'mid' |
        'mid-mid' |
        'right' |
        'right-mid' |
        'middle'
    ), string>>;
    truncate: string;
    colors: boolean;
    colWidths: number[];
    colAligns: Array<"left" | "middle" | "right">;
    style: Partial<{
        'padding-left': number;
        'padding-right': number;
        head: string[];
        border: string[];
        compact: boolean;
    }>;
    head: string[];
}

declare class Table extends Array {
    constructor(options?: Partial<TableOptions>);
    toString(): string;
    static version: string;
}

export = Table;
