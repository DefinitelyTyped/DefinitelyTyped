// Type definitions for something-random-on-discord 0.0
// Project: https://github.com/CTK-WARRIOR/something-random-on-discord#readme
// Definitions by: 1chiSensei <https://github.com/1chiSensei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Random {
    constructor();

    getMeme(): Promise<object>;
    getJoke(): Promise<object>;
    getString(): Promise<string>;
    getNeko(): Promise<object>;
    getKpop(): Promise<object>;
    getAnimeImgURL(action: string): Promise<string>;
    getAdvice(): Promise<object>;
}
