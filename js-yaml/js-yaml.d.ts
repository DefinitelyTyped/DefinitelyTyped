// Type definitions for js-yaml 3.0.2
// Project: https://github.com/nodeca/js-yaml
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'js-yaml' {
	export function safeLoad(str: string, opts?: LoadOptions): any;
	export function load(str: string, opts?: LoadOptions): any;

	export function safeLoadAll(str: string, iterator: (doc: any) => void, opts?: LoadOptions): any;
	export function loadAll(str: string, iterator: (doc: any) => void, opts?: LoadOptions): any;

	export function safeDump(obj: any, opts?: DumpOptions): string;
	export function dump(obj: any, opts?: DumpOptions): string

	export interface LoadOptions {
		// string to be used as a file path in error/warning messages.
		filename?: string;
		// makes the loader to throw errors instead of warnings.
		strict?: boolean;
		// specifies a schema to use.
		schema?: any;
	}

	export interface DumpOptions {
		// indentation width to use (in spaces).
		indent?: number;
		// do not throw on invalid types (like function in the safe schema) and skip pairs and single values with such types.
		skipInvalid?: boolean;
		// specifies level of nesting, when to switch from block to flow style for collections. -1 means block style everwhere
		flowLevel?: number;
		// Each tag may have own set of styles.  - "tag" => "style" map.
		styles?: Object;
		// specifies a schema to use.
		schema?: any;
	}

	// only strings, arrays and plain objects: http://www.yaml.org/spec/1.2/spec.html#id2802346
	export var FAILSAFE_SCHEMA: any;
	// only strings, arrays and plain objects: http://www.yaml.org/spec/1.2/spec.html#id2802346
	export var JSON_SCHEMA: any;
	// same as JSON_SCHEMA: http://www.yaml.org/spec/1.2/spec.html#id2804923
	export var CORE_SCHEMA: any;
	// all supported YAML types, without unsafe ones (!!js/undefined, !!js/regexp and !!js/function): http://yaml.org/type/
	export var DEFAULT_SAFE_SCHEMA: any;
	// all supported YAML types.
	export var DEFAULT_FULL_SCHEMA: any;
}
