// Type definitions for Node.js 10.17
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Jeremie Rodriguez <https://github.com/jeremiergz>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as http from 'http';
import * as tls from 'tls';
import { URL } from 'url';

export {};

export type ServerOptions = tls.SecureContextOptions & tls.TlsOptions & http.ServerOptions;

export type RequestOptions = http.RequestOptions & tls.SecureContextOptions & {
    rejectUnauthorized?: boolean; // Defaults to true
    servername?: string; // SNI TLS Extension
};

export interface AgentOptions extends http.AgentOptions, tls.ConnectionOptions {
    rejectUnauthorized?: boolean;
    maxCachedSessions?: number;
}

export class Agent extends http.Agent {
    constructor(options?: AgentOptions);
    options: AgentOptions;
}

export class Server extends tls.Server {
    constructor(options: ServerOptions, requestListener?: http.RequestListener);

    setTimeout(callback: () => void): this;
    setTimeout(msecs?: number, callback?: () => void): this;
    /**
     * Limits maximum incoming headers count. If set to 0, no limit will be applied.
     * @default 2000
     * {@link https://nodejs.org/api/http.html#http_server_maxheaderscount}
     */
    maxHeadersCount: number | null;
    timeout: number;
    /**
     * Limit the amount of time the parser will wait to receive the complete HTTP headers.
     * @default 40000
     * {@link https://nodejs.org/api/http.html#http_server_headerstimeout}
     */
    headersTimeout: number;
    keepAliveTimeout: number;
}

export function createServer(options: ServerOptions, requestListener?: http.RequestListener): Server;
export function request(options: RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
export function request(url: string | URL, options: RequestOptions, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
export function get(options: RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
export function get(url: string | URL, options: RequestOptions, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
export let globalAgent: Agent;
