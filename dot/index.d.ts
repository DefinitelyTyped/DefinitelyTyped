// Type definitions for doT 1.1
// Project: https://github.com/olado/doT
// Definitions by: ZombieHunter <https://github.com/ZombieHunter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace doT {
	type RenderFunction = (...args: Array<{}>) => string;

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
		template(tmpl: string, c?: TemplateSettings, def?: {}): RenderFunction;

		/**
	* For express
	*/
		compile(tmpl: string, def?: {}): RenderFunction;
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
