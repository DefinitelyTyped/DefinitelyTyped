/**
 * Decodes a string token into the 3 parts, throws if the format is invalid
 * @param token
 */
export interface DecodedToken {
    _raw: string;
    header: any;
    payload: any;
    signature: string;
}

export function decode(
    token: string,
): DecodedToken;

export interface ValidateOptions {
    audience: string | ReadonlyArray<string>;
    issuer: string;
    leeway?: number | undefined;
    maxAge?: number | undefined;
    nonce?: string | undefined;
}
/**
 * Validator for ID Tokens following OIDC spec.
 * @param token the string token to verify
 * @param options the options required to run this verification
 * @returns The decoded token payload, or throws an exception if validation failed
 */
export function validate(token: string, options?: ValidateOptions): DecodedToken;
