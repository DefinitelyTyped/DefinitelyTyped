// Type definitions for PEG.js
// Project: http://pegjs.org/
// Definitions by: vvakame <https://github.com/vvakame>, Tobias Kahlert <https://github.com/SrTobi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PEG {
	function parse(input:string):any;

	interface Location {
		line: number;
		column: number;
		offset: number;
	}

	interface LocationRange {
		start: Location,
		end: Location
	}

	class SyntaxError {
		line: number;
		column: number;
		offset: number;
		location: LocationRange;
		expected:any[];
		found:any;
		name:string;
		message:string;
	}
}

export type Location = PEG.Location;
export type LocationRange = PEG.LocationRange;

export interface ExpectedItem {
    type: string;
    value?: string;
    description: string;
}

export interface PegjsError extends Error {
    name: string;
    message: string;
    location: LocationRange;
    found?: any;
    expected?: ExpectedItem[];
    stack?: any;
}

export type GrammarError = PegjsError;
export var GrammarError: any;

export interface ParserOptions {
    startRule: string;
    tracer: any;
}

export interface Parser {
    parse(input: string, options?:ParserOptions): any;

    SyntaxError: any;
}

export interface BuildOptions {
    cache?: boolean;
    allowedStartRules?: string[];
    optimize?: string;
    plugins?: any[];
}

export interface OutputBuildOptions extends BuildOptions {
    output?: string;
}

export function buildParser(grammar: string, options?: BuildOptions): Parser;
export function buildParser(grammar: string, options?: OutputBuildOptions): Parser | string;

export namespace parser {
    type SyntaxError = PegjsError;
    var SyntaxError: any;
}
export as namespace PEG;

