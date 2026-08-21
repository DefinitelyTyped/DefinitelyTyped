declare class FileSearch {
    constructor(directories: string, patterns?: RegExp);
    each(fn: (file: string) => void): void;
    list(): string[];
}

export = FileSearch;
