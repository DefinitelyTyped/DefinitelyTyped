// Type definitions for Traceback v0.3.1
// Project: https://github.com/iriscouch/traceback
// Definitions by: Michael Zabka <https://github.com/misak113>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Traceback {
	name: string; // | The function name
	path: string; // | The absolute path of the file defining the function
	file: string; // | The basename of the path file ("example.js")
	line: number; // | The line number in the file
	col: number; // | The column number in the file
	pos: number; // | The byte position in the file
	fun: any; // | The function itself
	method: string; // | If this function was called as a method, the name it is stored as
	this: any; // | The object bound to the label this in the function
	type: string; // | The type of this; the name of the constructor function (Object, ReadStream, etc.)
	origin: any; // | The CallSite that ran eval(), if this frame is an eval
	is_top: boolean; // | Boolean indicating whether the function was called with a global this
	is_eval: boolean; // | Boolean indicating whether the function comes from an eval() call
	is_native: boolean; // | Boolean indicating whether the function is native
	is_ctor: boolean; // | Boolean indicating whether this is a constructor (new) call
}

interface TracebackStatic {
	(): Traceback[];
}

declare var traceback: TracebackStatic;

declare module "traceback" {
	export = traceback;
}
