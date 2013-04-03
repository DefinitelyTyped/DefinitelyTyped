//     require-2.1.1.d.ts
//     (c) 2012 Josh Baldwin
//     require.d.ts may be freely distributed under the MIT license.
//     For all details and documentation:
//     https://github.com/jbaldwin/require.d.ts

interface RequireShim {

	// List of dependencies.
	deps?: string[];

	// Name the module will be exported as.
	exports?: string;

	// Initialize function with all dependcies passed in,
	// if the function returns a value then that value is used
	// as the module export value instead of the object
	// found via the 'exports' string.
	init?: (...dependencies: any[]) => any;
}

interface RequireConfig {

	// The root path to use for all module lookups.
	baseUrl?: string;

	// Path mappings for module names not found directly under 
	// baseUrl.
	paths?: { [key: string]: string; };

	// Dictionary of Shim's.
	// does not cover case of key->string[]
	shim?: { [key: string]: RequireShim;  };

	/**
	* For the given module prefix, instead of loading the
	* module with the given ID, substitude a different
	* module ID.
	*
	* @example
	* requirejs.config({
	*	map: {
	*		'some/newmodule': {
	*			'foo': 'foo1.2'
	*		},
	*		'some/oldmodule': {
	*			'foo': 'foo1.0'
	*		}
	*	}
	* });
	**/
	map?: { 
		[id: string]: {
			[id: string]: string;
		};
	};

	// AMD configurations, use module.config() to access in
	// define() functions
	config?: { [id: string]: { }; };

	// Configures loading modules from CommonJS packages.
	packages?: { };

	// The number of seconds to wait before giving up on loading
	// a script.  The default is 7 seconds.
	waitSeconds?: number;

	// A name to give to a loading context.  This allows require.js
	// to load multiple versions of modules in a page, as long as
	// each top-level require call specifies a unique context string.
	context?: string;

	// An array of dependencies to load.
	deps?: string[];

	// A function to pass to require that should be require after
	// deps have been loaded.
	callback?: (...modules: any[]) => void;

	// If set to true, an error will be thrown if a script loads
	// that does not call define() or have shim exports string
	// value that can be checked.
	enforceDefine?: bool;

	// If set to true, document.createElementNS() will be used
	// to create script elements.
	xhtml?: bool;

	/**
	* Extra query string arguments appended to URLs that RequireJS
	* uses to fetch resources.  Most useful to cachce bust when
	* the browser or server is not configured correcty.
	*
	* @example
	* urlArgs: "bust= + (new Date()).getTime()
	**/
	urlArgs?: string;

	/**
	* Specify the value for the type="" attribute used for script
	* tags inserted into the document by RequireJS.  Default is
	* "text/javascript".  To use Firefox's JavasScript 1.8
	* features, use "text/javascript;version=1.8".
	**/
	scriptType?: string;

}

// not sure what to do with this guy
interface RequireModule {


	config(): { };

}

interface RequireMap {
	prefix: string;
	name: string;
	parentMap: RequireMap;
	url: string;
	originalName: string;
	fullName: string;
}

interface Require {	

	// Configure require.js
	config(config: RequireConfig): void;

	// Start the main app logic.
	// Callback is optional.
	// Can alternatively use deps and callback.
	(module: string): any;
	(modules: string[], ready?: (...modules: any[]) => void, errorCallback?: (err : RequireError) => void): void;

	// Generate URLs from require module
	toUrl(module: string): string;

	// On Error override
	onError(): void;

	// Undefine a module
	undef(module: string): void;

	// Semi-private function, overload in special instance of undef()
	onResourceLoad(context: Object, map: RequireMap, depArray: RequireMap[]): void;
}

interface RequireError
{
	requireType: string;
	requireModules: string[];
	originalError?: string;
	contextName? : string;
	requireMap?: any;
}

interface RequireDefine {

	/**
	* Define Simple Name/Value Pairs
	* @config Dictionary of Named/Value pairs for the config.
	**/
	(config: { [key: string]: any; }): void;

	/**
	* Define function.
	* @func: The function module.
	**/
	(func: () => any): void;

	/**
	* Define function with dependencies.
	* @deps List of dependencies module IDs.
	* @ready Callback function when the dependencies are loaded.
	*	@deps module dependencies
	*	@return module definition
	**/
	(deps: string[], ready: (...deps: any[]) => any): void;

	/**
	*  Define module with simplified CommonJS wrapper.
	* @ready
	*	@require requirejs instance
	*	@exports exports object
	*	@module module
	*	@return module definition
	**/
	(ready: (require: Require, exports: { [key: string]: any; }, module: RequireModule) => any): void;

	/**
	* Define a module with a name and dependencies.
	* @name The name of the module.
	* @deps List of dependencies module IDs.
	* @ready Callback function when the dependencies are loaded.
	*	@deps module dependencies
	*	@return module definition
	**/
	(name: string, deps: string[], ready: (...deps: any[]) => any): void;
}

// Ambient declarations for 'require' and 'define'
declare var require: Require;
declare var requirejs: Require;
declare var req: Require;
declare var define: RequireDefine;