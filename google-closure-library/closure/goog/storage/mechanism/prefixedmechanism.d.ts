declare module goog {
    function require(name: 'goog.storage.mechanism.PrefixedMechanism'): typeof goog.storage.mechanism.PrefixedMechanism;
}

declare module goog.storage.mechanism {

    /**
     * Wraps an iterable storage mechanism and creates artificial namespaces.
     *
     * @param {!goog.storage.mechanism.IterableMechanism} mechanism Underlying
     *     iterable storage mechanism.
     * @param {string} prefix Prefix for creating an artificial namespace.
     * @constructor
     * @extends {goog.storage.mechanism.IterableMechanism}
     * @final
     */
    class PrefixedMechanism extends goog.storage.mechanism.IterableMechanism {
        constructor(mechanism: goog.storage.mechanism.IterableMechanism, prefix: string);
    }
}
