// Type definitions for JJVE v0.4.0
// Project: https://github.com/silas/jjve
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jjv/jjv.d.ts" />

declare module 'jjve' {
	import jjv  = require('jjv');

	function jjve(jjv: jjv.Env): jjve.Env;
	namespace jjve {
		interface Issue {
			code: string;
			message: string;
			data: any;
			path: string;
		}

		interface Env {
			(schema: Object, data: any, errors: jjv.Errors): Issue[];
		}
	}

	export = jjve;
}
