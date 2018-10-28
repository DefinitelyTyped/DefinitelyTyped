import EmberObject from "@ember/object";

/**
 * `Ember.ObjectProxy` forwards all properties not defined by the proxy itself
 * to a proxied `content` object.
 */
export default class ObjectProxy extends EmberObject {
    /**
     * The object whose properties will be forwarded.
     */
    content: object;
}
