// Type definitions for anime-quotes-api 1.2
// Project: https://github.com/anjannair/anime-quotes-api
// Definitions by: 1chiSensei <https://github.com/1chiSensei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Quote {
	constructor();

	quotes(): Promise<object[]>;
}

export = Quote;
