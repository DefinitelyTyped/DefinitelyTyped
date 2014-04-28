// Type definitions for winston
// Project: https://github.com/flatiron/winston
// Definitions by: bonnici <https://github.com/bonnici>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/winston.d.ts

declare module "winston" {
	export function log(level: string, message: string, metadata?: any): void;
	export function debug(message: string, metadata?: any): void;
	export function info(message: string, metadata?: any): void;
	export function warn(message: string, metadata?: any): void;
	export function error(message: string, metadata?: any): void;

	export function add(transport: Transport, options: any): void;
	export function remove(transport: Transport): void;

	export function profile(name: string): void;

	export function query(options: any, done: (err: any, results: any) => void): void;

	export function stream(options: any): any;

	export function handleExceptions(transport: Transport): void;

	export class Logger {

	}

	export interface Transport {
	}
	export interface Transports {
		File: Transport;
		Console: Transport;
		Loggly: Transport;
	}
	export var transports: Transports;
	export var exitOnError: boolean;
}
