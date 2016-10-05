// Type definitions for humps v1.1.0
// Project: https://github.com/domchristie/humps
// Definitions by: Niklas Mollenhauer <https://github.com/nikeee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace humps {

	function camelize(value: string): string;
	function pascalize(value: string): string;
	function decamelize(value: string, optionsOrProcessor?: OptionOrProcessor): string;
	function depascalize(value: string, optionsOrProcessor?: OptionOrProcessor): string;

	function camelizeKeys(str: Object, optionsOrProcessor?: OptionOrProcessor): Object;
	function pascalizeKeys(str: Object, optionsOrProcessor?: OptionOrProcessor): Object;
	function decamelizeKeys(str: Object, optionsOrProcessor?: OptionOrProcessor): Object;
	function depascalizeKeys(str: Object, optionsOrProcessor?: OptionOrProcessor): Object;

	function camelizeKeys(str: Object[], optionsOrProcessor?: OptionOrProcessor): Object[];
	function pascalizeKeys(str: Object[], optionsOrProcessor?: OptionOrProcessor): Object[];
	function decamelizeKeys(str: Object[], optionsOrProcessor?: OptionOrProcessor): Object[];
	function depascalizeKeys(str: Object[], optionsOrProcessor?: OptionOrProcessor): Object[];

	interface HumpsOptions {
		separator?: string;
		split?: RegExp;
		process?: HumpsProcessor;
	}
	interface HumpsProcessor {
		(key: string, convert: HumpsProcessorParameter, options?: HumpsOptions): string;
	}
	interface HumpsProcessorParameter {
		(key: string, options?: HumpsOptions): string;
	}
	type OptionOrProcessor = HumpsOptions | HumpsProcessor;
}

declare module "humps" {
	export = humps;
}
