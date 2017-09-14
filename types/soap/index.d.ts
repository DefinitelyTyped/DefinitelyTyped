// Type definitions for soap 0.18
// Project: https://www.npmjs.com/package/soap
// Definitions by: Leo Liang <https://github.com/aleung>, Cage Fox <https://github.com/cagefox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as events from 'events';

interface Security {
}

export interface SoapMethod {
    (args: any, callback: (err: any, result: any) => void, options?: any, extraHeaders?: any): void;
}

export class BasicAuthSecurity implements Security {
    constructor(username: string, password: string);
}

export class BearerSecurity implements Security {
    constructor(token: string);
}

export class WSSecurity implements Security {
    constructor(username: string, password: string, options?: any);
}

export class ClientSSLSecurity implements Security {
    constructor(key: Buffer | string, cert: Buffer | string, ca: Buffer | string, defaults?: any);
    constructor(key: Buffer | string, cert: Buffer | string, defaults?: any);
}

export interface Client extends events.EventEmitter {
    addBodyAttribute(bodyAttribute: any, name?: string, namespace?: string, xmlns?: string): void;
    addHttpHeader(name: string, value: any): void;
    addSoapHeader(soapHeader: any, name?: string, namespace?: string, xmlns?: string): number;
    changeSoapHeader(index: number, soapHeader: any, name?: string, namespace?: string, xmlns?: string): void;
    clearBodyAttributes(): void;
    clearHttpHeaders(): void;
    clearSoapHeaders(): void;
    describe(): any;
    getBodyAttributes(): any[];
    getHttpHeaders(): any[];
    getSoapHeaders(): any[];
    setEndpoint(endpoint: string): void;
    setSOAPAction(action: string): void;
    setSecurity(s: Security): void;
    [method: string]: SoapMethod | Function;
}

export interface Server extends events.EventEmitter {
    addSoapHeader(soapHeader: any, name: any, namespace: any, xmlns: any): any;
    changeSoapHeader(index: any, soapHeader: any, name: any, namespace: any, xmlns: any): any;
    getSoapHeaders(): any;
    clearSoapHeaders(): any;
    log(type: any, data: any): any;
}
export function listen(server: any, path: string, service: any, wsdl: string): Server;
declare function createClient(wsdlPath: string, options: Option, fn: (err: any, client: Client) => void): void;

export interface Option {
    attributesKey?: string;
    disableCache?: boolean;
    endpoint?: string;
    envelopeKey?: string;
    escapeXML?: boolean;
    forceSoap12Headers?: boolean;
    httpClient?: HttpClient;
    ignoreBaseNameSpaces?: boolean,
    ignoredNamespaces?: string[] | { namespaces: string[], override: boolean };
    overrideRootElement?: { namespace: string, xmlnsAttributes?: string[] };
    request?: (options: any, callback?: (error: any, res: any, body: any) => void) => void;
    stream?: boolean;
    valueKey?: string;
    wsdl_headers?: { [key: string]: any };
    wsdl_options?: { [key: string]: any };
    xmlKey?: string;
}

export class HttpClient {
    constructor(options?: Option);
    buildRequest(rurl: string, data: any | string, exheaders?: { [key: string]: any }, exoptions?: { [key: string]: any }): any;
    handleResponse(req: any, res: any, body: any | string): any | string;
    request(rurl: string, data: any | string, callback: (err: any, res: any, body: any | string) => void, exheaders?: { [key: string]: any }, exoptions?: { [key: string]: any }): any;
    requestStream(rurl: string, data: any | string, exheaders?: { [key: string]: any }, exoptions?: { [key: string]: any }): any;
}
