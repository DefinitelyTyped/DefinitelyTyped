// Type definitions for knockout.punches 0.5.1
// Project: https://github.com/mbest/knockout.punches
// Definitions by: Stephen Lautier <https://github.com/johnnyreilly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="knockout" />

interface KnockoutPunchesStatic {
	enableAll(): void;
}

interface KnockoutPunchesFilters {
	// Convert the value to uppercase.
	uppercase(value: string): string;

	// Convert the value to lowercase.
	lowercase(value: string): string;

	// Perform a search and replace on the value using String#replace.
	replace(value: string, search: string, replace: string): string;

	// Trim the value if it’s longer than the given length. The trimmed portion is
	// replaced with ... or the replacement value, if given. By default, the value
	// is trimmed on the right but can be changed to left or middle through the
	// where option. For example: name | fit:10::'middle' will
	// convert Shakespeare to Shak...are.
	fit(value: number | string, length?: number, replacement?: string, trimWhere?: string): string;

	// Convert the value to a JSON string using ko.toJSON. You can give a space value to format the JSON output.
	json(rootObject: any, space?: any, replacer?: any): string;

	// Format the value using toLocaleString.
	number(value: number | string): string;

	// If the value is blank, null, or an empty array, replace it with the given default value
	default(value: any, defaultValue?: any): any;
}

interface KnockoutStatic {
	punches: KnockoutPunchesStatic;
	filters: KnockoutPunchesFilters;
}

declare module "knockout.punches" {
	export = punches;
}

declare var punches: KnockoutPunchesStatic;