// Type definitions for gulp-util
// Project: http://gulpjs.com/
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="chalk.d.ts" />

// You can extend IGulpEnvironment locally to bring in environment variables from the cli.
// --production will equate into a boolean on IGulpEnvironment
interface IGulpEnvironment {

}

declare module Gulp {
	interface IFile {
		isBuffer(): boolean;
		isStream(): boolean;
		isNull(): boolean;
		clone(): Gulp.IFile;
		pipe(stream: ReadableStream, options?: { end?: boolean }): ReadableStream;
		inspect(): string;
		relative: string;
		path: string;
		base: string;
		cwd: string;
		contents: any;
		stat?: any;
	}
	
	interface IFileOptions {
        cwd?: string;
        base?: string;
        path?: string;
        stat?: any;
        contents?: any;
    }
}

interface IGulpUtil {
	log(...msg: any[]): void;
    colors: Chalk.IChalk;
    date(date?: Date, format?: string, utc?: boolean): string;
    linefeed: string;
    replaceExtension(path: string, newExtension: string): string;
    isStream(object: any): boolean;
    isBuffer(object: any): boolean;
    template(template: string, data?: any): string;
    File: Gulp.IFile;
    noop(): ReadableStream;
    combine(...streams: ReadableStream[]): Function;
    buffer(cb: Function): void;

    PluginError: {
        new(pluginName: string, message: string, options?: {
            showStack: boolean;
        }): any;
        new(pluginName: string, message: Error, options?: {
            showStack: boolean;
        }): any;
    };

    env: IGulpEnvironment;
}

declare module "gulp-util" {
    import chalk = require("chalk");
    import fs = require("fs");

    export interface IFileOptions {
        cwd?: string;
        base?: string;
        path?: string;
        stat?: fs.Stats;
        contents?: any;
    }

    export interface IFile {
        new (options: IFileOptions): IFile;
        isBuffer(): boolean;
        isStream(): boolean;
        isNull(): boolean;
        clone(): IFile;
        pipe(stream: any, options?: { end?: boolean }): ReadableStream;
        inspect(): string;
        relative: string;
        path: string;
        base: string;
        cwd: string;
        contents: any;
        stat?: fs.Stats;
    }

    export function log(...msg: any[]): void;
    export var colors: Chalk.IChalk;
    export function date(date?: Date, format?: string, utc?: boolean): string;
    export var linefeed: string;
    export function replaceExtension(path: string, newExtension: string): string;
    export function isStream(object: any): boolean;
    export function isBuffer(object: any): boolean;
    export function template(template: string, data?: any): string;
    export var File: IFile;
    export function noop(): ReadableStream;
    export function combine(...streams: ReadableStream[]): Function;
    export function buffer(cb: Function): void;

    export var PluginError: {
        new(pluginName: string, message: string, options?: {
            showStack: boolean;
        }): any;
        new(pluginName: string, message: Error, options?: {
            showStack: boolean;
        }): any;
    };

    export var env: IGulpEnvironment;
}
