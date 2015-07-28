// Type definitions for ngKookes 0.2.0
// Project: https://github.com/voronianski/ngKookies
// Definitions by: Martin McWhorter https://github.com/martinmcwhorter
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module angular.kookies {
	
	type Options = {
		expires?: number|Date, 
		path?: string,
		domain?: string,
		secure?: boolean
		};
	
	interface IKookiesService {
	
		set(name: string, value: string, optopns?: Options): void;
		get(): any;
		get(name: string): any;
		get(name:string, converter: Number): number;
		get(name:string, converter: String): string;
		get(name:string, converter: Boolean): boolean;
		remove(name: string, options?: Options);	
	}
	
	type Config = { raw?: boolean, json?: boolean } 
	
	interface IKookiesProvider {
		
		config: Config;
		setConfig(config: Config);
		defaults: Options;
		setDefaults(options: Options);
	}
	
	
}