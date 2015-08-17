// Type definitions for ISO8601-Localizer v1.0.5
// Project: https://github.com/avielfedida/ISO8601-Localizer
// Definitions by: Aviel Fedida <https://github.com/avielfedida/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface localizer {
	to(offset: number): localizer,
	localize(): string;
}

declare class ISO8601Localizer implements localizer {
	constructor(userISO8601: string);
	to(offset: number): localizer;
	localize(): string;
}
