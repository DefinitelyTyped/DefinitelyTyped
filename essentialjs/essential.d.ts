// Type Definitions for EssentialJS
// Project: http://essentialjs.com
// Definitions by: Henrik Vendelbo <https://github.com/thepian/>

/***
 *	A resolver is a function that represents a value. If you call the function it will return the current value. If you call the set method on the function it will change the value.
 *
 *	Resolver constructs a resolver. Call it with the expression you want to track.
 *
 *	- https://github.com/essentialjs/EssentialJS/wiki
 */
declare function Resolver() : any;
declare function Resolver(expr : String) : any;
declare function Resolver(name : String,ns : any) : any;
declare function Resolver(name : String,ns : any, options : any) : any;

declare module Resolver {
	function config(el : Element) : void;
	function config(el : Element,expr : String) : void;	
	function functionProxy(src) : Function;
	function method(name,fn) : void;
	function docMethod(name,fn) : void;
	function exists(name) : Boolean;
	function hasGenerator(subject) : Boolean;

	function getByUniqueID(map,el,forceID) : any;
	function setByUniqueID(map,el,value) : void;

	// angular support
	function angularProvider(name : String,module : any,providerName : String): void;
}

/***
 * A generator is a function that makes instances of a constructor function. You call it without a new keyword. The generator can be configured to pass different parameters and/or always return the same instance.
 *
 * Generator gives you the generator for a constructor. Call it with the constructor function.
 * 
 * - https://github.com/essentialjs/EssentialJS/wiki
 */
declare function Generator(fn) : any; // Function + methods;
declare function Generator(fn,base,extensions) : any; // Function + methods;

/***
 *	The document is enhanced by the Resolver("document")
 *
 *	An enhanced page is an HTML document with Document Resolver. It keeps track of resource dependencies and backend connectivity. It gradually enhances elements on the page depending on the role as resources become available.
 */
interface Document  { //TODO extends HTMLDocument
	essential:any;
}

