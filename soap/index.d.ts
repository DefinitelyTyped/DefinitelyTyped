// Type definitions for soap
// Project: https://www.npmjs.com/package/soap
// Definitions by: Leo Liang <https://github.com/aleung>, Cage Fox <https://github.com/cagefox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as events from 'events';

interface Security {
}

export class WSSecurity implements Security {
    constructor(username: string, password: string, options?: any);
}

export class ClientSSLSecurity implements Security {
    constructor(key: Buffer | string, cert: Buffer | string, ca: Buffer | string, defaults?: any);
    constructor(key: Buffer | string, cert: Buffer | string, defaults?: any);
}

interface Client extends events.EventEmitter {
    setSecurity(s: Security): void;
    [method: string]: (args: any, fn: (err: any, result: any) => void, options?: any, extraHeaders?: any) => void;
    addSoapHeader(headJSON: any): void;
    setEndpoint(endpoint: string): void;
    describe(): any;
}

export interface Server extends events.EventEmitter {
    addSoapHeader(soapHeader: any, name: any, namespace: any, xmlns: any): any;
    changeSoapHeader(index: any, soapHeader: any, name: any, namespace: any, xmlns: any): any;
    getSoapHeaders(): any;
    clearSoapHeaders(): any;
    log(type: any, data: any): any;
}
export function listen(server: any, path: string, service: any, wsdl: string): Server;
declare function createClient(wsdlPath: string, options: any, fn: (err: any, client: Client) => void): void;
