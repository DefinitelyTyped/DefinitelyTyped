// Type definitions for jsonwebtoken 0.4.0
// Project: https://github.com/auth0/node-jsonwebtoken
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "jsonwebtoken" {

    interface SignOptions {
        /**
         * Signature algorithm. Could be one of these values :
         * - HS256:    HMAC using SHA-256 hash algorithm
         * - HS384:    HMAC using SHA-384 hash algorithm
         * - HS512:    HMAC using SHA-512 hash algorithm
         * - RS256:    RSASSA using SHA-256 hash algorithm
         * - RS384:    RSASSA using SHA-384 hash algorithm
         * - RS512:    RSASSA using SHA-512 hash algorithm
         * - ES256:    ECDSA using P-256 curve and SHA-256 hash algorithm
         * - ES384:    ECDSA using P-384 curve and SHA-384 hash algorithm
         * - ES512:    ECDSA using P-521 curve and SHA-512 hash algorithm
         * - none:     No digital signature or MAC value included
         */
        algorithm?: string;
        /** @member {number} - Lifetime for the token in minutes */
        expiresInMinutes?: number;
        audience?: string;
        subject?: string;
        issuer?: string;
    }

    interface VerifyOptions {
        audience?: string;
        issuer?: string;
    }

    /**
     * Sign the given payload into a JSON Web Token string
     * @param {string|object|buffer} payload - Payload to sign, could be an literal, buffer or string
     * @param {string|buffer} secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
     * @param {SignOptions} options - Options for the signature
     * @returns The JSON Web Token string
     */
    function sign(payload: any, secretOrPrivateKey: any, options?: SignOptions): string;

    /**
     * Verify given token using a secret or a public key to get a decoded token
     * @param {string} token - JWT string to verify
     * @param {string|buffer} secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
     * @param {Function} callback - Callback to get the decoded token on
     */
    function verify(token: string, secretOrPublicKey: any, callback: (err: Error, decoded: {}) => void): void;
    /**
     * Verify given token using a secret or a public key to get a decoded token
     * @param {string} token - JWT string to verify
     * @param {string|buffer} secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
     * @param {VerifyOptions} options - Options for the verification
     * @param {Function} callback - Callback to get the decoded token on
     */
    function verify(token: string, secretOrPublicKey: any, options: VerifyOptions, callback: (err: Error, decoded: {}) => void): void;

    /**
     * Returns the decoded payload without verifying if the signature is valid.
     * @param {string} token - JWT string to decode
     * @returns The decoded Token
     */
    function decode(token: string): {};
}
