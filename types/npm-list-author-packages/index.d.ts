declare namespace list {
    interface Options {
        /** registry port. Default: 443 (HTTPS) or 80 (HTTP). */
        port?: 443 | 80 | undefined;
        /** registry protocol. Default: 'https'. */
        protocol?: "http" | "https" | undefined;
        /** registry. Default: 'registry.npmjs.org'. */
        registry?: string | undefined;
        /** author username (required). */
        username: string;
    }

    type Callback = (error: Error | null, data: string[]) => void;

    function factory(opts: Options, callback: Callback): () => void;
}

declare function list(opts: list.Options, callback: list.Callback): void;

export = list;
