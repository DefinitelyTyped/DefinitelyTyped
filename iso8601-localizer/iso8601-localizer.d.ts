// Type definitions for ISO8601-Localizer v1.2.1
// Project: https://github.com/avielfedida/ISO8601-Localizer
// Definitions by: Aviel Fedida <https://github.com/avielfedida/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface localizer {
	to(offset: number): localizer,
	returnAs(as: string): localizer;
	localize(): string;
}


declare module "iso8601-localizer" {

	class ISO8601Localizer implements localizer {
		constructor(userISO8601: string);
		to(offset: number): localizer;
		returnAs(as: string): localizer;
		localize(): string;
	}
	
	export = ISO8601Localizer;
}
