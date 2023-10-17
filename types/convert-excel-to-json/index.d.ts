/// <reference types="node" />

interface SheetConfig {
    header?: { rows: number } | undefined;
    range?: string | undefined;
    columnToKey?: { [key: string]: string } | undefined;
    includeEmptyLines?: boolean | undefined;
    sheetStubs?: boolean | undefined;
}

declare function excelToJson(
    config:
        | ({ sourceFile: string } | { source: string | Buffer }) // Either sourceFile or source should have a value
            & { sheets?: ReadonlyArray<(string | (SheetConfig & { name: string }))> | undefined } // Nested SheetConfig should be allowed
            & SheetConfig // ... or just a simple config for all
        | string, // Input can also be a json-string (for cli)
    sourceFile?: string, // For cli
): { [key: string]: any[] }; // Using any to provide more flexibility for downstream usages

export = excelToJson;
