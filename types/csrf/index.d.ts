// Type definitions for csrf 1.3
// Project: https://github.com/pillarjs/csrf
// Definitions by: Markis Taylor <https://github.com/markis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type SecretCallback = (err: Error | null, secret: string) => void;

interface TokensOptions {
    /**
     * The string length of the salt (default: 8)
     */
    saltLength: number;
    /**
     * The byte length of the secret key (default: 18)
     */
    secretLength: number;
}

declare class Tokens {
    /** Token generation/verification class. */
    constructor(options?: TokensOptions)

    /**
     * Create a new CSRF token.
     *
     * @param secret The secret for the token.
     */
    create(secret: string): string;

    /** Create a new secret key. */
    secret(callback?: SecretCallback): Promise<string>;

    /**
     * Create a new secret key synchronously.
     */
    secretSync(): string;

    /**
     * Verify if a given token is valid for a given secret.
     *
     */
    verify(secret: string, token: string): boolean;
}

export = Tokens;
