// Type definitions for Minimatch
// Project: https://github.com/isaacs/minimatch
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "minimatch" {

	function M(target:string, pattern:string, options?:M.IOptions):void;

	module M {
		function match(filenames:string[], pattern:string, options?:IOptions):string[];
		function filter(pattern:string, options?:IOptions): (target: string) => boolean;

		var Minimatch:IMinimatchStatic;

		interface IOptions {
			debug?:boolean;
			nobrace?:boolean;
			noglobstar?:boolean;
			dot?:boolean;
			noext?:boolean;
			nocase?:boolean;
			nonull?:boolean;
			matchBase?:boolean;
			nocomment?:boolean;
			nonegate?:boolean;
			flipNegate?:boolean;
		}

		interface IMinimatchStatic {
			new (pattern:string, options?:IOptions):IMinimatch;
		}

		interface IMinimatch {
			debug():void;
			make():void;
			parseNegate():void;
			braceExpand(pattern:string, options:IOptions):void;
			parse(pattern:string, isSub?:boolean):void;
			makeRe():RegExp; // regexp or boolean
			match(file:string):boolean;
			matchOne(files:string[], pattern:string[], partial:any):boolean;
		}
	}

export = M;
}
