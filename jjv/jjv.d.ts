// Type definitions for JJV v1.0.2
// Project: https://github.com/acornejo/jjv
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "jjv" {
	function jjv(): jjv.Env;

	module jjv {
		interface Errors {
			validation: {
				[property: string]: {
					required?: boolean;
					type?: string;
				}
			};
		}

		interface Options {
			checkRequired?: boolean;
			useDefault?: boolean;
			useCoerce?: boolean;
			removeAdditional?: boolean;
		}

		interface Env {
			defaultOptions: Options;

			addSchema(name: string, schema: Object): void;

			addType(name: string, parse: (input: any) => any): void;
			addFormat(name: string, parse: (input: any) => any): void;
			addCheck(name: string, check: (input: any, comparator: any) => any): void;
			addTypeCoercion(name: string, coerce: (input: any) => any): void;

			validate(name: string, object: any, options?: Options): Errors;
			validate(schema: Object, object: any, options?: Options): Errors;
		}
	}

	export = jjv;
}
