// Type definitions for b_ 1.3
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
    /**
     * Token generation/verification class.
     *
     * @param {object} [options]
     * @param {number} [options.saltLength=8] The string length of the salt
     * @param {number} [options.secretLength=18] The byte length of the secret key
     * @public
     */
    constructor(options?: TokensOptions)

    /**
     * Create a new CSRF token.
     *
     * @param {string} secret The secret for the token.
     * @public
     */
    create(secret: string): string;

    /**
     * Create a new secret key.
     *
     * @param {function} [callback]
     * @public
     */
    secret(callback?: SecretCallback): Promise<string>;

    /**
     * Create a new secret key synchronously.
     * @public
     */
    secretSync(): string;

    /**
     * Verify if a given token is valid for a given secret.
     *
     * @param {string} secret
     * @param {string} token
     * @public
     */
    verify(secret: string, token: string): boolean;
}

export = Tokens;
