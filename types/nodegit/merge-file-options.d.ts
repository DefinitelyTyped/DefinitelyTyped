export interface MergeFileOptions {
    version?: number;
    ancestorLabel?: string;
    ourLabel?: string;
    theirLabel?: string;
    favor?: number;
    flags?: number;
    [key: string]: any;
}
