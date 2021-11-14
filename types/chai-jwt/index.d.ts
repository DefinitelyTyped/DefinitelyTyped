// Type definitions for chai-jwt 2.0
// Project: https://github.com/dafortune/chai-jwt#readme
// Definitions by: Anatoly Pitikin <https://github.com/xapdkop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion {
            /**
             * Asserts that the provided string has a valid format that can be parsed as JWT.
             * _Does not check signature or the provided fields._
             * If succeed, it changes the context to the decoded token.
             */
            jwt: Assertion;

            /**
             * Asserts that the provided token is signed with the provided secret.
             * @param secret - A string or buffer containing either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA
             */
            signedWith(secret: string | Buffer): Assertion;

            /**
             * Alias of `.property` for JWTs.
             * Asserts that the provided token has a given claim.
             * If value is provided it will also assert the claim value using strict equality.
             */
            claim: Property;
        }
    }
}

/**
 * A set of helpers for chai that allow you to make assertions on json web tokens.
 * @example
 * import chai = require('chai');
 * import chaiJWT = require('chai-jwt');
 *
 * chai.use(chaiJWT);
 */
declare const chaiJWT: Chai.ChaiPlugin;

export = chaiJWT;
