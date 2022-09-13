export interface MergeFileOptions {
    version?: number | undefined;
    ancestorLabel?: string | undefined;
    ourLabel?: string | undefined;
    theirLabel?: string | undefined;
    favor?: number | undefined;
    flags?: number | undefined;
    [key: string]: any;
}
