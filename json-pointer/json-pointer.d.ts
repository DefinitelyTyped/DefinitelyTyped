// Type definitions for json-pointer 1.0 l
// Project: https://www.npmjs.org/package/json-pointer
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "json-pointer" {
	function JSON_Pointer(object: Object): JSON_Pointer.JSON_PointerWrap;

	module JSON_Pointer {
		/**
		 *  Wrap an object with accessors
		 */
		/**
		 *  Looks up a JSON pointer in an object.
		 */
		function get(object: Object, pointer: string): any;
		/**
		 *  Set a value for a JSON pointer on object.
		 */
		function set(object: Object, pointer: string, value: any): void;
		/**
		 *  Removes an attribute of object referenced by pointer
		 */
		function remove(object: Object, pointer: string): void;
		/**
		 *  Creates a dictionary object (pointer -> value).
		 */
		function dict(object: Object): Object;
		/**
		 *  Just like: each(pointer.dict(obj), iterator);
		 */
		function walk(object: Object, iterator: (value: any, key: string) =>  void): void;
		/**
		 *  Tests if an object has a value for a JSON pointer.
		 */
		function has(object: Object, pointer: string): boolean;
		/**
		 *  Escapes a reference token.
		 */
		function escape(str: string): string;
		/**
		 *  Unescape a reference token.
		 */
		function unescape(str: string): string;
		/**
		 *  Converts a JSON pointer into an array of reference tokens.
		 */
		function parse(str: string): string[];
		/**
		 *  Builds a json pointer from an array of reference tokens.
		 */
		function compile(str: string[]): string;

		interface JSON_PointerWrap {
			/**
			 *  Looks up a JSON pointer in an object.
			 */
			get(pointer: string): any;
			/**
			 *  Set a value for a JSON pointer on object.
			 */
			set(pointer: string, value: any): void;
			/**
			 *  Removes an attribute of object referenced by pointer
			 */
			remove(pointer: string): void;
			/**
			 *  Creates a dictionary object (pointer -> value).
			 */
			dict(): Object;
			/**
			 *  Just like: each(pointer.dict(obj), iterator);
			 */
			walk(iterator: (value: any, key: string) =>  void): void;
			/**
			 *  Tests if an object has a value for a JSON pointer.
			 */
			has(pointer: string): boolean;
		}
	}

	export = JSON_Pointer;
}
