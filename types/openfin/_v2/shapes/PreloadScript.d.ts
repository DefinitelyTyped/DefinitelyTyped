export interface PreloadScript {
    mandatory?: boolean;
    state?: 'load-started' | 'load-failed' | 'load-succeeded' | 'failed' | 'succeeded';
    url: string;
}
