// Type definitions for @pollyjs/core 1.3
// Project: https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/core
// Definitions by: feinoujc <https://github.com/feinoujc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { MODES } from '@pollyjs/utils';
import Adapter from '@pollyjs/adapter';
import Persister from '@pollyjs/persister';

export const Timing: {
	fixed(ms: number): () => Promise<void>;
	relative(ratio: number): (ms: number) => Promise<void>;
};

export type MatchBy<T = string, R = T> = (input: T) => R;
export interface PollyConfig {
	mode?: MODES | string;

	adapters?: Array<string | typeof Adapter>;
	adapterOptions?: any;

	persister?: string | typeof Persister;
	persisterOptions?: {
		keepUnusedRequests?: boolean;
		[key: string]: any;
	};

	logging?: boolean;

	recordIfMissing?: boolean;
	recordIfExpired?: boolean;
	recordFailedRequests?: boolean;

	expiresIn?: string | null;
	timing?: ((ms: number) => Promise<void>) | (() => Promise<void>);

	matchRequestsBy?: {
		method?: boolean | MatchBy;
		headers?: boolean | { exclude: string[] } | MatchBy<Record<string, string>>;
		body?: boolean | MatchBy<any>;
		order?: boolean;

		url?: {
			protocol?: boolean | MatchBy;
			username?: boolean | MatchBy;
			password?: boolean | MatchBy;
			hostname?: boolean | MatchBy;
			port?: boolean | MatchBy<number>;
			pathname?: boolean | MatchBy;
			query?: boolean | MatchBy<any>;
			hash?: boolean | MatchBy;
		};
	};
}
export interface Request {
	getHeader(name: string): string | null;
	setHeader(name: string, value: string): Request;
	setHeaders(headers: any): Request;
	hasHeader(name: string): boolean;
	type(contentType: string): Request;
	send(body: any): Request;
	json(body: any): Request;
	jsonBody(): any;

	method: string;
	url: string;
	protocol: string;
	hostname: string;
	port: string;
	pathname: string;
	hash: string;
	headers: Record<string, string>;
	body: any;
	query: any;
	params: any;
	recordingName: string;
	responseTime?: number;
}
export interface Response {
	statusCode?: number;
	headers: Record<string, string>;
	body: any;
	status(status: number): Response;
	getHeader(name: string): string | null;
	setHeader(name: string, value: string): Response;
	setHeaders(headers: any): Response;
	hasHeader(name: string): boolean;
	type(contentType: string): Response;
	send(body: any): Response;
	sendStatus(status: number): Response;
	json(body: any): Response;
	jsonBody(): any;
	end(): Readonly<Response>;
}
export interface Intercept {
	abort(): void;
	passthrough(): void;
}
export type RequestRouteEvent = 'request';
export type RecordingRouteEvent = 'beforeReplay' | 'beforePersist';
export type ResponseRouteEvent = 'beforeResponse' | 'response';

export type EventListenerResponse = any;
export type RequestEventListener = (req: Request) => EventListenerResponse;
export type RecordingEventListener = (req: Request, recording: any) => EventListenerResponse;
export type ResponseEventListener = (req: Request, res: Response) => EventListenerResponse;
export type InterceptHandler = (
	req: Request,
	res: Response,
	intercept: Intercept
) => EventListenerResponse;
export class RouteHandler {
	on(event: RequestRouteEvent, listener: RequestEventListener): RouteHandler;
	on(event: RecordingRouteEvent, listener: RecordingEventListener): RouteHandler;
	on(event: ResponseRouteEvent, listener: ResponseEventListener): RouteHandler;
	off(event: RequestRouteEvent, listener: RequestEventListener): RouteHandler;
	off(event: RecordingRouteEvent, listener: RecordingEventListener): RouteHandler;
	off(event: ResponseRouteEvent, listener: ResponseEventListener): RouteHandler;
	once(event: RequestRouteEvent, listener: RequestEventListener): RouteHandler;
	once(event: RecordingRouteEvent, listener: RecordingEventListener): RouteHandler;
	once(event: ResponseRouteEvent, listener: ResponseEventListener): RouteHandler;

	passthrough(value?: boolean): RouteHandler;
	intercept(
		fn: (req: Request, res: Response, intercept: Intercept) => EventListenerResponse
	): RouteHandler;
	recordingName(recordingName: string): RouteHandler;
	configure(config: PollyConfig): RouteHandler;
}
export class PollyServer {
	timeout: (ms: number) => Promise<void>;
	get: (...args: any[]) => RouteHandler;
	put: (...args: any[]) => RouteHandler;
	post: (...args: any[]) => RouteHandler;
	delete: (...args: any[]) => RouteHandler;
	patch: (...args: any[]) => RouteHandler;
	head: (...args: any[]) => RouteHandler;
	options: (...args: any[]) => RouteHandler;
	any: (...args: any[]) => RouteHandler;
	host(host: string, callback: () => void): void;
	namespace(path: string, callback: () => void): void;
}
export type PollyEvent = 'create' | 'stop' | 'register';
export type PollyEventListener = (poll: Polly) => void;
export class Polly {
	static register(Factory: typeof Adapter | typeof Persister): void;
	static on(event: PollyEvent, listener: PollyEventListener): void;
	static off(event: PollyEvent, listener: PollyEventListener): void;
	static once(event: PollyEvent, listener: PollyEventListener): void;

	constructor(name: string, options?: PollyConfig);

	readonly recordingName: string | null;
	mode: MODES;
	server: PollyServer;
	persister: Persister;

	pause: () => void;
	play: () => void;
	replay: () => void;
	record: () => void;
	stop: () => Promise<void>;
	flush: () => Promise<void>;
	configure(config: PollyConfig): void;
	connectTo(name: string | typeof Adapter): void;
	disconnectFrom(name: string | typeof Adapter): void;
	disconnect(): void;
}
