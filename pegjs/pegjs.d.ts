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

declare module "pegjs" {

    type Location = PEG.Location;
    type LocationRange = PEG.LocationRange;

    interface ExpectedItem {
        type: string;
        value?: string;
        description: string;
    }

    interface PegjsError extends Error {
        name: string;
        message: string;
        location: LocationRange;
        found?: any;
        expected?: ExpectedItem[];
        stack?: any;
    }

    type GrammarError = PegjsError;
    var GrammarError: any;

    interface ParserOptions {
        startRule: string;
        tracer: any;
    }

    interface Parser {
        parse(input: string, options?:ParserOptions): any;

        SyntaxError: any;
    }

    interface BuildOptions {
        cache?: boolean;
        allowedStartRules?: string[];
        optimize?: string;
        plugins?: any[];
    }

    interface OutputBuildOptions extends BuildOptions {
        output?: string;
    }

    function buildParser(grammar: string, options?: BuildOptions): Parser;
    function buildParser(grammar: string, options?: OutputBuildOptions): Parser | string;

    namespace parser {
        type SyntaxError = PegjsError;
        var SyntaxError: any;
    }
}
