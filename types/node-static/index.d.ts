// Type definitions for node-static 0.7
// Project: https://github.com/cloudhead/node-static
// Definitions by: Ben Davies <https://github.com/Morfent>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as events from 'events';
import * as fs from 'fs';
import * as http from 'http';
import * as mime from 'mime';

export interface Headers { [k: string]: any; }
export type Finish = (status: number, headers?: Headers) => void;
export type Callback = (e: Error) => void;

export interface Options {
	headers?: Headers;
	indexFile?: string;
	cache?: number | boolean;
	serverInfo?: Buffer;
	server?: string;
	"cache-control"?: string;
}

export interface ByteRange {
	from: number;
	to: number;
	valid: boolean;
}

export class Server {
	root: string;
	options: Options;
	cache: number | boolean;
	defaultHeaders: Headers;
	serverInfo: string;
	constructor(root: string, options?: Options);

	serveDir: (pathname: string, req: http.ServerRequest, res: http.ServerResponse, finish: Finish) => void;
	serveFile: (pathname: string, status: number, headers: Headers, req: http.ServerRequest, res: http.ServerResponse) => events.EventEmitter;
	finish: (status: number, headers: Headers, req: http.ServerRequest, res: http.ServerResponse, promise: events.EventEmitter, callback: Callback) => void;
	servePath: (pathname: string, status: number, headers: Headers, req: http.ServerRequest, res: http.ServerResponse, finish: Finish) => events.EventEmitter;
	resolve: (pathname: string) => string;
	serve: (req: http.ServerRequest, res: http.ServerResponse, callback: Callback) => events.EventEmitter;
	gzipOk: (req: http.ServerRequest, contentType: string) => boolean;
	respondGzip: (pathname: string, status: number, contentType: string, _headers: Headers, files: string[], stat: fs.Stats, req: http.ServerRequest, res: http.ServerResponse, finish: Finish) => void;
	parseByteRange: (req: http.ServerRequest, stat: fs.Stats) => ByteRange;
	// tslint:disable-next-line max-line-length
	respondNoGzip: (pathname: string, status: number, contentType: string, _headers: Headers, files: string[], stat: fs.Stats, req: http.ServerRequest, res: http.ServerResponse, finish: Finish) => void;
	respond: (pathname: string, status: number, _headers: Headers, files: string[], stat: fs.Stats, req: http.ServerRequest, res: http.ServerResponse, finish: Finish) => void;
	stream: (pathname: string, files: string[], length: number, startByte: number, res: http.ServerResponse, callback: Callback) => void;
}

export const version: [number, number, number];
export {mime};
