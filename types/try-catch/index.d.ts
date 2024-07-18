declare function tryCatch(fn: (...args: any[]) => any, ...args: any[]): [error: Error, result?: any];
export = tryCatch;
