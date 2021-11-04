import EmberObject from "@ember/object";
import {
    UnwrapComputedPropertyGetter,
    UnwrapComputedPropertyGetters,
    UnwrapComputedPropertySetters,
} from "@ember/object/-private/types";

/**
 * `Ember.ObjectProxy` forwards all properties not defined by the proxy itself
 * to a proxied `content` object.
 */
export default class ObjectProxy<T extends object = object> extends EmberObject {
    /**
     * The object whose properties will be forwarded.
     */
    content: T | undefined;

    get<K extends keyof this>(key: K): UnwrapComputedPropertyGetter<this[K]>;
    get<K extends keyof T>(key: K): UnwrapComputedPropertyGetter<T[K]> | undefined;

    getProperties<K extends keyof this>(
        list: K[]
    ): Pick<UnwrapComputedPropertyGetters<this>, K>;
    getProperties<K extends keyof this>(
        ...list: K[]
    ): Pick<UnwrapComputedPropertyGetters<this>, K>;
    getProperties<K extends keyof T>(
        list: K[]
    ): Pick<Partial<UnwrapComputedPropertyGetters<T>>, K>;
    getProperties<K extends keyof T>(
        ...list: K[]
    ): Pick<Partial<UnwrapComputedPropertyGetters<T>>, K>;

    set<K extends keyof this>(key: K, value: UnwrapComputedPropertySetters<this>[K]): UnwrapComputedPropertySetters<this>[K];
    set<K extends keyof T>(key: K, value: UnwrapComputedPropertySetters<T>[K]): UnwrapComputedPropertySetters<T>[K];

    setProperties<K extends (keyof this | keyof T)>(
        hash: Pick<UnwrapComputedPropertySetters<this & T>, K>
    ): Pick<UnwrapComputedPropertySetters<this & T>, K>;
}
