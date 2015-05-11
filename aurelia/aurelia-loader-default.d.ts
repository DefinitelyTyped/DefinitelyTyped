// Type definitions for aurelia-loader-default v0.7.0 
// Project: https://github.com/aurelia/
// Definitions by: Mike Graham <https://github.com/cmichaelgraham>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module 'aurelia-loader-default/index' {
	import { Loader } from 'aurelia-loader';
	export class DefaultLoader extends Loader {
	    moduleRegistry: any;
	    constructor();
	    loadModule(id: any): any;
	    loadAllModules(ids: any): Promise<any[]>;
	    loadTemplate(url: any): any;
	}

}
declare module 'aurelia-loader-default' {
	export * from 'aurelia-loader-default/index';
}
