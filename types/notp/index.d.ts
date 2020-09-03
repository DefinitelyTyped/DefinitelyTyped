// Type definitions for notp 2.0
// Project: https://github.com/guyht/notp
// Definitions by: Wilfred Tan <https://github.com/wilfredtan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * counter?: number
 */
export interface HOTPGenOpt {
    /**
     * Counter value used in generating the token. This should be stored by the
     * application, must be user specific, and be incremented for each request.
     */
    counter?: number;
}

/**
 * counter?: number
 * window?: number
 */
export interface HOTPVerifyOpt extends HOTPGenOpt {
    /**
     * The allowable margin for the counter. The function will check 'W' codes in
     * the future against the provided passcode. Note, it is the calling
     * applications responsibility to keep track of 'W' and increment it for each
     * password check, and also to adjust it accordingly in the case where the
     * client and server become out of sync (second argument returns non zero).
     *
     * E.g. if W = 100, and C = 5, this function will check the passcode against
     * all One Time Passcodes between 5 and 105.
     *
     * Default - 50
     */
    window?: number;
}

/**
 * _t?: number
 * time?: number
 */
export interface TOTPGenOpt {
    /**
     * UNIX Epoch time (overwrite time in test environment, NODE_ENV=test)
     */
    _t?: number;

    /**
     * The time step of the counter. This must be the same for every request and is
     * used to calculat C.
     *
     * Default - 30
     */
    time?: number;
}

/**
 * _t?: number
 * time?: number
 * window?: number
 */
export interface TOTPVerifyOpt extends TOTPGenOpt {
    /**
     * The allowable margin for the counter. The function will check 'W' codes in
     * the future against the provided passcode. Note, it is the calling
     * applications responsibility to keep track of 'W' and increment it for each
     * password check, and also to adjust it accordingly in the case where the
     * client and server become out of sync (second argument returns non zero).
     *
     * E.g. if W = 100, and C = 5, this function will check the passcode against
     * all One Time Passcodes between 5 and 105.
     *
     * Default - 50
     */
    window?: number;
}

/**
 * delta: number
 */
export interface VerifyResult {
    /**
     * Time step difference between the client and the server.
     */
    delta: number;
}

/**
 * hotp.gen(key: string | Buffer | Uint8Array, opt?: HOTPGenerateOptions): string
 * hotp.verify(token: string, key: string | Buffer | Uint8Array, opt?: HOTPVerifyOptions): VerifyResult | null
 */
export namespace hotp {
    /**
     * Generate a counter based One Time Password.
     * @param key Key for the one time password. This should be unique and secret
     * for every user as this is the seed that is used to calculate the HMAC.
     * @param opt HOTP generate options.
     */
    function gen(key: string | Buffer | Uint8Array, opt?: HOTPGenOpt): string;

    /**
     * Check a One Time Password based on a counter.
     * @param token Passcode to validate.
     * @param key Key for the one time password. This should be unique and secret for
     * every user as it is the seed used to calculate the HMAC.
     * @param opt HOTP verify options.
     */
     function verify(token: string,
                     key: string | Buffer | Uint8Array,
                     opt?: HOTPVerifyOpt): VerifyResult | null;
}

/**
 * totp.gen(key: string | Buffer | Uint8Array, opt?: TOTPOptions): string
 * totp.verify(token: string, key: string | Buffer | Uint8Array, opt?: TOTPOptions): VerifyResult | null
 */
export namespace totp {
    /**
     * Generate a time based One Time Password.
     * @param key Key for the one time password. This should be unique and secret
     * for every user as it is the seed used to calculate the HMAC.
     * @param opt TOTP Generate options.
     *
     */
    function gen(key: string | Buffer | Uint8Array, opt?: TOTPGenOpt): string;

    /**
     * Check a One Time Password based on a timer.
     * @param token Passcode to validate.
     * @param key Key for the one time password. This should be unique and secret
     * @param opt TOTP verify options.
     *
     */
    function verify(token: string,
                    key: string | Buffer | Uint8Array,
                    opt?: TOTPVerifyOpt): VerifyResult | null;
}
