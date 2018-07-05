// Type definitions for ISO8601-Localizer v1.2.1
// Project: https://github.com/avielfedida/ISO8601-Localizer
// Definitions by: Aviel Fedida <https://github.com/avielfedida>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface localizer {
	to(offset: number): localizer,
	returnAs(as: string): localizer;
	localize(): string;
}

declare class ISO8601Localizer implements localizer {
	constructor(userISO8601: string);
	to(offset: number): localizer;
	returnAs(as: string): localizer;
	localize(): string;
}

declare module "iso8601-localizer" {
	export = ISO8601Localizer;
}