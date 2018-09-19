import Ember from 'ember';
/**
 * Ember.Object.extend(...) accepts any number of mixins or literals.
 */
declare type MixinOrLiteral<T, Base> = Ember.Mixin<T, Base> | T;
