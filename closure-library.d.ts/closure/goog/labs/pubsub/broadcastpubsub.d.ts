declare module goog.labs.pubsub {

    /**
     * Topic-based publish/subscribe messaging implementation that provides
     * communication between browsing contexts that share the same origin.
     *
     * Wrapper around PubSub that utilizes localStorage to broadcast publications to
     * all browser windows with the same origin as the publishing context. This
     * allows for topic-based publish/subscribe implementation of strings shared by
     * all browser contexts that share the same origin.
     *
     * Delivery is guaranteed on all browsers except IE8 where topics expire after a
     * timeout. Publishing of a topic within a callback function provides no
     * guarantee on ordering in that there is a possiblilty that separate origin
     * contexts may see topics in a different order.
     *
     * This class is not secure and in certain cases (e.g., a browser crash) data
     * that is published can persist in localStorage indefinitely. Do not use this
     * class to communicate private or confidential information.
     *
     * On IE8, localStorage is shared by the http and https origins. An attacker
     * could possibly leverage this to publish to the secure origin.
     *
     * goog.labs.pubsub.BroadcastPubSub wraps an instance of PubSub rather than
     * subclassing because the base PubSub class allows publishing of arbitrary
     * objects.
     *
     * Special handling is done for the IE8 browsers. See the IE8_EVENTS_KEY_
     * constant and the {@code publish} function for more information.
     *
     *
     * @constructor @struct @extends {goog.Disposable}
     * @suppress {checkStructDictInheritance}
     */
    function BroadcastPubSub(): void;
}
