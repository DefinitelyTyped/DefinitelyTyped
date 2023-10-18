export as namespace TSV;

declare namespace TSV {
    class Parser {
        header: boolean;
        sep: string;

        constructor(sep: string, options?: { header?: boolean | undefined });

        stringify(data: ReadonlyArray<any>): string;
        parse(tsv: string): any[];
    }

    function stringify(data: any[]): string;
    function parse(tsv: string): any[];

    const CSV: Parser;
    const TSV: Parser;

    const sep: string;
    const header: boolean;
}

type TSV = TSV.Parser;

export = TSV;
