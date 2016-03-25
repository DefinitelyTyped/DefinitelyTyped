// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare namespace Electron {

	class RequestFileJob {
		/**
		* Create a request job which would query a file of path and set corresponding mime types.
		*/
		constructor(path: string);
	}

	class RequestStringJob {
		/**
		* Create a request job which sends a string as response.
		*/
		constructor(options?: {
			/**
			* Default is "text/plain".
			*/
			mimeType?: string;
			/**
			* Default is "UTF-8".
			*/
			charset?: string;
			data?: string;
		});
	}

	class RequestBufferJob {
		/**
		* Create a request job which accepts a buffer and sends a string as response.
		*/
		constructor(options?: {
			/**
				* Default is "application/octet-stream".
				*/
			mimeType?: string;
			/**
				* Default is "UTF-8".
				*/
			encoding?: string;
			data?: Buffer;
		});
	}

	interface Protocol {
		registerProtocol(scheme: string, handler: (request: any) => void): void;
		unregisterProtocol(scheme: string): void;
		isHandledProtocol(scheme: string): boolean;
		interceptProtocol(scheme: string, handler: (request: any) => void): void;
		uninterceptProtocol(scheme: string): void;
		RequestFileJob: typeof RequestFileJob;
		RequestStringJob: typeof RequestStringJob;
		RequestBufferJob: typeof RequestBufferJob;
	}
}
