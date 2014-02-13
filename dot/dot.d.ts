// Type definitions for doT v1.0.1
// Project: https://github.com/olado/doT
// Definitions by: ZombieHunter <https://github.com/ZombieHunter>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var doT: doT.doTStatic;

declare module doT {

	interface doTStatic {
		/**
	* Version number
	*/
		version: string;
		/**
	* Default template settings
	*/
		templateSettings: TemplateSettings;

		/**
	* Compile template
	*/
		template(tmpl: string, c?: TemplateSettings, def?: Object): Function;

		/**
	* For express
	*/
		compile(tmpl: string, def?: Object): Function;
	}

	interface TemplateSettings {
		evaluate: RegExp;
		interpolate: RegExp;
		encode: RegExp;
		use: RegExp;
		useParams: RegExp;
		define: RegExp;
		defineParams: RegExp;
		conditional: RegExp;
		iterate: RegExp;
		varname: string;
		strip: boolean;
		append: boolean;
		selfcontained: boolean;
	}
}

interface String {
	encodeHTML(): string;
}