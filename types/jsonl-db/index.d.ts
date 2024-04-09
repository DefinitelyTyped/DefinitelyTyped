declare module "jsonl-db" {
    interface JsonlFile<T> {
        add(o: T): Promise<void>;
        addMany(os: T[]): Promise<void>;
        first(): Promise<T>;
        last(): Promise<T>;
        read(onLine: (line: T) => Promise<boolean> | boolean): Promise<void>;
        readByBatch(
            onBatch: (batch: T[]) => Promise<boolean> | boolean,
            batchSize: number,
        ): Promise<void>;
        findWhere(attribute: keyof T, value: any): Promise<T | undefined>;
        findMatch(matchFn: (line: T) => Promise<boolean> | boolean): Promise<T[]>;
        count(): Promise<number>;
        countMatch(
            matchFn: (line: T) => Promise<boolean> | boolean,
        ): Promise<number>;
        updateWhere(
            attribute: keyof T,
            value: any,
            updateFn: (line: T) => Promise<T>,
        ): Promise<void>;
        updateMatch(
            matchFn: (line: T) => Promise<boolean> | boolean,
            updateFn: (line: T) => Promise<T>,
        ): Promise<void>;
        deleteWhere(attribute: keyof T, value: any): Promise<void>;
        deleteMatch(
            matchFn: (line: T) => Promise<boolean> | boolean,
        ): Promise<void>;
        deleteFile(): Promise<void>;
    }

    function jsonlFile<T>(path: string): JsonlFile<T>;

    export = jsonlFile;
}
