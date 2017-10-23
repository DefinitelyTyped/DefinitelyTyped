// Type definitions for dookie 0.1
// Project: https://github.com/vkarpov15/dookie#readme
// Definitions by: Swanest <https://github.com/swanest>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PushOpts {
    filename?: string;
    dropDatabase: boolean;
}

// Our exports:
export function push(uri: string, data: any, opts?: PushOpts): Promise<any>;

export function pull(uri: string): Promise<any>;

export function pullToStream(uri: string, stream: any): Promise<any>;

// Make this available as a global for non-module code.
export as namespace dookie;
