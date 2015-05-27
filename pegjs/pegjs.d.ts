// Type definitions for PEG.js
// Project: http://pegjs.majda.cz/
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module PEG {
	function parse(input:string):any;

	class SyntaxError {
		line:number;
		column:number;
		offset:number;

		expected:any[];
		found:any;
		name:string;
		message:string;
	}
}
