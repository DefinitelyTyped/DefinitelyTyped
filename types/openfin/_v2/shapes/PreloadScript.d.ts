export interface PreloadScript {
    mandatory?: boolean | undefined;
    state?: 'load-started' | 'load-failed' | 'load-succeeded' | 'failed' | 'succeeded' | undefined;
    url: string;
}
