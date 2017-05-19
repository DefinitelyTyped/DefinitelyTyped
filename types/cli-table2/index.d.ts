// Type definitions for cli-table2 0.2
// Project: https://github.com/jamestalmage/cli-table2
// Definitions by: Melvin Groenhoff <https://github.com/mgroenhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace CliTable2 {
    type CharName =
        "top" |
        "top-mid" |
        "top-left" |
        "top-right" |
        "bottom" |
        "bottom-mid" |
        "bottom-left" |
        "bottom-right" |
        "left" |
        "left-mid" |
        "mid" |
        "mid-mid" |
        "right" |
        "right-mid" |
        "middle";

    type HorizontalAlignment = "left" | "center" | "right";
    type VerticalAlignment = "top" | "center" | "bottom";

    interface TableOptions {
        chars: Record<CharName, string>;
        truncate: string;
        colWidths: Array<number | null>;
        rowHeights: Array<number | null>;
        colAligns: HorizontalAlignment[];
        rowAligns: VerticalAlignment[];
        style: {
            "padding-left": number;
            "padding-right": number;
            head: string[];
            border: string[];
            compact: boolean;
        };
        head: string[];
        wordWrap: boolean;
    }

    interface TableConstructorOptions extends Partial<Pick<TableOptions, "truncate" | "colWidths" | "rowHeights" | "colAligns" | "head" | "wordWrap">> {
        chars?: Partial<Record<CharName, string>>;
        style?: Partial<TableOptions["style"]>;
    }

    type CellValue = boolean | number | string | null | undefined;

    interface CellOptions {
        content: CellValue;
        chars?: Partial<Record<CharName, string>>;
        truncate?: string;
        colSpan?: number;
        rowSpan?: number;
        hAlign?: HorizontalAlignment;
        vAlign?: VerticalAlignment;
        style?: {
            "padding-left"?: number;
            "padding-right"?: number;
            head?: string[];
            border?: string[];
        };
    }

    interface GenericTable<T> extends Array<T> {
        options: CliTable2.TableOptions;
        readonly width: number;
    }

    type Table = HorizontalTable | VerticalTable | CrossTable;
    type Row = HorizontalTableRow | VerticalTableRow | CrossTableRow;
    type Cell = CellValue | CellOptions;

    type HorizontalTable = GenericTable<HorizontalTableRow>;
    type HorizontalTableRow = Cell[];

    type VerticalTable = GenericTable<VerticalTableRow>;
    interface VerticalTableRow {
        [name: string]: Cell;
    }

    type CrossTable = GenericTable<CrossTableRow>;
    interface CrossTableRow {
        [name: string]: Cell[];
    }
}

interface CliTable2 {
    new (options?: CliTable2.TableConstructorOptions): CliTable2.Table;
    readonly prototype: CliTable2.Table;
}

declare const CliTable2: CliTable2;

export = CliTable2;
