declare function download(
    source: string,
    options?: { verbose?: boolean | undefined; output?: string | undefined; onStart?: any; onProgress?: any },
): Promise<void>;
export = download;
