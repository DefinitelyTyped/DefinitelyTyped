// Type definitions for pascal-case
// Project: https://github.com/blakeembrey/pascal-case
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "pascal-case" {
	function pascalCase(string: string, locale?: string): string;
	export = pascalCase;
}
