// Type definitions for save-csv 4.1
// Project: https://github.com/silverwind/save-csv
// Definitions by: Frank Brullo <https://github.com/FrankBrullo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

interface SaveCsvProps {
    filename: string;
    sep?: string | undefined;
    eol?: string | undefined;
    quote?: string | undefined;
    bom?: boolean | undefined;
    mime?: string | undefined;
    formatter?: ((value: string | JSON) => void) | undefined;
}

declare function saveCsv(array: ReadonlyArray<any>, options?: SaveCsvProps): void;
export = saveCsv;
