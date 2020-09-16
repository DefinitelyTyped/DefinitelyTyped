// Type definitions for npm-list-author-packages 2.0
// Project: https://github.com/kgryte/npm-list-author-packages#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace list {
    interface Options {
        /** registry port. Default: 443 (HTTPS) or 80 (HTTP). */
        port?: 443 | 80;
        /** registry protocol. Default: 'https'. */
        protocol?: 'http' | 'https';
        /** registry. Default: 'registry.npmjs.org'. */
        registry?: string;
        /** author username (required). */
        username: string;
    }

    type Callback = (error: Error | null, data: string[]) => void;

    function factory(opts: Options, callback: Callback): () => void;
}

declare function list(opts: list.Options, callback: list.Callback): void;

export = list;
