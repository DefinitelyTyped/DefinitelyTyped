// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare namespace Electron {
	/**
	 * The protocol module can register a custom protocol or intercept an existing protocol.
	 */
	interface Protocol {
		/**
		 * Registers custom schemes as standard schemes.
		 */
		registerStandardSchemes(schemes: string[]): void;
		/**
		 * Registers custom schemes to handle service workers.
		 */
		registerServiceWorkerSchemes(schemes: string[]): void;
		/**
		 * Registers a protocol of scheme that will send the file as a response.
		 */
		registerFileProtocol(scheme: string, handler: (request: ProtocolRequest, callback: FileProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Registers a protocol of scheme that will send a Buffer as a response.
		 */
		registerBufferProtocol(scheme: string, handler: (request: ProtocolRequest, callback: BufferProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Registers a protocol of scheme that will send a String as a response.
		 */
		registerStringProtocol(scheme: string, handler: (request: ProtocolRequest, callback: StringProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Registers a protocol of scheme that will send an HTTP request as a response.
		 */
		registerHttpProtocol(scheme: string, handler: (request: ProtocolRequest, callback: HttpProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Unregisters the custom protocol of scheme.
		 */
		unregisterProtocol(scheme: string, completion?: (error: Error) => void): void;
		/**
		 * The callback will be called with a boolean that indicates whether there is already a handler for scheme.
		 */
		isProtocolHandled(scheme: string, callback: (handled: boolean) => void): void;
		/**
		 * Intercepts scheme protocol and uses handler as the protocol’s new handler which sends a file as a response.
		 */
		interceptFileProtocol(scheme: string, handler: (request: ProtocolRequest, callback: FileProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Intercepts scheme protocol and uses handler as the protocol’s new handler which sends a String as a response.
		 */
		interceptStringProtocol(scheme: string, handler: (request: ProtocolRequest, callback: BufferProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Intercepts scheme protocol and uses handler as the protocol’s new handler which sends a Buffer as a response.
		 */
		interceptBufferProtocol(scheme: string, handler: (request: ProtocolRequest, callback: StringProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Intercepts scheme protocol and uses handler as the protocol’s new handler which sends a new HTTP request as a response.
		 */
		interceptHttpProtocol(scheme: string, handler: (request: ProtocolRequest, callback: HttpProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Remove the interceptor installed for scheme and restore its original handler.
		 */
		uninterceptProtocol(scheme: string, completion?: (error: Error) => void): void;
	}

	type ProtocolRequest = {
		url: string;
		referrer: string;
		method: string;
		uploadData?: {
			bytes: Buffer,
			file: string
		}[];
	}

	interface ProtocolCallback {
		(error: number): void;
		(obj: {
			error: number
		}): void;
		(): void;
	}

	interface FileProtocolCallback extends ProtocolCallback {
		(filePath: string): void;
		(obj: {
			path: string
		}): void;
	}

	interface BufferProtocolCallback extends ProtocolCallback {
		(buffer: Buffer): void;
		(obj: {
			data: Buffer,
			mimeType: string,
			charset?: string
		}): void;
	}

	interface StringProtocolCallback extends ProtocolCallback {
		(str: string): void;
		(obj: {
			data: Buffer,
			mimeType: string,
			charset?: string
		}): void;
	}

	interface HttpProtocolCallback extends ProtocolCallback {
		(redirectRequest: {
			url: string;
			method: string;
			session?: Object;
			uploadData?: {
				contentType: string;
				data: string;
			};
		}): void;
	}
}
