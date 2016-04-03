declare module goog {
    function require(name: 'goog.storage.EncryptedStorage'): typeof goog.storage.EncryptedStorage;
}

declare module goog.storage {

    /**
     * Provides an encrypted storage. The keys are hashed with a secret, so
     * their existence cannot be verified without the knowledge of the secret.
     * The values are encrypted using the key, a salt, and the secret, so
     * stream cipher initialization varies for each stored value.
     *
     * @param {!goog.storage.mechanism.IterableMechanism} mechanism The underlying
     *     storage mechanism.
     * @param {string} secret The secret key used to encrypt the storage.
     * @constructor
     * @extends {goog.storage.CollectableStorage}
     * @final
     */
    class EncryptedStorage extends goog.storage.CollectableStorage {
        constructor(mechanism: goog.storage.mechanism.IterableMechanism, secret: string);
        
        /**
         * Metadata key under which the salt is stored.
         *
         * @type {string}
         * @protected
         */
        static SALT_KEY: string;
    }
}
