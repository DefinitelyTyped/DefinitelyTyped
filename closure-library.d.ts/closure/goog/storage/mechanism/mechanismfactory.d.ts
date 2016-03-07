declare module goog {
    function require(name: 'goog.storage.mechanism.mechanismfactory'): typeof goog.storage.mechanism.mechanismfactory;
}

declare module goog.storage.mechanism.mechanismfactory {

    /**
     * The key to shared userData storage.
     * @type {string}
     */
    var USER_DATA_SHARED_KEY: string;

    /**
     * Returns the best local storage mechanism, or null if unavailable.
     * Local storage means that the database is placed on user's computer.
     * The key-value database is normally shared between all the code paths
     * that request it, so using an optional namespace is recommended. This
     * provides separation and makes key collisions unlikely.
     *
     * @param {string=} opt_namespace Restricts the visibility to given namespace.
     * @return {goog.storage.mechanism.IterableMechanism} Created mechanism or null.
     */
    function create(opt_namespace?: string): goog.storage.mechanism.IterableMechanism;

    /**
     * Returns an HTML5 local storage mechanism, or null if unavailable.
     * Since the HTML5 local storage does not support namespaces natively,
     * and the key-value database is shared between all the code paths
     * that request it, it is recommended that an optional namespace is
     * used to provide key separation employing a prefix.
     *
     * @param {string=} opt_namespace Restricts the visibility to given namespace.
     * @return {goog.storage.mechanism.IterableMechanism} Created mechanism or null.
     */
    function createHTML5LocalStorage(opt_namespace?: string): goog.storage.mechanism.IterableMechanism;

    /**
     * Returns an HTML5 session storage mechanism, or null if unavailable.
     * Since the HTML5 session storage does not support namespaces natively,
     * and the key-value database is shared between all the code paths
     * that request it, it is recommended that an optional namespace is
     * used to provide key separation employing a prefix.
     *
     * @param {string=} opt_namespace Restricts the visibility to given namespace.
     * @return {goog.storage.mechanism.IterableMechanism} Created mechanism or null.
     */
    function createHTML5SessionStorage(opt_namespace?: string): goog.storage.mechanism.IterableMechanism;

    /**
     * Returns an IE userData local storage mechanism, or null if unavailable.
     * Using an optional namespace is recommended to provide separation and
     * avoid key collisions.
     *
     * @param {string=} opt_namespace Restricts the visibility to given namespace.
     * @return {goog.storage.mechanism.IterableMechanism} Created mechanism or null.
     */
    function createIEUserData(opt_namespace?: string): goog.storage.mechanism.IterableMechanism;
}
