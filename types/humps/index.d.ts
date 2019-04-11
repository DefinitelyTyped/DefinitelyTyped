// Type definitions for humps v1.2.0
// Project: https://github.com/domchristie/humps
// Definitions by: Niklas Mollenhauer <https://github.com/nikeee>
//				   Will Guedes <https://github.com/willbrazil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace humps {

	function camelize(value: string): string;
	function pascalize(value: string): string;
	function decamelize(value: string, optionsOrProcessor?: OptionOrProcessor): string;
	function depascalize(value: string, optionsOrProcessor?: OptionOrProcessor): string;

	function camelizeKeys<T = Object>(str: Object, optionsOrProcessor?: OptionOrProcessor): T;
	function pascalizeKeys<T = Object>(str: Object, optionsOrProcessor?: OptionOrProcessor): T;
	function decamelizeKeys<T = Object>(str: Object, optionsOrProcessor?: OptionOrProcessor): T;
	function depascalizeKeys<T = Object>(str: Object, optionsOrProcessor?: OptionOrProcessor): T;

	function camelizeKeys<T = Object>(str: Object[], optionsOrProcessor?: OptionOrProcessor): T[];
	function pascalizeKeys<T = Object>(str: Object[], optionsOrProcessor?: OptionOrProcessor): T[];
	function decamelizeKeys<T = Object>(str: Object[], optionsOrProcessor?: OptionOrProcessor): T[];
	function depascalizeKeys<T = Object>(str: Object[], optionsOrProcessor?: OptionOrProcessor): T[];

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
