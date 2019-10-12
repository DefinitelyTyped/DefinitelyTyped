// Type definitions for ghauth 3.2
// Project: https://github.com/rvagg/ghauth
// Definitions by: Leko <https://github.com/Leko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function ghauth(authOptions: ghauth.AuthOptions, callback: (err: Error, tokenData: ghauth.TokenData) => void): void;

declare namespace ghauth {
    interface AuthOptions {
        configName: string;

        /**
         * @default false
         */
        noSave?: boolean;

        /**
         * @default "https://api.github.com/authorizations"
         */
        authUrl?: string;

        /**
         * @default "GitHub"
         */
        promptName?: string;

        /**
         * @default []
         */
        scopes?: ReadonlyArray<string>;

        /**
         * @default "Node.js command-line app with ghauth"
         */
        note?: string;

        /**
         * @default "Magic Node.js application that does magic things with ghauth"
         */
        userAgent?: string;
    }

    interface TokenData {
        user: string;
        token: string;
    }
}

export = ghauth;
