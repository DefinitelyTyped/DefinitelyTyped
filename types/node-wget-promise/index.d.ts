// Type definitions for date-range-array 0.1
// Project: https://github.com/ajhsu/node-wget-promise
// Definitions by: Nathan Shively-Sanders <https://github.com/sandersn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare function download(
    source: string,
    options?: { verbose?: boolean | undefined; output?: string | undefined; onStart?: any; onProgress?: any },
): Promise<void>;
export = download;
