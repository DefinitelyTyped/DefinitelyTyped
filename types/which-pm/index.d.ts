// Type definitions for which-pm 1.0
// Project: https://github.com/zkochan/which-pm#readme
// Definitions by: Jorge Gonzalez <https://github.com/jorgegonzalez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface PMInfo {
    name: string;
    version?: string;
}

declare function whichpm(pkgPath: string): Promise<PMInfo | null>;

export = whichpm;
