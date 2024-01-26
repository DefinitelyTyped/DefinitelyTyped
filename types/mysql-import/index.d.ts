import { ConnectionOptions } from 'mysql2';

export default class Importer {
    constructor(settings: Pick<ConnectionOptions, 'user' | 'password' | 'database' | 'host'>);

    getImported(): Array<{file: string, size: number}>;
    setEncoding(encoding: 'utf8' | 'ucs2' | 'utf16le' | 'latin1' | 'ascii' | 'base64' | 'hex'): void;
    use(database: string): Promise<void>;
    onProgress(cb: (...args: any[]) => any): void;
    onDumpComplete(cb: (...args: any[]) => any): void;
    import(input: string | string[]): Promise<void>;
    disconnect(graceful: boolean): Promise<void>;
}
