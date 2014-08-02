// Type definitions for imagemagick
// Project: http://github.com/rsms/node-imagemagick
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/imagemagick.d.ts

/// <reference path="../node/node.d.ts" />

declare module "imagemagick" {
	import child_process = require("child_process");

	export function identify(path: string, callback: (err: Error, features: Features) => void): child_process.ChildProcess;
	export function identify(path: any[], callback: (err: Error, result: string) => void): child_process.ChildProcess;
	export module identify {
		export var path: string;
	}
	export function readMetadata(path: string, callback: (err: Error, result: any) => void): child_process.ChildProcess;

	export function convert(args: any, callback: (err: Error, result: any) => void): child_process.ChildProcess;
	export function convert(args: any, timeout: number, callback: (err: Error, result: any) => void): child_process.ChildProcess;
	export module convert {
		export var path: string;
	}

	export function resize(options: Options, callback: (err: Error, result: any) => void): child_process.ChildProcess;
	export function crop(options: Options, callback: (err: Error, result: any) => void): child_process.ChildProcess;
	export function resizeArgs(options: Options): ResizeArgs;

	export interface Features {
		format?: string;
		width?: number;
		height?: number;
		depth?: number;
	}

	export interface Options {
		srcPath?: string; //: null,
		srcData?: string; //: null,
		srcFormat?: string; //: null,
		dstPath?: string; //: null,
		quality?: number; //: 0.8,
		format?: string; //: 'jpg',
		progressive?: boolean; //: false,
		colorspace?: any; //: null,
		width?: number; //: 0,
		height?: number; //: 0,
		strip?: boolean; //: true,
		filter?: string; //: 'Lagrange',
		sharpening?: number; //: 0.2,
		customArgs?: any[]; //: [],
		timeout?: number; //: 0
	}

	export interface ResizeArgs {
		opt: Options;
		args: string[];
	}
}
