import { ConnectionOptions } from "mysql2";

export default class Importer {
    constructor(settings: ConnectionOptions);

    getImported(): Array<{ file: string; size: number }>;
    setEncoding(encoding: "utf8" | "ucs2" | "utf16le" | "latin1" | "ascii" | "base64" | "hex"): void;
    use(database: string): Promise<void>;
    onProgress(
        cb: (object: {
            total_files: number;
            file_no: number;
            bytes_processed: number;
            total_bytes: number;
            file_path: string;
        }) => void,
    ): void;
    onDumpComplete(
        cb: (object: {
            total_files: number;
            file_no: number;
            file_path: string;
            error: Error | null;
        }) => void,
    ): void;
    import(...input: ReadonlyArray<string | readonly string[]>): Promise<void>;
    disconnect(graceful?: boolean): Promise<void>;
}
