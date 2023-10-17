declare function ghauth(
    authOptions: ghauth.AuthOptions,
    callback: (err: Error, tokenData: ghauth.TokenData) => void,
): void;

declare namespace ghauth {
    interface AuthOptions {
        configName: string;

        /**
         * @default false
         */
        noSave?: boolean | undefined;

        /**
         * @default "https://api.github.com/authorizations"
         */
        authUrl?: string | undefined;

        /**
         * @default "GitHub"
         */
        promptName?: string | undefined;

        /**
         * @default []
         */
        scopes?: ReadonlyArray<string> | undefined;

        /**
         * @default "Node.js command-line app with ghauth"
         */
        note?: string | undefined;

        /**
         * @default "Magic Node.js application that does magic things with ghauth"
         */
        userAgent?: string | undefined;
    }

    interface TokenData {
        user: string;
        token: string;
    }
}

export = ghauth;
