// Type definitions for Formidable 1.0.16
// Project: https://github.com/felixge/node-formidable/
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "formidable" {
	import http = require("http");
	import stream = require("stream");
	import events = require("events");

	export class IncomingForm extends events.EventEmitter {
		encoding: string;
		uploadDir: string;
		keepExtensions: boolean;
		maxFieldsSize: number;
		maxFields: number;
		hash: string | boolean;
		multiples: boolean;
		type: string;
		bytesReceived: number;
		bytesExpected: number;

		onPart: (part: Part) => void;

		handlePart(part: Part): void;
		parse(req: http.IncomingMessage, callback?: (err: any, fields: Fields, files: Files) => any): void;
	}

	export interface Fields {
		[key: string]: string;
	}

	export interface Files {
		[key: string]: File; // | File[];
	}

	export interface Part extends stream.Stream {
		headers: { [key: string]: string };
		name: string;
		filename?: string;
		mime?: string;
	}

	export interface File {
		size: number;
		path: string;
		name: string;
		type: string;
		lastModifiedDate?: Date;
		hash?: string;

		toJSON(): Object;
	}
}
