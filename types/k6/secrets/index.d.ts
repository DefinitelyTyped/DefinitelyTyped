/**
 *  This module provides a way to access secrets provided by secret sources
 */

declare abstract class SecretSource {
    /**
     * get a secret from the default secret source if such is setup
     *
     * @param key - the key for the secret
     * @returns a promise that will resolve to a string.
     */
    get(key: string): Promise<string>;
}

/**
 * get a secret from the default secret source if such is setup
 *
 * @param key - the key for the secret
 * @returns a promise that will resolve to a string.
 */
declare function get(key: string): Promise<string>;

/**
 * returns a secret source for the provided name
 *
 * @param name - the name the secret source set with
 * @returns a source with the name.
 */
declare function source(name: string): SecretSource;

declare const _default: {
    "get": typeof get;
    "source": typeof source;
};

export default _default;
