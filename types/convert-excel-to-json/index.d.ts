// Type definitions for convert-excel-to-json 1.7
// Project: https://github.com/DiegoZoracKy/convert-excel-to-json
// Definitions by: UNIDY2002 <https://github.com/UNIDY2002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface SheetConfig {
    header?: { rows: number };
    range?: string;
    columnToKey?: { [key: string]: string };
    includeEmptyLines?: boolean;
    sheetStubs?: boolean;
}

declare function excelToJson(
    config: ({ sourceFile: string } | { source: string | Buffer })                 // Either sourceFile or source should have a value
        & { sheets?: ReadonlyArray<(string | (SheetConfig & { name: string }))> }  // Nested SheetConfig should be allowed
        & SheetConfig                                                              // ... or just a simple config for all
        | string,                                                                  // Input can also be a json-string (for cli)
    sourceFile?: string,                                                           // For cli
): { [key: string]: any[] };        // Using any to provide more flexibility for downstream usages

export = excelToJson;
