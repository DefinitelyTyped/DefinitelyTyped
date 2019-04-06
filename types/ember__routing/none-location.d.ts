import EmberObject from "@ember/object";

/**
 * Ember.NoneLocation does not interact with the browser. It is useful for
 * testing, or when you need to manage state with your Router, but temporarily
 * don't want it to muck with the URL (for example when you embed your
 * application in a larger page).
 */
export default class NoneLocation extends EmberObject {}
