// Type definitions for http-status v0.2.1
// Project: https://github.com/wdavidw/node-http-status
// Definitions by: Michael Zabka <https://github.com/misak113>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface HttpStatus {
	100: string;
	101: string;
	200: string;
	201: string;
	202: string;
	203: string;
	204: string;
	205: string;
	206: string;
	300: string;
	301: string;
	302: string;
	303: string;
	304: string;
	305: string;
	307: string;
	400: string;
	401: string;
	402: string;
	403: string;
	404: string;
	405: string;
	406: string;
	407: string;
	408: string;
	409: string;
	410: string;
	411: string;
	412: string;
	413: string;
	414: string;
	415: string;
	416: string;
	417: string;
	422: string;
	429: string;
	451: string;
	500: string;
	501: string;
	502: string;
	503: string;
	504: string;
	505: string;
	CONTINUE: number;
	SWITCHING_PROTOCOLS: number;
	OK: number;
	CREATED: number;
	ACCEPTED: number;
	NON_AUTHORITATIVE_INFORMATION: number;
	NO_CONTENT: number;
	RESET_CONTENT: number;
	PARTIAL_CONTENT: number;
	MULTIPLE_CHOICES: number;
	MOVED_PERMANENTLY: number;
	FOUND: number;
	SEE_OTHER: number;
	NOT_MODIFIED: number;
	USE_PROXY: number;
	TEMPORARY_REDIRECT: number;
	BAD_REQUEST: number;
	UNAUTHORIZED: number;
	PAYMENT_REQUIRED: number;
	FORBIDDEN: number;
	NOT_FOUND: number;
	METHOD_NOT_ALLOWED: number;
	NOT_ACCEPTABLE: number;
	PROXY_AUTHENTICATION_REQUIRED: number;
	REQUEST_TIMEOUT: number;
	CONFLICT: number;
	GONE: number;
	LENGTH_REQUIRED: number;
	PRECONDITION_FAILED: number;
	REQUEST_ENTITY_TOO_LARGE: number;
	REQUEST_URI_TOO_LONG: number;
	UNSUPPORTED_MEDIA_TYPE: number;
	REQUESTED_RANGE_NOT_SATISFIABLE: number;
	EXPECTATION_FAILED: number;
	UNPROCESSABLE_ENTITY: number;
	TOO_MANY_REQUESTS: number;
	UNAVAILABLE_FOR_LEGAL_REASONS: number;
	INTERNAL_SERVER_ERROR: number;
	NOT_IMPLEMENTED: number;
	BAD_GATEWAY: number;
	SERVICE_UNAVAILABLE: number;
	GATEWAY_TIMEOUT: number;
	HTTP_VERSION_NOT_SUPPORTED: number
}

declare var httpStatus: HttpStatus;

declare module 'http-status' {
	export = httpStatus;
}
