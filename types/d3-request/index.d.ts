// Type definitions for D3JS d3-request module 1.0
// Project: https://github.com/d3/d3-request/
// Definitions by: Hugues Stefanski <https://github.com/Ledragon>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.0.2

import { DSVParsedArray, DSVRowString, DSVRowAny } from 'd3-dsv';

export interface Request {
    abort(): this;

    get(): this;
    get<RequestData>(data: RequestData): this;
    get<ResponseData>(callback: (error: any, d: ResponseData) => void): this;
    get<RequestData, ResponseData>(data: RequestData, callback: (error: any, d: ResponseData) => void): this;

    header(name: string): string;
    header(name: string, value: string | null): this;

    mimeType(): string | null;
    mimeType(value: string | null): this;

    on(type: 'beforesend'): (this: this, xhr: XMLHttpRequest) => void;
    on(type: 'progress'): (this: this, progressEvent: ProgressEvent) => void;
    on(type: 'error'): (this: this, error: any) => void;
    on<ResponseData>(type: 'load'): (this: this, data: ResponseData) => void;
    on(type: string): (this: this, data: any) => void;
    on(type: string, listener: null): this;
    on(type: 'beforesend', listener: (this: this, xhr: XMLHttpRequest) => void): this;
    on(type: 'progress', listener: (this: this, progressEvent: ProgressEvent) => void): this;
    on(type: 'error', listener: (this: this, error: any) => void): this;
    on<ResponseData>(type: 'load', listener: (this: this, data: ResponseData) => void): this;
    on(type: string, listener: (this: this, data: any) => void): this;

    password(): string | null;
    password(value: string): this;

    post(): this;
    post<RequestData>(data: RequestData): this;
    post<ResponseData>(callback: (this: this, error: any, d: ResponseData) => void): this;
    post<RequestData, ResponseData>(data: RequestData, callback: (this: this, error: any, d: ResponseData) => void): this;

    response<ResponseData>(callback: (this: this, response: XMLHttpRequest) => ResponseData): this;

    responseType(): string | null;
    responseType(value: string): this;

    send(method: string): this;
    send<RequestData>(method: string, data: RequestData): this;
    send<ResponseData>(method: string, callback: (this: this, error: any | null, d: ResponseData | null) => void): this;
    send<RequestData, ResponseData>(method: string, data: RequestData, callback: (this: this, error: any | null, d: ResponseData | null) => void): this;

    timeout(): number;
    timeout(value: number): this;

    user(): string | null;
    user(value: string): this;
}

export interface DsvRequest extends Request {
    row<ParsedRow extends DSVRowAny>(value: (rawRow: DSVRowString, index: number, columns: string[]) => ParsedRow): DsvRequest;
}

export function csv(url: string): DsvRequest;
export function csv(url: string, callback: (this: DsvRequest, error: any, d: DSVParsedArray<DSVRowString>) => void): DsvRequest;
export function csv<ParsedRow extends DSVRowAny>(
    url: string,
    row: (rawRow: DSVRowString, index: number, columns: string[]) => ParsedRow,
    callback: (this: DsvRequest, error: any, d: DSVParsedArray<ParsedRow>) => void
): DsvRequest;

export function html(url: string): Request;
export function html(url: string, callback: (this: Request, error: any, d: DocumentFragment) => void): Request;

export function json(url: string): Request;
export function json<ParsedObject extends { [key: string]: any }>(url: string, callback: (this: Request, error: any, d: ParsedObject) => void): Request;

export function request(url: string): Request;
export function request(url: string, callback: (this: Request, error: any, d: XMLHttpRequest) => void): Request;

export function text(url: string): Request;
export function text(url: string, callback: (this: Request, error: any, d: string) => void): Request;

export function tsv(url: string): DsvRequest;
export function tsv(url: string, callback: (this: DsvRequest, error: any, d: DSVParsedArray<DSVRowString>) => void): DsvRequest;
export function tsv<ParsedRow extends DSVRowAny>(
    url: string,
    row: (rawRow: DSVRowString, index: number, columns: string[]) => ParsedRow,
    callback: (this: DsvRequest, error: any, d: DSVParsedArray<ParsedRow>) => void
): DsvRequest;

export function xml(url: string): Request;
export function xml(url: string, callback: (this: Request, error: any, d: any) => void): Request;
