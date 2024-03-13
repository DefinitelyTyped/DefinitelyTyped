export interface ResultObject {
    memory: number;
    memoryInfo: {
        rss: number;
        vsize: number;
    };
    cpu: number;
}

export interface Options {
    keepHistory: boolean;
}

export declare function lookup(pid: number, callback: (err: Error, result: ResultObject) => void): void;
export declare function lookup(
    pid: number,
    options: Options,
    callback: (err: Error, result: ResultObject) => void,
): void;

// Only availible on linux
export declare function clearHistory(pid?: number): void;
