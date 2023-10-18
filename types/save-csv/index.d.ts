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
