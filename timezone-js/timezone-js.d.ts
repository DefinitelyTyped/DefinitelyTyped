// Type definitions for timezone-js
// Project: https://github.com/mde/timezone-js
// Definitions by: bonnici <https://github.com/bonnici>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/timezone-js.d.ts

declare module "timezone-js" {
	export var timezone: TimezoneJs;

	export var Date: {
		new (timezone?: string): TimezoneJsDate;
		new (time: string, timezone?: string): TimezoneJsDate;
		new (year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: string, timezone?: string): TimezoneJsDate;
	};

	export interface TimezoneJsDate extends Date {
		setTimezone: (timezone: string) => void;
	}

	export interface TimezoneJs {
		zoneFileBasePath: string;
		loadingScheme: TimezoneJsLoadingScheme;
		loadingSchemes: TimezoneJsLoadingSchemes;

		transport(opts: TimezoneJsOptions): any;
		init(opts?: TimezoneJsOptions): any;
	}

	export interface TimezoneJsOptions {
		async?: boolean;
		success?: (data: string) => void;
		error?: (err: Error) => void;
		url?: string;
	}

	export interface TimezoneJsLoadingScheme {
	}

	export enum TimezoneJsLoadingSchemes {
		PRELOAD_ALL,
		LAZY_LOAD,
		MANUAL_LOAD
	}
 }
