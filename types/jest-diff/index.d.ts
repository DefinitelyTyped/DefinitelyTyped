// Type definitions for jest-diff 20.0
// Project: https://github.com/facebook/jest/tree/master/packages/jest-diff, https://github.com/facebook/jest
// Definitions by: Alex Coles <https://github.com/myabc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace diff {
    interface DiffOptions {
        aAnnotation?: string;
        bAnnotation?: string;
        expand?: boolean;
        contextLines?: number;
    }
}

declare function diff(a: any, b: any, options?: diff.DiffOptions): string;

export = diff;
