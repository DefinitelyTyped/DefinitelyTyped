// Type definitions for Recase 1.0
// Project: https://github.com/coolaj86/recase-js
// Definitions by: Mikal Madsen <https://github.com/18steps>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Recase {
    camelCopy(orig: any): any;
    snakeCopy(orig: any): any;
}
export function create(opts: {
    exceptions?: {
        [origKey: string]: string;
    };
}): Recase;
