// Type definitions for tz-format
// Project: https://github.com/SamVerschueren/tz-format
// Definitions by: Sam Verschueren <https://github.com/samverschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "tz-format" {
	function format(date?: Date | number, offset?: number): string;
	namespace format { }
	export = format;
}
