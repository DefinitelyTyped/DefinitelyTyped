// Type definitions for argparse v1.0.3
// Project: https://github.com/nodeca/argparse
// Definitions by: Andrew Schurman <http://github.com/arcticwaters>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "argparse" {
	export class ArgumentParser extends ArgumentGroup {
		constructor(options? : ArgumentParserOptions);

		addSubparsers(options? : SubparserOptions) : SubParser;
		parseArgs(args? : string[], ns? : Namespace|Object) : any;
		printUsage() : void;
		printHelp() : void;
		formatUsage() : string;
		formatHelp() : string;
		parseKnownArgs(args? : string[], ns? : Namespace|Object) : any[];
		convertArgLineToArg(argLine : string) : string[];
		exit(status : number, message : string) : void;
		error(err : string|Error) : void;
	}
	
	interface Namespace {}
	
	class SubParser {
		addParser(name : string, options? : SubArgumentParserOptions) : ArgumentParser;
	}
	
	class ArgumentGroup {
		addArgument(args : string[], options? : ArgumentOptions) : void;
		addArgumentGroup(options? : ArgumentGroupOptions) : ArgumentGroup;
		addMutuallyExclusiveGroup(options? : {required : boolean}) : ArgumentGroup;
		setDefaults(options? : {}) : void;
		getDefault(dest : string) : any;
	}
	
	interface SubparserOptions {
		title? : string;
		description? : string;
		prog? : string;
		parserClass? : {new() : any};
		action? : string;
		dest? : string;
		help? : string;
		metavar? : string;
	}
	
	interface SubArgumentParserOptions extends ArgumentParserOptions {
		aliases? : string[];
		help? : string;
	}
	
	interface ArgumentParserOptions {
		description? : string;
		epilog? : string;
		addHelp? : boolean;
		argumentDefault? : any;
		parents? : ArgumentParser[];
		prefixChars? : string;
		formatterClass? : {new() : HelpFormatter|ArgumentDefaultsHelpFormatter|RawDescriptionHelpFormatter|RawTextHelpFormatter};
		prog? : string;
		usage? : string;
		version? : string;
	}
	
	interface ArgumentGroupOptions {
		prefixChars? : string;
		argumentDefault? : any;
		title? : string;
		description? : string;
	}

	export class HelpFormatter {} 	
	export class ArgumentDefaultsHelpFormatter {}
	export class RawDescriptionHelpFormatter {}
	export class RawTextHelpFormatter {}

	interface ArgumentOptions {
		action? : string;
		optionStrings? : string[];
		dest? : string;
		nargs? : string|number;
		constant? : any;
		defaultValue? : any;
		type? : string|Function;
		choices? : string|string[];
		required? : boolean;
		help? : string;
		metavar? : string;
	}
}
