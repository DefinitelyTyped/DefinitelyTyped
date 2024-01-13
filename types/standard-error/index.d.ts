// TypeScript Version: 2.2

export = StandardError;

declare class StandardError extends Error {
    [key: string]: any;

    constructor(message: string, props?: any);
    constructor(props: any);
}
