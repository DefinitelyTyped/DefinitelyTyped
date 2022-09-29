// Type definitions for anime-quotes-api 1.2
// Project: https://github.com/anjannair/anime-quotes-api
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Quote {
	constructor();

	quotes(): Promise<object[]>;
}

export = Quote;
