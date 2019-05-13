// Type definitions for coinbase-commerce-node 1.0.0
// Project: https://github.com/coinbase/coinbase-commerce-node
// Definitions by: Jørgen Vatle <https://github.com/JorgenVatle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Client request options.
 */
interface Options {
    url: string;
    body: string;
    method: 'GET' | 'POST' | 'DELETE' | 'PUT',
    timeout: number,
    headers: {
        [key: string]: any,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': string,
        'X-CC-Api-Key': string,
        'X-CC-Version': string,
    }
}

/**
 * Coinbase-Commerce-Node entry point.
 *
 * @link https://github.com/JorgenVatle/coinbase-commerce-node#usage
 */
export class Client {

    /**
     * Setup client.
     */
    init(apiKey: string, baseApiUrl?: string, apiVersion?: string, timeout?: number): Options;

}
