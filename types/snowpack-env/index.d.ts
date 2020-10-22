// Type definitions for snowpack 2.3
// Project: https://github.com/pikapkg/snowpack#readme
// Definitions by: Fred K. Schott <https://github.com/FredKSchott>
//                 Michael Stramel <https://github.com/stramel>
//                 Drew Powers <https://github.com/drwpow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

interface ImportMetaHot {
    accept: any;
    dispose(callback: () => void): void;
    invalidate(): void;
    decline(): void;
}

interface ImportMeta {
    url: string;
    hot: ImportMetaHot;
    env: Record<string, any>;
}
