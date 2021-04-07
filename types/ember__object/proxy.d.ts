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
export default class ObjectProxy<T extends object | null = object> extends EmberObject {
    /**
     * The object whose properties will be forwarded.
     */
    content: T | undefined;

    get<K extends keyof this>(key: K): UnwrapComputedPropertyGetter<this[K]>;
    get<K extends keyof NonNullable<T>>(key: K): UnwrapComputedPropertyGetter<NonNullable<T>[K]> | undefined;

    getProperties<K extends keyof this>(
        list: K[]
    ): Pick<UnwrapComputedPropertyGetters<this>, K>;
    getProperties<K extends keyof this>(
        ...list: K[]
    ): Pick<UnwrapComputedPropertyGetters<this>, K>;
    getProperties<K extends keyof NonNullable<T>>(
        list: K[]
    ): Pick<Partial<UnwrapComputedPropertyGetters<NonNullable<T>>>, K>;
    getProperties<K extends keyof NonNullable<T>>(
        ...list: K[]
    ): Pick<Partial<UnwrapComputedPropertyGetters<NonNullable<T>>>, K>;

    set<K extends keyof this>(key: K, value: UnwrapComputedPropertySetters<this>[K]): UnwrapComputedPropertySetters<this>[K];
    set<K extends keyof NonNullable<T>>(key: K, value: UnwrapComputedPropertySetters<NonNullable<T>>[K]): UnwrapComputedPropertySetters<NonNullable<T>>[K];

    setProperties<K extends (keyof this | keyof NonNullable<T>)>(
        hash: Pick<UnwrapComputedPropertySetters<this & NonNullable<T>>, K>
    ): Pick<UnwrapComputedPropertySetters<this & NonNullable<T>>, K>;
}
