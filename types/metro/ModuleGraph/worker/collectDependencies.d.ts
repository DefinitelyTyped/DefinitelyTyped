export type ContextMode = 'sync' | 'eager' | 'lazy' | 'lazy-once';

export interface ContextFilter {
    pattern: string;
    flags: string;
}

export interface RequireContextParams {
    /* Should search for files recursively. Optional, default `true` when `require.context` is used */
    readonly recursive: boolean;
    /* Filename filter pattern for use in `require.context`. Optional, default `.*` (any file) when `require.context` is used */
    readonly filter: Readonly<ContextFilter>;
    /** Mode for resolving dynamic dependencies. Defaults to `sync` */
    readonly mode: ContextMode;
}

export type DynamicRequiresBehavior = 'throwAtRuntime' | 'reject';
