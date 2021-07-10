import '../../';

declare module '../../' {
    interface EditorConfiguration {
        // if true, it will be refreshed the first time the editor becomes visible.
        // you can pass delay (msec) time as polling duration
        autoRefresh?: boolean | { delay: number } | undefined;
    }
}
