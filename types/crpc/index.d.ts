// Type definitions for crpc 0.2
// Project: https://github.com/billinghamj/crpc
// Definitions by: Alexander Forbes-Reed <https://github.com/0xdeafcafe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

export type Client = <TRes>(path: string, body: any, options?: {} | null) => Promise<TRes>;

export default function crpc(baseUrl: string, options?: {}): Client;
