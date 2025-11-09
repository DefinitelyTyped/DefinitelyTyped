export const PUBLIC_ESPLORA_URL: string;

export interface EsploraOptions {
    url?: string;
    timeout?: number;
}

export class Esplora {
    constructor(options?: EsploraOptions);
    url: string;
    timeout: number;
    blockhash(height: string): Promise<string>;
    block(hash: string): Promise<{ merkleroot: string; time: number }>;
}

export class URLError extends Error {
    name: "URLError";
    constructor(message?: string);
}
