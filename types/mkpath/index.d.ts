declare namespace mkpath {
    function sync(path: string, mode?: number): void;
}

declare function mkpath(path: string, callback?: (err: any) => void): void;
declare function mkpath(path: string, mode?: number, callback?: (err?: any) => void): void;

export = mkpath;
