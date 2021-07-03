/**
 * Decodes a string token into the 3 parts, throws if the format is invalid
 * @param token
 */
export function decode(
    token: string,
): {
    _raw: string;
    header: any;
    payload: any;
    signature: string;
};

export interface ValidateOptions {
    audience: string | ReadonlyArray<string>;
    issuer: string;
    leeway?: number;
    maxAge?: number;
    nonce?: string;
}
/**
 * Validator for ID Tokens following OIDC spec.
 * @param token the string token to verify
 * @param options the options required to run this verification
 * @returns A promise containing the decoded token payload, or throws an exception if validation failed
 */
export function validate(token: string, options?: ValidateOptions): Promise<string>;
