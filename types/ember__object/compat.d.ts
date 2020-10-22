/**
 * `@dependentKeyCompat` is a decorator that can be used on native getters that
 * use tracked properties. It exposes the getter to Ember's classic computed
 * property and observer systems, so they can watch it for changes. It can be
 * used in both native and classic classes.
 */
export const dependentKeyCompat: PropertyDecorator;
