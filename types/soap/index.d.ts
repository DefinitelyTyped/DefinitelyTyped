// Type definitions for soap 0.19
// Project: https://www.npmjs.com/package/soap
// Definitions by:  Leo Liang <https://github.com/aleung>
//                  Cage Fox <https://github.com/cagefox>
//                  Onur Yildirim <https://github.com/onury>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

export interface ISOAPMethod {
    (args: any, callback: (err: any, result: any, raw: any, soapHeader: any) => void, options?: any, extraHeaders?: any): void;
}

export interface ISecurity {
    addOptions(options: any): void;
    toXML(): string;
}

export interface IServicePort {
    [methodName: string]: (args:any, callback?: (data: any) => void, headers?: any, req?: any) => any;
}

export interface IService {
    [portName: string]: IServicePort;
}

export interface IServices {
    [serviceName: string]: IService;
}

export interface IXMLAttribute {
    name: string;
    value: string;
}

export interface IWSDLBaseOptions {
    attributesKey?: string;
    valueKey?: string;
    xmlKey?: string;
    overrideRootElement?: { namespace: string; xmlnsAttributes?: IXMLAttribute[]; };
    ignoredNamespaces?: boolean | string[] | { namespaces?: string[]; override?: boolean; };
    ignoreBaseNameSpaces?: boolean;
    escapeXML?: boolean;
    wsdl_headers?: { [key: string]: any };
    wsdl_options?: { [key: string]: any };
}

export interface IOptions extends IWSDLBaseOptions {
    disableCache?: boolean;
    endpoint?: string;
    envelopeKey?: string;
    httpClient?: HttpClient;
    request?: (options: any, callback?: (error: any, res: any, body: any) => void) => void;
    stream?: boolean;
    // wsdl options that only work for client
    forceSoap12Headers?: boolean;
    customDeserializer?: any;
    [key: string]: any;
}

export interface IServerOptions extends IWSDLBaseOptions {
    path: string;
    services: IServices;
    xml?: string;
    uri?: string;
    suppressStack?: boolean;
    [key: string]: any;
}

export class WSDL {
    constructor(definition: any, uri: string, options?: IOptions);
    ignoredNamespaces: string[];
    ignoreBaseNameSpaces: boolean;
    valueKey: string;
    xmlKey: string;
    xmlnsInEnvelope: string;
    onReady(callback: (err:Error) => void): void;
    processIncludes(callback: (err:Error) => void): void;
    describeServices(): { [k: string]: any };
    toXML(): string;
    xmlToObject(xml: any, callback?: (err:Error, result:any) => void): any;
    findSchemaObject(nsURI: string, qname: string): any;
    objectToDocumentXML(name: string, params: any, nsPrefix?: string, nsURI?: string, type?: string): any;
    objectToRpcXML(name: string, params: any, nsPrefix?: string, nsURI?: string, isParts?: any): string;
    isIgnoredNameSpace(ns: string): boolean;
    filterOutIgnoredNameSpace(ns: string): string;
    objectToXML(obj: any, name: string, nsPrefix?: any, nsURI?: string, isFirst?: boolean, xmlnsAttr?: any, schemaObject?: any, nsContext?: any): string;
    processAttributes(child: any, nsContext: any): string;
    findSchemaType(name: any, nsURI: any): any;
    findChildSchemaObject(parameterTypeObj: any, childName: any, backtrace?: any): any;
}

export class Client extends EventEmitter {
    constructor(wsdl: WSDL, endpoint?: string, options?: IOptions);
    addBodyAttribute(bodyAttribute: any, name?: string, namespace?: string, xmlns?: string): void;
    addHttpHeader(name: string, value: any): void;
    addSoapHeader(soapHeader: any, name?: string, namespace?: any, xmlns?: string): number;
    changeSoapHeader(index: number, soapHeader: any, name?: string, namespace?: string, xmlns?: string): void;
    clearBodyAttributes(): void;
    clearHttpHeaders(): void;
    clearSoapHeaders(): void;
    describe(): any;
    getBodyAttributes(): any[];
    getHttpHeaders(): { [k:string]: string };
    getSoapHeaders(): string[];
    setEndpoint(endpoint: string): void;
    setSOAPAction(action: string): void;
    setSecurity(security: ISecurity): void;
    [method: string]: ISOAPMethod | Function;
}

declare function createClient(wsdlPath: string, options: IOptions, fn: (err: any, client: Client) => void): void;

export class Server extends EventEmitter {
    constructor(server: any, path: string, services: IServices, wsdl: WSDL, options: IServerOptions);
    path: string;
    services: IServices;
    wsdl: WSDL;
    addSoapHeader(soapHeader: any, name?: string, namespace?: any, xmlns?: string): number;
    changeSoapHeader(index: any, soapHeader: any, name?: any, namespace?: any, xmlns?: any): void;
    getSoapHeaders(): string[];
    clearSoapHeaders(): void;
    log(type: string, data: any): any;
    authorizeConnection(req: any): boolean;
    authenticate(security: ISecurity): boolean;
}

export function listen(server: any, path: string, service: any, wsdl: string): Server;
export function listen(server: any, options: IServerOptions): Server;

export class HttpClient {
    constructor(options?: IOptions);
    buildRequest(rurl: string, data: any | string, exheaders?: { [key: string]: any }, exoptions?: { [key: string]: any }): any;
    handleResponse(req: any, res: any, body: any | string): any | string;
    request(rurl: string, data: any | string, callback: (err: any, res: any, body: any | string) => void, exheaders?: { [key: string]: any }, exoptions?: { [key: string]: any }): any;
    requestStream(rurl: string, data: any | string, exheaders?: { [key: string]: any }, exoptions?: { [key: string]: any }): any;
}

export class BasicAuthSecurity implements ISecurity {
    constructor(username: string, password: string, defaults?: any);
    addHeaders(headers: any): void;
    addOptions(options: any): void;
    toXML(): string;
}

export class BearerSecurity implements ISecurity {
    constructor(token: string, defaults?: any);
    addHeaders(headers: any): void;
    addOptions(options: any): void;
    toXML(): string;
}

export class WSSecurity implements ISecurity {
    constructor(username: string, password: string, options?: any);
    addOptions(options: any): void;
    toXML(): string;
}

export class WSSecurityCert implements ISecurity {
    constructor(privatePEM: any, publicP12PEM: any, password: any);
    addOptions(options: any): void;
    toXML(): string;
}

export class ClientSSLSecurity implements ISecurity {
    constructor(key: string | Buffer, cert: string | Buffer, ca?: string | any[] | Buffer, defaults?: any);
    constructor(key: string | Buffer, cert: string | Buffer, defaults?: any);
    addOptions(options: any): void;
    toXML(): string;
}

export class ClientSSLSecurityPFX implements ISecurity {
    constructor(pfx: string | Buffer, passphrase: string, defaults?: any);
    constructor(pfx: string | Buffer, defaults?: any);
    addOptions(options: any): void;
    toXML(): string;
}

export function passwordDigest(nonce: string, created: string, password: string): string;

// @onury - Some interfaces are renamed for semantics. We add these for
// backwards compatibility.
export interface Security extends ISecurity {}
export interface SoapMethod extends ISOAPMethod {}
export interface Option extends IOptions {}
