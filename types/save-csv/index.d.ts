// Type definitions for save-csv 4.1
// Project: https://github.com/silverwind/save-csv
// Definitions by: Frank Brullo <https://github.com/FrankBrullo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

export interface SaveCsvProps {
    filename: string;
    sep?: string;
    eol?: string;
    quote?: string;
    bom?: boolean;
    mime?: string;
    formatter?: (value: string | JSON) => void;
}

export function saveCsv(array: ReadonlyArray<any>, options?: SaveCsvProps): void;
