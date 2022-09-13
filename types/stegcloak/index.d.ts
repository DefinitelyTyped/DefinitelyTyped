// Type definitions for stemmer 1.0
// Project: https://github.com/KuroLabs/stegcloak
// Definitions by: Will Ockmore <https://github.com/ktjd123>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class StegCloak {
    constructor(encryption: boolean, hmac: boolean);

    hide(secret: string, password: string, cover: string): string;

    reveal(data: string, password: string): string;
}

export = StegCloak;
