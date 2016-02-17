// Type definitions for PEG.js
// Project: http://pegjs.majda.cz/
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module PEG {
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
